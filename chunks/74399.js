i.d(t, { A: () => d });
var l = i(17928),
    n = i(228366),
    a = i(95701),
    s = i(734057);
let r = {},
    o = {};
class c extends l.Ay.Store {
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
        return o[e];
    }
}
let d = new c(n.h, {
    GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: function (e) {
        let { selectedTemplate: t, guildId: i } = e,
            l = Object.values(s.A.getMutableGuildChannelsForGuild(i));
        t.listings.forEach((e) => {
            e.channels.forEach((e) => {
                let t = l.find((t) => t.name === e.name);
                if (void 0 !== t) e.id = t.id;
                else if (!(e.id in o)) {
                    let t = (0, a.createChannelRecord)(e);
                    o[e.id] = t;
                }
            });
        });
    },
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES: function (e) {
        let { templates: t, guildId: i } = e;
        r[i] = t;
    },
});
