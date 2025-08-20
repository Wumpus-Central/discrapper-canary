n.d(t, { Z: () => m }), n(415506);
var i = n(951288);
n(647438);
var l = n(28682),
    r = n(211512),
    o = n(401250),
    s = n(976713),
    a = n(72704),
    u = n(867694),
    c = n(4794),
    d = n(142118),
    f = n(409322),
    g = n(670304),
    v = n(357660);
let m = function (e) {
    let { node: t } = e;
    switch (t.type) {
        case l.J.ROOT:
        case l.J.SECTION:
            throw Error("".concat(t.type, " nodes should never be rendered directly"));
        case l.J.PANEL:
            return (0, i.jsx)(v.T, { node: t });
        case l.J.PANE:
            return (0, i.jsx)(g.Z, { node: t });
        case l.J.LIST:
            return (0, i.jsx)(f.Z, { node: t });
        case l.J.CATEGORY:
            return (0, i.jsx)(d.Z, { node: t });
        case l.J.ACCORDION:
            return (0, i.jsx)(c.Z, { node: t });
        case l.J.TOGGLE:
            return (0, i.jsx)(u.I, { node: t });
        case l.J.BUTTON:
            return (0, i.jsx)(r.I, { node: t });
        case l.J.SELECT:
            return (0, i.jsx)(a.Z, { node: t });
        case l.J.RADIO:
            return (0, i.jsx)(s.Z, { node: t });
        case l.J.CUSTOM:
        default:
            return (0, i.jsx)(o.W, { node: t });
    }
};
