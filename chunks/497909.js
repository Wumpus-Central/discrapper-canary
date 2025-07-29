(n.d(t, { Z: () => p }), n(388685), n(49124));
var r = n(668757),
    i = n(902704),
    a = n(147913),
    o = n(818083),
    s = n(353926),
    l = n(894276);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
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
function _() {
    l.Re.forEach((e) =>
        e.setExperiment(
            (0, o.B)({
                kind: 'user',
                id: e.id,
                label: e.getLabel(),
                defaultConfig: { treatmentId: -1 },
                treatments: e.getTreatments().map((e) => {
                    let { treatmentId: t, label: n } = e;
                    return {
                        id: t,
                        label: n,
                        config: { treatmentId: t }
                    };
                })
            })
        )
    );
}
class f extends a.Z {
    _initialize() {
        _();
    }
    _terminate() {}
    constructor(...e) {
        (super(...e), c(this, 'actions', {}), c(this, 'stores', new Map().set(s.Z, d)));
    }
}
let p = new f();
