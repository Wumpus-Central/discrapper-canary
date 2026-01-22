n.d(t, { A: () => c }), n(896048);
var r = n(451988),
    i = n(73153),
    a = n(439372);
function s(e, t, n) {
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
let o = 3000;
class l extends a.A {
    _terminate() {
        this.clearErrorTimeout.stop();
    }
    constructor(...e) {
        super(...e),
            s(this, "clearErrorTimeout", new r.Ep()),
            s(this, "actions", { MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: () => this.handleNoiseCancellationError() }),
            s(this, "handleNoiseCancellationError", () => {
                this.clearErrorTimeout.start(o, () =>
                    i.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET" }),
                );
            });
    }
}
let c = new l();
