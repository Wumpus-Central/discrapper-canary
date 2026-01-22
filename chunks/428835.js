n.d(t, {
    Dr: () => o,
    Kd: () => l,
    P2: () => u,
    u5: () => c,
}),
    n(896048);
var r = n(600975),
    i = n(49463);
function a(e) {
    function t(t, n) {
        let r = !1,
            a = i.A.getUserExperimentDescriptor(n.definition.id),
            s = "location:".concat(t.location, " experiment_name:").concat(n.definition.id);
        for (let n of (null != a && (s = "".concat(s, " revision:").concat(a.revision)), e)) {
            var o;
            if (
                n.getCurrentConfig({ location: s }, { autoTrackExposure: null == (o = t.autoTrackExposure) || o })
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
let s = (0, r.C)({
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
    { useHoldoutExperiment: o, getHoldoutExperiment: l } = a([
        s,
        (0, r.C)({
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
        s,
        (0, r.C)({
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
        s,
        (0, r.C)({
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
