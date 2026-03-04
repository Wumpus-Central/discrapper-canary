n.d(t, { A: () => c });
var l = n(627968),
    a = n(64700),
    i = n(397927),
    r = n(46054),
    s = n(861662),
    d = n(985018),
    o = n(888791);
let c = (e) => {
    let {
            node: { header: t, subheader: n, button: c },
            isModeratorReport: u,
            isTidaReport: _ = !1,
            hideTitle: m = !1,
        } = e,
        x = c?.type === "submit",
        p = a.useMemo(() => r.A.reactParserFor({ ...r.A.defaultRules, link: s.B }), []);
    return (0, l.jsxs)("div", {
        className: o.N,
        children: [
            m || null == t || "" === t
                ? null
                : (0, l.jsx)(i.Heading, { variant: "heading-lg/semibold", color: "text-strong", children: t }),
            null != n && "" !== t
                ? (0, l.jsx)(i.Text, { variant: "text-md/normal", color: "text-subtle", children: p(n) })
                : null,
            x && !u && !_ && (0, l.jsx)(i.Text, { variant: "text-sm/normal", children: d.intl.format(d.t.Q0tSKT, {}) }),
        ],
    });
};
