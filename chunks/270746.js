(n.d(t, { t6: () => eE, Zg: () => e_, ew: () => eu, v0: () => ea, Ay: () => eh, X8: () => eo }), n(801541));
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
    h = n(331322),
    f = n(817281),
    I = n(775602),
    p = n(793574),
    m = n(688810),
    g = n(793943),
    T = n(915089),
    S = n(87719),
    N = n(77528),
    C = n(811611),
    O = n(450232),
    R = n(973654),
    L = n(413599),
    y = n(964404),
    D = n(253932),
    b = n(830543),
    v = n(129230),
    P = n(823459),
    M = n(850333),
    U = n(11029),
    w = n(650809),
    G = n(554146),
    x = n(646514),
    k = n(366010),
    F = n(805251),
    B = n(736653),
    V = n(826673),
    H = n(74396),
    j = n(653523),
    W = n(517057),
    Y = n(543862),
    K = n(49999),
    $ = n(958904),
    X = n(792996),
    z = n(643790);
function q() {
    return (0, r.jsxs)("svg", {
        className: z.JR,
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
function Z(e) {
    let t,
        { isDisabled: n, onSelect: i, size: s, ariaDescribedBy: o } = e,
        c = D.eh.useSetting().customUserThemeSettings,
        { shouldShowNewBadge: u, markNewBadgeAsDismissed: _ } =
            ((t = (0, V.HX)(G.M.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE)),
            a.useEffect(() => {
                if (!t)
                    return (
                        (0, Y.Vh)(G.M.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE),
                        () => {
                            (0, W.pd)({ content: G.M.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE }, !1);
                        }
                    );
            }, [t]),
            {
                shouldShowNewBadge: !t,
                markNewBadgeAsDismissed: a.useCallback(() => {
                    (0, V.Dr)(G.M.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE, { dismissAction: K.i.TAKE_ACTION });
                }, []),
            }),
        E = (0, V.HX)(G.M.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
        A = (0, B.Ay)(),
        h = (0, k.M)(A) ? z.Xu : z.VO,
        f = null != c && null != c.colors && c.colors.length > 0,
        I = (0, d.bG)([H.A], () => H.A.getSavedCustomTheme()),
        p = f || null != I,
        m = a.useMemo(() => {
            let e, t;
            if (f) ((e = c.colors), (t = c.gradientAngle));
            else {
                if (null === I) return;
                ((e = I.colors), (t = I.gradient_angle));
            }
            let n = e[0];
            return (
                e.length > 1 && (n = `linear-gradient(${t}deg, ${e.join(", ")})`),
                { background: `var(--background-gradient), ${n}` }
            );
        }, [f, c, I]),
        g = p ? x.A.unsafe_rawColors.WHITE.css : void 0,
        T = a.useCallback(() => {
            (u && _(), i?.());
        }, [u, _, i]);
    return (0, r.jsxs)("div", {
        className: z.fC,
        children: [
            (0, r.jsxs)(j.S4, {
                onSelect: n ? void 0 : T,
                isSelected: !1,
                showSelectionCircle: f,
                size: s,
                name: X.intl.string($.default.KSBBpC),
                className: l()(z.kL, p && h, n && z.r9),
                tabIndex: 0,
                showBadge: !1,
                showLockedBadge: !1,
                style: m,
                ariaDescribedBy: o,
                children: [
                    !E && !p && (0, r.jsx)(q, {}),
                    (0, r.jsx)("div", { className: z.JU }),
                    (0, r.jsx)(w.PaintPaletteIcon, { color: g, className: z.vL }),
                ],
            }),
            u && (0, r.jsx)("div", { className: z.Ad, children: (0, r.jsx)(F.E, { type: "new", variant: "primary" }) }),
        ],
    });
}
var Q = n(385803),
    J = n(652215),
    ee = n(682901),
    et = n(185928),
    en = n(355097),
    ei = n(818348),
    er = n(468082),
    ea = (((i = {}).EDITOR = "EDITOR"), (i.SETTINGS = "SETTINGS"), i);
let es = Object.freeze({ EDITOR: en.Sb.SLOW_USER_ACTION, SETTINGS: en.Sb.INFREQUENT_USER_ACTION }),
    el = a.createContext({});
function eo(e) {
    let { isPersisted: t, themeName: n, analyticsLocations: i } = e;
    v.default.track(J.HAw.CLIENT_THEME_UPDATED, {
        feature_name: ee.Ae.CLIENT_THEME,
        theme_name: n,
        is_persisted: t,
        location_stack: i,
    });
}
function ed(e) {
    let {
            type: t,
            isPreview: n,
            isCoachmark: i,
            textClassName: a,
            iconClassName: s,
            textVariant: d = "body-md/medium",
        } = e,
        c = (0, o.YW)({ type: t, isPreview: n, isCoachmark: i })
            .with({ type: "EDITOR", isCoachmark: !0, isPreview: !0 }, () => X.intl.string(X.t.D29k16))
            .with({ type: "EDITOR", isCoachmark: !0 }, () => X.intl.string(X.t["8+vbqd"]))
            .otherwise(() => X.intl.string(X.t.hjV0fZ));
    return (0, r.jsxs)("div", {
        className: er.DD,
        children: [
            (0, r.jsx)(_.D, { "aria-label": c, className: l()(er.Qw, a), variant: d, children: c }),
            (0, r.jsx)(O.A, { className: l()(er.PC, s), size: "xs" }),
        ],
    });
}
function ec(e) {
    let { type: t, isPreview: n, isCoachmark: i } = e;
    if ((0, N.V)()?.subscriptionTrial?.skuId === ee.pe.TIER_2 && n) return null;
    let a = (0, o.YW)({ type: t, isPreview: n, isCoachmark: i })
        .with({ type: "EDITOR", isPreview: !0 }, () => X.intl.format(X.t.G8yQXi, { onPremiumClick: S.e }))
        .with({ type: "EDITOR", isCoachmark: !0 }, () => X.intl.string(X.t.jmZiNu))
        .with({ type: "EDITOR", isPreview: !1 }, () => X.intl.string(X.t.dqDFwe))
        .with({ isPreview: !0 }, () => X.intl.format(X.t["DWIjJ/"], { onPremiumClick: S.e }))
        .otherwise(() => X.intl.string(X.t["np0X/u"]));
    return (0, r.jsx)(_.D, { variant: "body-sm/normal", className: er.W$, children: a });
}
function eu(e) {
    let {
            renderCTAButtons: t,
            isCoachmark: n,
            titleTextVariant: i,
            headingClassName: s,
            titleClassName: o,
            titleIconClassName: c,
        } = e,
        { type: u } = a.useContext(el),
        [_] = (0, d.yK)([M.A], () => [M.A.isPreview]),
        E = (0, N.V)()?.subscriptionTrial?.skuId === ee.pe.TIER_2;
    return "EDITOR" === u && _ && E
        ? (0, r.jsx)(C.Ay, {
              type: ee.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
              subscriptionTier: ee.pe.TIER_2,
              children: X.intl.format(X.t.G8yQXi, { onPremiumClick: S.e }),
          })
        : (0, r.jsxs)("div", {
              className: er.wx,
              children: [
                  (0, r.jsxs)("div", {
                      className: l()(er.so, s),
                      children: [
                          (0, r.jsx)(ed, {
                              type: u,
                              isPreview: _,
                              isCoachmark: n,
                              textVariant: i,
                              textClassName: o,
                              iconClassName: c,
                          }),
                          (0, r.jsx)(ec, { type: u, isPreview: _, isCoachmark: n }),
                      ],
                  }),
                  t?.(),
              ],
          });
}
function e_(e) {
    let { disabled: t, size: i } = e,
        { type: s, delay: l } = a.useContext(el),
        { analyticsLocations: o } = (0, m.Ay)(p.A.CLIENT_THEMES_THEME_SELECTOR),
        [u, _] = (0, d.yK)([M.A], () => [M.A.isPreview, M.A.gradientPreset?.id]),
        [h, S] = a.useState(!1),
        [N, C] = a.useState(-1),
        O = (0, d.bG)([I.Ay], () => I.Ay.useReducedMotion),
        L = "SETTINGS" === s,
        y = (0, T.GV)(),
        D = L && u ? y : void 0,
        v = L ? y : void 0;
    function w(e, t) {
        var n;
        if (
            ((0, P.bc)(e.id),
            eo({ isPersisted: !u, analyticsLocations: o, themeName: c.ju[e.id] }),
            u && "SETTINGS" === s
                ? ((n = e), (0, R.GQ)(n.theme), (0, g.nf)(g.HP.CLIENT_THEMES), (0, b.default)())
                : u
                  ? (0, R.GQ)(e.theme)
                  : (0, f.u_)({ backgroundGradientPresetId: e.id, theme: e.theme }, l),
            L && (0, U.cO)(),
            null != t)
        ) {
            if ((h && S(!1), t <= N || 0 === t)) return void C(0);
            C((e) => e + 1);
        }
    }
    return (
        a.useEffect(() => {
            ((N === Q.Jm.length - 2 && "EDITOR" === s) || _ === c.ju.EASTER_EGG) && S(!0);
        }, [N, s, _]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                L && (0, r.jsx)(A.A, { id: y, children: X.intl.string(X.t.JIZSqz) }),
                (0, r.jsx)(Z, {
                    size: i,
                    isDisabled: t,
                    ariaDescribedBy: v,
                    onSelect: () => {
                        ((0, g.nf)(g.HP.CUSTOM_THEME, {
                            from: "SETTINGS" === s ? g.xv.SETTING : g.xv.CLIENT_THEMES_EDITOR,
                        }),
                            "SETTINGS" === s && (0, b.default)());
                    },
                }),
                Q.Jm.filter(Q.Qm).map((e, n) =>
                    (0, r.jsx)(
                        j.MX,
                        {
                            size: i,
                            preset: e,
                            isSelected: _ === e.id,
                            onSelect: () => w(e, n),
                            disabled: t,
                            tabIndex: 0 !== n || t ? void 0 : 0,
                            showBadge: !1,
                            showLockedBadge: !1,
                            ariaDescribedBy: D,
                        },
                        e.id,
                    ),
                ),
                (function () {
                    if (!h) return null;
                    let e = Q.ag[c.ju.EASTER_EGG];
                    return null == e
                        ? null
                        : (0, r.jsxs)("div", {
                              className: er.kG,
                              children: [
                                  (0, r.jsx)(j.MX, {
                                      size: i,
                                      preset: e,
                                      isSelected: _ === c.ju.EASTER_EGG,
                                      onSelect: () => w(e),
                                      ariaDescribedBy: D,
                                  }),
                                  (0, r.jsx)(E.a, {
                                      importData: async function () {
                                          let { default: e } = await n.e(103408).then(n.t.bind(n, 707827, 19));
                                          return e;
                                      },
                                      shouldAnimate: !O,
                                      className: er._7,
                                  }),
                              ],
                          });
                })(),
            ],
        })
    );
}
function eE(e) {
    let { size: t, systemSelectorFirst: n, hideSystemSelector: i = !1 } = e,
        { type: s, delay: l } = a.useContext(el),
        { analyticsLocations: o } = (0, m.Ay)(p.A.CLIENT_THEMES_THEME_SELECTOR),
        [c, u, _] = (0, d.yK)([L.A, y.Ay, M.A], () => [
            L.A.theme,
            null == M.A.gradientPreset && null == D.eh.getSetting().customUserThemeSettings,
            y.Ay.useSystemTheme === et.Q_.ON,
        ]);
    function E(e) {
        ((0, P.Py)(),
            eo({ isPersisted: !0, analyticsLocations: o, themeName: `default ${e}` }),
            (0, f.u_)({ theme: e }, l),
            "SETTINGS" === s && (0, U.cO)());
    }
    let A = !i && !0 === n;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            A &&
                (0, r.jsx)(j.zy, {
                    size: t,
                    theme: "system",
                    isSelected: u && _,
                    onSelect: () => E("system"),
                    tabIndex: 0,
                }),
            (0, r.jsx)(j.zy, {
                size: t,
                theme: ei.NJ.LIGHT,
                isSelected: u && !_ && c === ei.NJ.LIGHT,
                onSelect: () => E(ei.NJ.LIGHT),
                tabIndex: A ? void 0 : 0,
            }),
            Q.f5.map((e) =>
                (0, r.jsx)(j.zy, { size: t, theme: e, isSelected: u && !_ && c === e, onSelect: () => E(e) }, e),
            ),
            !i && !n && (0, r.jsx)(j.zy, { size: t, theme: "system", isSelected: u && _, onSelect: () => E("system") }),
        ],
    });
}
function eA(e) {
    let { type: t, children: n } = e,
        i = (0, T.GV)(),
        { ref: s, ...l } = (0, u._u)({ orientation: "horizontal", labelledBy: i }),
        o = a.useMemo(() => ({ type: t, delay: es[t] }), [t]);
    return (0, r.jsx)(el.Provider, {
        value: o,
        children: (0, r.jsx)("div", { ref: s, ...l, className: er.__invalid_container, children: n }),
    });
}
((eA.Basic = function (e) {
    let { className: t, hideSystemSelector: n, iconSize: i } = e;
    return (0, r.jsx)("section", {
        className: t,
        children: (0, r.jsx)(h.B, {
            direction: "horizontal",
            wrap: !0,
            gap: 8,
            style: { marginTop: 16 },
            children: (0, r.jsx)(eE, { hideSystemSelector: n, size: i }),
        }),
    });
}),
    (eA.Gradient = function (e) {
        let { className: t, renderCTAButtons: n, disabled: i = !1, isCoachmark: a, iconSize: s } = e;
        return (0, r.jsxs)("section", {
            className: t,
            children: [
                (0, r.jsx)(eu, { renderCTAButtons: n, isCoachmark: a }),
                (0, r.jsx)(h.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    style: { marginTop: 16 },
                    children: (0, r.jsx)(e_, { disabled: i, size: s }),
                }),
            ],
        });
    }),
    (eA.BasicAndGradient = function (e) {
        let { isEditor: t, className: n, renderCTAButtons: i, isCoachmark: a, iconSize: s } = e;
        return (0, r.jsxs)("section", {
            className: n,
            children: [
                !t && (0, r.jsx)(eu, { renderCTAButtons: i, isCoachmark: a }),
                t &&
                    a &&
                    (0, r.jsx)(_.D, {
                        className: er.tD,
                        variant: "heading-xs/semibold",
                        children: X.intl.string(X.t.POSLGY),
                    }),
                (0, r.jsxs)(h.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    justify: t ? "center" : "start",
                    style: { marginTop: 16 },
                    children: [
                        (0, r.jsx)(eE, { systemSelectorFirst: !0, size: s }),
                        (0, r.jsx)(e_, { disabled: !1, size: s }),
                    ],
                }),
            ],
        });
    }));
let eh = eA;
