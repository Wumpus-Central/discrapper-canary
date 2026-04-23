"use strict";
n.d(t, { A: () => c });
var r = n(272355),
    i = n(954571),
    s = n(723702),
    a = n(837921),
    o = n(777009),
    l = n(652215);
class u extends r.A {
    _tracker = new o.A();
    _initialize() {
        s.isPlatformEmbedded &&
            (a.Ay.on("UPDATE_DOWNLOADED", () => this.processModuleEvents()),
            a.Ay.on("MODULE_INSTALLED", (e, t, n) => this.processModuleEvents()),
            a.Ay.on("UPDATER_HISTORY_RESPONSE", (e, t) => {
                this._handleHistoryResponse(t);
            }),
            this.processModuleEvents());
    }
    _terminate() {}
    processModuleEvents() {
        a.Ay.send("UPDATER_HISTORY_QUERY_AND_TRUNCATE");
    }
    _handleHistoryResponse(e) {
        if (null == e) return;
        let t = 0 === Math.floor(500 * Math.random());
        e.forEach((e) => {
            "analytics" === e.type
                ? e.name === l.HAw.UPDATER_METRICS_DOWNLOAD ||
                  e.name === l.HAw.UPDATER_METRICS_INSTALL ||
                  e.name === l.HAw.UPDATER_METRICS_COMBINED ||
                  e.name === l.HAw.UPDATER_METRICS_TRANSITION_STATUS
                    ? t && i.default.track(e.name, e.data)
                    : console.warn(`Unknown updater analytic event ${e.name}`)
                : this._tracker.trackEvent(e);
        }),
            this._tracker.submissionReady() &&
                (i.default.track(l.HAw.APP_MODULES_UPDATED, this._tracker.getStats()), this._tracker.reset());
    }
}
let c = new u();
