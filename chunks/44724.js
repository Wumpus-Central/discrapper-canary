"use strict";
n.d(t, { G: () => h, X: () => _, default: () => f, navigateToSocialLayerStorefrontWithGuildPreview: () => p });
var i = n(376728),
    r = n(976860),
    s = n(71393),
    a = n(449054),
    o = n(871123),
    l = n(733391),
    u = n(832163),
    c = n(81341),
    d = n(652215);
function _(e) {
    let { guildId: t, invite: n, forceFetch: i } = e;
    null != n && (t = n.guild?.id), null != t && (0, l.Rw)(t, { eager: !0, forceFetch: i });
}
function h(e) {
    let { applicationId: t, forceFetch: n } = e;
    (0, l.ap)(t, { eager: !0, forceFetch: n });
}
function f(e) {
    let { applicationId: t, guildId: n, pageIndex: i, invite: s, skuId: a, slug: l } = e,
        _ = (0, c.V)({ location: "navigateToSocialLayerStorefront" }),
        h = t ?? u.A.getApplicationIdFromGuildId(n),
        f = n ?? (0, o.n5)(t);
    return null == h && null == f && null == s
        ? Promise.resolve()
        : _ && null != h
          ? Promise.resolve((0, r.pX)(d.BVt.COLLECTIBLES_SHOP_GAME_SHOP(h, i, a, l)))
          : p({ guildId: f, pageIndex: i, invite: s, skuId: a, slug: l });
}
async function p(e) {
    let { guildId: t, invite: n, pageIndex: o, skuId: l, slug: u } = e,
        c = null;
    if ((null != n && ((t = n.guild?.id), (c = new Set(n.guild?.features))), null == t)) return;
    let _ = s.A.getGuild(t);
    return (
        _?.joinedAt == null &&
            (null == c || c.has(d.GuildFeatures.PREVIEW_ENABLED)
                ? await (0, a.Z2)(t, {}, { shouldNavigate: !1 })
                : null != n &&
                  (await i.Ay.acceptInvite({
                      inviteKey: n.code,
                      context: { location: "game_shop" },
                      skipOnboarding: !0,
                  }))),
        (0, r.pX)(d.BVt.CHANNELS_GAME_SHOP(t, o, l, u))
    );
}
