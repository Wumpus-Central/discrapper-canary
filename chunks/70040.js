n.d(t, { I: () => M, Q: () => U });
var i = n(627968),
    s = n(64700),
    r = n(311907),
    a = n(554146),
    l = n(582754),
    o = n(397927),
    c = n(955572),
    d = n(775602),
    u = n(793574),
    _ = n(688810),
    m = n(47671),
    A = n(959443),
    g = n(692798),
    E = n(793943),
    h = n(826673),
    p = n(422936),
    C = n(234419),
    x = n(792656),
    T = n(511484),
    I = n(811611),
    S = n(97469),
    f = n(954571),
    N = n(544028),
    b = n(253932),
    R = n(358776),
    v = n(12901),
    O = n(652215),
    j = n(49999),
    P = n(788868),
    y = n(985018),
    L = n(21082);
let D = () => {
        (0, h.Dr)(a.M.CLIENT_THEMES_SPARKLE_PREVIEW, { dismissAction: j.i.PRIMARY, forceTrack: !0 }),
            (0, E.nf)(E.HP.CLIENT_THEMES),
            (0, v.default)();
    },
    M = () => {
        let e,
            { analyticsLocations: t } = (0, _.Ay)(u.A.USER_SETTINGS),
            n = (0, r.bG)([m.A], () => m.A.isPreview),
            a = (0, C.V)()?.subscription_trial?.sku_id === P.pe.TIER_2,
            l = (0, p.O)(),
            c = (0, T.U9)(l, P.pe.TIER_2),
            d = (0, R.dk)("UserSettingsAppearanceClientThemes");
        s.useEffect(() => {
            n &&
                f.default.track(O.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: P.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                    location_stack: t,
                });
        }, [n, t]);
        let E =
                a &&
                n &&
                (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)("div", {
                            className: L.c7,
                            children: (0, i.jsx)(o.Button, {
                                variant: "secondary",
                                fullWidth: !0,
                                text: y.intl.string(y.t["E+COuA"]),
                                onClick: () => D(),
                            }),
                        }),
                        (0, i.jsx)("div", { className: L.BU }),
                        (0, i.jsx)(I.Ay, {
                            type: P.e.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL,
                            subscriptionTier: P.pe.TIER_2,
                        }),
                    ],
                }),
            h =
                ((e = (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(g.Ay.Gradient, {
                            disabled: !1,
                            renderCTAButtons: () => {
                                if (!n || a) return null;
                                let e = c
                                    ? y.intl.formatToPlainString(y.t.bkQ4bH, { percent: l?.discount.amount })
                                    : y.intl.string(y.t.mr4K7D);
                                return (0, i.jsxs)("div", {
                                    className: L.gY,
                                    children: [
                                        (0, i.jsx)(o.Button, {
                                            variant: "secondary",
                                            text: y.intl.string(y.t["E+COuA"]),
                                            onClick: () => D(),
                                        }),
                                        (0, i.jsx)(x.A, {
                                            subscriptionTier: P.pe.TIER_2,
                                            defaultTextOverride: e,
                                            premiumModalAnalyticsLocation: {
                                                object: O.ZSU.BUTTON_CTA,
                                                objectType: O.AnalyticsObjectTypes.BUY,
                                            },
                                            fullWidth: !0,
                                        }),
                                    ],
                                });
                            },
                        }),
                        E,
                    ],
                })),
                n && (e = (0, i.jsx)("div", { className: L._$, children: e })),
                e);
        return (0, i.jsxs)("div", {
            children: [
                (0, i.jsxs)(g.Ay, {
                    type: g.v0.SETTINGS,
                    children: [(0, i.jsx)(g.Ay.Basic, { className: L.a6 }), (0, i.jsx)(G, {}), (0, i.jsx)(A.A, {}), h],
                }),
                !d && (0, i.jsx)(o.cGx, { className: L.yF }),
            ],
        });
    };
function G() {
    let e = (0, S.qo)(),
        {
            theme: t,
            useForcedColors: n,
            gradientPreset: s,
        } = (0, r.cf)([N.A, d.A, m.A], () => ({
            theme: N.A.theme,
            useForcedColors: d.A.useForcedColors,
            gradientPreset: m.A.gradientPreset,
        })),
        a = null != b.eh.useSetting().customUserThemeSettings;
    return t !== O.NJ8.LIGHT
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(o.cGx, { gap: 24 }),
                  (0, i.jsx)(o.dOG, {
                      label: y.intl.string(y.t.yF54Ks),
                      checked: e && (0, l.qB)(t) && !n,
                      disabled: t !== O.NJ8.LIGHT || n || null != s || a,
                      onChange: c.LO,
                  }),
                  (0, i.jsx)(o.cGx, { gap: 24 }),
              ],
          });
}
let U = () =>
    (0, r.bG)([m.A], () => m.A.isPreview)
        ? null
        : (0, i.jsx)(o.Button, { variant: "primary", text: y.intl.string(y.t.qYXrkX), onClick: D });
