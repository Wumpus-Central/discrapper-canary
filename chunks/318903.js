n.d(t, { A: () => d });
var i = n(627968),
    s = n(158954),
    a = n(894858),
    l = n(688897),
    r = n(590089),
    o = n(876813),
    c = n(40937);
function d(e) {
    let { node: t } = e,
        { destinationKey: n, useTrailingDecoration: d, useTitle: u, useSubtitle: _ } = t,
        m = d?.(),
        A = _?.(),
        { parentPanelNode: g, parentSidebarItemNode: h } = (0, l.x)(n),
        x = u?.(),
        p = g?.useTitle?.(),
        E = x ?? p;
    if (null == g || null == E) return null;
    let C = null != h ? h.icon : void 0;
    return (0, i.jsx)(r.U, {
        title: E,
        description: A,
        leadingElement:
            null != C && (0, i.jsx)("div", { className: c.z, children: (0, i.jsx)(C, { color: "currentColor" }) }),
        trailingElement: (0, i.jsxs)("div", {
            className: c.M,
            children: [null != m && (0, i.jsx)(o.Q, { decoration: m }), (0, i.jsx)(s.uhT, {})],
        }),
        onClick: () => a.A.setState({ requestedTargetKey: n, disableSidebarScrollAnimate: !0 }),
    });
}
