"use strict";
n.d(t, { E2: () => d, HF: () => c, c: () => u, o$: () => f });
var r = n(600975),
    i = n(303622),
    a = n(735729),
    s = n(688151);
let o = "hide_icymi_tab",
    l = (0, r.C)({
        kind: "user",
        id: "2024-07_icymi",
        label: "In-case-you-missed-it tab",
        commonTriggerPoint: s.$G.CONNECTION_OPEN_MOBILE,
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "enables the new icymi tab", config: { enabled: !0 } }],
    });
function u(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = (0, a.A)(o),
        r = l.useExperiment({ location: e }, { autoTrackExposure: t, disable: n }),
        i = p.useExperiment({ location: e }, { autoTrackExposure: !1, disable: !r.enabled });
    return r.enabled && i.icymiDesktopEnabled;
}
function c(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = i.A.get(o),
        r = l.getCurrentConfig({ location: e }, { autoTrackExposure: t, disable: n });
    {
        let t = p.getCurrentConfig({ location: e }, { autoTrackExposure: !1, disable: !r.enabled });
        return r.enabled && t.icymiDesktopEnabled;
    }
}
let d = (0, r.C)({
        kind: "user",
        id: "2024-07_icymi_negative_items",
        label: "icymi negative content (debugging only)",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "allow negative items only", config: { enabled: !0 } }],
    }),
    _ = (0, r.C)({
        kind: "user",
        id: "2025-05_icymi_new_conversation_summaries",
        label: "New conversation summary in ICYMI",
        defaultConfig: { contentGenerationEnabled: !1 },
        treatments: [
            { id: 1, label: "New conversation summary types in ICYMI", config: { contentGenerationEnabled: !0 } },
        ],
    });
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = c(e, !1);
    return _.getCurrentConfig({ location: e }, { autoTrackExposure: t, disable: !n });
}
let p = (0, r.C)({
    kind: "user",
    id: "2025-10_icymi_desktop_client",
    label: "ICYMI desktop client",
    defaultConfig: { icymiDesktopEnabled: !1 },
    treatments: [{ id: 1, label: "Enable ICYMI desktop client", config: { icymiDesktopEnabled: !0 } }],
});
