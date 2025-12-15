n.d(t, { Z: () => o });
var r = n(54381),
    i = n(481060),
    a = n(550964);
function o(e) {
    let { node: t } = e,
        { useValue: n, useTitle: o, useSubtitle: s, useOptions: l, fieldLayout: c, clearable: u } = t,
        d = t.setValue,
        f = o(),
        p = null == s ? void 0 : s(),
        _ = n(),
        m = l();
    return (0, r.jsx)(a.X, {
        children: (0, r.jsx)(i.PhF, {
            selectionMode: "single",
            label: f,
            description: p,
            options: m,
            value: _,
            clearable: u,
            onSelectionChange: (e) => {
                d(e);
            },
            layout: c,
        }),
    });
}
