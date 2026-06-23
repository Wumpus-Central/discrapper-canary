"use strict";
n.d(t, { A: () => c });
var l = n(17928),
    i = n(228366),
    s = n(95701),
    r = n(734057);
let a = {},
    o = {};
class u extends l.Ay.Store {
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
let c = new u(i.h, {
    GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: function (e) {
        let { selectedTemplate: t, guildId: n } = e,
            l = Object.values(r.A.getMutableGuildChannelsForGuild(n));
        t.listings.forEach((e) => {
            e.channels.forEach((e) => {
                let t = l.find((t) => t.name === e.name);
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
