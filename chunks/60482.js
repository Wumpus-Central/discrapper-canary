n.d(t, { Z: () => A });
var r,
    i = n(442837),
    a = n(570140),
    o = n(351721);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
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
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let d = {};
function f() {
    d = {};
}
function _(e) {
    return (
        null == d[e] &&
            (d[e] = {
                catalog: {},
                instances: {},
                instructions: {},
                entitlements: {},
            }),
        d[e]
    );
}
function p(e) {
    let { guildId: t, catalog: n } = e;
    d = u(l({}, d), {
        [t]: u(l({}, _(t)), {
            catalog: n,
            hasFetchedCatalog: !0,
        }),
    });
}
function h(e) {
    let { guildId: t, instances: n } = e;
    d = u(l({}, d), {
        [t]: u(l({}, _(t)), {
            instances: n,
            hasFetchedInstances: !0,
        }),
    });
}
function m(e) {
    let { guildId: t, skuId: n, instructions: r } = e;
    d = u(l({}, d), { [t]: u(l({}, _(t)), { instructions: u(l({}, _(t).instructions), { [n]: r }) }) });
}
function g(e) {
    let { guildId: t, instance: n } = e,
        r = _(t);
    d = u(l({}, d), { [t]: u(l({}, r), { instances: u(l({}, r.instances), { [n.id]: n }) }) });
}
function E(e, t) {
    return Object.values(t).reduce((e, t) => {
        var n, r, i, a, o;
        return (
            e +
            (null !=
            (o =
                null == (a = t.sku) ||
                null == (i = a.tenant_metadata) ||
                null == (r = i.guild_monetization) ||
                null == (n = r.game_server)
                    ? void 0
                    : n.boost_price)
                ? o
                : 0)
        );
    }, 0);
}
function b(e) {
    let { guildId: t, unlockedGameServers: n } = e,
        r = E(t, n);
    d = u(l({}, d), {
        [t]: u(l({}, _(t)), {
            entitlements: n,
            appliedBoosts: r,
        }),
    });
}
function y(e) {
    let { guildId: t, gameServer: n } = e,
        r = _(t);
    (r.instances[n.id] = (0, o.Z)(n)), (d = u(l({}, d), { [t]: l({}, r) }));
}
function O(e) {
    let { guildId: t, gameServerId: n } = e,
        r = _(t);
    delete r.instances[n], (d = u(l({}, d), { [t]: l({}, r) }));
}
function v(e) {
    let { guildId: t, entitlements: n } = e,
        r = _(t);
    n.forEach((e) => {
        r.entitlements[e.id] = e;
    }),
        T(t, r);
}
function I(e) {
    let { guildId: t, entitlements: n } = e,
        r = _(t);
    n.forEach((e) => {
        delete r.entitlements[e.id];
    }),
        T(t, r);
}
function T(e, t) {
    let n = E(e, t.entitlements);
    d = u(l({}, d), { [e]: u(l({}, t), { appliedBoosts: n }) });
}
class S extends (r = i.ZP.Store) {
    getState() {
        return d;
    }
    getStateForGuild(e) {
        return null != e ? d[e] : void 0;
    }
    hasFetchedCatalog(e) {
        var t;
        return null != e && (null == (t = d[e]) ? void 0 : t.hasFetchedCatalog) === !0;
    }
    hasFetchedInstances(e) {
        var t;
        return null != e && (null == (t = d[e]) ? void 0 : t.hasFetchedInstances) === !0;
    }
}
s(S, "displayName", "GameServerStore");
let A = new S(a.Z, {
    LOGOUT: f,
    GAME_SERVER_FETCH_CATALOG_SUCCESS: p,
    GAME_SERVER_FETCH_INSTANCES_SUCCESS: h,
    GAME_SERVER_FETCH_GAME_INSTRUCTIONS_SUCCESS: m,
    GAME_SERVER_UPDATE_INSTANCE_SUCCESS: g,
    GUILD_BOOST_ENTITLEMENTS_FETCH_SUCCESS: b,
    GAME_SERVER_CREATE: y,
    GAME_SERVER_UPDATE: y,
    GAME_SERVER_DELETE: O,
    GUILD_POWERUP_ENTITLEMENTS_CREATE: v,
    GUILD_POWERUP_ENTITLEMENTS_DELETE: I,
});
