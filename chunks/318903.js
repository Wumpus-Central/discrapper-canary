n.d(t, { A: () => u });
var i = n(627968),
    s = n(158954),
    l = n(272053),
    a = n(688897),
    r = n(791498),
    o = n(590089),
    d = n(876813),
    c = n(940880);
function u(e) {
    let { node: t } = e,
        { destinationKey: n, useTrailingDecoration: u, useTitle: m, useSubtitle: g } = t,
        _ = u?.(),
        x = g?.(),
        { parentPanelNode: A, parentSidebarItemNode: h } = (0, a.x)(n),
        p = m?.(),
        T = A?.useTitle?.(),
        f = p ?? T,
        S = (0, r.q)(t);
    if (null == A || null == f) return null;
    let b = null != h ? h.icon : void 0;
    return (0, i.jsx)(o.U, {
        role: "link",
        title: f,
        description: x,
        leadingElement:
            null != b && (0, i.jsx)("div", { className: c.z, children: (0, i.jsx)(b, { color: "currentColor" }) }),
        trailingElement: (0, i.jsxs)("div", {
            className: c.M,
            children: [null != _ && (0, i.jsx)(d.Q, { decoration: _ }), (0, i.jsx)(s.uhT, {})],
        }),
        onClick: () => {
            l.A.navigate(n, { animateSidebarScroll: !1 }), S();
        },
    });
}
