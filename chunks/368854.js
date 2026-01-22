n.d(t, { P: () => s });
var r = n(600975);
let i = { overrideEligibility: !1 },
    a = (0, r.C)({
        kind: "user",
        id: "2025-05_feedback_survey_eligibility_override",
        label: "Feedback survey eligibility override",
        defaultConfig: i,
        treatments: [
            {
                id: 1,
                label: "Override feedback eligibility: always show surveys",
                config: { overrideEligibility: !0 },
            },
        ],
    });
function s(e) {
    let { location: t, autoTrackExposure: n = !0 } = e;
    return a.getCurrentConfig({ location: t }, { autoTrackExposure: n });
}
