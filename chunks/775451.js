n.d(t, {
    V9: () => b,
    ek: () => S
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(512969),
    o = n(636977),
    c = n(481060),
    d = n(100527),
    u = n(906732),
    m = n(335131),
    h = n(341907),
    g = n(23547),
    _ = n(790542),
    x = n(317257),
    p = n(120786),
    E = n(970815),
    C = n(981631),
    f = n(215023),
    T = n(46140),
    N = n(388032),
    I = n(900377);
let S = {
        START: I.alignLeft,
        END: I.alignRight
    },
    b = (e) => {
        let { showNotificationBadge: t, ctaText: r, ctaOnClick: b, isCoachmarkEnabled: v = !0, linkText: j = N.intl.string(N.t['7f4H7O']), linkTo: A, cardAlignment: O = S.START, className: R } = e,
            { balance: P } = (0, _.A)(),
            [D, Z] = s.useState(x.b.DEFAULT),
            [y, k] = s.useState(!1),
            [L, B] = s.useState(!1),
            M = (0, a.TH)(),
            { analyticsLocations: w } = (0, u.ZP)(d.Z.VIRTUAL_CURRENCY_BALANCE_WIDGET),
            V = s.useRef(null),
            { shouldOpen: U } = (0, g.Mm)({
                renderEarnedOrbsCoachmark: (e) => {
                    var t;
                    let { earnedOrbsQuantity: i } = e;
                    (t = {
                        earnedOrbsQuantity: i,
                        balance: P,
                        backgroundElementRef: V,
                        isCoachmarkEnabled: v,
                        onClickPill: () => {},
                        linkOnClick: () => {
                            (0, h.navigateToQuestHome)(T.dr.VIRTUAL_CURRENCY_EARNED_ORBS_COACHMARK, o.j.ACTIVITY_PANEL);
                        },
                        ctaOnClick: () => {
                            M.pathname !== C.Z5c.COLLECTIBLES_SHOP &&
                                (0, m.mK)({
                                    openInLayer: !1,
                                    tab: f.AW.ORBS,
                                    analyticsLocations: w,
                                    analyticsSource: d.Z.VIRTUAL_CURRENCY_EARNED_ORBS_COACHMARK
                                });
                        }
                    }).isCoachmarkEnabled &&
                        (0, c.ZDy)(async () => {
                            let { BalanceWidgetEarnedOrbsCoachmarkModal: e } = await Promise.resolve().then(n.bind(n, 720463));
                            return (n) =>
                                e({
                                    ...t,
                                    ...n
                                });
                        }, g.cb);
                }
            }),
            G = () => {
                k(!y);
            };
        return (
            s.useEffect(() => {
                Z(y ? x.b.SELECTED : x.b.DEFAULT);
            }, [y, Z]),
            s.useEffect(() => {
                v && ((0, g.wH)() || U ? (B(!0), k(!1)) : B(!1));
            }, [v, U]),
            (0, i.jsxs)('div', {
                className: l()(I.container, R, {
                    [I.hidden]: L,
                    [I.visible]: !L
                }),
                children: [
                    (0, i.jsx)(E.A4, {
                        ref: V,
                        balance: P,
                        placeholderBalance: null != P ? P : 0,
                        balanceWidgetMode: D,
                        onClick: G,
                        showNotificationBadge: t
                    }),
                    y &&
                        (0, i.jsx)('div', {
                            className: l()(I.cardContainer, O),
                            children: (0, i.jsx)(p.L, {
                                ctaText: r,
                                ctaOnClick: () => {
                                    G(), b();
                                },
                                linkText: j,
                                linkTo: A
                            })
                        })
                ]
            })
        );
    };
b.CardAlignment = S;
