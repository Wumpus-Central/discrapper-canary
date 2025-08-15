n.d(t, {
    g: () => L,
    i: () => w,
});
var i = n(255367),
    r = n(73800),
    s = n(442837),
    a = n(704215),
    l = n(780384),
    o = n(755721),
    c = n(481060),
    d = n(37234),
    u = n(857595),
    m = n(607070),
    p = n(100527),
    g = n(906732),
    h = n(514361),
    f = n(803038),
    b = n(705262),
    x = n(550385),
    _ = n(266454),
    j = n(104494),
    E = n(639119),
    C = n(638212),
    O = n(767714),
    v = n(165583),
    S = n(504983),
    T = n(984802),
    I = n(626135),
    N = n(210887),
    y = n(981631),
    A = n(921944),
    P = n(474936),
    R = n(388032),
    D = n(505575);
let Z = () => {
        (0, _.Q3)(a.z.CLIENT_THEMES_SPARKLE_PREVIEW, {
            dismissAction: A.L.PRIMARY,
            forceTrack: !0,
        }),
            (0, x.XO)(x.wh.CLIENT_THEMES),
            (0, d.xf)();
    },
    w = () => {
        var e, t;
        let { analyticsLocations: n } = (0, g.ZP)(p.Z.USER_SETTINGS),
            a = (0, s.e7)([h.Z], () => h.Z.isPreview),
            l = (null == (t = (0, E.N)()) || null == (e = t.subscription_trial) ? void 0 : e.sku_id) === P.Si.TIER_2,
            d = (0, j.Ng)(),
            u = (0, j.Wp)(d, P.Si.TIER_2),
            { v2EditorEnabled: m } = f.Mc.useExperiment({ location: "UserSettingsAppearanceClientThemes" });
        return (
            r.useEffect(() => {
                a &&
                    I.default.track(y.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: P.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                        location_stack: n,
                    });
            }, [a, n]),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsxs)(b.ZP, {
                        type: b.yH.SETTINGS,
                        children: [
                            (0, i.jsx)(b.ZP.Basic, { className: D.basicThemeSelectors }),
                            (0, i.jsx)(k, {}),
                            (0, i.jsxs)(S.Z, {
                                className: D.featureBorder,
                                isShown: a,
                                type: S.Y.PREMIUM,
                                children: [
                                    (0, i.jsx)(b.ZP.Gradient, {
                                        disabled: a,
                                        renderCTAButtons: () => {
                                            if (!a || l) return null;
                                            let e = u
                                                    ? R.intl.formatToPlainString(R.t.bkQ4bG, {
                                                          percent: null == d ? void 0 : d.discount.amount,
                                                      })
                                                    : R.intl.string(R.t.mr4K7O),
                                                t = m ? D.tryItOutButtonsV2 : D.tryItOutButtons;
                                            return (0, i.jsxs)("div", {
                                                className: t,
                                                children: [
                                                    (0, i.jsx)(c.zxk, {
                                                        variant: "secondary",
                                                        text: R.intl.string(R.t["E+COuL"]),
                                                        onClick: () => Z(),
                                                    }),
                                                    m
                                                        ? (0, i.jsx)(C.Z, {
                                                              subscriptionTier: P.Si.TIER_2,
                                                              defaultTextOverride: e,
                                                              premiumModalAnalyticsLocation: {
                                                                  object: y.qAy.BUTTON_CTA,
                                                                  objectType: y.Qqv.BUY,
                                                              },
                                                              fullWidth: !0,
                                                          })
                                                        : (0, i.jsx)(O.Z, {
                                                              showGradient: !1,
                                                              subscriptionTier: P.Si.TIER_2,
                                                              textOptions: { textOverride: e },
                                                              className: D.premiumCta,
                                                          }),
                                                ],
                                            });
                                        },
                                    }),
                                    l &&
                                        a &&
                                        (0, i.jsxs)("div", {
                                            children: [
                                                (0, i.jsx)(o.zx, {
                                                    className: D.previewThemeButtonWide,
                                                    color: o.zx.Colors.PRIMARY,
                                                    onClick: () => Z(),
                                                    children: R.intl.string(R.t["E+COuL"]),
                                                }),
                                                (0, i.jsx)("div", { className: D.premiumTier2Divider }),
                                                (0, i.jsx)(v.ZP, {
                                                    type: P.cd.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL,
                                                    subscriptionTier: P.Si.TIER_2,
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsx)(c.$i$, { className: D.divider }),
                ],
            })
        );
    };
function k() {
    let e = (0, T.A6)(),
        {
            theme: t,
            useForcedColors: n,
            gradientPreset: r,
        } = (0, s.cj)([N.Z, m.Z, h.Z], () => ({
            theme: N.Z.theme,
            useForcedColors: m.Z.useForcedColors,
            gradientPreset: h.Z.gradientPreset,
        }));
    return t !== y.BRd.LIGHT
        ? null
        : (0, i.jsx)(c.j7V, {
              hideBorder: !0,
              value: e && (0, l.ap)(t) && !n,
              disabled: t !== y.BRd.LIGHT || n || null != r,
              onChange: u.lq,
              className: D.darkSidebarToggle,
              children: (0, i.jsx)("span", {
                  className: D.title,
                  children: R.intl.string(R.t.yF54Ki),
              }),
          });
}
let L = () =>
    (0, s.e7)([h.Z], () => h.Z.isPreview)
        ? null
        : (0, i.jsx)(c.zxk, {
              variant: "primary",
              text: R.intl.string(R.t.qYXrkZ),
              onClick: Z,
          });
