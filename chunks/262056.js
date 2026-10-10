r.d(t, { A: () => E, W: () => d });
var n = r(477900);
r(582128);
var l = r(503698),
    s = r.n(l),
    a = r(435558),
    i = r(17928),
    o = r(775602),
    u = r(577568);
let c = 2 * Math.PI * 57,
    d = "var(--status-positive)",
    g = "var(--background-mod-strong)",
    h = -Math.PI / 2;
function m(e) {
    return `${60 + 57 * Math.cos(e)} ${60 + 57 * Math.sin(e)}`;
}
let E = function (e) {
    let { current: t, target: r, progressColor: l = d, segmentGap: E = 4, children: p } = e,
        _ = (0, i.bG)([o.Ay], () => o.Ay.useReducedMotion),
        C = Math.round(r);
    if (C > 1 && C <= 12) {
        let e, r, i;
        return (0, n.jsxs)("div", {
            className: u.iE,
            children: [
                p,
                (0, n.jsx)("svg", {
                    className: u.hN,
                    viewBox: "0 0 120 120",
                    children: ((e = E / 60),
                    (r = (0, a.clamp)(Math.floor(t), 0, C)),
                    (i = (2 * Math.PI) / C),
                    Array.from({ length: C }, (t, n) => {
                        let l = h + n * i + e / 2;
                        return { key: `${C}-${n}`, d: `M ${m(l)} A 57 57 0 0 1 ${m(l + i - e)}`, isFilled: n < r };
                    })).map((e) =>
                        (0, n.jsxs)(
                            "g",
                            {
                                children: [
                                    (0, n.jsx)("path", { className: u.u4, d: e.d, strokeWidth: 6, stroke: g }),
                                    (0, n.jsx)("path", {
                                        className: s()(u.mX, { [u.Vr]: !_ }),
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
    let v = c * (1 - (r <= 0 ? 0.025 : (0, a.clamp)(t / r, 0.025, 1)));
    return (0, n.jsxs)("div", {
        className: u.iE,
        children: [
            p,
            (0, n.jsxs)("svg", {
                className: u.hN,
                viewBox: "0 0 120 120",
                children: [
                    (0, n.jsx)("circle", { className: u.u4, cx: 60, cy: 60, r: 57, strokeWidth: 6, stroke: g }),
                    (0, n.jsx)("circle", {
                        className: s()(u.M0, { [u.Vr]: !_ }),
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
