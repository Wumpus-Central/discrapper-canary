n.d(t, {
    Z: function () {
        return m;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var r = n(990547),
    l = n(399606),
    a = n(100527),
    o = n(213609),
    s = n(914010),
    c = n(267101),
    u = n(675297),
    d = n(20281);
function m(e) {
    let { code: t } = e,
        [n, m] = t.split('-'),
        h = (0, c.hO)(n, m),
        f = (0, l.e7)([s.Z], () => s.Z.getGuildId());
    return ((0, o.Z)(
        {
            type: d.n.VIEW,
            name: r.ImpressionNames.GUILD_PRODUCT_LISTING_EMBED,
            properties: {
                guild_product_listing_id: m,
                has_entitlement: (null == h ? void 0 : h.has_entitlement) === !0
            }
        },
        { disableTrack: null == h }
    ),
    null == h || f !== n)
        ? null
        : (0, i.jsx)(u.H, {
              guildProductListing: h,
              guildId: n,
              location: a.Z.GUILD_PRODUCT_EMBED_CARD,
              cardWidth: 390,
              thumbnailHeight: 219
          });
}
