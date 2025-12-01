n.d(t, { Z: () => f }), n(388685), n(35282);
var r = n(54381);
n(473749);
var i = n(990547),
    a = n(399606),
    o = n(100527),
    s = n(213609),
    l = n(914010),
    c = n(267101),
    u = n(675297),
    d = n(20281);
function f(e) {
    let { code: t } = e,
        [n, f] = t.split("-"),
        p = (0, c.hO)(n, f),
        _ = (0, a.e7)([l.Z], () => l.Z.getGuildId());
    return ((0, s.Z)(
        {
            type: d.n.VIEW,
            name: i.ImpressionNames.GUILD_PRODUCT_LISTING_EMBED,
            properties: {
                guild_product_listing_id: f,
                has_entitlement: (null == p ? void 0 : p.has_entitlement) === !0,
            },
        },
        { disableTrack: null == p },
    ),
    null == p || _ !== n)
        ? null
        : (0, r.jsx)(u.H, {
              guildProductListing: p,
              guildId: n,
              location: o.Z.GUILD_PRODUCT_EMBED_CARD,
              cardWidth: 390,
              thumbnailHeight: 219,
          });
}
