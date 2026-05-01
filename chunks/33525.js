n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var l = n(110259),
    s = n(702841),
    a = n(793574),
    r = n(139286),
    o = n(967198),
    d = n(250627),
    c = n(330075),
    u = n(412728);
function m(e) {
    let { code: t } = e,
        [n, m] = t.split("-"),
        h = (0, d.Qi)(n, m),
        g = (0, s.bG)([o.A], () => o.A.getGuildId());
    return ((0, r.A)(
        {
            type: u.z.VIEW,
            name: l.ImpressionNames.GUILD_PRODUCT_LISTING_EMBED,
            properties: { guild_product_listing_id: m, has_entitlement: h?.has_entitlement === !0 },
        },
        { disableTrack: null == h },
    ),
    null == h || g !== n)
        ? null
        : (0, i.jsx)(c.i, {
              guildProductListing: h,
              guildId: n,
              location: a.A.GUILD_PRODUCT_EMBED_CARD,
              cardWidth: 390,
              thumbnailHeight: 219,
          });
}
