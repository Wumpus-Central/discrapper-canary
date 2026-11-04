var i = n(855986),
    r = n(73153),
    a = n(540999);
let s = {
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
        ((s = e ?? s), (r.h.actionLogger.persist = a.A.isDeveloper));
    }
    getUserAgnosticState() {
        return s;
    }
    get sidebarWidth() {
        return this.displayTools ? s.sidebarWidth : 0;
    }
    get lastOpenTabId() {
        return s.lastOpenTabId ?? null;
    }
    get lastOpenSubTabId() {
        return s.lastOpenSubTabId ?? null;
    }
    get displayTools() {
        return a.A.isDeveloper && s.displayTools;
    }
    get showDevWidget() {
        return a.A.isDeveloper && s.showDevWidget;
    }
    get devWidgetPosition() {
        return s.devWidgetPosition;
    }
    get sortedScreenKeys() {
        return s.sortedScreenKeys;
    }
}
let o = new l(r.h, {
    DEV_TOOLS_SETTINGS_UPDATE: function (e) {
        a.A.isDeveloper && (s = { ...s, ...e.settings });
    },
});
n.d(t, {}, { A: o });
