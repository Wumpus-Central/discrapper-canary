i.d(e, { G: () => p, X: () => s, default: () => g, navigateToSocialLayerStorefrontWithGuildPreview: () => h });
var t = i(376728),
    n = i(976860),
    u = i(71393),
    a = i(385648),
    o = i(871123),
    d = i(733391),
    r = i(832163),
    c = i(652215);
function s(l) {
    let { guildId: e, invite: i, forceFetch: t } = l;
    null != i && (e = i.guild?.id), null != e && (0, d.Rw)(e, { eager: !0, forceFetch: t });
}
function p(l) {
    let { applicationId: e, forceFetch: i } = l;
    (0, d.ap)(e, { eager: !0, forceFetch: i });
}
function g(l) {
    let { applicationId: e, guildId: i, pageIndex: t, invite: u, skuId: a, slug: d } = l,
        s = e ?? r.A.getApplicationIdFromGuildId(i),
        p = i ?? (0, o.n5)(e);
    return null == s && null == p && null == u
        ? Promise.resolve()
        : null != s
          ? Promise.resolve((0, n.pX)(c.BVt.COLLECTIBLES_SHOP_GAME_SHOP(s, t, a, d)))
          : h({ guildId: p, pageIndex: t, invite: u, skuId: a, slug: d });
}
async function h(l) {
    let { guildId: e, invite: i, pageIndex: o, skuId: d, slug: r } = l,
        s = null;
    if ((null != i && ((e = i.guild?.id), (s = new Set(i.guild?.features))), null == e)) return;
    let p = u.A.getGuild(e);
    return (
        p?.joinedAt == null &&
            (null == s || s.has(c.GuildFeatures.PREVIEW_ENABLED)
                ? await (0, a.Z2)(e, {}, { shouldNavigate: !1 })
                : null != i &&
                  (await t.Ay.acceptInvite({
                      inviteKey: i.code,
                      context: { location: "game_shop" },
                      skipOnboarding: !0,
                  }))),
        (0, n.pX)(c.BVt.CHANNELS_GAME_SHOP(e, o, d, r))
    );
}
