n.d(t, { Z: () => _ }), n(388685);
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
let l = null,
    c = (0, r.Md)();
function u(e, t) {
    if (e.size !== t.size) return !1;
    for (let n of e) if (!t.has(n)) return !1;
    return !0;
}
function d() {
    let e = new Set();
    if (
        (o.V.forEach((t) => {
            t.getCurrentConfig({ location: 'default' }).enabled && e.add(t.definition.id);
        }),
        null === l || !u(l, e))
    ) {
        let t = Array.from(e);
        c.flushToCache(t), (l = e);
    }
}
class f extends i.Z {
    _initialize() {
        d();
    }
    _terminate() {}
    constructor(...e) {
        super(...e), s(this, 'actions', {}), s(this, 'stores', new Map().set(a.Z, d));
    }
}
let _ = new f();
