n.d(t, { A: () => u });
var l = n(311907),
    i = n(73153),
    r = n(95701),
    a = n(734057);
let s = {},
    o = {};
class d extends l.Ay.Store {
    initialize() {
        this.waitFor(a.A);
    }
    static displayName = "GuildRoleSubscriptionTierTemplatesStore";
    getTemplates(e) {
        return s[e];
    }
    getTemplateWithCategory(e, t) {
        return s[e]?.find((e) => e.category === t);
    }
    getChannel(e) {
        return o[e];
    }
}
let u = new d(i.h, {
    GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: function (e) {
        let { selectedTemplate: t, guildId: n } = e,
            l = Object.values(a.A.getMutableGuildChannelsForGuild(n));
        t.listings.forEach((e) => {
            e.channels.forEach((e) => {
                let t = l.find((t) => t.name === e.name);
                if (void 0 !== t) e.id = t.id;
                else if (!(e.id in o)) {
                    let t = (0, r.createChannelRecord)(e);
                    o[e.id] = t;
                }
            });
        });
    },
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES: function (e) {
        let { templates: t, guildId: n } = e;
        s[n] = t;
    },
});
