s.d(a, { SS: () => el, cP: () => et });
var t = s(477900),
    l = s(582128),
    r = s(503698),
    n = s.n(r),
    c = s(82495),
    o = s(793574),
    i = s(892227),
    d = s(492462),
    u = s(855986),
    _ = s(195118),
    m = s(916845),
    E = s(834730),
    A = s(43990),
    R = s(821609),
    x = s(303136),
    h = s(622886),
    f = s(976860),
    p = s(309954),
    N = s(587244),
    C = s(287809),
    v = s(403362),
    b = s(975571),
    j = s(474090),
    k = s(923079),
    O = s(920050),
    g = s(646514),
    T = s(403581),
    D = s(318254),
    w = s(914410),
    L = s(921894),
    M = s(903080);
let B = {
        churning: { start: g.A.unsafe_rawColors.OPACITY_RED_80.css, end: g.A.unsafe_rawColors.RED_NEW_30.css },
        active: { start: g.A.unsafe_rawColors.OPACITY_GREEN_80.css, end: g.A.unsafe_rawColors.GREEN_NEW_30.css },
    },
    S = function (e) {
        let { className: a } = e,
            { passesProgressBarInvariant: s, programReward: l, totalDays: r } = (0, h.F)();
        if (!s || null == l || null == r) return null;
        let c = (0, i.default)(new Date(l.next_reward_date), new Date()),
            o = l.program_current_state === L.L.PREMIUM_CHURNING,
            d = o ? B.churning.start : B.active.start,
            u = o ? B.churning.end : B.active.end;
        return (0, t.jsxs)("div", {
            className: n()(M.k, a),
            children: [
                (0, t.jsx)(w.Ay, {
                    variant: w.qP.UNSET,
                    progress: r - c,
                    maximum: r,
                    override: { default: { gradientStart: d, gradientEnd: u } },
                }),
                o
                    ? (0, t.jsx)(T.NitroWheelIcon, { size: "sm", color: "currentColor", className: M.K })
                    : (0, t.jsx)(D.OrbsIcon, { size: "sm", color: "currentColor", className: M.K }),
            ],
        });
    };
(s(831259), s(688810));
var U = s(129230);
(s(241524), s(736653), s(780964), s(766075), s(872725));
var y = s(652215);
function I(e, a) {
    U.default.track(y.HAw.PREMIUM_TENURE_REWARDS_ORBS_CTA_CLICKED, { cta_type: e, program_state: a });
}
s(758836);
var P = s(901123),
    W = s(17268),
    F = s(792996);
(s(46788), b.A.getArticleURL(y.MVz.ORBS_REWARDS_FAQ), s(762493));
var K = s(682901),
    V = s(631502),
    X = s(226068),
    z = s(268920),
    q = s(633217);
function G() {
    return (0, t.jsx)("div", {
        className: X.s,
        children: (0, t.jsx)(x.A, { src: q.A, fallbackImage: z.A, className: X.Cb }),
    });
}
function H() {
    (I("balance_popover_helpdesk"), window.open(b.A.getArticleURL(y.MVz.ORBS_FAQ), "_blank"));
}
function Y(e) {
    let { targetElementRef: a, shouldShow: s, onRequestClose: r, onNavigate: c, ctaText: o, ctaOnClick: b } = e,
        { passesGeneralUIInvariant: g, programReward: T } = (0, h.F)(),
        D = (0, k.A)({ location: "PremiumTenureRewardsOrbsBalancePopover" }),
        w = (0, u.bG)([C.default], () => C.default.getCurrentUser()),
        { balance: L } = (0, p.W)(),
        M = !(0, j.ki)(w),
        B = l.useCallback(() => {
            (I("balance_popover_next_drop"),
                r(),
                null != c && c(),
                (0, f.pX)(P.BV.NITRO_HOME, { search: (0, d.As)({ perk: O.NITRO_ORBS_REWARDS_CARD_ID }) }));
        }, [r, c]),
        U = l.useCallback(() => {
            (I("balance_popover_upsell"),
                r(),
                null != c && c(),
                (0, f.pX)(P.BV.NITRO_HOME, { search: (0, d.As)({ section: "orbs" }) }));
        }, [r, c]),
        z = l.useMemo(() => {
            let e = (0, j.YE)(w, K.PremiumTypes.TIER_2);
            if (!g || M) return null;
            if (e && null != T) {
                let e = (0, i.default)(new Date(T.next_reward_date), new Date());
                switch (D) {
                    case k.m.DEFAULT:
                        return (0, t.jsxs)(t.Fragment, {
                            children: [
                                (0, t.jsx)(E.E, {
                                    variant: "body-xs/normal",
                                    color: "text-default",
                                    children: F.intl.format(W.default["AvL/At"], {
                                        days: Math.max(1, e),
                                        deepLinkToNitroOrbs: B,
                                    }),
                                }),
                                (0, t.jsx)(S, {}),
                            ],
                        });
                    case k.m.DEPRECATED:
                        return (0, t.jsxs)(t.Fragment, {
                            children: [
                                (0, t.jsx)("div", {
                                    className: X.iY,
                                    children: (0, t.jsx)(N.B$, {
                                        text: F.intl.format(V.default.bkU5si, {
                                            orbAmount: T.reward_amount,
                                            days: Math.max(1, e),
                                        }),
                                    }),
                                }),
                                (0, t.jsx)(S, {}),
                            ],
                        });
                    case k.m.DEPRECATED_XBOX:
                    case k.m.REMOVED:
                    case k.m.REMOVED_XBOX:
                        break;
                    default:
                        return (0, v.xb)(D);
                }
            }
            return null;
        }, [w, M, T, g, B, D]),
        q = (L ?? 0) >= 4100;
    return (0, t.jsx)(_.x, {
        targetElementRef: a,
        shouldShow: s,
        onRequestClose: r,
        position: "bottom",
        gradientColor: "blue",
        modal: !0,
        closeOnClickOutside: !0,
        children: (0, t.jsx)(A.N, {
            theme: q ? y.NJ8.DARK : void 0,
            children: (e) =>
                (0, t.jsxs)("div", {
                    className: n()(e, X.j),
                    children: [
                        q &&
                            (0, t.jsx)(x.A, {
                                src: "https://cdn.discordapp.com/assets/content/62447672d679c7ceb5756dc07350a3145081a671a026fe96876d8742b73f3a82.mp4",
                                className: X.yG,
                            }),
                        (0, t.jsxs)("div", {
                            className: X.Qs,
                            children: [
                                (0, t.jsx)(m.q, { onClick: r }),
                                (0, t.jsxs)("div", {
                                    className: X.hQ,
                                    children: [
                                        (0, t.jsx)(G, {}),
                                        (0, t.jsxs)("div", {
                                            className: X.y$,
                                            children: [
                                                (L ?? 0) > 0 &&
                                                    (0, t.jsxs)("div", {
                                                        className: X.E2,
                                                        children: [
                                                            (0, t.jsx)(E.E, {
                                                                variant: "display-lg",
                                                                className: X.K,
                                                                children: L ?? 0,
                                                            }),
                                                            (0, t.jsx)(E.E, {
                                                                variant: "body-xs/normal",
                                                                color: "text-muted",
                                                                children: F.intl.string(W.default.KclK9z),
                                                            }),
                                                        ],
                                                    }),
                                                z,
                                            ],
                                        }),
                                        (0, t.jsx)(R.$, {
                                            text: o,
                                            variant: "primary",
                                            size: "sm",
                                            onClick: b,
                                            fullWidth: !0,
                                        }),
                                        (0, t.jsx)(E.E, {
                                            variant: "body-xs/normal",
                                            color: M ? "text-default" : "text-muted",
                                            className: X.CU,
                                            children: M
                                                ? F.intl.format(W.default.juvXqj, { deepLinkToNitroOrbs: U })
                                                : F.intl.format(W.default.fhAVek, { helpdeskArticle: H }),
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
var J = s(318346),
    Q = s(362862),
    $ = s(923138),
    Z = s(305003),
    ee = s(219980),
    ea = s(489422),
    es = s(226346);
let et = { START: es.Vl, END: es.Wk };
function el(e) {
    let {
            showNotificationBadge: a,
            ctaText: s,
            ctaOnClick: r,
            onNavigate: i,
            analyticsPage: d,
            className: u,
            pillVariant: _,
            themeOverride: m,
        } = e,
        { balance: E } = (0, p.W)(),
        [A, R] = l.useState(Z.k.DEFAULT),
        [x, h] = l.useState(!1),
        [f, N] = l.useState(!1),
        C = l.useRef(null),
        v = l.useRef(null),
        b = (0, Q.Hy)({ location: "BalanceWidgetMenu" }),
        j = l.useCallback(() => {
            let e = !x;
            (e &&
                null != d &&
                (0, J.Y)({
                    pageType: d,
                    sectionType: b ? o.A.ORB_WALLET : y.JJy.ORBS_BALANCE_MENU,
                    ctaObject: b ? o.A.ORB_WALLET_OPEN_FROM_BALANCE_PILL : y.ZSU.OPEN_ORB_BALANCE_MENU_FROM_PILL,
                }),
                R(e ? Z.k.SELECTED : Z.k.DEFAULT),
                h(e));
        }, [x, d, b]),
        k = l.useCallback(() => {
            x && j();
        }, [x, j]),
        O = (0, c.A)(null, k),
        { hasUnreadUpdate: g } = (0, $.I)({ enabled: b }),
        T = a ?? g,
        D = l.useMemo(
            () =>
                (0, t.jsx)(ee.J, {
                    pillRef: C,
                    clickableRef: v,
                    ariaExpanded: x,
                    balance: E,
                    balanceWidgetMode: A,
                    onMouseDown: (e) => {
                        e.stopPropagation();
                    },
                    onClick: j,
                    variant: _,
                    themeOverride: m,
                    showNotificationBadge: T,
                }),
            [E, A, _, m, T, j, x],
        ),
        w = l.useCallback(
            (e) =>
                b
                    ? e
                        ? (0, t.jsx)(ea.EA, {
                              cardRef: O,
                              returnRef: v,
                              targetElementRef: C,
                              shouldShow: e,
                              analyticsPage: d,
                              onCloseWallet: (e) => {
                                  (j(), "navigation" === e && null != i && i());
                              },
                          })
                        : null
                    : (0, t.jsx)(Y, {
                          targetElementRef: C,
                          shouldShow: e,
                          onRequestClose: j,
                          ctaText: s,
                          onNavigate: i,
                          ctaOnClick: () => {
                              (j(), r());
                          },
                      }),
            [b, O, C, j, s, r, d, i],
        );
    return (0, t.jsxs)("div", { className: n()(es.kL, u, { [es.R]: f, [es.RK]: !f }), children: [D, w(x)] });
}
el.CardAlignment = et;
