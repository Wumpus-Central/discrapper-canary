n.d(t, { r: () => r });
let i = (0, n(600975).C)({
    kind: "user",
    id: "2025-07_user_profile_holdout_h2",
    label: "User Profile Holdout H2 Experiment",
    defaultConfig: { isInHoldout: !1 },
    treatments: [{ id: 1, label: "Is in holdout", config: { isInHoldout: !0 } }],
});
function r(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isInHoldout: r } = i.useExperiment({ location: t }, { autoTrackExposure: n });
    return r;
}
