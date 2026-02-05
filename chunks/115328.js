"use strict";
n.d(t, { A: () => o });
var s = n(311907),
    i = n(73153);
let r = {
        enable_recently_active: "Enable recently active channels",
        theme_setting_in_account_sheet: "Show theme settings in the Account action sheet",
        nav_experiment_server_drawer_enabled: "[NavI] Enable expandable server drawer",
        shop_include_unpublished: "[Shop] show unpublished items in shop",
        show_icymi_debug_scores: "Show ICYMI debug scores",
        channel_list_scrim: "Dim the channel list when chat appears",
    },
    l = {};
class a extends s.Ay.DeviceSettingsStore {
    static displayName = "DevToolsDesignTogglesStore";
    static persistKey = "DevToolsDesignTogglesStore";
    getUserAgnosticState() {
        return { toggleStates: l };
    }
    initialize(e) {
        for (var t in r) {
            let n = e?.toggleStates?.[t] ?? !1;
            l[t] = n;
        }
    }
    get(e) {
        return l[e] ?? !1;
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
            return [t, n, r[t]];
        });
    }
}
let o = new a(i.h, {
    DEV_TOOLS_DESIGN_TOGGLE_SET: function (e) {
        l[e.toggle] = e.value;
    },
});
