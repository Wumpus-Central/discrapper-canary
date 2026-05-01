"use strict";
n.d(t, { A: () => l });
var i = n(17928),
    r = n(228366);
let s = {
        hide_icymi_tab: { description: "Hide ICYMI tab" },
        go_back_to_regular_input: { description: "Go back to regular input" },
    },
    a = {};
class o extends i.Ay.DeviceSettingsStore {
    static displayName = "LabFeatureStore";
    static persistKey = "LabFeatureStore";
    getUserAgnosticState() {
        return { toggleStates: a };
    }
    initialize(e) {
        for (var t in s) a[t] = e?.toggleStates?.[t] ?? !1;
    }
    get(e) {
        return a[e] ?? !1;
    }
    set(e, t) {
        return (a[e] = t), t;
    }
}
let l = new o(r.h, {
    LAB_FEATURE_TOGGLE: function (e) {
        let { labFeature: t, enabled: n } = e;
        a[t] = n;
    },
});
