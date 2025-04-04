n.d(t, {
    AT: () => m,
    g5: () => _,
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
class _ extends s.y {
    getClass() {
        return this.constructor;
    }
    static clearAll(e) {
        return (
            (f = e),
            null == _._clearAllPromise &&
                (_._clearAllPromise = new Promise((t) => {
                    requestIdleCallback(
                        () => {
                            _.clearPersistQueue(e),
                                _.allPersistKeys.forEach((t) => {
                                    _.shouldClear(e, t) && a.K.remove(t);
                                }),
                                s.y.getAll().forEach((t) => {
                                    t instanceof _ && _.shouldClear(e, t.getClass().persistKey) && ((t._isInitialized = !1), t.initializeIfNeeded());
                                }),
                                (_._clearAllPromise = null),
                                t();
                        },
                        { timeout: 500 }
                    );
                })),
            _._clearAllPromise
        );
    }
    static shouldClear(e, t) {
        var n;
        return (null == (n = e.omit) || !n.includes(t)) && ('all' === e.type || ('user-data-only' === e.type && !_.userAgnosticPersistKeys.has(t)));
    }
    static clearPersistQueue(e) {
        _._writeResolvers.forEach((t, n) => {
            let [r, i] = t;
            _.shouldClear(e, n) && (_._writePromises.delete(n), _._writeResolvers.delete(n), cancelIdleCallback(i), r(!1));
        }),
            _._writePromises.clear(),
            _._writeResolvers.clear();
    }
    static getAllStates() {
        return Promise.all(Array.from(_._writePromises.values())).then(() => {
            let e = {};
            return (
                _.allPersistKeys.forEach((t) => {
                    var n;
                    e[t] = (null != (n = a.K.get(t)) ? n : d)._state;
                }),
                e
            );
        });
    }
    static initializeAll(e) {
        s.y.getAll().forEach((t) => {
            if (t instanceof _) {
                let n = t.getClass().persistKey;
                e.hasOwnProperty(n) && t.initializeFromState(e[n]);
            }
        });
    }
    initializeFromState(e) {
        this.initialize(e) && this.asyncPersist(), this._isInitialized ? this.emitChange() : (_.allPersistKeys.add(this.getClass().persistKey), (this._isInitialized = !0));
    }
    static destroy() {
        (f = null), s.y.destroy(), _.clearPersistQueue({ type: 'all' }), _.allPersistKeys.clear(), _.userAgnosticPersistKeys.clear();
    }
    initializeIfNeeded() {
        if (!this._isInitialized) {
            let e = Date.now();
            _.allPersistKeys.add(this.getClass().persistKey);
            let { state: t, requiresPersist: n } = _.migrateAndReadStoreState(this.getClass().persistKey, this.getClass().migrations);
            this.initialize(t) && this.asyncPersist(), n && this.asyncPersist(), (this._isInitialized = !0);
            let r = Date.now() - e;
            r > 5 && o.Z.mark('\uD83E\uDDA5', this.getName() + '.initialize()', r);
        }
    }
    static migrateAndReadStoreState(e, t) {
        if (null != f && _.shouldClear(f, e))
            return (
                a.K.remove(e),
                {
                    state: void 0,
                    requiresPersist: !1
                }
            );
        let n = null != _._clearAllPromise ? null : a.K.get(e),
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
        if (_.disableWrites || t) return Promise.resolve(!1);
        let r = _._writePromises.get(e);
        return (
            null != r ||
                ((r = new Promise((t) => {
                    let r = n > 0 ? () => this.throttledCallback(t) : () => this.callback(t);
                    _._writeResolvers.set(e, [t, requestIdleCallback(r, { timeout: 500 })]);
                })),
                _._writePromises.set(e, r)),
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
                this.persist(), _._writePromises.delete(t), _._writeResolvers.delete(t), e();
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
l(_, 'allPersistKeys', new Set()), l(_, 'userAgnosticPersistKeys', new Set()), l(_, '_writePromises', new Map()), l(_, '_writeResolvers', new Map()), l(_, '_clearAllPromise', void 0), l(_, 'disableWrites', !1), l(_, 'persistKey', void 0), l(_, 'disableWrite', !1), l(_, 'throttleDelay', 0), l(_, 'migrations', void 0);
class p extends _ {
    initializeFromState(e) {
        return _.userAgnosticPersistKeys.add(this.getClass().persistKey), super.initializeFromState(e);
    }
    initializeIfNeeded() {
        return _.userAgnosticPersistKeys.add(this.getClass().persistKey), super.initializeIfNeeded();
    }
    getState() {
        return this.getUserAgnosticState();
    }
}
class h extends p {}
class m extends p {}
