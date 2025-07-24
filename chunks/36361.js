(n.d(t, { Z: () => u }), n(415506));
var a = n(255367),
    i = n(73800),
    r = n(281215),
    s = n(401250),
    o = n(867694),
    l = n(142118),
    c = n(670304),
    d = n(357660);
let u = i.memo(function (e) {
    let { node: t } = e;
    if (t.is(r.Jq.ROOT)) throw Error('Root nodes should never be rendered directly');
    return t.is(r.Jq.PANEL) ? (0, a.jsx)(d.T, { node: t }) : t.is(r.Jq.PANE) ? (0, a.jsx)(c.Z, { node: t }) : t.is(r.Jq.CATEGORY) ? (0, a.jsx)(l.Z, { node: t }) : t.is(r.Jq.TOGGLE) ? (0, a.jsx)(o.I, { node: t }) : (0, a.jsx)(s.W, { node: t });
});
