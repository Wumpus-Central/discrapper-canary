"use strict";
n.d(t, { K: () => f, d: () => I });
var i = n(702841),
    r = n(5180),
    a = n(961973),
    s = n(164956),
    l = n(734057),
    o = n(71393),
    d = n(701785),
    c = n(707167),
    u = n(978165),
    _ = n(652215),
    E = n(746080);
function A(e) {
    let t = e.id,
        n = (d.h.getNewMemberActions(t) ?? []).length > 0,
        i = d.h.getEnabled(t);
    return n && e.features.has(_.GuildFeatures.COMMUNITY) && !(e.features.has(_.GuildFeatures.GUILD_ONBOARDING) && !i);
}
function h(e, t) {
    let n = t.getMutableGuildChannelsForGuild(e);
    for (let e in n) if (n[e].hasFlag(E.lx.IS_GUILD_RESOURCE_CHANNEL)) return !0;
    return !1;
}
function I(e) {
    let t = (0, u.A)(e);
    return (0, i.bG)([l.A, o.A, s.A], () => {
        if (__OVERLAY__ || e === _.ME || (0, r.ai)(e)) return !1;
        let n = o.A.getGuild(e);
        return (
            !!n?.features.has(_.GuildFeatures.COMMUNITY) &&
            (s.A.isFullServerPreview(e) ? A(n) : (0, a.rs)(e) ? t || h(e, l.A) : !!(0, c.A)(n) && (t || h(e, l.A)))
        );
    }, [e, t]);
}
function f(e) {
    let t = o.A.getGuild(e),
        n = s.A.isFullServerPreview(e);
    if (null == t || __OVERLAY__ || e === _.ME || (0, r.ai)(e)) return !1;
    if (n) return A(t);
    let i =
        (0, a.rs)(e) &&
        t.features.has(_.GuildFeatures.GUILD_ONBOARDING) &&
        t.features.has(_.GuildFeatures.GUILD_SERVER_GUIDE);
    return (
        ((t.features.has(_.GuildFeatures.GUILD_ONBOARDING) && t.features.has(_.GuildFeatures.GUILD_SERVER_GUIDE)) ||
            i) &&
        t.features.has(_.GuildFeatures.COMMUNITY)
    );
}
