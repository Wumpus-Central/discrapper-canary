"use strict";
n.d(t, { X: () => d, default: () => _, navigateToSocialLayerStorefrontWithGuildPreview: () => f });
var i = n(376728),
    r = n(976860),
    s = n(71393),
    a = n(449054),
    o = n(733391),
    l = n(832163),
    u = n(81341),
    c = n(652215);
function d(e) {
    let { guildId: t, invite: n, forceFetch: i } = e;
    null != n && (t = n.guild?.id), null != t && (0, o.Rw)(t, { eager: !0, forceFetch: i });
}
function _(e) {
    let { guildId: t, pageIndex: n, invite: i, skuId: s, slug: a } = e,
        o = (0, u.V)({ location: "navigateToSocialLayerStorefront" }),
        d = null == t ? void 0 : l.A.getApplicationIdFromGuildId(t);
    return o && null != d
        ? Promise.resolve((0, r.pX)(c.BVt.COLLECTIBLES_SHOP_GAME_SHOP(d, n, s, a)))
        : f({ guildId: t, pageIndex: n, invite: i, skuId: s, slug: a });
}
async function f(e) {
    let { guildId: t, invite: n, pageIndex: o, skuId: l, slug: u } = e,
        d = null;
    if ((null != n && ((t = n.guild?.id), (d = new Set(n.guild?.features))), null == t)) return;
    let _ = s.A.getGuild(t);
    return (
        _?.joinedAt == null &&
            (null == d || d.has(c.GuildFeatures.PREVIEW_ENABLED)
                ? await (0, a.Z2)(t, {}, { shouldNavigate: !1 })
                : null != n &&
                  (await i.Ay.acceptInvite({
                      inviteKey: n.code,
                      context: { location: "game_shop" },
                      skipOnboarding: !0,
                  }))),
        (0, r.pX)(c.BVt.CHANNELS_GAME_SHOP(t, o, l, u))
    );
}
