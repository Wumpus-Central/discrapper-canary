var i = r(47120);
var a = r(213919),
    o = r(570140),
    s = r(317770),
    l = r(358085);
function u(e, n, r) {
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
class c extends s.Z {
    _initialize() {
        o.Z.subscribe('CONNECTION_OPEN', this.handleConnectionOpen);
    }
    _terminate() {
        o.Z.unsubscribe('CONNECTION_OPEN', this.handleConnectionOpen);
    }
    constructor(...e) {
        super(...e),
            u(this, 'handleConnectionOpen', (e) => {
                ((0, l.isWindows)() || (0, l.isMac)()) && a.encryptAndStoreTokens();
            });
    }
}
n.Z = new c();
