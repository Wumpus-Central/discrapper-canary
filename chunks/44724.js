a.d(t, { X: () => c, default: () => d });
var n = a(376728),
    r = a(976860),
    l = a(71393),
    i = a(449054),
    s = a(733391),
    o = a(652215);
function c(e) {
    let { guildId: t, invite: a, forceFetch: n } = e;
    null != a && (t = a.guild?.id), null != t && (0, s.Rw)(t, { eager: !0, forceFetch: n });
}
async function d(e) {
    let { guildId: t, invite: a, pageIndex: s, skuId: c, slug: d } = e,
        u = null;
    if ((null != a && ((t = a.guild?.id), (u = new Set(a.guild?.features))), null == t)) return;
    let h = l.A.getGuild(t);
    h?.joinedAt == null &&
        (null == u || u.has(o.GuildFeatures.PREVIEW_ENABLED)
            ? await (0, i.Z2)(t, {}, { shouldNavigate: !1 })
            : null != a &&
              (await n.Ay.acceptInvite({ inviteKey: a.code, context: { location: "game_shop" }, skipOnboarding: !0 }))),
        (0, r.pX)(o.BVt.CHANNELS_GAME_SHOP(t, s, c, d));
}
