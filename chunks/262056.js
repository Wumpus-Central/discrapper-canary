n.d(t, { A: () => h, W: () => d });
var r = n(477900);
n(582128);
var l = n(503698),
    s = n.n(l),
    a = n(435558),
    o = n(17928),
    i = n(775602),
    u = n(577568);
let c = 2 * Math.PI * 57,
    d = "var(--status-positive)",
    p = "var(--background-mod-strong)",
    m = -Math.PI / 2;
function g(e) {
    return `${60 + 57 * Math.cos(e)} ${60 + 57 * Math.sin(e)}`;
}
let h = function (e) {
    let { current: t, target: n, progressColor: l = d, segmentGap: h = 4, children: C } = e,
        f = (0, o.bG)([i.Ay], () => i.Ay.useReducedMotion),
        E = Math.round(n);
    if (E > 1 && E <= 12) {
        let e, n, o;
        return (0, r.jsxs)("div", {
            className: u.iE,
            children: [
                C,
                (0, r.jsx)("svg", {
                    className: u.hN,
                    viewBox: "0 0 120 120",
                    children: ((e = h / 60),
                    (n = (0, a.clamp)(Math.floor(t), 0, E)),
                    (o = (2 * Math.PI) / E),
                    Array.from({ length: E }, (t, r) => {
                        let l = m + r * o + e / 2;
                        return { key: `${E}-${r}`, d: `M ${g(l)} A 57 57 0 0 1 ${g(l + o - e)}`, isFilled: r < n };
                    })).map((e) =>
                        (0, r.jsxs)(
                            "g",
                            {
                                children: [
                                    (0, r.jsx)("path", { className: u.u4, d: e.d, strokeWidth: 6, stroke: p }),
                                    (0, r.jsx)("path", {
                                        className: s()(u.mX, { [u.Vr]: !f }),
                                        d: e.d,
                                        strokeWidth: 6,
                                        stroke: l,
                                        pathLength: 1,
                                        strokeDasharray: "1 1",
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
    let v = c * (1 - (n <= 0 ? 0.025 : (0, a.clamp)(t / n, 0.025, 1)));
    return (0, r.jsxs)("div", {
        className: u.iE,
        children: [
            C,
            (0, r.jsxs)("svg", {
                className: u.hN,
                viewBox: "0 0 120 120",
                children: [
                    (0, r.jsx)("circle", { className: u.u4, cx: 60, cy: 60, r: 57, strokeWidth: 6, stroke: p }),
                    (0, r.jsx)("circle", {
                        className: s()(u.M0, { [u.Vr]: !f }),
                        cx: 60,
                        cy: 60,
                        r: 57,
                        strokeWidth: 6,
                        stroke: l,
                        strokeDasharray: c,
                        strokeDashoffset: v,
                    }),
                ],
            }),
        ],
    });
};
