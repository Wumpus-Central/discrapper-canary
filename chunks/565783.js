n.d(t, {
    $: () => i,
});
let r = (0, n(600975).C)({
    kind: "user",
    id: "2025-06_client_heartbeat_skipped",
    label: "Client Heartbeat Skipped Tracking",
    defaultConfig: {
        logHeartbeatSkipped: !1,
    },
    treatments: [
        {
            id: 1,
            label: "Logging enabled",
            config: {
                logHeartbeatSkipped: !0,
            },
        },
    ],
});

function i() {
    return r.getCurrentConfig({
        location: "shouldLogClientHeartbeatSkipped",
    }).logHeartbeatSkipped;
}
