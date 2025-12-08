n.d(t, { Z: () => o });
var r = n(54381),
    i = n(481060),
    a = n(550964);
function o(e) {
    let { node: t } = e,
        { useValue: n, setValue: o, useTitle: s, useSubtitle: l, useOptions: c, fieldLayout: u } = t,
        d = s(),
        f = null == l ? void 0 : l(),
        p = n(),
        _ = c();
    return (0, r.jsx)(a.X, {
        children: (0, r.jsx)(i.PhF, {
            selectionMode: "single",
            label: d,
            description: f,
            options: _,
            value: p,
            onSelectionChange: (e) => {
                null != e && o(e);
            },
            layout: u,
        }),
    });
}
