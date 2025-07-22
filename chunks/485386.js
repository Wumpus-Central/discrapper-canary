(n.d(t, { Z: () => N }), n(388685), n(415506));
var r,
    i = n(442837),
    a = n(902704),
    o = n(570140),
    s = n(601964),
    l = n(625137);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            }));
    }
    return e;
}
function d(e, t) {
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
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let f = {};
function p(e) {
    ((f = {}),
        e.guilds.forEach((e) => {
            f[e.id] = e.roles instanceof Array ? l.C5(e.id, e.roles) : e.roles;
        }));
}
function h(e) {
    for (let n of e.guilds) {
        var t;
        if (null == f[n.id] || 'unavailable' === n.data_mode) return;
        f[n.id] = 'partial' === n.data_mode ? l.EO(n.id, null != (t = f[n.id]) ? t : S, n.partial_updates.roles, n.partial_updates.deleted_role_ids) : l.C5(n.id, n.roles);
    }
}
function m(e) {
    for (let { id: t, roles: n } of ((f = {}), e)) {
        for (let e in n) l.k0(n[e]);
        f[t] = n;
    }
}
function g(e) {
    m(e.guilds);
}
function E(e) {
    if (0 === e.guilds.length) return !1;
    m(e.guilds);
}
function b(e) {
    f = e.allGuildsRoles;
}
function y(e) {
    f[e.guild.id] = e.guild.roles instanceof Array ? l.C5(e.guild.id, e.guild.roles) : e.guild.roles;
}
function O(e) {
    f[e.guild.id] = l.C5(e.guild.id, e.guild.roles);
}
function v(e) {
    let { guild: t } = e;
    if (null == f[t.id] || t.unavailable) return !1;
    delete f[t.id];
}
function I(e) {
    let { guildId: t, role: n } = e,
        r = f[t],
        i = l.CL(n),
        o = null == r ? void 0 : r[i.id];
    if (null != o && (0, a.Z)(i, o)) return !1;
    ((r = _(u({}, r), { [n.id]: l.CL(n) })), (r = l.iw(t, Object.values(r))), (f[t] = r));
}
function T(e) {
    let { guildId: t, roleId: n } = e,
        r = f[t];
    if (null == r) return !1;
    ((r = u({}, r)), delete r[n], (f[t] = r));
}
let S = Object.freeze({});
class A extends (r = i.ZP.Store) {
    getAllGuildsRoles() {
        return f;
    }
    getRoles(e) {
        var t;
        return null != (t = f[e]) ? t : S;
    }
    getRole(e, t) {
        var n;
        return null == (n = f[e]) ? void 0 : n[t];
    }
    getEveryoneRole(e) {
        var t;
        let n = (0, s.lV)(e),
            r = null == (t = f[e.id]) ? void 0 : t[n];
        if (null == r) throw Error('Guild '.concat(e.id, ' does not have an @everyone role'));
        return r;
    }
}
c(A, 'displayName', 'GuildRoleStore');
let N = new A(o.Z, {
    BACKGROUND_SYNC: h,
    CONNECTION_OPEN: p,
    OVERLAY_INITIALIZE: b,
    CACHE_LOADED: g,
    CACHE_LOADED_LAZY: E,
    GUILD_CREATE: y,
    GUILD_UPDATE: O,
    GUILD_DELETE: v,
    GUILD_ROLE_CREATE: I,
    GUILD_ROLE_UPDATE: I,
    GUILD_ROLE_DELETE: T
});
