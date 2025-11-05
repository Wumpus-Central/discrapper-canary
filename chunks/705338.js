n.d(t, { Z: () => l }), n(388685);
var r = n(447543),
    i = n(703656),
    a = n(430824),
    o = n(900849),
    s = n(981631);
async function l(e) {
    let { guildId: t, invite: n, pageIndex: l, skuId: c, slug: u } = e,
        d = null;
    if (null != n) {
        var f, _;
        (t = null == (f = n.guild) ? void 0 : f.id), (d = new Set(null == (_ = n.guild) ? void 0 : _.features));
    }
    if (null == t) return;
    let p = a.Z.getGuild(t);
    (null == p ? void 0 : p.joinedAt) == null &&
        (null == d || d.has(s.GuildFeatures.PREVIEW_ENABLED)
            ? await (0, o.Ub)(t, {}, { shouldNavigate: !1 })
            : null != n &&
              (await r.ZP.acceptInvite({
                  inviteKey: n.code,
                  context: { location: "game_shop" },
                  skipOnboarding: !0,
              }))),
        (0, i.uL)(s.Z5c.CHANNELS_GAME_SHOP(t, l, c, u));
}
