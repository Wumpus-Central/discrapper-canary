n.d(t, { SS: () => en, cP: () => et });
var a = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    i = n(82495),
    c = n(482589),
    o = n(892227),
    u = n(492462),
    d = n(17928),
    h = n(273875),
    m = n(916845),
    C = n(834730),
    x = n(43990),
    f = n(821609),
    g = n(303136),
    E = n(366505),
    A = n(976860),
    v = n(309954),
    b = n(287809),
    N = n(975571),
    _ = n(474090),
    j = n(920050),
    S = n(94264),
    p = n(549384),
    L = n(566119),
    R = n(202541),
    O = n(652215),
    y = n(901123),
    T = n(131277),
    U = n(375708),
    k = n(226068),
    M = n(268920),
    I = n(633217),
    F = n(909340);
function D() {
    return (0, a.jsx)("div", {
        className: k.s,
        children: (0, a.jsx)(g.A, { src: I.A, fallbackImage: M.A, className: k.Cb }),
    });
}
function B() {
    (0, L.RQ)(), (0, A.pX)(y.BV.NITRO_HOME, { search: (0, u.stringify)({ perk: j.NITRO_ORBS_REWARDS_CARD_ID }) });
}
function w() {
    (0, L.gP)(), (0, A.pX)(y.BV.NITRO_HOME, { search: (0, u.stringify)({ section: p.L }) });
}
function P() {
    (0, L.b)(), window.open(N.A.getArticleURL(O.MVz.ORBS_FAQ), "_blank");
}
function G(e) {
    let { targetElementRef: t, shouldShow: n, onRequestClose: s, ctaText: i, ctaOnClick: c } = e,
        { passesGeneralUIInvariant: u, programReward: A } = (0, E.F)({
            location: "PremiumTenureRewardsOrbsBalancePopover",
        }),
        N = (0, d.bG)([b.default], () => b.default.getCurrentUser()),
        { balance: j } = (0, v.W)(),
        p = !(0, _.ki)(N),
        L = l.useMemo(() => {
            let e = (0, _.YE)(N, R.PremiumTypes.TIER_2);
            if (!u || p) return null;
            if (e && null != A) {
                let e = (0, o.default)(new Date(A.next_reward_date), new Date());
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(C.E, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: U.intl.format(T.default["AvL/At"], {
                                days: Math.max(1, e),
                                deepLinkToNitroOrbs: B,
                            }),
                        }),
                        (0, a.jsx)(S.A, {}),
                    ],
                });
            }
            return null;
        }, [N, p, A, u]),
        y = (j ?? 0) >= 4100;
    return (0, a.jsx)(h.x, {
        targetElementRef: t,
        shouldShow: n,
        onRequestClose: s,
        position: "bottom",
        gradientColor: "blue",
        modal: !0,
        closeOnClickOutside: !0,
        children: (0, a.jsx)(x.N, {
            theme: y ? O.NJ8.DARKER : void 0,
            children: (e) =>
                (0, a.jsxs)("div", {
                    className: r()(e, k.j),
                    children: [
                        y && (0, a.jsx)(g.A, { src: F.A, className: k.yG }),
                        (0, a.jsxs)("div", {
                            className: k.Qs,
                            children: [
                                (0, a.jsx)(m.q, { onClick: s }),
                                (0, a.jsxs)("div", {
                                    className: k.hQ,
                                    children: [
                                        (0, a.jsx)(D, {}),
                                        (0, a.jsxs)("div", {
                                            className: k.y$,
                                            children: [
                                                (j ?? 0) > 0 &&
                                                    (0, a.jsxs)("div", {
                                                        className: k.E2,
                                                        children: [
                                                            (0, a.jsx)(C.E, {
                                                                variant: "display-lg",
                                                                className: k.K,
                                                                children: j ?? 0,
                                                            }),
                                                            (0, a.jsx)(C.E, {
                                                                variant: "text-xs/normal",
                                                                color: "text-muted",
                                                                children: U.intl.string(T.default.KclK9z),
                                                            }),
                                                        ],
                                                    }),
                                                L,
                                            ],
                                        }),
                                        (0, a.jsx)(f.$, {
                                            text: i,
                                            variant: "primary",
                                            size: "sm",
                                            onClick: c,
                                            fullWidth: !0,
                                        }),
                                        (0, a.jsx)(C.E, {
                                            variant: "text-xs/normal",
                                            color: p ? "text-default" : "text-muted",
                                            className: k.CU,
                                            children: p
                                                ? U.intl.format(T.default.juvXqj, { deepLinkToNitroOrbs: w })
                                                : U.intl.format(T.default.fhAVek, { helpdeskArticle: P }),
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
var H = n(440005),
    W = n(26508),
    z = n(318346),
    V = n(362862),
    $ = n(923138),
    K = n(305003),
    q = n(162097),
    X = n(922016);
n(964486), n(786953);
var Y = n(505274),
    J = n(37402);
function Q(e) {
    let { pillRef: t, ...n } = e,
        { balancePillOverlay: l } = (0, d.cf)([Y.A], () => ({ balancePillOverlay: Y.A.balancePillOverlay })),
        s = (0, a.jsx)(J.Gy, { ref: t, ...n }),
        r = (0, a.jsx)(J.Gy, { ...n, isInModalOverlay: !0, disabled: !0 }),
        i = null != t.current ? t.current.offsetHeight : 36;
    return (0, a.jsx)(X.Y, {
        fixed: !0,
        autoInvert: !1,
        renderPopout: () => r,
        position: "bottom",
        align: "right",
        shouldShow: l,
        spacing: -i,
        animation: X.Y.Animation.NONE,
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
            analyticsPage: o,
            linkText: u = U.intl.string(U.t.XRdyjz),
            cardAlignment: d = et.START,
            className: h,
        } = e,
        { balance: m } = (0, v.W)(),
        C = (0, W.DK)(H.W.NITRO, "BalanceWidgetMenu"),
        [x, f] = l.useState(K.k.DEFAULT),
        [g, E] = l.useState(!1),
        [A, b] = l.useState(!1),
        N = l.useRef(null);
    (0, c.j)(!g);
    let _ = l.useCallback(() => {
            let e = !g;
            e &&
                null != o &&
                (0, z.Y)({
                    pageType: o,
                    sectionType: O.JJy.ORBS_BALANCE_MENU,
                    ctaObject: O.ZSU.OPEN_ORB_BALANCE_MENU_FROM_PILL,
                }),
                f(e ? K.k.SELECTED : K.k.DEFAULT),
                E(e);
        }, [g, o]),
        j = l.useCallback(() => {
            g && _();
        }, [g, _]),
        S = (0, i.A)(null, j),
        p = l.useMemo(
            () =>
                (0, a.jsx)(q.b, {
                    analyticsPage: o,
                    ctaText: n,
                    ctaOnClick: () => {
                        _(), s();
                    },
                    linkText: u,
                }),
            [o, n, u, _, s],
        ),
        L = (0, V.H)({ location: "BalanceWidgetMenu" }),
        { hasUnreadUpdate: R } = (0, $.I)({ enabled: L }),
        y = t ?? R,
        T = l.useMemo(
            () =>
                (0, a.jsx)(Q, {
                    pillRef: N,
                    balance: m,
                    balanceWidgetMode: x,
                    onMouseDown: (e) => {
                        e.stopPropagation();
                    },
                    onClick: _,
                    showNotificationBadge: y,
                }),
            [m, x, y, _],
        ),
        k = l.useCallback(
            (e, t) =>
                L
                    ? e
                        ? (0, a.jsx)(Z.EA, { cardRef: S, targetElementRef: N, shouldShow: e })
                        : null
                    : C
                      ? (0, a.jsx)(G, {
                            targetElementRef: N,
                            shouldShow: e,
                            onRequestClose: _,
                            ctaText: n,
                            ctaOnClick: () => {
                                _(), s();
                            },
                        })
                      : e
                        ? (0, a.jsx)("div", {
                              className: r()(ee.Ui, d, { [ee.R]: t, [ee.RK]: !t }),
                              ref: S,
                              children: p,
                          })
                        : null,
            [L, p, d, S, N, _, n, s, C],
        );
    return (0, a.jsxs)("div", { className: r()(ee.kL, h, { [ee.R]: A, [ee.RK]: !A }), children: [T, k(g, A)] });
}
en.CardAlignment = et;
