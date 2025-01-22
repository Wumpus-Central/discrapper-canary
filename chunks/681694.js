var i = r(47120);
var a = r(846519),
    o = r(570140),
    s = r(147913);
function l(e, n, r) {
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
let u = 3000;
class c extends s.Z {
    _terminate() {
        this.clearErrorTimeout.stop();
    }
    constructor(...e) {
        super(...e),
            l(this, 'clearErrorTimeout', new a.V7()),
            l(this, 'actions', { MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: () => this.handleNoiseCancellationError() }),
            l(this, 'handleNoiseCancellationError', () => {
                this.clearErrorTimeout.start(u, () => o.Z.dispatch({ type: 'MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET' }));
            });
    }
}
n.Z = new c();
