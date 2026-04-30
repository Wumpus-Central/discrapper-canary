n.d(t, { A: () => d });
var l = n(17928),
    i = n(228366);
let s = {
        enable_recently_active: "Enable recently active channels",
        theme_setting_in_account_sheet: "Show theme settings in the Account action sheet",
        nav_experiment_server_drawer_enabled: "[NavI] Enable expandable server drawer",
        show_icymi_debug_scores: "Show ICYMI debug scores",
        channel_list_scrim: "Dim the channel list when chat appears",
        mana_radio_large_variant: "Larger Radio",
        mana_checkbox_large_variant: "Larger Checkbox",
        mana_switch_large_variant: "Larger Switch",
        mana_switch_show_icons: "Show icons on switches",
        show_header_debug_info: "Show header component debug overlays",
    },
    a = {};
class r extends l.Ay.DeviceSettingsStore {
    static displayName = "DevToolsDesignTogglesStore";
    static persistKey = "DevToolsDesignTogglesStore";
    getUserAgnosticState() {
        return { toggleStates: a };
    }
    initialize(e) {
        for (var t in s) {
            let n = e?.toggleStates?.[t] ?? !1;
            a[t] = n;
        }
    }
    get(e) {
        return a[e] ?? !1;
    }
    set(e, t) {
        return (a[e] = t), t;
    }
    all() {
        return a;
    }
    allWithDescriptions() {
        return Object.entries(a).map((e) => {
            let [t, n] = e;
            return [t, n, s[t]];
        });
    }
}
let d = new r(i.h, {
    DEV_TOOLS_DESIGN_TOGGLE_SET: function (e) {
        a[e.toggle] = e.value;
    },
});
