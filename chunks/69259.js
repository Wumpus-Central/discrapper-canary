n.d(t, {
    L: () => a,
    e: () => s
}),
    n(47120);
var r = n(626135),
    i = n(162461),
    o = n(206583),
    l = n(981631);
let s = function (e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
        let { trackingEnabled: l } = (0, i.nP)('trackSampledContentEntryAnalytics:'.concat(e));
        return l ? r.default.track(e, ...n) : Promise.resolve();
    },
    a = (e, t) => {
        s(l.rMx.RANKING_ITEM_INTERACTED_MUST_BE_SAMPLED, {
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
