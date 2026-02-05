r.r(e), r.d(e, { default: () => _ });
var i = r(627968),
    a = r(64700),
    t = r(503698),
    n = r.n(t),
    c = r(868062),
    o = r(247366),
    d = r(464198);
function u() {
    return (0, i.jsx)("div", { className: d.HM });
}
function l() {
    return (0, i.jsx)("div", { className: n()(d.HM, d.Cj) });
}
let p = (0, c.kl)((s) =>
        (0, i.jsxs)("div", {
            className: d.og,
            children: [
                (0, i.jsx)("div", { className: d.Lr, children: (0, i.jsx)(o.Saturation, { ...s, pointer: u }) }),
                (0, i.jsx)("div", {
                    className: d.lG,
                    children: (0, i.jsx)(o.Hue, { ...s, direction: "horizontal", pointer: l }),
                }),
            ],
        }),
    ),
    _ = a.memo(p);
