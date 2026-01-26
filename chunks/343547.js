n.d(t, {
    A: () => U,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(892227),
    l = n(311907),
    c = n(732955),
    u = n(462887),
    d = n(397927),
    f = n(241524),
    p = n(736653),
    _ = n(607470),
    h = n(895944),
    m = n(649032),
    g = n(976860),
    E = n(780964),
    y = n(840065),
    b = n(975571),
    O = n(749082),
    v = n(385243),
    A = n(652215),
    I = n(758836),
    S = n(901123),
    T = n(49370),
    C = n(985018),
    N = n(785619),
    w = n(909340),
    R = n(455482);

function P(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                P(e, t, n[t]);
            });
    }
    return e;
}

function x(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function L(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : x(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let j = b.A.getArticleURL(A.MVz.ORBS_REWARDS_FAQ),
    M = 720;

function k(e, t) {
    let n = e.program_current_state,
        i =
            null != e.next_reward_date && "" !== e.next_reward_date
                ? (0, o.default)(new Date(e.next_reward_date), new Date())
                : null,
        a = null == e ? void 0 : e.total_rewarded_from_program;
    switch (n) {
        case m.L.ACTIVE:
            if (null == i || i < 0) return null;
            return {
                displayTotalLifetimeRewards: null != a,
                displayProgressBar: !0,
                actionButton: (0, r.jsx)(c.$nd, {
                    text: C.intl.string(T.default.BxjHiu),
                    variant: t ? "overlay-primary" : "secondary",
                    onClick: () => (0, g.pX)(S.BV.COLLECTIBLES_SHOP_WITH_TAB(I.G2.ORBS)),
                }),
                headerText: C.intl.format(T.default.cfE8Oh, {
                    days: Math.max(1, i),
                }),
                subheaderText: C.intl.format(T.default["53tWRt"], {
                    helpdeskArticle: j,
                }),
            };
        case m.L.PAYMENT_PROCESSING:
            return {
                displayTotalLifetimeRewards: !1,
                displayProgressBar: !1,
                actionButton: (0, r.jsx)(c.$nd, {
                    text: C.intl.string(T.default.KVCfnE),
                    variant: t ? "overlay-primary" : "secondary",
                    onClick: () =>
                        (0, y.openUserSettings)(E.X.BILLING_PANEL, {
                            section: A.nc_.BILLING,
                        }),
                }),
                headerText: C.intl.string(T.default.uuZJXR),
                subheaderText: C.intl.format(T.default.dkeEV7, {
                    helpdeskArticle: j,
                }),
            };
        case m.L.PAYMENT_ERROR:
            return {
                displayTotalLifetimeRewards: null != a,
                displayProgressBar: !1,
                actionButton: (0, r.jsx)("span", {
                    className: t ? "theme-dark" : void 0,
                    children: (0, r.jsx)(c.$nd, {
                        text: C.intl.string(T.default.KVCfnE),
                        variant: "critical-secondary",
                        onClick: () =>
                            (0, y.openUserSettings)(E.X.BILLING_PANEL, {
                                section: A.nc_.BILLING,
                            }),
                    }),
                }),
                headerText: C.intl.string(T.default["+O9Asn"]),
                subheaderText: C.intl.format(T.default.nWKEBZ, {
                    helpdeskArticle: j,
                }),
            };
        case m.L.PROGRAM_ROLLBACK:
            return {
                displayTotalLifetimeRewards: null != a,
                displayProgressBar: null != i,
                actionButton: (0, r.jsx)(c.$nd, {
                    text: C.intl.string(T.default["wLAd/+"]),
                    variant: t ? "overlay-primary" : "secondary",
                    onClick: () => (0, g.pX)(S.BV.COLLECTIBLES_SHOP_WITH_TAB(I.G2.ORBS)),
                }),
                headerText: C.intl.string(T.default.zF0HnJ),
                subheaderText: C.intl.format(T.default["5tzNTa"], {
                    helpdeskArticle: j,
                }),
            };
        case m.L.PREMIUM_CHURNING:
            return {
                displayTotalLifetimeRewards: null != a,
                displayProgressBar: null != i,
                actionButton: (0, r.jsx)(c.$nd, {
                    text: C.intl.string(T.default.FToh6D),
                    variant: t ? "overlay-primary" : "secondary",
                    icon: c.tvc,
                    onClick: () =>
                        (0, y.openUserSettings)(E.X.BILLING_PANEL, {
                            section: A.nc_.BILLING,
                        }),
                }),
                headerText: C.intl.string(T.default.ISnOet),
                subheaderText: C.intl.format(T.default["vjaRZ/"], {
                    helpdeskArticle: j,
                }),
            };
        default:
            return null;
    }
}
let U = (e) => {
    let { className: t } = e,
        { passesGeneralUIInvariant: n, programReward: a } = (0, l.cf)([h.A], () => ({
            passesGeneralUIInvariant: h.A.passesGeneralUIInvariant(m.W.NITRO),
            programReward: h.A.getRewardForProgram(m.W.NITRO),
        })),
        o = (0, f.A)("(min-width: ".concat(M, "px)")),
        g = (0, p.DP)(),
        E = i.useMemo(
            () => ({
                hueRotate: 25,
                glowAmount: (0, u.M)(g) ? 2 : 8,
                blurAmount: 20,
            }),
            [g],
        );
    if (!n || null == a) return null;
    let y = k(a, o);
    if (null == y) return null;
    let { displayTotalLifetimeRewards: b, displayProgressBar: A, actionButton: I, headerText: S, subheaderText: P } = y;
    return (0, r.jsx)("div", {
        className: s()(N.Hc, t),
        children: (0, r.jsxs)(
            O.A,
            L(
                D(
                    {
                        cardType: d.sl2.CUSTOM,
                        cardClassName: N.Nr,
                    },
                    E,
                ),
                {
                    children: [
                        (0, r.jsx)(_.A, {
                            muted: !0,
                            autoPlay: !0,
                            playsInline: !0,
                            loop: !0,
                            className: N.Ki,
                            src: w.A,
                        }),
                        (0, r.jsxs)("div", {
                            className: N.zK,
                            children: [
                                (0, r.jsx)("img", {
                                    src: R.A,
                                    className: N._e,
                                    alt: "",
                                    "aria-hidden": !0,
                                }),
                                (0, r.jsx)("div", {
                                    className: N.mR,
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: N.FS,
                            children: [
                                (0, r.jsx)("div", {
                                    className: N.aZ,
                                    children: (0, r.jsx)(c.Exy, {
                                        type: "beta",
                                        variant: "expressive",
                                    }),
                                }),
                                (0, r.jsx)(c.DZT, {
                                    variant: "heading-xl/bold",
                                    className: N.R_,
                                    children: S,
                                }),
                                (0, r.jsx)(c.EYj, {
                                    variant: "text-md/medium",
                                    className: N.G3,
                                    children: P,
                                }),
                                A &&
                                    (0, r.jsx)(v.A, {
                                        className: N.L$,
                                    }),
                                b &&
                                    (0, r.jsxs)("div", {
                                        className: N.fB,
                                        children: [
                                            (0, r.jsx)(c.EYj, {
                                                variant: "text-md/medium",
                                                className: N.G3,
                                                children: C.intl.string(T.default["/1mWUn"]),
                                            }),
                                            (0, r.jsx)(c.Cp8, {
                                                size: "sm",
                                                color: "currentColor",
                                            }),
                                            (0, r.jsx)(c.EYj, {
                                                variant: "text-md/medium",
                                                className: N.G3,
                                                children: a.total_rewarded_from_program,
                                            }),
                                        ],
                                    }),
                                (0, r.jsx)("div", {
                                    className: N.WT,
                                    children: (0, r.jsx)(c.e2v, {
                                        children: I,
                                    }),
                                }),
                            ],
                        }),
                    ],
                },
            ),
        ),
    });
};
