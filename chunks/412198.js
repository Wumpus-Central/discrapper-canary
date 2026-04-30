"use strict";
n.d(t, {
    Ls: () => g,
    iW: () => D,
    Be: () => w,
    AR: () => P,
    Wm: () => v,
    z9: () => c,
    hh: () => d,
    uh: () => R,
    CV: () => l,
});
let i = new (class {
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
})();
var r,
    s,
    a,
    o,
    l = (((r = {}).Kv = "kv"), (r.KvCache = "kv_cache"), (r.Messages = "messages"), r),
    u = (((s = {})[(s.Ascending = 0)] = "Ascending"), (s[(s.Descending = 1)] = "Descending"), s),
    c = (((a = {})[(a.Closed = 0)] = "Closed"), (a[(a.Open = 1)] = "Open"), (a[(a.Disabled = 2)] = "Disabled"), a),
    d = (((o = {})[(o.Skip = 0)] = "Skip"), (o[(o.Replace = 1)] = "Replace"), o);
function _(e, t) {
    let n = Array.isArray(t) ? [...e, ...t] : [...e, t];
    if (n.length >= 1 && n.length <= 5) return n;
    throw Error(`combination results in an invalid key that has ${n.length} elements: ${JSON.stringify(n)}`);
}
function f(e, t) {
    let n = Array.isArray(t) ? [...e, ...t] : [...e, t];
    if (n.length <= 5) return n;
    throw Error(`combination results in an invalid prefix key that has ${n.length} elements: ${JSON.stringify(n)}`);
}
function h(e, t) {
    return 0 === t.length ? e : { key: _(t, e.key), data: e.data, generation: e.generation };
}
function p(e, t) {
    return 0 === t.length ? e : e.map((e) => h(e, t));
}
class E {
    prefix;
    tableId;
    database;
    defaultDebugTag;
    constructor(e, t, n, i) {
        (this.prefix = e), (this.tableId = t), (this.database = n), (this.defaultDebugTag = i ? void 0 : null);
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
                key: f(this.prefix, e),
                ordering: t?.ordering,
                limit: t?.limit,
            },
            this.defaultDebugTag,
        );
    }
    getRange(e, t, n) {
        let i = _(this.prefix, e),
            r = _(this.prefix, t);
        return this.database.execute(
            { type: "kv.get_range", table: this.tableId, range: [i, r], ordering: n?.ordering, limit: n?.limit },
            this.defaultDebugTag,
        );
    }
    getKvEntries() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return this.database.execute(
            { type: "kv.get_kv_entries", table: this.tableId, key: f(this.prefix, e) },
            this.defaultDebugTag,
        );
    }
    getMapEntries() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return this.database.execute(
            { type: "kv.get_map_entries", table: this.tableId, key: f(this.prefix, e) },
            this.defaultDebugTag,
        );
    }
    getChildIds() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return this.database.execute(
            { type: "kv.get_child_ids", table: this.tableId, key: f(this.prefix, e) },
            this.defaultDebugTag,
        );
    }
    getParentId() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return this.database.execute(
            { type: "kv.get_parent_id", table: this.tableId, key: _(this.prefix, e) },
            this.defaultDebugTag,
        );
    }
    put(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.Replace;
        return this.database.execute(
            { type: "kv.put_one", table: this.tableId, cell: h(e, this.prefix), overwrite: t === d.Replace },
            this.defaultDebugTag,
        );
    }
    putAll(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.Replace;
        return this.database.execute(
            { type: "kv.put_many", table: this.tableId, cells: p(e, this.prefix), overwrite: t === d.Replace },
            this.defaultDebugTag,
        );
    }
    replaceAll(e) {
        return this.transaction((t) => {
            t.delete(), t.putAll(e);
        }, this.defaultDebugTag);
    }
    delete() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return this.database.execute(
            { type: "kv.delete_many", table: this.tableId, key: f(this.prefix, e) },
            this.defaultDebugTag,
        );
    }
    deleteRange(e, t) {
        let n = _(this.prefix, e),
            i = _(this.prefix, t);
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
            { type: "kv.delete_generation", table: this.tableId, key: f(this.prefix, e), generation: n, comparer: t },
            this.defaultDebugTag,
        );
    }
    transaction(e, t) {
        return this.database.transaction((t) => e(new m(this.prefix, this.tableId, t)), t);
    }
    upgradeTransaction(e) {
        return new m(this.prefix, this.tableId, e);
    }
    messages = {
        getLatest: (e) =>
            this.database.execute(
                { type: "messages.get_latest", table: this.tableId, guildId: e },
                this.defaultDebugTag,
            ),
    };
    getManySyncUnsafe() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 1 ? arguments[1] : void 0;
        return this.database.executeSync({
            type: "kv.get_many",
            table: this.tableId,
            key: f(this.prefix, e),
            ordering: t?.ordering,
            limit: t?.limit,
        });
    }
    getMapEntriesSyncUnsafe() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return this.database.executeSync({ type: "kv.get_map_entries", table: this.tableId, key: f(this.prefix, e) });
    }
}
class m {
    prefix;
    tableId;
    transaction;
    static fromDatabaseTransaction(e, t, n) {
        return new m(e, t, n);
    }
    constructor(e, t, n) {
        (this.prefix = e), (this.tableId = t), (this.transaction = n);
    }
    put(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.Replace;
        this.transaction.add({
            type: "kv.put_one",
            table: this.tableId,
            cell: h(e, this.prefix),
            overwrite: t === d.Replace,
        });
    }
    putAll(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.Replace;
        this.transaction.add({
            type: "kv.put_many",
            table: this.tableId,
            cells: p(e, this.prefix),
            overwrite: t === d.Replace,
        });
    }
    delete() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        this.transaction.add({ type: "kv.delete_many", table: this.tableId, key: f(this.prefix, e) });
    }
    deleteRange(e, t) {
        let n = _(this.prefix, e),
            i = _(this.prefix, t);
        this.transaction.add({ type: "kv.delete_range", table: this.tableId, range: [n, i] });
    }
    deleteAllExcept() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 1 ? arguments[1] : void 0;
        this.transaction.add({ type: "kv.delete_all_except", table: this.tableId, key: f(this.prefix, e), retain: t });
    }
    deleteGeneration() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = arguments.length > 2 ? arguments[2] : void 0;
        this.transaction.add({
            type: "kv.delete_generation",
            table: this.tableId,
            key: f(this.prefix, e),
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
                key: _(this.prefix, e),
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
class g {
    originalPrefix;
    table;
    get prefix() {
        return this.table.prefix;
    }
    constructor(e, t, n, i = !0) {
        (this.originalPrefix = e), (this.table = new E([e], t, n, i));
    }
    withoutLogging() {
        return new g(this.originalPrefix, this.table.tableId, this.table.database, !1);
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
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.Replace;
        return this.table.put({ key: [e], data: t, generation: null }, n);
    }
    delete(e) {
        return 0 == arguments.length ? this.table.delete() : this.table.delete([e]);
    }
    transaction(e, t) {
        return this.table.transaction((t) => e(new A(t)), t);
    }
    upgradeTransaction(e) {
        return new A(this.table.upgradeTransaction(e));
    }
    getManySyncUnsafe(e) {
        return this.table.getManySyncUnsafe([], e);
    }
    getMapEntriesSyncUnsafe() {
        return this.table.getMapEntriesSyncUnsafe();
    }
}
class A {
    transaction;
    static fromDatabaseTransaction(e, t, n) {
        return new A(new m(e, t, n));
    }
    constructor(e) {
        this.transaction = e;
    }
    put(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.Replace;
        this.transaction.put({ key: [e], data: t, generation: null }, n);
    }
    delete(e) {
        return 0 == arguments.length ? this.transaction.delete() : this.transaction.delete([e]);
    }
}
n(321073);
var I = n(61090),
    T = n(941426);
let S = "1" === n(72290).env.KV_STORAGE_LOGGING,
    N = new T.Vy("Runtime");
class y {
    static counter = 0;
    static pending = new Map();
    static initialized = !1;
    static dbStateCallbacks = [];
    static completionCallbacks = [];
    static nextId() {
        return ++this.counter;
    }
    static executeAsync(e, t) {
        return (
            this.initialize(),
            new Promise((n, i) => {
                let r = this.nextId();
                t(r), this.pending.set(r, { id: r, tag: e, started: performance.now(), resolve: n, reject: i });
            })
        );
    }
    static addCompletionCallback(e) {
        return this.completionCallbacks.push(e), e;
    }
    static addDatabaseStateCallback(e) {
        return this.dbStateCallbacks.push(e), e;
    }
    static removeCompletionCallback(e) {
        this.completionCallbacks = this.completionCallbacks.filter((t) => t !== e);
    }
    static removeDatabaseStateCallback(e) {
        this.dbStateCallbacks = this.dbStateCallbacks.filter((t) => t !== e);
    }
    static onResponse(e, t) {
        let n = performance.now(),
            i = this.pending.get(e.id);
        null != i &&
            (this.pending.delete(e.id),
            (e.timings.materializationTimeNanoseconds = t ?? 0),
            this.completeOperation(i, e, n),
            this.resolveOperation(i, e));
    }
    static onStatus(e) {
        for (let t of this.dbStateCallbacks) t(e.handle, e.state);
    }
    static resolveOperation(e, t) {
        t.ok ? e.resolve(t.data) : e.reject("string" == typeof t.data ? Error(t.data) : t.data);
    }
    static completeOperation(e, t, n) {
        if (this.completionCallbacks.length > 0) {
            let i = {
                id: e.id,
                tag: e.tag,
                ok: t.ok,
                value: t.data,
                timings: {
                    queue: t.timings.queueTimeNanoseconds / 1e6,
                    execution: t.timings.executionTimeNanoseconds / 1e6,
                    materialization: t.timings.materializationTimeNanoseconds / 1e6,
                    ccTotal: t.timings.totalTimeNanoseconds / 1e6,
                    jsTotal: n - e.started,
                },
            };
            for (let e of this.completionCallbacks) e(i);
        }
    }
    static initialize() {
        this.initialized ||
            (i.setCallbacks({ status: (e) => this.onStatus(e), response: (e, t) => this.onResponse(e, t) }),
            S &&
                (this.addCompletionCallback((e) => {
                    let t = e.ok ? "completed" : "failed",
                        n = `${e.timings.execution.toFixed(3)}ms execution, ${e.timings.materialization.toFixed(3)}ms js materialization, ${e.timings.ccTotal.toFixed(3)}ms cc completion, ${e.timings.jsTotal.toFixed(3)}ms js reception`;
                    N.info(`${e.tag} (#${e.id}) ${t} in ${e.timings.ccTotal.toFixed(3)}ms (${n}).`);
                }),
                this.addDatabaseStateCallback((e, t) => N.info(`${e} (state: ${t})`))),
            (this.initialized = !0));
    }
}
class C {
    static open(e, t) {
        return y.executeAsync("database_open", (n) =>
            i.databaseOpen(n, { database: e, invalidateDisabledHandles: t?.invalidateDisabledHandles ?? !1 }),
        );
    }
    static openSyncUnsafe(e, t) {
        return i.databaseOpen(
            null,
            { database: e, invalidateDisabledHandles: t?.invalidateDisabledHandles ?? !1 },
            { synchronous: !0 },
        );
    }
    static delete(e) {
        return y.executeAsync("database_delete", (t) => i.databaseDelete(t, { database: e }));
    }
    static async list() {
        return (await y.executeAsync("database_list", (e) => i.databaseList(e))).map((e) => e.data);
    }
    static optimize(e) {
        return y.executeAsync("database_optimize", (t) => i.databaseOptimize(t, { aggressive: e }));
    }
    static raise(e) {
        i.raise(e);
    }
}
class v {
    name;
    handle;
    raw;
    lastState;
    databaseStateCallback;
    static async open(e, t) {
        return new v(await C.open(e, t));
    }
    static openSyncUnsafe(e, t) {
        return new v(C.openSyncUnsafe(e, t));
    }
    static delete(e) {
        return C.delete(e);
    }
    constructor(e) {
        (this.raw = e),
            (this.name = e.name),
            (this.lastState = c.Open),
            (this.handle = e.handle),
            (this.databaseStateCallback = y.addDatabaseStateCallback((e, t) => {
                this.handle === e && (this.lastState = t);
            }));
    }
    close() {
        (this.lastState = c.Closed),
            this.raw?.close(),
            (this.raw = null),
            y.removeCompletionCallback(this.databaseStateCallback);
    }
    disable(e) {
        return null == this.raw
            ? Promise.resolve()
            : ((this.lastState = c.Disabled), this.execute({ type: "db.disable", handle: 0, reason: e }));
    }
    execute(e, t) {
        if (null == this.raw) throw Error(`database is no longer open (database: ${this}`);
        let n = "key" in e ? e.key[0] : e.table,
            i = () =>
                y.executeAsync(t ?? e.type, (t) => {
                    this.raw.execute(t, { ...e, handle: 0 });
                });
        return null === t ? i() : I.A.timeAsync("\uD83D\uDCBE", `${t ?? e.type} ${n ?? ""}`, i);
    }
    executeSync(e) {
        if (null == this.raw) throw Error(`database is no longer open (database: ${this}`);
        let t = "key" in e ? e.key[0] : e.table;
        return I.A.time("\uD83D\uDCBE", `SYNC: ${e.type} ${t ?? ""}`, () =>
            this.raw.execute(null, { ...e, handle: 0 }, { synchronous: !0 }),
        );
    }
    fullVacuum() {
        return this.execute({ type: "db.vacuum", handle: 0, complete: !0 });
    }
    fsInfo() {
        return this.execute({ type: "db.fs_info", handle: 0 });
    }
    incrementalVacuum() {
        return this.execute({ type: "db.vacuum", handle: 0, complete: !1 });
    }
    instantaneousState() {
        return null == this.raw ? c.Closed : (this.lastState = this.executeSync({ type: "db.state" }));
    }
    async instantaneousStateAsync() {
        return null == this.raw ? c.Closed : (this.lastState = await this.execute({ type: "db.state" }));
    }
    state() {
        return this.lastState;
    }
    transaction(e, t) {
        let n = new O(this);
        return Promise.resolve(e(n)).then(() =>
            n.operations.length > 0
                ? this.execute({ type: "db.transaction", operations: n.complete() }, t)
                : Promise.resolve(),
        );
    }
}
class O {
    database;
    operations;
    constructor(e) {
        (this.database = e), (this.operations = []);
    }
    add(e) {
        this.operations.push(e);
    }
    complete() {
        for (let e of this.operations) e.handle = 0;
        return this.operations;
    }
    toString() {
        return `[DatabaseTransaction ${this.database.handle}: ${this.operations.length} ops]`;
    }
}
class R {
    originalPrefix;
    table;
    get prefix() {
        return this.table.prefix;
    }
    constructor(e, t, n, i = !0) {
        (this.originalPrefix = e), (this.table = new E([e], t, n, i));
    }
    withoutLogging() {
        return new R(this.originalPrefix, this.table.tableId, this.table.database, !1);
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
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.Replace;
        return this.transaction((n) => n.put(e, t), `${this.prefix} put`);
    }
    putAll(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.Replace;
        return this.transaction((n) => n.putAll(e, t), `${this.prefix} putAll`);
    }
    replaceAll(e) {
        return this.transaction((t) => t.replaceAll(e), `${this.prefix} replaceAll`);
    }
    delete(e) {
        return this.transaction((t) => t.delete(e), `${this.prefix} delete`);
    }
    transaction(e, t) {
        return this.table.transaction((t) => e(new b(t)), t);
    }
    upgradeTransaction(e) {
        return new b(this.table.upgradeTransaction(e));
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
class b {
    transaction;
    static fromDatabaseTransaction(e, t, n) {
        return new b(new m(e, t, n));
    }
    constructor(e) {
        this.transaction = e;
    }
    put(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.Replace;
        return this.transaction.put(R.cell(e, null), t);
    }
    putAll(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.Replace;
        return this.transaction.putAll(
            e.map((e) => R.cell(e, null)),
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
class D {
    originalPrefix;
    table;
    get prefix() {
        return this.table.prefix;
    }
    constructor(e, t, n, i = !0) {
        (this.originalPrefix = e), (this.table = new E([e], t, n, i));
    }
    withoutLogging() {
        return new D(this.originalPrefix, this.table.tableId, this.table.database, !1);
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
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : d.Replace;
        return this.putWithGeneration(e, t, n, null, i);
    }
    putWithGeneration(e, t, n, i) {
        let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : d.Replace;
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
        return this.table.transaction((t) => e(new L(t)), t);
    }
    upgradeTransaction(e) {
        return new L(this.table.upgradeTransaction(e));
    }
    getManySyncUnsafe(e, t) {
        return this.table.getManySyncUnsafe([e], t);
    }
    getMapEntriesSyncUnsafe() {
        return this.table.getMapEntriesSyncUnsafe();
    }
}
class L {
    state;
    static fromDatabaseTransaction(e, t, n) {
        return new L(new m(e, t, n));
    }
    constructor(e) {
        this.state = e;
    }
    put(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : d.Replace;
        this.putWithGeneration(e, t, n, null, i);
    }
    putWithGeneration(e, t, n, i) {
        let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : d.Replace;
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
class w {
    originalPrefix;
    table;
    get prefix() {
        return this.table.prefix;
    }
    constructor(e, t, n, i = !0) {
        (this.originalPrefix = e), (this.table = new E([e], t, n, i));
    }
    withoutLogging() {
        return new w(this.originalPrefix, this.table.tableId, this.table.database, !1);
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
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.Replace;
        return this.transaction((i) => i.put(e, t, n), `${this.prefix} put`);
    }
    putAll(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.Replace;
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
        return this.table.transaction((t) => e(new M(t)), t);
    }
    upgradeTransaction(e) {
        return new M(this.table.upgradeTransaction(e));
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
class M {
    transaction;
    static fromDatabaseTransaction(e, t, n) {
        return new M(new m(e, t, n));
    }
    constructor(e) {
        this.transaction = e;
    }
    put(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.Replace;
        return this.putWithGeneration(e, t, null, n);
    }
    putWithGeneration(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : d.Replace;
        return this.transaction.put(w.cell(e, t, n), i);
    }
    putAll(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.Replace;
        return this.transaction.putAll(
            t.map((t) => w.cell(e, t, null)),
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
class P {
    originalPrefix;
    table;
    get prefix() {
        return this.table.prefix;
    }
    constructor(e, t, n, i = !0) {
        (this.originalPrefix = e), (this.table = new E([e], t, n, i));
    }
    withoutLogging() {
        return new P(this.originalPrefix, this.table.tableId, this.table.database, !1);
    }
    get(e, t, n) {
        return this.table.get([e, t, k(n)]);
    }
    getLatest(e, t, n) {
        return this.table.getMany([e, t], { ordering: u.Descending, limit: n });
    }
    getRange(e, t, n, i, r) {
        return this.table.getRange([e, t, k(n)], [e, t, k(i)], r);
    }
    getMostRecents(e) {
        return this.table.messages.getLatest(e);
    }
    put(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : d.Replace;
        return this.table.put(U(e, t, n), i);
    }
    putAll(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : d.Replace,
            r = n.map((n) => U(e, t, n));
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
        return this.table.delete([e, t, k(n)]);
    }
    transaction(e, t) {
        return this.table.transaction((t) => e(new x(t)), t);
    }
    upgradeTransaction(e) {
        return new x(this.table.upgradeTransaction(e));
    }
}
class x {
    transaction;
    static fromTableTransaction(e) {
        return new x(e);
    }
    static fromDatabaseTransaction(e, t, n) {
        return new x(new m(e, t, n));
    }
    constructor(e) {
        this.transaction = e;
    }
    put(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : d.Replace;
        this.transaction.put(U(e, t, n), i);
    }
    putAll(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : d.Replace,
            r = n.map((n) => U(e, t, n));
        this.transaction.putAll(r, i);
    }
    replaceChannel(e, t, n) {
        this.deleteChannel(e, t), this.putAll(e, t, n);
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
        this.transaction.delete([e, t, k(n)]);
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
function U(e, t, n) {
    let i = k(n.id);
    return { key: [e, t, i], data: n, generation: i };
}
function k(e) {
    return e.padStart(19, "0");
}
