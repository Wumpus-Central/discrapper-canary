"use strict";
let n;
l.d(t, { A: () => c }), l(321073);
var i = l(17928),
    s = l(228366);
let a = { guildNoticeDismissed: [] },
    r = new Map(),
    o = new Set();
class d extends i.Ay.PersistedStore {
    static displayName = "CommandsMigrationStore";
    static persistKey = "CommandsMigrationStore";
    initialize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a;
        n = e;
    }
    getState() {
        return n;
    }
    shouldShowChannelNotice(e) {
        return !n.guildNoticeDismissed.includes(e) && (r.get(e)?.size ?? 0) > 0;
    }
    canShowOverviewTooltip(e, t) {
        return r.get(e)?.has(t) === !0;
    }
    canShowToggleTooltip(e) {
        return o.has(e);
    }
}
let c = new d(s.h, {
    COMMANDS_MIGRATION_UPDATE_SUCCESS: function (e) {
        let { guildId: t, integrationIdsWithAppCommands: l } = e;
        return r.set(t, new Set(l)), !0;
    },
    COMMANDS_MIGRATION_NOTICE_DISMISSED: function (e) {
        let { guildId: t } = e;
        n.guildNoticeDismissed.push(t);
    },
    COMMANDS_MIGRATION_OVERVIEW_TOOLTIP_DISMISSED: function (e) {
        let { guildId: t, integrationId: l } = e;
        r.get(t)?.clear(), o.add(l);
    },
    COMMANDS_MIGRATION_TOGGLE_TOOLTIP_DISMISSED: function (e) {
        let { integrationId: t } = e;
        o.delete(t);
    },
});
