n.d(t, { Z: () => u }), n(47120);
var i = n(213919),
    r = n(570140),
    a = n(317770),
    s = n(358085);
function o(e, t, n) {
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
class l extends a.Z {
    _initialize() {
        r.Z.subscribe('CONNECTION_OPEN', this.handleConnectionOpen);
    }
    _terminate() {
        r.Z.unsubscribe('CONNECTION_OPEN', this.handleConnectionOpen);
    }
    constructor(...e) {
        super(...e),
            o(this, 'handleConnectionOpen', (e) => {
                ((0, s.isWindows)() || (0, s.isMac)()) && i.encryptAndStoreTokens();
            });
    }
}
let u = new l();
