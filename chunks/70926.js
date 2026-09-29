n.d(t, { SS: () => ee, cP: () => Z });
var a = n(477900),
    l = n(582128),
    r = n(503698),
    s = n.n(r),
    i = n(82495),
    u = n(793574),
    o = n(482589),
    c = n(892227),
    d = n(492462),
    f = n(17928),
    m = n(273875),
    x = n(916845),
    h = n(834730),
    g = n(43990),
    p = n(821609),
    j = n(303136),
    k = n(366505),
    A = n(976860),
    E = n(309954),
    v = n(287809),
    C = n(975571),
    R = n(474090),
    b = n(920050),
    N = n(94264),
    L = n(549384),
    O = n(566119),
    S = n(202541),
    _ = n(652215),
    y = n(901123),
    T = n(249755),
    D = n(375708),
    M = n(226068),
    w = n(268920),
    P = n(633217),
    B = n(909340);
function F() {
    return (0, a.jsx)("div", {
        className: M.s,
        children: (0, a.jsx)(j.A, { src: P.A, fallbackImage: w.A, className: M.Cb }),
    });
}
function U() {
    ((0, O.RQ)(), (0, A.pX)(y.BV.NITRO_HOME, { search: (0, d.stringify)({ perk: b.NITRO_ORBS_REWARDS_CARD_ID }) }));
}
function I() {
    ((0, O.gP)(), (0, A.pX)(y.BV.NITRO_HOME, { search: (0, d.stringify)({ section: L.L }) }));
}
function W() {
    ((0, O.b)(), window.open(C.A.getArticleURL(_.MVz.ORBS_FAQ), "_blank"));
}
function V(e) {
    let { targetElementRef: t, shouldShow: n, onRequestClose: r, ctaText: i, ctaOnClick: u } = e,
        { passesGeneralUIInvariant: o, programReward: d } = (0, k.F)({
            location: "PremiumTenureRewardsOrbsBalancePopover",
        }),
        A = (0, f.bG)([v.default], () => v.default.getCurrentUser()),
        { balance: C } = (0, E.W)(),
        b = !(0, R.ki)(A),
        L = l.useMemo(() => {
            let e = (0, R.YE)(A, S.PremiumTypes.TIER_2);
            if (!o || b) return null;
            if (e && null != d) {
                let e = (0, c.default)(new Date(d.next_reward_date), new Date());
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(h.E, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: D.intl.format(T.default["AvL/At"], {
                                days: Math.max(1, e),
                                deepLinkToNitroOrbs: U,
                            }),
                        }),
                        (0, a.jsx)(N.A, {}),
                    ],
                });
            }
            return null;
        }, [A, b, d, o]),
        O = (C ?? 0) >= 4100;
    return (0, a.jsx)(m.x, {
        targetElementRef: t,
        shouldShow: n,
        onRequestClose: r,
        position: "bottom",
        gradientColor: "blue",
        modal: !0,
        closeOnClickOutside: !0,
        children: (0, a.jsx)(g.N, {
            theme: O ? _.NJ8.DARK : void 0,
            children: (e) =>
                (0, a.jsxs)("div", {
                    className: s()(e, M.j),
                    children: [
                        O && (0, a.jsx)(j.A, { src: B.A, className: M.yG }),
                        (0, a.jsxs)("div", {
                            className: M.Qs,
                            children: [
                                (0, a.jsx)(x.q, { onClick: r }),
                                (0, a.jsxs)("div", {
                                    className: M.hQ,
                                    children: [
                                        (0, a.jsx)(F, {}),
                                        (0, a.jsxs)("div", {
                                            className: M.y$,
                                            children: [
                                                (C ?? 0) > 0 &&
                                                    (0, a.jsxs)("div", {
                                                        className: M.E2,
                                                        children: [
                                                            (0, a.jsx)(h.E, {
                                                                variant: "display-lg",
                                                                className: M.K,
                                                                children: C ?? 0,
                                                            }),
                                                            (0, a.jsx)(h.E, {
                                                                variant: "text-xs/normal",
                                                                color: "text-muted",
                                                                children: D.intl.string(T.default.KclK9z),
                                                            }),
                                                        ],
                                                    }),
                                                L,
                                            ],
                                        }),
                                        (0, a.jsx)(p.$, {
                                            text: i,
                                            variant: "primary",
                                            size: "sm",
                                            onClick: u,
                                            fullWidth: !0,
                                        }),
                                        (0, a.jsx)(h.E, {
                                            variant: "text-xs/normal",
                                            color: b ? "text-default" : "text-muted",
                                            className: M.CU,
                                            children: b
                                                ? D.intl.format(T.default.juvXqj, { deepLinkToNitroOrbs: I })
                                                : D.intl.format(T.default.fhAVek, { helpdeskArticle: W }),
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
var q = n(318346),
    z = n(362862),
    G = n(923138),
    K = n(305003),
    $ = n(922016);
(n(964486), n(786953));
var H = n(505274),
    Q = n(37402);
function Y(e) {
    let { pillRef: t, clickableRef: n, ...l } = e,
        { balancePillOverlay: r } = (0, f.cf)([H.A], () => ({ balancePillOverlay: H.A.balancePillOverlay })),
        s = (0, a.jsx)(Q.Gy, { ref: t, clickableRef: n, ...l }),
        i = (0, a.jsx)(Q.Gy, { ...l, isInModalOverlay: !0, disabled: !0 }),
        u = null != t.current ? t.current.offsetHeight : 36;
    return (0, a.jsx)($.Y, {
        fixed: !0,
        autoInvert: !1,
        renderPopout: () => i,
        position: "bottom",
        align: "right",
        shouldShow: r,
        spacing: -u,
        animation: $.Y.Animation.NONE,
        targetElementRef: t,
        positionKey: `${l.balance}-${r}`,
        children: () => s,
    });
}
var J = n(276130),
    X = n(226346);
let Z = { START: X.Vl, END: X.Wk };
function ee(e) {
    let { showNotificationBadge: t, ctaText: n, ctaOnClick: r, analyticsPage: c, className: d } = e,
        { balance: f } = (0, E.W)(),
        [m, x] = l.useState(K.k.DEFAULT),
        [h, g] = l.useState(!1),
        [p, j] = l.useState(!1),
        k = l.useRef(null),
        A = l.useRef(null);
    (0, o.j)(!h);
    let v = (0, z.H)({ location: "BalanceWidgetMenu" }),
        C = l.useCallback(() => {
            let e = !h;
            (e &&
                null != c &&
                (0, q.Y)({
                    pageType: c,
                    sectionType: v ? u.A.ORB_WALLET : _.JJy.ORBS_BALANCE_MENU,
                    ctaObject: v ? u.A.ORB_WALLET_OPEN_FROM_BALANCE_PILL : _.ZSU.OPEN_ORB_BALANCE_MENU_FROM_PILL,
                }),
                x(e ? K.k.SELECTED : K.k.DEFAULT),
                g(e));
        }, [h, c, v]),
        R = l.useCallback(() => {
            h && C();
        }, [h, C]),
        b = (0, i.A)(null, R),
        { hasUnreadUpdate: N } = (0, G.I)({ enabled: v }),
        L = t ?? N,
        O = l.useMemo(
            () =>
                (0, a.jsx)(Y, {
                    pillRef: k,
                    clickableRef: A,
                    ariaExpanded: h,
                    balance: f,
                    balanceWidgetMode: m,
                    onMouseDown: (e) => {
                        e.stopPropagation();
                    },
                    onClick: C,
                    showNotificationBadge: L,
                }),
            [f, m, L, C, h],
        ),
        S = l.useCallback(
            (e) =>
                v
                    ? e
                        ? (0, a.jsx)(J.EA, {
                              cardRef: b,
                              returnRef: A,
                              targetElementRef: k,
                              shouldShow: e,
                              analyticsPage: c,
                              onCloseWallet: C,
                          })
                        : null
                    : (0, a.jsx)(V, {
                          targetElementRef: k,
                          shouldShow: e,
                          onRequestClose: C,
                          ctaText: n,
                          ctaOnClick: () => {
                              (C(), r());
                          },
                      }),
            [v, b, k, C, n, r, c],
        );
    return (0, a.jsxs)("div", { className: s()(X.kL, d, { [X.R]: p, [X.RK]: !p }), children: [O, S(h)] });
}
ee.CardAlignment = Z;
