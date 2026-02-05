n.d(t, { A: () => o });
var i = n(311907),
    r = n(73153),
    a = n(576705),
    l = n(652215);
class s extends i.Ay.Store {
    static displayName = "GuildBoostingNoticeStore";
    initialize() {
        this.waitFor(a.A), this.syncWith([a.A], l.tEg);
    }
    channelNoticePredicate(e, t) {
        return Date.now() - t >= l.D2K && a.A.can(l.xBc.MANAGE_GUILD, e);
    }
}
let o = new s(r.h);
