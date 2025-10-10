n.d(t, {
    g: () => U,
    i: () => j,
});
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(704215),
    s = n(780384),
    l = n(481060),
    c = n(857595),
    u = n(607070),
    d = n(100527),
    f = n(906732),
    _ = n(514361),
    p = n(803038),
    h = n(607270),
    m = n(705262),
    g = n(550385),
    E = n(266454),
    b = n(104494),
    y = n(639119),
    O = n(638212),
    v = n(767714),
    I = n(165583),
    T = n(504983),
    S = n(984802),
    A = n(626135),
    C = n(210887),
    N = n(695346),
    R = n(342386),
    P = n(981631),
    w = n(921944),
    D = n(474936),
    L = n(388032),
    x = n(505575);
let M = () => {
        (0, E.Q3)(o.z.CLIENT_THEMES_SPARKLE_PREVIEW, {
            dismissAction: w.L.PRIMARY,
            forceTrack: !0,
        }),
            (0, g.XO)(g.wh.CLIENT_THEMES),
            (0, R.default)();
    },
    j = () => {
        var e, t;
        let { analyticsLocations: n } = (0, f.ZP)(d.Z.USER_SETTINGS),
            o = (0, a.e7)([_.Z], () => _.Z.isPreview),
            s = (null == (t = (0, y.N)()) || null == (e = t.subscription_trial) ? void 0 : e.sku_id) === D.Si.TIER_2,
            c = (0, b.Ng)(),
            u = (0, b.Wp)(c, D.Si.TIER_2),
            { v2EditorEnabled: g } = p.Mc.useExperiment({ location: "UserSettingsAppearanceClientThemes" }),
            E = () => {
                if (!o || s) return null;
                let e = u
                    ? L.intl.formatToPlainString(L.t.bkQ4bG, { percent: null == c ? void 0 : c.discount.amount })
                    : L.intl.string(L.t.mr4K7O);
                return g
                    ? (0, r.jsxs)("div", {
                          className: x.tryItOutButtonsV2,
                          children: [
                              (0, r.jsx)(l.zxk, {
                                  variant: "secondary",
                                  text: L.intl.string(L.t["E+COuL"]),
                                  onClick: () => M(),
                              }),
                              (0, r.jsx)(O.Z, {
                                  subscriptionTier: D.Si.TIER_2,
                                  defaultTextOverride: e,
                                  premiumModalAnalyticsLocation: {
                                      object: P.qAy.BUTTON_CTA,
                                      objectType: P.Qqv.BUY,
                                  },
                                  fullWidth: !0,
                              }),
                          ],
                      })
                    : (0, r.jsxs)("div", {
                          className: x.tryItOutButtons,
                          children: [
                              (0, r.jsx)(l.zxk, {
                                  variant: "secondary",
                                  text: L.intl.string(L.t["E+COuL"]),
                                  onClick: () => M(),
                              }),
                              (0, r.jsx)(v.Z, {
                                  showGradient: !1,
                                  subscriptionTier: D.Si.TIER_2,
                                  textOptions: { textOverride: e },
                                  className: x.premiumCta,
                              }),
                          ],
                      });
            };
        i.useEffect(() => {
            o &&
                A.default.track(P.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: D.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                    location_stack: n,
                });
        }, [o, n]);
        let S =
                s &&
                o &&
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)("div", {
                            className: x.previewThemeButton,
                            children: (0, r.jsx)(l.zxk, {
                                variant: "secondary",
                                fullWidth: !0,
                                text: L.intl.string(L.t["E+COuL"]),
                                onClick: () => M(),
                            }),
                        }),
                        (0, r.jsx)("div", { className: x.premiumTier2Divider }),
                        (0, r.jsx)(I.ZP, {
                            type: D.cd.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL,
                            subscriptionTier: D.Si.TIER_2,
                        }),
                    ],
                }),
            C = (() => {
                let e = (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(m.ZP.Gradient, {
                            disabled: !g && o,
                            renderCTAButtons: E,
                        }),
                        S,
                    ],
                });
                return (
                    g
                        ? o &&
                          (e = (0, r.jsx)("div", {
                              className: x.colorThemesBackground,
                              children: e,
                          }))
                        : (e = (0, r.jsx)(T.Z, {
                              className: x.featureBorder,
                              isShown: o,
                              type: T.Y.PREMIUM,
                              children: e,
                          })),
                    e
                );
            })();
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsxs)(m.ZP, {
                    type: m.yH.SETTINGS,
                    children: [
                        (0, r.jsx)(m.ZP.Basic, { className: x.basicThemeSelectors }),
                        (0, r.jsx)(k, {}),
                        g && (0, r.jsx)(h.Z, {}),
                        C,
                    ],
                }),
                (0, r.jsx)(l.izJ, { className: x.divider }),
            ],
        });
    };
function k() {
    let e = (0, S.A6)(),
        {
            theme: t,
            useForcedColors: n,
            gradientPreset: i,
        } = (0, a.cj)([C.Z, u.Z, _.Z], () => ({
            theme: C.Z.theme,
            useForcedColors: u.Z.useForcedColors,
            gradientPreset: _.Z.gradientPreset,
        })),
        o = null != N.L1.useSetting().customUserThemeSettings;
    return t !== P.BRd.LIGHT
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(l.izJ, { gap: 24 }),
                  (0, r.jsx)(l.rsf, {
                      label: L.intl.string(L.t.yF54Ki),
                      checked: e && (0, s.ap)(t) && !n,
                      disabled: t !== P.BRd.LIGHT || n || null != i || o,
                      onChange: c.lq,
                  }),
                  (0, r.jsx)(l.izJ, { gap: 24 }),
              ],
          });
}
let U = () =>
    (0, a.e7)([_.Z], () => _.Z.isPreview)
        ? null
        : (0, r.jsx)(l.zxk, {
              variant: "primary",
              text: L.intl.string(L.t.qYXrkZ),
              onClick: M,
          });
