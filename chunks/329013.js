n.d(t, {
    g: () => D,
    i: () => P
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
    b = n(605236),
    _ = n(104494),
    x = n(639119),
    E = n(767714),
    j = n(165583),
    C = n(504983),
    O = n(626135),
    S = n(210887),
    v = n(981631),
    T = n(921944),
    N = n(474936),
    I = n(388032),
    y = n(967655);
let A = () => {
        (0, b.EW)(l.z.CLIENT_THEMES_SPARKLE_PREVIEW, {
            dismissAction: T.L.PRIMARY,
            forceTrack: !0
        }),
            (0, f.XO)(f.wh.CLIENT_THEMES),
            (0, c.xf)();
    },
    P = () => {
        var e, t;
        let { analyticsLocations: n } = (0, g.ZP)(m.Z.USER_SETTINGS),
            l = (0, s.e7)([p.Z], () => p.Z.isPreview),
            a = (null == (t = (0, x.N)()) || null == (e = t.subscription_trial) ? void 0 : e.sku_id) === N.Si.TIER_2,
            c = (0, _.Ng)(),
            d = (0, _.Wp)(c, N.Si.TIER_2);
        return (
            r.useEffect(() => {
                l &&
                    O.default.track(v.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: N.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                        location_stack: n
                    });
            }, [l, n]),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsxs)(h.ZP, {
                        type: h.yH.SETTINGS,
                        children: [
                            (0, i.jsx)(h.ZP.Basic, { className: y.basicThemeSelectors }),
                            (0, i.jsx)(R, {}),
                            (0, i.jsxs)(C.Z, {
                                className: y.featureBorder,
                                isShown: l,
                                type: C.Y.PREMIUM,
                                children: [
                                    (0, i.jsx)(h.ZP.Gradient, {
                                        disabled: l,
                                        renderCTAButtons: () =>
                                            !l || a
                                                ? null
                                                : (0, i.jsxs)('div', {
                                                      className: y.tryItOutButtons,
                                                      children: [
                                                          (0, i.jsx)(o.zxk, {
                                                              size: o.zxk.Sizes.MEDIUM,
                                                              color: o.zxk.Colors.PRIMARY,
                                                              onClick: () => A(),
                                                              children: I.intl.string(I.t['E+COuL'])
                                                          }),
                                                          (0, i.jsx)(E.Z, {
                                                              showGradient: !1,
                                                              subscriptionTier: N.Si.TIER_2,
                                                              textOptions: { textOverride: d ? I.intl.formatToPlainString(I.t.bkQ4bG, { percent: null == c ? void 0 : c.discount.amount }) : I.intl.string(I.t.mr4K7O) },
                                                              className: y.premiumCta
                                                          })
                                                      ]
                                                  })
                                    }),
                                    a &&
                                        l &&
                                        (0, i.jsxs)('div', {
                                            children: [
                                                (0, i.jsx)(o.zxk, {
                                                    className: y.previewThemeButtonWide,
                                                    color: o.zxk.Colors.PRIMARY,
                                                    onClick: () => A(),
                                                    children: I.intl.string(I.t['E+COuL'])
                                                }),
                                                (0, i.jsx)('div', { className: y.premiumTier2Divider }),
                                                (0, i.jsx)(j.ZP, {
                                                    type: N.cd.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL,
                                                    subscriptionTier: N.Si.TIER_2
                                                })
                                            ]
                                        })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsx)(o.$i$, { className: y.divider })
                ]
            })
        );
    };
function R() {
    let {
        theme: e,
        useForcedColors: t,
        gradientPreset: n,
        darkSidebar: r
    } = (0, s.cj)([S.Z, u.Z, p.Z], () => ({
        theme: S.Z.theme,
        useForcedColors: u.Z.useForcedColors,
        darkSidebar: S.Z.darkSidebar,
        gradientPreset: p.Z.gradientPreset
    }));
    return e !== v.BRd.LIGHT
        ? null
        : (0, i.jsx)(o.j7V, {
              hideBorder: !0,
              value: r && (0, a.ap)(e) && !t,
              disabled: e !== v.BRd.LIGHT || t || null != n,
              onChange: d.lq,
              className: y.darkSidebarToggle,
              children: (0, i.jsx)('span', {
                  className: y.title,
                  children: I.intl.string(I.t.yF54Ki)
              })
          });
}
let D = () =>
    (0, s.e7)([p.Z], () => p.Z.isPreview)
        ? null
        : (0, i.jsx)(o.zxk, {
              size: o.PhG.MEDIUM,
              onClick: A,
              children: I.intl.string(I.t.qYXrkZ)
          });
