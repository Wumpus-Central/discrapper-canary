n.d(t, {
    k6: () => s,
    kH: () => o
});
var i = n(818083);
let r = (0, i.B)({
        kind: 'user',
        id: '2025-01_friend_requests_alerts',
        label: 'Friend Request Setting Defaults',
        defaultConfig: {
            enabled: !1,
            bucket: 0
        },
        treatments: [
            {
                id: 1,
                label: 'warning',
                config: {
                    enabled: !0,
                    bucket: 1
                }
            },
            {
                id: 2,
                label: 'defaults',
                config: {
                    enabled: !0,
                    bucket: 2
                }
            }
        ]
    }),
    a = (0, i.B)({
        kind: 'user',
        id: '2025-01_friend_requests_alerts_new_users',
        label: 'Friend Request Setting Defaults',
        defaultConfig: {
            enabled: !1,
            bucket: 0
        },
        treatments: [
            {
                id: 1,
                label: 'warning',
                config: {
                    enabled: !0,
                    bucket: 1
                }
            },
            {
                id: 2,
                label: 'defaults',
                config: {
                    enabled: !0,
                    bucket: 2
                }
            }
        ]
    }),
    s = (e) => 2 === r.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }).bucket || 2 === a.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }).bucket,
    o = (e) => {
        let t = r.useExperiment({ location: e }, { autoTrackExposure: !1 }).bucket,
            n = a.useExperiment({ location: e }, { autoTrackExposure: !1 }).bucket;
        return 2 === t || 2 === n;
    };
