n.d(t, { SS: () => Z, cP: () => H });
var a = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    i = n(82495),
    u = n(482589),
    c = n(892227),
    o = n(492462),
    d = n(17928),
    m = n(312640),
    x = n(916845),
    f = n(834730),
    h = n(43990),
    j = n(821609),
    v = n(303136),
    g = n(366505),
    C = n(976860),
    b = n(309954),
    A = n(287809),
    N = n(975571),
    R = n(474090),
    k = n(920050),
    E = n(94264),
    p = n(549384),
    S = n(566119),
    y = n(788868),
    O = n(652215),
    D = n(901123),
    M = n(490285),
    T = n(375708),
    _ = n(757705),
    L = n(268920),
    w = n(633217),
    P = n(909340);
let B = () =>
    (0, a.jsx)("div", { className: _.s, children: (0, a.jsx)(v.A, { src: w.A, fallbackImage: L.A, className: _.Cb }) });
function F() {
    (0, S.RQ)(), (0, C.pX)(D.BV.NITRO_HOME, { search: (0, o.stringify)({ perk: k.NITRO_ORBS_REWARDS_CARD_ID }) });
}
function U() {
    (0, S.gP)(), (0, C.pX)(D.BV.NITRO_HOME, { search: (0, o.stringify)({ section: p.L }) });
}
function I() {
    (0, S.b)(), window.open(N.A.getArticleURL(O.MVz.ORBS_FAQ), "_blank");
}
function $(e) {
    let { targetElementRef: t, shouldShow: n, onRequestClose: r, ctaText: i, ctaOnClick: u } = e,
        { passesGeneralUIInvariant: o, programReward: C } = (0, g.F)({
            location: "PremiumTenureRewardsOrbsBalancePopover",
        }),
        N = (0, d.bG)([A.default], () => A.default.getCurrentUser()),
        { balance: k } = (0, b.W)(),
        p = !(0, R.ki)(N),
        S = l.useMemo(() => {
            let e = (0, R.YE)(N, y.PremiumTypes.TIER_2);
            if (!o || p) return null;
            if (e && null != C) {
                let e = (0, c.default)(new Date(C.next_reward_date), new Date());
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(f.E, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: T.intl.format(M.default["AvL/At"], {
                                days: Math.max(1, e),
                                deepLinkToNitroOrbs: F,
                            }),
                        }),
                        (0, a.jsx)(E.A, {}),
                    ],
                });
            }
            return null;
        }, [N, p, C, o]),
        D = (k ?? 0) >= 4100;
    return (0, a.jsx)(m.x, {
        targetElementRef: t,
        shouldShow: n,
        onRequestClose: r,
        position: "bottom",
        gradientColor: "blue",
        modal: !0,
        closeOnClickOutside: !0,
        children: (0, a.jsx)(h.N, {
            theme: D ? O.NJ8.DARKER : void 0,
            children: (e) =>
                (0, a.jsxs)("div", {
                    className: s()(e, _.j),
                    children: [
                        D && (0, a.jsx)(v.A, { src: P.A, className: _.yG }),
                        (0, a.jsxs)("div", {
                            className: _.Qs,
                            children: [
                                (0, a.jsx)(x.q, { onClick: r }),
                                (0, a.jsxs)("div", {
                                    className: _.hQ,
                                    children: [
                                        (0, a.jsx)(B, {}),
                                        (0, a.jsxs)("div", {
                                            className: _.y$,
                                            children: [
                                                (k ?? 0) > 0 &&
                                                    (0, a.jsxs)("div", {
                                                        className: _.E2,
                                                        children: [
                                                            (0, a.jsx)(f.E, {
                                                                variant: "display-lg",
                                                                className: _.K,
                                                                children: k ?? 0,
                                                            }),
                                                            (0, a.jsx)(f.E, {
                                                                variant: "text-xs/normal",
                                                                color: "text-muted",
                                                                children: T.intl.string(M.default.KclK9z),
                                                            }),
                                                        ],
                                                    }),
                                                S,
                                            ],
                                        }),
                                        (0, a.jsx)(j.$, {
                                            text: i,
                                            variant: "primary",
                                            size: "sm",
                                            onClick: u,
                                            fullWidth: !0,
                                        }),
                                        (0, a.jsx)(f.E, {
                                            variant: "text-xs/normal",
                                            color: p ? "text-default" : "text-muted",
                                            className: _.CU,
                                            children: p
                                                ? T.intl.format(M.default.juvXqj, { deepLinkToNitroOrbs: U })
                                                : T.intl.format(M.default.fhAVek, { helpdeskArticle: I }),
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
    W = n(49132),
    K = n(318346),
    V = n(305003),
    q = n(162097),
    G = n(922016);
n(964486), n(786953);
var J = n(505274),
    Q = n(65738);
function X(e) {
    let { pillRef: t, ...n } = e,
        { balancePillOverlay: l } = (0, d.cf)([J.A], () => ({ balancePillOverlay: J.A.balancePillOverlay })),
        r = (0, a.jsx)(Q.Gy, { ref: t, ...n }),
        s = (0, a.jsx)(Q.Gy, { ...n, isInModalOverlay: !0, disabled: !0 }),
        i = null != t.current ? t.current.offsetHeight : 36;
    return (0, a.jsx)(G.Y, {
        fixed: !0,
        autoInvert: !1,
        renderPopout: () => s,
        position: "bottom",
        align: "right",
        shouldShow: l,
        spacing: -i,
        animation: G.Y.Animation.NONE,
        targetElementRef: t,
        positionKey: `${n.balance}-${l}`,
        children: () => r,
    });
}
var Y = n(253167);
let H = { START: Y.Vl, END: Y.Wk },
    Z = (e) => {
        let {
                showNotificationBadge: t,
                ctaText: n,
                ctaOnClick: r,
                analyticsPage: c,
                linkText: o = T.intl.string(T.t.XRdyjz),
                cardAlignment: d = H.START,
                className: m,
            } = e,
            { balance: x } = (0, b.W)(),
            f = (0, W.DK)(z.W.NITRO, "BalanceWidgetMenu"),
            [h, j] = l.useState(V.k.DEFAULT),
            [v, g] = l.useState(!1),
            [C, A] = l.useState(!1),
            N = l.useRef(null);
        (0, u.j)(!v);
        let R = l.useCallback(() => {
                let e = !v;
                e &&
                    null != c &&
                    (0, K.Y)({
                        pageType: c,
                        sectionType: O.JJy.ORBS_BALANCE_MENU,
                        ctaObject: O.ZSU.OPEN_ORB_BALANCE_MENU_FROM_PILL,
                    }),
                    j(e ? V.k.SELECTED : V.k.DEFAULT),
                    g(e);
            }, [v, c]),
            k = l.useCallback(() => {
                v && R();
            }, [v, R]),
            E = (0, i.A)(null, k),
            p = l.useMemo(
                () =>
                    (0, a.jsx)(q.b, {
                        analyticsPage: c,
                        ctaText: n,
                        ctaOnClick: () => {
                            R(), r();
                        },
                        linkText: o,
                    }),
                [c, n, o, R, r],
            ),
            S = l.useMemo(
                () =>
                    (0, a.jsx)($, {
                        targetElementRef: N,
                        shouldShow: v,
                        onRequestClose: R,
                        ctaText: n,
                        ctaOnClick: () => {
                            R(), r();
                        },
                    }),
                [v, R, n, r],
            );
        return (0, a.jsxs)("div", {
            className: s()(Y.kL, m, { [Y.R]: C, [Y.RK]: !C }),
            children: [
                (0, a.jsx)(X, {
                    pillRef: N,
                    balance: x,
                    balanceWidgetMode: h,
                    onMouseDown: (e) => {
                        e.stopPropagation();
                    },
                    onClick: R,
                    showNotificationBadge: t,
                }),
                f
                    ? S
                    : v &&
                      (0, a.jsx)("div", { className: s()(Y.Ui, d, { [Y.R]: C, [Y.RK]: !C }), ref: E, children: p }),
            ],
        });
    };
Z.CardAlignment = H;
