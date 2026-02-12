"use strict";
n.d(t, { A: () => U });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(892227),
    l = n(311907),
    u = n(732955),
    c = n(462887),
    d = n(397927),
    _ = n(241524),
    f = n(736653),
    h = n(607470),
    p = n(895944),
    g = n(649032),
    E = n(976860),
    A = n(780964),
    I = n(840065),
    T = n(975571),
    y = n(872725),
    S = n(566119),
    v = n(94264),
    C = n(652215),
    b = n(758836),
    N = n(901123),
    R = n(49370),
    O = n(985018),
    D = n(970466),
    L = n(909340),
    w = n(455482);
let x = T.A.getArticleURL(C.MVz.ORBS_REWARDS_FAQ),
    P = 720;
function M(e) {
    (0, S.o8)(e), window.open(x, "_blank");
}
function k(e, t) {
    let n = e.program_current_state,
        i =
            null != e.next_reward_date && "" !== e.next_reward_date
                ? (0, o.default)(new Date(e.next_reward_date), new Date())
                : null,
        a = e?.total_rewarded_from_program;
    switch (n) {
        case g.L.ACTIVE:
            if (null == i || i < 0) return null;
            return {
                displayTotalLifetimeRewards: null != a,
                displayProgressBar: !0,
                actionButton: (0, r.jsx)(u.$nd, {
                    text: O.intl.string(R.default.BxjHiu),
                    variant: t ? "overlay-primary" : "secondary",
                    onClick: () => {
                        (0, S.WD)(n), (0, E.pX)(N.BV.COLLECTIBLES_SHOP_WITH_TAB(b.G2.ORBS));
                    },
                }),
                headerText: O.intl.format(R.default.BxLJQL, { days: Math.max(1, i), orbsCount: e.reward_amount }),
                subheaderText: O.intl.format(R.default.tUV1vV, { helpdeskArticle: () => M(n) }),
            };
        case g.L.PAYMENT_PROCESSING:
            return {
                displayTotalLifetimeRewards: !1,
                displayProgressBar: !1,
                actionButton: (0, r.jsx)(u.$nd, {
                    text: O.intl.string(R.default.KVCfnE),
                    variant: t ? "overlay-primary" : "secondary",
                    onClick: () => {
                        (0, S.CC)(n), (0, I.openUserSettings)(A.X.BILLING_PANEL, { section: C.nc_.BILLING });
                    },
                }),
                headerText: O.intl.string(R.default.uuZJXR),
                subheaderText: O.intl.format(R.default.dkeEV7, { helpdeskArticle: () => M(n) }),
            };
        case g.L.PAYMENT_ERROR:
            return {
                displayTotalLifetimeRewards: null != a,
                displayProgressBar: !1,
                actionButton: (0, r.jsx)(u.NPJ, {
                    theme: t ? C.NJ8.DARKER : void 0,
                    children: (e) =>
                        (0, r.jsx)("span", {
                            className: e,
                            children: (0, r.jsx)(u.$nd, {
                                text: O.intl.string(R.default.KVCfnE),
                                variant: "critical-secondary",
                                onClick: () => {
                                    (0, S.ue)(n),
                                        (0, I.openUserSettings)(A.X.BILLING_PANEL, { section: C.nc_.BILLING });
                                },
                            }),
                        }),
                }),
                headerText: O.intl.string(R.default["+O9Asn"]),
                subheaderText: O.intl.format(R.default.nWKEBZ, { helpdeskArticle: () => M(n) }),
            };
        case g.L.PROGRAM_ROLLBACK:
            return {
                displayTotalLifetimeRewards: null != a,
                displayProgressBar: null != i,
                actionButton: (0, r.jsx)(u.$nd, {
                    text: O.intl.string(R.default["wLAd/+"]),
                    variant: t ? "overlay-primary" : "secondary",
                    onClick: () => {
                        (0, S.WD)(n), (0, E.pX)(N.BV.COLLECTIBLES_SHOP_WITH_TAB(b.G2.ORBS));
                    },
                }),
                headerText: O.intl.string(R.default.zF0HnJ),
                subheaderText: O.intl.format(R.default["5tzNTa"], { helpdeskArticle: () => M(n) }),
            };
        case g.L.PREMIUM_CHURNING:
            return {
                displayTotalLifetimeRewards: null != a,
                displayProgressBar: null != i,
                actionButton: (0, r.jsx)(u.$nd, {
                    text: O.intl.string(R.default.FToh6D),
                    variant: t ? "overlay-primary" : "secondary",
                    icon: u.tvc,
                    onClick: () => {
                        (0, S.Jv)(n), (0, I.openUserSettings)(A.X.BILLING_PANEL, { section: C.nc_.BILLING });
                    },
                }),
                headerText: O.intl.string(R.default.ISnOet),
                subheaderText: O.intl.format(R.default["vjaRZ/"], { helpdeskArticle: () => M(n) }),
            };
        default:
            return null;
    }
}
let U = (e) => {
    let { className: t } = e,
        { passesGeneralUIInvariant: n, programReward: a } = (0, l.cf)([p.A], () => ({
            passesGeneralUIInvariant: p.A.passesGeneralUIInvariant(g.W.NITRO),
            programReward: p.A.getRewardForProgram(g.W.NITRO),
        })),
        o = (0, _.A)(`(min-width: ${P}px)`),
        E = (0, f.DP)(),
        A = i.useMemo(() => ({ hueRotate: 25, glowAmount: (0, c.M)(E) ? 2 : 8, blurAmount: 20 }), [E]);
    if (!n || null == a) return null;
    let I = k(a, o);
    if (null == I) return null;
    let { displayTotalLifetimeRewards: T, displayProgressBar: S, actionButton: b, headerText: N, subheaderText: x } = I;
    return (0, r.jsx)("div", {
        className: s()(D.Hc, t),
        children: (0, r.jsxs)(y.A, {
            cardType: d.sl2.CUSTOM,
            cardClassName: D.Nr,
            ...A,
            children: [
                (0, r.jsx)(h.A, { muted: !0, autoPlay: !0, playsInline: !0, loop: !0, className: D.Ki, src: L.A }),
                (0, r.jsxs)("div", {
                    className: D.zK,
                    children: [
                        (0, r.jsx)("img", { src: w.A, className: D._e, alt: "", "aria-hidden": !0 }),
                        (0, r.jsx)("div", { className: D.mR }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: D.FS,
                    children: [
                        (0, r.jsx)(u.NPJ, {
                            theme: o ? C.NJ8.DARKER : void 0,
                            children: (e) =>
                                (0, r.jsx)("div", {
                                    className: s()(e, D.aZ),
                                    children: (0, r.jsx)(u.Exy, { type: "beta", variant: "expressive" }),
                                }),
                        }),
                        (0, r.jsx)(u.DZT, { variant: "heading-xl/bold", className: D.R_, children: N }),
                        (0, r.jsx)(u.EYj, { variant: "text-md/medium", className: D.G3, children: x }),
                        S && (0, r.jsx)(v.A, { className: D.L$ }),
                        T &&
                            a.total_rewarded_from_program > 0 &&
                            (0, r.jsxs)("div", {
                                className: D.fB,
                                children: [
                                    (0, r.jsx)(u.EYj, {
                                        variant: "text-md/medium",
                                        className: D.G3,
                                        children: O.intl.string(R.default["/1mWUn"]),
                                    }),
                                    (0, r.jsx)(u.Cp8, { size: "sm", color: "currentColor" }),
                                    (0, r.jsx)(u.EYj, {
                                        variant: "text-md/medium",
                                        className: D.G3,
                                        children: a.total_rewarded_from_program,
                                    }),
                                ],
                            }),
                        (0, r.jsx)("div", { className: D.WT, children: (0, r.jsx)(u.e2v, { children: b }) }),
                    ],
                }),
            ],
        }),
    });
};
