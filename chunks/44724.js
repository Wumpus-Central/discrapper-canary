n.d(t, { X: () => u, default: () => d });
var l = n(846293),
    r = n(976860),
    i = n(71393),
    s = n(449054),
    a = n(733391),
    o = n(652215);
function u(e) {
    let { guildId: t, invite: n, forceFetch: l } = e;
    null != n && (t = n.guild?.id), null != t && (0, a.Rw)(t, { eager: !0, forceFetch: l });
}
async function d(e) {
    let { guildId: t, invite: n, pageIndex: a, skuId: u, slug: d } = e,
        c = null;
    if ((null != n && ((t = n.guild?.id), (c = new Set(n.guild?.features))), null == t)) return;
    let C = i.A.getGuild(t);
    C?.joinedAt == null &&
        (null == c || c.has(o.GuildFeatures.PREVIEW_ENABLED)
            ? await (0, s.Z2)(t, {}, { shouldNavigate: !1 })
            : null != n &&
              (await l.Ay.acceptInvite({ inviteKey: n.code, context: { location: "game_shop" }, skipOnboarding: !0 }))),
        (0, r.pX)(o.BVt.CHANNELS_GAME_SHOP(t, a, u, d));
}
