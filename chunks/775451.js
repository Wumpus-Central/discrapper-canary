n.d(t, {
    V9: () => T,
    ek: () => v
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(512969),
    o = n(481060),
    c = n(100527),
    d = n(906732),
    u = n(335131),
    m = n(341907),
    g = n(23547),
    _ = n(790542),
    p = n(317257),
    f = n(120786),
    h = n(970815),
    x = n(981631),
    E = n(215023),
    C = n(388032),
    b = n(125709);
let v = {
        START: b.alignLeft,
        END: b.alignRight
    },
    T = (e) => {
        let { showNotificationBadge: t, ctaText: a, ctaOnClick: T, isCoachmarkEnabled: N = !0, linkText: I = C.intl.string(C.t['7f4H7O']), linkTo: R, cardAlignment: j = v.START, className: S } = e,
            { balance: A } = (0, _.A)(),
            [P, Z] = r.useState(p.b.DEFAULT),
            [w, M] = r.useState(!1),
            [B, y] = r.useState(!1),
            k = (0, l.TH)(),
            { analyticsLocations: O } = (0, d.ZP)(c.Z.VIRTUAL_CURRENCY_BALANCE_WIDGET),
            L = r.useRef(null),
            { shouldOpen: D } = (0, g.Mm)({
                renderEarnedOrbsCoachmark: (e) => {
                    var t;
                    let { earnedOrbsQuantity: r } = e;
                    (t = {
                        earnedOrbsQuantity: r,
                        backgroundElementRef: L,
                        isCoachmarkEnabled: N,
                        onCloseCallback: x.dG4,
                        onClickPill: x.dG4,
                        linkOnClick: () => {
                            (0, m.navigateToQuestHome)();
                        },
                        ctaOnClick: () => {
                            k.pathname !== x.Z5c.COLLECTIBLES_SHOP &&
                                (0, u.mK)({
                                    openInLayer: !1,
                                    tab: E.AW.ORBS,
                                    analyticsLocations: O,
                                    analyticsSource: c.Z.VIRTUAL_CURRENCY_EARNED_ORBS_COACHMARK
                                });
                        }
                    }).isCoachmarkEnabled &&
                        (0, o.ZDy)(async () => {
                            let { BalanceWidgetEarnedOrbsCoachmarkModal: e } = await n.e('82081').then(n.bind(n, 720463));
                            return (n) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    ...n
                                });
                        }, g.cb);
                }
            }),
            U = () => {
                M(!w);
            };
        return (
            r.useEffect(() => {
                Z(w ? p.b.SELECTED : p.b.DEFAULT);
            }, [w, Z]),
            r.useEffect(() => {
                N && ((0, g.wH)() || D ? (y(!0), M(!1)) : y(!1));
            }, [N, D]),
            (0, i.jsxs)('div', {
                className: s()(b.container, S, {
                    [b.hidden]: B,
                    [b.visible]: !B
                }),
                children: [
                    (0, i.jsx)(h.A4, {
                        ref: L,
                        balance: A,
                        placeholderBalance: null != A ? A : 0,
                        balanceWidgetMode: P,
                        onClick: U,
                        showNotificationBadge: t
                    }),
                    w &&
                        (0, i.jsx)('div', {
                            className: s()(b.cardContainer, j),
                            children: (0, i.jsx)(f.L, {
                                ctaText: a,
                                ctaOnClick: () => {
                                    U(), T();
                                },
                                linkText: I,
                                linkTo: R
                            })
                        })
                ]
            })
        );
    };
T.CardAlignment = v;
