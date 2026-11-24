(t.r(s), t.d(s, { default: () => eI }), t(801541));
var i = t(477900),
    n = t(582128),
    r = t(503698),
    a = t.n(r),
    l = t(889137),
    c = t(855986),
    o = t(873298),
    d = t(821609),
    u = t(462887),
    E = t(534514),
    m = t(939249),
    T = t(285796),
    _ = t(707554),
    I = t(95362),
    A = t(817281),
    h = t(82495),
    S = t(775602),
    f = t(793574),
    x = t(688810),
    p = t(793943),
    N = t(562860),
    j = t(248797),
    v = t(996254),
    C = t(739053),
    M = t(82498),
    P = t(620295),
    y = t(77528),
    D = t(792656),
    R = t(521440),
    b = t(450232),
    g = t(973654),
    k = t(780964),
    H = t(141343),
    L = t(766075),
    O = t(186111),
    U = t(287809),
    w = t(129230),
    G = t(448645),
    V = t(823459),
    W = t(47671),
    z = t(46075),
    Y = t(11029),
    X = t(964404),
    B = t(617617),
    $ = t(652215),
    q = t(682901),
    K = t(185928);
function F() {
    let { previewPaneVariant: e } = (0, c.cf)([W.A], () => ({
            previewPaneVariant: W.A.isPreview ? q.tz.FREE : q.tz.PREMIUM_STANDARD,
        })),
        s = (0, c.bG)([B.A], () => {
            let e = B.A.settings.appearance?.theme;
            return `default ${e === o.Sx.LIGHT ? $.NJ8.LIGHT : $.NJ8.DARK}`;
        });
    return (0, n.useCallback)(
        (t) => {
            w.default.track(t, { preview_pane_variant: e, original_theme: s });
        },
        [e, s],
    );
}
var J = t(613412),
    Z = t(834730),
    Q = t(139286),
    ee = t(738419),
    es = t(958904),
    et = t(792996),
    ei = t(663635),
    en = t(114149);
function er() {
    let { analyticsLocations: e } = (0, x.Ay)();
    return (
        (0, Q.A)({
            name: J.ImpressionNames.CUSTOM_THEMES_PREVIEW_THEMES_BANNER,
            type: J.ImpressionTypes.VIEW,
            properties: { location_stack: e },
        }),
        (0, i.jsxs)("div", {
            className: ei.kL,
            children: [
                (0, i.jsxs)("div", {
                    className: ei.r$,
                    children: [
                        (0, i.jsx)("img", { src: en.A, className: ei._e, alt: "" }),
                        (0, i.jsxs)("div", {
                            className: ei.P_,
                            children: [
                                (0, i.jsx)(Z.E, {
                                    variant: "body-md/semibold",
                                    color: "text-strong",
                                    children: et.intl.string(es.default.XP4jzJ),
                                }),
                                (0, i.jsx)(Z.E, {
                                    variant: "body-sm/medium",
                                    color: "text-muted",
                                    children: et.intl.string(es.default.MJYvmG),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)(d.$, {
                    variant: "secondary",
                    size: "sm",
                    text: et.intl.string(es.default.eGxkmm),
                    onClick: function () {
                        ((0, ee.b0)(ee.G8.PREVIEW_THEMES),
                            (0, p.nf)(p.HP.CUSTOM_THEME, { from: p.xv.CLIENT_THEMES_EDITOR }));
                    },
                    fullWidth: !0,
                }),
            ],
        })
    );
}
var ea = t(270746),
    el = t(385803),
    ec = t(49999),
    eo = t(211824),
    ed = t(737440);
function eu(e) {
    let { iconSize: s } = e,
        t = (0, j.R)();
    return t === eo.S9.HIDDEN
        ? null
        : (0, i.jsx)(N.A, { type: ea.v0.EDITOR, isLocked: t === eo.S9.LOCKED, iconSize: s, className: ed.Gg });
}
function eE() {
    return (0, i.jsx)("div", {
        className: ed.nV,
        children: (0, i.jsxs)("div", {
            className: ed.mR,
            children: [
                (0, i.jsx)(b.A, { className: ed.PC, size: "md" }),
                (0, i.jsx)(E.D, {
                    variant: "heading-sm/semibold",
                    color: "text-overlay-light",
                    children: et.intl.string(et.t.POSLGY),
                }),
            ],
        }),
    });
}
function em(e) {
    let { markAsDismissed: s } = e,
        t = F();
    return (0, i.jsxs)("div", {
        className: ed.nV,
        children: [
            (0, i.jsx)(m.D, {
                className: ed.VV,
                onClick: function () {
                    (null != s && s(ec.i.DISMISS), t($.HAw.CLIENT_THEME_PREVIEW_CLOSED), (0, Y.DS)());
                },
                children: (0, i.jsx)(T.CircleXIcon, { size: "md", color: "currentColor", className: ed.P0 }),
            }),
            (0, i.jsx)(E.D, { variant: "heading-lg/semibold", children: et.intl.string(et.t["xSR+a/"]) }),
        ],
    });
}
function eT(e) {
    let { onSubscribeSuccess: s, markAsDismissed: t } = e,
        { analyticsLocations: n } = (0, x.Ay)(f.A.CLIENT_THEMES_EDITOR),
        [r, a] = (0, c.yK)([U.default, W.A], () => [W.A.gradientPreset, G.Ay.isPremium(U.default.getCurrentUser())]),
        l = (0, H.V)(),
        d = (0, y.V)(),
        E = P.R.useConfig({ location: "theme_preview_trial_cta" }),
        m = (0, G.FY)({
            intervalType: d?.subscriptionTrial?.interval,
            intervalCount: d?.subscriptionTrial?.intervalCount,
        }),
        T = a
            ? et.intl.string(et.t.IJI7yk)
            : d?.subscriptionTrial?.skuId === q.pe.TIER_2
              ? m
              : et.intl.string(et.t.mr4K7D);
    function _(e) {
        if (e && (s?.(), null != t && t(ec.i.PRIMARY), null != r)) {
            if (l) {
                let e = (0, u.M)(r.theme) ? K.Fc.DARK : K.Fc.LIGHT;
                ((0, ea.X8)({ isPersisted: !0, themeName: `${e}-mode-${o.ju[r.id]}`, analyticsLocations: n }),
                    (0, g.NA)({ [e]: r.theme }),
                    (0, g.qX)(e, { backgroundGradientPresetId: r.id }),
                    (0, V.S8)(),
                    (0, Y.DS)());
                return;
            }
            ((0, ea.X8)({ isPersisted: !0, themeName: o.ju[r.id], analyticsLocations: n }),
                (0, A.u_)({ backgroundGradientPresetId: r.id, theme: r.theme }),
                (0, g.XG)());
        }
    }
    return E && d?.subscriptionTrial?.skuId === q.pe.TIER_2
        ? (0, i.jsx)(z.r, {
              trialOffer: d,
              premiumModalAnalyticsLocation: { object: $.ZSU.BUTTON_CTA, objectType: $.btD.BUY },
              onSubscribeModalClose: _,
          })
        : (0, i.jsx)(D.A, {
              subscriptionTier: q.pe.TIER_2,
              defaultTextOverride: T,
              premiumModalAnalyticsLocation: { object: $.ZSU.BUTTON_CTA, objectType: $.btD.BUY },
              onSubscribeModalClose: _,
              fullWidth: !0,
          });
}
function e_(e) {
    let { markAsDismissed: s, isCoachmark: t } = e,
        { isPreview: r } = (0, c.cf)([W.A], () => ({ isPreview: W.A.isPreview })),
        [a, o] = n.useState(!1),
        u = F(),
        E = (0, v.X)(
            { no: et.t["3D5yo/"], "sv-SE": et.t["3D5yo/"], uk: et.t["3D5yo/"], de: et.t["3D5yo/"] },
            et.t["dqH+qr"],
        ),
        m = (0, l.YW)({ isPreview: r, isCoachmark: t, forceShowCloseButton: a })
            .with({ isCoachmark: !0 }, { forceShowCloseButton: !0 }, () => et.intl.string(et.t.cpT0Cq))
            .with({ isPreview: !0 }, () => E)
            .otherwise(() => et.intl.string(et.t.Olc2K3)),
        T = (0, i.jsx)(eT, {
            onSubscribeSuccess: () => {
                o(!0);
            },
            markAsDismissed: s,
        });
    return (0, i.jsxs)("div", {
        className: ed.N3,
        children: [
            r &&
                (0, i.jsxs)("div", {
                    className: ed.rV,
                    children: [
                        (0, i.jsx)(R.l, {
                            size: "md",
                            className: ed.Tf,
                            location: f.A.PREMIUM_WISHLIST_CLIENT_THEMES_EDITOR,
                        }),
                        T,
                    ],
                }),
            (0, i.jsx)(d.$, {
                fullWidth: !0,
                onClick: function () {
                    (null != s && s(ec.i.DISMISS),
                        u($.HAw.CLIENT_THEME_PREVIEW_CLOSED),
                        (0, Y.DS)(),
                        t || (0, L.openUserSettings)(k.X.APPEARANCE_THEME_CATEGORY));
                },
                variant: "secondary",
                text: m,
            }),
        ],
    });
}
function eI(e) {
    let { markAsDismissed: s, showClientThemesCoachmark: t, iconSize: r = el.ni.SIZE_60 } = e,
        { analyticsLocations: l } = (0, x.Ay)(f.A.CLIENT_THEMES_EDITOR),
        o = (0, c.bG)([O.A], () => O.A.hasLayers()),
        { isPreview: d, shouldEditorAnimate: u } = (0, c.cf)([W.A, S.Ay], () => ({
            isPreview: W.A.isPreview,
            shouldEditorAnimate: t && !S.Ay.useReducedMotion,
        })),
        E = (0, p.fy)().activePanel === p.HP.CLIENT_THEMES,
        m = F();
    (n.useEffect(() => m($.HAw.CLIENT_THEME_PREVIEW_VIEWED), [m]),
        n.useEffect(() => {
            d &&
                (w.default.track($.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: q.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                    location_stack: l,
                }),
                (0, C.sq)($.U7l.PREMIUM_UPSELL_VIEWED, l, () => (0, M.uq)(q.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT)));
        }, [d, l]));
    let T = (() => {
            let e = (0, c.bG)([W.A], () => W.A.gradientPreset),
                s = (0, c.bG)([X.Ay], () => X.Ay.useSystemTheme === K.Q_.ON),
                [t, i] = (0, n.useState)(s);
            return (
                (0, n.useEffect)(() => {
                    null == e && i(s);
                }, [e, s]),
                (0, n.useCallback)(() => {
                    null == e || ((0, V.S8)(), (0, g.XG)(), t && (0, g.k7)(K.Q_.ON));
                }, [e, t])
            );
        })(),
        A = (0, h.A)(null, d ? T : $.tEg);
    n.useEffect(() => {
        if (d && !E) return T;
    }, [d, E, T]);
    let N = n.useMemo(
        () => ({
            "--custom-client-themes-editor-content-width": `${3 * r + 48}px`,
            "--custom-client-themes-editor-padding": "16px",
        }),
        [r],
    );
    return o
        ? null
        : (0, i.jsx)(x.f5, {
              value: l,
              children: (0, i.jsx)("div", {
                  ref: A,
                  "data-app-right-panel": !0,
                  className: a()(ed.HS, u ? ed.hP : null),
                  style: N,
                  children: (0, i.jsxs)(_.F, {
                      children: [
                          t ? (0, i.jsx)(eE, {}) : (0, i.jsx)(em, { markAsDismissed: s }),
                          (0, i.jsx)(er, {}),
                          (0, i.jsx)(I.Ip, {
                              className: ed.sV,
                              children: (0, i.jsxs)(ea.Ay, {
                                  type: ea.v0.EDITOR,
                                  children: [
                                      !d && (0, i.jsx)(ea.Ay.Basic, { className: ed.Gg, iconSize: r }),
                                      (0, i.jsx)(eu, { iconSize: r }),
                                      (0, i.jsx)(ea.Ay.Gradient, { className: ed.Gg, isCoachmark: t, iconSize: r }),
                                  ],
                              }),
                          }),
                          (0, i.jsx)(e_, { markAsDismissed: s, isCoachmark: t }),
                      ],
                  }),
              }),
          });
}
