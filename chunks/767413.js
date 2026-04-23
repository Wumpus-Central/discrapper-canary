"use strict";
n.d(t, { A: () => s });
var r = n(860407),
    i = n(180944);
class s {
    originalPrefix;
    table;
    get prefix() {
        return this.table.prefix;
    }
    constructor(e, t, n, r = !0) {
        (this.originalPrefix = e), (this.table = new i.X([e], t, n, r));
    }
    withoutLogging() {
        return new s(this.originalPrefix, this.table.tableId, this.table.database, !1);
    }
    get(e, t, n) {
        return this.table.get([e, t, l(n)]);
    }
    getLatest(e, t, n) {
        return this.table.getMany([e, t], { ordering: r.J.Descending, limit: n });
    }
    getRange(e, t, n, r, i) {
        return this.table.getRange([e, t, l(n)], [e, t, l(r)], i);
    }
    getMostRecents(e) {
        return this.table.messages.getLatest(e);
    }
    put(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r.hh.Replace;
        return this.table.put(o(e, t, n), i);
    }
    putAll(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r.hh.Replace,
            s = n.map((n) => o(e, t, n));
        return this.table.putAll(s, i);
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
        return this.table.delete([e, t, l(n)]);
    }
    transaction(e, t) {
        return this.table.transaction((t) => e(new a(t)), t);
    }
    upgradeTransaction(e) {
        return new a(this.table.upgradeTransaction(e));
    }
}
class a {
    transaction;
    static fromTableTransaction(e) {
        return new a(e);
    }
    static fromDatabaseTransaction(e, t, n) {
        return new a(new i.l(e, t, n));
    }
    constructor(e) {
        this.transaction = e;
    }
    put(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r.hh.Replace;
        this.transaction.put(o(e, t, n), i);
    }
    putAll(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r.hh.Replace,
            s = n.map((n) => o(e, t, n));
        this.transaction.putAll(s, i);
    }
    replaceChannel(e, t, n) {
        this.deleteChannel(e, t), this.putAll(e, t, n);
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
        this.transaction.delete([e, t, l(n)]);
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
}
function o(e, t, n) {
    let r = l(n.id);
    return { key: [e, t, r], data: n, generation: r };
}
function l(e) {
    return e.padStart(19, "0");
}
