n.d(t, { Z: () => f }), n(388685);
var r = n(668757),
    i = n(147913),
    a = n(353926),
    o = n(894276);
function s(e, t, n) {
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
let l = null;
function c(e, t) {
    if (e.size !== t.size) return !1;
    for (let n of e) if (!t.has(n)) return !1;
    return !0;
}
function u() {
    if (!(0, r.X6)()) return;
    let e = new Set(),
        t = (0, r.Md)();
    if (
        (o.V.forEach((t) => {
            t.getCurrentConfig({ location: 'default' }).enabled && e.add(t.definition.id);
        }),
        null === l || !c(l, e))
    ) {
        let n = Array.from(e);
        t.flushToCache(n), (l = e);
    }
}
class d extends i.Z {
    _initialize() {
        u();
    }
    _terminate() {}
    constructor(...e) {
        super(...e), s(this, 'actions', {}), s(this, 'stores', new Map().set(a.Z, u));
    }
}
let f = new d();
