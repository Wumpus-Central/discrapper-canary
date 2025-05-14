n.d(t, {
    Ic: () => d,
    Pb: () => f,
    jq: () => c,
    up: () => u,
    yF: () => _
});
var r = n(442837),
    i = n(715903),
    o = n(271383),
    a = n(594174),
    s = n(131085),
    l = n(981631);
function c(e) {
    var t;
    return (null == e || null == (t = e.profile) ? void 0 : t.tag) != null;
}
function u(e) {
    return e.hasFeature(l.oNc.GUILD_TAGS);
}
function d(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.Gg.SIZE_12;
    if (null == t) return;
    let { CDN_HOST: r } = window.GLOBAL_ENV;
    if (null == r) return;
    let i = s.oC[n];
    return ''.concat(location.protocol, '//').concat(r, '/clan-badges/').concat(e, '/').concat(t, '.png?size=').concat(i);
}
function f(e) {
    return null != e && e.identityEnabled
        ? {
              guildId: e.identityGuildId,
              tag: e.tag,
              badge: e.badge
          }
        : {};
}
function _(e, t) {
    let n = (0, r.e7)([a.default], () => a.default.getUser(e), [e]),
        s = (0, r.e7)(
            [o.ZP],
            () => {
                if (null == t || null == e) return null;
                let n = o.ZP.getMember(t, e);
                return (0, i.EY)(n);
            },
            [t, e]
        ),
        { tag: l, guildId: c } = f(null == n ? void 0 : n.primaryGuild);
    return null != c && null != l && !s;
}
