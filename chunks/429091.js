(n.d(t, { d: () => p }), n(953529), n(388685), n(539854));
var r = n(442837),
    i = n(570140),
    a = n(311929);
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
let s = Symbol('version'),
    l = Symbol.for('Kkv.PartitionDerivedData'),
    c = Symbol('boxedPartition'),
    u = Object.freeze({}),
    d = Object.freeze({
        current: u,
        length: 0,
        version: -1
    }),
    _ = Object.hasOwnProperty;
function f(e, t) {
    if (e === t) return !0;
    let n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (let r of n) {
        let n = r;
        if (!_.call(t, r) || !(0, a.$E)(e[n], t[n])) return !1;
    }
    return !0;
}
class p extends r.yh {
    _derivedVersion(e) {
        let t = e[s];
        return (null == t && (e[s] = t = this.nextVersion++), t);
    }
    mapPartitions(e) {
        let t = [];
        for (let n in this.root)
            t.push({
                partitionKey: n,
                values: e(this.root[n].root, n)
            });
        return t;
    }
    getMode() {
        return this.mode;
    }
    version() {
        return this._derivedVersion(this.derived.memoized);
    }
    partitionVersion(e) {
        let t = this.root[e];
        return null == t ? null : this._derivedVersion(t[l].memoized);
    }
    getRecord(e, t) {
        var n;
        return null == (n = this.root[e]) ? void 0 : n.root[t];
    }
    getManyRecords(e, t) {
        let n = this.root[e];
        if (null == n) return [];
        let r = [];
        for (let e of t) {
            let t = n.root[e];
            null != t && r.push(t);
        }
        return r;
    }
    getPartition(e) {
        let t = this.root[e];
        return null != t ? t.root : u;
    }
    getBoxedPartition(e) {
        let t = this.root[e];
        if (null == t) return d;
        let {
                root: n,
                [l]: { memoized: r, length: i }
            } = t,
            a = r[c];
        return (
            null == a &&
                (r[c] = a =
                    {
                        current: n,
                        version: this._derivedVersion(r),
                        length: i
                    }),
            a
        );
    }
    partitionLength(e) {
        let t = this.root[e];
        return null == t ? 0 : t[l].length;
    }
    length() {
        return this.derived.length;
    }
    numPartitions() {
        return this.derived.numPartitions;
    }
    getNullablePartition(e) {
        let t = this.root[e];
        return null == t ? null : t.root;
    }
    memoizedPartition(e) {
        let t = Symbol(),
            n = e({});
        return (r) => {
            let i = this.root[r];
            if (null == i) return n;
            let {
                    root: a,
                    [l]: { memoized: o }
                } = i,
                s = o[t];
            return (_.call(o, t) || ((s = e(a)), (o[t] = s)), s);
        };
    }
    memoized(e) {
        let t = Symbol();
        return () => {
            let { memoized: n } = this.derived,
                r = n[t];
            return (_.call(n, t) || ((r = e(this.root)), (n[t] = r)), r);
        };
    }
    setKkvRoot(e, t) {
        ((this.root = e), (this.derived = t));
    }
    constructor(e, t = 'typescript') {
        let n = {};
        if ('typescript' === t) {
            let t = !1,
                r = {
                    reset: (e) => {
                        let n = {};
                        'function' == typeof e ? e(n, this.root) : null != e && (n = e);
                        let r = {},
                            i = 0,
                            a = 0;
                        for (let e in n) {
                            let t = Object.keys(n[e]).length;
                            (i++,
                                (a += t),
                                (r[e] = {
                                    root: n[e],
                                    [l]: {
                                        length: t,
                                        memoized: {}
                                    }
                                }));
                        }
                        (0 !== a || 0 !== this.derived.length) &&
                            ((t = !0),
                            this.setKkvRoot(r, {
                                memoized: {},
                                numPartitions: i,
                                length: a
                            }));
                    },
                    set: (e, n, r) => {
                        let i = this.root[e];
                        if (null == i)
                            return (
                                (r = 'function' == typeof r ? r(void 0) : r),
                                (this.root[e] = {
                                    root: { [n]: r },
                                    [l]: {
                                        length: 1,
                                        memoized: {}
                                    }
                                }),
                                this.derived.numPartitions++,
                                this.derived.length++,
                                (t = !0),
                                !0
                            );
                        let o = i.root[n];
                        return ('function' == typeof r && (r = r(o)), !(void 0 !== o && (0, a.$E)(o, r)) && ((i.root[n] = r), void 0 === o && (i[l].length++, this.derived.length++), (i[l].memoized = {}), (t = !0), !0));
                    },
                    setPartition: (e, n) => {
                        let r = this.root[e];
                        if (null == r) {
                            'function' == typeof n && (n = n(void 0));
                            let r = Object.keys(n).length;
                            return (
                                0 !== r &&
                                ((this.root[e] = {
                                    root: n,
                                    [l]: {
                                        length: r,
                                        memoized: {}
                                    }
                                }),
                                this.derived.numPartitions++,
                                (this.derived.length += r),
                                (t = !0),
                                !0)
                            );
                        }
                        if (('function' == typeof n && (n = n(r.root)), f(r.root, n))) return !1;
                        let i = Object.keys(n).length,
                            a = r[l].length;
                        return (
                            (this.derived.length -= a),
                            0 === i
                                ? (delete this.root[e], this.derived.numPartitions--)
                                : ((this.root[e] = {
                                      root: n,
                                      [l]: {
                                          length: i,
                                          memoized: {}
                                      }
                                  }),
                                  (this.derived.length += i)),
                            (t = !0),
                            !0
                        );
                    },
                    get: (e, t) => {
                        var n;
                        return null == (n = this.root[e]) ? void 0 : n.root[t];
                    },
                    getPartition: (e) => {
                        var t;
                        return null == (t = this.root[e]) ? void 0 : t.root;
                    },
                    remove: (e, n) => {
                        let r = this.root[e];
                        return null != r && void 0 !== r.root[n] && (delete r.root[n], r[l].length--, 0 === r[l].length ? (delete this.root[e], this.derived.numPartitions--) : (r[l].memoized = {}), this.derived.length--, (t = !0), !0);
                    },
                    removePartition: (e) => {
                        let n = this.root[e];
                        if (null == n) return !1;
                        let r = n[l].length;
                        return (delete this.root[e], this.derived.numPartitions--, (this.derived.length -= r), (t = !0), !0);
                    }
                };
            for (let i in e) {
                let a = e[i],
                    o = (e) => {
                        if (((t = !1), a(e, r), !t)) return !1;
                        this.derived.memoized = {};
                    };
                n[i] = o;
            }
        }
        (super(i.Z, n),
            o(this, 'mode', void 0),
            o(this, 'root', void 0),
            o(this, 'derived', void 0),
            o(this, 'nextVersion', void 0),
            (this.mode = t),
            (this.root = {}),
            (this.derived = {
                numPartitions: 0,
                memoized: {},
                length: 0
            }),
            (this.nextVersion = 0));
    }
}
