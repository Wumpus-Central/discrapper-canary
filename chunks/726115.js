n.d(t, {
    Ew: () => m,
    Iv: () => E,
    Mf: () => f,
    PM: () => I,
    QW: () => p,
    Uv: () => g,
    Xp: () => v,
    a$: () => _,
    lg: () => h,
    vL: () => y,
    vb: () => d
}),
    n(411104),
    n(47120),
    n(757143);
var i = n(772848),
    r = n(706454),
    a = n(626135),
    s = n(823379),
    o = n(900849);
n(275131), n(356164);
var l = n(128449),
    u = n(981631),
    c = n(388032);
function d(e) {
    switch (e) {
        case l.vf.FEATURED:
            return c.intl.string(c.t['RU+DCQ']);
        case l.vf.GAMING:
            return c.intl.string(c.t['CD/USE']);
        case l.vf.MUSIC:
            return c.intl.string(c.t.nt9PLy);
        case l.vf.ENTERTAINMENT:
            return c.intl.string(c.t.gSbmdn);
        case l.vf.TECH:
            return c.intl.string(c.t['0A0By8']);
        case l.vf.EDUCATION:
            return c.intl.string(c.t.Gy9woq);
        case l.vf.HUBS:
            return c.intl.string(c.t['q469/f']);
    }
}
function f(e) {
    switch (e) {
        case l.vf.FEATURED:
            return c.intl.string(c.t.OlDfzM);
        case l.vf.GAMING:
            return c.intl.string(c.t['CD/USE']);
        case l.vf.MUSIC:
            return c.intl.string(c.t.nt9PLy);
        case l.vf.ENTERTAINMENT:
            return c.intl.string(c.t.gSbmdn);
        case l.vf.TECH:
            return c.intl.string(c.t['0A0By8']);
        case l.vf.EDUCATION:
            return c.intl.string(c.t.Gy9woq);
        case l.vf.HUBS:
            return c.intl.string(c.t.X5xPlZ);
        default:
            throw Error('[getGlobalDiscoveryServerTabTitle] Unsupported tab: '.concat(e));
    }
}
function _(e) {
    switch (e) {
        case l.vf.FEATURED:
            return c.intl.string(c.t.SdMhrq);
        case l.vf.GAMING:
            return c.intl.string(c.t.AAJ5oq);
        case l.vf.MUSIC:
            return c.intl.string(c.t['SOio+P']);
        case l.vf.ENTERTAINMENT:
            return c.intl.string(c.t.R09vf3);
        case l.vf.TECH:
            return c.intl.string(c.t['Ew4d5+']);
        case l.vf.EDUCATION:
            return c.intl.string(c.t.sasIWV);
        case l.vf.HUBS:
            return c.intl.string(c.t['F/IQCA']);
        default:
            throw Error('[getGlobalDiscoveryServerTabTitle] Unsupported tab: '.concat(e));
    }
}
function p(e) {
    switch (e) {
        case l.vf.FEATURED:
            return c.intl.string(c.t.crt84e);
        case l.vf.GAMING:
            return c.intl.string(c.t.fWbIpa);
        case l.vf.MUSIC:
            return c.intl.string(c.t.nfgDz8);
        case l.vf.ENTERTAINMENT:
            return c.intl.string(c.t.k1CYxs);
        case l.vf.TECH:
            return c.intl.string(c.t['4dawpq']);
        case l.vf.EDUCATION:
            return c.intl.string(c.t.uexPgY);
        default:
            return null;
    }
}
function h(e) {
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
            (0, s.vE)(e);
    }
}
function m(e) {
    return null == e || Date.now() - e > l.AF;
}
function g(e) {
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
function E(e) {
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
function v() {
    var e;
    let [t] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [r.default],
        n = (0, l.Cf)(),
        i = t.locale;
    return (null !== (e = n.find((e) => e.code === i)) && void 0 !== e ? e : n[0]).code;
}
async function y(e) {
    let { loadId: t, guildId: n, index: i, categoryId: r, analyticsLocation: s, options: l } = e,
        c = {
            ...l,
            loadId: t
        };
    await o.Ub(n, s, c),
        a.default.track(u.rMx.GUILD_DISCOVERY_GUILD_SELECTED, {
            guild_id: n,
            load_id: t,
            card_index: i,
            category_id: r,
            location: s
        });
}
function I() {
    return (0, i.Z)().replace(/-/g, '');
}
