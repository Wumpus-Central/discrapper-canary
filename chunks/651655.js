n.d(t, { Z: () => o }), n(653041), n(177593), n(733860);
var i = n(427786),
    r = n.n(i);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let s = new (n(710845).Z)('Queue');
class o {
    enqueue(e, t, n) {
        this.queue.push({
            message: e,
            success: t,
            logId: n
        }),
            this._drainIfNecessary();
    }
    get length() {
        return this.queue.length;
    }
    _drainIfNecessary() {
        if (null !== this.timeout || 0 === this.queue.length || !0 === this.draining) return;
        this.draining = !0;
        let e = this.queue.shift(),
            { message: t, success: n, logId: i } = e,
            r = (t, r) => {
                if ((this.logger.log('Finished draining message from queue LogId:'.concat(i, ' QueueLength: ').concat(this.queue.length)), (this.draining = !1), null == t)) {
                    setImmediate(() => this._drainIfNecessary());
                    try {
                        n(r);
                    } catch (e) {
                        this.logger.error('', e);
                    }
                } else {
                    var a;
                    let n = null !== (a = t.retryAfter) && void 0 !== a ? a : this.defaultRetryAfter;
                    this.logger.info('Rate limited. Delaying draining of queue for '.concat(n, ' ms. LogId:').concat(i, ' QueueLength: ').concat(this.queue.length)),
                        (this.timeout = setTimeout(() => {
                            this.queue.unshift(e), (this.timeout = null), this._drainIfNecessary();
                        }, n));
                }
            };
        this.logger.log('Draining message from queue LogId:'.concat(i, ' QueueLength: ').concat(this.queue.length)), this.drain(t, r);
    }
    constructor(e = s, t = 100) {
        a(this, 'logger', void 0), a(this, 'defaultRetryAfter', void 0), a(this, 'queue', void 0), a(this, 'timeout', void 0), a(this, 'draining', void 0), (this.logger = e), (this.defaultRetryAfter = t), (this.queue = new (r())()), (this.timeout = null), (this.draining = !1);
    }
}
