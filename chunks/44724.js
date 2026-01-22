n.d(t, {
    X: () => c,
    default: () => u,
}),
    n(896048);
var r = n(846293),
    i = n(976860),
    a = n(71393),
    s = n(449054),
    o = n(733391),
    l = n(652215);
function c(e) {
    let { guildId: t, invite: n, forceFetch: r } = e;
    if (null != n) {
        var i;
        t = null == (i = n.guild) ? void 0 : i.id;
    }
    null != t &&
        (0, o.Rw)(t, {
            eager: !0,
            forceFetch: r,
        });
}
async function u(e) {
    let { guildId: t, invite: n, pageIndex: o, skuId: c, slug: u } = e,
        d = null;
    if (null != n) {
        var f, p;
        (t = null == (f = n.guild) ? void 0 : f.id), (d = new Set(null == (p = n.guild) ? void 0 : p.features));
    }
    if (null == t) return;
    let _ = a.A.getGuild(t);
    (null == _ ? void 0 : _.joinedAt) == null &&
        (null == d || d.has(l.GuildFeatures.PREVIEW_ENABLED)
            ? await (0, s.Z2)(t, {}, { shouldNavigate: !1 })
            : null != n &&
              (await r.Ay.acceptInvite({
                  inviteKey: n.code,
                  context: { location: "game_shop" },
                  skipOnboarding: !0,
              }))),
        (0, i.pX)(l.BVt.CHANNELS_GAME_SHOP(t, o, c, u));
}
