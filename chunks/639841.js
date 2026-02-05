var i = n(311907),
    r = n(73153),
    a = n(49463),
    l = n(217222),
    s = n(424728);
function o() {
    s.l.trigger();
}
class d extends i.Ay.Store {
    static displayName = "ExperimentTriggerPointStore";
    constructor() {
        super(r.h, { CONNECTION_OPEN: o }, r.A.Early);
    }
    initialize() {
        this.waitFor(a.A, l.A);
    }
}
new d();
