"use strict";
n.d(t, { A: () => u });
var r = n(311907),
    i = n(73153),
    a = n(616093);
let s = {};
function o(e) {
    let { labFeature: t, enabled: n } = e;
    s[t] = n;
}
class l extends r.Ay.DeviceSettingsStore {
    static displayName = "LabFeatureStore";
    static persistKey = "LabFeatureStore";
    getUserAgnosticState() {
        return { toggleStates: s };
    }
    initialize(e) {
        for (var t in a.A) s[t] = e?.toggleStates?.[t] ?? !1;
    }
    get(e) {
        return s[e] ?? !1;
    }
    set(e, t) {
        return (s[e] = t), t;
    }
}
let u = new l(i.h, { LAB_FEATURE_TOGGLE: o });
