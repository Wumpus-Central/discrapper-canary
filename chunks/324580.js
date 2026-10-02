n.d(t, {
    FZ: () => g,
    I9: () => I,
    Iq: () => c,
    J8: () => E,
    O3: () => p,
    OR: () => f,
    R0: () => A,
    Us: () => u,
    VX: () => h,
    WV: () => T,
    ig: () => o,
    o: () => _,
    tO: () => N,
    v: () => d,
    wz: () => m,
});
var i,
    r,
    a,
    s = n(927813),
    l = n(375708);
let o = 0,
    d = 13,
    c = -1,
    u = -2;
var _ =
        (((i = {}).FEATURED = "featured"),
        (i.GAMING = "gaming"),
        (i.MUSIC = "music"),
        (i.ENTERTAINMENT = "entertainment"),
        (i.TECH = "tech"),
        (i.EDUCATION = "education"),
        (i.HUBS = "hubs"),
        i),
    E =
        (((r = {}).UNKNOWN = "unknown"),
        (r.GUILDS_BAR = "guilds_bar"),
        (r.RTC_PANEL = "rtc_panel"),
        (r.PROFILE = "profile"),
        (r.GAME_LINK = "game_link"),
        (r.EMBED = "embed"),
        r);
let A = new Set(["hubs"]),
    h = [],
    I = "q",
    f = "c",
    p = "l",
    T = 10 * s.A.Millis.MINUTE;
var m =
    (((a = {})[(a.Clans = -3)] = "Clans"),
    (a[(a.Hub = u)] = "Hub"),
    (a[(a.Communities = c)] = "Communities"),
    (a[(a.Activity = 1)] = "Activity"),
    (a[(a.Music = 2)] = "Music"),
    (a[(a.Television = 3)] = "Television"),
    (a[(a.Science = 5)] = "Science"),
    (a[(a.Education = 6)] = "Education"),
    a);
let g = [1, 2, 3, 5, 6],
    S = ["en-GB"];
function N() {
    return (0, l.getLanguages)()
        .filter((e) => !S.includes(e.code))
        .map((e) => ("en-US" === e.code ? { ...e, name: l.intl.string(l.t.LQLMGP) } : e));
}
