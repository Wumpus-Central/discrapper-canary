e.r(i), e.d(i, { default: () => p });
var a = e(477900),
    r = e(582128),
    n = e(503698),
    c = e.n(n),
    t = e(842571),
    d = e(1986),
    l = e(607763);
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
