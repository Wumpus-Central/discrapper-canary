n.d(t, { u: () => s }), n(627494), n(757143);
var i = n(503461),
    r = n(190313);
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
    get prefix() {
        return this.table.prefix;
    }
    withoutLogging() {
        return new s(this.originalPrefix, this.table.tableId, this.table.database, !1);
    }
    get(e, t, n) {
        return this.table.get([e, t, u(n)]);
    }
    getLatest(e, t, n) {
        return this.table.getMany([e, t], {
            ordering: i.Sk.Descending,
            limit: n
        });
    }
    getRange(e, t, n, i, r) {
        return this.table.getRange([e, t, u(n)], [e, t, u(i)], r);
    }
    getMostRecents(e) {
        return this.table.messages.getLatest(e);
    }
    put(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.Sn.Replace;
        return this.table.put(l(e, t, n), r);
    }
    putAll(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.Sn.Replace,
            a = n.map((n) => l(e, t, n));
        return this.table.putAll(a, r);
    }
    deleteAll() {
        return this.table.delete();
    }
    deleteGuild(e) {
        return this.table.delete([e]);
    }
    deleteChannel(e, t) {
        return this.table.delete([e, t]);
    }
    deleteMessage(e, t, n) {
        return this.table.delete([e, t, u(n)]);
    }
    transaction(e, t) {
        return this.table.transaction((t) => e(new o(t)), t);
    }
    upgradeTransaction(e) {
        return new o(this.table.upgradeTransaction(e));
    }
    constructor(e, t, n, i = !0) {
        a(this, 'originalPrefix', void 0), a(this, 'table', void 0), (this.originalPrefix = e), (this.table = new r.i([e], t, n, i));
    }
}
class o {
    static fromTableTransaction(e) {
        return new o(e);
    }
    static fromDatabaseTransaction(e, t, n) {
        return new o(new r.E(e, t, n));
    }
    put(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.Sn.Replace;
        this.transaction.put(l(e, t, n), r);
    }
    putAll(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.Sn.Replace,
            a = n.map((n) => l(e, t, n));
        this.transaction.putAll(a, r);
    }
    replaceAll(e, t, n) {
        let i = n.map((n) => l(e, t, n));
        this.transaction.replaceAll(i);
    }
    deleteAll() {
        this.transaction.delete();
    }
    deleteGuild(e) {
        this.transaction.delete([e]);
    }
    deleteChannel(e, t) {
        this.transaction.delete([e, t]);
    }
    deleteMessage(e, t, n) {
        this.transaction.delete([e, t, u(n)]);
    }
    trimOrphans(e) {
        this.transaction.messages.trimOrphans(e);
    }
    trimChannel(e, t, n) {
        this.transaction.messages.trimChannel([e, t], n);
    }
    trimChannelsIn(e, t) {
        this.transaction.messages.trimChannelsIn(e, t);
    }
    trimChannelsNotIn(e, t) {
        this.transaction.messages.trimChannelsNotIn(e, t);
    }
    constructor(e) {
        a(this, 'transaction', void 0), (this.transaction = e);
    }
}
function l(e, t, n) {
    let i = u(n.id);
    return {
        key: [e, t, i],
        data: n,
        generation: i
    };
}
function u(e) {
    let t = 19;
    return e.padStart(t, '0');
}
