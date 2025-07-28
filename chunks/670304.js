(n.d(t, { Z: () => c }), n(415506));
var a = n(255367),
    i = n(73800),
    o = n(770102),
    s = n(281215),
    r = n(36361),
    l = n(49354);
let c = i.memo(function (e) {
    let { node: t } = e,
        n = t.data.render;
    if (null != n) return (0, a.jsx)(n, {});
    if (t.data.layout.some((e) => e.is(s.Jq.PANE))) throw Error('Panes should only be defined for custom panels.');
    return (0, a.jsx)('div', {
        className: l.pane,
        children: t.data.layout.map((e, n) =>
            (0, a.jsxs)(
                i.Fragment,
                {
                    children: [(0, a.jsx)(r.Z, { node: e }), n !== t.data.layout.length - 1 && (0, a.jsx)(o.$, { className: l.divider })]
                },
                e.key
            )
        )
    });
});
