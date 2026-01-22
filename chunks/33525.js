n.d(t, {
    A: () => f,
}),
    n(896048),
    n(747238);
var r = n(627968);
n(64700);
var i = n(110259),
    a = n(417597),
    s = n(793574),
    o = n(139286),
    l = n(967198),
    c = n(250627),
    u = n(284605),
    d = n(412728);

function f(e) {
    let { code: t } = e,
        [n, f] = t.split("-"),
        p = (0, c.Qi)(n, f),
        _ = (0, a.bG)([l.A], () => l.A.getGuildId());
    return ((0, o.A)(
        {
            type: d.z.VIEW,
            name: i.ImpressionNames.GUILD_PRODUCT_LISTING_EMBED,
            properties: {
                guild_product_listing_id: f,
                has_entitlement: (null == p ? void 0 : p.has_entitlement) === !0,
            },
        },
        {
            disableTrack: null == p,
        },
    ),
    null == p || _ !== n)
        ? null
        : (0, r.jsx)(u.i, {
              guildProductListing: p,
              guildId: n,
              location: s.A.GUILD_PRODUCT_EMBED_CARD,
              cardWidth: 390,
              thumbnailHeight: 219,
          });
}
