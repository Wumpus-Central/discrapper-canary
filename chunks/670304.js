(n.d(t, { Z: () => l }), n(415506));
var a = n(255367),
    i = n(73800),
    o = n(281215),
    r = n(36361),
    s = n(49354);
let l = i.memo(function (e) {
    let { node: t } = e,
        n = t.data.render;
    if (null != n) return (0, a.jsx)(n, {});
    if (t.data.layout.some((e) => e.is(o.Jq.PANE))) throw Error('Panes should only be defined for custom panels.');
    return (0, a.jsx)('div', {
        className: s.pane,
        children: t.data.layout.map((e) => (0, a.jsx)(r.Z, { node: e }, e.key))
    });
});
