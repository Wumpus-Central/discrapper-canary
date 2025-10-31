n.d(t, { Z: () => v }), n(415506);
var r = n(951288);
n(647438);
var l = n(28682),
    o = n(30434),
    i = n(550964),
    a = n(211512),
    c = n(401250),
    s = n(976713),
    u = n(72704),
    d = n(867694),
    f = n(4794),
    b = n(142118),
    p = n(409322),
    y = n(670304),
    j = n(357660);
function m(e) {
    let { node: t } = e;
    switch (t.type) {
        case l.Jq.ROOT:
        case l.Jq.SECTION:
        case l.Jq.SIDEBAR_ITEM:
            throw Error("".concat(t.type, " nodes should never be rendered directly"));
        case l.Jq.PANEL:
            return (0, r.jsx)(j.T, { node: t });
        case l.Jq.PANE:
            return (0, r.jsx)(y.Z, { node: t });
        case l.Jq.LIST:
            return (0, r.jsx)(p.Z, { node: t });
        case l.Jq.CATEGORY:
            return (0, r.jsx)(b.Z, { node: t });
        case l.Jq.ACCORDION:
            return (0, r.jsx)(f.Z, { node: t });
        case l.Jq.TOGGLE:
            return (0, r.jsx)(d.I, { node: t });
        case l.Jq.BUTTON:
            return (0, r.jsx)(a.I, { node: t });
        case l.Jq.SELECT:
            return (0, r.jsx)(u.Z, { node: t });
        case l.Jq.RADIO:
            return (0, r.jsx)(s.Z, { node: t });
        case l.Jq.CUSTOM:
            return (0, r.jsx)(i.X, { children: (0, r.jsx)(t.render, {}) });
        default:
            return (0, r.jsx)(c.W, { node: t });
    }
}
function v(e) {
    let { node: t } = e;
    return t.type === l.Jq.PANEL || t.type === l.Jq.PANE
        ? (0, r.jsx)(m, { node: t })
        : (0, r.jsx)(o.Z, {
              node: t,
              children: (0, r.jsx)(m, { node: t }),
          });
}
