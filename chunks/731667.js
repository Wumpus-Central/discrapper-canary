"use strict";
n.d(t, { A: () => _ });
var i = n(17928),
    r = n(228366),
    a = n(891540),
    s = n(71393),
    l = n(652215);
let o = !1;
function d(e) {
    let t = s.A.getGuild(e);
    return null != t && !!t.features.has(l.GuildFeatures.HUB) && ((o = !0), !0);
}
function c() {
    return !0;
}
class u extends i.Ay.Store {
    static displayName = "HubLinkNoticeStore";
    initialize() {
        this.waitFor(s.A, a.A), this.syncWith([a.A], c);
    }
    channelNoticePredicate(e) {
        return !!e.features.has(l.GuildFeatures.LINKED_TO_HUB) && !o;
    }
}
let _ = new u(r.h, {
    CONNECTION_OPEN: function (e) {
        for (let t of e.guilds) if (d(t.id)) return !0;
        return !1;
    },
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        return d(t.id);
    },
});
