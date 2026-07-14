"use strict";
n.d(t, { A: () => E });
var i = n(17928),
    r = n(228366),
    a = n(71393),
    s = n(568065),
    l = n(652215);
let o = {};
function d(e) {
    let t = a.A.getGuild(e),
        n = t?.features.has(l.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0,
        i = n ? 0 : l.M2T[t?.premiumTier ?? l.TVA.NONE];
    for (let [r, a] of Object.entries(s.sy))
        !(n && s.wc.has(r)) &&
            t?.premiumFeatures?.features.includes(r) &&
            (a.isEnabled?.(e) ?? !0) &&
            (null == a.includedInLevel || t.premiumTier < a.includedInLevel) &&
            (i += a.boostPrice);
    return i;
}
function c(e) {
    if (null == o[e]) {
        let t = d(e);
        o[e] = { allPowerups: {}, powerupCatalog: {}, unlockedPowerups: {}, appliedBoosts: t };
    }
    return o[e];
}
function u(e, t) {
    let { guildId: n, entitlements: i } = e,
        r = c(n);
    i.forEach((e) => {
        t ? (r.unlockedPowerups[e.sku_id] = e) : delete r.unlockedPowerups[e.sku_id];
    }),
        (o = { ...o, [n]: { ...r, appliedBoosts: d(n) } });
}
class _ extends i.Ay.PersistedStore {
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
        this.waitFor(a.A), null != e && (o = e);
    }
    getState() {
        return o;
    }
    getStateForGuild(e) {
        return null != e ? o[e] : void 0;
    }
    shouldFetchCatalogForGuild(e) {
        let t = o[e]?.catalogFetchCooldown;
        return null == t || t + 864e5 < Date.now();
    }
    shouldFetchPowerupsForGuild(e) {
        let t = o[e]?.unlockedPowerupsFetchCooldown;
        return null == t || t + 36e5 < Date.now();
    }
    hasFetchedPowerupCatalog(e) {
        return null != e && o[e]?.hasFetchedPowerupCatalog === !0;
    }
    hasFetchedUnlockedPowerups(e) {
        return null != e && o[e]?.hasFetchedUnlockedPowerups === !0;
    }
}
let E = new _(r.h, {
    LOGOUT: function () {
        o = {};
    },
    GUILD_POWERUP_CATALOG_FETCH_SUCCESS: function (e) {
        let { guildId: t, allPowerups: n, powerupCatalog: i } = e,
            r = c(t);
        o = {
            ...o,
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
            i = c(t),
            r = d(t);
        o = {
            ...o,
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
        o[t] = { ...c(t), appliedBoosts: d(t) };
    },
    GAME_SERVER_FETCH_INSTANCES_SUCCESS: function (e) {
        let { guildId: t } = e;
        o[t] = { ...c(t), appliedBoosts: d(t) };
    },
});
