n.d(t, { A: () => o });
var i = n(311907),
    r = n(73153),
    a = n(71393),
    l = n(652215);
class s extends i.Ay.Store {
    static displayName = "GuildBoostingNoticeStore";
    initialize() {
        this.waitFor(a.A), this.syncWith([a.A], l.tEg);
    }
    channelNoticePredicate(e, t) {
        return !e.features.has(l.GuildFeatures.BANNER) && Date.now() - t >= l.D2K;
    }
}
let o = new s(r.h);
