"use strict";
n.d(t, { A: () => u });
var r = n(574381),
    i = n(439372),
    s = n(217222),
    a = n(837921),
    o = n(393742);
class l extends i.A {
    handleExperimentChange = () => {
        if (!r.Av) return;
        let { moduleCacheEnabled: e } = o.A.getConfig({
            location: "CacheRequireModuleExperimentManager handleExperimentChange",
        });
        a.Ay.setUseRequireModuleCache(e);
    };
    stores = new Map().set(s.A, this.handleExperimentChange);
    actions = {};
}
let u = new l();
