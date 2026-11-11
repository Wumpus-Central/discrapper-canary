(t.r(s), t.d(s, { default: () => eT }), t(801541));
var i = t(477900),
    n = t(582128),
    r = t(503698),
    l = t.n(r),
    a = t(889137),
    c = t(855986),
    d = t(873298),
    o = t(821609),
    E = t(462887),
    u = t(534514),
    m = t(939249),
    T = t(285796),
    _ = t(707554),
    I = t(95362),
    A = t(817281),
    h = t(82495),
    S = t(775602),
    f = t(793574),
    x = t(688810),
    N = t(793943),
    v = t(562860),
    j = t(248797),
    p = t(996254),
    P = t(739053),
    M = t(82498),
    C = t(77528),
    D = t(792656),
    y = t(521440),
    R = t(450232),
    g = t(973654),
    k = t(780964),
    H = t(141343),
    b = t(766075),
    L = t(186111),
    G = t(287809),
    O = t(129230),
    w = t(448645),
    U = t(823459),
    V = t(47671),
    W = t(11029),
    z = t(964404),
    X = t(617617),
    Y = t(652215),
    $ = t(682901),
    q = t(185928);
function K() {
    let { previewPaneVariant: e } = (0, c.cf)([V.A], () => ({
            previewPaneVariant: V.A.isPreview ? $.tz.FREE : $.tz.PREMIUM_STANDARD,
        })),
        s = (0, c.bG)([X.A], () => {
            let e = X.A.settings.appearance?.theme;
            return `default ${e === d.Sx.LIGHT ? Y.NJ8.LIGHT : Y.NJ8.DARK}`;
        });
    return (0, n.useCallback)(
        (t) => {
            O.default.track(t, { preview_pane_variant: e, original_theme: s });
        },
        [e, s],
    );
}
var B = t(613412),
    F = t(834730),
    J = t(139286),
    Q = t(738419),
    Z = t(958904),
    ee = t(792996),
    es = t(663635),
    et = t(114149);
function ei() {
    let { analyticsLocations: e } = (0, x.Ay)();
    return (
        (0, J.A)({
            name: B.ImpressionNames.CUSTOM_THEMES_PREVIEW_THEMES_BANNER,
            type: B.ImpressionTypes.VIEW,
            properties: { location_stack: e },
        }),
        (0, i.jsxs)("div", {
            className: es.kL,
            children: [
                (0, i.jsxs)("div", {
                    className: es.r$,
                    children: [
                        (0, i.jsx)("img", { src: et.A, className: es._e, alt: "" }),
                        (0, i.jsxs)("div", {
                            className: es.P_,
                            children: [
                                (0, i.jsx)(F.E, {
                                    variant: "body-md/semibold",
                                    color: "text-strong",
                                    children: ee.intl.string(Z.default.XP4jzJ),
                                }),
                                (0, i.jsx)(F.E, {
                                    variant: "body-sm/medium",
                                    color: "text-muted",
                                    children: ee.intl.string(Z.default.MJYvmG),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)(o.$, {
                    variant: "secondary",
                    size: "sm",
                    text: ee.intl.string(Z.default.eGxkmm),
                    onClick: function () {
                        ((0, Q.b0)(Q.G8.PREVIEW_THEMES),
                            (0, N.nf)(N.HP.CUSTOM_THEME, { from: N.xv.CLIENT_THEMES_EDITOR }));
                    },
                    fullWidth: !0,
                }),
            ],
        })
    );
}
var en = t(270746),
    er = t(385803),
    el = t(49999),
    ea = t(211824),
    ec = t(737440);
function ed(e) {
    let { iconSize: s } = e,
        t = (0, j.R)();
    return t === ea.S9.HIDDEN
        ? null
        : (0, i.jsx)(v.A, { type: en.v0.EDITOR, isLocked: t === ea.S9.LOCKED, iconSize: s, className: ec.Gg });
}
function eo() {
    return (0, i.jsx)("div", {
        className: ec.nV,
        children: (0, i.jsxs)("div", {
            className: ec.mR,
            children: [
                (0, i.jsx)(R.A, { className: ec.PC, size: "md" }),
                (0, i.jsx)(u.D, {
                    variant: "heading-sm/semibold",
                    color: "text-overlay-light",
                    children: ee.intl.string(ee.t.POSLGY),
                }),
            ],
        }),
    });
}
function eE(e) {
    let { markAsDismissed: s } = e,
        t = K();
    return (0, i.jsxs)("div", {
        className: ec.nV,
        children: [
            (0, i.jsx)(m.D, {
                className: ec.VV,
                onClick: function () {
                    (null != s && s(el.i.DISMISS), t(Y.HAw.CLIENT_THEME_PREVIEW_CLOSED), (0, W.DS)());
                },
                children: (0, i.jsx)(T.CircleXIcon, { size: "md", color: "currentColor", className: ec.P0 }),
            }),
            (0, i.jsx)(u.D, { variant: "heading-lg/semibold", children: ee.intl.string(ee.t["xSR+a/"]) }),
        ],
    });
}
function eu(e) {
    let { onSubscribeSuccess: s, markAsDismissed: t } = e,
        { analyticsLocations: n } = (0, x.Ay)(f.A.CLIENT_THEMES_EDITOR),
        [r, l] = (0, c.yK)([G.default, V.A], () => [V.A.gradientPreset, w.Ay.isPremium(G.default.getCurrentUser())]),
        a = (0, H.V)(),
        o = (0, C.V)(),
        u = (0, w.FY)({
            intervalType: o?.subscriptionTrial?.interval,
            intervalCount: o?.subscriptionTrial?.intervalCount,
        }),
        m = l
            ? ee.intl.string(ee.t.IJI7yk)
            : o?.subscriptionTrial?.skuId === $.pe.TIER_2
              ? u
              : ee.intl.string(ee.t.mr4K7D);
    return (0, i.jsx)(D.A, {
        subscriptionTier: $.pe.TIER_2,
        defaultTextOverride: m,
        premiumModalAnalyticsLocation: { object: Y.ZSU.BUTTON_CTA, objectType: Y.btD.BUY },
        onSubscribeModalClose: function (e) {
            if (e && (s?.(), null != t && t(el.i.PRIMARY), null != r)) {
                if (a) {
                    let e = (0, E.M)(r.theme) ? q.Fc.DARK : q.Fc.LIGHT;
                    ((0, en.X8)({ isPersisted: !0, themeName: `${e}-mode-${d.ju[r.id]}`, analyticsLocations: n }),
                        (0, g.NA)({ [e]: r.theme }),
                        (0, g.qX)(e, { backgroundGradientPresetId: r.id }),
                        (0, U.S8)(),
                        (0, W.DS)());
                    return;
                }
                ((0, en.X8)({ isPersisted: !0, themeName: d.ju[r.id], analyticsLocations: n }),
                    (0, A.u_)({ backgroundGradientPresetId: r.id, theme: r.theme }),
                    (0, g.XG)());
            }
        },
        fullWidth: !0,
    });
}
function em(e) {
    let { markAsDismissed: s, isCoachmark: t } = e,
        { isPreview: r } = (0, c.cf)([V.A], () => ({ isPreview: V.A.isPreview })),
        [l, d] = n.useState(!1),
        E = K(),
        u = (0, p.X)(
            { no: ee.t["3D5yo/"], "sv-SE": ee.t["3D5yo/"], uk: ee.t["3D5yo/"], de: ee.t["3D5yo/"] },
            ee.t["dqH+qr"],
        ),
        m = (0, a.YW)({ isPreview: r, isCoachmark: t, forceShowCloseButton: l })
            .with({ isCoachmark: !0 }, { forceShowCloseButton: !0 }, () => ee.intl.string(ee.t.cpT0Cq))
            .with({ isPreview: !0 }, () => u)
            .otherwise(() => ee.intl.string(ee.t.Olc2K3)),
        T = (0, i.jsx)(eu, {
            onSubscribeSuccess: () => {
                d(!0);
            },
            markAsDismissed: s,
        });
    return (0, i.jsxs)("div", {
        className: ec.N3,
        children: [
            r &&
                (0, i.jsxs)("div", {
                    className: ec.rV,
                    children: [
                        (0, i.jsx)(y.l, {
                            size: "md",
                            className: ec.Tf,
                            location: f.A.PREMIUM_WISHLIST_CLIENT_THEMES_EDITOR,
                        }),
                        T,
                    ],
                }),
            (0, i.jsx)(o.$, {
                fullWidth: !0,
                onClick: function () {
                    (null != s && s(el.i.DISMISS),
                        E(Y.HAw.CLIENT_THEME_PREVIEW_CLOSED),
                        (0, W.DS)(),
                        t || (0, b.openUserSettings)(k.X.APPEARANCE_THEME_CATEGORY));
                },
                variant: "secondary",
                text: m,
            }),
        ],
    });
}
function eT(e) {
    let { markAsDismissed: s, showClientThemesCoachmark: t, iconSize: r = er.ni.SIZE_60 } = e,
        { analyticsLocations: a } = (0, x.Ay)(f.A.CLIENT_THEMES_EDITOR),
        d = (0, c.bG)([L.A], () => L.A.hasLayers()),
        { isPreview: o, shouldEditorAnimate: E } = (0, c.cf)([V.A, S.Ay], () => ({
            isPreview: V.A.isPreview,
            shouldEditorAnimate: t && !S.Ay.useReducedMotion,
        })),
        u = (0, N.fy)().activePanel === N.HP.CLIENT_THEMES,
        m = K();
    (n.useEffect(() => m(Y.HAw.CLIENT_THEME_PREVIEW_VIEWED), [m]),
        n.useEffect(() => {
            o &&
                (O.default.track(Y.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: $.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                    location_stack: a,
                }),
                (0, P.sq)(Y.U7l.PREMIUM_UPSELL_VIEWED, a, () => (0, M.uq)($.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT)));
        }, [o, a]));
    let T = (() => {
            let e = (0, c.bG)([V.A], () => V.A.gradientPreset),
                s = (0, c.bG)([z.Ay], () => z.Ay.useSystemTheme === q.Q_.ON),
                [t, i] = (0, n.useState)(s);
            return (
                (0, n.useEffect)(() => {
                    null == e && i(s);
                }, [e, s]),
                (0, n.useCallback)(() => {
                    null == e || ((0, U.S8)(), (0, g.XG)(), t && (0, g.k7)(q.Q_.ON));
                }, [e, t])
            );
        })(),
        A = (0, h.A)(null, o ? T : Y.tEg);
    n.useEffect(() => {
        if (o && !u) return T;
    }, [o, u, T]);
    let v = n.useMemo(
        () => ({
            "--custom-client-themes-editor-content-width": `${3 * r + 48}px`,
            "--custom-client-themes-editor-padding": "16px",
        }),
        [r],
    );
    return d
        ? null
        : (0, i.jsx)(x.f5, {
              value: a,
              children: (0, i.jsx)("div", {
                  ref: A,
                  "data-app-right-panel": !0,
                  className: l()(ec.HS, E ? ec.hP : null),
                  style: v,
                  children: (0, i.jsxs)(_.F, {
                      children: [
                          t ? (0, i.jsx)(eo, {}) : (0, i.jsx)(eE, { markAsDismissed: s }),
                          (0, i.jsx)(ei, {}),
                          (0, i.jsx)(I.Ip, {
                              className: ec.sV,
                              children: (0, i.jsxs)(en.Ay, {
                                  type: en.v0.EDITOR,
                                  children: [
                                      !o && (0, i.jsx)(en.Ay.Basic, { className: ec.Gg, iconSize: r }),
                                      (0, i.jsx)(ed, { iconSize: r }),
                                      (0, i.jsx)(en.Ay.Gradient, { className: ec.Gg, isCoachmark: t, iconSize: r }),
                                  ],
                              }),
                          }),
                          (0, i.jsx)(em, { markAsDismissed: s, isCoachmark: t }),
                      ],
                  }),
              }),
          });
}
