n.d(t, { $: () => r });
let i = (0, n(945810).mj)({
    name: "2026-02-client-heartbeat-skipped",
    kind: "user",
    defaultConfig: { logHeartbeatSkipped: !1 },
    variations: { 1: { logHeartbeatSkipped: !0 } },
});
function r() {
    return i.getConfig({ location: "shouldLogClientHeartbeatSkipped" }).logHeartbeatSkipped;
}
