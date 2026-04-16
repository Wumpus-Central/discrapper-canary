n.d(t, { Ix: () => k, J3: () => P, mx: () => V });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(554146),
    a = n(582754),
    o = n(397927),
    d = n(955572),
    c = n(775602),
    u = n(793574),
    m = n(688810),
    g = n(47671),
    _ = n(959443),
    x = n(692798),
    h = n(793943),
    A = n(826673),
    p = n(422936),
    T = n(234419),
    f = n(792656),
    S = n(511484),
    E = n(811611),
    b = n(97469),
    C = n(954571),
    v = n(544028),
    N = n(253932),
    I = n(779733),
    j = n(652215),
    y = n(49999),
    O = n(788868),
    R = n(985018),
    L = n(530056);
let P = () => {
    (0, A.Dr)(r.M.CLIENT_THEMES_SPARKLE_PREVIEW, { dismissAction: y.i.PRIMARY, forceTrack: !0 }),
        (0, h.nf)(h.HP.CLIENT_THEMES),
        (0, I.default)();
};
function D() {
    let e = (0, p.O)(),
        t = (0, S.U9)(e, O.pe.TIER_2)
            ? R.intl.formatToPlainString(R.t.bkQ4bH, { percent: e?.discount.amount })
            : R.intl.string(R.t.mr4K7D);
    return (0, i.jsx)(f.A, {
        subscriptionTier: O.pe.TIER_2,
        defaultTextOverride: t,
        premiumModalAnalyticsLocation: { object: j.ZSU.BUTTON_CTA, objectType: j.AnalyticsObjectTypes.BUY },
        fullWidth: !0,
    });
}
function G() {
    let e = (0, l.bG)([g.A], () => g.A.isPreview),
        t = (0, T.V)()?.subscription_trial?.sku_id === O.pe.TIER_2;
    return !e || t
        ? null
        : (0, i.jsxs)("div", {
              className: L.gY,
              children: [
                  (0, i.jsx)(o.Button, { variant: "secondary", text: R.intl.string(R.t["E+COuA"]), onClick: P }),
                  (0, i.jsx)(D, {}),
              ],
          });
}
function M(e) {
    let { children: t } = e,
        n = (0, l.bG)([g.A], () => g.A.isPreview),
        { analyticsLocations: r } = (0, m.Ay)(u.A.USER_SETTINGS);
    return (s.useEffect(() => {
        n &&
            C.default.track(j.HAw.PREMIUM_UPSELL_VIEWED, {
                type: O.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                location_stack: r,
            });
    }, [n, r]),
    n)
        ? (0, i.jsx)("div", { className: L._$, children: t })
        : t;
}
function U() {
    let e = (0, l.bG)([g.A], () => g.A.isPreview),
        t = (0, T.V)()?.subscription_trial?.sku_id === O.pe.TIER_2;
    return e && t
        ? (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)("div", {
                      className: L.c7,
                      children: (0, i.jsx)(o.Button, {
                          variant: "secondary",
                          fullWidth: !0,
                          text: R.intl.string(R.t["E+COuA"]),
                          onClick: () => P(),
                      }),
                  }),
                  (0, i.jsx)("div", { className: L.BU }),
                  (0, i.jsx)(E.Ay, { type: O.e.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL, subscriptionTier: O.pe.TIER_2 }),
              ],
          })
        : null;
}
let k = () =>
    (0, i.jsx)("div", {
        children: (0, i.jsxs)(x.Ay, {
            type: x.v0.SETTINGS,
            children: [
                (0, i.jsx)(x.Ay.Basic, { className: L.a6 }),
                (0, i.jsx)(w, {}),
                (0, i.jsx)(_.A, {}),
                (0, i.jsxs)(M, {
                    children: [
                        (0, i.jsx)(x.Ay.Gradient, { disabled: !1, renderCTAButtons: () => (0, i.jsx)(G, {}) }),
                        (0, i.jsx)(U, {}),
                    ],
                }),
            ],
        }),
    });
function w() {
    let e = (0, b.qo)(),
        {
            theme: t,
            useForcedColors: n,
            gradientPreset: s,
        } = (0, l.cf)([v.A, c.A, g.A], () => ({
            theme: v.A.theme,
            useForcedColors: c.A.useForcedColors,
            gradientPreset: g.A.gradientPreset,
        })),
        r = null != N.eh.useSetting().customUserThemeSettings;
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
function V(e) {
    let { size: t } = e;
    return (0, i.jsx)(x.Ay, {
        type: x.v0.SETTINGS,
        children: (0, i.jsxs)(M, {
            children: [
                (0, i.jsx)(x.ew, {
                    isCoachmark: !1,
                    renderCTAButtons: () => (0, i.jsx)(G, {}),
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
                    children: (0, i.jsx)(x.Zg, { disabled: !1, size: t }),
                }),
                (0, i.jsx)(U, {}),
            ],
        }),
    });
}
