"use strict";
n.d(t, {
    Ls: () => _,
    iW: () => m,
    Be: () => g,
    AR: () => A,
    Wm: () => c.W,
    z9: () => i.z9,
    hh: () => i.hh,
    uh: () => E,
    CV: () => i.CV,
}),
    n(379299);
var i = n(860407);
function r(e, t) {
    let n = Array.isArray(t) ? [...e, ...t] : [...e, t];
    if (n.length >= 1 && n.length <= 5) return n;
    throw Error(`combination results in an invalid key that has ${n.length} elements: ${JSON.stringify(n)}`);
}
function s(e, t) {
    let n = Array.isArray(t) ? [...e, ...t] : [...e, t];
    if (n.length <= 5) return n;
    throw Error(`combination results in an invalid prefix key that has ${n.length} elements: ${JSON.stringify(n)}`);
}
function a(e, t) {
    return 0 === t.length ? e : { key: r(t, e.key), data: e.data, generation: e.generation };
}
function o(e, t) {
    return 0 === t.length ? e : e.map((e) => a(e, t));
}
class l {
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
                key: s(this.prefix, e),
                ordering: t?.ordering,
                limit: t?.limit,
            },
            this.defaultDebugTag,
        );
    }
    getRange(e, t, n) {
        let i = r(this.prefix, e),
            s = r(this.prefix, t);
        return this.database.execute(
            { type: "kv.get_range", table: this.tableId, range: [i, s], ordering: n?.ordering, limit: n?.limit },
            this.defaultDebugTag,
        );
    }
    getKvEntries() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return this.database.execute(
            { type: "kv.get_kv_entries", table: this.tableId, key: s(this.prefix, e) },
            this.defaultDebugTag,
        );
    }
    getMapEntries() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return this.database.execute(
            { type: "kv.get_map_entries", table: this.tableId, key: s(this.prefix, e) },
            this.defaultDebugTag,
        );
    }
    getChildIds() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return this.database.execute(
            { type: "kv.get_child_ids", table: this.tableId, key: s(this.prefix, e) },
            this.defaultDebugTag,
        );
    }
    getParentId() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return this.database.execute(
            { type: "kv.get_parent_id", table: this.tableId, key: r(this.prefix, e) },
            this.defaultDebugTag,
        );
    }
    put(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.hh.Replace;
        return this.database.execute(
            { type: "kv.put_one", table: this.tableId, cell: a(e, this.prefix), overwrite: t === i.hh.Replace },
            this.defaultDebugTag,
        );
    }
    putAll(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.hh.Replace;
        return this.database.execute(
            { type: "kv.put_many", table: this.tableId, cells: o(e, this.prefix), overwrite: t === i.hh.Replace },
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
            { type: "kv.delete_many", table: this.tableId, key: s(this.prefix, e) },
            this.defaultDebugTag,
        );
    }
    deleteRange(e, t) {
        let n = r(this.prefix, e),
            i = r(this.prefix, t);
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
            { type: "kv.delete_generation", table: this.tableId, key: s(this.prefix, e), generation: n, comparer: t },
            this.defaultDebugTag,
        );
    }
    transaction(e, t) {
        return this.database.transaction((t) => e(new d(this.prefix, this.tableId, t)), t);
    }
    upgradeTransaction(e) {
        return new d(this.prefix, this.tableId, e);
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
            key: s(this.prefix, e),
            ordering: t?.ordering,
            limit: t?.limit,
        });
    }
    getMapEntriesSyncUnsafe() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return this.database.executeSync({ type: "kv.get_map_entries", table: this.tableId, key: s(this.prefix, e) });
    }
}
class d {
    prefix;
    tableId;
    transaction;
    static fromDatabaseTransaction(e, t, n) {
        return new d(e, t, n);
    }
    constructor(e, t, n) {
        (this.prefix = e), (this.tableId = t), (this.transaction = n);
    }
    put(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.hh.Replace;
        this.transaction.add({
            type: "kv.put_one",
            table: this.tableId,
            cell: a(e, this.prefix),
            overwrite: t === i.hh.Replace,
        });
    }
    putAll(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.hh.Replace;
        this.transaction.add({
            type: "kv.put_many",
            table: this.tableId,
            cells: o(e, this.prefix),
            overwrite: t === i.hh.Replace,
        });
    }
    delete() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        this.transaction.add({ type: "kv.delete_many", table: this.tableId, key: s(this.prefix, e) });
    }
    deleteRange(e, t) {
        let n = r(this.prefix, e),
            i = r(this.prefix, t);
        this.transaction.add({ type: "kv.delete_range", table: this.tableId, range: [n, i] });
    }
    deleteAllExcept() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 1 ? arguments[1] : void 0;
        this.transaction.add({ type: "kv.delete_all_except", table: this.tableId, key: s(this.prefix, e), retain: t });
    }
    deleteGeneration() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = arguments.length > 2 ? arguments[2] : void 0;
        this.transaction.add({
            type: "kv.delete_generation",
            table: this.tableId,
            key: s(this.prefix, e),
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
                key: r(this.prefix, e),
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
class _ {
    originalPrefix;
    table;
    get prefix() {
        return this.table.prefix;
    }
    constructor(e, t, n, i = !0) {
        (this.originalPrefix = e), (this.table = new l([e], t, n, i));
    }
    withoutLogging() {
        return new _(this.originalPrefix, this.table.tableId, this.table.database, !1);
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
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.hh.Replace;
        return this.table.put({ key: [e], data: t, generation: null }, n);
    }
    delete(e) {
        return 0 == arguments.length ? this.table.delete() : this.table.delete([e]);
    }
    transaction(e, t) {
        return this.table.transaction((t) => e(new u(t)), t);
    }
    upgradeTransaction(e) {
        return new u(this.table.upgradeTransaction(e));
    }
    getManySyncUnsafe(e) {
        return this.table.getManySyncUnsafe([], e);
    }
    getMapEntriesSyncUnsafe() {
        return this.table.getMapEntriesSyncUnsafe();
    }
}
class u {
    transaction;
    static fromDatabaseTransaction(e, t, n) {
        return new u(new d(e, t, n));
    }
    constructor(e) {
        this.transaction = e;
    }
    put(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.hh.Replace;
        this.transaction.put({ key: [e], data: t, generation: null }, n);
    }
    delete(e) {
        return 0 == arguments.length ? this.transaction.delete() : this.transaction.delete([e]);
    }
}
var c = n(490577);
class E {
    originalPrefix;
    table;
    get prefix() {
        return this.table.prefix;
    }
    constructor(e, t, n, i = !0) {
        (this.originalPrefix = e), (this.table = new l([e], t, n, i));
    }
    withoutLogging() {
        return new E(this.originalPrefix, this.table.tableId, this.table.database, !1);
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
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.hh.Replace;
        return this.transaction((n) => n.put(e, t), `${this.prefix} put`);
    }
    putAll(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.hh.Replace;
        return this.transaction((n) => n.putAll(e, t), `${this.prefix} putAll`);
    }
    replaceAll(e) {
        return this.transaction((t) => t.replaceAll(e), `${this.prefix} replaceAll`);
    }
    delete(e) {
        return this.transaction((t) => t.delete(e), `${this.prefix} delete`);
    }
    transaction(e, t) {
        return this.table.transaction((t) => e(new h(t)), t);
    }
    upgradeTransaction(e) {
        return new h(this.table.upgradeTransaction(e));
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
class h {
    transaction;
    static fromDatabaseTransaction(e, t, n) {
        return new h(new d(e, t, n));
    }
    constructor(e) {
        this.transaction = e;
    }
    put(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.hh.Replace;
        return this.transaction.put(E.cell(e, null), t);
    }
    putAll(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.hh.Replace;
        return this.transaction.putAll(
            e.map((e) => E.cell(e, null)),
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
class m {
    originalPrefix;
    table;
    get prefix() {
        return this.table.prefix;
    }
    constructor(e, t, n, i = !0) {
        (this.originalPrefix = e), (this.table = new l([e], t, n, i));
    }
    withoutLogging() {
        return new m(this.originalPrefix, this.table.tableId, this.table.database, !1);
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
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.hh.Replace;
        return this.putWithGeneration(e, t, n, null, r);
    }
    putWithGeneration(e, t, n, r) {
        let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : i.hh.Replace;
        return this.table.put({ key: [e, t], data: n, generation: r }, s);
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
        return this.table.transaction((t) => e(new f(t)), t);
    }
    upgradeTransaction(e) {
        return new f(this.table.upgradeTransaction(e));
    }
    getManySyncUnsafe(e, t) {
        return this.table.getManySyncUnsafe([e], t);
    }
    getMapEntriesSyncUnsafe() {
        return this.table.getMapEntriesSyncUnsafe();
    }
}
class f {
    state;
    static fromDatabaseTransaction(e, t, n) {
        return new f(new d(e, t, n));
    }
    constructor(e) {
        this.state = e;
    }
    put(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.hh.Replace;
        this.putWithGeneration(e, t, n, null, r);
    }
    putWithGeneration(e, t, n, r) {
        let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : i.hh.Replace;
        return this.state.put({ key: [e, t], data: n, generation: r }, s);
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
class g {
    originalPrefix;
    table;
    get prefix() {
        return this.table.prefix;
    }
    constructor(e, t, n, i = !0) {
        (this.originalPrefix = e), (this.table = new l([e], t, n, i));
    }
    withoutLogging() {
        return new g(this.originalPrefix, this.table.tableId, this.table.database, !1);
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
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.hh.Replace;
        return this.transaction((i) => i.put(e, t, n), `${this.prefix} put`);
    }
    putAll(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.hh.Replace;
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
        return this.table.transaction((t) => e(new p(t)), t);
    }
    upgradeTransaction(e) {
        return new p(this.table.upgradeTransaction(e));
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
class p {
    transaction;
    static fromDatabaseTransaction(e, t, n) {
        return new p(new d(e, t, n));
    }
    constructor(e) {
        this.transaction = e;
    }
    put(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.hh.Replace;
        return this.putWithGeneration(e, t, null, n);
    }
    putWithGeneration(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.hh.Replace;
        return this.transaction.put(g.cell(e, t, n), r);
    }
    putAll(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.hh.Replace;
        return this.transaction.putAll(
            t.map((t) => g.cell(e, t, null)),
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
n(887018);
class A {
    originalPrefix;
    table;
    get prefix() {
        return this.table.prefix;
    }
    constructor(e, t, n, i = !0) {
        (this.originalPrefix = e), (this.table = new l([e], t, n, i));
    }
    withoutLogging() {
        return new A(this.originalPrefix, this.table.tableId, this.table.database, !1);
    }
    get(e, t, n) {
        return this.table.get([e, t, S(n)]);
    }
    getLatest(e, t, n) {
        return this.table.getMany([e, t], { ordering: i.J.Descending, limit: n });
    }
    getRange(e, t, n, i, r) {
        return this.table.getRange([e, t, S(n)], [e, t, S(i)], r);
    }
    getMostRecents(e) {
        return this.table.messages.getLatest(e);
    }
    put(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.hh.Replace;
        return this.table.put(T(e, t, n), r);
    }
    putAll(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.hh.Replace,
            s = n.map((n) => T(e, t, n));
        return this.table.putAll(s, r);
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
        return this.table.delete([e, t, S(n)]);
    }
    transaction(e, t) {
        return this.table.transaction((t) => e(new I(t)), t);
    }
    upgradeTransaction(e) {
        return new I(this.table.upgradeTransaction(e));
    }
}
class I {
    transaction;
    static fromTableTransaction(e) {
        return new I(e);
    }
    static fromDatabaseTransaction(e, t, n) {
        return new I(new d(e, t, n));
    }
    constructor(e) {
        this.transaction = e;
    }
    put(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.hh.Replace;
        this.transaction.put(T(e, t, n), r);
    }
    putAll(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.hh.Replace,
            s = n.map((n) => T(e, t, n));
        this.transaction.putAll(s, r);
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
        this.transaction.delete([e, t, S(n)]);
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
function T(e, t, n) {
    let i = S(n.id);
    return { key: [e, t, i], data: n, generation: i };
}
function S(e) {
    return e.padStart(19, "0");
}
