n.d(t, { Z: () => S }), n(415506);
var r = n(54381);
n(473749);
var i = n(28682),
    a = n(30434),
    o = n(550964),
    s = n(558731),
    l = n(465315),
    c = n(401250),
    u = n(976713),
    d = n(72704),
    f = n(555361),
    p = n(370100),
    _ = n(867694),
    m = n(4794),
    h = n(142118),
    g = n(149865),
    E = n(409322),
    b = n(357660),
    y = n(706873),
    O = n(166292);
function v(e) {
    let { node: t } = e;
    switch (t.type) {
        case i.Jq.ROOT:
        case i.Jq.SECTION:
        case i.Jq.SIDEBAR_ITEM:
        case i.Jq.TAB_ITEM:
            throw Error("".concat(t.type, " nodes should never be rendered directly"));
        case i.Jq.PANEL:
            return (0, r.jsx)(b.T, { node: t });
        case i.Jq.LIST:
            return (0, r.jsx)(E.Z, { node: t });
        case i.Jq.FIELD_SET:
            return (0, r.jsx)(g.Z, { node: t });
        case i.Jq.RELATED:
            return (0, r.jsx)(y.Z, { node: t });
        case i.Jq.CATEGORY:
            return (0, r.jsx)(h.Z, { node: t });
        case i.Jq.ACCORDION:
            return (0, r.jsx)(m.Z, { node: t });
        case i.Jq.SPLIT:
            return (0, r.jsx)(O.Z, { node: t });
        case i.Jq.TOGGLE:
            return (0, r.jsx)(_.I, { node: t });
        case i.Jq.BUTTON:
            return (0, r.jsx)(s.I, { node: t });
        case i.Jq.STATIC:
            return (0, r.jsx)(p.Z, { node: t });
        case i.Jq.SELECT:
            return (0, r.jsx)(d.Z, { node: t });
        case i.Jq.RADIO:
            return (0, r.jsx)(u.Z, { node: t });
        case i.Jq.SLIDER:
            return (0, r.jsx)(f.Z, { node: t });
        case i.Jq.NAVIGATOR:
            return (0, r.jsx)(l.Z, { node: t });
        case i.Jq.CUSTOM:
            return (0, r.jsx)(o.X, { children: (0, r.jsx)(t.Component, {}) });
        default:
            return (0, r.jsx)(c.W, { node: t });
    }
}
function S(e) {
    let { node: t } = e;
    return t.type === i.Jq.PANEL
        ? (0, r.jsx)(v, { node: t })
        : (0, r.jsx)(a.Z, {
              node: t,
              children: (0, r.jsx)(v, { node: t }),
          });
}
