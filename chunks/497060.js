n.d(t, {
    k6: () => s,
    kH: () => c,
    pB: () => l
});
var r = n(818083),
    i = n(128064);
let a = (0, r.B)({
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
    o = (0, r.B)({
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
    s = (e) => 2 === a.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }).bucket || 2 === o.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }).bucket,
    l = (e) => 1 === a.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }).bucket || 1 === o.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }).bucket || (0, i.c_)(e),
    c = (e) => {
        let t = a.useExperiment({ location: e }, { autoTrackExposure: !1 }).bucket,
            n = o.useExperiment({ location: e }, { autoTrackExposure: !1 }).bucket;
        return 2 === t || 2 === n;
    };
