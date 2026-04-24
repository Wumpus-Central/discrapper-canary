n.d(t, { A: () => d });
var i = n(17928),
    s = n(228366);
let l = {
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
    r = {};
class a extends i.Ay.DeviceSettingsStore {
    static displayName = "DevToolsDesignTogglesStore";
    static persistKey = "DevToolsDesignTogglesStore";
    getUserAgnosticState() {
        return { toggleStates: r };
    }
    initialize(e) {
        for (var t in l) {
            let n = e?.toggleStates?.[t] ?? !1;
            r[t] = n;
        }
    }
    get(e) {
        return r[e] ?? !1;
    }
    set(e, t) {
        return (r[e] = t), t;
    }
    all() {
        return r;
    }
    allWithDescriptions() {
        return Object.entries(r).map((e) => {
            let [t, n] = e;
            return [t, n, l[t]];
        });
    }
}
let d = new a(s.h, {
    DEV_TOOLS_DESIGN_TOGGLE_SET: function (e) {
        r[e.toggle] = e.value;
    },
});
