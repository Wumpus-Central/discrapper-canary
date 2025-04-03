let r;
n.d(t, { Z: () => G }), n(47120);
var i,
    o = n(442837),
    a = n(902704),
    s = n(570140),
    l = n(601964),
    c = n(411198),
    u = n(625137),
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
function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
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
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let b = {},
    y = {},
    v = !1,
    O = [];
function I(e) {
    v = !0;
    let t = y;
    (y = {}),
        (b = {}),
        (r = 0),
        e.guilds.forEach((e) => {
            r++, (y[e.id] = c.wD(e, t[e.id])), (b[e.id] = e.roles instanceof Array ? u.C5(e.id, e.roles) : e.roles);
        });
    let n = !1;
    if (O.length !== e.geoRestrictedGuilds.length) n = !0;
    else
        for (let t = 0; t < e.geoRestrictedGuilds.length; t++)
            if (!(0, a.Z)(O[t], e.geoRestrictedGuilds[t])) {
                n = !0;
                break;
            }
    n && (O = e.geoRestrictedGuilds);
}
function S(e) {
    for (let n of e.guilds) {
        var t;
        let e = y[n.id];
        if (null == e || 'unavailable' === n.data_mode) return;
        (y[n.id] = c.sp(n, e)), (b[n.id] = 'partial' === n.data_mode ? c.EO(n.id, null != (t = b[n.id]) ? t : j, n.partial_updates.roles, n.partial_updates.deleted_role_ids) : u.C5(n.id, n.roles));
    }
    r = Object.keys(y).length;
}
function T(e) {
    for (let t of ((y = {}), (b = {}), (r = 0), e)) r++, (y[t.id] = c.cL(t)), (b[t.id] = t.roles);
}
function N(e) {
    T(e.guilds);
}
function A(e) {
    if (0 === e.guilds.length) return !1;
    T(e.guilds);
}
function C(e) {
    var t;
    (y = {}),
        (b = {}),
        (r = 0),
        null == (t = e.guilds) ||
            t.forEach((e) => {
                r++, (y[e.id] = new l.ZP(e));
            }),
        (b = e.allGuildsRoles);
}
function R(e) {
    let t = c.wD(e.guild, y[e.guild.id]);
    null == y[t.id] && r++, (y = E(m({}, y), { [t.id]: t })), (b[t.id] = e.guild.roles instanceof Array ? u.C5(t.id, e.guild.roles) : e.guild.roles);
}
function P(e) {
    let t = c.di(e.guild, y[e.guild.id]);
    null == y[t.id] && r++, (y = E(m({}, y), { [t.id]: t })), (b[t.id] = u.C5(t.id, e.guild.roles));
}
function w(e) {
    O = [
        ...O,
        {
            id: e.guildId,
            name: e.name,
            icon: e.icon,
            unavailable: !0,
            geo_restricted: !0
        }
    ];
}
function D(e) {
    let { guild: t } = e,
        n = O.findIndex((e) => e.id === t.id);
    if (-1 !== n) {
        O.splice(n, 1), (O = [...O]);
        return;
    }
    if (null == y[t.id] || t.unavailable) return !1;
    (y = m({}, y)), delete y[t.id], (b[t.id] = void 0), r--;
}
function L(e) {
    let { guildId: t, role: n } = e,
        r = b[t],
        i = u.CL(n),
        o = null == r ? void 0 : r[i.id];
    if (null != o && (0, a.Z)(i, o)) return !1;
    (r = E(m({}, r), { [n.id]: u.CL(n) })), (r = u.iw(t, Object.values(r))), (b[t] = r);
}
function x(e) {
    let { guildId: t, roleId: n } = e,
        r = b[t];
    if (null == r) return !1;
    (r = m({}, r)), delete r[n], (b[t] = r);
}
function M(e) {
    let { guildId: t, joinedAt: n, user: r } = e,
        i = f.default.getId(),
        o = y[t];
    if (i !== r.id || null == o) return !1;
    let a = 'string' == typeof n ? new Date(n) : n;
    if (a === o.joinedAt || null == a) return !1;
    y = E(m({}, y), { [t]: o.updateJoinedAt(a) });
}
function k() {
    return !0;
}
let j = Object.freeze({});
class U extends (i = o.ZP.Store) {
    getGuild(e) {
        if (null != e) return e === _.I_8 ? p.g : y[e];
    }
    getGuilds() {
        return y;
    }
    getGuildIds() {
        return d.default.keys(y);
    }
    getGuildCount() {
        return r;
    }
    isLoaded() {
        return v;
    }
    getGeoRestrictedGuilds() {
        return O;
    }
    getAllGuildsRoles() {
        return b;
    }
    getRoles(e) {
        var t;
        return null != (t = b[e]) ? t : j;
    }
    getRole(e, t) {
        var n;
        return null == (n = b[e]) ? void 0 : n[t];
    }
}
h(U, 'displayName', 'GuildStore');
let G = new U(s.Z, {
    BACKGROUND_SYNC: S,
    CONNECTION_OPEN: I,
    OVERLAY_INITIALIZE: C,
    CACHE_LOADED: N,
    CACHE_LOADED_LAZY: A,
    GUILD_CREATE: R,
    GUILD_UPDATE: P,
    GUILD_DELETE: D,
    GUILD_ROLE_CREATE: L,
    GUILD_ROLE_UPDATE: L,
    GUILD_ROLE_DELETE: x,
    GUILD_MEMBER_ADD: M,
    GUILD_SETTINGS_SUBMIT_SUCCESS: k,
    GUILD_GEO_RESTRICTED: w
});
