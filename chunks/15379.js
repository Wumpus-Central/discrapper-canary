n.r(t), n.d(t, { default: () => o }), n(411104);
var i = n(592125),
    r = n(19780),
    a = n(981631),
    s = n(176505);
function o(e, t) {
    let n;
    switch (e) {
        case a.rMx.CHANNEL_OPENED_CLICKSTREAM:
            var o, l;
            let u = (n = t).channelId;
            switch (u) {
                case s.oC.CHANNEL_BROWSER:
                case s.oC.GUILD_HOME:
                case s.oC.GUILD_SHOP:
                case s.oC.MEMBER_APPLICATIONS:
                case s.oC.ROLE_SUBSCRIPTIONS:
                case s.oC.CUSTOMIZE_COMMUNITY:
                case s.oC.MEMBER_SAFETY:
                case s.oC.GUILD_ONBOARDING:
                case s.oC.GUILD_BOOSTS:
                    return;
            }
            let c = null !== (l = null === (o = i.Z.getChannel(u)) || void 0 === o ? void 0 : o.type) && void 0 !== l ? l : a.d4z.UNKNOWN;
            return {
                timestamp: new Date(),
                rtc_state: r.Z.getState(),
                channelId: u,
                channelType: c
            };
        case a.rMx.GUILD_VIEWED_CLICKSTREAM:
            let d = (n = t).guildId;
            return {
                timestamp: new Date(),
                rtc_state: r.Z.getState(),
                guildId: d
            };
        case a.rMx.FRIENDS_LIST_VIEWED_CLICKSTREAM:
            return (
                (n = t),
                {
                    timestamp: new Date(),
                    rtc_state: r.Z.getState(),
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
