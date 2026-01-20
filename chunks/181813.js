n.d(t, { Z: () => x });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(995638),
    s = n(442837),
    l = n(692547),
    c = n(159691),
    u = n(481060),
    d = n(131388),
    f = n(70097),
    p = n(468208),
    _ = n(165299),
    h = n(703656),
    m = n(313789),
    g = n(518596),
    E = n(63063),
    b = n(375527),
    y = n(631452),
    O = n(713422),
    v = n(981631),
    S = n(215023),
    I = n(416145),
    T = n(618435),
    C = n(388032),
    A = n(608262),
    N = n(900303),
    P = n(989448);
let w = E.Z.getArticleURL(v.BhN.ORBS_REWARDS_FAQ),
    R = 720;
function D(e, t, n) {
    let i = e.program_current_state,
        a =
            null != e.next_reward_date && "" !== e.next_reward_date
                ? (0, o.default)(new Date(e.next_reward_date), new Date())
                : null,
        s = null == e ? void 0 : e.total_rewarded_from_program;
    switch (i) {
        case _.g.ACTIVE:
            if (null == a || a < 0) return null;
            return {
                displayTotalLifetimeRewards: null != s,
                displayProgressBar: !0,
                actionButton: (0, r.jsx)(c.zxk, {
                    text: C.intl.string(T.default.BxjHiu),
                    variant: t ? "overlay-primary" : "secondary",
                    onClick: () => (0, h.uL)(I.Z5.COLLECTIBLES_SHOP_WITH_TAB(S.AW.ORBS)),
                }),
                headerText: C.intl.format(T.default.cfE8Oh, { days: Math.max(1, a) }),
                subheaderText: C.intl.format(T.default.JCLEQp, {
                    orbsCount: n,
                    helpdeskArticle: w,
                }),
            };
        case _.g.PAYMENT_PROCESSING:
            return {
                displayTotalLifetimeRewards: !1,
                displayProgressBar: !1,
                actionButton: (0, r.jsx)(c.zxk, {
                    text: C.intl.string(T.default.KVCfnE),
                    variant: t ? "overlay-primary" : "secondary",
                    onClick: () => (0, g.openUserSettings)(m.n.BILLING_PANEL, { section: v.oAB.BILLING }),
                }),
                headerText: C.intl.string(T.default.uuZJXR),
                subheaderText: C.intl.format(T.default.dkeEV7, { helpdeskArticle: w }),
            };
        case _.g.PAYMENT_ERROR:
            return {
                displayTotalLifetimeRewards: null != s,
                displayProgressBar: !1,
                actionButton: (0, r.jsx)(c.zxk, {
                    text: C.intl.string(T.default.KVCfnE),
                    variant: "critical-secondary",
                    onClick: () => (0, g.openUserSettings)(m.n.BILLING_PANEL, { section: v.oAB.BILLING }),
                }),
                headerText: C.intl.string(T.default["+O9Asn"]),
                subheaderText: C.intl.format(T.default.nWKEBZ, { helpdeskArticle: w }),
            };
        case _.g.PROGRAM_ROLLBACK:
            return {
                displayTotalLifetimeRewards: null != s,
                displayProgressBar: null != a,
                actionButton: (0, r.jsx)(c.zxk, {
                    text: C.intl.string(T.default["wLAd/+"]),
                    variant: t ? "overlay-primary" : "secondary",
                    onClick: () => (0, h.uL)(I.Z5.COLLECTIBLES_SHOP_WITH_TAB(S.AW.ORBS)),
                }),
                headerText: C.intl.string(T.default.zF0HnJ),
                subheaderText: C.intl.format(T.default["5tzNTa"], { helpdeskArticle: w }),
            };
        case _.g.PREMIUM_CHURNING:
            return {
                displayTotalLifetimeRewards: null != s,
                displayProgressBar: null != a,
                actionButton: (0, r.jsx)(c.zxk, {
                    text: C.intl.string(T.default.FToh6D),
                    variant: t ? "overlay-primary" : "secondary",
                    icon: c.SrA,
                    onClick: () => (0, g.openUserSettings)(m.n.BILLING_PANEL, { section: v.oAB.BILLING }),
                }),
                headerText: C.intl.string(T.default.ISnOet),
                subheaderText: C.intl.format(T.default.agletO, {
                    orbsCount: n,
                    helpdeskArticle: w,
                }),
            };
        default:
            return null;
    }
}
let x = (e) => {
    let { className: t } = e,
        { passesGeneralUIInvariant: n, programReward: i } = (0, s.cj)([p.Z], () => ({
            passesGeneralUIInvariant: p.Z.passesGeneralUIInvariant(_.f.NITRO),
            programReward: p.Z.getRewardForProgram(_.f.NITRO),
        })),
        o = (0, d.Z)("(min-width: ".concat(R, "px)")),
        { orbsRewardAmount: h } = (0, b.er)("PremiumTenureRewardsOrbsCard");
    if (!n || null == i) return null;
    let m = D(i, o, h);
    if (null == m) return null;
    let { displayTotalLifetimeRewards: g, displayProgressBar: E, actionButton: v, headerText: S, subheaderText: I } = m;
    return (0, r.jsxs)("div", {
        className: a()(A.baseContainer, t),
        children: [
            (0, r.jsx)("div", {
                className: A.betaBadge,
                children: (0, r.jsx)(c.Cts, {
                    type: "beta",
                    variant: "expressive",
                }),
            }),
            (0, r.jsxs)(y.Z, {
                cardType: u.sje.CUSTOM,
                cardClassName: A.card,
                children: [
                    (0, r.jsx)(f.Z, {
                        muted: !0,
                        autoPlay: !0,
                        playsInline: !0,
                        loop: !0,
                        className: A.video,
                        src: N.Z,
                    }),
                    (0, r.jsxs)("div", {
                        className: A.bannerImageContainer,
                        children: [
                            (0, r.jsx)("img", {
                                src: P.Z,
                                className: A.bannerImage,
                                alt: "",
                                "aria-hidden": !0,
                            }),
                            (0, r.jsx)("div", { className: A.stackedGradientOverlay }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: A.textContainer,
                        children: [
                            (0, r.jsx)(c.X6q, {
                                variant: "heading-xxl/bold",
                                className: A.heading,
                                children: S,
                            }),
                            (0, r.jsx)(c.xvT, {
                                variant: "text-md/medium",
                                className: A.bodyText,
                                children: I,
                            }),
                            E && (0, r.jsx)(O.Z, { className: A.progressContainer }),
                            g &&
                                (0, r.jsxs)("div", {
                                    className: A.totalLifetimeRewardsContainer,
                                    children: [
                                        (0, r.jsx)(c.xvT, {
                                            variant: "text-md/medium",
                                            className: A.bodyText,
                                            children: C.intl.string(T.default["/1mWUn"]),
                                        }),
                                        (0, r.jsx)(c.aQr, {
                                            size: "sm",
                                            color: l.Z.colors.TEXT_DEFAULT.css,
                                        }),
                                        (0, r.jsx)(c.xvT, {
                                            variant: "text-md/medium",
                                            className: A.bodyText,
                                            children: i.total_rewarded_from_program,
                                        }),
                                    ],
                                }),
                            (0, r.jsx)("div", {
                                className: A.actionButtonContainer,
                                children: (0, r.jsx)(c.hE2, { children: v }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
