n.d(t, { K: () => I, d: () => f });
var i = n(702841),
    r = n(5180),
    a = n(961973),
    s = n(164956),
    l = n(734057),
    o = n(71393),
    d = n(701785),
    c = n(374084),
    u = n(707167),
    _ = n(978165),
    E = n(652215),
    A = n(746080);
function h(e, t) {
    let n = e.id,
        i = !(0, c.jJ)(t.getSettings(n)),
        r = t.getEnabled(n);
    return i && e.features.has(E.GuildFeatures.COMMUNITY) && !(e.features.has(E.GuildFeatures.GUILD_ONBOARDING) && !r);
}
function f(e) {
    let t = (0, _.A)(e);
    return (0, i.bG)(
        [l.A, o.A, s.A, d.h],
        () => {
            if (__OVERLAY__ || e === E.ME || (0, r.ai)(e)) return !1;
            let n = o.A.getGuild(e);
            return (
                !!n?.features.has(E.GuildFeatures.COMMUNITY) &&
                (s.A.isFullServerPreview(e)
                    ? h(n, d.h)
                    : !!(0, u.A)(n) &&
                      (t ||
                          (function (e, t) {
                              let n = t.getMutableGuildChannelsForGuild(e);
                              for (let e in n) if (n[e].hasFlag(A.lx.IS_GUILD_RESOURCE_CHANNEL)) return !0;
                              return !1;
                          })(e, l.A)))
            );
        },
        [e, t],
    );
}
function I(e) {
    let t = o.A.getGuild(e),
        n = s.A.isFullServerPreview(e);
    if (null == t || __OVERLAY__ || e === E.ME || (0, r.ai)(e)) return !1;
    if (n) return h(t, d.h);
    let i =
        (0, a.rs)(e) &&
        t.features.has(E.GuildFeatures.GUILD_ONBOARDING) &&
        t.features.has(E.GuildFeatures.GUILD_SERVER_GUIDE);
    return (
        ((t.features.has(E.GuildFeatures.GUILD_ONBOARDING) && t.features.has(E.GuildFeatures.GUILD_SERVER_GUIDE)) ||
            i) &&
        t.features.has(E.GuildFeatures.COMMUNITY)
    );
}
