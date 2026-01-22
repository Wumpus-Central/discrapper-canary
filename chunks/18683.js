n.d(t, { A: () => h }), n(896048), n(457529), n(446912);
var r = n(306173),
    i = n(52133),
    a = n(439372),
    s = n(945810),
    o = n(217222),
    l = n(548965);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let u = null;
function d() {
    if (!(0, r.xd)()) return;
    let e = {};
    for (let t of l.ML) e[t.id] = t.getCurrentConfig();
    (null != u && (0, i.A)(u, e)) || ((0, r.Ih)().flushToCache(JSON.stringify(e)), (u = e));
}
function f(e) {
    return (0, s.mj)({
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
function p() {
    l.ML.forEach((e) => {
        e.setExperiment(f(e));
    });
}
class _ extends a.A {
    _initialize() {
        p();
    }
    _terminate() {}
    constructor(...e) {
        super(...e), c(this, "actions", {}), c(this, "stores", new Map().set(o.A, d));
    }
}
let h = new _();
