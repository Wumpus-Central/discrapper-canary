"use strict";
n.d(t, { A: () => s });
var r = n(311907),
    i = n(73153);
class a extends r.Ay.Store {
    static displayName = "LowPerformanceModeStore";
    getState() {
        return { enabled: !1, optedOut: !1 };
    }
    get optedOut() {
        return !1;
    }
    get enabled() {
        return !1;
    }
    get visible() {
        return !1;
    }
    get active() {
        return !1;
    }
}
let s = new a(i.h, {});
