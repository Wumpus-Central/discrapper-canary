t.d(n, { v: () => c });
var l = t(627968),
    r = t(243721),
    i = t(512950),
    s = t(600812),
    a = t(791498),
    o = t(244242);
function c(e) {
    let { node: n } = e,
        {
            useValue: t,
            setValue: c,
            useTitle: d,
            useSubtitle: u,
            useDisabled: x,
            useDisabledMessage: j,
            usePersistentBadge: h,
            hasIcon: m,
            getDismissibleBadges: f,
        } = n,
        p = d(),
        y = u?.(),
        g = t(),
        v = x?.() ?? !1,
        A = j?.(),
        N = h?.(),
        b = f?.(),
        k = (0, s.A)({ persistentBadge: N, dismissibleBadges: b }),
        E = (0, a.q)(n);
    return (0, l.jsxs)(o.L, {
        children: [
            (0, l.jsx)(r.d, {
                label: p,
                description: y,
                badge: k,
                checked: g,
                hasIcon: m,
                onChange: (e) => {
                    E(), c(e);
                },
                disabled: v,
            }),
            v && null != A ? (0, l.jsx)(i.p, { messageType: i.Y.WARNING, children: A }) : null,
        ],
    });
}
