n.d(t, {
    V9: () => x,
    ek: () => _
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(481060),
    o = n(23547),
    c = n(790542),
    d = n(317257),
    u = n(120786),
    m = n(970815),
    h = n(388032),
    g = n(900377);
let _ = {
        START: g.alignLeft,
        END: g.alignRight
    },
    x = (e) => {
        let { showNotificationBadge: t, ctaText: r, ctaOnClick: x, isCoachmarkEnabled: p = !0, linkText: E = h.intl.string(h.t['7f4H7O']), linkTo: C, cardAlignment: f = _.START, className: T } = e,
            { balance: N } = (0, c.A)(),
            [I, S] = s.useState(d.b.DEFAULT),
            [b, v] = s.useState(!1),
            [j, A] = s.useState(!1),
            O = s.useRef(null),
            { shouldOpen: R } = (0, o.Mm)({
                renderEarnedOrbsCoachmark: (e) => {
                    var t;
                    let { earnedOrbsQuantity: i } = e;
                    (t = {
                        earnedOrbsQuantity: i,
                        balance: N,
                        backgroundElementRef: O,
                        isCoachmarkEnabled: p,
                        onClickPill: () => {},
                        ctaOnClick: () => {}
                    }).isCoachmarkEnabled &&
                        (0, a.ZDy)(async () => {
                            let { BalanceWidgetEarnedOrbsCoachmarkModal: e } = await Promise.resolve().then(n.bind(n, 720463));
                            return (n) =>
                                e({
                                    ...t,
                                    ...n
                                });
                        }, o.cb);
                }
            }),
            P = () => {
                v(!b);
            };
        return (
            s.useEffect(() => {
                S(b ? d.b.SELECTED : d.b.DEFAULT);
            }, [b, S]),
            s.useEffect(() => {
                p && ((0, o.wH)() || R ? (A(!0), v(!1)) : A(!1));
            }, [p, R]),
            (0, i.jsxs)('div', {
                className: l()(g.container, T, {
                    [g.hidden]: j,
                    [g.visible]: !j
                }),
                children: [
                    (0, i.jsx)(m.A4, {
                        ref: O,
                        balance: N,
                        placeholderBalance: null != N ? N : 0,
                        balanceWidgetMode: I,
                        onClick: P,
                        showNotificationBadge: t
                    }),
                    b &&
                        (0, i.jsx)('div', {
                            className: l()(g.cardContainer, f),
                            children: (0, i.jsx)(u.L, {
                                ctaText: r,
                                ctaOnClick: () => {
                                    P(), x();
                                },
                                linkText: E,
                                linkTo: C
                            })
                        })
                ]
            })
        );
    };
x.CardAlignment = _;
