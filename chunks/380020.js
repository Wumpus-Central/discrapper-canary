"use strict";
n.d(t, { A: () => l });
var r = n(73153),
    i = n(439372),
    s = n(461213);
class a extends i.A {
    stores = new Map().set(s.A, o);
}
function o() {
    r.h.dispatch({
        type: "SELF_PRESENCE_STORE_UPDATE",
        status: s.A.getStatus(),
        activities: s.A.getActivities(!0),
        hiddenActivities: s.A.getHiddenActivities(),
    });
}
let l = new a();
