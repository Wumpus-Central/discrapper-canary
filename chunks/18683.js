"use strict";
n.d(t, { A: () => p });
var r = n(306173),
    i = n(52133),
    s = n(439372),
    a = n(945810),
    o = n(217222),
    l = n(548965);
let u = null;
function c() {
    if (!(0, r.xd)() || (0, l.hw)()) return;
    let e = {};
    for (let t of l.ML) e[t.id] = t.getCurrentConfig();
    (null != u && (0, i.A)(u, e)) || ((0, r.Ih)().flushToCache(JSON.stringify(e)), (u = e));
}
function d(e) {
    return (0, a.mj)({
        kind: "user",
        name: e.id,
        defaultConfig: { treatmentId: -1 },
        variations: Object.fromEntries(
            e.getTreatments().map((e) => {
                let { treatmentId: t } = e;
                return [t, { treatmentId: t }];
            }),
        ),
    });
}
function _() {
    l.ML.forEach((e) => {
        e.setExperiment(d(e));
    });
}
class f extends s.A {
    actions = {};
    stores = new Map().set(o.A, c);
    _initialize() {
        _();
    }
    _terminate() {}
}
let p = new f();
