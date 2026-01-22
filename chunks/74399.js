n.d(t, {
    A: () => _,
});
var r,
    i = n(311907),
    a = n(73153),
    s = n(95701),
    o = n(734057);

function l(e, t, n) {
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
let c = {},
    u = {};

function d(e) {
    let { templates: t, guildId: n } = e;
    c[n] = t;
}

function f(e) {
    let { selectedTemplate: t, guildId: n } = e,
        r = Object.values(o.A.getMutableGuildChannelsForGuild(n));
    t.listings.forEach((e) => {
        e.channels.forEach((e) => {
            let t = r.find((t) => t.name === e.name);
            if (void 0 !== t) e.id = t.id;
            else if (!(e.id in u)) {
                let t = (0, s.createChannelRecord)(e);
                u[e.id] = t;
            }
        });
    });
}
class p extends (r = i.Ay.Store) {
    initialize() {
        this.waitFor(o.A);
    }
    getTemplates(e) {
        return c[e];
    }
    getTemplateWithCategory(e, t) {
        var n;
        return null == (n = c[e]) ? void 0 : n.find((e) => e.category === t);
    }
    getChannel(e) {
        return u[e];
    }
}
l(p, "displayName", "GuildRoleSubscriptionTierTemplatesStore");
let _ = new p(a.h, {
    GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: f,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES: d,
});
