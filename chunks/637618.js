n.d(t, { Z: () => p }), n(47120), n(301563);
var r = n(200651);
n(192379);
var i = n(990547),
    a = n(399606),
    o = n(100527),
    l = n(213609),
    s = n(914010),
    c = n(267101),
    d = n(675297),
    u = n(20281);
function p(e) {
    let { code: t } = e,
        [n, p] = t.split('-'),
        m = (0, c.hO)(n, p),
        f = (0, a.e7)([s.Z], () => s.Z.getGuildId());
    return ((0, l.Z)(
        {
            type: u.n.VIEW,
            name: i.ImpressionNames.GUILD_PRODUCT_LISTING_EMBED,
            properties: {
                guild_product_listing_id: p,
                has_entitlement: (null == m ? void 0 : m.has_entitlement) === !0
            }
        },
        { disableTrack: null == m }
    ),
    null == m || f !== n)
        ? null
        : (0, r.jsx)(d.H, {
              guildProductListing: m,
              guildId: n,
              location: o.Z.GUILD_PRODUCT_EMBED_CARD,
              cardWidth: 390,
              thumbnailHeight: 219
          });
}
