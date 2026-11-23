t.d(a, { SS: () => er, cP: () => el });
var s = t(477900),
    l = t(582128),
    r = t(503698),
    n = t.n(r),
    c = t(82495),
    i = t(793574),
    o = t(892227),
    d = t(492462),
    u = t(855986),
    _ = t(195118),
    m = t(916845),
    E = t(834730),
    A = t(43990),
    x = t(821609),
    R = t(303136),
    f = t(622886),
    h = t(976860),
    p = t(309954),
    N = t(587244),
    C = t(287809),
    b = t(403362),
    v = t(975571),
    j = t(474090),
    k = t(286348),
    O = t(923079),
    g = t(920050),
    T = t(646514),
    w = t(403581),
    D = t(318254),
    L = t(914410),
    M = t(921894),
    B = t(903080);
let S = {
        churning: { start: T.A.unsafe_rawColors.OPACITY_RED_80.css, end: T.A.unsafe_rawColors.RED_NEW_30.css },
        active: { start: T.A.unsafe_rawColors.OPACITY_GREEN_80.css, end: T.A.unsafe_rawColors.GREEN_NEW_30.css },
    },
    U = function (e) {
        let { className: a } = e,
            { passesProgressBarInvariant: t, programReward: l, totalDays: r } = (0, f.F)();
        if (!t || null == l || null == r) return null;
        let c = (0, o.default)(new Date(l.next_reward_date), new Date()),
            i = l.program_current_state === M.L.PREMIUM_CHURNING,
            d = i ? S.churning.start : S.active.start,
            u = i ? S.churning.end : S.active.end;
        return (0, s.jsxs)("div", {
            className: n()(B.k, a),
            children: [
                (0, s.jsx)(L.Ay, {
                    variant: L.qP.UNSET,
                    progress: r - c,
                    maximum: r,
                    override: { default: { gradientStart: d, gradientEnd: u } },
                }),
                i
                    ? (0, s.jsx)(w.NitroWheelIcon, { size: "sm", color: "currentColor", className: B.K })
                    : (0, s.jsx)(D.OrbsIcon, { size: "sm", color: "currentColor", className: B.K }),
            ],
        });
    };
(t(831259), t(688810));
var y = t(129230);
(t(241524), t(736653), t(780964), t(766075), t(872725));
var I = t(652215);
function P(e, a) {
    y.default.track(I.HAw.PREMIUM_TENURE_REWARDS_ORBS_CTA_CLICKED, { cta_type: e, program_state: a });
}
t(758836);
var W = t(901123),
    F = t(17268),
    K = t(792996);
(t(46788), v.A.getArticleURL(I.MVz.ORBS_REWARDS_FAQ), t(762493));
var V = t(682901),
    X = t(631502),
    z = t(226068),
    q = t(268920),
    G = t(633217);
function H() {
    return (0, s.jsx)("div", {
        className: z.s,
        children: (0, s.jsx)(R.A, { src: G.A, fallbackImage: q.A, className: z.Cb }),
    });
}
function Y() {
    (P("balance_popover_helpdesk"), window.open(v.A.getArticleURL(I.MVz.ORBS_FAQ), "_blank"));
}
function J(e) {
    let { targetElementRef: a, shouldShow: t, onRequestClose: r, onNavigate: c, ctaText: i, ctaOnClick: v } = e,
        { passesGeneralUIInvariant: T, programReward: w } = (0, f.F)(),
        D = (0, O.A)({ location: "PremiumTenureRewardsOrbsBalancePopover" }),
        L = (0, u.bG)([C.default], () => C.default.getCurrentUser()),
        { balance: M } = (0, p.W)(),
        B = !(0, j.ki)(L),
        S = l.useCallback(() => {
            (P("balance_popover_next_drop"),
                r(),
                null != c && c(),
                (0, h.pX)(W.BV.NITRO_HOME, { search: (0, d.As)({ perk: g.NITRO_ORBS_REWARDS_CARD_ID }) }));
        }, [r, c]),
        y = l.useCallback(() => {
            (P("balance_popover_upsell"),
                r(),
                null != c && c(),
                (0, h.pX)(W.BV.NITRO_HOME, { search: (0, d.As)({ section: "orbs" }) }));
        }, [r, c]),
        q = l.useMemo(() => {
            let e = (0, j.YE)(L, V.PremiumTypes.TIER_2);
            if (!T || B) return null;
            if (e && null != w) {
                let e = (0, o.default)(new Date(w.next_reward_date), new Date());
                switch (D) {
                    case O.m.DEFAULT:
                        return (0, s.jsxs)(s.Fragment, {
                            children: [
                                (0, s.jsx)(E.E, {
                                    variant: "body-xs/normal",
                                    color: "text-default",
                                    children: K.intl.format(F.default["AvL/At"], {
                                        days: Math.max(1, e),
                                        deepLinkToNitroOrbs: S,
                                    }),
                                }),
                                (0, s.jsx)(U, {}),
                            ],
                        });
                    case O.m.DEPRECATED:
                        if ((0, k.Au)(w.next_reward_date)) break;
                        return (0, s.jsxs)(s.Fragment, {
                            children: [
                                (0, s.jsx)("div", {
                                    className: z.iY,
                                    children: (0, s.jsx)(N.B$, {
                                        text: K.intl.format(X.default.bkU5si, {
                                            orbAmount: w.reward_amount,
                                            days: Math.max(1, e),
                                        }),
                                    }),
                                }),
                                (0, s.jsx)(U, {}),
                            ],
                        });
                    case O.m.DEPRECATED_XBOX:
                    case O.m.REMOVED:
                    case O.m.REMOVED_XBOX:
                        break;
                    default:
                        return (0, b.xb)(D);
                }
            }
            return null;
        }, [L, B, w, T, S, D]),
        G = (M ?? 0) >= 4100;
    return (0, s.jsx)(_.x, {
        targetElementRef: a,
        shouldShow: t,
        onRequestClose: r,
        position: "bottom",
        gradientColor: "blue",
        modal: !0,
        closeOnClickOutside: !0,
        children: (0, s.jsx)(A.N, {
            theme: G ? I.NJ8.DARK : void 0,
            children: (e) =>
                (0, s.jsxs)("div", {
                    className: n()(e, z.j),
                    children: [
                        G &&
                            (0, s.jsx)(R.A, {
                                src: "https://cdn.discordapp.com/assets/content/62447672d679c7ceb5756dc07350a3145081a671a026fe96876d8742b73f3a82.mp4",
                                className: z.yG,
                            }),
                        (0, s.jsxs)("div", {
                            className: z.Qs,
                            children: [
                                (0, s.jsx)(m.q, { onClick: r }),
                                (0, s.jsxs)("div", {
                                    className: z.hQ,
                                    children: [
                                        (0, s.jsx)(H, {}),
                                        (0, s.jsxs)("div", {
                                            className: z.y$,
                                            children: [
                                                (M ?? 0) > 0 &&
                                                    (0, s.jsxs)("div", {
                                                        className: z.E2,
                                                        children: [
                                                            (0, s.jsx)(E.E, {
                                                                variant: "display-lg",
                                                                className: z.K,
                                                                children: M ?? 0,
                                                            }),
                                                            (0, s.jsx)(E.E, {
                                                                variant: "body-xs/normal",
                                                                color: "text-muted",
                                                                children: K.intl.string(F.default.KclK9z),
                                                            }),
                                                        ],
                                                    }),
                                                q,
                                            ],
                                        }),
                                        (0, s.jsx)(x.$, {
                                            text: i,
                                            variant: "primary",
                                            size: "sm",
                                            onClick: v,
                                            fullWidth: !0,
                                        }),
                                        (0, s.jsx)(E.E, {
                                            variant: "body-xs/normal",
                                            color: B ? "text-default" : "text-muted",
                                            className: z.CU,
                                            children: B
                                                ? K.intl.format(F.default.juvXqj, { deepLinkToNitroOrbs: y })
                                                : K.intl.format(F.default.fhAVek, { helpdeskArticle: Y }),
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
var Q = t(318346),
    $ = t(362862),
    Z = t(923138),
    ee = t(305003),
    ea = t(219980),
    et = t(489422),
    es = t(226346);
let el = { START: es.Vl, END: es.Wk };
function er(e) {
    let {
            showNotificationBadge: a,
            ctaText: t,
            ctaOnClick: r,
            onNavigate: o,
            analyticsPage: d,
            className: u,
            pillVariant: _,
            themeOverride: m,
        } = e,
        { balance: E } = (0, p.W)(),
        [A, x] = l.useState(ee.k.DEFAULT),
        [R, f] = l.useState(!1),
        [h, N] = l.useState(!1),
        C = l.useRef(null),
        b = l.useRef(null),
        v = (0, $.Hy)({ location: "BalanceWidgetMenu" }),
        j = l.useCallback(() => {
            let e = !R;
            (e &&
                null != d &&
                (0, Q.Y)({
                    pageType: d,
                    sectionType: v ? i.A.ORB_WALLET : I.JJy.ORBS_BALANCE_MENU,
                    ctaObject: v ? i.A.ORB_WALLET_OPEN_FROM_BALANCE_PILL : I.ZSU.OPEN_ORB_BALANCE_MENU_FROM_PILL,
                }),
                x(e ? ee.k.SELECTED : ee.k.DEFAULT),
                f(e));
        }, [R, d, v]),
        k = l.useCallback(() => {
            R && j();
        }, [R, j]),
        O = (0, c.A)(null, k),
        { hasUnreadUpdate: g } = (0, Z.I)({ enabled: v }),
        T = a ?? g,
        w = l.useMemo(
            () =>
                (0, s.jsx)(ea.J, {
                    pillRef: C,
                    clickableRef: b,
                    ariaExpanded: R,
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
            [E, A, _, m, T, j, R],
        ),
        D = l.useCallback(
            (e) =>
                v
                    ? e
                        ? (0, s.jsx)(et.EA, {
                              cardRef: O,
                              returnRef: b,
                              targetElementRef: C,
                              shouldShow: e,
                              analyticsPage: d,
                              onCloseWallet: (e) => {
                                  (j(), "navigation" === e && null != o && o());
                              },
                          })
                        : null
                    : (0, s.jsx)(J, {
                          targetElementRef: C,
                          shouldShow: e,
                          onRequestClose: j,
                          ctaText: t,
                          onNavigate: o,
                          ctaOnClick: () => {
                              (j(), r());
                          },
                      }),
            [v, O, C, j, t, r, d, o],
        );
    return (0, s.jsxs)("div", { className: n()(es.kL, u, { [es.R]: h, [es.RK]: !h }), children: [w, D(R)] });
}
er.CardAlignment = el;
