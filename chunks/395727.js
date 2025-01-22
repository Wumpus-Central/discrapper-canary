var i = r(47120);
var a = r(317770),
    o = r(626135),
    s = r(358085),
    l = r(998502),
    u = r(801814),
    c = r(981631);
function d(e, n, r) {
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
class f extends a.Z {
    _initialize() {
        if (!!s.isPlatformEmbedded)
            l.ZP.on('UPDATE_DOWNLOADED', () => this.processModuleEvents()),
                l.ZP.on('MODULE_INSTALLED', (e, n, r) => this.processModuleEvents()),
                l.ZP.on('UPDATER_HISTORY_RESPONSE', (e, n) => {
                    this._handleHistoryResponse(n);
                }),
                this.processModuleEvents();
    }
    _terminate() {}
    processModuleEvents() {
        l.ZP.send('UPDATER_HISTORY_QUERY_AND_TRUNCATE');
    }
    _handleHistoryResponse(e) {
        if (null == e) return;
        let n = 0 === Math.floor(500 * Math.random());
        e.forEach((e) => {
            'analytics' === e.type ? (e.name === c.rMx.UPDATER_METRICS_DOWNLOAD || e.name === c.rMx.UPDATER_METRICS_INSTALL || e.name === c.rMx.UPDATER_METRICS_COMBINED || e.name === c.rMx.UPDATER_METRICS_TRANSITION_STATUS ? n && o.default.track(e.name, e.data) : console.warn('Unknown updater analytic event '.concat(e.name))) : this._tracker.trackEvent(e);
        }),
            this._tracker.submissionReady() && (o.default.track(c.rMx.APP_MODULES_UPDATED, this._tracker.getStats()), this._tracker.reset());
    }
    constructor(...e) {
        super(...e), d(this, '_tracker', new u.Z());
    }
}
n.Z = new f();
