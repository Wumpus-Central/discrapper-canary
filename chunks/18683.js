"use strict";
n.d(t, { A: () => _ });
var i = n(306173),
    r = n(52133),
    a = n(439372),
    s = n(945810),
    l = n(710195),
    o = n(892842);
let d = null;
function c() {
    if (!(0, i.xd)() || (0, o.hw)()) return;
    let e = {};
    for (let t of o.ML) e[t.id] = t.getCurrentConfig();
    (null != d && (0, r.A)(d, e)) || ((0, i.Ih)().flushToCache(JSON.stringify(e)), (d = e));
}
class u extends a.A {
    actions = {};
    stores = new Map().set(l.A, c);
    _initialize() {
        o.ML.forEach((e) => {
            e.setExperiment(
                (0, s.mj)({
                    kind: "user",
                    name: e.id,
                    defaultConfig: { treatmentId: -1 },
                    variations: Object.fromEntries(
                        e.getTreatments().map((e) => {
                            let { treatmentId: t } = e;
                            return [t, { treatmentId: t }];
                        }),
                    ),
                }),
            );
        });
    }
    _terminate() {}
}
let _ = new u();
