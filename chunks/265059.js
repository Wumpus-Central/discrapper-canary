n.d(t, { A: () => d, q: () => s });
var i = n(17928),
    r = n(228366),
    a = n(540999);
let s = 460,
    l = {
        sidebarWidth: 460,
        lastOpenTabId: null,
        lastOpenSubTabId: null,
        displayTools: !1,
        showDevWidget: !1,
        devWidgetPosition: { x: 0, y: 0 },
        sortedScreenKeys: [],
    };
class o extends i.Ay.DeviceSettingsStore {
    static displayName = "DevToolsSettingsStore";
    static persistKey = "DevToolsSettingsStore";
    initialize(e) {
        (l = e ?? l), (r.h.actionLogger.persist = a.A.isDeveloper);
    }
    getUserAgnosticState() {
        return l;
    }
    get sidebarWidth() {
        return this.displayTools ? l.sidebarWidth : 0;
    }
    get lastOpenTabId() {
        return l.lastOpenTabId ?? null;
    }
    get lastOpenSubTabId() {
        return l.lastOpenSubTabId ?? null;
    }
    get displayTools() {
        return a.A.isDeveloper && l.displayTools;
    }
    get showDevWidget() {
        return a.A.isDeveloper && l.showDevWidget;
    }
    get devWidgetPosition() {
        return l.devWidgetPosition;
    }
    get sortedScreenKeys() {
        return l.sortedScreenKeys;
    }
}
let d = new o(r.h, {
    DEV_TOOLS_SETTINGS_UPDATE: function (e) {
        a.A.isDeveloper && (l = { ...l, ...e.settings });
    },
});
