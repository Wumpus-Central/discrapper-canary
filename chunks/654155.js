i.r(t), i.d(t, { default: () => s });
var l = i(786000),
    n = i(597796);
function r(e, t, i) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = i),
        e
    );
}
class a {
    start() {
        this.isPolling ||
            ((this.isPolling = !0),
            (this.pollIntervalId = setInterval(() => {
                this.poll();
            }, n.G)));
    }
    stop() {
        this.isPolling &&
            ((this.isPolling = !1),
            null != this.pollIntervalId && (clearInterval(this.pollIntervalId), (this.pollIntervalId = null)),
            this.eventPoller.reset());
    }
    getState() {
        return { isPolling: this.isPolling };
    }
    async poll() {
        await this.eventPoller.poll();
    }
    constructor(e) {
        r(this, "pollIntervalId", null),
            r(this, "isPolling", !1),
            r(this, "eventPoller", void 0),
            (this.eventPoller = new l.Z(e));
    }
}
let s = (e) => new a(e);
