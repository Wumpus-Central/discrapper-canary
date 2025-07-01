(n.d(t, { Z: () => s }), n(388685));
var r = n(668757),
    i = n(147913);
function a(e, t, n) {
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
class o extends i.Z {
    _initialize() {
        if ((0, r.X6)()) {
            let e = 'https:'.concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT, '/bad-hash-delta');
            (0, r.pf)(e);
            return;
        }
    }
    constructor(...e) {
        (super(...e), a(this, 'intervalID', void 0));
    }
}
let s = new o();
