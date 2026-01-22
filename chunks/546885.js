n.d(t, { A: () => l }), n(321073), n(896048);
var r = n(735438),
    i = n.n(r),
    a = n(451988);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class o {
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
        s(this, "_guildId", void 0),
            s(this, "_pendingRequests", new Set()),
            s(this, "_sentRequests", new Set()),
            s(this, "_unacknowledgedRequests", new Set()),
            s(this, "_guildMemberExists", void 0),
            (this._guildId = e),
            (this._guildMemberExists = (n) => t(e, n));
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
        return null == t && (t = this._guildStates[e] = new o(e, this._guildMemberExists)), t;
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
            {
                pendingRequestGuildIds: t,
                unacknowledgedRequestGuildIds: n,
                sentRequestGuildIds: r,
            }
        );
    }
    constructor(e, t) {
        s(this, "_onChange", void 0),
            s(this, "_guildMemberExists", void 0),
            s(this, "_guildStates", {}),
            s(this, "_flush", new a.J_(0, () => this.flushRequests())),
            (this._guildMemberExists = e),
            (this._onChange = t);
    }
}
