i.d(t, { J3: () => j, sB: () => D });
var n = i(627968),
    s = i(64700),
    l = i(17928),
    r = i(554146),
    a = i(821609),
    o = i(331322),
    u = i(793574),
    d = i(688810),
    c = i(47671),
    g = i(487245),
    m = i(793943),
    A = i(826673),
    h = i(422936),
    E = i(234419),
    T = i(792656),
    x = i(511484),
    S = i(811611),
    p = i(174459),
    N = i(830543),
    f = i(652215),
    _ = i(385803),
    C = i(49999),
    I = i(788868),
    b = i(375708),
    v = i(220982);
let j = () => {
    (0, A.Dr)(r.M.CLIENT_THEMES_SPARKLE_PREVIEW, { dismissAction: C.i.PRIMARY, forceTrack: !0 }),
        (0, m.nf)(m.HP.CLIENT_THEMES),
        (0, N.default)();
};
function y() {
    let e = (0, h.O)(),
        t = (0, x.U9)(e, I.pe.TIER_2)
            ? b.intl.formatToPlainString(b.t.bkQ4bH, { percent: e?.discount.amount })
            : b.intl.string(b.t.mr4K7D);
    return (0, n.jsx)(T.A, {
        subscriptionTier: I.pe.TIER_2,
        defaultTextOverride: t,
        premiumModalAnalyticsLocation: { object: f.ZSU.BUTTON_CTA, objectType: f.AnalyticsObjectTypes.BUY },
        fullWidth: !0,
    });
}
function O() {
    let e = (0, l.bG)([c.A], () => c.A.isPreview),
        t = (0, E.V)()?.subscription_trial?.sku_id === I.pe.TIER_2;
    return !e || t
        ? null
        : (0, n.jsxs)("div", {
              className: v.gY,
              children: [
                  (0, n.jsx)(a.$, { variant: "secondary", text: b.intl.string(b.t["E+COuA"]), onClick: j }),
                  (0, n.jsx)(y, {}),
              ],
          });
}
function R(e) {
    let { children: t } = e,
        i = (0, l.bG)([c.A], () => c.A.isPreview),
        { analyticsLocations: r } = (0, d.Ay)(u.A.USER_SETTINGS);
    return (s.useEffect(() => {
        i &&
            p.default.track(f.HAw.PREMIUM_UPSELL_VIEWED, {
                type: I.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                location_stack: r,
            });
    }, [i, r]),
    i)
        ? (0, n.jsx)("div", { className: v._$, children: t })
        : t;
}
function L() {
    let e = (0, l.bG)([c.A], () => c.A.isPreview),
        t = (0, E.V)()?.subscription_trial?.sku_id === I.pe.TIER_2;
    return e && t
        ? (0, n.jsxs)("div", {
              children: [
                  (0, n.jsx)("div", {
                      className: v.c7,
                      children: (0, n.jsx)(a.$, {
                          variant: "secondary",
                          fullWidth: !0,
                          text: b.intl.string(b.t["E+COuA"]),
                          onClick: () => j(),
                      }),
                  }),
                  (0, n.jsx)("div", { className: v.BU }),
                  (0, n.jsx)(S.Ay, { type: I.e.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL, subscriptionTier: I.pe.TIER_2 }),
              ],
          })
        : null;
}
function D() {
    return (0, n.jsx)(g.Ay, {
        type: g.v0.SETTINGS,
        children: (0, n.jsxs)(R, {
            children: [
                (0, n.jsx)(g.ew, {
                    isCoachmark: !1,
                    renderCTAButtons: () => (0, n.jsx)(O, {}),
                    headingClassName: v.EK,
                    titleTextVariant: "text-md/semibold",
                    titleClassName: v.cI,
                    titleIconClassName: v.Hq,
                }),
                (0, n.jsx)(o.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    padding: { top: 24 },
                    children: (0, n.jsx)(g.Zg, { disabled: !1, size: _.ni.SIZE_48 }),
                }),
                (0, n.jsx)(L, {}),
            ],
        }),
    });
}
