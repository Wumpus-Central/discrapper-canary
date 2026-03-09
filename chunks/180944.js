"use strict";
n.d(t, { X: () => o, l: () => l });
var r = n(860407),
    i = n(367973);
function s(e, t) {
    return 0 === t.length ? e : { key: (0, i.h)(t, e.key), data: e.data, generation: e.generation };
}
function a(e, t) {
    return 0 === t.length ? e : e.map((e) => s(e, t));
}
class o {
    prefix;
    tableId;
    database;
    defaultDebugTag;
    constructor(e, t, n, r) {
        (this.prefix = e), (this.tableId = t), (this.database = n), (this.defaultDebugTag = r ? void 0 : null);
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
                key: (0, i.$)(this.prefix, e),
                ordering: t?.ordering,
                limit: t?.limit,
            },
            this.defaultDebugTag,
        );
    }
    getRange(e, t, n) {
        let r = (0, i.h)(this.prefix, e),
            s = (0, i.h)(this.prefix, t);
        return this.database.execute(
            { type: "kv.get_range", table: this.tableId, range: [r, s], ordering: n?.ordering, limit: n?.limit },
            this.defaultDebugTag,
        );
    }
    getKvEntries() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return this.database.execute(
            { type: "kv.get_kv_entries", table: this.tableId, key: (0, i.$)(this.prefix, e) },
            this.defaultDebugTag,
        );
    }
    getMapEntries() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return this.database.execute(
            { type: "kv.get_map_entries", table: this.tableId, key: (0, i.$)(this.prefix, e) },
            this.defaultDebugTag,
        );
    }
    getChildIds() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return this.database.execute(
            { type: "kv.get_child_ids", table: this.tableId, key: (0, i.$)(this.prefix, e) },
            this.defaultDebugTag,
        );
    }
    getParentId() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return this.database.execute(
            { type: "kv.get_parent_id", table: this.tableId, key: (0, i.h)(this.prefix, e) },
            this.defaultDebugTag,
        );
    }
    put(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.hh.Replace;
        return this.database.execute(
            { type: "kv.put_one", table: this.tableId, cell: s(e, this.prefix), overwrite: t === r.hh.Replace },
            this.defaultDebugTag,
        );
    }
    putAll(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.hh.Replace;
        return this.database.execute(
            { type: "kv.put_many", table: this.tableId, cells: a(e, this.prefix), overwrite: t === r.hh.Replace },
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
            { type: "kv.delete_many", table: this.tableId, key: (0, i.$)(this.prefix, e) },
            this.defaultDebugTag,
        );
    }
    deleteRange(e, t) {
        let n = (0, i.h)(this.prefix, e),
            r = (0, i.h)(this.prefix, t);
        return this.database.execute(
            { type: "kv.delete_range", table: this.tableId, range: [n, r] },
            this.defaultDebugTag,
        );
    }
    deleteGeneration() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = arguments.length > 2 ? arguments[2] : void 0;
        return this.database.execute(
            {
                type: "kv.delete_generation",
                table: this.tableId,
                key: (0, i.$)(this.prefix, e),
                generation: n,
                comparer: t,
            },
            this.defaultDebugTag,
        );
    }
    transaction(e, t) {
        return this.database.transaction((t) => e(new l(this.prefix, this.tableId, t)), t);
    }
    upgradeTransaction(e) {
        return new l(this.prefix, this.tableId, e);
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
            key: (0, i.$)(this.prefix, e),
            ordering: t?.ordering,
            limit: t?.limit,
        });
    }
    getMapEntriesSyncUnsafe() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return this.database.executeSync({
            type: "kv.get_map_entries",
            table: this.tableId,
            key: (0, i.$)(this.prefix, e),
        });
    }
}
class l {
    prefix;
    tableId;
    transaction;
    static fromDatabaseTransaction(e, t, n) {
        return new l(e, t, n);
    }
    constructor(e, t, n) {
        (this.prefix = e), (this.tableId = t), (this.transaction = n);
    }
    put(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.hh.Replace;
        this.transaction.add({
            type: "kv.put_one",
            table: this.tableId,
            cell: s(e, this.prefix),
            overwrite: t === r.hh.Replace,
        });
    }
    putAll(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.hh.Replace;
        this.transaction.add({
            type: "kv.put_many",
            table: this.tableId,
            cells: a(e, this.prefix),
            overwrite: t === r.hh.Replace,
        });
    }
    delete() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        this.transaction.add({ type: "kv.delete_many", table: this.tableId, key: (0, i.$)(this.prefix, e) });
    }
    deleteRange(e, t) {
        let n = (0, i.h)(this.prefix, e),
            r = (0, i.h)(this.prefix, t);
        this.transaction.add({ type: "kv.delete_range", table: this.tableId, range: [n, r] });
    }
    deleteAllExcept() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 1 ? arguments[1] : void 0;
        this.transaction.add({
            type: "kv.delete_all_except",
            table: this.tableId,
            key: (0, i.$)(this.prefix, e),
            retain: t,
        });
    }
    deleteGeneration() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = arguments.length > 2 ? arguments[2] : void 0;
        this.transaction.add({
            type: "kv.delete_generation",
            table: this.tableId,
            key: (0, i.$)(this.prefix, e),
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
                key: (0, i.h)(this.prefix, e),
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
