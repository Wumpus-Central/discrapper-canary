"use strict";
let r;
n.d(t, { A: () => M });
var i = n(311907),
    s = n(73153),
    a = n(927813),
    o = n(346640);
function l() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return { previousCount: e, currentCount: t };
}
let u = !1,
    c = !1,
    d = null,
    _ = 0,
    f = 0,
    p = {
        [o.EC.LEATHER]: l(),
        [o.EC.METAL]: l(),
        [o.EC.WOOD]: l(),
        [o.EC.MAGIC]: l(),
        [o.EC.ARMOR]: l(),
        [o.EC.WEAPON]: l(),
        [o.EC.TANKS]: l(),
        [o.EC.HEALERS]: l(),
        [o.EC.ENEMY_DAMAGE]: l(),
        [o.xO.MAGIC_CRAFTER]: l(),
        [o.xO.ARMOR_CRAFTER]: l(),
        [o.xO.WEAPON_CRAFTER]: l(),
        [o.$6.HEALER]: l(),
        [o.$6.TANK]: l(),
        [o.$6.DPS]: l(),
    },
    h = { [o.$p.GATHERING]: null, [o.$p.CRAFTING]: null, [o.$p.COMBAT]: null },
    m = {},
    E = 0,
    g = { soundVolume: 1, musicVolume: 0.4, selectedCombatClasses: new Set(), selectedCraftingClasses: new Set() },
    A = { ...g };
function I() {
    u = !0;
}
function T(e) {
    let { userData: t } = e;
    (u = !1), (d = t);
}
function S() {
    u = !1;
}
function y() {
    c = !0;
}
function v(e) {
    let { userData: t } = e;
    (c = !1),
        (d = t),
        null != t.combatClass &&
            A.selectedCombatClasses.size < Object.keys(o.$6).length &&
            (A.selectedCombatClasses.add(t.combatClass), (A = { ...A })),
        null != t.craftingClass &&
            A.selectedCraftingClasses.size < Object.keys(o.xO).length &&
            (A.selectedCraftingClasses.add(t.craftingClass), (A = { ...A }));
}
function N() {
    c = !1;
}
function C(e) {
    e.counters.forEach((e) => {
        p[e.id] = l(e.previousCount, e.currentCount);
    }),
        (f = (_ = Date.now()) + a.A.Millis.MINUTE);
}
function R(e) {
    let { userData: t } = e;
    d = t;
}
function O(e) {
    let { activity: t, userData: n, changes: i } = e;
    null != d && (E = n.xp - d.xp) > 0 && ((m[t] = E), (m = { ...m })),
        (d = n),
        (h[t] = i),
        t === o.$p.GATHERING
            ? (r = { type: t })
            : t === o.$p.CRAFTING && Object.keys(i).length > 0
              ? (r = { type: t, resource: Object.keys(i)[0] })
              : t === o.$p.COMBAT && null != d.combatClass && (r = { type: t, combatClass: d.combatClass });
}
function b(e) {
    let { activity: t } = e;
    (h[t] = null), delete m[t], (m = { ...m }), (E = 0);
}
function D(e) {
    let { soundVolume: t, musicVolume: n } = e;
    (A.soundVolume = t), (A.musicVolume = n);
}
function L() {
    A = { ...g };
}
class w extends i.Ay.PersistedStore {
    static displayName = "GorillaStore";
    static persistKey = "GorillaStore";
    initialize(e) {
        null != e &&
            (A = {
                ...g,
                ...e,
                selectedCombatClasses: new Set(e.selectedCombatClasses),
                selectedCraftingClasses: new Set(e.selectedCraftingClasses),
            });
    }
    getState() {
        return A;
    }
    hasFetchedUserData() {
        return null != d;
    }
    getCraftingClass() {
        return d?.craftingClass;
    }
    getCraftingEndedAt() {
        return d?.craftingEndedAt;
    }
    getCombatClass() {
        return d?.combatClass;
    }
    getCombatEndedAt() {
        return d?.combatEndedAt;
    }
    isFetchingUserData() {
        return u;
    }
    isUpdatingUserData() {
        return c;
    }
    getClassSelectedAt() {
        return d?.classSelectedAt;
    }
    getStats() {
        return d?.stats;
    }
    getCounter(e) {
        return p[e];
    }
    getCountersFetchTime() {
        return _;
    }
    getNextCountersFetchTime() {
        return f;
    }
    getLastAction() {
        return r;
    }
    getLastRewards(e) {
        return h[e] ?? null;
    }
    hasStartedActivity(e) {
        if (null == d) return !1;
        switch (e) {
            case o.$p.GATHERING:
                return d.hasStartedGathering;
            case o.$p.CRAFTING:
                return d.hasStartedCrafting;
            case o.$p.COMBAT:
                return d.hasStartedCombat;
        }
    }
    getLevel() {
        return d?.level ?? 0;
    }
    getXP() {
        return d?.xp ?? 0;
    }
    getLastXPGains() {
        return m;
    }
    getLastXPGained() {
        return E;
    }
    get soundVolume() {
        return A.soundVolume;
    }
    get musicVolume() {
        return A.musicVolume;
    }
    getSelectedCombatClasses() {
        return A.selectedCombatClasses;
    }
    getSelectedCraftingClasses() {
        return A.selectedCraftingClasses;
    }
}
let M = new w(s.h, {
    GORILLA_FETCH_USER_DATA_START: I,
    GORILLA_FETCH_USER_DATA_SUCCESS: T,
    GORILLA_FETCH_USER_DATA_FAILURE: S,
    GORILLA_UPDATE_USER_DATA_START: y,
    GORILLA_UPDATE_USER_DATA_SUCCESS: v,
    GORILLA_UPDATE_USER_DATA_FAILURE: N,
    GORILLA_START_ACTIVITY_SUCCESS: R,
    GORILLA_COMPLETE_ACTIVITY_SUCCESS: O,
    GORILLA_CLEAR_ACTIVITY_REWARDS: b,
    GORILLA_FETCH_COUNTERS_SUCCESS: C,
    GORILLA_SET_VOLUME: D,
    LOGOUT: L,
});
