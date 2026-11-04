a.d(l, { SS: () => J, cP: () => z });
var t = a(477900),
    n = a(582128),
    s = a(503698),
    i = a.n(s),
    r = a(82495),
    o = a(793574),
    c = a(482589),
    d = a(892227),
    u = a(492462),
    h = a(855986),
    f = a(195118),
    m = a(916845),
    x = a(834730),
    A = a(43990),
    R = a(821609),
    E = a(303136),
    b = a(622886),
    j = a(976860),
    N = a(309954),
    p = a(287809),
    k = a(975571),
    v = a(474090),
    g = a(920050),
    O = a(94264);
a(159975);
var _ = a(566119),
    C = a(682901),
    y = a(652215),
    L = a(901123),
    T = a(17268),
    S = a(792996),
    w = a(226068),
    B = a(268920),
    M = a(633217),
    P = a(909340);
function D() {
    return (0, t.jsx)("div", {
        className: w.s,
        children: (0, t.jsx)(E.A, { src: M.A, fallbackImage: B.A, className: w.Cb }),
    });
}
function I() {
    ((0, _.b)(), window.open(k.A.getArticleURL(y.MVz.ORBS_FAQ), "_blank"));
}
function U(e) {
    let { targetElementRef: l, shouldShow: a, onRequestClose: s, onNavigate: r, ctaText: o, ctaOnClick: c } = e,
        { passesGeneralUIInvariant: k, programReward: B } = (0, b.F)(),
        M = (0, h.bG)([p.default], () => p.default.getCurrentUser()),
        { balance: U } = (0, N.W)(),
        W = !(0, v.ki)(M),
        F = n.useCallback(() => {
            ((0, _.RQ)(),
                s(),
                null != r && r(),
                (0, j.pX)(L.BV.NITRO_HOME, { search: (0, u.As)({ perk: g.NITRO_ORBS_REWARDS_CARD_ID }) }));
        }, [s, r]),
        K = n.useCallback(() => {
            ((0, _.gP)(),
                s(),
                null != r && r(),
                (0, j.pX)(L.BV.NITRO_HOME, { search: (0, u.As)({ section: "orbs" }) }));
        }, [s, r]),
        V = n.useMemo(() => {
            let e = (0, v.YE)(M, C.PremiumTypes.TIER_2);
            if (!k || W) return null;
            if (e && null != B) {
                let e = (0, d.default)(new Date(B.next_reward_date), new Date());
                return (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(x.E, {
                            variant: "body-xs/normal",
                            color: "text-default",
                            children: S.intl.format(T.default["AvL/At"], {
                                days: Math.max(1, e),
                                deepLinkToNitroOrbs: F,
                            }),
                        }),
                        (0, t.jsx)(O.A, {}),
                    ],
                });
            }
            return null;
        }, [M, W, B, k, F]),
        q = (U ?? 0) >= 4100;
    return (0, t.jsx)(f.x, {
        targetElementRef: l,
        shouldShow: a,
        onRequestClose: s,
        position: "bottom",
        gradientColor: "blue",
        modal: !0,
        closeOnClickOutside: !0,
        children: (0, t.jsx)(A.N, {
            theme: q ? y.NJ8.DARK : void 0,
            children: (e) =>
                (0, t.jsxs)("div", {
                    className: i()(e, w.j),
                    children: [
                        q && (0, t.jsx)(E.A, { src: P.A, className: w.yG }),
                        (0, t.jsxs)("div", {
                            className: w.Qs,
                            children: [
                                (0, t.jsx)(m.q, { onClick: s }),
                                (0, t.jsxs)("div", {
                                    className: w.hQ,
                                    children: [
                                        (0, t.jsx)(D, {}),
                                        (0, t.jsxs)("div", {
                                            className: w.y$,
                                            children: [
                                                (U ?? 0) > 0 &&
                                                    (0, t.jsxs)("div", {
                                                        className: w.E2,
                                                        children: [
                                                            (0, t.jsx)(x.E, {
                                                                variant: "display-lg",
                                                                className: w.K,
                                                                children: U ?? 0,
                                                            }),
                                                            (0, t.jsx)(x.E, {
                                                                variant: "body-xs/normal",
                                                                color: "text-muted",
                                                                children: S.intl.string(T.default.KclK9z),
                                                            }),
                                                        ],
                                                    }),
                                                V,
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
                                            color: W ? "text-default" : "text-muted",
                                            className: w.CU,
                                            children: W
                                                ? S.intl.format(T.default.juvXqj, { deepLinkToNitroOrbs: K })
                                                : S.intl.format(T.default.fhAVek, { helpdeskArticle: I }),
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
    F = a(362862),
    K = a(923138),
    V = a(305003),
    q = a(265872);
(a(964486), a(786953));
var G = a(505274),
    H = a(533609);
function Q(e) {
    let { pillRef: l, clickableRef: a, ...n } = e,
        { balancePillOverlay: s } = (0, h.cf)([G.A], () => ({ balancePillOverlay: G.A.balancePillOverlay })),
        i = (0, t.jsx)(H.Gy, { ref: l, clickableRef: a, ...n }),
        r = (0, t.jsx)(H.Gy, { ...n, isInModalOverlay: !0, disabled: !0 }),
        o = null != l.current ? l.current.offsetHeight : 36;
    return (0, t.jsx)(q.Y, {
        fixed: !0,
        autoInvert: !1,
        renderPopout: () => r,
        position: "bottom",
        align: "right",
        shouldShow: s,
        spacing: -o,
        animation: q.Y.Animation.NONE,
        targetElementRef: l,
        positionKey: `${n.balance}-${s}`,
        children: () => i,
    });
}
var Y = a(150849),
    $ = a(226346);
let z = { START: $.Vl, END: $.Wk };
function J(e) {
    let {
            showNotificationBadge: l,
            ctaText: a,
            ctaOnClick: s,
            onNavigate: d,
            analyticsPage: u,
            className: h,
            pillVariant: f,
            themeOverride: m,
        } = e,
        { balance: x } = (0, N.W)(),
        [A, R] = n.useState(V.k.DEFAULT),
        [E, b] = n.useState(!1),
        [j, p] = n.useState(!1),
        k = n.useRef(null),
        v = n.useRef(null);
    (0, c.j)(!E);
    let g = (0, F.Hy)({ location: "BalanceWidgetMenu" }),
        O = n.useCallback(() => {
            let e = !E;
            (e &&
                null != u &&
                (0, W.Y)({
                    pageType: u,
                    sectionType: g ? o.A.ORB_WALLET : y.JJy.ORBS_BALANCE_MENU,
                    ctaObject: g ? o.A.ORB_WALLET_OPEN_FROM_BALANCE_PILL : y.ZSU.OPEN_ORB_BALANCE_MENU_FROM_PILL,
                }),
                R(e ? V.k.SELECTED : V.k.DEFAULT),
                b(e));
        }, [E, u, g]),
        _ = n.useCallback(() => {
            E && O();
        }, [E, O]),
        C = (0, r.A)(null, _),
        { hasUnreadUpdate: L } = (0, K.I)({ enabled: g }),
        T = l ?? L,
        S = n.useMemo(
            () =>
                (0, t.jsx)(Q, {
                    pillRef: k,
                    clickableRef: v,
                    ariaExpanded: E,
                    balance: x,
                    balanceWidgetMode: A,
                    onMouseDown: (e) => {
                        e.stopPropagation();
                    },
                    onClick: O,
                    variant: f,
                    themeOverride: m,
                    showNotificationBadge: T,
                }),
            [x, A, f, m, T, O, E],
        ),
        w = n.useCallback(
            (e) =>
                g
                    ? e
                        ? (0, t.jsx)(Y.EA, {
                              cardRef: C,
                              returnRef: v,
                              targetElementRef: k,
                              shouldShow: e,
                              analyticsPage: u,
                              onCloseWallet: (e) => {
                                  (O(), "navigation" === e && null != d && d());
                              },
                          })
                        : null
                    : (0, t.jsx)(U, {
                          targetElementRef: k,
                          shouldShow: e,
                          onRequestClose: O,
                          ctaText: a,
                          onNavigate: d,
                          ctaOnClick: () => {
                              (O(), s());
                          },
                      }),
            [g, C, k, O, a, s, u, d],
        );
    return (0, t.jsxs)("div", { className: i()($.kL, h, { [$.R]: j, [$.RK]: !j }), children: [S, w(E)] });
}
J.CardAlignment = z;
