n.d(t, {
    A: () => d,
}),
    n(896048);
var r,
    i = n(311907),
    a = n(73153);

function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let o = {
        enable_recently_active: "Enable recently active channels",
        theme_setting_in_account_sheet: "Show theme settings in the Account action sheet",
        nav_experiment_server_drawer_enabled: "[NavI] Enable expandable server drawer",
        shop_include_unpublished: "[Shop] show unpublished items in shop",
        show_icymi_debug_scores: "Show ICYMI debug scores",
        channel_list_scrim: "Dim the channel list when chat appears",
    },
    l = {};

function c(e) {
    l[e.toggle] = e.value;
}
class u extends (r = i.Ay.DeviceSettingsStore) {
    getUserAgnosticState() {
        return {
            toggleStates: l,
        };
    }
    initialize(e) {
        for (var t in o) {
            var n, r;
            let i = null != (n = null == e || null == (r = e.toggleStates) ? void 0 : r[t]) && n;
            l[t] = i;
        }
    }
    get(e) {
        var t;
        return null != (t = l[e]) && t;
    }
    set(e, t) {
        return (l[e] = t), t;
    }
    all() {
        return l;
    }
    allWithDescriptions() {
        return Object.entries(l).map((e) => {
            let [t, n] = e;
            return [t, n, o[t]];
        });
    }
}
s(u, "displayName", "DevToolsDesignTogglesStore"), s(u, "persistKey", "DevToolsDesignTogglesStore");
let d = new u(a.h, {
    DEV_TOOLS_DESIGN_TOGGLE_SET: c,
});
