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
    m = n(739053),
    A = n(82498),
    E = n(423814),
    h = n(77528),
    S = n(792656),
    T = n(511484),
    p = n(811611),
    f = n(129230),
    x = n(830543),
    I = n(652215),
    _ = n(385803),
    b = n(682901),
    N = n(792996),
    C = n(510081);
function y() {
    ((0, g.nf)(g.HP.CLIENT_THEMES), (0, x.default)());
}
function v() {
    let e = (0, E.O)(),
        t = (0, T.U9)(e, b.pe.TIER_2)
            ? N.intl.formatToPlainString(N.t.bkQ4bH, { percent: e?.discount.amount })
            : N.intl.string(N.t.mr4K7D);
    return (0, i.jsx)(S.A, {
        subscriptionTier: b.pe.TIER_2,
        defaultTextOverride: t,
        premiumModalAnalyticsLocation: { object: I.ZSU.BUTTON_CTA, objectType: I.btD.BUY },
        fullWidth: !0,
    });
}
function j() {
    let e = (0, s.bG)([d.A], () => d.A.isPreview),
        t = (0, h.V)()?.subscriptionTrial?.skuId === b.pe.TIER_2;
    return !e || t
        ? null
        : (0, i.jsxs)("div", {
              className: C.gY,
              children: [
                  (0, i.jsx)(r.$, { variant: "secondary", text: N.intl.string(N.t["E+COuA"]), onClick: y }),
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
            (f.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
                type: b.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                location_stack: r,
            }),
            (0, m.sq)(I.U7l.PREMIUM_UPSELL_VIEWED, r, () => (0, A.uq)(b.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT)));
    }, [n, r]),
    n)
        ? (0, i.jsx)("div", { className: C._$, children: t })
        : t;
}
function R() {
    let e = (0, s.bG)([d.A], () => d.A.isPreview),
        t = (0, h.V)()?.subscriptionTrial?.skuId === b.pe.TIER_2;
    return e && t
        ? (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)("div", {
                      className: C.c7,
                      children: (0, i.jsx)(r.$, {
                          variant: "secondary",
                          fullWidth: !0,
                          text: N.intl.string(N.t["E+COuA"]),
                          onClick: () => y(),
                      }),
                  }),
                  (0, i.jsx)("div", { className: C.BU }),
                  (0, i.jsx)(p.Ay, { type: b.e.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL, subscriptionTier: b.pe.TIER_2 }),
              ],
          })
        : null;
}
n.d(
    t,
    {},
    {
        J3: y,
        sB: function () {
            return (0, i.jsx)(c.Ay, {
                type: c.v0.SETTINGS,
                children: (0, i.jsxs)(O, {
                    children: [
                        (0, i.jsx)(c.ew, {
                            isCoachmark: !1,
                            renderCTAButtons: () => (0, i.jsx)(j, {}),
                            headingClassName: C.EK,
                            titleTextVariant: "body-md/semibold",
                            titleClassName: C.cI,
                            titleIconClassName: C.Hq,
                        }),
                        (0, i.jsx)(a.B, {
                            direction: "horizontal",
                            wrap: !0,
                            gap: 8,
                            padding: { top: 24 },
                            children: (0, i.jsx)(c.Zg, { disabled: !1, size: _.ni.SIZE_48 }),
                        }),
                        (0, i.jsx)(R, {}),
                    ],
                }),
            });
        },
    },
);
