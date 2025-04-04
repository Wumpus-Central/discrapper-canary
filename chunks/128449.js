n.d(t, {
    AF: () => v,
    BP: () => E,
    Cf: () => T,
    Gj: () => O,
    Hk: () => d,
    KL: () => y,
    L3: () => I,
    MU: () => m,
    Qq: () => h,
    dc: () => u,
    gU: () => f,
    o3: () => c,
    q5: () => g,
    t0: () => b,
    vf: () => p
}),
    n(47120);
var r = n(70956),
    i = n(388032);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function a(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                o(e, t, n[t]);
            });
    }
    return e;
}
function s(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function l(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : s(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let c = 0,
    u = 13,
    d = -1,
    f = -2,
    _ = -3;
var p = (function (e) {
        return (e.FEATURED = 'featured'), (e.GAMING = 'gaming'), (e.MUSIC = 'music'), (e.ENTERTAINMENT = 'entertainment'), (e.TECH = 'tech'), (e.EDUCATION = 'education'), (e.HUBS = 'hubs'), e;
    })({}),
    h = (function (e) {
        return (e.UNKNOWN = 'unknown'), (e.GUILDS_BAR = 'guilds_bar'), (e.RTC_PANEL = 'rtc_panel'), (e.PROFILE = 'profile'), (e.GAME_LINK = 'game_link'), (e.EMBED = 'embed'), e;
    })({});
let m = new Set(['hubs']),
    g = [],
    E = 'q',
    b = 'c',
    y = 'l',
    v = 10 * r.Z.Millis.MINUTE;
var O = (function (e) {
    return (e[(e.Clans = _)] = 'Clans'), (e[(e.Hub = f)] = 'Hub'), (e[(e.Communities = d)] = 'Communities'), (e[(e.Activity = 1)] = 'Activity'), (e[(e.Music = 2)] = 'Music'), (e[(e.Television = 3)] = 'Television'), (e[(e.Science = 5)] = 'Science'), (e[(e.Education = 6)] = 'Education'), e;
})({});
let I = [1, 2, 3, 5, 6],
    S = ['en-GB'];
function T() {
    return (0, i.Vb)()
        .filter((e) => !S.includes(e.code))
        .map((e) => ('en-US' === e.code ? l(a({}, e), { name: i.NW.string(i.t.LQLMGB) }) : e));
}
