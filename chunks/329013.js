n.d(t, {
    g: () => w,
    i: () => D
});
var i = n(200651),
    r = n(192379),
    s = n(442837),
    l = n(704215),
    a = n(780384),
    o = n(481060),
    c = n(37234),
    d = n(857595),
    u = n(607070),
    m = n(100527),
    p = n(906732),
    g = n(238302),
    h = n(514361),
    f = n(705262),
    b = n(540059),
    _ = n(605236),
    x = n(104494),
    E = n(639119),
    j = n(311476),
    C = n(165583),
    O = n(197115),
    S = n(504983),
    v = n(626135),
    T = n(210887),
    I = n(981631),
    N = n(921944),
    y = n(474936),
    A = n(388032),
    P = n(967655);
let R = () => {
        (0, _.EW)(l.z.CLIENT_THEMES_SPARKLE_PREVIEW, {
            dismissAction: N.L.PRIMARY,
            forceTrack: !0
        }),
            (0, g.Kq)(),
            (0, c.xf)();
    },
    D = () => {
        var e, t;
        let { analyticsLocations: n } = (0, p.ZP)(m.Z.USER_SETTINGS),
            l = (0, s.e7)([h.Z], () => h.Z.isPreview),
            a = (null == (t = (0, E.N)()) || null == (e = t.subscription_trial) ? void 0 : e.sku_id) === y.Si.TIER_2,
            c = (0, x.Ng)(),
            d = (0, x.Wp)(c, y.Si.TIER_2),
            u = !l || a,
            { enabled: g } = j.Z.getCurrentConfig(
                { location: 'UserSettingsAppearanceClientThemes' },
                {
                    autoTrackExposure: !u,
                    disable: u
                }
            ),
            _ = (0, b.Q3)('UserSettingsAppearanceClientThemes'),
            T = () =>
                !l || a
                    ? null
                    : (0, i.jsxs)('div', {
                          className: P.tryItOutButtons,
                          children: [
                              (0, i.jsx)(o.zxk, {
                                  size: o.zxk.Sizes.MEDIUM,
                                  color: g ? o.zxk.Colors.BRAND : o.zxk.Colors.PRIMARY,
                                  onClick: () => R(),
                                  children: g ? A.intl.string(A.t.SKNnqq) : A.intl.string(A.t['E+COuL'])
                              }),
                              (0, i.jsx)(O.Z, {
                                  showGradient: g,
                                  subscriptionTier: y.Si.TIER_2,
                                  buttonText: g ? A.intl.string(A.t.pj0XBA) : d ? A.intl.formatToPlainString(A.t.bkQ4bG, { percent: null == c ? void 0 : c.discount.amount }) : A.intl.string(A.t.mr4K7O),
                                  className: P.premiumCta
                              })
                          ]
                      });
        return (
            r.useEffect(() => {
                l &&
                    v.default.track(I.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: y.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                        location_stack: n
                    });
            }, [l, n]),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(f.ZP, {
                        type: f.yH.SETTINGS,
                        children: g
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(f.ZP.BasicAndGradient, {
                                          className: P.basicThemeSelectors,
                                          renderCTAButtons: T
                                      }),
                                      _ && (0, i.jsx)(Z, {})
                                  ]
                              })
                            : (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(f.ZP.Basic, { className: P.basicThemeSelectors }),
                                      _ && (0, i.jsx)(Z, {}),
                                      (0, i.jsxs)(S.Z, {
                                          className: P.featureBorder,
                                          isShown: l,
                                          type: S.Y.PREMIUM,
                                          children: [
                                              (0, i.jsx)(f.ZP.Gradient, {
                                                  disabled: l,
                                                  renderCTAButtons: T
                                              }),
                                              a &&
                                                  l &&
                                                  (0, i.jsxs)('div', {
                                                      children: [
                                                          (0, i.jsx)(o.zxk, {
                                                              className: P.previewThemeButtonWide,
                                                              color: o.zxk.Colors.PRIMARY,
                                                              onClick: () => R(),
                                                              children: A.intl.string(A.t['E+COuL'])
                                                          }),
                                                          (0, i.jsx)('div', { className: P.premiumTier2Divider }),
                                                          (0, i.jsx)(C.ZP, {
                                                              type: y.cd.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL,
                                                              subscriptionTier: y.Si.TIER_2
                                                          })
                                                      ]
                                                  })
                                          ]
                                      })
                                  ]
                              })
                    }),
                    (0, i.jsx)(o.$i$, { className: P.divider })
                ]
            })
        );
    };
function Z() {
    let {
        theme: e,
        useForcedColors: t,
        gradientPreset: n,
        darkSidebar: r
    } = (0, s.cj)([T.Z, u.Z, h.Z], () => ({
        theme: T.Z.theme,
        useForcedColors: u.Z.useForcedColors,
        darkSidebar: T.Z.darkSidebar,
        gradientPreset: h.Z.gradientPreset
    }));
    return e !== I.BRd.LIGHT
        ? null
        : (0, i.jsx)(o.j7V, {
              hideBorder: !0,
              value: r && (0, a.ap)(e) && !t,
              disabled: e !== I.BRd.LIGHT || t || null != n,
              onChange: d.lq,
              className: P.darkSidebarToggle,
              children: (0, i.jsx)('span', {
                  className: P.title,
                  children: A.intl.string(A.t.yF54Ki)
              })
          });
}
let w = () => {
    let e = (0, s.e7)([h.Z], () => h.Z.isPreview),
        t = (0, b.Q3)('ClientThemesSidebarButton');
    return e
        ? null
        : (0, i.jsx)(o.zxk, {
              size: t ? o.PhG.MEDIUM : o.PhG.SMALL,
              onClick: R,
              children: A.intl.string(A.t.qYXrkZ)
          });
};
