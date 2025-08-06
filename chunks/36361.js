n.d(t, { Z: () => m }), n(415506);
var i = n(255367),
    o = n(73800),
    l = n(28682),
    a = n(558731),
    r = n(401250),
    s = n(867694),
    c = n(4794),
    u = n(142118),
    d = n(670304),
    f = n(357660);
let m = o.memo(function (e) {
    let { node: t } = e;
    switch (t.type) {
        case l.J.ROOT:
            throw Error("Root nodes should never be rendered directly");
        case l.J.PANEL:
            return (0, i.jsx)(f.T, { node: t });
        case l.J.PANE:
            return (0, i.jsx)(d.Z, { node: t });
        case l.J.CATEGORY:
            return (0, i.jsx)(u.Z, { node: t });
        case l.J.ACCORDION:
            return (0, i.jsx)(c.Z, { node: t });
        case l.J.TOGGLE:
            return (0, i.jsx)(s.I, { node: t });
        case l.J.BUTTON:
            return (0, i.jsx)(a.I, { node: t });
        case l.J.CUSTOM:
        default:
            return (0, i.jsx)(r.W, { node: t });
    }
});
