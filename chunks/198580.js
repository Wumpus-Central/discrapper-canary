"use strict";
n.d(t, { A: () => f });
var r = n(627968),
    i = n(503698),
    s = n.n(i),
    a = n(376484),
    o = n(816758),
    l = n(178090),
    u = n(346640),
    c = n(985018),
    d = n(782656);
function _(e) {
    let { resource: t, smallIcon: n } = e,
        i = (0, a.A)(t),
        s = u.k[t] ?? u.zX[t] ?? u.P6[t];
    return (0, r.jsxs)("div", {
        className: d.Aw,
        children: [
            (0, r.jsx)("img", { src: s.asset, alt: c.intl.string(s.name), className: n ? d.kl : d.LY }),
            (0, r.jsx)(l.A, { className: d.lT, variant: "heading-xxl/normal", children: i }),
        ],
    });
}
function f(e) {
    let { label: t, resources: n, smallIcons: i, action: a } = e;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(l.A, { className: d.Pf, variant: "heading-xxl/normal", outlined: !0, children: t }),
            (0, r.jsxs)(o.A, {
                className: s()(d.p_, { [d.FA]: i }),
                children: [
                    (0, r.jsx)("div", { className: d.XI, children: a }),
                    n.map((e) => (0, r.jsx)(_, { resource: e, smallIcon: i }, e)),
                ],
            }),
        ],
    });
}
