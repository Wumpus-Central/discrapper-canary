var i,
    r,
    a,
    s = n(927813),
    l = n(792996),
    o =
        (((i = {}).FEATURED = "featured"),
        (i.GAMING = "gaming"),
        (i.MUSIC = "music"),
        (i.ENTERTAINMENT = "entertainment"),
        (i.TECH = "tech"),
        (i.EDUCATION = "education"),
        (i.HUBS = "hubs"),
        i),
    d =
        (((r = {}).UNKNOWN = "unknown"),
        (r.GUILDS_BAR = "guilds_bar"),
        (r.RTC_PANEL = "rtc_panel"),
        (r.PROFILE = "profile"),
        (r.GAME_LINK = "game_link"),
        (r.EMBED = "embed"),
        r);
let c = new Set(["hubs"]),
    u = 10 * s.A.Millis.MINUTE;
var _ =
    (((a = {})[(a.Clans = -3)] = "Clans"),
    (a[(a.Hub = -2)] = "Hub"),
    (a[(a.Communities = -1)] = "Communities"),
    (a[(a.Activity = 1)] = "Activity"),
    (a[(a.Music = 2)] = "Music"),
    (a[(a.Television = 3)] = "Television"),
    (a[(a.Science = 5)] = "Science"),
    (a[(a.Education = 6)] = "Education"),
    a);
let E = ["en-GB"];
n.d(
    t,
    {},
    {
        FZ: [1, 2, 3, 5, 6],
        J8: d,
        R0: c,
        VX: [],
        WV: u,
        o: o,
        tO: function () {
            return (0, l.getLanguages)()
                .filter((e) => !E.includes(e.code))
                .map((e) => ("en-US" === e.code ? { ...e, name: l.intl.string(l.t.LQLMGP) } : e));
        },
        wz: _,
    },
);
