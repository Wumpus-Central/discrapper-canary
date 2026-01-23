n.d(t, {
    A: () => D,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(892227),
    o = n(311907),
    l = n(827734),
    c = n(732955),
    u = n(397927),
    d = n(241524),
    f = n(607470),
    p = n(895944),
    _ = n(649032),
    h = n(976860),
    m = n(780964),
    g = n(840065),
    E = n(975571),
    y = n(749082),
    b = n(385243),
    O = n(652215),
    v = n(758836),
    A = n(901123),
    I = n(49370),
    S = n(985018),
    T = n(785619),
    C = n(909340),
    N = n(455482);
let R = E.A.getArticleURL(O.MVz.ORBS_REWARDS_FAQ),
    w = 720;

function P(e, t) {
    let n = e.program_current_state,
        i =
            null != e.next_reward_date && "" !== e.next_reward_date
                ? (0, s.default)(new Date(e.next_reward_date), new Date())
                : null,
        a = null == e ? void 0 : e.total_rewarded_from_program;
    switch (n) {
        case _.L.ACTIVE:
            if (null == i || i < 0) return null;
            return {
                displayTotalLifetimeRewards: null != a,
                displayProgressBar: !0,
                actionButton: (0, r.jsx)(c.$nd, {
                    text: S.intl.string(I.default.BxjHiu),
                    variant: t ? "overlay-primary" : "secondary",
                    onClick: () => (0, h.pX)(A.BV.COLLECTIBLES_SHOP_WITH_TAB(v.G2.ORBS)),
                }),
                headerText: S.intl.format(I.default.cfE8Oh, {
                    days: Math.max(1, i),
                }),
                subheaderText: S.intl.format(I.default["53tWRt"], {
                    helpdeskArticle: R,
                }),
            };
        case _.L.PAYMENT_PROCESSING:
            return {
                displayTotalLifetimeRewards: !1,
                displayProgressBar: !1,
                actionButton: (0, r.jsx)(c.$nd, {
                    text: S.intl.string(I.default.KVCfnE),
                    variant: t ? "overlay-primary" : "secondary",
                    onClick: () =>
                        (0, g.openUserSettings)(m.X.BILLING_PANEL, {
                            section: O.nc_.BILLING,
                        }),
                }),
                headerText: S.intl.string(I.default.uuZJXR),
                subheaderText: S.intl.format(I.default.dkeEV7, {
                    helpdeskArticle: R,
                }),
            };
        case _.L.PAYMENT_ERROR:
            return {
                displayTotalLifetimeRewards: null != a,
                displayProgressBar: !1,
                actionButton: (0, r.jsx)(c.$nd, {
                    text: S.intl.string(I.default.KVCfnE),
                    variant: "critical-secondary",
                    onClick: () =>
                        (0, g.openUserSettings)(m.X.BILLING_PANEL, {
                            section: O.nc_.BILLING,
                        }),
                }),
                headerText: S.intl.string(I.default["+O9Asn"]),
                subheaderText: S.intl.format(I.default.nWKEBZ, {
                    helpdeskArticle: R,
                }),
            };
        case _.L.PROGRAM_ROLLBACK:
            return {
                displayTotalLifetimeRewards: null != a,
                displayProgressBar: null != i,
                actionButton: (0, r.jsx)(c.$nd, {
                    text: S.intl.string(I.default["wLAd/+"]),
                    variant: t ? "overlay-primary" : "secondary",
                    onClick: () => (0, h.pX)(A.BV.COLLECTIBLES_SHOP_WITH_TAB(v.G2.ORBS)),
                }),
                headerText: S.intl.string(I.default.zF0HnJ),
                subheaderText: S.intl.format(I.default["5tzNTa"], {
                    helpdeskArticle: R,
                }),
            };
        case _.L.PREMIUM_CHURNING:
            return {
                displayTotalLifetimeRewards: null != a,
                displayProgressBar: null != i,
                actionButton: (0, r.jsx)(c.$nd, {
                    text: S.intl.string(I.default.FToh6D),
                    variant: t ? "overlay-primary" : "secondary",
                    icon: c.tvc,
                    onClick: () =>
                        (0, g.openUserSettings)(m.X.BILLING_PANEL, {
                            section: O.nc_.BILLING,
                        }),
                }),
                headerText: S.intl.string(I.default.ISnOet),
                subheaderText: S.intl.format(I.default["vjaRZ/"], {
                    helpdeskArticle: R,
                }),
            };
        default:
            return null;
    }
}
let D = (e) => {
    let { className: t } = e,
        { passesGeneralUIInvariant: n, programReward: i } = (0, o.cf)([p.A], () => ({
            passesGeneralUIInvariant: p.A.passesGeneralUIInvariant(_.W.NITRO),
            programReward: p.A.getRewardForProgram(_.W.NITRO),
        })),
        s = (0, d.A)("(min-width: ".concat(w, "px)"));
    if (!n || null == i) return null;
    let h = P(i, s);
    if (null == h) return null;
    let { displayTotalLifetimeRewards: m, displayProgressBar: g, actionButton: E, headerText: O, subheaderText: v } = h;
    return (0, r.jsxs)("div", {
        className: a()(T.Hc, t),
        children: [
            (0, r.jsx)("div", {
                className: T.aZ,
                children: (0, r.jsx)(c.Exy, {
                    type: "beta",
                    variant: "expressive",
                }),
            }),
            (0, r.jsxs)(y.A, {
                cardType: u.sl2.CUSTOM,
                cardClassName: T.Nr,
                children: [
                    (0, r.jsx)(f.A, {
                        muted: !0,
                        autoPlay: !0,
                        playsInline: !0,
                        loop: !0,
                        className: T.Ki,
                        src: C.A,
                    }),
                    (0, r.jsxs)("div", {
                        className: T.zK,
                        children: [
                            (0, r.jsx)("img", {
                                src: N.A,
                                className: T._e,
                                alt: "",
                                "aria-hidden": !0,
                            }),
                            (0, r.jsx)("div", {
                                className: T.mR,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: T.FS,
                        children: [
                            (0, r.jsx)(c.DZT, {
                                variant: "heading-xxl/bold",
                                className: T.R_,
                                children: O,
                            }),
                            (0, r.jsx)(c.EYj, {
                                variant: "text-md/medium",
                                className: T.G3,
                                children: v,
                            }),
                            g &&
                                (0, r.jsx)(b.A, {
                                    className: T.L$,
                                }),
                            m &&
                                (0, r.jsxs)("div", {
                                    className: T.fB,
                                    children: [
                                        (0, r.jsx)(c.EYj, {
                                            variant: "text-md/medium",
                                            className: T.G3,
                                            children: S.intl.string(I.default["/1mWUn"]),
                                        }),
                                        (0, r.jsx)(c.Cp8, {
                                            size: "sm",
                                            color: l.A.colors.TEXT_DEFAULT.css,
                                        }),
                                        (0, r.jsx)(c.EYj, {
                                            variant: "text-md/medium",
                                            className: T.G3,
                                            children: i.total_rewarded_from_program,
                                        }),
                                    ],
                                }),
                            (0, r.jsx)("div", {
                                className: T.WT,
                                children: (0, r.jsx)(c.e2v, {
                                    children: E,
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
