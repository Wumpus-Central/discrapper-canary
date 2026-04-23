"use strict";
n.d(t, { A: () => d }), n(321073);
var r = n(812729),
    i = n.n(r),
    s = n(311907),
    a = n(73153);
let o = [n(732755).A],
    l = [];
function u() {
    let e = [];
    for (let t of o) {
        let n = t.getActivity();
        null != n && e.push(n);
    }
    return !i()(e, l) && ((l = e), !0);
}
class c extends s.Ay.Store {
    static displayName = "FirstPartyRichPresenceStore";
    initialize() {
        this.syncWith(o, u);
    }
    getActivities() {
        return l;
    }
}
let d = new c(a.h);
