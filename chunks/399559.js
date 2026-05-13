t.r(s), t.d(s, { default: () => w });
var n = t(627968),
    a = t(64700),
    l = t(979186),
    r = t(17928),
    i = t(229659),
    c = t(287809),
    d = t(723702),
    o = t(321034),
    u = t(832213),
    m = t(19575),
    h = t(938800);
let p = [u.M.Renderer, u.M.Main, u.M.GPU, u.M.Utility, u.M.Crashpad, u.M.Unknown];
function x(e, s) {
    let t = [...e, { value: s, time: Date.now() }];
    return t.length > 120 && t.shift(), t;
}
function j(e) {
    return `${e.toFixed(1)}%`;
}
function f(e) {
    return (e.wss_priv_kb ?? e.wss_kb ?? 0) / 1024;
}
function N(e) {
    let { title: s, value: t, points: a, children: l } = e;
    return (0, n.jsxs)("div", {
        className: h.uW,
        children: [
            (0, n.jsxs)("div", {
                className: h.wx,
                children: [
                    (0, n.jsx)("span", { className: h.DD, children: s }),
                    (0, n.jsx)("span", { className: h.Uq, children: t }),
                ],
            }),
            (0, n.jsx)(i.A, { dataPoints: a, width: 320, height: 80, windowMs: 12e4 }),
            l,
        ],
    });
}
function v() {
    let e = (0, r.bG)([c.default], () => c.default.getCurrentUser()?.isStaff() ?? !1),
        [s, t] = a.useState([]),
        [l, u] = a.useState([]),
        [v, w] = a.useState([]),
        [g, M] = a.useState({}),
        [b, y] = a.useState(null),
        [_, k] = a.useState(null),
        [P, U] = a.useState(null),
        [S, A] = a.useState([]),
        C = a.useRef(null),
        [$, D] = a.useState(320);
    if (
        (a.useEffect(() => {
            let e = C.current;
            if (null == e) return;
            let s = new ResizeObserver((e) => {
                let [s] = e;
                D(Math.floor(s.contentRect.width));
            });
            return s.observe(e), () => s.disconnect();
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
                    if ((0, d.isWindows)() && d.isPlatformEmbedded) {
                        let s = window.DiscordNative?.process?.pid;
                        if (null != s && !isNaN(s)) {
                            let n = performance.now();
                            m.Ay.GetSystemGpuStats(s)
                                .then((s) => {
                                    e ||
                                        (y(performance.now() - n),
                                        t(s),
                                        u((e) =>
                                            s.map((s, t) => ({
                                                gpu: x(e[t]?.gpu ?? [], s.utilization_percent),
                                                vram: x(e[t]?.vram ?? [], s.memory_bytes / 1048576),
                                            })),
                                        ));
                                })
                                .catch(() => {});
                        }
                    }
                    let n = performance.now(),
                        a = o.A.getCurrentCPUUsagePercent() ?? 0;
                    k(performance.now() - n);
                    let l = performance.now(),
                        r = o.A.getMemoryUsageElectronProcessTypeDetails();
                    U(performance.now() - l),
                        w((e) => x(e, a)),
                        null != r &&
                            M((e) => {
                                let s = {};
                                for (let t of Object.keys(r)) {
                                    let n = r[t];
                                    null != n && (s[t] = x(e[t] ?? [], f(n)));
                                }
                                return s;
                            }),
                        setTimeout(s, 1e3);
                })(),
                () => {
                    (e = !0), s?.();
                }
            );
        }, []),
        !e)
    )
        return null;
    let G = o.A.getCurrentCPUUsagePercent() ?? 0,
        T = o.A.getMemoryUsageElectronProcessTypeDetails() ?? {},
        E = p.reduce((e, s) => {
            let t = T[s];
            return null != t ? e + f(t) : e;
        }, 0);
    function F(e) {
        return null != e ? `${e.toFixed(1)}ms` : "";
    }
    function z(e) {
        return 2 === e
            ? "rgba(237, 66, 69, 0.9)"
            : 4 === e
              ? "rgba(59, 165, 93, 0.9)"
              : 8 === e
                ? "rgba(150, 150, 150, 0.6)"
                : "rgba(250, 168, 26, 0.75)";
    }
    let R = S.map((e) => ({ time: e.time, color: z(e.kind) }));
    return (0, n.jsxs)("div", {
        className: h.kL,
        children: [
            (0, d.isWindows)() &&
                d.isPlatformEmbedded &&
                s.length > 0 &&
                (0, n.jsxs)("div", {
                    className: h.yT,
                    children: [
                        (0, n.jsxs)("div", {
                            className: h.x_,
                            children: [
                                (0, n.jsx)("span", { className: h.AM, children: "GPU" }),
                                (0, n.jsx)("span", { className: h.rh, children: F(b) }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: h.FH,
                            children: s.map((e, s) => {
                                var t;
                                let a = l[s];
                                return (0, n.jsxs)(
                                    "div",
                                    {
                                        className: h.mJ,
                                        children: [
                                            (0, n.jsx)("span", { className: h.Xk, children: e.adapter_name }),
                                            (0, n.jsx)(N, {
                                                title: "Utilization",
                                                value: j(e.utilization_percent),
                                                points: a?.gpu ?? [],
                                            }),
                                            (0, n.jsx)(N, {
                                                title: "VRAM",
                                                value: ((t = e.memory_bytes), `${(t / 1048576).toFixed(0)} MB`),
                                                points: a?.vram ?? [],
                                            }),
                                            (e.engines?.length ?? 0) > 0 &&
                                                (0, n.jsx)("div", {
                                                    className: h.sP,
                                                    children: e.engines
                                                        .slice(0, 6)
                                                        .map((e) =>
                                                            (0, n.jsxs)(
                                                                "div",
                                                                {
                                                                    className: h.Ln,
                                                                    children: [
                                                                        (0, n.jsx)("span", {
                                                                            className: h.nY,
                                                                            children: e.engine_type,
                                                                        }),
                                                                        (0, n.jsx)("span", {
                                                                            className: h.qS,
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
                ref: C,
                className: h.yT,
                children: [
                    (0, n.jsxs)("div", {
                        className: h.x_,
                        children: [
                            (0, n.jsx)("span", { className: h.AM, children: "CPU" }),
                            (0, n.jsx)("span", { className: h.rh, children: F(_) }),
                        ],
                    }),
                    (0, n.jsx)("span", { className: h.Uq, children: j(G) }),
                    (0, n.jsx)(i.A, { dataPoints: v, width: $, height: 80, windowMs: 12e4, markers: R }),
                    (0, n.jsx)("div", {
                        className: h.KP,
                        children: [
                            { color: z(2), label: "Major GC" },
                            { color: z(4), label: "Incremental" },
                            { color: z(1), label: "Minor GC" },
                        ].map((e) => {
                            let { color: s, label: t } = e;
                            return (0, n.jsxs)(
                                "div",
                                {
                                    className: h.$d,
                                    children: [
                                        (0, n.jsx)("div", { className: h.AW, style: { background: s } }),
                                        (0, n.jsx)("span", { className: h.IF, children: t }),
                                    ],
                                },
                                t,
                            );
                        }),
                    }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: h.yT,
                children: [
                    (0, n.jsxs)("div", {
                        className: h.x_,
                        children: [
                            (0, n.jsx)("span", { className: h.AM, children: "Memory" }),
                            (0, n.jsx)("span", { className: h.rh, children: F(P) }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: h.V$,
                        children: [
                            (0, n.jsx)("span", { className: h.j5, children: "Total" }),
                            (0, n.jsx)("span", { className: h.om, children: `${E.toFixed(0)} MB` }),
                        ],
                    }),
                    (0, n.jsx)("div", {
                        className: h.kK,
                        children: p.map((e) => {
                            let s = g[e];
                            if (null == s || 0 === s.length) return null;
                            let t = T[e],
                                a = null != t ? f(t) : 0,
                                l = t?.wss_priv_kb != null;
                            return (0, n.jsx)(
                                N,
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
function w(e) {
    let { windowKey: s } = e;
    return (0, n.jsx)(l.A, { withTitleBar: !0, windowKey: s, title: "Discord Stats", children: (0, n.jsx)(v, {}) });
}
