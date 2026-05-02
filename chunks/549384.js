"use strict";
n.d(t, { L: () => W, A: () => K });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(269115),
    l = n(534514),
    u = n(834730),
    c = n(688810),
    d = n(366505),
    _ = n(174459),
    f = n(892227),
    h = n(821609),
    p = n(43990),
    E = n(403581),
    m = n(508770),
    g = n(318254),
    A = n(825484),
    I = n(462887),
    T = n(359778),
    S = n(241524),
    N = n(736653),
    y = n(303136),
    C = n(636592),
    v = n(976860),
    O = n(780964),
    R = n(858897),
    b = n(975571),
    D = n(872725),
    L = n(566119),
    w = n(94264),
    M = n(652215),
    P = n(758836),
    x = n(901123),
    U = n(490285),
    k = n(375708),
    G = n(787413),
    F = n(909340),
    V = n(455482);
let B = b.A.getArticleURL(M.MVz.ORBS_REWARDS_FAQ);
function H(e) {
    (0, L.o8)(e), window.open(B, "_blank");
}
let j = (e) => {
    let { className: t } = e,
        { passesGeneralUIInvariant: n, programReward: s } = (0, d.F)({ location: "PremiumTenureRewardsOrbsCard" }),
        o = (0, S.A)("(min-width: 720px)"),
        c = (0, N.DP)(),
        _ = r.useMemo(() => ({ hueRotate: 25, glowAmount: (0, I.M)(c) ? 2 : 8, blurAmount: 10 }), [c]);
    if (!n || null == s) return null;
    let b = (function (e, t) {
        let n = e.program_current_state,
            r =
                null != e.next_reward_date && "" !== e.next_reward_date
                    ? (0, f.default)(new Date(e.next_reward_date), new Date())
                    : null,
            s = e?.total_rewarded_from_program;
        switch (n) {
            case C.L.ACTIVE:
                if (null == r || r < 0) return null;
                return {
                    displayTotalLifetimeRewards: null != s,
                    displayProgressBar: !0,
                    actionButton: (0, i.jsx)(h.$, {
                        text: k.intl.string(U.default.BxjHiu),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, L.WD)(n), (0, v.pX)(x.BV.COLLECTIBLES_SHOP_WITH_TAB(P.G2.ORBS));
                        },
                    }),
                    headerText: k.intl.format(U.default.BxLJQL, { days: Math.max(1, r), orbsCount: e.reward_amount }),
                    subheaderText: k.intl.format(U.default.tUV1vV, { helpdeskArticle: () => H(n) }),
                };
            case C.L.PAYMENT_PROCESSING:
                return {
                    displayTotalLifetimeRewards: !1,
                    displayProgressBar: !1,
                    actionButton: (0, i.jsx)(h.$, {
                        text: k.intl.string(U.default.KVCfnE),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, L.CC)(n), (0, R.openUserSettings)(O.X.BILLING_PANEL);
                        },
                    }),
                    headerText: k.intl.string(U.default.uuZJXR),
                    subheaderText: k.intl.format(U.default.dkeEV7, { helpdeskArticle: () => H(n) }),
                };
            case C.L.PAYMENT_ERROR:
                return {
                    displayTotalLifetimeRewards: null != s,
                    displayProgressBar: !1,
                    actionButton: (0, i.jsx)(p.N, {
                        theme: t ? M.NJ8.DARKER : void 0,
                        children: (e) =>
                            (0, i.jsx)("span", {
                                className: e,
                                children: (0, i.jsx)(h.$, {
                                    text: k.intl.string(U.default.KVCfnE),
                                    variant: "critical-secondary",
                                    onClick: () => {
                                        (0, L.ue)(n), (0, R.openUserSettings)(O.X.BILLING_PANEL);
                                    },
                                }),
                            }),
                    }),
                    headerText: k.intl.string(U.default["+O9Asn"]),
                    subheaderText: k.intl.format(U.default.nWKEBZ, { helpdeskArticle: () => H(n) }),
                };
            case C.L.PROGRAM_ROLLBACK:
                return {
                    displayTotalLifetimeRewards: null != s,
                    displayProgressBar: null != r,
                    actionButton: (0, i.jsx)(h.$, {
                        text: k.intl.string(U.default["wLAd/+"]),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, L.WD)(n), (0, v.pX)(x.BV.COLLECTIBLES_SHOP_WITH_TAB(P.G2.ORBS));
                        },
                    }),
                    headerText: k.intl.string(U.default.zF0HnJ),
                    subheaderText: k.intl.format(U.default["5tzNTa"], { helpdeskArticle: () => H(n) }),
                };
            case C.L.PREMIUM_CHURNING:
                return {
                    displayTotalLifetimeRewards: null != s,
                    displayProgressBar: null != r,
                    actionButton: (0, i.jsx)(h.$, {
                        text: k.intl.string(U.default.FToh6D),
                        variant: t ? "overlay-primary" : "secondary",
                        icon: E.t,
                        onClick: () => {
                            (0, L.Jv)(n), (0, R.openUserSettings)(O.X.SUBSCRIPTIONS_PANEL);
                        },
                    }),
                    headerText: k.intl.string(U.default.ISnOet),
                    subheaderText: k.intl.format(U.default["vjaRZ/"], { helpdeskArticle: () => H(n) }),
                };
            default:
                return null;
        }
    })(s, o);
    if (null == b) return null;
    let { displayTotalLifetimeRewards: B, displayProgressBar: j, actionButton: Y, headerText: W, subheaderText: K } = b;
    return (0, i.jsx)("div", {
        className: a()(G.Hc, t),
        children: (0, i.jsxs)(D.A, {
            cardType: T.s.CUSTOM,
            cardClassName: G.Nr,
            glowing: !0,
            ..._,
            children: [
                (0, i.jsx)(y.A, { className: G.Ki, src: F.A }),
                (0, i.jsxs)("div", {
                    className: G.zK,
                    children: [
                        (0, i.jsx)("img", { src: V.A, className: G._e, alt: "", "aria-hidden": !0 }),
                        (0, i.jsx)("div", { className: G.mR }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: G.FS,
                    children: [
                        (0, i.jsx)(p.N, {
                            theme: o ? M.NJ8.DARKER : void 0,
                            children: (e) =>
                                (0, i.jsx)("div", {
                                    className: a()(e, G.aZ),
                                    children: (0, i.jsx)(m.E, { type: "beta", variant: "expressive" }),
                                }),
                        }),
                        (0, i.jsx)(l.D, { variant: "heading-xl/bold", className: G.R_, children: W }),
                        (0, i.jsx)(u.E, { variant: "text-md/medium", className: G.G3, children: K }),
                        j && (0, i.jsx)(w.A, { className: G.L$ }),
                        B &&
                            s.total_rewarded_from_program > 0 &&
                            (0, i.jsxs)("div", {
                                className: G.fB,
                                children: [
                                    (0, i.jsx)(u.E, {
                                        variant: "text-md/medium",
                                        className: G.G3,
                                        children: k.intl.string(U.default["/1mWUn"]),
                                    }),
                                    (0, i.jsx)(g.C, { size: "sm", color: "currentColor" }),
                                    (0, i.jsx)(u.E, {
                                        variant: "text-md/medium",
                                        className: G.G3,
                                        children: s.total_rewarded_from_program,
                                    }),
                                ],
                            }),
                        (0, i.jsx)("div", { className: G.WT, children: (0, i.jsx)(A.e, { children: Y }) }),
                    ],
                }),
            ],
        }),
    });
};
var Y = n(102338);
let W = "orbs",
    K = (e) => {
        let { className: t, location: n } = e,
            { analyticsLocations: s } = (0, c.Ay)(n),
            f = r.useRef(null),
            h = r.useRef(!1),
            { passesGeneralUIInvariant: p, programReward: E } = (0, d.F)({
                location: "PremiumTenureRewardsOrbsSection",
            });
        return p
            ? (0, i.jsx)(c.f5, {
                  value: s,
                  children: (0, i.jsx)(o.L, {
                      innerRef: f,
                      onChange: (e) => {
                          e &&
                              !h.current &&
                              ((h.current = !0),
                              _.default.track(M.HAw.PREMIUM_TENURE_REWARDS_ORBS_SECTION_IMPRESSION, {
                                  program_state: E?.program_current_state,
                              }));
                      },
                      threshold: 0.5,
                      children: (0, i.jsxs)("div", {
                          ref: f,
                          id: W,
                          className: a()(Y.uW, Y.Uv, Y.qr, t),
                          children: [
                              (0, i.jsx)(l.D, {
                                  variant: "display-sm",
                                  className: Y.R_,
                                  style: { textAlign: "start" },
                                  children: k.intl.string(U.default.EdGvBM),
                              }),
                              (0, i.jsx)(u.E, {
                                  variant: "text-md/medium",
                                  className: a()(Y.VA, Y.dO),
                                  children: k.intl.string(U.default["2KoHRF"]),
                              }),
                              (0, i.jsx)(j, {}),
                          ],
                      }),
                  }),
              })
            : null;
    };
