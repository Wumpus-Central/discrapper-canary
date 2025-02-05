n.d(t, {
    V9: () => S,
    ek: () => I
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
    f = n(46140),
    T = n(388032),
    N = n(900377);
let I = {
        START: N.alignLeft,
        END: N.alignRight
    },
    S = (e) => {
        let { showNotificationBadge: t, ctaText: r, ctaOnClick: S, isCoachmarkEnabled: b = !0, linkText: v = T.intl.string(T.t['7f4H7O']), linkTo: j, cardAlignment: A = I.START, className: O } = e,
            { balance: R } = (0, _.A)(),
            [P, D] = s.useState(x.b.DEFAULT),
            [y, Z] = s.useState(!1),
            [k, L] = s.useState(!1),
            B = (0, a.TH)(),
            { analyticsLocations: M } = (0, u.ZP)(d.Z.VIRTUAL_CURRENCY_BALANCE_WIDGET),
            w = s.useRef(null),
            { shouldOpen: V } = (0, g.Mm)({
                renderEarnedOrbsCoachmark: (e) => {
                    var t;
                    let { earnedOrbsQuantity: i } = e;
                    (t = {
                        earnedOrbsQuantity: i,
                        balance: R,
                        backgroundElementRef: w,
                        isCoachmarkEnabled: b,
                        onClickPill: () => {},
                        linkOnClick: () => {
                            (0, h.navigateToQuestHome)(f.dr.VIRTUAL_CURRENCY_EARNED_ORBS_COACHMARK, o.j.ACTIVITY_PANEL);
                        },
                        ctaOnClick: () => {
                            B.pathname !== C.Z5c.COLLECTIBLES_SHOP &&
                                (0, m.mK)({
                                    openInLayer: !1,
                                    analyticsLocations: M,
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
            U = () => {
                Z(!y);
            };
        return (
            s.useEffect(() => {
                D(y ? x.b.SELECTED : x.b.DEFAULT);
            }, [y, D]),
            s.useEffect(() => {
                b && ((0, g.wH)() || V ? (L(!0), Z(!1)) : L(!1));
            }, [b, V]),
            (0, i.jsxs)('div', {
                className: l()(N.container, O, {
                    [N.hidden]: k,
                    [N.visible]: !k
                }),
                children: [
                    (0, i.jsx)(E.A4, {
                        ref: w,
                        balance: R,
                        placeholderBalance: null != R ? R : 0,
                        balanceWidgetMode: P,
                        onClick: U,
                        showNotificationBadge: t
                    }),
                    y &&
                        (0, i.jsx)('div', {
                            className: l()(N.cardContainer, A),
                            children: (0, i.jsx)(p.L, {
                                ctaText: r,
                                ctaOnClick: () => {
                                    U(), S();
                                },
                                linkText: v,
                                linkTo: j
                            })
                        })
                ]
            })
        );
    };
S.CardAlignment = I;
