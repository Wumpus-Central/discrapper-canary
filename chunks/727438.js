r.d(n, {
    AT: function () {
        return g;
    },
    g5: function () {
        return h;
    },
    gc: function () {
        return m;
    }
});
var i = r(47120);
var a = r(411104);
var o = r(123763),
    s = r.n(o),
    l = r(956067),
    u = r(433517),
    c = r(445346);
function d(e, n, r) {
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
let f = {
        _state: void 0,
        _version: void 0
    },
    p = null;
class h extends c.y {
    getClass() {
        return this.constructor;
    }
    static clearAll(e) {
        return (
            (p = e),
            null == h._clearAllPromise &&
                (h._clearAllPromise = new Promise((n) => {
                    requestIdleCallback(
                        () => {
                            h.clearPersistQueue(e),
                                h.allPersistKeys.forEach((n) => {
                                    h.shouldClear(e, n) && u.K.remove(n);
                                }),
                                c.y.getAll().forEach((n) => {
                                    n instanceof h && h.shouldClear(e, n.getClass().persistKey) && ((n._isInitialized = !1), n.initializeIfNeeded());
                                }),
                                (h._clearAllPromise = null),
                                n();
                        },
                        { timeout: 500 }
                    );
                })),
            h._clearAllPromise
        );
    }
    static shouldClear(e, n) {
        var r;
        return (null === (r = e.omit) || void 0 === r ? !void 0 : !r.includes(n)) && ('all' === e.type || ('user-data-only' === e.type && !h.userAgnosticPersistKeys.has(n)));
    }
    static clearPersistQueue(e) {
        h._writeResolvers.forEach((n, r) => {
            let [i, a] = n;
            h.shouldClear(e, r) && (h._writePromises.delete(r), h._writeResolvers.delete(r), cancelIdleCallback(a), i(!1));
        }),
            h._writePromises.clear(),
            h._writeResolvers.clear();
    }
    static getAllStates() {
        return Promise.all(Array.from(h._writePromises.values())).then(() => {
            let e = {};
            return (
                h.allPersistKeys.forEach((n) => {
                    var r;
                    e[n] = (null !== (r = u.K.get(n)) && void 0 !== r ? r : f)._state;
                }),
                e
            );
        });
    }
    static initializeAll(e) {
        c.y.getAll().forEach((n) => {
            if (n instanceof h) {
                let r = n.getClass().persistKey;
                e.hasOwnProperty(r) && n.initializeFromState(e[r]);
            }
        });
    }
    initializeFromState(e) {
        this.initialize(e) && this.asyncPersist(), this._isInitialized ? this.emitChange() : (h.allPersistKeys.add(this.getClass().persistKey), (this._isInitialized = !0));
    }
    static destroy() {
        (p = null), c.y.destroy(), h.clearPersistQueue({ type: 'all' }), h.allPersistKeys.clear(), h.userAgnosticPersistKeys.clear();
    }
    initializeIfNeeded() {
        if (!this._isInitialized) {
            let e = Date.now();
            h.allPersistKeys.add(this.getClass().persistKey);
            let { state: n, requiresPersist: r } = h.migrateAndReadStoreState(this.getClass().persistKey, this.getClass().migrations);
            this.initialize(n) && this.asyncPersist(), r && this.asyncPersist(), (this._isInitialized = !0);
            let i = Date.now() - e;
            i > 5 && l.Z.mark('\uD83E\uDDA5', this.getName() + '.initialize()', i);
        }
    }
    static migrateAndReadStoreState(e, n) {
        if (null != p && h.shouldClear(p, e))
            return (
                u.K.remove(e),
                {
                    state: void 0,
                    requiresPersist: !1
                }
            );
        let r = null != h._clearAllPromise ? null : u.K.get(e),
            { _state: i, _version: a, ...o } = null != r ? r : f,
            s = null == n ? 0 : n.length;
        if (0 !== s && a !== s && null != n) {
            let e = null != a ? a : 0,
                r = i;
            for (null == a && (r = o); e < s; ) (r = (0, n[e])(r)), e++;
            return {
                state: r,
                requiresPersist: !0
            };
        }
        if (Object.values(o).length > 0)
            return {
                state: o,
                requiresPersist: !0
            };
        return {
            state: i,
            requiresPersist: !1
        };
    }
    asyncPersist() {
        let { persistKey: e, disableWrite: n, throttleDelay: r } = this.getClass();
        if (h.disableWrites || n) return Promise.resolve(!1);
        let i = h._writePromises.get(e);
        return null != i
            ? i
            : ((i = new Promise((n) => {
                  let i = r > 0 ? () => this.throttledCallback(n) : () => this.callback(n);
                  h._writeResolvers.set(e, [n, requestIdleCallback(i, { timeout: 500 })]);
              })),
              h._writePromises.set(e, i),
              i);
    }
    persist() {
        let { persistKey: e } = this.getClass(),
            n = this.getState(),
            r = this._version;
        u.K.set(e, {
            _state: n,
            _version: r
        });
    }
    clear() {
        let { persistKey: e } = this.getClass();
        u.K.remove(e);
    }
    constructor(e, n) {
        if (
            (super(e, n),
            d(this, '_version', null == this.getClass().migrations ? 0 : this.getClass().migrations.length),
            d(this, 'callback', (e) => {
                let { persistKey: n } = this.getClass();
                this.persist(), h._writePromises.delete(n), h._writeResolvers.delete(n), e();
            }),
            d(
                this,
                'throttledCallback',
                s()((e) => this.callback(e), this.getClass().throttleDelay, { leading: !1 })
            ),
            'string' != typeof this.getClass().persistKey)
        )
            throw Error(''.concat(this.getClass().name, ' initialized without a `persistKey`. Add one so we know where to save your stuff!'));
        if ('function' != typeof this.initialize) throw Error(''.concat(this.getClass().name, ' initialized without an `initialize` method. Add one that accepts the initial cached state.'));
        if ('function' != typeof this.getState) throw Error(''.concat(this.getClass().name, ' initialized without a `getState` method. Add one that returns the full state of the store for persistance to work.'));
        this.addChangeListener(() => this.asyncPersist());
    }
}
d(h, 'allPersistKeys', new Set()), d(h, 'userAgnosticPersistKeys', new Set()), d(h, '_writePromises', new Map()), d(h, '_writeResolvers', new Map()), d(h, '_clearAllPromise', void 0), d(h, 'disableWrites', !1), d(h, 'persistKey', void 0), d(h, 'disableWrite', !1), d(h, 'throttleDelay', 0), d(h, 'migrations', void 0);
class _ extends h {
    initializeFromState(e) {
        return h.userAgnosticPersistKeys.add(this.getClass().persistKey), super.initializeFromState(e);
    }
    initializeIfNeeded() {
        return h.userAgnosticPersistKeys.add(this.getClass().persistKey), super.initializeIfNeeded();
    }
    getState() {
        return this.getUserAgnosticState();
    }
}
class m extends _ {}
class g extends _ {}
