n.d(t, { A: () => h });
var i = n(17928),
    r = n(228366),
    l = n(736056),
    a = n(710195),
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
        super(r.h, { CONNECTION_OPEN: u }, r.A.Early);
    }
    initialize() {
        this.waitFor(l.A, a.A);
    }
}
let h = new c();
