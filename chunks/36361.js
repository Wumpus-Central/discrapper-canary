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
    p = n(867694),
    _ = n(4794),
    m = n(142118),
    h = n(149865),
    g = n(409322),
    E = n(670304),
    b = n(357660),
    y = n(706873),
    O = n(166292);
function v(e) {
    let { node: t } = e;
    switch (t.type) {
        case i.J.ROOT:
        case i.J.SECTION:
        case i.J.SIDEBAR_ITEM:
            throw Error("".concat(t.type, " nodes should never be rendered directly"));
        case i.J.PANEL:
            return (0, r.jsx)(b.T, { node: t });
        case i.J.PANE:
            return (0, r.jsx)(E.Z, { node: t });
        case i.J.LIST:
            return (0, r.jsx)(g.Z, { node: t });
        case i.J.FIELD_SET:
            return (0, r.jsx)(h.Z, { node: t });
        case i.J.RELATED:
            return (0, r.jsx)(y.Z, { node: t });
        case i.J.CATEGORY:
            return (0, r.jsx)(m.Z, { node: t });
        case i.J.ACCORDION:
            return (0, r.jsx)(_.Z, { node: t });
        case i.J.SPLIT:
            return (0, r.jsx)(O.Z, { node: t });
        case i.J.TOGGLE:
            return (0, r.jsx)(p.I, { node: t });
        case i.J.BUTTON:
            return (0, r.jsx)(s.I, { node: t });
        case i.J.SELECT:
            return (0, r.jsx)(d.Z, { node: t });
        case i.J.RADIO:
            return (0, r.jsx)(u.Z, { node: t });
        case i.J.SLIDER:
            return (0, r.jsx)(f.Z, { node: t });
        case i.J.NAVIGATOR:
            return (0, r.jsx)(l.Z, { node: t });
        case i.J.CUSTOM:
            return (0, r.jsx)(o.X, { children: (0, r.jsx)(t.render, {}) });
        default:
            return (0, r.jsx)(c.W, { node: t });
    }
}
function S(e) {
    let { node: t } = e;
    return t.type === i.J.PANEL || t.type === i.J.PANE
        ? (0, r.jsx)(v, { node: t })
        : (0, r.jsx)(a.Z, {
              node: t,
              children: (0, r.jsx)(v, { node: t }),
          });
}
