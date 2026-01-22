n.d(t, { A: () => d }), n(896048);
var r = n(272355),
    i = n(954571),
    a = n(723702),
    s = n(837921),
    o = n(777009),
    l = n(652215);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class u extends r.A {
    _initialize() {
        a.isPlatformEmbedded &&
            (s.Ay.on("UPDATE_DOWNLOADED", () => this.processModuleEvents()),
            s.Ay.on("MODULE_INSTALLED", (e, t, n) => this.processModuleEvents()),
            s.Ay.on("UPDATER_HISTORY_RESPONSE", (e, t) => {
                this._handleHistoryResponse(t);
            }),
            this.processModuleEvents());
    }
    _terminate() {}
    processModuleEvents() {
        s.Ay.send("UPDATER_HISTORY_QUERY_AND_TRUNCATE");
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
                    : console.warn("Unknown updater analytic event ".concat(e.name))
                : this._tracker.trackEvent(e);
        }),
            this._tracker.submissionReady() &&
                (i.default.track(l.HAw.APP_MODULES_UPDATED, this._tracker.getStats()), this._tracker.reset());
    }
    constructor(...e) {
        super(...e), c(this, "_tracker", new o.A());
    }
}
let d = new u();
