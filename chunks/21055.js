r.d(n, {
    B: function () {
        return s;
    }
});
var i = r(503461),
    a = r(190313);
function o(e, n, r) {
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
class s {
    get prefix() {
        return this.table.prefix;
    }
    withoutLogging() {
        return new s(this.originalPrefix, this.table.tableId, this.table.database, !1);
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
    put(e, n, r) {
        let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.Sn.Replace;
        return this.putWithGeneration(e, n, r, null, a);
    }
    putWithGeneration(e, n, r, a) {
        let o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : i.Sn.Replace;
        return this.table.put(
            {
                key: [e, n],
                data: r,
                generation: a
            },
            o
        );
    }
    delete(e, n) {
        switch (arguments.length) {
            case 0:
                return this.table.delete([]);
            case 1:
                return this.table.delete([e]);
            default:
                return this.table.delete([e, n]);
        }
    }
    deleteGeneration(e, n) {
        return this.table.deleteGeneration([], e, n);
    }
    transaction(e, n) {
        return this.table.transaction((n) => e(new l(n)), n);
    }
    upgradeTransaction(e) {
        return new l(this.table.upgradeTransaction(e));
    }
    getManySyncUnsafe(e, n) {
        return this.table.getManySyncUnsafe([e], n);
    }
    getMapEntriesSyncUnsafe() {
        return this.table.getMapEntriesSyncUnsafe();
    }
    constructor(e, n, r, i = !0) {
        o(this, 'originalPrefix', void 0), o(this, 'table', void 0), (this.originalPrefix = e), (this.table = new a.i([e], n, r, i));
    }
}
class l {
    static fromDatabaseTransaction(e, n, r) {
        return new l(new a.E(e, n, r));
    }
    put(e, n, r) {
        let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.Sn.Replace;
        this.putWithGeneration(e, n, r, null, a);
    }
    putWithGeneration(e, n, r, a) {
        let o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : i.Sn.Replace;
        return this.state.put(
            {
                key: [e, n],
                data: r,
                generation: a
            },
            o
        );
    }
    delete(e, n) {
        switch (arguments.length) {
            case 0:
                this.state.delete([]);
                break;
            case 1:
                this.state.delete([e]);
                break;
            default:
                this.state.delete([e, n]);
        }
    }
    deleteGeneration(e, n) {
        return this.state.deleteGeneration([], e, n);
    }
    constructor(e) {
        o(this, 'state', void 0), (this.state = e);
    }
}
