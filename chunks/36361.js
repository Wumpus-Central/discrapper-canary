n.d(t, { Z: () => b }), n(415506);
var i = n(951288),
    l = n(647438),
    o = n(28682),
    r = n(211512),
    s = n(401250),
    a = n(976713),
    u = n(72704),
    c = n(867694),
    d = n(4794),
    f = n(142118),
    g = n(409322),
    v = n(670304),
    m = n(357660);
let b = l.memo(function (e) {
    let { node: t } = e;
    switch (t.type) {
        case o.J.ROOT:
        case o.J.SECTION:
            throw Error("".concat(t.type, " nodes should never be rendered directly"));
        case o.J.PANEL:
            return (0, i.jsx)(m.T, { node: t });
        case o.J.PANE:
            return (0, i.jsx)(v.Z, { node: t });
        case o.J.LIST:
            return (0, i.jsx)(g.Z, { node: t });
        case o.J.CATEGORY:
            return (0, i.jsx)(f.Z, { node: t });
        case o.J.ACCORDION:
            return (0, i.jsx)(d.Z, { node: t });
        case o.J.TOGGLE:
            return (0, i.jsx)(c.I, { node: t });
        case o.J.BUTTON:
            return (0, i.jsx)(r.I, { node: t });
        case o.J.SELECT:
            return (0, i.jsx)(u.Z, { node: t });
        case o.J.RADIO:
            return (0, i.jsx)(a.Z, { node: t });
        case o.J.CUSTOM:
        default:
            return (0, i.jsx)(s.W, { node: t });
    }
});
