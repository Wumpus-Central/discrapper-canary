n.d(t, { $P: () => l, Ai: () => E, H8: () => _, Mm: () => d, VL: () => o, w5: () => s, xG: () => c });
var i,
    a,
    r = n(652215);
let s = 15,
    l = 3,
    o = "1312632705086787756";
var d =
    (((i = {})[(i.MESSAGE = 0)] = "MESSAGE"),
    (i[(i.ACTIVITY = 2)] = "ACTIVITY"),
    (i[(i.CUSTOM_STATUS = 3)] = "CUSTOM_STATUS"),
    (i[(i.GUILD_EVENT = 5)] = "GUILD_EVENT"),
    (i[(i.RECOMMENDED_GUILDS = 6)] = "RECOMMENDED_GUILDS"),
    i);
function c(e) {
    switch (e.type) {
        case 0:
            if (e.data.channel_type === r.rbe.GUILD_ANNOUNCEMENT) return "announcement";
            if (e.data.message_context?.external_content_application_id != null) return "game_message";
            return "message";
        case 2:
            return "hotwheels_gaming_activity";
        case 3:
            return "hotwheels_custom_status";
        case 5:
            return "guild_event";
        case 6:
            return "recommended_guilds";
    }
}
let _ = new Set([0, 3]);
r.Auw.IMAGE, r.Auw.GIFV;
var E = (((a = {})[(a.DEFAULT = 0)] = "DEFAULT"), (a[(a.BOOKMARKS = 2)] = "BOOKMARKS"), a);
