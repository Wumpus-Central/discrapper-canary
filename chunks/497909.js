n.d(t, { Z: () => g }), n(388685), n(49124), n(467055);
var r = n(668757),
    i = n(902704),
    a = n(147913),
    o = n(818083),
    s = n(353926),
    l = n(427164),
    c = n(894276);
function u(e, t, n) {
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
let d = null;
function f() {
    if (!(0, r.X6)()) return;
    let e = {};
    for (let t of c.Re) e[t.id] = t.getCurrentConfig();
    (null != d && (0, i.Z)(d, e)) || ((0, r.Md)().flushToCache(JSON.stringify(e)), (d = e));
}
function _(e) {
    return (0, o.B)({
        kind: "user",
        id: e.id,
        label: e.getLabel(),
        defaultConfig: { treatmentId: -1 },
        treatments: e.getTreatments().map((e) => {
            let { treatmentId: t, label: n } = e;
            return {
                id: t,
                label: n,
                config: { treatmentId: t },
            };
        }),
    });
}
function p(e) {
    return (0, l.le)({
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
function h() {
    c.Re.forEach((e) => {
        e.setExperiment(e.legacyExperiment ? _(e) : p(e));
    });
}
class m extends a.Z {
    _initialize() {
        h();
    }
    _terminate() {}
    constructor(...e) {
        super(...e), u(this, "actions", {}), u(this, "stores", new Map().set(s.Z, f));
    }
}
let g = new m();
