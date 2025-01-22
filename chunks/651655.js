r.d(n, {
    Z: function () {
        return d;
    }
});
var i = r(653041);
var a = r(177593);
var o = r(733860);
var s = r(427786),
    l = r.n(s);
function u(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let c = new (r(710845).Z)('Queue');
class d {
    enqueue(e, n, r) {
        this.queue.push({
            message: e,
            success: n,
            logId: r
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
            { message: n, success: r, logId: i } = e,
            a = (n, a) => {
                if ((this.logger.log('Finished draining message from queue LogId:'.concat(i, ' QueueLength: ').concat(this.queue.length)), (this.draining = !1), null == n)) {
                    setImmediate(() => this._drainIfNecessary());
                    try {
                        r(a);
                    } catch (e) {
                        this.logger.error('', e);
                    }
                } else {
                    var o;
                    let r = null !== (o = n.retryAfter) && void 0 !== o ? o : this.defaultRetryAfter;
                    this.logger.info('Rate limited. Delaying draining of queue for '.concat(r, ' ms. LogId:').concat(i, ' QueueLength: ').concat(this.queue.length)),
                        (this.timeout = setTimeout(() => {
                            this.queue.unshift(e), (this.timeout = null), this._drainIfNecessary();
                        }, r));
                }
            };
        this.logger.log('Draining message from queue LogId:'.concat(i, ' QueueLength: ').concat(this.queue.length)), this.drain(n, a);
    }
    constructor(e = c, n = 100) {
        u(this, 'logger', void 0), u(this, 'defaultRetryAfter', void 0), u(this, 'queue', void 0), u(this, 'timeout', void 0), u(this, 'draining', void 0), (this.logger = e), (this.defaultRetryAfter = n), (this.queue = new (l())()), (this.timeout = null), (this.draining = !1);
    }
}
