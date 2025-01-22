r.d(n, {
    k6: function () {
        return s;
    },
    kH: function () {
        return l;
    }
});
var i = r(818083);
let a = (0, i.B)({
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
    o = (0, i.B)({
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
    l = (e) => {
        let n = a.useExperiment({ location: e }, { autoTrackExposure: !1 }).bucket,
            r = o.useExperiment({ location: e }, { autoTrackExposure: !1 }).bucket;
        return 2 === n || 2 === r;
    };
