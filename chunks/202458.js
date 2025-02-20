n.d(t, { Z: () => l });
let r = (0, n(818083).B)({
        kind: 'user',
        id: '2024-02_activity_react_reply',
        label: 'Activity React Reply',
        defaultConfig: { enableActivityReactReply: !1 },
        treatments: [
            {
                id: 1,
                label: 'Enable Activity React / Reply Buttons',
                config: { enableActivityReactReply: !0 }
            }
        ]
    }),
    l = function () {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return r.useExperiment({ location: 'useIsEligibleForActivityReactReply' }, { autoTrackExposure: e }).enableActivityReactReply;
    };
