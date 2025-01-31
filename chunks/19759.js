n.d(t, {
    Z: () => f,
    h: () => l
});
var i,
    r = n(442837),
    a = n(570140),
    s = n(906467);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let l = 360,
    u = {
        sidebarWidth: 360,
        lastOpenTabId: null,
        displayTools: !1,
        showDevWidget: !1,
        devWidgetPosition: {
            x: 0,
            y: 0
        },
        sortedScreenKeys: []
    };
function c(e) {
    s.Z.isDeveloper &&
        (u = {
            ...u,
            ...e.settings
        });
}
class d extends (i = r.ZP.DeviceSettingsStore) {
    initialize(e) {
        (u = null != e ? e : u), (a.Z.actionLogger.persist = s.Z.isDeveloper);
    }
    getUserAgnosticState() {
        return u;
    }
    get sidebarWidth() {
        return this.displayTools ? u.sidebarWidth : 0;
    }
    get lastOpenTabId() {
        var e;
        return null !== (e = u.lastOpenTabId) && void 0 !== e ? e : null;
    }
    get displayTools() {
        return s.Z.isDeveloper && u.displayTools;
    }
    get showDevWidget() {
        return s.Z.isDeveloper && u.showDevWidget;
    }
    get devWidgetPosition() {
        return u.devWidgetPosition;
    }
    get sortedScreenKeys() {
        return u.sortedScreenKeys;
    }
}
o(d, 'displayName', 'DevToolsSettingsStore'), o(d, 'persistKey', 'DevToolsSettingsStore');
let f = new d(a.Z, { DEV_TOOLS_SETTINGS_UPDATE: c });
