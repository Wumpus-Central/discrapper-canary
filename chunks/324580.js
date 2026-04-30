"use strict";
n.d(t, {
    FZ: () => T,
    I9: () => E,
    Iq: () => c,
    J8: () => f,
    O3: () => g,
    OR: () => m,
    R0: () => h,
    Us: () => d,
    VX: () => p,
    WV: () => A,
    ig: () => l,
    o: () => _,
    tO: () => N,
    v: () => u,
    wz: () => I,
});
var i,
    r,
    s,
    a = n(927813),
    o = n(375708);
let l = 0,
    u = 13,
    c = -1,
    d = -2;
var _ =
        (((i = {}).FEATURED = "featured"),
        (i.GAMING = "gaming"),
        (i.MUSIC = "music"),
        (i.ENTERTAINMENT = "entertainment"),
        (i.TECH = "tech"),
        (i.EDUCATION = "education"),
        (i.HUBS = "hubs"),
        i),
    f =
        (((r = {}).UNKNOWN = "unknown"),
        (r.GUILDS_BAR = "guilds_bar"),
        (r.RTC_PANEL = "rtc_panel"),
        (r.PROFILE = "profile"),
        (r.GAME_LINK = "game_link"),
        (r.EMBED = "embed"),
        r);
let h = new Set(["hubs"]),
    p = [],
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
function N() {
    return (0, o.getLanguages)()
        .filter((e) => !S.includes(e.code))
        .map((e) => ("en-US" === e.code ? { ...e, name: o.intl.string(o.t.LQLMGP) } : e));
}
