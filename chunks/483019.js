n.d(t, { Z: () => d }), n(47120);
var i = n(392711),
    r = n.n(i),
    a = n(846519),
    s = n(710845),
    o = n(70956),
    l = n(709054);
function u(e, t, n) {
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
let c = 1 * o.Z.Millis.MINUTE;
class d {
    reset() {
        (this._subscriptions = {}), (this._unsubscriptions = {}), this._unsubscribe.cancel();
    }
    get(e) {
        var t;
        let n = null !== (t = this._subscriptions[e]) && void 0 !== t ? t : {};
        return l.default.keys(n);
    }
    clear(e) {
        delete this._subscriptions[e], delete this._unsubscriptions[e];
    }
    subscribe(e, t) {
        var n, i;
        let r = null !== (n = this._subscriptions[e]) && void 0 !== n ? n : {};
        (r[t] = (null !== (i = r[t]) && void 0 !== i ? i : 0) + 1), (this._subscriptions[e] = r), 1 === r[t] && this._onChange(e, this.get(e)), this.checkForLeaks(e, t);
    }
    isSubscribed(e, t) {
        return null != this._subscriptions[e] && null != this._subscriptions[e][t];
    }
    isSubscribedToAnyMember(e) {
        return this.get(e).length > 0;
    }
    unsubscribe(e, t) {
        var n, i;
        if (!this.isSubscribed(e, t)) return;
        let r = null !== (n = this._unsubscriptions[e]) && void 0 !== n ? n : {};
        (r[t] = (null !== (i = r[t]) && void 0 !== i ? i : 0) + 1), (this._unsubscriptions[e] = r), 1 === r[t] && this._unsubscribe.delay(!1);
    }
    checkForLeaks(e, t) {
        var n, i, r, a;
        let o = (null !== (r = null === (n = this._subscriptions[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== r ? r : 0) - (null !== (a = null === (i = this._unsubscriptions[e]) || void 0 === i ? void 0 : i[t]) && void 0 !== a ? a : 0);
        o > 5 && new s.Z('GuildMemberSubscriptions').warn('GuildMemberSubscriptions.subscribe(...): Potential reference leak! ('.concat(o, ' subscriptions)'));
    }
    flushUnsubscriptions() {
        !r().isEmpty(this._unsubscriptions) &&
            (r().forEach(this._unsubscriptions, (e, t) => {
                let n = this._subscriptions[t];
                r().forEach(e, (e, t) => {
                    var i;
                    (n[t] = (null !== (i = n[t]) && void 0 !== i ? i : 0) - e), n[t] <= 0 && delete n[t];
                }),
                    r().isEmpty(n) && delete this._subscriptions[t],
                    this._onChange(t, this.get(t));
            }),
            (this._unsubscriptions = {}));
    }
    constructor(e) {
        u(this, '_subscriptions', {}), u(this, '_unsubscriptions', {}), u(this, '_onChange', void 0), u(this, '_unsubscribe', new a.sW(c, () => this.flushUnsubscriptions())), (this._onChange = e);
    }
}
