a.d(t, { SS: () => ee, cP: () => Z });
var n = a(477900),
    l = a(582128),
    r = a(503698),
    s = a.n(r),
    i = a(82495),
    u = a(793574),
    o = a(482589),
    c = a(892227),
    d = a(492462),
    f = a(17928),
    m = a(273875),
    x = a(916845),
    h = a(834730),
    v = a(43990),
    g = a(821609),
    p = a(303136),
    j = a(366505),
    k = a(976860),
    A = a(309954),
    C = a(287809),
    E = a(975571),
    R = a(474090),
    b = a(920050),
    N = a(94264),
    y = a(549384),
    L = a(566119),
    O = a(202541),
    S = a(652215),
    _ = a(901123),
    T = a(249755),
    D = a(375708),
    M = a(226068),
    w = a(268920),
    P = a(633217),
    B = a(909340);
function F() {
    return (0, n.jsx)("div", {
        className: M.s,
        children: (0, n.jsx)(p.A, { src: P.A, fallbackImage: w.A, className: M.Cb }),
    });
}
function U() {
    ((0, L.RQ)(), (0, k.pX)(_.BV.NITRO_HOME, { search: (0, d.stringify)({ perk: b.NITRO_ORBS_REWARDS_CARD_ID }) }));
}
function I() {
    ((0, L.gP)(), (0, k.pX)(_.BV.NITRO_HOME, { search: (0, d.stringify)({ section: y.L }) }));
}
function W() {
    ((0, L.b)(), window.open(E.A.getArticleURL(S.MVz.ORBS_FAQ), "_blank"));
}
function V(e) {
    let { targetElementRef: t, shouldShow: a, onRequestClose: r, ctaText: i, ctaOnClick: u } = e,
        { passesGeneralUIInvariant: o, programReward: d } = (0, j.F)({
            location: "PremiumTenureRewardsOrbsBalancePopover",
        }),
        k = (0, f.bG)([C.default], () => C.default.getCurrentUser()),
        { balance: E } = (0, A.W)(),
        b = !(0, R.ki)(k),
        y = l.useMemo(() => {
            let e = (0, R.YE)(k, O.PremiumTypes.TIER_2);
            if (!o || b) return null;
            if (e && null != d) {
                let e = (0, c.default)(new Date(d.next_reward_date), new Date());
                return (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(h.E, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: D.intl.format(T.default["AvL/At"], {
                                days: Math.max(1, e),
                                deepLinkToNitroOrbs: U,
                            }),
                        }),
                        (0, n.jsx)(N.A, {}),
                    ],
                });
            }
            return null;
        }, [k, b, d, o]),
        L = (E ?? 0) >= 4100;
    return (0, n.jsx)(m.x, {
        targetElementRef: t,
        shouldShow: a,
        onRequestClose: r,
        position: "bottom",
        gradientColor: "blue",
        modal: !0,
        closeOnClickOutside: !0,
        children: (0, n.jsx)(v.N, {
            theme: L ? S.NJ8.DARK : void 0,
            children: (e) =>
                (0, n.jsxs)("div", {
                    className: s()(e, M.j),
                    children: [
                        L && (0, n.jsx)(p.A, { src: B.A, className: M.yG }),
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
                                                (E ?? 0) > 0 &&
                                                    (0, n.jsxs)("div", {
                                                        className: M.E2,
                                                        children: [
                                                            (0, n.jsx)(h.E, {
                                                                variant: "display-lg",
                                                                className: M.K,
                                                                children: E ?? 0,
                                                            }),
                                                            (0, n.jsx)(h.E, {
                                                                variant: "text-xs/normal",
                                                                color: "text-muted",
                                                                children: D.intl.string(T.default.KclK9z),
                                                            }),
                                                        ],
                                                    }),
                                                y,
                                            ],
                                        }),
                                        (0, n.jsx)(g.$, {
                                            text: i,
                                            variant: "primary",
                                            size: "sm",
                                            onClick: u,
                                            fullWidth: !0,
                                        }),
                                        (0, n.jsx)(h.E, {
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
var q = a(318346),
    z = a(362862),
    G = a(923138),
    K = a(305003),
    $ = a(922016);
(a(964486), a(786953));
var H = a(505274),
    Q = a(37402);
function Y(e) {
    let { pillRef: t, clickableRef: a, ...l } = e,
        { balancePillOverlay: r } = (0, f.cf)([H.A], () => ({ balancePillOverlay: H.A.balancePillOverlay })),
        s = (0, n.jsx)(Q.Gy, { ref: t, clickableRef: a, ...l }),
        i = (0, n.jsx)(Q.Gy, { ...l, isInModalOverlay: !0, disabled: !0 }),
        u = null != t.current ? t.current.offsetHeight : 36;
    return (0, n.jsx)($.Y, {
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
var J = a(276130),
    X = a(226346);
let Z = { START: X.Vl, END: X.Wk };
function ee(e) {
    let { showNotificationBadge: t, ctaText: a, ctaOnClick: r, analyticsPage: c, className: d, pillVariant: f } = e,
        { balance: m } = (0, A.W)(),
        [x, h] = l.useState(K.k.DEFAULT),
        [v, g] = l.useState(!1),
        [p, j] = l.useState(!1),
        k = l.useRef(null),
        C = l.useRef(null);
    (0, o.j)(!v);
    let E = (0, z.H)({ location: "BalanceWidgetMenu" }),
        R = l.useCallback(() => {
            let e = !v;
            (e &&
                null != c &&
                (0, q.Y)({
                    pageType: c,
                    sectionType: E ? u.A.ORB_WALLET : S.JJy.ORBS_BALANCE_MENU,
                    ctaObject: E ? u.A.ORB_WALLET_OPEN_FROM_BALANCE_PILL : S.ZSU.OPEN_ORB_BALANCE_MENU_FROM_PILL,
                }),
                h(e ? K.k.SELECTED : K.k.DEFAULT),
                g(e));
        }, [v, c, E]),
        b = l.useCallback(() => {
            v && R();
        }, [v, R]),
        N = (0, i.A)(null, b),
        { hasUnreadUpdate: y } = (0, G.I)({ enabled: E }),
        L = t ?? y,
        O = l.useMemo(
            () =>
                (0, n.jsx)(Y, {
                    pillRef: k,
                    clickableRef: C,
                    ariaExpanded: v,
                    balance: m,
                    balanceWidgetMode: x,
                    onMouseDown: (e) => {
                        e.stopPropagation();
                    },
                    onClick: R,
                    variant: f,
                    showNotificationBadge: L,
                }),
            [m, x, f, L, R, v],
        ),
        _ = l.useCallback(
            (e) =>
                E
                    ? e
                        ? (0, n.jsx)(J.EA, {
                              cardRef: N,
                              returnRef: C,
                              targetElementRef: k,
                              shouldShow: e,
                              analyticsPage: c,
                              onCloseWallet: R,
                          })
                        : null
                    : (0, n.jsx)(V, {
                          targetElementRef: k,
                          shouldShow: e,
                          onRequestClose: R,
                          ctaText: a,
                          ctaOnClick: () => {
                              (R(), r());
                          },
                      }),
            [E, N, k, R, a, r, c],
        );
    return (0, n.jsxs)("div", { className: s()(X.kL, d, { [X.R]: p, [X.RK]: !p }), children: [O, _(v)] });
}
ee.CardAlignment = Z;
