n.d(t, {
    g: () => Z,
    i: () => R
});
var i = n(255367),
    r = n(73800),
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
    f = n(705262),
    b = n(550385),
    x = n(266454),
    _ = n(104494),
    j = n(639119),
    E = n(767714),
    O = n(165583),
    C = n(504983),
    v = n(626135),
    S = n(210887),
    T = n(981631),
    N = n(921944),
    I = n(474936),
    y = n(388032),
    A = n(967655);
let P = () => {
        ((0, x.Q3)(a.z.CLIENT_THEMES_SPARKLE_PREVIEW, {
            dismissAction: N.L.PRIMARY,
            forceTrack: !0
        }),
            (0, b.XO)(b.wh.CLIENT_THEMES),
            (0, d.xf)());
    },
    R = () => {
        var e, t;
        let { analyticsLocations: n } = (0, g.ZP)(p.Z.USER_SETTINGS),
            a = (0, s.e7)([h.Z], () => h.Z.isPreview),
            l = (null == (t = (0, j.N)()) || null == (e = t.subscription_trial) ? void 0 : e.sku_id) === I.Si.TIER_2,
            d = (0, _.Ng)(),
            u = (0, _.Wp)(d, I.Si.TIER_2);
        return (
            r.useEffect(() => {
                a &&
                    v.default.track(T.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: I.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                        location_stack: n
                    });
            }, [a, n]),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsxs)(f.ZP, {
                        type: f.yH.SETTINGS,
                        children: [
                            (0, i.jsx)(f.ZP.Basic, { className: A.basicThemeSelectors }),
                            (0, i.jsx)(D, {}),
                            (0, i.jsxs)(C.Z, {
                                className: A.featureBorder,
                                isShown: a,
                                type: C.Y.PREMIUM,
                                children: [
                                    (0, i.jsx)(f.ZP.Gradient, {
                                        disabled: a,
                                        renderCTAButtons: () =>
                                            !a || l
                                                ? null
                                                : (0, i.jsxs)('div', {
                                                      className: A.tryItOutButtons,
                                                      children: [
                                                          (0, i.jsx)(c.zxk, {
                                                              variant: 'secondary',
                                                              text: y.intl.string(y.t['E+COuL']),
                                                              onClick: () => P()
                                                          }),
                                                          (0, i.jsx)(E.Z, {
                                                              showGradient: !1,
                                                              subscriptionTier: I.Si.TIER_2,
                                                              textOptions: { textOverride: u ? y.intl.formatToPlainString(y.t.bkQ4bG, { percent: null == d ? void 0 : d.discount.amount }) : y.intl.string(y.t.mr4K7O) },
                                                              className: A.premiumCta
                                                          })
                                                      ]
                                                  })
                                    }),
                                    l &&
                                        a &&
                                        (0, i.jsxs)('div', {
                                            children: [
                                                (0, i.jsx)(o.zx, {
                                                    className: A.previewThemeButtonWide,
                                                    color: o.zx.Colors.PRIMARY,
                                                    onClick: () => P(),
                                                    children: y.intl.string(y.t['E+COuL'])
                                                }),
                                                (0, i.jsx)('div', { className: A.premiumTier2Divider }),
                                                (0, i.jsx)(O.ZP, {
                                                    type: I.cd.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL,
                                                    subscriptionTier: I.Si.TIER_2
                                                })
                                            ]
                                        })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsx)(c.$i$, { className: A.divider })
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
    } = (0, s.cj)([S.Z, m.Z, h.Z], () => ({
        theme: S.Z.theme,
        useForcedColors: m.Z.useForcedColors,
        darkSidebar: S.Z.darkSidebar,
        gradientPreset: h.Z.gradientPreset
    }));
    return e !== T.BRd.LIGHT
        ? null
        : (0, i.jsx)(c.j7V, {
              hideBorder: !0,
              value: r && (0, l.ap)(e) && !t,
              disabled: e !== T.BRd.LIGHT || t || null != n,
              onChange: u.lq,
              className: A.darkSidebarToggle,
              children: (0, i.jsx)('span', {
                  className: A.title,
                  children: y.intl.string(y.t.yF54Ki)
              })
          });
}
let Z = () =>
    (0, s.e7)([h.Z], () => h.Z.isPreview)
        ? null
        : (0, i.jsx)(c.zxk, {
              variant: 'primary',
              text: y.intl.string(y.t.qYXrkZ),
              onClick: P
          });
