"use strict";
n.d(t, { HF: () => f, f8: () => h, zF: () => E, c: () => _ });
var i = n(945810),
    r = n(17928),
    s = n(228366);
let a = {
        hide_icymi_tab: { description: "Hide ICYMI tab" },
        go_back_to_regular_input: { description: "Go back to regular input" },
    },
    o = {};
class l extends r.Ay.DeviceSettingsStore {
    static displayName = "LabFeatureStore";
    static persistKey = "LabFeatureStore";
    getUserAgnosticState() {
        return { toggleStates: o };
    }
    initialize(e) {
        for (var t in a) o[t] = e?.toggleStates?.[t] ?? !1;
    }
    get(e) {
        return o[e] ?? !1;
    }
    set(e, t) {
        return (o[e] = t), t;
    }
}
let u = new l(s.h, {
        LAB_FEATURE_TOGGLE: function (e) {
            let { labFeature: t, enabled: n } = e;
            o[t] = n;
        },
    }),
    c = "hide_icymi_tab",
    d = (0, i.mj)({
        name: "2026-04-icymi-staff-only",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function _(e) {
    let t = (0, r.bG)([u], () => u.get(c), [c]),
        { enabled: n } = d.useConfig({ location: e }),
        i = p.useConfig({ location: e });
    return !t && n && i.icymiDesktopEnabled;
}
function f(e) {
    let t = u.get(c),
        { enabled: n } = d.getConfig({ location: e });
    {
        let { icymiDesktopEnabled: i } = p.getConfig({ location: e });
        return !t && n && i;
    }
}
let h = (0, i.mj)({
        name: "2026-03-icymi-staff-debugging-utility",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    p = (0, i.mj)({
        name: "2026-03-icymi-desktop",
        kind: "user",
        defaultConfig: { icymiDesktopEnabled: !1 },
        variations: { 1: { icymiDesktopEnabled: !0 } },
    }),
    E = (0, i.mj)({
        name: "2026-03-icymi-sunset-banner",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
