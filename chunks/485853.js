n.d(t, { N: () => s });
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
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.Sn.Replace;
        return this.table.put(
            {
                key: [e],
                data: t,
                generation: null
            },
            n
        );
    }
    delete(e) {
        return 0 == arguments.length ? this.table.delete() : this.table.delete([e]);
    }
    transaction(e, t) {
        return this.table.transaction((t) => e(new o(t)), t);
    }
    upgradeTransaction(e) {
        return new o(this.table.upgradeTransaction(e));
    }
    getManySyncUnsafe(e) {
        return this.table.getManySyncUnsafe([], e);
    }
    getMapEntriesSyncUnsafe() {
        return this.table.getMapEntriesSyncUnsafe();
    }
    constructor(e, t, n, i = !0) {
        a(this, 'originalPrefix', void 0), a(this, 'table', void 0), (this.originalPrefix = e), (this.table = new r.i([e], t, n, i));
    }
}
class o {
    static fromDatabaseTransaction(e, t, n) {
        return new o(new r.E(e, t, n));
    }
    put(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.Sn.Replace;
        this.transaction.put(
            {
                key: [e],
                data: t,
                generation: null
            },
            n
        );
    }
    delete(e) {
        return 0 == arguments.length ? this.transaction.delete() : this.transaction.delete([e]);
    }
    constructor(e) {
        a(this, 'transaction', void 0), (this.transaction = e);
    }
}
