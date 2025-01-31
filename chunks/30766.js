n.d(t, { Z: () => p }), n(47120);
var i,
    r,
    l,
    s = n(392711),
    a = n.n(s),
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
let h = {},
    g = 0;
class x extends (i = o.ZP.Store) {
    initialize() {
        this.waitFor(d.default);
    }
    isFetching() {
        return g > 0;
    }
    getGuild(e) {
        return h[e];
    }
    getGuilds(e) {
        return e.map((e) => h[e]).filter(u.lm);
    }
}
(l = 'DiscoverGuildsStore'),
    (r = 'displayName') in x
        ? Object.defineProperty(x, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (x[r] = l);
let p = new x(c.Z, {
    DISCOVER_GUILDS_FETCH_START: function (e) {
        g += 1;
    },
    DISCOVER_GUILDS_FETCH_SUCCESS: function (e) {
        let { guilds: t } = e;
        (g -= 1),
            a()
                .map(t, m)
                .forEach((e) => (h[e.id] = e));
    },
    DISCOVER_GUILDS_FETCH_FAILURE: function (e) {
        g -= 1;
    }
});
