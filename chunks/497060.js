r.d(n, {
    r: function () {
        return i;
    }
});
let i = (0, r(818083).B)({
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
});
