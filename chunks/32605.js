i.d(t, { default: () => A, z: () => f });
var n = i(627968);
i(64700);
var l = i(397927),
    a = i(780964),
    s = i(840065),
    r = i(414345),
    o = i(422936),
    u = i(234419),
    d = i(244975),
    c = i(788868),
    h = i(652215),
    m = i(985018),
    p = i(511761),
    g = i(271110);
function A(e) {
    let { onClose: t, analyticsSource: i, ...l } = e,
        A = m.intl.format(m.t["JmbS+T"], {
            onClick: () => {
                (0, s.openUserSettings)(a.X.NITRO_PANEL, { section: h.nc_.PREMIUM }), t();
            },
        }),
        f = (0, u.V)(),
        T = (0, o.O)(),
        E = null != f || null != T;
    return (0, r.g1)({ location: "BurstReactionsUpsell" })
        ? (0, n.jsx)(d.F, {
              title: m.intl.string(m.t.N4SCJ0),
              subtitle: A,
              graphic: { src: g, type: "image" },
              onSecondaryClick: t,
              secondaryCTA: m.intl.string(m.t.f3Pet9),
              onClose: t,
          })
        : (0, n.jsx)(d.A, {
              artURL: g,
              artContainerClassName: p.JS,
              modalClassName: p.jT,
              bodyClassName: p.IP,
              type: c.e.BURST_REACTION_UPSELL,
              title: m.intl.string(m.t.N4SCJ0),
              body: A,
              onSecondaryClick: t,
              glowUp: A,
              secondaryCTA: m.intl.string(m.t.f3Pet9),
              analyticsSource: i,
              analyticsLocation: { page: h.liQ.PREMIUM_UPSELL_BURST_REACTIONS, object: h.ZSU.BUTTON_CTA },
              onClose: t,
              subscribeButtonText: E ? void 0 : m.intl.string(m.t["8x0jKT"]),
              subscriptionTier: f?.subscription_trial?.sku_id ?? c.pe.TIER_2,
              backButtonText: m.intl.string(m.t.f3Pet9),
              ...l,
          });
}
function f(e) {
    let { analytics: t } = e;
    (0, l.mMO)(async () => {
        let { default: e } = await Promise.resolve().then(i.bind(i, 32605));
        return (i) => (0, n.jsx)(e, { analyticsSource: t, ...i });
    });
}
