n.d(t, {
    J5: () => m,
    dP: () => p,
    lt: () => h,
}),
    n(896048),
    n(65821);
var r = n(879378),
    i = n.n(r),
    a = n(61090),
    s = n(506774),
    o = n(22468);
function l(e, t, n) {
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
function c(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = u(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function u(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let d = {
        _state: void 0,
        _version: void 0,
    },
    f = null;
class p extends o.i {
    getClass() {
        return this.constructor;
    }
    static clearAll(e) {
        return (
            (f = e),
            null == p._clearAllPromise &&
                (p._clearAllPromise = new Promise((t) => {
                    requestIdleCallback(
                        () => {
                            p.clearPersistQueue(e),
                                p.allPersistKeys.forEach((t) => {
                                    p.shouldClear(e, t) && s.w.remove(t);
                                }),
                                o.i.getAll().forEach((t) => {
                                    t instanceof p &&
                                        p.shouldClear(e, t.getClass().persistKey) &&
                                        ((t._isInitialized = !1), t.initializeIfNeeded());
                                }),
                                (p._clearAllPromise = null),
                                t();
                        },
                        { timeout: 500 },
                    );
                })),
            p._clearAllPromise
        );
    }
    static shouldClear(e, t) {
        var n;
        return (
            (null == (n = e.omit) || !n.includes(t)) &&
            ("all" === e.type || ("user-data-only" === e.type && !p.userAgnosticPersistKeys.has(t)))
        );
    }
    static clearPersistQueue(e) {
        p._writeResolvers.forEach((t, n) => {
            let [r, i] = t;
            p.shouldClear(e, n) &&
                (p._writePromises.delete(n), p._writeResolvers.delete(n), cancelIdleCallback(i), r(!1));
        }),
            p._writePromises.clear(),
            p._writeResolvers.clear();
    }
    static getAllStates() {
        return Promise.all(Array.from(p._writePromises.values())).then(() => {
            let e = {};
            return (
                p.allPersistKeys.forEach((t) => {
                    var n;
                    e[t] = (null != (n = s.w.get(t)) ? n : d)._state;
                }),
                e
            );
        });
    }
    static initializeAll(e) {
        o.i.getAll().forEach((t) => {
            if (t instanceof p) {
                let n = t.getClass().persistKey;
                e.hasOwnProperty(n) && t.initializeFromState(e[n]);
            }
        });
    }
    initializeFromState(e) {
        this.initialize(e) && this.asyncPersist(),
            this._isInitialized
                ? this.emitChange()
                : (p.allPersistKeys.add(this.getClass().persistKey), (this._isInitialized = !0));
    }
    static destroy() {
        (f = null),
            o.i.destroy(),
            p.clearPersistQueue({ type: "all" }),
            p.allPersistKeys.clear(),
            p.userAgnosticPersistKeys.clear();
    }
    initializeIfNeeded() {
        if (!this._isInitialized) {
            let e = Date.now();
            p.allPersistKeys.add(this.getClass().persistKey);
            let { state: t, requiresPersist: n } = p.migrateAndReadStoreState(
                this.getClass().persistKey,
                this.getClass().migrations,
            );
            this.initialize(t) && this.asyncPersist(), n && this.asyncPersist(), (this._isInitialized = !0);
            let r = Date.now() - e;
            r > 5 && a.A.mark("\uD83E\uDDA5", this.getName() + ".initialize()", r);
        }
    }
    static migrateAndReadStoreState(e, t) {
        if (null != f && p.shouldClear(f, e))
            return (
                s.w.remove(e),
                {
                    state: void 0,
                    requiresPersist: !1,
                }
            );
        let n = null != p._clearAllPromise ? null : s.w.get(e),
            r = null != n ? n : d,
            { _state: i, _version: a } = r,
            o = c(r, ["_state", "_version"]),
            l = null == t ? 0 : t.length;
        if (0 !== l && a !== l && null != t) {
            let e = null != a ? a : 0,
                n = i;
            for (null == a && (n = o); e < l; ) (n = (0, t[e])(n)), e++;
            return {
                state: n,
                requiresPersist: !0,
            };
        }
        return Object.values(o).length > 0
            ? {
                  state: o,
                  requiresPersist: !0,
              }
            : {
                  state: i,
                  requiresPersist: !1,
              };
    }
    asyncPersist() {
        let { persistKey: e, disableWrite: t, throttleDelay: n } = this.getClass();
        if (p.disableWrites || t) return Promise.resolve(!1);
        let r = p._writePromises.get(e);
        return (
            null != r ||
                ((r = new Promise((t) => {
                    let r = n > 0 ? () => this.throttledCallback(t) : () => this.callback(t);
                    p._writeResolvers.set(e, [t, requestIdleCallback(r, { timeout: 500 })]);
                })),
                p._writePromises.set(e, r)),
            r
        );
    }
    persist() {
        let { persistKey: e } = this.getClass(),
            t = this.getState(),
            n = this._version;
        s.w.set(e, {
            _state: t,
            _version: n,
        });
    }
    clear() {
        let { persistKey: e } = this.getClass();
        s.w.remove(e);
    }
    constructor(e, t, n) {
        if (
            (super(e, t, n),
            l(this, "_version", null == this.getClass().migrations ? 0 : this.getClass().migrations.length),
            l(this, "callback", (e) => {
                let { persistKey: t } = this.getClass();
                this.persist(), p._writePromises.delete(t), p._writeResolvers.delete(t), e();
            }),
            l(
                this,
                "throttledCallback",
                i()((e) => this.callback(e), this.getClass().throttleDelay, { leading: !1 }),
            ),
            "string" != typeof this.getClass().persistKey)
        )
            throw Error(
                "".concat(
                    this.getClass().name,
                    " initialized without a `persistKey`. Add one so we know where to save your stuff!",
                ),
            );
        if ("function" != typeof this.initialize)
            throw Error(
                "".concat(
                    this.getClass().name,
                    " initialized without an `initialize` method. Add one that accepts the initial cached state.",
                ),
            );
        if ("function" != typeof this.getState)
            throw Error(
                "".concat(
                    this.getClass().name,
                    " initialized without a `getState` method. Add one that returns the full state of the store for persistance to work.",
                ),
            );
        this.addChangeListener(() => this.asyncPersist());
    }
}
l(p, "allPersistKeys", new Set()),
    l(p, "userAgnosticPersistKeys", new Set()),
    l(p, "_writePromises", new Map()),
    l(p, "_writeResolvers", new Map()),
    l(p, "_clearAllPromise", void 0),
    l(p, "disableWrites", !1),
    l(p, "persistKey", void 0),
    l(p, "disableWrite", !1),
    l(p, "throttleDelay", 0),
    l(p, "migrations", void 0);
class _ extends p {
    initializeFromState(e) {
        return p.userAgnosticPersistKeys.add(this.getClass().persistKey), super.initializeFromState(e);
    }
    initializeIfNeeded() {
        return p.userAgnosticPersistKeys.add(this.getClass().persistKey), super.initializeIfNeeded();
    }
    getState() {
        return this.getUserAgnosticState();
    }
}
class h extends _ {}
class m extends _ {}
