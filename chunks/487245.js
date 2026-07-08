"use strict";
n.d(t, { t6: () => eE, Zg: () => e_, ew: () => eu, v0: () => ea, Ay: () => eh, X8: () => eo }), n(801541);
var i,
    r = n(627968),
    a = n(64700),
    s = n(503698),
    l = n.n(s),
    o = n(889137),
    d = n(17928),
    c = n(873298),
    u = n(785007),
    _ = n(534514),
    E = n(604121),
    A = n(140735),
    h = n(331322),
    I = n(817281),
    f = n(775602),
    p = n(793574),
    T = n(688810),
    m = n(793943),
    g = n(915089),
    S = n(87719),
    N = n(234419),
    C = n(811611),
    R = n(450232),
    O = n(973654),
    L = n(363195),
    D = n(742023),
    y = n(885386),
    v = n(830543),
    b = n(174459),
    M = n(823459),
    P = n(147248),
    U = n(650809),
    w = n(554146),
    G = n(661531),
    x = n(366010),
    k = n(812993),
    F = n(736653),
    V = n(826673),
    B = n(617617),
    H = n(74396),
    j = n(653523),
    W = n(558845),
    Y = n(367727),
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
        { isDisabled: n, onSelect: i, size: s, ariaDescribedBy: o } = e,
        c = (0, d.bG)([B.A], () => B.A.settings.appearance?.clientThemeSettings?.customUserThemeSettings),
        { shouldShowNewBadge: u, markNewBadgeAsDismissed: _ } =
            ((t = (0, V.JZ)(w.M.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE)),
            a.useEffect(() => {
                if (!t)
                    return (
                        (0, Y.Vh)(w.M.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE),
                        () => {
                            (0, W.pd)({ content: w.M.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE }, !1);
                        }
                    );
            }, [t]),
            {
                shouldShowNewBadge: !t,
                markNewBadgeAsDismissed: a.useCallback(() => {
                    (0, V.Dr)(w.M.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE, { dismissAction: K.i.TAKE_ACTION });
                }, []),
            }),
        E = (0, V.JZ)(w.M.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
        A = (0, F.Ay)(),
        h = (0, x.M)(A) ? q.Xu : q.VO,
        I = null != c && null != c.colors && c.colors.length > 0,
        f = (0, d.bG)([H.A], () => H.A.getSavedCustomTheme()),
        p = I || null != f,
        T = a.useMemo(() => {
            let e, t;
            if (I) (e = c.colors), (t = c.gradientAngle);
            else {
                if (null === f) return;
                (e = f.colors), (t = f.gradient_angle);
            }
            let n = e[0];
            return (
                e.length > 1 && (n = `linear-gradient(${t}deg, ${e.join(", ")})`),
                { background: `var(--background-gradient), ${n}` }
            );
        }, [I, c, f]),
        m = p ? G.A.unsafe_rawColors.WHITE.css : void 0,
        g = a.useCallback(() => {
            u && _(), i?.();
        }, [u, _, i]);
    return (0, r.jsxs)("div", {
        className: q.fC,
        children: [
            (0, r.jsxs)(j.S4, {
                onSelect: n ? void 0 : g,
                isSelected: !1,
                showSelectionCircle: I,
                size: s,
                name: z.intl.string($.default.KSBBpC),
                className: l()(q.kL, p && h, n && q.r9),
                tabIndex: 0,
                showBadge: !1,
                showLockedBadge: !1,
                style: T,
                ariaDescribedBy: o,
                children: [
                    !E && !p && (0, r.jsx)(Z, {}),
                    (0, r.jsx)("div", { className: q.JU }),
                    (0, r.jsx)(U.B, { color: m, className: q.vL }),
                ],
            }),
            u &&
                (0, r.jsx)(k.Lp, {
                    className: q.Ad,
                    text: z.intl.string(z.t.y2b7CA),
                    color: G.A.unsafe_rawColors.RED_430.css,
                }),
        ],
    });
}
var Q = n(385803),
    J = n(652215),
    ee = n(202541),
    et = n(185928),
    en = n(355097),
    ei = n(818348),
    er = n(702709),
    ea = (((i = {}).EDITOR = "EDITOR"), (i.SETTINGS = "SETTINGS"), i);
let es = Object.freeze({ EDITOR: en.Sb.SLOW_USER_ACTION, SETTINGS: en.Sb.INFREQUENT_USER_ACTION }),
    el = a.createContext({});
function eo(e) {
    let { isPersisted: t, themeName: n, analyticsLocations: i } = e;
    b.default.track(J.HAw.CLIENT_THEME_UPDATED, {
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
            textVariant: d = "text-md/medium",
        } = e,
        c = (0, o.YW)({ type: t, isPreview: n, isCoachmark: i })
            .with({ type: "EDITOR", isCoachmark: !0, isPreview: !0 }, () => z.intl.string(z.t.D29k16))
            .with({ type: "EDITOR", isCoachmark: !0 }, () => z.intl.string(z.t["8+vbqd"]))
            .otherwise(() => z.intl.string(z.t.hjV0fZ));
    return (0, r.jsxs)("div", {
        className: er.DD,
        children: [
            (0, r.jsx)(_.D, { "aria-label": c, className: l()(er.Qw, a), variant: d, children: c }),
            (0, r.jsx)(R.A, { className: l()(er.PC, s), size: "xs" }),
        ],
    });
}
function ec(e) {
    let { type: t, isPreview: n, isCoachmark: i } = e;
    if ((0, N.V)()?.subscription_trial?.sku_id === ee.pe.TIER_2 && n) return null;
    let a = (0, o.YW)({ type: t, isPreview: n, isCoachmark: i })
        .with({ type: "EDITOR", isPreview: !0 }, () => z.intl.format(z.t.G8yQXi, { onPremiumClick: S.e }))
        .with({ type: "EDITOR", isCoachmark: !0 }, () => z.intl.string(z.t.jmZiNu))
        .with({ type: "EDITOR", isPreview: !1 }, () => z.intl.string(z.t.dqDFwe))
        .with({ isPreview: !0 }, () => z.intl.format(z.t["DWIjJ/"], { onPremiumClick: S.e }))
        .otherwise(() => z.intl.string(z.t["np0X/u"]));
    return (0, r.jsx)(_.D, { variant: "text-sm/normal", className: er.W$, children: a });
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
        [_] = (0, d.yK)([P.A], () => [P.A.isPreview]),
        E = (0, N.V)()?.subscription_trial?.sku_id === ee.pe.TIER_2;
    return "EDITOR" === u && _ && E
        ? (0, r.jsx)(C.Ay, {
              type: ee.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
              subscriptionTier: ee.pe.TIER_2,
              children: z.intl.format(z.t.G8yQXi, { onPremiumClick: S.e }),
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
        { analyticsLocations: o } = (0, T.Ay)(p.A.CLIENT_THEMES_THEME_SELECTOR),
        [u, _] = (0, d.yK)([P.A], () => [P.A.isPreview, P.A.gradientPreset?.id]),
        [h, S] = a.useState(!1),
        [N, C] = a.useState(-1),
        R = (0, d.bG)([f.Ay], () => f.Ay.useReducedMotion),
        L = "SETTINGS" === s,
        D = (0, g.GV)(),
        y = L && u ? D : void 0,
        b = L ? D : void 0;
    function U(e, t) {
        var n;
        if (
            ((0, M.bc)(e.id),
            eo({ isPersisted: !u, analyticsLocations: o, themeName: c.ju[e.id] }),
            u && "SETTINGS" === s
                ? ((n = e), (0, O.GQ)(n.theme), (0, m.nf)(m.HP.CLIENT_THEMES), (0, v.default)())
                : u
                  ? (0, O.GQ)(e.theme)
                  : (0, I.u_)({ backgroundGradientPresetId: e.id, theme: e.theme }, l),
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
                L && (0, r.jsx)(A.A, { id: D, children: z.intl.string(z.t.JIZSqz) }),
                (0, r.jsx)(X, {
                    size: i,
                    isDisabled: t,
                    ariaDescribedBy: b,
                    onSelect: () => {
                        (0, m.nf)(m.HP.CUSTOM_THEME, {
                            from: "SETTINGS" === s ? m.xv.SETTING : m.xv.CLIENT_THEMES_EDITOR,
                        }),
                            "SETTINGS" === s && (0, v.default)();
                    },
                }),
                Q.Jm.filter((e) => {
                    let { id: t } = e;
                    return t !== c.ju.EASTER_EGG;
                }).map((e, n) =>
                    (0, r.jsx)(
                        j.MX,
                        {
                            size: i,
                            preset: e,
                            isSelected: _ === e.id,
                            onSelect: () => U(e, n),
                            disabled: t,
                            tabIndex: 0 !== n || t ? void 0 : 0,
                            showBadge: !1,
                            showLockedBadge: !1,
                            ariaDescribedBy: y,
                        },
                        e.id,
                    ),
                ),
                (function () {
                    if (!h) return null;
                    let e = Q.ag[c.ju.EASTER_EGG];
                    if (null == e) return null;
                    async function t() {
                        let { default: e } = await n.e("3408").then(n.t.bind(n, 707827, 19));
                        return e;
                    }
                    return (0, r.jsxs)("div", {
                        className: er.kG,
                        children: [
                            (0, r.jsx)(j.MX, {
                                size: i,
                                preset: e,
                                isSelected: _ === c.ju.EASTER_EGG,
                                onSelect: () => U(e),
                                ariaDescribedBy: y,
                            }),
                            (0, r.jsx)(E.a, { importData: t, shouldAnimate: !R, className: er._7 }),
                        ],
                    });
                })(),
            ],
        })
    );
}
function eE(e) {
    let { size: t, systemSelectorFirst: n, hideSystemSelector: i = !1 } = e,
        { delay: s } = a.useContext(el),
        { analyticsLocations: l } = (0, T.Ay)(p.A.CLIENT_THEMES_THEME_SELECTOR),
        [o, c, u] = (0, d.yK)([L.A, D.Ay, P.A], () => [
            L.A.theme,
            null == P.A.gradientPreset && null == y.eh.getSetting().customUserThemeSettings,
            D.Ay.useSystemTheme === et.Q_.ON,
        ]);
    function _(e) {
        (0, M.Py)(),
            eo({ isPersisted: !0, analyticsLocations: l, themeName: `default ${e}` }),
            (0, I.u_)({ theme: e }, s);
    }
    let E = !i && !0 === n;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            E &&
                (0, r.jsx)(j.zy, {
                    size: t,
                    theme: "system",
                    isSelected: c && u,
                    onSelect: () => _("system"),
                    tabIndex: 0,
                }),
            (0, r.jsx)(j.zy, {
                size: t,
                theme: ei.NJ.LIGHT,
                isSelected: c && !u && o === ei.NJ.LIGHT,
                onSelect: () => _(ei.NJ.LIGHT),
                tabIndex: E ? void 0 : 0,
            }),
            (0, r.jsx)(j.zy, {
                size: t,
                theme: ei.NJ.DARK,
                isSelected: c && !u && o === ei.NJ.DARK,
                onSelect: () => _(ei.NJ.DARK),
            }),
            (0, r.jsx)(j.zy, {
                size: t,
                theme: ei.NJ.DARKER,
                isSelected: c && !u && o === ei.NJ.DARKER,
                onSelect: () => _(ei.NJ.DARKER),
            }),
            (0, r.jsx)(j.zy, {
                size: t,
                theme: ei.NJ.MIDNIGHT,
                isSelected: c && !u && o === ei.NJ.MIDNIGHT,
                onSelect: () => _(ei.NJ.MIDNIGHT),
            }),
            !i && !n && (0, r.jsx)(j.zy, { size: t, theme: "system", isSelected: c && u, onSelect: () => _("system") }),
        ],
    });
}
function eA(e) {
    let { type: t, children: n } = e,
        i = (0, g.GV)(),
        { ref: s, ...l } = (0, u._u)({ orientation: "horizontal", labelledBy: i }),
        o = a.useMemo(() => ({ type: t, delay: es[t] }), [t]);
    return (0, r.jsx)(el.Provider, {
        value: o,
        children: (0, r.jsx)("div", { ref: s, ...l, className: er.__invalid_container, children: n }),
    });
}
(eA.Basic = function (e) {
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
                        variant: "heading-sm/semibold",
                        children: z.intl.string(z.t.POSLGY),
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
    });
let eh = eA;
