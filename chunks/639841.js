var i = n(311907),
    a = n(73153),
    r = n(49463),
    l = n(217222),
    s = n(129922),
    o = n(424728),
    d = n(652215);
function c() {
    o.l.trigger(),
        s.TY.getConfig({ location: "connection_open" }).emitEvent &&
            Promise.resolve()
                .then(n.bind(n, 954571))
                .then((e) => {
                    let { default: t } = e;
                    t.track(d.HAw.EXPERIMENT_APEX_DEBUGGING_EVENT, {
                        experiment: "2026-03-debug-experiment",
                        apex_debug_variant: 1,
                        experiment_location: "connection_open",
                    });
                });
}
class u extends i.Ay.Store {
    static displayName = "ExperimentTriggerPointStore";
    constructor() {
        super(a.h, { CONNECTION_OPEN: c }, a.A.Early);
    }
    initialize() {
        this.waitFor(r.A, l.A);
    }
}
new u();
