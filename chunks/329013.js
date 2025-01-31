n.d(t, {
    g: () => L,
    i: () => y
});
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(704215),
    a = n(780384),
    o = n(481060),
    c = n(37234),
    d = n(857595),
    u = n(607070),
    m = n(100527),
    h = n(906732),
    g = n(238302),
    _ = n(514361),
    x = n(705262),
    p = n(540059),
    E = n(605236),
    C = n(104494),
    f = n(639119),
    T = n(311476),
    N = n(165583),
    I = n(197115),
    S = n(504983),
    b = n(626135),
    v = n(210887),
    j = n(981631),
    A = n(921944),
    O = n(474936),
    R = n(388032),
    P = n(878088);
let D = () => {
        (0, E.EW)(l.z.CLIENT_THEMES_SPARKLE_PREVIEW, {
            dismissAction: A.L.PRIMARY,
            forceTrack: !0
        }),
            (0, g.Kq)(),
            (0, c.xf)();
    },
    y = () => {
        var e, t;
        let { analyticsLocations: n } = (0, h.ZP)(m.Z.USER_SETTINGS),
            l = (0, r.e7)([_.Z], () => _.Z.isPreview),
            a = (null === (t = (0, f.N)()) || void 0 === t ? void 0 : null === (e = t.subscription_trial) || void 0 === e ? void 0 : e.sku_id) === O.Si.TIER_2,
            c = (0, C.Ng)(),
            d = (0, C.Wp)(c, O.Si.TIER_2),
            u = !l || a,
            { enabled: g } = T.Z.getCurrentConfig(
                { location: 'UserSettingsAppearanceClientThemes' },
                {
                    autoTrackExposure: !u,
                    disable: u
                }
            ),
            E = (0, p.Q3)('UserSettingsAppearanceClientThemes'),
            v = () =>
                !l || a
                    ? null
                    : (0, i.jsxs)('div', {
                          className: P.tryItOutButtons,
                          children: [
                              (0, i.jsx)(o.zxk, {
                                  size: o.zxk.Sizes.MEDIUM,
                                  color: g ? o.zxk.Colors.BRAND : o.zxk.Colors.PRIMARY,
                                  onClick: () => D(),
                                  children: g ? R.intl.string(R.t.SKNnqq) : R.intl.string(R.t['E+COuL'])
                              }),
                              (0, i.jsx)(I.Z, {
                                  showGradient: g,
                                  subscriptionTier: O.Si.TIER_2,
                                  buttonText: g ? R.intl.string(R.t.pj0XBA) : d ? R.intl.formatToPlainString(R.t.bkQ4bG, { percent: null == c ? void 0 : c.discount.amount }) : R.intl.string(R.t.mr4K7O),
                                  className: P.premiumCta
                              })
                          ]
                      });
        return (
            s.useEffect(() => {
                l &&
                    b.default.track(j.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: O.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                        location_stack: n
                    });
            }, [l, n]),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(x.ZP, {
                        type: x.yH.SETTINGS,
                        children: g
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(x.ZP.BasicAndGradient, {
                                          className: P.basicThemeSelectors,
                                          renderCTAButtons: v
                                      }),
                                      E && (0, i.jsx)(Z, {})
                                  ]
                              })
                            : (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(x.ZP.Basic, { className: P.basicThemeSelectors }),
                                      E && (0, i.jsx)(Z, {}),
                                      (0, i.jsxs)(S.Z, {
                                          className: P.featureBorder,
                                          isShown: l,
                                          type: S.Y.PREMIUM,
                                          children: [
                                              (0, i.jsx)(x.ZP.Gradient, {
                                                  disabled: l,
                                                  renderCTAButtons: v
                                              }),
                                              a &&
                                                  l &&
                                                  (0, i.jsxs)('div', {
                                                      children: [
                                                          (0, i.jsx)(o.zxk, {
                                                              className: P.previewThemeButtonWide,
                                                              color: o.zxk.Colors.PRIMARY,
                                                              onClick: () => D(),
                                                              children: R.intl.string(R.t['E+COuL'])
                                                          }),
                                                          (0, i.jsx)('div', { className: P.premiumTier2Divider }),
                                                          (0, i.jsx)(N.ZP, {
                                                              type: O.cd.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL,
                                                              subscriptionTier: O.Si.TIER_2
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
        darkSidebar: s
    } = (0, r.cj)([v.Z, u.Z, _.Z], () => ({
        theme: v.Z.theme,
        useForcedColors: u.Z.useForcedColors,
        darkSidebar: v.Z.darkSidebar,
        gradientPreset: _.Z.gradientPreset
    }));
    return e !== j.BRd.LIGHT
        ? null
        : (0, i.jsx)(o.j7V, {
              hideBorder: !0,
              value: s && (0, a.ap)(e) && !t,
              disabled: e !== j.BRd.LIGHT || t || null != n,
              onChange: d.lq,
              className: P.darkSidebarToggle,
              children: (0, i.jsx)('span', {
                  className: P.title,
                  children: R.intl.string(R.t.yF54Ki)
              })
          });
}
let L = () => {
    let e = (0, r.e7)([_.Z], () => _.Z.isPreview),
        t = (0, p.Q3)('ClientThemesSidebarButton');
    return e
        ? null
        : (0, i.jsx)(o.zxk, {
              size: t ? o.PhG.MEDIUM : o.PhG.SMALL,
              onClick: D,
              children: R.intl.string(R.t.qYXrkZ)
          });
};
