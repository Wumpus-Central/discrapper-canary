n.d(t, { Z: () => u });
var i = n(317770),
    r = n(626135),
    a = n(358085),
    s = n(998502),
    o = n(981631);
class l extends i.Z {
    _initialize() {
        a.isPlatformEmbedded &&
            (s.ZP.on('APP_PUSH_ANALYTICS', (e, t) => {
                this._handleEventResponse(t);
            }),
            this.processModuleEvents());
    }
    _terminate() {}
    processModuleEvents() {
        try {
            s.ZP.send('APP_GET_ANALYTICS_EVENTS');
        } catch (e) {
            console.error('[analytics] failed to send analytics events query: '.concat(e));
        }
    }
    _handleEventResponse(e) {
        null != e &&
            e.forEach((e) => {
                'cdm' === e.type ? (e.name === o.rMx.CDM_LOAD_STATUS || e.name === o.rMx.CDM_READY_COMPLETE ? r.default.track(e.name, e.data) : console.log('[analytics] received unknown cdm analytic event '.concat(e.name))) : 'desktop_tti' === e.type && (e.name === o.rMx.DESKTOP_TTI ? r.default.track(e.name, e.data) : console.log('[analytics] received unknown desktop_tti analytic event '.concat(e.name)));
            });
    }
}
let u = new l();
