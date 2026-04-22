"use strict";
n.d(t, { A: () => o });
var r = n(451988),
    i = n(73153),
    s = n(439372);
class a extends s.A {
    clearErrorTimeout = new r.Ep();
    actions = { MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: () => this.handleNoiseCancellationError() };
    _terminate() {
        this.clearErrorTimeout.stop();
    }
    handleNoiseCancellationError = () => {
        this.clearErrorTimeout.start(3e3, () => i.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET" }));
    };
}
let o = new a();
