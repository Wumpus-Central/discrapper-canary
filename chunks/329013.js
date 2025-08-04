n.d(t, {
    g: () => w,
    i: () => D
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
    C = n(767714),
    E = n(165583),
    O = n(504983),
    v = n(984802),
    S = n(626135),
    T = n(210887),
    N = n(981631),
    I = n(921944),
    y = n(474936),
    A = n(388032),
    P = n(967655);
let R = () => {
        ((0, x.Q3)(a.z.CLIENT_THEMES_SPARKLE_PREVIEW, {
            dismissAction: I.L.PRIMARY,
            forceTrack: !0
        }),
            (0, b.XO)(b.wh.CLIENT_THEMES),
            (0, d.xf)());
    },
    D = () => {
        var e, t;
        let { analyticsLocations: n } = (0, g.ZP)(p.Z.USER_SETTINGS),
            a = (0, s.e7)([h.Z], () => h.Z.isPreview),
            l = (null == (t = (0, j.N)()) || null == (e = t.subscription_trial) ? void 0 : e.sku_id) === y.Si.TIER_2,
            d = (0, _.Ng)(),
            u = (0, _.Wp)(d, y.Si.TIER_2);
        return (
            r.useEffect(() => {
                a &&
                    S.default.track(N.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: y.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                        location_stack: n
                    });
            }, [a, n]),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsxs)(f.ZP, {
                        type: f.yH.SETTINGS,
                        children: [
                            (0, i.jsx)(f.ZP.Basic, { className: P.basicThemeSelectors }),
                            (0, i.jsx)(Z, {}),
                            (0, i.jsxs)(O.Z, {
                                className: P.featureBorder,
                                isShown: a,
                                type: O.Y.PREMIUM,
                                children: [
                                    (0, i.jsx)(f.ZP.Gradient, {
                                        disabled: a,
                                        renderCTAButtons: () =>
                                            !a || l
                                                ? null
                                                : (0, i.jsxs)('div', {
                                                      className: P.tryItOutButtons,
                                                      children: [
                                                          (0, i.jsx)(c.zxk, {
                                                              variant: 'secondary',
                                                              text: A.intl.string(A.t['E+COuL']),
                                                              onClick: () => R()
                                                          }),
                                                          (0, i.jsx)(C.Z, {
                                                              showGradient: !1,
                                                              subscriptionTier: y.Si.TIER_2,
                                                              textOptions: { textOverride: u ? A.intl.formatToPlainString(A.t.bkQ4bG, { percent: null == d ? void 0 : d.discount.amount }) : A.intl.string(A.t.mr4K7O) },
                                                              className: P.premiumCta
                                                          })
                                                      ]
                                                  })
                                    }),
                                    l &&
                                        a &&
                                        (0, i.jsxs)('div', {
                                            children: [
                                                (0, i.jsx)(o.zx, {
                                                    className: P.previewThemeButtonWide,
                                                    color: o.zx.Colors.PRIMARY,
                                                    onClick: () => R(),
                                                    children: A.intl.string(A.t['E+COuL'])
                                                }),
                                                (0, i.jsx)('div', { className: P.premiumTier2Divider }),
                                                (0, i.jsx)(E.ZP, {
                                                    type: y.cd.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL,
                                                    subscriptionTier: y.Si.TIER_2
                                                })
                                            ]
                                        })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsx)(c.$i$, { className: P.divider })
                ]
            })
        );
    };
function Z() {
    let e = (0, v.A6)(),
        {
            theme: t,
            useForcedColors: n,
            gradientPreset: r
        } = (0, s.cj)([T.Z, m.Z, h.Z], () => ({
            theme: T.Z.theme,
            useForcedColors: m.Z.useForcedColors,
            gradientPreset: h.Z.gradientPreset
        }));
    return t !== N.BRd.LIGHT
        ? null
        : (0, i.jsx)(c.j7V, {
              hideBorder: !0,
              value: e && (0, l.ap)(t) && !n,
              disabled: t !== N.BRd.LIGHT || n || null != r,
              onChange: u.lq,
              className: P.darkSidebarToggle,
              children: (0, i.jsx)('span', {
                  className: P.title,
                  children: A.intl.string(A.t.yF54Ki)
              })
          });
}
let w = () =>
    (0, s.e7)([h.Z], () => h.Z.isPreview)
        ? null
        : (0, i.jsx)(c.zxk, {
              variant: 'primary',
              text: A.intl.string(A.t.qYXrkZ),
              onClick: R
          });
