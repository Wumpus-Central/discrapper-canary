var s,
    a,
    r = n(652215),
    _ = /^(221552|614256)$/.test(n.j)
        ? (((s = {})[(s.MESSAGE = 0)] = "MESSAGE"),
          (s[(s.ACTIVITY = 2)] = "ACTIVITY"),
          (s[(s.CUSTOM_STATUS = 3)] = "CUSTOM_STATUS"),
          (s[(s.GUILD_EVENT = 5)] = "GUILD_EVENT"),
          (s[(s.RECOMMENDED_GUILDS = 6)] = "RECOMMENDED_GUILDS"),
          (s[(s.DISCOVER_ITEM = 100)] = "DISCOVER_ITEM"),
          s)
        : null;
let u = new Set([0, 3, 100]);
(r.Auw.IMAGE, r.Auw.GIFV);
var E = /^(221552|614256)$/.test(n.j)
    ? (((a = {})[(a.DEFAULT = 0)] = "DEFAULT"), (a[(a.BOOKMARKS = 2)] = "BOOKMARKS"), a)
    : null;
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
