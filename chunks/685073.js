"use strict";
n.d(t, { Rg: () => d, Wb: () => p, Zo: () => f, gC: () => _, gS: () => h, q0: () => c });
var i = n(17928),
    r = n(229527),
    s = n(696451),
    a = n(71393),
    o = n(287809),
    l = n(743981),
    u = n(652215);
function c(e) {
    return e?.profile?.tag != null;
}
function d(e) {
    return e.features.has(u.GuildFeatures.GUILD_TAGS);
}
function _(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.Sl.SIZE_12;
    if (null == t) return;
    let { CDN_HOST: i } = window.GLOBAL_ENV;
    if (null == i) return;
    let r = l.lv[n];
    return `https://${i}/clan-badges/${e}/${t}.png?size=${r}`;
}
function f(e) {
    return null != e && e.identityEnabled ? { guildId: e.identityGuildId, tag: e.tag, badge: e.badge } : {};
}
function h(e) {
    let t = (0, i.bG)([a.A], () => a.A.getGuild(e), [e]);
    return null == e
        ? e
        : null == t
          ? t
          : {
                identityGuildId: t.id,
                identityEnabled: !0,
                tag: t.profile?.tag ?? void 0,
                badge: t.profile?.badge ?? void 0,
            };
}
function p(e, t, n) {
    let a = (0, i.bG)([o.default], () => o.default.getUser(e), [e]),
        l = (0, i.bG)([s.Ay], () => {
            if (null == t || null == e) return null;
            let n = s.Ay.getMember(t, e);
            return (0, r.TR)(n);
        }, [t, e]),
        { tag: u, guildId: c } = f(void 0 !== n ? n : a?.primaryGuild);
    return null != c && null != u && !l;
}
