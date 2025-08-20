n.d(t, {
    g: () => U,
    i: () => M,
});
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(704215),
    s = n(780384),
    l = n(755721),
    c = n(481060),
    u = n(37234),
    d = n(857595),
    f = n(607070),
    _ = n(100527),
    p = n(906732),
    h = n(514361),
    m = n(803038),
    g = n(607270),
    E = n(705262),
    b = n(550385),
    y = n(266454),
    O = n(104494),
    v = n(639119),
    I = n(638212),
    T = n(767714),
    S = n(165583),
    A = n(504983),
    C = n(984802),
    N = n(626135),
    R = n(210887),
    P = n(981631),
    w = n(921944),
    D = n(474936),
    x = n(388032),
    L = n(505575);
let j = () => {
        (0, y.Q3)(o.z.CLIENT_THEMES_SPARKLE_PREVIEW, {
            dismissAction: w.L.PRIMARY,
            forceTrack: !0,
        }),
            (0, b.XO)(b.wh.CLIENT_THEMES),
            (0, u.xf)();
    },
    M = () => {
        var e, t;
        let { analyticsLocations: n } = (0, p.ZP)(_.Z.USER_SETTINGS),
            o = (0, a.e7)([h.Z], () => h.Z.isPreview),
            s = (null == (t = (0, v.N)()) || null == (e = t.subscription_trial) ? void 0 : e.sku_id) === D.Si.TIER_2,
            u = (0, O.Ng)(),
            d = (0, O.Wp)(u, D.Si.TIER_2),
            { v2EditorEnabled: f } = m.Mc.useExperiment({ location: "UserSettingsAppearanceClientThemes" }),
            b = () => {
                if (!o || s) return null;
                let e = d
                    ? x.intl.formatToPlainString(x.t.bkQ4bG, { percent: null == u ? void 0 : u.discount.amount })
                    : x.intl.string(x.t.mr4K7O);
                return f
                    ? (0, r.jsxs)("div", {
                          className: L.tryItOutButtonsV2,
                          children: [
                              (0, r.jsx)(c.zxk, {
                                  variant: "secondary",
                                  text: x.intl.string(x.t["E+COuL"]),
                                  onClick: () => j(),
                              }),
                              (0, r.jsx)(I.Z, {
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
                          className: L.tryItOutButtons,
                          children: [
                              (0, r.jsx)(c.zxk, {
                                  variant: "secondary",
                                  text: x.intl.string(x.t["E+COuL"]),
                                  onClick: () => j(),
                              }),
                              (0, r.jsx)(T.Z, {
                                  showGradient: !1,
                                  subscriptionTier: D.Si.TIER_2,
                                  textOptions: { textOverride: e },
                                  className: L.premiumCta,
                              }),
                          ],
                      });
            };
        i.useEffect(() => {
            o &&
                N.default.track(P.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: D.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                    location_stack: n,
                });
        }, [o, n]);
        let y =
                s &&
                o &&
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(l.zx, {
                            className: L.previewThemeButtonWide,
                            color: l.zx.Colors.PRIMARY,
                            onClick: () => j(),
                            children: x.intl.string(x.t["E+COuL"]),
                        }),
                        (0, r.jsx)("div", { className: L.premiumTier2Divider }),
                        (0, r.jsx)(S.ZP, {
                            type: D.cd.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL,
                            subscriptionTier: D.Si.TIER_2,
                        }),
                    ],
                }),
            C = (() => {
                let e = (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(E.ZP.Gradient, {
                            disabled: !f && o,
                            renderCTAButtons: b,
                        }),
                        y,
                    ],
                });
                return (
                    f
                        ? o &&
                          (e = (0, r.jsx)("div", {
                              className: L.colorThemesBackground,
                              children: e,
                          }))
                        : (e = (0, r.jsx)(A.Z, {
                              className: L.featureBorder,
                              isShown: o,
                              type: A.Y.PREMIUM,
                              children: e,
                          })),
                    e
                );
            })();
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsxs)(E.ZP, {
                    type: E.yH.SETTINGS,
                    children: [
                        (0, r.jsx)(E.ZP.Basic, { className: L.basicThemeSelectors }),
                        (0, r.jsx)(k, {}),
                        f && (0, r.jsx)(g.Z, {}),
                        C,
                    ],
                }),
                (0, r.jsx)(c.$i$, { className: L.divider }),
            ],
        });
    };
function k() {
    let e = (0, C.A6)(),
        {
            theme: t,
            useForcedColors: n,
            gradientPreset: i,
        } = (0, a.cj)([R.Z, f.Z, h.Z], () => ({
            theme: R.Z.theme,
            useForcedColors: f.Z.useForcedColors,
            gradientPreset: h.Z.gradientPreset,
        }));
    return t !== P.BRd.LIGHT
        ? null
        : (0, r.jsx)(c.j7V, {
              hideBorder: !0,
              value: e && (0, s.ap)(t) && !n,
              disabled: t !== P.BRd.LIGHT || n || null != i,
              onChange: d.lq,
              className: L.darkSidebarToggle,
              children: (0, r.jsx)("span", {
                  className: L.title,
                  children: x.intl.string(x.t.yF54Ki),
              }),
          });
}
let U = () =>
    (0, a.e7)([h.Z], () => h.Z.isPreview)
        ? null
        : (0, r.jsx)(c.zxk, {
              variant: "primary",
              text: x.intl.string(x.t.qYXrkZ),
              onClick: j,
          });
