n.d(t, {
    V9: () => I,
    ek: () => S
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(512969),
    o = n(481060),
    c = n(351773),
    d = n(100527),
    u = n(906732),
    m = n(335131),
    g = n(341907),
    h = n(23547),
    x = n(790542),
    _ = n(317257),
    p = n(120786),
    E = n(970815),
    C = n(981631),
    f = n(215023),
    T = n(388032),
    N = n(125709);
let S = {
        START: N.alignLeft,
        END: N.alignRight
    },
    I = (e) => {
        let { showNotificationBadge: t, ctaText: r, ctaOnClick: I, isCoachmarkEnabled: b = !0, linkText: v = T.intl.string(T.t['7f4H7O']), linkTo: j, cardAlignment: A = S.START, className: O } = e,
            { balance: R } = (0, x.A)(),
            [P, D] = s.useState(_.b.DEFAULT),
            [y, Z] = s.useState(!1),
            [k, L] = s.useState(!1),
            B = (0, a.TH)(),
            { analyticsLocations: M } = (0, u.ZP)(d.Z.VIRTUAL_CURRENCY_BALANCE_WIDGET),
            w = s.useRef(null),
            { shouldOpen: V } = (0, h.Mm)({
                renderEarnedOrbsCoachmark: (e) => {
                    var t;
                    let { earnedOrbsQuantity: s } = e;
                    (t = {
                        earnedOrbsQuantity: s,
                        backgroundElementRef: w,
                        isCoachmarkEnabled: b,
                        onCloseCallback: C.dG4,
                        onClickPill: C.dG4,
                        linkOnClick: () => {
                            (0, g.navigateToQuestHome)();
                        },
                        ctaOnClick: () => {
                            B.pathname !== C.Z5c.COLLECTIBLES_SHOP &&
                                (0, m.mK)({
                                    openInLayer: !1,
                                    tab: f.AW.ORBS,
                                    analyticsLocations: M,
                                    analyticsSource: d.Z.VIRTUAL_CURRENCY_EARNED_ORBS_COACHMARK
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
            U = s.useCallback(() => {
                let e = !y;
                D(e ? _.b.SELECTED : _.b.DEFAULT), Z(e);
            }, [y]);
        s.useEffect(() => {
            b && ((0, h.wH)() || V ? (L(!0), Z(!1)) : L(!1));
        }, [b, V]);
        let G = s.useCallback(() => {
                y && U();
            }, [y, U]),
            F = (0, c.Z)(null, G);
        return (0, i.jsxs)('div', {
            className: l()(N.container, O, {
                [N.hidden]: k,
                [N.visible]: !k
            }),
            children: [
                (0, i.jsx)(E.A4, {
                    ref: w,
                    balance: R,
                    balanceWidgetMode: P,
                    onMouseDown: (e) => {
                        e.stopPropagation();
                    },
                    onClick: U,
                    showNotificationBadge: t
                }),
                y &&
                    (0, i.jsx)('div', {
                        className: l()(N.cardContainer, A),
                        ref: F,
                        children: (0, i.jsx)(p.L, {
                            ctaText: r,
                            ctaOnClick: () => {
                                U(), I();
                            },
                            linkText: v,
                            linkTo: j
                        })
                    })
            ]
        });
    };
I.CardAlignment = S;
