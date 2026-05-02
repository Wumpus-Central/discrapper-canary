r.d(a, { Rg: () => E, Wb: () => S, Zo: () => f, gC: () => o, gS: () => A, q0: () => u });
var l = r(17928),
    t = r(229527),
    n = r(696451),
    i = r(71393),
    d = r(287809),
    s = r(743981),
    c = r(652215);
function u(e) {
    return e?.profile?.tag != null;
}
function E(e) {
    return e.features.has(c.GuildFeatures.GUILD_TAGS);
}
function o(e, a) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.Sl.SIZE_12;
    if (null == a) return;
    let { CDN_HOST: l } = window.GLOBAL_ENV;
    if (null == l) return;
    let t = s.lv[r];
    return `https://${l}/clan-badges/${e}/${a}.png?size=${t}`;
}
function f(e) {
    return null != e && e.identityEnabled ? { guildId: e.identityGuildId, tag: e.tag, badge: e.badge } : {};
}
function A(e) {
    let a = (0, l.bG)([i.A], () => i.A.getGuild(e), [e]);
    return null == e
        ? e
        : null == a
          ? a
          : {
                identityGuildId: a.id,
                identityEnabled: !0,
                tag: a.profile?.tag ?? void 0,
                badge: a.profile?.badge ?? void 0,
            };
}
function S(e, a, r) {
    let i = (0, l.bG)([d.default], () => d.default.getUser(e), [e]),
        s = (0, l.bG)([n.Ay], () => {
            if (null == a || null == e) return null;
            let r = n.Ay.getMember(a, e);
            return (0, t.TR)(r);
        }, [a, e]),
        { tag: c, guildId: u } = f(void 0 !== r ? r : i?.primaryGuild);
    return null != u && null != c && !s;
}
