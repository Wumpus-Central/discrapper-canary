r.d(n, {
    U: function () {
        return b;
    }
});
var i = r(47120);
var a = r(653041);
var s = r(411104);
var o = r(121014),
    l = r(512722),
    u = r.n(l),
    c = r(956067),
    d = r(259443),
    f = r(986529),
    _ = r(153102),
    h = r(625306),
    p = r(420970);
function m(e, n, r) {
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
let g = new Set(['APP_STATE_UPDATE', 'CLEAR_CACHES', 'CONNECTION_CLOSED', 'CONNECTION_OPEN', 'CONNECTION_RESUMED', 'LOGIN_SUCCESS', 'LOGIN', 'LOGOUT', 'MESSAGE_SEND_FAILED', 'PUSH_NOTIFICATION_CLICK', 'RESET_SOCKET', 'SESSION_START', 'UPLOAD_FAIL', 'WRITE_CACHES']),
    E = new d.Yd('Flux'),
    v = 100,
    I = 10,
    T = '__subscriptions';
class b {
    isDispatching() {
        return null != this._currentDispatchActionType;
    }
    dispatch(e) {
        return new Promise((n, r) => {
            this._waitQueue.push(() => {
                try {
                    null == this.functionCache[e.type] && ((this.functionCache[e.type] = (e) => this._dispatchWithDevtools(e)), S(this.functionCache[e.type], 'dispatch_' + e.type)), this.functionCache[e.type](e), n();
                } catch (e) {
                    r(e);
                }
            }),
                this.flushWaitQueue();
        });
    }
    flushWaitQueue() {
        if (!this._processingWaitQueue)
            try {
                (this._processingWaitQueue = !0), (_.Z.isDispatching = !0);
                let n = 0;
                for (; this._waitQueue.length > 0; ) {
                    if (++n > 100) {
                        var e;
                        let n = h.qC();
                        throw (
                            (E.error('LastFewActions', n),
                            null === (e = this._sentryUtils) ||
                                void 0 === e ||
                                e.addBreadcrumb({
                                    message: 'Dispatcher: Dispatch loop detected',
                                    data: { lastFewActions: n }
                                }),
                            Error('Dispatch loop detected, aborting'))
                        );
                    }
                    for (; this._waitQueue.length > 0; ) this._waitQueue.shift()();
                    _.Z.emit();
                }
            } finally {
                (this._processingWaitQueue = !1), (_.Z.isDispatching = !1);
            }
    }
    _dispatchWithDevtools(e) {
        this._dispatchWithLogging(e);
    }
    _dispatchWithLogging(e) {
        u()(null == this._currentDispatchActionType, 'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch. Action: '.concat(e.type, ' Already dispatching: ').concat(this._currentDispatchActionType)), u()(e.type, 'Dispatch.dispatch(...) called without an action type'), g.has(e.type) && E.log('Dispatching '.concat(e.type)), (0, f.B1)(e.type), h.IH(e.type);
        let n = this.actionLogger.log(e, (n) => {
            try {
                (this._currentDispatchActionType = e.type), this._dispatch(e, n);
            } finally {
                this._currentDispatchActionType = null;
            }
        });
        n.totalTime > v && E.verbose('Slow dispatch on '.concat(e.type, ': ').concat(n.totalTime, 'ms'));
        try {
            (0, f.L8)('DISPATCH['.concat(e.type, ']'), e.type);
        } catch (e) {}
    }
    _dispatch(e, n) {
        for (let n of this._interceptors) if (n(e)) return !1;
        let r = this._actionHandlers.getOrderedActionHandlers(e);
        for (let i = 0, a = r.length; i < a; i++) {
            let { name: a, actionHandler: s, storeDidChange: o } = r[i];
            !1 !== n(a, () => s(e)) && o(e);
        }
        let i = this._subscriptions[e.type];
        null != i &&
            n(T, () => {
                i.forEach((n) => n(e));
            });
    }
    addInterceptor(e) {
        this._interceptors.push(e);
    }
    wait(e) {
        this._waitQueue.push(e), this.flushWaitQueue();
    }
    subscribe(e, n) {
        let r = this._subscriptions[e];
        null == r && (this._subscriptions[e] = r = new Set()), r.add(n);
    }
    unsubscribe(e, n) {
        let r = this._subscriptions[e];
        null != r && (r.delete(n), 0 === r.size && delete this._subscriptions[e]);
    }
    register(e, n, r, i, a) {
        return this._actionHandlers.register(e, n, r, null != i ? i : this._defaultBand, a);
    }
    createToken() {
        return this._actionHandlers.createToken();
    }
    addDependencies(e, n) {
        this._actionHandlers.addDependencies(e, n);
    }
    constructor(e = 0, n, r) {
        if ((m(this, '_defaultBand', void 0), m(this, '_interceptors', []), m(this, '_subscriptions', {}), m(this, '_waitQueue', []), m(this, '_processingWaitQueue', !1), m(this, '_currentDispatchActionType', null), m(this, '_actionHandlers', new y()), m(this, '_sentryUtils', void 0), m(this, 'actionLogger', void 0), m(this, 'functionCache', {}), (this._defaultBand = e), (this._sentryUtils = r), null != n)) this.actionLogger = n;
        else this.actionLogger = new p.Z();
        this.actionLogger.on('trace', (e, n, r) => {
            c.Z.isTracing && r >= I && c.Z.mark('\uD83E\uDDA5', n, r);
        });
    }
}
class y {
    getOrderedActionHandlers(e) {
        var n;
        return null !== (n = this._orderedActionHandlers[e.type]) && void 0 !== n ? n : this._computeOrderedActionHandlers(e.type);
    }
    register(e, n, r, i) {
        let a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.createToken();
        u()(i >= 0 && Number.isInteger(i), 'band must be a non-negative integer.');
        let s = {};
        for (let r in n) {
            let i = n[r],
                a = (e) => i(e);
            S(a, ''.concat(e, '_').concat(r)), (s[r] = a);
        }
        return (
            this._dependencyGraph.addNode(a, {
                name: e,
                band: i,
                actionHandler: s,
                storeDidChange: r
            }),
            this._addToBand(a, i),
            this._invalidateCaches(),
            a
        );
    }
    createToken() {
        return 'ID_'.concat(this._lastID++);
    }
    addDependencies(e, n) {
        for (let r of (this._validateDependencies(e, n), n)) this._dependencyGraph.addDependency(e, r);
        this._invalidateCaches();
    }
    _validateDependencies(e, n) {}
    _invalidateCaches() {
        (this._orderedCallbackTokens = null), (this._orderedActionHandlers = {});
    }
    _bandToken(e) {
        let n = 'band.'.concat(e);
        return (
            !this._dependencyGraph.hasNode(n) &&
                (this._dependencyGraph.addNode(n, {
                    name: n,
                    band: e,
                    actionHandler: {},
                    storeDidChange: () => {}
                }),
                e > 0 && this._dependencyGraph.addDependency(n, this._bandToken(e - 1))),
            n
        );
    }
    _addToBand(e, n) {
        this._dependencyGraph.addDependency(this._bandToken(n), e), n > 0 && this._dependencyGraph.addDependency(e, this._bandToken(n - 1));
    }
    _computeOrderedActionHandlers(e) {
        var n;
        let r = null !== (n = this._orderedCallbackTokens) && void 0 !== n ? n : this._computeOrderedCallbackTokens(),
            i = [];
        for (let n = 0, a = r.length; n < a; n++) {
            let { name: a, actionHandler: s, storeDidChange: o } = this._dependencyGraph.getNodeData(r[n]),
                l = s[e];
            null != l &&
                i.push({
                    name: a,
                    actionHandler: l,
                    storeDidChange: o
                });
        }
        return (this._orderedActionHandlers[e] = i), i;
    }
    _computeOrderedCallbackTokens() {
        try {
            let e = this._dependencyGraph.overallOrder();
            return (this._orderedCallbackTokens = e), e;
        } catch (e) {
            if (null != e.cyclePath) {
                let n = e.cyclePath.map((e) => ''.concat(this._dependencyGraph.getNodeData(e).name, '(').concat(e, ')'));
                throw Error('Dependency Cycle Found: '.concat(n.join(' -> ')));
            }
            throw e;
        }
    }
    constructor() {
        m(this, '_orderedActionHandlers', {}), m(this, '_orderedCallbackTokens', null), m(this, '_lastID', 1), m(this, '_dependencyGraph', new o.DepGraph());
    }
}
function S(e, n) {
    Object.defineProperty(e, 'name', { value: n });
}
