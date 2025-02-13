n.d(t, {
    g: () => L,
    i: () => y
});
var i = n(200651),
    s = n(192379),
    l = n(442837),
    r = n(704215),
    a = n(780384),
    o = n(481060),
    c = n(37234),
    d = n(857595),
    u = n(607070),
    h = n(100527),
    m = n(906732),
    g = n(238302),
    x = n(514361),
    _ = n(705262),
    p = n(540059),
    E = n(605236),
    C = n(104494),
    N = n(639119),
    I = n(311476),
    f = n(165583),
    T = n(197115),
    S = n(504983),
    j = n(626135),
    v = n(210887),
    b = n(981631),
    A = n(921944),
    O = n(474936),
    R = n(388032),
    D = n(906971);
let P = () => {
        (0, E.EW)(r.z.CLIENT_THEMES_SPARKLE_PREVIEW, {
            dismissAction: A.L.PRIMARY,
            forceTrack: !0
        }),
            (0, g.Kq)(),
            (0, c.xf)();
    },
    y = () => {
        var e, t;
        let { analyticsLocations: n } = (0, m.ZP)(h.Z.USER_SETTINGS),
            r = (0, l.e7)([x.Z], () => x.Z.isPreview),
            a = (null === (t = (0, N.N)()) || void 0 === t ? void 0 : null === (e = t.subscription_trial) || void 0 === e ? void 0 : e.sku_id) === O.Si.TIER_2,
            c = (0, C.Ng)(),
            d = (0, C.Wp)(c, O.Si.TIER_2),
            u = !r || a,
            { enabled: g } = I.Z.getCurrentConfig(
                { location: 'UserSettingsAppearanceClientThemes' },
                {
                    autoTrackExposure: !u,
                    disable: u
                }
            ),
            E = (0, p.Q3)('UserSettingsAppearanceClientThemes'),
            v = () =>
                !r || a
                    ? null
                    : (0, i.jsxs)('div', {
                          className: D.tryItOutButtons,
                          children: [
                              (0, i.jsx)(o.zxk, {
                                  size: o.zxk.Sizes.MEDIUM,
                                  color: g ? o.zxk.Colors.BRAND : o.zxk.Colors.PRIMARY,
                                  onClick: () => P(),
                                  children: g ? R.intl.string(R.t.SKNnqq) : R.intl.string(R.t['E+COuL'])
                              }),
                              (0, i.jsx)(T.Z, {
                                  showGradient: g,
                                  subscriptionTier: O.Si.TIER_2,
                                  buttonText: g ? R.intl.string(R.t.pj0XBA) : d ? R.intl.formatToPlainString(R.t.bkQ4bG, { percent: null == c ? void 0 : c.discount.amount }) : R.intl.string(R.t.mr4K7O),
                                  className: D.premiumCta
                              })
                          ]
                      });
        return (
            s.useEffect(() => {
                r &&
                    j.default.track(b.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: O.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                        location_stack: n
                    });
            }, [r, n]),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(_.ZP, {
                        type: _.yH.SETTINGS,
                        children: g
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(_.ZP.BasicAndGradient, {
                                          className: D.basicThemeSelectors,
                                          renderCTAButtons: v
                                      }),
                                      E && (0, i.jsx)(Z, {})
                                  ]
                              })
                            : (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(_.ZP.Basic, { className: D.basicThemeSelectors }),
                                      E && (0, i.jsx)(Z, {}),
                                      (0, i.jsxs)(S.Z, {
                                          className: D.featureBorder,
                                          isShown: r,
                                          type: S.Y.PREMIUM,
                                          children: [
                                              (0, i.jsx)(_.ZP.Gradient, {
                                                  disabled: r,
                                                  renderCTAButtons: v
                                              }),
                                              a &&
                                                  r &&
                                                  (0, i.jsxs)('div', {
                                                      children: [
                                                          (0, i.jsx)(o.zxk, {
                                                              className: D.previewThemeButtonWide,
                                                              color: o.zxk.Colors.PRIMARY,
                                                              onClick: () => P(),
                                                              children: R.intl.string(R.t['E+COuL'])
                                                          }),
                                                          (0, i.jsx)('div', { className: D.premiumTier2Divider }),
                                                          (0, i.jsx)(f.ZP, {
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
                    (0, i.jsx)(o.$i$, { className: D.divider })
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
    } = (0, l.cj)([v.Z, u.Z, x.Z], () => ({
        theme: v.Z.theme,
        useForcedColors: u.Z.useForcedColors,
        darkSidebar: v.Z.darkSidebar,
        gradientPreset: x.Z.gradientPreset
    }));
    return e !== b.BRd.LIGHT
        ? null
        : (0, i.jsx)(o.j7V, {
              hideBorder: !0,
              value: s && (0, a.ap)(e) && !t,
              disabled: e !== b.BRd.LIGHT || t || null != n,
              onChange: d.lq,
              className: D.darkSidebarToggle,
              children: (0, i.jsx)('span', {
                  className: D.title,
                  children: R.intl.string(R.t.yF54Ki)
              })
          });
}
let L = () => {
    let e = (0, l.e7)([x.Z], () => x.Z.isPreview),
        t = (0, p.Q3)('ClientThemesSidebarButton');
    return e
        ? null
        : (0, i.jsx)(o.zxk, {
              size: t ? o.PhG.MEDIUM : o.PhG.SMALL,
              onClick: P,
              children: R.intl.string(R.t.qYXrkZ)
          });
};
