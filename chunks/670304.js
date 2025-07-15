(n.d(t, { Z: () => l }), n(415506));
var i = n(255367),
    a = n(73800),
    s = n(281215),
    o = n(36361),
    r = n(49354);
let l = a.memo(function (e) {
    let { node: t } = e,
        n = t.data.render;
    if (null != n) return (0, i.jsx)(n, {});
    if (t.data.layout.some((e) => e.is(s.Jq.PANE))) throw Error('Panes should only be defined for custom panels.');
    return (0, i.jsx)('div', {
        className: r.pane,
        children: t.data.layout.map((e) => (0, i.jsx)(o.Z, { node: e }, e.key))
    });
});
