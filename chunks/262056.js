var l = n(477900);
n(582128);
var r = n(503698),
    s = n.n(r),
    a = n(435558),
    i = n(855986),
    o = n(775602),
    c = n(577568);
let u = 2 * Math.PI * 57,
    d = "var(--status-positive)",
    m = "var(--background-mod-strong)",
    g = -Math.PI / 2;
function h(e) {
    return `${60 + 57 * Math.cos(e)} ${60 + 57 * Math.sin(e)}`;
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let { current: t, target: n, progressColor: r = d, segmentGap: p = 4, children: x } = e,
                f = (0, i.bG)([o.Ay], () => o.Ay.useReducedMotion),
                E = Math.round(n);
            if (E > 1 && E <= 12) {
                let e, n, i;
                return (0, l.jsxs)("div", {
                    className: c.iE,
                    children: [
                        x,
                        (0, l.jsx)("svg", {
                            className: c.hN,
                            viewBox: "0 0 120 120",
                            children: ((e = p / 60),
                            (n = (0, a.clamp)(Math.floor(t), 0, E)),
                            (i = (2 * Math.PI) / E),
                            Array.from({ length: E }, (t, l) => {
                                let r = g + l * i + e / 2;
                                return {
                                    key: `${E}-${l}`,
                                    d: `M ${h(r)} A 57 57 0 0 1 ${h(r + i - e)}`,
                                    isFilled: l < n,
                                };
                            })).map((e) =>
                                (0, l.jsxs)(
                                    "g",
                                    {
                                        children: [
                                            (0, l.jsx)("path", { className: c.u4, d: e.d, strokeWidth: 6, stroke: m }),
                                            (0, l.jsx)("path", {
                                                className: s()(c.mX, { [c.Vr]: !f }),
                                                d: e.d,
                                                strokeWidth: 6,
                                                stroke: r,
                                                pathLength: 1,
                                                strokeDasharray: "1 2",
                                                strokeDashoffset: +!e.isFilled,
                                            }),
                                        ],
                                    },
                                    e.key,
                                ),
                            ),
                        }),
                    ],
                });
            }
            let v = u * (1 - (n <= 0 ? 0.025 : (0, a.clamp)(t / n, 0.025, 1)));
            return (0, l.jsxs)("div", {
                className: c.iE,
                children: [
                    x,
                    (0, l.jsxs)("svg", {
                        className: c.hN,
                        viewBox: "0 0 120 120",
                        children: [
                            (0, l.jsx)("circle", { className: c.u4, cx: 60, cy: 60, r: 57, strokeWidth: 6, stroke: m }),
                            (0, l.jsx)("circle", {
                                className: s()(c.M0, { [c.Vr]: !f }),
                                cx: 60,
                                cy: 60,
                                r: 57,
                                strokeWidth: 6,
                                stroke: r,
                                strokeDasharray: u,
                                strokeDashoffset: v,
                            }),
                        ],
                    }),
                ],
            });
        },
        W: d,
    },
);
