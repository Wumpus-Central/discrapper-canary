n.d(t, { Z: () => m }), n(47120);
var i = n(200651);
n(192379);
var l = n(990547),
    a = n(399606),
    r = n(100527),
    s = n(213609),
    o = n(914010),
    c = n(267101),
    d = n(675297),
    u = n(20281);
function m(e) {
    let { code: t } = e,
        [n, m] = t.split('-'),
        h = (0, c.hO)(n, m),
        _ = (0, a.e7)([o.Z], () => o.Z.getGuildId());
    return ((0, s.Z)(
        {
            type: u.n.VIEW,
            name: l.ImpressionNames.GUILD_PRODUCT_LISTING_EMBED,
            properties: {
                guild_product_listing_id: m,
                has_entitlement: (null == h ? void 0 : h.has_entitlement) === !0
            }
        },
        { disableTrack: null == h }
    ),
    null == h || _ !== n)
        ? null
        : (0, i.jsx)(d.H, {
              guildProductListing: h,
              guildId: n,
              location: r.Z.GUILD_PRODUCT_EMBED_CARD,
              cardWidth: 390,
              thumbnailHeight: 219
          });
}
