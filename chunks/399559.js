n.r(s), n.d(s, { default: () => w });
var t = n(627968),
    a = n(64700),
    l = n(979186),
    r = n(17928),
    i = n(229659),
    c = n(287809),
    d = n(723702),
    o = n(321034),
    u = n(832213),
    m = n(19575),
    h = n(938800);
let p = [u.M.Renderer, u.M.Main, u.M.GPU, u.M.Utility, u.M.Crashpad, u.M.Unknown];
function x(e, s) {
    let n = [...e, { value: s, time: Date.now() }];
    return n.length > 120 && n.shift(), n;
}
function j(e) {
    return `${e.toFixed(1)}%`;
}
function N(e) {
    return (e.wss_priv_kb ?? e.wss_kb ?? 0) / 1024;
}
function f(e) {
    let { title: s, value: n, points: a, children: l } = e;
    return (0, t.jsxs)("div", {
        className: h.uW,
        children: [
            (0, t.jsxs)("div", {
                className: h.wx,
                children: [
                    (0, t.jsx)("span", { className: h.DD, children: s }),
                    (0, t.jsx)("span", { className: h.Uq, children: n }),
                ],
            }),
            (0, t.jsx)(i.A, { dataPoints: a, width: 320, height: 80, windowMs: 12e4 }),
            l,
        ],
    });
}
function v() {
    let e = (0, r.bG)([c.default], () => c.default.getCurrentUser()?.isStaff() ?? !1),
        [s, n] = a.useState([]),
        [l, u] = a.useState([]),
        [v, w] = a.useState([]),
        [g, M] = a.useState({}),
        [b, y] = a.useState(null),
        [_, P] = a.useState(null),
        [U, k] = a.useState(null),
        [A, S] = a.useState([]),
        C = a.useRef(null),
        [D, F] = a.useState(320);
    if (
        (a.useEffect(() => {
            let e = C.current;
            if (null == e) return;
            let s = null,
                n = 0,
                t = new ResizeObserver((e) => {
                    let [t] = e,
                        a = Math.max(320, Math.min(4096, Math.floor(t.contentRect.width)));
                    a === n ||
                        ((n = a),
                        null == s &&
                            (s = requestAnimationFrame(() => {
                                (s = null), F(n);
                            })));
                });
            return (
                t.observe(e),
                () => {
                    null != s && cancelAnimationFrame(s), t.disconnect();
                }
            );
        }, []),
        a.useEffect(() => {
            let e = !1,
                s = window.DiscordNative?.gcEvents?.addGCListener?.((s) => {
                    let { timestamp: n, kind: t } = s;
                    e || S((e) => [...e.filter((e) => e.time > n - 12e4), { time: n, kind: t }]);
                });
            return (
                !(function s() {
                    if (e) return;
                    if ((0, d.isWindows)() && d.isPlatformEmbedded) {
                        let s = window.DiscordNative?.process?.pid;
                        if (null != s && !isNaN(s)) {
                            let t = performance.now();
                            m.Ay.GetSystemGpuStats(s)
                                .then((s) => {
                                    e ||
                                        (y(performance.now() - t),
                                        n(s),
                                        u((e) =>
                                            s.map((s, n) => ({
                                                gpu: x(e[n]?.gpu ?? [], s.utilization_percent),
                                                vram: x(e[n]?.vram ?? [], s.memory_bytes / 1048576),
                                            })),
                                        ));
                                })
                                .catch(() => {});
                        }
                    }
                    let t = performance.now(),
                        a = o.A.getCurrentCPUUsagePercent() ?? 0;
                    P(performance.now() - t);
                    let l = performance.now(),
                        r = o.A.getMemoryUsageElectronProcessTypeDetails();
                    k(performance.now() - l),
                        w((e) => x(e, a)),
                        null != r &&
                            M((e) => {
                                let s = {};
                                for (let n of Object.keys(r)) {
                                    let t = r[n];
                                    null != t && (s[n] = x(e[n] ?? [], N(t)));
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
    let $ = o.A.getCurrentCPUUsagePercent() ?? 0,
        G = o.A.getMemoryUsageElectronProcessTypeDetails() ?? {},
        T = p.reduce((e, s) => {
            let n = G[s];
            return null != n ? e + N(n) : e;
        }, 0);
    function E(e) {
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
    let W = A.map((e) => ({ time: e.time, color: z(e.kind) }));
    return (0, t.jsxs)("div", {
        className: h.kL,
        children: [
            (0, t.jsx)("h1", { className: h.W, children: "Performance" }),
            (0, d.isWindows)() &&
                d.isPlatformEmbedded &&
                s.length > 0 &&
                (0, t.jsxs)("div", {
                    className: h.yT,
                    children: [
                        (0, t.jsxs)("div", {
                            className: h.x_,
                            children: [
                                (0, t.jsx)("span", { className: h.AM, children: "GPU" }),
                                (0, t.jsx)("span", { className: h.rh, children: E(b) }),
                            ],
                        }),
                        (0, t.jsx)("div", {
                            className: h.FH,
                            children: s.map((e, s) => {
                                var n;
                                let a = l[s];
                                return (0, t.jsxs)(
                                    "div",
                                    {
                                        className: h.mJ,
                                        children: [
                                            (0, t.jsx)("span", { className: h.Xk, children: e.adapter_name }),
                                            (0, t.jsx)(f, {
                                                title: "Utilization",
                                                value: j(e.utilization_percent),
                                                points: a?.gpu ?? [],
                                            }),
                                            (0, t.jsx)(f, {
                                                title: "VRAM",
                                                value: ((n = e.memory_bytes), `${(n / 1048576).toFixed(0)} MB`),
                                                points: a?.vram ?? [],
                                            }),
                                            (e.engines?.length ?? 0) > 0 &&
                                                (0, t.jsx)("div", {
                                                    className: h.sP,
                                                    children: e.engines
                                                        .slice(0, 6)
                                                        .map((e) =>
                                                            (0, t.jsxs)(
                                                                "div",
                                                                {
                                                                    className: h.Ln,
                                                                    children: [
                                                                        (0, t.jsx)("span", {
                                                                            className: h.nY,
                                                                            children: e.engine_type,
                                                                        }),
                                                                        (0, t.jsx)("span", {
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
            (0, t.jsxs)("div", {
                ref: C,
                className: h.yT,
                children: [
                    (0, t.jsxs)("div", {
                        className: h.x_,
                        children: [
                            (0, t.jsx)("span", { className: h.AM, children: "CPU" }),
                            (0, t.jsx)("span", { className: h.rh, children: E(_) }),
                        ],
                    }),
                    (0, t.jsxs)("div", {
                        className: h.uW,
                        children: [
                            (0, t.jsxs)("div", {
                                className: h.wx,
                                children: [
                                    (0, t.jsx)("span", { className: h.DD, children: "Utilization" }),
                                    (0, t.jsx)("span", { className: h.Uq, children: j($) }),
                                ],
                            }),
                            (0, t.jsx)(i.A, { dataPoints: v, width: D, height: 80, windowMs: 12e4, markers: W }),
                            (0, t.jsx)("div", {
                                className: h.KP,
                                children: [
                                    { color: z(2), label: "Major GC" },
                                    { color: z(4), label: "Incremental" },
                                    { color: z(1), label: "Minor GC" },
                                ].map((e) => {
                                    let { color: s, label: n } = e;
                                    return (0, t.jsxs)(
                                        "div",
                                        {
                                            className: h.$d,
                                            children: [
                                                (0, t.jsx)("div", { className: h.AW, style: { background: s } }),
                                                (0, t.jsx)("span", { className: h.IF, children: n }),
                                            ],
                                        },
                                        n,
                                    );
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, t.jsxs)("div", {
                className: h.yT,
                children: [
                    (0, t.jsxs)("div", {
                        className: h.x_,
                        children: [
                            (0, t.jsx)("span", { className: h.AM, children: "Memory" }),
                            (0, t.jsx)("span", { className: h.rh, children: E(U) }),
                        ],
                    }),
                    (0, t.jsxs)("div", {
                        className: h.V$,
                        children: [
                            (0, t.jsx)("span", { className: h.j5, children: "Total" }),
                            (0, t.jsx)("span", { className: h.om, children: `${T.toFixed(0)} MB` }),
                        ],
                    }),
                    (0, t.jsx)("div", {
                        className: h.kK,
                        children: p.map((e) => {
                            let s = g[e];
                            if (null == s || 0 === s.length) return null;
                            let n = G[e],
                                a = null != n ? N(n) : 0,
                                l = n?.wss_priv_kb != null;
                            return (0, t.jsx)(
                                f,
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
    return (0, t.jsx)(l.A, { withTitleBar: !0, windowKey: s, title: "Discord Stats", children: (0, t.jsx)(v, {}) });
}
