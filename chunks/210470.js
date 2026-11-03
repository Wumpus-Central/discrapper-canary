function t(e) {
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
    let l = {};
    e.enabled !== n.enabled && (l.enabled = n.enabled);
    let t = e.channels
        .filter((e) => i(e, n))
        .map((e) => ({ channel_id: e.channelId, included: n.includedChannelIds.has(e.channelId) }));
    return (t.length > 0 && (l.channels = t), l);
}
function u(e) {
    return e.channels.filter((e) => e.eligible).map((e) => e.channelId);
}
l.d(n, { Dq: () => u, O9: () => t, Pg: () => r, wX: () => a });
