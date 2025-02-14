n.d(t, {
    V9: () => S,
    ek: () => N
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(512969),
    o = n(481060),
    c = n(100527),
    d = n(906732),
    u = n(335131),
    m = n(341907),
    h = n(23547),
    g = n(790542),
    x = n(317257),
    _ = n(120786),
    p = n(970815),
    E = n(981631),
    C = n(215023),
    f = n(388032),
    T = n(125709);
let N = {
        START: T.alignLeft,
        END: T.alignRight
    },
    S = (e) => {
        let { showNotificationBadge: t, ctaText: r, ctaOnClick: S, isCoachmarkEnabled: I = !0, linkText: b = f.intl.string(f.t['7f4H7O']), linkTo: v, cardAlignment: j = N.START, className: A } = e,
            { balance: O } = (0, g.A)(),
            [R, P] = s.useState(x.b.DEFAULT),
            [D, y] = s.useState(!1),
            [Z, k] = s.useState(!1),
            L = (0, a.TH)(),
            { analyticsLocations: B } = (0, d.ZP)(c.Z.VIRTUAL_CURRENCY_BALANCE_WIDGET),
            M = s.useRef(null),
            { shouldOpen: w } = (0, h.Mm)({
                renderEarnedOrbsCoachmark: (e) => {
                    var t;
                    let { earnedOrbsQuantity: s } = e;
                    (t = {
                        earnedOrbsQuantity: s,
                        backgroundElementRef: M,
                        isCoachmarkEnabled: I,
                        onCloseCallback: E.dG4,
                        onClickPill: E.dG4,
                        linkOnClick: () => {
                            (0, m.navigateToQuestHome)();
                        },
                        ctaOnClick: () => {
                            L.pathname !== E.Z5c.COLLECTIBLES_SHOP &&
                                (0, u.mK)({
                                    openInLayer: !1,
                                    tab: C.AW.ORBS,
                                    analyticsLocations: B,
                                    analyticsSource: c.Z.VIRTUAL_CURRENCY_EARNED_ORBS_COACHMARK
                                });
                        }
                    }).isCoachmarkEnabled &&
                        (0, o.ZDy)(async () => {
                            let { BalanceWidgetEarnedOrbsCoachmarkModal: e } = await Promise.resolve().then(n.bind(n, 720463));
                            return (n) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    ...n
                                });
                        }, h.cb);
                }
            }),
            V = () => {
                y(!D);
            };
        return (
            s.useEffect(() => {
                P(D ? x.b.SELECTED : x.b.DEFAULT);
            }, [D, P]),
            s.useEffect(() => {
                I && ((0, h.wH)() || w ? (k(!0), y(!1)) : k(!1));
            }, [I, w]),
            (0, i.jsxs)('div', {
                className: l()(T.container, A, {
                    [T.hidden]: Z,
                    [T.visible]: !Z
                }),
                children: [
                    (0, i.jsx)(p.A4, {
                        ref: M,
                        balance: O,
                        placeholderBalance: null != O ? O : 0,
                        balanceWidgetMode: R,
                        onClick: V,
                        showNotificationBadge: t
                    }),
                    D &&
                        (0, i.jsx)('div', {
                            className: l()(T.cardContainer, j),
                            children: (0, i.jsx)(_.L, {
                                ctaText: r,
                                ctaOnClick: () => {
                                    V(), S();
                                },
                                linkText: b,
                                linkTo: v
                            })
                        })
                ]
            })
        );
    };
S.CardAlignment = N;
