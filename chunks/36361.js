n.d(t, { Z: () => m }), n(415506);
var r = n(951288);
n(647438);
var l = n(28682),
    o = n(30434),
    i = n(211512),
    a = n(401250),
    c = n(976713),
    s = n(72704),
    u = n(867694),
    d = n(4794),
    f = n(142118),
    b = n(409322),
    p = n(670304),
    y = n(357660);
function j(e) {
    let { node: t } = e;
    switch (t.type) {
        case l.Jq.ROOT:
        case l.Jq.SECTION:
        case l.Jq.SIDEBAR_ITEM:
            throw Error("".concat(t.type, " nodes should never be rendered directly"));
        case l.Jq.PANEL:
            return (0, r.jsx)(y.T, { node: t });
        case l.Jq.PANE:
            return (0, r.jsx)(p.Z, { node: t });
        case l.Jq.LIST:
            return (0, r.jsx)(b.Z, { node: t });
        case l.Jq.CATEGORY:
            return (0, r.jsx)(f.Z, { node: t });
        case l.Jq.ACCORDION:
            return (0, r.jsx)(d.Z, { node: t });
        case l.Jq.TOGGLE:
            return (0, r.jsx)(u.I, { node: t });
        case l.Jq.BUTTON:
            return (0, r.jsx)(i.I, { node: t });
        case l.Jq.SELECT:
            return (0, r.jsx)(s.Z, { node: t });
        case l.Jq.RADIO:
            return (0, r.jsx)(c.Z, { node: t });
        case l.Jq.CUSTOM:
        default:
            return (0, r.jsx)(a.W, { node: t });
    }
}
function m(e) {
    let { node: t } = e;
    return t.type === l.Jq.PANEL || t.type === l.Jq.PANE
        ? (0, r.jsx)(j, { node: t })
        : (0, r.jsx)(o.Z, {
              node: t,
              children: (0, r.jsx)(j, { node: t }),
          });
}
