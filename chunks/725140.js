n.d(t, { Z: () => c }), n(47120);
var i = n(147913),
    r = n(579806),
    a = n(246946);
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
let o = !1;
function l() {
    var e;
    let t = null === r.Z || void 0 === r.Z ? void 0 : null === (e = r.Z.window) || void 0 === e ? void 0 : e.setContentProtection;
    if (null == t) return;
    let n = a.Z.enableContentProtection;
    n !== o && (t(n), (o = n));
}
class u extends i.Z {
    constructor() {
        l(), super(), s(this, 'stores', new Map().set(a.Z, l));
    }
}
let c = new u();
