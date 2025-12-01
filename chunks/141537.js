n.d(t, {
    Z6: () => l,
    cE: () => u,
    sM: () => c,
}),
    n(388685);
var r = n(818083),
    i = n(353926);
function a(e) {
    function t(t, n) {
        let r = !1,
            a = i.Z.getUserExperimentDescriptor(n.definition.id),
            o = "location:".concat(t.location, " experiment_name:").concat(n.definition.id);
        for (let n of (null != a && (o = "".concat(o, " revision:").concat(a.revision)), e)) {
            var s;
            if (
                n.getCurrentConfig({ location: o }, { autoTrackExposure: null == (s = t.autoTrackExposure) || s })
                    .inHoldout
            ) {
                r = !0;
                break;
            }
        }
        return r;
    }
    return {
        useHoldoutExperiment: function (e, n) {
            var r;
            let i = t(n, e);
            return e.useExperiment(
                { location: n.location },
                {
                    autoTrackExposure: null == (r = n.autoTrackExposure) || r,
                    disable: n.disable || i,
                },
            );
        },
        getHoldoutExperiment: function (e, n) {
            var r;
            let i = t(n, e);
            return e.getCurrentConfig(
                { location: n.location },
                {
                    autoTrackExposure: null == (r = n.autoTrackExposure) || r,
                    disable: n.disable || i,
                },
            );
        },
    };
}
let o = (0, r.B)({
        kind: "user",
        id: "2025-07_growth_holdout_h2",
        label: "Growth Holdout H2",
        defaultConfig: { inHoldout: !1 },
        treatments: [
            {
                id: 0,
                label: "In Holdout",
                config: { inHoldout: !0 },
            },
            {
                id: 1,
                label: "Treatment for comparison to holdout",
                config: { inHoldout: !1 },
            },
        ],
    }),
    { useHoldoutExperiment: s, getHoldoutExperiment: l } = a([
        o,
        (0, r.B)({
            kind: "user",
            id: "2025-07_access_holdout_h2",
            label: "Access Holdout H2",
            defaultConfig: { inHoldout: !1 },
            treatments: [
                {
                    id: 0,
                    label: "In Holdout",
                    config: { inHoldout: !0 },
                },
                {
                    id: 1,
                    label: "Treatment for comparison to holdout",
                    config: { inHoldout: !1 },
                },
            ],
        }),
    ]),
    { useHoldoutExperiment: c, getHoldoutExperiment: u } = a([
        o,
        (0, r.B)({
            kind: "user",
            id: "2025-07_experiences_holdout_h2",
            label: "Experiences Holdout H2",
            defaultConfig: { inHoldout: !1 },
            treatments: [
                {
                    id: 0,
                    label: "In Holdout",
                    config: { inHoldout: !0 },
                },
                {
                    id: 1,
                    label: "Treatment for comparison to holdout",
                    config: { inHoldout: !1 },
                },
            ],
        }),
    ]),
    { useHoldoutExperiment: d, getHoldoutExperiment: f } = a([
        o,
        (0, r.B)({
            kind: "user",
            id: "2025-07_notifications_platform_holdout_h2",
            label: "NotificationsPlatform Holdout H2",
            defaultConfig: { inHoldout: !1 },
            treatments: [
                {
                    id: 0,
                    label: "In Holdout",
                    config: { inHoldout: !0 },
                },
                {
                    id: 1,
                    label: "Treatment for comparison to holdout",
                    config: { inHoldout: !1 },
                },
            ],
        }),
    ]);
