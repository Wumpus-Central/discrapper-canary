"use strict";
r.d(t, { X: () => c, default: () => u });
var n = r(376728),
    i = r(976860),
    a = r(71393),
    l = r(449054),
    s = r(733391),
    o = r(652215);
function c(e) {
    let { guildId: t, invite: r, forceFetch: n } = e;
    null != r && (t = r.guild?.id), null != t && (0, s.Rw)(t, { eager: !0, forceFetch: n });
}
async function u(e) {
    let { guildId: t, invite: r, pageIndex: s, skuId: c, slug: u } = e,
        d = null;
    if ((null != r && ((t = r.guild?.id), (d = new Set(r.guild?.features))), null == t)) return;
    let _ = a.A.getGuild(t);
    _?.joinedAt == null &&
        (null == d || d.has(o.GuildFeatures.PREVIEW_ENABLED)
            ? await (0, l.Z2)(t, {}, { shouldNavigate: !1 })
            : null != r &&
              (await n.Ay.acceptInvite({ inviteKey: r.code, context: { location: "game_shop" }, skipOnboarding: !0 }))),
        (0, i.pX)(o.BVt.CHANNELS_GAME_SHOP(t, s, c, u));
}
