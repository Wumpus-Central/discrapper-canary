"use strict";
n.d(t, { L: () => s });
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
    get(e) {
        return this.table.get([e]);
    }
    getMany(e) {
        return this.table.getMany([], e);
    }
    getRange(e, t, n) {
        return this.table.getRange([e], [t], n);
    }
    getKvEntries() {
        return this.table.getKvEntries();
    }
    getMapEntries() {
        return this.table.getMapEntries();
    }
    getIds() {
        return this.table.getChildIds([]);
    }
    getParentId(e) {
        return this.table.getParentId([null, e]);
    }
    put(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.hh.Replace;
        return this.table.put({ key: [e], data: t, generation: null }, n);
    }
    delete(e) {
        return 0 == arguments.length ? this.table.delete() : this.table.delete([e]);
    }
    transaction(e, t) {
        return this.table.transaction((t) => e(new a(t)), t);
    }
    upgradeTransaction(e) {
        return new a(this.table.upgradeTransaction(e));
    }
    getManySyncUnsafe(e) {
        return this.table.getManySyncUnsafe([], e);
    }
    getMapEntriesSyncUnsafe() {
        return this.table.getMapEntriesSyncUnsafe();
    }
}
class a {
    transaction;
    static fromDatabaseTransaction(e, t, n) {
        return new a(new i.l(e, t, n));
    }
    constructor(e) {
        this.transaction = e;
    }
    put(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.hh.Replace;
        this.transaction.put({ key: [e], data: t, generation: null }, n);
    }
    delete(e) {
        return 0 == arguments.length ? this.transaction.delete() : this.transaction.delete([e]);
    }
}
