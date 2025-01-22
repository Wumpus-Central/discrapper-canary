r.d(n, {
    Ew: function () {
        return y;
    },
    Iv: function () {
        return I;
    },
    Mf: function () {
        return m;
    },
    PM: function () {
        return A;
    },
    QW: function () {
        return E;
    },
    Uv: function () {
        return b;
    },
    Xp: function () {
        return T;
    },
    a$: function () {
        return g;
    },
    lg: function () {
        return v;
    },
    vL: function () {
        return S;
    },
    vb: function () {
        return _;
    }
});
var i = r(411104);
var a = r(47120);
var o = r(757143);
var s = r(772848),
    l = r(706454),
    u = r(626135),
    c = r(823379),
    d = r(900849);
r(275131), r(356164);
var f = r(128449),
    p = r(981631),
    h = r(388032);
function _(e) {
    switch (e) {
        case f.vf.FEATURED:
            return h.intl.string(h.t['RU+DCQ']);
        case f.vf.GAMING:
            return h.intl.string(h.t['CD/USE']);
        case f.vf.MUSIC:
            return h.intl.string(h.t.nt9PLy);
        case f.vf.ENTERTAINMENT:
            return h.intl.string(h.t.gSbmdn);
        case f.vf.TECH:
            return h.intl.string(h.t['0A0By8']);
        case f.vf.EDUCATION:
            return h.intl.string(h.t.Gy9woq);
        case f.vf.HUBS:
            return h.intl.string(h.t['q469/f']);
    }
}
function m(e) {
    switch (e) {
        case f.vf.FEATURED:
            return h.intl.string(h.t.OlDfzM);
        case f.vf.GAMING:
            return h.intl.string(h.t['CD/USE']);
        case f.vf.MUSIC:
            return h.intl.string(h.t.nt9PLy);
        case f.vf.ENTERTAINMENT:
            return h.intl.string(h.t.gSbmdn);
        case f.vf.TECH:
            return h.intl.string(h.t['0A0By8']);
        case f.vf.EDUCATION:
            return h.intl.string(h.t.Gy9woq);
        case f.vf.HUBS:
            return h.intl.string(h.t.X5xPlZ);
        default:
            throw Error('[getGlobalDiscoveryServerTabTitle] Unsupported tab: '.concat(e));
    }
}
function g(e) {
    switch (e) {
        case f.vf.FEATURED:
            return h.intl.string(h.t.SdMhrq);
        case f.vf.GAMING:
            return h.intl.string(h.t.AAJ5oq);
        case f.vf.MUSIC:
            return h.intl.string(h.t['SOio+P']);
        case f.vf.ENTERTAINMENT:
            return h.intl.string(h.t.R09vf3);
        case f.vf.TECH:
            return h.intl.string(h.t['Ew4d5+']);
        case f.vf.EDUCATION:
            return h.intl.string(h.t.sasIWV);
        case f.vf.HUBS:
            return h.intl.string(h.t['F/IQCA']);
        default:
            throw Error('[getGlobalDiscoveryServerTabTitle] Unsupported tab: '.concat(e));
    }
}
function E(e) {
    switch (e) {
        case f.vf.FEATURED:
            return h.intl.string(h.t.crt84e);
        case f.vf.GAMING:
            return h.intl.string(h.t.fWbIpa);
        case f.vf.MUSIC:
            return h.intl.string(h.t.nfgDz8);
        case f.vf.ENTERTAINMENT:
            return h.intl.string(h.t.k1CYxs);
        case f.vf.TECH:
            return h.intl.string(h.t['4dawpq']);
        case f.vf.EDUCATION:
            return h.intl.string(h.t.uexPgY);
        default:
            return null;
    }
}
function v(e) {
    switch (e) {
        case f.vf.FEATURED:
            return f.Hk;
        case f.vf.GAMING:
            return f.Gj.Activity;
        case f.vf.MUSIC:
            return f.Gj.Music;
        case f.vf.ENTERTAINMENT:
            return f.Gj.Television;
        case f.vf.TECH:
            return f.Gj.Science;
        case f.vf.EDUCATION:
            return f.Gj.Education;
        case f.vf.HUBS:
            return f.gU;
        default:
            (0, c.vE)(e);
    }
}
function y(e) {
    return null == e || Date.now() - e > f.AF;
}
function b(e) {
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
function I(e) {
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
function T() {
    var e;
    let [n] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [l.default],
        r = (0, f.Cf)(),
        i = n.locale;
    return (null !== (e = r.find((e) => e.code === i)) && void 0 !== e ? e : r[0]).code;
}
async function S(e) {
    let { loadId: n, guildId: r, index: i, categoryId: a, analyticsLocation: o, options: s } = e,
        l = {
            ...s,
            loadId: n
        };
    await d.Ub(r, o, l),
        u.default.track(p.rMx.GUILD_DISCOVERY_GUILD_SELECTED, {
            guild_id: r,
            load_id: n,
            card_index: i,
            category_id: a,
            location: o
        });
}
function A() {
    return (0, s.Z)().replace(/-/g, '');
}
