a.d(t, { SS: () => en, cP: () => ea });
var n = a(477900),
    l = a(582128),
    s = a(503698),
    r = a.n(s),
    i = a(82495),
    u = a(793574),
    c = a(482589),
    o = a(892227),
    d = a(492462),
    m = a(17928),
    f = a(273875),
    x = a(916845),
    h = a(834730),
    j = a(43990),
    A = a(821609),
    k = a(303136),
    v = a(366505),
    R = a(976860),
    g = a(309954),
    C = a(287809),
    E = a(975571),
    N = a(474090),
    b = a(920050),
    p = a(94264),
    O = a(549384),
    L = a(566119),
    _ = a(202541),
    y = a(652215),
    T = a(901123),
    S = a(1889),
    M = a(375708),
    D = a(226068),
    w = a(268920),
    B = a(633217),
    P = a(909340);
function U() {
    return (0, n.jsx)("div", {
        className: D.s,
        children: (0, n.jsx)(k.A, { src: B.A, fallbackImage: w.A, className: D.Cb }),
    });
}
function F() {
    ((0, L.RQ)(), (0, R.pX)(T.BV.NITRO_HOME, { search: (0, d.stringify)({ perk: b.NITRO_ORBS_REWARDS_CARD_ID }) }));
}
function I() {
    ((0, L.gP)(), (0, R.pX)(T.BV.NITRO_HOME, { search: (0, d.stringify)({ section: O.L }) }));
}
function W() {
    ((0, L.b)(), window.open(E.A.getArticleURL(y.MVz.ORBS_FAQ), "_blank"));
}
function z(e) {
    let { targetElementRef: t, shouldShow: a, onRequestClose: s, ctaText: i, ctaOnClick: u } = e,
        { passesGeneralUIInvariant: c, programReward: d } = (0, v.F)({
            location: "PremiumTenureRewardsOrbsBalancePopover",
        }),
        R = (0, m.bG)([C.default], () => C.default.getCurrentUser()),
        { balance: E } = (0, g.W)(),
        b = !(0, N.ki)(R),
        O = l.useMemo(() => {
            let e = (0, N.YE)(R, _.PremiumTypes.TIER_2);
            if (!c || b) return null;
            if (e && null != d) {
                let e = (0, o.default)(new Date(d.next_reward_date), new Date());
                return (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(h.E, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: M.intl.format(S.default["AvL/At"], {
                                days: Math.max(1, e),
                                deepLinkToNitroOrbs: F,
                            }),
                        }),
                        (0, n.jsx)(p.A, {}),
                    ],
                });
            }
            return null;
        }, [R, b, d, c]),
        L = (E ?? 0) >= 4100;
    return (0, n.jsx)(f.x, {
        targetElementRef: t,
        shouldShow: a,
        onRequestClose: s,
        position: "bottom",
        gradientColor: "blue",
        modal: !0,
        closeOnClickOutside: !0,
        children: (0, n.jsx)(j.N, {
            theme: L ? y.NJ8.DARK : void 0,
            children: (e) =>
                (0, n.jsxs)("div", {
                    className: r()(e, D.j),
                    children: [
                        L && (0, n.jsx)(k.A, { src: P.A, className: D.yG }),
                        (0, n.jsxs)("div", {
                            className: D.Qs,
                            children: [
                                (0, n.jsx)(x.q, { onClick: s }),
                                (0, n.jsxs)("div", {
                                    className: D.hQ,
                                    children: [
                                        (0, n.jsx)(U, {}),
                                        (0, n.jsxs)("div", {
                                            className: D.y$,
                                            children: [
                                                (E ?? 0) > 0 &&
                                                    (0, n.jsxs)("div", {
                                                        className: D.E2,
                                                        children: [
                                                            (0, n.jsx)(h.E, {
                                                                variant: "display-lg",
                                                                className: D.K,
                                                                children: E ?? 0,
                                                            }),
                                                            (0, n.jsx)(h.E, {
                                                                variant: "text-xs/normal",
                                                                color: "text-muted",
                                                                children: M.intl.string(S.default.KclK9z),
                                                            }),
                                                        ],
                                                    }),
                                                O,
                                            ],
                                        }),
                                        (0, n.jsx)(A.$, {
                                            text: i,
                                            variant: "primary",
                                            size: "sm",
                                            onClick: u,
                                            fullWidth: !0,
                                        }),
                                        (0, n.jsx)(h.E, {
                                            variant: "text-xs/normal",
                                            color: b ? "text-default" : "text-muted",
                                            className: D.CU,
                                            children: b
                                                ? M.intl.format(S.default.juvXqj, { deepLinkToNitroOrbs: I })
                                                : M.intl.format(S.default.fhAVek, { helpdeskArticle: W }),
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
var K = a(440005),
    V = a(26508),
    q = a(318346),
    $ = a(362862),
    G = a(923138),
    H = a(305003),
    J = a(162097),
    Q = a(922016);
(a(964486), a(786953));
var X = a(505274),
    Y = a(37402);
function Z(e) {
    let { pillRef: t, ...a } = e,
        { balancePillOverlay: l } = (0, m.cf)([X.A], () => ({ balancePillOverlay: X.A.balancePillOverlay })),
        s = (0, n.jsx)(Y.Gy, { ref: t, ...a }),
        r = (0, n.jsx)(Y.Gy, { ...a, isInModalOverlay: !0, disabled: !0 }),
        i = null != t.current ? t.current.offsetHeight : 36;
    return (0, n.jsx)(Q.Y, {
        fixed: !0,
        autoInvert: !1,
        renderPopout: () => r,
        position: "bottom",
        align: "right",
        shouldShow: l,
        spacing: -i,
        animation: Q.Y.Animation.NONE,
        targetElementRef: t,
        positionKey: `${a.balance}-${l}`,
        children: () => s,
    });
}
var ee = a(276130),
    et = a(226346);
let ea = { START: et.Vl, END: et.Wk };
function en(e) {
    let {
            showNotificationBadge: t,
            ctaText: a,
            ctaOnClick: s,
            analyticsPage: o,
            linkText: d = M.intl.string(M.t.XRdyjz),
            cardAlignment: m = ea.START,
            className: f,
        } = e,
        { balance: x } = (0, g.W)(),
        h = (0, V.DK)(K.W.NITRO, "BalanceWidgetMenu"),
        [j, A] = l.useState(H.k.DEFAULT),
        [k, v] = l.useState(!1),
        [R, C] = l.useState(!1),
        E = l.useRef(null);
    (0, c.j)(!k);
    let N = (0, $.H)({ location: "BalanceWidgetMenu" }),
        b = l.useCallback(() => {
            let e = !k;
            (e &&
                null != o &&
                (0, q.Y)({
                    pageType: o,
                    sectionType: N ? u.A.ORB_WALLET : y.JJy.ORBS_BALANCE_MENU,
                    ctaObject: N ? u.A.ORB_WALLET_OPEN_FROM_BALANCE_PILL : y.ZSU.OPEN_ORB_BALANCE_MENU_FROM_PILL,
                }),
                A(e ? H.k.SELECTED : H.k.DEFAULT),
                v(e));
        }, [k, o, N]),
        p = l.useCallback(() => {
            k && b();
        }, [k, b]),
        O = (0, i.A)(null, p),
        L = l.useMemo(
            () =>
                (0, n.jsx)(J.b, {
                    analyticsPage: o,
                    ctaText: a,
                    ctaOnClick: () => {
                        (b(), s());
                    },
                    linkText: d,
                }),
            [o, a, d, b, s],
        ),
        { hasUnreadUpdate: _ } = (0, G.I)({ enabled: N }),
        T = t ?? _,
        S = l.useMemo(
            () =>
                (0, n.jsx)(Z, {
                    pillRef: E,
                    balance: x,
                    balanceWidgetMode: j,
                    onMouseDown: (e) => {
                        e.stopPropagation();
                    },
                    onClick: b,
                    showNotificationBadge: T,
                }),
            [x, j, T, b],
        ),
        D = l.useCallback(
            (e, t) =>
                N
                    ? e
                        ? (0, n.jsx)(ee.EA, { cardRef: O, targetElementRef: E, shouldShow: e, analyticsPage: o })
                        : null
                    : h
                      ? (0, n.jsx)(z, {
                            targetElementRef: E,
                            shouldShow: e,
                            onRequestClose: b,
                            ctaText: a,
                            ctaOnClick: () => {
                                (b(), s());
                            },
                        })
                      : e
                        ? (0, n.jsx)("div", {
                              className: r()(et.Ui, m, { [et.R]: t, [et.RK]: !t }),
                              ref: O,
                              children: L,
                          })
                        : null,
            [N, L, m, O, E, b, a, s, h, o],
        );
    return (0, n.jsxs)("div", { className: r()(et.kL, f, { [et.R]: R, [et.RK]: !R }), children: [S, D(k, R)] });
}
en.CardAlignment = ea;
