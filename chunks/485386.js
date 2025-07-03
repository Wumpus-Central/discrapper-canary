(n.d(t, { Z: () => C }), n(388685), n(415506));
var r,
    i = n(442837),
    a = n(902704),
    o = n(570140),
    s = n(601964),
    l = n(411198),
    c = n(625137);
function u(e, t, n) {
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
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            }));
    }
    return e;
}
function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let p = {};
function h(e) {
    ((p = {}),
        e.guilds.forEach((e) => {
            p[e.id] = e.roles instanceof Array ? c.C5(e.id, e.roles) : e.roles;
        }));
}
function m(e) {
    for (let n of e.guilds) {
        var t;
        if (null == p[n.id] || 'unavailable' === n.data_mode) return;
        p[n.id] = 'partial' === n.data_mode ? l.EO(n.id, null != (t = p[n.id]) ? t : A, n.partial_updates.roles, n.partial_updates.deleted_role_ids) : c.C5(n.id, n.roles);
    }
}
function g(e) {
    for (let t of ((p = {}), e)) {
        for (let e in t.roles) c.cf(t.roles[e]);
        p[t.id] = t.roles;
    }
}
function E(e) {
    g(e.guilds);
}
function b(e) {
    if (0 === e.guilds.length) return !1;
    g(e.guilds);
}
function y(e) {
    p = e.allGuildsRoles;
}
function O(e) {
    p[e.guild.id] = e.guild.roles instanceof Array ? c.C5(e.guild.id, e.guild.roles) : e.guild.roles;
}
function v(e) {
    p[e.guild.id] = c.C5(e.guild.id, e.guild.roles);
}
function I(e) {
    let { guild: t } = e;
    if (null == p[t.id] || t.unavailable) return !1;
    delete p[t.id];
}
function T(e) {
    let { guildId: t, role: n } = e,
        r = p[t],
        i = c.CL(n),
        o = null == r ? void 0 : r[i.id];
    if (null != o && (0, a.Z)(i, o)) return !1;
    ((r = _(d({}, r), { [n.id]: c.CL(n) })), (r = c.iw(t, Object.values(r))), (p[t] = r));
}
function S(e) {
    let { guildId: t, roleId: n } = e,
        r = p[t];
    if (null == r) return !1;
    ((r = d({}, r)), delete r[n], (p[t] = r));
}
let A = Object.freeze({});
class N extends (r = i.ZP.Store) {
    getAllGuildsRoles() {
        return p;
    }
    getRoles(e) {
        var t;
        return null != (t = p[e]) ? t : A;
    }
    getRole(e, t) {
        var n;
        return null == (n = p[e]) ? void 0 : n[t];
    }
    getEveryoneRole(e) {
        var t;
        let n = (0, s.lV)(e),
            r = null == (t = p[e.id]) ? void 0 : t[n];
        if (null == r) throw Error('Guild '.concat(e.id, ' does not have an @everyone role'));
        return r;
    }
}
u(N, 'displayName', 'GuildRoleStore');
let C = new N(o.Z, {
    BACKGROUND_SYNC: m,
    CONNECTION_OPEN: h,
    OVERLAY_INITIALIZE: y,
    CACHE_LOADED: E,
    CACHE_LOADED_LAZY: b,
    GUILD_CREATE: O,
    GUILD_UPDATE: v,
    GUILD_DELETE: I,
    GUILD_ROLE_CREATE: T,
    GUILD_ROLE_UPDATE: T,
    GUILD_ROLE_DELETE: S
});
