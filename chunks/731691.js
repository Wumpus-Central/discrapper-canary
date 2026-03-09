"use strict";
n.d(t, { u: () => s });
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
    put(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.hh.Replace;
        return this.transaction((n) => n.put(e, t), `${this.prefix} put`);
    }
    putAll(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.hh.Replace;
        return this.transaction((n) => n.putAll(e, t), `${this.prefix} putAll`);
    }
    replaceAll(e) {
        return this.transaction((t) => t.replaceAll(e), `${this.prefix} replaceAll`);
    }
    delete(e) {
        return this.transaction((t) => t.delete(e), `${this.prefix} delete`);
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
    static cell(e, t) {
        return { key: [e.id], data: e, generation: t };
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
    put(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.hh.Replace;
        return this.transaction.put(s.cell(e, null), t);
    }
    putAll(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.hh.Replace;
        return this.transaction.putAll(
            e.map((e) => s.cell(e, null)),
            t,
        );
    }
    replaceAll(e) {
        this.delete(), this.putAll(e);
    }
    delete(e) {
        return 0 == arguments.length ? this.transaction.delete([]) : this.transaction.delete([e]);
    }
    deleteAllExcept(e) {
        this.transaction.deleteAllExcept([], e);
    }
}
