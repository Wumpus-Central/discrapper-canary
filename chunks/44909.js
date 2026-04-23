t.d(n, { A: () => o });
var l = t(627968),
    r = t(954197),
    i = t(600812),
    s = t(791498),
    a = t(244242);
function o(e) {
    let { node: n } = e,
        {
            useValue: t,
            setValue: o,
            useTitle: c,
            useSubtitle: d,
            useOptions: u,
            usePersistentBadge: x,
            getDismissibleBadges: j,
        } = n,
        h = c(),
        m = d?.(),
        f = t(),
        p = u(),
        y = x?.(),
        g = j?.(),
        v = (0, i.A)({ persistentBadge: y, dismissibleBadges: g }),
        A = (0, s.q)(n);
    return (0, l.jsx)(a.L, {
        children: (0, l.jsx)(r.z, {
            label: h,
            description: m,
            options: p,
            value: f,
            badge: v,
            onChange: (e) => {
                A(), o(e);
            },
        }),
    });
}
