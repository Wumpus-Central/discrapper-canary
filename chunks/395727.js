n.d(t, { Z: () => d }), n(47120);
var i = n(317770),
    r = n(626135),
    a = n(358085),
    s = n(998502),
    o = n(801814),
    l = n(981631);
function u(e, t, n) {
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
class c extends i.Z {
    _initialize() {
        a.isPlatformEmbedded &&
            (s.ZP.on('UPDATE_DOWNLOADED', () => this.processModuleEvents()),
            s.ZP.on('MODULE_INSTALLED', (e, t, n) => this.processModuleEvents()),
            s.ZP.on('UPDATER_HISTORY_RESPONSE', (e, t) => {
                this._handleHistoryResponse(t);
            }),
            this.processModuleEvents());
    }
    _terminate() {}
    processModuleEvents() {
        s.ZP.send('UPDATER_HISTORY_QUERY_AND_TRUNCATE');
    }
    _handleHistoryResponse(e) {
        if (null == e) return;
        let t = 0 === Math.floor(500 * Math.random());
        e.forEach((e) => {
            'analytics' === e.type ? (e.name === l.rMx.UPDATER_METRICS_DOWNLOAD || e.name === l.rMx.UPDATER_METRICS_INSTALL || e.name === l.rMx.UPDATER_METRICS_COMBINED || e.name === l.rMx.UPDATER_METRICS_TRANSITION_STATUS ? t && r.default.track(e.name, e.data) : console.warn('Unknown updater analytic event '.concat(e.name))) : this._tracker.trackEvent(e);
        }),
            this._tracker.submissionReady() && (r.default.track(l.rMx.APP_MODULES_UPDATED, this._tracker.getStats()), this._tracker.reset());
    }
    constructor(...e) {
        super(...e), u(this, '_tracker', new o.Z());
    }
}
let d = new c();
