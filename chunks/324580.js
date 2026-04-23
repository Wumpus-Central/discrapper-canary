"use strict";
n.d(t, {
    FZ: () => T,
    I9: () => E,
    Iq: () => c,
    J8: () => f,
    O3: () => g,
    OR: () => m,
    R0: () => p,
    Us: () => d,
    VX: () => h,
    WV: () => A,
    ig: () => l,
    o: () => _,
    tO: () => y,
    v: () => u,
    wz: () => I,
});
var r,
    i,
    s,
    a = n(927813),
    o = n(985018);
let l = 0,
    u = 13,
    c = -1,
    d = -2;
var _ =
        (((r = {}).FEATURED = "featured"),
        (r.GAMING = "gaming"),
        (r.MUSIC = "music"),
        (r.ENTERTAINMENT = "entertainment"),
        (r.TECH = "tech"),
        (r.EDUCATION = "education"),
        (r.HUBS = "hubs"),
        r),
    f =
        (((i = {}).UNKNOWN = "unknown"),
        (i.GUILDS_BAR = "guilds_bar"),
        (i.RTC_PANEL = "rtc_panel"),
        (i.PROFILE = "profile"),
        (i.GAME_LINK = "game_link"),
        (i.EMBED = "embed"),
        i);
let p = new Set(["hubs"]),
    h = [],
    E = "q",
    m = "c",
    g = "l",
    A = 10 * a.A.Millis.MINUTE;
var I =
    (((s = {})[(s.Clans = -3)] = "Clans"),
    (s[(s.Hub = d)] = "Hub"),
    (s[(s.Communities = c)] = "Communities"),
    (s[(s.Activity = 1)] = "Activity"),
    (s[(s.Music = 2)] = "Music"),
    (s[(s.Television = 3)] = "Television"),
    (s[(s.Science = 5)] = "Science"),
    (s[(s.Education = 6)] = "Education"),
    s);
let T = [1, 2, 3, 5, 6],
    S = ["en-GB"];
function y() {
    return (0, o.getLanguages)()
        .filter((e) => !S.includes(e.code))
        .map((e) => ("en-US" === e.code ? { ...e, name: o.intl.string(o.t.LQLMGP) } : e));
}
