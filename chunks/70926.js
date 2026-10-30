t.d(l, { SS: () => X, cP: () => J });
var a = t(477900),
    n = t(582128),
    s = t(503698),
    i = t.n(s),
    r = t(82495),
    o = t(793574),
    c = t(482589),
    d = t(892227),
    u = t(492462),
    x = t(17928),
    f = t(273875),
    h = t(916845),
    m = t(834730),
    A = t(43990),
    R = t(821609),
    E = t(303136),
    j = t(366505),
    N = t(976860),
    p = t(309954),
    k = t(287809),
    g = t(975571),
    b = t(474090),
    v = t(920050),
    O = t(94264),
    _ = t(549384),
    C = t(566119),
    L = t(202541),
    y = t(652215),
    T = t(901123),
    S = t(923584),
    w = t(105292),
    B = t(226068),
    M = t(268920),
    P = t(633217),
    D = t(909340);
function I() {
    return (0, a.jsx)("div", {
        className: B.s,
        children: (0, a.jsx)(E.A, { src: P.A, fallbackImage: M.A, className: B.Cb }),
    });
}
function U() {
    ((0, C.b)(), window.open(g.A.getArticleURL(y.MVz.ORBS_FAQ), "_blank"));
}
function W(e) {
    let { targetElementRef: l, shouldShow: t, onRequestClose: s, onNavigate: r, ctaText: o, ctaOnClick: c } = e,
        { passesGeneralUIInvariant: g, programReward: M } = (0, j.F)(),
        P = (0, x.bG)([k.default], () => k.default.getCurrentUser()),
        { balance: W } = (0, p.W)(),
        F = !(0, b.ki)(P),
        K = n.useCallback(() => {
            ((0, C.RQ)(),
                s(),
                null != r && r(),
                (0, N.pX)(T.BV.NITRO_HOME, { search: (0, u.stringify)({ perk: v.NITRO_ORBS_REWARDS_CARD_ID }) }));
        }, [s, r]),
        V = n.useCallback(() => {
            ((0, C.gP)(),
                s(),
                null != r && r(),
                (0, N.pX)(T.BV.NITRO_HOME, { search: (0, u.stringify)({ section: _.L }) }));
        }, [s, r]),
        q = n.useMemo(() => {
            let e = (0, b.YE)(P, L.PremiumTypes.TIER_2);
            if (!g || F) return null;
            if (e && null != M) {
                let e = (0, d.default)(new Date(M.next_reward_date), new Date());
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(m.E, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: w.intl.format(S.default["AvL/At"], {
                                days: Math.max(1, e),
                                deepLinkToNitroOrbs: K,
                            }),
                        }),
                        (0, a.jsx)(O.A, {}),
                    ],
                });
            }
            return null;
        }, [P, F, M, g, K]),
        G = (W ?? 0) >= 4100;
    return (0, a.jsx)(f.x, {
        targetElementRef: l,
        shouldShow: t,
        onRequestClose: s,
        position: "bottom",
        gradientColor: "blue",
        modal: !0,
        closeOnClickOutside: !0,
        children: (0, a.jsx)(A.N, {
            theme: G ? y.NJ8.DARK : void 0,
            children: (e) =>
                (0, a.jsxs)("div", {
                    className: i()(e, B.j),
                    children: [
                        G && (0, a.jsx)(E.A, { src: D.A, className: B.yG }),
                        (0, a.jsxs)("div", {
                            className: B.Qs,
                            children: [
                                (0, a.jsx)(h.q, { onClick: s }),
                                (0, a.jsxs)("div", {
                                    className: B.hQ,
                                    children: [
                                        (0, a.jsx)(I, {}),
                                        (0, a.jsxs)("div", {
                                            className: B.y$,
                                            children: [
                                                (W ?? 0) > 0 &&
                                                    (0, a.jsxs)("div", {
                                                        className: B.E2,
                                                        children: [
                                                            (0, a.jsx)(m.E, {
                                                                variant: "display-lg",
                                                                className: B.K,
                                                                children: W ?? 0,
                                                            }),
                                                            (0, a.jsx)(m.E, {
                                                                variant: "text-xs/normal",
                                                                color: "text-muted",
                                                                children: w.intl.string(S.default.KclK9z),
                                                            }),
                                                        ],
                                                    }),
                                                q,
                                            ],
                                        }),
                                        (0, a.jsx)(R.$, {
                                            text: o,
                                            variant: "primary",
                                            size: "sm",
                                            onClick: c,
                                            fullWidth: !0,
                                        }),
                                        (0, a.jsx)(m.E, {
                                            variant: "text-xs/normal",
                                            color: F ? "text-default" : "text-muted",
                                            className: B.CU,
                                            children: F
                                                ? w.intl.format(S.default.juvXqj, { deepLinkToNitroOrbs: V })
                                                : w.intl.format(S.default.fhAVek, { helpdeskArticle: U }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
        }),
    });
}
var F = t(318346),
    K = t(362862),
    V = t(923138),
    q = t(305003),
    G = t(265872);
(t(964486), t(786953));
var H = t(505274),
    Q = t(37402);
function Y(e) {
    let { pillRef: l, clickableRef: t, ...n } = e,
        { balancePillOverlay: s } = (0, x.cf)([H.A], () => ({ balancePillOverlay: H.A.balancePillOverlay })),
        i = (0, a.jsx)(Q.Gy, { ref: l, clickableRef: t, ...n }),
        r = (0, a.jsx)(Q.Gy, { ...n, isInModalOverlay: !0, disabled: !0 }),
        o = null != l.current ? l.current.offsetHeight : 36;
    return (0, a.jsx)(G.Y, {
        fixed: !0,
        autoInvert: !1,
        renderPopout: () => r,
        position: "bottom",
        align: "right",
        shouldShow: s,
        spacing: -o,
        animation: G.Y.Animation.NONE,
        targetElementRef: l,
        positionKey: `${n.balance}-${s}`,
        children: () => i,
    });
}
var $ = t(646731),
    z = t(226346);
let J = { START: z.Vl, END: z.Wk };
function X(e) {
    let {
            showNotificationBadge: l,
            ctaText: t,
            ctaOnClick: s,
            onNavigate: d,
            analyticsPage: u,
            className: x,
            pillVariant: f,
            themeOverride: h,
        } = e,
        { balance: m } = (0, p.W)(),
        [A, R] = n.useState(q.k.DEFAULT),
        [E, j] = n.useState(!1),
        [N, k] = n.useState(!1),
        g = n.useRef(null),
        b = n.useRef(null);
    (0, c.j)(!E);
    let v = (0, K.H)({ location: "BalanceWidgetMenu" }),
        O = n.useCallback(() => {
            let e = !E;
            (e &&
                null != u &&
                (0, F.Y)({
                    pageType: u,
                    sectionType: v ? o.A.ORB_WALLET : y.JJy.ORBS_BALANCE_MENU,
                    ctaObject: v ? o.A.ORB_WALLET_OPEN_FROM_BALANCE_PILL : y.ZSU.OPEN_ORB_BALANCE_MENU_FROM_PILL,
                }),
                R(e ? q.k.SELECTED : q.k.DEFAULT),
                j(e));
        }, [E, u, v]),
        _ = n.useCallback(() => {
            E && O();
        }, [E, O]),
        C = (0, r.A)(null, _),
        { hasUnreadUpdate: L } = (0, V.I)({ enabled: v }),
        T = l ?? L,
        S = n.useMemo(
            () =>
                (0, a.jsx)(Y, {
                    pillRef: g,
                    clickableRef: b,
                    ariaExpanded: E,
                    balance: m,
                    balanceWidgetMode: A,
                    onMouseDown: (e) => {
                        e.stopPropagation();
                    },
                    onClick: O,
                    variant: f,
                    themeOverride: h,
                    showNotificationBadge: T,
                }),
            [m, A, f, h, T, O, E],
        ),
        w = n.useCallback(
            (e) =>
                v
                    ? e
                        ? (0, a.jsx)($.EA, {
                              cardRef: C,
                              returnRef: b,
                              targetElementRef: g,
                              shouldShow: e,
                              analyticsPage: u,
                              onCloseWallet: (e) => {
                                  (O(), "navigation" === e && null != d && d());
                              },
                          })
                        : null
                    : (0, a.jsx)(W, {
                          targetElementRef: g,
                          shouldShow: e,
                          onRequestClose: O,
                          ctaText: t,
                          onNavigate: d,
                          ctaOnClick: () => {
                              (O(), s());
                          },
                      }),
            [v, C, g, O, t, s, u, d],
        );
    return (0, a.jsxs)("div", { className: i()(z.kL, x, { [z.R]: N, [z.RK]: !N }), children: [S, w(E)] });
}
X.CardAlignment = J;
