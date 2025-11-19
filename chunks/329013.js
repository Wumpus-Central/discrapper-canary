n.d(t, {
    g: () => k,
    i: () => x,
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
    T = n(626135),
    S = n(210887),
    A = n(695346),
    C = n(342386),
    N = n(981631),
    R = n(921944),
    P = n(474936),
    D = n(388032),
    w = n(505575);
let L = () => {
        (0, g.Q3)(o.z.CLIENT_THEMES_SPARKLE_PREVIEW, {
            dismissAction: R.L.PRIMARY,
            forceTrack: !0,
        }),
            (0, m.XO)(m.wh.CLIENT_THEMES),
            (0, C.default)();
    },
    x = () => {
        var e, t;
        let { analyticsLocations: n } = (0, f.ZP)(d.Z.USER_SETTINGS),
            o = (0, a.e7)([_.Z], () => _.Z.isPreview),
            s = (null == (t = (0, b.N)()) || null == (e = t.subscription_trial) ? void 0 : e.sku_id) === P.Si.TIER_2,
            c = (0, E.N)(),
            u = (0, O.Wp)(c, P.Si.TIER_2),
            m = () => {
                if (!o || s) return null;
                let e = u
                    ? D.intl.formatToPlainString(D.t.bkQ4bH, { percent: null == c ? void 0 : c.discount.amount })
                    : D.intl.string(D.t.mr4K7D);
                return (0, r.jsxs)("div", {
                    className: w.tryItOutButtons,
                    children: [
                        (0, r.jsx)(l.Button, {
                            variant: "secondary",
                            text: D.intl.string(D.t["E+COuA"]),
                            onClick: () => L(),
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
                T.default.track(N.rMx.PREMIUM_UPSELL_VIEWED, {
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
                            className: w.previewThemeButton,
                            children: (0, r.jsx)(l.Button, {
                                variant: "secondary",
                                fullWidth: !0,
                                text: D.intl.string(D.t["E+COuA"]),
                                onClick: () => L(),
                            }),
                        }),
                        (0, r.jsx)("div", { className: w.premiumTier2Divider }),
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
                            className: w.colorThemesBackground,
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
                        (0, r.jsx)(h.ZP.Basic, { className: w.basicThemeSelectors }),
                        (0, r.jsx)(M, {}),
                        (0, r.jsx)(p.Z, {}),
                        I,
                    ],
                }),
                (0, r.jsx)(l.izJ, { className: w.divider }),
            ],
        });
    };
function M() {
    let e = (0, I.A6)(),
        {
            theme: t,
            useForcedColors: n,
            gradientPreset: i,
        } = (0, a.cj)([S.Z, u.Z, _.Z], () => ({
            theme: S.Z.theme,
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
                      label: D.intl.string(D.t.yF54Ks),
                      checked: e && (0, s.ap)(t) && !n,
                      disabled: t !== N.BRd.LIGHT || n || null != i || o,
                      onChange: c.lq,
                  }),
                  (0, r.jsx)(l.izJ, { gap: 24 }),
              ],
          });
}
let k = () =>
    (0, a.e7)([_.Z], () => _.Z.isPreview)
        ? null
        : (0, r.jsx)(l.Button, {
              variant: "primary",
              text: D.intl.string(D.t.qYXrkX),
              onClick: L,
          });
