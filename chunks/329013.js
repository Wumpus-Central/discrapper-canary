n.d(t, {
    g: () => B,
    i: () => k,
});
var i = n(951288),
    r = n(647438),
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
    b = n(607270),
    x = n(705262),
    _ = n(550385),
    j = n(266454),
    E = n(104494),
    C = n(639119),
    O = n(638212),
    v = n(767714),
    S = n(165583),
    T = n(504983),
    N = n(984802),
    I = n(626135),
    y = n(210887),
    A = n(981631),
    P = n(921944),
    R = n(474936),
    D = n(388032),
    Z = n(505575);
let w = () => {
        (0, j.Q3)(a.z.CLIENT_THEMES_SPARKLE_PREVIEW, {
            dismissAction: P.L.PRIMARY,
            forceTrack: !0,
        }),
            (0, _.XO)(_.wh.CLIENT_THEMES),
            (0, d.xf)();
    },
    k = () => {
        var e, t;
        let n,
            { analyticsLocations: a } = (0, g.ZP)(p.Z.USER_SETTINGS),
            l = (0, s.e7)([h.Z], () => h.Z.isPreview),
            d = (null == (t = (0, C.N)()) || null == (e = t.subscription_trial) ? void 0 : e.sku_id) === R.Si.TIER_2,
            u = (0, E.Ng)(),
            m = (0, E.Wp)(u, R.Si.TIER_2),
            { v2EditorEnabled: _ } = f.Mc.useExperiment({ location: "UserSettingsAppearanceClientThemes" });
        r.useEffect(() => {
            l &&
                I.default.track(A.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: R.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                    location_stack: a,
                });
        }, [l, a]);
        let j =
                d &&
                l &&
                (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(o.zx, {
                            className: Z.previewThemeButtonWide,
                            color: o.zx.Colors.PRIMARY,
                            onClick: () => w(),
                            children: D.intl.string(D.t["E+COuL"]),
                        }),
                        (0, i.jsx)("div", { className: Z.premiumTier2Divider }),
                        (0, i.jsx)(S.ZP, {
                            type: R.cd.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL,
                            subscriptionTier: R.Si.TIER_2,
                        }),
                    ],
                }),
            N =
                ((n = (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(x.ZP.Gradient, {
                            disabled: !_ && l,
                            renderCTAButtons: () => {
                                if (!l || d) return null;
                                let e = m
                                    ? D.intl.formatToPlainString(D.t.bkQ4bG, {
                                          percent: null == u ? void 0 : u.discount.amount,
                                      })
                                    : D.intl.string(D.t.mr4K7O);
                                return _
                                    ? (0, i.jsxs)("div", {
                                          className: Z.tryItOutButtonsV2,
                                          children: [
                                              (0, i.jsx)(c.zxk, {
                                                  variant: "secondary",
                                                  text: D.intl.string(D.t["E+COuL"]),
                                                  onClick: () => w(),
                                              }),
                                              (0, i.jsx)(O.Z, {
                                                  subscriptionTier: R.Si.TIER_2,
                                                  defaultTextOverride: e,
                                                  premiumModalAnalyticsLocation: {
                                                      object: A.qAy.BUTTON_CTA,
                                                      objectType: A.Qqv.BUY,
                                                  },
                                                  fullWidth: !0,
                                              }),
                                          ],
                                      })
                                    : (0, i.jsxs)("div", {
                                          className: Z.tryItOutButtons,
                                          children: [
                                              (0, i.jsx)(c.zxk, {
                                                  variant: "secondary",
                                                  text: D.intl.string(D.t["E+COuL"]),
                                                  onClick: () => w(),
                                              }),
                                              (0, i.jsx)(v.Z, {
                                                  showGradient: !1,
                                                  subscriptionTier: R.Si.TIER_2,
                                                  textOptions: { textOverride: e },
                                                  className: Z.premiumCta,
                                              }),
                                          ],
                                      });
                            },
                        }),
                        j,
                    ],
                })),
                _
                    ? l &&
                      (n = (0, i.jsx)("div", {
                          className: Z.colorThemesBackground,
                          children: n,
                      }))
                    : (n = (0, i.jsx)(T.Z, {
                          className: Z.featureBorder,
                          isShown: l,
                          type: T.Y.PREMIUM,
                          children: n,
                      })),
                n);
        return (0, i.jsxs)("div", {
            children: [
                (0, i.jsxs)(x.ZP, {
                    type: x.yH.SETTINGS,
                    children: [
                        (0, i.jsx)(x.ZP.Basic, { className: Z.basicThemeSelectors }),
                        (0, i.jsx)(L, {}),
                        _ && (0, i.jsx)(b.Z, {}),
                        N,
                    ],
                }),
                (0, i.jsx)(c.$i$, { className: Z.divider }),
            ],
        });
    };
function L() {
    let e = (0, N.A6)(),
        {
            theme: t,
            useForcedColors: n,
            gradientPreset: r,
        } = (0, s.cj)([y.Z, m.Z, h.Z], () => ({
            theme: y.Z.theme,
            useForcedColors: m.Z.useForcedColors,
            gradientPreset: h.Z.gradientPreset,
        }));
    return t !== A.BRd.LIGHT
        ? null
        : (0, i.jsx)(c.j7V, {
              hideBorder: !0,
              value: e && (0, l.ap)(t) && !n,
              disabled: t !== A.BRd.LIGHT || n || null != r,
              onChange: u.lq,
              className: Z.darkSidebarToggle,
              children: (0, i.jsx)("span", {
                  className: Z.title,
                  children: D.intl.string(D.t.yF54Ki),
              }),
          });
}
let B = () =>
    (0, s.e7)([h.Z], () => h.Z.isPreview)
        ? null
        : (0, i.jsx)(c.zxk, {
              variant: "primary",
              text: D.intl.string(D.t.qYXrkZ),
              onClick: w,
          });
