let i;
n.d(t, { Z: () => k }), n(47120);
var r,
    a = n(442837),
    s = n(902704),
    o = n(570140),
    l = n(601964),
    u = n(411198),
    c = n(625137),
    d = n(709054),
    f = n(314897),
    _ = n(981631),
    p = n(647086);
function h(e, t, n) {
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
let m = {},
    g = {},
    E = !1,
    v = [];
function y(e) {
    E = !0;
    let t = g;
    (g = {}),
        (m = {}),
        (i = 0),
        e.guilds.forEach((e) => {
            i++, (g[e.id] = u.wD(e, t[e.id])), (m[e.id] = e.roles instanceof Array ? c.C5(e.id, e.roles) : e.roles);
        });
    let n = !1;
    if (v.length !== e.geoRestrictedGuilds.length) n = !0;
    else
        for (let t = 0; t < e.geoRestrictedGuilds.length; t++)
            if (!(0, s.Z)(v[t], e.geoRestrictedGuilds[t])) {
                n = !0;
                break;
            }
    n && (v = e.geoRestrictedGuilds);
}
function I(e) {
    for (let n of e.guilds) {
        var t;
        let e = g[n.id];
        if (null == e || 'unavailable' === n.data_mode) return;
        (g[n.id] = u.sp(n, e)), (m[n.id] = 'partial' === n.data_mode ? u.EO(n.id, null !== (t = m[n.id]) && void 0 !== t ? t : w, n.partial_updates.roles, n.partial_updates.deleted_role_ids) : c.C5(n.id, n.roles));
    }
    i = Object.keys(g).length;
}
function b(e) {
    for (let t of ((g = {}), (m = {}), (i = 0), e)) i++, (g[t.id] = u.cL(t)), (m[t.id] = t.roles);
}
function T(e) {
    b(e.guilds);
}
function S(e) {
    if (0 === e.guilds.length) return !1;
    b(e.guilds);
}
function A(e) {
    var t;
    (g = {}),
        (m = {}),
        (i = 0),
        null === (t = e.guilds) ||
            void 0 === t ||
            t.forEach((e) => {
                i++, (g[e.id] = new l.ZP(e));
            }),
        (m = e.allGuildsRoles);
}
function N(e) {
    let t = u.wD(e.guild, g[e.guild.id]);
    null == g[t.id] && i++,
        (g = {
            ...g,
            [t.id]: t
        }),
        (m[t.id] = e.guild.roles instanceof Array ? c.C5(t.id, e.guild.roles) : e.guild.roles);
}
function C(e) {
    let t = u.di(e.guild, g[e.guild.id]);
    null == g[t.id] && i++,
        (g = {
            ...g,
            [t.id]: t
        }),
        (m[t.id] = c.C5(t.id, e.guild.roles));
}
function R(e) {
    v = [
        ...v,
        {
            id: e.guildId,
            name: e.name,
            icon: e.icon,
            unavailable: !0,
            geo_restricted: !0
        }
    ];
}
function O(e) {
    let { guild: t } = e,
        n = v.findIndex((e) => e.id === t.id);
    if (-1 !== n) {
        v.splice(n, 1), (v = [...v]);
        return;
    }
    if (null == g[t.id] || t.unavailable) return !1;
    (g = { ...g }), delete g[t.id], (m[t.id] = void 0), i--;
}
function D(e) {
    let { guildId: t, role: n } = e,
        i = m[t],
        r = c.CL(n),
        a = null == i ? void 0 : i[r.id];
    if (null != a && (0, s.Z)(r, a)) return !1;
    (i = {
        ...i,
        [n.id]: c.CL(n)
    }),
        (i = c.iw(t, Object.values(i))),
        (m[t] = i);
}
function x(e) {
    let { guildId: t, roleId: n } = e,
        i = m[t];
    if (null == i) return !1;
    (i = { ...i }), delete i[n], (m[t] = i);
}
function L(e) {
    let { guildId: t, joinedAt: n, user: i } = e,
        r = f.default.getId(),
        a = g[t];
    if (r !== i.id || null == a) return !1;
    let s = 'string' == typeof n ? new Date(n) : n;
    if (s === a.joinedAt || null == s) return !1;
    g = {
        ...g,
        [t]: a.updateJoinedAt(s)
    };
}
function P() {
    return !0;
}
let w = Object.freeze({});
class M extends (r = a.ZP.Store) {
    getGuild(e) {
        return null == e ? void 0 : e === _.I_8 ? p.g : g[e];
    }
    getGuilds() {
        return g;
    }
    getGuildIds() {
        return d.default.keys(g);
    }
    getGuildCount() {
        return i;
    }
    isLoaded() {
        return E;
    }
    getGeoRestrictedGuilds() {
        return v;
    }
    getAllGuildsRoles() {
        return m;
    }
    getRoles(e) {
        var t;
        return null !== (t = m[e]) && void 0 !== t ? t : w;
    }
    getRole(e, t) {
        var n;
        return null === (n = m[e]) || void 0 === n ? void 0 : n[t];
    }
}
h(M, 'displayName', 'GuildStore');
let k = new M(o.Z, {
    BACKGROUND_SYNC: I,
    CONNECTION_OPEN: y,
    OVERLAY_INITIALIZE: A,
    CACHE_LOADED: T,
    CACHE_LOADED_LAZY: S,
    GUILD_CREATE: N,
    GUILD_UPDATE: C,
    GUILD_DELETE: O,
    GUILD_ROLE_CREATE: D,
    GUILD_ROLE_UPDATE: D,
    GUILD_ROLE_DELETE: x,
    GUILD_MEMBER_ADD: L,
    GUILD_SETTINGS_SUBMIT_SUCCESS: P,
    GUILD_GEO_RESTRICTED: R
});
