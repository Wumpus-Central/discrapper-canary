n.d(t, { A: () => w });
var r = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    i = n(892227),
    d = n(732955),
    o = n(462887),
    c = n(397927),
    u = n(241524),
    m = n(736653),
    h = n(303136),
    x = n(649032),
    C = n(320118),
    p = n(976860),
    _ = n(780964),
    g = n(858897),
    f = n(975571),
    b = n(872725),
    R = n(566119),
    j = n(94264),
    v = n(652215),
    A = n(758836),
    E = n(901123),
    N = n(188875),
    P = n(985018),
    D = n(327557),
    y = n(909340),
    I = n(455482);
let T = f.A.getArticleURL(v.MVz.ORBS_REWARDS_FAQ);
function S(e) {
    (0, R.o8)(e), window.open(T, "_blank");
}
let w = (e) => {
    let { className: t } = e,
        { passesGeneralUIInvariant: n, programReward: s } = (0, C.F)({ location: "PremiumTenureRewardsOrbsCard" }),
        f = (0, u.A)("(min-width: 720px)"),
        T = (0, m.DP)(),
        w = l.useMemo(() => ({ hueRotate: 25, glowAmount: (0, o.M)(T) ? 2 : 8, blurAmount: 10 }), [T]);
    if (!n || null == s) return null;
    let O = (function (e, t) {
        let n = e.program_current_state,
            l =
                null != e.next_reward_date && "" !== e.next_reward_date
                    ? (0, i.default)(new Date(e.next_reward_date), new Date())
                    : null,
            s = e?.total_rewarded_from_program;
        switch (n) {
            case x.L.ACTIVE:
                if (null == l || l < 0) return null;
                return {
                    displayTotalLifetimeRewards: null != s,
                    displayProgressBar: !0,
                    actionButton: (0, r.jsx)(d.$nd, {
                        text: P.intl.string(N.default.BxjHiu),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, R.WD)(n), (0, p.pX)(E.BV.COLLECTIBLES_SHOP_WITH_TAB(A.G2.ORBS));
                        },
                    }),
                    headerText: P.intl.format(N.default.BxLJQL, { days: Math.max(1, l), orbsCount: e.reward_amount }),
                    subheaderText: P.intl.format(N.default.tUV1vV, { helpdeskArticle: () => S(n) }),
                };
            case x.L.PAYMENT_PROCESSING:
                return {
                    displayTotalLifetimeRewards: !1,
                    displayProgressBar: !1,
                    actionButton: (0, r.jsx)(d.$nd, {
                        text: P.intl.string(N.default.KVCfnE),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, R.CC)(n), (0, g.openUserSettings)(_.X.BILLING_PANEL);
                        },
                    }),
                    headerText: P.intl.string(N.default.uuZJXR),
                    subheaderText: P.intl.format(N.default.dkeEV7, { helpdeskArticle: () => S(n) }),
                };
            case x.L.PAYMENT_ERROR:
                return {
                    displayTotalLifetimeRewards: null != s,
                    displayProgressBar: !1,
                    actionButton: (0, r.jsx)(d.NPJ, {
                        theme: t ? v.NJ8.DARKER : void 0,
                        children: (e) =>
                            (0, r.jsx)("span", {
                                className: e,
                                children: (0, r.jsx)(d.$nd, {
                                    text: P.intl.string(N.default.KVCfnE),
                                    variant: "critical-secondary",
                                    onClick: () => {
                                        (0, R.ue)(n), (0, g.openUserSettings)(_.X.BILLING_PANEL);
                                    },
                                }),
                            }),
                    }),
                    headerText: P.intl.string(N.default["+O9Asn"]),
                    subheaderText: P.intl.format(N.default.nWKEBZ, { helpdeskArticle: () => S(n) }),
                };
            case x.L.PROGRAM_ROLLBACK:
                return {
                    displayTotalLifetimeRewards: null != s,
                    displayProgressBar: null != l,
                    actionButton: (0, r.jsx)(d.$nd, {
                        text: P.intl.string(N.default["wLAd/+"]),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, R.WD)(n), (0, p.pX)(E.BV.COLLECTIBLES_SHOP_WITH_TAB(A.G2.ORBS));
                        },
                    }),
                    headerText: P.intl.string(N.default.zF0HnJ),
                    subheaderText: P.intl.format(N.default["5tzNTa"], { helpdeskArticle: () => S(n) }),
                };
            case x.L.PREMIUM_CHURNING:
                return {
                    displayTotalLifetimeRewards: null != s,
                    displayProgressBar: null != l,
                    actionButton: (0, r.jsx)(d.$nd, {
                        text: P.intl.string(N.default.FToh6D),
                        variant: t ? "overlay-primary" : "secondary",
                        icon: d.tvc,
                        onClick: () => {
                            (0, R.Jv)(n), (0, g.openUserSettings)(_.X.SUBSCRIPTIONS_PANEL);
                        },
                    }),
                    headerText: P.intl.string(N.default.ISnOet),
                    subheaderText: P.intl.format(N.default["vjaRZ/"], { helpdeskArticle: () => S(n) }),
                };
            default:
                return null;
        }
    })(s, f);
    if (null == O) return null;
    let { displayTotalLifetimeRewards: M, displayProgressBar: L, actionButton: U, headerText: k, subheaderText: B } = O;
    return (0, r.jsx)("div", {
        className: a()(D.Hc, t),
        children: (0, r.jsxs)(b.A, {
            cardType: c.sl2.CUSTOM,
            cardClassName: D.Nr,
            glowing: !0,
            ...w,
            children: [
                (0, r.jsx)(h.A, { className: D.Ki, src: y.A }),
                (0, r.jsxs)("div", {
                    className: D.zK,
                    children: [
                        (0, r.jsx)("img", { src: I.A, className: D._e, alt: "", "aria-hidden": !0 }),
                        (0, r.jsx)("div", { className: D.mR }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: D.FS,
                    children: [
                        (0, r.jsx)(d.NPJ, {
                            theme: f ? v.NJ8.DARKER : void 0,
                            children: (e) =>
                                (0, r.jsx)("div", {
                                    className: a()(e, D.aZ),
                                    children: (0, r.jsx)(d.Exy, { type: "beta", variant: "expressive" }),
                                }),
                        }),
                        (0, r.jsx)(d.DZT, { variant: "heading-xl/bold", className: D.R_, children: k }),
                        (0, r.jsx)(d.EYj, { variant: "text-md/medium", className: D.G3, children: B }),
                        L && (0, r.jsx)(j.A, { className: D.L$ }),
                        M &&
                            s.total_rewarded_from_program > 0 &&
                            (0, r.jsxs)("div", {
                                className: D.fB,
                                children: [
                                    (0, r.jsx)(d.EYj, {
                                        variant: "text-md/medium",
                                        className: D.G3,
                                        children: P.intl.string(N.default["/1mWUn"]),
                                    }),
                                    (0, r.jsx)(d.Cp8, { size: "sm", color: "currentColor" }),
                                    (0, r.jsx)(d.EYj, {
                                        variant: "text-md/medium",
                                        className: D.G3,
                                        children: s.total_rewarded_from_program,
                                    }),
                                ],
                            }),
                        (0, r.jsx)("div", { className: D.WT, children: (0, r.jsx)(d.e2v, { children: U }) }),
                    ],
                }),
            ],
        }),
    });
};
