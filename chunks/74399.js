i.d(t, { A: () => h });
var l = i(17928),
    a = i(228366),
    n = i(95701),
    s = i(734057);
let r = {},
    c = {};
class d extends l.Ay.Store {
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
let h = new d(a.h, {
    GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: function (e) {
        let { selectedTemplate: t, guildId: i } = e,
            l = Object.values(s.A.getMutableGuildChannelsForGuild(i));
        t.listings.forEach((e) => {
            e.channels.forEach((e) => {
                let t = l.find((t) => t.name === e.name);
                if (void 0 !== t) e.id = t.id;
                else if (!(e.id in c)) {
                    let t = (0, n.createChannelRecord)(e);
                    c[e.id] = t;
                }
            });
        });
    },
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES: function (e) {
        let { templates: t, guildId: i } = e;
        r[i] = t;
    },
});
