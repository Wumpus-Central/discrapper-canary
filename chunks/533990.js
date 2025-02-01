n.d(t, { Z: () => i });
let i = (0, n(818083).B)({
    kind: 'user',
    id: '2024-08_reverse_trial',
    label: 'Reverse Trials',
    defaultConfig: {
        enabled: !1,
        isFollowup: !1,
        inExperiment: !1
    },
    treatments: [
        {
            id: 0,
            label: 'Users receives no trial.',
            config: {
                enabled: !1,
                isFollowup: !1,
                inExperiment: !0
            }
        },
        {
            id: 1,
            label: 'Users recieve 2 week trial.',
            config: {
                enabled: !0,
                isFollowup: !1,
                inExperiment: !0
            }
        },
        {
            id: 2,
            label: 'User recieves 1 week trial and 1 week followup trial',
            config: {
                enabled: !0,
                isFollowup: !0,
                inExperiment: !0
            }
        },
        {
            id: 98,
            label: 'Users recieve 2 week trial.',
            config: {
                enabled: !0,
                isFollowup: !1,
                inExperiment: !0
            }
        },
        {
            id: 99,
            label: 'User recieves 1 week trial and 1 week followup trial',
            config: {
                enabled: !0,
                isFollowup: !0,
                inExperiment: !0
            }
        }
    ]
});
