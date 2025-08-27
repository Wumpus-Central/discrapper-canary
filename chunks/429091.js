n.d(t, { d: () => y }), n(953529), n(388685), n(539854), n(415506);
var r = n(512722),
    i = n.n(r),
    o = n(442837),
    a = n(780935),
    s = n(579092),
    l = n(570140),
    c = n(311929),
    u = n(823379),
    d = n(854586);
function f(e, t, n) {
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
let _ = new s.Yd("KkvStore"),
    p = Symbol("version"),
    h = Symbol("boxedPartition"),
    m = Object.freeze({}),
    g = Object.freeze({
        current: m,
        length: 0,
        version: -1,
    }),
    E = Object.hasOwnProperty;
function b(e, t) {
    if (e === t) return !0;
    let n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (let r of n) {
        let n = r;
        if (!E.call(t, r) || !(0, c.$E)(e[n], t[n])) return !1;
    }
    return !0;
}
class y extends o.yh {
    _derivedVersion(e) {
        let t = e[p];
        return null == t && (e[p] = t = this.nextVersion++), t;
    }
    mapPartitions(e) {
        let t = [];
        for (let n in this.root)
            t.push({
                partitionKey: n,
                values: e(this.root[n].root, n),
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
                    (t = (e, t) => {
                        i()(
                            null != this.shadowState,
                            "Shadow state must be set in dual-read mode before setting derived data.",
                        ),
                            (this.shadowState = {
                                root: e,
                                derived: t,
                            });
                    });
                let e = Symbol();
                this.addChangeListener(() => {
                    let t = this.shadowState;
                    i()(null != t, "Shadow state must be set in dual-read mode before running validation."),
                        (0, d.tL)(this.getName(), "Kkv", (n) => {
                            let r = Object.keys(this.root),
                                i = Object.keys(t.root);
                            for (let i of r) {
                                if (!Object.prototype.hasOwnProperty.call(t.root, i)) {
                                    let e = this.root[i];
                                    n(
                                        {
                                            root: e.root,
                                            derived: e[a.V],
                                        },
                                        {
                                            root: {},
                                            derived: {
                                                length: 0,
                                                memoized: {},
                                            },
                                        },
                                    );
                                    continue;
                                }
                                let r = this.root[i],
                                    o = t.root[i],
                                    s = r[a.V].memoized[e],
                                    l = o[a.V].memoized[e];
                                if (null != s && s === l) continue;
                                n(
                                    {
                                        root: r.root,
                                        derived: r[a.V],
                                    },
                                    {
                                        root: o.root,
                                        derived: o[a.V],
                                    },
                                );
                                let c = {};
                                (r[a.V].memoized[e] = c), (o[a.V].memoized[e] = c);
                            }
                            for (let e of i)
                                Object.prototype.hasOwnProperty.call(this.root, e) ||
                                    n(
                                        {
                                            root: {},
                                            derived: {
                                                length: 0,
                                                memoized: {},
                                            },
                                        },
                                        {
                                            root: t.root[e].root,
                                            derived: t.root[e][a.V],
                                        },
                                    );
                        });
                });
                break;
            }
            case "libdiscore":
                t = this.setKkvRoot.bind(this);
                break;
            case "typescript":
                throw Error("This method should not be called in TypeScript mode.");
            default:
                (0, u.vE)(this.mode);
        }
        return e.registerKkvStore(this.getName(), (e, n) => {
            t(e, n);
        });
    }
    version() {
        return this._derivedVersion(this.derived.memoized);
    }
    partitionVersion(e) {
        let t = this.root[e];
        return null == t ? null : this._derivedVersion(t[a.V].memoized);
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
        return null != t ? t.root : m;
    }
    getBoxedPartition(e) {
        let t = this.root[e];
        if (null == t) return g;
        let {
                root: n,
                [a.V]: { memoized: r, length: i },
            } = t,
            o = r[h];
        return (
            null == o &&
                (r[h] = o =
                    {
                        current: n,
                        version: this._derivedVersion(r),
                        length: i,
                    }),
            o
        );
    }
    partitionLength(e) {
        let t = this.root[e];
        return null == t ? 0 : t[a.V].length;
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
                    root: o,
                    [a.V]: { memoized: s },
                } = i,
                l = s[t];
            return E.call(s, t) || ((l = e(o)), (s[t] = l)), l;
        };
    }
    memoized(e) {
        let t = Symbol();
        return () => {
            let { memoized: n } = this.derived,
                r = n[t];
            return E.call(n, t) || ((r = e(this.root)), (n[t] = r)), r;
        };
    }
    setKkvRoot(e, t) {
        (this.root = e), (this.derived = t);
    }
    debugFindRecordByClusteringKeyDoNotUse(e) {
        let t = [];
        for (let n in this.root) {
            let r = this.root[n].root[e];
            null != r &&
                t.push({
                    partitionKey: n,
                    record: r,
                });
        }
        return t;
    }
    constructor(e, t = "typescript") {
        let n = {};
        if ("typescript" === t || "typescript-libdiscore-dual-read" === t) {
            let t = !1,
                r = {
                    reset: (e) => {
                        let n = {};
                        "function" == typeof e ? e(n, this.root) : null != e && (n = e);
                        let r = {},
                            i = 0,
                            o = 0;
                        for (let e in n) {
                            let t = Object.keys(n[e]).length;
                            i++,
                                (o += t),
                                (r[e] = {
                                    root: n[e],
                                    [a.V]: {
                                        length: t,
                                        memoized: {},
                                    },
                                });
                        }
                        (0 !== o || 0 !== this.derived.length) &&
                            ((t = !0),
                            this.setKkvRoot(r, {
                                memoized: {},
                                numPartitions: i,
                                length: o,
                            }));
                    },
                    set: (e, n, r) => {
                        let i = this.root[e];
                        if (null == i)
                            return (
                                (r = "function" == typeof r ? r(void 0) : r),
                                (this.root[e] = {
                                    root: { [n]: r },
                                    [a.V]: {
                                        length: 1,
                                        memoized: {},
                                    },
                                }),
                                this.derived.numPartitions++,
                                this.derived.length++,
                                (t = !0),
                                !0
                            );
                        let o = i.root[n];
                        return (
                            "function" == typeof r && (r = r(o)),
                            !(void 0 !== o && (0, c.$E)(o, r)) &&
                                ((i.root[n] = r),
                                void 0 === o && (i[a.V].length++, this.derived.length++),
                                (i[a.V].memoized = {}),
                                (t = !0),
                                !0)
                        );
                    },
                    setPartition: (e, n) => {
                        let r = this.root[e];
                        if (null == r) {
                            "function" == typeof n && (n = n(void 0));
                            let r = Object.keys(n).length;
                            return (
                                0 !== r &&
                                ((this.root[e] = {
                                    root: n,
                                    [a.V]: {
                                        length: r,
                                        memoized: {},
                                    },
                                }),
                                this.derived.numPartitions++,
                                (this.derived.length += r),
                                (t = !0),
                                !0)
                            );
                        }
                        if (("function" == typeof n && (n = n(r.root)), b(r.root, n))) return !1;
                        let i = Object.keys(n).length,
                            o = r[a.V].length;
                        return (
                            (this.derived.length -= o),
                            0 === i
                                ? (delete this.root[e], this.derived.numPartitions--)
                                : ((this.root[e] = {
                                      root: n,
                                      [a.V]: {
                                          length: i,
                                          memoized: {},
                                      },
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
                        return (
                            null != r &&
                            void 0 !== r.root[n] &&
                            (delete r.root[n],
                            r[a.V].length--,
                            0 === r[a.V].length
                                ? (delete this.root[e], this.derived.numPartitions--)
                                : (r[a.V].memoized = {}),
                            this.derived.length--,
                            (t = !0),
                            !0)
                        );
                    },
                    removePartition: (e) => {
                        let n = this.root[e];
                        if (null == n) return !1;
                        let r = n[a.V].length;
                        return (
                            delete this.root[e], this.derived.numPartitions--, (this.derived.length -= r), (t = !0), !0
                        );
                    },
                };
            for (let i in e) {
                let o = e[i],
                    a = (e) => {
                        if (((t = !1), o(e, r), !t)) return !1;
                        this.derived.memoized = {};
                    };
                n[i] = a;
            }
        }
        super(l.Z, n),
            f(this, "mode", void 0),
            f(this, "root", void 0),
            f(this, "shadowState", void 0),
            f(this, "derived", void 0),
            f(this, "nextVersion", void 0),
            (this.mode = t),
            (this.root = {}),
            (this.shadowState = null),
            (this.derived = {
                numPartitions: 0,
                memoized: {},
                length: 0,
            }),
            (this.nextVersion = 0),
            _.info("".concat(this.getName(), " initialized in mode: ").concat(this.mode));
    }
}
