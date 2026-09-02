n.d(t, { SS: () => en, cP: () => et });
var a = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    i = n(82495),
    u = n(482589),
    c = n(892227),
    o = n(492462),
    d = n(17928),
    m = n(273875),
    f = n(916845),
    x = n(834730),
    h = n(43990),
    j = n(821609),
    k = n(303136),
    v = n(366505),
    g = n(976860),
    A = n(309954),
    C = n(287809),
    R = n(975571),
    N = n(474090),
    E = n(920050),
    b = n(94264),
    p = n(549384),
    y = n(566119),
    O = n(202541),
    S = n(652215),
    T = n(901123),
    _ = n(1889),
    L = n(375708),
    M = n(226068),
    D = n(268920),
    w = n(633217),
    B = n(909340);
function P() {
    return (0, a.jsx)("div", {
        className: M.s,
        children: (0, a.jsx)(k.A, { src: w.A, fallbackImage: D.A, className: M.Cb }),
    });
}
function U() {
    (0, y.RQ)(), (0, g.pX)(T.BV.NITRO_HOME, { search: (0, o.stringify)({ perk: E.NITRO_ORBS_REWARDS_CARD_ID }) });
}
function F() {
    (0, y.gP)(), (0, g.pX)(T.BV.NITRO_HOME, { search: (0, o.stringify)({ section: p.L }) });
}
function I() {
    (0, y.b)(), window.open(R.A.getArticleURL(S.MVz.ORBS_FAQ), "_blank");
}
function W(e) {
    let { targetElementRef: t, shouldShow: n, onRequestClose: s, ctaText: i, ctaOnClick: u } = e,
        { passesGeneralUIInvariant: o, programReward: g } = (0, v.F)({
            location: "PremiumTenureRewardsOrbsBalancePopover",
        }),
        R = (0, d.bG)([C.default], () => C.default.getCurrentUser()),
        { balance: E } = (0, A.W)(),
        p = !(0, N.ki)(R),
        y = l.useMemo(() => {
            let e = (0, N.YE)(R, O.PremiumTypes.TIER_2);
            if (!o || p) return null;
            if (e && null != g) {
                let e = (0, c.default)(new Date(g.next_reward_date), new Date());
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(x.E, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: L.intl.format(_.default["AvL/At"], {
                                days: Math.max(1, e),
                                deepLinkToNitroOrbs: U,
                            }),
                        }),
                        (0, a.jsx)(b.A, {}),
                    ],
                });
            }
            return null;
        }, [R, p, g, o]),
        T = (E ?? 0) >= 4100;
    return (0, a.jsx)(m.x, {
        targetElementRef: t,
        shouldShow: n,
        onRequestClose: s,
        position: "bottom",
        gradientColor: "blue",
        modal: !0,
        closeOnClickOutside: !0,
        children: (0, a.jsx)(h.N, {
            theme: T ? S.NJ8.DARKER : void 0,
            children: (e) =>
                (0, a.jsxs)("div", {
                    className: r()(e, M.j),
                    children: [
                        T && (0, a.jsx)(k.A, { src: B.A, className: M.yG }),
                        (0, a.jsxs)("div", {
                            className: M.Qs,
                            children: [
                                (0, a.jsx)(f.q, { onClick: s }),
                                (0, a.jsxs)("div", {
                                    className: M.hQ,
                                    children: [
                                        (0, a.jsx)(P, {}),
                                        (0, a.jsxs)("div", {
                                            className: M.y$,
                                            children: [
                                                (E ?? 0) > 0 &&
                                                    (0, a.jsxs)("div", {
                                                        className: M.E2,
                                                        children: [
                                                            (0, a.jsx)(x.E, {
                                                                variant: "display-lg",
                                                                className: M.K,
                                                                children: E ?? 0,
                                                            }),
                                                            (0, a.jsx)(x.E, {
                                                                variant: "text-xs/normal",
                                                                color: "text-muted",
                                                                children: L.intl.string(_.default.KclK9z),
                                                            }),
                                                        ],
                                                    }),
                                                y,
                                            ],
                                        }),
                                        (0, a.jsx)(j.$, {
                                            text: i,
                                            variant: "primary",
                                            size: "sm",
                                            onClick: u,
                                            fullWidth: !0,
                                        }),
                                        (0, a.jsx)(x.E, {
                                            variant: "text-xs/normal",
                                            color: p ? "text-default" : "text-muted",
                                            className: M.CU,
                                            children: p
                                                ? L.intl.format(_.default.juvXqj, { deepLinkToNitroOrbs: F })
                                                : L.intl.format(_.default.fhAVek, { helpdeskArticle: I }),
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
var z = n(440005),
    K = n(26508),
    V = n(318346),
    q = n(362862),
    $ = n(923138),
    G = n(305003),
    H = n(162097),
    J = n(922016);
n(964486), n(786953);
var Q = n(505274),
    X = n(37402);
function Y(e) {
    let { pillRef: t, ...n } = e,
        { balancePillOverlay: l } = (0, d.cf)([Q.A], () => ({ balancePillOverlay: Q.A.balancePillOverlay })),
        s = (0, a.jsx)(X.Gy, { ref: t, ...n }),
        r = (0, a.jsx)(X.Gy, { ...n, isInModalOverlay: !0, disabled: !0 }),
        i = null != t.current ? t.current.offsetHeight : 36;
    return (0, a.jsx)(J.Y, {
        fixed: !0,
        autoInvert: !1,
        renderPopout: () => r,
        position: "bottom",
        align: "right",
        shouldShow: l,
        spacing: -i,
        animation: J.Y.Animation.NONE,
        targetElementRef: t,
        positionKey: `${n.balance}-${l}`,
        children: () => s,
    });
}
var Z = n(276130),
    ee = n(226346);
let et = { START: ee.Vl, END: ee.Wk };
function en(e) {
    let {
            showNotificationBadge: t,
            ctaText: n,
            ctaOnClick: s,
            analyticsPage: c,
            linkText: o = L.intl.string(L.t.XRdyjz),
            cardAlignment: d = et.START,
            className: m,
        } = e,
        { balance: f } = (0, A.W)(),
        x = (0, K.DK)(z.W.NITRO, "BalanceWidgetMenu"),
        [h, j] = l.useState(G.k.DEFAULT),
        [k, v] = l.useState(!1),
        [g, C] = l.useState(!1),
        R = l.useRef(null);
    (0, u.j)(!k);
    let N = l.useCallback(() => {
            let e = !k;
            e &&
                null != c &&
                (0, V.Y)({
                    pageType: c,
                    sectionType: S.JJy.ORBS_BALANCE_MENU,
                    ctaObject: S.ZSU.OPEN_ORB_BALANCE_MENU_FROM_PILL,
                }),
                j(e ? G.k.SELECTED : G.k.DEFAULT),
                v(e);
        }, [k, c]),
        E = l.useCallback(() => {
            k && N();
        }, [k, N]),
        b = (0, i.A)(null, E),
        p = l.useMemo(
            () =>
                (0, a.jsx)(H.b, {
                    analyticsPage: c,
                    ctaText: n,
                    ctaOnClick: () => {
                        N(), s();
                    },
                    linkText: o,
                }),
            [c, n, o, N, s],
        ),
        y = (0, q.H)({ location: "BalanceWidgetMenu" }),
        { hasUnreadUpdate: O } = (0, $.I)({ enabled: y }),
        T = t ?? O,
        _ = l.useMemo(
            () =>
                (0, a.jsx)(Y, {
                    pillRef: R,
                    balance: f,
                    balanceWidgetMode: h,
                    onMouseDown: (e) => {
                        e.stopPropagation();
                    },
                    onClick: N,
                    showNotificationBadge: T,
                }),
            [f, h, T, N],
        ),
        M = l.useCallback(
            (e, t) =>
                y
                    ? e
                        ? (0, a.jsx)(Z.EA, { cardRef: b, targetElementRef: R, shouldShow: e })
                        : null
                    : x
                      ? (0, a.jsx)(W, {
                            targetElementRef: R,
                            shouldShow: e,
                            onRequestClose: N,
                            ctaText: n,
                            ctaOnClick: () => {
                                N(), s();
                            },
                        })
                      : e
                        ? (0, a.jsx)("div", {
                              className: r()(ee.Ui, d, { [ee.R]: t, [ee.RK]: !t }),
                              ref: b,
                              children: p,
                          })
                        : null,
            [y, p, d, b, R, N, n, s, x],
        );
    return (0, a.jsxs)("div", { className: r()(ee.kL, m, { [ee.R]: g, [ee.RK]: !g }), children: [_, M(k, g)] });
}
en.CardAlignment = et;
