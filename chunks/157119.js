r.d(t, { R: () => l });
var n = r(231563),
    a = r(351960),
    i = r(491940),
    o = r(98076),
    _ = r(549040),
    s = r(350171),
    c = r(889929),
    E = r(646866);
class l extends n.W {
    constructor(e) {
        let t = {
                parentSpanIsAlwaysRootSpan: !0,
                ...e,
            },
            r = c.m9.SENTRY_SDK_SOURCE || (0, i.S)();
        (0, a.V)(t, "browser", ["browser"], r),
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
    eventFromMessage(e, t = "info", r) {
        return (0, s.aB)(this._options.stackParser, e, t, r, this._options.attachStacktrace);
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
    _prepareEvent(e, t, r) {
        return (e.platform = e.platform || "javascript"), super._prepareEvent(e, t, r);
    }
}
