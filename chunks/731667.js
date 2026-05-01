n.d(t, { A: () => E });
var i = n(17928),
    a = n(228366),
    r = n(891540),
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
class _ extends i.Ay.Store {
    static displayName = "HubLinkNoticeStore";
    initialize() {
        this.waitFor(s.A, r.A), this.syncWith([r.A], c);
    }
    channelNoticePredicate(e) {
        return !!e.features.has(l.GuildFeatures.LINKED_TO_HUB) && !o;
    }
}
let E = new _(a.h, {
    CONNECTION_OPEN: function (e) {
        for (let t of e.guilds) if (d(t.id)) return !0;
        return !1;
    },
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        return d(t.id);
    },
});
