n.d(t, { Z: () => f }), n(266796), n(47120);
var r,
    i,
    s,
    a = n(392711),
    l = n.n(a),
    o = n(442837),
    c = n(570140),
    d = n(314897),
    u = n(823379);
function m(e) {
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
        emojis: e.emojis
    };
}
let g = {},
    p = 0;
class h extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(d.default);
    }
    isFetching() {
        return p > 0;
    }
    getGuild(e) {
        return g[e];
    }
    getGuilds(e) {
        return e.map((e) => g[e]).filter(u.lm);
    }
}
(s = 'DiscoverGuildsStore'),
    (i = 'displayName') in h
        ? Object.defineProperty(h, i, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (h[i] = s);
let f = new h(c.Z, {
    DISCOVER_GUILDS_FETCH_START: function (e) {
        p += 1;
    },
    DISCOVER_GUILDS_FETCH_SUCCESS: function (e) {
        let { guilds: t } = e;
        (p -= 1),
            l()
                .map(t, m)
                .forEach((e) => (g[e.id] = e));
    },
    DISCOVER_GUILDS_FETCH_FAILURE: function (e) {
        p -= 1;
    }
});
