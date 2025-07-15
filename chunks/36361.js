(n.d(t, { Z: () => u }), n(415506));
var i = n(255367),
    a = n(73800),
    s = n(281215),
    o = n(401250),
    r = n(867694),
    l = n(142118),
    d = n(670304),
    c = n(357660);
let u = a.memo(function (e) {
    let { node: t } = e;
    if (t.is(s.Jq.ROOT)) throw Error('Root nodes should never be rendered directly');
    return t.is(s.Jq.PANEL) ? (0, i.jsx)(c.T, { node: t }) : t.is(s.Jq.PANE) ? (0, i.jsx)(d.Z, { node: t }) : t.is(s.Jq.CATEGORY) ? (0, i.jsx)(l.Z, { node: t }) : t.is(s.Jq.TOGGLE) ? (0, i.jsx)(r.I, { node: t }) : (0, i.jsx)(o.W, { node: t });
});
