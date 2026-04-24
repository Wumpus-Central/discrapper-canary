n.d(t, { Rg: () => E, Wb: () => S, Zo: () => f, gC: () => o, gS: () => A, q0: () => u });
var a = n(17928),
    i = n(229527),
    r = n(696451),
    d = n(71393),
    l = n(287809),
    s = n(743981),
    c = n(652215);
function u(e) {
    return e?.profile?.tag != null;
}
function E(e) {
    return e.features.has(c.GuildFeatures.GUILD_TAGS);
}
function o(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.Sl.SIZE_12;
    if (null == t) return;
    let { CDN_HOST: a } = window.GLOBAL_ENV;
    if (null == a) return;
    let i = s.lv[n];
    return `https://${a}/clan-badges/${e}/${t}.png?size=${i}`;
}
function f(e) {
    return null != e && e.identityEnabled ? { guildId: e.identityGuildId, tag: e.tag, badge: e.badge } : {};
}
function A(e) {
    let t = (0, a.bG)([d.A], () => d.A.getGuild(e), [e]);
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
function S(e, t, n) {
    let d = (0, a.bG)([l.default], () => l.default.getUser(e), [e]),
        s = (0, a.bG)([r.Ay], () => {
            if (null == t || null == e) return null;
            let n = r.Ay.getMember(t, e);
            return (0, i.TR)(n);
        }, [t, e]),
        { tag: c, guildId: u } = f(void 0 !== n ? n : d?.primaryGuild);
    return null != u && null != c && !s;
}
