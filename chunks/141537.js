n.d(t, {
    cE: () => c,
    sM: () => l,
}),
    n(388685);
var r = n(818083);
function i(e) {
    function t(t) {
        let n = !1;
        for (let i of e) {
            var r;
            if (
                i.getCurrentConfig(
                    { location: t.location },
                    { autoTrackExposure: null == (r = t.autoTrackExposure) || r },
                ).inHoldout
            ) {
                n = !0;
                break;
            }
        }
        return n;
    }
    return {
        useHoldoutExperiment: function (e, n) {
            var r;
            let i = t(n);
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
            let i = t(n);
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
    { useHoldoutExperiment: a, getHoldoutExperiment: s } = i([
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
    { useHoldoutExperiment: l, getHoldoutExperiment: c } = i([
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
    { useHoldoutExperiment: u, getHoldoutExperiment: d } = i([
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
