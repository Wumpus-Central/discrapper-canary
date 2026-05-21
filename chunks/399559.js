t.r(s), t.d(s, { default: () => v });
var n = t(627968),
    a = t(64700),
    l = t(979186);
t(321073);
var i = t(17928),
    r = t(229659),
    c = t(287809),
    u = t(723702),
    d = t(321034),
    o = t(832213),
    h = t(19575),
    m = t(938800);
let p = [],
    x = [o.M.Renderer, o.M.Main, o.M.GPU, o.M.Utility, o.M.Crashpad, o.M.Unknown];
class f {
    storage;
    head = 0;
    count = 0;
    capacity;
    constructor(e) {
        (this.capacity = e), (this.storage = Array(e));
    }
    push(e, s) {
        (this.storage[this.head] = { value: e, time: s }),
            (this.head = (this.head + 1) % this.capacity),
            this.count < this.capacity && this.count++;
    }
    at(e) {
        if (!(e < 0) && !(e >= this.count))
            return this.count < this.capacity ? this.storage[e] : this.storage[(this.head + e) % this.capacity];
    }
    get length() {
        return this.count;
    }
}
function j(e) {
    return `${e.toFixed(1)}%`;
}
function N(e) {
    return (e.wss_priv_kb ?? e.wss_kb ?? 0) / 1024;
}
function g(e) {
    let { title: s, value: t, points: l, children: i } = e,
        c = a.useRef(null),
        [u, d] = a.useState(320);
    return (
        a.useEffect(() => {
            let e = c.current;
            if (null == e) return;
            let s = null,
                t = 0,
                n = new ResizeObserver((e) => {
                    let [n] = e,
                        a = Math.max(80, Math.min(4096, Math.floor(n.contentRect.width)));
                    a === t ||
                        ((t = a),
                        null == s &&
                            (s = requestAnimationFrame(() => {
                                (s = null), d(t);
                            })));
                });
            return (
                n.observe(e),
                () => {
                    null != s && cancelAnimationFrame(s), n.disconnect();
                }
            );
        }, []),
        (0, n.jsxs)("div", {
            ref: c,
            className: m.uW,
            children: [
                (0, n.jsxs)("div", {
                    className: m.wx,
                    children: [
                        (0, n.jsx)("span", { className: m.DD, children: s }),
                        (0, n.jsx)("span", { className: m.Uq, children: t }),
                    ],
                }),
                (0, n.jsx)(r.A, { dataPoints: l, width: u, height: 80, windowMs: 12e4 }),
                i,
            ],
        })
    );
}
function w() {
    let e = (0, i.bG)([c.default], () => c.default.getCurrentUser()?.isStaff() ?? !1),
        [s, t] = a.useState([]),
        [l, o] = a.useState(null),
        [w, v] = a.useState(null),
        [M, y] = a.useState(null),
        [b, A] = a.useState([]),
        _ = a.useRef(null),
        [P, U] = a.useState(320),
        [k] = a.useState(() => new f(120)),
        [S] = a.useState(() => []),
        [C] = a.useState(() => new Map());
    if (
        (a.useEffect(() => {
            let e = _.current;
            if (null == e) return;
            let s = null,
                t = 0,
                n = new ResizeObserver((e) => {
                    let [n] = e,
                        a = Math.max(320, Math.min(4096, Math.floor(n.contentRect.width)));
                    a === t ||
                        ((t = a),
                        null == s &&
                            (s = requestAnimationFrame(() => {
                                (s = null), U(t);
                            })));
                });
            return (
                n.observe(e),
                () => {
                    null != s && cancelAnimationFrame(s), n.disconnect();
                }
            );
        }, []),
        a.useEffect(() => {
            let e = !1,
                s = window.DiscordNative?.gcEvents?.addGCListener?.((s) => {
                    let { timestamp: t, kind: n } = s;
                    e || A((e) => [...e.filter((e) => e.time > t - 12e4), { time: t, kind: n }]);
                });
            return (
                !(function s() {
                    if (e) return;
                    let n = Date.now();
                    if ((0, u.isWindows)() && u.isPlatformEmbedded) {
                        let s = window.DiscordNative?.process?.pid;
                        if (null != s && !isNaN(s)) {
                            let n = performance.now();
                            h.Ay.GetSystemGpuStats(s)
                                .then((s) => {
                                    if (e) return;
                                    o(performance.now() - n), t(s);
                                    let a = Date.now();
                                    s.forEach((e, s) => {
                                        let t = S[s];
                                        null == t && ((t = { gpu: new f(120), vram: new f(120) }), (S[s] = t)),
                                            t.gpu.push(e.utilization_percent, a),
                                            t.vram.push(e.memory_bytes / 1048576, a);
                                    }),
                                        S.length > s.length && (S.length = s.length);
                                })
                                .catch(() => {});
                        }
                    }
                    let a = performance.now(),
                        l = d.A.getCurrentCPUUsagePercent() ?? 0;
                    v(performance.now() - a);
                    let i = performance.now(),
                        r = d.A.getMemoryUsageElectronProcessTypeDetails();
                    if ((y(performance.now() - i), k.push(l, n), null != r))
                        for (let e of Object.keys(r)) {
                            let s = r[e];
                            if (null == s) continue;
                            let t = C.get(e);
                            null == t && ((t = new f(120)), C.set(e, t)), t.push(N(s), n);
                        }
                    setTimeout(s, 1e3);
                })(),
                () => {
                    (e = !0), s?.();
                }
            );
        }, [k, S, C]),
        !e)
    )
        return null;
    let D = d.A.getCurrentCPUUsagePercent() ?? 0,
        F = d.A.getMemoryUsageElectronProcessTypeDetails() ?? {},
        E = x.reduce((e, s) => {
            let t = F[s];
            return null != t ? e + N(t) : e;
        }, 0);
    function $(e) {
        return null != e ? `${e.toFixed(1)}ms` : "";
    }
    function G(e) {
        return 2 === e
            ? "rgba(237, 66, 69, 0.9)"
            : 4 === e
              ? "rgba(59, 165, 93, 0.9)"
              : 8 === e
                ? "rgba(150, 150, 150, 0.6)"
                : "rgba(250, 168, 26, 0.75)";
    }
    let R = b.map((e) => ({ time: e.time, color: G(e.kind) }));
    return (0, n.jsxs)("div", {
        className: m.kL,
        children: [
            (0, n.jsx)("h1", { className: m.W, children: "Performance" }),
            (0, u.isWindows)() &&
                u.isPlatformEmbedded &&
                s.length > 0 &&
                (0, n.jsxs)("div", {
                    className: m.yT,
                    children: [
                        (0, n.jsxs)("div", {
                            className: m.x_,
                            children: [
                                (0, n.jsx)("span", { className: m.AM, children: "GPU" }),
                                (0, n.jsx)("span", { className: m.rh, children: $(l) }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: m.FH,
                            children: s.map((e, s) => {
                                var t;
                                let a = S[s];
                                return (0, n.jsxs)(
                                    "div",
                                    {
                                        className: m.mJ,
                                        children: [
                                            (0, n.jsx)("span", { className: m.Xk, children: e.adapter_name }),
                                            (0, n.jsx)(g, {
                                                title: "Utilization",
                                                value: j(e.utilization_percent),
                                                points: a?.gpu ?? p,
                                            }),
                                            (0, n.jsx)(g, {
                                                title: "VRAM",
                                                value: ((t = e.memory_bytes), `${(t / 1048576).toFixed(0)} MB`),
                                                points: a?.vram ?? p,
                                            }),
                                            (e.engines?.length ?? 0) > 0 &&
                                                (0, n.jsx)("div", {
                                                    className: m.sP,
                                                    children: e.engines
                                                        .slice(0, 6)
                                                        .map((e) =>
                                                            (0, n.jsxs)(
                                                                "div",
                                                                {
                                                                    className: m.Ln,
                                                                    children: [
                                                                        (0, n.jsx)("span", {
                                                                            className: m.nY,
                                                                            children: e.engine_type,
                                                                        }),
                                                                        (0, n.jsx)("span", {
                                                                            className: m.qS,
                                                                            children: j(e.utilization_percent),
                                                                        }),
                                                                    ],
                                                                },
                                                                e.engine_type,
                                                            ),
                                                        ),
                                                }),
                                        ],
                                    },
                                    s,
                                );
                            }),
                        }),
                    ],
                }),
            (0, n.jsxs)("div", {
                ref: _,
                className: m.yT,
                children: [
                    (0, n.jsxs)("div", {
                        className: m.x_,
                        children: [
                            (0, n.jsx)("span", { className: m.AM, children: "CPU" }),
                            (0, n.jsx)("span", { className: m.rh, children: $(w) }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: m.uW,
                        children: [
                            (0, n.jsxs)("div", {
                                className: m.wx,
                                children: [
                                    (0, n.jsx)("span", { className: m.DD, children: "Utilization" }),
                                    (0, n.jsx)("span", { className: m.Uq, children: j(D) }),
                                ],
                            }),
                            (0, n.jsx)(r.A, { dataPoints: k, width: P, height: 80, windowMs: 12e4, markers: R }),
                            (0, n.jsx)("div", {
                                className: m.KP,
                                children: [
                                    { color: G(2), label: "Major GC" },
                                    { color: G(4), label: "Incremental" },
                                    { color: G(1), label: "Minor GC" },
                                ].map((e) => {
                                    let { color: s, label: t } = e;
                                    return (0, n.jsxs)(
                                        "div",
                                        {
                                            className: m.$d,
                                            children: [
                                                (0, n.jsx)("div", { className: m.AW, style: { background: s } }),
                                                (0, n.jsx)("span", { className: m.IF, children: t }),
                                            ],
                                        },
                                        t,
                                    );
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: m.yT,
                children: [
                    (0, n.jsxs)("div", {
                        className: m.x_,
                        children: [
                            (0, n.jsx)("span", { className: m.AM, children: "Memory" }),
                            (0, n.jsx)("span", { className: m.rh, children: $(M) }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: m.V$,
                        children: [
                            (0, n.jsx)("span", { className: m.j5, children: "Total" }),
                            (0, n.jsx)("span", { className: m.om, children: `${E.toFixed(0)} MB` }),
                        ],
                    }),
                    (0, n.jsx)("div", {
                        className: m.kK,
                        children: x.map((e) => {
                            let s = C.get(e);
                            if (null == s || 0 === s.length) return null;
                            let t = F[e],
                                a = null != t ? N(t) : 0,
                                l = t?.wss_priv_kb != null;
                            return (0, n.jsx)(
                                g,
                                { title: `${e}${l ? " (private)" : ""}`, value: `${a.toFixed(0)} MB`, points: s },
                                e,
                            );
                        }),
                    }),
                ],
            }),
        ],
    });
}
function v(e) {
    let { windowKey: s } = e;
    return (0, n.jsx)(l.A, { withTitleBar: !0, windowKey: s, title: "Discord Stats", children: (0, n.jsx)(w, {}) });
}
