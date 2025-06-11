n.d(t, {
    L: () => a,
    n: () => i
});
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2025-06_gateway_connect_skipped',
    label: 'Gateway Connect Skipped Logging',
    defaultConfig: {
        logSkipped: !1,
        logPostSkipped: !1
    },
    treatments: [
        {
            id: 1,
            label: 'Fully Enabled',
            config: {
                logSkipped: !0,
                logPostSkipped: !0
            }
        },
        {
            id: 2,
            label: "Don't log post-skipped",
            config: {
                logSkipped: !0,
                logPostSkipped: !1
            }
        }
    ]
});
function i() {
    return r.getCurrentConfig({ location: 'shouldLogConnectSkipped' }).logSkipped;
}
function a() {
    return r.getCurrentConfig({ location: 'shouldLogPostConnectSkipped' }).logPostSkipped;
}
