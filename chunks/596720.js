var a,
    s,
    r = n(652215),
    _ =
        221552 == n.j
            ? (((a = {})[(a.MESSAGE = 0)] = "MESSAGE"),
              (a[(a.ACTIVITY = 2)] = "ACTIVITY"),
              (a[(a.CUSTOM_STATUS = 3)] = "CUSTOM_STATUS"),
              (a[(a.GUILD_EVENT = 5)] = "GUILD_EVENT"),
              (a[(a.RECOMMENDED_GUILDS = 6)] = "RECOMMENDED_GUILDS"),
              (a[(a.DISCOVER_ITEM = 100)] = "DISCOVER_ITEM"),
              a)
            : null;
let u = new Set([0, 3, 100]);
(r.Auw.IMAGE, r.Auw.GIFV);
var E = 221552 == n.j ? (((s = {})[(s.DEFAULT = 0)] = "DEFAULT"), (s[(s.BOOKMARKS = 2)] = "BOOKMARKS"), s) : null;
n.d(
    t,
    {},
    {
        Ai: E,
        H8: u,
        Mm: _,
        VL: "1312632705086787756",
        xG: function (e) {
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
                case 100:
                    return "discover_item";
            }
        },
    },
);
