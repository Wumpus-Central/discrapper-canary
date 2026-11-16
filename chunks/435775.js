t.d(a, { SS: () => ee, cP: () => Z });
var s = t(477900),
    l = t(582128),
    n = t(503698),
    r = t.n(n),
    c = t(82495),
    o = t(793574),
    i = t(892227),
    d = t(492462),
    u = t(855986),
    _ = t(195118),
    m = t(916845),
    A = t(834730),
    E = t(43990),
    R = t(821609),
    f = t(303136),
    h = t(622886),
    p = t(976860),
    x = t(309954),
    N = t(287809),
    C = t(975571),
    v = t(474090),
    j = t(920050),
    k = t(646514),
    b = t(403581),
    g = t(318254),
    O = t(914410),
    L = t(921894),
    T = t(903080);
let w = {
        churning: { start: k.A.unsafe_rawColors.OPACITY_RED_80.css, end: k.A.unsafe_rawColors.RED_NEW_30.css },
        active: { start: k.A.unsafe_rawColors.OPACITY_GREEN_80.css, end: k.A.unsafe_rawColors.GREEN_NEW_30.css },
    },
    S = function (e) {
        let { className: a } = e,
            { passesProgressBarInvariant: t, programReward: l, totalDays: n } = (0, h.F)();
        if (!t || null == l || null == n) return null;
        let c = (0, i.default)(new Date(l.next_reward_date), new Date()),
            o = l.program_current_state === L.L.PREMIUM_CHURNING,
            d = o ? w.churning.start : w.active.start,
            u = o ? w.churning.end : w.active.end;
        return (0, s.jsxs)("div", {
            className: r()(T.k, a),
            children: [
                (0, s.jsx)(O.Ay, {
                    variant: O.qP.UNSET,
                    progress: n - c,
                    maximum: n,
                    override: { default: { gradientStart: d, gradientEnd: u } },
                }),
                o
                    ? (0, s.jsx)(b.NitroWheelIcon, { size: "sm", color: "currentColor", className: T.K })
                    : (0, s.jsx)(g.OrbsIcon, { size: "sm", color: "currentColor", className: T.K }),
            ],
        });
    };
(t(831259), t(688810));
var D = t(129230);
(t(241524), t(736653), t(780964), t(766075), t(872725));
var M = t(652215);
function I(e, a) {
    D.default.track(M.HAw.PREMIUM_TENURE_REWARDS_ORBS_CTA_CLICKED, { cta_type: e, program_state: a });
}
t(758836);
var y = t(901123),
    B = t(17268),
    U = t(792996);
(t(46788), C.A.getArticleURL(M.MVz.ORBS_REWARDS_FAQ), t(762493));
var W = t(682901),
    P = t(226068),
    F = t(268920),
    K = t(633217);
function z() {
    return (0, s.jsx)("div", {
        className: P.s,
        children: (0, s.jsx)(f.A, { src: K.A, fallbackImage: F.A, className: P.Cb }),
    });
}
function V() {
    (I("balance_popover_helpdesk"), window.open(C.A.getArticleURL(M.MVz.ORBS_FAQ), "_blank"));
}
function q(e) {
    let { targetElementRef: a, shouldShow: t, onRequestClose: n, onNavigate: c, ctaText: o, ctaOnClick: C } = e,
        { passesGeneralUIInvariant: k, programReward: b } = (0, h.F)(),
        g = (0, u.bG)([N.default], () => N.default.getCurrentUser()),
        { balance: O } = (0, x.W)(),
        L = !(0, v.ki)(g),
        T = l.useCallback(() => {
            (I("balance_popover_next_drop"),
                n(),
                null != c && c(),
                (0, p.pX)(y.BV.NITRO_HOME, { search: (0, d.As)({ perk: j.NITRO_ORBS_REWARDS_CARD_ID }) }));
        }, [n, c]),
        w = l.useCallback(() => {
            (I("balance_popover_upsell"),
                n(),
                null != c && c(),
                (0, p.pX)(y.BV.NITRO_HOME, { search: (0, d.As)({ section: "orbs" }) }));
        }, [n, c]),
        D = l.useMemo(() => {
            let e = (0, v.YE)(g, W.PremiumTypes.TIER_2);
            if (!k || L) return null;
            if (e && null != b) {
                let e = (0, i.default)(new Date(b.next_reward_date), new Date());
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)(A.E, {
                            variant: "body-xs/normal",
                            color: "text-default",
                            children: U.intl.format(B.default["AvL/At"], {
                                days: Math.max(1, e),
                                deepLinkToNitroOrbs: T,
                            }),
                        }),
                        (0, s.jsx)(S, {}),
                    ],
                });
            }
            return null;
        }, [g, L, b, k, T]),
        F = (O ?? 0) >= 4100;
    return (0, s.jsx)(_.x, {
        targetElementRef: a,
        shouldShow: t,
        onRequestClose: n,
        position: "bottom",
        gradientColor: "blue",
        modal: !0,
        closeOnClickOutside: !0,
        children: (0, s.jsx)(E.N, {
            theme: F ? M.NJ8.DARK : void 0,
            children: (e) =>
                (0, s.jsxs)("div", {
                    className: r()(e, P.j),
                    children: [
                        F &&
                            (0, s.jsx)(f.A, {
                                src: "https://cdn.discordapp.com/assets/content/62447672d679c7ceb5756dc07350a3145081a671a026fe96876d8742b73f3a82.mp4",
                                className: P.yG,
                            }),
                        (0, s.jsxs)("div", {
                            className: P.Qs,
                            children: [
                                (0, s.jsx)(m.q, { onClick: n }),
                                (0, s.jsxs)("div", {
                                    className: P.hQ,
                                    children: [
                                        (0, s.jsx)(z, {}),
                                        (0, s.jsxs)("div", {
                                            className: P.y$,
                                            children: [
                                                (O ?? 0) > 0 &&
                                                    (0, s.jsxs)("div", {
                                                        className: P.E2,
                                                        children: [
                                                            (0, s.jsx)(A.E, {
                                                                variant: "display-lg",
                                                                className: P.K,
                                                                children: O ?? 0,
                                                            }),
                                                            (0, s.jsx)(A.E, {
                                                                variant: "body-xs/normal",
                                                                color: "text-muted",
                                                                children: U.intl.string(B.default.KclK9z),
                                                            }),
                                                        ],
                                                    }),
                                                D,
                                            ],
                                        }),
                                        (0, s.jsx)(R.$, {
                                            text: o,
                                            variant: "primary",
                                            size: "sm",
                                            onClick: C,
                                            fullWidth: !0,
                                        }),
                                        (0, s.jsx)(A.E, {
                                            variant: "body-xs/normal",
                                            color: L ? "text-default" : "text-muted",
                                            className: P.CU,
                                            children: L
                                                ? U.intl.format(B.default.juvXqj, { deepLinkToNitroOrbs: w })
                                                : U.intl.format(B.default.fhAVek, { helpdeskArticle: V }),
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
var G = t(318346),
    H = t(362862),
    J = t(923138),
    Q = t(305003),
    Y = t(219980),
    X = t(580971),
    $ = t(226346);
let Z = { START: $.Vl, END: $.Wk };
function ee(e) {
    let {
            showNotificationBadge: a,
            ctaText: t,
            ctaOnClick: n,
            onNavigate: i,
            analyticsPage: d,
            className: u,
            pillVariant: _,
            themeOverride: m,
        } = e,
        { balance: A } = (0, x.W)(),
        [E, R] = l.useState(Q.k.DEFAULT),
        [f, h] = l.useState(!1),
        [p, N] = l.useState(!1),
        C = l.useRef(null),
        v = l.useRef(null),
        j = (0, H.Hy)({ location: "BalanceWidgetMenu" }),
        k = l.useCallback(() => {
            let e = !f;
            (e &&
                null != d &&
                (0, G.Y)({
                    pageType: d,
                    sectionType: j ? o.A.ORB_WALLET : M.JJy.ORBS_BALANCE_MENU,
                    ctaObject: j ? o.A.ORB_WALLET_OPEN_FROM_BALANCE_PILL : M.ZSU.OPEN_ORB_BALANCE_MENU_FROM_PILL,
                }),
                R(e ? Q.k.SELECTED : Q.k.DEFAULT),
                h(e));
        }, [f, d, j]),
        b = l.useCallback(() => {
            f && k();
        }, [f, k]),
        g = (0, c.A)(null, b),
        { hasUnreadUpdate: O } = (0, J.I)({ enabled: j }),
        L = a ?? O,
        T = l.useMemo(
            () =>
                (0, s.jsx)(Y.J, {
                    pillRef: C,
                    clickableRef: v,
                    ariaExpanded: f,
                    balance: A,
                    balanceWidgetMode: E,
                    onMouseDown: (e) => {
                        e.stopPropagation();
                    },
                    onClick: k,
                    variant: _,
                    themeOverride: m,
                    showNotificationBadge: L,
                }),
            [A, E, _, m, L, k, f],
        ),
        w = l.useCallback(
            (e) =>
                j
                    ? e
                        ? (0, s.jsx)(X.EA, {
                              cardRef: g,
                              returnRef: v,
                              targetElementRef: C,
                              shouldShow: e,
                              analyticsPage: d,
                              onCloseWallet: (e) => {
                                  (k(), "navigation" === e && null != i && i());
                              },
                          })
                        : null
                    : (0, s.jsx)(q, {
                          targetElementRef: C,
                          shouldShow: e,
                          onRequestClose: k,
                          ctaText: t,
                          onNavigate: i,
                          ctaOnClick: () => {
                              (k(), n());
                          },
                      }),
            [j, g, C, k, t, n, d, i],
        );
    return (0, s.jsxs)("div", { className: r()($.kL, u, { [$.R]: p, [$.RK]: !p }), children: [T, w(f)] });
}
ee.CardAlignment = Z;
