n.d(t, { A: () => a });
var i = n(627968),
    s = n(397927),
    r = n(244242);
function a(e) {
    let { node: t } = e,
        { useValue: n, setValue: a, useTitle: l, useSubtitle: o, useOptions: c, useBadge: d } = t,
        u = l(),
        _ = o?.(),
        m = n(),
        A = c(),
        g = d?.();
    return (0, i.jsx)(r.L, {
        children: (0, i.jsx)(s.z6M, {
            label: u,
            description: _,
            options: A,
            value: m,
            badge: g,
            onChange: (e) => a(e),
        }),
    });
}
