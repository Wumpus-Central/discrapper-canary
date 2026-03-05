n.d(t, { A: () => u });
var i = n(627968),
    s = n(158954),
    l = n(894858),
    a = n(688897),
    r = n(791498),
    o = n(590089),
    d = n(876813),
    c = n(40937);
function u(e) {
    let { node: t } = e,
        { destinationKey: n, useTrailingDecoration: u, useTitle: _, useSubtitle: g } = t,
        m = u?.(),
        A = g?.(),
        { parentPanelNode: h, parentSidebarItemNode: p } = (0, a.x)(n),
        x = _?.(),
        E = h?.useTitle?.(),
        T = x ?? E,
        S = (0, r.q)(t);
    if (null == h || null == T) return null;
    let C = null != p ? p.icon : void 0;
    return (0, i.jsx)(o.U, {
        title: T,
        description: A,
        leadingElement:
            null != C && (0, i.jsx)("div", { className: c.z, children: (0, i.jsx)(C, { color: "currentColor" }) }),
        trailingElement: (0, i.jsxs)("div", {
            className: c.M,
            children: [null != m && (0, i.jsx)(d.Q, { decoration: m }), (0, i.jsx)(s.uhT, {})],
        }),
        onClick: () => {
            l.A.setState({ requestedTargetKey: n, disableSidebarScrollAnimate: !0 }), S();
        },
    });
}
