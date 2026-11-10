var i = n(477900),
    l = n(582128),
    s = n(855986),
    r = n(821609),
    a = n(331322),
    o = n(793574),
    u = n(688810),
    d = n(850333),
    c = n(270746),
    g = n(793943),
    m = n(562860),
    A = n(248797),
    E = n(739053),
    h = n(82498),
    S = n(423814),
    T = n(77528),
    f = n(792656),
    p = n(511484),
    x = n(811611),
    I = n(129230),
    _ = n(830543),
    N = n(652215),
    b = n(385803),
    C = n(211824),
    y = n(682901),
    v = n(792996),
    j = n(510081);
function O() {
    ((0, g.nf)(g.HP.CLIENT_THEMES), (0, _.default)());
}
function R() {
    let e = (0, S.O)(),
        t = (0, p.U9)(e, y.pe.TIER_2)
            ? v.intl.formatToPlainString(v.t.bkQ4bH, { percent: e?.discount.amount })
            : v.intl.string(v.t.mr4K7D);
    return (0, i.jsx)(f.A, {
        subscriptionTier: y.pe.TIER_2,
        defaultTextOverride: t,
        premiumModalAnalyticsLocation: { object: N.ZSU.BUTTON_CTA, objectType: N.btD.BUY },
        fullWidth: !0,
    });
}
function D() {
    let e = (0, s.bG)([d.A], () => d.A.isPreview),
        t = (0, T.V)()?.subscriptionTrial?.skuId === y.pe.TIER_2;
    return !e || t
        ? null
        : (0, i.jsxs)("div", {
              className: j.gY,
              children: [
                  (0, i.jsx)(r.$, { variant: "secondary", text: v.intl.string(v.t["E+COuA"]), onClick: O }),
                  (0, i.jsx)(R, {}),
              ],
          });
}
function L(e) {
    let { children: t } = e,
        n = (0, s.bG)([d.A], () => d.A.isPreview),
        { analyticsLocations: r } = (0, u.Ay)(o.A.USER_SETTINGS);
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
    let e = (0, s.bG)([d.A], () => d.A.isPreview),
        t = (0, T.V)()?.subscriptionTrial?.skuId === y.pe.TIER_2;
    return e && t
        ? (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)("div", {
                      className: j.c7,
                      children: (0, i.jsx)(r.$, {
                          variant: "secondary",
                          fullWidth: !0,
                          text: v.intl.string(v.t["E+COuA"]),
                          onClick: () => O(),
                      }),
                  }),
                  (0, i.jsx)("div", { className: j.BU }),
                  (0, i.jsx)(x.Ay, { type: y.e.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL, subscriptionTier: y.pe.TIER_2 }),
              ],
          })
        : null;
}
function G() {
    return (0, A.R)() !== C.S9.LOCKED
        ? null
        : (0, i.jsx)(a.B, { padding: { top: 32 }, children: (0, i.jsx)(m.A, { type: c.v0.SETTINGS, isLocked: !0 }) });
}
n.d(
    t,
    {},
    {
        J3: O,
        sB: function () {
            return (0, i.jsx)(c.Ay, {
                type: c.v0.SETTINGS,
                children: (0, i.jsxs)(L, {
                    children: [
                        (0, i.jsx)(c.ew, {
                            isCoachmark: !1,
                            renderCTAButtons: () => (0, i.jsx)(D, {}),
                            headingClassName: j.EK,
                            titleTextVariant: "body-md/semibold",
                            titleClassName: j.cI,
                            titleIconClassName: j.Hq,
                        }),
                        (0, i.jsx)(a.B, {
                            direction: "horizontal",
                            wrap: !0,
                            gap: 8,
                            padding: { top: 24 },
                            children: (0, i.jsx)(c.Zg, { disabled: !1, size: b.ni.SIZE_48 }),
                        }),
                        (0, i.jsx)(G, {}),
                        (0, i.jsx)(P, {}),
                    ],
                }),
            });
        },
    },
);
