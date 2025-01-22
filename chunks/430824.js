let i;
var a,
    o = r(47120);
var s = r(442837),
    l = r(902704),
    u = r(570140),
    c = r(601964),
    d = r(411198),
    f = r(625137),
    p = r(709054),
    h = r(314897),
    _ = r(981631),
    m = r(647086);
function g(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let E = {},
    v = {},
    y = !1,
    b = [];
function I(e) {
    y = !0;
    let n = v;
    (v = {}),
        (E = {}),
        (i = 0),
        e.guilds.forEach((e) => {
            i++, (v[e.id] = d.wD(e, n[e.id])), (E[e.id] = e.roles instanceof Array ? f.C5(e.id, e.roles) : e.roles);
        });
    let r = !1;
    if (b.length !== e.geoRestrictedGuilds.length) r = !0;
    else
        for (let n = 0; n < e.geoRestrictedGuilds.length; n++)
            if (!(0, l.Z)(b[n], e.geoRestrictedGuilds[n])) {
                r = !0;
                break;
            }
    r && (b = e.geoRestrictedGuilds);
}
function T(e) {
    for (let r of e.guilds) {
        var n;
        let e = v[r.id];
        if (null == e || 'unavailable' === r.data_mode) return;
        (v[r.id] = d.sp(r, e)), (E[r.id] = 'partial' === r.data_mode ? d.EO(r.id, null !== (n = E[r.id]) && void 0 !== n ? n : k, r.partial_updates.roles, r.partial_updates.deleted_role_ids) : f.C5(r.id, r.roles));
    }
    i = Object.keys(v).length;
}
function S(e) {
    for (let n of ((v = {}), (E = {}), (i = 0), e)) i++, (v[n.id] = d.cL(n)), (E[n.id] = n.roles);
}
function A(e) {
    S(e.guilds);
}
function C(e) {
    if (0 === e.guilds.length) return !1;
    S(e.guilds);
}
function N(e) {
    var n;
    (v = {}),
        (E = {}),
        (i = 0),
        null === (n = e.guilds) ||
            void 0 === n ||
            n.forEach((e) => {
                i++, (v[e.id] = new c.ZP(e));
            }),
        (E = e.allGuildsRoles);
}
function R(e) {
    let n = d.wD(e.guild, v[e.guild.id]);
    null == v[n.id] && i++,
        (v = {
            ...v,
            [n.id]: n
        }),
        (E[n.id] = e.guild.roles instanceof Array ? f.C5(n.id, e.guild.roles) : e.guild.roles);
}
function O(e) {
    let n = d.di(e.guild, v[e.guild.id]);
    null == v[n.id] && i++,
        (v = {
            ...v,
            [n.id]: n
        }),
        (E[n.id] = f.C5(n.id, e.guild.roles));
}
function D(e) {
    b = [
        ...b,
        {
            id: e.guildId,
            name: e.name,
            icon: e.icon,
            unavailable: !0,
            geo_restricted: !0
        }
    ];
}
function x(e) {
    let { guild: n } = e,
        r = b.findIndex((e) => e.id === n.id);
    if (-1 !== r) {
        b.splice(r, 1), (b = [...b]);
        return;
    }
    if (null == v[n.id] || n.unavailable) return !1;
    (v = { ...v }), delete v[n.id], (E[n.id] = void 0), i--;
}
function L(e) {
    let { guildId: n, role: r } = e,
        i = E[n],
        a = f.CL(r),
        o = null == i ? void 0 : i[a.id];
    if (null != o && (0, l.Z)(a, o)) return !1;
    (i = {
        ...i,
        [r.id]: f.CL(r)
    }),
        (i = f.iw(n, Object.values(i))),
        (E[n] = i);
}
function w(e) {
    let { guildId: n, roleId: r } = e,
        i = E[n];
    if (null == i) return !1;
    (i = { ...i }), delete i[r], (E[n] = i);
}
function P(e) {
    let { guildId: n, joinedAt: r, user: i } = e,
        a = h.default.getId(),
        o = v[n];
    if (a !== i.id || null == o) return !1;
    let s = 'string' == typeof r ? new Date(r) : r;
    if (s === o.joinedAt || null == s) return !1;
    v = {
        ...v,
        [n]: o.updateJoinedAt(s)
    };
}
function M() {
    return !0;
}
let k = Object.freeze({});
class U extends (a = s.ZP.Store) {
    getGuild(e) {
        return null == e ? void 0 : e === _.I_8 ? m.g : v[e];
    }
    getGuilds() {
        return v;
    }
    getGuildIds() {
        return p.default.keys(v);
    }
    getGuildCount() {
        return i;
    }
    isLoaded() {
        return y;
    }
    getGeoRestrictedGuilds() {
        return b;
    }
    getAllGuildsRoles() {
        return E;
    }
    getRoles(e) {
        var n;
        return null !== (n = E[e]) && void 0 !== n ? n : k;
    }
    getRole(e, n) {
        var r;
        return null === (r = E[e]) || void 0 === r ? void 0 : r[n];
    }
}
g(U, 'displayName', 'GuildStore'),
    (n.Z = new U(u.Z, {
        BACKGROUND_SYNC: T,
        CONNECTION_OPEN: I,
        OVERLAY_INITIALIZE: N,
        CACHE_LOADED: A,
        CACHE_LOADED_LAZY: C,
        GUILD_CREATE: R,
        GUILD_UPDATE: O,
        GUILD_DELETE: x,
        GUILD_ROLE_CREATE: L,
        GUILD_ROLE_UPDATE: L,
        GUILD_ROLE_DELETE: w,
        GUILD_MEMBER_ADD: P,
        GUILD_SETTINGS_SUBMIT_SUCCESS: M,
        GUILD_GEO_RESTRICTED: D
    }));
