n.d(t, {
    Pb: () => u,
    ky: () => _,
    p0: () => p,
    up: () => d
}),
    n(642613),
    n(108131);
var r = n(442837),
    i = n(607070),
    a = n(715903),
    o = n(271383),
    s = n(594174),
    l = n(308083),
    c = n(981631);
function u(e) {
    return null != e && e.identityEnabled
        ? {
              guildId: e.identityGuildId,
              tag: e.tag,
              badge: e.badge
          }
        : {};
}
function d(e) {
    return e.hasFeature(c.oNc.CLAN) || e.hasFeature(c.oNc.GUILD_TAGS);
}
n(388032);
let f = {
    [l.NC.SIZE_12]: 16,
    [l.NC.SIZE_16]: 16,
    [l.NC.SIZE_24]: 24,
    [l.NC.SIZE_32]: 32,
    [l.NC.SIZE_36]: 40
};
function _(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.NC.SIZE_12;
    if (null == t) return;
    let { CDN_HOST: r } = window.GLOBAL_ENV;
    if (null == r) return;
    let i = f[n];
    return ''.concat(location.protocol, '//').concat(r, '/clan-badges/').concat(e, '/').concat(t, '.png?size=').concat(i);
}
function p(e, t) {
    let n = (0, r.e7)([i.Z], () => i.Z.hideTags),
        l = (0, r.e7)([s.default], () => s.default.getUser(e), [e]),
        c = (0, r.e7)(
            [o.ZP],
            () => {
                if (null == t || null == e) return null;
                let n = o.ZP.getMember(t, e);
                return (0, a.EY)(n);
            },
            [t, e]
        ),
        { tag: d, guildId: f } = u(null == l ? void 0 : l.primaryGuild);
    return !n && null != f && null != d && !c;
}
l.NC.SIZE_12, l.NC.SIZE_16, l.NC.SIZE_24, l.NC.SIZE_32, l.NC.SIZE_36;
