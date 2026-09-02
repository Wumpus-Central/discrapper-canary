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
    _ = n(975571),
    p = n(474090),
    N = n(920050),
    j = n(94264),
    S = n(549384),
    L = n(566119),
    R = n(202541),
    O = n(652215),
    y = n(901123),
    T = n(1889),
    U = n(375708),
    M = n(226068),
    k = n(268920),
    I = n(633217),
    F = n(909340);
function D() {
    return (0, a.jsx)("div", {
        className: M.s,
        children: (0, a.jsx)(g.A, { src: I.A, fallbackImage: k.A, className: M.Cb }),
    });
}
function B() {
    (0, L.RQ)(), (0, A.pX)(y.BV.NITRO_HOME, { search: (0, u.stringify)({ perk: N.NITRO_ORBS_REWARDS_CARD_ID }) });
}
function w() {
    (0, L.gP)(), (0, A.pX)(y.BV.NITRO_HOME, { search: (0, u.stringify)({ section: S.L }) });
}
function G() {
    (0, L.b)(), window.open(_.A.getArticleURL(O.MVz.ORBS_FAQ), "_blank");
}
function P(e) {
    let { targetElementRef: t, shouldShow: n, onRequestClose: s, ctaText: i, ctaOnClick: c } = e,
        { passesGeneralUIInvariant: u, programReward: A } = (0, E.F)({
            location: "PremiumTenureRewardsOrbsBalancePopover",
        }),
        _ = (0, d.bG)([b.default], () => b.default.getCurrentUser()),
        { balance: N } = (0, v.W)(),
        S = !(0, p.ki)(_),
        L = l.useMemo(() => {
            let e = (0, p.YE)(_, R.PremiumTypes.TIER_2);
            if (!u || S) return null;
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
                        (0, a.jsx)(j.A, {}),
                    ],
                });
            }
            return null;
        }, [_, S, A, u]),
        y = (N ?? 0) >= 4100;
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
                    className: r()(e, M.j),
                    children: [
                        y && (0, a.jsx)(g.A, { src: F.A, className: M.yG }),
                        (0, a.jsxs)("div", {
                            className: M.Qs,
                            children: [
                                (0, a.jsx)(m.q, { onClick: s }),
                                (0, a.jsxs)("div", {
                                    className: M.hQ,
                                    children: [
                                        (0, a.jsx)(D, {}),
                                        (0, a.jsxs)("div", {
                                            className: M.y$,
                                            children: [
                                                (N ?? 0) > 0 &&
                                                    (0, a.jsxs)("div", {
                                                        className: M.E2,
                                                        children: [
                                                            (0, a.jsx)(C.E, {
                                                                variant: "display-lg",
                                                                className: M.K,
                                                                children: N ?? 0,
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
                                            color: S ? "text-default" : "text-muted",
                                            className: M.CU,
                                            children: S
                                                ? U.intl.format(T.default.juvXqj, { deepLinkToNitroOrbs: w })
                                                : U.intl.format(T.default.fhAVek, { helpdeskArticle: G }),
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
        _ = l.useRef(null);
    (0, c.j)(!g);
    let p = l.useCallback(() => {
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
        N = l.useCallback(() => {
            g && p();
        }, [g, p]),
        j = (0, i.A)(null, N),
        S = l.useMemo(
            () =>
                (0, a.jsx)(q.b, {
                    analyticsPage: o,
                    ctaText: n,
                    ctaOnClick: () => {
                        p(), s();
                    },
                    linkText: u,
                }),
            [o, n, u, p, s],
        ),
        L = (0, V.H)({ location: "BalanceWidgetMenu" }),
        { hasUnreadUpdate: R } = (0, $.I)({ enabled: L }),
        y = t ?? R,
        T = l.useMemo(
            () =>
                (0, a.jsx)(Q, {
                    pillRef: _,
                    balance: m,
                    balanceWidgetMode: x,
                    onMouseDown: (e) => {
                        e.stopPropagation();
                    },
                    onClick: p,
                    showNotificationBadge: y,
                }),
            [m, x, y, p],
        ),
        M = l.useCallback(
            (e, t) =>
                L
                    ? e
                        ? (0, a.jsx)(Z.EA, { cardRef: j, targetElementRef: _, shouldShow: e })
                        : null
                    : C
                      ? (0, a.jsx)(P, {
                            targetElementRef: _,
                            shouldShow: e,
                            onRequestClose: p,
                            ctaText: n,
                            ctaOnClick: () => {
                                p(), s();
                            },
                        })
                      : e
                        ? (0, a.jsx)("div", {
                              className: r()(ee.Ui, d, { [ee.R]: t, [ee.RK]: !t }),
                              ref: j,
                              children: S,
                          })
                        : null,
            [L, S, d, j, _, p, n, s, C],
        );
    return (0, a.jsxs)("div", { className: r()(ee.kL, h, { [ee.R]: A, [ee.RK]: !A }), children: [T, M(g, A)] });
}
en.CardAlignment = et;
