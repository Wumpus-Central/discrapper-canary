"use strict";
n.d(t, { A: () => E });
var i = n(17928),
    r = n(228366),
    s = n(71393),
    a = n(568065),
    o = n(652215);
let l = {};
function d(e) {
    let t = s.A.getGuild(e),
        n = t?.features.has(o.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0 ? 0 : o.M2T[t?.premiumTier ?? o.TVA.NONE];
    for (let [i, r] of Object.entries(a.sy))
        t?.premiumFeatures?.features.includes(i) &&
            (r.isEnabled?.(e) ?? !0) &&
            (null == r.includedInLevel || t.premiumTier < r.includedInLevel) &&
            (n += r.boostPrice);
    return n;
}
function _(e) {
    if (null == l[e]) {
        let t = d(e);
        l[e] = { allPowerups: {}, powerupCatalog: {}, unlockedPowerups: {}, appliedBoosts: t };
    }
    return l[e];
}
function u(e, t) {
    let { guildId: n, entitlements: i } = e,
        r = _(n);
    i.forEach((e) => {
        t ? (r.unlockedPowerups[e.sku_id] = e) : delete r.unlockedPowerups[e.sku_id];
    }),
        (l = { ...l, [n]: { ...r, appliedBoosts: d(n) } });
}
class c extends i.Ay.PersistedStore {
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
                              let [t, n] = e;
                              return [
                                  t,
                                  {
                                      ...n,
                                      allPowerups: n.allPowerups ?? {},
                                      powerupCatalog: n.powerupCatalog ?? {},
                                      unlockedPowerups: n.unlockedPowerups ?? {},
                                  },
                              ];
                          }),
                  ),
    ];
    initialize(e) {
        this.waitFor(s.A), null != e && (l = e);
    }
    getState() {
        return l;
    }
    getStateForGuild(e) {
        return null != e ? l[e] : void 0;
    }
    shouldFetchCatalogForGuild(e) {
        let t = l[e]?.catalogFetchCooldown;
        return null == t || t + 864e5 < Date.now();
    }
    shouldFetchPowerupsForGuild(e) {
        let t = l[e]?.unlockedPowerupsFetchCooldown;
        return null == t || t + 36e5 < Date.now();
    }
    hasFetchedPowerupCatalog(e) {
        return null != e && l[e]?.hasFetchedPowerupCatalog === !0;
    }
    hasFetchedUnlockedPowerups(e) {
        return null != e && l[e]?.hasFetchedUnlockedPowerups === !0;
    }
}
let E = new c(r.h, {
    LOGOUT: function () {
        l = {};
    },
    GUILD_POWERUP_CATALOG_FETCH_SUCCESS: function (e) {
        let { guildId: t, allPowerups: n, powerupCatalog: i } = e,
            r = _(t);
        l = {
            ...l,
            [t]: {
                ...r,
                allPowerups: n,
                powerupCatalog: i,
                catalogFetchCooldown: Date.now(),
                hasFetchedPowerupCatalog: !0,
            },
        };
    },
    GUILD_BOOST_ENTITLEMENTS_FETCH_SUCCESS: function (e) {
        let { guildId: t, unlockedPowerups: n } = e,
            i = _(t),
            r = d(t);
        l = {
            ...l,
            [t]: {
                ...i,
                unlockedPowerups: n,
                appliedBoosts: r,
                unlockedPowerupsFetchCooldown: Date.now(),
                hasFetchedUnlockedPowerups: !0,
            },
        };
    },
    GUILD_POWERUP_ENTITLEMENTS_CREATE: function (e) {
        u(e, !0);
    },
    GUILD_POWERUP_ENTITLEMENTS_DELETE: function (e) {
        u(e, !1);
    },
    GUILD_UPDATE: function (e) {
        let {
            guild: { id: t },
        } = e;
        l[t] = { ..._(t), appliedBoosts: d(t) };
    },
    GAME_SERVER_FETCH_INSTANCES_SUCCESS: function (e) {
        let { guildId: t } = e;
        l[t] = { ..._(t), appliedBoosts: d(t) };
    },
});
