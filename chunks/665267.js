var i = n(477900),
    l = n(582128),
    s = n(855986),
    r = n(821609),
    a = n(331322),
    o = n(793574),
    u = n(688810),
    c = n(47671),
    d = n(46075),
    m = n(270746),
    g = n(793943),
    A = n(562860),
    E = n(248797),
    h = n(739053),
    f = n(82498),
    p = n(620295),
    S = n(423814),
    T = n(77528),
    x = n(792656),
    I = n(511484),
    _ = n(811611),
    b = n(129230),
    y = n(830543),
    N = n(652215),
    C = n(385803),
    v = n(211824),
    j = n(682901),
    O = n(792996),
    D = n(510081);
function P() {
    ((0, g.nf)(g.HP.CLIENT_THEMES), (0, y.default)());
}
function R() {
    let e = p.R.useConfig({ location: "appearance_theme_trial_cta" }),
        t = (0, T.V)(),
        n = (0, S.O)(),
        l = (0, I.U9)(n, j.pe.TIER_2)
            ? O.intl.formatToPlainString(O.t.bkQ4bH, { percent: n?.discount.amount })
            : O.intl.string(O.t.mr4K7D);
    return e && t?.subscriptionTrial?.skuId === j.pe.TIER_2
        ? (0, i.jsx)(d.r, {
              trialOffer: t,
              premiumModalAnalyticsLocation: { object: N.ZSU.BUTTON_CTA, objectType: N.btD.BUY },
          })
        : (0, i.jsx)(x.A, {
              subscriptionTier: j.pe.TIER_2,
              defaultTextOverride: l,
              premiumModalAnalyticsLocation: { object: N.ZSU.BUTTON_CTA, objectType: N.btD.BUY },
              fullWidth: !0,
          });
}
function L() {
    let e = p.R.useConfig({ location: "appearance_theme_trial_actions" }),
        t = (0, s.bG)([c.A], () => c.A.isPreview),
        n = (0, T.V)()?.subscriptionTrial?.skuId === j.pe.TIER_2;
    return t
        ? e && n
            ? (0, i.jsx)("div", { className: D.gY, children: (0, i.jsx)(R, {}) })
            : n
              ? null
              : (0, i.jsxs)("div", {
                    className: D.gY,
                    children: [
                        (0, i.jsx)(r.$, { variant: "secondary", text: O.intl.string(O.t["E+COuA"]), onClick: P }),
                        (0, i.jsx)(R, {}),
                    ],
                })
        : null;
}
function G(e) {
    let { children: t } = e,
        n = p.R.useConfig({ location: "appearance_theme_trial_container" }),
        r = (0, T.V)()?.subscriptionTrial?.skuId === j.pe.TIER_2,
        a = (0, s.bG)([c.A], () => c.A.isPreview),
        { analyticsLocations: d } = (0, u.Ay)(o.A.USER_SETTINGS);
    return (l.useEffect(() => {
        a &&
            (b.default.track(N.HAw.PREMIUM_UPSELL_VIEWED, {
                type: j.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                location_stack: d,
            }),
            (0, h.sq)(N.U7l.PREMIUM_UPSELL_VIEWED, d, () => (0, f.uq)(j.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT)));
    }, [a, d]),
    a && n && r)
        ? (0, i.jsx)("div", { className: D.OM, children: t })
        : a
          ? (0, i.jsx)("div", { className: D._$, children: t })
          : t;
}
function M() {
    let e = p.R.useConfig({ location: "appearance_theme_trial_upsell" }),
        t = (0, s.bG)([c.A], () => c.A.isPreview),
        n = (0, T.V)()?.subscriptionTrial?.skuId === j.pe.TIER_2;
    return t && n && !e
        ? (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)("div", {
                      className: D.c7,
                      children: (0, i.jsx)(r.$, {
                          variant: "secondary",
                          fullWidth: !0,
                          text: O.intl.string(O.t["E+COuA"]),
                          onClick: () => P(),
                      }),
                  }),
                  (0, i.jsx)("div", { className: D.BU }),
                  (0, i.jsx)(_.Ay, { type: j.e.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL, subscriptionTier: j.pe.TIER_2 }),
              ],
          })
        : null;
}
function U() {
    return (0, E.R)() !== v.S9.LOCKED
        ? null
        : (0, i.jsx)(a.B, { padding: { top: 32 }, children: (0, i.jsx)(A.A, { type: m.v0.SETTINGS, isLocked: !0 }) });
}
n.d(
    t,
    {},
    {
        J3: P,
        sB: function () {
            return (0, i.jsx)(m.Ay, {
                type: m.v0.SETTINGS,
                children: (0, i.jsxs)(G, {
                    children: [
                        (0, i.jsx)(m.ew, {
                            isCoachmark: !1,
                            renderCTAButtons: () => (0, i.jsx)(L, {}),
                            headingClassName: D.EK,
                            titleTextVariant: "body-md/semibold",
                            titleClassName: D.cI,
                            titleIconClassName: D.Hq,
                        }),
                        (0, i.jsx)(a.B, {
                            direction: "horizontal",
                            wrap: !0,
                            gap: 8,
                            padding: { top: 24 },
                            children: (0, i.jsx)(m.Zg, { disabled: !1, size: C.ni.SIZE_48 }),
                        }),
                        (0, i.jsx)(U, {}),
                        (0, i.jsx)(M, {}),
                    ],
                }),
            });
        },
    },
);
