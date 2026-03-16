n.d(t, { A: () => u });
var i = n(627968),
    s = n(158954),
    l = n(272053),
    r = n(688897),
    a = n(791498),
    o = n(590089),
    d = n(876813),
    c = n(191563);
function u(e) {
    let { node: t } = e,
        { destinationKey: n, useTrailingDecoration: u, useTitle: _, useSubtitle: m } = t,
        g = u?.(),
        A = m?.(),
        { parentPanelNode: h, parentSidebarItemNode: x } = (0, r.x)(n),
        p = _?.(),
        T = h?.useTitle?.(),
        E = p ?? T,
        C = (0, a.q)(t);
    if (null == h || null == E) return null;
    let S = null != x ? x.icon : void 0;
    return (0, i.jsx)(o.U, {
        title: E,
        description: A,
        leadingElement:
            null != S && (0, i.jsx)("div", { className: c.z, children: (0, i.jsx)(S, { color: "currentColor" }) }),
        trailingElement: (0, i.jsxs)("div", {
            className: c.M,
            children: [null != g && (0, i.jsx)(d.Q, { decoration: g }), (0, i.jsx)(s.uhT, {})],
        }),
        onClick: () => {
            l.A.navigate(n, { animateSidebarScroll: !1 }), C();
        },
    });
}
