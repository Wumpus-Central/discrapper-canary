n.d(t, {
    AF: () => g,
    BP: () => p,
    Cf: () => I,
    Gj: () => E,
    Hk: () => o,
    KL: () => m,
    L3: () => v,
    MU: () => f,
    Qq: () => d,
    dc: () => s,
    gU: () => l,
    o3: () => a,
    q5: () => _,
    t0: () => h,
    vf: () => c
}),
    n(47120);
var i = n(70956),
    r = n(388032);
let a = 0,
    s = 13,
    o = -1,
    l = -2,
    u = -3;
var c = (function (e) {
        return (e.FEATURED = 'featured'), (e.GAMING = 'gaming'), (e.MUSIC = 'music'), (e.ENTERTAINMENT = 'entertainment'), (e.TECH = 'tech'), (e.EDUCATION = 'education'), (e.HUBS = 'hubs'), e;
    })({}),
    d = (function (e) {
        return (e.UNKNOWN = 'unknown'), (e.GUILDS_BAR = 'guilds_bar'), (e.RTC_PANEL = 'rtc_panel'), (e.PROFILE = 'profile'), (e.GAME_LINK = 'game_link'), (e.EMBED = 'embed'), e;
    })({});
let f = new Set(['hubs']),
    _ = [],
    p = 'q',
    h = 'c',
    m = 'l',
    g = 10 * i.Z.Millis.MINUTE;
var E = (function (e) {
    return (e[(e.Clans = u)] = 'Clans'), (e[(e.Hub = l)] = 'Hub'), (e[(e.Communities = o)] = 'Communities'), (e[(e.Activity = 1)] = 'Activity'), (e[(e.Music = 2)] = 'Music'), (e[(e.Television = 3)] = 'Television'), (e[(e.Science = 5)] = 'Science'), (e[(e.Education = 6)] = 'Education'), e;
})({});
let v = [1, 2, 3, 5, 6],
    y = ['en-GB'];
function I() {
    return (0, r.getLanguages)()
        .filter((e) => !y.includes(e.code))
        .map((e) =>
            'en-US' === e.code
                ? {
                      ...e,
                      name: r.intl.string(r.t.LQLMGB)
                  }
                : e
        );
}
