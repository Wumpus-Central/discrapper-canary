n.d(t, { $P: () => _, Ai: () => c, H8: () => d, Mm: () => o, VL: () => l, w5: () => s, xG: () => E });
var i,
    r,
    a = n(652215);
let s = 15,
    _ = 3,
    l = "1312632705086787756";
var o =
    (((i = {})[(i.MESSAGE = 0)] = "MESSAGE"),
    (i[(i.ACTIVITY = 2)] = "ACTIVITY"),
    (i[(i.CUSTOM_STATUS = 3)] = "CUSTOM_STATUS"),
    (i[(i.GUILD_EVENT = 5)] = "GUILD_EVENT"),
    (i[(i.RECOMMENDED_GUILDS = 6)] = "RECOMMENDED_GUILDS"),
    i);
function E(e) {
    switch (e.type) {
        case 0:
            if (e.data.channel_type === a.rbe.GUILD_ANNOUNCEMENT) return "announcement";
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
let d = new Set([0, 3]);
a.Auw.IMAGE, a.Auw.GIFV;
var c = (((r = {})[(r.DEFAULT = 0)] = "DEFAULT"), (r[(r.BOOKMARKS = 2)] = "BOOKMARKS"), r);
