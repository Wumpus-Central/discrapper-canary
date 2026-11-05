function l(e, n) {
    return e.eligible && e.included !== n.includedChannelIds.has(e.channelId);
}
t.d(
    n,
    {},
    {
        Dq: function (e) {
            return e.channels.filter((e) => e.eligible).map((e) => e.channelId);
        },
        O9: function (e) {
            return {
                enabled: e.enabled,
                includedChannelIds: new Set(e.channels.filter((e) => e.included).map((e) => e.channelId)),
            };
        },
        Pg: function (e, n) {
            let t = {};
            e.enabled !== n.enabled && (t.enabled = n.enabled);
            let i = e.channels
                .filter((e) => l(e, n))
                .map((e) => ({ channel_id: e.channelId, included: n.includedChannelIds.has(e.channelId) }));
            return (i.length > 0 && (t.channels = i), t);
        },
        wX: function (e, n) {
            return e.enabled !== n.enabled || e.channels.some((e) => l(e, n));
        },
    },
);
