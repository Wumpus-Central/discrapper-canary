n.d(t, {
    g: () => M,
    i: () => x,
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
    E = n(104494),
    b = n(639119),
    y = n(638212),
    O = n(165583),
    v = n(984802),
    I = n(626135),
    T = n(210887),
    S = n(695346),
    A = n(342386),
    C = n(981631),
    N = n(921944),
    R = n(474936),
    P = n(388032),
    w = n(505575);
let D = () => {
        (0, g.Q3)(o.z.CLIENT_THEMES_SPARKLE_PREVIEW, {
            dismissAction: N.L.PRIMARY,
            forceTrack: !0,
        }),
            (0, m.XO)(m.wh.CLIENT_THEMES),
            (0, A.default)();
    },
    x = () => {
        var e, t;
        let { analyticsLocations: n } = (0, f.ZP)(d.Z.USER_SETTINGS),
            o = (0, a.e7)([_.Z], () => _.Z.isPreview),
            s = (null == (t = (0, b.N)()) || null == (e = t.subscription_trial) ? void 0 : e.sku_id) === R.Si.TIER_2,
            c = (0, E.Ng)(),
            u = (0, E.Wp)(c, R.Si.TIER_2),
            m = () => {
                if (!o || s) return null;
                let e = u
                    ? P.intl.formatToPlainString(P.t.bkQ4bH, { percent: null == c ? void 0 : c.discount.amount })
                    : P.intl.string(P.t.mr4K7D);
                return (0, r.jsxs)("div", {
                    className: w.tryItOutButtons,
                    children: [
                        (0, r.jsx)(l.Button, {
                            variant: "secondary",
                            text: P.intl.string(P.t["E+COuA"]),
                            onClick: () => D(),
                        }),
                        (0, r.jsx)(y.Z, {
                            subscriptionTier: R.Si.TIER_2,
                            defaultTextOverride: e,
                            premiumModalAnalyticsLocation: {
                                object: C.qAy.BUTTON_CTA,
                                objectType: C.AnalyticsObjectTypes.BUY,
                            },
                            fullWidth: !0,
                        }),
                    ],
                });
            };
        i.useEffect(() => {
            o &&
                I.default.track(C.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: R.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
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
                                text: P.intl.string(P.t["E+COuA"]),
                                onClick: () => D(),
                            }),
                        }),
                        (0, r.jsx)("div", { className: w.premiumTier2Divider }),
                        (0, r.jsx)(O.ZP, {
                            type: R.cd.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL,
                            subscriptionTier: R.Si.TIER_2,
                        }),
                    ],
                }),
            v = (() => {
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
                        (0, r.jsx)(L, {}),
                        (0, r.jsx)(p.Z, {}),
                        v,
                    ],
                }),
                (0, r.jsx)(l.izJ, { className: w.divider }),
            ],
        });
    };
function L() {
    let e = (0, v.A6)(),
        {
            theme: t,
            useForcedColors: n,
            gradientPreset: i,
        } = (0, a.cj)([T.Z, u.Z, _.Z], () => ({
            theme: T.Z.theme,
            useForcedColors: u.Z.useForcedColors,
            gradientPreset: _.Z.gradientPreset,
        })),
        o = null != S.L1.useSetting().customUserThemeSettings;
    return t !== C.BRd.LIGHT
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(l.izJ, { gap: 24 }),
                  (0, r.jsx)(l.rsf, {
                      label: P.intl.string(P.t.yF54Ks),
                      checked: e && (0, s.ap)(t) && !n,
                      disabled: t !== C.BRd.LIGHT || n || null != i || o,
                      onChange: c.lq,
                  }),
                  (0, r.jsx)(l.izJ, { gap: 24 }),
              ],
          });
}
let M = () =>
    (0, a.e7)([_.Z], () => _.Z.isPreview)
        ? null
        : (0, r.jsx)(l.Button, {
              variant: "primary",
              text: P.intl.string(P.t.qYXrkX),
              onClick: D,
          });
