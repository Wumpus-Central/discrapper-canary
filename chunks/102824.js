n.d(t, { j: () => a });
var r = n(818083);
let i = { overrideEligibility: !1 },
    o = (0, r.B)({
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
function a(e) {
    let { location: t, autoTrackExposure: n = !0 } = e;
    return o.getCurrentConfig({ location: t }, { autoTrackExposure: n });
}
