n.d(t, { B: () => a });
var r = n(503461),
    i = n(190313);
function o(e, t, n) {
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
class a {
    get prefix() {
        return this.table.prefix;
    }
    withoutLogging() {
        return new a(this.originalPrefix, this.table.tableId, this.table.database, !1);
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
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r.Sn.Replace;
        return this.putWithGeneration(e, t, n, null, i);
    }
    putWithGeneration(e, t, n, i) {
        let o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : r.Sn.Replace;
        return this.table.put(
            {
                key: [e, t],
                data: n,
                generation: i
            },
            o
        );
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
        return this.table.transaction((t) => e(new s(t)), t);
    }
    upgradeTransaction(e) {
        return new s(this.table.upgradeTransaction(e));
    }
    getManySyncUnsafe(e, t) {
        return this.table.getManySyncUnsafe([e], t);
    }
    getMapEntriesSyncUnsafe() {
        return this.table.getMapEntriesSyncUnsafe();
    }
    constructor(e, t, n, r = !0) {
        o(this, 'originalPrefix', void 0), o(this, 'table', void 0), (this.originalPrefix = e), (this.table = new i.i([e], t, n, r));
    }
}
class s {
    static fromDatabaseTransaction(e, t, n) {
        return new s(new i.E(e, t, n));
    }
    put(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r.Sn.Replace;
        this.putWithGeneration(e, t, n, null, i);
    }
    putWithGeneration(e, t, n, i) {
        let o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : r.Sn.Replace;
        return this.state.put(
            {
                key: [e, t],
                data: n,
                generation: i
            },
            o
        );
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
    constructor(e) {
        o(this, 'state', void 0), (this.state = e);
    }
}
