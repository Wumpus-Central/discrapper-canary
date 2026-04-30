n.d(t, { Rg: () => s, Wb: () => b, Zo: () => p, gC: () => c, gS: () => f, q0: () => g });
var l = n(17928),
    i = n(229527),
    r = n(696451),
    u = n(71393),
    d = n(287809),
    a = n(743981),
    o = n(652215);
function g(e) {
    return e?.profile?.tag != null;
}
function s(e) {
    return e.features.has(o.GuildFeatures.GUILD_TAGS);
}
function c(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.Sl.SIZE_12;
    if (null == t) return;
    let { CDN_HOST: l } = window.GLOBAL_ENV;
    if (null == l) return;
    let i = a.lv[n];
    return `https://${l}/clan-badges/${e}/${t}.png?size=${i}`;
}
function p(e) {
    return null != e && e.identityEnabled ? { guildId: e.identityGuildId, tag: e.tag, badge: e.badge } : {};
}
function f(e) {
    let t = (0, l.bG)([u.A], () => u.A.getGuild(e), [e]);
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
function b(e, t, n) {
    let u = (0, l.bG)([d.default], () => d.default.getUser(e), [e]),
        a = (0, l.bG)([r.Ay], () => {
            if (null == t || null == e) return null;
            let n = r.Ay.getMember(t, e);
            return (0, i.TR)(n);
        }, [t, e]),
        { tag: o, guildId: g } = p(void 0 !== n ? n : u?.primaryGuild);
    return null != g && null != o && !a;
}
