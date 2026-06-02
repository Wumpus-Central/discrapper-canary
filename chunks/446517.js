t.r(s), t.d(s, { default: () => D });
var a = t(627968),
    n = t(64700),
    l = t(979186);
t(321073);
var i = t(111159),
    r = t(17928),
    c = t(229659),
    d = t(287809),
    u = t(723702),
    m = t(321034),
    o = t(832213),
    p = t(290805),
    h = t(19575),
    f = t(952818),
    x = t(137177),
    g = t(760751);
class j {
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
var N = t(938800);
function v(e) {
    let { title: s, value: t, points: l, children: i } = e,
        r = n.useRef(null),
        [d, u] = n.useState(320);
    return (
        n.useEffect(() => {
            let e = r.current;
            if (null == e) return;
            let s = null,
                t = 0,
                a = new ResizeObserver((e) => {
                    let [a] = e,
                        n = Math.max(80, Math.min(4096, Math.floor(a.contentRect.width)));
                    n === t ||
                        ((t = n),
                        null == s &&
                            (s = requestAnimationFrame(() => {
                                (s = null), u(t);
                            })));
                });
            return (
                a.observe(e),
                () => {
                    null != s && cancelAnimationFrame(s), a.disconnect();
                }
            );
        }, []),
        (0, a.jsxs)("div", {
            ref: r,
            className: N.uW,
            children: [
                (0, a.jsxs)("div", {
                    className: N.wx,
                    children: [
                        (0, a.jsx)("span", { className: N.DD, children: s }),
                        (0, a.jsx)("span", { className: N.Uq, children: t }),
                    ],
                }),
                (0, a.jsx)(c.A, { dataPoints: l, width: d, height: 80, windowMs: 12e4 }),
                i,
            ],
        })
    );
}
function w(e) {
    return `${(e / 1048576).toFixed(0)} MB`;
}
function y(e) {
    return `${e.toFixed(1)}%`;
}
function b(e) {
    let { game: s, isActive: t } = e;
    return (0, a.jsxs)("div", {
        className: N.yT,
        children: [
            (0, a.jsxs)("div", {
                className: N.Us,
                children: [
                    (0, a.jsx)(x.A, {
                        game: s.detectableGame,
                        size: x.M.SMALL,
                        allowUnknownGameIcon: !0,
                        className: N.Gt,
                    }),
                    (0, a.jsxs)("div", {
                        className: N.fR,
                        children: [
                            (0, a.jsx)("span", { className: N.AM, children: t ? "Active Game" : "Recent Game" }),
                            (0, a.jsx)("span", { className: N.mO, children: s.name }),
                        ],
                    }),
                    (0, a.jsxs)("span", { className: N.rh, children: ["pid ", s.pid] }),
                ],
            }),
            0 === s.adapters.length
                ? (0, a.jsx)("span", { className: N.wb, children: "No GPU samples (process may block access)" })
                : (0, a.jsx)("div", {
                      className: N.FH,
                      children: s.adapters.map((e, s) =>
                          (0, a.jsxs)(
                              "div",
                              {
                                  className: N.mJ,
                                  children: [
                                      (0, a.jsx)("span", { className: N.Xk, children: e.name }),
                                      (0, a.jsx)(v, {
                                          title: "Utilization",
                                          value: y(e.utilization_percent),
                                          points: e.gpu,
                                      }),
                                      (0, a.jsx)(v, { title: "VRAM", value: w(e.memory_bytes), points: e.vram }),
                                  ],
                              },
                              s,
                          ),
                      ),
                  }),
        ],
    });
}
function M(e) {
    let { enabled: s } = e,
        t = (0, r.bG)([f.Ay], () => f.Ay.getVisibleRunningGames()),
        l = (0, r.bG)([f.Ay], () => f.Ay.getVisibleGame()),
        [i, c] = n.useState(() => new Map()),
        d = n.useRef(new Map()),
        u = n.useRef(t);
    n.useEffect(() => {
        u.current = t;
    });
    let m = n.useRef(i);
    n.useEffect(() => {
        m.current = i;
    }),
        n.useEffect(() => {
            let e;
            if (!s) return;
            let t = !1;
            return (
                !(function s() {
                    t ||
                        (Promise.all(
                            u.current.map((e) =>
                                h.Ay.GetSystemGpuStats(e.pid)
                                    .catch(() => [])
                                    .then((s) => ({ game: e, adapters: s })),
                            ),
                        )
                            .then((e) => {
                                if (t) return;
                                let s = Date.now(),
                                    a = new Set(u.current.map((e) => e.pid)),
                                    n = m.current,
                                    l = new Map(),
                                    i = new Map();
                                for (let { game: t, adapters: a } of e) {
                                    if ((n.has(t.pid) || i.set(t.pid, g.A.findGame(t) ?? null), 0 === a.length))
                                        continue;
                                    let e = d.current.get(t.pid);
                                    null == e && ((e = []), d.current.set(t.pid, e));
                                    let r = e;
                                    l.set(
                                        t.pid,
                                        a.map((e, t) => {
                                            let a = r[t];
                                            return (
                                                null == a && ((a = { gpu: new j(120), vram: new j(120) }), (r[t] = a)),
                                                a.gpu.push(e.utilization_percent, s),
                                                a.vram.push(e.memory_bytes / 1048576, s),
                                                {
                                                    name: e.adapter_name,
                                                    gpu: a.gpu,
                                                    vram: a.vram,
                                                    utilization_percent: e.utilization_percent,
                                                    memory_bytes: e.memory_bytes,
                                                }
                                            );
                                        }),
                                    ),
                                        r.length > a.length && (r.length = a.length);
                                }
                                for (let e of d.current.keys()) a.has(e) || n.has(e) || d.current.delete(e);
                                c((t) => {
                                    let n = (e, t) => !a.has(e) && s - t.lastSampleAt > 12e4;
                                    if (0 === e.length) {
                                        let e = !1;
                                        for (let [s, a] of t)
                                            if (n(s, a)) {
                                                e = !0;
                                                break;
                                            }
                                        if (!e) return t;
                                    }
                                    let r = new Map(t);
                                    for (let { game: t, adapters: a } of e) {
                                        let e = r.get(t.pid),
                                            n = e?.detectableGame ?? i.get(t.pid) ?? null,
                                            c = e?.name ?? t.gameName ?? t.name ?? t.processName ?? `pid ${t.pid}`;
                                        if (0 === a.length) {
                                            r.set(
                                                t.pid,
                                                null != e
                                                    ? { ...e, lastSampleAt: s }
                                                    : {
                                                          pid: t.pid,
                                                          name: c,
                                                          detectableGame: n,
                                                          adapters: [],
                                                          lastSampleAt: s,
                                                      },
                                            );
                                            continue;
                                        }
                                        r.set(t.pid, {
                                            pid: t.pid,
                                            name: c,
                                            detectableGame: n,
                                            adapters: l.get(t.pid) ?? [],
                                            lastSampleAt: s,
                                        });
                                    }
                                    for (let [e, s] of r) n(e, s) && r.delete(e);
                                    return r;
                                });
                            })
                            .catch(() => {}),
                        (e = setTimeout(s, 1e3)));
                })(),
                () => {
                    (t = !0), null != e && clearTimeout(e);
                }
            );
        }, [s]);
    let o = l?.pid,
        p = n.useMemo(() => {
            let e = Array.from(i.values());
            return e.sort((e, s) => (e.pid === o ? -1 : s.pid === o ? 1 : s.lastSampleAt - e.lastSampleAt)), e;
        }, [i, o]);
    return s && 0 !== p.length
        ? (0, a.jsx)(a.Fragment, { children: p.map((e) => (0, a.jsx)(b, { game: e, isActive: e.pid === o }, e.pid)) })
        : null;
}
let A =
        {
            stable: "Discord.exe",
            ptb: "DiscordPTB.exe",
            canary: "DiscordCanary.exe",
            development: "DiscordDevelopment.exe",
        }[p.y] ?? "Discord.exe",
    S = [],
    _ = [o.M.Renderer, o.M.Main, o.M.GPU, o.M.Utility, o.M.Crashpad, o.M.Unknown];
function G(e) {
    return (e.wss_priv_kb ?? e.wss_kb ?? 0) / 1024;
}
function k() {
    let e = (0, r.bG)([d.default], () => d.default.getCurrentUser()?.isStaff() ?? !1),
        [s, t] = n.useState([]),
        [l, o] = n.useState(null),
        [p, f] = n.useState(null),
        [x, g] = n.useState(null),
        [b, k] = n.useState([]),
        D = n.useRef(null),
        [U, P] = n.useState(320),
        [R] = n.useState(() => new j(120)),
        [z] = n.useState(() => []),
        [C] = n.useState(() => new Map());
    if (
        (n.useEffect(() => {
            let e = D.current;
            if (null == e) return;
            let s = null,
                t = 0,
                a = new ResizeObserver((e) => {
                    let [a] = e,
                        n = Math.max(320, Math.min(4096, Math.floor(a.contentRect.width)));
                    n === t ||
                        ((t = n),
                        null == s &&
                            (s = requestAnimationFrame(() => {
                                (s = null), P(t);
                            })));
                });
            return (
                a.observe(e),
                () => {
                    null != s && cancelAnimationFrame(s), a.disconnect();
                }
            );
        }, []),
        n.useEffect(() => {
            let e = !1,
                s = window.DiscordNative?.gcEvents?.addGCListener?.((s) => {
                    let { timestamp: t, kind: a } = s;
                    e || k((e) => [...e.filter((e) => e.time > t - 12e4), { time: t, kind: a }]);
                });
            return (
                !(function s() {
                    if (e) return;
                    let a = Date.now();
                    if ((0, u.isWindows)() && u.isPlatformEmbedded) {
                        let s = window.DiscordNative?.process?.pid;
                        if (null != s && !isNaN(s)) {
                            let a = performance.now();
                            h.Ay.GetSystemGpuStats(s)
                                .then((s) => {
                                    if (e) return;
                                    o(performance.now() - a), t(s);
                                    let n = Date.now();
                                    s.forEach((e, s) => {
                                        let t = z[s];
                                        null == t && ((t = { gpu: new j(120), vram: new j(120) }), (z[s] = t)),
                                            t.gpu.push(e.utilization_percent, n),
                                            t.vram.push(e.memory_bytes / 1048576, n);
                                    }),
                                        z.length > s.length && (z.length = s.length);
                                })
                                .catch(() => {});
                        }
                    }
                    let n = performance.now(),
                        l = m.A.getCurrentCPUUsagePercent() ?? 0;
                    f(performance.now() - n);
                    let i = performance.now(),
                        r = m.A.getMemoryUsageElectronProcessTypeDetails();
                    if ((g(performance.now() - i), R.push(l, a), null != r))
                        for (let e of Object.keys(r)) {
                            let s = r[e];
                            if (null == s) continue;
                            let t = C.get(e);
                            null == t && ((t = new j(120)), C.set(e, t)), t.push(G(s), a);
                        }
                    setTimeout(s, 1e3);
                })(),
                () => {
                    (e = !0), s?.();
                }
            );
        }, [R, z, C]),
        !e)
    )
        return null;
    let E = m.A.getCurrentCPUUsagePercent() ?? 0,
        F = m.A.getMemoryUsageElectronProcessTypeDetails() ?? {},
        T = _.reduce((e, s) => {
            let t = F[s];
            return null != t ? e + G(t) : e;
        }, 0);
    function $(e) {
        return null != e ? `${e.toFixed(1)}ms` : "";
    }
    function W(e) {
        return 2 === e
            ? "rgba(237, 66, 69, 0.9)"
            : 4 === e
              ? "rgba(59, 165, 93, 0.9)"
              : 8 === e
                ? "rgba(150, 150, 150, 0.6)"
                : "rgba(250, 168, 26, 0.75)";
    }
    let q = b.map((e) => ({ time: e.time, color: W(e.kind) })),
        B = (0, u.isWindows)() && u.isPlatformEmbedded;
    return (0, a.jsxs)("div", {
        className: N.kL,
        children: [
            (0, a.jsx)("h1", { className: N.W, children: "Performance" }),
            (0, a.jsx)(M, { enabled: B }),
            (0, u.isWindows)() &&
                u.isPlatformEmbedded &&
                s.length > 0 &&
                (0, a.jsxs)("div", {
                    className: N.yT,
                    children: [
                        (0, a.jsxs)("div", {
                            className: N.Us,
                            children: [
                                (0, a.jsx)(i.p, { size: "md", className: N.Gt }),
                                (0, a.jsxs)("div", {
                                    className: N.fR,
                                    children: [
                                        (0, a.jsx)("span", { className: N.AM, children: "Discord Client" }),
                                        (0, a.jsx)("span", { className: N.mO, children: A }),
                                    ],
                                }),
                                (0, a.jsxs)("span", {
                                    className: N.rh,
                                    children: ["pid ", window.DiscordNative?.process?.pid ?? "?", " \xb7 ", $(l)],
                                }),
                            ],
                        }),
                        (0, a.jsx)("div", {
                            className: N.FH,
                            children: s.map((e, s) => {
                                let t = z[s];
                                return (0, a.jsxs)(
                                    "div",
                                    {
                                        className: N.mJ,
                                        children: [
                                            (0, a.jsx)("span", { className: N.Xk, children: e.adapter_name }),
                                            (0, a.jsx)(v, {
                                                title: "Utilization",
                                                value: y(e.utilization_percent),
                                                points: t?.gpu ?? S,
                                            }),
                                            (0, a.jsx)(v, {
                                                title: "VRAM",
                                                value: w(e.memory_bytes),
                                                points: t?.vram ?? S,
                                            }),
                                            (e.engines?.length ?? 0) > 0 &&
                                                (0, a.jsx)("div", {
                                                    className: N.sP,
                                                    children: e.engines
                                                        .slice(0, 6)
                                                        .map((e) =>
                                                            (0, a.jsxs)(
                                                                "div",
                                                                {
                                                                    className: N.Ln,
                                                                    children: [
                                                                        (0, a.jsx)("span", {
                                                                            className: N.nY,
                                                                            children: e.engine_type,
                                                                        }),
                                                                        (0, a.jsx)("span", {
                                                                            className: N.qS,
                                                                            children: y(e.utilization_percent),
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
            (0, a.jsxs)("div", {
                ref: D,
                className: N.yT,
                children: [
                    (0, a.jsxs)("div", {
                        className: N.x_,
                        children: [
                            (0, a.jsx)("span", { className: N.AM, children: "CPU" }),
                            (0, a.jsx)("span", { className: N.rh, children: $(p) }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: N.uW,
                        children: [
                            (0, a.jsxs)("div", {
                                className: N.wx,
                                children: [
                                    (0, a.jsx)("span", { className: N.DD, children: "Utilization" }),
                                    (0, a.jsx)("span", { className: N.Uq, children: y(E) }),
                                ],
                            }),
                            (0, a.jsx)(c.A, { dataPoints: R, width: U, height: 80, windowMs: 12e4, markers: q }),
                            (0, a.jsx)("div", {
                                className: N.KP,
                                children: [
                                    { color: W(2), label: "Major GC" },
                                    { color: W(4), label: "Incremental" },
                                    { color: W(1), label: "Minor GC" },
                                ].map((e) => {
                                    let { color: s, label: t } = e;
                                    return (0, a.jsxs)(
                                        "div",
                                        {
                                            className: N.$d,
                                            children: [
                                                (0, a.jsx)("div", { className: N.AW, style: { background: s } }),
                                                (0, a.jsx)("span", { className: N.IF, children: t }),
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
            (0, a.jsxs)("div", {
                className: N.yT,
                children: [
                    (0, a.jsxs)("div", {
                        className: N.x_,
                        children: [
                            (0, a.jsx)("span", { className: N.AM, children: "Memory" }),
                            (0, a.jsx)("span", { className: N.rh, children: $(x) }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: N.V$,
                        children: [
                            (0, a.jsx)("span", { className: N.j5, children: "Total" }),
                            (0, a.jsx)("span", { className: N.om, children: `${T.toFixed(0)} MB` }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: N.kK,
                        children: _.map((e) => {
                            let s = C.get(e);
                            if (null == s || 0 === s.length) return null;
                            let t = F[e],
                                n = null != t ? G(t) : 0,
                                l = t?.wss_priv_kb != null;
                            return (0, a.jsx)(
                                v,
                                { title: `${e}${l ? " (private)" : ""}`, value: `${n.toFixed(0)} MB`, points: s },
                                e,
                            );
                        }),
                    }),
                ],
            }),
        ],
    });
}
function D(e) {
    let { windowKey: s } = e;
    return (0, a.jsx)(l.A, { withTitleBar: !0, windowKey: s, title: "Discord Stats", children: (0, a.jsx)(k, {}) });
}
