"use strict";
n.d(t, { HF: () => E, f8: () => A, c: () => _ });
var i = n(945810),
    r = n(17928),
    a = n(228366);
let s = {
        hide_icymi_tab: { description: "Hide ICYMI tab" },
        go_back_to_regular_input: { description: "Go back to regular input" },
    },
    l = {};
class o extends r.Ay.DeviceSettingsStore {
    static displayName = "LabFeatureStore";
    static persistKey = "LabFeatureStore";
    getUserAgnosticState() {
        return { toggleStates: l };
    }
    initialize(e) {
        for (var t in s) l[t] = e?.toggleStates?.[t] ?? !1;
    }
    get(e) {
        return l[e] ?? !1;
    }
    set(e, t) {
        return (l[e] = t), t;
    }
}
let d = new o(a.h, {
        LAB_FEATURE_TOGGLE: function (e) {
            let { labFeature: t, enabled: n } = e;
            l[t] = n;
        },
    }),
    c = "hide_icymi_tab",
    u = (0, i.mj)({
        name: "2026-04-icymi-staff-only",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function _(e) {
    let t = (0, r.bG)([d], () => d.get(c), [c]),
        { enabled: n } = u.useConfig({ location: e }),
        i = h.useConfig({ location: e });
    return !t && n && i.icymiDesktopEnabled;
}
function E(e) {
    let t = d.get(c),
        { enabled: n } = u.getConfig({ location: e });
    {
        let { icymiDesktopEnabled: i } = h.getConfig({ location: e });
        return !t && n && i;
    }
}
let A = (0, i.mj)({
        name: "2026-03-icymi-staff-debugging-utility",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    h = (0, i.mj)({
        name: "2026-03-icymi-desktop",
        kind: "user",
        defaultConfig: { icymiDesktopEnabled: !1 },
        variations: { 1: { icymiDesktopEnabled: !0 } },
    });
