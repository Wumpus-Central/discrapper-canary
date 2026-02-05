"use strict";
n.d(t, { A: () => l });
var r = n(73153),
    i = n(439372),
    a = n(461213);
class s extends i.A {
    stores = new Map().set(a.A, o);
}
function o() {
    r.h.dispatch({
        type: "SELF_PRESENCE_STORE_UPDATE",
        status: a.A.getStatus(),
        activities: a.A.getActivities(!0),
        hiddenActivities: a.A.getHiddenActivities(),
    });
}
let l = new s();
