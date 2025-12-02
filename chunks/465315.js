n.d(t, { Z: () => u });
var r = n(54381),
    i = n(793030),
    a = n(59662),
    o = n(28682),
    s = n(996435),
    l = n(206403),
    c = n(346751);
function u(e) {
    var t, n, u, d;
    let { node: f } = e,
        { destinationKey: p } = f,
        _ = null == (t = f.useSubtitle) ? void 0 : t.call(f),
        { fallbackDirectory: m } = (0, a.t)(),
        h = null == m ? void 0 : m.entry(p),
        g = (null == h ? void 0 : h.parentPanelKey) != null ? (null == m ? void 0 : m.get(h.parentPanelKey)) : void 0,
        E = null == (n = f.useTitle) ? void 0 : n.call(f),
        b = null == g || null == (u = g.useTitle) ? void 0 : u.call(g);
    if (null == g) return null;
    let y = (null == (d = g.parent) ? void 0 : d.type) === o.Jq.SIDEBAR_ITEM ? g.parent.icon : void 0;
    return (0, r.jsx)(l.x, {
        title: null != E ? E : b,
        description: _,
        leadingElement:
            null != y &&
            (0, r.jsx)("div", {
                className: c.navigatorIcon,
                children: (0, r.jsx)(y, {}),
            }),
        primaryTrailingElement: (0, r.jsx)(i.LJT, {}),
        onClick: () => s.Z.setState({ requestedTargetKey: p }),
    });
}
