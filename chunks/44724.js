"use strict";
n.d(t, { X: () => c, default: () => d });
var r = n(376728),
    a = n(976860),
    i = n(71393),
    l = n(449054),
    s = n(733391),
    o = n(652215);
function c(e) {
    let { guildId: t, invite: n, forceFetch: r } = e;
    null != n && (t = n.guild?.id), null != t && (0, s.Rw)(t, { eager: !0, forceFetch: r });
}
async function d(e) {
    let { guildId: t, invite: n, pageIndex: s, skuId: c, slug: d } = e,
        u = null;
    if ((null != n && ((t = n.guild?.id), (u = new Set(n.guild?.features))), null == t)) return;
    let _ = i.A.getGuild(t);
    _?.joinedAt == null &&
        (null == u || u.has(o.GuildFeatures.PREVIEW_ENABLED)
            ? await (0, l.Z2)(t, {}, { shouldNavigate: !1 })
            : null != n &&
              (await r.Ay.acceptInvite({ inviteKey: n.code, context: { location: "game_shop" }, skipOnboarding: !0 }))),
        (0, a.pX)(o.BVt.CHANNELS_GAME_SHOP(t, s, c, d));
}
