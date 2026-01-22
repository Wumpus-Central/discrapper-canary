n.d(t, { A: () => N }), n(896048), n(446912);
var r,
    i = n(311907),
    a = n(73153),
    s = n(71393),
    o = n(568065),
    l = n(652215);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
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
let p = 86400000,
    _ = 3600000,
    h = {};
function m() {
    return {
        allPowerups: {},
        powerupCatalog: {},
        unlockedPowerups: {},
    };
}
function g(e) {
    let {
        guild: { id: t },
    } = e;
    h[t] = f(u({}, y(t)), { appliedBoosts: b(t) });
}
function E(e) {
    let { guildId: t } = e;
    h[t] = f(u({}, y(t)), { appliedBoosts: b(t) });
}
function b(e) {
    var t, n, r, i;
    let a = s.A.getGuild(e),
        c =
            (null == a ? void 0 : a.features.has(l.GuildFeatures.PREMIUM_TIER_3_OVERRIDE)) === !0
                ? 0
                : l.M2T[null != (t = null == a ? void 0 : a.premiumTier) ? t : l.TVA.NONE];
    for (let [t, s] of Object.entries(o.sy)) {
        let o = t;
        (null == a || null == (r = a.premiumFeatures) ? void 0 : r.features.includes(o)) &&
            (null == (n = null == (i = s.isEnabled) ? void 0 : i.call(s, e)) || n) &&
            (null == s.includedInLevel || a.premiumTier < s.includedInLevel) &&
            (c += s.boostPrice);
    }
    return c;
}
function y(e) {
    if (null == h[e]) {
        let t = b(e);
        h[e] = f(u({}, m()), { appliedBoosts: t });
    }
    return h[e];
}
function O(e) {
    let { guildId: t, allPowerups: n, powerupCatalog: r } = e,
        i = y(t);
    h = f(u({}, h), {
        [t]: f(u({}, i), {
            allPowerups: n,
            powerupCatalog: r,
            catalogFetchCooldown: Date.now(),
            hasFetchedPowerupCatalog: !0,
        }),
    });
}
function A(e) {
    let { guildId: t, unlockedPowerups: n } = e,
        r = y(t),
        i = b(t);
    h = f(u({}, h), {
        [t]: f(u({}, r), {
            unlockedPowerups: n,
            appliedBoosts: i,
            unlockedPowerupsFetchCooldown: Date.now(),
            hasFetchedUnlockedPowerups: !0,
        }),
    });
}
function v(e, t) {
    let { guildId: n, entitlements: r } = e,
        i = y(n);
    r.forEach((e) => {
        t ? (i.unlockedPowerups[e.sku_id] = e) : delete i.unlockedPowerups[e.sku_id];
    }),
        (h = f(u({}, h), { [n]: f(u({}, i), { appliedBoosts: b(n) }) }));
}
function S(e) {
    v(e, !0);
}
function I(e) {
    v(e, !1);
}
function T() {
    h = {};
}
class C extends (r = i.Ay.PersistedStore) {
    initialize(e) {
        this.waitFor(s.A), null != e && (h = e);
    }
    getState() {
        return h;
    }
    getStateForGuild(e) {
        return null != e ? h[e] : void 0;
    }
    shouldFetchCatalogForGuild(e) {
        var t;
        let n = null == (t = h[e]) ? void 0 : t.catalogFetchCooldown;
        return null == n || n + p < Date.now();
    }
    shouldFetchPowerupsForGuild(e) {
        var t;
        let n = null == (t = h[e]) ? void 0 : t.unlockedPowerupsFetchCooldown;
        return null == n || n + _ < Date.now();
    }
    hasFetchedPowerupCatalog(e) {
        var t;
        return null != e && (null == (t = h[e]) ? void 0 : t.hasFetchedPowerupCatalog) === !0;
    }
    hasFetchedUnlockedPowerups(e) {
        var t;
        return null != e && (null == (t = h[e]) ? void 0 : t.hasFetchedUnlockedPowerups) === !0;
    }
}
c(C, "displayName", "GuildPowerupsStore"),
    c(C, "persistKey", "GuildPowerupsStore"),
    c(C, "migrations", [
        (e) =>
            null == e
                ? e
                : Object.fromEntries(
                      Object.entries(e)
                          .filter((e) => {
                              let [t, n] = e;
                              return null != n && "object" == typeof n;
                          })
                          .map((e) => {
                              var t, n, r;
                              let [i, a] = e,
                                  s = a;
                              return [
                                  i,
                                  f(u({}, s), {
                                      allPowerups: null != (t = s.allPowerups) ? t : {},
                                      powerupCatalog: null != (n = s.powerupCatalog) ? n : {},
                                      unlockedPowerups: null != (r = s.unlockedPowerups) ? r : {},
                                  }),
                              ];
                          }),
                  ),
    ]);
let N = new C(a.h, {
    LOGOUT: T,
    GUILD_POWERUP_CATALOG_FETCH_SUCCESS: O,
    GUILD_BOOST_ENTITLEMENTS_FETCH_SUCCESS: A,
    GUILD_POWERUP_ENTITLEMENTS_CREATE: S,
    GUILD_POWERUP_ENTITLEMENTS_DELETE: I,
    GUILD_UPDATE: g,
    GAME_SERVER_FETCH_INSTANCES_SUCCESS: E,
});
