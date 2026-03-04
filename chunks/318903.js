n.d(t, { A: () => u });
var i = n(627968),
    s = n(158954),
    a = n(894858),
    l = n(688897),
    r = n(791498),
    o = n(590089),
    c = n(876813),
    d = n(191563);
function u(e) {
    let { node: t } = e,
        { destinationKey: n, useTrailingDecoration: u, useTitle: _, useSubtitle: m } = t,
        A = u?.(),
        g = m?.(),
        { parentPanelNode: h, parentSidebarItemNode: x } = (0, l.x)(n),
        p = _?.(),
        E = h?.useTitle?.(),
        C = p ?? E,
        T = (0, r.q)(t);
    if (null == h || null == C) return null;
    let S = null != x ? x.icon : void 0;
    return (0, i.jsx)(o.U, {
        title: C,
        description: g,
        leadingElement:
            null != S && (0, i.jsx)("div", { className: d.z, children: (0, i.jsx)(S, { color: "currentColor" }) }),
        trailingElement: (0, i.jsxs)("div", {
            className: d.M,
            children: [null != A && (0, i.jsx)(c.Q, { decoration: A }), (0, i.jsx)(s.uhT, {})],
        }),
        onClick: () => {
            a.A.setState({ requestedTargetKey: n, disableSidebarScrollAnimate: !0 }), T();
        },
    });
}
