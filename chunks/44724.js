t.d(n, { G: () => g, X: () => p, default: () => f, navigateToSocialLayerStorefrontWithGuildPreview: () => h });
var l = t(376728),
    i = t(976860),
    a = t(71393),
    u = t(385648),
    o = t(871123),
    r = t(733391),
    d = t(832163),
    s = t(81341),
    c = t(652215);
function p(e) {
    let { guildId: n, invite: t, forceFetch: l } = e;
    null != t && (n = t.guild?.id), null != n && (0, r.Rw)(n, { eager: !0, forceFetch: l });
}
function g(e) {
    let { applicationId: n, forceFetch: t } = e;
    (0, r.ap)(n, { eager: !0, forceFetch: t });
}
function f(e) {
    let { applicationId: n, guildId: t, pageIndex: l, invite: a, skuId: u, slug: r } = e,
        p = (0, s.V)({ location: "navigateToSocialLayerStorefront" }),
        g = n ?? d.A.getApplicationIdFromGuildId(t),
        f = t ?? (0, o.n5)(n);
    return null == g && null == f && null == a
        ? Promise.resolve()
        : p && null != g
          ? Promise.resolve((0, i.pX)(c.BVt.COLLECTIBLES_SHOP_GAME_SHOP(g, l, u, r)))
          : h({ guildId: f, pageIndex: l, invite: a, skuId: u, slug: r });
}
async function h(e) {
    let { guildId: n, invite: t, pageIndex: o, skuId: r, slug: d } = e,
        s = null;
    if ((null != t && ((n = t.guild?.id), (s = new Set(t.guild?.features))), null == n)) return;
    let p = a.A.getGuild(n);
    return (
        p?.joinedAt == null &&
            (null == s || s.has(c.GuildFeatures.PREVIEW_ENABLED)
                ? await (0, u.Z2)(n, {}, { shouldNavigate: !1 })
                : null != t &&
                  (await l.Ay.acceptInvite({
                      inviteKey: t.code,
                      context: { location: "game_shop" },
                      skipOnboarding: !0,
                  }))),
        (0, i.pX)(c.BVt.CHANNELS_GAME_SHOP(n, o, r, d))
    );
}
OP(t, o, l, u);
)}
