n.d(t, {
    Pb: () => c,
    ky: () => f,
    p0: () => _,
    up: () => u
}),
    n(642613),
    n(108131);
var r = n(442837),
    i = n(715903),
    a = n(271383),
    o = n(594174),
    s = n(308083),
    l = n(981631);
function c(e) {
    return null != e && e.identityEnabled
        ? {
              guildId: e.identityGuildId,
              tag: e.tag,
              badge: e.badge
          }
        : {};
}
function u(e) {
    return e.hasFeature(l.oNc.GUILD_TAGS);
}
n(388032);
let d = {
    [s.NC.SIZE_12]: 16,
    [s.NC.SIZE_16]: 16,
    [s.NC.SIZE_24]: 24,
    [s.NC.SIZE_32]: 32,
    [s.NC.SIZE_36]: 40
};
function f(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.NC.SIZE_12;
    if (null == t) return;
    let { CDN_HOST: r } = window.GLOBAL_ENV;
    if (null == r) return;
    let i = d[n];
    return ''.concat(location.protocol, '//').concat(r, '/clan-badges/').concat(e, '/').concat(t, '.png?size=').concat(i);
}
function _(e, t) {
    let n = (0, r.e7)([o.default], () => o.default.getUser(e), [e]),
        s = (0, r.e7)(
            [a.ZP],
            () => {
                if (null == t || null == e) return null;
                let n = a.ZP.getMember(t, e);
                return (0, i.EY)(n);
            },
            [t, e]
        ),
        { tag: l, guildId: u } = c(null == n ? void 0 : n.primaryGuild);
    return null != u && null != l && !s;
}
s.NC.SIZE_12, s.NC.SIZE_16, s.NC.SIZE_24, s.NC.SIZE_32, s.NC.SIZE_36;
