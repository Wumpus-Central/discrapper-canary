n.d(t, { Z: () => g });
var r,
    i = n(442837),
    a = n(570140);
function o(e, t, n) {
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
function s(e) {
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
                o(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t) {
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
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let u = 86400000,
    d = 3600000,
    f = {};
function _() {
    f = {};
}
function p(e) {
    let { guildId: t, catalog: n } = e;
    f[t] = c(s({}, f[t]), {
        catalog: n,
        hasFetchedCatalog: !0,
    });
}
function h(e) {
    let { guildId: t, instances: n } = e;
    f[t] = c(s({}, f[t]), {
        instances: n,
        hasFetchedInstances: !0,
    });
}
class m extends (r = i.ZP.Store) {
    getState() {
        return f;
    }
    getStateForGuild(e) {
        return null != e ? f[e] : void 0;
    }
    shouldFetchCatalogForGuild(e) {
        var t;
        let n = null == (t = f[e]) ? void 0 : t.catalogFetchCooldown;
        return null == n || n + u < Date.now();
    }
    shouldFetchInstancesForGuild(e) {
        var t;
        let n = null == (t = f[e]) ? void 0 : t.instancesFetchCooldown;
        return null == n || n + d < Date.now();
    }
    hasFetchedCatalog(e) {
        var t;
        return null != e && (null == (t = f[e]) ? void 0 : t.hasFetchedCatalog) === !0;
    }
    hasFetchedInstances(e) {
        var t;
        return null != e && (null == (t = f[e]) ? void 0 : t.hasFetchedInstances) === !0;
    }
}
o(m, "displayName", "PortkeyStore");
let g = new m(a.Z, {
    LOGOUT: _,
    PORTKEY_FETCH_CATALOG_SUCCESS: p,
    PORTKEY_FETCH_INSTANCES_SUCCESS: h,
});
