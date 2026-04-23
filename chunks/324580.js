n.d(t, {
    FZ: () => f,
    I9: () => T,
    Iq: () => E,
    J8: () => u,
    O3: () => N,
    OR: () => S,
    R0: () => I,
    Us: () => d,
    VX: () => A,
    WV: () => O,
    ig: () => l,
    o: () => c,
    tO: () => p,
    v: () => o,
    wz: () => R,
});
var i,
    r,
    a,
    s = n(927813),
    _ = n(985018);
let l = 0,
    o = 13,
    E = -1,
    d = -2;
var c =
        (((i = {}).FEATURED = "featured"),
        (i.GAMING = "gaming"),
        (i.MUSIC = "music"),
        (i.ENTERTAINMENT = "entertainment"),
        (i.TECH = "tech"),
        (i.EDUCATION = "education"),
        (i.HUBS = "hubs"),
        i),
    u =
        (((r = {}).UNKNOWN = "unknown"),
        (r.GUILDS_BAR = "guilds_bar"),
        (r.RTC_PANEL = "rtc_panel"),
        (r.PROFILE = "profile"),
        (r.GAME_LINK = "game_link"),
        (r.EMBED = "embed"),
        r);
let I = new Set(["hubs"]),
    A = [],
    T = "q",
    S = "c",
    N = "l",
    O = 10 * s.A.Millis.MINUTE;
var R =
    (((a = {})[(a.Clans = -3)] = "Clans"),
    (a[(a.Hub = d)] = "Hub"),
    (a[(a.Communities = E)] = "Communities"),
    (a[(a.Activity = 1)] = "Activity"),
    (a[(a.Music = 2)] = "Music"),
    (a[(a.Television = 3)] = "Television"),
    (a[(a.Science = 5)] = "Science"),
    (a[(a.Education = 6)] = "Education"),
    a);
let f = [1, 2, 3, 5, 6],
    C = ["en-GB"];
function p() {
    return (0, _.getLanguages)()
        .filter((e) => !C.includes(e.code))
        .map((e) => ("en-US" === e.code ? { ...e, name: _.intl.string(_.t.LQLMGP) } : e));
}
