let r;
n.d(t, { y: () => p }), n(177593), n(47120), n(653041);
var i = n(512722),
    o = n.n(i),
    a = n(956067);
n(17089);
var s = n(673011),
    l = n(153102);
function c(e, t, n) {
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
let u = [],
    d = !1,
    f = new Promise((e) => {
        r = () => {
            e(), (r = null);
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
        (d = !0), u.forEach((e) => e.initializeIfNeeded()), null != r && r();
    }
    static destroy() {
        (u.length = 0), l.Z.destroy();
    }
    static getAll() {
        return u;
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
        return null != (e = this.constructor.displayName) ? e : this.constructor.name;
    }
    initializeIfNeeded() {
        if (!this._isInitialized) {
            let e = Date.now();
            this.initialize(), (this._isInitialized = !0);
            let t = Date.now() - e;
            t > 5 && a.Z.mark('\uD83E\uDDA5', this.getName() + '.initialize()', t);
        }
    }
    initialize() {}
    syncWith(e, t, n) {
        if ((this.waitFor(...e), null != n)) {
            let r = 0,
                i = () => {
                    r !== l.Z.getChangeSentinel() && ((r = l.Z.getChangeSentinel()), !1 !== t() && this.emitChange());
                };
            (i = _(null != n ? n : 0, i)), e.forEach((e) => e.addChangeListener(i));
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
        let r = t.map((e, t) => ((o()(null != e, 'Store.waitFor(...) called with null Store at index '.concat(t, ' for store ').concat(this.getName())), null != e._dispatcher) ? (o()(e._dispatcher === this._dispatcher, 'Stores belong to two separate dispatchers.'), e.getDispatchToken()) : null));
        this._dispatcher.addDependencies(
            this.getDispatchToken(),
            r.filter((e) => null != e)
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
        c(this, '_changeCallbacks', new s.Z()), c(this, '_reactChangeCallbacks', new s.Z()), c(this, '_syncWiths', []), c(this, '_dispatchToken', void 0), c(this, '_dispatcher', void 0), c(this, '_mustEmitChanges', void 0), c(this, '_isInitialized', !1), c(this, 'addChangeListener', this._changeCallbacks.add), c(this, 'addConditionalChangeListener', this._changeCallbacks.addConditional), c(this, 'removeChangeListener', this._changeCallbacks.remove), c(this, 'addReactChangeListener', this._reactChangeCallbacks.add), c(this, 'removeReactChangeListener', this._reactChangeCallbacks.remove), (this._dispatcher = e), (this._dispatchToken = this._dispatcher.createToken()), this.registerActionHandlers(null != t ? t : {}, n), u.push(this), d && this.initializeIfNeeded();
    }
}
c(p, 'displayName', void 0), c(p, 'initialized', f);
