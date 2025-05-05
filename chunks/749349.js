n.d(t, { Z: () => c });
var r = n(317770),
    i = n(626135),
    o = n(358085),
    a = n(998502),
    s = n(981631);
class l extends r.Z {
    _initialize() {
        o.isPlatformEmbedded &&
            (a.ZP.on('APP_PUSH_ANALYTICS', (e, t) => {
                this._handleEventResponse(t);
            }),
            this.processModuleEvents());
    }
    _terminate() {}
    processModuleEvents() {
        try {
            a.ZP.send('APP_GET_ANALYTICS_EVENTS');
        } catch (e) {
            console.error('[analytics] failed to send analytics events query: '.concat(e));
        }
    }
    _handleEventResponse(e) {
        null != e &&
            e.forEach((e) => {
                'cdm' === e.type ? (e.name === s.rMx.CDM_LOAD_STATUS || e.name === s.rMx.CDM_READY_COMPLETE ? i.default.track(e.name, e.data) : console.log('[analytics] received unknown cdm analytic event '.concat(e.name))) : 'desktop_tti' === e.type && (e.name === s.rMx.DESKTOP_TTI ? i.default.track(e.name, e.data) : console.log('[analytics] received unknown desktop_tti analytic event '.concat(e.name)));
            });
    }
}
let c = new l();
