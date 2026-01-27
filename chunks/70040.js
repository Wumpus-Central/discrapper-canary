n.d(t, {
    I: () => L,
    Q: () => U,
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(554146),
    a = n(582754),
    o = n(397927),
    c = n(955572),
    d = n(775602),
    u = n(793574),
    _ = n(688810),
    p = n(47671),
    m = n(959443),
    g = n(692798),
    A = n(793943),
    f = n(826673),
    h = n(422936),
    b = n(234419),
    E = n(792656),
    x = n(511484),
    O = n(811611),
    C = n(97469),
    I = n(954571),
    T = n(544028),
    S = n(253932),
    j = n(358776),
    v = n(12901),
    N = n(652215),
    y = n(49999),
    P = n(788868),
    R = n(985018),
    D = n(21082);
let w = () => {
        (0, f.Dr)(s.M.CLIENT_THEMES_SPARKLE_PREVIEW, {
            dismissAction: y.i.PRIMARY,
            forceTrack: !0,
        }),
            (0, A.nf)(A.HP.CLIENT_THEMES),
            (0, v.default)();
    },
    L = () => {
        var e, t;
        let n,
            { analyticsLocations: s } = (0, _.Ay)(u.A.USER_SETTINGS),
            a = (0, l.bG)([p.A], () => p.A.isPreview),
            c = (null == (t = (0, b.V)()) || null == (e = t.subscription_trial) ? void 0 : e.sku_id) === P.pe.TIER_2,
            d = (0, h.O)(),
            A = (0, x.U9)(d, P.pe.TIER_2),
            f = (0, j.dk)("UserSettingsAppearanceClientThemes");
        i.useEffect(() => {
            a &&
                I.default.track(N.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: P.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                    location_stack: s,
                });
        }, [a, s]);
        let C =
                c &&
                a &&
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)("div", {
                            className: D.c7,
                            children: (0, r.jsx)(o.Button, {
                                variant: "secondary",
                                fullWidth: !0,
                                text: R.intl.string(R.t["E+COuA"]),
                                onClick: () => w(),
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: D.BU,
                        }),
                        (0, r.jsx)(O.Ay, {
                            type: P.e.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL,
                            subscriptionTier: P.pe.TIER_2,
                        }),
                    ],
                }),
            T =
                ((n = (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(g.Ay.Gradient, {
                            disabled: !1,
                            renderCTAButtons: () => {
                                if (!a || c) return null;
                                let e = A
                                    ? R.intl.formatToPlainString(R.t.bkQ4bH, {
                                          percent: null == d ? void 0 : d.discount.amount,
                                      })
                                    : R.intl.string(R.t.mr4K7D);
                                return (0, r.jsxs)("div", {
                                    className: D.gY,
                                    children: [
                                        (0, r.jsx)(o.Button, {
                                            variant: "secondary",
                                            text: R.intl.string(R.t["E+COuA"]),
                                            onClick: () => w(),
                                        }),
                                        (0, r.jsx)(E.A, {
                                            subscriptionTier: P.pe.TIER_2,
                                            defaultTextOverride: e,
                                            premiumModalAnalyticsLocation: {
                                                object: N.ZSU.BUTTON_CTA,
                                                objectType: N.AnalyticsObjectTypes.BUY,
                                            },
                                            fullWidth: !0,
                                        }),
                                    ],
                                });
                            },
                        }),
                        C,
                    ],
                })),
                a &&
                    (n = (0, r.jsx)("div", {
                        className: D._$,
                        children: n,
                    })),
                n);
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsxs)(g.Ay, {
                    type: g.v0.SETTINGS,
                    children: [
                        (0, r.jsx)(g.Ay.Basic, {
                            className: D.a6,
                        }),
                        (0, r.jsx)(M, {}),
                        (0, r.jsx)(m.A, {}),
                        T,
                    ],
                }),
                !f &&
                    (0, r.jsx)(o.cGx, {
                        className: D.yF,
                    }),
            ],
        });
    };

function M() {
    let e = (0, C.qo)(),
        {
            theme: t,
            useForcedColors: n,
            gradientPreset: i,
        } = (0, l.cf)([T.A, d.A, p.A], () => ({
            theme: T.A.theme,
            useForcedColors: d.A.useForcedColors,
            gradientPreset: p.A.gradientPreset,
        })),
        s = null != S.eh.useSetting().customUserThemeSettings;
    return t !== N.NJ8.LIGHT
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(o.cGx, {
                      gap: 24,
                  }),
                  (0, r.jsx)(o.dOG, {
                      label: R.intl.string(R.t.yF54Ks),
                      checked: e && (0, a.qB)(t) && !n,
                      disabled: t !== N.NJ8.LIGHT || n || null != i || s,
                      onChange: c.LO,
                  }),
                  (0, r.jsx)(o.cGx, {
                      gap: 24,
                  }),
              ],
          });
}
let U = () =>
    (0, l.bG)([p.A], () => p.A.isPreview)
        ? null
        : (0, r.jsx)(o.Button, {
              variant: "primary",
              text: R.intl.string(R.t.qYXrkX),
              onClick: w,
          });
