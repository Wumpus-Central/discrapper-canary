n.d(t, { A: () => r });
var i = n(627968),
    s = n(397927),
    a = n(791498),
    l = n(244242);
function r(e) {
    let { node: t } = e,
        { useValue: n, setValue: r, useTitle: o, useSubtitle: c, useOptions: d, useBadge: u } = t,
        _ = o(),
        m = c?.(),
        A = n(),
        g = d(),
        h = u?.(),
        x = (0, a.q)(t);
    return (0, i.jsx)(l.L, {
        children: (0, i.jsx)(s.z6M, {
            label: _,
            description: m,
            options: g,
            value: A,
            badge: h,
            onChange: (e) => {
                x(), r(e);
            },
        }),
    });
}
