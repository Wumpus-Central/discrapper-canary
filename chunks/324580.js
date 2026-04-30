n.d(t, {
    FZ: () => p,
    I9: () => T,
    Iq: () => c,
    J8: () => u,
    O3: () => S,
    OR: () => h,
    R0: () => A,
    Us: () => _,
    VX: () => I,
    WV: () => N,
    ig: () => o,
    o: () => E,
    tO: () => O,
    v: () => d,
    wz: () => f,
});
var i,
    a,
    r,
    s = n(927813),
    l = n(985018);
let o = 0,
    d = 13,
    c = -1,
    _ = -2;
var E =
        (((i = {}).FEATURED = "featured"),
        (i.GAMING = "gaming"),
        (i.MUSIC = "music"),
        (i.ENTERTAINMENT = "entertainment"),
        (i.TECH = "tech"),
        (i.EDUCATION = "education"),
        (i.HUBS = "hubs"),
        i),
    u =
        (((a = {}).UNKNOWN = "unknown"),
        (a.GUILDS_BAR = "guilds_bar"),
        (a.RTC_PANEL = "rtc_panel"),
        (a.PROFILE = "profile"),
        (a.GAME_LINK = "game_link"),
        (a.EMBED = "embed"),
        a);
let A = new Set(["hubs"]),
    I = [],
    T = "q",
    h = "c",
    S = "l",
    N = 10 * s.A.Millis.MINUTE;
var f =
    (((r = {})[(r.Clans = -3)] = "Clans"),
    (r[(r.Hub = _)] = "Hub"),
    (r[(r.Communities = c)] = "Communities"),
    (r[(r.Activity = 1)] = "Activity"),
    (r[(r.Music = 2)] = "Music"),
    (r[(r.Television = 3)] = "Television"),
    (r[(r.Science = 5)] = "Science"),
    (r[(r.Education = 6)] = "Education"),
    r);
let p = [1, 2, 3, 5, 6],
    m = ["en-GB"];
function O() {
    return (0, l.getLanguages)()
        .filter((e) => !m.includes(e.code))
        .map((e) => ("en-US" === e.code ? { ...e, name: l.intl.string(l.t.LQLMGP) } : e));
}
