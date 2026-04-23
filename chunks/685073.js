"use strict";
n.d(t, { Rg: () => d, Wb: () => h, Zo: () => f, gC: () => _, gS: () => p, q0: () => c });
var r = n(311907),
    i = n(229527),
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
    let { CDN_HOST: r } = window.GLOBAL_ENV;
    if (null == r) return;
    let i = l.lv[n];
    return `https://${r}/clan-badges/${e}/${t}.png?size=${i}`;
}
function f(e) {
    return null != e && e.identityEnabled ? { guildId: e.identityGuildId, tag: e.tag, badge: e.badge } : {};
}
function p(e) {
    let t = (0, r.bG)([a.A], () => a.A.getGuild(e), [e]);
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
function h(e, t, n) {
    let a = (0, r.bG)([o.default], () => o.default.getUser(e), [e]),
        l = (0, r.bG)([s.Ay], () => {
            if (null == t || null == e) return null;
            let n = s.Ay.getMember(t, e);
            return (0, i.TR)(n);
        }, [t, e]),
        { tag: u, guildId: c } = f(void 0 !== n ? n : a?.primaryGuild);
    return null != c && null != u && !l;
}
