"use strict";
n.d(t, { A: () => u }), n(321073);
var i = n(812729),
    r = n.n(i),
    s = n(17928),
    a = n(228366);
let o = [n(732755).A],
    l = [];
function d() {
    let e = [];
    for (let t of o) {
        let n = t.getActivity();
        null != n && e.push(n);
    }
    return !r()(e, l) && ((l = e), !0);
}
class _ extends s.Ay.Store {
    static displayName = "FirstPartyRichPresenceStore";
    initialize() {
        this.syncWith(o, d);
    }
    getActivities() {
        return l;
    }
}
let u = new _(a.h);
