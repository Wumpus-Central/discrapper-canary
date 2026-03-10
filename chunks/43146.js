n.d(t, { v: () => o });
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
            useDisabled: u,
            useDisabledMessage: _,
            usePersistentBadge: g,
            hasIcon: m,
            getDismissibleBadges: A,
        } = t,
        h = d(),
        p = c?.(),
        x = n(),
        E = u?.() ?? !1,
        T = _?.(),
        S = g?.(),
        C = A?.(),
        f = (0, l.A)({ persistentBadge: S, dismissibleBadges: C }),
        I = (0, a.q)(t);
    return (0, i.jsxs)(r.L, {
        children: [
            (0, i.jsx)(s.dOG, {
                label: h,
                description: p,
                badge: f,
                checked: x,
                hasIcon: m,
                onChange: (e) => {
                    I(), o(e);
                },
                disabled: E,
            }),
            E && null != T ? (0, i.jsx)(s.po8, { messageType: s.YCn.WARNING, children: T }) : null,
        ],
    });
}
