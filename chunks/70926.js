a.d(l, { SS: () => X, cP: () => J });
var t = a(477900),
    n = a(582128),
    s = a(503698),
    i = a.n(s),
    r = a(82495),
    o = a(793574),
    c = a(482589),
    d = a(892227),
    u = a(492462),
    f = a(17928),
    h = a(273875),
    m = a(916845),
    x = a(834730),
    A = a(43990),
    R = a(821609),
    E = a(303136),
    j = a(366505),
    N = a(976860),
    b = a(309954),
    p = a(287809),
    k = a(975571),
    g = a(474090),
    v = a(920050),
    O = a(94264),
    _ = a(549384),
    C = a(566119),
    y = a(202541),
    L = a(652215),
    T = a(901123),
    S = a(923584),
    w = a(105292),
    B = a(226068),
    M = a(268920),
    P = a(633217),
    D = a(909340);
function I() {
    return (0, t.jsx)("div", {
        className: B.s,
        children: (0, t.jsx)(E.A, { src: P.A, fallbackImage: M.A, className: B.Cb }),
    });
}
function U() {
    ((0, C.b)(), window.open(k.A.getArticleURL(L.MVz.ORBS_FAQ), "_blank"));
}
function W(e) {
    let { targetElementRef: l, shouldShow: a, onRequestClose: s, onNavigate: r, ctaText: o, ctaOnClick: c } = e,
        { passesGeneralUIInvariant: k, programReward: M } = (0, j.F)(),
        P = (0, f.bG)([p.default], () => p.default.getCurrentUser()),
        { balance: W } = (0, b.W)(),
        F = !(0, g.ki)(P),
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
            let e = (0, g.YE)(P, y.PremiumTypes.TIER_2);
            if (!k || F) return null;
            if (e && null != M) {
                let e = (0, d.default)(new Date(M.next_reward_date), new Date());
                return (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(x.E, {
                            variant: "body-xs/normal",
                            color: "text-default",
                            children: w.intl.format(S.default["AvL/At"], {
                                days: Math.max(1, e),
                                deepLinkToNitroOrbs: K,
                            }),
                        }),
                        (0, t.jsx)(O.A, {}),
                    ],
                });
            }
            return null;
        }, [P, F, M, k, K]),
        G = (W ?? 0) >= 4100;
    return (0, t.jsx)(h.x, {
        targetElementRef: l,
        shouldShow: a,
        onRequestClose: s,
        position: "bottom",
        gradientColor: "blue",
        modal: !0,
        closeOnClickOutside: !0,
        children: (0, t.jsx)(A.N, {
            theme: G ? L.NJ8.DARK : void 0,
            children: (e) =>
                (0, t.jsxs)("div", {
                    className: i()(e, B.j),
                    children: [
                        G && (0, t.jsx)(E.A, { src: D.A, className: B.yG }),
                        (0, t.jsxs)("div", {
                            className: B.Qs,
                            children: [
                                (0, t.jsx)(m.q, { onClick: s }),
                                (0, t.jsxs)("div", {
                                    className: B.hQ,
                                    children: [
                                        (0, t.jsx)(I, {}),
                                        (0, t.jsxs)("div", {
                                            className: B.y$,
                                            children: [
                                                (W ?? 0) > 0 &&
                                                    (0, t.jsxs)("div", {
                                                        className: B.E2,
                                                        children: [
                                                            (0, t.jsx)(x.E, {
                                                                variant: "display-lg",
                                                                className: B.K,
                                                                children: W ?? 0,
                                                            }),
                                                            (0, t.jsx)(x.E, {
                                                                variant: "body-xs/normal",
                                                                color: "text-muted",
                                                                children: w.intl.string(S.default.KclK9z),
                                                            }),
                                                        ],
                                                    }),
                                                q,
                                            ],
                                        }),
                                        (0, t.jsx)(R.$, {
                                            text: o,
                                            variant: "primary",
                                            size: "sm",
                                            onClick: c,
                                            fullWidth: !0,
                                        }),
                                        (0, t.jsx)(x.E, {
                                            variant: "body-xs/normal",
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
var F = a(318346),
    K = a(362862),
    V = a(923138),
    q = a(305003),
    G = a(265872);
(a(964486), a(786953));
var H = a(505274),
    Q = a(37402);
function Y(e) {
    let { pillRef: l, clickableRef: a, ...n } = e,
        { balancePillOverlay: s } = (0, f.cf)([H.A], () => ({ balancePillOverlay: H.A.balancePillOverlay })),
        i = (0, t.jsx)(Q.Gy, { ref: l, clickableRef: a, ...n }),
        r = (0, t.jsx)(Q.Gy, { ...n, isInModalOverlay: !0, disabled: !0 }),
        o = null != l.current ? l.current.offsetHeight : 36;
    return (0, t.jsx)(G.Y, {
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
var $ = a(646731),
    z = a(226346);
let J = { START: z.Vl, END: z.Wk };
function X(e) {
    let {
            showNotificationBadge: l,
            ctaText: a,
            ctaOnClick: s,
            onNavigate: d,
            analyticsPage: u,
            className: f,
            pillVariant: h,
            themeOverride: m,
        } = e,
        { balance: x } = (0, b.W)(),
        [A, R] = n.useState(q.k.DEFAULT),
        [E, j] = n.useState(!1),
        [N, p] = n.useState(!1),
        k = n.useRef(null),
        g = n.useRef(null);
    (0, c.j)(!E);
    let v = (0, K.Hy)({ location: "BalanceWidgetMenu" }),
        O = n.useCallback(() => {
            let e = !E;
            (e &&
                null != u &&
                (0, F.Y)({
                    pageType: u,
                    sectionType: v ? o.A.ORB_WALLET : L.JJy.ORBS_BALANCE_MENU,
                    ctaObject: v ? o.A.ORB_WALLET_OPEN_FROM_BALANCE_PILL : L.ZSU.OPEN_ORB_BALANCE_MENU_FROM_PILL,
                }),
                R(e ? q.k.SELECTED : q.k.DEFAULT),
                j(e));
        }, [E, u, v]),
        _ = n.useCallback(() => {
            E && O();
        }, [E, O]),
        C = (0, r.A)(null, _),
        { hasUnreadUpdate: y } = (0, V.I)({ enabled: v }),
        T = l ?? y,
        S = n.useMemo(
            () =>
                (0, t.jsx)(Y, {
                    pillRef: k,
                    clickableRef: g,
                    ariaExpanded: E,
                    balance: x,
                    balanceWidgetMode: A,
                    onMouseDown: (e) => {
                        e.stopPropagation();
                    },
                    onClick: O,
                    variant: h,
                    themeOverride: m,
                    showNotificationBadge: T,
                }),
            [x, A, h, m, T, O, E],
        ),
        w = n.useCallback(
            (e) =>
                v
                    ? e
                        ? (0, t.jsx)($.EA, {
                              cardRef: C,
                              returnRef: g,
                              targetElementRef: k,
                              shouldShow: e,
                              analyticsPage: u,
                              onCloseWallet: (e) => {
                                  (O(), "navigation" === e && null != d && d());
                              },
                          })
                        : null
                    : (0, t.jsx)(W, {
                          targetElementRef: k,
                          shouldShow: e,
                          onRequestClose: O,
                          ctaText: a,
                          onNavigate: d,
                          ctaOnClick: () => {
                              (O(), s());
                          },
                      }),
            [v, C, k, O, a, s, u, d],
        );
    return (0, t.jsxs)("div", { className: i()(z.kL, f, { [z.R]: N, [z.RK]: !N }), children: [S, w(E)] });
}
X.CardAlignment = J;
