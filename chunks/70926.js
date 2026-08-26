n.d(t, { SS: () => Z, cP: () => H });
var a = n(477900),
    l = n(582128),
    r = n(503698),
    s = n.n(r),
    i = n(82495),
    u = n(482589),
    c = n(892227),
    o = n(492462),
    d = n(17928),
    m = n(273875),
    f = n(916845),
    x = n(834730),
    h = n(43990),
    g = n(821609),
    j = n(303136),
    v = n(366505),
    C = n(976860),
    A = n(309954),
    N = n(287809),
    b = n(975571),
    E = n(474090),
    R = n(920050),
    k = n(94264),
    p = n(549384),
    y = n(566119),
    S = n(202541),
    O = n(652215),
    D = n(901123),
    M = n(131277),
    T = n(375708),
    _ = n(226068),
    L = n(268920),
    w = n(633217),
    P = n(909340);
function B() {
    return (0, a.jsx)("div", {
        className: _.s,
        children: (0, a.jsx)(j.A, { src: w.A, fallbackImage: L.A, className: _.Cb }),
    });
}
function F() {
    (0, y.RQ)(), (0, C.pX)(D.BV.NITRO_HOME, { search: (0, o.stringify)({ perk: R.NITRO_ORBS_REWARDS_CARD_ID }) });
}
function U() {
    (0, y.gP)(), (0, C.pX)(D.BV.NITRO_HOME, { search: (0, o.stringify)({ section: p.L }) });
}
function I() {
    (0, y.b)(), window.open(b.A.getArticleURL(O.MVz.ORBS_FAQ), "_blank");
}
function $(e) {
    let { targetElementRef: t, shouldShow: n, onRequestClose: r, ctaText: i, ctaOnClick: u } = e,
        { passesGeneralUIInvariant: o, programReward: C } = (0, v.F)({
            location: "PremiumTenureRewardsOrbsBalancePopover",
        }),
        b = (0, d.bG)([N.default], () => N.default.getCurrentUser()),
        { balance: R } = (0, A.W)(),
        p = !(0, E.ki)(b),
        y = l.useMemo(() => {
            let e = (0, E.YE)(b, S.PremiumTypes.TIER_2);
            if (!o || p) return null;
            if (e && null != C) {
                let e = (0, c.default)(new Date(C.next_reward_date), new Date());
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(x.E, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: T.intl.format(M.default["AvL/At"], {
                                days: Math.max(1, e),
                                deepLinkToNitroOrbs: F,
                            }),
                        }),
                        (0, a.jsx)(k.A, {}),
                    ],
                });
            }
            return null;
        }, [b, p, C, o]),
        D = (R ?? 0) >= 4100;
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
                        D && (0, a.jsx)(j.A, { src: P.A, className: _.yG }),
                        (0, a.jsxs)("div", {
                            className: _.Qs,
                            children: [
                                (0, a.jsx)(f.q, { onClick: r }),
                                (0, a.jsxs)("div", {
                                    className: _.hQ,
                                    children: [
                                        (0, a.jsx)(B, {}),
                                        (0, a.jsxs)("div", {
                                            className: _.y$,
                                            children: [
                                                (R ?? 0) > 0 &&
                                                    (0, a.jsxs)("div", {
                                                        className: _.E2,
                                                        children: [
                                                            (0, a.jsx)(x.E, {
                                                                variant: "display-lg",
                                                                className: _.K,
                                                                children: R ?? 0,
                                                            }),
                                                            (0, a.jsx)(x.E, {
                                                                variant: "text-xs/normal",
                                                                color: "text-muted",
                                                                children: T.intl.string(M.default.KclK9z),
                                                            }),
                                                        ],
                                                    }),
                                                y,
                                            ],
                                        }),
                                        (0, a.jsx)(g.$, {
                                            text: i,
                                            variant: "primary",
                                            size: "sm",
                                            onClick: u,
                                            fullWidth: !0,
                                        }),
                                        (0, a.jsx)(x.E, {
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
    W = n(26508),
    K = n(318346),
    V = n(305003),
    q = n(162097),
    G = n(922016);
n(964486), n(786953);
var J = n(505274),
    Q = n(37402);
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
var Y = n(226346);
let H = { START: Y.Vl, END: Y.Wk };
function Z(e) {
    let {
            showNotificationBadge: t,
            ctaText: n,
            ctaOnClick: r,
            analyticsPage: c,
            linkText: o = T.intl.string(T.t.XRdyjz),
            cardAlignment: d = H.START,
            className: m,
        } = e,
        { balance: f } = (0, A.W)(),
        x = (0, W.DK)(z.W.NITRO, "BalanceWidgetMenu"),
        [h, g] = l.useState(V.k.DEFAULT),
        [j, v] = l.useState(!1),
        [C, N] = l.useState(!1),
        b = l.useRef(null);
    (0, u.j)(!j);
    let E = l.useCallback(() => {
            let e = !j;
            e &&
                null != c &&
                (0, K.Y)({
                    pageType: c,
                    sectionType: O.JJy.ORBS_BALANCE_MENU,
                    ctaObject: O.ZSU.OPEN_ORB_BALANCE_MENU_FROM_PILL,
                }),
                g(e ? V.k.SELECTED : V.k.DEFAULT),
                v(e);
        }, [j, c]),
        R = l.useCallback(() => {
            j && E();
        }, [j, E]),
        k = (0, i.A)(null, R),
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
        y = l.useMemo(
            () =>
                (0, a.jsx)($, {
                    targetElementRef: b,
                    shouldShow: j,
                    onRequestClose: E,
                    ctaText: n,
                    ctaOnClick: () => {
                        E(), r();
                    },
                }),
            [j, E, n, r],
        );
    return (0, a.jsxs)("div", {
        className: s()(Y.kL, m, { [Y.R]: C, [Y.RK]: !C }),
        children: [
            (0, a.jsx)(X, {
                pillRef: b,
                balance: f,
                balanceWidgetMode: h,
                onMouseDown: (e) => {
                    e.stopPropagation();
                },
                onClick: E,
                showNotificationBadge: t,
            }),
            x ? y : j && (0, a.jsx)("div", { className: s()(Y.Ui, d, { [Y.R]: C, [Y.RK]: !C }), ref: k, children: p }),
        ],
    });
}
Z.CardAlignment = H;
