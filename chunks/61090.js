var r;

function i(e, t, n) {
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
n.d(t, {
    A: () => l,
}),
    n(734808),
    n(667532),
    n(321073);
let a = null != (r = globalThis.__getTotalRequireTime) ? r : () => 0,
    s = "u" > typeof performance;
class o {
    get isTracing() {
        return !!s && !!this.isTracing_ && (!(Date.now() > this.endTime_) || ((this.isTracing_ = !1), !1));
    }
    get endTime() {
        return this.endTime_;
    }
    set endTime(e) {
        (this.endTime_ = e), (this.isTracing_ = !0);
    }
    resumeTracing() {
        this.isTracing ||
            (this.logGroups.unshift({
                index: this.logGroups.length,
                timestamp: Date.now(),
                logs: [],
                nativeLogs: [],
            }),
            (this.logs = this.logGroups[0].logs)),
            (this.endTime = Date.now() + 1e4);
    }
    mark(e, t, n) {
        this.isTracing &&
            (this.logs.push({
                emoji: e,
                prefix: "".concat(this.prefix),
                log: t,
                delta: n,
                timestamp: Date.now(),
            }),
            this.addImportLogDetail());
    }
    markAndLog(e, t, n, r) {
        e.log(n),
            this.isTracing &&
                (this.logs.push({
                    emoji: t,
                    prefix: this.prefix,
                    log: n,
                    delta: r,
                    timestamp: Date.now(),
                }),
                this.addImportLogDetail());
    }
    addImportLogDetail() {
        let e = a();
        e - this.lastImportDuration > 25 &&
            (this.addDetail("JS Imports", Math.ceil(e) + "ms"), (this.lastImportDuration = e));
    }
    markWithDelta(e, t) {
        let n = this.logs[this.logs.length - 1];
        this.mark(e, t, null != n && null != n.timestamp ? Date.now() - n.timestamp : void 0);
    }
    markAt(e, t, n) {
        var r, i;
        if (!this.isTracing) return;
        let a = 0;
        for (; a < this.logs.length; a++) {
            let { timestamp: e } = this.logs[a];
            if (null != e && e > n) break;
        }
        this.logs.splice(a, 0, {
            emoji: e,
            log: t,
            timestamp: n,
            prefix: null != (r = null == (i = this.logs[a]) ? void 0 : i.prefix) ? r : "",
        });
    }
    addDetail(e, t) {
        this.isTracing &&
            this.logs.push({
                emoji: this.logs[this.logs.length - 1].emoji,
                prefix: this.prefix,
                log: "  ↪ ".concat(e, " ").concat(t),
            });
    }
    time(e, t, n) {
        if (!this.isTracing) return n();
        let r = this.prefix;
        this.mark(e, "Start ".concat(t)), (this.prefix += "| ");
        let i = Date.now(),
            a = n(),
            s = Date.now() - i;
        return (this.prefix = r), this.mark(e, "Finish ".concat(t), s), a;
    }
    async timeAsync(e, t, n) {
        if (!this.isTracing) return n();
        this.mark(e, "Start ".concat(t));
        let r = Date.now(),
            i = await n(),
            a = Date.now() - r;
        return this.mark(e, "Finish ".concat(t), a), i;
    }
    setServerTrace(e) {
        this.logGroups[0].serverTrace = e;
    }
    constructor() {
        i(this, "isTracing_", !0),
            i(this, "endTime_", Date.now() + 15e3),
            i(this, "lastImportDuration", 0),
            i(this, "logGroups", [
                {
                    index: 0,
                    timestamp: Date.now(),
                    logs: [],
                    nativeLogs: [],
                },
            ]),
            i(this, "logs", this.logGroups[0].logs),
            i(this, "prefix", "");
    }
}
let l = new o();
