"use strict";
n.d(t, { A: () => d, q: () => a });
var i = n(17928),
    r = n(228366),
    s = n(540999);
let a = 460,
    o = {
        sidebarWidth: 460,
        lastOpenTabId: null,
        lastOpenSubTabId: null,
        displayTools: !1,
        showDevWidget: !1,
        devWidgetPosition: { x: 0, y: 0 },
        sortedScreenKeys: [],
    };
class l extends i.Ay.DeviceSettingsStore {
    static displayName = "DevToolsSettingsStore";
    static persistKey = "DevToolsSettingsStore";
    initialize(e) {
        (o = e ?? o), (r.h.actionLogger.persist = s.A.isDeveloper);
    }
    getUserAgnosticState() {
        return o;
    }
    get sidebarWidth() {
        return this.displayTools ? o.sidebarWidth : 0;
    }
    get lastOpenTabId() {
        return o.lastOpenTabId ?? null;
    }
    get lastOpenSubTabId() {
        return o.lastOpenSubTabId ?? null;
    }
    get displayTools() {
        return s.A.isDeveloper && o.displayTools;
    }
    get showDevWidget() {
        return s.A.isDeveloper && o.showDevWidget;
    }
    get devWidgetPosition() {
        return o.devWidgetPosition;
    }
    get sortedScreenKeys() {
        return o.sortedScreenKeys;
    }
}
let d = new l(r.h, {
    DEV_TOOLS_SETTINGS_UPDATE: function (e) {
        s.A.isDeveloper && (o = { ...o, ...e.settings });
    },
});
