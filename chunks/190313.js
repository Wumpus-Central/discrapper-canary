r.d(n, {
    E: function () {
        return d;
    },
    i: function () {
        return c;
    }
});
var i = r(411104);
var a = r(503461),
    o = r(218521);
function s(e, n, r) {
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
function l(e, n) {
    return 0 === n.length
        ? e
        : {
              key: (0, o.m)(n, e.key),
              data: e.data,
              generation: e.generation
          };
}
function u(e, n) {
    return 0 === n.length ? e : e.map((e) => l(e, n));
}
class c {
    close() {
        this.database.close();
    }
    async get(e) {
        var n;
        return null !== (n = (await this.getMany(e, { limit: 1 }))[0]) && void 0 !== n ? n : null;
    }
    getMany() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            n = arguments.length > 1 ? arguments[1] : void 0;
        return this.database.execute(
            {
                type: 'kv.get_many',
                table: this.tableId,
                key: (0, o.d)(this.prefix, e),
                ordering: null == n ? void 0 : n.ordering,
                limit: null == n ? void 0 : n.limit
            },
            this.defaultDebugTag
        );
    }
    getRange(e, n, r) {
        let i = (0, o.m)(this.prefix, e),
            a = (0, o.m)(this.prefix, n);
        return this.database.execute(
            {
                type: 'kv.get_range',
                table: this.tableId,
                range: [i, a],
                ordering: null == r ? void 0 : r.ordering,
                limit: null == r ? void 0 : r.limit
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
                key: (0, o.d)(this.prefix, e)
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
                key: (0, o.d)(this.prefix, e)
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
                key: (0, o.d)(this.prefix, e)
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
                key: (0, o.m)(this.prefix, e)
            },
            this.defaultDebugTag
        );
    }
    put(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.Sn.Replace;
        return this.database.execute(
            {
                type: 'kv.put_one',
                table: this.tableId,
                cell: l(e, this.prefix),
                overwrite: n === a.Sn.Replace
            },
            this.defaultDebugTag
        );
    }
    putAll(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.Sn.Replace;
        return this.database.execute(
            {
                type: 'kv.put_many',
                table: this.tableId,
                cells: u(e, this.prefix),
                overwrite: n === a.Sn.Replace
            },
            this.defaultDebugTag
        );
    }
    replaceAll(e) {
        return this.transaction((n) => {
            n.delete(), n.putAll(e);
        }, this.defaultDebugTag);
    }
    delete() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return this.database.execute(
            {
                type: 'kv.delete_many',
                table: this.tableId,
                key: (0, o.d)(this.prefix, e)
            },
            this.defaultDebugTag
        );
    }
    deleteRange(e, n) {
        let r = (0, o.m)(this.prefix, e),
            i = (0, o.m)(this.prefix, n);
        return this.database.execute(
            {
                type: 'kv.delete_range',
                table: this.tableId,
                range: [r, i]
            },
            this.defaultDebugTag
        );
    }
    deleteGeneration() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            n = arguments.length > 1 ? arguments[1] : void 0,
            r = arguments.length > 2 ? arguments[2] : void 0;
        return this.database.execute(
            {
                type: 'kv.delete_generation',
                table: this.tableId,
                key: (0, o.d)(this.prefix, e),
                generation: r,
                comparer: n
            },
            this.defaultDebugTag
        );
    }
    transaction(e, n) {
        return this.database.transaction((n) => e(new d(this.prefix, this.tableId, n)), n);
    }
    upgradeTransaction(e) {
        return new d(this.prefix, this.tableId, e);
    }
    getManySyncUnsafe() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            n = arguments.length > 1 ? arguments[1] : void 0;
        return this.database.executeSync({
            type: 'kv.get_many',
            table: this.tableId,
            key: (0, o.d)(this.prefix, e),
            ordering: null == n ? void 0 : n.ordering,
            limit: null == n ? void 0 : n.limit
        });
    }
    getMapEntriesSyncUnsafe() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return this.database.executeSync({
            type: 'kv.get_map_entries',
            table: this.tableId,
            key: (0, o.d)(this.prefix, e)
        });
    }
    constructor(e, n, r, i) {
        s(this, 'prefix', void 0),
            s(this, 'tableId', void 0),
            s(this, 'database', void 0),
            s(this, 'defaultDebugTag', void 0),
            s(this, 'messages', {
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
            (this.tableId = n),
            (this.database = r),
            (this.defaultDebugTag = i ? void 0 : null);
    }
}
class d {
    static fromDatabaseTransaction(e, n, r) {
        return new d(e, n, r);
    }
    put(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.Sn.Replace;
        this.transaction.add({
            type: 'kv.put_one',
            table: this.tableId,
            cell: l(e, this.prefix),
            overwrite: n === a.Sn.Replace
        });
    }
    putAll(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.Sn.Replace;
        this.transaction.add({
            type: 'kv.put_many',
            table: this.tableId,
            cells: u(e, this.prefix),
            overwrite: n === a.Sn.Replace
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
            key: (0, o.d)(this.prefix, e)
        });
    }
    deleteRange(e, n) {
        let r = (0, o.m)(this.prefix, e),
            i = (0, o.m)(this.prefix, n);
        this.transaction.add({
            type: 'kv.delete_range',
            table: this.tableId,
            range: [r, i]
        });
    }
    deleteGeneration() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            n = arguments.length > 1 ? arguments[1] : void 0,
            r = arguments.length > 2 ? arguments[2] : void 0;
        this.transaction.add({
            type: 'kv.delete_generation',
            table: this.tableId,
            key: (0, o.d)(this.prefix, e),
            generation: r,
            comparer: n
        });
    }
    constructor(e, n, r) {
        s(this, 'prefix', void 0),
            s(this, 'tableId', void 0),
            s(this, 'transaction', void 0),
            s(this, 'messages', {
                trimOrphans: (e) => {
                    if (1 !== this.prefix.length || 1 !== e.length) throw Error('trimOrphans: only one prefix component is supported at this time');
                    this.transaction.add({
                        type: 'messages.trim_orphans',
                        table: this.tableId,
                        channelKey: e[0],
                        messageKey: this.prefix[0]
                    });
                },
                trimChannel: (e, n) => {
                    this.transaction.add({
                        type: 'messages.trim_channel',
                        table: this.tableId,
                        key: (0, o.m)(this.prefix, e),
                        limit: n
                    });
                },
                trimChannelsIn: (e, n) => {
                    if (1 !== this.prefix.length || 1 !== e.length) throw Error('trimChannelsIn: only one prefix component is supported at this time');
                    this.transaction.add({
                        type: 'messages.trim_channels_in',
                        table: this.tableId,
                        channelKey: e[0],
                        messageKey: this.prefix[0],
                        limit: n
                    });
                },
                trimChannelsNotIn: (e, n) => {
                    if (1 !== this.prefix.length || 1 !== e.length) throw Error('trimChannelsNotIn: only one prefix component is supported at this time');
                    this.transaction.add({
                        type: 'messages.trim_channels_not_in',
                        table: this.tableId,
                        channelKey: e[0],
                        messageKey: this.prefix[0],
                        limit: n
                    });
                }
            }),
            (this.prefix = e),
            (this.tableId = n),
            (this.transaction = r);
    }
}
