n.d(t, {
    g: () => j,
    i: () => L,
});
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(704215),
    s = n(780384),
    l = n(481060),
    c = n(857595),
    u = n(607070),
    d = n(100527),
    f = n(906732),
    _ = n(514361),
    p = n(607270),
    h = n(705262),
    m = n(550385),
    g = n(266454),
    E = n(622909),
    b = n(639119),
    y = n(638212),
    O = n(230916),
    v = n(165583),
    I = n(984802),
    S = n(626135),
    T = n(210887),
    A = n(695346),
    C = n(342386),
    N = n(981631),
    R = n(921944),
    P = n(474936),
    w = n(388032),
    D = n(505575);
let x = () => {
        (0, g.Q3)(o.z.CLIENT_THEMES_SPARKLE_PREVIEW, {
            dismissAction: R.L.PRIMARY,
            forceTrack: !0,
        }),
            (0, m.XO)(m.wh.CLIENT_THEMES),
            (0, C.default)();
    },
    L = () => {
        var e, t;
        let { analyticsLocations: n } = (0, f.ZP)(d.Z.USER_SETTINGS),
            o = (0, a.e7)([_.Z], () => _.Z.isPreview),
            s = (null == (t = (0, b.N)()) || null == (e = t.subscription_trial) ? void 0 : e.sku_id) === P.Si.TIER_2,
            c = (0, E.N)(),
            u = (0, O.Wp)(c, P.Si.TIER_2),
            m = () => {
                if (!o || s) return null;
                let e = u
                    ? w.intl.formatToPlainString(w.t.bkQ4bH, { percent: null == c ? void 0 : c.discount.amount })
                    : w.intl.string(w.t.mr4K7D);
                return (0, r.jsxs)("div", {
                    className: D.tryItOutButtons,
                    children: [
                        (0, r.jsx)(l.Button, {
                            variant: "secondary",
                            text: w.intl.string(w.t["E+COuA"]),
                            onClick: () => x(),
                        }),
                        (0, r.jsx)(y.Z, {
                            subscriptionTier: P.Si.TIER_2,
                            defaultTextOverride: e,
                            premiumModalAnalyticsLocation: {
                                object: N.qAy.BUTTON_CTA,
                                objectType: N.AnalyticsObjectTypes.BUY,
                            },
                            fullWidth: !0,
                        }),
                    ],
                });
            };
        i.useEffect(() => {
            o &&
                S.default.track(N.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: P.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                    location_stack: n,
                });
        }, [o, n]);
        let g =
                s &&
                o &&
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)("div", {
                            className: D.previewThemeButton,
                            children: (0, r.jsx)(l.Button, {
                                variant: "secondary",
                                fullWidth: !0,
                                text: w.intl.string(w.t["E+COuA"]),
                                onClick: () => x(),
                            }),
                        }),
                        (0, r.jsx)("div", { className: D.premiumTier2Divider }),
                        (0, r.jsx)(v.ZP, {
                            type: P.cd.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL,
                            subscriptionTier: P.Si.TIER_2,
                        }),
                    ],
                }),
            I = (() => {
                let e = (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(h.ZP.Gradient, {
                            disabled: !1,
                            renderCTAButtons: m,
                        }),
                        g,
                    ],
                });
                return (
                    o &&
                        (e = (0, r.jsx)("div", {
                            className: D.colorThemesBackground,
                            children: e,
                        })),
                    e
                );
            })();
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsxs)(h.ZP, {
                    type: h.yH.SETTINGS,
                    children: [
                        (0, r.jsx)(h.ZP.Basic, { className: D.basicThemeSelectors }),
                        (0, r.jsx)(M, {}),
                        (0, r.jsx)(p.Z, {}),
                        I,
                    ],
                }),
                (0, r.jsx)(l.izJ, { className: D.divider }),
            ],
        });
    };
function M() {
    let e = (0, I.A6)(),
        {
            theme: t,
            useForcedColors: n,
            gradientPreset: i,
        } = (0, a.cj)([T.Z, u.Z, _.Z], () => ({
            theme: T.Z.theme,
            useForcedColors: u.Z.useForcedColors,
            gradientPreset: _.Z.gradientPreset,
        })),
        o = null != A.L1.useSetting().customUserThemeSettings;
    return t !== N.BRd.LIGHT
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(l.izJ, { gap: 24 }),
                  (0, r.jsx)(l.rsf, {
                      label: w.intl.string(w.t.yF54Ks),
                      checked: e && (0, s.ap)(t) && !n,
                      disabled: t !== N.BRd.LIGHT || n || null != i || o,
                      onChange: c.lq,
                  }),
                  (0, r.jsx)(l.izJ, { gap: 24 }),
              ],
          });
}
let j = () =>
    (0, a.e7)([_.Z], () => _.Z.isPreview)
        ? null
        : (0, r.jsx)(l.Button, {
              variant: "primary",
              text: w.intl.string(w.t.qYXrkX),
              onClick: x,
          });
