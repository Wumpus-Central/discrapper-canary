(n.d(t, { Z: () => u }), n(415506));
var a = n(255367),
    i = n(73800),
    o = n(281215),
    r = n(401250),
    s = n(867694),
    l = n(142118),
    d = n(670304),
    c = n(357660);
let u = i.memo(function (e) {
    let { node: t } = e;
    if (t.is(o.Jq.ROOT)) throw Error('Root nodes should never be rendered directly');
    return t.is(o.Jq.PANEL) ? (0, a.jsx)(c.T, { node: t }) : t.is(o.Jq.PANE) ? (0, a.jsx)(d.Z, { node: t }) : t.is(o.Jq.CATEGORY) ? (0, a.jsx)(l.Z, { node: t }) : t.is(o.Jq.TOGGLE) ? (0, a.jsx)(s.I, { node: t }) : (0, a.jsx)(r.W, { node: t });
});
