n.d(t, { A: () => u });
var r = n(627968),
    i = n(158954),
    a = n(199966),
    s = n(963935),
    o = n(894858),
    l = n(590089),
    c = n(191563);
function u(e) {
    var t, n, u, d;
    let { node: f } = e,
        { destinationKey: p } = f,
        _ = null == (t = f.useSubtitle) ? void 0 : t.call(f),
        { accessibleDirectory: h } = (0, a._)(),
        m = h.entry(p),
        g = (null == m ? void 0 : m.parentPanelKey) != null ? h.get(m.parentPanelKey) : void 0,
        E = null == (n = f.useTitle) ? void 0 : n.call(f),
        b = null == g || null == (u = g.useTitle) ? void 0 : u.call(g);
    if (null == g) return null;
    let y = (null == (d = g.parent) ? void 0 : d.type) === s.Z6.SIDEBAR_ITEM ? g.parent.icon : void 0;
    return (0, r.jsx)(l.U, {
        title: null != E ? E : b,
        description: _,
        leadingElement:
            null != y &&
            (0, r.jsx)("div", {
                className: c.z,
                children: (0, r.jsx)(y, { color: "currentColor" }),
            }),
        primaryTrailingElement: (0, r.jsx)(i.uhT, {}),
        onClick: () => o.A.setState({ requestedTargetKey: p }),
    });
}
