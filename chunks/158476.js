n.d(t, { A: () => d });
var i = n(311907),
    l = n(73153),
    a = n(857071);
let s = null,
    r = null;
function o() {
    let e = a.A.mostRecentLurkedGuildId();
    null != e ? ((s = e), (r = null)) : ((r = null != s ? s : null), (s = null));
}
class c extends i.Ay.Store {
    static displayName = "LurkerModePopoutStore";
    initialize() {
        this.syncWith([a.A], o);
    }
    shouldShowPopout(e) {
        return r === e;
    }
}
let d = new c(l.h);
