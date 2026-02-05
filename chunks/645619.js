"use strict";
n.d(t, { A: () => S });
var r = n(311907),
    i = n(73153),
    a = n(71393),
    s = n(568065),
    o = n(652215);
let l = 864e5,
    u = 36e5,
    c = {};
function d() {
    return { allPowerups: {}, powerupCatalog: {}, unlockedPowerups: {} };
}
function _(e) {
    let {
        guild: { id: t },
    } = e;
    c[t] = { ...h(t), appliedBoosts: p(t) };
}
function f(e) {
    let { guildId: t } = e;
    c[t] = { ...h(t), appliedBoosts: p(t) };
}
function p(e) {
    let t = a.A.getGuild(e),
        n = t?.features.has(o.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0 ? 0 : o.M2T[t?.premiumTier ?? o.TVA.NONE];
    for (let [r, i] of Object.entries(s.sy)) {
        let a = r;
        t?.premiumFeatures?.features.includes(a) &&
            (i.isEnabled?.(e) ?? !0) &&
            (null == i.includedInLevel || t.premiumTier < i.includedInLevel) &&
            (n += i.boostPrice);
    }
    return n;
}
function h(e) {
    if (null == c[e]) {
        let t = p(e);
        c[e] = { ...d(), appliedBoosts: t };
    }
    return c[e];
}
function m(e) {
    let { guildId: t, allPowerups: n, powerupCatalog: r } = e,
        i = h(t);
    c = {
        ...c,
        [t]: {
            ...i,
            allPowerups: n,
            powerupCatalog: r,
            catalogFetchCooldown: Date.now(),
            hasFetchedPowerupCatalog: !0,
        },
    };
}
function g(e) {
    let { guildId: t, unlockedPowerups: n } = e,
        r = h(t),
        i = p(t);
    c = {
        ...c,
        [t]: {
            ...r,
            unlockedPowerups: n,
            appliedBoosts: i,
            unlockedPowerupsFetchCooldown: Date.now(),
            hasFetchedUnlockedPowerups: !0,
        },
    };
}
function E(e, t) {
    let { guildId: n, entitlements: r } = e,
        i = h(n);
    r.forEach((e) => {
        t ? (i.unlockedPowerups[e.sku_id] = e) : delete i.unlockedPowerups[e.sku_id];
    }),
        (c = { ...c, [n]: { ...i, appliedBoosts: p(n) } });
}
function A(e) {
    E(e, !0);
}
function I(e) {
    E(e, !1);
}
function T() {
    c = {};
}
class y extends r.Ay.PersistedStore {
    static displayName = "GuildPowerupsStore";
    static persistKey = "GuildPowerupsStore";
    static migrations = [
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
                              let [t, n] = e,
                                  r = n;
                              return [
                                  t,
                                  {
                                      ...r,
                                      allPowerups: r.allPowerups ?? {},
                                      powerupCatalog: r.powerupCatalog ?? {},
                                      unlockedPowerups: r.unlockedPowerups ?? {},
                                  },
                              ];
                          }),
                  ),
    ];
    initialize(e) {
        this.waitFor(a.A), null != e && (c = e);
    }
    getState() {
        return c;
    }
    getStateForGuild(e) {
        return null != e ? c[e] : void 0;
    }
    shouldFetchCatalogForGuild(e) {
        let t = c[e]?.catalogFetchCooldown;
        return null == t || t + l < Date.now();
    }
    shouldFetchPowerupsForGuild(e) {
        let t = c[e]?.unlockedPowerupsFetchCooldown;
        return null == t || t + u < Date.now();
    }
    hasFetchedPowerupCatalog(e) {
        return null != e && c[e]?.hasFetchedPowerupCatalog === !0;
    }
    hasFetchedUnlockedPowerups(e) {
        return null != e && c[e]?.hasFetchedUnlockedPowerups === !0;
    }
}
let S = new y(i.h, {
    LOGOUT: T,
    GUILD_POWERUP_CATALOG_FETCH_SUCCESS: m,
    GUILD_BOOST_ENTITLEMENTS_FETCH_SUCCESS: g,
    GUILD_POWERUP_ENTITLEMENTS_CREATE: A,
    GUILD_POWERUP_ENTITLEMENTS_DELETE: I,
    GUILD_UPDATE: _,
    GAME_SERVER_FETCH_INSTANCES_SUCCESS: f,
});
