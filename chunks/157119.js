n.d(t, { R: () => l });
var r = n(231563),
    i = n(351960),
    a = n(491940),
    o = n(98076),
    _ = n(549040),
    s = n(350171),
    c = n(889929),
    E = n(646866);
class l extends r.W {
    constructor(e) {
        let t = {
                parentSpanIsAlwaysRootSpan: !0,
                ...e,
            },
            n = c.m9.SENTRY_SDK_SOURCE || (0, a.S)();
        (0, i.V)(t, "browser", ["browser"], n),
            super(t),
            t.sendClientReports &&
                c.m9.document &&
                c.m9.document.addEventListener("visibilitychange", () => {
                    "hidden" === c.m9.document.visibilityState && this._flushOutcomes();
                });
    }
    eventFromException(e, t) {
        return (0, s.dr)(this._options.stackParser, e, t, this._options.attachStacktrace);
    }
    eventFromMessage(e, t = "info", n) {
        return (0, s.aB)(this._options.stackParser, e, t, n, this._options.attachStacktrace);
    }
    captureUserFeedback(e) {
        if (!this._isEnabled()) {
            _.X && o.kg.warn("SDK not enabled, will not capture user feedback.");
            return;
        }
        let t = (0, E.r)(e, {
            metadata: this.getSdkMetadata(),
            dsn: this.getDsn(),
            tunnel: this.getOptions().tunnel,
        });
        this.sendEnvelope(t);
    }
    _prepareEvent(e, t, n) {
        return (e.platform = e.platform || "javascript"), super._prepareEvent(e, t, n);
    }
}
