n.d(t, { Z: () => u }), n(47120);
var r = n(147913),
    i = n(579806),
    o = n(246946);
function a(e, t, n) {
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
let s = !1;
function l() {
    var e;
    let t = null === i.Z || void 0 === i.Z || null == (e = i.Z.window) ? void 0 : e.setContentProtection;
    if (null == t) return;
    let n = o.Z.enableContentProtection;
    n !== s && (t(n), (s = n));
}
class c extends r.Z {
    constructor() {
        l(), super(), a(this, 'stores', new Map().set(o.Z, l));
    }
}
let u = new c();
