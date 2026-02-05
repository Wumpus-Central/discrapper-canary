"use strict";
n.d(t, { A: () => l });
var r = n(451988),
    i = n(73153),
    a = n(439372);
let s = 3e3;
class o extends a.A {
    clearErrorTimeout = new r.Ep();
    actions = { MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: () => this.handleNoiseCancellationError() };
    _terminate() {
        this.clearErrorTimeout.stop();
    }
    handleNoiseCancellationError = () => {
        this.clearErrorTimeout.start(s, () => i.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET" }));
    };
}
let l = new o();
