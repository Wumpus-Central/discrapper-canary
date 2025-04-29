n.d(t, {
    L: () => l,
    e: () => s
}),
    n(388685);
var r = n(626135),
    i = n(162461),
    o = n(206583),
    a = n(981631);
let s = function (e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
        let { trackingEnabled: a } = (0, i.nP)('trackSampledContentEntryAnalytics:'.concat(e));
        return a ? r.default.track(e, ...n) : Promise.resolve();
    },
    l = (e, t) => {
        s(a.rMx.RANKING_ITEM_INTERACTED_MUST_BE_SAMPLED, {
            request_id: t.requestId,
            item_id: t.entry.id,
            surface_type: o.Kd.GUILD_MEMBER_LIST,
            channel_id: t.channelId,
            guild_id: t.guildId,
            interaction_type: e,
            destination_channel_id: t.destinationChannelId,
            destination_guild_id: t.destinationGuildId,
            rich_presence_name: t.richPresenceName
        });
    };
