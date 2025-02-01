n.d(t, {
    V9: () => g,
    ek: () => h
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(43747),
    o = n(317257),
    c = n(120786),
    d = n(970815),
    u = n(388032),
    m = n(900377);
let h = {
        START: m.alignLeft,
        END: m.alignRight
    },
    g = (e) => {
        let { showNotificationBadge: t, ctaText: n, ctaOnClick: r, linkText: g = u.intl.string(u.t['7f4H7O']), linkTo: _, cardAlignment: x = h.START, className: p } = e,
            { balance: E } = (0, a.A)(),
            [C, f] = s.useState(o.b.DEFAULT),
            [T, N] = s.useState(!1),
            I = () => {
                N(!T);
            };
        return (
            s.useEffect(() => {
                f(T ? o.b.SELECTED : o.b.DEFAULT);
            }, [T, f]),
            (0, i.jsxs)('div', {
                className: l()(m.container, p),
                children: [
                    (0, i.jsx)(d.A, {
                        balance: E,
                        placeholderBalance: null != E ? E : 0,
                        balanceWidgetMode: C,
                        onClick: I,
                        showNotificationBadge: t
                    }),
                    T &&
                        (0, i.jsx)('div', {
                            className: l()(m.cardContainer, x),
                            children: (0, i.jsx)(c.L, {
                                ctaText: n,
                                ctaOnClick: () => {
                                    I(), r();
                                },
                                linkText: g,
                                linkTo: _
                            })
                        })
                ]
            })
        );
    };
g.CardAlignment = h;
