let o;
i.d(e, { A: () => l }), i(321073);
var s = i(17928),
    n = i(228366);
let a = { guildNoticeDismissed: [] },
    I = new Map(),
    S = new Set();
class d extends s.Ay.PersistedStore {
    static displayName = "CommandsMigrationStore";
    static persistKey = "CommandsMigrationStore";
    initialize() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a;
        o = t;
    }
    getState() {
        return o;
    }
    shouldShowChannelNotice(t) {
        return !o.guildNoticeDismissed.includes(t) && (I.get(t)?.size ?? 0) > 0;
    }
    canShowOverviewTooltip(t, e) {
        return I.get(t)?.has(e) === !0;
    }
    canShowToggleTooltip(t) {
        return S.has(t);
    }
}
let l = new d(n.h, {
    COMMANDS_MIGRATION_UPDATE_SUCCESS: function (t) {
        let { guildId: e, integrationIdsWithAppCommands: i } = t;
        return I.set(e, new Set(i)), !0;
    },
    COMMANDS_MIGRATION_NOTICE_DISMISSED: function (t) {
        let { guildId: e } = t;
        o.guildNoticeDismissed.push(e);
    },
    COMMANDS_MIGRATION_OVERVIEW_TOOLTIP_DISMISSED: function (t) {
        let { guildId: e, integrationId: i } = t;
        I.get(e)?.clear(), S.add(i);
    },
    COMMANDS_MIGRATION_TOGGLE_TOOLTIP_DISMISSED: function (t) {
        let { integrationId: e } = t;
        S.delete(e);
    },
});
