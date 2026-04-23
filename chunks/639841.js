"use strict";
n.d(t, { A: () => _ });
var r = n(311907),
    i = n(73153),
    s = n(49463),
    a = n(217222),
    o = n(129922),
    l = n(424728),
    u = n(652215);
function c() {
    l.l.trigger(),
        o.TY.getConfig({ location: "connection_open" }).emitEvent &&
            Promise.resolve()
                .then(n.bind(n, 954571))
                .then((e) => {
                    let { default: t } = e;
                    t.track(u.HAw.EXPERIMENT_APEX_DEBUGGING_EVENT, {
                        experiment: "2026-03-debug-experiment",
                        apex_debug_variant: 1,
                        experiment_location: "connection_open",
                    });
                });
}
class d extends r.Ay.Store {
    static displayName = "ExperimentTriggerPointStore";
    constructor() {
        super(i.h, { CONNECTION_OPEN: c }, i.A.Early);
    }
    initialize() {
        this.waitFor(s.A, a.A);
    }
}
let _ = new d();
