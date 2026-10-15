a.d(t, { SS: () => X, cP: () => J });
var n = a(477900),
    l = a(582128),
    r = a(503698),
    s = a.n(r),
    i = a(82495),
    u = a(793574),
    o = a(482589),
    c = a(892227),
    d = a(492462),
    m = a(17928),
    f = a(273875),
    x = a(916845),
    h = a(834730),
    v = a(43990),
    g = a(821609),
    k = a(303136),
    C = a(366505),
    j = a(976860),
    p = a(309954),
    A = a(287809),
    E = a(975571),
    b = a(474090),
    R = a(920050),
    N = a(94264),
    y = a(549384),
    L = a(566119),
    O = a(202541),
    S = a(652215),
    _ = a(901123),
    T = a(249755),
    D = a(105292),
    M = a(226068),
    w = a(268920),
    P = a(633217),
    B = a(909340);
function F() {
    return (0, n.jsx)("div", {
        className: M.s,
        children: (0, n.jsx)(k.A, { src: P.A, fallbackImage: w.A, className: M.Cb }),
    });
}
function U() {
    ((0, L.b)(), window.open(E.A.getArticleURL(S.MVz.ORBS_FAQ), "_blank"));
}
function I(e) {
    let { targetElementRef: t, shouldShow: a, onRequestClose: r, onNavigate: i, ctaText: u, ctaOnClick: o } = e,
        { passesGeneralUIInvariant: E, programReward: w } = (0, C.F)(),
        P = (0, m.bG)([A.default], () => A.default.getCurrentUser()),
        { balance: I } = (0, p.W)(),
        W = !(0, b.ki)(P),
        V = l.useCallback(() => {
            ((0, L.RQ)(),
                r(),
                null != i && i(),
                (0, j.pX)(_.BV.NITRO_HOME, { search: (0, d.stringify)({ perk: R.NITRO_ORBS_REWARDS_CARD_ID }) }));
        }, [r, i]),
        q = l.useCallback(() => {
            ((0, L.gP)(),
                r(),
                null != i && i(),
                (0, j.pX)(_.BV.NITRO_HOME, { search: (0, d.stringify)({ section: y.L }) }));
        }, [r, i]),
        z = l.useMemo(() => {
            let e = (0, b.YE)(P, O.PremiumTypes.TIER_2);
            if (!E || W) return null;
            if (e && null != w) {
                let e = (0, c.default)(new Date(w.next_reward_date), new Date());
                return (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(h.E, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: D.intl.format(T.default["AvL/At"], {
                                days: Math.max(1, e),
                                deepLinkToNitroOrbs: V,
                            }),
                        }),
                        (0, n.jsx)(N.A, {}),
                    ],
                });
            }
            return null;
        }, [P, W, w, E, V]),
        G = (I ?? 0) >= 4100;
    return (0, n.jsx)(f.x, {
        targetElementRef: t,
        shouldShow: a,
        onRequestClose: r,
        position: "bottom",
        gradientColor: "blue",
        modal: !0,
        closeOnClickOutside: !0,
        children: (0, n.jsx)(v.N, {
            theme: G ? S.NJ8.DARK : void 0,
            children: (e) =>
                (0, n.jsxs)("div", {
                    className: s()(e, M.j),
                    children: [
                        G && (0, n.jsx)(k.A, { src: B.A, className: M.yG }),
                        (0, n.jsxs)("div", {
                            className: M.Qs,
                            children: [
                                (0, n.jsx)(x.q, { onClick: r }),
                                (0, n.jsxs)("div", {
                                    className: M.hQ,
                                    children: [
                                        (0, n.jsx)(F, {}),
                                        (0, n.jsxs)("div", {
                                            className: M.y$,
                                            children: [
                                                (I ?? 0) > 0 &&
                                                    (0, n.jsxs)("div", {
                                                        className: M.E2,
                                                        children: [
                                                            (0, n.jsx)(h.E, {
                                                                variant: "display-lg",
                                                                className: M.K,
                                                                children: I ?? 0,
                                                            }),
                                                            (0, n.jsx)(h.E, {
                                                                variant: "text-xs/normal",
                                                                color: "text-muted",
                                                                children: D.intl.string(T.default.KclK9z),
                                                            }),
                                                        ],
                                                    }),
                                                z,
                                            ],
                                        }),
                                        (0, n.jsx)(g.$, {
                                            text: u,
                                            variant: "primary",
                                            size: "sm",
                                            onClick: o,
                                            fullWidth: !0,
                                        }),
                                        (0, n.jsx)(h.E, {
                                            variant: "text-xs/normal",
                                            color: W ? "text-default" : "text-muted",
                                            className: M.CU,
                                            children: W
                                                ? D.intl.format(T.default.juvXqj, { deepLinkToNitroOrbs: q })
                                                : D.intl.format(T.default.fhAVek, { helpdeskArticle: U }),
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
var W = a(318346),
    V = a(362862),
    q = a(923138),
    z = a(305003),
    G = a(922016);
(a(964486), a(786953));
var K = a(505274),
    $ = a(37402);
function H(e) {
    let { pillRef: t, clickableRef: a, ...l } = e,
        { balancePillOverlay: r } = (0, m.cf)([K.A], () => ({ balancePillOverlay: K.A.balancePillOverlay })),
        s = (0, n.jsx)($.Gy, { ref: t, clickableRef: a, ...l }),
        i = (0, n.jsx)($.Gy, { ...l, isInModalOverlay: !0, disabled: !0 }),
        u = null != t.current ? t.current.offsetHeight : 36;
    return (0, n.jsx)(G.Y, {
        fixed: !0,
        autoInvert: !1,
        renderPopout: () => i,
        position: "bottom",
        align: "right",
        shouldShow: r,
        spacing: -u,
        animation: G.Y.Animation.NONE,
        targetElementRef: t,
        positionKey: `${l.balance}-${r}`,
        children: () => s,
    });
}
var Q = a(646731),
    Y = a(226346);
let J = { START: Y.Vl, END: Y.Wk };
function X(e) {
    let {
            showNotificationBadge: t,
            ctaText: a,
            ctaOnClick: r,
            onNavigate: c,
            analyticsPage: d,
            className: m,
            pillVariant: f,
            themeOverride: x,
        } = e,
        { balance: h } = (0, p.W)(),
        [v, g] = l.useState(z.k.DEFAULT),
        [k, C] = l.useState(!1),
        [j, A] = l.useState(!1),
        E = l.useRef(null),
        b = l.useRef(null);
    (0, o.j)(!k);
    let R = (0, V.H)({ location: "BalanceWidgetMenu" }),
        N = l.useCallback(() => {
            let e = !k;
            (e &&
                null != d &&
                (0, W.Y)({
                    pageType: d,
                    sectionType: R ? u.A.ORB_WALLET : S.JJy.ORBS_BALANCE_MENU,
                    ctaObject: R ? u.A.ORB_WALLET_OPEN_FROM_BALANCE_PILL : S.ZSU.OPEN_ORB_BALANCE_MENU_FROM_PILL,
                }),
                g(e ? z.k.SELECTED : z.k.DEFAULT),
                C(e));
        }, [k, d, R]),
        y = l.useCallback(() => {
            k && N();
        }, [k, N]),
        L = (0, i.A)(null, y),
        { hasUnreadUpdate: O } = (0, q.I)({ enabled: R }),
        _ = t ?? O,
        T = l.useMemo(
            () =>
                (0, n.jsx)(H, {
                    pillRef: E,
                    clickableRef: b,
                    ariaExpanded: k,
                    balance: h,
                    balanceWidgetMode: v,
                    onMouseDown: (e) => {
                        e.stopPropagation();
                    },
                    onClick: N,
                    variant: f,
                    themeOverride: x,
                    showNotificationBadge: _,
                }),
            [h, v, f, x, _, N, k],
        ),
        D = l.useCallback(
            (e) =>
                R
                    ? e
                        ? (0, n.jsx)(Q.EA, {
                              cardRef: L,
                              returnRef: b,
                              targetElementRef: E,
                              shouldShow: e,
                              analyticsPage: d,
                              onCloseWallet: (e) => {
                                  (N(), "navigation" === e && null != c && c());
                              },
                          })
                        : null
                    : (0, n.jsx)(I, {
                          targetElementRef: E,
                          shouldShow: e,
                          onRequestClose: N,
                          ctaText: a,
                          onNavigate: c,
                          ctaOnClick: () => {
                              (N(), r());
                          },
                      }),
            [R, L, E, N, a, r, d, c],
        );
    return (0, n.jsxs)("div", { className: s()(Y.kL, m, { [Y.R]: j, [Y.RK]: !j }), children: [T, D(k)] });
}
X.CardAlignment = J;
