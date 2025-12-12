n.d(t, { b: () => a });
var r = n(431660),
    i = n(82255);
class a {
    constructor(e = {}) {
        (this._traceId = e.traceId || (0, r.DM)()), (this._spanId = e.spanId || (0, r.DM)().substring(16));
    }
    spanContext() {
        return {
            spanId: this._spanId,
            traceId: this._traceId,
            traceFlags: i.ve,
        };
    }
    end(e) {}
    setAttribute(e, t) {
        return this;
    }
    setAttributes(e) {
        return this;
    }
    setStatus(e) {
        return this;
    }
    updateName(e) {
        return this;
    }
    isRecording() {
        return !1;
    }
    addEvent(e, t, n) {
        return this;
    }
    addLink(e) {
        return this;
    }
    addLinks(e) {
        return this;
    }
    recordException(e, t) {}
}
