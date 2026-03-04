"use strict";
n.d(t, { A: () => c });
var i = n(311907),
    r = n(73153),
    l = n(95701),
    s = n(734057);
let a = {},
    o = {};
class E extends i.Ay.Store {
    initialize() {
        this.waitFor(s.A);
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
let c = new E(r.h, {
    GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: function (e) {
        let { selectedTemplate: t, guildId: n } = e,
            i = Object.values(s.A.getMutableGuildChannelsForGuild(n));
        t.listings.forEach((e) => {
            e.channels.forEach((e) => {
                let t = i.find((t) => t.name === e.name);
                if (void 0 !== t) e.id = t.id;
                else if (!(e.id in o)) {
                    let t = (0, l.createChannelRecord)(e);
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
