e.r(i), e.d(i, { default: () => p });
var a = e(627968),
    r = e(64700),
    n = e(503698),
    c = e.n(n),
    t = e(781641),
    d = e(247366),
    l = e(522059);
function o() {
    return (0, a.jsx)("div", { className: l.HM });
}
function u() {
    return (0, a.jsx)("div", { className: c()(l.HM, l.Cj) });
}
let h = (0, t.kl)((s) =>
        (0, a.jsxs)("div", {
            className: l.og,
            children: [
                (0, a.jsx)("div", { className: l.Lr, children: (0, a.jsx)(d.Saturation, { ...s, pointer: o }) }),
                (0, a.jsx)("div", {
                    className: l.lG,
                    children: (0, a.jsx)(d.Hue, { ...s, direction: "horizontal", pointer: u }),
                }),
            ],
        }),
    ),
    p = r.memo(h);
