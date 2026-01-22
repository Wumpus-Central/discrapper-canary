n.d(t, {
    A: () => c,
}),
    n(896048);
var r = n(247775),
    i = n(73153),
    a = n(272355),
    s = n(723702);

function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class l extends a.A {
    _initialize() {
        i.h.subscribe("CONNECTION_OPEN", this.handleConnectionOpen);
    }
    _terminate() {
        i.h.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen);
    }
    constructor(...e) {
        super(...e),
            o(this, "handleConnectionOpen", (e) => {
                ((0, s.isWindows)() || (0, s.isMac)()) && r.encryptAndStoreTokens();
            });
    }
}
let c = new l();
