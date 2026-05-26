i.d(t, { A: () => c });
var r = i(17928),
    l = i(228366),
    a = i(95701),
    s = i(734057);
let n = {},
    o = {};
class d extends r.Ay.Store {
    initialize() {
        this.waitFor(s.A);
    }
    static displayName = "GuildRoleSubscriptionTierTemplatesStore";
    getTemplates(e) {
        return n[e];
    }
    getTemplateWithCategory(e, t) {
        return n[e]?.find((e) => e.category === t);
    }
    getChannel(e) {
        return o[e];
    }
}
let c = new d(l.h, {
    GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: function (e) {
        let { selectedTemplate: t, guildId: i } = e,
            r = Object.values(s.A.getMutableGuildChannelsForGuild(i));
        t.listings.forEach((e) => {
            e.channels.forEach((e) => {
                let t = r.find((t) => t.name === e.name);
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
        n[i] = t;
    },
});
