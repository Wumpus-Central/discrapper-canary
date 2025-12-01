n.d(t, { d: () => b }), n(953529), n(388685), n(539854), n(415506);
var r = n(512722),
    i = n.n(r),
    a = n(442837),
    o = n(579092),
    s = n(570140),
    l = n(311929),
    c = n(823379),
    u = n(854586);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let f = new o.Yd("KkvStore"),
    p = Symbol("version"),
    _ = Symbol("boxedPartition"),
    m = Object.freeze({}),
    h = Object.freeze({
        current: m,
        length: 0,
        version: -1,
    }),
    g = Object.hasOwnProperty;
function E(e, t) {
    if (e === t) return !0;
    let n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (let r of n) {
        let n = r;
        if (!g.call(t, r) || !(0, l.$E)(e[n], t[n])) return !1;
    }
    return !0;
}
class b extends a.yh {
    _derivedVersion(e) {
        let t = e[p];
        return null == t && (e[p] = t = this.nextVersion++), t;
    }
    mapPartitions(e) {
        let t = [],
            { root: n } = this.state;
        for (let r in n)
            t.push({
                partitionKey: r,
                values: e(n[r].root, r),
            });
        return t;
    }
    getMode() {
        return this.mode;
    }
    registerWithLibdiscore(e) {
        let t;
        switch (this.mode) {
            case "typescript-libdiscore-dual-read": {
                (this.shadowState = {
                    root: {},
                    derived: {
                        length: 0,
                        numPartitions: 0,
                        memoized: {},
                    },
                }),
                    (t = (e) => {
                        i()(
                            null != this.shadowState,
                            "Shadow state must be set in dual-read mode before setting derived data.",
                        ),
                            (this.shadowState = e);
                    });
                let e = Symbol(),
                    n = {
                        root: {},
                        derived: {
                            length: 0,
                            memoized: {},
                        },
                    };
                this.addChangeListener(() => {
                    let t = this.shadowState;
                    i()(null != t, "Shadow state must be set in dual-read mode before running validation."),
                        (0, u.tL)(this.getName(), "Kkv", (r) => {
                            let { root: i } = this.state,
                                a = Object.keys(i),
                                o = Object.keys(t.root);
                            for (let o of a) {
                                if (!Object.prototype.hasOwnProperty.call(t.root, o)) {
                                    r(i[o], n);
                                    continue;
                                }
                                let a = i[o],
                                    s = t.root[o],
                                    l = a.derived.memoized[e],
                                    c = s.derived.memoized[e];
                                if (null != l && l === c) continue;
                                r(a, s);
                                let u = {};
                                (a.derived.memoized[e] = u), (s.derived.memoized[e] = u);
                            }
                            for (let e of o) Object.prototype.hasOwnProperty.call(i, e) || r(n, t.root[e]);
                        });
                });
                break;
            }
            case "libdiscore":
                t = this.setKkvState.bind(this);
                break;
            case "typescript":
                throw Error("This method should not be called in TypeScript mode.");
            default:
                (0, c.vE)(this.mode);
        }
        let { storeToken: n, state: r } = e.registerKkvStore(this.getName());
        return t(r), n;
    }
    version() {
        return this._derivedVersion(this.state.derived.memoized);
    }
    partitionVersion(e) {
        let t = this.state.root[e];
        return null == t ? null : this._derivedVersion(t.derived.memoized);
    }
    getRecord(e, t) {
        var n;
        return null == (n = this.state.root[e]) ? void 0 : n.root[t];
    }
    getManyRecords(e, t) {
        let n = this.state.root[e];
        if (null == n) return [];
        let r = [];
        for (let e of t) {
            let t = n.root[e];
            null != t && r.push(t);
        }
        return r;
    }
    getPartition(e) {
        let t = this.state.root[e];
        return null != t ? t.root : m;
    }
    getPartitionKeys() {
        return Object.keys(this.state.root);
    }
    getBoxedPartition(e) {
        let t = this.state.root[e];
        if (null == t) return h;
        let {
                root: n,
                derived: { memoized: r, length: i },
            } = t,
            a = r[_];
        return (
            null == a &&
                (r[_] = a =
                    {
                        current: n,
                        version: this._derivedVersion(r),
                        length: i,
                    }),
            a
        );
    }
    partitionLength(e) {
        let t = this.state.root[e];
        return null == t ? 0 : t.derived.length;
    }
    length() {
        return this.state.derived.length;
    }
    numPartitions() {
        return this.state.derived.numPartitions;
    }
    getNullablePartition(e) {
        let t = this.state.root[e];
        return null == t ? null : t.root;
    }
    memoizedPartition(e, t) {
        let n = Symbol(),
            r = void 0 !== t ? t : e("", {});
        return (t) => {
            let i = this.state.root[t];
            if (null == i) return r;
            let {
                    root: a,
                    derived: { memoized: o },
                } = i,
                s = o[n];
            return g.call(o, n) || ((s = e(t, a)), (o[n] = s)), s;
        };
    }
    memoized(e) {
        let t = Symbol();
        return () => {
            let { memoized: n } = this.state.derived,
                r = n[t];
            return g.call(n, t) || ((r = e(this.state.root)), (n[t] = r)), r;
        };
    }
    memoizedSecondaryIndex() {
        let e = this.memoized((e) => {
            let t = {};
            for (let n in e) {
                let r = e[n];
                for (let e in r.root) {
                    if (Object.prototype.hasOwnProperty.call(t, e)) throw Error("Duplicate clustering key: ".concat(e));
                    t[e] = r.root[e];
                }
            }
            return t;
        });
        return (t) => e()[t];
    }
    setKkvState(e) {
        this.state = e;
    }
    debugFindRecordByClusteringKeyDoNotUse(e) {
        let t = [],
            { root: n } = this.state;
        for (let r in n) {
            let i = n[r].root[e];
            null != i &&
                t.push({
                    partitionKey: r,
                    record: i,
                });
        }
        return t;
    }
    constructor(e, t = "typescript") {
        let n = {};
        if ("typescript" == (t = "typescript") || "typescript-libdiscore-dual-read" === t) {
            let t = !1,
                r = {
                    getPartitionKeys: () => Object.keys(this.state.root),
                    reset: (e) => {
                        let n = {};
                        "function" == typeof e ? e(n, this.state.root) : null != e && (n = e);
                        let r = {},
                            i = 0,
                            a = 0;
                        for (let e in n) {
                            let t = Object.keys(n[e]).length;
                            i++,
                                (a += t),
                                (r[e] = {
                                    root: n[e],
                                    derived: {
                                        length: t,
                                        memoized: {},
                                    },
                                });
                        }
                        (0 !== a || 0 !== this.state.derived.length) &&
                            ((t = !0),
                            this.setKkvState({
                                root: r,
                                derived: {
                                    memoized: {},
                                    numPartitions: i,
                                    length: a,
                                },
                            }));
                    },
                    set: (e, n, r) => {
                        let i = this.state.root[e];
                        if (null == i) {
                            (r = "function" == typeof r ? r(void 0) : r),
                                (this.state.root[e] = {
                                    root: { [n]: r },
                                    derived: {
                                        length: 1,
                                        memoized: {},
                                    },
                                });
                            let { derived: i } = this.state;
                            return i.numPartitions++, i.length++, (t = !0), !0;
                        }
                        let a = i.root[n];
                        return (
                            "function" == typeof r && (r = r(a)),
                            !(void 0 !== a && (0, l.$E)(a, r)) &&
                                ((i.root[n] = r),
                                void 0 === a && (i.derived.length++, this.state.derived.length++),
                                (i.derived.memoized = {}),
                                (t = !0),
                                !0)
                        );
                    },
                    setPartition: (e, n) => {
                        let r = this.state.root[e];
                        if (null == r) {
                            "function" == typeof n && (n = n(void 0));
                            let r = Object.keys(n).length;
                            if (0 === r) return !1;
                            let { root: i, derived: a } = this.state;
                            return (
                                (i[e] = {
                                    root: n,
                                    derived: {
                                        length: r,
                                        memoized: {},
                                    },
                                }),
                                a.numPartitions++,
                                (a.length += r),
                                (t = !0),
                                !0
                            );
                        }
                        if (("function" == typeof n && (n = n(r.root)), E(r.root, n))) return !1;
                        let i = Object.keys(n).length,
                            a = r.derived.length;
                        if (((this.state.derived.length -= a), 0 === i))
                            delete this.state.root[e], this.state.derived.numPartitions--;
                        else {
                            let { root: t, derived: r } = this.state;
                            (t[e] = {
                                root: n,
                                derived: {
                                    length: i,
                                    memoized: {},
                                },
                            }),
                                (r.length += i);
                        }
                        return (t = !0), !0;
                    },
                    get: (e, t) => {
                        var n;
                        return null == (n = this.state.root[e]) ? void 0 : n.root[t];
                    },
                    getPartition: (e) => {
                        var t;
                        return null == (t = this.state.root[e]) ? void 0 : t.root;
                    },
                    remove: (e, n) => {
                        let r = this.state.root[e];
                        return (
                            null != r &&
                            void 0 !== r.root[n] &&
                            (delete r.root[n],
                            r.derived.length--,
                            0 === r.derived.length
                                ? (delete this.state.root[e], this.state.derived.numPartitions--)
                                : (r.derived.memoized = {}),
                            this.state.derived.length--,
                            (t = !0),
                            !0)
                        );
                    },
                    removePartition: (e) => {
                        let n = this.state.root[e];
                        if (null == n) return !1;
                        let r = n.derived.length,
                            { root: i, derived: a } = this.state;
                        return delete i[e], a.numPartitions--, (a.length -= r), (t = !0), !0;
                    },
                };
            for (let i in e) {
                let a = e[i],
                    o = (e) => {
                        if (((t = !1), a(e, r), !t)) return !1;
                        this.state.derived.memoized = {};
                    };
                n[i] = o;
            }
        }
        super(s.Z, n),
            d(this, "state", {
                root: {},
                derived: {
                    numPartitions: 0,
                    length: 0,
                    memoized: {},
                },
            }),
            d(this, "shadowState", null),
            d(this, "mode", void 0),
            d(this, "nextVersion", 0),
            (this.mode = t),
            f.info("".concat(this.getName(), " initialized in mode: ").concat(this.mode));
    }
}
