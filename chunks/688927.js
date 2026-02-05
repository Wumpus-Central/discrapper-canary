n.d(t, { A: () => u });
var l = n(627968),
    a = n(64700),
    i = n(397927),
    r = n(46054),
    s = n(861662),
    d = n(985018),
    o = n(888791);
let u = (e) => {
    let {
            node: { header: t, subheader: n, button: u },
            isModeratorReport: c,
            isTidaReport: m = !1,
        } = e,
        _ = u?.type === "submit",
        x = a.useMemo(() => r.A.reactParserFor({ ...r.A.defaultRules, link: s.B }), []);
    return (0, l.jsxs)("div", {
        className: o.N,
        children: [
            null != t && "" !== t
                ? (0, l.jsx)(i.Heading, { variant: "heading-xl/semibold", color: "text-strong", children: t })
                : null,
            null != n && "" !== t
                ? (0, l.jsx)(i.Text, { variant: "text-md/normal", color: "text-default", children: x(n) })
                : null,
            _ && !c && !m && (0, l.jsx)(i.Text, { variant: "text-sm/normal", children: d.intl.format(d.t.Q0tSKT, {}) }),
        ],
    });
};
