let i;
n.d(t, { A: () => u }), n(321073);
var r = n(311907),
    a = n(73153);
let l = { guildNoticeDismissed: [] },
    s = new Map(),
    o = new Set();
class d extends r.Ay.PersistedStore {
    static displayName = "CommandsMigrationStore";
    static persistKey = "CommandsMigrationStore";
    initialize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l;
        i = e;
    }
    getState() {
        return i;
    }
    shouldShowChannelNotice(e) {
        return !i.guildNoticeDismissed.includes(e) && (s.get(e)?.size ?? 0) > 0;
    }
    canShowOverviewTooltip(e, t) {
        return s.get(e)?.has(t) === !0;
    }
    canShowToggleTooltip(e) {
        return o.has(e);
    }
}
let u = new d(a.h, {
    COMMANDS_MIGRATION_UPDATE_SUCCESS: function (e) {
        let { guildId: t, integrationIdsWithAppCommands: n } = e;
        return s.set(t, new Set(n)), !0;
    },
    COMMANDS_MIGRATION_NOTICE_DISMISSED: function (e) {
        let { guildId: t } = e;
        i.guildNoticeDismissed.push(t);
    },
    COMMANDS_MIGRATION_OVERVIEW_TOOLTIP_DISMISSED: function (e) {
        let { guildId: t, integrationId: n } = e;
        s.get(t)?.clear(), o.add(n);
    },
    COMMANDS_MIGRATION_TOGGLE_TOOLTIP_DISMISSED: function (e) {
        let { integrationId: t } = e;
        o.delete(t);
    },
});
