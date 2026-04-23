"use strict";
n.d(t, { B: () => s });
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
    get(e, t) {
        return this.table.get([e, t]);
    }
    getMany(e, t) {
        return this.table.getMany([e], t);
    }
    getRange(e, t, n, r) {
        return this.table.getRange([e, t], [e, n], r);
    }
    getKvEntries() {
        return this.table.getKvEntries();
    }
    getMapEntries() {
        return this.table.getMapEntries();
    }
    getIds(e) {
        return this.table.getChildIds([e]);
    }
    getGuildIds() {
        return this.table.getChildIds([]);
    }
    getGuildId(e) {
        return this.table.getParentId([null, e]);
    }
    put(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.hh.Replace;
        return this.transaction((r) => r.put(e, t, n), `${this.prefix} put`);
    }
    putAll(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.hh.Replace;
        return this.transaction((r) => r.putAll(e, t, n), `${this.prefix} putAll`);
    }
    replaceAll(e, t) {
        return this.transaction((n) => n.replaceAll(e, t), `${this.prefix} replaceAll`);
    }
    delete(e, t) {
        return this.transaction((n) => n.delete(e, t), `${this.prefix} delete`);
    }
    deleteGeneration(e, t) {
        return this.transaction((n) => n.deleteGeneration(e, t), `${this.prefix} deleteGeneration`);
    }
    transaction(e, t) {
        return this.table.transaction((t) => e(new a(t)), t);
    }
    upgradeTransaction(e) {
        return new a(this.table.upgradeTransaction(e));
    }
    getManySyncUnsafe(e, t) {
        return this.table.getManySyncUnsafe([e], t);
    }
    getMapEntriesSyncUnsafe() {
        return this.table.getMapEntriesSyncUnsafe();
    }
    static cell(e, t, n) {
        return { key: [e, t.id], data: t, generation: n };
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
        return this.putWithGeneration(e, t, null, n);
    }
    putWithGeneration(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r.hh.Replace;
        return this.transaction.put(s.cell(e, t, n), i);
    }
    putAll(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.hh.Replace;
        return this.transaction.putAll(
            t.map((t) => s.cell(e, t, null)),
            n,
        );
    }
    replaceAll(e, t) {
        this.delete(e), this.putAll(e, t);
    }
    delete(e, t) {
        switch (arguments.length) {
            case 0:
                return this.transaction.delete([]);
            case 1:
                return this.transaction.delete([e]);
            default:
                return this.transaction.delete([e, t]);
        }
    }
    deleteAllExcept(e) {
        this.transaction.deleteAllExcept([], e);
    }
    deleteGeneration(e, t) {
        return this.transaction.deleteGeneration([], e, t);
    }
}
