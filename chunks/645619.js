"use strict";
n.d(t, { A: () => f });
var r = n(311907),
    i = n(73153),
    s = n(71393),
    a = n(568065),
    o = n(652215);
let l = {};
function u(e) {
    let t = s.A.getGuild(e),
        n = t?.features.has(o.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0 ? 0 : o.M2T[t?.premiumTier ?? o.TVA.NONE];
    for (let [r, i] of Object.entries(a.sy))
        t?.premiumFeatures?.features.includes(r) &&
            (i.isEnabled?.(e) ?? !0) &&
            (null == i.includedInLevel || t.premiumTier < i.includedInLevel) &&
            (n += i.boostPrice);
    return n;
}
function d(e) {
    if (null == l[e]) {
        let t = u(e);
        l[e] = { allPowerups: {}, powerupCatalog: {}, unlockedPowerups: {}, appliedBoosts: t };
    }
    return l[e];
}
function c(e, t) {
    let { guildId: n, entitlements: r } = e,
        i = d(n);
    r.forEach((e) => {
        t ? (i.unlockedPowerups[e.sku_id] = e) : delete i.unlockedPowerups[e.sku_id];
    }),
        (l = { ...l, [n]: { ...i, appliedBoosts: u(n) } });
}
class _ extends r.Ay.PersistedStore {
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
let f = new _(i.h, {
    LOGOUT: function () {
        l = {};
    },
    GUILD_POWERUP_CATALOG_FETCH_SUCCESS: function (e) {
        let { guildId: t, allPowerups: n, powerupCatalog: r } = e,
            i = d(t);
        l = {
            ...l,
            [t]: {
                ...i,
                allPowerups: n,
                powerupCatalog: r,
                catalogFetchCooldown: Date.now(),
                hasFetchedPowerupCatalog: !0,
            },
        };
    },
    GUILD_BOOST_ENTITLEMENTS_FETCH_SUCCESS: function (e) {
        let { guildId: t, unlockedPowerups: n } = e,
            r = d(t),
            i = u(t);
        l = {
            ...l,
            [t]: {
                ...r,
                unlockedPowerups: n,
                appliedBoosts: i,
                unlockedPowerupsFetchCooldown: Date.now(),
                hasFetchedUnlockedPowerups: !0,
            },
        };
    },
    GUILD_POWERUP_ENTITLEMENTS_CREATE: function (e) {
        c(e, !0);
    },
    GUILD_POWERUP_ENTITLEMENTS_DELETE: function (e) {
        c(e, !1);
    },
    GUILD_UPDATE: function (e) {
        let {
            guild: { id: t },
        } = e;
        l[t] = { ...d(t), appliedBoosts: u(t) };
    },
    GAME_SERVER_FETCH_INSTANCES_SUCCESS: function (e) {
        let { guildId: t } = e;
        l[t] = { ...d(t), appliedBoosts: u(t) };
    },
});
