n.d(t, { A: () => o });
var i = n(627968),
    s = n(397927),
    l = n(600812),
    a = n(791498),
    r = n(244242);
function o(e) {
    let { node: t } = e,
        {
            useValue: n,
            setValue: o,
            useTitle: d,
            useSubtitle: c,
            useOptions: u,
            usePersistentBadge: _,
            getDismissibleBadges: g,
        } = t,
        m = d(),
        A = c?.(),
        h = n(),
        p = u(),
        x = _?.(),
        E = g?.(),
        T = (0, l.A)({ persistentBadge: x, dismissibleBadges: E }),
        S = (0, a.q)(t);
    return (0, i.jsx)(r.L, {
        children: (0, i.jsx)(s.z6M, {
            label: m,
            description: A,
            options: p,
            value: h,
            badge: T,
            onChange: (e) => {
                S(), o(e);
            },
        }),
    });
}
