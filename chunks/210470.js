function t(e, n) {
    return e.eligible && e.included !== n.includedChannelIds.has(e.channelId);
}
l.d(
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
            let l = {};
            e.enabled !== n.enabled && (l.enabled = n.enabled);
            let i = e.channels
                .filter((e) => t(e, n))
                .map((e) => ({ channel_id: e.channelId, included: n.includedChannelIds.has(e.channelId) }));
            return (i.length > 0 && (l.channels = i), l);
        },
        wX: function (e, n) {
            return e.enabled !== n.enabled || e.channels.some((e) => t(e, n));
        },
    },
);
