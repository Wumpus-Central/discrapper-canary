n(47120);
var i,
    r,
    l,
    s,
    a = n(392711),
    o = n.n(a),
    c = n(442837),
    d = n(570140),
    u = n(314897),
    m = n(823379);
function h(e) {
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
    x = 0;
class p extends (i = c.ZP.Store) {
    initialize() {
        this.waitFor(u.default);
    }
    isFetching() {
        return x > 0;
    }
    getGuild(e) {
        return g[e];
    }
    getGuilds(e) {
        return e.map((e) => g[e]).filter(m.lm);
    }
}
(s = 'DiscoverGuildsStore'),
    (l = 'displayName') in (r = p)
        ? Object.defineProperty(r, l, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[l] = s),
    (t.Z = new p(d.Z, {
        DISCOVER_GUILDS_FETCH_START: function (e) {
            x += 1;
        },
        DISCOVER_GUILDS_FETCH_SUCCESS: function (e) {
            let { guilds: t } = e;
            (x -= 1),
                o()
                    .map(t, h)
                    .forEach((e) => (g[e.id] = e));
        },
        DISCOVER_GUILDS_FETCH_FAILURE: function (e) {
            x -= 1;
        }
    }));
