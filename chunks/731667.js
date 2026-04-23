n.d(t, { A: () => _ });
var i = n(17928),
    r = n(228366),
    a = n(891540),
    l = n(71393),
    s = n(652215);
let o = !1;
function d(e) {
    let t = l.A.getGuild(e);
    return null != t && !!t.features.has(s.GuildFeatures.HUB) && ((o = !0), !0);
}
function u() {
    return !0;
}
class c extends i.Ay.Store {
    static displayName = "HubLinkNoticeStore";
    initialize() {
        this.waitFor(l.A, a.A), this.syncWith([a.A], u);
    }
    channelNoticePredicate(e) {
        return !!e.features.has(s.GuildFeatures.LINKED_TO_HUB) && !o;
    }
}
let _ = new c(r.h, {
    CONNECTION_OPEN: function (e) {
        for (let t of e.guilds) if (d(t.id)) return !0;
        return !1;
    },
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        return d(t.id);
    },
});
