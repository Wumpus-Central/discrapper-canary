"use strict";
n.d(t, { i: () => s });
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
    put(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r.hh.Replace;
        return this.putWithGeneration(e, t, n, null, i);
    }
    putWithGeneration(e, t, n, i) {
        let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : r.hh.Replace;
        return this.table.put({ key: [e, t], data: n, generation: i }, s);
    }
    delete(e, t) {
        switch (arguments.length) {
            case 0:
                return this.table.delete([]);
            case 1:
                return this.table.delete([e]);
            default:
                return this.table.delete([e, t]);
        }
    }
    deleteGeneration(e, t) {
        return this.table.deleteGeneration([], e, t);
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
}
class a {
    state;
    static fromDatabaseTransaction(e, t, n) {
        return new a(new i.l(e, t, n));
    }
    constructor(e) {
        this.state = e;
    }
    put(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r.hh.Replace;
        this.putWithGeneration(e, t, n, null, i);
    }
    putWithGeneration(e, t, n, i) {
        let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : r.hh.Replace;
        return this.state.put({ key: [e, t], data: n, generation: i }, s);
    }
    delete(e, t) {
        switch (arguments.length) {
            case 0:
                this.state.delete([]);
                break;
            case 1:
                this.state.delete([e]);
                break;
            default:
                this.state.delete([e, t]);
        }
    }
    deleteGeneration(e, t) {
        return this.state.deleteGeneration([], e, t);
    }
}
