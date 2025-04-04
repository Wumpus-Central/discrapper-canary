n.d(t, { Z: () => s }), n(653041), n(177593), n(733860);
var r = n(427786),
    i = n.n(r);
function o(e, t, n) {
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
let a = new (n(710845).Z)('Queue');
class s {
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
            { message: t, success: n, logId: r } = e,
            i = (t, i) => {
                if ((this.logger.log('Finished draining message from queue LogId:'.concat(r, ' QueueLength: ').concat(this.queue.length)), (this.draining = !1), null == t)) {
                    setImmediate(() => this._drainIfNecessary());
                    try {
                        n(i);
                    } catch (e) {
                        this.logger.error('', e);
                    }
                } else {
                    var o;
                    let n = null != (o = t.retryAfter) ? o : this.defaultRetryAfter;
                    this.logger.info('Rate limited. Delaying draining of queue for '.concat(n, ' ms. LogId:').concat(r, ' QueueLength: ').concat(this.queue.length)),
                        (this.timeout = setTimeout(() => {
                            this.queue.unshift(e), (this.timeout = null), this._drainIfNecessary();
                        }, n));
                }
            };
        this.logger.log('Draining message from queue LogId:'.concat(r, ' QueueLength: ').concat(this.queue.length)), this.drain(t, i);
    }
    constructor(e = a, t = 100) {
        o(this, 'logger', void 0), o(this, 'defaultRetryAfter', void 0), o(this, 'queue', void 0), o(this, 'timeout', void 0), o(this, 'draining', void 0), (this.logger = e), (this.defaultRetryAfter = t), (this.queue = new (i())()), (this.timeout = null), (this.draining = !1);
    }
}
