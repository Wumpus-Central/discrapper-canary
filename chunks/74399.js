var n = i(855986),
    r = i(73153),
    a = i(95701),
    s = i(734057);
let l = {},
    o = {};
class _ extends n.Ay.Store {
    initialize() {
        this.waitFor(s.A);
    }
    static displayName = "GuildRoleSubscriptionTierTemplatesStore";
    getTemplates(e) {
        return l[e];
    }
    getTemplateWithCategory(e, t) {
        return l[e]?.find((e) => e.category === t);
    }
    getChannel(e) {
        return o[e];
    }
}
let u = new _(r.h, {
    GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: function (e) {
        let { selectedTemplate: t, guildId: i } = e,
            n = Object.values(s.A.getMutableGuildChannelsForGuild(i));
        t.listings.forEach((e) => {
            e.channels.forEach((e) => {
                let t = n.find((t) => t.name === e.name);
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
        l[i] = t;
    },
});
i.d(t, {}, { A: u });
