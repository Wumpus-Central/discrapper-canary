"use strict";
let r;
n.d(t, { i: () => f }), n(142703), n(321073);
var i = n(284009),
    a = n.n(i),
    s = n(61090);
n(423034);
var o = n(152036),
    l = n(390225);
let u = [],
    c = !1,
    d = new Promise((e) => {
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
class f {
    _changeCallbacks = new o.E();
    _reactChangeCallbacks = new o.E();
    _syncWiths = [];
    _dispatchToken;
    _dispatcher;
    _mustEmitChanges;
    _isInitialized = !1;
    static displayName;
    static initialize() {
        (c = !0), u.forEach((e) => e.initializeIfNeeded()), null != r && r();
    }
    static initialized = d;
    static destroy() {
        (u.length = 0), l.A.destroy();
    }
    static getAll() {
        return u;
    }
    constructor(e, t, n) {
        (this._dispatcher = e),
            (this._dispatchToken = this._dispatcher.createToken()),
            this.registerActionHandlers(t ?? {}, n),
            u.push(this),
            c && this.initializeIfNeeded();
    }
    doEmitChanges = (e) => {
        (this._changeCallbacks.hasAny() || this._reactChangeCallbacks.hasAny() || this._syncWiths.length > 0) &&
            (l.A.markChanged(this),
            l.A.getIsPaused() && null != this._mustEmitChanges && this._mustEmitChanges(e) && l.A.resume(!1));
    };
    registerActionHandlers(e, t) {
        this._dispatcher.register(this.getName(), e, this.doEmitChanges, t, this._dispatchToken);
    }
    getName() {
        return this.constructor.displayName ?? this.constructor.name;
    }
    initializeIfNeeded() {
        if (!this._isInitialized) {
            let e = Date.now();
            this.initialize(), (this._isInitialized = !0);
            let t = Date.now() - e;
            t > 5 && s.A.mark("\uD83E\uDDA5", this.getName() + ".initialize()", t);
        }
    }
    initialize() {}
    syncWith(e, t, n) {
        if ((this.waitFor(...e), null != n)) {
            let r = 0,
                i = () => {
                    r !== l.A.getChangeSentinel() && ((r = l.A.getChangeSentinel()), !1 !== t() && this.emitChange());
                };
            (i = _(n ?? 0, i)), e.forEach((e) => e.addChangeListener(i));
        } else
            e.forEach((e) => {
                e._syncWiths.push({ func: t, store: this });
            });
    }
    waitFor() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        let r = t.map((e, t) =>
            (a()(null != e, `Store.waitFor(...) called with null Store at index ${t} for store ${this.getName()}`),
            null != e._dispatcher)
                ? (a()(e._dispatcher === this._dispatcher, "Stores belong to two separate dispatchers."),
                  e.getDispatchToken())
                : null,
        );
        this._dispatcher.addDependencies(
            this.getDispatchToken(),
            r.filter((e) => null != e),
        );
    }
    emitChange() {
        l.A.markChanged(this);
    }
    addChangeListener = this._changeCallbacks.add;
    addConditionalChangeListener = this._changeCallbacks.addConditional;
    removeChangeListener = this._changeCallbacks.remove;
    addReactChangeListener = this._reactChangeCallbacks.add;
    removeReactChangeListener = this._reactChangeCallbacks.remove;
    getDispatchToken() {
        return this._dispatchToken;
    }
    mustEmitChanges() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !0;
        this._mustEmitChanges = e;
    }
}
