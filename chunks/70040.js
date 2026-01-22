n.d(t, {
    I: () => j,
    Q: () => k,
});
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(554146),
    o = n(582754),
    l = n(397927),
    c = n(955572),
    u = n(775602),
    d = n(793574),
    f = n(688810),
    p = n(47671),
    _ = n(181824),
    h = n(692798),
    m = n(793943),
    g = n(826673),
    E = n(422936),
    b = n(234419),
    y = n(792656),
    O = n(511484),
    A = n(811611),
    v = n(97469),
    S = n(954571),
    I = n(544028),
    T = n(253932),
    C = n(358776),
    N = n(12901),
    R = n(652215),
    w = n(49999),
    P = n(788868),
    D = n(985018),
    x = n(21082);
let L = () => {
        (0, g.Dr)(s.M.CLIENT_THEMES_SPARKLE_PREVIEW, {
            dismissAction: w.i.PRIMARY,
            forceTrack: !0,
        }),
            (0, m.nf)(m.HP.CLIENT_THEMES),
            (0, N.default)();
    },
    j = () => {
        var e, t;
        let { analyticsLocations: n } = (0, f.Ay)(d.A.USER_SETTINGS),
            s = (0, a.bG)([p.A], () => p.A.isPreview),
            o = (null == (t = (0, b.V)()) || null == (e = t.subscription_trial) ? void 0 : e.sku_id) === P.pe.TIER_2,
            c = (0, E.O)(),
            u = (0, O.U9)(c, P.pe.TIER_2),
            m = (0, C.dk)("UserSettingsAppearanceClientThemes"),
            g = () => {
                if (!s || o) return null;
                let e = u
                    ? D.intl.formatToPlainString(D.t.bkQ4bH, {
                          percent: null == c ? void 0 : c.discount.amount,
                      })
                    : D.intl.string(D.t.mr4K7D);
                return (0, r.jsxs)("div", {
                    className: x.gY,
                    children: [
                        (0, r.jsx)(l.Button, {
                            variant: "secondary",
                            text: D.intl.string(D.t["E+COuA"]),
                            onClick: () => L(),
                        }),
                        (0, r.jsx)(y.A, {
                            subscriptionTier: P.pe.TIER_2,
                            defaultTextOverride: e,
                            premiumModalAnalyticsLocation: {
                                object: R.ZSU.BUTTON_CTA,
                                objectType: R.AnalyticsObjectTypes.BUY,
                            },
                            fullWidth: !0,
                        }),
                    ],
                });
            };
        i.useEffect(() => {
            s &&
                S.default.track(R.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: P.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                    location_stack: n,
                });
        }, [s, n]);
        let v =
                o &&
                s &&
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)("div", {
                            className: x.c7,
                            children: (0, r.jsx)(l.Button, {
                                variant: "secondary",
                                fullWidth: !0,
                                text: D.intl.string(D.t["E+COuA"]),
                                onClick: () => L(),
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: x.BU,
                        }),
                        (0, r.jsx)(A.Ay, {
                            type: P.e.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL,
                            subscriptionTier: P.pe.TIER_2,
                        }),
                    ],
                }),
            I = (() => {
                let e = (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(h.Ay.Gradient, {
                            disabled: !1,
                            renderCTAButtons: g,
                        }),
                        v,
                    ],
                });
                return (
                    s &&
                        (e = (0, r.jsx)("div", {
                            className: x._$,
                            children: e,
                        })),
                    e
                );
            })();
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsxs)(h.Ay, {
                    type: h.v0.SETTINGS,
                    children: [
                        (0, r.jsx)(h.Ay.Basic, {
                            className: x.a6,
                        }),
                        (0, r.jsx)(M, {}),
                        (0, r.jsx)(_.A, {}),
                        I,
                    ],
                }),
                !m &&
                    (0, r.jsx)(l.cGx, {
                        className: x.yF,
                    }),
            ],
        });
    };

function M() {
    let e = (0, v.qo)(),
        {
            theme: t,
            useForcedColors: n,
            gradientPreset: i,
        } = (0, a.cf)([I.A, u.A, p.A], () => ({
            theme: I.A.theme,
            useForcedColors: u.A.useForcedColors,
            gradientPreset: p.A.gradientPreset,
        })),
        s = null != T.eh.useSetting().customUserThemeSettings;
    return t !== R.NJ8.LIGHT
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(l.cGx, {
                      gap: 24,
                  }),
                  (0, r.jsx)(l.dOG, {
                      label: D.intl.string(D.t.yF54Ks),
                      checked: e && (0, o.qB)(t) && !n,
                      disabled: t !== R.NJ8.LIGHT || n || null != i || s,
                      onChange: c.LO,
                  }),
                  (0, r.jsx)(l.cGx, {
                      gap: 24,
                  }),
              ],
          });
}
let k = () =>
    (0, a.bG)([p.A], () => p.A.isPreview)
        ? null
        : (0, r.jsx)(l.Button, {
              variant: "primary",
              text: D.intl.string(D.t.qYXrkX),
              onClick: L,
          });
