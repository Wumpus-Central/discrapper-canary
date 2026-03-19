"use strict";
n.d(t, { P2: () => c, u5: () => u });
var r = n(600975),
    i = n(49463);
function s(e) {
    function t(t, n) {
        let r = !1,
            s = i.A.getUserExperimentDescriptor(n.definition.id),
            a = `location:${t.location} experiment_name:${n.definition.id}`;
        for (let n of (null != s && (a = `${a} revision:${s.revision}`), e))
            if (n.getCurrentConfig({ location: a }, { autoTrackExposure: t.autoTrackExposure ?? !0 }).inHoldout) {
                r = !0;
                break;
            }
        return r;
    }
    return {
        useHoldoutExperiment: function (e, n) {
            let r = t(n, e);
            return e.useExperiment(
                { location: n.location },
                { autoTrackExposure: n.autoTrackExposure ?? !0, disable: n.disable || r },
            );
        },
        getHoldoutExperiment: function (e, n) {
            let r = t(n, e);
            return e.getCurrentConfig(
                { location: n.location },
                { autoTrackExposure: n.autoTrackExposure ?? !0, disable: n.disable || r },
            );
        },
    };
}
let a = (0, r.C)({
        kind: "user",
        id: "2025-07_growth_holdout_h2",
        label: "Growth Holdout H2",
        defaultConfig: { inHoldout: !1 },
        treatments: [
            { id: 0, label: "In Holdout", config: { inHoldout: !0 } },
            { id: 1, label: "Treatment for comparison to holdout", config: { inHoldout: !1 } },
        ],
    }),
    { useHoldoutExperiment: o, getHoldoutExperiment: l } = s([
        a,
        (0, r.C)({
            kind: "user",
            id: "2025-07_access_holdout_h2",
            label: "Access Holdout H2",
            defaultConfig: { inHoldout: !1 },
            treatments: [
                { id: 0, label: "In Holdout", config: { inHoldout: !0 } },
                { id: 1, label: "Treatment for comparison to holdout", config: { inHoldout: !1 } },
            ],
        }),
    ]),
    { useHoldoutExperiment: u, getHoldoutExperiment: c } = s([
        a,
        (0, r.C)({
            kind: "user",
            id: "2025-07_experiences_holdout_h2",
            label: "Experiences Holdout H2",
            defaultConfig: { inHoldout: !1 },
            treatments: [
                { id: 0, label: "In Holdout", config: { inHoldout: !0 } },
                { id: 1, label: "Treatment for comparison to holdout", config: { inHoldout: !1 } },
            ],
        }),
    ]),
    { useHoldoutExperiment: d, getHoldoutExperiment: _ } = s([
        a,
        (0, r.C)({
            kind: "user",
            id: "2025-07_notifications_platform_holdout_h2",
            label: "NotificationsPlatform Holdout H2",
            defaultConfig: { inHoldout: !1 },
            treatments: [
                { id: 0, label: "In Holdout", config: { inHoldout: !0 } },
                { id: 1, label: "Treatment for comparison to holdout", config: { inHoldout: !1 } },
            ],
        }),
    ]);
