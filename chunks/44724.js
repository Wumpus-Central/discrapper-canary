"use strict";
n.d(t, { G: () => _, X: () => d, default: () => h, navigateToSocialLayerStorefrontWithGuildPreview: () => f });
var i = n(376728),
    r = n(976860),
    s = n(71393),
    a = n(385648),
    o = n(871123),
    l = n(733391),
    u = n(832163),
    c = n(652215);
function d(e) {
    let { guildId: t, invite: n, forceFetch: i } = e;
    null != n && (t = n.guild?.id), null != t && (0, l.Rw)(t, { eager: !0, forceFetch: i });
}
function _(e) {
    let { applicationId: t, forceFetch: n } = e;
    (0, l.ap)(t, { eager: !0, forceFetch: n });
}
function h(e) {
    let { applicationId: t, guildId: n, pageIndex: i, invite: s, skuId: a, slug: l } = e,
        d = t ?? u.A.getApplicationIdFromGuildId(n),
        _ = n ?? (0, o.n5)(t);
    return null == d && null == _ && null == s
        ? Promise.resolve()
        : null != d
          ? Promise.resolve((0, r.pX)(c.BVt.COLLECTIBLES_SHOP_GAME_SHOP(d, i, a, l)))
          : f({ guildId: _, pageIndex: i, invite: s, skuId: a, slug: l });
}
async function f(e) {
    let { guildId: t, invite: n, pageIndex: o, skuId: l, slug: u } = e,
        d = null;
    if ((null != n && ((t = n.guild?.id), (d = new Set(n.guild?.features))), null == t)) return;
    let _ = s.A.getGuild(t);
    return (
        _?.joinedAt == null &&
            (null == d || d.has(c.GuildFeatures.PREVIEW_ENABLED)
                ? await (0, a.Z2)(t, {}, { shouldNavigate: !1 })
                : null != n &&
                  (await i.Ay.acceptInvite({
                      inviteKey: n.code,
                      context: { location: "game_shop" },
                      skipOnboarding: !0,
                  }))),
        (0, r.pX)(c.BVt.CHANNELS_GAME_SHOP(t, o, l, u))
    );
}
