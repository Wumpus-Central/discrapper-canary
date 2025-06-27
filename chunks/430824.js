let r;
n.d(t, { Z: () => w }), n(388685);
var i,
    a = n(442837),
    o = n(570140),
    s = n(601964),
    l = n(411198),
    c = n(709054),
    u = n(314897),
    d = n(981631),
    f = n(647086);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let g = {},
    E = !1;
function b(e) {
    E = !0;
    let t = g;
    (g = {}),
        (r = 0),
        e.guilds.forEach((e) => {
            r++, (g[e.id] = l.wD(e, t[e.id]));
        });
}
function y(e) {
    for (let t of e.guilds) {
        let e = g[t.id];
        if (null == e || 'unavailable' === t.data_mode) return;
        g[t.id] = l.sp(t, e);
    }
    r = Object.keys(g).length;
}
function O(e) {
    for (let t of ((g = {}), (r = 0), e)) r++, (g[t.id] = l.cL(t));
}
function v(e) {
    O(e.guilds);
}
function I(e) {
    if (0 === e.guilds.length) return !1;
    O(e.guilds);
}
function T(e) {
    var t;
    (g = {}),
        (r = 0),
        null == (t = e.guilds) ||
            t.forEach((e) => {
                r++, (g[e.id] = new s.ZP(e));
            });
}
function S(e) {
    let t = l.wD(e.guild, g[e.guild.id]);
    null == g[t.id] && r++, (g = m(p({}, g), { [t.id]: t }));
}
function A(e) {
    let t = l.di(e.guild, g[e.guild.id]);
    null == g[t.id] && r++, (g = m(p({}, g), { [t.id]: t }));
}
function N(e) {
    let { guild: t } = e;
    if (null == g[t.id] || t.unavailable) return !1;
    (g = p({}, g)), delete g[t.id], r--;
}
function C(e) {
    let { guildId: t, joinedAt: n, user: r } = e,
        i = u.default.getId(),
        a = g[t];
    if (i !== r.id || null == a) return !1;
    let o = 'string' == typeof n ? new Date(n) : n;
    if (o === a.joinedAt || null == o) return !1;
    g = m(p({}, g), { [t]: a.updateJoinedAt(o) });
}
function R() {
    return !0;
}
class P extends (i = a.ZP.Store) {
    getGuild(e) {
        if (null != e) return e === d.I_8 ? f.g : g[e];
    }
    getGuilds() {
        return g;
    }
    getGuildIds() {
        return c.default.keys(g);
    }
    getGuildCount() {
        return r;
    }
    isLoaded() {
        return E;
    }
}
_(P, 'displayName', 'GuildStore');
let w = new P(o.Z, {
    BACKGROUND_SYNC: y,
    CONNECTION_OPEN: b,
    OVERLAY_INITIALIZE: T,
    CACHE_LOADED: v,
    CACHE_LOADED_LAZY: I,
    GUILD_CREATE: S,
    GUILD_UPDATE: A,
    GUILD_DELETE: N,
    GUILD_MEMBER_ADD: C,
    GUILD_SETTINGS_SUBMIT_SUCCESS: R
});
