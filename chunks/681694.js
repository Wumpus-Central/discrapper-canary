n.d(t, { Z: () => c }), n(47120);
var r = n(846519),
    i = n(570140),
    o = n(147913);
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
let s = 3000;
class l extends o.Z {
    _terminate() {
        this.clearErrorTimeout.stop();
    }
    constructor(...e) {
        super(...e),
            a(this, 'clearErrorTimeout', new r.V7()),
            a(this, 'actions', { MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: () => this.handleNoiseCancellationError() }),
            a(this, 'handleNoiseCancellationError', () => {
                this.clearErrorTimeout.start(s, () => i.Z.dispatch({ type: 'MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET' }));
            });
    }
}
let c = new l();
