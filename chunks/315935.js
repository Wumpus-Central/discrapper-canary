"use strict";
n.r(t), n.d(t, { default: () => s });
var r = n(383501),
    i = n(652215);
function s(e, t) {
    let n;
    switch (e) {
        case i.HAw.CHANNEL_OPENED_CLICKSTREAM:
            return (
                (n = t),
                { timestamp: new Date(), rtc_state: r.A.getState(), channelId: n.channelId, channelType: n.channelType }
            );
        case i.HAw.GUILD_VIEWED_CLICKSTREAM:
            return (n = t), { timestamp: new Date(), rtc_state: r.A.getState(), guildId: n.guildId };
        case i.HAw.FRIENDS_LIST_VIEWED_CLICKSTREAM:
            return (
                (n = t),
                {
                    timestamp: new Date(),
                    rtc_state: r.A.getState(),
                    tab_opened: n.tab_opened,
                    num_friends: n.num_friends,
                    now_playing_visible: n.now_playing_visible,
                    now_playing_num_cards: n.now_playing_num_cards,
                }
            );
        case i.HAw.CHANNEL_LATEST_MESSAGES_LOADED_CLICKSTREAM:
            return (
                (n = t),
                {
                    timestamp: new Date(),
                    rtc_state: r.A.getState(),
                    load_duration_ms: n.load_duration_ms,
                    were_messages_cached: n.were_messages_cached,
                    is_first_load: n.is_first_load,
                }
            );
        default:
            throw Error(`getClickstreamTrackEvent: Unknown event: ${e}`);
    }
}
