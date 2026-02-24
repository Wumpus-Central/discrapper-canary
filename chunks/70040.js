n.d(t, { Ix: () => V, J3: () => D, Q3: () => H, mx: () => B });
var i = n(627968),
    s = n(64700),
    a = n(311907),
    l = n(554146),
    r = n(582754),
    o = n(397927),
    c = n(955572),
    d = n(775602),
    u = n(793574),
    _ = n(688810),
    m = n(47671),
    A = n(959443),
    g = n(692798),
    h = n(793943),
    x = n(826673),
    p = n(422936),
    E = n(234419),
    C = n(792656),
    T = n(511484),
    S = n(811611),
    I = n(97469),
    f = n(954571),
    N = n(544028),
    b = n(253932),
    j = n(358776),
    v = n(12901),
    O = n(652215),
    R = n(49999),
    y = n(788868),
    P = n(985018),
    L = n(318684);
let D = () => {
    (0, x.Dr)(l.M.CLIENT_THEMES_SPARKLE_PREVIEW, { dismissAction: R.i.PRIMARY, forceTrack: !0 }),
        (0, h.nf)(h.HP.CLIENT_THEMES),
        (0, v.default)();
};
function G() {
    let e = (0, p.O)(),
        t = (0, T.U9)(e, y.pe.TIER_2)
            ? P.intl.formatToPlainString(P.t.bkQ4bH, { percent: e?.discount.amount })
            : P.intl.string(P.t.mr4K7D);
    return (0, i.jsx)(C.A, {
        subscriptionTier: y.pe.TIER_2,
        defaultTextOverride: t,
        premiumModalAnalyticsLocation: { object: O.ZSU.BUTTON_CTA, objectType: O.AnalyticsObjectTypes.BUY },
        fullWidth: !0,
    });
}
function M() {
    let e = (0, a.bG)([m.A], () => m.A.isPreview),
        t = (0, E.V)()?.subscription_trial?.sku_id === y.pe.TIER_2;
    return !e || t
        ? null
        : (0, i.jsxs)("div", {
              className: L.gY,
              children: [
                  (0, i.jsx)(o.Button, { variant: "secondary", text: P.intl.string(P.t["E+COuA"]), onClick: D }),
                  (0, i.jsx)(G, {}),
              ],
          });
}
function U(e) {
    let { children: t } = e,
        n = (0, a.bG)([m.A], () => m.A.isPreview),
        { analyticsLocations: l } = (0, _.Ay)(u.A.USER_SETTINGS);
    return (s.useEffect(() => {
        n &&
            f.default.track(O.HAw.PREMIUM_UPSELL_VIEWED, {
                type: y.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                location_stack: l,
            });
    }, [n, l]),
    n)
        ? (0, i.jsx)("div", { className: L._$, children: t })
        : t;
}
function k() {
    let e = (0, a.bG)([m.A], () => m.A.isPreview),
        t = (0, E.V)()?.subscription_trial?.sku_id === y.pe.TIER_2;
    return e && t
        ? (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)("div", {
                      className: L.c7,
                      children: (0, i.jsx)(o.Button, {
                          variant: "secondary",
                          fullWidth: !0,
                          text: P.intl.string(P.t["E+COuA"]),
                          onClick: () => D(),
                      }),
                  }),
                  (0, i.jsx)("div", { className: L.BU }),
                  (0, i.jsx)(S.Ay, { type: y.e.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL, subscriptionTier: y.pe.TIER_2 }),
              ],
          })
        : null;
}
let V = () => {
    let e = (0, j.dk)("UserSettingsAppearanceClientThemes");
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsxs)(g.Ay, {
                type: g.v0.SETTINGS,
                children: [
                    (0, i.jsx)(g.Ay.Basic, { className: L.a6 }),
                    (0, i.jsx)(w, {}),
                    (0, i.jsx)(A.A, {}),
                    (0, i.jsxs)(U, {
                        children: [
                            (0, i.jsx)(g.Ay.Gradient, { disabled: !1, renderCTAButtons: () => (0, i.jsx)(M, {}) }),
                            (0, i.jsx)(k, {}),
                        ],
                    }),
                ],
            }),
            !e && (0, i.jsx)(o.cGx, { className: L.yF }),
        ],
    });
};
function w() {
    let e = (0, I.qo)(),
        {
            theme: t,
            useForcedColors: n,
            gradientPreset: s,
        } = (0, a.cf)([N.A, d.A, m.A], () => ({
            theme: N.A.theme,
            useForcedColors: d.A.useForcedColors,
            gradientPreset: m.A.gradientPreset,
        })),
        l = null != b.eh.useSetting().customUserThemeSettings;
    return t !== O.NJ8.LIGHT
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(o.cGx, { gap: 24 }),
                  (0, i.jsx)(o.dOG, {
                      label: P.intl.string(P.t.yF54Ks),
                      checked: e && (0, r.qB)(t) && !n,
                      disabled: t !== O.NJ8.LIGHT || n || null != s || l,
                      onChange: c.LO,
                  }),
                  (0, i.jsx)(o.cGx, { gap: 24 }),
              ],
          });
}
let H = () =>
    (0, a.bG)([m.A], () => m.A.isPreview)
        ? null
        : (0, i.jsx)(o.Button, { variant: "primary", text: P.intl.string(P.t.qYXrkX), onClick: D });
function B() {
    return (0, i.jsx)(g.Ay, {
        type: g.v0.SETTINGS,
        children: (0, i.jsxs)(U, {
            children: [
                (0, i.jsx)(g.ew, {
                    isCoachmark: !1,
                    renderCTAButtons: () => (0, i.jsx)(M, {}),
                    headingClassName: L.EK,
                    titleTextVariant: "text-md/semibold",
                    titleClassName: L.cI,
                    titleIconClassName: L.Hq,
                }),
                (0, i.jsx)(o.BJc, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    padding: { top: 24 },
                    children: (0, i.jsx)(g.Zg, { disabled: !1 }),
                }),
                (0, i.jsx)(k, {}),
            ],
        }),
    });
}
