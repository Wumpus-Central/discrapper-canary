"use strict";
n.d(t, { X: () => d, default: () => _ });
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
async function _(e) {
    let { getSocialLayerStorefrontLink: t, guildId: n, invite: o, pageIndex: d, skuId: _, slug: f } = e,
        h = null;
    if ((null != o && ((n = o.guild?.id), (h = new Set(o.guild?.features))), null == n)) return;
    let p = s.A.getGuild(n);
    p?.joinedAt == null &&
        (null == h || h.has(c.GuildFeatures.PREVIEW_ENABLED)
            ? await (0, a.Z2)(n, {}, { shouldNavigate: !1 })
            : null != o &&
              (await i.Ay.acceptInvite({ inviteKey: o.code, context: { location: "game_shop" }, skipOnboarding: !0 })));
    let E = t?.(d, _, f);
    if (null != E) return void (0, r.pX)(E);
    let m = (0, u.V)({ location: "navigateToSocialLayerStorefront" }),
        g = l.A.getApplicationIdFromGuildId(n);
    m && null != g
        ? (0, r.pX)(c.BVt.COLLECTIBLES_SHOP_GAME_SHOP(g, d, _, f))
        : (0, r.pX)(c.BVt.CHANNELS_GAME_SHOP(n, d, _, f));
}
