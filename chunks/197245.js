"use strict";
n.d(t, { J5: () => f, dP: () => c, lt: () => _ });
var r = n(879378),
    i = n.n(r),
    s = n(61090),
    a = n(506774),
    o = n(22468);
let l = { _state: void 0, _version: void 0 },
    u = null;
class c extends o.i {
    static allPersistKeys = new Set();
    static userAgnosticPersistKeys = new Set();
    static _writePromises = new Map();
    static _writeResolvers = new Map();
    static _clearAllPromise;
    static disableWrites = !1;
    static persistKey;
    static disableWrite = !1;
    static throttleDelay = 0;
    getClass() {
        return this.constructor;
    }
    static migrations;
    _version = null == this.getClass().migrations ? 0 : this.getClass().migrations.length;
    static clearAll(e) {
        return (
            (u = e),
            null == c._clearAllPromise &&
                (c._clearAllPromise = new Promise((t) => {
                    requestIdleCallback(
                        () => {
                            c.clearPersistQueue(e),
                                c.allPersistKeys.forEach((t) => {
                                    c.shouldClear(e, t) && a.w.remove(t);
                                }),
                                o.i.getAll().forEach((t) => {
                                    t instanceof c &&
                                        c.shouldClear(e, t.getClass().persistKey) &&
                                        ((t._isInitialized = !1), t.initializeIfNeeded());
                                }),
                                (c._clearAllPromise = null),
                                t();
                        },
                        { timeout: 500 },
                    );
                })),
            c._clearAllPromise
        );
    }
    static shouldClear(e, t) {
        return (
            !e.omit?.includes(t) &&
            ("all" === e.type || ("user-data-only" === e.type && !c.userAgnosticPersistKeys.has(t)))
        );
    }
    static clearPersistQueue(e) {
        c._writeResolvers.forEach((t, n) => {
            let [r, i] = t;
            c.shouldClear(e, n) &&
                (c._writePromises.delete(n), c._writeResolvers.delete(n), cancelIdleCallback(i), r(!1));
        }),
            c._writePromises.clear(),
            c._writeResolvers.clear();
    }
    static getAllStates() {
        return Promise.all(Array.from(c._writePromises.values())).then(() => {
            let e = {};
            return (
                c.allPersistKeys.forEach((t) => {
                    e[t] = (a.w.get(t) ?? l)._state;
                }),
                e
            );
        });
    }
    static initializeAll(e) {
        o.i.getAll().forEach((t) => {
            if (t instanceof c) {
                let n = t.getClass().persistKey;
                e.hasOwnProperty(n) && t.initializeFromState(e[n]);
            }
        });
    }
    initializeFromState(e) {
        this.initialize(e) && this.asyncPersist(),
            this._isInitialized
                ? this.emitChange()
                : (c.allPersistKeys.add(this.getClass().persistKey), (this._isInitialized = !0));
    }
    static destroy() {
        (u = null),
            o.i.destroy(),
            c.clearPersistQueue({ type: "all" }),
            c.allPersistKeys.clear(),
            c.userAgnosticPersistKeys.clear();
    }
    constructor(e, t, n) {
        if ((super(e, t, n), "string" != typeof this.getClass().persistKey))
            throw Error(
                `${this.getClass().name} initialized without a \`persistKey\`. Add one so we know where to save your stuff!`,
            );
        if ("function" != typeof this.initialize)
            throw Error(
                `${this.getClass().name} initialized without an \`initialize\` method. Add one that accepts the initial cached state.`,
            );
        if ("function" != typeof this.getState)
            throw Error(
                `${this.getClass().name} initialized without a \`getState\` method. Add one that returns the full state of the store for persistance to work.`,
            );
        this.addChangeListener(() => this.asyncPersist());
    }
    initializeIfNeeded() {
        if (!this._isInitialized) {
            let e = Date.now();
            c.allPersistKeys.add(this.getClass().persistKey);
            let { state: t, requiresPersist: n } = c.migrateAndReadStoreState(
                this.getClass().persistKey,
                this.getClass().migrations,
            );
            this.initialize(t) && this.asyncPersist(), n && this.asyncPersist(), (this._isInitialized = !0);
            let r = Date.now() - e;
            r > 5 && s.A.mark("\uD83E\uDDA5", this.getName() + ".initialize()", r);
        }
    }
    static migrateAndReadStoreState(e, t) {
        if (null != u && c.shouldClear(u, e)) return a.w.remove(e), { state: void 0, requiresPersist: !1 };
        let { _state: n, _version: r, ...i } = (null != c._clearAllPromise ? null : a.w.get(e)) ?? l,
            s = null == t ? 0 : t.length;
        if (0 !== s && r !== s && null != t) {
            let e = r ?? 0,
                a = n;
            for (null == r && (a = i); e < s; ) (a = (0, t[e])(a)), e++;
            return { state: a, requiresPersist: !0 };
        }
        return Object.values(i).length > 0 ? { state: i, requiresPersist: !0 } : { state: n, requiresPersist: !1 };
    }
    callback = (e) => {
        let { persistKey: t } = this.getClass();
        this.persist(), c._writePromises.delete(t), c._writeResolvers.delete(t), e();
    };
    throttledCallback = i()((e) => this.callback(e), this.getClass().throttleDelay, { leading: !1 });
    asyncPersist() {
        let { persistKey: e, disableWrite: t, throttleDelay: n } = this.getClass();
        if (c.disableWrites || t) return Promise.resolve(!1);
        let r = c._writePromises.get(e);
        return (
            null != r ||
                ((r = new Promise((t) => {
                    let r = n > 0 ? () => this.throttledCallback(t) : () => this.callback(t);
                    c._writeResolvers.set(e, [t, requestIdleCallback(r, { timeout: 500 })]);
                })),
                c._writePromises.set(e, r)),
            r
        );
    }
    persist() {
        let { persistKey: e } = this.getClass(),
            t = this.getState(),
            n = this._version;
        a.w.set(e, { _state: t, _version: n });
    }
    clear() {
        let { persistKey: e } = this.getClass();
        a.w.remove(e);
    }
}
class d extends c {
    initializeFromState(e) {
        return c.userAgnosticPersistKeys.add(this.getClass().persistKey), super.initializeFromState(e);
    }
    initializeIfNeeded() {
        return c.userAgnosticPersistKeys.add(this.getClass().persistKey), super.initializeIfNeeded();
    }
    getState() {
        return this.getUserAgnosticState();
    }
}
class _ extends d {}
class f extends d {}
