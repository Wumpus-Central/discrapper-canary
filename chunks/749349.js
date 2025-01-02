var i = r(317770),
    a = r(626135),
    s = r(358085),
    o = r(998502),
    l = r(981631);
class u extends i.Z {
    _initialize() {
        if (!!s.isPlatformEmbedded)
            o.ZP.on('APP_PUSH_ANALYTICS', (e, n) => {
                this._handleEventResponse(n);
            }),
                this.processModuleEvents();
    }
    _terminate() {}
    processModuleEvents() {
        try {
            o.ZP.send('APP_GET_ANALYTICS_EVENTS');
        } catch (e) {
            console.error('[analytics] failed to send analytics events query: '.concat(e));
        }
    }
    _handleEventResponse(e) {
        if (null != e)
            e.forEach((e) => {
                'cdm' === e.type ? (e.name === l.rMx.CDM_LOAD_STATUS || e.name === l.rMx.CDM_READY_COMPLETE ? a.default.track(e.name, e.data) : console.log('[analytics] received unknown cdm analytic event '.concat(e.name))) : 'desktop_tti' === e.type && (e.name === l.rMx.DESKTOP_TTI ? a.default.track(e.name, e.data) : console.log('[analytics] received unknown desktop_tti analytic event '.concat(e.name)));
            });
    }
}
n.Z = new u();
