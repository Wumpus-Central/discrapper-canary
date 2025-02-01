n.d(t, { Z: () => u }), n(47120);
var i = n(846519),
    r = n(570140),
    a = n(147913);
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
let o = 3000;
class l extends a.Z {
    _terminate() {
        this.clearErrorTimeout.stop();
    }
    constructor(...e) {
        super(...e),
            s(this, 'clearErrorTimeout', new i.V7()),
            s(this, 'actions', { MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: () => this.handleNoiseCancellationError() }),
            s(this, 'handleNoiseCancellationError', () => {
                this.clearErrorTimeout.start(o, () => r.Z.dispatch({ type: 'MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET' }));
            });
    }
}
let u = new l();
