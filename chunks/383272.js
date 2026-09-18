n.d(t, { DD: () => d, Ov: () => c, Qs: () => o, g$: () => s, lY: () => u });
var i = n(600975),
    r = n(772788),
    a = n(652215);
let s = (0, i.C)({
    kind: "guild",
    id: "2026-04_server_theme",
    label: "Server Theme",
    defaultConfig: { enabled: !1, inExperiment: !1, gatesApex: !1, rollbackEnabled: !1 },
    treatments: [
        { id: 0, label: "Control", config: { enabled: !1, inExperiment: !0, gatesApex: !1, rollbackEnabled: !1 } },
        {
            id: 1,
            label: "Enable Server Theme",
            config: { enabled: !0, inExperiment: !0, gatesApex: !1, rollbackEnabled: !1 },
        },
        {
            id: 2,
            label: "Rollback UI for Server Theme",
            config: { enabled: !0, inExperiment: !0, gatesApex: !1, rollbackEnabled: !0 },
        },
    ],
});
function l(e, t, n) {
    return e.inExperiment ? e : n && t.gatesApex ? t : s.definition.defaultConfig;
}
function o(e, t) {
    return l(
        s.getCurrentConfig({ guildId: e, location: t }, { autoTrackExposure: !1 }),
        null != e ? r.K.getConfig({ guildId: e, location: t }) : r.K.definition.defaultConfig,
        null != e,
    ).enabled;
}
function d(e, t) {
    return l(
        s.useExperiment({ guildId: e, location: t }, { autoTrackExposure: !1 }),
        r.K.useConfig({ guildId: e ?? a.dJq, location: t }),
        null != e,
    ).enabled;
}
function c(e, t) {
    return l(
        s.getCurrentConfig({ guildId: e, location: t }, { autoTrackExposure: !1 }),
        null != e ? r.K.getConfig({ guildId: e, location: t }) : r.K.definition.defaultConfig,
        null != e,
    ).rollbackEnabled;
}
function u(e, t) {
    return l(
        s.useExperiment({ guildId: e, location: t }, { autoTrackExposure: !1 }),
        r.K.useConfig({ guildId: e ?? a.dJq, location: t }),
        null != e,
    ).rollbackEnabled;
}
