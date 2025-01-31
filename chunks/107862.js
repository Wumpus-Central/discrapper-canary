t.d(n, {
    RM: () => s,
    Ug: () => i
});
let l = (0, t(818083).B)({
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
function i(e) {
    return l.useExperiment(
        {
            guildId: e,
            location: 'a12ce7_1'
        },
        { autoTrackExposure: !1 }
    );
}
function s(e) {
    return l.getCurrentConfig({
        guildId: e,
        location: 'a12ce7_2'
    });
}
