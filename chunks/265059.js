"use strict";
n.d(t, { A: () => u, q: () => a });
var r = n(311907),
    i = n(73153),
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
class l extends r.Ay.DeviceSettingsStore {
    static displayName = "DevToolsSettingsStore";
    static persistKey = "DevToolsSettingsStore";
    initialize(e) {
        (o = e ?? o), (i.h.actionLogger.persist = s.A.isDeveloper);
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
let u = new l(i.h, {
    DEV_TOOLS_SETTINGS_UPDATE: function (e) {
        s.A.isDeveloper && (o = { ...o, ...e.settings });
    },
});
