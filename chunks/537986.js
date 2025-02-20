n.d(t, { Z: () => l }), n(653041), n(47120);
var r = n(392711),
    i = n.n(r),
    o = n(846519);
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
class s {
    acknowledge(e) {
        this._unacknowledgedRequests.delete(e), this._pendingRequests.delete(e);
    }
    flushRequests(e) {
        if (0 === this._pendingRequests.size) return;
        let t = [];
        this._pendingRequests.forEach((e) => {
            this._guildMemberExists(e) || (this._unacknowledgedRequests.add(e), this._sentRequests.add(e), t.push(e));
        }),
            t.length > 0 && e(this._guildId, t),
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
    constructor(e, t) {
        a(this, '_guildId', void 0), a(this, '_pendingRequests', new Set()), a(this, '_sentRequests', new Set()), a(this, '_unacknowledgedRequests', new Set()), a(this, '_guildMemberExists', void 0), (this._guildId = e), (this._guildMemberExists = (n) => t(e, n));
    }
}
class l {
    reset() {
        (this._guildStates = {}), this._flush.cancel();
    }
    request(e, t) {
        !1 !== this._getGuildState(e).request(t) && this._flush.delay(!1);
    }
    acknowledge(e, t) {
        this._getGuildState(e).acknowledge(t);
    }
    flushRequests() {
        i().forEach(this._guildStates, (e) => e.flushRequests(this._onChange));
    }
    requestUnacknowledged() {
        i().reduce(this._guildStates, (e, t) => !1 !== t.requestUnacknowledged() || t, !1) && this._flush.delay();
    }
    _getGuildState(e) {
        let t = this._guildStates[e];
        return null == t && (t = this._guildStates[e] = new s(e, this._guildMemberExists)), t;
    }
    constructor(e, t) {
        a(this, '_onChange', void 0), a(this, '_guildMemberExists', void 0), a(this, '_guildStates', {}), a(this, '_flush', new o.sW(0, () => this.flushRequests())), (this._guildMemberExists = e), (this._onChange = t);
    }
}
