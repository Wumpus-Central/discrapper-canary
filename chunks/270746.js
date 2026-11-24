(n.d(t, { t6: () => eh, Zg: () => ef, ew: () => eA, v0: () => eo, Ay: () => ep, X8: () => eu }), n(801541));
var i,
    r = n(477900),
    a = n(582128),
    s = n(503698),
    l = n.n(s),
    o = n(889137),
    d = n(855986),
    c = n(873298),
    u = n(785007),
    _ = n(534514),
    E = n(604121),
    A = n(140735),
    f = n(331322),
    h = n(817281),
    I = n(775602),
    p = n(793574),
    m = n(688810),
    g = n(793943),
    T = n(915089),
    S = n(87719),
    N = n(620295),
    C = n(77528),
    O = n(811611),
    R = n(450232),
    L = n(973654),
    y = n(413599),
    D = n(964404),
    b = n(253932),
    v = n(830543),
    P = n(129230),
    M = n(975571),
    U = n(823459),
    w = n(47671),
    G = n(46075),
    x = n(11029),
    k = n(650809),
    F = n(554146),
    B = n(646514),
    V = n(366010),
    H = n(805251),
    j = n(736653),
    W = n(826673),
    Y = n(74396),
    K = n(653523),
    $ = n(517057),
    X = n(543862),
    z = n(49999),
    q = n(958904),
    Q = n(792996),
    J = n(643790);
function Z() {
    return (0, r.jsxs)("svg", {
        className: J.JR,
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
function ee(e) {
    let t,
        { isDisabled: n, onSelect: i, size: s, ariaDescribedBy: o } = e,
        c = b.eh.useSetting().customUserThemeSettings,
        { shouldShowNewBadge: u, markNewBadgeAsDismissed: _ } =
            ((t = (0, W.HX)(F.M.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE)),
            a.useEffect(() => {
                if (!t)
                    return (
                        (0, X.Vh)(F.M.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE),
                        () => {
                            (0, $.pd)({ content: F.M.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE }, !1);
                        }
                    );
            }, [t]),
            {
                shouldShowNewBadge: !t,
                markNewBadgeAsDismissed: a.useCallback(() => {
                    (0, W.Dr)(F.M.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE, { dismissAction: z.i.TAKE_ACTION });
                }, []),
            }),
        E = (0, W.HX)(F.M.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
        A = (0, j.Ay)(),
        f = (0, V.M)(A) ? J.Xu : J.VO,
        h = null != c && null != c.colors && c.colors.length > 0,
        I = (0, d.bG)([Y.A], () => Y.A.getSavedCustomTheme()),
        p = h || null != I,
        m = a.useMemo(() => {
            let e, t;
            if (h) ((e = c.colors), (t = c.gradientAngle));
            else {
                if (null === I) return;
                ((e = I.colors), (t = I.gradient_angle));
            }
            let n = e[0];
            return (
                e.length > 1 && (n = `linear-gradient(${t}deg, ${e.join(", ")})`),
                { background: `var(--background-gradient), ${n}` }
            );
        }, [h, c, I]),
        g = p ? B.A.unsafe_rawColors.WHITE.css : void 0,
        T = a.useCallback(() => {
            (u && _(), i?.());
        }, [u, _, i]);
    return (0, r.jsxs)("div", {
        className: J.fC,
        children: [
            (0, r.jsxs)(K.S4, {
                onSelect: n ? void 0 : T,
                isSelected: !1,
                showSelectionCircle: h,
                size: s,
                name: Q.intl.string(q.default.KSBBpC),
                className: l()(J.kL, p && f, n && J.r9),
                tabIndex: 0,
                showBadge: !1,
                showLockedBadge: !1,
                style: m,
                ariaDescribedBy: o,
                children: [
                    !E && !p && (0, r.jsx)(Z, {}),
                    (0, r.jsx)("div", { className: J.JU }),
                    (0, r.jsx)(k.PaintPaletteIcon, { color: g, className: J.vL }),
                ],
            }),
            u && (0, r.jsx)("div", { className: J.Ad, children: (0, r.jsx)(H.E, { type: "new", variant: "primary" }) }),
        ],
    });
}
var et = n(385803),
    en = n(652215),
    ei = n(682901),
    er = n(185928),
    ea = n(355097),
    es = n(818348),
    el = n(468082),
    eo = (((i = {}).EDITOR = "EDITOR"), (i.SETTINGS = "SETTINGS"), i);
let ed = Object.freeze({ EDITOR: ea.Sb.SLOW_USER_ACTION, SETTINGS: ea.Sb.INFREQUENT_USER_ACTION }),
    ec = a.createContext({});
function eu(e) {
    let { isPersisted: t, themeName: n, analyticsLocations: i } = e;
    P.default.track(en.HAw.CLIENT_THEME_UPDATED, {
        feature_name: ei.Ae.CLIENT_THEME,
        theme_name: n,
        is_persisted: t,
        location_stack: i,
    });
}
function e_(e) {
    let {
            type: t,
            isPreview: n,
            isCoachmark: i,
            textClassName: a,
            iconClassName: s,
            textVariant: d = "body-md/medium",
        } = e,
        c = (0, o.YW)({ type: t, isPreview: n, isCoachmark: i })
            .with({ type: "EDITOR", isCoachmark: !0, isPreview: !0 }, () => Q.intl.string(Q.t.D29k16))
            .with({ type: "EDITOR", isCoachmark: !0 }, () => Q.intl.string(Q.t["8+vbqd"]))
            .otherwise(() => Q.intl.string(Q.t.hjV0fZ));
    return (0, r.jsxs)("div", {
        className: el.DD,
        children: [
            (0, r.jsx)(_.D, { "aria-label": c, className: l()(el.Qw, a), variant: d, children: c }),
            (0, r.jsx)(R.A, { className: l()(el.PC, s), size: "xs" }),
        ],
    });
}
function eE(e) {
    let { type: t, isPreview: n, isCoachmark: i, isTrialRefreshEnabled: a } = e,
        s = (0, C.V)();
    if (s?.subscriptionTrial?.skuId === ei.pe.TIER_2 && n)
        return a && "SETTINGS" === t
            ? (0, r.jsxs)(_.D, {
                  variant: "body-sm/normal",
                  className: el.W$,
                  children: [
                      Q.intl.format(Q.t["fF+cgd"], {
                          onClick: () => window.open(M.A.getArticleURL(en.MVz.PREMIUM_TRIAL), "_blank"),
                      }),
                      " ",
                      (0, O.ux)(s.expiresAt?.toISOString()),
                  ],
              })
            : null;
    let l = (0, o.YW)({ type: t, isPreview: n, isCoachmark: i })
        .with({ type: "EDITOR", isPreview: !0 }, () => Q.intl.format(Q.t.G8yQXi, { onPremiumClick: S.e }))
        .with({ type: "EDITOR", isCoachmark: !0 }, () => Q.intl.string(Q.t.jmZiNu))
        .with({ type: "EDITOR", isPreview: !1 }, () => Q.intl.string(Q.t.dqDFwe))
        .with({ isPreview: !0 }, () => Q.intl.format(Q.t["DWIjJ/"], { onPremiumClick: S.e }))
        .otherwise(() => Q.intl.string(Q.t["np0X/u"]));
    return (0, r.jsx)(_.D, { variant: "body-sm/normal", className: el.W$, children: l });
}
function eA(e) {
    let {
            renderCTAButtons: t,
            isCoachmark: n,
            titleTextVariant: i,
            headingClassName: s,
            titleClassName: o,
            titleIconClassName: c,
        } = e,
        { type: u } = a.useContext(ec),
        [_] = (0, d.yK)([w.A], () => [w.A.isPreview]),
        E = (0, C.V)()?.subscriptionTrial?.skuId === ei.pe.TIER_2,
        A = N.R.useConfig({ location: "theme_preview_trial_header" }) && E;
    return "EDITOR" === u && _ && A
        ? (0, r.jsx)(G.W, {})
        : "EDITOR" === u && _ && E
          ? (0, r.jsx)(O.Ay, {
                type: ei.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                subscriptionTier: ei.pe.TIER_2,
                children: Q.intl.format(Q.t.G8yQXi, { onPremiumClick: S.e }),
            })
          : (0, r.jsxs)("div", {
                className: l()(el.wx, { [el.Jd]: A }),
                children: [
                    (0, r.jsxs)("div", {
                        className: l()(el.so, s),
                        children: [
                            (0, r.jsx)(e_, {
                                type: u,
                                isPreview: _,
                                isCoachmark: n,
                                textVariant: i,
                                textClassName: o,
                                iconClassName: c,
                            }),
                            (0, r.jsx)(eE, { type: u, isPreview: _, isCoachmark: n, isTrialRefreshEnabled: A }),
                        ],
                    }),
                    t?.(),
                ],
            });
}
function ef(e) {
    let { disabled: t, size: i } = e,
        s = N.R.useConfig({ location: "theme_trial_palette" }),
        l = (0, C.V)()?.subscriptionTrial?.skuId === ei.pe.TIER_2,
        o = s && l,
        { type: u, delay: _ } = a.useContext(ec),
        { analyticsLocations: f } = (0, m.Ay)(p.A.CLIENT_THEMES_THEME_SELECTOR),
        [S, O] = (0, d.yK)([w.A], () => [w.A.isPreview, w.A.gradientPreset?.id]),
        [R, y] = a.useState(!1),
        [D, b] = a.useState(-1),
        P = (0, d.bG)([I.Ay], () => I.Ay.useReducedMotion),
        M = "SETTINGS" === u,
        G = (0, T.GV)(),
        k = M && S ? G : void 0,
        F = M ? G : void 0;
    function B(e, t) {
        var n;
        if (
            ((0, U.bc)(e.id),
            eu({ isPersisted: !S, analyticsLocations: f, themeName: c.ju[e.id] }),
            S && "SETTINGS" === u
                ? ((n = e), (0, L.GQ)(n.theme), (0, g.nf)(g.HP.CLIENT_THEMES), (0, v.default)())
                : S
                  ? (0, L.GQ)(e.theme)
                  : (0, h.u_)({ backgroundGradientPresetId: e.id, theme: e.theme }, _),
            M && (0, x.cO)(),
            null != t)
        ) {
            if ((R && y(!1), t <= D || 0 === t)) return void b(0);
            b((e) => e + 1);
        }
    }
    return (
        a.useEffect(() => {
            ((D === et.Jm.length - 2 && "EDITOR" === u) || O === c.ju.EASTER_EGG) && y(!0);
        }, [D, u, O]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                M && (0, r.jsx)(A.A, { id: G, children: Q.intl.string(Q.t.JIZSqz) }),
                (0, r.jsx)(ee, {
                    size: i,
                    isDisabled: t,
                    ariaDescribedBy: F,
                    onSelect: () => {
                        ((0, g.nf)(g.HP.CUSTOM_THEME, {
                            from: "SETTINGS" === u ? g.xv.SETTING : g.xv.CLIENT_THEMES_EDITOR,
                        }),
                            "SETTINGS" === u && (0, v.default)());
                    },
                }),
                et.Jm.filter(et.Qm).map((e, n) =>
                    (0, r.jsx)(
                        K.MX,
                        {
                            size: i,
                            preset: e,
                            isSelected: O === e.id,
                            onSelect: () => B(e, n),
                            disabled: t,
                            tabIndex: 0 !== n || t ? void 0 : 0,
                            showBadge: !1,
                            showLockedBadge: !1,
                            hideSelectionBorder: o,
                            ariaDescribedBy: k,
                        },
                        e.id,
                    ),
                ),
                (function () {
                    if (!R) return null;
                    let e = et.ag[c.ju.EASTER_EGG];
                    return null == e
                        ? null
                        : (0, r.jsxs)("div", {
                              className: el.kG,
                              children: [
                                  (0, r.jsx)(K.MX, {
                                      size: i,
                                      preset: e,
                                      isSelected: O === c.ju.EASTER_EGG,
                                      onSelect: () => B(e),
                                      ariaDescribedBy: k,
                                  }),
                                  (0, r.jsx)(E.a, {
                                      importData: async function () {
                                          let { default: e } = await n.e(103408).then(n.t.bind(n, 707827, 19));
                                          return e;
                                      },
                                      shouldAnimate: !P,
                                      className: el._7,
                                  }),
                              ],
                          });
                })(),
            ],
        })
    );
}
function eh(e) {
    let { size: t, systemSelectorFirst: n, hideSystemSelector: i = !1 } = e,
        { type: s, delay: l } = a.useContext(ec),
        { analyticsLocations: o } = (0, m.Ay)(p.A.CLIENT_THEMES_THEME_SELECTOR),
        [c, u, _] = (0, d.yK)([y.A, D.Ay, w.A], () => [
            y.A.theme,
            null == w.A.gradientPreset && null == b.eh.getSetting().customUserThemeSettings,
            D.Ay.useSystemTheme === er.Q_.ON,
        ]);
    function E(e) {
        ((0, U.Py)(),
            eu({ isPersisted: !0, analyticsLocations: o, themeName: `default ${e}` }),
            (0, h.u_)({ theme: e }, l),
            "SETTINGS" === s && (0, x.cO)());
    }
    let A = !i && !0 === n;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            A &&
                (0, r.jsx)(K.zy, {
                    size: t,
                    theme: "system",
                    isSelected: u && _,
                    onSelect: () => E("system"),
                    tabIndex: 0,
                }),
            (0, r.jsx)(K.zy, {
                size: t,
                theme: es.NJ.LIGHT,
                isSelected: u && !_ && c === es.NJ.LIGHT,
                onSelect: () => E(es.NJ.LIGHT),
                tabIndex: A ? void 0 : 0,
            }),
            et.f5.map((e) =>
                (0, r.jsx)(K.zy, { size: t, theme: e, isSelected: u && !_ && c === e, onSelect: () => E(e) }, e),
            ),
            !i && !n && (0, r.jsx)(K.zy, { size: t, theme: "system", isSelected: u && _, onSelect: () => E("system") }),
        ],
    });
}
function eI(e) {
    let { type: t, children: n } = e,
        i = (0, T.GV)(),
        { ref: s, ...l } = (0, u._u)({ orientation: "horizontal", labelledBy: i }),
        o = a.useMemo(() => ({ type: t, delay: ed[t] }), [t]);
    return (0, r.jsx)(ec.Provider, {
        value: o,
        children: (0, r.jsx)("div", { ref: s, ...l, className: el.__invalid_container, children: n }),
    });
}
((eI.Basic = function (e) {
    let { className: t, hideSystemSelector: n, iconSize: i } = e;
    return (0, r.jsx)("section", {
        className: t,
        children: (0, r.jsx)(f.B, {
            direction: "horizontal",
            wrap: !0,
            gap: 8,
            style: { marginTop: 16 },
            children: (0, r.jsx)(eh, { hideSystemSelector: n, size: i }),
        }),
    });
}),
    (eI.Gradient = function (e) {
        let { className: t, renderCTAButtons: n, disabled: i = !1, isCoachmark: a, iconSize: s } = e;
        return (0, r.jsxs)("section", {
            className: t,
            children: [
                (0, r.jsx)(eA, { renderCTAButtons: n, isCoachmark: a }),
                (0, r.jsx)(f.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    style: { marginTop: 16 },
                    children: (0, r.jsx)(ef, { disabled: i, size: s }),
                }),
            ],
        });
    }),
    (eI.BasicAndGradient = function (e) {
        let { isEditor: t, className: n, renderCTAButtons: i, isCoachmark: a, iconSize: s } = e;
        return (0, r.jsxs)("section", {
            className: n,
            children: [
                !t && (0, r.jsx)(eA, { renderCTAButtons: i, isCoachmark: a }),
                t &&
                    a &&
                    (0, r.jsx)(_.D, {
                        className: el.tD,
                        variant: "heading-xs/semibold",
                        children: Q.intl.string(Q.t.POSLGY),
                    }),
                (0, r.jsxs)(f.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    justify: t ? "center" : "start",
                    style: { marginTop: 16 },
                    children: [
                        (0, r.jsx)(eh, { systemSelectorFirst: !0, size: s }),
                        (0, r.jsx)(ef, { disabled: !1, size: s }),
                    ],
                }),
            ],
        });
    }));
let ep = eI;
