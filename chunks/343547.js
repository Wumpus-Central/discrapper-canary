n.d(t, {
    A: () => R,
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(892227),
    o = n(311907),
    c = n(732955),
    d = n(462887),
    u = n(397927),
    _ = n(241524),
    p = n(736653),
    m = n(607470),
    g = n(895944),
    A = n(649032),
    f = n(976860),
    b = n(780964),
    h = n(840065),
    E = n(975571),
    O = n(749082),
    x = n(385243),
    C = n(652215),
    S = n(758836),
    T = n(901123),
    I = n(49370),
    N = n(985018),
    j = n(785619),
    y = n(909340),
    v = n(455482);
let P = E.A.getArticleURL(C.MVz.ORBS_REWARDS_FAQ),
    R = (e) => {
        var t, n;
        let { className: l } = e,
            { passesGeneralUIInvariant: E, programReward: R } = (0, o.cf)([g.A], () => ({
                passesGeneralUIInvariant: g.A.passesGeneralUIInvariant(A.W.NITRO),
                programReward: g.A.getRewardForProgram(A.W.NITRO),
            })),
            D = (0, _.A)("(min-width: ".concat(720, "px)")),
            L = (0, p.DP)(),
            w = i.useMemo(
                () => ({
                    hueRotate: 25,
                    glowAmount: (0, d.M)(L) ? 2 : 8,
                    blurAmount: 20,
                }),
                [L],
            );
        if (!E || null == R) return null;
        let M = (function (e, t) {
            let n = e.program_current_state,
                i =
                    null != e.next_reward_date && "" !== e.next_reward_date
                        ? (0, a.default)(new Date(e.next_reward_date), new Date())
                        : null,
                l = null == e ? void 0 : e.total_rewarded_from_program;
            switch (n) {
                case A.L.ACTIVE:
                    if (null == i || i < 0) return null;
                    return {
                        displayTotalLifetimeRewards: null != l,
                        displayProgressBar: !0,
                        actionButton: (0, r.jsx)(c.$nd, {
                            text: N.intl.string(I.default.BxjHiu),
                            variant: t ? "overlay-primary" : "secondary",
                            onClick: () => (0, f.pX)(T.BV.COLLECTIBLES_SHOP_WITH_TAB(S.G2.ORBS)),
                        }),
                        headerText: N.intl.format(I.default.BxLJQL, {
                            days: Math.max(1, i),
                            orbsCount: e.reward_amount,
                        }),
                        subheaderText: N.intl.format(I.default.tUV1vV, {
                            helpdeskArticle: P,
                        }),
                    };
                case A.L.PAYMENT_PROCESSING:
                    return {
                        displayTotalLifetimeRewards: !1,
                        displayProgressBar: !1,
                        actionButton: (0, r.jsx)(c.$nd, {
                            text: N.intl.string(I.default.KVCfnE),
                            variant: t ? "overlay-primary" : "secondary",
                            onClick: () =>
                                (0, h.openUserSettings)(b.X.BILLING_PANEL, {
                                    section: C.nc_.BILLING,
                                }),
                        }),
                        headerText: N.intl.string(I.default.uuZJXR),
                        subheaderText: N.intl.format(I.default.dkeEV7, {
                            helpdeskArticle: P,
                        }),
                    };
                case A.L.PAYMENT_ERROR:
                    return {
                        displayTotalLifetimeRewards: null != l,
                        displayProgressBar: !1,
                        actionButton: (0, r.jsx)("span", {
                            className: t ? "theme-dark" : void 0,
                            children: (0, r.jsx)(c.$nd, {
                                text: N.intl.string(I.default.KVCfnE),
                                variant: "critical-secondary",
                                onClick: () =>
                                    (0, h.openUserSettings)(b.X.BILLING_PANEL, {
                                        section: C.nc_.BILLING,
                                    }),
                            }),
                        }),
                        headerText: N.intl.string(I.default["+O9Asn"]),
                        subheaderText: N.intl.format(I.default.nWKEBZ, {
                            helpdeskArticle: P,
                        }),
                    };
                case A.L.PROGRAM_ROLLBACK:
                    return {
                        displayTotalLifetimeRewards: null != l,
                        displayProgressBar: null != i,
                        actionButton: (0, r.jsx)(c.$nd, {
                            text: N.intl.string(I.default["wLAd/+"]),
                            variant: t ? "overlay-primary" : "secondary",
                            onClick: () => (0, f.pX)(T.BV.COLLECTIBLES_SHOP_WITH_TAB(S.G2.ORBS)),
                        }),
                        headerText: N.intl.string(I.default.zF0HnJ),
                        subheaderText: N.intl.format(I.default["5tzNTa"], {
                            helpdeskArticle: P,
                        }),
                    };
                case A.L.PREMIUM_CHURNING:
                    return {
                        displayTotalLifetimeRewards: null != l,
                        displayProgressBar: null != i,
                        actionButton: (0, r.jsx)(c.$nd, {
                            text: N.intl.string(I.default.FToh6D),
                            variant: t ? "overlay-primary" : "secondary",
                            icon: c.tvc,
                            onClick: () =>
                                (0, h.openUserSettings)(b.X.BILLING_PANEL, {
                                    section: C.nc_.BILLING,
                                }),
                        }),
                        headerText: N.intl.string(I.default.ISnOet),
                        subheaderText: N.intl.format(I.default["vjaRZ/"], {
                            helpdeskArticle: P,
                        }),
                    };
                default:
                    return null;
            }
        })(R, D);
        if (null == M) return null;
        let {
            displayTotalLifetimeRewards: G,
            displayProgressBar: U,
            actionButton: k,
            headerText: B,
            subheaderText: H,
        } = M;
        return (0, r.jsx)("div", {
            className: s()(j.Hc, l),
            children: (0, r.jsxs)(
                O.A,
                ((t = (function (e) {
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
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })(
                    {
                        cardType: u.sl2.CUSTOM,
                        cardClassName: j.Nr,
                    },
                    w,
                )),
                (n = n =
                    {
                        children: [
                            (0, r.jsx)(m.A, {
                                muted: !0,
                                autoPlay: !0,
                                playsInline: !0,
                                loop: !0,
                                className: j.Ki,
                                src: y.A,
                            }),
                            (0, r.jsxs)("div", {
                                className: j.zK,
                                children: [
                                    (0, r.jsx)("img", {
                                        src: v.A,
                                        className: j._e,
                                        alt: "",
                                        "aria-hidden": !0,
                                    }),
                                    (0, r.jsx)("div", {
                                        className: j.mR,
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: j.FS,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: j.aZ,
                                        children: (0, r.jsx)(c.Exy, {
                                            type: "beta",
                                            variant: "expressive",
                                        }),
                                    }),
                                    (0, r.jsx)(c.DZT, {
                                        variant: "heading-xl/bold",
                                        className: j.R_,
                                        children: B,
                                    }),
                                    (0, r.jsx)(c.EYj, {
                                        variant: "text-md/medium",
                                        className: j.G3,
                                        children: H,
                                    }),
                                    U &&
                                        (0, r.jsx)(x.A, {
                                            className: j.L$,
                                        }),
                                    G &&
                                        R.total_rewarded_from_program > 0 &&
                                        (0, r.jsxs)("div", {
                                            className: j.fB,
                                            children: [
                                                (0, r.jsx)(c.EYj, {
                                                    variant: "text-md/medium",
                                                    className: j.G3,
                                                    children: N.intl.string(I.default["/1mWUn"]),
                                                }),
                                                (0, r.jsx)(c.Cp8, {
                                                    size: "sm",
                                                    color: "currentColor",
                                                }),
                                                (0, r.jsx)(c.EYj, {
                                                    variant: "text-md/medium",
                                                    className: j.G3,
                                                    children: R.total_rewarded_from_program,
                                                }),
                                            ],
                                        }),
                                    (0, r.jsx)("div", {
                                        className: j.WT,
                                        children: (0, r.jsx)(c.e2v, {
                                            children: k,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                t),
            ),
        });
    };
