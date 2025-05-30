n.d(t, {
    g: () => Z,
    i: () => R
});
var i = n(255367),
    r = n(73800),
    s = n(442837),
    l = n(704215),
    a = n(780384),
    o = n(481060),
    c = n(37234),
    d = n(857595),
    u = n(607070),
    m = n(100527),
    g = n(906732),
    p = n(514361),
    h = n(705262),
    f = n(550385),
    b = n(540059),
    _ = n(605236),
    x = n(104494),
    E = n(639119),
    C = n(767714),
    j = n(165583),
    O = n(504983),
    S = n(626135),
    v = n(210887),
    T = n(981631),
    N = n(921944),
    I = n(474936),
    y = n(388032),
    A = n(967655);
let P = () => {
        (0, _.EW)(l.z.CLIENT_THEMES_SPARKLE_PREVIEW, {
            dismissAction: N.L.PRIMARY,
            forceTrack: !0
        }),
            (0, f.XO)(f.wh.CLIENT_THEMES),
            (0, c.xf)();
    },
    R = () => {
        var e, t;
        let { analyticsLocations: n } = (0, g.ZP)(m.Z.USER_SETTINGS),
            l = (0, s.e7)([p.Z], () => p.Z.isPreview),
            a = (null == (t = (0, E.N)()) || null == (e = t.subscription_trial) ? void 0 : e.sku_id) === I.Si.TIER_2,
            c = (0, x.Ng)(),
            d = (0, x.Wp)(c, I.Si.TIER_2),
            u = (0, b.Q3)('UserSettingsAppearanceClientThemes');
        return (
            r.useEffect(() => {
                l &&
                    S.default.track(T.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: I.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                        location_stack: n
                    });
            }, [l, n]),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsxs)(h.ZP, {
                        type: h.yH.SETTINGS,
                        children: [
                            (0, i.jsx)(h.ZP.Basic, { className: A.basicThemeSelectors }),
                            u && (0, i.jsx)(D, {}),
                            (0, i.jsxs)(O.Z, {
                                className: A.featureBorder,
                                isShown: l,
                                type: O.Y.PREMIUM,
                                children: [
                                    (0, i.jsx)(h.ZP.Gradient, {
                                        disabled: l,
                                        renderCTAButtons: () =>
                                            !l || a
                                                ? null
                                                : (0, i.jsxs)('div', {
                                                      className: A.tryItOutButtons,
                                                      children: [
                                                          (0, i.jsx)(o.zxk, {
                                                              size: o.zxk.Sizes.MEDIUM,
                                                              color: o.zxk.Colors.PRIMARY,
                                                              onClick: () => P(),
                                                              children: y.intl.string(y.t['E+COuL'])
                                                          }),
                                                          (0, i.jsx)(C.Z, {
                                                              showGradient: !1,
                                                              subscriptionTier: I.Si.TIER_2,
                                                              textOptions: { textOverride: d ? y.intl.formatToPlainString(y.t.bkQ4bG, { percent: null == c ? void 0 : c.discount.amount }) : y.intl.string(y.t.mr4K7O) },
                                                              className: A.premiumCta
                                                          })
                                                      ]
                                                  })
                                    }),
                                    a &&
                                        l &&
                                        (0, i.jsxs)('div', {
                                            children: [
                                                (0, i.jsx)(o.zxk, {
                                                    className: A.previewThemeButtonWide,
                                                    color: o.zxk.Colors.PRIMARY,
                                                    onClick: () => P(),
                                                    children: y.intl.string(y.t['E+COuL'])
                                                }),
                                                (0, i.jsx)('div', { className: A.premiumTier2Divider }),
                                                (0, i.jsx)(j.ZP, {
                                                    type: I.cd.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL,
                                                    subscriptionTier: I.Si.TIER_2
                                                })
                                            ]
                                        })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsx)(o.$i$, { className: A.divider })
                ]
            })
        );
    };
function D() {
    let {
        theme: e,
        useForcedColors: t,
        gradientPreset: n,
        darkSidebar: r
    } = (0, s.cj)([v.Z, u.Z, p.Z], () => ({
        theme: v.Z.theme,
        useForcedColors: u.Z.useForcedColors,
        darkSidebar: v.Z.darkSidebar,
        gradientPreset: p.Z.gradientPreset
    }));
    return e !== T.BRd.LIGHT
        ? null
        : (0, i.jsx)(o.j7V, {
              hideBorder: !0,
              value: r && (0, a.ap)(e) && !t,
              disabled: e !== T.BRd.LIGHT || t || null != n,
              onChange: d.lq,
              className: A.darkSidebarToggle,
              children: (0, i.jsx)('span', {
                  className: A.title,
                  children: y.intl.string(y.t.yF54Ki)
              })
          });
}
let Z = () => {
    let e = (0, s.e7)([p.Z], () => p.Z.isPreview),
        t = (0, b.Q3)('ClientThemesSidebarButton');
    return e
        ? null
        : (0, i.jsx)(o.zxk, {
              size: t ? o.PhG.MEDIUM : o.PhG.SMALL,
              onClick: P,
              children: y.intl.string(y.t.qYXrkZ)
          });
};
