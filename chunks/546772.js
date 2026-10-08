l.d(t, { gG: () => b, j_: () => w, EG: () => j, HJ: () => k, AV: () => N, KK: () => A, ZL: () => y });
var n = l(582128),
    a = l(158390),
    r = l(73153),
    i = l(643210);
(l(393431), l(532706), l(42231), l(232424), l(949626), l(767709), l(65162), l(323874), l(14289), l(35956));
var s = l(382541);
let o = new Set([401, 403, 404]);
class u {
    options;
    socket = null;
    stopped = !1;
    constructor(e) {
        this.options = e;
    }
    open() {
        this.connect().catch((e) => {
            if (this.stopped) return;
            let t = e?.status;
            this.options.onClosed("number" == typeof t && o.has(t) ? 4403 : 0);
        });
    }
    async connect() {
        let { projectId: e, sessionId: t, mode: l, maxFps: n, width: a } = this.options,
            { ticket: r, baseUrl: i } = await (0, s.d)(e);
        if (this.stopped) return;
        let o = new URL(`/agent/browser-stream/${encodeURIComponent(t)}`, i.replace(/^http/, "ws"));
        (o.searchParams.set("ticket", r),
            o.searchParams.set("mode", l),
            o.searchParams.set("maxFps", String(n)),
            a > 0 && o.searchParams.set("width", String(a)));
        let u = new WebSocket(o.toString());
        ((u.binaryType = "arraybuffer"),
            (this.socket = u),
            (u.onmessage = (e) => {
                this.handleMessage(u, e).catch(() => u.close());
            }),
            (u.onclose = (e) => {
                this.socket === u && this.options.onClosed(e.code);
            }));
    }
    send(e) {
        "control" === this.options.mode &&
            this.socket?.readyState === WebSocket.OPEN &&
            this.socket.send(JSON.stringify(e));
    }
    close() {
        ((this.stopped = !0), this.socket?.close(), (this.socket = null));
    }
    async handleMessage(e, t) {
        if ("string" == typeof t.data) {
            let e = JSON.parse(t.data);
            e?.type === "mode" && ("control" === e.mode || "view" === e.mode) && this.options.onMode(e.mode);
            return;
        }
        let l =
            t.data instanceof ArrayBuffer
                ? (function (e) {
                      if (e.byteLength <= 9) return null;
                      let t = new DataView(e);
                      return 1 !== t.getUint8(0)
                          ? null
                          : {
                                seq: t.getUint32(1),
                                jpeg: new Uint8Array(e, 9),
                                deviceWidth: t.getUint16(5),
                                deviceHeight: t.getUint16(7),
                            };
                  })(t.data)
                : null;
        if (null != l)
            try {
                await this.options.onFrame(l);
            } catch {}
        this.socket === e &&
            e.readyState === WebSocket.OPEN &&
            e.send(JSON.stringify(null == l ? { type: "ack" } : { type: "ack", seq: l.seq }));
    }
}
let c = new Set(),
    d = new Map();
function f(e, t) {
    let l = `${e}:${t}`,
        n = d.get(l);
    if (null == n) {
        let r = {
            projectId: e,
            sessionId: t,
            startedAt: g(e, t),
            subscribers: new Set(),
            socket: null,
            socketKey: null,
            control: !1,
            controlState: "off",
            controlListeners: new Set(),
            restarts: 0,
            restartListeners: new Set(),
            lastFrame: null,
            state: "connecting",
            stateListeners: new Set(),
            backoff: new a.A(500, 8e3),
            retry: () => {
                ((r.socketKey = null), p(r));
            },
        };
        ((n = r), d.set(l, n));
    }
    return n;
}
function m(e, t) {
    if (e.state !== t) for (let l of ((e.state = t), e.stateListeners)) l();
}
function h(e, t) {
    if (e.controlState !== t) for (let l of ((e.controlState = t), e.controlListeners)) l(t);
}
function g(e, t) {
    return i.A.getSessions(e).find((e) => e.id === t)?.started_at ?? null;
}
function x(e) {
    (e.backoff.cancel(),
        e.socket?.close(),
        (e.socket = null),
        (e.socketKey = null),
        "granted" === e.controlState && h(e, e.control ? "pending" : "off"));
}
function p(e) {
    if (0 === e.subscribers.size || null == e.startedAt || c.has(e.projectId)) {
        (x(e), m(e, "connecting"));
        return;
    }
    let t = [...e.subscribers],
        l = Math.max(...t.map((e) => e.fps)),
        n = t.some((e) => 0 === e.width) ? 0 : Math.max(...t.map((e) => e.width)),
        a = e.control ? "control" : "view",
        r = `${a}:${l}:${n}`;
    if (e.socketKey === r && (null != e.socket || e.backoff.pending)) return;
    (x(e), (e.socketKey = r));
    let i = new u({
        projectId: e.projectId,
        sessionId: e.sessionId,
        mode: a,
        maxFps: l,
        width: n,
        onFrame: async (t) => {
            e.socket === i &&
                ((e.lastFrame = t),
                e.backoff.succeed(),
                m(e, "live"),
                await Promise.allSettled([...e.subscribers].map((e) => e.onFrame(t))));
        },
        onMode: (t) => {
            e.socket === i &&
                e.control &&
                ("control" === t ? h(e, "granted") : ((e.control = !1), h(e, "denied"), p(e)));
        },
        onClosed: (t) => {
            if (e.socket !== i) return;
            if ((x(e), 4403 === t))
                return void (function (e) {
                    for (let t of (c.add(e), d.values())) t.projectId === e && (x(t), v(t), m(t, "connecting"));
                })(e.projectId);
            let l = 4409 === t && e.control;
            (l && ((e.control = !1), e.backoff.succeed(), h(e, "denied")),
                m(e, "connecting"),
                0 !== e.subscribers.size && null != e.startedAt && (l || (e.socketKey = r), e.backoff.fail(e.retry)));
        },
    });
    ((e.socket = i), i.open());
}
function v(e) {
    ((e.control = !1), h(e, "off"));
}
function j(e, t, l) {
    let n = f(e, t),
        a = l && null != n.startedAt;
    n.control !== a && ((n.control = a), a ? h(n, "pending") : "denied" !== n.controlState && h(n, "off"), p(n));
}
function b(e, t) {
    let l = d.get(`${e}:${t}`);
    null == l || l.control || "denied" !== l.controlState || h(l, "off");
}
function y(e, t, l) {
    let n = d.get(`${e}:${t}`);
    n?.controlState === "granted" && n.socket?.send(l);
}
function k(e, t) {
    let l = n.useCallback(
        (l) => {
            let n = f(e, t);
            return (
                n.controlListeners.add(l),
                () => {
                    n.controlListeners.delete(l);
                }
            );
        },
        [e, t],
    );
    return n.useSyncExternalStore(l, () => d.get(`${e}:${t}`)?.controlState ?? "off");
}
function w(e, t, l) {
    return d.get(`${e}:${t}`)?.lastFrame === l;
}
function N(e, t) {
    let [l, a] = n.useState(() => d.get(`${e}:${t}`)?.restarts ?? 0);
    return (
        n.useEffect(() => {
            let l = f(e, t);
            return (
                l.restartListeners.add(a),
                () => {
                    l.restartListeners.delete(a);
                }
            );
        }, [e, t]),
        l
    );
}
function A(e, t, l) {
    let { fps: a, onFrame: r, enabled: i = !0, width: s = 0 } = l,
        o = n.useCallback(
            (l) => {
                let n = f(e, t);
                return (
                    n.stateListeners.add(l),
                    () => {
                        n.stateListeners.delete(l);
                    }
                );
            },
            [e, t],
        ),
        u = n.useSyncExternalStore(o, () => d.get(`${e}:${t}`)?.state ?? "connecting");
    return (
        n.useEffect(() => {
            let l = f(e, t);
            if ((null != l.lastFrame && Promise.resolve(r(l.lastFrame)).catch(() => void 0), !i)) return;
            let n = { fps: a, width: s, onFrame: r };
            return (
                l.subscribers.add(n),
                p(l),
                () => {
                    (l.subscribers.delete(n), p(l));
                }
            );
        }, [e, t, a, r, i, s]),
        u
    );
}
(i.A.addChangeListener(function () {
    for (let e of d.values()) {
        let t = g(e.projectId, e.sessionId);
        if (t !== e.startedAt) {
            if (((e.startedAt = t), x(e), null == t)) {
                v(e);
                continue;
            }
            for (let t of ((e.lastFrame = null), (e.restarts += 1), e.restartListeners)) t(e.restarts);
            (e.backoff.succeed(), h(e, e.control ? "pending" : "off"), m(e, "connecting"), p(e));
        }
    }
}),
    r.h.subscribe("CONJURE_BROWSER_SESSIONS_SET", function (e) {
        let { projectId: t } = e;
        if (c.delete(t)) for (let e of d.values()) e.projectId === t && (e.backoff.succeed(), p(e));
    }));
