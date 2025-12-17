n.d(t, {
    g: () => k,
    i: () => j,
});
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(704215),
    s = n(780384),
    l = n(481060),
    c = n(857595),
    u = n(607070),
    d = n(100527),
    f = n(906732),
    p = n(514361),
    _ = n(607270),
    m = n(705262),
    h = n(550385),
    g = n(266454),
    E = n(622909),
    b = n(639119),
    y = n(638212),
    O = n(230916),
    v = n(165583),
    S = n(984802),
    I = n(626135),
    T = n(210887),
    C = n(695346),
    A = n(526665),
    N = n(342386),
    P = n(981631),
    R = n(921944),
    w = n(474936),
    D = n(388032),
    x = n(830597);
let L = () => {
        (0, g.Q3)(o.z.CLIENT_THEMES_SPARKLE_PREVIEW, {
            dismissAction: R.L.PRIMARY,
            forceTrack: !0,
        }),
            (0, h.XO)(h.wh.CLIENT_THEMES),
            (0, N.default)();
    },
    j = () => {
        var e, t;
        let { analyticsLocations: n } = (0, f.ZP)(d.Z.USER_SETTINGS),
            o = (0, a.e7)([p.Z], () => p.Z.isPreview),
            s = (null == (t = (0, b.N)()) || null == (e = t.subscription_trial) ? void 0 : e.sku_id) === w.Si.TIER_2,
            c = (0, E.N)(),
            u = (0, O.Wp)(c, w.Si.TIER_2),
            h = (0, A.gN)("UserSettingsAppearanceClientThemes"),
            g = () => {
                if (!o || s) return null;
                let e = u
                    ? D.intl.formatToPlainString(D.t.bkQ4bH, { percent: null == c ? void 0 : c.discount.amount })
                    : D.intl.string(D.t.mr4K7D);
                return (0, r.jsxs)("div", {
                    className: x.tryItOutButtons,
                    children: [
                        (0, r.jsx)(l.Button, {
                            variant: "secondary",
                            text: D.intl.string(D.t["E+COuA"]),
                            onClick: () => L(),
                        }),
                        (0, r.jsx)(y.Z, {
                            subscriptionTier: w.Si.TIER_2,
                            defaultTextOverride: e,
                            premiumModalAnalyticsLocation: {
                                object: P.qAy.BUTTON_CTA,
                                objectType: P.AnalyticsObjectTypes.BUY,
                            },
                            fullWidth: !0,
                        }),
                    ],
                });
            };
        i.useEffect(() => {
            o &&
                I.default.track(P.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: w.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                    location_stack: n,
                });
        }, [o, n]);
        let S =
                s &&
                o &&
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)("div", {
                            className: x.previewThemeButton,
                            children: (0, r.jsx)(l.Button, {
                                variant: "secondary",
                                fullWidth: !0,
                                text: D.intl.string(D.t["E+COuA"]),
                                onClick: () => L(),
                            }),
                        }),
                        (0, r.jsx)("div", { className: x.premiumTier2Divider }),
                        (0, r.jsx)(v.ZP, {
                            type: w.cd.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL,
                            subscriptionTier: w.Si.TIER_2,
                        }),
                    ],
                }),
            T = (() => {
                let e = (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(m.ZP.Gradient, {
                            disabled: !1,
                            renderCTAButtons: g,
                        }),
                        S,
                    ],
                });
                return (
                    o &&
                        (e = (0, r.jsx)("div", {
                            className: x.colorThemesBackground,
                            children: e,
                        })),
                    e
                );
            })();
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsxs)(m.ZP, {
                    type: m.yH.SETTINGS,
                    children: [
                        (0, r.jsx)(m.ZP.Basic, { className: x.basicThemeSelectors }),
                        (0, r.jsx)(M, {}),
                        (0, r.jsx)(_.Z, {}),
                        T,
                    ],
                }),
                !h && (0, r.jsx)(l.izJ, { className: x.divider }),
            ],
        });
    };
function M() {
    let e = (0, S.A6)(),
        {
            theme: t,
            useForcedColors: n,
            gradientPreset: i,
        } = (0, a.cj)([T.Z, u.Z, p.Z], () => ({
            theme: T.Z.theme,
            useForcedColors: u.Z.useForcedColors,
            gradientPreset: p.Z.gradientPreset,
        })),
        o = null != C.L1.useSetting().customUserThemeSettings;
    return t !== P.BRd.LIGHT
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(l.izJ, { gap: 24 }),
                  (0, r.jsx)(l.rsf, {
                      label: D.intl.string(D.t.yF54Ks),
                      checked: e && (0, s.ap)(t) && !n,
                      disabled: t !== P.BRd.LIGHT || n || null != i || o,
                      onChange: c.lq,
                  }),
                  (0, r.jsx)(l.izJ, { gap: 24 }),
              ],
          });
}
let k = () =>
    (0, a.e7)([p.Z], () => p.Z.isPreview)
        ? null
        : (0, r.jsx)(l.Button, {
              variant: "primary",
              text: D.intl.string(D.t.qYXrkX),
              onClick: L,
          });
