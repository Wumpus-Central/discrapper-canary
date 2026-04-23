s.d(t, { A: () => F });
var n = s(627968),
    a = s(64700),
    r = s(503698),
    l = s.n(r),
    i = s(892227),
    d = s(821609),
    o = s(43990),
    c = s(403581),
    u = s(508770),
    m = s(534514),
    h = s(834730),
    x = s(318254),
    C = s(825484),
    _ = s(462887),
    p = s(359778),
    g = s(241524),
    f = s(736653),
    b = s(303136),
    R = s(649032),
    v = s(320118),
    j = s(976860),
    E = s(780964),
    A = s(858897),
    N = s(975571),
    P = s(872725),
    I = s(566119),
    y = s(94264),
    D = s(652215),
    S = s(758836),
    w = s(901123),
    O = s(490285),
    T = s(985018),
    M = s(787413),
    L = s(909340),
    U = s(455482);
let k = N.A.getArticleURL(D.MVz.ORBS_REWARDS_FAQ);
function B(e) {
    (0, I.o8)(e), window.open(k, "_blank");
}
let F = (e) => {
    let { className: t } = e,
        { passesGeneralUIInvariant: s, programReward: r } = (0, v.F)({ location: "PremiumTenureRewardsOrbsCard" }),
        N = (0, g.A)("(min-width: 720px)"),
        k = (0, f.DP)(),
        F = a.useMemo(() => ({ hueRotate: 25, glowAmount: (0, _.M)(k) ? 2 : 8, blurAmount: 10 }), [k]);
    if (!s || null == r) return null;
    let G = (function (e, t) {
        let s = e.program_current_state,
            a =
                null != e.next_reward_date && "" !== e.next_reward_date
                    ? (0, i.default)(new Date(e.next_reward_date), new Date())
                    : null,
            r = e?.total_rewarded_from_program;
        switch (s) {
            case R.L.ACTIVE:
                if (null == a || a < 0) return null;
                return {
                    displayTotalLifetimeRewards: null != r,
                    displayProgressBar: !0,
                    actionButton: (0, n.jsx)(d.$, {
                        text: T.intl.string(O.default.BxjHiu),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, I.WD)(s), (0, j.pX)(w.BV.COLLECTIBLES_SHOP_WITH_TAB(S.G2.ORBS));
                        },
                    }),
                    headerText: T.intl.format(O.default.BxLJQL, { days: Math.max(1, a), orbsCount: e.reward_amount }),
                    subheaderText: T.intl.format(O.default.tUV1vV, { helpdeskArticle: () => B(s) }),
                };
            case R.L.PAYMENT_PROCESSING:
                return {
                    displayTotalLifetimeRewards: !1,
                    displayProgressBar: !1,
                    actionButton: (0, n.jsx)(d.$, {
                        text: T.intl.string(O.default.KVCfnE),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, I.CC)(s), (0, A.openUserSettings)(E.X.BILLING_PANEL);
                        },
                    }),
                    headerText: T.intl.string(O.default.uuZJXR),
                    subheaderText: T.intl.format(O.default.dkeEV7, { helpdeskArticle: () => B(s) }),
                };
            case R.L.PAYMENT_ERROR:
                return {
                    displayTotalLifetimeRewards: null != r,
                    displayProgressBar: !1,
                    actionButton: (0, n.jsx)(o.N, {
                        theme: t ? D.NJ8.DARKER : void 0,
                        children: (e) =>
                            (0, n.jsx)("span", {
                                className: e,
                                children: (0, n.jsx)(d.$, {
                                    text: T.intl.string(O.default.KVCfnE),
                                    variant: "critical-secondary",
                                    onClick: () => {
                                        (0, I.ue)(s), (0, A.openUserSettings)(E.X.BILLING_PANEL);
                                    },
                                }),
                            }),
                    }),
                    headerText: T.intl.string(O.default["+O9Asn"]),
                    subheaderText: T.intl.format(O.default.nWKEBZ, { helpdeskArticle: () => B(s) }),
                };
            case R.L.PROGRAM_ROLLBACK:
                return {
                    displayTotalLifetimeRewards: null != r,
                    displayProgressBar: null != a,
                    actionButton: (0, n.jsx)(d.$, {
                        text: T.intl.string(O.default["wLAd/+"]),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, I.WD)(s), (0, j.pX)(w.BV.COLLECTIBLES_SHOP_WITH_TAB(S.G2.ORBS));
                        },
                    }),
                    headerText: T.intl.string(O.default.zF0HnJ),
                    subheaderText: T.intl.format(O.default["5tzNTa"], { helpdeskArticle: () => B(s) }),
                };
            case R.L.PREMIUM_CHURNING:
                return {
                    displayTotalLifetimeRewards: null != r,
                    displayProgressBar: null != a,
                    actionButton: (0, n.jsx)(d.$, {
                        text: T.intl.string(O.default.FToh6D),
                        variant: t ? "overlay-primary" : "secondary",
                        icon: c.t,
                        onClick: () => {
                            (0, I.Jv)(s), (0, A.openUserSettings)(E.X.SUBSCRIPTIONS_PANEL);
                        },
                    }),
                    headerText: T.intl.string(O.default.ISnOet),
                    subheaderText: T.intl.format(O.default["vjaRZ/"], { helpdeskArticle: () => B(s) }),
                };
            default:
                return null;
        }
    })(r, N);
    if (null == G) return null;
    let { displayTotalLifetimeRewards: W, displayProgressBar: H, actionButton: V, headerText: K, subheaderText: Z } = G;
    return (0, n.jsx)("div", {
        className: l()(M.Hc, t),
        children: (0, n.jsxs)(P.A, {
            cardType: p.s.CUSTOM,
            cardClassName: M.Nr,
            glowing: !0,
            ...F,
            children: [
                (0, n.jsx)(b.A, { className: M.Ki, src: L.A }),
                (0, n.jsxs)("div", {
                    className: M.zK,
                    children: [
                        (0, n.jsx)("img", { src: U.A, className: M._e, alt: "", "aria-hidden": !0 }),
                        (0, n.jsx)("div", { className: M.mR }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: M.FS,
                    children: [
                        (0, n.jsx)(o.N, {
                            theme: N ? D.NJ8.DARKER : void 0,
                            children: (e) =>
                                (0, n.jsx)("div", {
                                    className: l()(e, M.aZ),
                                    children: (0, n.jsx)(u.E, { type: "beta", variant: "expressive" }),
                                }),
                        }),
                        (0, n.jsx)(m.D, { variant: "heading-xl/bold", className: M.R_, children: K }),
                        (0, n.jsx)(h.E, { variant: "text-md/medium", className: M.G3, children: Z }),
                        H && (0, n.jsx)(y.A, { className: M.L$ }),
                        W &&
                            r.total_rewarded_from_program > 0 &&
                            (0, n.jsxs)("div", {
                                className: M.fB,
                                children: [
                                    (0, n.jsx)(h.E, {
                                        variant: "text-md/medium",
                                        className: M.G3,
                                        children: T.intl.string(O.default["/1mWUn"]),
                                    }),
                                    (0, n.jsx)(x.C, { size: "sm", color: "currentColor" }),
                                    (0, n.jsx)(h.E, {
                                        variant: "text-md/medium",
                                        className: M.G3,
                                        children: r.total_rewarded_from_program,
                                    }),
                                ],
                            }),
                        (0, n.jsx)("div", { className: M.WT, children: (0, n.jsx)(C.e, { children: V }) }),
                    ],
                }),
            ],
        }),
    });
};
