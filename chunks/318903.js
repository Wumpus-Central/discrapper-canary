n.d(t, { A: () => u });
var i = n(627968),
    s = n(158954),
    l = n(272053),
    a = n(688897),
    r = n(791498),
    o = n(590089),
    d = n(876813),
    c = n(40937);
function u(e) {
    let { node: t } = e,
        { destinationKey: n, useTrailingDecoration: u, useTitle: _, useSubtitle: m } = t,
        g = u?.(),
        A = m?.(),
        { parentPanelNode: x, parentSidebarItemNode: h } = (0, a.x)(n),
        p = _?.(),
        T = x?.useTitle?.(),
        E = p ?? T,
        S = (0, r.q)(t);
    if (null == x || null == E) return null;
    let C = null != h ? h.icon : void 0;
    return (0, i.jsx)(o.U, {
        title: E,
        description: A,
        leadingElement:
            null != C && (0, i.jsx)("div", { className: c.z, children: (0, i.jsx)(C, { color: "currentColor" }) }),
        trailingElement: (0, i.jsxs)("div", {
            className: c.M,
            children: [null != g && (0, i.jsx)(d.Q, { decoration: g }), (0, i.jsx)(s.uhT, {})],
        }),
        onClick: () => {
            l.A.navigate(n, { animateSidebarScroll: !1 }), S();
        },
    });
}
