"use strict";
n.d(t, { t6: () => eh, Zg: () => e_, ew: () => ed, v0: () => es, Ay: () => ep, X8: () => el }), n(801541);
var i,
    r = n(627968),
    s = n(64700),
    a = n(503698),
    o = n.n(a),
    l = n(889137),
    u = n(17928),
    c = n(873298),
    d = n(785007),
    _ = n(534514),
    h = n(604121),
    f = n(140735),
    p = n(331322),
    E = n(817281),
    m = n(775602),
    g = n(793574),
    A = n(688810),
    I = n(793943),
    T = n(915089),
    S = n(87719),
    y = n(234419),
    C = n(811611),
    N = n(450232),
    v = n(973654),
    R = n(363195),
    O = n(742023),
    b = n(885386),
    D = n(830543),
    L = n(174459),
    w = n(823459),
    M = n(47671),
    P = n(650809),
    x = n(554146),
    k = n(661531),
    U = n(366010),
    G = n(812993),
    F = n(736653),
    V = n(826673),
    B = n(617617),
    j = n(74396),
    H = n(653523),
    Y = n(558845),
    W = n(367727),
    K = n(49999),
    $ = n(693227),
    z = n(375708),
    q = n(645603);
function Z() {
    return (0, r.jsxs)("svg", {
        className: q.JR,
        width: "68",
        height: "68",
        viewBox: "0 0 68 68",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            (0, r.jsx)("rect", {
                x: "4",
                y: "4",
                width: "60",
                height: "60",
                rx: "8",
                stroke: "url(#paint0_linear_1368_16544)",
                strokeWidth: "2",
            }),
            (0, r.jsx)("defs", {
                children: (0, r.jsxs)("linearGradient", {
                    id: "paint0_linear_1368_16544",
                    x1: "33.875",
                    y1: "2",
                    x2: "33.875",
                    y2: "65.75",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                        (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                    ],
                }),
            }),
        ],
    });
}
function X(e) {
    let t,
        { isDisabled: n, onSelect: i, size: a, ariaDescribedBy: l } = e,
        c = (0, u.bG)([B.A], () => B.A.settings.appearance?.clientThemeSettings?.customUserThemeSettings),
        { shouldShowNewBadge: d, markNewBadgeAsDismissed: _ } =
            ((t = (0, V.JZ)(x.M.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE)),
            s.useEffect(() => {
                if (!t)
                    return (
                        (0, W.Vh)(x.M.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE),
                        () => {
                            (0, Y.pd)({ content: x.M.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE }, !1);
                        }
                    );
            }, [t]),
            {
                shouldShowNewBadge: !t,
                markNewBadgeAsDismissed: s.useCallback(() => {
                    (0, V.Dr)(x.M.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE, { dismissAction: K.i.TAKE_ACTION });
                }, []),
            }),
        h = (0, V.JZ)(x.M.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
        f = (0, F.Ay)(),
        p = (0, U.M)(f) ? q.Xu : q.VO,
        E = null != c && null != c.colors && c.colors.length > 0,
        m = (0, u.bG)([j.A], () => j.A.getSavedCustomTheme()),
        g = E || null != m,
        A = s.useMemo(() => {
            let e, t;
            if (E) (e = c.colors), (t = c.gradientAngle);
            else {
                if (null === m) return;
                (e = m.colors), (t = m.gradient_angle);
            }
            let n = e[0];
            return (
                e.length > 1 && (n = `linear-gradient(${t}deg, ${e.join(", ")})`),
                { background: `var(--background-gradient), ${n}` }
            );
        }, [E, c, m]),
        I = g ? k.A.unsafe_rawColors.WHITE.css : void 0,
        T = s.useCallback(() => {
            d && _(), i?.();
        }, [d, _, i]);
    return (0, r.jsxs)("div", {
        className: q.fC,
        children: [
            (0, r.jsxs)(H.S4, {
                onSelect: n ? void 0 : T,
                isSelected: !1,
                showSelectionCircle: E,
                size: a,
                name: z.intl.string($.default.KSBBpC),
                className: o()(q.kL, g && p, n && q.r9),
                tabIndex: 0,
                showBadge: !1,
                showLockedBadge: !1,
                style: A,
                ariaDescribedBy: l,
                children: [
                    !h && !g && (0, r.jsx)(Z, {}),
                    (0, r.jsx)("div", { className: q.JU }),
                    (0, r.jsx)(P.B, { color: I, className: q.vL }),
                ],
            }),
            d &&
                (0, r.jsx)(G.Lp, {
                    className: q.Ad,
                    text: z.intl.string(z.t.y2b7CA),
                    color: k.A.unsafe_rawColors.RED_430.css,
                }),
        ],
    });
}
var Q = n(385803),
    J = n(652215),
    ee = n(788868),
    et = n(185928),
    en = n(355097),
    ei = n(818348),
    er = n(702709),
    es = (((i = {}).EDITOR = "EDITOR"), (i.SETTINGS = "SETTINGS"), i);
let ea = Object.freeze({ EDITOR: en.Sb.SLOW_USER_ACTION, SETTINGS: en.Sb.INFREQUENT_USER_ACTION }),
    eo = s.createContext({}),
    el = (e) => {
        let { isPersisted: t, themeName: n, analyticsLocations: i } = e;
        L.default.track(J.HAw.CLIENT_THEME_UPDATED, {
            feature_name: ee.Ae.CLIENT_THEME,
            theme_name: n,
            is_persisted: t,
            location_stack: i,
        });
    },
    eu = (e) => {
        let {
                type: t,
                isPreview: n,
                isCoachmark: i,
                textClassName: s,
                iconClassName: a,
                textVariant: u = "text-md/medium",
            } = e,
            c = (0, l.YW)({ type: t, isPreview: n, isCoachmark: i })
                .with({ type: "EDITOR", isCoachmark: !0, isPreview: !0 }, () => z.intl.string(z.t.D29k16))
                .with({ type: "EDITOR", isCoachmark: !0 }, () => z.intl.string(z.t["8+vbqd"]))
                .otherwise(() => z.intl.string(z.t.hjV0fZ));
        return (0, r.jsxs)("div", {
            className: er.DD,
            children: [
                (0, r.jsx)(_.D, { "aria-label": c, className: o()(er.Qw, s), variant: u, children: c }),
                (0, r.jsx)(N.A, { className: o()(er.PC, a), size: "xs" }),
            ],
        });
    },
    ec = (e) => {
        let { type: t, isPreview: n, isCoachmark: i } = e;
        if ((0, y.V)()?.subscription_trial?.sku_id === ee.pe.TIER_2 && n) return null;
        let s = (0, l.YW)({ type: t, isPreview: n, isCoachmark: i })
            .with({ type: "EDITOR", isPreview: !0 }, () => z.intl.format(z.t.G8yQXi, { onPremiumClick: S.e }))
            .with({ type: "EDITOR", isCoachmark: !0 }, () => z.intl.string(z.t.jmZiNu))
            .with({ type: "EDITOR", isPreview: !1 }, () => z.intl.string(z.t.dqDFwe))
            .with({ isPreview: !0 }, () => z.intl.format(z.t["DWIjJ/"], { onPremiumClick: S.e }))
            .otherwise(() => z.intl.string(z.t["np0X/u"]));
        return (0, r.jsx)(_.D, { variant: "text-sm/normal", className: er.W$, children: s });
    },
    ed = (e) => {
        let {
                renderCTAButtons: t,
                isCoachmark: n,
                titleTextVariant: i,
                headingClassName: a,
                titleClassName: l,
                titleIconClassName: c,
            } = e,
            { type: d } = s.useContext(eo),
            [_] = (0, u.yK)([M.A], () => [M.A.isPreview]),
            h = (0, y.V)()?.subscription_trial?.sku_id === ee.pe.TIER_2;
        return "EDITOR" === d && _ && h
            ? (0, r.jsx)(C.Ay, {
                  type: ee.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                  subscriptionTier: ee.pe.TIER_2,
                  children: z.intl.format(z.t.G8yQXi, { onPremiumClick: S.e }),
              })
            : (0, r.jsxs)("div", {
                  className: er.wx,
                  children: [
                      (0, r.jsxs)("div", {
                          className: o()(er.so, a),
                          children: [
                              (0, r.jsx)(eu, {
                                  type: d,
                                  isPreview: _,
                                  isCoachmark: n,
                                  textVariant: i,
                                  textClassName: l,
                                  iconClassName: c,
                              }),
                              (0, r.jsx)(ec, { type: d, isPreview: _, isCoachmark: n }),
                          ],
                      }),
                      t?.(),
                  ],
              });
    },
    e_ = (e) => {
        let { disabled: t, size: i } = e,
            { type: a, delay: o } = s.useContext(eo),
            { analyticsLocations: l } = (0, A.Ay)(g.A.CLIENT_THEMES_THEME_SELECTOR),
            [d, _] = (0, u.yK)([M.A], () => [M.A.isPreview, M.A.gradientPreset?.id]),
            [p, S] = s.useState(!1),
            [y, C] = s.useState(-1),
            N = (0, u.bG)([m.Ay], () => m.Ay.useReducedMotion),
            R = "SETTINGS" === a,
            O = (0, T.GV)(),
            b = R && d ? O : void 0,
            L = R ? O : void 0;
        s.useEffect(() => {
            ((y === Q.Jm.length - 2 && "EDITOR" === a) || _ === c.ju.EASTER_EGG) && S(!0);
        }, [y, a, _]);
        let P = (e, t) => {
                if (
                    ((0, w.bc)(e.id),
                    el({ isPersisted: !d, analyticsLocations: l, themeName: c.ju[e.id] }),
                    d && "SETTINGS" === a
                        ? x(e)
                        : d
                          ? (0, v.GQ)(e.theme)
                          : (0, E.u_)({ backgroundGradientPresetId: e.id, theme: e.theme }, o),
                    null != t)
                ) {
                    if ((p && S(!1), t <= y || 0 === t)) return void C(0);
                    C((e) => e + 1);
                }
            },
            x = (e) => {
                (0, v.GQ)(e.theme), (0, I.nf)(I.HP.CLIENT_THEMES), (0, D.default)();
            };
        return (0, r.jsxs)(r.Fragment, {
            children: [
                R && (0, r.jsx)(f.A, { id: O, children: z.intl.string(z.t.JIZSqz) }),
                (0, r.jsx)(X, {
                    size: i,
                    isDisabled: t,
                    ariaDescribedBy: L,
                    onSelect: () => {
                        (0, I.nf)(I.HP.CUSTOM_THEME, {
                            from: "SETTINGS" === a ? I.xv.SETTING : I.xv.CLIENT_THEMES_EDITOR,
                        }),
                            "SETTINGS" === a && (0, D.default)();
                    },
                }),
                Q.Jm.filter((e) => {
                    let { id: t } = e;
                    return t !== c.ju.EASTER_EGG;
                }).map((e, n) =>
                    (0, r.jsx)(
                        H.MX,
                        {
                            size: i,
                            preset: e,
                            isSelected: _ === e.id,
                            onSelect: () => P(e, n),
                            disabled: t,
                            tabIndex: 0 !== n || t ? void 0 : 0,
                            showBadge: !1,
                            showLockedBadge: !1,
                            ariaDescribedBy: b,
                        },
                        e.id,
                    ),
                ),
                (() => {
                    if (!p) return null;
                    let e = Q.ag[c.ju.EASTER_EGG];
                    if (null == e) return null;
                    async function t() {
                        let { default: e } = await n.e("3408").then(n.t.bind(n, 707827, 19));
                        return e;
                    }
                    return (0, r.jsxs)("div", {
                        className: er.kG,
                        children: [
                            (0, r.jsx)(H.MX, {
                                size: i,
                                preset: e,
                                isSelected: _ === c.ju.EASTER_EGG,
                                onSelect: () => P(e),
                                ariaDescribedBy: b,
                            }),
                            (0, r.jsx)(h.a, { importData: t, shouldAnimate: !N, className: er._7 }),
                        ],
                    });
                })(),
            ],
        });
    },
    eh = (e) => {
        let { size: t, systemSelectorFirst: n, hideSystemSelector: i = !1 } = e,
            { delay: a } = s.useContext(eo),
            { analyticsLocations: o } = (0, A.Ay)(g.A.CLIENT_THEMES_THEME_SELECTOR),
            [l, c, d] = (0, u.yK)([R.A, O.Ay, M.A], () => [
                R.A.theme,
                null == M.A.gradientPreset && null == b.eh.getSetting().customUserThemeSettings,
                O.Ay.useSystemTheme === et.Q_.ON,
            ]),
            _ = (e) => {
                (0, w.Py)(),
                    el({ isPersisted: !0, analyticsLocations: o, themeName: `default ${e}` }),
                    (0, E.u_)({ theme: e }, a);
            },
            h = !i && !0 === n;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                h &&
                    (0, r.jsx)(H.zy, {
                        size: t,
                        theme: "system",
                        isSelected: c && d,
                        onSelect: () => _("system"),
                        tabIndex: 0,
                    }),
                (0, r.jsx)(H.zy, {
                    size: t,
                    theme: ei.NJ.LIGHT,
                    isSelected: c && !d && l === ei.NJ.LIGHT,
                    onSelect: () => _(ei.NJ.LIGHT),
                    tabIndex: h ? void 0 : 0,
                }),
                (0, r.jsx)(H.zy, {
                    size: t,
                    theme: ei.NJ.DARK,
                    isSelected: c && !d && l === ei.NJ.DARK,
                    onSelect: () => _(ei.NJ.DARK),
                }),
                (0, r.jsx)(H.zy, {
                    size: t,
                    theme: ei.NJ.DARKER,
                    isSelected: c && !d && l === ei.NJ.DARKER,
                    onSelect: () => _(ei.NJ.DARKER),
                }),
                (0, r.jsx)(H.zy, {
                    size: t,
                    theme: ei.NJ.MIDNIGHT,
                    isSelected: c && !d && l === ei.NJ.MIDNIGHT,
                    onSelect: () => _(ei.NJ.MIDNIGHT),
                }),
                !i &&
                    !n &&
                    (0, r.jsx)(H.zy, { size: t, theme: "system", isSelected: c && d, onSelect: () => _("system") }),
            ],
        });
    },
    ef = (e) => {
        let { type: t, children: n } = e,
            i = (0, T.GV)(),
            { ref: a, ...o } = (0, d._u)({ orientation: "horizontal", labelledBy: i }),
            l = s.useMemo(() => ({ type: t, delay: ea[t] }), [t]);
        return (0, r.jsx)(eo.Provider, {
            value: l,
            children: (0, r.jsx)("div", { ref: a, ...o, className: er.__invalid_container, children: n }),
        });
    };
(ef.Basic = (e) => {
    let { className: t, hideSystemSelector: n, iconSize: i } = e;
    return (0, r.jsx)("section", {
        className: t,
        children: (0, r.jsx)(p.B, {
            direction: "horizontal",
            wrap: !0,
            gap: 8,
            style: { marginTop: 16 },
            children: (0, r.jsx)(eh, { hideSystemSelector: n, size: i }),
        }),
    });
}),
    (ef.Gradient = (e) => {
        let { className: t, renderCTAButtons: n, disabled: i = !1, isCoachmark: s, iconSize: a } = e;
        return (0, r.jsxs)("section", {
            className: t,
            children: [
                (0, r.jsx)(ed, { renderCTAButtons: n, isCoachmark: s }),
                (0, r.jsx)(p.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    style: { marginTop: 16 },
                    children: (0, r.jsx)(e_, { disabled: i, size: a }),
                }),
            ],
        });
    }),
    (ef.BasicAndGradient = (e) => {
        let { isEditor: t, className: n, renderCTAButtons: i, isCoachmark: s, iconSize: a } = e;
        return (0, r.jsxs)("section", {
            className: n,
            children: [
                !t && (0, r.jsx)(ed, { renderCTAButtons: i, isCoachmark: s }),
                t &&
                    s &&
                    (0, r.jsx)(_.D, {
                        className: er.tD,
                        variant: "heading-sm/semibold",
                        children: z.intl.string(z.t.POSLGY),
                    }),
                (0, r.jsxs)(p.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    justify: t ? "center" : "start",
                    style: { marginTop: 16 },
                    children: [
                        (0, r.jsx)(eh, { systemSelectorFirst: !0, size: a }),
                        (0, r.jsx)(e_, { disabled: !1, size: a }),
                    ],
                }),
            ],
        });
    });
let ep = ef;
