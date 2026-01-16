n.d(t, {
    Ic: () => f,
    Pb: () => p,
    jq: () => u,
    oZ: () => _,
    up: () => d,
    yF: () => h,
});
var r = n(442837),
    i = n(715903),
    a = n(271383),
    o = n(430824),
    s = n(594174),
    l = n(131085),
    c = n(981631);
function u(e) {
    var t;
    return (null == e || null == (t = e.profile) ? void 0 : t.tag) != null;
}
function d(e) {
    return e.features.has(c.GuildFeatures.GUILD_TAGS);
}
function f(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.Gg.SIZE_12;
    if (null == t) return;
    let { CDN_HOST: r } = window.GLOBAL_ENV;
    if (null == r) return;
    let i = l.oC[n];
    return "https://".concat(r, "/clan-badges/").concat(e, "/").concat(t, ".png?size=").concat(i);
}
function p(e) {
    return null != e && e.identityEnabled
        ? {
              guildId: e.identityGuildId,
              tag: e.tag,
              badge: e.badge,
          }
        : {};
}
function _(e) {
    var t, n, i, a;
    let s = (0, r.e7)([o.Z], () => o.Z.getGuild(e), [e]);
    return null == e
        ? e
        : null == s
          ? s
          : {
                identityGuildId: s.id,
                identityEnabled: !0,
                tag: null != (i = null == (t = s.profile) ? void 0 : t.tag) ? i : void 0,
                badge: null != (a = null == (n = s.profile) ? void 0 : n.badge) ? a : void 0,
            };
}
function h(e, t, n) {
    let o = (0, r.e7)([s.default], () => s.default.getUser(e), [e]),
        l = (0, r.e7)([a.ZP], () => {
            if (null == t || null == e) return null;
            let n = a.ZP.getMember(t, e);
            return (0, i.EY)(n);
        }, [t, e]),
        { tag: c, guildId: u } = p(void 0 !== n ? n : null == o ? void 0 : o.primaryGuild);
    return null != u && null != c && !l;
}
