r.r(n),
    r.d(n, {
        default: function () {
            return o;
        }
    });
var i = r(411104);
var a = r(981631);
function o(e, n) {
    let r;
    let i = new Date();
    switch (e) {
        case a.rMx.CHANNEL_OPENED_CLICKSTREAM:
            return {
                time_minus: (r = n).map((e) => i.getTime() - e.timestamp.getTime()),
                channel_ids: r.map((e) => e.channelId),
                channel_types: r.map((e) => e.channelType),
                rtc_states: r.map((e) => e.rtc_state)
            };
        case a.rMx.GUILD_VIEWED_CLICKSTREAM:
            return {
                time_minus: (r = n).map((e) => i.getTime() - e.timestamp.getTime()),
                guild_ids: r.map((e) => e.guildId),
                rtc_states: r.map((e) => e.rtc_state)
            };
        case a.rMx.FRIENDS_LIST_VIEWED_CLICKSTREAM:
            return {
                time_minus: (r = n).map((e) => i.getTime() - e.timestamp.getTime()),
                rtc_states: r.map((e) => e.rtc_state),
                tab_opened: r.map((e) => e.tab_opened),
                num_friends: r.map((e) => e.num_friends),
                now_playing_visible: r.map((e) => e.now_playing_visible),
                now_playing_num_cards: r.map((e) => e.now_playing_num_cards)
            };
        default:
            throw Error('getClicksteamDrainEvent: Unknown event: '.concat(e));
    }
}
