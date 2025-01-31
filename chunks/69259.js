t.d(l, {
    L: () => r,
    e: () => s
}),
    t(47120);
var i = t(626135),
    n = t(162461),
    L = t(206583),
    d = t(981631);
let s = function (e) {
        for (var l = arguments.length, t = Array(l > 1 ? l - 1 : 0), L = 1; L < l; L++) t[L - 1] = arguments[L];
        let { trackingEnabled: d } = (0, n.nP)('trackSampledContentEntryAnalytics:'.concat(e));
        return d ? i.default.track(e, ...t) : Promise.resolve();
    },
    r = (e, l) => {
        s(d.rMx.RANKING_ITEM_INTERACTED_MUST_BE_SAMPLED, {
            request_id: l.requestId,
            item_id: l.entry.id,
            surface_type: L.Kd.GUILD_MEMBER_LIST,
            channel_id: l.channelId,
            guild_id: l.guildId,
            interaction_type: e,
            destination_channel_id: l.destinationChannelId,
            destination_guild_id: l.destinationGuildId,
            rich_presence_name: l.richPresenceName
        });
    };
