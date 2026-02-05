"use strict";
n.r(t), n.d(t, { default: () => o });
var r = n(734057),
    i = n(383501),
    a = n(652215),
    s = n(746080);
function o(e, t) {
    let n;
    switch (e) {
        case a.HAw.CHANNEL_OPENED_CLICKSTREAM:
            let o = (n = t).channelId;
            switch (o) {
                case s.VV.CHANNEL_BROWSER:
                case s.VV.GUILD_HOME:
                case s.VV.GUILD_SHOP:
                case s.VV.GAME_SHOP:
                case s.VV.MEMBER_APPLICATIONS:
                case s.VV.ROLE_SUBSCRIPTIONS:
                case s.VV.CUSTOMIZE_COMMUNITY:
                case s.VV.MEMBER_SAFETY:
                case s.VV.GUILD_ONBOARDING:
                case s.VV.GUILD_BOOSTS:
                    return;
            }
            let l = r.A.getChannel(o)?.type ?? a.rbe.UNKNOWN;
            return { timestamp: new Date(), rtc_state: i.A.getState(), channelId: o, channelType: l };
        case a.HAw.GUILD_VIEWED_CLICKSTREAM:
            let u = (n = t).guildId;
            return { timestamp: new Date(), rtc_state: i.A.getState(), guildId: u };
        case a.HAw.FRIENDS_LIST_VIEWED_CLICKSTREAM:
            return (
                (n = t),
                {
                    timestamp: new Date(),
                    rtc_state: i.A.getState(),
                    tab_opened: n.tab_opened,
                    num_friends: n.num_friends,
                    now_playing_visible: n.now_playing_visible,
                    now_playing_num_cards: n.now_playing_num_cards,
                }
            );
        case a.HAw.CHANNEL_LATEST_MESSAGES_LOADED_CLICKSTREAM:
            return (
                (n = t),
                {
                    timestamp: new Date(),
                    rtc_state: i.A.getState(),
                    load_duration_ms: n.load_duration_ms,
                    were_messages_cached: n.were_messages_cached,
                    is_first_load: n.is_first_load,
                }
            );
        default:
            throw Error(`getClickstreamTrackEvent: Unknown event: ${e}`);
    }
}
