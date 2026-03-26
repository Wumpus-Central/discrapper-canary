n.d(t, { A: () => c });
var l = n(627968),
    a = n(64700),
    r = n(397927),
    i = n(46054),
    s = n(861662),
    d = n(985018),
    o = n(991764);
let c = (e) => {
    let {
            node: { header: t, subheader: n, button: c },
            isModeratorReport: u,
            isTidaReport: _ = !1,
            hideTitle: m = !1,
        } = e,
        x = c?.type === "submit",
        p = a.useMemo(() => i.A.reactParserFor({ ...i.A.defaultRules, link: s.B }), []);
    return (0, l.jsxs)("div", {
        className: o.N,
        children: [
            m || null == t || "" === t
                ? null
                : (0, l.jsx)(r.Heading, { variant: "heading-lg/semibold", color: "text-strong", children: t }),
            null != n && "" !== t
                ? (0, l.jsx)(r.Text, {
                      variant: "text-md/normal",
                      color: "text-subtle",
                      className: o.m,
                      children: p(n),
                  })
                : null,
            x && !u && !_ && (0, l.jsx)(r.Text, { variant: "text-sm/normal", children: d.intl.format(d.t.Q0tSKT, {}) }),
        ],
    });
};
