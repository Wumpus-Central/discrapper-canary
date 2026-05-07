"use strict";
n.d(t, { A: () => a }), n(667532), n(321073);
let i = globalThis.__getTotalRequireTime ?? (() => 0),
    r = "u" > typeof performance;
class s {
    isTracing_ = !0;
    endTime_ = Date.now() + 15e3;
    lastImportDuration = 0;
    logGroups = [{ index: 0, timestamp: Date.now(), logs: [], nativeLogs: [] }];
    logs = this.logGroups[0].logs;
    prefix = "";
    get isTracing() {
        return !!r && !!this.isTracing_ && (!(Date.now() > this.endTime_) || ((this.isTracing_ = !1), !1));
    }
    get endTime() {
        return this.endTime_;
    }
    set endTime(e) {
        (this.endTime_ = e), (this.isTracing_ = !0);
    }
    resumeTracing() {
        this.isTracing ||
            (this.logGroups.unshift({ index: this.logGroups.length, timestamp: Date.now(), logs: [], nativeLogs: [] }),
            (this.logs = this.logGroups[0].logs)),
            (this.endTime = Date.now() + 1e4);
    }
    mark(e, t, n) {
        this.isTracing &&
            (this.logs.push({ emoji: e, prefix: `${this.prefix}`, log: t, delta: n, timestamp: Date.now() }),
            this.addImportLogDetail());
    }
    markAndLog(e, t, n, i) {
        e.log(n),
            this.isTracing &&
                (this.logs.push({ emoji: t, prefix: this.prefix, log: n, delta: i, timestamp: Date.now() }),
                this.addImportLogDetail());
    }
    addImportLogDetail() {
        let e = i();
        e - this.lastImportDuration > 25 &&
            (this.addDetail("JS Imports", Math.ceil(e) + "ms"), (this.lastImportDuration = e));
    }
    markWithDelta(e, t) {
        let n = this.logs[this.logs.length - 1];
        this.mark(e, t, null != n && null != n.timestamp ? Date.now() - n.timestamp : void 0);
    }
    markAt(e, t, n) {
        if (!this.isTracing) return;
        let i = 0;
        for (; i < this.logs.length; i++) {
            let { timestamp: e } = this.logs[i];
            if (null != e && e > n) break;
        }
        this.logs.splice(i, 0, { emoji: e, log: t, timestamp: n, prefix: this.logs[i]?.prefix ?? "" });
    }
    addDetail(e, t) {
        this.isTracing &&
            this.logs.push({
                emoji: this.logs[this.logs.length - 1].emoji,
                prefix: this.prefix,
                log: `  \u{21AA} ${e} ${t}`,
            });
    }
    time(e, t, n) {
        if (!this.isTracing) return n();
        let i = this.prefix;
        this.mark(e, `Start ${t}`), (this.prefix += "| ");
        let r = Date.now(),
            s = n(),
            a = Date.now() - r;
        return (this.prefix = i), this.mark(e, `Finish ${t}`, a), s;
    }
    async timeAsync(e, t, n) {
        if (!this.isTracing) return n();
        this.mark(e, `Start ${t}`);
        let i = Date.now(),
            r = await n(),
            s = Date.now() - i;
        return this.mark(e, `Finish ${t}`, s), r;
    }
    setServerTrace(e) {
        this.logGroups[0].serverTrace = e;
    }
}
let a = new s();
