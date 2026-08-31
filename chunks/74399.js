l.d(t, { A: () => u });
var n = l(17928),
    i = l(228366),
    a = l(95701),
    r = l(734057);
let s = {},
    o = {};
class c extends n.Ay.Store {
    initialize() {
        this.waitFor(r.A);
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
let u = new c(i.h, {
    GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: function (e) {
        let { selectedTemplate: t, guildId: l } = e,
            n = Object.values(r.A.getMutableGuildChannelsForGuild(l));
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
        let { templates: t, guildId: l } = e;
        s[l] = t;
    },
});
