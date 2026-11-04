var i = n(600975),
    r = n(688151);
let a = (0, i.C)({
    kind: "guild",
    id: "2026-02_hangout_window",
    label: "Hangout Window",
    defaultConfig: { enableHangoutWindow: !1 },
    commonTriggerPoint: r.$G.VOICE_CALL,
    treatments: [{ id: 1, label: "Enable Hangout Window", config: { enableHangoutWindow: !0 } }],
});
n.d(
    t,
    {},
    {
        Dm: function (e) {
            let { guildId: t, location: n } = e;
            return a.useExperiment({ guildId: t, location: n }, { autoTrackExposure: !0 });
        },
        aC: a,
        kY: function (e) {
            let { guildId: t, location: n } = e;
            return a.getCurrentConfig({ guildId: t, location: n }, { autoTrackExposure: !0 });
        },
    },
);
