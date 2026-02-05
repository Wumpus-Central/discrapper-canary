"use strict";
n.d(t, { A: () => _ });
var r = n(311907),
    i = n(73153),
    a = n(95701),
    s = n(734057);
let o = {},
    l = {};
function u(e) {
    let { templates: t, guildId: n } = e;
    o[n] = t;
}
function c(e) {
    let { selectedTemplate: t, guildId: n } = e,
        r = Object.values(s.A.getMutableGuildChannelsForGuild(n));
    t.listings.forEach((e) => {
        e.channels.forEach((e) => {
            let t = r.find((t) => t.name === e.name);
            if (void 0 !== t) e.id = t.id;
            else if (!(e.id in l)) {
                let t = (0, a.createChannelRecord)(e);
                l[e.id] = t;
            }
        });
    });
}
class d extends r.Ay.Store {
    initialize() {
        this.waitFor(s.A);
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
let _ = new d(i.h, {
    GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: c,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES: u,
});
