"use strict";
n.d(t, { $P: () => o, Ai: () => _, H8: () => d, Mm: () => u, VL: () => l, w5: () => a, xG: () => c });
var r,
    i,
    s = n(652215);
let a = 15,
    o = 3,
    l = "1312632705086787756";
var u =
    (((r = {})[(r.MESSAGE = 0)] = "MESSAGE"),
    (r[(r.ACTIVITY = 2)] = "ACTIVITY"),
    (r[(r.CUSTOM_STATUS = 3)] = "CUSTOM_STATUS"),
    (r[(r.GUILD_EVENT = 5)] = "GUILD_EVENT"),
    (r[(r.RECOMMENDED_GUILDS = 6)] = "RECOMMENDED_GUILDS"),
    r);
function c(e) {
    switch (e.type) {
        case 0:
            if (e.data.channel_type === s.rbe.GUILD_ANNOUNCEMENT) return "announcement";
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
s.Auw.IMAGE, s.Auw.GIFV;
var _ = (((i = {})[(i.DEFAULT = 0)] = "DEFAULT"), (i[(i.BOOKMARKS = 2)] = "BOOKMARKS"), i);
