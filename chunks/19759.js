r.d(n, {
    h: function () {
        return u;
    }
});
var i,
    a = r(442837),
    o = r(570140),
    s = r(906467);
function l(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let u = 360,
    c = {
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
function d(e) {
    if (!!s.Z.isDeveloper)
        c = {
            ...c,
            ...e.settings
        };
}
class f extends (i = a.ZP.DeviceSettingsStore) {
    initialize(e) {
        c = null != e ? e : c;
        o.Z.actionLogger.persist = s.Z.isDeveloper;
    }
    getUserAgnosticState() {
        return c;
    }
    get sidebarWidth() {
        return this.displayTools ? c.sidebarWidth : 0;
    }
    get lastOpenTabId() {
        var e;
        return null !== (e = c.lastOpenTabId) && void 0 !== e ? e : null;
    }
    get displayTools() {
        return s.Z.isDeveloper && c.displayTools;
    }
    get showDevWidget() {
        return s.Z.isDeveloper && c.showDevWidget;
    }
    get devWidgetPosition() {
        return c.devWidgetPosition;
    }
    get sortedScreenKeys() {
        return c.sortedScreenKeys;
    }
}
l(f, 'displayName', 'DevToolsSettingsStore'), l(f, 'persistKey', 'DevToolsSettingsStore'), (n.Z = new f(o.Z, { DEV_TOOLS_SETTINGS_UPDATE: d }));
