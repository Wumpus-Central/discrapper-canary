n.d(t, {
    Z: () => _,
    h: () => c
});
var r,
    i = n(442837),
    o = n(570140),
    a = n(906467);
function s(e, t, n) {
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
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}
let c = 360,
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
function d(e) {
    a.Z.isDeveloper && (u = l({}, u, e.settings));
}
class f extends (r = i.ZP.DeviceSettingsStore) {
    initialize(e) {
        (u = null != e ? e : u), (o.Z.actionLogger.persist = a.Z.isDeveloper);
    }
    getUserAgnosticState() {
        return u;
    }
    get sidebarWidth() {
        return this.displayTools ? u.sidebarWidth : 0;
    }
    get lastOpenTabId() {
        var e;
        return null != (e = u.lastOpenTabId) ? e : null;
    }
    get displayTools() {
        return a.Z.isDeveloper && u.displayTools;
    }
    get showDevWidget() {
        return a.Z.isDeveloper && u.showDevWidget;
    }
    get devWidgetPosition() {
        return u.devWidgetPosition;
    }
    get sortedScreenKeys() {
        return u.sortedScreenKeys;
    }
}
s(f, 'displayName', 'DevToolsSettingsStore'), s(f, 'persistKey', 'DevToolsSettingsStore');
let _ = new f(o.Z, { DEV_TOOLS_SETTINGS_UPDATE: d });
