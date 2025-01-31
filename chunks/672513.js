n.r(t), n.d(t, { default: () => r }), n(411104);
var i = n(981631);
function r(e, t) {
    let n;
    let r = new Date();
    switch (e) {
        case i.rMx.CHANNEL_OPENED_CLICKSTREAM:
            return {
                time_minus: (n = t).map((e) => r.getTime() - e.timestamp.getTime()),
                channel_ids: n.map((e) => e.channelId),
                channel_types: n.map((e) => e.channelType),
                rtc_states: n.map((e) => e.rtc_state)
            };
        case i.rMx.GUILD_VIEWED_CLICKSTREAM:
            return {
                time_minus: (n = t).map((e) => r.getTime() - e.timestamp.getTime()),
                guild_ids: n.map((e) => e.guildId),
                rtc_states: n.map((e) => e.rtc_state)
            };
        case i.rMx.FRIENDS_LIST_VIEWED_CLICKSTREAM:
            return {
                time_minus: (n = t).map((e) => r.getTime() - e.timestamp.getTime()),
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
