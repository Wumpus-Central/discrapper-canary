n.d(t, {
    V9: () => O,
    ek: () => C
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(512969),
    o = n(481060),
    c = n(351773),
    d = n(100527),
    u = n(906732),
    m = n(335131),
    g = n(341907),
    p = n(23547),
    h = n(790542),
    f = n(317257),
    N = n(120786),
    x = n(970815),
    b = n(981631),
    _ = n(215023),
    E = n(388032),
    j = n(192926);
let C = {
        START: j.alignLeft,
        END: j.alignRight
    },
    O = (e) => {
        let { showNotificationBadge: t, ctaText: s, ctaOnClick: O, isCoachmarkEnabled: v = !0, linkText: S = E.NW.string(E.t['7f4H7O']), linkTo: T, cardAlignment: I = C.START, className: y } = e,
            { balance: A } = (0, h.A)(),
            [P, R] = i.useState(f.b.DEFAULT),
            [D, Z] = i.useState(!1),
            [w, k] = i.useState(!1),
            W = (0, l.TH)(),
            { analyticsLocations: L } = (0, u.ZP)(d.Z.VIRTUAL_CURRENCY_BALANCE_WIDGET),
            B = i.useRef(null),
            { shouldOpen: M } = (0, p.Mm)({
                renderEarnedOrbsCoachmark: (e) => {
                    var t;
                    let { earnedOrbsQuantity: i } = e;
                    (t = {
                        earnedOrbsQuantity: i,
                        backgroundElementRef: B,
                        isCoachmarkEnabled: v,
                        onCloseCallback: b.dG4,
                        onClickPill: b.dG4,
                        linkOnClick: () => {
                            (0, g.navigateToQuestHome)();
                        },
                        ctaOnClick: () => {
                            W.pathname !== b.Z5c.COLLECTIBLES_SHOP &&
                                (0, m.mK)({
                                    openInLayer: !1,
                                    tab: _.AW.ORBS,
                                    analyticsLocations: L,
                                    analyticsSource: d.Z.VIRTUAL_CURRENCY_EARNED_ORBS_COACHMARK
                                });
                        }
                    }).isCoachmarkEnabled &&
                        (0, o.ZDy)(async () => {
                            let { BalanceWidgetEarnedOrbsCoachmarkModal: e } = await Promise.resolve().then(n.bind(n, 720463));
                            return (n) =>
                                (0, r.jsx)(
                                    e,
                                    (function (e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                r = Object.keys(n);
                                            'function' == typeof Object.getOwnPropertySymbols &&
                                                (r = r.concat(
                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                    })
                                                )),
                                                r.forEach(function (t) {
                                                    var r;
                                                    (r = n[t]),
                                                        t in e
                                                            ? Object.defineProperty(e, t, {
                                                                  value: r,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0
                                                              })
                                                            : (e[t] = r);
                                                });
                                        }
                                        return e;
                                    })({}, t, n)
                                );
                        }, p.cb);
                }
            }),
            U = i.useCallback(() => {
                let e = !D;
                R(e ? f.b.SELECTED : f.b.DEFAULT), Z(e);
            }, [D]);
        i.useEffect(() => {
            v && ((0, p.wH)() || M ? (k(!0), Z(!1)) : k(!1));
        }, [v, M]);
        let V = i.useCallback(() => {
                D && U();
            }, [D, U]),
            G = (0, c.Z)(null, V);
        return (0, r.jsxs)('div', {
            className: a()(j.container, y, {
                [j.hidden]: w,
                [j.visible]: !w
            }),
            children: [
                (0, r.jsx)(x.A4, {
                    ref: B,
                    balance: A,
                    balanceWidgetMode: P,
                    onMouseDown: (e) => {
                        e.stopPropagation();
                    },
                    onClick: U,
                    showNotificationBadge: t
                }),
                D &&
                    (0, r.jsx)('div', {
                        className: a()(j.cardContainer, I),
                        ref: G,
                        children: (0, r.jsx)(N.L, {
                            ctaText: s,
                            ctaOnClick: () => {
                                U(), O();
                            },
                            linkText: S,
                            linkTo: T
                        })
                    })
            ]
        });
    };
O.CardAlignment = C;
