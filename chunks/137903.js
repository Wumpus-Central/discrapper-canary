n.d(t, { yW: () => S }), n(321073);
var i = n(17928),
    r = n(228366),
    a = n(626584),
    s = n(357758),
    l = n(39304),
    o = n(52133),
    d = n(174459),
    c = n(652215);
function u(e, t) {
    return (function e(t, n, i, r) {
        if (t === n || (r && void 0 === t && null === n)) return !0;
        if ("object" != typeof t || "object" != typeof n || null === t || null === n) return !1;
        if (i.has(t)) return i.get(t) === n;
        if ((i.set(t, n), t instanceof Date && n instanceof Date)) return t.getTime() === n.getTime();
        if (t instanceof Set && n instanceof Set) return (0, s._)(t, n);
        if (Array.isArray(t) && Array.isArray(n)) {
            if (t.length !== n.length) return !1;
            for (let r = 0; r < t.length; r++) if (!e(t[r], n[r], i, !1)) return !1;
            return !0;
        }
        if (Array.isArray(t) || Array.isArray(n)) return !1;
        let a = Object.keys(t),
            l = Object.keys(n);
        if (a.length !== l.length) return !1;
        for (let r of a) if (!Object.prototype.hasOwnProperty.call(n, r) || !e(t[r], n[r], i, !1)) return !1;
        return !0;
    })(e, t, new Map(), !0);
}
function _(e) {
    return "object" == typeof e && null !== e && !Array.isArray(e) && !(e instanceof Date) && !(e instanceof Set);
}
let E = new Map();
function A(e) {
    return null === e ? "null" : "object" != typeof e ? typeof e : Array.isArray(e) ? "array" : "object";
}
let h = Symbol("version"),
    I = Object.freeze({}),
    f = new a.A("LibdiscoreStore");
function p(e) {
    return e;
}
class T {
    type;
    kkvDatabase;
    k1key;
    k2key;
    shouldIndex;
    constructor(e, t, n, i, r) {
        (this.type = e), (this.kkvDatabase = t), (this.k1key = n), (this.k2key = i), (this.shouldIndex = r);
    }
    getK1Key(e) {
        return "kv" === this.type ? "0" : "string" == typeof this.k1key ? e[this.k1key] : this.k1key(e);
    }
    getK2Key(e) {
        let t = "kv" === this.type ? this.k1key : this.k2key;
        if ((null == this.shouldIndex || this.shouldIndex(e)) && null != t) return "string" == typeof t ? e[t] : t(e);
    }
}
class m {
    kkvDatabase;
    partition;
    constructor(e, t) {
        (this.kkvDatabase = e), (this.partition = t);
    }
    set(e, t) {
        this.kkvDatabase.setRecord(this.partition, e, t);
    }
    get(e) {
        return this.kkvDatabase.getRecord(this.partition, e);
    }
    has(e) {
        return this.kkvDatabase.hasRecord(this.partition, e);
    }
    getAllRecords() {
        return this.kkvDatabase.getPartition(this.partition);
    }
    remove(e) {
        return this.kkvDatabase.removeRecord(this.partition, e);
    }
    clear() {
        this.kkvDatabase.removePartition(this.partition), this.kkvDatabase.setPartition(this.partition, {});
    }
    length() {
        return this.kkvDatabase.partitionLength(this.partition);
    }
    version() {
        return this.kkvDatabase.partitionVersion(this.partition) ?? this.kkvDatabase.version();
    }
    memoized(e, t) {
        return this.kkvDatabase.memoizedSinglePartition(this.partition, e, t);
    }
}
class g {
    nextVersion;
    state;
    secondaryIndexes = [];
    constructor(e) {
        (this.nextVersion = e), (this.state = this.emptyState());
    }
    addSecondaryKVIndex(e, t) {
        let n = new g(this.nextVersion),
            i = new T("kv", n, e, void 0, t);
        return this.secondaryIndexes.push(i), n.intoKV();
    }
    addSecondaryKKVIndex(e, t, n) {
        let i = new g(this.nextVersion),
            r = new T("kkv", i, e, t, n);
        return this.secondaryIndexes.push(r), i;
    }
    intoKV(e) {
        return new m(this, e ?? "0");
    }
    version() {
        return this.state.version;
    }
    partitionVersion(e) {
        let t = this.state.root[e];
        return null == t ? this.version() : this._derivedVersion(t.derived.memoized);
    }
    hasPartition(e) {
        return null != this.state.root[e];
    }
    hasRecord(e, t) {
        return this.state.root[e]?.root[t] != null;
    }
    getRecord(e, t) {
        return this.state.root[e]?.root[t];
    }
    getManyRecords(e, t) {
        let n = this.state.root[e];
        if (null == n) return [];
        let i = [];
        for (let e of t) {
            let t = n.root[e];
            null != t && i.push(t);
        }
        return i;
    }
    getPartition(e) {
        let t = this.state.root[e];
        return null != t ? t.root : I;
    }
    getAllPartitions() {
        return this.state.root;
    }
    getPartitionKeys() {
        return Object.keys(this.state.root);
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
    _derivedVersion(e) {
        let t = e[h];
        return null == t && (e[h] = t = this.nextVersion()), t;
    }
    mapPartitions(e) {
        let t = [],
            { root: n } = this.state;
        for (let i in n) t.push({ partitionKey: i, values: e(n[i].root, i) });
        return t;
    }
    memoizedPartition(e, t) {
        let n = Symbol(),
            i = void 0 !== t ? t : e("", {});
        return (t) => {
            let r = this.state.root[t];
            if (null == r) return i;
            let {
                    root: a,
                    derived: { memoized: s },
                } = r,
                l = s[n];
            return Object.hasOwnProperty.call(s, n) || ((l = e(t, a)), (s[n] = l)), l;
        };
    }
    memoizedSinglePartition(e, t, n) {
        let i = Symbol(),
            r = void 0 !== n ? n : t(I);
        return () => {
            let n = this.state.root[e];
            if (null == n) return r;
            let {
                    root: a,
                    derived: { memoized: s },
                } = n,
                l = s[i];
            return Object.hasOwnProperty.call(s, i) || ((l = t(a)), (s[i] = l)), l;
        };
    }
    memoized(e) {
        let t = Symbol();
        return () => {
            let { memoized: n } = this.state.derived,
                i = n[t];
            return Object.hasOwnProperty.call(n, t) || ((i = e(this.state.root)), (n[t] = i)), i;
        };
    }
    emptyState() {
        return { root: {}, version: this.nextVersion(), derived: { length: 0, numPartitions: 0, memoized: {} } };
    }
    emptyPartitionState(e) {
        return { root: {}, version: e ?? this.nextVersion(), derived: { length: 0, memoized: {} } };
    }
    clear() {
        for (let e of ((this.state = this.emptyState()), this.secondaryIndexes)) e.kkvDatabase.clear();
    }
    removePartition(e, t) {
        t ??= this.nextVersion();
        let n = this.state.root[e];
        return (
            null != n &&
            (this.updateSecondaryIndexes(void 0, Object.values(n.root), t),
            delete this.state.root[e],
            this.state.derived.numPartitions--,
            (this.state.version = t),
            (this.state.derived.memoized = {}),
            (this.state.derived.length -= n.derived.length),
            !0)
        );
    }
    removeRecord(e, t, n) {
        n ??= this.nextVersion();
        let i = this.state.root[e];
        if (null == i) return !1;
        let r = i.root[t];
        return (
            null != r &&
            (this.updateSecondaryIndexes(void 0, [r], n),
            delete i.root[t],
            i.derived.length--,
            0 === i.derived.length
                ? (delete this.state.root[e], this.state.derived.numPartitions--)
                : (i.derived.memoized = {}),
            this.state.derived.length--,
            (this.state.version = n),
            (this.state.derived.memoized = {}),
            !0)
        );
    }
    updateRecord(e, t, n, i, r) {
        if (((r ??= this.nextVersion()), null == this.state.root[e])) throw Error(`Partition ${e} does not exist`);
        if (null == this.state.root[e].root[t]) throw Error(`Record ${t} does not exist in partition ${e}`);
        let a = this.state.root[e].root[t],
            s = i({ ...a, ...n });
        return this.updateSecondaryIndexes([s], [a], r), (this.touchPartition(e, r).root[t] = s), !0;
    }
    touchPartition(e, t) {
        return (
            (t ??= this.nextVersion()),
            null == this.state.root[e]
                ? ((this.state.root[e] = this.emptyPartitionState(t)), this.state.derived.numPartitions++)
                : ((this.state.root[e].version = t), (this.state.root[e].derived.memoized = {})),
            (this.state.version = t),
            (this.state.derived.memoized = {}),
            this.state.root[e]
        );
    }
    setRecord(e, t, n, i) {
        i ??= this.nextVersion();
        let r = this.touchPartition(e, i);
        return (
            null == r.root[t] && (r.derived.length++, this.state.derived.length++),
            (r.root[t] = n),
            this.updateSecondaryIndexes([n], void 0, i),
            !0
        );
    }
    setPartition(e, t, n) {
        (n ??= this.nextVersion()), this.removePartition(e, n);
        let i = Object.keys(t).length;
        if (0 === i) return !0;
        this.updateSecondaryIndexes(Object.values(t), void 0, n);
        let r = this.touchPartition(e, n);
        return (r.root = t), (r.derived.length = i), (this.state.derived.length += i), !0;
    }
    updateSecondaryIndexes(e, t, n) {
        for (let i of this.secondaryIndexes) {
            if (void 0 !== t)
                for (let e of t) {
                    let t = i.getK1Key(e),
                        r = i.getK2Key(e);
                    null != t && null != r && i.kkvDatabase.removeRecord(t, r, n);
                }
            if (void 0 !== e)
                for (let t of e) {
                    let e = i.getK1Key(t),
                        r = i.getK2Key(t);
                    null != e && null != r && i.kkvDatabase.setRecord(e, r, t, n);
                }
        }
    }
}
class S extends i.il {
    mode;
    state;
    _nextVersion = 0;
    recordCreators = new Map();
    wrappedState = null;
    shadowDatabases = null;
    shadowRecordCreators = null;
    dualReadValidationDisabled = !1;
    constructor(e, t = "typescript") {
        const n = {};
        if ("typescript" === t || "typescript-libdiscore-dual-read" === t)
            for (const t in e) {
                const i = e[t],
                    r = (e) => {
                        this.wrappedState ??= this.stateWrapper();
                        let t = this._nextVersion;
                        if ((i(e, this.wrappedState), this._nextVersion === t)) return !1;
                    };
                n[t] = r;
            }
        super(r.h, n),
            (this.mode = t),
            (this.state = { databases: {} }),
            "typescript-libdiscore-dual-read" === t &&
                ((this.shadowDatabases = {}), (this.shadowRecordCreators = new Map()));
    }
    getMode() {
        return this.mode;
    }
    disableDualReadValidation() {
        "typescript-libdiscore-dual-read" === this.mode && (this.dualReadValidationDisabled = !0);
    }
    connectWithLibdiscore(e) {
        if ("typescript" === this.mode) throw Error("connectWithLibdiscore should not be called in TypeScript mode.");
        let { storeToken: t, initialState: n } = e.connectStore({
            storeName: this.getName(),
            databases: Object.keys(this.state.databases).map((e) => ({ name: e, type: "kkv" })),
        });
        return (
            this.applyChanges(n), "typescript-libdiscore-dual-read" === this.mode && this.setupDualReadValidation(), t
        );
    }
    setupDualReadValidation() {
        let e = Symbol("didValidatePartition"),
            t = { root: {}, derived: { length: 0, memoized: {} } };
        this.addChangeListener(() => {
            let n = this.shadowDatabases;
            if (null != n && !this.dualReadValidationDisabled)
                for (let i in this.state.databases) {
                    let r = this.state.databases[i],
                        a = n[i];
                    if (null == a) {
                        f.warn(`Shadow database ${i} not found for dual-read validation`);
                        continue;
                    }
                    let s = r.getAllPartitions(),
                        h = a.getAllPartitions();
                    !(function (e, t) {
                        let n = [];
                        t((e, t) => {
                            !(function (e, t, n) {
                                t.derived.length !== n.derived.length &&
                                    e.push({
                                        type: "length-mismatch",
                                        primaryLength: t.derived.length,
                                        shadowLength: n.derived.length,
                                    });
                                let i = Object.keys(t.root),
                                    r = Object.keys(n.root);
                                for (let r of i) {
                                    if (!Object.prototype.hasOwnProperty.call(n.root, r)) {
                                        e.push({ type: "missing-record", key: r });
                                        continue;
                                    }
                                    let i = (function (e, t, n) {
                                        let i = [];
                                        for (let e in t)
                                            if (Object.prototype.hasOwnProperty.call(t, e)) {
                                                let r = t[e];
                                                if (!Object.prototype.hasOwnProperty.call(n, e)) {
                                                    i.push({ type: "field-missing", field: e });
                                                    continue;
                                                }
                                                let a = n[e];
                                                u(r, a) ||
                                                    i.push({
                                                        type: "value-mismatch",
                                                        field: e,
                                                        primaryValue: r,
                                                        shadowValue: a,
                                                    });
                                            }
                                        if (i.length > 0)
                                            return {
                                                type: "record-mismatch",
                                                key: e,
                                                primaryRecord: t,
                                                shadowRecord: n,
                                                mismatches: i,
                                            };
                                    })(r, t.root[r], n.root[r]);
                                    null != i && e.push(i);
                                }
                                for (let n of r)
                                    Object.prototype.hasOwnProperty.call(t.root, n) ||
                                        e.push({ type: "extra-record", key: n });
                            })(n, e, t);
                        }),
                            (function (e, t) {
                                if (0 === t.length) return;
                                console.groupCollapsed(
                                    `[KkvStore:${e}] Dual-read validation found ${t.length} error(s)`,
                                ),
                                    console.info("Last Few Actions: ", l.lK());
                                let n = [],
                                    i = [],
                                    r = 0;
                                t.forEach((e) => {
                                    if (!(r >= 5))
                                        switch ((r++, e.type)) {
                                            case "length-mismatch":
                                                console.info(
                                                    `Length mismatch \u{2192} primary = ${e.primaryLength}, shadow = ${e.shadowLength}`,
                                                );
                                                break;
                                            case "missing-record":
                                                n.push(e.key);
                                                break;
                                            case "extra-record":
                                                i.push(e.key);
                                                break;
                                            case "record-mismatch":
                                                console.groupCollapsed(`Record mismatch for key "${e.key}"`),
                                                    e.mismatches.forEach((e) => {
                                                        if ("field-missing" === e.type)
                                                            console.info(`Field missing: ${String(e.field)}`);
                                                        else {
                                                            var t, n;
                                                            let i;
                                                            console.groupCollapsed(
                                                                `Field "${String(e.field)}" value mismatch`,
                                                            ),
                                                                (t = e.primaryValue),
                                                                (n = e.shadowValue),
                                                                (i = new Map()),
                                                                (function e(t, n) {
                                                                    if (!u(t, n)) {
                                                                        if (
                                                                            "object" == typeof t &&
                                                                            null !== t &&
                                                                            "object" == typeof n &&
                                                                            null !== n
                                                                        ) {
                                                                            if (i.has(t))
                                                                                return void (i.get(t) === n
                                                                                    ? console.info(
                                                                                          "Cycle detected, already compared",
                                                                                      )
                                                                                    : console.info(
                                                                                          "Cycle detected but different corresponding object",
                                                                                      ));
                                                                            i.set(t, n);
                                                                        }
                                                                        if (t instanceof Date && n instanceof Date)
                                                                            return void console.info(
                                                                                `Date mismatch: primary ${t}, shadow ${n}`,
                                                                            );
                                                                        if (t instanceof Set && n instanceof Set) {
                                                                            let e = [...t].filter((e) => !n.has(e)),
                                                                                i = [...n].filter((e) => !t.has(e));
                                                                            e.length > 0 &&
                                                                                console.info("Only in primary: ", e),
                                                                                i.length > 0 &&
                                                                                    console.info("Only in shadow: ", i);
                                                                            return;
                                                                        }
                                                                        if (Array.isArray(t) && Array.isArray(n)) {
                                                                            let i = Math.min(t.length, n.length);
                                                                            for (let r = 0; r < i; r++)
                                                                                u(t[r], n[r]) ||
                                                                                    (console.group(
                                                                                        `Array index ${r} mismatch:`,
                                                                                    ),
                                                                                    e(t[r], n[r]),
                                                                                    console.groupEnd());
                                                                            t.length > n.length
                                                                                ? console.info(
                                                                                      "Extra in primary: ",
                                                                                      t.slice(n.length),
                                                                                  )
                                                                                : n.length > t.length &&
                                                                                  console.info(
                                                                                      "Extra in shadow: ",
                                                                                      n.slice(t.length),
                                                                                  );
                                                                            return;
                                                                        }
                                                                        if (_(t) && _(n)) {
                                                                            let i = new Set(Object.keys(t)),
                                                                                r = new Set(Object.keys(n));
                                                                            for (let a of Array.from(
                                                                                new Set([...i, ...r]),
                                                                            ).sort())
                                                                                i.has(a)
                                                                                    ? r.has(a)
                                                                                        ? u(t[a], n[a]) ||
                                                                                          (console.group(
                                                                                              `Field ${a} mismatch:`,
                                                                                          ),
                                                                                          e(t[a], n[a]),
                                                                                          console.groupEnd())
                                                                                        : console.info(
                                                                                              `Missing field in shadow: ${a} = `,
                                                                                              t[a],
                                                                                          )
                                                                                    : console.info(
                                                                                          `Extra field in shadow: ${a} = `,
                                                                                          n[a],
                                                                                      );
                                                                            return;
                                                                        }
                                                                        console.info(
                                                                            "Value mismatch: primary ",
                                                                            t,
                                                                            " shadow ",
                                                                            n,
                                                                        );
                                                                    }
                                                                })(t, n),
                                                                console.groupEnd();
                                                        }
                                                    }),
                                                    console.groupEnd();
                                        }
                                }),
                                    r < t.length && console.info(`... and ${t.length - r} more error(s) not shown`),
                                    n.length > 0 && console.info(`Missing records in shadow state: ${n.join(", ")}`),
                                    i.length > 0 && console.info(`Extra records in shadow state: ${i.join(", ")}`),
                                    console.groupEnd();
                            })(e, n),
                            (function (e, t) {
                                if (0 === t.length) return;
                                let n = l.HV();
                                if (null == n)
                                    return console.error(
                                        "Trying to log mismatches, but no last dispatched action found",
                                    );
                                let i = E.get(e) ?? {
                                    mismatchesReported: 0,
                                    mismatchesByLastAction: new Map(),
                                    visitedEntries: new WeakSet(),
                                    seenMismatches: new Set(),
                                };
                                if ((E.set(e, i), i.mismatchesReported >= 15)) return;
                                let r = i.mismatchesByLastAction.get(n) ?? 0;
                                if (r >= 3) return;
                                let a = (function (e, t) {
                                    let n = { numExtraKeys: 0, numMissingKeys: 0, mismatchedFields: [] };
                                    for (let a of t)
                                        switch (a.type) {
                                            case "extra-record":
                                                n.numExtraKeys++;
                                                break;
                                            case "missing-record":
                                                n.numMissingKeys++;
                                                break;
                                            case "record-mismatch":
                                                if (e.visitedEntries.has(a.primaryRecord)) continue;
                                                for (let t of (e.visitedEntries.add(a.primaryRecord), a.mismatches)) {
                                                    let e = t.field.toString();
                                                    switch (t.type) {
                                                        case "field-missing":
                                                            n.mismatchedFields.push({
                                                                fieldName: e,
                                                                primaryType: A(a.primaryRecord[t.field]),
                                                                shadowType: "missing",
                                                            });
                                                            break;
                                                        case "value-mismatch":
                                                            null !== t.primaryValue &&
                                                            null !== t.shadowValue &&
                                                            "object" == typeof t.primaryValue &&
                                                            "object" == typeof t.shadowValue
                                                                ? Array.isArray(t.primaryValue) &&
                                                                  Array.isArray(t.shadowValue)
                                                                    ? r(e, t.primaryValue, t.shadowValue)
                                                                    : (function e(t, n, a) {
                                                                          let s =
                                                                              arguments.length > 3 &&
                                                                              void 0 !== arguments[3]
                                                                                  ? arguments[3]
                                                                                  : new Set();
                                                                          for (let l of Object.keys(n)) {
                                                                              let o = `${t}.${l}`,
                                                                                  d = n[l];
                                                                              if (
                                                                                  !Object.prototype.hasOwnProperty.call(
                                                                                      a,
                                                                                      l,
                                                                                  )
                                                                              ) {
                                                                                  i({
                                                                                      fieldName: o,
                                                                                      primaryType: A(d),
                                                                                      shadowType: "missing",
                                                                                  });
                                                                                  continue;
                                                                              }
                                                                              let c = a[l];
                                                                              d !== c &&
                                                                                  ("object" == typeof d &&
                                                                                  "object" == typeof c
                                                                                      ? Array.isArray(d) &&
                                                                                        Array.isArray(c)
                                                                                          ? r(o, d, c)
                                                                                          : null == d ||
                                                                                            null == c ||
                                                                                            s.has(d) ||
                                                                                            (s.add(d), e(o, d, c, s))
                                                                                      : i({
                                                                                            fieldName: o,
                                                                                            primaryType: A(d),
                                                                                            shadowType: A(c),
                                                                                        }));
                                                                          }
                                                                      })(e, t.primaryValue, t.shadowValue)
                                                                : i({
                                                                      fieldName: e,
                                                                      primaryType: A(t.primaryValue),
                                                                      shadowType: A(t.shadowValue),
                                                                  });
                                                    }
                                                }
                                        }
                                    if (n.mismatchedFields.length + n.numExtraKeys + n.numMissingKeys === 0)
                                        return null;
                                    return n;
                                    function i() {
                                        for (var t = arguments.length, i = Array(t), r = 0; r < t; r++)
                                            i[r] = arguments[r];
                                        for (let t of i) {
                                            let i = `${t.fieldName}:${t.primaryType}:${t.shadowType}`;
                                            e.seenMismatches.has(i) ||
                                                (e.seenMismatches.add(i), n.mismatchedFields.push(t));
                                        }
                                    }
                                    function r(e, t, n) {
                                        (0, o.v)(t, n) ||
                                            i({
                                                fieldName: e,
                                                primaryType: "array",
                                                shadowType: "array",
                                                primaryArrayLength: t.length,
                                                secondaryArrayLength: n.length,
                                            });
                                    }
                                })(i, t);
                                null != a &&
                                    (i.mismatchesByLastAction.set(n, r + 1),
                                    i.mismatchesReported++,
                                    d.default.track(c.HAw.LIBDISCORE_KV_DUAL_READ_ERROR, {
                                        store_name: e,
                                        action_type: n,
                                        num_missing_keys: a.numMissingKeys,
                                        num_extra_keys: a.numExtraKeys,
                                        mismatched_fields: JSON.stringify(a.mismatchedFields),
                                    }));
                            })(e, n);
                    })(`${this.getName()}:${i}`, (n) => {
                        let i = Object.keys(s),
                            r = Object.keys(h);
                        for (let r of i) {
                            let i = s[r];
                            if (!Object.prototype.hasOwnProperty.call(h, r)) {
                                n(i, t);
                                continue;
                            }
                            let a = h[r],
                                l = i.derived.memoized[e],
                                o = a.derived.memoized[e];
                            if (null != l && l === o) continue;
                            n(i, a);
                            let d = {};
                            (i.derived.memoized[e] = d), (a.derived.memoized[e] = d);
                        }
                        for (let e of r) Object.prototype.hasOwnProperty.call(s, e) || n(t, h[e]);
                    });
                }
        });
    }
    addKKVDatabase(e, t) {
        let n = new g(this.nextVersion.bind(this));
        if (((this.state.databases[e] = n), this.recordCreators.set(e, t ?? p), null != this.shadowDatabases)) {
            let n = new g(this.nextVersion.bind(this));
            (this.shadowDatabases[e] = n), this.shadowRecordCreators.set(e, t ?? p);
        }
        return n;
    }
    addKVDatabase(e, t) {
        let n = new g(this.nextVersion.bind(this)),
            i = n.intoKV();
        if (((this.state.databases[e] = n), this.recordCreators.set(e, t ?? p), null != this.shadowDatabases)) {
            let n = new g(this.nextVersion.bind(this));
            (this.shadowDatabases[e] = n), this.shadowRecordCreators.set(e, t ?? p);
        }
        return i;
    }
    applyChanges(e) {
        let t = "typescript-libdiscore-dual-read" === this.mode;
        for (let n of e) this.executeDatabaseChange(n, t);
    }
    clearAllDatabases() {
        for (let e in this.state.databases) this.state.databases[e].clear();
    }
    markDirty() {
        this._nextVersion++;
    }
    executeDatabaseChange(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            { databaseName: n, opcodes: i } = e,
            r = this.nextVersion(),
            a = t ? this.shadowDatabases : this.state.databases,
            s = t ? this.shadowRecordCreators : this.recordCreators,
            l = a[n];
        if (null == l) throw Error(`Database ${n} does not exist`);
        let o = s.get(n);
        for (let e of i)
            switch (e.opcode) {
                case "removePartition":
                    l.removePartition(e.partitionKey, r);
                    break;
                case "setPartition": {
                    let t = e.partition;
                    for (let e in t) t[e] = o(t[e]);
                    l.setPartition(e.partitionKey, t, r);
                    break;
                }
                case "updateRecord":
                    l.updateRecord(e.partitionKey, e.clusteringKey, e.value, o, r);
                    break;
                case "setRecord":
                    l.setRecord(e.partitionKey, e.clusteringKey, o(e.value), r);
                    break;
                case "removeRecord":
                    l.removeRecord(e.partitionKey, e.clusteringKey, r);
                    break;
                case "clearDatabase":
                    l.clear();
            }
    }
    nextVersion() {
        return this._nextVersion++;
    }
}
