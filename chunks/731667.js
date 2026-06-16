"use strict";
n.d(t, { A: () => _ });
var i = n(17928),
    r = n(228366),
    s = n(891540),
    a = n(71393),
    o = n(652215);
let l = !1;
function u(e) {
    let t = a.A.getGuild(e);
    return null != t && !!t.features.has(o.GuildFeatures.HUB) && ((l = !0), !0);
}
function c() {
    return !0;
}
class d extends i.Ay.Store {
    static displayName = "HubLinkNoticeStore";
    initialize() {
        this.waitFor(a.A, s.A), this.syncWith([s.A], c);
    }
    channelNoticePredicate(e) {
        return !!e.features.has(o.GuildFeatures.LINKED_TO_HUB) && !l;
    }
}
let _ = new d(r.h, {
    CONNECTION_OPEN: function (e) {
        for (let t of e.guilds) if (u(t.id)) return !0;
        return !1;
    },
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        return u(t.id);
    },
});
