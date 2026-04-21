n.d(t, { A: () => m });
var i = n(627968),
    s = n(158954),
    l = n(272053),
    r = n(176524),
    a = n(688897),
    o = n(791498),
    d = n(590089),
    c = n(876813),
    u = n(869376);
function m(e) {
    let { node: t } = e,
        { destinationKey: n, useTrailingDecoration: m, useTitle: g, useSubtitle: _ } = t,
        x = m?.(),
        h = _?.(),
        { parentPanelNode: A, parentSidebarItemNode: p } = (0, a.x)(n),
        T = g?.(),
        f = A?.useTitle?.(),
        S = T ?? f,
        E = (0, o.q)(t);
    if (null == A || null == S) return null;
    let b = null != p ? p.icon : void 0;
    return (0, i.jsx)(d.U, {
        role: "link",
        "aria-label": f,
        title: S,
        description: h,
        leadingElement: null != b && (0, i.jsx)(r.A, { Icon: b }),
        trailingElement: (0, i.jsxs)("div", {
            className: u.M,
            children: [null != x && (0, i.jsx)(c.Q, { decoration: x }), (0, i.jsx)(s.uhT, {})],
        }),
        onClick: () => {
            l.A.navigate(n, { animateSidebarScroll: !1 }), E();
        },
    });
}
