r.d(n, {
    AF: function () {
        return y;
    },
    BP: function () {
        return g;
    },
    Cf: function () {
        return T;
    },
    Gj: function () {
        return o;
    },
    Hk: function () {
        return f;
    },
    KL: function () {
        return v;
    },
    L3: function () {
        return b;
    },
    MU: function () {
        return _;
    },
    Qq: function () {
        return a;
    },
    dc: function () {
        return d;
    },
    gU: function () {
        return p;
    },
    o3: function () {
        return c;
    },
    q5: function () {
        return m;
    },
    t0: function () {
        return E;
    },
    vf: function () {
        return i;
    }
});
var i,
    a,
    o,
    s = r(47120);
var l = r(70956),
    u = r(388032);
let c = 0,
    d = 13,
    f = -1,
    p = -2,
    h = -3;
!(function (e) {
    (e.FEATURED = 'featured'), (e.GAMING = 'gaming'), (e.MUSIC = 'music'), (e.ENTERTAINMENT = 'entertainment'), (e.TECH = 'tech'), (e.EDUCATION = 'education'), (e.HUBS = 'hubs');
})(i || (i = {})),
    !(function (e) {
        (e.UNKNOWN = 'unknown'), (e.GUILDS_BAR = 'guilds_bar'), (e.RTC_PANEL = 'rtc_panel'), (e.PROFILE = 'profile'), (e.GAME_LINK = 'game_link'), (e.EMBED = 'embed');
    })(a || (a = {}));
let _ = new Set(['hubs']),
    m = [],
    g = 'q',
    E = 'c',
    v = 'l',
    y = 10 * l.Z.Millis.MINUTE;
!(function (e) {
    (e[(e.Clans = h)] = 'Clans'), (e[(e.Hub = p)] = 'Hub'), (e[(e.Communities = f)] = 'Communities'), (e[(e.Activity = 1)] = 'Activity'), (e[(e.Music = 2)] = 'Music'), (e[(e.Television = 3)] = 'Television'), (e[(e.Science = 5)] = 'Science'), (e[(e.Education = 6)] = 'Education');
})(o || (o = {}));
let b = [1, 2, 3, 5, 6],
    I = ['en-GB'];
function T() {
    return (0, u.getLanguages)()
        .filter((e) => !I.includes(e.code))
        .map((e) =>
            'en-US' === e.code
                ? {
                      ...e,
                      name: u.intl.string(u.t.LQLMGB)
                  }
                : e
        );
}
