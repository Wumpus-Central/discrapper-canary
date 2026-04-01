"use strict";
n.d(t, { A: () => d });
var r = n(627968),
    i = n(376484),
    s = n(816758),
    a = n(178090),
    o = n(346640),
    l = n(985018),
    u = n(851607);
function c(e) {
    let { resource: t } = e,
        n = (0, i.A)(t);
    return (0, r.jsxs)("div", {
        className: u.Aw,
        children: [
            (0, r.jsx)("img", { src: o.k[t].asset, alt: l.intl.string(o.k[t].name), className: u.LY }),
            (0, r.jsx)(a.A, { variant: "heading-xxl/normal", children: n }),
        ],
    });
}
function d(e) {
    let { label: t, resources: n } = e;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(a.A, { className: u.Pf, variant: "heading-xxl/normal", outlined: !0, children: t }),
            (0, r.jsx)(s.A, { className: u.p_, children: n.map((e) => (0, r.jsx)(c, { resource: e }, e)) }),
        ],
    });
}
