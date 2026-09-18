n.d(t, { J3: () => y, sB: () => R });
var i = n(477900),
    l = n(582128),
    s = n(17928),
    r = n(821609),
    a = n(331322),
    o = n(793574),
    u = n(688810),
    d = n(147248),
    c = n(487245),
    g = n(793943),
    m = n(10392),
    A = n(82498),
    E = n(724651),
    h = n(732280),
    S = n(792656),
    T = n(511484),
    p = n(811611),
    x = n(174459),
    f = n(830543),
    I = n(652215),
    _ = n(385803),
    N = n(202541),
    C = n(375708),
    b = n(510081);
function y() {
    ((0, g.nf)(g.HP.CLIENT_THEMES), (0, f.default)());
}
function v() {
    let e = (0, E.O)(),
        t = (0, T.U9)(e, N.pe.TIER_2)
            ? C.intl.formatToPlainString(C.t.bkQ4bH, { percent: e?.discount.amount })
            : C.intl.string(C.t.mr4K7D);
    return (0, i.jsx)(S.A, {
        subscriptionTier: N.pe.TIER_2,
        defaultTextOverride: t,
        premiumModalAnalyticsLocation: { object: I.ZSU.BUTTON_CTA, objectType: I.AnalyticsObjectTypes.BUY },
        fullWidth: !0,
    });
}
function j() {
    let e = (0, s.bG)([d.A], () => d.A.isPreview),
        t = (0, h.V)()?.subscriptionTrial?.skuId === N.pe.TIER_2;
    return !e || t
        ? null
        : (0, i.jsxs)("div", {
              className: b.gY,
              children: [
                  (0, i.jsx)(r.$, { variant: "secondary", text: C.intl.string(C.t["E+COuA"]), onClick: y }),
                  (0, i.jsx)(v, {}),
              ],
          });
}
function O(e) {
    let { children: t } = e,
        n = (0, s.bG)([d.A], () => d.A.isPreview),
        { analyticsLocations: r } = (0, u.Ay)(o.A.USER_SETTINGS);
    return (l.useEffect(() => {
        n &&
            (x.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
                type: N.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                location_stack: r,
            }),
            (0, m.sq)(I.U7l.PREMIUM_UPSELL_VIEWED, r, () => (0, A.uq)(N.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT)));
    }, [n, r]),
    n)
        ? (0, i.jsx)("div", { className: b._$, children: t })
        : t;
}
function L() {
    let e = (0, s.bG)([d.A], () => d.A.isPreview),
        t = (0, h.V)()?.subscriptionTrial?.skuId === N.pe.TIER_2;
    return e && t
        ? (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)("div", {
                      className: b.c7,
                      children: (0, i.jsx)(r.$, {
                          variant: "secondary",
                          fullWidth: !0,
                          text: C.intl.string(C.t["E+COuA"]),
                          onClick: () => y(),
                      }),
                  }),
                  (0, i.jsx)("div", { className: b.BU }),
                  (0, i.jsx)(p.Ay, { type: N.e.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL, subscriptionTier: N.pe.TIER_2 }),
              ],
          })
        : null;
}
function R() {
    return (0, i.jsx)(c.Ay, {
        type: c.v0.SETTINGS,
        children: (0, i.jsxs)(O, {
            children: [
                (0, i.jsx)(c.ew, {
                    isCoachmark: !1,
                    renderCTAButtons: () => (0, i.jsx)(j, {}),
                    headingClassName: b.EK,
                    titleTextVariant: "text-md/semibold",
                    titleClassName: b.cI,
                    titleIconClassName: b.Hq,
                }),
                (0, i.jsx)(a.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    padding: { top: 24 },
                    children: (0, i.jsx)(c.Zg, { disabled: !1, size: _.ni.SIZE_48 }),
                }),
                (0, i.jsx)(L, {}),
            ],
        }),
    });
}
