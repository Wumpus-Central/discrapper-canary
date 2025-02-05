n.d(t, { Z: () => g });
var i = n(200651);
n(192379);
var l = n(512722),
    a = n.n(l),
    r = n(399606),
    s = n(481060),
    o = n(607070),
    c = n(430824),
    d = n(506071),
    u = n(267101),
    m = n(240864),
    _ = n(57949),
    h = n(400916),
    p = n(388032);
function g(e) {
    let { guildId: t, guildProductListingId: n, sourceAnalyticsLocations: l } = e,
        g = (0, r.e7)([m.Z], () => m.Z.getGuildProduct(n)),
        f = (0, r.e7)([c.Z], () => c.Z.getGuild(t), [t]),
        x = (0, r.e7)([o.Z], () => o.Z.useReducedMotion),
        C = (0, d.n)();
    return (a()(null != f, 'guild cannot be null'), a()(null != g, 'guildProductListing cannot be null'), (0, u.SO)(f))
        ? (0, i.jsx)(s.ua7, {
              text: p.intl.string(p.t.sAJr9f),
              children: (e) =>
                  (0, i.jsx)(s.zxk, {
                      ...e,
                      color: s.zxk.Colors.BRAND,
                      disabled: !0,
                      children: p.intl.string(p.t.xUi3BA)
                  })
          })
        : g.has_entitlement
          ? null != g.attachments
              ? (0, i.jsx)(h.Z, {
                    guildId: f.id,
                    productId: g.id
                })
              : (0, i.jsx)(s.zxk, {
                    color: s.zxk.Colors.PRIMARY,
                    disabled: !0,
                    children: p.intl.string(p.t.RcTOGB)
                })
          : (0, i.jsx)(s.gtL, {
                shineSize: s.gtL.ShineSizes.SMALL,
                pauseAnimation: x || !C,
                onClick: () =>
                    (0, _.z)({
                        guildProductListing: g,
                        guildId: f.id,
                        sourceAnalyticsLocations: l
                    }),
                children: p.intl.string(p.t.xUi3BA)
            });
}
