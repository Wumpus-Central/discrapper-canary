var r,
    i,
    l = n(311907),
    a = n(73153),
    s = n(49463),
    o = n(217222),
    c = n(424728);
function u() {
    c.l.trigger();
}
class d extends (i = l.Ay.Store) {
    initialize() {
        this.waitFor(s.A, o.A);
    }
    constructor() {
        super(a.h, { CONNECTION_OPEN: u }, a.A.Early);
    }
}
(r = "displayName") in d
    ? Object.defineProperty(d, r, {
          value: "ExperimentTriggerPointStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (d[r] = "ExperimentTriggerPointStore"),
    new d();
