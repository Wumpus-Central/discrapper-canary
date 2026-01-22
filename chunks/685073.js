n.d(t, {
    Rg: () => d,
    Wb: () => h,
    Zo: () => p,
    gC: () => f,
    gS: () => _,
    q0: () => u,
});
var r = n(311907),
    i = n(229527),
    a = n(696451),
    s = n(71393),
    o = n(287809),
    l = n(743981),
    c = n(652215);

function u(e) {
    var t;
    return (null == e || null == (t = e.profile) ? void 0 : t.tag) != null;
}

function d(e) {
    return e.features.has(c.GuildFeatures.GUILD_TAGS);
}

function f(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.Sl.SIZE_12;
    if (null == t) return;
    let { CDN_HOST: r } = window.GLOBAL_ENV;
    if (null == r) return;
    let i = l.lv[n];
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
    let o = (0, r.bG)([s.A], () => s.A.getGuild(e), [e]);
    return null == e
        ? e
        : null == o
          ? o
          : {
                identityGuildId: o.id,
                identityEnabled: !0,
                tag: null != (t = null == (i = o.profile) ? void 0 : i.tag) ? t : void 0,
                badge: null != (n = null == (a = o.profile) ? void 0 : a.badge) ? n : void 0,
            };
}

function h(e, t, n) {
    let s = (0, r.bG)([o.default], () => o.default.getUser(e), [e]),
        l = (0, r.bG)([a.Ay], () => {
            if (null == t || null == e) return null;
            let n = a.Ay.getMember(t, e);
            return (0, i.TR)(n);
        }, [t, e]),
        { tag: c, guildId: u } = p(void 0 !== n ? n : null == s ? void 0 : s.primaryGuild);
    return null != u && null != c && !l;
}
