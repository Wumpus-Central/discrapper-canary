n.d(t, { Z: () => u });
var r = n(54381),
    l = n(793030),
    i = n(59662),
    o = n(28682),
    a = n(996435),
    s = n(206403),
    c = n(346751);
function u(e) {
    var t, n, u, d;
    let { node: f } = e,
        { destinationKey: p } = f,
        b = null == (t = f.useSubtitle) ? void 0 : t.call(f),
        { directory: y } = (0, i.t)(),
        g = null == y ? void 0 : y.entry(p),
        v = (null == g ? void 0 : g.parentPanelKey) != null ? (null == y ? void 0 : y.get(g.parentPanelKey)) : void 0,
        m = null == (n = f.useTitle) ? void 0 : n.call(f),
        h = null == v || null == (u = v.useTitle) ? void 0 : u.call(v);
    if (null == v) return null;
    let x = (null == (d = v.parent) ? void 0 : d.type) === o.Jq.SIDEBAR_ITEM ? v.parent.icon : void 0;
    return (0, r.jsx)(s.x, {
        title: null != m ? m : h,
        description: b,
        leadingElement:
            null != x &&
            (0, r.jsx)("div", {
                className: c.navigatorIcon,
                children: (0, r.jsx)(x, {}),
            }),
        primaryTrailingElement: (0, r.jsx)(l.LJT, {}),
        onClick: () => a.Z.setState({ requestedTargetKey: p }),
    });
}
