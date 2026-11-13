(n.d(t, { hh: () => c, Ls: () => I, z9: () => d, uh: () => T, iW: () => S, Be: () => C, AR: () => R, CV: () => l }),
    new (class {
        callback = null;
        raise(e) {
            throw e;
        }
        setCallbacks(e) {
            this.callback = e.response;
        }
        databaseOpen(e, t, n) {
            let i = 'kv_storage: platform "web" is not supported at this time.';
            if (n?.synchronous) throw Error(i);
            return this.reply({ requestId: e, synchronous: !1, ok: !1, data: i });
        }
        databaseList(e, t) {
            return this.reply({ requestId: e, synchronous: t?.synchronous, ok: !0, data: [] });
        }
        databaseDelete(e, t, n) {
            return this.reply({ requestId: e, synchronous: n?.synchronous, ok: !0, data: void 0 });
        }
        databaseOptimize(e, t, n) {
            return this.reply({ requestId: e, synchronous: n?.synchronous, ok: !0, data: void 0 });
        }
        malformedValueCount() {
            return 0;
        }
        malformedEntryCount() {
            return 0;
        }
        reply(e) {
            if (e.synchronous) return e.data;
            null != e.requestId &&
                this.callback?.(
                    {
                        id: e.requestId,
                        ok: e.ok,
                        data: e.data,
                        timings: {
                            queueTimeNanoseconds: 0,
                            executionTimeNanoseconds: 0,
                            materializationTimeNanoseconds: 0,
                            totalTimeNanoseconds: 0,
                        },
                    },
                    0,
                );
        }
    })());
var i,
    r,
    a,
    s,
    l = (((i = {}).Kv = "kv"), (i.KvCache = "kv_cache"), (i.Messages = "messages"), i),
    o = (((r = {})[(r.Ascending = 0)] = "Ascending"), (r[(r.Descending = 1)] = "Descending"), r),
    d = (((a = {})[(a.Closed = 0)] = "Closed"), (a[(a.Open = 1)] = "Open"), (a[(a.Disabled = 2)] = "Disabled"), a),
    c = (((s = {})[(s.Skip = 0)] = "Skip"), (s[(s.Replace = 1)] = "Replace"), s);
function u(e, t) {
    let n = Array.isArray(t) ? [...e, ...t] : [...e, t];
    if (n.length >= 1 && n.length <= 5) return n;
    throw Error(`combination results in an invalid key that has ${n.length} elements: ${JSON.stringify(n)}`);
}
function _(e, t) {
    let n = Array.isArray(t) ? [...e, ...t] : [...e, t];
    if (n.length <= 5) return n;
    throw Error(`combination results in an invalid prefix key that has ${n.length} elements: ${JSON.stringify(n)}`);
}
function E(e, t) {
    return 0 === t.length ? e : { key: u(t, e.key), data: e.data, generation: e.generation };
}
function A(e, t) {
    return 0 === t.length ? e : e.map((e) => E(e, t));
}
class f {
    prefix;
    tableId;
    database;
    defaultDebugTag;
    constructor(e, t, n, i) {
        ((this.prefix = e), (this.tableId = t), (this.database = n), (this.defaultDebugTag = i ? void 0 : null));
    }
    close() {
        this.database.close();
    }
    async get(e) {
        return (await this.getMany(e, { limit: 1 }))[0] ?? null;
    }
    getMany() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 1 ? arguments[1] : void 0;
        return this.database.execute(
            {
                type: "kv.get_many",
                table: this.tableId,
                key: _(this.prefix, e),
                ordering: t?.ordering,
                limit: t?.limit,
            },
            this.defaultDebugTag,
        );
    }
    getRange(e, t, n) {
        let i = u(this.prefix, e),
            r = u(this.prefix, t);
        return this.database.execute(
            { type: "kv.get_range", table: this.tableId, range: [i, r], ordering: n?.ordering, limit: n?.limit },
            this.defaultDebugTag,
        );
    }
    getKvEntries() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return this.database.execute(
            { type: "kv.get_kv_entries", table: this.tableId, key: _(this.prefix, e) },
            this.defaultDebugTag,
        );
    }
    getMapEntries() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return this.database.execute(
            { type: "kv.get_map_entries", table: this.tableId, key: _(this.prefix, e) },
            this.defaultDebugTag,
        );
    }
    getChildIds() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return this.database.execute(
            { type: "kv.get_child_ids", table: this.tableId, key: _(this.prefix, e) },
            this.defaultDebugTag,
        );
    }
    getParentId() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return this.database.execute(
            { type: "kv.get_parent_id", table: this.tableId, key: u(this.prefix, e) },
            this.defaultDebugTag,
        );
    }
    put(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.Replace;
        return this.database.execute(
            { type: "kv.put_one", table: this.tableId, cell: E(e, this.prefix), overwrite: t === c.Replace },
            this.defaultDebugTag,
        );
    }
    putAll(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.Replace;
        return this.database.execute(
            { type: "kv.put_many", table: this.tableId, cells: A(e, this.prefix), overwrite: t === c.Replace },
            this.defaultDebugTag,
        );
    }
    replaceAll(e) {
        return this.transaction((t) => {
            (t.delete(), t.putAll(e));
        }, this.defaultDebugTag);
    }
    delete() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return this.database.execute(
            { type: "kv.delete_many", table: this.tableId, key: _(this.prefix, e) },
            this.defaultDebugTag,
        );
    }
    deleteRange(e, t) {
        let n = u(this.prefix, e),
            i = u(this.prefix, t);
        return this.database.execute(
            { type: "kv.delete_range", table: this.tableId, range: [n, i] },
            this.defaultDebugTag,
        );
    }
    deleteGeneration() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = arguments.length > 2 ? arguments[2] : void 0;
        return this.database.execute(
            { type: "kv.delete_generation", table: this.tableId, key: _(this.prefix, e), generation: n, comparer: t },
            this.defaultDebugTag,
        );
    }
    transaction(e, t) {
        return this.database.transaction((t) => e(new h(this.prefix, this.tableId, t)), t);
    }
    upgradeTransaction(e) {
        return new h(this.prefix, this.tableId, e);
    }
    messages = {
        getLatest: (e) =>
            this.database.execute(
                { type: "messages.get_latest", table: this.tableId, messageKey: this.prefix[0], guildId: e },
                this.defaultDebugTag,
            ),
    };
    getManySyncUnsafe() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 1 ? arguments[1] : void 0;
        return this.database.executeSync({
            type: "kv.get_many",
            table: this.tableId,
            key: _(this.prefix, e),
            ordering: t?.ordering,
            limit: t?.limit,
        });
    }
    getMapEntriesSyncUnsafe() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return this.database.executeSync({ type: "kv.get_map_entries", table: this.tableId, key: _(this.prefix, e) });
    }
    deleteSyncUnsafe() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        this.database.executeSync({ type: "kv.delete_many", table: this.tableId, key: _(this.prefix, e) });
    }
}
class h {
    prefix;
    tableId;
    transaction;
    static fromDatabaseTransaction(e, t, n) {
        return new h(e, t, n);
    }
    constructor(e, t, n) {
        ((this.prefix = e), (this.tableId = t), (this.transaction = n));
    }
    put(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.Replace;
        this.transaction.add({
            type: "kv.put_one",
            table: this.tableId,
            cell: E(e, this.prefix),
            overwrite: t === c.Replace,
        });
    }
    putAll(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.Replace;
        this.transaction.add({
            type: "kv.put_many",
            table: this.tableId,
            cells: A(e, this.prefix),
            overwrite: t === c.Replace,
        });
    }
    delete() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        this.transaction.add({ type: "kv.delete_many", table: this.tableId, key: _(this.prefix, e) });
    }
    deleteRange(e, t) {
        let n = u(this.prefix, e),
            i = u(this.prefix, t);
        this.transaction.add({ type: "kv.delete_range", table: this.tableId, range: [n, i] });
    }
    deleteAllExcept() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 1 ? arguments[1] : void 0;
        this.transaction.add({ type: "kv.delete_all_except", table: this.tableId, key: _(this.prefix, e), retain: t });
    }
    deleteGeneration() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = arguments.length > 2 ? arguments[2] : void 0;
        this.transaction.add({
            type: "kv.delete_generation",
            table: this.tableId,
            key: _(this.prefix, e),
            generation: n,
            comparer: t,
        });
    }
    messages = {
        trimOrphans: (e) => {
            if (1 !== this.prefix.length || 1 !== e.length)
                throw Error("trimOrphans: only one prefix component is supported at this time");
            this.transaction.add({
                type: "messages.trim_orphans",
                table: this.tableId,
                channelKey: e[0],
                messageKey: this.prefix[0],
            });
        },
        trimChannel: (e, t) => {
            this.transaction.add({
                type: "messages.trim_channel",
                table: this.tableId,
                key: u(this.prefix, e),
                limit: t,
            });
        },
        trimChannelsIn: (e, t) => {
            if (1 !== this.prefix.length || 1 !== e.length)
                throw Error("trimChannelsIn: only one prefix component is supported at this time");
            this.transaction.add({
                type: "messages.trim_channels_in",
                table: this.tableId,
                channelKey: e[0],
                messageKey: this.prefix[0],
                limit: t,
            });
        },
        trimChannelsNotIn: (e, t) => {
            if (1 !== this.prefix.length || 1 !== e.length)
                throw Error("trimChannelsNotIn: only one prefix component is supported at this time");
            this.transaction.add({
                type: "messages.trim_channels_not_in",
                table: this.tableId,
                channelKey: e[0],
                messageKey: this.prefix[0],
                limit: t,
            });
        },
    };
}
class I {
    originalPrefix;
    table;
    get prefix() {
        return this.table.prefix;
    }
    constructor(e, t, n, i = !0) {
        ((this.originalPrefix = e), (this.table = new f([e], t, n, i)));
    }
    withoutLogging() {
        return new I(this.originalPrefix, this.table.tableId, this.table.database, !1);
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
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.Replace;
        return this.table.put({ key: [e], data: t, generation: null }, n);
    }
    delete(e) {
        return 0 == arguments.length ? this.table.delete() : this.table.delete([e]);
    }
    transaction(e, t) {
        return this.table.transaction((t) => e(new p(t)), t);
    }
    upgradeTransaction(e) {
        return new p(this.table.upgradeTransaction(e));
    }
    getManySyncUnsafe(e) {
        return this.table.getManySyncUnsafe([], e);
    }
    getMapEntriesSyncUnsafe() {
        return this.table.getMapEntriesSyncUnsafe();
    }
}
class p {
    transaction;
    static fromDatabaseTransaction(e, t, n) {
        return new p(new h(e, t, n));
    }
    constructor(e) {
        this.transaction = e;
    }
    put(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.Replace;
        this.transaction.put({ key: [e], data: t, generation: null }, n);
    }
    delete(e) {
        return 0 == arguments.length ? this.transaction.delete() : this.transaction.delete([e]);
    }
}
(n(321073), n(61090));
var m = n(611599);
(n(72290).env.KV_STORAGE_LOGGING, new m.Vy("Runtime"));
class T {
    originalPrefix;
    table;
    get prefix() {
        return this.table.prefix;
    }
    constructor(e, t, n, i = !0) {
        ((this.originalPrefix = e), (this.table = new f([e], t, n, i)));
    }
    withoutLogging() {
        return new T(this.originalPrefix, this.table.tableId, this.table.database, !1);
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
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.Replace;
        return this.transaction((n) => n.put(e, t), `${this.prefix} put`);
    }
    putAll(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.Replace;
        return this.transaction((n) => n.putAll(e, t), `${this.prefix} putAll`);
    }
    replaceAll(e) {
        return this.transaction((t) => t.replaceAll(e), `${this.prefix} replaceAll`);
    }
    delete(e) {
        return this.transaction((t) => t.delete(e), `${this.prefix} delete`);
    }
    transaction(e, t) {
        return this.table.transaction((t) => e(new g(t)), t);
    }
    upgradeTransaction(e) {
        return new g(this.table.upgradeTransaction(e));
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
class g {
    transaction;
    static fromDatabaseTransaction(e, t, n) {
        return new g(new h(e, t, n));
    }
    constructor(e) {
        this.transaction = e;
    }
    put(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.Replace;
        return this.transaction.put(T.cell(e, null), t);
    }
    putAll(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.Replace;
        return this.transaction.putAll(
            e.map((e) => T.cell(e, null)),
            t,
        );
    }
    replaceAll(e) {
        (this.delete(), this.putAll(e));
    }
    delete(e) {
        return 0 == arguments.length ? this.transaction.delete([]) : this.transaction.delete([e]);
    }
    deleteAllExcept(e) {
        this.transaction.deleteAllExcept([], e);
    }
}
class S {
    originalPrefix;
    table;
    get prefix() {
        return this.table.prefix;
    }
    constructor(e, t, n, i = !0) {
        ((this.originalPrefix = e), (this.table = new f([e], t, n, i)));
    }
    withoutLogging() {
        return new S(this.originalPrefix, this.table.tableId, this.table.database, !1);
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
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : c.Replace;
        return this.putWithGeneration(e, t, n, null, i);
    }
    putWithGeneration(e, t, n, i) {
        let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : c.Replace;
        return this.table.put({ key: [e, t], data: n, generation: i }, r);
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
        return this.table.transaction((t) => e(new N(t)), t);
    }
    upgradeTransaction(e) {
        return new N(this.table.upgradeTransaction(e));
    }
    getManySyncUnsafe(e, t) {
        return this.table.getManySyncUnsafe([e], t);
    }
    getMapEntriesSyncUnsafe() {
        return this.table.getMapEntriesSyncUnsafe();
    }
}
class N {
    state;
    static fromDatabaseTransaction(e, t, n) {
        return new N(new h(e, t, n));
    }
    constructor(e) {
        this.state = e;
    }
    put(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : c.Replace;
        this.putWithGeneration(e, t, n, null, i);
    }
    putWithGeneration(e, t, n, i) {
        let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : c.Replace;
        return this.state.put({ key: [e, t], data: n, generation: i }, r);
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
class C {
    originalPrefix;
    table;
    get prefix() {
        return this.table.prefix;
    }
    constructor(e, t, n, i = !0) {
        ((this.originalPrefix = e), (this.table = new f([e], t, n, i)));
    }
    withoutLogging() {
        return new C(this.originalPrefix, this.table.tableId, this.table.database, !1);
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
    put(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.Replace;
        return this.transaction((i) => i.put(e, t, n), `${this.prefix} put`);
    }
    putAll(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.Replace;
        return this.transaction((i) => i.putAll(e, t, n), `${this.prefix} putAll`);
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
        return this.table.transaction((t) => e(new O(t)), t);
    }
    upgradeTransaction(e) {
        return new O(this.table.upgradeTransaction(e));
    }
    getManySyncUnsafe(e, t) {
        return this.table.getManySyncUnsafe([e], t);
    }
    getMapEntriesSyncUnsafe() {
        return this.table.getMapEntriesSyncUnsafe();
    }
    deleteSyncUnsafe(e) {
        return this.table.deleteSyncUnsafe([e]);
    }
    static cell(e, t, n) {
        return { key: [e, t.id], data: t, generation: n };
    }
}
class O {
    transaction;
    static fromDatabaseTransaction(e, t, n) {
        return new O(new h(e, t, n));
    }
    constructor(e) {
        this.transaction = e;
    }
    put(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.Replace;
        return this.putWithGeneration(e, t, null, n);
    }
    putWithGeneration(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : c.Replace;
        return this.transaction.put(C.cell(e, t, n), i);
    }
    putAll(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.Replace;
        return this.transaction.putAll(
            t.map((t) => C.cell(e, t, null)),
            n,
        );
    }
    replaceAll(e, t) {
        (this.delete(e), this.putAll(e, t));
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
class R {
    originalPrefix;
    table;
    get prefix() {
        return this.table.prefix;
    }
    constructor(e, t, n, i = !0) {
        ((this.originalPrefix = e), (this.table = new f([e], t, n, i)));
    }
    withoutLogging() {
        return new R(this.originalPrefix, this.table.tableId, this.table.database, !1);
    }
    get(e, t, n) {
        return this.table.get([e, t, D(n)]);
    }
    getLatest(e, t, n) {
        return this.table.getMany([e, t], { ordering: o.Descending, limit: n });
    }
    getRange(e, t, n, i, r) {
        return this.table.getRange([e, t, D(n)], [e, t, D(i)], r);
    }
    getMostRecents(e) {
        return this.table.messages.getLatest(e);
    }
    put(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : c.Replace;
        return this.table.put(y(e, t, n), i);
    }
    putAll(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : c.Replace,
            r = n.map((n) => y(e, t, n));
        return this.table.putAll(r, i);
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
        return this.table.delete([e, t, D(n)]);
    }
    transaction(e, t) {
        return this.table.transaction((t) => e(new L(t)), t);
    }
    upgradeTransaction(e) {
        return new L(this.table.upgradeTransaction(e));
    }
}
class L {
    transaction;
    static fromTableTransaction(e) {
        return new L(e);
    }
    static fromDatabaseTransaction(e, t, n) {
        return new L(new h(e, t, n));
    }
    constructor(e) {
        this.transaction = e;
    }
    put(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : c.Replace;
        this.transaction.put(y(e, t, n), i);
    }
    putAll(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : c.Replace,
            r = n.map((n) => y(e, t, n));
        this.transaction.putAll(r, i);
    }
    replaceChannel(e, t, n) {
        (this.deleteChannel(e, t), this.putAll(e, t, n));
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
        this.transaction.delete([e, t, D(n)]);
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
function y(e, t, n) {
    let i = D(n.id);
    return { key: [e, t, i], data: n, generation: i };
}
function D(e) {
    return e.padStart(19, "0");
}
