n.d(t, { Z: () => i });
let l = (0, n(818083).B)({
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
    i = function () {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return l.useExperiment({ location: 'useIsEligibleForActivityReactReply' }, { autoTrackExposure: e }).enableActivityReactReply;
    };
