n.d(t, { A: () => d });
var i = n(311907),
    r = n(73153),
    a = n(576705),
    l = n(652215);
function s() {
    return !0;
}
class o extends i.Ay.Store {
    static displayName = "InviteNoticeStore";
    initialize() {
        this.waitFor(a.A), this.syncWith([a.A], s);
    }
    channelNoticePredicate(e, t) {
        return Date.now() - t >= l.D2K && a.A.can(l.xBc.ADMINISTRATOR, e);
    }
}
let d = new o(r.h);
