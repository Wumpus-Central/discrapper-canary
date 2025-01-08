r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(47120);
function a(e, n, r) {
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
class s {
    initialize() {
        for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
        if (!this.isInitialized) {
            this.isInitialized = !0;
            this._initialize(...n);
        }
    }
    terminate() {
        if (!!this.isInitialized) (this.isInitialized = !1), this._terminate();
    }
    constructor() {
        a(this, 'isInitialized', !1);
    }
}
