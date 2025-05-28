n.d(t, { j: () => o });
var r = n(818083);
let i = { overrideEligibility: !1 },
    a = (0, r.B)({
        kind: 'user',
        id: '2025-05_feedback_survey_eligibility_override',
        label: 'Feedback survey eligibility override',
        defaultConfig: i,
        treatments: [
            {
                id: 1,
                label: 'Override feedback eligibility: always show surveys',
                config: { overrideEligibility: !0 }
            }
        ]
    });
function o(e) {
    let { location: t, autoTrackExposure: n = !0 } = e;
    return a.getCurrentConfig({ location: t }, { autoTrackExposure: n });
}
