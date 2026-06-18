n.d(t, { A: () => c });
var i = n(17928),
    l = n(228366),
    s = n(95701),
    r = n(734057);
let a = {},
    o = {};
class d extends i.Ay.Store {
    initialize() {
        this.waitFor(r.A);
    }
    static displayName = "GuildRoleSubscriptionTierTemplatesStore";
    getTemplates(e) {
        return a[e];
    }
    getTemplateWithCategory(e, t) {
        return a[e]?.find((e) => e.category === t);
    }
    getChannel(e) {
        return o[e];
    }
}
let c = new d(l.h, {
    GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: function (e) {
        let { selectedTemplate: t, guildId: n } = e,
            i = Object.values(r.A.getMutableGuildChannelsForGuild(n));
        t.listings.forEach((e) => {
            e.channels.forEach((e) => {
                let t = i.find((t) => t.name === e.name);
                if (void 0 !== t) e.id = t.id;
                else if (!(e.id in o)) {
                    let t = (0, s.createChannelRecord)(e);
                    o[e.id] = t;
                }
            });
        });
    },
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES: function (e) {
        let { templates: t, guildId: n } = e;
        a[n] = t;
    },
});
