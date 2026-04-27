"use strict";
r.d(t, { X: () => c, default: () => d });
var n = r(376728),
    i = r(976860),
    a = r(71393),
    s = r(449054),
    l = r(733391),
    o = r(652215);
function c(e) {
    let { guildId: t, invite: r, forceFetch: n } = e;
    null != r && (t = r.guild?.id), null != t && (0, l.Rw)(t, { eager: !0, forceFetch: n });
}
async function d(e) {
    let { guildId: t, invite: r, pageIndex: l, skuId: c, slug: d } = e,
        u = null;
    if ((null != r && ((t = r.guild?.id), (u = new Set(r.guild?.features))), null == t)) return;
    let _ = a.A.getGuild(t);
    _?.joinedAt == null &&
        (null == u || u.has(o.GuildFeatures.PREVIEW_ENABLED)
            ? await (0, s.Z2)(t, {}, { shouldNavigate: !1 })
            : null != r &&
              (await n.Ay.acceptInvite({ inviteKey: r.code, context: { location: "game_shop" }, skipOnboarding: !0 }))),
        (0, i.pX)(o.BVt.CHANNELS_GAME_SHOP(t, l, c, d));
}
