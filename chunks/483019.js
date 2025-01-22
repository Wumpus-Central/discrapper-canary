r.d(n, {
    Z: function () {
        return p;
    }
});
var i = r(47120);
var a = r(392711),
    o = r.n(a),
    s = r(846519),
    l = r(710845),
    u = r(70956),
    c = r(709054);
function d(e, n, r) {
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
let f = 1 * u.Z.Millis.MINUTE;
class p {
    reset() {
        (this._subscriptions = {}), (this._unsubscriptions = {}), this._unsubscribe.cancel();
    }
    get(e) {
        var n;
        let r = null !== (n = this._subscriptions[e]) && void 0 !== n ? n : {};
        return c.default.keys(r);
    }
    clear(e) {
        delete this._subscriptions[e], delete this._unsubscriptions[e];
    }
    subscribe(e, n) {
        var r, i;
        let a = null !== (r = this._subscriptions[e]) && void 0 !== r ? r : {};
        (a[n] = (null !== (i = a[n]) && void 0 !== i ? i : 0) + 1), (this._subscriptions[e] = a), 1 === a[n] && this._onChange(e, this.get(e)), this.checkForLeaks(e, n);
    }
    isSubscribed(e, n) {
        return null != this._subscriptions[e] && null != this._subscriptions[e][n];
    }
    isSubscribedToAnyMember(e) {
        return this.get(e).length > 0;
    }
    unsubscribe(e, n) {
        var r, i;
        if (!this.isSubscribed(e, n)) return;
        let a = null !== (r = this._unsubscriptions[e]) && void 0 !== r ? r : {};
        (a[n] = (null !== (i = a[n]) && void 0 !== i ? i : 0) + 1), (this._unsubscriptions[e] = a), 1 === a[n] && this._unsubscribe.delay(!1);
    }
    checkForLeaks(e, n) {
        var r, i, a, o;
        let s = null !== (a = null === (r = this._subscriptions[e]) || void 0 === r ? void 0 : r[n]) && void 0 !== a ? a : 0,
            u = s - (null !== (o = null === (i = this._unsubscriptions[e]) || void 0 === i ? void 0 : i[n]) && void 0 !== o ? o : 0);
        u > 5 && new l.Z('GuildMemberSubscriptions').warn('GuildMemberSubscriptions.subscribe(...): Potential reference leak! ('.concat(u, ' subscriptions)'));
    }
    flushUnsubscriptions() {
        if (!o().isEmpty(this._unsubscriptions))
            o().forEach(this._unsubscriptions, (e, n) => {
                let r = this._subscriptions[n];
                o().forEach(e, (e, n) => {
                    var i;
                    (r[n] = (null !== (i = r[n]) && void 0 !== i ? i : 0) - e), r[n] <= 0 && delete r[n];
                }),
                    o().isEmpty(r) && delete this._subscriptions[n],
                    this._onChange(n, this.get(n));
            }),
                (this._unsubscriptions = {});
    }
    constructor(e) {
        d(this, '_subscriptions', {}), d(this, '_unsubscriptions', {}), d(this, '_onChange', void 0), d(this, '_unsubscribe', new s.sW(f, () => this.flushUnsubscriptions())), (this._onChange = e);
    }
}
