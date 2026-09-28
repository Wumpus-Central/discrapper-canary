a.d(t, { SS: () => en, cP: () => ea });
var n = a(477900),
    l = a(582128),
    r = a(503698),
    s = a.n(r),
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
    R = a(303136),
    g = a(366505),
    k = a(976860),
    v = a(309954),
    C = a(287809),
    E = a(975571),
    p = a(474090),
    N = a(920050),
    b = a(94264),
    O = a(549384),
    L = a(566119),
    _ = a(202541),
    y = a(652215),
    T = a(901123),
    S = a(1889),
    M = a(375708),
    D = a(226068),
    w = a(268920),
    P = a(633217),
    B = a(909340);
function U() {
    return (0, n.jsx)("div", {
        className: D.s,
        children: (0, n.jsx)(R.A, { src: P.A, fallbackImage: w.A, className: D.Cb }),
    });
}
function F() {
    ((0, L.RQ)(), (0, k.pX)(T.BV.NITRO_HOME, { search: (0, d.stringify)({ perk: N.NITRO_ORBS_REWARDS_CARD_ID }) }));
}
function I() {
    ((0, L.gP)(), (0, k.pX)(T.BV.NITRO_HOME, { search: (0, d.stringify)({ section: O.L }) }));
}
function W() {
    ((0, L.b)(), window.open(E.A.getArticleURL(y.MVz.ORBS_FAQ), "_blank"));
}
function z(e) {
    let { targetElementRef: t, shouldShow: a, onRequestClose: r, ctaText: i, ctaOnClick: u } = e,
        { passesGeneralUIInvariant: c, programReward: d } = (0, g.F)({
            location: "PremiumTenureRewardsOrbsBalancePopover",
        }),
        k = (0, m.bG)([C.default], () => C.default.getCurrentUser()),
        { balance: E } = (0, v.W)(),
        N = !(0, p.ki)(k),
        O = l.useMemo(() => {
            let e = (0, p.YE)(k, _.PremiumTypes.TIER_2);
            if (!c || N) return null;
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
                        (0, n.jsx)(b.A, {}),
                    ],
                });
            }
            return null;
        }, [k, N, d, c]),
        L = (E ?? 0) >= 4100;
    return (0, n.jsx)(f.x, {
        targetElementRef: t,
        shouldShow: a,
        onRequestClose: r,
        position: "bottom",
        gradientColor: "blue",
        modal: !0,
        closeOnClickOutside: !0,
        children: (0, n.jsx)(j.N, {
            theme: L ? y.NJ8.DARK : void 0,
            children: (e) =>
                (0, n.jsxs)("div", {
                    className: s()(e, D.j),
                    children: [
                        L && (0, n.jsx)(R.A, { src: B.A, className: D.yG }),
                        (0, n.jsxs)("div", {
                            className: D.Qs,
                            children: [
                                (0, n.jsx)(x.q, { onClick: r }),
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
                                            color: N ? "text-default" : "text-muted",
                                            className: D.CU,
                                            children: N
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
    V = a(17843),
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
    let { pillRef: t, clickableRef: a, ...l } = e,
        { balancePillOverlay: r } = (0, m.cf)([X.A], () => ({ balancePillOverlay: X.A.balancePillOverlay })),
        s = (0, n.jsx)(Y.Gy, { ref: t, clickableRef: a, ...l }),
        i = (0, n.jsx)(Y.Gy, { ...l, isInModalOverlay: !0, disabled: !0 }),
        u = null != t.current ? t.current.offsetHeight : 36;
    return (0, n.jsx)(Q.Y, {
        fixed: !0,
        autoInvert: !1,
        renderPopout: () => i,
        position: "bottom",
        align: "right",
        shouldShow: r,
        spacing: -u,
        animation: Q.Y.Animation.NONE,
        targetElementRef: t,
        positionKey: `${l.balance}-${r}`,
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
            ctaOnClick: r,
            analyticsPage: o,
            linkText: d = M.intl.string(M.t.XRdyjz),
            cardAlignment: m = ea.START,
            className: f,
        } = e,
        { balance: x } = (0, v.W)(),
        h = (0, V.DK)(K.W.NITRO, "BalanceWidgetMenu"),
        [j, A] = l.useState(H.k.DEFAULT),
        [R, g] = l.useState(!1),
        [k, C] = l.useState(!1),
        E = l.useRef(null),
        p = l.useRef(null);
    (0, c.j)(!R);
    let N = (0, $.H)({ location: "BalanceWidgetMenu" }),
        b = l.useCallback(() => {
            let e = !R;
            (e &&
                null != o &&
                (0, q.Y)({
                    pageType: o,
                    sectionType: N ? u.A.ORB_WALLET : y.JJy.ORBS_BALANCE_MENU,
                    ctaObject: N ? u.A.ORB_WALLET_OPEN_FROM_BALANCE_PILL : y.ZSU.OPEN_ORB_BALANCE_MENU_FROM_PILL,
                }),
                A(e ? H.k.SELECTED : H.k.DEFAULT),
                g(e));
        }, [R, o, N]),
        O = l.useCallback(() => {
            R && b();
        }, [R, b]),
        L = (0, i.A)(null, O),
        _ = l.useMemo(
            () =>
                (0, n.jsx)(J.b, {
                    analyticsPage: o,
                    ctaText: a,
                    ctaOnClick: () => {
                        (b(), r());
                    },
                    linkText: d,
                }),
            [o, a, d, b, r],
        ),
        { hasUnreadUpdate: T } = (0, G.I)({ enabled: N }),
        S = t ?? T,
        D = l.useMemo(
            () =>
                (0, n.jsx)(Z, {
                    pillRef: E,
                    clickableRef: p,
                    ariaExpanded: R,
                    balance: x,
                    balanceWidgetMode: j,
                    onMouseDown: (e) => {
                        e.stopPropagation();
                    },
                    onClick: b,
                    showNotificationBadge: S,
                }),
            [x, j, S, b, R],
        ),
        w = l.useCallback(
            (e, t) =>
                N
                    ? e
                        ? (0, n.jsx)(ee.EA, {
                              cardRef: L,
                              returnRef: p,
                              targetElementRef: E,
                              shouldShow: e,
                              analyticsPage: o,
                              onCloseWallet: b,
                          })
                        : null
                    : h
                      ? (0, n.jsx)(z, {
                            targetElementRef: E,
                            shouldShow: e,
                            onRequestClose: b,
                            ctaText: a,
                            ctaOnClick: () => {
                                (b(), r());
                            },
                        })
                      : e
                        ? (0, n.jsx)("div", {
                              className: s()(et.Ui, m, { [et.R]: t, [et.RK]: !t }),
                              ref: L,
                              children: _,
                          })
                        : null,
            [N, _, m, L, E, b, a, r, h, o],
        );
    return (0, n.jsxs)("div", { className: s()(et.kL, f, { [et.R]: k, [et.RK]: !k }), children: [D, w(R, k)] });
}
en.CardAlignment = ea;
