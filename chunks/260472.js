"use strict";
n.d(t, { m: () => g }), n(321073);
var r = n(840320),
    i = n(284009),
    a = n.n(i),
    s = n(61090);
n(423034);
var o = n(406335),
    l = n(118356),
    u = n(390225),
    c = n(39304),
    d = n(294997);
let _ = new Set([
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
    f = new l.Vy("Flux"),
    p = 100,
    h = 10,
    m = "__subscriptions";
class g {
    _defaultBand;
    _interceptors = [];
    _subscriptions = {};
    _waitQueue = [];
    _processingWaitQueue = !1;
    _currentDispatchActionType = null;
    _actionHandlers = new E();
    _sentryUtils = void 0;
    actionLogger;
    functionCache = {};
    constructor(e = 0, t, n) {
        (this._defaultBand = e),
            (this._sentryUtils = n),
            null != t ? (this.actionLogger = t) : (this.actionLogger = new d.T()),
            this.actionLogger.on("trace", (e, t, n) => {
                s.A.isTracing && n >= h && s.A.mark("\uD83E\uDDA5", t, n);
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
                        A(this.functionCache[e.type], "dispatch_" + e.type)),
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
        for (let { name: n, actionHandler: r, storeDidChange: i } of (a()(
            !1,
            "dispatchForTest cannot be called in: production",
        ),
        this._actionHandlers.getOrderedActionHandlers(e)))
            n === t && !1 !== r(e) && i(e);
    }
    flushWaitQueue() {
        if (!this._processingWaitQueue)
            try {
                (this._processingWaitQueue = !0), (u.A.isDispatching = !0);
                let e = 0;
                for (; this._waitQueue.length > 0; ) {
                    if (++e > 100) {
                        let e = c.lK();
                        throw (
                            (f.error("LastFewActions", e),
                            this._sentryUtils?.addBreadcrumb({
                                message: "Dispatcher: Dispatch loop detected",
                                data: { lastFewActions: e },
                            }),
                            Error("Dispatch loop detected, aborting"))
                        );
                    }
                    for (; this._waitQueue.length > 0; ) this._waitQueue.shift()();
                    u.A.emit();
                }
            } finally {
                (this._processingWaitQueue = !1), (u.A.isDispatching = !1);
            }
    }
    _dispatchWithDevtools(e) {
        this._dispatchWithLogging(e);
    }
    _dispatchWithLogging(e) {
        a()(
            null == this._currentDispatchActionType,
            `Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch. Action: ${e.type} Already dispatching: ${this._currentDispatchActionType}`,
        ),
            a()(e.type, "Dispatch.dispatch(...) called without an action type"),
            _.has(e.type) && f.log(`Dispatching ${e.type}`),
            (0, o.Gy)(e.type),
            c.WQ(e.type);
        let t = this.actionLogger.log(e, (t) => {
            try {
                (this._currentDispatchActionType = e.type), this._dispatch(e, t);
            } finally {
                this._currentDispatchActionType = null;
            }
        });
        t.totalTime > p && f.verbose(`Slow dispatch on ${e.type}: ${t.totalTime}ms`);
        try {
            (0, o.xP)(`DISPATCH[${e.type}]`, e.type);
        } catch (e) {}
    }
    _dispatch(e, t) {
        for (let t of this._interceptors) if (t(e)) return !1;
        let n = this._actionHandlers.getOrderedActionHandlers(e);
        for (let r = 0, i = n.length; r < i; r++) {
            let { name: i, actionHandler: a, storeDidChange: s } = n[r];
            !1 !== t(i, () => a(e)) && s(e);
        }
        let r = this._subscriptions[e.type];
        null != r &&
            t(m, () => {
                r.forEach((t) => t(e));
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
    register(e, t, n, r, i) {
        return this._actionHandlers.register(e, t, n, r ?? this._defaultBand, i);
    }
    createToken() {
        return this._actionHandlers.createToken();
    }
    addDependencies(e, t) {
        this._actionHandlers.addDependencies(e, t);
    }
}
class E {
    _orderedActionHandlers = {};
    _orderedCallbackTokens = null;
    _lastID = 1;
    _dependencyGraph = new r.DepGraph();
    getOrderedActionHandlers(e) {
        return this._orderedActionHandlers[e.type] ?? this._computeOrderedActionHandlers(e.type);
    }
    register(e, t, n, r) {
        let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.createToken();
        a()(r >= 0 && Number.isInteger(r), "band must be a non-negative integer.");
        let s = {};
        for (let n in t) {
            let r = t[n],
                i = (e) => r(e);
            A(i, `${e}_${n}`), (s[n] = i);
        }
        return (
            this._dependencyGraph.addNode(i, { name: e, band: r, actionHandler: s, storeDidChange: n }),
            this._addToBand(i, r),
            this._invalidateCaches(),
            i
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
        for (let r = 0, i = t.length; r < i; r++) {
            let { name: i, actionHandler: a, storeDidChange: s } = this._dependencyGraph.getNodeData(t[r]),
                o = a[e];
            null != o && n.push({ name: i, actionHandler: o, storeDidChange: s });
        }
        return (this._orderedActionHandlers[e] = n), n;
    }
    _computeOrderedCallbackTokens() {
        try {
            let e = this._dependencyGraph.overallOrder();
            return (this._orderedCallbackTokens = e), e;
        } catch (t) {
            let e = t;
            if (null != e.cyclePath) {
                let t = e.cyclePath.map((e) => `${this._dependencyGraph.getNodeData(e).name}(${e})`);
                throw Error(`Dependency Cycle Found: ${t.join(" -> ")}`);
            }
            throw e;
        }
    }
}
function A(e, t) {
    Object.defineProperty(e, "name", { value: t });
}
