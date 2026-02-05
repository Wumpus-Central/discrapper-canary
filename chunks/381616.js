let i;
r.d(t, { A: () => _ }), r(321073);
var a = r(311907),
    s = r(73153);
let n = { guildNoticeDismissed: [] },
    o = new Map(),
    l = new Set();
class c extends a.Ay.PersistedStore {
    static displayName = "CommandsMigrationStore";
    static persistKey = "CommandsMigrationStore";
    initialize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n;
        i = e;
    }
    getState() {
        return i;
    }
    shouldShowChannelNotice(e) {
        return !i.guildNoticeDismissed.includes(e) && (o.get(e)?.size ?? 0) > 0;
    }
    canShowOverviewTooltip(e, t) {
        return o.get(e)?.has(t) === !0;
    }
    canShowToggleTooltip(e) {
        return l.has(e);
    }
}
let _ = new c(s.h, {
    COMMANDS_MIGRATION_UPDATE_SUCCESS: function (e) {
        let { guildId: t, integrationIdsWithAppCommands: r } = e;
        return o.set(t, new Set(r)), !0;
    },
    COMMANDS_MIGRATION_NOTICE_DISMISSED: function (e) {
        let { guildId: t } = e;
        i.guildNoticeDismissed.push(t);
    },
    COMMANDS_MIGRATION_OVERVIEW_TOOLTIP_DISMISSED: function (e) {
        let { guildId: t, integrationId: r } = e;
        o.get(t)?.clear(), l.add(r);
    },
    COMMANDS_MIGRATION_TOGGLE_TOOLTIP_DISMISSED: function (e) {
        let { integrationId: t } = e;
        l.delete(t);
    },
});
