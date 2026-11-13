l.d(a, { SS: () => ea, cP: () => ee });
var t = l(477900),
    s = l(582128),
    n = l(503698),
    r = l.n(n),
    i = l(82495),
    o = l(793574),
    c = l(892227),
    u = l(492462),
    d = l(855986),
    _ = l(195118),
    A = l(916845),
    m = l(834730),
    E = l(43990),
    R = l(821609),
    h = l(303136),
    x = l(622886),
    f = l(976860),
    N = l(309954),
    p = l(287809),
    C = l(975571),
    v = l(474090),
    j = l(920050),
    k = l(646514),
    b = l(403581),
    g = l(318254),
    O = l(914410),
    L = l(921894),
    T = l(903080);
let w = {
        churning: { start: k.A.unsafe_rawColors.OPACITY_RED_80.css, end: k.A.unsafe_rawColors.RED_NEW_30.css },
        active: { start: k.A.unsafe_rawColors.OPACITY_GREEN_80.css, end: k.A.unsafe_rawColors.GREEN_NEW_30.css },
    },
    S = function (e) {
        let { className: a } = e,
            { passesProgressBarInvariant: l, programReward: s, totalDays: n } = (0, x.F)();
        if (!l || null == s || null == n) return null;
        let i = (0, c.default)(new Date(s.next_reward_date), new Date()),
            o = s.program_current_state === L.L.PREMIUM_CHURNING,
            u = o ? w.churning.start : w.active.start,
            d = o ? w.churning.end : w.active.end;
        return (0, t.jsxs)("div", {
            className: r()(T.k, a),
            children: [
                (0, t.jsx)(O.Ay, {
                    variant: O.qP.UNSET,
                    progress: n - i,
                    maximum: n,
                    override: { default: { gradientStart: u, gradientEnd: d } },
                }),
                o
                    ? (0, t.jsx)(b.NitroWheelIcon, { size: "sm", color: "currentColor", className: T.K })
                    : (0, t.jsx)(g.OrbsIcon, { size: "sm", color: "currentColor", className: T.K }),
            ],
        });
    };
(l(831259), l(688810));
var D = l(129230);
(l(241524), l(736653), l(780964), l(766075), l(872725));
var M = l(652215);
function I(e, a) {
    D.default.track(M.HAw.PREMIUM_TENURE_REWARDS_ORBS_CTA_CLICKED, { cta_type: e, program_state: a });
}
l(758836);
var y = l(901123),
    B = l(17268),
    U = l(792996);
l(46788);
var W = l(909340);
(l(455482), C.A.getArticleURL(M.MVz.ORBS_REWARDS_FAQ), l(762493));
var P = l(682901),
    F = l(226068),
    K = l(268920),
    z = l(633217);
function V() {
    return (0, t.jsx)("div", {
        className: F.s,
        children: (0, t.jsx)(h.A, { src: z.A, fallbackImage: K.A, className: F.Cb }),
    });
}
function q() {
    (I("balance_popover_helpdesk"), window.open(C.A.getArticleURL(M.MVz.ORBS_FAQ), "_blank"));
}
function G(e) {
    let { targetElementRef: a, shouldShow: l, onRequestClose: n, onNavigate: i, ctaText: o, ctaOnClick: C } = e,
        { passesGeneralUIInvariant: k, programReward: b } = (0, x.F)(),
        g = (0, d.bG)([p.default], () => p.default.getCurrentUser()),
        { balance: O } = (0, N.W)(),
        L = !(0, v.ki)(g),
        T = s.useCallback(() => {
            (I("balance_popover_next_drop"),
                n(),
                null != i && i(),
                (0, f.pX)(y.BV.NITRO_HOME, { search: (0, u.As)({ perk: j.NITRO_ORBS_REWARDS_CARD_ID }) }));
        }, [n, i]),
        w = s.useCallback(() => {
            (I("balance_popover_upsell"),
                n(),
                null != i && i(),
                (0, f.pX)(y.BV.NITRO_HOME, { search: (0, u.As)({ section: "orbs" }) }));
        }, [n, i]),
        D = s.useMemo(() => {
            let e = (0, v.YE)(g, P.PremiumTypes.TIER_2);
            if (!k || L) return null;
            if (e && null != b) {
                let e = (0, c.default)(new Date(b.next_reward_date), new Date());
                return (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(m.E, {
                            variant: "body-xs/normal",
                            color: "text-default",
                            children: U.intl.format(B.default["AvL/At"], {
                                days: Math.max(1, e),
                                deepLinkToNitroOrbs: T,
                            }),
                        }),
                        (0, t.jsx)(S, {}),
                    ],
                });
            }
            return null;
        }, [g, L, b, k, T]),
        K = (O ?? 0) >= 4100;
    return (0, t.jsx)(_.x, {
        targetElementRef: a,
        shouldShow: l,
        onRequestClose: n,
        position: "bottom",
        gradientColor: "blue",
        modal: !0,
        closeOnClickOutside: !0,
        children: (0, t.jsx)(E.N, {
            theme: K ? M.NJ8.DARK : void 0,
            children: (e) =>
                (0, t.jsxs)("div", {
                    className: r()(e, F.j),
                    children: [
                        K && (0, t.jsx)(h.A, { src: W.A, className: F.yG }),
                        (0, t.jsxs)("div", {
                            className: F.Qs,
                            children: [
                                (0, t.jsx)(A.q, { onClick: n }),
                                (0, t.jsxs)("div", {
                                    className: F.hQ,
                                    children: [
                                        (0, t.jsx)(V, {}),
                                        (0, t.jsxs)("div", {
                                            className: F.y$,
                                            children: [
                                                (O ?? 0) > 0 &&
                                                    (0, t.jsxs)("div", {
                                                        className: F.E2,
                                                        children: [
                                                            (0, t.jsx)(m.E, {
                                                                variant: "display-lg",
                                                                className: F.K,
                                                                children: O ?? 0,
                                                            }),
                                                            (0, t.jsx)(m.E, {
                                                                variant: "body-xs/normal",
                                                                color: "text-muted",
                                                                children: U.intl.string(B.default.KclK9z),
                                                            }),
                                                        ],
                                                    }),
                                                D,
                                            ],
                                        }),
                                        (0, t.jsx)(R.$, {
                                            text: o,
                                            variant: "primary",
                                            size: "sm",
                                            onClick: C,
                                            fullWidth: !0,
                                        }),
                                        (0, t.jsx)(m.E, {
                                            variant: "body-xs/normal",
                                            color: L ? "text-default" : "text-muted",
                                            className: F.CU,
                                            children: L
                                                ? U.intl.format(B.default.juvXqj, { deepLinkToNitroOrbs: w })
                                                : U.intl.format(B.default.fhAVek, { helpdeskArticle: q }),
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
var H = l(318346),
    J = l(362862),
    Q = l(923138),
    Y = l(305003),
    X = l(219980),
    $ = l(150849),
    Z = l(226346);
let ee = { START: Z.Vl, END: Z.Wk };
function ea(e) {
    let {
            showNotificationBadge: a,
            ctaText: l,
            ctaOnClick: n,
            onNavigate: c,
            analyticsPage: u,
            className: d,
            pillVariant: _,
            themeOverride: A,
        } = e,
        { balance: m } = (0, N.W)(),
        [E, R] = s.useState(Y.k.DEFAULT),
        [h, x] = s.useState(!1),
        [f, p] = s.useState(!1),
        C = s.useRef(null),
        v = s.useRef(null),
        j = (0, J.Hy)({ location: "BalanceWidgetMenu" }),
        k = s.useCallback(() => {
            let e = !h;
            (e &&
                null != u &&
                (0, H.Y)({
                    pageType: u,
                    sectionType: j ? o.A.ORB_WALLET : M.JJy.ORBS_BALANCE_MENU,
                    ctaObject: j ? o.A.ORB_WALLET_OPEN_FROM_BALANCE_PILL : M.ZSU.OPEN_ORB_BALANCE_MENU_FROM_PILL,
                }),
                R(e ? Y.k.SELECTED : Y.k.DEFAULT),
                x(e));
        }, [h, u, j]),
        b = s.useCallback(() => {
            h && k();
        }, [h, k]),
        g = (0, i.A)(null, b),
        { hasUnreadUpdate: O } = (0, Q.I)({ enabled: j }),
        L = a ?? O,
        T = s.useMemo(
            () =>
                (0, t.jsx)(X.J, {
                    pillRef: C,
                    clickableRef: v,
                    ariaExpanded: h,
                    balance: m,
                    balanceWidgetMode: E,
                    onMouseDown: (e) => {
                        e.stopPropagation();
                    },
                    onClick: k,
                    variant: _,
                    themeOverride: A,
                    showNotificationBadge: L,
                }),
            [m, E, _, A, L, k, h],
        ),
        w = s.useCallback(
            (e) =>
                j
                    ? e
                        ? (0, t.jsx)($.EA, {
                              cardRef: g,
                              returnRef: v,
                              targetElementRef: C,
                              shouldShow: e,
                              analyticsPage: u,
                              onCloseWallet: (e) => {
                                  (k(), "navigation" === e && null != c && c());
                              },
                          })
                        : null
                    : (0, t.jsx)(G, {
                          targetElementRef: C,
                          shouldShow: e,
                          onRequestClose: k,
                          ctaText: l,
                          onNavigate: c,
                          ctaOnClick: () => {
                              (k(), n());
                          },
                      }),
            [j, g, C, k, l, n, u, c],
        );
    return (0, t.jsxs)("div", { className: r()(Z.kL, d, { [Z.R]: f, [Z.RK]: !f }), children: [T, w(h)] });
}
ea.CardAlignment = ee;
