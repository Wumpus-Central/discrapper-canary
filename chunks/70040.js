n.d(t, { Ix: () => k, J3: () => D, Q3: () => w, mx: () => B });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(554146),
    a = n(582754),
    o = n(397927),
    d = n(955572),
    c = n(775602),
    u = n(793574),
    _ = n(688810),
    m = n(47671),
    g = n(959443),
    A = n(692798),
    h = n(793943),
    x = n(826673),
    p = n(422936),
    T = n(234419),
    E = n(792656),
    C = n(511484),
    S = n(811611),
    f = n(97469),
    N = n(954571),
    b = n(544028),
    I = n(253932),
    v = n(12901),
    j = n(652215),
    O = n(49999),
    y = n(788868),
    R = n(985018),
    P = n(21082);
let D = () => {
    (0, x.Dr)(r.M.CLIENT_THEMES_SPARKLE_PREVIEW, { dismissAction: O.i.PRIMARY, forceTrack: !0 }),
        (0, h.nf)(h.HP.CLIENT_THEMES),
        (0, v.default)();
};
function L() {
    let e = (0, p.O)(),
        t = (0, C.U9)(e, y.pe.TIER_2)
            ? R.intl.formatToPlainString(R.t.bkQ4bH, { percent: e?.discount.amount })
            : R.intl.string(R.t.mr4K7D);
    return (0, i.jsx)(E.A, {
        subscriptionTier: y.pe.TIER_2,
        defaultTextOverride: t,
        premiumModalAnalyticsLocation: { object: j.ZSU.BUTTON_CTA, objectType: j.AnalyticsObjectTypes.BUY },
        fullWidth: !0,
    });
}
function M() {
    let e = (0, l.bG)([m.A], () => m.A.isPreview),
        t = (0, T.V)()?.subscription_trial?.sku_id === y.pe.TIER_2;
    return !e || t
        ? null
        : (0, i.jsxs)("div", {
              className: P.gY,
              children: [
                  (0, i.jsx)(o.Button, { variant: "secondary", text: R.intl.string(R.t["E+COuA"]), onClick: D }),
                  (0, i.jsx)(L, {}),
              ],
          });
}
function G(e) {
    let { children: t } = e,
        n = (0, l.bG)([m.A], () => m.A.isPreview),
        { analyticsLocations: r } = (0, _.Ay)(u.A.USER_SETTINGS);
    return (s.useEffect(() => {
        n &&
            N.default.track(j.HAw.PREMIUM_UPSELL_VIEWED, {
                type: y.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                location_stack: r,
            });
    }, [n, r]),
    n)
        ? (0, i.jsx)("div", { className: P._$, children: t })
        : t;
}
function U() {
    let e = (0, l.bG)([m.A], () => m.A.isPreview),
        t = (0, T.V)()?.subscription_trial?.sku_id === y.pe.TIER_2;
    return e && t
        ? (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)("div", {
                      className: P.c7,
                      children: (0, i.jsx)(o.Button, {
                          variant: "secondary",
                          fullWidth: !0,
                          text: R.intl.string(R.t["E+COuA"]),
                          onClick: () => D(),
                      }),
                  }),
                  (0, i.jsx)("div", { className: P.BU }),
                  (0, i.jsx)(S.Ay, { type: y.e.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL, subscriptionTier: y.pe.TIER_2 }),
              ],
          })
        : null;
}
let k = () =>
    (0, i.jsx)("div", {
        children: (0, i.jsxs)(A.Ay, {
            type: A.v0.SETTINGS,
            children: [
                (0, i.jsx)(A.Ay.Basic, { className: P.a6 }),
                (0, i.jsx)(V, {}),
                (0, i.jsx)(g.A, {}),
                (0, i.jsxs)(G, {
                    children: [
                        (0, i.jsx)(A.Ay.Gradient, { disabled: !1, renderCTAButtons: () => (0, i.jsx)(M, {}) }),
                        (0, i.jsx)(U, {}),
                    ],
                }),
            ],
        }),
    });
function V() {
    let e = (0, f.qo)(),
        {
            theme: t,
            useForcedColors: n,
            gradientPreset: s,
        } = (0, l.cf)([b.A, c.A, m.A], () => ({
            theme: b.A.theme,
            useForcedColors: c.A.useForcedColors,
            gradientPreset: m.A.gradientPreset,
        })),
        r = null != I.eh.useSetting().customUserThemeSettings;
    return t !== j.NJ8.LIGHT
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(o.cGx, { gap: 24 }),
                  (0, i.jsx)(o.dOG, {
                      label: R.intl.string(R.t.yF54Ks),
                      checked: e && (0, a.qB)(t) && !n,
                      disabled: t !== j.NJ8.LIGHT || n || null != s || r,
                      onChange: d.LO,
                  }),
                  (0, i.jsx)(o.cGx, { gap: 24 }),
              ],
          });
}
let w = () =>
    (0, l.bG)([m.A], () => m.A.isPreview)
        ? null
        : (0, i.jsx)(o.Button, { variant: "primary", text: R.intl.string(R.t.qYXrkX), onClick: D });
function B(e) {
    let { size: t } = e;
    return (0, i.jsx)(A.Ay, {
        type: A.v0.SETTINGS,
        children: (0, i.jsxs)(G, {
            children: [
                (0, i.jsx)(A.ew, {
                    isCoachmark: !1,
                    renderCTAButtons: () => (0, i.jsx)(M, {}),
                    headingClassName: P.EK,
                    titleTextVariant: "text-md/semibold",
                    titleClassName: P.cI,
                    titleIconClassName: P.Hq,
                }),
                (0, i.jsx)(o.BJc, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    padding: { top: 24 },
                    children: (0, i.jsx)(A.Zg, { disabled: !1, size: t }),
                }),
                (0, i.jsx)(U, {}),
            ],
        }),
    });
}
