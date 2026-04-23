"use strict";
n.d(t, { A: () => l });
var i = n(228366),
    r = n(439372),
    s = n(461213);
class a extends r.A {
    stores = new Map().set(s.A, o);
}
function o() {
    i.h.dispatch({
        type: "SELF_PRESENCE_STORE_UPDATE",
        status: s.A.getStatus(),
        activities: s.A.getActivities(!0),
        hiddenActivities: s.A.getHiddenActivities(),
    });
}
let l = new a();
