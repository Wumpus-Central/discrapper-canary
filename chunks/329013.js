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
    u = n(857595),
    d = n(607070),
    f = n(100527),
    _ = n(906732),
    p = n(514361),
    h = n(803038),
    m = n(607270),
    g = n(705262),
    E = n(550385),
    b = n(266454),
    y = n(104494),
    O = n(639119),
    v = n(638212),
    I = n(767714),
    T = n(165583),
    S = n(504983),
    A = n(984802),
    C = n(626135),
    N = n(210887),
    R = n(695346),
    P = n(342386),
    w = n(981631),
    D = n(921944),
    x = n(474936),
    L = n(388032),
    j = n(505575);
let M = () => {
        (0, b.Q3)(o.z.CLIENT_THEMES_SPARKLE_PREVIEW, {
            dismissAction: D.L.PRIMARY,
            forceTrack: !0,
        }),
            (0, E.XO)(E.wh.CLIENT_THEMES),
            (0, P.default)();
    },
    k = () => {
        var e, t;
        let { analyticsLocations: n } = (0, _.ZP)(f.Z.USER_SETTINGS),
            o = (0, a.e7)([p.Z], () => p.Z.isPreview),
            s = (null == (t = (0, O.N)()) || null == (e = t.subscription_trial) ? void 0 : e.sku_id) === x.Si.TIER_2,
            u = (0, y.Ng)(),
            d = (0, y.Wp)(u, x.Si.TIER_2),
            { v2EditorEnabled: E } = h.Mc.useExperiment({ location: "UserSettingsAppearanceClientThemes" }),
            b = () => {
                if (!o || s) return null;
                let e = d
                    ? L.intl.formatToPlainString(L.t.bkQ4bG, { percent: null == u ? void 0 : u.discount.amount })
                    : L.intl.string(L.t.mr4K7O);
                return E
                    ? (0, r.jsxs)("div", {
                          className: j.tryItOutButtonsV2,
                          children: [
                              (0, r.jsx)(c.zxk, {
                                  variant: "secondary",
                                  text: L.intl.string(L.t["E+COuL"]),
                                  onClick: () => M(),
                              }),
                              (0, r.jsx)(v.Z, {
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
                              (0, r.jsx)(I.Z, {
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
                C.default.track(w.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: x.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                    location_stack: n,
                });
        }, [o, n]);
        let A =
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
                        (0, r.jsx)(T.ZP, {
                            type: x.cd.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL,
                            subscriptionTier: x.Si.TIER_2,
                        }),
                    ],
                }),
            N = (() => {
                let e = (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(g.ZP.Gradient, {
                            disabled: !E && o,
                            renderCTAButtons: b,
                        }),
                        A,
                    ],
                });
                return (
                    E
                        ? o &&
                          (e = (0, r.jsx)("div", {
                              className: j.colorThemesBackground,
                              children: e,
                          }))
                        : (e = (0, r.jsx)(S.Z, {
                              className: j.featureBorder,
                              isShown: o,
                              type: S.Y.PREMIUM,
                              children: e,
                          })),
                    e
                );
            })();
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsxs)(g.ZP, {
                    type: g.yH.SETTINGS,
                    children: [
                        (0, r.jsx)(g.ZP.Basic, { className: j.basicThemeSelectors }),
                        (0, r.jsx)(U, {}),
                        E && (0, r.jsx)(m.Z, {}),
                        N,
                    ],
                }),
                (0, r.jsx)(c.$i$, { className: j.divider }),
            ],
        });
    };
function U() {
    let e = (0, A.A6)(),
        {
            theme: t,
            useForcedColors: n,
            gradientPreset: i,
        } = (0, a.cj)([N.Z, d.Z, p.Z], () => ({
            theme: N.Z.theme,
            useForcedColors: d.Z.useForcedColors,
            gradientPreset: p.Z.gradientPreset,
        })),
        o = null != R.L1.useSetting().customUserThemeSettings;
    return t !== w.BRd.LIGHT
        ? null
        : (0, r.jsx)(c.j7V, {
              hideBorder: !0,
              value: e && (0, s.ap)(t) && !n,
              disabled: t !== w.BRd.LIGHT || n || null != i || o,
              onChange: u.lq,
              className: j.darkSidebarToggle,
              children: (0, r.jsx)("span", {
                  className: j.title,
                  children: L.intl.string(L.t.yF54Ki),
              }),
          });
}
let G = () =>
    (0, a.e7)([p.Z], () => p.Z.isPreview)
        ? null
        : (0, r.jsx)(c.zxk, {
              variant: "primary",
              text: L.intl.string(L.t.qYXrkZ),
              onClick: M,
          });
