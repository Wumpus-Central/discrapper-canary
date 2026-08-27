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
    x = l(43990),
    g = l(821609),
    f = l(303136),
    E = l(366505),
    j = l(976860),
    b = l(309954),
    N = l(287809),
    v = l(975571),
    A = l(474090),
    p = l(920050),
    S = l(94264),
    R = l(549384),
    L = l(566119),
    _ = l(202541),
    O = l(652215),
    y = l(901123),
    T = l(131277),
    k = l(375708),
    M = l(226068),
    F = l(268920),
    I = l(633217),
    D = l(909340);
function w() {
    return (0, n.jsx)("div", {
        className: M.s,
        children: (0, n.jsx)(f.A, { src: I.A, fallbackImage: F.A, className: M.Cb }),
    });
}
function B() {
    (0, L.RQ)(), (0, j.pX)(y.BV.NITRO_HOME, { search: (0, u.stringify)({ perk: p.NITRO_ORBS_REWARDS_CARD_ID }) });
}
function P() {
    (0, L.gP)(), (0, j.pX)(y.BV.NITRO_HOME, { search: (0, u.stringify)({ section: R.L }) });
}
function G() {
    (0, L.b)(), window.open(v.A.getArticleURL(O.MVz.ORBS_FAQ), "_blank");
}
function U(e) {
    let { targetElementRef: t, shouldShow: l, onRequestClose: s, ctaText: i, ctaOnClick: c } = e,
        { passesGeneralUIInvariant: u, programReward: j } = (0, E.F)({
            location: "PremiumTenureRewardsOrbsBalancePopover",
        }),
        v = (0, d.bG)([N.default], () => N.default.getCurrentUser()),
        { balance: p } = (0, b.W)(),
        R = !(0, A.ki)(v),
        L = a.useMemo(() => {
            let e = (0, A.YE)(v, _.PremiumTypes.TIER_2);
            if (!u || R) return null;
            if (e && null != j) {
                let e = (0, o.default)(new Date(j.next_reward_date), new Date());
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
        }, [v, R, j, u]),
        y = (p ?? 0) >= 4100;
    return (0, n.jsx)(h.x, {
        targetElementRef: t,
        shouldShow: l,
        onRequestClose: s,
        position: "bottom",
        gradientColor: "blue",
        modal: !0,
        closeOnClickOutside: !0,
        children: (0, n.jsx)(x.N, {
            theme: y ? O.NJ8.DARKER : void 0,
            children: (e) =>
                (0, n.jsxs)("div", {
                    className: r()(e, M.j),
                    children: [
                        y && (0, n.jsx)(f.A, { src: D.A, className: M.yG }),
                        (0, n.jsxs)("div", {
                            className: M.Qs,
                            children: [
                                (0, n.jsx)(m.q, { onClick: s }),
                                (0, n.jsxs)("div", {
                                    className: M.hQ,
                                    children: [
                                        (0, n.jsx)(w, {}),
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
                                                L,
                                            ],
                                        }),
                                        (0, n.jsx)(g.$, {
                                            text: i,
                                            variant: "primary",
                                            size: "sm",
                                            onClick: c,
                                            fullWidth: !0,
                                        }),
                                        (0, n.jsx)(C.E, {
                                            variant: "text-xs/normal",
                                            color: R ? "text-default" : "text-muted",
                                            className: M.CU,
                                            children: R
                                                ? k.intl.format(T.default.juvXqj, { deepLinkToNitroOrbs: P })
                                                : k.intl.format(T.default.fhAVek, { helpdeskArticle: G }),
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
    $ = l(362862),
    V = l(305003),
    K = l(162097),
    q = l(922016);
l(964486), l(786953);
var Q = l(505274),
    J = l(37402);
function X(e) {
    let { pillRef: t, ...l } = e,
        { balancePillOverlay: a } = (0, d.cf)([Q.A], () => ({ balancePillOverlay: Q.A.balancePillOverlay })),
        s = (0, n.jsx)(J.Gy, { ref: t, ...l }),
        r = (0, n.jsx)(J.Gy, { ...l, isInModalOverlay: !0, disabled: !0 }),
        i = null != t.current ? t.current.offsetHeight : 36;
    return (0, n.jsx)(q.Y, {
        fixed: !0,
        autoInvert: !1,
        renderPopout: () => r,
        position: "bottom",
        align: "right",
        shouldShow: a,
        spacing: -i,
        animation: q.Y.Animation.NONE,
        targetElementRef: t,
        positionKey: `${l.balance}-${a}`,
        children: () => s,
    });
}
var Y = l(983325),
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
        { balance: m } = (0, b.W)(),
        C = (0, W.DK)(H.W.NITRO, "BalanceWidgetMenu"),
        [x, g] = a.useState(V.k.DEFAULT),
        [f, E] = a.useState(!1),
        [j, N] = a.useState(!1),
        v = a.useRef(null);
    (0, c.j)(!f);
    let A = a.useCallback(() => {
            let e = !f;
            e &&
                null != o &&
                (0, z.Y)({
                    pageType: o,
                    sectionType: O.JJy.ORBS_BALANCE_MENU,
                    ctaObject: O.ZSU.OPEN_ORB_BALANCE_MENU_FROM_PILL,
                }),
                g(e ? V.k.SELECTED : V.k.DEFAULT),
                E(e);
        }, [f, o]),
        p = a.useCallback(() => {
            f && A();
        }, [f, A]),
        S = (0, i.A)(null, p),
        R = a.useMemo(
            () =>
                (0, n.jsx)(K.b, {
                    analyticsPage: o,
                    ctaText: l,
                    ctaOnClick: () => {
                        A(), s();
                    },
                    linkText: u,
                }),
            [o, l, u, A, s],
        ),
        L = a.useMemo(
            () =>
                (0, n.jsx)(X, {
                    pillRef: v,
                    balance: m,
                    balanceWidgetMode: x,
                    onMouseDown: (e) => {
                        e.stopPropagation();
                    },
                    onClick: A,
                    showNotificationBadge: t,
                }),
            [m, x, t, A],
        ),
        _ = (0, $.H)({ location: "BalanceWidgetMenu" }),
        y = a.useCallback(
            (e, t) =>
                _
                    ? e
                        ? (0, n.jsx)(Y.EA, { cardRef: S, targetElementRef: v, shouldShow: e })
                        : null
                    : C
                      ? (0, n.jsx)(U, {
                            targetElementRef: v,
                            shouldShow: e,
                            onRequestClose: A,
                            ctaText: l,
                            ctaOnClick: () => {
                                A(), s();
                            },
                        })
                      : e
                        ? (0, n.jsx)("div", { className: r()(Z.Ui, d, { [Z.R]: t, [Z.RK]: !t }), ref: S, children: R })
                        : null,
            [_, R, d, S, v, A, l, s, C],
        );
    return (0, n.jsxs)("div", { className: r()(Z.kL, h, { [Z.R]: j, [Z.RK]: !j }), children: [L, y(f, j)] });
}
et.CardAlignment = ee;
