n.d(t, {
    Ew: () => y,
    Iv: () => O,
    Mf: () => m,
    PM: () => T,
    QW: () => E,
    Uv: () => v,
    Xp: () => I,
    a$: () => g,
    lg: () => b,
    vL: () => S,
    vb: () => h
}),
    n(411104),
    n(266796),
    n(47120),
    n(757143),
    n(301563);
var r = n(772848),
    i = n(706454),
    o = n(626135),
    a = n(823379),
    s = n(900849);
n(275131), n(356164);
var l = n(128449),
    c = n(981631),
    u = n(388032);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e) {
    switch (e) {
        case l.vf.FEATURED:
            return u.NW.string(u.t['RU+DCQ']);
        case l.vf.GAMING:
            return u.NW.string(u.t['CD/USE']);
        case l.vf.MUSIC:
            return u.NW.string(u.t.nt9PLy);
        case l.vf.ENTERTAINMENT:
            return u.NW.string(u.t.gSbmdn);
        case l.vf.TECH:
            return u.NW.string(u.t['0A0By8']);
        case l.vf.EDUCATION:
            return u.NW.string(u.t.Gy9woq);
        case l.vf.HUBS:
            return u.NW.string(u.t['q469/f']);
    }
}
function m(e) {
    switch (e) {
        case l.vf.FEATURED:
            return u.NW.string(u.t.OlDfzM);
        case l.vf.GAMING:
            return u.NW.string(u.t['CD/USE']);
        case l.vf.MUSIC:
            return u.NW.string(u.t.nt9PLy);
        case l.vf.ENTERTAINMENT:
            return u.NW.string(u.t.gSbmdn);
        case l.vf.TECH:
            return u.NW.string(u.t['0A0By8']);
        case l.vf.EDUCATION:
            return u.NW.string(u.t.Gy9woq);
        case l.vf.HUBS:
            return u.NW.string(u.t.X5xPlZ);
        default:
            throw Error('[getGlobalDiscoveryServerTabTitle] Unsupported tab: '.concat(e));
    }
}
function g(e) {
    switch (e) {
        case l.vf.FEATURED:
            return u.NW.string(u.t.SdMhrq);
        case l.vf.GAMING:
            return u.NW.string(u.t.AAJ5oq);
        case l.vf.MUSIC:
            return u.NW.string(u.t['SOio+P']);
        case l.vf.ENTERTAINMENT:
            return u.NW.string(u.t.R09vf3);
        case l.vf.TECH:
            return u.NW.string(u.t['Ew4d5+']);
        case l.vf.EDUCATION:
            return u.NW.string(u.t.sasIWV);
        case l.vf.HUBS:
            return u.NW.string(u.t['F/IQCA']);
        default:
            throw Error('[getGlobalDiscoveryServerTabTitle] Unsupported tab: '.concat(e));
    }
}
function E(e) {
    switch (e) {
        case l.vf.FEATURED:
            return u.NW.string(u.t.crt84e);
        case l.vf.GAMING:
            return u.NW.string(u.t.fWbIpa);
        case l.vf.MUSIC:
            return u.NW.string(u.t.nfgDz8);
        case l.vf.ENTERTAINMENT:
            return u.NW.string(u.t.k1CYxs);
        case l.vf.TECH:
            return u.NW.string(u.t['4dawpq']);
        case l.vf.EDUCATION:
            return u.NW.string(u.t.uexPgY);
        default:
            return null;
    }
}
function b(e) {
    switch (e) {
        case l.vf.FEATURED:
            return l.Hk;
        case l.vf.GAMING:
            return l.Gj.Activity;
        case l.vf.MUSIC:
            return l.Gj.Music;
        case l.vf.ENTERTAINMENT:
            return l.Gj.Television;
        case l.vf.TECH:
            return l.Gj.Science;
        case l.vf.EDUCATION:
            return l.Gj.Education;
        case l.vf.HUBS:
            return l.gU;
        default:
            (0, a.vE)(e);
    }
}
function y(e) {
    return null == e || Date.now() - e > l.AF;
}
function v(e) {
    return {
        id: e.id,
        name: e.name,
        description: e.description,
        splash: e.splash,
        banner: e.banner,
        icon: e.icon,
        features: new Set(e.features),
        presenceCount: e.approximate_presence_count,
        memberCount: e.approximate_member_count,
        premiumSubscriptionCount: e.premium_subscription_count,
        preferredLocale: e.preferred_locale,
        discoverySplash: e.discovery_splash,
        emojis: e.emojis,
        emojiCount: e.emoji_count
    };
}
function O(e) {
    return {
        id: e.id,
        name: e.name,
        description: e.description,
        splash: e.splash,
        banner: e.banner,
        icon: e.icon,
        features: new Set(e.features),
        presenceCount: e.approximate_presence_count,
        memberCount: e.approximate_member_count,
        premiumSubscriptionCount: void 0,
        preferredLocale: void 0,
        discoverySplash: e.discovery_splash,
        emojis: []
    };
}
function I() {
    var e;
    let [t] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [i.default],
        n = (0, l.Cf)(),
        r = t.locale;
    return (null != (e = n.find((e) => e.code === r)) ? e : n[0]).code;
}
async function S(e) {
    let { loadId: t, guildId: n, index: r, categoryId: i, analyticsLocation: a, options: l } = e,
        u = p(f({}, l), { loadId: t });
    await s.Ub(n, a, u),
        o.default.track(c.rMx.GUILD_DISCOVERY_GUILD_SELECTED, {
            guild_id: n,
            load_id: t,
            card_index: r,
            category_id: i,
            location: a
        });
}
function T() {
    return (0, r.Z)().replace(/-/g, '');
}
