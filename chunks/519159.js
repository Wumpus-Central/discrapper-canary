function r(e, t, n) {
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
n.d(t, { m: () => i }), n(539854);
class i {
    clear() {
        this.timeline.length = 0;
    }
    add(e) {
        if (0 === this.timeline.length || this.timeline[this.timeline.length - 1].timestamp <= e.timestamp) {
            this.timeline.push(e), this.cull();
            return;
        }
        let t = this.timeline.length;
        for (let n = this.timeline.length - 1; n >= 0; n--)
            if (this.timeline[n].timestamp <= e.timestamp) {
                t = n + 1;
                break;
            }
        t === this.timeline.length && this.timeline[0].timestamp > e.timestamp && (t = 0),
            this.timeline.splice(t, 0, e),
            this.cull();
    }
    read() {
        return this.cull(), this.timeline;
    }
    cull() {
        let e = Date.now() - 1000 * this.timelineLengthSeconds;
        this.timeline = this.timeline.filter((t) => t.timestamp >= e);
    }
    constructor(e) {
        r(this, "timeline", []),
            r(this, "timelineLengthSeconds", void 0),
            (this.timelineLengthSeconds = null != e ? e : 300);
    }
}
