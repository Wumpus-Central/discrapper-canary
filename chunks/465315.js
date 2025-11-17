n.d(t, { Z: () => u });
var r = n(54381),
    l = n(793030),
    i = n(59662),
    o = n(28682),
    a = n(996435),
    c = n(206403),
    s = n(346751);
function u(e) {
    var t, n, u, d;
    let { node: f } = e,
        { destinationKey: b } = f,
        p = null == (t = f.useSubtitle) ? void 0 : t.call(f),
        { directory: y } = (0, i.t)(),
        j = null == y ? void 0 : y.entry(b),
        m = (null == j ? void 0 : j.targetPanelKey) != null ? (null == y ? void 0 : y.get(j.targetPanelKey)) : void 0,
        v = null == (n = f.useTitle) ? void 0 : n.call(f),
        g = null == m || null == (u = m.useTitle) ? void 0 : u.call(m);
    if (null == m) return null;
    let x = (null == (d = m.parent) ? void 0 : d.type) === o.Jq.SIDEBAR_ITEM ? m.parent.icon : void 0;
    return (0, r.jsx)(c.x, {
        title: null != v ? v : g,
        description: p,
        leadingElement:
            null != x &&
            (0, r.jsx)("div", {
                className: s.navigatorIcon,
                children: (0, r.jsx)(x, {}),
            }),
        primaryTrailingElement: (0, r.jsx)(l.LJT, {}),
        onClick: () => a.Z.setState({ targetKey: b }),
    });
}
