n.d(t, { A: () => m });
var i = n(627968),
    s = n(158954),
    l = n(272053),
    a = n(176524),
    r = n(688897),
    o = n(791498),
    d = n(590089),
    c = n(876813),
    u = n(555449);
function m(e) {
    let { node: t } = e,
        { destinationKey: n, useTrailingDecoration: m, useTitle: g, useSubtitle: _ } = t,
        x = m?.(),
        A = _?.(),
        { parentPanelNode: h, parentSidebarItemNode: p } = (0, r.x)(n),
        T = g?.(),
        f = h?.useTitle?.(),
        S = T ?? f,
        b = (0, o.q)(t);
    if (null == h || null == S) return null;
    let E = null != p ? p.icon : void 0;
    return (0, i.jsx)(d.U, {
        role: "link",
        title: S,
        description: A,
        leadingElement: null != E && (0, i.jsx)(a.A, { Icon: E }),
        trailingElement: (0, i.jsxs)("div", {
            className: u.M,
            children: [null != x && (0, i.jsx)(c.Q, { decoration: x }), (0, i.jsx)(s.uhT, {})],
        }),
        onClick: () => {
            l.A.navigate(n, { animateSidebarScroll: !1 }), b();
        },
    });
}
