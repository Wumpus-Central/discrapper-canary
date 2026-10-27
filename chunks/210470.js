function l(e) {
    return {
        enabled: e.enabled,
        includedChannelIds: new Set(e.channels.filter((e) => e.included).map((e) => e.channelId)),
    };
}
function i(e, n) {
    return e.eligible && e.included !== n.includedChannelIds.has(e.channelId);
}
function a(e, n) {
    return e.enabled !== n.enabled || e.channels.some((e) => i(e, n));
}
function r(e, n) {
    let t = {};
    e.enabled !== n.enabled && (t.enabled = n.enabled);
    let l = e.channels
        .filter((e) => i(e, n))
        .map((e) => ({ channel_id: e.channelId, included: n.includedChannelIds.has(e.channelId) }));
    return (l.length > 0 && (t.channels = l), t);
}
function u(e) {
    return e.channels.filter((e) => e.eligible).map((e) => e.channelId);
}
t.d(n, { Dq: () => u, O9: () => l, Pg: () => r, wX: () => a });
