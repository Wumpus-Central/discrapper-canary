n.d(t, {
    g: () => G,
    i: () => k,
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
    P = n(695346),
    w = n(981631),
    D = n(921944),
    x = n(474936),
    L = n(388032),
    j = n(505575);
let M = () => {
        (0, y.Q3)(o.z.CLIENT_THEMES_SPARKLE_PREVIEW, {
            dismissAction: D.L.PRIMARY,
            forceTrack: !0,
        }),
            (0, b.XO)(b.wh.CLIENT_THEMES),
            (0, u.xf)();
    },
    k = () => {
        var e, t;
        let { analyticsLocations: n } = (0, p.ZP)(_.Z.USER_SETTINGS),
            o = (0, a.e7)([h.Z], () => h.Z.isPreview),
            s = (null == (t = (0, v.N)()) || null == (e = t.subscription_trial) ? void 0 : e.sku_id) === x.Si.TIER_2,
            u = (0, O.Ng)(),
            d = (0, O.Wp)(u, x.Si.TIER_2),
            { v2EditorEnabled: f } = m.Mc.useExperiment({ location: "UserSettingsAppearanceClientThemes" }),
            b = () => {
                if (!o || s) return null;
                let e = d
                    ? L.intl.formatToPlainString(L.t.bkQ4bG, { percent: null == u ? void 0 : u.discount.amount })
                    : L.intl.string(L.t.mr4K7O);
                return f
                    ? (0, r.jsxs)("div", {
                          className: j.tryItOutButtonsV2,
                          children: [
                              (0, r.jsx)(c.zxk, {
                                  variant: "secondary",
                                  text: L.intl.string(L.t["E+COuL"]),
                                  onClick: () => M(),
                              }),
                              (0, r.jsx)(I.Z, {
                                  subscriptionTier: x.Si.TIER_2,
                                  defaultTextOverride: e,
                                  premiumModalAnalyticsLocation: {
                                      object: w.qAy.BUTTON_CTA,
                                      objectType: w.Qqv.BUY,
                                  },
                                  fullWidth: !0,
                              }),
                          ],
                      })
                    : (0, r.jsxs)("div", {
                          className: j.tryItOutButtons,
                          children: [
                              (0, r.jsx)(c.zxk, {
                                  variant: "secondary",
                                  text: L.intl.string(L.t["E+COuL"]),
                                  onClick: () => M(),
                              }),
                              (0, r.jsx)(T.Z, {
                                  showGradient: !1,
                                  subscriptionTier: x.Si.TIER_2,
                                  textOptions: { textOverride: e },
                                  className: j.premiumCta,
                              }),
                          ],
                      });
            };
        i.useEffect(() => {
            o &&
                N.default.track(w.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: x.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                    location_stack: n,
                });
        }, [o, n]);
        let y =
                s &&
                o &&
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(l.zx, {
                            className: j.previewThemeButtonWide,
                            color: l.zx.Colors.PRIMARY,
                            onClick: () => M(),
                            children: L.intl.string(L.t["E+COuL"]),
                        }),
                        (0, r.jsx)("div", { className: j.premiumTier2Divider }),
                        (0, r.jsx)(S.ZP, {
                            type: x.cd.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL,
                            subscriptionTier: x.Si.TIER_2,
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
                              className: j.colorThemesBackground,
                              children: e,
                          }))
                        : (e = (0, r.jsx)(A.Z, {
                              className: j.featureBorder,
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
                        (0, r.jsx)(E.ZP.Basic, { className: j.basicThemeSelectors }),
                        (0, r.jsx)(U, {}),
                        f && (0, r.jsx)(g.Z, {}),
                        C,
                    ],
                }),
                (0, r.jsx)(c.$i$, { className: j.divider }),
            ],
        });
    };
function U() {
    let e = (0, C.A6)(),
        {
            theme: t,
            useForcedColors: n,
            gradientPreset: i,
        } = (0, a.cj)([R.Z, f.Z, h.Z], () => ({
            theme: R.Z.theme,
            useForcedColors: f.Z.useForcedColors,
            gradientPreset: h.Z.gradientPreset,
        })),
        o = null != P.L1.useSetting().customUserThemeSettings;
    return t !== w.BRd.LIGHT
        ? null
        : (0, r.jsx)(c.j7V, {
              hideBorder: !0,
              value: e && (0, s.ap)(t) && !n,
              disabled: t !== w.BRd.LIGHT || n || null != i || o,
              onChange: d.lq,
              className: j.darkSidebarToggle,
              children: (0, r.jsx)("span", {
                  className: j.title,
                  children: L.intl.string(L.t.yF54Ki),
              }),
          });
}
let G = () =>
    (0, a.e7)([h.Z], () => h.Z.isPreview)
        ? null
        : (0, r.jsx)(c.zxk, {
              variant: "primary",
              text: L.intl.string(L.t.qYXrkZ),
              onClick: M,
          });
