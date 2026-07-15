"use strict";
let i;
n.d(t, {
    My: () => x.My,
    mk: () => h,
    UT: () => Y,
    V5: () => k,
    Ay: () => K,
    il: () => O,
    yK: () => x.yK,
    bG: () => x.bG,
    cf: () => x.cf,
    ru: () => r.r,
});
var r = n(968441);
n(321073);
var a = n(840320),
    s = n(284009),
    l = n.n(s),
    o = n(61090);
n(423034), n.g.performance;
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
class h {
    _defaultBand;
    _interceptors = [];
    _subscriptions = {};
    _waitQueue = [];
    _processingWaitQueue = !1;
    _currentDispatchActionType = null;
    _actionHandlers = new I();
    _sentryUtils = void 0;
    actionLogger;
    functionCache = {};
    constructor(e = 0, t, n) {
        (this._defaultBand = e),
            (this._sentryUtils = n),
            null != t ? (this.actionLogger = t) : (this.actionLogger = new _.T()),
            this.actionLogger.on("trace", (e, t, n) => {
                o.A.isTracing && n >= 10 && o.A.mark("\uD83E\uDDA5", t, n);
            });
    }
    isDispatching() {
        return null != this._currentDispatchActionType;
    }
    dispatch(e) {
        return new Promise((t, n) => {
            this._waitQueue.push(() => {
                try {
                    null == this.functionCache[e.type] &&
                        ((this.functionCache[e.type] = (e) => this._dispatchWithDevtools(e)),
                        f(this.functionCache[e.type], "dispatch_" + e.type)),
                        this.functionCache[e.type](e),
                        t();
                } catch (e) {
                    n(e);
                }
            }),
                this.flushWaitQueue();
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
                (this._processingWaitQueue = !0), (c.A.isDispatching = !0);
                let e = 0;
                for (; this._waitQueue.length > 0; ) {
                    if (++e > 100) {
                        let e = u.lK();
                        throw (
                            (A.error("LastFewActions", e),
                            this._sentryUtils?.addBreadcrumb({
                                message: "Dispatcher: Dispatch loop detected",
                                data: { lastFewActions: e },
                            }),
                            Error("Dispatch loop detected, aborting"))
                        );
                    }
                    for (; this._waitQueue.length > 0; ) this._waitQueue.shift()();
                    c.A.emit();
                }
            } finally {
                (this._processingWaitQueue = !1), (c.A.isDispatching = !1);
            }
    }
    _dispatchWithDevtools(e) {
        this._dispatchWithLogging(e);
    }
    _dispatchWithLogging(e) {
        l()(
            null == this._currentDispatchActionType,
            `Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch. Action: ${e.type} Already dispatching: ${this._currentDispatchActionType}`,
        ),
            l()(e.type, "Dispatch.dispatch(...) called without an action type"),
            E.has(e.type) && A.log(`Dispatching ${e.type}`),
            e.type,
            u.WQ(e.type);
        let t = this.actionLogger.log(e, (t) => {
            try {
                (this._currentDispatchActionType = e.type), this._dispatch(e, t);
            } finally {
                this._currentDispatchActionType = null;
            }
        });
        t.totalTime > 100 && A.verbose(`Slow dispatch on ${e.type}: ${t.totalTime}ms`);
        try {
            e.type, e.type;
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
        this._waitQueue.push(e), this.flushWaitQueue();
    }
    subscribe(e, t) {
        let n = this._subscriptions[e];
        null == n && (this._subscriptions[e] = n = new Set()), n.add(t);
    }
    unsubscribe(e, t) {
        let n = this._subscriptions[e];
        null != n && (n.delete(t), 0 === n.size && delete this._subscriptions[e]);
    }
    register(e, t, n, i, r) {
        return this._actionHandlers.register(e, t, n, i ?? this._defaultBand, r);
    }
    createToken() {
        return this._actionHandlers.createToken();
    }
    addDependencies(e, t) {
        this._actionHandlers.addDependencies(e, t);
    }
}
class I {
    _orderedActionHandlers = {};
    _orderedCallbackTokens = null;
    _lastID = 1;
    _dependencyGraph = new a.DepGraph();
    getOrderedActionHandlers(e) {
        return this._orderedActionHandlers[e.type] ?? this._computeOrderedActionHandlers(e.type);
    }
    register(e, t, n, i) {
        let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.createToken();
        l()(i >= 0 && Number.isInteger(i), "band must be a non-negative integer.");
        let a = {};
        for (let n in t) {
            let i = t[n],
                r = (e) => i(e);
            f(r, `${e}_${n}`), (a[n] = r);
        }
        return (
            this._dependencyGraph.addNode(r, { name: e, band: i, actionHandler: a, storeDidChange: n }),
            this._addToBand(r, i),
            this._invalidateCaches(),
            r
        );
    }
    createToken() {
        return `ID_${this._lastID++}`;
    }
    addDependencies(e, t) {
        for (let n of (this._validateDependencies(e, t), t)) this._dependencyGraph.addDependency(e, n);
        this._invalidateCaches();
    }
    _validateDependencies(e, t) {}
    _invalidateCaches() {
        (this._orderedCallbackTokens = null), (this._orderedActionHandlers = {});
    }
    _bandToken(e) {
        let t = `band.${e}`;
        return (
            !this._dependencyGraph.hasNode(t) &&
                (this._dependencyGraph.addNode(t, { name: t, band: e, actionHandler: {}, storeDidChange: () => {} }),
                e > 0 && this._dependencyGraph.addDependency(t, this._bandToken(e - 1))),
            t
        );
    }
    _addToBand(e, t) {
        this._dependencyGraph.addDependency(this._bandToken(t), e),
            t > 0 && this._dependencyGraph.addDependency(e, this._bandToken(t - 1));
    }
    _computeOrderedActionHandlers(e) {
        let t = this._orderedCallbackTokens ?? this._computeOrderedCallbackTokens(),
            n = [];
        for (let i = 0, r = t.length; i < r; i++) {
            let { name: r, actionHandler: a, storeDidChange: s } = this._dependencyGraph.getNodeData(t[i]),
                l = a[e];
            null != l && n.push({ name: r, actionHandler: l, storeDidChange: s });
        }
        return (this._orderedActionHandlers[e] = n), n;
    }
    _computeOrderedCallbackTokens() {
        try {
            let e = this._dependencyGraph.overallOrder();
            return (this._orderedCallbackTokens = e), e;
        } catch (e) {
            if (null != e.cyclePath) {
                let t = e.cyclePath.map((e) => `${this._dependencyGraph.getNodeData(e).name}(${e})`);
                throw Error(`Dependency Cycle Found: ${t.join(" -> ")}`);
            }
            throw e;
        }
    }
}
function f(e, t) {
    Object.defineProperty(e, "name", { value: t });
}
var p = n(64015),
    T = n.n(p),
    m = n(506774);
n(142703);
class g {
    listeners = new Set();
    conditionalListeners = new Set();
    add = (e) => {
        this.listeners.add(e);
    };
    remove = (e) => {
        this.listeners.delete(e), this.conditionalListeners.delete(e);
    };
    addConditional = (() => {
        var e = this;
        return function (t) {
            let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            if (n && !1 === t()) return;
            let i = () => {
                !1 === t() && e.remove(i);
            };
            e.add(i), e.conditionalListeners.add(i);
        };
    })();
    removeAllConditional = () => {
        this.conditionalListeners.forEach((e) => this.listeners.delete(e)), this.conditionalListeners.clear();
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
let S = [],
    N = !1,
    C = new Promise((e) => {
        i = () => {
            e(), (i = null);
        };
    });
class O {
    _changeCallbacks = new g();
    _reactChangeCallbacks = new g();
    _syncWiths = [];
    _dispatchToken;
    _dispatcher;
    _mustEmitChanges;
    _isInitialized = !1;
    static displayName;
    static initialize() {
        (N = !0), S.forEach((e) => e.initializeIfNeeded()), null != i && i();
    }
    static initialized = C;
    static destroy() {
        (S.length = 0), c.A.destroy();
    }
    static getAll() {
        return S;
    }
    static removeAllConditionalListeners() {
        S.forEach((e) => {
            e._changeCallbacks.removeAllConditional();
        });
    }
    constructor(e, t, n) {
        (this._dispatcher = e),
            (this._dispatchToken = this._dispatcher.createToken()),
            this.registerActionHandlers(t ?? {}, n),
            S.push(this),
            N && this.initializeIfNeeded();
    }
    doEmitChanges = (e) => {
        (this._changeCallbacks.hasAny() || this._reactChangeCallbacks.hasAny() || this._syncWiths.length > 0) &&
            (c.A.markChanged(this),
            c.A.getIsPaused() && null != this._mustEmitChanges && this._mustEmitChanges(e) && c.A.resume(!1));
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
            (i = n ?? 0),
                (r = l),
                (a = null),
                (l =
                    0 === i
                        ? function () {
                              clearImmediate(a), (a = setImmediate(r));
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
                e.forEach((e) => e.addChangeListener(l));
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
let R = { _state: void 0, _version: void 0 },
    L = null;
class D extends O {
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
            (L = e),
            null == D._clearAllPromise &&
                (D._clearAllPromise = new Promise((t) => {
                    requestIdleCallback(
                        () => {
                            D.clearPersistQueue(e),
                                D.allPersistKeys.forEach((t) => {
                                    D.shouldClear(e, t) && m.w.remove(t);
                                }),
                                O.getAll().forEach((t) => {
                                    t instanceof D &&
                                        D.shouldClear(e, t.getClass().persistKey) &&
                                        ((t._isInitialized = !1), t.initializeIfNeeded());
                                }),
                                (D._clearAllPromise = null),
                                t();
                        },
                        { timeout: 500 },
                    );
                })),
            D._clearAllPromise
        );
    }
    static shouldClear(e, t) {
        if (e.omit?.includes(t)) return !1;
        switch (e.type) {
            case "all":
                return !0;
            case "user-data-only":
                return !D.userAgnosticPersistKeys.has(t);
            default:
                return e.type, !1;
        }
    }
    static clearPersistQueue(e) {
        D._writeResolvers.forEach((t, n) => {
            let [i, r] = t;
            D.shouldClear(e, n) &&
                (D._writePromises.delete(n), D._writeResolvers.delete(n), cancelIdleCallback(r), i(!1));
        }),
            D._writePromises.clear(),
            D._writeResolvers.clear();
    }
    static getAllStates() {
        return Promise.all(Array.from(D._writePromises.values())).then(() => {
            let e = {};
            return (
                D.allPersistKeys.forEach((t) => {
                    e[t] = (m.w.get(t) ?? R)._state;
                }),
                e
            );
        });
    }
    static initializeAll(e) {
        O.getAll().forEach((t) => {
            if (t instanceof D) {
                let n = t.getClass().persistKey;
                e.hasOwnProperty(n) && t.initializeFromState(e[n]);
            }
        });
    }
    initializeFromState(e) {
        this.initialize(e) && this.asyncPersist(),
            this._isInitialized
                ? this.emitChange()
                : (D.allPersistKeys.add(this.getClass().persistKey), (this._isInitialized = !0));
    }
    static destroy() {
        (L = null),
            O.destroy(),
            D.clearPersistQueue({ type: "all" }),
            D.allPersistKeys.clear(),
            D.userAgnosticPersistKeys.clear();
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
            D.allPersistKeys.add(this.getClass().persistKey);
            let { state: t, requiresPersist: n } = D.migrateAndReadStoreState(
                this.getClass().persistKey,
                this.getClass().migrations,
            );
            this.initialize(t) && this.asyncPersist(), n && this.asyncPersist(), (this._isInitialized = !0);
            let i = Date.now() - e;
            i > 5 && o.A.mark("\uD83E\uDDA5", this.getName() + ".initialize()", i);
        }
    }
    static migrateAndReadStoreState(e, t) {
        if (null != L && D.shouldClear(L, e)) return m.w.remove(e), { state: void 0, requiresPersist: !1 };
        let { _state: n, _version: i, ...r } = (null != D._clearAllPromise ? null : m.w.get(e)) ?? R,
            a = null == t ? 0 : t.length;
        if (0 !== a && i !== a && null != t) {
            let e = i ?? 0,
                s = n;
            for (null == i && (s = r); e < a; ) (s = (0, t[e])(s)), e++;
            return { state: s, requiresPersist: !0 };
        }
        return Object.values(r).length > 0 ? { state: r, requiresPersist: !0 } : { state: n, requiresPersist: !1 };
    }
    callback = (e) => {
        let { persistKey: t } = this.getClass();
        this.persist(), D._writePromises.delete(t), D._writeResolvers.delete(t), e();
    };
    throttledCallback = T()((e) => this.callback(e), this.getClass().throttleDelay, { leading: !1 });
    asyncPersist() {
        let { persistKey: e, disableWrite: t, throttleDelay: n } = this.getClass();
        if (D.disableWrites || t) return Promise.resolve(!1);
        let i = D._writePromises.get(e);
        return (
            null != i ||
                ((i = new Promise((t) => {
                    let i = n > 0 ? () => this.throttledCallback(t) : () => this.callback(t);
                    D._writeResolvers.set(e, [t, requestIdleCallback(i, { timeout: 500 })]);
                })),
                D._writePromises.set(e, i)),
            i
        );
    }
    persist() {
        let { persistKey: e } = this.getClass(),
            t = this.getState(),
            n = this._version;
        m.w.set(e, { _state: t, _version: n });
    }
    clear() {
        let { persistKey: e } = this.getClass();
        m.w.remove(e);
    }
}
class y extends D {
    initializeFromState(e) {
        return D.userAgnosticPersistKeys.add(this.getClass().persistKey), super.initializeFromState(e);
    }
    initializeIfNeeded() {
        return D.userAgnosticPersistKeys.add(this.getClass().persistKey), super.initializeIfNeeded();
    }
    getState() {
        return this.getUserAgnosticState();
    }
}
var v = n(627968),
    b = n(64700),
    M = n(52133);
function P(e) {
    return e.displayName ?? e.name ?? "<Unknown>";
}
function U(e) {
    let t = null,
        n = null,
        i = (e) =>
            null != t && null != n && (0, M.A)(t, e)
                ? n
                : null != t && null != n && (0, M.A)(t, e)
                  ? ((t = e), n)
                  : null,
        r = (r) => {
            let a = i(r);
            return null != a ? a : (n = e((t = r)));
        };
    return (
        (r.getCachedResult = i),
        (r.clear = () => {
            (t = null), (n = null);
        }),
        r
    );
}
var w = n(353640),
    G = n(158390),
    x = n(702841);
let k = Symbol("NO_DATA");
class F extends Error {
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
function V(e) {
    if ("number" == typeof e && Number.isFinite(e) && !(e <= 0)) return e;
}
function B(e, t) {
    return Array.isArray(e) && Array.isArray(t) ? (0, M.v)(e, t) : Object.is(e, t);
}
function H(e) {
    return e instanceof F && (e.status >= 500 || 429 === e.status);
}
function j() {
    return new G.A();
}
let W = (0, w.v)(() => ({
    isLoading: !1,
    error: null,
    backoff: new G.A(),
    lastSuccessAt: null,
    failureLockedUntil: null,
}));
function Y(e, t) {
    let {
            getQueryId: n,
            get: i,
            load: r,
            getIsLoading: a,
            getError: s,
            retryConfig: { maxRetries: l = 5, backoff: o = j, retryableErrors: d = H } = {},
            staleAfter: c,
            failureStaleAfter: u,
        } = t,
        _ = new Map();
    function E(e) {
        if (null == e) return W;
        let t = _.get(e);
        return (
            null == t &&
                ((t = (0, w.v)(() => ({
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
                    e === k ||
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
                o.setState({ isLoading: !0 }),
                    await r(...n),
                    _.succeed(),
                    o.setState({ error: null, isLoading: !1, lastSuccessAt: Date.now(), failureLockedUntil: null });
            } catch (i) {
                let e = (function (e) {
                    if (e instanceof Error) return e;
                    if ("object" == typeof e && null != e && "status" in e && "number" == typeof e.status) {
                        let t = V(e.retryAfter);
                        if ("body" in e && null != e.body && "object" == typeof e.body && "message" in e.body) {
                            let n = new F(String(e.body.message));
                            return n.setStatus(e.status), n.setRetryAfter(t), n;
                        }
                        let n = new F(
                            Object.entries(e)
                                .map((e) => {
                                    let [t, n] = e;
                                    return `${t}: [${String(n)}]`;
                                })
                                .join(","),
                        );
                        return n.setStatus(e.status), n.setRetryAfter(t), n;
                    }
                    return Error(String(e));
                })(i);
                o.setState({ error: e, isLoading: !1 }),
                    d(e) && l > _.fails
                        ? await new Promise((i, r) => {
                              let a;
                              _.fail(
                                  () => {
                                      A({ queryId: t, args: n, useStoreState: o, refetch: s }).then(i, r);
                                  },
                                  null == (a = V(e.retryAfter)) ? 0 : 1e3 * a,
                              );
                          })
                        : null != u && o.setState({ failureLockedUntil: Date.now() + 1e3 * u });
            }
        }
    }
    function h() {
        for (var t = arguments.length, r = Array(t), l = 0; l < t; l++) r[l] = arguments[l];
        let o = (function (e) {
                let [t, n] = (0, b.useState)(e);
                return e === t || (0, M.v)(e, t) || n(e), t;
            })(r),
            d = Array.isArray(e) ? e : [e],
            c = n(...o),
            u = E(c),
            _ = (0, x.bG)(d, () => a?.(...o), [o]),
            h = u((e) => null == a && e.isLoading),
            I = (0, x.bG)(d, () => s?.(...o), [o]),
            f = u((e) => (null == s ? e.error : null)),
            p = (0, x.bG)(d, () => i(...o), [o], B);
        return (
            (0, b.useEffect)(() => {
                A({ queryId: c, args: o, useStoreState: u });
            }, [c, o, u]),
            {
                data: p === k ? null : p,
                error: I ?? f,
                isLoading: _ ?? h,
                refetch: (0, b.useCallback)(() => {
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
            a.getState().backoff.succeed(),
                a.setState({ failureLockedUntil: null }),
                await A({ queryId: r, args: t, useStoreState: a, refetch: !0 });
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
let K = {
    Emitter: c.A,
    Store: O,
    PersistedStore: D,
    DeviceSettingsStore: class extends y {},
    OfflineCacheStore: class extends y {},
    connectStores: function (e, t, n) {
        return null != n && n.forwardRef
            ? (function (e, t) {
                  return (n) => {
                      let i = `FluxContainer(${P(n)})`;
                      class a extends b.Component {
                          static displayName = i;
                          memoizedGetStateFromStores = U(t);
                          listener = new r.r(e, () => {
                              let e = this.memoizedGetStateFromStores.getCachedResult(this.props.childProps);
                              (null != e &&
                                  (this.memoizedGetStateFromStores.clear(),
                                  (0, M.A)(this.memoizedGetStateFromStores(this.props.childProps), e))) ||
                                  this.forceUpdate();
                          });
                          componentDidMount() {
                              this.listener.attach(i);
                          }
                          componentWillUnmount() {
                              this.listener.detach(), this.memoizedGetStateFromStores.clear();
                          }
                          render() {
                              let { forwardedConnectStoresRef: e, childProps: t } = this.props,
                                  i = this.memoizedGetStateFromStores(t);
                              return (0, v.jsx)(n, { ref: e, ...t, ...i });
                          }
                      }
                      let s = b.forwardRef((e, t) => (0, v.jsx)(a, { childProps: e, forwardedConnectStoresRef: t }));
                      return (s.displayName = `ForwardRef(${i})`), s;
                  };
              })(e, t)
            : (function (e, t) {
                  return (n) => {
                      let i = `FluxContainer(${P(n)})`;
                      class a extends b.Component {
                          static displayName = i;
                          memoizedGetStateFromStores = U(t);
                          listener = new r.r(e, () => {
                              let e = this.memoizedGetStateFromStores.getCachedResult(this.props);
                              (null != e &&
                                  (this.memoizedGetStateFromStores.clear(),
                                  (0, M.A)(this.memoizedGetStateFromStores(this.props), e))) ||
                                  this.forceUpdate();
                          });
                          componentDidMount() {
                              this.listener.attach(i);
                          }
                          componentWillUnmount() {
                              this.listener.detach(), this.memoizedGetStateFromStores.clear();
                          }
                          render() {
                              let e = this.memoizedGetStateFromStores(this.props);
                              return (0, v.jsx)(n, { ...this.props, ...e });
                          }
                      }
                      return a;
                  };
              })(e, t);
    },
    initialize: function () {
        O.initialize();
    },
    get initialized() {
        return O.initialized;
    },
};
