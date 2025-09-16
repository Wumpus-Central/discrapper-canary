n.d(t, { Z: () => p });
var r,
    o = n(442837),
    i = n(570140);
function l(e, t, n) {
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
function a(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function s(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let c = {};
function u(e) {
    return (
        null == c[e] &&
            (c[e] = {
                catalog: {},
                instances: {},
                entitlements: {},
            }),
        c[e]
    );
}
class d extends (r = o.ZP.Store) {
    getState() {
        return c;
    }
    getStateForGuild(e) {
        return null != e ? c[e] : void 0;
    }
    shouldFetchCatalogForGuild(e) {
        var t;
        let n = null == (t = c[e]) ? void 0 : t.catalogFetchCooldown;
        return null == n || n + 86400000 < Date.now();
    }
    shouldFetchInstancesForGuild(e) {
        var t;
        let n = null == (t = c[e]) ? void 0 : t.instancesFetchCooldown;
        return null == n || n + 3600000 < Date.now();
    }
    hasFetchedCatalog(e) {
        var t;
        return null != e && (null == (t = c[e]) ? void 0 : t.hasFetchedCatalog) === !0;
    }
    hasFetchedInstances(e) {
        var t;
        return null != e && (null == (t = c[e]) ? void 0 : t.hasFetchedInstances) === !0;
    }
}
l(d, "displayName", "PortkeyStore");
let p = new d(i.Z, {
    LOGOUT: function () {
        c = {};
    },
    PORTKEY_FETCH_CATALOG_SUCCESS: function (e) {
        let { guildId: t, catalog: n } = e;
        c = s(a({}, c), {
            [t]: s(a({}, u(t)), {
                catalog: n,
                hasFetchedCatalog: !0,
            }),
        });
    },
    PORTKEY_FETCH_INSTANCES_SUCCESS: function (e) {
        let { guildId: t, instances: n } = e;
        c = s(a({}, c), {
            [t]: s(a({}, u(t)), {
                instances: n,
                hasFetchedInstances: !0,
            }),
        });
    },
    GUILD_BOOST_ENTITLEMENTS_FETCH_SUCCESS: function (e) {
        let { guildId: t, unlockedGameServers: n } = e;
        c = s(a({}, c), { [t]: s(a({}, u(t)), { entitlements: n }) });
    },
});
