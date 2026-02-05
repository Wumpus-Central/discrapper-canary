"use strict";
n.d(t, {
    FZ: () => A,
    I9: () => p,
    Iq: () => o,
    J8: () => d,
    O3: () => m,
    OR: () => h,
    R0: () => _,
    Us: () => l,
    VX: () => f,
    WV: () => g,
    ig: () => a,
    o: () => c,
    tO: () => T,
    v: () => s,
    wz: () => E,
});
var r = n(927813),
    i = n(985018);
let a = 0,
    s = 13,
    o = -1,
    l = -2,
    u = -3;
var c = (function (e) {
        return (
            (e.FEATURED = "featured"),
            (e.GAMING = "gaming"),
            (e.MUSIC = "music"),
            (e.ENTERTAINMENT = "entertainment"),
            (e.TECH = "tech"),
            (e.EDUCATION = "education"),
            (e.HUBS = "hubs"),
            e
        );
    })({}),
    d = (function (e) {
        return (
            (e.UNKNOWN = "unknown"),
            (e.GUILDS_BAR = "guilds_bar"),
            (e.RTC_PANEL = "rtc_panel"),
            (e.PROFILE = "profile"),
            (e.GAME_LINK = "game_link"),
            (e.EMBED = "embed"),
            e
        );
    })({});
let _ = new Set(["hubs"]),
    f = [],
    p = "q",
    h = "c",
    m = "l",
    g = 10 * r.A.Millis.MINUTE;
var E = (function (e) {
    return (
        (e[(e.Clans = u)] = "Clans"),
        (e[(e.Hub = l)] = "Hub"),
        (e[(e.Communities = o)] = "Communities"),
        (e[(e.Activity = 1)] = "Activity"),
        (e[(e.Music = 2)] = "Music"),
        (e[(e.Television = 3)] = "Television"),
        (e[(e.Science = 5)] = "Science"),
        (e[(e.Education = 6)] = "Education"),
        e
    );
})({});
let A = [1, 2, 3, 5, 6],
    I = ["en-GB"];
function T() {
    return (0, i.getLanguages)()
        .filter((e) => !I.includes(e.code))
        .map((e) => ("en-US" === e.code ? { ...e, name: i.intl.string(i.t.LQLMGP) } : e));
}
