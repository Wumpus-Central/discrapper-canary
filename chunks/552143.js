"use strict";
n.d(t, { A: () => o });
var i = n(451988),
    r = n(228366),
    s = n(439372);
class a extends s.A {
    clearErrorTimeout = new i.Ep();
    actions = { MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: () => this.handleNoiseCancellationError() };
    _terminate() {
        this.clearErrorTimeout.stop();
    }
    handleNoiseCancellationError = () => {
        this.clearErrorTimeout.start(3e3, () => r.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET" }));
    };
}
let o = new a();
