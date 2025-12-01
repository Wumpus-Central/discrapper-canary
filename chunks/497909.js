n.d(t, { Z: () => m }), n(388685), n(49124), n(467055);
var r = n(668757),
    i = n(902704),
    a = n(147913),
    o = n(427164),
    s = n(633289),
    l = n(894276);
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
    if (!(0, r.X6)()) return;
    let e = {};
    for (let t of l.Re) e[t.id] = t.getCurrentConfig();
    (null != u && (0, i.Z)(u, e)) || ((0, r.Md)().flushToCache(JSON.stringify(e)), (u = e));
}
function f(e) {
    return (0, o.le)({
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
    l.Re.forEach((e) => {
        e.setExperiment(f(e));
    });
}
class _ extends a.Z {
    _initialize() {
        p();
    }
    _terminate() {}
    constructor(...e) {
        super(...e), c(this, "actions", {}), c(this, "stores", new Map().set(s.Z, d));
    }
}
let m = new _();
