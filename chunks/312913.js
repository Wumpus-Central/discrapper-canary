n.d(t, { UQ: () => i });
let r = (0, n(818083).B)({
    kind: 'guild',
    id: '2023-02_onboarding_advanced_mode',
    label: 'Enables setting up onboarding with advanced mode',
    defaultConfig: { advancedModeAllowed: !1 },
    treatments: [
        {
            id: 1,
            label: 'On',
            config: { advancedModeAllowed: !0 }
        }
    ]
});
function i(e) {
    return r.useExperiment(
        {
            guildId: e,
            location: 'ed5d33_1'
        },
        { autoTrackExposure: !1 }
    );
}
