"use strict";
n.d(t, { A: () => c });
var r = n(735438),
    i = n.n(r),
    s = n(451988),
    a = n(626584),
    o = n(927813),
    l = n(661191);
let u = +o.A.Millis.MINUTE;
class c {
    _subscriptions = {};
    _unsubscriptions = {};
    _onChange;
    _unsubscribe = new s.J_(u, () => this.flushUnsubscriptions());
    constructor(e) {
        this._onChange = e;
    }
    reset() {
        (this._subscriptions = {}), (this._unsubscriptions = {}), this._unsubscribe.cancel();
    }
    get(e) {
        let t = this._subscriptions[e] ?? {};
        return l.default.keys(t);
    }
    clear(e) {
        delete this._subscriptions[e], delete this._unsubscriptions[e];
    }
    subscribe(e, t) {
        let n = this._subscriptions[e] ?? {};
        (n[t] = (n[t] ?? 0) + 1),
            (this._subscriptions[e] = n),
            1 === n[t] && this._onChange(e, this.get(e)),
            this.checkForLeaks(e, t);
    }
    isSubscribed(e, t) {
        return null != this._subscriptions[e] && null != this._subscriptions[e][t];
    }
    isSubscribedToAnyMember(e) {
        return this.get(e).length > 0;
    }
    unsubscribe(e, t) {
        if (!this.isSubscribed(e, t)) return;
        let n = this._unsubscriptions[e] ?? {};
        (n[t] = (n[t] ?? 0) + 1), (this._unsubscriptions[e] = n), 1 === n[t] && this._unsubscribe.delay(!1);
    }
    checkForLeaks(e, t) {
        let n = (this._subscriptions[e]?.[t] ?? 0) - (this._unsubscriptions[e]?.[t] ?? 0);
        n > 5 &&
            new a.A("GuildMemberSubscriptions").warn(
                `GuildMemberSubscriptions.subscribe(...): Potential reference leak! (${n} subscriptions)`,
            );
    }
    flushUnsubscriptions() {
        i().isEmpty(this._unsubscriptions) ||
            (i().forEach(this._unsubscriptions, (e, t) => {
                let n = this._subscriptions[t];
                i().forEach(e, (e, t) => {
                    (n[t] = (n[t] ?? 0) - e), n[t] <= 0 && delete n[t];
                }),
                    i().isEmpty(n) && delete this._subscriptions[t],
                    this._onChange(t, this.get(t));
            }),
            (this._unsubscriptions = {}));
    }
}
