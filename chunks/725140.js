var i = r(47120);
var a = r(147913),
    o = r(579806),
    s = r(246946);
function l(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let u = !1;
function c() {
    var e;
    let n = null === o.Z || void 0 === o.Z ? void 0 : null === (e = o.Z.window) || void 0 === e ? void 0 : e.setContentProtection;
    if (null == n) return;
    let r = s.Z.enableContentProtection;
    r !== u && (n(r), (u = r));
}
class d extends a.Z {
    constructor() {
        c(), super(), l(this, 'stores', new Map().set(s.Z, c));
    }
}
n.Z = new d();
