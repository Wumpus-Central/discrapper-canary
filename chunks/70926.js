n.d(t, { SS: () => ee, cP: () => Z });
var a = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    i = n(82495),
    u = n(482589),
    c = n(892227),
    o = n(17928),
    d = n(312640),
    m = n(916845),
    f = n(834730),
    x = n(43990),
    h = n(821609),
    j = n(303136),
    v = n(715547),
    A = n(320118),
    b = n(976860),
    g = n(309954),
    C = n(287809),
    R = n(975571),
    E = n(474090),
    N = n(920050),
    k = n(94264),
    p = n(549384),
    S = n(566119),
    O = n(788868),
    _ = n(652215),
    D = n(901123),
    T = n(490285),
    y = n(985018),
    M = n(757705),
    L = n(268920),
    w = n(633217),
    B = n(909340);
let F = () =>
    (0, a.jsx)("div", { className: M.s, children: (0, a.jsx)(j.A, { src: w.A, fallbackImage: L.A, className: M.Cb }) });
function P() {
    return (0, v.Q)("PremiumTenureRewardsOrbsBalancePopover")
        ? `${D.BV.NITRO_HOME}?perk=${N.NITRO_ORBS_REWARDS_CARD_ID}`
        : `${D.BV.NITRO_HOME}?section=${p.L}`;
}
function $() {
    (0, S.RQ)(), (0, b.pX)(P());
}
function I() {
    (0, S.gP)(), (0, b.pX)(P());
}
function U() {
    (0, S.b)(), window.open(R.A.getArticleURL(_.MVz.ORBS_FAQ), "_blank");
}
function z(e) {
    let { targetElementRef: t, shouldShow: n, onRequestClose: r, ctaText: i, ctaOnClick: u } = e,
        { passesGeneralUIInvariant: v, programReward: b } = (0, A.F)({
            location: "PremiumTenureRewardsOrbsBalancePopover",
        }),
        R = (0, o.bG)([C.default], () => C.default.getCurrentUser()),
        { balance: N } = (0, g.W)(),
        p = !(0, E.ki)(R),
        S = l.useMemo(() => {
            let e = (0, E.YE)(R, O.PremiumTypes.TIER_2);
            if (!v || p) return null;
            if (e && null != b) {
                let e = (0, c.default)(new Date(b.next_reward_date), new Date());
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(f.E, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: y.intl.format(T.default["AvL/At"], {
                                days: Math.max(1, e),
                                deepLinkToNitroOrbs: $,
                            }),
                        }),
                        (0, a.jsx)(k.A, {}),
                    ],
                });
            }
            return null;
        }, [R, p, b, v]),
        D = (N ?? 0) >= 4100;
    return (0, a.jsx)(d.x, {
        targetElementRef: t,
        shouldShow: n,
        onRequestClose: r,
        position: "bottom",
        gradientColor: "blue",
        modal: !0,
        closeOnClickOutside: !0,
        children: (0, a.jsx)(x.N, {
            theme: D ? _.NJ8.DARKER : void 0,
            children: (e) =>
                (0, a.jsxs)("div", {
                    className: s()(e, M.j),
                    children: [
                        D && (0, a.jsx)(j.A, { src: B.A, className: M.yG }),
                        (0, a.jsxs)("div", {
                            className: M.Qs,
                            children: [
                                (0, a.jsx)(m.q, { onClick: r }),
                                (0, a.jsxs)("div", {
                                    className: M.hQ,
                                    children: [
                                        (0, a.jsx)(F, {}),
                                        (0, a.jsxs)("div", {
                                            className: M.y$,
                                            children: [
                                                (N ?? 0) > 0 &&
                                                    (0, a.jsxs)("div", {
                                                        className: M.E2,
                                                        children: [
                                                            (0, a.jsx)(f.E, {
                                                                variant: "display-lg",
                                                                className: M.K,
                                                                children: N ?? 0,
                                                            }),
                                                            (0, a.jsx)(f.E, {
                                                                variant: "text-xs/normal",
                                                                color: "text-muted",
                                                                children: y.intl.string(T.default.KclK9z),
                                                            }),
                                                        ],
                                                    }),
                                                S,
                                            ],
                                        }),
                                        (0, a.jsx)(h.$, {
                                            text: i,
                                            variant: "primary",
                                            size: "sm",
                                            onClick: u,
                                            fullWidth: !0,
                                        }),
                                        (0, a.jsx)(f.E, {
                                            variant: "text-xs/normal",
                                            color: p ? "text-default" : "text-muted",
                                            className: M.CU,
                                            children: p
                                                ? y.intl.format(T.default.juvXqj, { deepLinkToNitroOrbs: I })
                                                : y.intl.format(T.default.fhAVek, { helpdeskArticle: U }),
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
var K = n(636592),
    W = n(26508),
    V = n(318346),
    Y = n(305003),
    q = n(162097),
    Q = n(922016);
n(964486), n(786953);
var G = n(505274),
    H = n(65738);
function J(e) {
    let { pillRef: t, ...n } = e,
        { balancePillOverlay: l } = (0, o.cf)([G.A], () => ({ balancePillOverlay: G.A.balancePillOverlay })),
        r = (0, a.jsx)(H.Gy, { ref: t, ...n }),
        s = (0, a.jsx)(H.Gy, { ...n, isInModalOverlay: !0, disabled: !0 }),
        i = null != t.current ? t.current.offsetHeight : 36;
    return (0, a.jsx)(Q.Y, {
        fixed: !0,
        autoInvert: !1,
        renderPopout: () => s,
        position: "bottom",
        align: "right",
        shouldShow: l,
        spacing: -i,
        animation: Q.Y.Animation.NONE,
        targetElementRef: t,
        positionKey: `${n.balance}-${l}`,
        children: () => r,
    });
}
var X = n(253167);
let Z = { START: X.Vl, END: X.Wk },
    ee = (e) => {
        let {
                showNotificationBadge: t,
                ctaText: n,
                ctaOnClick: r,
                analyticsPage: c,
                linkText: o = y.intl.string(y.t.XRdyjz),
                cardAlignment: d = Z.START,
                className: m,
            } = e,
            { balance: f } = (0, g.W)(),
            x = (0, W.DK)(K.W.NITRO, "BalanceWidgetMenu"),
            [h, j] = l.useState(Y.k.DEFAULT),
            [v, A] = l.useState(!1),
            [b, C] = l.useState(!1),
            R = l.useRef(null);
        (0, u.j)(!v);
        let E = l.useCallback(() => {
                let e = !v;
                e &&
                    null != c &&
                    (0, V.Y)({
                        pageType: c,
                        sectionType: _.JJy.ORBS_BALANCE_MENU,
                        ctaObject: _.ZSU.OPEN_ORB_BALANCE_MENU_FROM_PILL,
                    }),
                    j(e ? Y.k.SELECTED : Y.k.DEFAULT),
                    A(e);
            }, [v, c]),
            N = l.useCallback(() => {
                v && E();
            }, [v, E]),
            k = (0, i.A)(null, N),
            p = l.useMemo(
                () =>
                    (0, a.jsx)(q.b, {
                        analyticsPage: c,
                        ctaText: n,
                        ctaOnClick: () => {
                            E(), r();
                        },
                        linkText: o,
                    }),
                [c, n, o, E, r],
            ),
            S = l.useMemo(
                () =>
                    (0, a.jsx)(z, {
                        targetElementRef: R,
                        shouldShow: v,
                        onRequestClose: E,
                        ctaText: n,
                        ctaOnClick: () => {
                            E(), r();
                        },
                    }),
                [v, E, n, r],
            );
        return (0, a.jsxs)("div", {
            className: s()(X.kL, m, { [X.R]: b, [X.RK]: !b }),
            children: [
                (0, a.jsx)(J, {
                    pillRef: R,
                    balance: f,
                    balanceWidgetMode: h,
                    onMouseDown: (e) => {
                        e.stopPropagation();
                    },
                    onClick: E,
                    showNotificationBadge: t,
                }),
                x
                    ? S
                    : v &&
                      (0, a.jsx)("div", { className: s()(X.Ui, d, { [X.R]: b, [X.RK]: !b }), ref: k, children: p }),
            ],
        });
    };
ee.CardAlignment = Z;
