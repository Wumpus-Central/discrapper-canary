var i = n(600975),
    r = n(772788);
n(652215);
let a = (0, i.C)({
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
function s(e, t, n) {
    return e.inExperiment ? e : n && t.gatesApex ? t : a.definition.defaultConfig;
}
n.d(
    t,
    {},
    {
        DD: function (e, t) {
            return s(
                a.useExperiment({ guildId: e, location: t }, { autoTrackExposure: !1 }),
                r.K.useConfig({ guildId: e ?? "", location: t }),
                null != e,
            ).enabled;
        },
        Ov: function (e, t) {
            return s(
                a.getCurrentConfig({ guildId: e, location: t }, { autoTrackExposure: !1 }),
                null != e ? r.K.getConfig({ guildId: e, location: t }) : r.K.definition.defaultConfig,
                null != e,
            ).rollbackEnabled;
        },
        Qs: function (e, t) {
            return s(
                a.getCurrentConfig({ guildId: e, location: t }, { autoTrackExposure: !1 }),
                null != e ? r.K.getConfig({ guildId: e, location: t }) : r.K.definition.defaultConfig,
                null != e,
            ).enabled;
        },
        g$: a,
        lY: function (e, t) {
            return s(
                a.useExperiment({ guildId: e, location: t }, { autoTrackExposure: !1 }),
                r.K.useConfig({ guildId: e ?? "", location: t }),
                null != e,
            ).rollbackEnabled;
        },
    },
);
