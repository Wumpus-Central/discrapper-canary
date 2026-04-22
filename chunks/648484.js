"use strict";
n.d(t, { A: () => l });
var r = n(311907),
    i = n(73153),
    s = n(652215);
let a = 0;
class o extends r.Ay.Store {
    static displayName = "InstanceIdStore";
    getId() {
        return a;
    }
}
let l = new o(i.h, {
    RPC_SERVER_READY: function (e) {
        let { port: t } = e;
        a = s.xEi - t;
    },
});
