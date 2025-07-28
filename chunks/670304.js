(n.d(t, { Z: () => c }), n(415506));
var i = n(255367),
    a = n(73800),
    o = n(770102),
    s = n(281215),
    l = n(36361),
    r = n(49354);
let c = a.memo(function (e) {
    let { node: t } = e,
        n = t.data.render;
    if (null != n) return (0, i.jsx)(n, {});
    if (t.data.layout.some((e) => e.is(s.Jq.PANE))) throw Error('Panes should only be defined for custom panels.');
    return (0, i.jsx)('div', {
        className: r.pane,
        children: t.data.layout.map((e, n) =>
            (0, i.jsxs)(
                a.Fragment,
                {
                    children: [(0, i.jsx)(l.Z, { node: e }), n !== t.data.layout.length - 1 && (0, i.jsx)(o.$, { className: r.divider })]
                },
                e.key
            )
        )
    });
});
