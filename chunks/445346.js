let i;
n.d(t, { y: () => p }), n(177593), n(47120), n(653041);
var r = n(512722),
    a = n.n(r),
    s = n(956067);
n(17089);
var o = n(673011),
    l = n(153102);
function u(e, t, n) {
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
let c = [],
    d = !1,
    f = new Promise((e) => {
        i = () => {
            e(), (i = null);
        };
    });
function _(e, t) {
    let n = null;
    return 0 === e
        ? function () {
              clearImmediate(n), (n = setImmediate(t));
          }
        : function () {
              null == n &&
                  (n = setTimeout(() => {
                      try {
                          t();
                      } finally {
                          n = null;
                      }
                  }, e));
          };
}
class p {
    static initialize() {
        (d = !0), c.forEach((e) => e.initializeIfNeeded()), null != i && i();
    }
    static destroy() {
        (c.length = 0), l.Z.destroy();
    }
    static getAll() {
        return c;
    }
    registerActionHandlers(e, t) {
        this._dispatcher.register(
            this.getName(),
            e,
            (e) => {
                (this._changeCallbacks.hasAny() || this._reactChangeCallbacks.hasAny() || this._syncWiths.length > 0) && (l.Z.markChanged(this), l.Z.getIsPaused() && null != this._mustEmitChanges && this._mustEmitChanges(e) && l.Z.resume(!1));
            },
            t,
            this._dispatchToken
        );
    }
    getName() {
        var e;
        return null !== (e = this.constructor.displayName) && void 0 !== e ? e : this.constructor.name;
    }
    initializeIfNeeded() {
        if (!this._isInitialized) {
            let e = Date.now();
            this.initialize(), (this._isInitialized = !0);
            let t = Date.now() - e;
            t > 5 && s.Z.mark('\uD83E\uDDA5', this.getName() + '.initialize()', t);
        }
    }
    initialize() {}
    syncWith(e, t, n) {
        if ((this.waitFor(...e), null != n)) {
            let i = 0,
                r = () => {
                    i !== l.Z.getChangeSentinel() && ((i = l.Z.getChangeSentinel()), !1 !== t() && this.emitChange());
                };
            (r = _(null != n ? n : 0, r)), e.forEach((e) => e.addChangeListener(r));
        } else
            e.forEach((e) => {
                e._syncWiths.push({
                    func: t,
                    store: this
                });
            });
    }
    waitFor() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        let i = t.map((e, t) => ((a()(null != e, 'Store.waitFor(...) called with null Store at index '.concat(t, ' for store ').concat(this.getName())), null != e._dispatcher) ? (a()(e._dispatcher === this._dispatcher, 'Stores belong to two separate dispatchers.'), e.getDispatchToken()) : null));
        this._dispatcher.addDependencies(
            this.getDispatchToken(),
            i.filter((e) => null != e)
        );
    }
    emitChange() {
        l.Z.markChanged(this);
    }
    getDispatchToken() {
        return this._dispatchToken;
    }
    mustEmitChanges() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !0;
        this._mustEmitChanges = e;
    }
    constructor(e, t, n) {
        u(this, '_changeCallbacks', new o.Z()), u(this, '_reactChangeCallbacks', new o.Z()), u(this, '_syncWiths', []), u(this, '_dispatchToken', void 0), u(this, '_dispatcher', void 0), u(this, '_mustEmitChanges', void 0), u(this, '_isInitialized', !1), u(this, '__getLocalVars', void 0), u(this, 'addChangeListener', this._changeCallbacks.add), u(this, 'addConditionalChangeListener', this._changeCallbacks.addConditional), u(this, 'removeChangeListener', this._changeCallbacks.remove), u(this, 'addReactChangeListener', this._reactChangeCallbacks.add), u(this, 'removeReactChangeListener', this._reactChangeCallbacks.remove), (this._dispatcher = e), (this._dispatchToken = this._dispatcher.createToken()), this.registerActionHandlers(null != t ? t : {}, n), c.push(this), d && this.initializeIfNeeded();
    }
}
u(p, 'displayName', void 0), u(p, 'initialized', f);
