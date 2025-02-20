n.d(t, { Z: () => d }), n(47120);
var r = n(317770),
    i = n(626135),
    o = n(358085),
    a = n(998502),
    s = n(801814),
    l = n(981631);
function c(e, t, n) {
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
class u extends r.Z {
    _initialize() {
        o.isPlatformEmbedded &&
            (a.ZP.on('UPDATE_DOWNLOADED', () => this.processModuleEvents()),
            a.ZP.on('MODULE_INSTALLED', (e, t, n) => this.processModuleEvents()),
            a.ZP.on('UPDATER_HISTORY_RESPONSE', (e, t) => {
                this._handleHistoryResponse(t);
            }),
            this.processModuleEvents());
    }
    _terminate() {}
    processModuleEvents() {
        a.ZP.send('UPDATER_HISTORY_QUERY_AND_TRUNCATE');
    }
    _handleHistoryResponse(e) {
        if (null == e) return;
        let t = 0 === Math.floor(500 * Math.random());
        e.forEach((e) => {
            'analytics' === e.type ? (e.name === l.rMx.UPDATER_METRICS_DOWNLOAD || e.name === l.rMx.UPDATER_METRICS_INSTALL || e.name === l.rMx.UPDATER_METRICS_COMBINED || e.name === l.rMx.UPDATER_METRICS_TRANSITION_STATUS ? t && i.default.track(e.name, e.data) : console.warn('Unknown updater analytic event '.concat(e.name))) : this._tracker.trackEvent(e);
        }),
            this._tracker.submissionReady() && (i.default.track(l.rMx.APP_MODULES_UPDATED, this._tracker.getStats()), this._tracker.reset());
    }
    constructor(...e) {
        super(...e), c(this, '_tracker', new s.Z());
    }
}
let d = new u();
