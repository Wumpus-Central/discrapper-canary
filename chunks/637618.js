n.d(t, { Z: () => p }), n(388685), n(35282);
var r = n(255367);
n(73800);
var i = n(990547),
    l = n(399606),
    a = n(100527),
    o = n(213609),
    s = n(914010),
    c = n(267101),
    u = n(675297),
    d = n(20281);
function p(e) {
    let { code: t } = e,
        [n, p] = t.split('-'),
        m = (0, c.hO)(n, p),
        f = (0, l.e7)([s.Z], () => s.Z.getGuildId());
    return ((0, o.Z)(
        {
            type: d.n.VIEW,
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
        : (0, r.jsx)(u.H, {
              guildProductListing: m,
              guildId: n,
              location: a.Z.GUILD_PRODUCT_EMBED_CARD,
              cardWidth: 390,
              thumbnailHeight: 219
          });
}
