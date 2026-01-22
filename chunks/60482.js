n.d(t, { Z: () => C }), n(388685);
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
function p(e) {
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
function _(e) {
    let { guildId: t, catalog: n } = e;
    d = u(l({}, d), {
        [t]: u(l({}, p(t)), {
            catalog: n,
            hasFetchedCatalog: !0,
        }),
    });
}
function h(e) {
    let { guildId: t, instances: n } = e;
    d = u(l({}, d), {
        [t]: u(l({}, p(t)), {
            instances: n,
            hasFetchedInstances: !0,
        }),
    });
}
function m(e) {
    let { guildId: t, skuId: n, instructions: r } = e;
    d = u(l({}, d), { [t]: u(l({}, p(t)), { instructions: u(l({}, p(t).instructions), { [n]: r }) }) });
}
function g(e) {
    let { guildId: t, instance: n } = e,
        r = p(t);
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
        [t]: u(l({}, p(t)), {
            entitlements: n,
            appliedBoosts: r,
        }),
    });
}
function y(e) {
    let { guildId: t, gameServer: n } = e,
        r = p(t);
    d = u(l({}, d), { [t]: u(l({}, r), { instances: u(l({}, r.instances), { [n.id]: (0, o.Z)(n) }) }) });
}
function O(e) {
    let { guildId: t, gameServerId: n } = e,
        r = p(t);
    delete r.instances[n], (d = u(l({}, d), { [t]: l({}, r) }));
}
function v(e) {
    let { guildId: t, entitlements: n } = e,
        r = p(t);
    n
        .filter((e) => {
            var t, n, r;
            return (
                (null == (r = e.sku) || null == (n = r.tenant_metadata) || null == (t = n.guild_monetization)
                    ? void 0
                    : t.game_server) != null
            );
        })
        .forEach((e) => {
            r.entitlements[e.id] = e;
        }),
        I(t, r);
}
function S(e) {
    let { guildId: t, entitlements: n } = e,
        r = p(t);
    n.forEach((e) => {
        delete r.entitlements[e.id];
    }),
        I(t, r);
}
function I(e, t) {
    let n = E(e, t.entitlements);
    d = u(l({}, d), { [e]: u(l({}, t), { appliedBoosts: n }) });
}
class T extends (r = i.ZP.Store) {
    getState() {
        return d;
    }
    getStateForGuild(e) {
        return null != e ? d[e] : void 0;
    }
    getLowestGameCostForGuild(e) {
        var t;
        if (null == e) return null;
        let n = d[e],
            r = Object.values(null != (t = null == n ? void 0 : n.catalog) ? t : {});
        return 0 === r.length ? null : Math.min(...r.map((e) => e.baseCost));
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
s(T, "displayName", "GameServerStore");
let C = new T(a.Z, {
    LOGOUT: f,
    GAME_SERVER_FETCH_CATALOG_SUCCESS: _,
    GAME_SERVER_FETCH_INSTANCES_SUCCESS: h,
    GAME_SERVER_FETCH_GAME_INSTRUCTIONS_SUCCESS: m,
    GAME_SERVER_UPDATE_INSTANCE_SUCCESS: g,
    GUILD_BOOST_ENTITLEMENTS_FETCH_SUCCESS: b,
    GAME_SERVER_CREATE: y,
    GAME_SERVER_UPDATE: y,
    GAME_SERVER_DELETE: O,
    GUILD_POWERUP_ENTITLEMENTS_CREATE: v,
    GUILD_POWERUP_ENTITLEMENTS_DELETE: S,
});
