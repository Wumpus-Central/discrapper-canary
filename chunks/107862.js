n.d(t, {
    RM: () => i,
    Ug: () => r
});
let l = (0, n(818083).B)({
    kind: 'guild',
    id: '2023-02_onboardingdropdowns',
    label: 'Enables dropdown selections from onboarding prompts',
    defaultConfig: { dropdownsAllowed: !1 },
    treatments: [
        {
            id: 1,
            label: 'On',
            config: { dropdownsAllowed: !0 }
        }
    ]
});
function r(e) {
    return l.useExperiment(
        {
            guildId: e,
            location: 'a12ce7_1'
        },
        { autoTrackExposure: !1 }
    );
}
function i(e) {
    return l.getCurrentConfig({
        guildId: e,
        location: 'a12ce7_2'
    });
}
