n.d(t, { B: () => s });
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
    get(e, t) {
        return this.table.get([e, t]);
    }
    getMany(e, t) {
        return this.table.getMany([e], t);
    }
    getRange(e, t, n, i) {
        return this.table.getRange([e, t], [e, n], i);
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
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.Sn.Replace;
        return this.putWithGeneration(e, t, n, null, r);
    }
    putWithGeneration(e, t, n, r) {
        let a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : i.Sn.Replace;
        return this.table.put(
            {
                key: [e, t],
                data: n,
                generation: r
            },
            a
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
        return this.table.transaction((t) => e(new o(t)), t);
    }
    upgradeTransaction(e) {
        return new o(this.table.upgradeTransaction(e));
    }
    getManySyncUnsafe(e, t) {
        return this.table.getManySyncUnsafe([e], t);
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
    put(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.Sn.Replace;
        this.putWithGeneration(e, t, n, null, r);
    }
    putWithGeneration(e, t, n, r) {
        let a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : i.Sn.Replace;
        return this.state.put(
            {
                key: [e, t],
                data: n,
                generation: r
            },
            a
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
        a(this, 'state', void 0), (this.state = e);
    }
}
