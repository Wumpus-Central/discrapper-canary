n.d(t, {
    FZ: () => v,
    I9: () => E,
    Iq: () => d,
    J8: () => h,
    O3: () => y,
    OR: () => b,
    R0: () => m,
    Us: () => f,
    VX: () => g,
    WV: () => O,
    ig: () => c,
    o: () => _,
    tO: () => I,
    v: () => u,
    wz: () => A,
}),
    n(896048);
var r = n(927813),
    i = n(985018);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                a(e, t, n[t]);
            });
    }
    return e;
}
function o(e, t) {
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
            : o(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let c = 0,
    u = 13,
    d = -1,
    f = -2,
    p = -3;
var _ = (function (e) {
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
    h = (function (e) {
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
let m = new Set(["hubs"]),
    g = [],
    E = "q",
    b = "c",
    y = "l",
    O = 10 * r.A.Millis.MINUTE;
var A = (function (e) {
    return (
        (e[(e.Clans = p)] = "Clans"),
        (e[(e.Hub = f)] = "Hub"),
        (e[(e.Communities = d)] = "Communities"),
        (e[(e.Activity = 1)] = "Activity"),
        (e[(e.Music = 2)] = "Music"),
        (e[(e.Television = 3)] = "Television"),
        (e[(e.Science = 5)] = "Science"),
        (e[(e.Education = 6)] = "Education"),
        e
    );
})({});
let v = [1, 2, 3, 5, 6],
    S = ["en-GB"];
function I() {
    return (0, i.getLanguages)()
        .filter((e) => !S.includes(e.code))
        .map((e) => ("en-US" === e.code ? l(s({}, e), { name: i.intl.string(i.t.LQLMGP) }) : e));
}
