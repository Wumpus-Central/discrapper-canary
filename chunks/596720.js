"use strict";
n.d(t, { $P: () => s, Ai: () => c, H8: () => u, Mm: () => o, VL: () => a, w5: () => i, xG: () => l });
var r = n(652215);
let i = 15,
    s = 3,
    a = "1312632705086787756";
var o = (function (e) {
    return (
        (e[(e.MESSAGE = 0)] = "MESSAGE"),
        (e[(e.ACTIVITY = 2)] = "ACTIVITY"),
        (e[(e.CUSTOM_STATUS = 3)] = "CUSTOM_STATUS"),
        (e[(e.GUILD_EVENT = 5)] = "GUILD_EVENT"),
        (e[(e.RECOMMENDED_GUILDS = 6)] = "RECOMMENDED_GUILDS"),
        e
    );
})({});
function l(e) {
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
let u = new Set([0, 3]);
r.Auw.IMAGE, r.Auw.GIFV;
var c = (function (e) {
    return (e[(e.DEFAULT = 0)] = "DEFAULT"), (e[(e.BOOKMARKS = 2)] = "BOOKMARKS"), e;
})({});
