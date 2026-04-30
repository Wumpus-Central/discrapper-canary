"use strict";
n.d(t, { A: () => c });
var i = n(17928),
    r = n(228366),
    s = n(95701),
    a = n(734057);
let o = {},
    l = {};
class u extends i.Ay.Store {
    initialize() {
        this.waitFor(a.A);
    }
    static displayName = "GuildRoleSubscriptionTierTemplatesStore";
    getTemplates(e) {
        return o[e];
    }
    getTemplateWithCategory(e, t) {
        return o[e]?.find((e) => e.category === t);
    }
    getChannel(e) {
        return l[e];
    }
}
let c = new u(r.h, {
    GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: function (e) {
        let { selectedTemplate: t, guildId: n } = e,
            i = Object.values(a.A.getMutableGuildChannelsForGuild(n));
        t.listings.forEach((e) => {
            e.channels.forEach((e) => {
                let t = i.find((t) => t.name === e.name);
                if (void 0 !== t) e.id = t.id;
                else if (!(e.id in l)) {
                    let t = (0, s.createChannelRecord)(e);
                    l[e.id] = t;
                }
            });
        });
    },
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES: function (e) {
        let { templates: t, guildId: n } = e;
        o[n] = t;
    },
});
