l.d(t, { SS: () => et, cP: () => ee });
var n = l(477900),
    a = l(582128),
    s = l(503698),
    r = l.n(s),
    i = l(82495),
    c = l(482589),
    o = l(892227),
    u = l(492462),
    d = l(17928),
    h = l(273875),
    m = l(916845),
    C = l(834730),
    f = l(43990),
    x = l(821609),
    g = l(303136),
    E = l(366505),
    b = l(976860),
    j = l(309954),
    v = l(287809),
    N = l(975571),
    A = l(474090),
    p = l(920050),
    S = l(94264),
    L = l(549384),
    R = l(566119),
    _ = l(202541),
    O = l(652215),
    y = l(901123),
    T = l(131277),
    k = l(375708),
    M = l(226068),
    F = l(268920),
    I = l(633217),
    w = l(909340);
function D() {
    return (0, n.jsx)("div", {
        className: M.s,
        children: (0, n.jsx)(g.A, { src: I.A, fallbackImage: F.A, className: M.Cb }),
    });
}
function B() {
    (0, R.RQ)(), (0, b.pX)(y.BV.NITRO_HOME, { search: (0, u.stringify)({ perk: p.NITRO_ORBS_REWARDS_CARD_ID }) });
}
function P() {
    (0, R.gP)(), (0, b.pX)(y.BV.NITRO_HOME, { search: (0, u.stringify)({ section: L.L }) });
}
function U() {
    (0, R.b)(), window.open(N.A.getArticleURL(O.MVz.ORBS_FAQ), "_blank");
}
function G(e) {
    let { targetElementRef: t, shouldShow: l, onRequestClose: s, ctaText: i, ctaOnClick: c } = e,
        { passesGeneralUIInvariant: u, programReward: b } = (0, E.F)({
            location: "PremiumTenureRewardsOrbsBalancePopover",
        }),
        N = (0, d.bG)([v.default], () => v.default.getCurrentUser()),
        { balance: p } = (0, j.W)(),
        L = !(0, A.ki)(N),
        R = a.useMemo(() => {
            let e = (0, A.YE)(N, _.PremiumTypes.TIER_2);
            if (!u || L) return null;
            if (e && null != b) {
                let e = (0, o.default)(new Date(b.next_reward_date), new Date());
                return (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(C.E, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: k.intl.format(T.default["AvL/At"], {
                                days: Math.max(1, e),
                                deepLinkToNitroOrbs: B,
                            }),
                        }),
                        (0, n.jsx)(S.A, {}),
                    ],
                });
            }
            return null;
        }, [N, L, b, u]),
        y = (p ?? 0) >= 4100;
    return (0, n.jsx)(h.x, {
        targetElementRef: t,
        shouldShow: l,
        onRequestClose: s,
        position: "bottom",
        gradientColor: "blue",
        modal: !0,
        closeOnClickOutside: !0,
        children: (0, n.jsx)(f.N, {
            theme: y ? O.NJ8.DARKER : void 0,
            children: (e) =>
                (0, n.jsxs)("div", {
                    className: r()(e, M.j),
                    children: [
                        y && (0, n.jsx)(g.A, { src: w.A, className: M.yG }),
                        (0, n.jsxs)("div", {
                            className: M.Qs,
                            children: [
                                (0, n.jsx)(m.q, { onClick: s }),
                                (0, n.jsxs)("div", {
                                    className: M.hQ,
                                    children: [
                                        (0, n.jsx)(D, {}),
                                        (0, n.jsxs)("div", {
                                            className: M.y$,
                                            children: [
                                                (p ?? 0) > 0 &&
                                                    (0, n.jsxs)("div", {
                                                        className: M.E2,
                                                        children: [
                                                            (0, n.jsx)(C.E, {
                                                                variant: "display-lg",
                                                                className: M.K,
                                                                children: p ?? 0,
                                                            }),
                                                            (0, n.jsx)(C.E, {
                                                                variant: "text-xs/normal",
                                                                color: "text-muted",
                                                                children: k.intl.string(T.default.KclK9z),
                                                            }),
                                                        ],
                                                    }),
                                                R,
                                            ],
                                        }),
                                        (0, n.jsx)(x.$, {
                                            text: i,
                                            variant: "primary",
                                            size: "sm",
                                            onClick: c,
                                            fullWidth: !0,
                                        }),
                                        (0, n.jsx)(C.E, {
                                            variant: "text-xs/normal",
                                            color: L ? "text-default" : "text-muted",
                                            className: M.CU,
                                            children: L
                                                ? k.intl.format(T.default.juvXqj, { deepLinkToNitroOrbs: P })
                                                : k.intl.format(T.default.fhAVek, { helpdeskArticle: U }),
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
var H = l(440005),
    W = l(26508),
    z = l(318346),
    V = l(362862),
    $ = l(305003),
    q = l(162097),
    K = l(922016);
l(964486), l(786953);
var Y = l(505274),
    J = l(37402);
function Q(e) {
    let { pillRef: t, ...l } = e,
        { balancePillOverlay: a } = (0, d.cf)([Y.A], () => ({ balancePillOverlay: Y.A.balancePillOverlay })),
        s = (0, n.jsx)(J.Gy, { ref: t, ...l }),
        r = (0, n.jsx)(J.Gy, { ...l, isInModalOverlay: !0, disabled: !0 }),
        i = null != t.current ? t.current.offsetHeight : 36;
    return (0, n.jsx)(K.Y, {
        fixed: !0,
        autoInvert: !1,
        renderPopout: () => r,
        position: "bottom",
        align: "right",
        shouldShow: a,
        spacing: -i,
        animation: K.Y.Animation.NONE,
        targetElementRef: t,
        positionKey: `${l.balance}-${a}`,
        children: () => s,
    });
}
var X = l(983325),
    Z = l(226346);
let ee = { START: Z.Vl, END: Z.Wk };
function et(e) {
    let {
            showNotificationBadge: t,
            ctaText: l,
            ctaOnClick: s,
            analyticsPage: o,
            linkText: u = k.intl.string(k.t.XRdyjz),
            cardAlignment: d = ee.START,
            className: h,
        } = e,
        { balance: m } = (0, j.W)(),
        C = (0, W.DK)(H.W.NITRO, "BalanceWidgetMenu"),
        [f, x] = a.useState($.k.DEFAULT),
        [g, E] = a.useState(!1),
        [b, v] = a.useState(!1),
        N = a.useRef(null);
    (0, c.j)(!g);
    let A = a.useCallback(() => {
            let e = !g;
            e &&
                null != o &&
                (0, z.Y)({
                    pageType: o,
                    sectionType: O.JJy.ORBS_BALANCE_MENU,
                    ctaObject: O.ZSU.OPEN_ORB_BALANCE_MENU_FROM_PILL,
                }),
                x(e ? $.k.SELECTED : $.k.DEFAULT),
                E(e);
        }, [g, o]),
        p = a.useCallback(() => {
            g && A();
        }, [g, A]),
        S = (0, i.A)(null, p),
        L = a.useMemo(
            () =>
                (0, n.jsx)(q.b, {
                    analyticsPage: o,
                    ctaText: l,
                    ctaOnClick: () => {
                        A(), s();
                    },
                    linkText: u,
                }),
            [o, l, u, A, s],
        ),
        R = a.useMemo(
            () =>
                (0, n.jsx)(Q, {
                    pillRef: N,
                    balance: m,
                    balanceWidgetMode: f,
                    onMouseDown: (e) => {
                        e.stopPropagation();
                    },
                    onClick: A,
                    showNotificationBadge: t,
                }),
            [m, f, t, A],
        ),
        _ = (0, V.H)({ location: "BalanceWidgetMenu" }),
        y = a.useCallback(
            (e, t) =>
                _
                    ? e
                        ? (0, n.jsx)(X.EA, { cardRef: S, targetElementRef: N, shouldShow: e })
                        : null
                    : C
                      ? (0, n.jsx)(G, {
                            targetElementRef: N,
                            shouldShow: e,
                            onRequestClose: A,
                            ctaText: l,
                            ctaOnClick: () => {
                                A(), s();
                            },
                        })
                      : e
                        ? (0, n.jsx)("div", { className: r()(Z.Ui, d, { [Z.R]: t, [Z.RK]: !t }), ref: S, children: L })
                        : null,
            [_, L, d, S, N, A, l, s, C],
        );
    return (0, n.jsxs)("div", { className: r()(Z.kL, h, { [Z.R]: b, [Z.RK]: !b }), children: [R, y(g, b)] });
}
et.CardAlignment = ee;
