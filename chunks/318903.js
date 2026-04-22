t.d(n, { A: () => x });
var l = t(627968),
    r = t(881636),
    i = t(272053),
    s = t(176524),
    a = t(688897),
    o = t(791498),
    c = t(590089),
    d = t(876813),
    u = t(869376);
function x(e) {
    let { node: n } = e,
        { destinationKey: t, useTrailingDecoration: x, useTitle: j, useSubtitle: h } = n,
        m = x?.(),
        f = h?.(),
        { parentPanelNode: p, parentSidebarItemNode: y } = (0, a.x)(t),
        g = j?.(),
        v = p?.useTitle?.(),
        A = g ?? v,
        N = (0, o.q)(n);
    if (null == p || null == A) return null;
    let b = null != y ? y.icon : void 0;
    return (0, l.jsx)(c.U, {
        role: "link",
        "aria-label": v,
        title: A,
        description: f,
        leadingElement: null != b && (0, l.jsx)(s.A, { Icon: b }),
        trailingElement: (0, l.jsxs)("div", {
            className: u.M,
            children: [null != m && (0, l.jsx)(d.Q, { decoration: m }), (0, l.jsx)(r.u, {})],
        }),
        onClick: () => {
            i.A.navigate(t, { animateSidebarScroll: !1 }), N();
        },
    });
}
