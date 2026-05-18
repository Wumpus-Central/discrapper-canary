"use strict";
n.d(t, { A: () => h });
var i = n(17928),
    r = n(228366),
    s = n(736056),
    a = n(710195);
(0, n(945810).mj)({ name: "2026-03-debug-experiment", kind: "user", defaultConfig: {}, variations: { 1: {}, 2: {} } });
var o = n(99066),
    l = n(840251),
    u = n(688151);
let c = [o.t4],
    d = new l.E(c, u.$G.CONNECTION_OPEN, { location: "app open" });
function _() {
    d.trigger();
}
class f extends i.Ay.Store {
    static displayName = "ExperimentTriggerPointStore";
    constructor() {
        super(r.h, { CONNECTION_OPEN: _ }, r.A.Early);
    }
    initialize() {
        this.waitFor(s.A, a.A);
    }
}
let h = new f();
