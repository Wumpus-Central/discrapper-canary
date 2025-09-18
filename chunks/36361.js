n.d(t, { Z: () => b }), n(415506);
var r = n(951288);
n(647438);
var i = n(28682),
    l = n(30434),
    o = n(211512),
    s = n(401250),
    a = n(976713),
    u = n(72704),
    c = n(867694),
    d = n(4794),
    g = n(142118),
    f = n(409322),
    y = n(670304),
    O = n(357660);
function E(e) {
    let { node: t } = e;
    switch (t.type) {
        case i.Jq.ROOT:
        case i.Jq.SECTION:
        case i.Jq.SIDEBAR_ITEM:
            throw Error("".concat(t.type, " nodes should never be rendered directly"));
        case i.Jq.PANEL:
            return (0, r.jsx)(O.T, { node: t });
        case i.Jq.PANE:
            return (0, r.jsx)(y.Z, { node: t });
        case i.Jq.LIST:
            return (0, r.jsx)(f.Z, { node: t });
        case i.Jq.CATEGORY:
            return (0, r.jsx)(g.Z, { node: t });
        case i.Jq.ACCORDION:
            return (0, r.jsx)(d.Z, { node: t });
        case i.Jq.TOGGLE:
            return (0, r.jsx)(c.I, { node: t });
        case i.Jq.BUTTON:
            return (0, r.jsx)(o.I, { node: t });
        case i.Jq.SELECT:
            return (0, r.jsx)(u.Z, { node: t });
        case i.Jq.RADIO:
            return (0, r.jsx)(a.Z, { node: t });
        case i.Jq.CUSTOM:
        default:
            return (0, r.jsx)(s.W, { node: t });
    }
}
function b(e) {
    let { node: t } = e;
    return t.type === i.Jq.PANEL || t.type === i.Jq.PANE
        ? (0, r.jsx)(E, { node: t })
        : (0, r.jsx)(l.Z, {
              node: t,
              children: (0, r.jsx)(E, { node: t }),
          });
}
