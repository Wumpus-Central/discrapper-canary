n.d(t, {
    RB: () => v,
    VH: () => y,
    Vi: () => j,
    Vu: () => C,
    q7: () => O,
});
var r = n(692547),
    i = n(497089),
    l = n(650473),
    a = n(389765),
    o = n(137492),
    s = n(387661),
    c = n(659953),
    u = n(319707),
    d = n(584914),
    f = n(962575),
    h = n(334702),
    p = n(333722),
    g = n(549931),
    b = n(178561),
    m = n(39863);
let y = {
        MISSED_MESSAGES: p,
        FRIEND_REQUEST_REMINDER: d,
        SCHEDULED_GUILD_EVENT: c,
        TOP_MESSAGES: h,
        NOTIFICATION_CENTER: o,
        UPDATE_PROFILE: n(130312),
        FIND_FRIENDS: a,
        ADD_FRIEND: a,
        FIRST_MESSAGE: b,
    },
    O = (e) => {
        switch (e.type) {
            case "lifecycle_item":
                switch (e.item_enum) {
                    case i.AM.ADD_FRIEND:
                        return "ADD_FRIEND";
                    case i.AM.FIND_FRIENDS:
                        return "FIND_FRIENDS";
                    case i.AM.FIRST_MESSAGE:
                        return "FIRST_MESSAGE";
                    case i.AM.UPDATE_PROFILE:
                        return "UPDATE_PROFILE";
                    default:
                        return "NOTIFICATION_CENTER";
                }
            case "missed_messages":
                return "MISSED_MESSAGES";
            case "friend_request_reminder":
                return "FRIEND_REQUEST_REMINDER";
            case "scheduled_guild_event_started":
                return "SCHEDULED_GUILD_EVENT";
            case "top_messages":
                return "TOP_MESSAGES";
            default:
                return "NOTIFICATION_CENTER";
        }
    },
    v = (e) => ("icHighlight" === e ? "TOP_MESSAGES" : "NOTIFICATION_CENTER"),
    j = (e) => {
        switch (e) {
            case i.DY.GO_LIVE_PUSH:
                return {
                    icon: m,
                    color: r.Z.colors.BACKGROUND_ACCENT,
                };
            case i.DY.FRIEND_REQUEST_ACCEPTED:
            case i.DY.GAME_FRIEND_REQUEST_ACCEPTED:
                return {
                    icon: s,
                    color: r.Z.colors.STATUS_POSITIVE_BACKGROUND,
                };
            case i.DY.FRIEND_REQUEST_PENDING:
            case i.DY.FRIEND_SUGGESTION_CREATED:
                return {
                    icon: u,
                    color: r.Z.colors.BACKGROUND_ACCENT,
                };
            case i.DY.DM_FRIEND_NUDGE:
                return {
                    icon: g,
                    color: r.Z.colors.BACKGROUND_ACCENT,
                };
            case i.O7.INCOMING_FRIEND_REQUESTS:
            case i.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED:
                return {
                    icon: u,
                    color: r.Z.colors.BACKGROUND_ACCENT,
                };
            case i.O7.INCOMING_GAME_FRIEND_REQUESTS:
            case i.O7.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED:
                return {
                    icon: f,
                    color: r.Z.colors.BACKGROUND_ACCENT,
                };
            default:
                return null;
        }
    },
    C = (e) => {
        switch (e.item_enum) {
            case i.AM.UPDATE_PROFILE:
                return l.Y9;
            case i.AM.ADD_FRIEND:
            case i.AM.FIND_FRIENDS:
                return l.AZ;
            case i.AM.FIRST_MESSAGE:
                return l.bj;
            default:
                return r.Z.unsafe_rawColors.BRAND_500.css;
        }
    };
