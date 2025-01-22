r.d(n, {
    Z: function () {
        return f;
    }
});
var i = r(653041);
var a = r(47120);
var o = r(724458);
var s = r(392711),
    l = r.n(s),
    u = r(846519);
function c(e, n, r) {
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
class d {
    acknowledge(e) {
        this._unacknowledgedRequests.delete(e), this._pendingRequests.delete(e);
    }
    flushRequests(e) {
        if (0 === this._pendingRequests.size) return;
        let n = [];
        this._pendingRequests.forEach((e) => {
            !this._guildMemberExists(e) && (this._unacknowledgedRequests.add(e), this._sentRequests.add(e), n.push(e));
        }),
            n.length > 0 && e(this._guildId, n),
            this._pendingRequests.clear();
    }
    requestUnacknowledged() {
        return (
            0 !== this._unacknowledgedRequests.size &&
            (this._unacknowledgedRequests.forEach((e) => {
                this._guildMemberExists(e) ? this._unacknowledgedRequests.delete(e) : this._pendingRequests.add(e);
            }),
            0 !== this._pendingRequests.size && void 0)
        );
    }
    request(e) {
        if (this._guildMemberExists(e) || this._sentRequests.has(e) || this._pendingRequests.has(e)) return !1;
        this._pendingRequests.add(e);
    }
    constructor(e, n) {
        c(this, '_guildId', void 0), c(this, '_pendingRequests', new Set()), c(this, '_sentRequests', new Set()), c(this, '_unacknowledgedRequests', new Set()), c(this, '_guildMemberExists', void 0), (this._guildId = e), (this._guildMemberExists = (r) => n(e, r));
    }
}
class f {
    reset() {
        (this._guildStates = {}), this._flush.cancel();
    }
    request(e, n) {
        !1 !== this._getGuildState(e).request(n) && this._flush.delay(!1);
    }
    acknowledge(e, n) {
        this._getGuildState(e).acknowledge(n);
    }
    flushRequests() {
        l().forEach(this._guildStates, (e) => e.flushRequests(this._onChange));
    }
    requestUnacknowledged() {
        l().reduce(this._guildStates, (e, n) => !1 !== n.requestUnacknowledged() || n, !1) && this._flush.delay();
    }
    _getGuildState(e) {
        let n = this._guildStates[e];
        return null == n && (n = this._guildStates[e] = new d(e, this._guildMemberExists)), n;
    }
    constructor(e, n) {
        c(this, '_onChange', void 0), c(this, '_guildMemberExists', void 0), c(this, '_guildStates', {}), c(this, '_flush', new u.sW(0, () => this.flushRequests())), (this._guildMemberExists = e), (this._onChange = n);
    }
}
