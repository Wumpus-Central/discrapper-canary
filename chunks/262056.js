n.d(t, { A: () => h, W: () => d });
var r = n(477900);
n(582128);
var l = n(503698),
    s = n.n(l),
    a = n(435558),
    o = n(17928),
    i = n(775602),
    c = n(577568);
let u = 2 * Math.PI * 57,
    d = "var(--status-positive)",
    p = "var(--background-mod-strong)",
    m = -Math.PI / 2;
function g(e) {
    return `${60 + 57 * Math.cos(e)} ${60 + 57 * Math.sin(e)}`;
}
let h = function (e) {
    let { current: t, target: n, progressColor: l = d, segmentGap: h = 4, children: E } = e,
        C = (0, o.bG)([i.Ay], () => i.Ay.useReducedMotion),
        f = Math.round(n);
    if (f > 1 && f <= 12) {
        let e, n, o;
        return (0, r.jsxs)("div", {
            className: c.iE,
            children: [
                E,
                (0, r.jsx)("svg", {
                    className: c.hN,
                    viewBox: "0 0 120 120",
                    children: ((e = h / 60),
                    (n = (0, a.clamp)(Math.floor(t), 0, f)),
                    (o = (2 * Math.PI) / f),
                    Array.from({ length: f }, (t, r) => {
                        let l = m + r * o + e / 2;
                        return { key: `${f}-${r}`, d: `M ${g(l)} A 57 57 0 0 1 ${g(l + o - e)}`, isFilled: r < n };
                    })).map((e) =>
                        (0, r.jsxs)(
                            "g",
                            {
                                children: [
                                    (0, r.jsx)("path", { className: c.u4, d: e.d, strokeWidth: 6, stroke: p }),
                                    (0, r.jsx)("path", {
                                        className: s()(c.mX, { [c.Vr]: !C }),
                                        d: e.d,
                                        strokeWidth: 6,
                                        stroke: l,
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
    return (0, r.jsxs)("div", {
        className: c.iE,
        children: [
            E,
            (0, r.jsxs)("svg", {
                className: c.hN,
                viewBox: "0 0 120 120",
                children: [
                    (0, r.jsx)("circle", { className: c.u4, cx: 60, cy: 60, r: 57, strokeWidth: 6, stroke: p }),
                    (0, r.jsx)("circle", {
                        className: s()(c.M0, { [c.Vr]: !C }),
                        cx: 60,
                        cy: 60,
                        r: 57,
                        strokeWidth: 6,
                        stroke: l,
                        strokeDasharray: u,
                        strokeDashoffset: v,
                    }),
                ],
            }),
        ],
    });
};
