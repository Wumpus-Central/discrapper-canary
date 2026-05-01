n.d(t, { A: () => h });
var i = n(17928),
    l = n(228366),
    a = n(736056),
    r = n(710195),
    s = n(129922),
    o = n(704913),
    d = n(652215);
function u() {
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
class c extends i.Ay.Store {
    static displayName = "ExperimentTriggerPointStore";
    constructor() {
        super(l.h, { CONNECTION_OPEN: u }, l.A.Early);
    }
    initialize() {
        this.waitFor(a.A, r.A);
    }
}
let h = new c();
