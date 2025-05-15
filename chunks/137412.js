n.d(t, { Z: () => c }), n(388685);
var r = n(213919),
    i = n(570140),
    a = n(317770),
    o = n(358085);
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
class l extends a.Z {
    _initialize() {
        i.Z.subscribe('CONNECTION_OPEN', this.handleConnectionOpen);
    }
    _terminate() {
        i.Z.unsubscribe('CONNECTION_OPEN', this.handleConnectionOpen);
    }
    constructor(...e) {
        super(...e),
            s(this, 'handleConnectionOpen', (e) => {
                ((0, o.isWindows)() || (0, o.isMac)()) && r.encryptAndStoreTokens();
            });
    }
}
let c = new l();
