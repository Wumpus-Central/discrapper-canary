r.r(n),
    r.d(n, {
        default: function () {
            return u;
        }
    });
var i = r(411104);
var a = r(592125),
    o = r(19780),
    s = r(981631),
    l = r(176505);
function u(e, n) {
    let r;
    switch (e) {
        case s.rMx.CHANNEL_OPENED_CLICKSTREAM:
            var i, u;
            let c = (r = n).channelId;
            switch (c) {
                case l.oC.CHANNEL_BROWSER:
                case l.oC.GUILD_HOME:
                case l.oC.GUILD_SHOP:
                case l.oC.MEMBER_APPLICATIONS:
                case l.oC.ROLE_SUBSCRIPTIONS:
                case l.oC.CUSTOMIZE_COMMUNITY:
                case l.oC.MEMBER_SAFETY:
                case l.oC.GUILD_ONBOARDING:
                    return;
            }
            let d = null !== (u = null === (i = a.Z.getChannel(c)) || void 0 === i ? void 0 : i.type) && void 0 !== u ? u : s.d4z.UNKNOWN;
            return {
                timestamp: new Date(),
                rtc_state: o.Z.getState(),
                channelId: c,
                channelType: d
            };
        case s.rMx.GUILD_VIEWED_CLICKSTREAM:
            let f = (r = n).guildId;
            return {
                timestamp: new Date(),
                rtc_state: o.Z.getState(),
                guildId: f
            };
        case s.rMx.FRIENDS_LIST_VIEWED_CLICKSTREAM:
            return (
                (r = n),
                {
                    timestamp: new Date(),
                    rtc_state: o.Z.getState(),
                    tab_opened: r.tab_opened,
                    num_friends: r.num_friends,
                    now_playing_visible: r.now_playing_visible,
                    now_playing_num_cards: r.now_playing_num_cards
                }
            );
        default:
            throw Error('getClickstreamTrackEvent: Unknown event: '.concat(e));
    }
}
