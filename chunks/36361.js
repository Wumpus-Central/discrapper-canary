n.d(t, { Z: () => O }), n(415506);
var r = n(951288);
n(647438);
var l = n(28682),
    i = n(30434),
    o = n(211512),
    s = n(401250),
    a = n(976713),
    u = n(72704),
    c = n(867694),
    d = n(4794),
    g = n(142118),
    f = n(409322),
    y = n(670304),
    v = n(357660);
function E(e) {
    let { node: t } = e;
    switch (t.type) {
        case l.J.ROOT:
        case l.J.SECTION:
            throw Error("".concat(t.type, " nodes should never be rendered directly"));
        case l.J.PANEL:
            return (0, r.jsx)(v.T, { node: t });
        case l.J.PANE:
            return (0, r.jsx)(y.Z, { node: t });
        case l.J.LIST:
            return (0, r.jsx)(f.Z, { node: t });
        case l.J.CATEGORY:
            return (0, r.jsx)(g.Z, { node: t });
        case l.J.ACCORDION:
            return (0, r.jsx)(d.Z, { node: t });
        case l.J.TOGGLE:
            return (0, r.jsx)(c.I, { node: t });
        case l.J.BUTTON:
            return (0, r.jsx)(o.I, { node: t });
        case l.J.SELECT:
            return (0, r.jsx)(u.Z, { node: t });
        case l.J.RADIO:
            return (0, r.jsx)(a.Z, { node: t });
        case l.J.CUSTOM:
        default:
            return (0, r.jsx)(s.W, { node: t });
    }
}
function O(e) {
    let { node: t } = e;
    return t.type === l.J.PANEL || t.type === l.J.PANE
        ? (0, r.jsx)(E, { node: t })
        : (0, r.jsx)(i.Z, {
              node: t,
              children: (0, r.jsx)(E, { node: t }),
          });
}
