(t.r(s), t.d(s, { default: () => eo }), t(801541));
var i = t(477900),
    n = t(582128),
    r = t(503698),
    a = t.n(r),
    l = t(889137),
    c = t(855986),
    d = t(873298),
    o = t(821609),
    E = t(462887),
    u = t(534514),
    m = t(939249),
    T = t(285796),
    _ = t(707554),
    A = t(95362),
    I = t(817281),
    h = t(82495),
    f = t(775602),
    S = t(793574),
    x = t(688810),
    N = t(793943),
    v = t(996254),
    P = t(739053),
    p = t(82498),
    M = t(77528),
    j = t(792656),
    C = t(521440),
    y = t(450232),
    R = t(973654),
    D = t(780964),
    g = t(141343),
    b = t(766075),
    k = t(186111),
    H = t(287809),
    L = t(129230),
    w = t(722178),
    G = t(823459),
    O = t(850333),
    U = t(11029),
    V = t(964404),
    W = t(617617),
    z = t(652215),
    Y = t(682901),
    X = t(185928);
function $() {
    let { previewPaneVariant: e } = (0, c.cf)([O.A], () => ({
            previewPaneVariant: O.A.isPreview ? Y.tz.FREE : Y.tz.PREMIUM_STANDARD,
        })),
        s = (0, c.bG)([W.A], () => {
            let e = W.A.settings.appearance?.theme;
            return `default ${e === d.Sx.LIGHT ? z.NJ8.LIGHT : z.NJ8.DARK}`;
        });
    return (0, n.useCallback)(
        (t) => {
            L.default.track(t, { preview_pane_variant: e, original_theme: s });
        },
        [e, s],
    );
}
var q = t(613412),
    B = t(834730),
    F = t(139286),
    J = t(738419),
    K = t(958904),
    Q = t(792996),
    Z = t(663635),
    ee = t(114149);
function es() {
    let { analyticsLocations: e } = (0, x.Ay)();
    return (
        (0, F.A)({
            name: q.ImpressionNames.CUSTOM_THEMES_PREVIEW_THEMES_BANNER,
            type: q.ImpressionTypes.VIEW,
            properties: { location_stack: e },
        }),
        (0, i.jsxs)("div", {
            className: Z.kL,
            children: [
                (0, i.jsxs)("div", {
                    className: Z.r$,
                    children: [
                        (0, i.jsx)("img", { src: ee.A, className: Z._e, alt: "" }),
                        (0, i.jsxs)("div", {
                            className: Z.P_,
                            children: [
                                (0, i.jsx)(B.E, {
                                    variant: "body-md/semibold",
                                    color: "text-strong",
                                    children: Q.intl.string(K.default.XP4jzJ),
                                }),
                                (0, i.jsx)(B.E, {
                                    variant: "body-sm/medium",
                                    color: "text-muted",
                                    children: Q.intl.string(K.default.MJYvmG),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)(o.$, {
                    variant: "secondary",
                    size: "sm",
                    text: Q.intl.string(K.default.eGxkmm),
                    onClick: function () {
                        ((0, J.b0)(J.G8.PREVIEW_THEMES),
                            (0, N.nf)(N.HP.CUSTOM_THEME, { from: N.xv.CLIENT_THEMES_EDITOR }));
                    },
                    fullWidth: !0,
                }),
            ],
        })
    );
}
var et = t(270746),
    ei = t(385803),
    en = t(49999),
    er = t(737440);
function ea() {
    return (0, i.jsx)("div", {
        className: er.nV,
        children: (0, i.jsxs)("div", {
            className: er.mR,
            children: [
                (0, i.jsx)(y.A, { className: er.PC, size: "md" }),
                (0, i.jsx)(u.D, {
                    variant: "heading-sm/semibold",
                    color: "text-overlay-light",
                    children: Q.intl.string(Q.t.POSLGY),
                }),
            ],
        }),
    });
}
function el(e) {
    let { markAsDismissed: s } = e,
        t = $();
    return (0, i.jsxs)("div", {
        className: er.nV,
        children: [
            (0, i.jsx)(m.D, {
                className: er.VV,
                onClick: function () {
                    (null != s && s(en.i.DISMISS), t(z.HAw.CLIENT_THEME_PREVIEW_CLOSED), (0, U.DS)());
                },
                children: (0, i.jsx)(T.a, { size: "md", color: "currentColor", className: er.P0 }),
            }),
            (0, i.jsx)(u.D, { variant: "heading-lg/semibold", children: Q.intl.string(Q.t["xSR+a/"]) }),
        ],
    });
}
function ec(e) {
    let { onSubscribeSuccess: s, markAsDismissed: t } = e,
        { analyticsLocations: n } = (0, x.Ay)(S.A.CLIENT_THEMES_EDITOR),
        [r, a] = (0, c.yK)([H.default, O.A], () => [O.A.gradientPreset, w.Ay.isPremium(H.default.getCurrentUser())]),
        l = (0, g.V)(),
        o = (0, M.V)(),
        u = (0, w.FY)({
            intervalType: o?.subscriptionTrial?.interval,
            intervalCount: o?.subscriptionTrial?.intervalCount,
        }),
        m = a ? Q.intl.string(Q.t.IJI7yk) : o?.subscriptionTrial?.skuId === Y.pe.TIER_2 ? u : Q.intl.string(Q.t.mr4K7D);
    return (0, i.jsx)(j.A, {
        subscriptionTier: Y.pe.TIER_2,
        defaultTextOverride: m,
        premiumModalAnalyticsLocation: { object: z.ZSU.BUTTON_CTA, objectType: z.btD.BUY },
        onSubscribeModalClose: function (e) {
            if (e && (s?.(), null != t && t(en.i.PRIMARY), null != r)) {
                if (l) {
                    let e = (0, E.M)(r.theme) ? X.Fc.DARK : X.Fc.LIGHT;
                    ((0, et.X8)({ isPersisted: !0, themeName: `${e}-mode-${d.ju[r.id]}`, analyticsLocations: n }),
                        (0, R.NA)({ [e]: r.theme }),
                        (0, R.qX)(e, { backgroundGradientPresetId: r.id }),
                        (0, G.S8)(),
                        (0, U.DS)());
                    return;
                }
                ((0, et.X8)({ isPersisted: !0, themeName: d.ju[r.id], analyticsLocations: n }),
                    (0, I.u_)({ backgroundGradientPresetId: r.id, theme: r.theme }),
                    (0, R.XG)());
            }
        },
        fullWidth: !0,
    });
}
function ed(e) {
    let { markAsDismissed: s, isCoachmark: t } = e,
        { isPreview: r } = (0, c.cf)([O.A], () => ({ isPreview: O.A.isPreview })),
        [a, d] = n.useState(!1),
        E = $(),
        u = (0, v.X)(
            { no: Q.t["3D5yo/"], "sv-SE": Q.t["3D5yo/"], uk: Q.t["3D5yo/"], de: Q.t["3D5yo/"] },
            Q.t["dqH+qr"],
        ),
        m = (0, l.YW)({ isPreview: r, isCoachmark: t, forceShowCloseButton: a })
            .with({ isCoachmark: !0 }, { forceShowCloseButton: !0 }, () => Q.intl.string(Q.t.cpT0Cq))
            .with({ isPreview: !0 }, () => u)
            .otherwise(() => Q.intl.string(Q.t.Olc2K3)),
        T = (0, i.jsx)(ec, {
            onSubscribeSuccess: () => {
                d(!0);
            },
            markAsDismissed: s,
        });
    return (0, i.jsxs)("div", {
        className: er.N3,
        children: [
            r &&
                (0, i.jsxs)("div", {
                    className: er.rV,
                    children: [
                        (0, i.jsx)(C.l, {
                            size: "md",
                            className: er.Tf,
                            location: S.A.PREMIUM_WISHLIST_CLIENT_THEMES_EDITOR,
                        }),
                        T,
                    ],
                }),
            (0, i.jsx)(o.$, {
                fullWidth: !0,
                onClick: function () {
                    (null != s && s(en.i.DISMISS),
                        E(z.HAw.CLIENT_THEME_PREVIEW_CLOSED),
                        (0, U.DS)(),
                        t || (0, b.openUserSettings)(D.X.APPEARANCE_THEME_CATEGORY));
                },
                variant: "secondary",
                text: m,
            }),
        ],
    });
}
function eo(e) {
    let { markAsDismissed: s, showClientThemesCoachmark: t, iconSize: r = ei.ni.SIZE_60 } = e,
        { analyticsLocations: l } = (0, x.Ay)(S.A.CLIENT_THEMES_EDITOR),
        d = (0, c.bG)([k.A], () => k.A.hasLayers()),
        { isPreview: o, shouldEditorAnimate: E } = (0, c.cf)([O.A, f.Ay], () => ({
            isPreview: O.A.isPreview,
            shouldEditorAnimate: t && !f.Ay.useReducedMotion,
        })),
        u = (0, N.fy)().activePanel === N.HP.CLIENT_THEMES,
        m = $();
    (n.useEffect(() => m(z.HAw.CLIENT_THEME_PREVIEW_VIEWED), [m]),
        n.useEffect(() => {
            o &&
                (L.default.track(z.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: Y.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                    location_stack: l,
                }),
                (0, P.sq)(z.U7l.PREMIUM_UPSELL_VIEWED, l, () => (0, p.uq)(Y.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT)));
        }, [o, l]));
    let T = (() => {
            let e = (0, c.bG)([O.A], () => O.A.gradientPreset),
                s = (0, c.bG)([V.Ay], () => V.Ay.useSystemTheme === X.Q_.ON),
                [t, i] = (0, n.useState)(s);
            return (
                (0, n.useEffect)(() => {
                    null == e && i(s);
                }, [e, s]),
                (0, n.useCallback)(() => {
                    null == e || ((0, G.S8)(), (0, R.XG)(), t && (0, R.k7)(X.Q_.ON));
                }, [e, t])
            );
        })(),
        I = (0, h.A)(null, o ? T : z.tEg);
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
              value: l,
              children: (0, i.jsx)("div", {
                  ref: I,
                  "data-app-right-panel": !0,
                  className: a()(er.HS, E ? er.hP : null),
                  style: v,
                  children: (0, i.jsxs)(_.F, {
                      children: [
                          t ? (0, i.jsx)(ea, {}) : (0, i.jsx)(el, { markAsDismissed: s }),
                          (0, i.jsx)(es, {}),
                          (0, i.jsx)(A.Ip, {
                              className: er.sV,
                              children: (0, i.jsxs)(et.Ay, {
                                  type: et.v0.EDITOR,
                                  children: [
                                      !o && (0, i.jsx)(et.Ay.Basic, { className: er.Gg, iconSize: r }),
                                      (0, i.jsx)(et.Ay.Gradient, { className: er.Gg, isCoachmark: t, iconSize: r }),
                                  ],
                              }),
                          }),
                          (0, i.jsx)(ed, { markAsDismissed: s, isCoachmark: t }),
                      ],
                  }),
              }),
          });
}
