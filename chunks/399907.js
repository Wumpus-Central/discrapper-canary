var i = r(47120);
var a = r(956067),
    o = r(147913),
    s = r(70956),
    l = r(640795),
    u = r(139674);
function c(e, n, r) {
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
let d = 4 * s.Z.Millis.HOUR;
class f extends o.Z {
    _initialize() {
        setTimeout(() => a.Z.timeAsync('\uD83D\uDCBE', 'getBlockedDomainList', () => u.Z.getBlockedDomainList()), 1000), setTimeout(() => (0, l.q)(), 10 * s.Z.Millis.SECOND), (this.intervalID = setInterval(l.q, d));
    }
    _terminate() {
        clearInterval(this.intervalID);
    }
    constructor(...e) {
        super(...e), c(this, 'intervalID', void 0);
    }
}
n.Z = new f();
