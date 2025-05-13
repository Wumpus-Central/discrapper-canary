n.d(t, { T: () => s });
var r = n(818083),
    i = n(984134);
let a = { doGroupEligibilityCheck: !1 },
    o = (0, r.B)({
        kind: 'user',
        id: '2025-04_feedback_trigger_experiment',
        label: 'Feedback trigger logic changes',
        defaultConfig: a,
        treatments: [
            {
                id: 1,
                label: 'Do group eligibility check',
                config: { doGroupEligibilityCheck: !0 }
            }
        ]
    });
function s(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isInHoldout: r } = i.h.getCurrentConfig({ location: t }, { autoTrackExposure: n });
    return o.getCurrentConfig(
        { location: t },
        {
            disable: r,
            autoTrackExposure: n
        }
    );
}
