n.d(t, { Ix: () => k, J3: () => L, Q3: () => w, mx: () => H });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(554146),
    r = n(582754),
    o = n(397927),
    d = n(955572),
    c = n(775602),
    u = n(793574),
    _ = n(688810),
    g = n(47671),
    m = n(959443),
    A = n(692798),
    h = n(793943),
    p = n(826673),
    x = n(422936),
    E = n(234419),
    T = n(792656),
    S = n(511484),
    C = n(811611),
    f = n(97469),
    I = n(954571),
    b = n(544028),
    N = n(253932),
    v = n(12901),
    j = n(652215),
    O = n(49999),
    R = n(788868),
    y = n(985018),
    P = n(318684);
let L = () => {
    (0, p.Dr)(a.M.CLIENT_THEMES_SPARKLE_PREVIEW, { dismissAction: O.i.PRIMARY, forceTrack: !0 }),
        (0, h.nf)(h.HP.CLIENT_THEMES),
        (0, v.default)();
};
function D() {
    let e = (0, x.O)(),
        t = (0, S.U9)(e, R.pe.TIER_2)
            ? y.intl.formatToPlainString(y.t.bkQ4bH, { percent: e?.discount.amount })
            : y.intl.string(y.t.mr4K7D);
    return (0, i.jsx)(T.A, {
        subscriptionTier: R.pe.TIER_2,
        defaultTextOverride: t,
        premiumModalAnalyticsLocation: { object: j.ZSU.BUTTON_CTA, objectType: j.AnalyticsObjectTypes.BUY },
        fullWidth: !0,
    });
}
function G() {
    let e = (0, l.bG)([g.A], () => g.A.isPreview),
        t = (0, E.V)()?.subscription_trial?.sku_id === R.pe.TIER_2;
    return !e || t
        ? null
        : (0, i.jsxs)("div", {
              className: P.gY,
              children: [
                  (0, i.jsx)(o.Button, { variant: "secondary", text: y.intl.string(y.t["E+COuA"]), onClick: L }),
                  (0, i.jsx)(D, {}),
              ],
          });
}
function M(e) {
    let { children: t } = e,
        n = (0, l.bG)([g.A], () => g.A.isPreview),
        { analyticsLocations: a } = (0, _.Ay)(u.A.USER_SETTINGS);
    return (s.useEffect(() => {
        n &&
            I.default.track(j.HAw.PREMIUM_UPSELL_VIEWED, {
                type: R.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                location_stack: a,
            });
    }, [n, a]),
    n)
        ? (0, i.jsx)("div", { className: P._$, children: t })
        : t;
}
function U() {
    let e = (0, l.bG)([g.A], () => g.A.isPreview),
        t = (0, E.V)()?.subscription_trial?.sku_id === R.pe.TIER_2;
    return e && t
        ? (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)("div", {
                      className: P.c7,
                      children: (0, i.jsx)(o.Button, {
                          variant: "secondary",
                          fullWidth: !0,
                          text: y.intl.string(y.t["E+COuA"]),
                          onClick: () => L(),
                      }),
                  }),
                  (0, i.jsx)("div", { className: P.BU }),
                  (0, i.jsx)(C.Ay, { type: R.e.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL, subscriptionTier: R.pe.TIER_2 }),
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
                (0, i.jsx)(m.A, {}),
                (0, i.jsxs)(M, {
                    children: [
                        (0, i.jsx)(A.Ay.Gradient, { disabled: !1, renderCTAButtons: () => (0, i.jsx)(G, {}) }),
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
        } = (0, l.cf)([b.A, c.A, g.A], () => ({
            theme: b.A.theme,
            useForcedColors: c.A.useForcedColors,
            gradientPreset: g.A.gradientPreset,
        })),
        a = null != N.eh.useSetting().customUserThemeSettings;
    return t !== j.NJ8.LIGHT
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(o.cGx, { gap: 24 }),
                  (0, i.jsx)(o.dOG, {
                      label: y.intl.string(y.t.yF54Ks),
                      checked: e && (0, r.qB)(t) && !n,
                      disabled: t !== j.NJ8.LIGHT || n || null != s || a,
                      onChange: d.LO,
                  }),
                  (0, i.jsx)(o.cGx, { gap: 24 }),
              ],
          });
}
let w = () =>
    (0, l.bG)([g.A], () => g.A.isPreview)
        ? null
        : (0, i.jsx)(o.Button, { variant: "primary", text: y.intl.string(y.t.qYXrkX), onClick: L });
function H(e) {
    let { size: t } = e;
    return (0, i.jsx)(A.Ay, {
        type: A.v0.SETTINGS,
        children: (0, i.jsxs)(M, {
            children: [
                (0, i.jsx)(A.ew, {
                    isCoachmark: !1,
                    renderCTAButtons: () => (0, i.jsx)(G, {}),
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
