"use strict";
let i;
n.d(t, {
    My: () => x.My,
    mk: () => m,
    UT: () => W,
    V5: () => G,
    Ay: () => Y,
    il: () => R,
    yK: () => x.yK,
    bG: () => x.bG,
    cf: () => x.cf,
    ru: () => r.r,
});
var r = n(968441);
n(321073);
var s = n(840320),
    a = n(284009),
    o = n.n(a),
    l = n(61090);
n(423034), n.g.performance;
var d = n(118356),
    _ = n(390225),
    u = n(39304),
    c = n(294997);
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
    h = new d.Vy("Flux");
class m {
    _defaultBand;
    _interceptors = [];
    _subscriptions = {};
    _waitQueue = [];
    _processingWaitQueue = !1;
    _currentDispatchActionType = null;
    _actionHandlers = new f();
    _sentryUtils = void 0;
    actionLogger;
    functionCache = {};
    constructor(e = 0, t, n) {
        (this._defaultBand = e),
            (this._sentryUtils = n),
            null != t ? (this.actionLogger = t) : (this.actionLogger = new c.T()),
            this.actionLogger.on("trace", (e, t, n) => {
                l.A.isTracing && n >= 10 && l.A.mark("\uD83E\uDDA5", t, n);
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
                        g(this.functionCache[e.type], "dispatch_" + e.type)),
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
        for (let { name: n, actionHandler: i, storeDidChange: r } of (o()(
            !1,
            "dispatchForTest cannot be called in: production",
        ),
        this._actionHandlers.getOrderedActionHandlers(e)))
            n === t && !1 !== i(e) && r(e);
    }
    flushWaitQueue() {
        if (!this._processingWaitQueue)
            try {
                (this._processingWaitQueue = !0), (_.A.isDispatching = !0);
                let e = 0;
                for (; this._waitQueue.length > 0; ) {
                    if (++e > 100) {
                        let e = u.lK();
                        throw (
                            (h.error("LastFewActions", e),
                            this._sentryUtils?.addBreadcrumb({
                                message: "Dispatcher: Dispatch loop detected",
                                data: { lastFewActions: e },
                            }),
                            Error("Dispatch loop detected, aborting"))
                        );
                    }
                    for (; this._waitQueue.length > 0; ) this._waitQueue.shift()();
                    _.A.emit();
                }
            } finally {
                (this._processingWaitQueue = !1), (_.A.isDispatching = !1);
            }
    }
    _dispatchWithDevtools(e) {
        this._dispatchWithLogging(e);
    }
    _dispatchWithLogging(e) {
        o()(
            null == this._currentDispatchActionType,
            `Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch. Action: ${e.type} Already dispatching: ${this._currentDispatchActionType}`,
        ),
            o()(e.type, "Dispatch.dispatch(...) called without an action type"),
            E.has(e.type) && h.log(`Dispatching ${e.type}`),
            e.type,
            u.WQ(e.type);
        let t = this.actionLogger.log(e, (t) => {
            try {
                (this._currentDispatchActionType = e.type), this._dispatch(e, t);
            } finally {
                this._currentDispatchActionType = null;
            }
        });
        t.totalTime > 100 && h.verbose(`Slow dispatch on ${e.type}: ${t.totalTime}ms`);
        try {
            e.type, e.type;
        } catch (e) {}
    }
    _dispatch(e, t) {
        for (let t of this._interceptors) if (t(e)) return !1;
        let n = this._actionHandlers.getOrderedActionHandlers(e);
        for (let i = 0, r = n.length; i < r; i++) {
            let { name: r, actionHandler: s, storeDidChange: a } = n[i];
            !1 !== t(r, () => s(e)) && a(e);
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
class f {
    _orderedActionHandlers = {};
    _orderedCallbackTokens = null;
    _lastID = 1;
    _dependencyGraph = new s.DepGraph();
    getOrderedActionHandlers(e) {
        return this._orderedActionHandlers[e.type] ?? this._computeOrderedActionHandlers(e.type);
    }
    register(e, t, n, i) {
        let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.createToken();
        o()(i >= 0 && Number.isInteger(i), "band must be a non-negative integer.");
        let s = {};
        for (let n in t) {
            let i = t[n],
                r = (e) => i(e);
            g(r, `${e}_${n}`), (s[n] = r);
        }
        return (
            this._dependencyGraph.addNode(r, { name: e, band: i, actionHandler: s, storeDidChange: n }),
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
            let { name: r, actionHandler: s, storeDidChange: a } = this._dependencyGraph.getNodeData(t[i]),
                o = s[e];
            null != o && n.push({ name: r, actionHandler: o, storeDidChange: a });
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
function g(e, t) {
    Object.defineProperty(e, "name", { value: t });
}
var p = n(879378),
    A = n.n(p),
    I = n(506774);
n(142703);
class T {
    listeners = new Set();
    add = (e) => {
        this.listeners.add(e);
    };
    remove = (e) => {
        this.listeners.delete(e);
    };
    addConditional = (() => {
        var e = this;
        return function (t) {
            let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            if (n && !1 === t()) return;
            let i = () => {
                !1 === t() && e.remove(i);
            };
            e.add(i);
        };
    })();
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
class R {
    _changeCallbacks = new T();
    _reactChangeCallbacks = new T();
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
        (S.length = 0), _.A.destroy();
    }
    static getAll() {
        return S;
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
            (_.A.markChanged(this),
            _.A.getIsPaused() && null != this._mustEmitChanges && this._mustEmitChanges(e) && _.A.resume(!1));
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
            t > 5 && l.A.mark("\uD83E\uDDA5", this.getName() + ".initialize()", t);
        }
    }
    initialize() {}
    syncWith(e, t, n) {
        if ((this.waitFor(...e), null != n)) {
            var i, r;
            let s,
                a = 0,
                o = () => {
                    a !== _.A.getChangeSentinel() && ((a = _.A.getChangeSentinel()), !1 !== t() && this.emitChange());
                };
            (i = n ?? 0),
                (r = o),
                (s = null),
                (o =
                    0 === i
                        ? function () {
                              clearImmediate(s), (s = setImmediate(r));
                          }
                        : function () {
                              null == s &&
                                  (s = setTimeout(() => {
                                      try {
                                          r();
                                      } finally {
                                          s = null;
                                      }
                                  }, i));
                          }),
                e.forEach((e) => e.addChangeListener(o));
        } else
            e.forEach((e) => {
                e._syncWiths.push({ func: t, store: this });
            });
    }
    waitFor() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        let i = t.map((e, t) =>
            (o()(null != e, `Store.waitFor(...) called with null Store at index ${t} for store ${this.getName()}`),
            null != e._dispatcher)
                ? (o()(e._dispatcher === this._dispatcher, "Stores belong to two separate dispatchers."),
                  e.getDispatchToken())
                : null,
        );
        this._dispatcher.addDependencies(
            this.getDispatchToken(),
            i.filter((e) => null != e),
        );
    }
    emitChange() {
        _.A.markChanged(this);
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
let O = { _state: void 0, _version: void 0 },
    y = null;
class v extends R {
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
            (y = e),
            null == v._clearAllPromise &&
                (v._clearAllPromise = new Promise((t) => {
                    requestIdleCallback(
                        () => {
                            v.clearPersistQueue(e),
                                v.allPersistKeys.forEach((t) => {
                                    v.shouldClear(e, t) && I.w.remove(t);
                                }),
                                R.getAll().forEach((t) => {
                                    t instanceof v &&
                                        v.shouldClear(e, t.getClass().persistKey) &&
                                        ((t._isInitialized = !1), t.initializeIfNeeded());
                                }),
                                (v._clearAllPromise = null),
                                t();
                        },
                        { timeout: 500 },
                    );
                })),
            v._clearAllPromise
        );
    }
    static shouldClear(e, t) {
        return (
            !e.omit?.includes(t) &&
            ("all" === e.type || ("user-data-only" === e.type && !v.userAgnosticPersistKeys.has(t)))
        );
    }
    static clearPersistQueue(e) {
        v._writeResolvers.forEach((t, n) => {
            let [i, r] = t;
            v.shouldClear(e, n) &&
                (v._writePromises.delete(n), v._writeResolvers.delete(n), cancelIdleCallback(r), i(!1));
        }),
            v._writePromises.clear(),
            v._writeResolvers.clear();
    }
    static getAllStates() {
        return Promise.all(Array.from(v._writePromises.values())).then(() => {
            let e = {};
            return (
                v.allPersistKeys.forEach((t) => {
                    e[t] = (I.w.get(t) ?? O)._state;
                }),
                e
            );
        });
    }
    static initializeAll(e) {
        R.getAll().forEach((t) => {
            if (t instanceof v) {
                let n = t.getClass().persistKey;
                e.hasOwnProperty(n) && t.initializeFromState(e[n]);
            }
        });
    }
    initializeFromState(e) {
        this.initialize(e) && this.asyncPersist(),
            this._isInitialized
                ? this.emitChange()
                : (v.allPersistKeys.add(this.getClass().persistKey), (this._isInitialized = !0));
    }
    static destroy() {
        (y = null),
            R.destroy(),
            v.clearPersistQueue({ type: "all" }),
            v.allPersistKeys.clear(),
            v.userAgnosticPersistKeys.clear();
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
            this.initialize(t) && this.asyncPersist(), n && this.asyncPersist(), (this._isInitialized = !0);
            let i = Date.now() - e;
            i > 5 && l.A.mark("\uD83E\uDDA5", this.getName() + ".initialize()", i);
        }
    }
    static migrateAndReadStoreState(e, t) {
        if (null != y && v.shouldClear(y, e)) return I.w.remove(e), { state: void 0, requiresPersist: !1 };
        let { _state: n, _version: i, ...r } = (null != v._clearAllPromise ? null : I.w.get(e)) ?? O,
            s = null == t ? 0 : t.length;
        if (0 !== s && i !== s && null != t) {
            let e = i ?? 0,
                a = n;
            for (null == i && (a = r); e < s; ) (a = (0, t[e])(a)), e++;
            return { state: a, requiresPersist: !0 };
        }
        return Object.values(r).length > 0 ? { state: r, requiresPersist: !0 } : { state: n, requiresPersist: !1 };
    }
    callback = (e) => {
        let { persistKey: t } = this.getClass();
        this.persist(), v._writePromises.delete(t), v._writeResolvers.delete(t), e();
    };
    throttledCallback = A()((e) => this.callback(e), this.getClass().throttleDelay, { leading: !1 });
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
        I.w.set(e, { _state: t, _version: n });
    }
    clear() {
        let { persistKey: e } = this.getClass();
        I.w.remove(e);
    }
}
class D extends v {
    initializeFromState(e) {
        return v.userAgnosticPersistKeys.add(this.getClass().persistKey), super.initializeFromState(e);
    }
    initializeIfNeeded() {
        return v.userAgnosticPersistKeys.add(this.getClass().persistKey), super.initializeIfNeeded();
    }
    getState() {
        return this.getUserAgnosticState();
    }
}
var L = n(627968),
    b = n(64700),
    w = n(52133);
function P(e) {
    return e.displayName ?? e.name ?? "<Unknown>";
}
function k(e) {
    let t = null,
        n = null,
        i = (e) =>
            null != t && null != n && (0, w.A)(t, e)
                ? n
                : null != t && null != n && (0, w.A)(t, e)
                  ? ((t = e), n)
                  : null,
        r = (r) => {
            let s = i(r);
            return null != s ? s : (n = e((t = r)));
        };
    return (
        (r.getCachedResult = i),
        (r.clear = () => {
            (t = null), (n = null);
        }),
        r
    );
}
var M = n(353640),
    U = n(158390),
    x = n(702841);
let G = Symbol("NO_DATA");
class V extends Error {
    name = "HTTPResponseError";
    status = 0;
    setStatus(e) {
        this.status = e;
    }
}
function F(e, t) {
    return Array.isArray(e) && Array.isArray(t) ? (0, w.v)(e, t) : Object.is(e, t);
}
function B(e) {
    return e instanceof V && (e.status >= 500 || 429 === e.status);
}
function H() {
    return new U.A();
}
let j = (0, M.v)(() => ({ isLoading: !1, error: null, backoff: new U.A() }));
function W(e, t) {
    let {
            getQueryId: n,
            get: i,
            load: r,
            getIsLoading: s,
            getError: a,
            retryConfig: { maxRetries: o = 5, backoff: l = H, retryableErrors: d = B } = {},
        } = t,
        _ = new Map();
    function u(e) {
        if (null == e) return j;
        let t = _.get(e);
        return null == t && ((t = (0, M.v)(() => ({ isLoading: !1, error: null, backoff: l() }))), _.set(e, t)), t;
    }
    async function c(e) {
        let { queryId: t, args: n, refetch: a = !1, useStoreState: l = u(t) } = e,
            _ = l.getState().backoff,
            E = s?.(...n) ?? l.getState().isLoading;
        if (null != t && !E) {
            if (!a) {
                let e = i(...n);
                if (e === G || null != e) return;
            }
            try {
                l.setState({ isLoading: !0 }), await r(...n), _.succeed(), l.setState({ error: null, isLoading: !1 });
            } catch (i) {
                let e = (function (e) {
                    if (e instanceof Error) return e;
                    if ("object" == typeof e && null != e && "status" in e && "number" == typeof e.status) {
                        if ("body" in e && null != e.body && "object" == typeof e.body && "message" in e.body) {
                            let t = new V(String(e.body.message));
                            return t.setStatus(e.status), t;
                        }
                        let t = new V(
                            Object.entries(e)
                                .map((e) => {
                                    let [t, n] = e;
                                    return `${t}: [${String(n)}]`;
                                })
                                .join(","),
                        );
                        return t.setStatus(e.status), t;
                    }
                    return Error(String(e));
                })(i);
                l.setState({ error: e, isLoading: !1 }),
                    d(e) &&
                        o > _.fails &&
                        (await new Promise((e, i) => {
                            _.fail(() => {
                                c({ queryId: t, args: n, useStoreState: l, refetch: a }).then(e, i);
                            });
                        }));
            }
        }
    }
    function E() {
        for (var t = arguments.length, r = Array(t), o = 0; o < t; o++) r[o] = arguments[o];
        let l = (function (e) {
                let [t, n] = (0, b.useState)(e);
                return e === t || (0, w.v)(e, t) || n(e), t;
            })(r),
            d = Array.isArray(e) ? e : [e],
            _ = n(...l),
            E = u(_),
            h = (0, x.bG)(d, () => s?.(...l), [l]),
            m = E((e) => null == s && e.isLoading),
            f = (0, x.bG)(d, () => a?.(...l), [l]),
            g = E((e) => (null == a ? e.error : null)),
            p = (0, x.bG)(d, () => i(...l), [l], F);
        return (
            (0, b.useEffect)(() => {
                c({ queryId: _, args: l, useStoreState: E });
            }, [_, l, E]),
            {
                data: p === G ? null : p,
                error: f ?? g,
                isLoading: h ?? m,
                refetch: (0, b.useCallback)(() => {
                    c({ queryId: _, args: l, useStoreState: E, refetch: !0 });
                }, [_, l, E]),
            }
        );
    }
    return (
        (E.refetch = async function () {
            for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            let r = n(...t),
                s = u(r);
            s.getState().backoff.succeed(), await c({ queryId: r, args: t, useStoreState: s, refetch: !0 });
        }),
        (E.fetchMany = async function () {
            for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            await Promise.all(
                t.map((e) => {
                    let t = n(...e);
                    return c({ queryId: t, args: e, useStoreState: u(t) });
                }),
            );
        }),
        (E.refetchMany = async function () {
            for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            await Promise.all(
                t.map((e) => {
                    let t = n(...e),
                        i = u(t);
                    return i.getState().backoff.succeed(), c({ queryId: t, args: e, useStoreState: i, refetch: !0 });
                }),
            );
        }),
        E
    );
}
let Y = {
    Emitter: _.A,
    Store: R,
    PersistedStore: v,
    DeviceSettingsStore: class extends D {},
    OfflineCacheStore: class extends D {},
    connectStores: function (e, t, n) {
        return null != n && n.forwardRef
            ? (function (e, t) {
                  return (n) => {
                      let i = `FluxContainer(${P(n)})`;
                      class s extends b.Component {
                          static displayName = i;
                          memoizedGetStateFromStores = k(t);
                          listener = new r.r(e, () => {
                              let e = this.memoizedGetStateFromStores.getCachedResult(this.props.childProps);
                              (null != e &&
                                  (this.memoizedGetStateFromStores.clear(),
                                  (0, w.A)(this.memoizedGetStateFromStores(this.props.childProps), e))) ||
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
                              return (0, L.jsx)(n, { ref: e, ...t, ...i });
                          }
                      }
                      let a = b.forwardRef((e, t) => (0, L.jsx)(s, { childProps: e, forwardedConnectStoresRef: t }));
                      return (a.displayName = `ForwardRef(${i})`), a;
                  };
              })(e, t)
            : (function (e, t) {
                  return (n) => {
                      let i = `FluxContainer(${P(n)})`;
                      class s extends b.Component {
                          static displayName = i;
                          memoizedGetStateFromStores = k(t);
                          listener = new r.r(e, () => {
                              let e = this.memoizedGetStateFromStores.getCachedResult(this.props);
                              (null != e &&
                                  (this.memoizedGetStateFromStores.clear(),
                                  (0, w.A)(this.memoizedGetStateFromStores(this.props), e))) ||
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
                              return (0, L.jsx)(n, { ...this.props, ...e });
                          }
                      }
                      return s;
                  };
              })(e, t);
    },
    initialize: function () {
        R.initialize();
    },
    get initialized() {
        return R.initialized;
    },
};
