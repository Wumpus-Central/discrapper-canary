n.d(t, { Z: () => d }), n(47120);
var i = n(956067),
    r = n(147913),
    a = n(70956),
    s = n(640795),
    o = n(139674);
function l(e, t, n) {
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
let u = 4 * a.Z.Millis.HOUR;
class c extends r.Z {
    _initialize() {
        setTimeout(() => i.Z.timeAsync('\uD83D\uDCBE', 'getBlockedDomainList', () => o.Z.getBlockedDomainList()), 1000), setTimeout(() => (0, s.q)(), 10 * a.Z.Millis.SECOND), (this.intervalID = setInterval(s.q, u));
    }
    _terminate() {
        clearInterval(this.intervalID);
    }
    constructor(...e) {
        super(...e), l(this, 'intervalID', void 0);
    }
}
let d = new c();
