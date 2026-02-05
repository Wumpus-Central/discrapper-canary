"use strict";
n.d(t, { A: () => s }), n(321073), n(142703), n(667532);
var r = n(677623),
    i = n.n(r);
let a = new (n(626584).A)("Queue");
class s {
    logger;
    defaultRetryAfter;
    queue = new (i())();
    timeout = null;
    draining = !1;
    constructor(e = a, t = 100) {
        (this.logger = e), (this.defaultRetryAfter = t);
    }
    enqueue(e, t, n) {
        this.queue.push({ message: e, success: t, logId: n }), this._drainIfNecessary();
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
                if (
                    (this.logger.log(
                        `Finished draining message from queue LogId:${r} QueueLength: ${this.queue.length}`,
                    ),
                    (this.draining = !1),
                    null == t)
                ) {
                    setImmediate(() => this._drainIfNecessary());
                    try {
                        n(i);
                    } catch (e) {
                        this.logger.error("", e);
                    }
                } else {
                    let n = t.retryAfter ?? this.defaultRetryAfter;
                    this.logger.info(
                        `Rate limited. Delaying draining of queue for ${n} ms. LogId:${r} QueueLength: ${this.queue.length}`,
                    ),
                        (this.timeout = setTimeout(() => {
                            this.queue.unshift(e), (this.timeout = null), this._drainIfNecessary();
                        }, n));
                }
            };
        this.logger.log(`Draining message from queue LogId:${r} QueueLength: ${this.queue.length}`), this.drain(t, i);
    }
}
