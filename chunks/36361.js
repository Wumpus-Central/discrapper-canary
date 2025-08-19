n.d(t, { Z: () => m }), n(415506);
var i = n(951288),
    l = n(647438),
    r = n(28682),
    o = n(211512),
    s = n(401250),
    a = n(976713),
    u = n(72704),
    c = n(867694),
    d = n(4794),
    f = n(142118),
    g = n(409322),
    v = n(670304),
    b = n(357660);
let m = l.memo(function (e) {
    let { node: t } = e;
    switch (t.type) {
        case r.J.ROOT:
            throw Error("Root nodes should never be rendered directly");
        case r.J.PANEL:
            return (0, i.jsx)(b.T, { node: t });
        case r.J.PANE:
            return (0, i.jsx)(v.Z, { node: t });
        case r.J.LIST:
            return (0, i.jsx)(g.Z, { node: t });
        case r.J.CATEGORY:
            return (0, i.jsx)(f.Z, { node: t });
        case r.J.ACCORDION:
            return (0, i.jsx)(d.Z, { node: t });
        case r.J.TOGGLE:
            return (0, i.jsx)(c.I, { node: t });
        case r.J.BUTTON:
            return (0, i.jsx)(o.I, { node: t });
        case r.J.SELECT:
            return (0, i.jsx)(u.Z, { node: t });
        case r.J.RADIO:
            return (0, i.jsx)(a.Z, { node: t });
        case r.J.CUSTOM:
        default:
            return (0, i.jsx)(s.W, { node: t });
    }
});
