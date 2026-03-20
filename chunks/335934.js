"use strict";
n.d(t, { HF: () => d, c: () => c, f8: () => _ });
var r = n(600975),
    i = n(945810),
    s = n(303622),
    a = n(735729),
    o = n(688151);
let l = "hide_icymi_tab",
    u = (0, r.C)({
        kind: "user",
        id: "2024-07_icymi",
        label: "In-case-you-missed-it tab",
        commonTriggerPoint: o.$G.CONNECTION_OPEN_MOBILE,
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "enables the new icymi tab", config: { enabled: !0 } }],
    });
function c(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = (0, a.A)(l),
        r = u.useExperiment({ location: e }, { autoTrackExposure: t, disable: n }),
        i = f.useConfig({ location: e });
    return r.enabled && i.icymiDesktopEnabled;
}
function d(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = s.A.get(l),
        r = u.getCurrentConfig({ location: e }, { autoTrackExposure: t, disable: n });
    {
        let t = f.getConfig({ location: e });
        return r.enabled && t.icymiDesktopEnabled;
    }
}
let _ = (0, i.mj)({
        name: "2026-03-icymi-staff-debugging-utility",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    f = (0, i.mj)({
        name: "2026-03-icymi-desktop",
        kind: "user",
        defaultConfig: { icymiDesktopEnabled: !1 },
        variations: { 1: { icymiDesktopEnabled: !0 } },
    });
