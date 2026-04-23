n.d(t, { A: () => u });
var l = n(627968),
    a = n(64700),
    i = n(534514),
    r = n(834730),
    s = n(46054),
    d = n(861662),
    o = n(985018),
    c = n(900772);
let u = (e) => {
    let {
            node: { header: t, subheader: n, button: u },
            isModeratorReport: _,
            isTidaReport: m = !1,
            hideTitle: h = !1,
        } = e,
        g = u?.type === "submit",
        p = a.useMemo(() => s.A.reactParserFor({ ...s.A.defaultRules, link: d.B }), []);
    return (0, l.jsxs)("div", {
        className: c.N,
        children: [
            h || null == t || "" === t
                ? null
                : (0, l.jsx)(i.D, { variant: "heading-lg/semibold", color: "text-strong", children: t }),
            null != n && "" !== t
                ? (0, l.jsx)(r.E, { variant: "text-md/normal", color: "text-subtle", className: c.m, children: p(n) })
                : null,
            g && !_ && !m && (0, l.jsx)(r.E, { variant: "text-sm/normal", children: o.intl.format(o.t.Q0tSKT, {}) }),
        ],
    });
};
