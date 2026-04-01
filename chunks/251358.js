"use strict";
n.d(t, { Ak: () => m, DG: () => h, Ox: () => f, QL: () => d, du: () => p, ik: () => g, nb: () => _, zv: () => E });
var r = n(562465),
    i = n(73153),
    s = n(133636),
    a = n(905228),
    o = n(790225),
    l = n(652215);
function u(e) {
    return {
        userId: e.user_id,
        craftingClass: e.crafting_class,
        combatClass: e.combat_class,
        hasStartedCombat: e.has_started_combat,
        hasStartedCrafting: e.has_started_crafting,
        hasStartedGathering: e.has_started_gathering,
        gatheringEndedAt: null != e.gathering_ended_at ? new Date(e.gathering_ended_at) : void 0,
        craftingEndedAt: null != e.crafting_ended_at ? new Date(e.crafting_ended_at) : void 0,
        combatEndedAt: null != e.combat_ended_at ? new Date(e.combat_ended_at) : void 0,
        stats: {
            resourceContribution: e.stats.resource_contribution,
            resourceConsumption: e.stats.resource_consumption,
            activityCompletion: e.stats.activity_completion,
            professionCompletion: e.stats.profession_completion,
        },
        level: e.level,
        xp: e.xp,
        classSelectedAt: null != e.class_selected_at ? new Date(e.class_selected_at) : void 0,
    };
}
function c(e) {
    return { id: e.id, previousCount: e.previous_count, currentCount: e.current_count };
}
async function d() {
    i.h.dispatch({ type: "GORILLA_FETCH_USER_DATA_START" });
    try {
        let e = await r.Bo.get(l.Rsh.GORILLA_USER_DATA),
            t = u(e.body);
        return i.h.dispatch({ type: "GORILLA_FETCH_USER_DATA_SUCCESS", userData: t }), t;
    } catch (e) {
        throw (i.h.dispatch({ type: "GORILLA_FETCH_USER_DATA_FAILURE" }), e);
    }
}
async function _(e) {
    let { craftingClass: t, combatClass: n } = e;
    i.h.dispatch({ type: "GORILLA_UPDATE_USER_DATA_START" });
    try {
        let e = await r.Bo.post({
                url: l.Rsh.GORILLA_USER_DATA,
                body: { crafting_class: t, combat_class: n },
                rejectWithError: !0,
            }),
            c = u(e.body);
        return (
            null == c.combatClass || s.A.getSelectedCombatClasses().has(c.combatClass) || (0, o.PT)(a.R.ONE, 1),
            null == c.craftingClass || s.A.getSelectedCraftingClasses().has(c.craftingClass) || (0, o.PT)(a.R.TWO, 1),
            i.h.dispatch({ type: "GORILLA_UPDATE_USER_DATA_SUCCESS", userData: c }),
            c
        );
    } catch (e) {
        throw (i.h.dispatch({ type: "GORILLA_UPDATE_USER_DATA_FAILURE" }), e);
    }
}
async function f(e) {
    let { activity: t } = e;
    try {
        let e = await r.Bo.post({ url: l.Rsh.GORILLA_START_ACTIVITY(t), rejectWithError: !0 });
        return i.h.dispatch({ type: "GORILLA_START_ACTIVITY_SUCCESS", userData: u(e.body.user_data) }), e.body;
    } catch (e) {
        throw e;
    }
}
async function p(e) {
    let { activity: t } = e;
    try {
        let e = await r.Bo.post({ url: l.Rsh.GORILLA_COMPLETE_ACTIVITY(t), rejectWithError: !0 }),
            n = u(e.body.user_data);
        return (
            s.A.getLevel() !== n.level && (0, o.PT)(a.R.TWENTY_SEVEN, n.level, { additive: !1 }),
            i.h.dispatch({
                type: "GORILLA_COMPLETE_ACTIVITY_SUCCESS",
                userData: n,
                changes: e.body.changes,
                activity: t,
            }),
            e.body
        );
    } catch (e) {
        throw e;
    }
}
function h(e) {
    i.h.dispatch({ type: "GORILLA_CLEAR_ACTIVITY_REWARDS", activity: e });
}
async function m() {
    i.h.dispatch({ type: "GORILLA_FETCH_COUNTERS_START" });
    try {
        let e = await r.Bo.get(l.Rsh.GORILLA_COUNTERS),
            t = [...e.body.resource_counters, ...e.body.profession_counters];
        i.h.dispatch({ type: "GORILLA_FETCH_COUNTERS_SUCCESS", counters: t.map((e) => c(e)) });
    } catch (e) {
        throw (i.h.dispatch({ type: "GORILLA_FETCH_COUNTERS_FAILURE" }), e);
    }
}
function E(e) {
    let { soundVolume: t, musicVolume: n } = e;
    i.h.dispatch({ type: "GORILLA_SET_VOLUME", soundVolume: t, musicVolume: n });
}
function g(e) {
    i.h.dispatch({ type: "GORILLA_UPDATE_ACHIEVEMENT", achievementProgress: e });
}
