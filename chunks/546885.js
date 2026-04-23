"use strict";
n.d(t, { A: () => o }), n(321073);
var r = n(735438),
    i = n.n(r),
    s = n(451988);
class a {
    _guildId;
    _pendingRequests = new Set();
    _sentRequests = new Set();
    _unacknowledgedRequests = new Set();
    _guildMemberExists;
    constructor(e, t) {
        (this._guildId = e), (this._guildMemberExists = (n) => t(e, n));
    }
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
}
class o {
    _onChange;
    _guildMemberExists;
    _guildStates = {};
    _flush = new s.J_(0, () => this.flushRequests());
    constructor(e, t) {
        (this._guildMemberExists = e), (this._onChange = t);
    }
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
        i().reduce(this._guildStates, (e, t) => !1 !== t.requestUnacknowledged() || e, !1) && this._flush.delay();
    }
    _getGuildState(e) {
        let t = this._guildStates[e];
        return null == t && (t = this._guildStates[e] = new a(e, this._guildMemberExists)), t;
    }
    getDebugState(e) {
        let t = [],
            n = [],
            r = [];
        return (
            i().forEach(this._guildStates, (i) => {
                i._pendingRequests.has(e) && t.push(i._guildId),
                    i._unacknowledgedRequests.has(e) && n.push(i._guildId),
                    i._sentRequests.has(e) && r.push(i._guildId);
            }),
            { pendingRequestGuildIds: t, unacknowledgedRequestGuildIds: n, sentRequestGuildIds: r }
        );
    }
}
