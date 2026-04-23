n.d(t, { Rg: () => c, Wb: () => p, Zo: () => E, gC: () => h, gS: () => _, q0: () => u });
var i = n(17928),
    r = n(229527),
    l = n(696451),
    a = n(71393),
    s = n(287809),
    o = n(743981),
    d = n(652215);
function u(e) {
    return e?.profile?.tag != null;
}
function c(e) {
    return e.features.has(d.GuildFeatures.GUILD_TAGS);
}
function h(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.Sl.SIZE_12;
    if (null == t) return;
    let { CDN_HOST: i } = window.GLOBAL_ENV;
    if (null == i) return;
    let r = o.lv[n];
    return `https://${i}/clan-badges/${e}/${t}.png?size=${r}`;
}
function E(e) {
    return null != e && e.identityEnabled ? { guildId: e.identityGuildId, tag: e.tag, badge: e.badge } : {};
}
function _(e) {
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
    let a = (0, i.bG)([s.default], () => s.default.getUser(e), [e]),
        o = (0, i.bG)([l.Ay], () => {
            if (null == t || null == e) return null;
            let n = l.Ay.getMember(t, e);
            return (0, r.TR)(n);
        }, [t, e]),
        { tag: d, guildId: u } = E(void 0 !== n ? n : a?.primaryGuild);
    return null != u && null != d && !o;
}
