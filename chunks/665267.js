n.d(t, { J3: () => v, sB: () => R });
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
    h = n(724651),
    E = n(732280),
    S = n(792656),
    x = n(511484),
    p = n(811611),
    T = n(174459),
    f = n(830543),
    I = n(652215),
    _ = n(385803),
    N = n(49999),
    C = n(202541),
    b = n(375708),
    y = n(446350);
function v() {
    (0, A.Dr)(r.M.CLIENT_THEMES_SPARKLE_PREVIEW, { dismissAction: N.i.PRIMARY, forceTrack: !0 }),
        (0, m.nf)(m.HP.CLIENT_THEMES),
        (0, f.default)();
}
function j() {
    let e = (0, h.O)(),
        t = (0, x.U9)(e, C.pe.TIER_2)
            ? b.intl.formatToPlainString(b.t.bkQ4bH, { percent: e?.discount.amount })
            : b.intl.string(b.t.mr4K7D);
    return (0, i.jsx)(S.A, {
        subscriptionTier: C.pe.TIER_2,
        defaultTextOverride: t,
        premiumModalAnalyticsLocation: { object: I.ZSU.BUTTON_CTA, objectType: I.AnalyticsObjectTypes.BUY },
        fullWidth: !0,
    });
}
function O() {
    let e = (0, s.bG)([c.A], () => c.A.isPreview),
        t = (0, E.V)()?.subscriptionTrial?.skuId === C.pe.TIER_2;
    return !e || t
        ? null
        : (0, i.jsxs)("div", {
              className: y.gY,
              children: [
                  (0, i.jsx)(a.$, { variant: "secondary", text: b.intl.string(b.t["E+COuA"]), onClick: v }),
                  (0, i.jsx)(j, {}),
              ],
          });
}
function L(e) {
    let { children: t } = e,
        n = (0, s.bG)([c.A], () => c.A.isPreview),
        { analyticsLocations: r } = (0, d.Ay)(u.A.USER_SETTINGS);
    return (l.useEffect(() => {
        n &&
            T.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
                type: C.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                location_stack: r,
            });
    }, [n, r]),
    n)
        ? (0, i.jsx)("div", { className: y._$, children: t })
        : t;
}
function D() {
    let e = (0, s.bG)([c.A], () => c.A.isPreview),
        t = (0, E.V)()?.subscriptionTrial?.skuId === C.pe.TIER_2;
    return e && t
        ? (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)("div", {
                      className: y.c7,
                      children: (0, i.jsx)(a.$, {
                          variant: "secondary",
                          fullWidth: !0,
                          text: b.intl.string(b.t["E+COuA"]),
                          onClick: () => v(),
                      }),
                  }),
                  (0, i.jsx)("div", { className: y.BU }),
                  (0, i.jsx)(p.Ay, { type: C.e.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL, subscriptionTier: C.pe.TIER_2 }),
              ],
          })
        : null;
}
function R() {
    return (0, i.jsx)(g.Ay, {
        type: g.v0.SETTINGS,
        children: (0, i.jsxs)(L, {
            children: [
                (0, i.jsx)(g.ew, {
                    isCoachmark: !1,
                    renderCTAButtons: () => (0, i.jsx)(O, {}),
                    headingClassName: y.EK,
                    titleTextVariant: "text-md/semibold",
                    titleClassName: y.cI,
                    titleIconClassName: y.Hq,
                }),
                (0, i.jsx)(o.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    padding: { top: 24 },
                    children: (0, i.jsx)(g.Zg, { disabled: !1, size: _.ni.SIZE_48 }),
                }),
                (0, i.jsx)(D, {}),
            ],
        }),
    });
}
