n.d(t, {
    A: () => s,
});
var r = n(627968),
    i = n(397927),
    a = n(244242);

function s(e) {
    let { node: t } = e,
        { useValue: n, setValue: s, useTitle: o, useSubtitle: l, useOptions: c, useBadge: u } = t,
        d = o(),
        f = null == l ? void 0 : l(),
        p = n(),
        _ = c(),
        h = null == u ? void 0 : u();
    return (0, r.jsx)(a.L, {
        children: (0, r.jsx)(i.z6M, {
            label: d,
            description: f,
            options: _,
            value: p,
            badge: h,
            onChange: (e) => s(e),
        }),
    });
}
