n.d(t, {
    g: function () {
        return R;
    },
    i: function () {
        return O;
    }
});
var i = n(200651),
    r = n(192379),
    s = n(442837),
    a = n(704215),
    l = n(481060),
    o = n(37234),
    c = n(100527),
    d = n(906732),
    u = n(238302),
    m = n(514361),
    g = n(705262),
    h = n(605236),
    p = n(104494),
    x = n(639119),
    f = n(311476),
    _ = n(165583),
    E = n(197115),
    C = n(504983),
    T = n(626135),
    S = n(981631),
    b = n(921944),
    I = n(474936),
    N = n(388032),
    v = n(878088),
    A = n(232186);
let j = () => {
        (0, h.EW)(a.z.CLIENT_THEMES_SPARKLE_PREVIEW, {
            dismissAction: b.L.PRIMARY,
            forceTrack: !0
        }),
            (0, u.Kq)(),
            (0, o.xf)();
    },
    O = () => {
        var e, t;
        let { analyticsLocations: n } = (0, d.ZP)(c.Z.USER_SETTINGS),
            a = (0, s.e7)([m.Z], () => m.Z.isPreview),
            o = (null === (t = (0, x.N)()) || void 0 === t ? void 0 : null === (e = t.subscription_trial) || void 0 === e ? void 0 : e.sku_id) === I.Si.TIER_2,
            u = (0, p.Ng)(),
            h = (0, p.Wp)(u, I.Si.TIER_2),
            b = !a || o,
            { enabled: O } = f.Z.getCurrentConfig(
                { location: 'UserSettingsAppearanceClientThemes' },
                {
                    autoTrackExposure: !b,
                    disable: b
                }
            ),
            R = () =>
                !a || o
                    ? null
                    : (0, i.jsxs)('div', {
                          className: v.tryItOutButtons,
                          children: [
                              (0, i.jsx)(l.Button, {
                                  color: O ? l.Button.Colors.BRAND : l.Button.Colors.PRIMARY,
                                  onClick: () => j(),
                                  children: O ? N.intl.string(N.t.SKNnqq) : N.intl.string(N.t['E+COuL'])
                              }),
                              (0, i.jsx)(E.Z, {
                                  showGradient: O,
                                  subscriptionTier: I.Si.TIER_2,
                                  buttonText: O ? N.intl.string(N.t.pj0XBA) : h ? N.intl.formatToPlainString(N.t.bkQ4bG, { percent: null == u ? void 0 : u.discount.amount }) : N.intl.string(N.t.mr4K7O),
                                  className: v.premiumCta
                              })
                          ]
                      });
        return (
            r.useEffect(() => {
                a &&
                    T.default.track(S.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: I.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                        location_stack: n
                    });
            }, [a, n]),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(g.ZP, {
                        type: g.yH.SETTINGS,
                        children: O
                            ? (0, i.jsx)(g.ZP.BasicAndGradient, {
                                  className: v.basicThemeSelectors,
                                  renderCTAButtons: R
                              })
                            : (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(g.ZP.Basic, { className: v.basicThemeSelectors }),
                                      (0, i.jsxs)(C.Z, {
                                          className: v.featureBorder,
                                          isShown: a,
                                          type: C.Y.PREMIUM,
                                          children: [
                                              (0, i.jsx)(g.ZP.Gradient, {
                                                  disabled: a,
                                                  renderCTAButtons: R
                                              }),
                                              o &&
                                                  a &&
                                                  (0, i.jsxs)('div', {
                                                      children: [
                                                          (0, i.jsx)(l.Button, {
                                                              className: v.previewThemeButtonWide,
                                                              color: l.Button.Colors.PRIMARY,
                                                              onClick: () => j(),
                                                              children: N.intl.string(N.t['E+COuL'])
                                                          }),
                                                          (0, i.jsx)('div', { className: v.premiumTier2Divider }),
                                                          (0, i.jsx)(_.ZP, {
                                                              type: I.cd.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL,
                                                              subscriptionTier: I.Si.TIER_2
                                                          })
                                                      ]
                                                  })
                                          ]
                                      })
                                  ]
                              })
                    }),
                    (0, i.jsx)(l.FormDivider, { className: A.marginTop20 })
                ]
            })
        );
    },
    R = () =>
        (0, s.e7)([m.Z], () => m.Z.isPreview)
            ? null
            : (0, i.jsx)(l.Button, {
                  size: l.ButtonSizes.SMALL,
                  onClick: () => j(),
                  children: N.intl.string(N.t.qYXrkZ)
              });
