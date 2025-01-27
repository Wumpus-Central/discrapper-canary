n.d(t, {
    V9: function () {
        return g;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(43747),
    o = n(317257),
    c = n(120786),
    d = n(970815),
    u = n(900377);
let m = {
        START: u.alignLeft,
        END: u.alignRight
    },
    g = (e) => {
        let { showNotificationBadge: t, ctaText: n, ctaOnClick: s, className: g, linkText: h, linkTo: p, cardAlignment: x = m.START } = e,
            { balance: f } = (0, l.A)(),
            [E, _] = r.useState(o.b.DEFAULT),
            [C, T] = r.useState(!1),
            S = () => {
                T(!C);
            };
        return (
            r.useEffect(() => {
                _(C ? o.b.SELECTED : o.b.DEFAULT);
            }, [C, _]),
            (0, i.jsxs)('div', {
                className: a()(u.container, g),
                children: [
                    (0, i.jsx)(d.A, {
                        balance: f,
                        placeholderBalance: null != f ? f : 0,
                        balanceWidgetMode: E,
                        onClick: S,
                        showNotificationBadge: t
                    }),
                    C &&
                        (0, i.jsx)('div', {
                            className: a()(u.cardContainer, x),
                            children: (0, i.jsx)(c.L, {
                                ctaText: n,
                                ctaOnClick: () => {
                                    S(), s();
                                },
                                linkText: h,
                                linkTo: p
                            })
                        })
                ]
            })
        );
    };
g.CardAlignment = m;
