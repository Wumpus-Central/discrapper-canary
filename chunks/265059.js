"use strict";
n.d(t, { A: () => c, q: () => s });
var r = n(311907),
    i = n(73153),
    a = n(540999);
let s = 460,
    o = {
        sidebarWidth: 460,
        lastOpenTabId: null,
        displayTools: !1,
        showDevWidget: !1,
        devWidgetPosition: { x: 0, y: 0 },
        sortedScreenKeys: [],
    };
function l(e) {
    a.A.isDeveloper && (o = { ...o, ...e.settings });
}
class u extends r.Ay.DeviceSettingsStore {
    static displayName = "DevToolsSettingsStore";
    static persistKey = "DevToolsSettingsStore";
    initialize(e) {
        (o = e ?? o), (i.h.actionLogger.persist = a.A.isDeveloper);
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
    get displayTools() {
        return a.A.isDeveloper && o.displayTools;
    }
    get showDevWidget() {
        return a.A.isDeveloper && o.showDevWidget;
    }
    get devWidgetPosition() {
        return o.devWidgetPosition;
    }
    get sortedScreenKeys() {
        return o.sortedScreenKeys;
    }
}
let c = new u(i.h, { DEV_TOOLS_SETTINGS_UPDATE: l });
