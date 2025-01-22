r.d(n, {
    u: function () {
        return u;
    }
});
var i = r(627494);
var a = r(757143);
var o = r(503461),
    s = r(190313);
function l(e, n, r) {
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
class u {
    get prefix() {
        return this.table.prefix;
    }
    withoutLogging() {
        return new u(this.originalPrefix, this.table.tableId, this.table.database, !1);
    }
    get(e, n, r) {
        return this.table.get([e, n, f(r)]);
    }
    getLatest(e, n, r) {
        return this.table.getMany([e, n], {
            ordering: o.Sk.Descending,
            limit: r
        });
    }
    getRange(e, n, r, i, a) {
        return this.table.getRange([e, n, f(r)], [e, n, f(i)], a);
    }
    getMostRecents(e) {
        return this.table.messages.getLatest(e);
    }
    put(e, n, r) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o.Sn.Replace;
        return this.table.put(d(e, n, r), i);
    }
    putAll(e, n, r) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o.Sn.Replace,
            a = r.map((r) => d(e, n, r));
        return this.table.putAll(a, i);
    }
    deleteAll() {
        return this.table.delete();
    }
    deleteGuild(e) {
        return this.table.delete([e]);
    }
    deleteChannel(e, n) {
        return this.table.delete([e, n]);
    }
    deleteMessage(e, n, r) {
        return this.table.delete([e, n, f(r)]);
    }
    transaction(e, n) {
        return this.table.transaction((n) => e(new c(n)), n);
    }
    upgradeTransaction(e) {
        return new c(this.table.upgradeTransaction(e));
    }
    constructor(e, n, r, i = !0) {
        l(this, 'originalPrefix', void 0), l(this, 'table', void 0), (this.originalPrefix = e), (this.table = new s.i([e], n, r, i));
    }
}
class c {
    static fromTableTransaction(e) {
        return new c(e);
    }
    static fromDatabaseTransaction(e, n, r) {
        return new c(new s.E(e, n, r));
    }
    put(e, n, r) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o.Sn.Replace;
        this.transaction.put(d(e, n, r), i);
    }
    putAll(e, n, r) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o.Sn.Replace,
            a = r.map((r) => d(e, n, r));
        this.transaction.putAll(a, i);
    }
    replaceAll(e, n, r) {
        let i = r.map((r) => d(e, n, r));
        this.transaction.replaceAll(i);
    }
    deleteAll() {
        this.transaction.delete();
    }
    deleteGuild(e) {
        this.transaction.delete([e]);
    }
    deleteChannel(e, n) {
        this.transaction.delete([e, n]);
    }
    deleteMessage(e, n, r) {
        this.transaction.delete([e, n, f(r)]);
    }
    trimOrphans(e) {
        this.transaction.messages.trimOrphans(e);
    }
    trimChannel(e, n, r) {
        this.transaction.messages.trimChannel([e, n], r);
    }
    trimChannelsIn(e, n) {
        this.transaction.messages.trimChannelsIn(e, n);
    }
    trimChannelsNotIn(e, n) {
        this.transaction.messages.trimChannelsNotIn(e, n);
    }
    constructor(e) {
        l(this, 'transaction', void 0), (this.transaction = e);
    }
}
function d(e, n, r) {
    let i = f(r.id);
    return {
        key: [e, n, i],
        data: r,
        generation: i
    };
}
function f(e) {
    let n = 19;
    return e.padStart(n, '0');
}
