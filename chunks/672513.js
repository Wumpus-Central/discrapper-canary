n.r(t), n.d(t, { default: () => i }), n(411104);
var r = n(981631);
function i(e, t) {
    let n,
        i = new Date();
    switch (e) {
        case r.rMx.CHANNEL_OPENED_CLICKSTREAM:
            return {
                time_minus: (n = t).map((e) => i.getTime() - e.timestamp.getTime()),
                channel_ids: n.map((e) => e.channelId),
                channel_types: n.map((e) => e.channelType),
                rtc_states: n.map((e) => e.rtc_state)
            };
        case r.rMx.GUILD_VIEWED_CLICKSTREAM:
            return {
                time_minus: (n = t).map((e) => i.getTime() - e.timestamp.getTime()),
                guild_ids: n.map((e) => e.guildId),
                rtc_states: n.map((e) => e.rtc_state)
            };
        case r.rMx.FRIENDS_LIST_VIEWED_CLICKSTREAM:
            return {
                time_minus: (n = t).map((e) => i.getTime() - e.timestamp.getTime()),
                rtc_states: n.map((e) => e.rtc_state),
                tab_opened: n.map((e) => e.tab_opened),
                num_friends: n.map((e) => e.num_friends),
                now_playing_visible: n.map((e) => e.now_playing_visible),
                now_playing_num_cards: n.map((e) => e.now_playing_num_cards)
            };
        default:
            throw Error('getClicksteamDrainEvent: Unknown event: '.concat(e));
    }
}
