"use strict";
n.d(t, { A: () => u });
var a = n(627968),
    i = n(64700),
    r = n(534514),
    l = n(834730),
    s = n(46054),
    d = n(861662),
    o = n(985018),
    c = n(43108);
let u = (e) => {
    let {
            node: { header: t, subheader: n, button: u },
            isModeratorReport: _,
            isTidaReport: m = !1,
            hideTitle: p = !1,
        } = e,
        h = u?.type === "submit",
        g = i.useMemo(() => s.A.reactParserFor({ ...s.A.defaultRules, link: d.B }), []);
    return (0, a.jsxs)("div", {
        className: c.N,
        children: [
            p || null == t || "" === t
                ? null
                : (0, a.jsx)(r.D, { variant: "heading-lg/semibold", color: "text-strong", children: t }),
            null != n && "" !== t
                ? (0, a.jsx)(l.E, { variant: "text-md/normal", color: "text-subtle", className: c.m, children: g(n) })
                : null,
            h && !_ && !m && (0, a.jsx)(l.E, { variant: "text-sm/normal", children: o.intl.format(o.t.Q0tSKT, {}) }),
        ],
    });
};
