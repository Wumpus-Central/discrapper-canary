let i;
r.d(n, {
    y: function () {
        return E;
    }
});
var a = r(177593);
var o = r(47120);
var s = r(653041);
var l = r(512722),
    u = r.n(l),
    c = r(956067),
    d = r(673011),
    f = r(153102);
function p(e, n, r) {
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
let h = [],
    _ = !1,
    m = new Promise((e) => {
        i = () => {
            e(), (i = null);
        };
    });
function g(e, n) {
    let r = null;
    return 0 === e
        ? function () {
              clearImmediate(r), (r = setImmediate(n));
          }
        : function () {
              null == r &&
                  (r = setTimeout(() => {
                      try {
                          n();
                      } finally {
                          r = null;
                      }
                  }, e));
          };
}
class E {
    static initialize() {
        (_ = !0), h.forEach((e) => e.initializeIfNeeded()), null != i && i();
    }
    static destroy() {
        (h.length = 0), f.Z.destroy();
    }
    static getAll() {
        return h;
    }
    registerActionHandlers(e, n) {
        this._dispatcher.register(
            this.getName(),
            e,
            (e) => {
                (this._changeCallbacks.hasAny() || this._reactChangeCallbacks.hasAny() || this._syncWiths.length > 0) && (f.Z.markChanged(this), f.Z.getIsPaused() && null != this._mustEmitChanges && this._mustEmitChanges(e) && f.Z.resume(!1));
            },
            n,
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
            let n = Date.now() - e;
            n > 5 && c.Z.mark('\uD83E\uDDA5', this.getName() + '.initialize()', n);
        }
    }
    initialize() {}
    syncWith(e, n, r) {
        if ((this.waitFor(...e), null != r)) {
            let i = 0,
                a = () => {
                    i !== f.Z.getChangeSentinel() && ((i = f.Z.getChangeSentinel()), !1 !== n() && this.emitChange());
                };
            (a = g(null != r ? r : 0, a)), e.forEach((e) => e.addChangeListener(a));
        } else
            e.forEach((e) => {
                e._syncWiths.push({
                    func: n,
                    store: this
                });
            });
    }
    waitFor() {
        for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
        let i = n.map((e, n) => ((u()(null != e, 'Store.waitFor(...) called with null Store at index '.concat(n, ' for store ').concat(this.getName())), null != e._dispatcher) ? (u()(e._dispatcher === this._dispatcher, 'Stores belong to two separate dispatchers.'), e.getDispatchToken()) : null));
        this._dispatcher.addDependencies(
            this.getDispatchToken(),
            i.filter((e) => null != e)
        );
    }
    emitChange() {
        f.Z.markChanged(this);
    }
    getDispatchToken() {
        return this._dispatchToken;
    }
    mustEmitChanges() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !0;
        this._mustEmitChanges = e;
    }
    constructor(e, n, r) {
        p(this, '_changeCallbacks', new d.Z()), p(this, '_reactChangeCallbacks', new d.Z()), p(this, '_syncWiths', []), p(this, '_dispatchToken', void 0), p(this, '_dispatcher', void 0), p(this, '_mustEmitChanges', void 0), p(this, '_isInitialized', !1), p(this, '__getLocalVars', void 0), p(this, 'addChangeListener', this._changeCallbacks.add), p(this, 'addConditionalChangeListener', this._changeCallbacks.addConditional), p(this, 'removeChangeListener', this._changeCallbacks.remove), p(this, 'addReactChangeListener', this._reactChangeCallbacks.add), p(this, 'removeReactChangeListener', this._reactChangeCallbacks.remove), (this._dispatcher = e), (this._dispatchToken = this._dispatcher.createToken()), this.registerActionHandlers(null != n ? n : {}, r), h.push(this);
        _ && this.initializeIfNeeded();
    }
}
p(E, 'displayName', void 0), p(E, 'initialized', m);
