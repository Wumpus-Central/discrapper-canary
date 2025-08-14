n.d(t, { Z: () => b }), n(415506);
var i = n(255367),
    l = n(73800),
    s = n(28682),
    o = n(211512),
    r = n(401250),
    a = n(976713),
    u = n(72704),
    c = n(867694),
    d = n(4794),
    f = n(142118),
    g = n(409322),
    m = n(670304),
    v = n(357660);
let b = l.memo(function (e) {
    let { node: t } = e;
    switch (t.type) {
        case s.J.ROOT:
            throw Error("Root nodes should never be rendered directly");
        case s.J.PANEL:
            return (0, i.jsx)(v.T, { node: t });
        case s.J.PANE:
            return (0, i.jsx)(m.Z, { node: t });
        case s.J.LIST:
            return (0, i.jsx)(g.Z, { node: t });
        case s.J.CATEGORY:
            return (0, i.jsx)(f.Z, { node: t });
        case s.J.ACCORDION:
            return (0, i.jsx)(d.Z, { node: t });
        case s.J.TOGGLE:
            return (0, i.jsx)(c.I, { node: t });
        case s.J.BUTTON:
            return (0, i.jsx)(o.I, { node: t });
        case s.J.SELECT:
            return (0, i.jsx)(u.Z, { node: t });
        case s.J.RADIO:
            return (0, i.jsx)(a.Z, { node: t });
        case s.J.CUSTOM:
        default:
            return (0, i.jsx)(r.W, { node: t });
    }
});
