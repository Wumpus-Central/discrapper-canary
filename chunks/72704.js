n.d(t, { Z: () => o });
var r = n(54381),
    i = n(199849),
    a = n(550964);
function o(e) {
    let { node: t } = e,
        { useValue: n, setValue: o, useTitle: s, useSubtitle: l, useOptions: c, fieldLayout: u } = t,
        d = s(),
        f = null == l ? void 0 : l(),
        p = n(),
        _ = c();
    return (0, r.jsx)(a.X, {
        children: (0, r.jsx)(i.y6, {
            label: d,
            description: f,
            value: p,
            onChange: (e) => o(e),
            options: _,
            layout: u,
        }),
    });
}
