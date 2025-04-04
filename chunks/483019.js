n.d(t, { Z: () => d }), n(47120);
var r = n(392711),
    i = n.n(r),
    o = n(846519),
    a = n(710845),
    s = n(70956),
    l = n(709054);
function c(e, t, n) {
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
let u = +s.Z.Millis.MINUTE;
class d {
    reset() {
        (this._subscriptions = {}), (this._unsubscriptions = {}), this._unsubscribe.cancel();
    }
    get(e) {
        var t;
        let n = null != (t = this._subscriptions[e]) ? t : {};
        return l.default.keys(n);
    }
    clear(e) {
        delete this._subscriptions[e], delete this._unsubscriptions[e];
    }
    subscribe(e, t) {
        var n, r;
        let i = null != (n = this._subscriptions[e]) ? n : {};
        (i[t] = (null != (r = i[t]) ? r : 0) + 1), (this._subscriptions[e] = i), 1 === i[t] && this._onChange(e, this.get(e)), this.checkForLeaks(e, t);
    }
    isSubscribed(e, t) {
        return null != this._subscriptions[e] && null != this._subscriptions[e][t];
    }
    isSubscribedToAnyMember(e) {
        return this.get(e).length > 0;
    }
    unsubscribe(e, t) {
        var n, r;
        if (!this.isSubscribed(e, t)) return;
        let i = null != (n = this._unsubscriptions[e]) ? n : {};
        (i[t] = (null != (r = i[t]) ? r : 0) + 1), (this._unsubscriptions[e] = i), 1 === i[t] && this._unsubscribe.delay(!1);
    }
    checkForLeaks(e, t) {
        var n, r, i, o;
        let s = (null != (i = null == (n = this._subscriptions[e]) ? void 0 : n[t]) ? i : 0) - (null != (o = null == (r = this._unsubscriptions[e]) ? void 0 : r[t]) ? o : 0);
        s > 5 && new a.Z('GuildMemberSubscriptions').warn('GuildMemberSubscriptions.subscribe(...): Potential reference leak! ('.concat(s, ' subscriptions)'));
    }
    flushUnsubscriptions() {
        i().isEmpty(this._unsubscriptions) ||
            (i().forEach(this._unsubscriptions, (e, t) => {
                let n = this._subscriptions[t];
                i().forEach(e, (e, t) => {
                    var r;
                    (n[t] = (null != (r = n[t]) ? r : 0) - e), n[t] <= 0 && delete n[t];
                }),
                    i().isEmpty(n) && delete this._subscriptions[t],
                    this._onChange(t, this.get(t));
            }),
            (this._unsubscriptions = {}));
    }
    constructor(e) {
        c(this, '_subscriptions', {}), c(this, '_unsubscriptions', {}), c(this, '_onChange', void 0), c(this, '_unsubscribe', new o.sW(u, () => this.flushUnsubscriptions())), (this._onChange = e);
    }
}
