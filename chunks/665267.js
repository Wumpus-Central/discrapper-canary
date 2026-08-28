n.d(t, { J3: () => O, sB: () => G });
var i = n(477900),
    l = n(582128),
    s = n(17928),
    r = n(554146),
    a = n(821609),
    o = n(331322),
    u = n(793574),
    d = n(688810),
    c = n(147248),
    g = n(487245),
    m = n(793943),
    A = n(826673),
    E = n(10392),
    h = n(82498),
    S = n(724651),
    T = n(732280),
    x = n(792656),
    p = n(511484),
    f = n(811611),
    I = n(174459),
    _ = n(830543),
    N = n(652215),
    C = n(385803),
    b = n(49999),
    y = n(202541),
    v = n(375708),
    j = n(510081);
function O() {
    (0, A.Dr)(r.M.CLIENT_THEMES_SPARKLE_PREVIEW, { dismissAction: b.i.PRIMARY, forceTrack: !0 }),
        (0, m.nf)(m.HP.CLIENT_THEMES),
        (0, _.default)();
}
function L() {
    let e = (0, S.O)(),
        t = (0, p.U9)(e, y.pe.TIER_2)
            ? v.intl.formatToPlainString(v.t.bkQ4bH, { percent: e?.discount.amount })
            : v.intl.string(v.t.mr4K7D);
    return (0, i.jsx)(x.A, {
        subscriptionTier: y.pe.TIER_2,
        defaultTextOverride: t,
        premiumModalAnalyticsLocation: { object: N.ZSU.BUTTON_CTA, objectType: N.AnalyticsObjectTypes.BUY },
        fullWidth: !0,
    });
}
function R() {
    let e = (0, s.bG)([c.A], () => c.A.isPreview),
        t = (0, T.V)()?.subscriptionTrial?.skuId === y.pe.TIER_2;
    return !e || t
        ? null
        : (0, i.jsxs)("div", {
              className: j.gY,
              children: [
                  (0, i.jsx)(a.$, { variant: "secondary", text: v.intl.string(v.t["E+COuA"]), onClick: O }),
                  (0, i.jsx)(L, {}),
              ],
          });
}
function D(e) {
    let { children: t } = e,
        n = (0, s.bG)([c.A], () => c.A.isPreview),
        { analyticsLocations: r } = (0, d.Ay)(u.A.USER_SETTINGS);
    return (l.useEffect(() => {
        n &&
            (I.default.track(N.HAw.PREMIUM_UPSELL_VIEWED, {
                type: y.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                location_stack: r,
            }),
            (0, E.sq)(N.U7l.PREMIUM_UPSELL_VIEWED, r, () => (0, h.uq)(y.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT)));
    }, [n, r]),
    n)
        ? (0, i.jsx)("div", { className: j._$, children: t })
        : t;
}
function P() {
    let e = (0, s.bG)([c.A], () => c.A.isPreview),
        t = (0, T.V)()?.subscriptionTrial?.skuId === y.pe.TIER_2;
    return e && t
        ? (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)("div", {
                      className: j.c7,
                      children: (0, i.jsx)(a.$, {
                          variant: "secondary",
                          fullWidth: !0,
                          text: v.intl.string(v.t["E+COuA"]),
                          onClick: () => O(),
                      }),
                  }),
                  (0, i.jsx)("div", { className: j.BU }),
                  (0, i.jsx)(f.Ay, { type: y.e.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL, subscriptionTier: y.pe.TIER_2 }),
              ],
          })
        : null;
}
function G() {
    return (0, i.jsx)(g.Ay, {
        type: g.v0.SETTINGS,
        children: (0, i.jsxs)(D, {
            children: [
                (0, i.jsx)(g.ew, {
                    isCoachmark: !1,
                    renderCTAButtons: () => (0, i.jsx)(R, {}),
                    headingClassName: j.EK,
                    titleTextVariant: "text-md/semibold",
                    titleClassName: j.cI,
                    titleIconClassName: j.Hq,
                }),
                (0, i.jsx)(o.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    padding: { top: 24 },
                    children: (0, i.jsx)(g.Zg, { disabled: !1, size: C.ni.SIZE_48 }),
                }),
                (0, i.jsx)(P, {}),
            ],
        }),
    });
}
