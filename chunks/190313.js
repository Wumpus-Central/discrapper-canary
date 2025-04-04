n.d(t, {
    E: () => c,
    i: () => l
}),
    n(411104);
var r = n(503461),
    i = n(218521);
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
function a(e, t) {
    return 0 === t.length
        ? e
        : {
              key: (0, i.m)(t, e.key),
              data: e.data,
              generation: e.generation
          };
}
function s(e, t) {
    return 0 === t.length ? e : e.map((e) => a(e, t));
}
class l {
    close() {
        this.database.close();
    }
    async get(e) {
        var t;
        return null != (t = (await this.getMany(e, { limit: 1 }))[0]) ? t : null;
    }
    getMany() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 1 ? arguments[1] : void 0;
        return this.database.execute(
            {
                type: 'kv.get_many',
                table: this.tableId,
                key: (0, i.d)(this.prefix, e),
                ordering: null == t ? void 0 : t.ordering,
                limit: null == t ? void 0 : t.limit
            },
            this.defaultDebugTag
        );
    }
    getRange(e, t, n) {
        let r = (0, i.m)(this.prefix, e),
            o = (0, i.m)(this.prefix, t);
        return this.database.execute(
            {
                type: 'kv.get_range',
                table: this.tableId,
                range: [r, o],
                ordering: null == n ? void 0 : n.ordering,
                limit: null == n ? void 0 : n.limit
            },
            this.defaultDebugTag
        );
    }
    getKvEntries() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return this.database.execute(
            {
                type: 'kv.get_kv_entries',
                table: this.tableId,
                key: (0, i.d)(this.prefix, e)
            },
            this.defaultDebugTag
        );
    }
    getMapEntries() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return this.database.execute(
            {
                type: 'kv.get_map_entries',
                table: this.tableId,
                key: (0, i.d)(this.prefix, e)
            },
            this.defaultDebugTag
        );
    }
    getChildIds() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return this.database.execute(
            {
                type: 'kv.get_child_ids',
                table: this.tableId,
                key: (0, i.d)(this.prefix, e)
            },
            this.defaultDebugTag
        );
    }
    getParentId() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return this.database.execute(
            {
                type: 'kv.get_parent_id',
                table: this.tableId,
                key: (0, i.m)(this.prefix, e)
            },
            this.defaultDebugTag
        );
    }
    put(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.Sn.Replace;
        return this.database.execute(
            {
                type: 'kv.put_one',
                table: this.tableId,
                cell: a(e, this.prefix),
                overwrite: t === r.Sn.Replace
            },
            this.defaultDebugTag
        );
    }
    putAll(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.Sn.Replace;
        return this.database.execute(
            {
                type: 'kv.put_many',
                table: this.tableId,
                cells: s(e, this.prefix),
                overwrite: t === r.Sn.Replace
            },
            this.defaultDebugTag
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
            {
                type: 'kv.delete_many',
                table: this.tableId,
                key: (0, i.d)(this.prefix, e)
            },
            this.defaultDebugTag
        );
    }
    deleteRange(e, t) {
        let n = (0, i.m)(this.prefix, e),
            r = (0, i.m)(this.prefix, t);
        return this.database.execute(
            {
                type: 'kv.delete_range',
                table: this.tableId,
                range: [n, r]
            },
            this.defaultDebugTag
        );
    }
    deleteGeneration() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = arguments.length > 2 ? arguments[2] : void 0;
        return this.database.execute(
            {
                type: 'kv.delete_generation',
                table: this.tableId,
                key: (0, i.d)(this.prefix, e),
                generation: n,
                comparer: t
            },
            this.defaultDebugTag
        );
    }
    transaction(e, t) {
        return this.database.transaction((t) => e(new c(this.prefix, this.tableId, t)), t);
    }
    upgradeTransaction(e) {
        return new c(this.prefix, this.tableId, e);
    }
    getManySyncUnsafe() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 1 ? arguments[1] : void 0;
        return this.database.executeSync({
            type: 'kv.get_many',
            table: this.tableId,
            key: (0, i.d)(this.prefix, e),
            ordering: null == t ? void 0 : t.ordering,
            limit: null == t ? void 0 : t.limit
        });
    }
    getMapEntriesSyncUnsafe() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return this.database.executeSync({
            type: 'kv.get_map_entries',
            table: this.tableId,
            key: (0, i.d)(this.prefix, e)
        });
    }
    constructor(e, t, n, r) {
        o(this, 'prefix', void 0),
            o(this, 'tableId', void 0),
            o(this, 'database', void 0),
            o(this, 'defaultDebugTag', void 0),
            o(this, 'messages', {
                getLatest: (e) =>
                    this.database.execute(
                        {
                            type: 'messages.get_latest',
                            table: this.tableId,
                            guildId: e
                        },
                        this.defaultDebugTag
                    )
            }),
            (this.prefix = e),
            (this.tableId = t),
            (this.database = n),
            (this.defaultDebugTag = r ? void 0 : null);
    }
}
class c {
    static fromDatabaseTransaction(e, t, n) {
        return new c(e, t, n);
    }
    put(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.Sn.Replace;
        this.transaction.add({
            type: 'kv.put_one',
            table: this.tableId,
            cell: a(e, this.prefix),
            overwrite: t === r.Sn.Replace
        });
    }
    putAll(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.Sn.Replace;
        this.transaction.add({
            type: 'kv.put_many',
            table: this.tableId,
            cells: s(e, this.prefix),
            overwrite: t === r.Sn.Replace
        });
    }
    replaceAll(e) {
        this.delete(), this.putAll(e);
    }
    delete() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        this.transaction.add({
            type: 'kv.delete_many',
            table: this.tableId,
            key: (0, i.d)(this.prefix, e)
        });
    }
    deleteRange(e, t) {
        let n = (0, i.m)(this.prefix, e),
            r = (0, i.m)(this.prefix, t);
        this.transaction.add({
            type: 'kv.delete_range',
            table: this.tableId,
            range: [n, r]
        });
    }
    deleteGeneration() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = arguments.length > 2 ? arguments[2] : void 0;
        this.transaction.add({
            type: 'kv.delete_generation',
            table: this.tableId,
            key: (0, i.d)(this.prefix, e),
            generation: n,
            comparer: t
        });
    }
    constructor(e, t, n) {
        o(this, 'prefix', void 0),
            o(this, 'tableId', void 0),
            o(this, 'transaction', void 0),
            o(this, 'messages', {
                trimOrphans: (e) => {
                    if (1 !== this.prefix.length || 1 !== e.length) throw Error('trimOrphans: only one prefix component is supported at this time');
                    this.transaction.add({
                        type: 'messages.trim_orphans',
                        table: this.tableId,
                        channelKey: e[0],
                        messageKey: this.prefix[0]
                    });
                },
                trimChannel: (e, t) => {
                    this.transaction.add({
                        type: 'messages.trim_channel',
                        table: this.tableId,
                        key: (0, i.m)(this.prefix, e),
                        limit: t
                    });
                },
                trimChannelsIn: (e, t) => {
                    if (1 !== this.prefix.length || 1 !== e.length) throw Error('trimChannelsIn: only one prefix component is supported at this time');
                    this.transaction.add({
                        type: 'messages.trim_channels_in',
                        table: this.tableId,
                        channelKey: e[0],
                        messageKey: this.prefix[0],
                        limit: t
                    });
                },
                trimChannelsNotIn: (e, t) => {
                    if (1 !== this.prefix.length || 1 !== e.length) throw Error('trimChannelsNotIn: only one prefix component is supported at this time');
                    this.transaction.add({
                        type: 'messages.trim_channels_not_in',
                        table: this.tableId,
                        channelKey: e[0],
                        messageKey: this.prefix[0],
                        limit: t
                    });
                }
            }),
            (this.prefix = e),
            (this.tableId = t),
            (this.transaction = n);
    }
}
