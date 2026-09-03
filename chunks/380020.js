n.d(t, { A: () => o });
var i = n(228366),
    r = n(439372),
    a = n(461213);
class s extends r.A {
    stores = new Map().set(a.A, l);
}
function l() {
    i.h.dispatch({
        type: "SELF_PRESENCE_STORE_UPDATE",
        status: a.A.getStatus(),
        activities: a.A.getActivities(!0),
        hiddenActivities: a.A.getHiddenActivities(),
    });
}
let o = new s();
