let i;
n.d(t, {
    AF: () => h,
    mk: () => f,
    My: () => F.My,
    UT: () => $,
    V5: () => B,
    Ay: () => z,
    il: () => L,
    yK: () => F.yK,
    bG: () => F.bG,
    cf: () => F.cf,
    ru: () => a.r,
});
var r,
    a = n(968441);
n(321073);
var s = n(284009),
    l = n.n(s),
    o = n(61090);
(n(423034), n.g.performance);
var d = n(941426),
    c = n(390225),
    u = n(39304),
    _ = n(294997);
let E = new Set([
        "APP_STATE_UPDATE",
        "CLEAR_CACHES",
        "CONNECTION_CLOSED",
        "CONNECTION_OPEN",
        "CONNECTION_RESUMED",
        "LOGIN_SUCCESS",
        "LOGIN",
        "LOGOUT",
        "MESSAGE_SEND_FAILED",
        "PUSH_NOTIFICATION_CLICK",
        "RESET_SOCKET",
        "SESSION_START",
        "UPLOAD_FAIL",
        "WRITE_CACHES",
    ]),
    A = new d.Vy("Flux");
var h = (((r = {})[(r.Early = 0)] = "Early"), (r[(r.Database = 1)] = "Database"), (r[(r.Default = 2)] = "Default"), r);
let I = [0, 1, 2];
class f {
    _interceptors = [];
    _subscriptions = {};
    _waitQueue = [];
    _processingWaitQueue = !1;
    _currentDispatchActionType = null;
    _actionHandlers = new p();
    _sentryUtils = void 0;
    actionLogger;
    functionCache = {};
    constructor(e, t) {
        ((this._sentryUtils = t),
            null != e ? (this.actionLogger = e) : (this.actionLogger = new _.T()),
            this.actionLogger.on("trace", (e, t, n) => {
                o.A.isTracing && n >= 10 && o.A.mark("\uD83E\uDDA5", t, n);
            }));
    }
    isDispatching() {
        return null != this._currentDispatchActionType;
    }
    dispatch(e) {
        return new Promise((t, n) => {
            (this._waitQueue.push(() => {
                try {
                    (null == this.functionCache[e.type] &&
                        ((this.functionCache[e.type] = (e) => this._dispatchWithDevtools(e)),
                        T(this.functionCache[e.type], "dispatch_" + e.type)),
                        this.functionCache[e.type](e),
                        t());
                } catch (e) {
                    n(e);
                }
            }),
                this.flushWaitQueue());
        });
    }
    dispatchForStoreTest(e, t) {
        for (let { name: n, actionHandler: i, storeDidChange: r } of (l()(
            !1,
            "dispatchForTest cannot be called in: production",
        ),
        this._actionHandlers.getOrderedActionHandlers(e)))
            n === t && !1 !== i(e) && r(e);
    }
    flushWaitQueue() {
        if (!this._processingWaitQueue)
            try {
                ((this._processingWaitQueue = !0), (c.A.isDispatching = !0));
                let e = 0;
                for (; this._waitQueue.length > 0;) {
                    if (++e > 100) {
                        let e = u.lK();
                        throw (
                            A.error("LastFewActions", e),
                            this._sentryUtils?.addBreadcrumb({
                                message: "Dispatcher: Dispatch loop detected",
                                data: { lastFewActions: e },
                            }),
                            Error("Dispatch loop detected, aborting")
                        );
                    }
                    for (; this._waitQueue.length > 0;) this._waitQueue.shift()();
                    c.A.emit();
                }
            } finally {
                ((this._processingWaitQueue = !1), (c.A.isDispatching = !1));
            }
    }
    _dispatchWithDevtools(e) {
        this._dispatchWithLogging(e);
    }
    _dispatchWithLogging(e) {
        (l()(
            null == this._currentDispatchActionType,
            `Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch. Action: ${e.type} Already dispatching: ${this._currentDispatchActionType}`,
        ),
            l()(null != e.type && "" !== e.type, "Dispatch.dispatch(...) called without an action type"),
            E.has(e.type) && A.log(`Dispatching ${e.type}`),
            e.type,
            u.WQ(e.type));
        let t = this.actionLogger.log(e, (t) => {
            try {
                ((this._currentDispatchActionType = e.type), this._dispatch(e, t));
            } finally {
                this._currentDispatchActionType = null;
            }
        });
        t.totalTime > 100 && A.verbose(`Slow dispatch on ${e.type}: ${t.totalTime}ms`);
        try {
            (e.type, e.type);
        } catch (e) {}
    }
    _dispatch(e, t) {
        for (let t of this._interceptors) if (t(e)) return !1;
        let n = this._actionHandlers.getOrderedActionHandlers(e);
        for (let i = 0, r = n.length; i < r; i++) {
            let { name: r, actionHandler: a, storeDidChange: s } = n[i];
            !1 !== t(r, () => a(e)) && s(e);
        }
        let i = this._subscriptions[e.type];
        null != i &&
            t("__subscriptions", () => {
                i.forEach((t) => t(e));
            });
    }
    addInterceptor(e) {
        this._interceptors.push(e);
    }
    wait(e) {
        (this._waitQueue.push(e), this.flushWaitQueue());
    }
    subscribe(e, t) {
        let n = this._subscriptions[e];
        (null == n && (this._subscriptions[e] = n = new Set()), n.add(t));
    }
    unsubscribe(e, t) {
        let n = this._subscriptions[e];
        null != n && (n.delete(t), 0 === n.size && delete this._subscriptions[e]);
    }
    register(e, t, n, i) {
        return this._actionHandlers.register(e, t, n, i ?? 2);
    }
    addDependencies(e, t) {
        this._actionHandlers.addDependencies(e, t);
    }
}
class p {
    _nodes = new Map();
    _orderedActionHandlers = {};
    _tokensByBand = new Map(I.map((e) => [e, []]));
    _tokensByActionType = {};
    _callbackTokenPositions = null;
    _lastID = 1;
    getOrderedActionHandlers(e) {
        return this._orderedActionHandlers[e.type] ?? this._computeOrderedActionHandlers(e.type);
    }
    register(e, t, n, i) {
        l()(I.includes(i), "band must be a DispatchBand, got %s.", i);
        let r = `ID_${this._lastID++}`,
            a = {};
        for (let n in t) {
            (this._tokensByActionType[n] ??= []).push(r);
            let i = t[n],
                s = (e) => i(e);
            (T(s, `${e}_${n}`), (a[n] = s));
        }
        return (
            this._nodes.set(r, { name: e, band: i, actionHandler: a, storeDidChange: n, dependencies: [] }),
            this._tokensByBand.get(i).push(r),
            this._invalidateCaches(),
            r
        );
    }
    addDependencies(e, t) {
        let n = this._nodes.get(e);
        if (null == n) throw Error(`cannot add dependencies to ${e} because ${e} is not registered.`);
        for (let i of t) {
            if (i === e)
                throw Error(
                    `cannot add dependency ${n.name} \u{2192} ${n.name} because a store cannot wait for itself.`,
                );
            let t = this._nodes.get(i);
            if (null == t) throw Error(`cannot add dependency ${n.name} \u{2192} ${i} because ${i} is not registered.`);
            if (t.band > n.band)
                throw Error(
                    `cannot add dependency ${n.name} \u{2192} ${t.name} because ${t.name} (band ${t.band}) will never execute before ${n.name} (band ${n.band}).`,
                );
        }
        (n.dependencies.push(...t), this._invalidateCaches());
    }
    _invalidateCaches() {
        ((this._callbackTokenPositions = null), (this._orderedActionHandlers = {}));
    }
    _computeOrderedActionHandlers(e) {
        let t = (this._tokensByActionType[e] ?? []).slice();
        if (t.length > 1) {
            let e = this._callbackTokenPositions ?? this._computeCallbackTokenPositions();
            t.sort((t, n) => e.get(t) - e.get(n));
        }
        let n = [];
        for (let i = 0, r = t.length; i < r; i++) {
            let { name: r, actionHandler: a, storeDidChange: s } = this._nodes.get(t[i]),
                l = a[e];
            null != l && n.push({ name: r, actionHandler: l, storeDidChange: s });
        }
        return ((this._orderedActionHandlers[e] = n), n);
    }
    _computeCallbackTokenPositions() {
        let e = new Map(),
            t = new Set(),
            n = (i) => {
                if (!e.has(i)) {
                    if (t.has(i)) {
                        let e = [...t, i].map((e) => `${this._nodes.get(e).name}(${e})`);
                        throw Error(`Dependency Cycle Found: ${e.join(" -> ")}`);
                    }
                    (t.add(i), this._nodes.get(i).dependencies.forEach(n), t.delete(i), e.set(i, e.size));
                }
            };
        return (I.forEach((e) => this._tokensByBand.get(e).forEach(n)), (this._callbackTokenPositions = e), e);
    }
}
function T(e, t) {
    Object.defineProperty(e, "name", { value: t });
}
var g = n(64015),
    m = n.n(g),
    S = n(506774);
n(142703);
class N {
    listeners = new Set();
    conditionalListeners = new Set();
    add = (e) => {
        this.listeners.add(e);
    };
    remove = (e) => {
        (this.listeners.delete(e), this.conditionalListeners.delete(e));
    };
    addConditional = (() => {
        var e = this;
        return function (t) {
            let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            if (n && !1 === t()) return;
            let i = () => {
                !1 === t() && e.remove(i);
            };
            (e.add(i), e.conditionalListeners.add(i));
        };
    })();
    removeAllConditional = () => {
        (this.conditionalListeners.forEach((e) => this.listeners.delete(e)), this.conditionalListeners.clear());
    };
    has(e) {
        return this.listeners.has(e);
    }
    hasAny() {
        return this.listeners.size > 0;
    }
    invokeAll() {
        this.listeners.forEach((e) => e());
    }
}
let C = [],
    O = !1,
    R = new Promise((e) => {
        i = () => {
            (e(), (i = null));
        };
    });
class L {
    _changeCallbacks = new N();
    _reactChangeCallbacks = new N();
    _syncWiths = [];
    _dispatchToken;
    _dispatcher;
    _mustEmitChanges;
    _isInitialized = !1;
    static displayName;
    static initialize() {
        ((O = !0), C.forEach((e) => e.initializeIfNeeded()), null != i && i());
    }
    static initialized = R;
    static destroy() {
        ((C.length = 0), c.A.destroy());
    }
    static getAll() {
        return C;
    }
    static removeAllConditionalListeners() {
        C.forEach((e) => {
            e._changeCallbacks.removeAllConditional();
        });
    }
    constructor(e, t, n) {
        ((this._dispatcher = e),
            (this._dispatchToken = this._dispatcher.register(this.getName(), t ?? {}, this.doEmitChanges, n)),
            C.push(this),
            O && this.initializeIfNeeded());
    }
    doEmitChanges = (e) => {
        (this._changeCallbacks.hasAny() || this._reactChangeCallbacks.hasAny() || this._syncWiths.length > 0) &&
            (c.A.markChanged(this),
            c.A.getIsPaused() && null != this._mustEmitChanges && this._mustEmitChanges(e) && c.A.resume(!1));
    };
    getName() {
        return this.constructor.displayName ?? this.constructor.name;
    }
    initializeIfNeeded() {
        if (!this._isInitialized) {
            let e = Date.now();
            (this.initialize(), (this._isInitialized = !0));
            let t = Date.now() - e;
            t > 5 && o.A.mark("\uD83E\uDDA5", this.getName() + ".initialize()", t);
        }
    }
    initialize() {}
    syncWith(e, t, n) {
        if ((this.waitFor(...e), null != n)) {
            var i, r;
            let a,
                s = 0,
                l = () => {
                    s !== c.A.getChangeSentinel() && ((s = c.A.getChangeSentinel()), !1 !== t() && this.emitChange());
                };
            ((i = n ?? 0),
                (r = l),
                (a = null),
                (l =
                    0 === i
                        ? function () {
                              (clearImmediate(a), (a = setImmediate(r)));
                          }
                        : function () {
                              null == a &&
                                  (a = setTimeout(() => {
                                      try {
                                          r();
                                      } finally {
                                          a = null;
                                      }
                                  }, i));
                          }),
                e.forEach((e) => e.addChangeListener(l)));
        } else
            e.forEach((e) => {
                e._syncWiths.push({ func: t, store: this });
            });
    }
    waitFor() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        let i = t.map((e, t) =>
            (l()(null != e, `Store.waitFor(...) called with null Store at index ${t} for store ${this.getName()}`),
            null != e._dispatcher)
                ? (l()(e._dispatcher === this._dispatcher, "Stores belong to two separate dispatchers."),
                  e.getDispatchToken())
                : null,
        );
        this._dispatcher.addDependencies(
            this.getDispatchToken(),
            i.filter((e) => null != e),
        );
    }
    emitChange() {
        c.A.markChanged(this);
    }
    addChangeListener = this._changeCallbacks.add;
    removeChangeListener = this._changeCallbacks.remove;
    addConditionalChangeListener = this._changeCallbacks.addConditional;
    removeAllConditionalChangeListeners = this._changeCallbacks.removeAllConditional;
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
let y = { _state: void 0, _version: void 0 },
    D = null;
class v extends L {
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
            (D = e),
            null == v._clearAllPromise &&
                (v._clearAllPromise = new Promise((t) => {
                    requestIdleCallback(
                        () => {
                            (v.clearPersistQueue(e),
                                v.allPersistKeys.forEach((t) => {
                                    v.shouldClear(e, t) && S.w.remove(t);
                                }),
                                L.getAll().forEach((t) => {
                                    t instanceof v &&
                                        v.shouldClear(e, t.getClass().persistKey) &&
                                        ((t._isInitialized = !1), t.initializeIfNeeded());
                                }),
                                (v._clearAllPromise = null),
                                t());
                        },
                        { timeout: 500 },
                    );
                })),
            v._clearAllPromise
        );
    }
    static shouldClear(e, t) {
        if (e.omit?.includes(t)) return !1;
        switch (e.type) {
            case "all":
                return !0;
            case "user-data-only":
                return !v.userAgnosticPersistKeys.has(t);
            default:
                return (e.type, !1);
        }
    }
    static clearPersistQueue(e) {
        (v._writeResolvers.forEach((t, n) => {
            let [i, r] = t;
            v.shouldClear(e, n) &&
                (v._writePromises.delete(n), v._writeResolvers.delete(n), cancelIdleCallback(r), i(!1));
        }),
            v._writePromises.clear(),
            v._writeResolvers.clear());
    }
    static getAllStates() {
        return Promise.all(Array.from(v._writePromises.values())).then(() => {
            let e = {};
            return (
                v.allPersistKeys.forEach((t) => {
                    e[t] = (S.w.get(t) ?? y)._state;
                }),
                e
            );
        });
    }
    static initializeAll(e) {
        L.getAll().forEach((t) => {
            if (t instanceof v) {
                let n = t.getClass().persistKey;
                e.hasOwnProperty(n) && t.initializeFromState(e[n]);
            }
        });
    }
    initializeFromState(e) {
        (this.initialize(e) && this.asyncPersist(),
            this._isInitialized
                ? this.emitChange()
                : (v.allPersistKeys.add(this.getClass().persistKey), (this._isInitialized = !0)));
    }
    static destroy() {
        ((D = null),
            L.destroy(),
            v.clearPersistQueue({ type: "all" }),
            v.allPersistKeys.clear(),
            v.userAgnosticPersistKeys.clear());
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
            v.allPersistKeys.add(this.getClass().persistKey);
            let { state: t, requiresPersist: n } = v.migrateAndReadStoreState(
                this.getClass().persistKey,
                this.getClass().migrations,
            );
            (this.initialize(t) && this.asyncPersist(), n && this.asyncPersist(), (this._isInitialized = !0));
            let i = Date.now() - e;
            i > 5 && o.A.mark("\uD83E\uDDA5", this.getName() + ".initialize()", i);
        }
    }
    static migrateAndReadStoreState(e, t) {
        if (null != D && v.shouldClear(D, e)) return (S.w.remove(e), { state: void 0, requiresPersist: !1 });
        let { _state: n, _version: i, ...r } = (null != v._clearAllPromise ? null : S.w.get(e)) ?? y,
            a = null == t ? 0 : t.length;
        if (0 !== a && i !== a && null != t) {
            let e = i ?? 0,
                s = n;
            for (null == i && (s = r); e < a;) ((s = (0, t[e])(s)), e++);
            return { state: s, requiresPersist: !0 };
        }
        return Object.values(r).length > 0 ? { state: r, requiresPersist: !0 } : { state: n, requiresPersist: !1 };
    }
    callback = (e) => {
        let { persistKey: t } = this.getClass();
        (this.persist(), v._writePromises.delete(t), v._writeResolvers.delete(t), e());
    };
    throttledCallback = m()((e) => this.callback(e), this.getClass().throttleDelay, { leading: !1 });
    asyncPersist() {
        let { persistKey: e, disableWrite: t, throttleDelay: n } = this.getClass();
        if (v.disableWrites || t) return Promise.resolve(!1);
        let i = v._writePromises.get(e);
        return (
            null != i ||
                ((i = new Promise((t) => {
                    let i = n > 0 ? () => this.throttledCallback(t) : () => this.callback(t);
                    v._writeResolvers.set(e, [t, requestIdleCallback(i, { timeout: 500 })]);
                })),
                v._writePromises.set(e, i)),
            i
        );
    }
    persist() {
        let { persistKey: e } = this.getClass(),
            t = this.getState(),
            n = this._version;
        S.w.set(e, { _state: t, _version: n });
    }
    clear() {
        let { persistKey: e } = this.getClass();
        S.w.remove(e);
    }
}
class b extends v {
    initializeFromState(e) {
        return (v.userAgnosticPersistKeys.add(this.getClass().persistKey), super.initializeFromState(e));
    }
    initializeIfNeeded() {
        return (v.userAgnosticPersistKeys.add(this.getClass().persistKey), super.initializeIfNeeded());
    }
    getState() {
        return this.getUserAgnosticState();
    }
}
var M = n(477900),
    P = n(582128),
    U = n(52133);
function w(e) {
    return e.displayName ?? e.name ?? "<Unknown>";
}
function G(e) {
    let t = null,
        n = null;
    function i(e) {
        return null != t && null != n && (0, U.A)(t, e)
            ? n
            : null != t && null != n && (0, U.A)(t, e)
              ? ((t = e), n)
              : null;
    }
    function r(r) {
        let a = i(r);
        return null != a ? a : (n = e((t = r)));
    }
    return (
        (r.getCachedResult = i),
        (r.clear = () => {
            ((t = null), (n = null));
        }),
        r
    );
}
var x = n(196765),
    k = n(158390),
    F = n(702841);
let B = Symbol("NO_DATA");
class V extends Error {
    name = "HTTPResponseError";
    status = 0;
    retryAfter;
    setStatus(e) {
        this.status = e;
    }
    setRetryAfter(e) {
        this.retryAfter = e;
    }
}
function H(e) {
    if ("number" == typeof e && Number.isFinite(e) && !(e <= 0)) return e;
}
function j(e, t) {
    return Array.isArray(e) && Array.isArray(t) ? (0, U.v)(e, t) : Object.is(e, t);
}
function W(e) {
    return e instanceof V && (e.status >= 500 || 429 === e.status);
}
function Y() {
    return new k.A();
}
let K = (0, x.v)(() => ({
    isLoading: !1,
    error: null,
    backoff: new k.A(),
    lastSuccessAt: null,
    failureLockedUntil: null,
}));
function $(e, t) {
    let {
            getQueryId: n,
            get: i,
            load: r,
            getIsLoading: a,
            getError: s,
            retryConfig: { maxRetries: l = 5, backoff: o = Y, retryableErrors: d = W } = {},
            staleAfter: c,
            failureStaleAfter: u,
        } = t,
        _ = new Map();
    function E(e) {
        if (null == e) return K;
        let t = _.get(e);
        return (
            null == t &&
                ((t = (0, x.v)(() => ({
                    isLoading: !1,
                    error: null,
                    backoff: o(),
                    lastSuccessAt: null,
                    failureLockedUntil: null,
                }))),
                _.set(e, t)),
            t
        );
    }
    async function A(e) {
        let { queryId: t, args: n, refetch: s = !1, useStoreState: o = E(t) } = e,
            _ = o.getState().backoff,
            h = a?.(...n) ?? o.getState().isLoading;
        if (null != t && !h) {
            if (!s) {
                let e = i(...n);
                if (
                    e === B ||
                    (null != e &&
                        !(function (e, t) {
                            if (null == t) return !1;
                            let { lastSuccessAt: n } = e.getState();
                            return null == n || Date.now() - n > 1e3 * t;
                        })(o, c))
                )
                    return;
                let { failureLockedUntil: t } = o.getState();
                if (null != t && Date.now() < t) return;
            }
            try {
                (o.setState({ isLoading: !0 }),
                    await r(...n),
                    _.succeed(),
                    o.setState({ error: null, isLoading: !1, lastSuccessAt: Date.now(), failureLockedUntil: null }));
            } catch (i) {
                let e = (function (e) {
                    if (e instanceof Error) return e;
                    if ("object" == typeof e && null != e && "status" in e && "number" == typeof e.status) {
                        let t = H(e.retryAfter);
                        if ("body" in e && null != e.body && "object" == typeof e.body && "message" in e.body) {
                            let n = new V(String(e.body.message));
                            return (n.setStatus(e.status), n.setRetryAfter(t), n);
                        }
                        let n = new V(
                            Object.entries(e)
                                .map((e) => {
                                    let [t, n] = e;
                                    return `${t}: [${String(n)}]`;
                                })
                                .join(","),
                        );
                        return (n.setStatus(e.status), n.setRetryAfter(t), n);
                    }
                    return Error(String(e));
                })(i);
                (o.setState({ error: e, isLoading: !1 }),
                    d(e) && l > _.fails
                        ? await new Promise((i, r) => {
                              let a;
                              _.fail(
                                  () => {
                                      A({ queryId: t, args: n, useStoreState: o, refetch: s }).then(i, r);
                                  },
                                  null == (a = H(e.retryAfter)) ? 0 : 1e3 * a,
                              );
                          })
                        : null != u && o.setState({ failureLockedUntil: Date.now() + 1e3 * u }));
            }
        }
    }
    function h() {
        for (var t = arguments.length, r = Array(t), l = 0; l < t; l++) r[l] = arguments[l];
        let o = (function (e) {
                let [t, n] = (0, P.useState)(e);
                return (e === t || (0, U.v)(e, t) || n(e), t);
            })(r),
            d = Array.isArray(e) ? e : [e],
            c = n(...o),
            u = E(c),
            _ = (0, F.bG)(d, () => a?.(...o), [o]),
            h = u((e) => null == a && e.isLoading),
            I = (0, F.bG)(d, () => s?.(...o), [o]),
            f = u((e) => (null == s ? e.error : null)),
            p = (0, F.bG)(d, () => i(...o), [o], j);
        return (
            (0, P.useEffect)(() => {
                A({ queryId: c, args: o, useStoreState: u });
            }, [c, o, u]),
            {
                data: p === B ? null : p,
                error: I ?? f,
                isLoading: _ ?? h,
                refetch: (0, P.useCallback)(() => {
                    A({ queryId: c, args: o, useStoreState: u, refetch: !0 });
                }, [c, o, u]),
            }
        );
    }
    return (
        (h.refetch = async function () {
            for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            let r = n(...t),
                a = E(r);
            (a.getState().backoff.succeed(),
                a.setState({ failureLockedUntil: null }),
                await A({ queryId: r, args: t, useStoreState: a, refetch: !0 }));
        }),
        (h.fetchMany = async function () {
            for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            await Promise.all(
                t.map((e) => {
                    let t = n(...e);
                    return A({ queryId: t, args: e, useStoreState: E(t) });
                }),
            );
        }),
        (h.refetchMany = async function () {
            for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            await Promise.all(
                t.map((e) => {
                    let t = n(...e),
                        i = E(t);
                    return (
                        i.getState().backoff.succeed(),
                        i.setState({ failureLockedUntil: null }),
                        A({ queryId: t, args: e, useStoreState: i, refetch: !0 })
                    );
                }),
            );
        }),
        h
    );
}
let z = {
    Emitter: c.A,
    Store: L,
    PersistedStore: v,
    DeviceSettingsStore: class extends b {},
    OfflineCacheStore: class extends b {},
    connectStores: function (e, t, n) {
        return null != n && n.forwardRef
            ? (function (e, t) {
                  return (n) => {
                      let i = `FluxContainer(${w(n)})`;
                      class r extends P.Component {
                          static displayName = i;
                          memoizedGetStateFromStores = G(t);
                          listener = new a.r(e, () => {
                              let e = this.memoizedGetStateFromStores.getCachedResult(this.props.childProps);
                              (null != e &&
                                  (this.memoizedGetStateFromStores.clear(),
                                  (0, U.A)(this.memoizedGetStateFromStores(this.props.childProps), e))) ||
                                  this.forceUpdate();
                          });
                          componentDidMount() {
                              this.listener.attach(i);
                          }
                          componentWillUnmount() {
                              (this.listener.detach(), this.memoizedGetStateFromStores.clear());
                          }
                          render() {
                              let { forwardedConnectStoresRef: e, childProps: t } = this.props,
                                  i = this.memoizedGetStateFromStores(t);
                              return (0, M.jsx)(n, { ref: e, ...t, ...i });
                          }
                      }
                      let s = P.forwardRef((e, t) => (0, M.jsx)(r, { childProps: e, forwardedConnectStoresRef: t }));
                      return ((s.displayName = `ForwardRef(${i})`), s);
                  };
              })(e, t)
            : (function (e, t) {
                  return (n) => {
                      let i = `FluxContainer(${w(n)})`;
                      class r extends P.Component {
                          static displayName = i;
                          memoizedGetStateFromStores = G(t);
                          listener = new a.r(e, () => {
                              let e = this.memoizedGetStateFromStores.getCachedResult(this.props);
                              (null != e &&
                                  (this.memoizedGetStateFromStores.clear(),
                                  (0, U.A)(this.memoizedGetStateFromStores(this.props), e))) ||
                                  this.forceUpdate();
                          });
                          componentDidMount() {
                              this.listener.attach(i);
                          }
                          componentWillUnmount() {
                              (this.listener.detach(), this.memoizedGetStateFromStores.clear());
                          }
                          render() {
                              let e = this.memoizedGetStateFromStores(this.props);
                              return (0, M.jsx)(n, { ...this.props, ...e });
                          }
                      }
                      return r;
                  };
              })(e, t);
    },
    initialize: function () {
        L.initialize();
    },
    get initialized() {
        return L.initialized;
    },
};
