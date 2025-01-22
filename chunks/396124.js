r.d(n, {
    N: function () {
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
    get(e, n) {
        return this.table.get([e, n]);
    }
    getMany(e, n) {
        return this.table.getMany([e], n);
    }
    getRange(e, n, r, i) {
        return this.table.getRange([e, n], [e, r], i);
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
    put(e, n) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.Sn.Replace;
        return this.transaction((i) => i.put(e, n, r), ''.concat(this.prefix, ' put'));
    }
    putAll(e, n) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.Sn.Replace;
        return this.transaction((i) => i.putAll(e, n, r), ''.concat(this.prefix, ' putAll'));
    }
    replaceAll(e, n) {
        return this.transaction((r) => r.replaceAll(e, n), ''.concat(this.prefix, ' replaceAll'));
    }
    delete(e, n) {
        return this.transaction((r) => r.delete(e, n), ''.concat(this.prefix, ' delete'));
    }
    deleteGeneration(e, n) {
        return this.transaction((r) => r.deleteGeneration(e, n), ''.concat(this.prefix, ' deleteGeneration'));
    }
    transaction(e, n) {
        return this.table.transaction((n) => e(new c(n)), n);
    }
    upgradeTransaction(e) {
        return new c(this.table.upgradeTransaction(e));
    }
    getManySyncUnsafe(e, n) {
        return this.table.getManySyncUnsafe([e], n);
    }
    getMapEntriesSyncUnsafe() {
        return this.table.getMapEntriesSyncUnsafe();
    }
    static cell(e, n, r) {
        return {
            key: [e, n.id],
            data: n,
            generation: r
        };
    }
    constructor(e, n, r, i = !0) {
        l(this, 'originalPrefix', void 0), l(this, 'table', void 0), (this.originalPrefix = e), (this.table = new s.i([e], n, r, i));
    }
}
class c {
    static fromDatabaseTransaction(e, n, r) {
        return new c(new s.E(e, n, r));
    }
    put(e, n) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.Sn.Replace;
        return this.putWithGeneration(e, n, null, r);
    }
    putWithGeneration(e, n, r) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o.Sn.Replace;
        return this.transaction.put(u.cell(e, n, r), i);
    }
    putAll(e, n) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.Sn.Replace;
        return this.transaction.putAll(
            n.map((n) => u.cell(e, n, null)),
            r
        );
    }
    replaceAll(e, n) {
        this.delete(e), this.putAll(e, n);
    }
    delete(e, n) {
        switch (arguments.length) {
            case 0:
                return this.transaction.delete([]);
            case 1:
                return this.transaction.delete([e]);
            default:
                return this.transaction.delete([e, n]);
        }
    }
    deleteGeneration(e, n) {
        return this.transaction.deleteGeneration([], e, n);
    }
    constructor(e) {
        l(this, 'transaction', void 0), (this.transaction = e);
    }
}
