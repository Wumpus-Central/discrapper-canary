n.d(t, {
    AT: () => m,
    g5: () => p,
    gc: () => h
}),
    n(47120),
    n(411104);
var r = n(123763),
    i = n.n(r),
    o = n(956067),
    a = n(433517),
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
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function u(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let d = {
        _state: void 0,
        _version: void 0
    },
    f = null;
class p extends s.y {
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
                                    p.shouldClear(e, t) && a.K.remove(t);
                                }),
                                s.y.getAll().forEach((t) => {
                                    t instanceof p && p.shouldClear(e, t.getClass().persistKey) && ((t._isInitialized = !1), t.initializeIfNeeded());
                                }),
                                (p._clearAllPromise = null),
                                t();
                        },
                        { timeout: 500 }
                    );
                })),
            p._clearAllPromise
        );
    }
    static shouldClear(e, t) {
        var n;
        return (null === (n = e.omit) || void 0 === n || !n.includes(t)) && ('all' === e.type || ('user-data-only' === e.type && !p.userAgnosticPersistKeys.has(t)));
    }
    static clearPersistQueue(e) {
        p._writeResolvers.forEach((t, n) => {
            let [r, i] = t;
            p.shouldClear(e, n) && (p._writePromises.delete(n), p._writeResolvers.delete(n), cancelIdleCallback(i), r(!1));
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
                    e[t] = (null !== (n = a.K.get(t)) && void 0 !== n ? n : d)._state;
                }),
                e
            );
        });
    }
    static initializeAll(e) {
        s.y.getAll().forEach((t) => {
            if (t instanceof p) {
                let n = t.getClass().persistKey;
                e.hasOwnProperty(n) && t.initializeFromState(e[n]);
            }
        });
    }
    initializeFromState(e) {
        this.initialize(e) && this.asyncPersist(), this._isInitialized ? this.emitChange() : (p.allPersistKeys.add(this.getClass().persistKey), (this._isInitialized = !0));
    }
    static destroy() {
        (f = null), s.y.destroy(), p.clearPersistQueue({ type: 'all' }), p.allPersistKeys.clear(), p.userAgnosticPersistKeys.clear();
    }
    initializeIfNeeded() {
        if (!this._isInitialized) {
            let e = Date.now();
            p.allPersistKeys.add(this.getClass().persistKey);
            let { state: t, requiresPersist: n } = p.migrateAndReadStoreState(this.getClass().persistKey, this.getClass().migrations);
            this.initialize(t) && this.asyncPersist(), n && this.asyncPersist(), (this._isInitialized = !0);
            let r = Date.now() - e;
            r > 5 && o.Z.mark('\uD83E\uDDA5', this.getName() + '.initialize()', r);
        }
    }
    static migrateAndReadStoreState(e, t) {
        if (null != f && p.shouldClear(f, e))
            return (
                a.K.remove(e),
                {
                    state: void 0,
                    requiresPersist: !1
                }
            );
        let n = null != p._clearAllPromise ? null : a.K.get(e),
            r = null != n ? n : d,
            { _state: i, _version: o } = r,
            s = c(r, ['_state', '_version']),
            l = null == t ? 0 : t.length;
        if (0 !== l && o !== l && null != t) {
            let e = null != o ? o : 0,
                n = i;
            for (null == o && (n = s); e < l; ) (n = (0, t[e])(n)), e++;
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
        a.K.set(e, {
            _state: t,
            _version: n
        });
    }
    clear() {
        let { persistKey: e } = this.getClass();
        a.K.remove(e);
    }
    constructor(e, t) {
        if (
            (super(e, t),
            l(this, '_version', null == this.getClass().migrations ? 0 : this.getClass().migrations.length),
            l(this, 'callback', (e) => {
                let { persistKey: t } = this.getClass();
                this.persist(), p._writePromises.delete(t), p._writeResolvers.delete(t), e();
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
l(p, 'allPersistKeys', new Set()), l(p, 'userAgnosticPersistKeys', new Set()), l(p, '_writePromises', new Map()), l(p, '_writeResolvers', new Map()), l(p, '_clearAllPromise', void 0), l(p, 'disableWrites', !1), l(p, 'persistKey', void 0), l(p, 'disableWrite', !1), l(p, 'throttleDelay', 0), l(p, 'migrations', void 0);
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
