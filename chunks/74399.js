l.d(t, { A: () => d });
var i = l(17928),
    a = l(228366),
    n = l(95701),
    s = l(734057);
let r = {},
    c = {};
class h extends i.Ay.Store {
    initialize() {
        this.waitFor(s.A);
    }
    static displayName = "GuildRoleSubscriptionTierTemplatesStore";
    getTemplates(e) {
        return r[e];
    }
    getTemplateWithCategory(e, t) {
        return r[e]?.find((e) => e.category === t);
    }
    getChannel(e) {
        return c[e];
    }
}
let d = new h(a.h, {
    GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: function (e) {
        let { selectedTemplate: t, guildId: l } = e,
            i = Object.values(s.A.getMutableGuildChannelsForGuild(l));
        t.listings.forEach((e) => {
            e.channels.forEach((e) => {
                let t = i.find((t) => t.name === e.name);
                if (void 0 !== t) e.id = t.id;
                else if (!(e.id in c)) {
                    let t = (0, n.createChannelRecord)(e);
                    c[e.id] = t;
                }
            });
        });
    },
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES: function (e) {
        let { templates: t, guildId: l } = e;
        r[l] = t;
    },
});
