"use strict";
n.d(t, { X: () => u, default: () => c });
var r = n(846293),
    i = n(976860),
    s = n(71393),
    a = n(449054),
    o = n(733391),
    l = n(652215);
function u(e) {
    let { guildId: t, invite: n, forceFetch: r } = e;
    null != n && (t = n.guild?.id), null != t && (0, o.Rw)(t, { eager: !0, forceFetch: r });
}
async function c(e) {
    let { guildId: t, invite: n, pageIndex: o, skuId: u, slug: c } = e,
        d = null;
    if ((null != n && ((t = n.guild?.id), (d = new Set(n.guild?.features))), null == t)) return;
    let _ = s.A.getGuild(t);
    _?.joinedAt == null &&
        (null == d || d.has(l.GuildFeatures.PREVIEW_ENABLED)
            ? await (0, a.Z2)(t, {}, { shouldNavigate: !1 })
            : null != n &&
              (await r.Ay.acceptInvite({ inviteKey: n.code, context: { location: "game_shop" }, skipOnboarding: !0 }))),
        (0, i.pX)(l.BVt.CHANNELS_GAME_SHOP(t, o, u, c));
}
