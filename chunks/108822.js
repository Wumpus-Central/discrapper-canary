n.d(t, { A: () => A });
var i = n(17928),
    r = n(228366),
    a = n(736056),
    s = n(710195);
(0, n(945810).mj)({ name: "2026-03-debug-experiment", kind: "user", defaultConfig: {}, variations: { 1: {}, 2: {} } });
var l = n(99066),
    o = n(840251),
    d = n(688151);
let c = [l.t4],
    u = new o.E(c, d.$G.CONNECTION_OPEN, { location: "app open" });
function _() {
    u.trigger();
}
class E extends i.Ay.Store {
    static displayName = "ExperimentTriggerPointStore";
    constructor() {
        super(r.h, { CONNECTION_OPEN: _ }, r.A.Early);
    }
    initialize() {
        this.waitFor(a.A, s.A);
    }
}
let A = new E();
