"use strict";
n.d(t, { A: () => u });
var r = n(311907),
    i = n(73153),
    a = n(652215);
let s = 0;
function o(e) {
    let { port: t } = e;
    s = a.xEi - t;
}
class l extends r.Ay.Store {
    static displayName = "InstanceIdStore";
    getId() {
        return s;
    }
}
let u = new l(i.h, { RPC_SERVER_READY: o });
