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
        let { showNotificationBadge: t, ctaText: n, ctaOnClick: s, linkText: g, linkTo: h, cardAlignment: p = m.START } = e,
            { balance: x } = (0, l.A)(),
            [f, E] = r.useState(o.b.DEFAULT),
            [_, C] = r.useState(!1);
        return (
            r.useEffect(() => {
                E(_ ? o.b.SELECTED : o.b.DEFAULT);
            }, [_, E]),
            (0, i.jsxs)('div', {
                className: u.container,
                children: [
                    (0, i.jsx)(d.A, {
                        balance: null != x ? x : 0,
                        balanceWidgetMode: f,
                        onClick: () => {
                            C(!_);
                        },
                        showNotificationBadge: t
                    }),
                    _ &&
                        (0, i.jsx)('div', {
                            className: a()(u.cardContainer, p),
                            children: (0, i.jsx)(c.L, {
                                ctaText: n,
                                ctaOnClick: s,
                                linkText: g,
                                linkTo: h
                            })
                        })
                ]
            })
        );
    };
