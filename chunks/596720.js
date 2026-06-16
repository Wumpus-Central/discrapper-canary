"use strict";
n.d(t, { $P: () => o, Ai: () => _, H8: () => d, Mm: () => u, VL: () => l, w5: () => a, xG: () => c });
var i,
    r,
    s = n(652215);
let a = 15,
    o = 3,
    l = "1312632705086787756";
var u =
    (((i = {})[(i.MESSAGE = 0)] = "MESSAGE"),
    (i[(i.ACTIVITY = 2)] = "ACTIVITY"),
    (i[(i.CUSTOM_STATUS = 3)] = "CUSTOM_STATUS"),
    (i[(i.GUILD_EVENT = 5)] = "GUILD_EVENT"),
    (i[(i.RECOMMENDED_GUILDS = 6)] = "RECOMMENDED_GUILDS"),
    i);
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
var _ = (((r = {})[(r.DEFAULT = 0)] = "DEFAULT"), (r[(r.BOOKMARKS = 2)] = "BOOKMARKS"), r);
