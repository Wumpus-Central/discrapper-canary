n.d(t, { Z: () => _ }), n(47120);
var r = n(956067),
    i = n(668757),
    o = n(147913),
    a = n(185996),
    s = n(70956),
    l = n(640795),
    c = n(139674);
function u(e, t, n) {
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
let d = 4 * s.Z.Millis.HOUR;
class f extends o.Z {
    _initialize() {
        if ((0, a.U)()) return void (0, i.pf)();
        setTimeout(() => r.Z.timeAsync('\uD83D\uDCBE', 'getBlockedDomainList', () => c.Z.getBlockedDomainList()), 1000), setTimeout(() => (0, l.q)(), 10 * s.Z.Millis.SECOND), (this.intervalID = setInterval(l.q, d));
    }
    _terminate() {
        clearInterval(this.intervalID);
    }
    constructor(...e) {
        super(...e), u(this, 'intervalID', void 0);
    }
}
let _ = new f();
