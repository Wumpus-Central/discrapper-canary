n.d(t, {
    L: () => o,
    e: () => a
}),
    n(47120);
var i = n(626135),
    l = n(162461),
    r = n(206583),
    s = n(981631);
let a = function (e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        let { trackingEnabled: s } = (0, l.nP)('trackSampledContentEntryAnalytics:'.concat(e));
        return s ? i.default.track(e, ...n) : Promise.resolve();
    },
    o = (e, t) => {
        a(s.rMx.RANKING_ITEM_INTERACTED_MUST_BE_SAMPLED, {
            request_id: t.requestId,
            item_id: t.entry.id,
            surface_type: r.Kd.GUILD_MEMBER_LIST,
            channel_id: t.channelId,
            guild_id: t.guildId,
            interaction_type: e,
            destination_channel_id: t.destinationChannelId,
            destination_guild_id: t.destinationGuildId,
            rich_presence_name: t.richPresenceName
        });
    };
