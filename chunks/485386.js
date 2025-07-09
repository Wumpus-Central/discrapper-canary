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
function f(e, t) {
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
let _ = {};
function p(e) {
    ((_ = {}),
        e.guilds.forEach((e) => {
            _[e.id] = e.roles instanceof Array ? l.C5(e.id, e.roles) : e.roles;
        }));
}
function h(e) {
    for (let n of e.guilds) {
        var t;
        if (null == _[n.id] || 'unavailable' === n.data_mode) return;
        _[n.id] = 'partial' === n.data_mode ? l.EO(n.id, null != (t = _[n.id]) ? t : S, n.partial_updates.roles, n.partial_updates.deleted_role_ids) : l.C5(n.id, n.roles);
    }
}
function m(e) {
    for (let { id: t, roles: n } of ((_ = {}), e)) {
        for (let e in n) l.k0(n[e]);
        _[t] = n;
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
    _ = e.allGuildsRoles;
}
function y(e) {
    _[e.guild.id] = e.guild.roles instanceof Array ? l.C5(e.guild.id, e.guild.roles) : e.guild.roles;
}
function O(e) {
    _[e.guild.id] = l.C5(e.guild.id, e.guild.roles);
}
function v(e) {
    let { guild: t } = e;
    if (null == _[t.id] || t.unavailable) return !1;
    delete _[t.id];
}
function I(e) {
    let { guildId: t, role: n } = e,
        r = _[t],
        i = l.CL(n),
        o = null == r ? void 0 : r[i.id];
    if (null != o && (0, a.Z)(i, o)) return !1;
    ((r = f(u({}, r), { [n.id]: l.CL(n) })), (r = l.iw(t, Object.values(r))), (_[t] = r));
}
function T(e) {
    let { guildId: t, roleId: n } = e,
        r = _[t];
    if (null == r) return !1;
    ((r = u({}, r)), delete r[n], (_[t] = r));
}
let S = Object.freeze({});
class A extends (r = i.ZP.Store) {
    getAllGuildsRoles() {
        return _;
    }
    getRoles(e) {
        var t;
        return null != (t = _[e]) ? t : S;
    }
    getRole(e, t) {
        var n;
        return null == (n = _[e]) ? void 0 : n[t];
    }
    getEveryoneRole(e) {
        var t;
        let n = (0, s.lV)(e),
            r = null == (t = _[e.id]) ? void 0 : t[n];
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
