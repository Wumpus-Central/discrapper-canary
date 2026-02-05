"use strict";
n.d(t, { A: () => r }), n(423034);
class r {
    isInitialized = !1;
    initialize() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        this.isInitialized || ((this.isInitialized = !0), this._initialize(...t));
    }
    terminate() {
        this.isInitialized && ((this.isInitialized = !1), this._terminate());
    }
}
