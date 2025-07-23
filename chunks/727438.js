(n.d(t, {
    AT: () => m,
    g5: () => f,
    gc: () => h
}),
    n(388685),
    n(415506));
var r = n(123763),
    i = n.n(r),
    a = n(135273),
    o = n(433517),
    s = n(445346);
function l(e, t, n) {
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
function c(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = u(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function u(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let d = {
        _state: void 0,
        _version: void 0
    },
    _ = null;
class f extends s.y {
    getClass() {
        return this.constructor;
    }
    static clearAll(e) {
        return (
            (_ = e),
            null == f._clearAllPromise &&
                (f._clearAllPromise = new Promise((t) => {
                    requestIdleCallback(
                        () => {
                            (f.clearPersistQueue(e),
                                f.allPersistKeys.forEach((t) => {
                                    f.shouldClear(e, t) && o.K.remove(t);
                                }),
                                s.y.getAll().forEach((t) => {
                                    t instanceof f && f.shouldClear(e, t.getClass().persistKey) && ((t._isInitialized = !1), t.initializeIfNeeded());
                                }),
                                (f._clearAllPromise = null),
                                t());
                        },
                        { timeout: 500 }
                    );
                })),
            f._clearAllPromise
        );
    }
    static shouldClear(e, t) {
        var n;
        return (null == (n = e.omit) || !n.includes(t)) && ('all' === e.type || ('user-data-only' === e.type && !f.userAgnosticPersistKeys.has(t)));
    }
    static clearPersistQueue(e) {
        (f._writeResolvers.forEach((t, n) => {
            let [r, i] = t;
            f.shouldClear(e, n) && (f._writePromises.delete(n), f._writeResolvers.delete(n), cancelIdleCallback(i), r(!1));
        }),
            f._writePromises.clear(),
            f._writeResolvers.clear());
    }
    static getAllStates() {
        return Promise.all(Array.from(f._writePromises.values())).then(() => {
            let e = {};
            return (
                f.allPersistKeys.forEach((t) => {
                    var n;
                    e[t] = (null != (n = o.K.get(t)) ? n : d)._state;
                }),
                e
            );
        });
    }
    static initializeAll(e) {
        s.y.getAll().forEach((t) => {
            if (t instanceof f) {
                let n = t.getClass().persistKey;
                e.hasOwnProperty(n) && t.initializeFromState(e[n]);
            }
        });
    }
    initializeFromState(e) {
        (this.initialize(e) && this.asyncPersist(), this._isInitialized ? this.emitChange() : (f.allPersistKeys.add(this.getClass().persistKey), (this._isInitialized = !0)));
    }
    static destroy() {
        ((_ = null), s.y.destroy(), f.clearPersistQueue({ type: 'all' }), f.allPersistKeys.clear(), f.userAgnosticPersistKeys.clear());
    }
    initializeIfNeeded() {
        if (!this._isInitialized) {
            let e = Date.now();
            f.allPersistKeys.add(this.getClass().persistKey);
            let { state: t, requiresPersist: n } = f.migrateAndReadStoreState(this.getClass().persistKey, this.getClass().migrations);
            (this.initialize(t) && this.asyncPersist(), n && this.asyncPersist(), (this._isInitialized = !0));
            let r = Date.now() - e;
            r > 5 && a.Z.mark('\uD83E\uDDA5', this.getName() + '.initialize()', r);
        }
    }
    static migrateAndReadStoreState(e, t) {
        if (null != _ && f.shouldClear(_, e))
            return (
                o.K.remove(e),
                {
                    state: void 0,
                    requiresPersist: !1
                }
            );
        let n = null != f._clearAllPromise ? null : o.K.get(e),
            r = null != n ? n : d,
            { _state: i, _version: a } = r,
            s = c(r, ['_state', '_version']),
            l = null == t ? 0 : t.length;
        if (0 !== l && a !== l && null != t) {
            let e = null != a ? a : 0,
                n = i;
            for (null == a && (n = s); e < l; ) ((n = (0, t[e])(n)), e++);
            return {
                state: n,
                requiresPersist: !0
            };
        }
        return Object.values(s).length > 0
            ? {
                  state: s,
                  requiresPersist: !0
              }
            : {
                  state: i,
                  requiresPersist: !1
              };
    }
    asyncPersist() {
        let { persistKey: e, disableWrite: t, throttleDelay: n } = this.getClass();
        if (f.disableWrites || t) return Promise.resolve(!1);
        let r = f._writePromises.get(e);
        return (
            null != r ||
                ((r = new Promise((t) => {
                    let r = n > 0 ? () => this.throttledCallback(t) : () => this.callback(t);
                    f._writeResolvers.set(e, [t, requestIdleCallback(r, { timeout: 500 })]);
                })),
                f._writePromises.set(e, r)),
            r
        );
    }
    persist() {
        let { persistKey: e } = this.getClass(),
            t = this.getState(),
            n = this._version;
        o.K.set(e, {
            _state: t,
            _version: n
        });
    }
    clear() {
        let { persistKey: e } = this.getClass();
        o.K.remove(e);
    }
    constructor(e, t, n) {
        if (
            (super(e, t, n),
            l(this, '_version', null == this.getClass().migrations ? 0 : this.getClass().migrations.length),
            l(this, 'callback', (e) => {
                let { persistKey: t } = this.getClass();
                (this.persist(), f._writePromises.delete(t), f._writeResolvers.delete(t), e());
            }),
            l(
                this,
                'throttledCallback',
                i()((e) => this.callback(e), this.getClass().throttleDelay, { leading: !1 })
            ),
            'string' != typeof this.getClass().persistKey)
        )
            throw Error(''.concat(this.getClass().name, ' initialized without a `persistKey`. Add one so we know where to save your stuff!'));
        if ('function' != typeof this.initialize) throw Error(''.concat(this.getClass().name, ' initialized without an `initialize` method. Add one that accepts the initial cached state.'));
        if ('function' != typeof this.getState) throw Error(''.concat(this.getClass().name, ' initialized without a `getState` method. Add one that returns the full state of the store for persistance to work.'));
        this.addChangeListener(() => this.asyncPersist());
    }
}
(l(f, 'allPersistKeys', new Set()), l(f, 'userAgnosticPersistKeys', new Set()), l(f, '_writePromises', new Map()), l(f, '_writeResolvers', new Map()), l(f, '_clearAllPromise', void 0), l(f, 'disableWrites', !1), l(f, 'persistKey', void 0), l(f, 'disableWrite', !1), l(f, 'throttleDelay', 0), l(f, 'migrations', void 0));
class p extends f {
    initializeFromState(e) {
        return (f.userAgnosticPersistKeys.add(this.getClass().persistKey), super.initializeFromState(e));
    }
    initializeIfNeeded() {
        return (f.userAgnosticPersistKeys.add(this.getClass().persistKey), super.initializeIfNeeded());
    }
    getState() {
        return this.getUserAgnosticState();
    }
}
class h extends p {}
class m extends p {}
