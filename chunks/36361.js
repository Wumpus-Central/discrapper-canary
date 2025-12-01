n.d(t, { Z: () => O }), n(415506);
var r = n(54381);
n(473749);
var l = n(28682),
    i = n(30434),
    o = n(550964),
    a = n(211512),
    s = n(465315),
    c = n(401250),
    u = n(976713),
    d = n(72704),
    f = n(555361),
    p = n(867694),
    b = n(4794),
    y = n(142118),
    g = n(149865),
    v = n(409322),
    m = n(670304),
    h = n(357660),
    x = n(166292);
function j(e) {
    let { node: t } = e;
    switch (t.type) {
        case l.Jq.ROOT:
        case l.Jq.SECTION:
        case l.Jq.SIDEBAR_ITEM:
            throw Error("".concat(t.type, " nodes should never be rendered directly"));
        case l.Jq.PANEL:
            return (0, r.jsx)(h.T, { node: t });
        case l.Jq.PANE:
            return (0, r.jsx)(m.Z, { node: t });
        case l.Jq.LIST:
            return (0, r.jsx)(v.Z, { node: t });
        case l.Jq.FIELD_SET:
            return (0, r.jsx)(g.Z, { node: t });
        case l.Jq.CATEGORY:
            return (0, r.jsx)(y.Z, { node: t });
        case l.Jq.ACCORDION:
            return (0, r.jsx)(b.Z, { node: t });
        case l.Jq.SPLIT:
            return (0, r.jsx)(x.Z, { node: t });
        case l.Jq.TOGGLE:
            return (0, r.jsx)(p.I, { node: t });
        case l.Jq.BUTTON:
            return (0, r.jsx)(a.I, { node: t });
        case l.Jq.SELECT:
            return (0, r.jsx)(d.Z, { node: t });
        case l.Jq.RADIO:
            return (0, r.jsx)(u.Z, { node: t });
        case l.Jq.SLIDER:
            return (0, r.jsx)(f.Z, { node: t });
        case l.Jq.NAVIGATOR:
            return (0, r.jsx)(s.Z, { node: t });
        case l.Jq.CUSTOM:
            return (0, r.jsx)(o.X, { children: (0, r.jsx)(t.render, {}) });
        default:
            return (0, r.jsx)(c.W, { node: t });
    }
}
function O(e) {
    let { node: t } = e;
    return t.type === l.Jq.PANEL || t.type === l.Jq.PANE
        ? (0, r.jsx)(j, { node: t })
        : (0, r.jsx)(i.Z, {
              node: t,
              children: (0, r.jsx)(j, { node: t }),
          });
}
