n.d(t, {
    V9: () => I,
    ek: () => N
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(512969),
    o = n(636977),
    c = n(481060),
    d = n(100527),
    u = n(906732),
    m = n(335131),
    g = n(341907),
    _ = n(23547),
    p = n(790542),
    f = n(317257),
    h = n(120786),
    x = n(970815),
    E = n(981631),
    C = n(215023),
    b = n(46140),
    v = n(388032),
    T = n(46487);
let N = {
        START: T.alignLeft,
        END: T.alignRight
    },
    I = (e) => {
        let { showNotificationBadge: t, ctaText: a, ctaOnClick: I, isCoachmarkEnabled: R = !0, linkText: j = v.intl.string(v.t['7f4H7O']), linkTo: S, cardAlignment: A = N.START, className: P } = e,
            { balance: Z } = (0, p.A)(),
            [w, M] = r.useState(f.b.DEFAULT),
            [B, y] = r.useState(!1),
            [k, O] = r.useState(!1),
            L = (0, l.TH)(),
            { analyticsLocations: D } = (0, u.ZP)(d.Z.VIRTUAL_CURRENCY_BALANCE_WIDGET),
            U = r.useRef(null),
            { shouldOpen: G } = (0, _.Mm)({
                renderEarnedOrbsCoachmark: (e) => {
                    var t;
                    let { earnedOrbsQuantity: i } = e;
                    (t = {
                        earnedOrbsQuantity: i,
                        balance: Z,
                        backgroundElementRef: U,
                        isCoachmarkEnabled: R,
                        onClickPill: () => {},
                        linkOnClick: () => {
                            (0, g.navigateToQuestHome)(b.dr.VIRTUAL_CURRENCY_EARNED_ORBS_COACHMARK, o.j.ACTIVITY_PANEL);
                        },
                        ctaOnClick: () => {
                            L.pathname !== E.Z5c.COLLECTIBLES_SHOP &&
                                (0, m.mK)({
                                    openInLayer: !1,
                                    tab: C.AW.ORBS,
                                    analyticsLocations: D,
                                    analyticsSource: d.Z.VIRTUAL_CURRENCY_EARNED_ORBS_COACHMARK
                                });
                        }
                    }).isCoachmarkEnabled &&
                        (0, c.ZDy)(async () => {
                            let { BalanceWidgetEarnedOrbsCoachmarkModal: e } = await n.e('82081').then(n.bind(n, 720463));
                            return (n) =>
                                e({
                                    ...t,
                                    ...n
                                });
                        }, _.cb);
                }
            }),
            V = () => {
                y(!B);
            };
        return (
            r.useEffect(() => {
                M(B ? f.b.SELECTED : f.b.DEFAULT);
            }, [B, M]),
            r.useEffect(() => {
                R && ((0, _.wH)() || G ? (O(!0), y(!1)) : O(!1));
            }, [R, G]),
            (0, i.jsxs)('div', {
                className: s()(T.container, P, {
                    [T.hidden]: k,
                    [T.visible]: !k
                }),
                children: [
                    (0, i.jsx)(x.A4, {
                        ref: U,
                        balance: Z,
                        placeholderBalance: null != Z ? Z : 0,
                        balanceWidgetMode: w,
                        onClick: V,
                        showNotificationBadge: t
                    }),
                    B &&
                        (0, i.jsx)('div', {
                            className: s()(T.cardContainer, A),
                            children: (0, i.jsx)(h.L, {
                                ctaText: a,
                                ctaOnClick: () => {
                                    V(), I();
                                },
                                linkText: j,
                                linkTo: S
                            })
                        })
                ]
            })
        );
    };
I.CardAlignment = N;
