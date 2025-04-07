n.r(t), n.d(t, { default: () => s }), n(415506);
var r = n(592125),
    i = n(19780),
    o = n(981631),
    a = n(176505);
function s(e, t) {
    let n;
    switch (e) {
        case o.rMx.CHANNEL_OPENED_CLICKSTREAM:
            var s, l;
            let c = (n = t).channelId;
            switch (c) {
                case a.oC.CHANNEL_BROWSER:
                case a.oC.GUILD_HOME:
                case a.oC.GUILD_SHOP:
                case a.oC.MEMBER_APPLICATIONS:
                case a.oC.ROLE_SUBSCRIPTIONS:
                case a.oC.CUSTOMIZE_COMMUNITY:
                case a.oC.MEMBER_SAFETY:
                case a.oC.GUILD_ONBOARDING:
                case a.oC.GUILD_BOOSTS:
                    return;
            }
            let u = null != (l = null == (s = r.Z.getChannel(c)) ? void 0 : s.type) ? l : o.d4z.UNKNOWN;
            return {
                timestamp: new Date(),
                rtc_state: i.ZP.getState(),
                channelId: c,
                channelType: u
            };
        case o.rMx.GUILD_VIEWED_CLICKSTREAM:
            let d = (n = t).guildId;
            return {
                timestamp: new Date(),
                rtc_state: i.ZP.getState(),
                guildId: d
            };
        case o.rMx.FRIENDS_LIST_VIEWED_CLICKSTREAM:
            return (
                (n = t),
                {
                    timestamp: new Date(),
                    rtc_state: i.ZP.getState(),
                    tab_opened: n.tab_opened,
                    num_friends: n.num_friends,
                    now_playing_visible: n.now_playing_visible,
                    now_playing_num_cards: n.now_playing_num_cards
                }
            );
        default:
            throw Error('getClickstreamTrackEvent: Unknown event: '.concat(e));
    }
}
