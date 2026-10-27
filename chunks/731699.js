n.d(t, { A: () => d });
var i = n(17928),
    r = n(73153);
let a = {
    hide_icymi_tab: { description: "Hide ICYMI tab" },
    go_back_to_regular_input: { description: "Go back to regular input" },
    enable_native_markdown: { description: "Enable native markdown parser", defaultValue: !0 },
};
function s(e) {
    return a[e].defaultValue ?? !1;
}
let l = {};
class o extends i.Ay.DeviceSettingsStore {
    static displayName = "LabFeatureStore";
    static persistKey = "LabFeatureStore";
    getUserAgnosticState() {
        return { toggleStates: l };
    }
    initialize(e) {
        for (var t in a) l[t] = e?.toggleStates?.[t] ?? s(t);
    }
    get(e) {
        return l[e] ?? s(e);
    }
    set(e, t) {
        return ((l[e] = t), t);
    }
}
let d = new o(r.h, {
    LAB_FEATURE_TOGGLE: function (e) {
        let { labFeature: t, enabled: n } = e;
        l[t] = n;
    },
});
