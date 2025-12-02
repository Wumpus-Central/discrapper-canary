n.r(t),
    n.d(t, {
        default: () => u,
        eagerNavigateToSocialLayerStorefront: () => c,
    }),
    n(388685);
var r = n(447543),
    i = n(703656),
    a = n(430824),
    o = n(900849),
    s = n(411935),
    l = n(981631);
function c(e) {
    let { guildId: t, invite: n } = e;
    if (null != n) {
        var r;
        t = null == (r = n.guild) ? void 0 : r.id;
    }
    null != t && (0, s.YL)(t, !0);
}
async function u(e) {
    let { guildId: t, invite: n, pageIndex: s, skuId: c, slug: u } = e,
        d = null;
    if (null != n) {
        var f, p;
        (t = null == (f = n.guild) ? void 0 : f.id), (d = new Set(null == (p = n.guild) ? void 0 : p.features));
    }
    if (null == t) return;
    let _ = a.Z.getGuild(t);
    (null == _ ? void 0 : _.joinedAt) == null &&
        (null == d || d.has(l.GuildFeatures.PREVIEW_ENABLED)
            ? await (0, o.Ub)(t, {}, { shouldNavigate: !1 })
            : null != n &&
              (await r.ZP.acceptInvite({
                  inviteKey: n.code,
                  context: { location: "game_shop" },
                  skipOnboarding: !0,
              }))),
        (0, i.uL)(l.Z5c.CHANNELS_GAME_SHOP(t, s, c, u));
}
