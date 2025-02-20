n.d(t, { Z: () => d }), n(47120);
var r = n(956067),
    i = n(147913),
    o = n(70956),
    a = n(640795),
    s = n(139674);
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
let c = 4 * o.Z.Millis.HOUR;
class u extends i.Z {
    _initialize() {
        setTimeout(() => r.Z.timeAsync('\uD83D\uDCBE', 'getBlockedDomainList', () => s.Z.getBlockedDomainList()), 1000), setTimeout(() => (0, a.q)(), 10 * o.Z.Millis.SECOND), (this.intervalID = setInterval(a.q, c));
    }
    _terminate() {
        clearInterval(this.intervalID);
    }
    constructor(...e) {
        super(...e), l(this, 'intervalID', void 0);
    }
}
let d = new u();
