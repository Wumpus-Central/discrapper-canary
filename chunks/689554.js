n(321073);
var i = n(129230),
    r = n(435713),
    a = n(596720),
    s = n(652215);
function l(e) {
    switch (e.type) {
        case a.Mm.MESSAGE:
            if (e.data.channel_type === s.rbe.GUILD_ANNOUNCEMENT) return "announcement";
            return "message";
        case a.Mm.ACTIVITY:
            return "hotwheels_gaming_activity";
        case a.Mm.CUSTOM_STATUS:
            return "hotwheels_custom_status";
        case a.Mm.GUILD_EVENT:
            return "guild_event";
        case a.Mm.RECOMMENDED_GUILDS:
            return "recommended_guilds";
        case a.Mm.DISCOVER_ITEM:
            return "discover_item";
    }
}
n.d(
    t,
    {},
    {
        h: function (e) {
            let t = [],
                n = [],
                a = [],
                o = [];
            (e.unreadFeedItems.forEach((e) => {
                let n = (0, r.v)(e);
                null != n && (t.push(n), a.push(l(e)));
            }),
                e.readFeedItems.forEach((e) => {
                    let t = (0, r.v)(e);
                    null != t && (n.push(t), o.push(l(e)));
                }),
                i.default.track(s.HAw.FEED_LOADED, {
                    ...e.newTrackingProps,
                    home_session_id: e.homeSessionId,
                    tab_badged: e.hasNewContent,
                    unread_feed_item_ids: t,
                    read_feed_item_ids: n,
                    unread_feed_item_types: a,
                    read_feed_item_types: o,
                }));
        },
    },
);
