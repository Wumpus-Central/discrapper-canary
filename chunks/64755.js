function r(e) {
    let { actor: t, mapState: i, createApi: r, instrumentation: n } = e;
    function o() {
        return t.getSnapshot();
    }
    function a() {
        return i(o());
    }
    let s = n?.getScreenName(o()),
        l = n?.getErrorName(o()),
        c = n?.getErrorPayload(o()),
        d = r({
            actor: t,
            getSnapshot: o,
            trackElementClicked: n
                ? (e, t) => {
                      n.onElementClicked?.(n.moduleName, s, { element: e, action: t?.action, metadata: t?.metadata });
                  }
                : void 0,
            trackCaptureAttemptFinished: n
                ? (e) => {
                      n.onCaptureAttemptFinished?.(n.moduleName, s, { logs: e.logs });
                  }
                : void 0,
        });
    n?.onModuleOpened(n.moduleName),
        n && void 0 !== s && n.onScreenOpened(n.moduleName, s),
        n && void 0 !== l && n.onErrorTriggered(n.moduleName, l, c);
    let u = n
            ? t.subscribe((e) => {
                  let t = n.getScreenName(e),
                      i = n.getErrorName(e),
                      r = n.getErrorPayload(e);
                  if (s === t) {
                      void 0 !== i && i !== l && n.onErrorTriggered(n.moduleName, i, r), (l = i), (c = r);
                      return;
                  }
                  void 0 !== s && n.onScreenClosed(n.moduleName, s),
                      void 0 !== t && n.onScreenOpened(n.moduleName, t),
                      (s = t),
                      void 0 !== i && i !== l && n.onErrorTriggered(n.moduleName, i, r),
                      (l = i),
                      (c = r);
              })
            : void 0,
        h = !1;
    return Object.defineProperties(
        {
            getState: a,
            subscribe: function (e) {
                let i = t.subscribe(() => {
                    e(a());
                });
                return () => i.unsubscribe();
            },
            stop() {
                h ||
                    ((h = !0),
                    u?.unsubscribe(),
                    n && void 0 !== s && n.onScreenClosed(n.moduleName, s),
                    (s = void 0),
                    (l = void 0),
                    (c = void 0),
                    n?.onModuleClosed(n.moduleName),
                    t.stop());
            },
        },
        Object.getOwnPropertyDescriptors(d),
    );
}
i.d(t, {
    a: () => eP,
    c: () => r,
    i: () => eM,
    n: () => eG,
    o: () => B,
    r: () => eR,
    s: () => k,
    t: () =>
        function e({ schemas: t, actors: i, actions: r, guards: n, delays: o }) {
            return {
                assign: eR,
                sendTo: eG,
                raise: eI,
                log: eJ,
                cancel: A,
                stopChild: H,
                enqueueActions: eY,
                emit: ez,
                spawnChild: D,
                createStateConfig: (e) => e,
                createAction: (e) => e,
                createMachine: (e) => new eV({ ...e, schemas: t }, { actors: i, actions: r, guards: n, delays: o }),
                extend: (a) =>
                    e({
                        schemas: t,
                        actors: i,
                        actions: { ...r, ...a.actions },
                        guards: { ...n, ...a.guards },
                        delays: { ...o, ...a.delays },
                    }),
            };
        },
});
var n,
    o,
    a = class {
        constructor(e) {
            (this._process = e), (this._active = !1), (this._current = null), (this._last = null);
        }
        start() {
            (this._active = !0), this.flush();
        }
        clear() {
            this._current && ((this._current.next = null), (this._last = this._current));
        }
        enqueue(e) {
            let t = { value: e, next: null };
            if (this._current) {
                (this._last.next = t), (this._last = t);
                return;
            }
            (this._current = t), (this._last = t), this._active && this.flush();
        }
        flush() {
            for (; this._current; ) {
                let e = this._current;
                this._process(e.value), (this._current = e.next);
            }
            this._last = null;
        }
    };
let s = "xstate.init",
    l = "xstate.stop";
function c(e, t) {
    return { type: `xstate.done.state.${e}`, output: t };
}
function d(e, t) {
    return { type: `xstate.error.actor.${e}`, error: t, actorId: e };
}
function u(e) {
    return { type: s, input: e };
}
function h(e) {
    setTimeout(() => {
        throw e;
    });
}
let p = ("function" == typeof Symbol && Symbol.observable) || "@@observable";
function f(e) {
    if (y(e)) return e;
    let t = [],
        i = "";
    for (let r = 0; r < e.length; r++) {
        switch (e.charCodeAt(r)) {
            case 92:
                (i += e[r + 1]), r++;
                continue;
            case 46:
                t.push(i), (i = "");
                continue;
        }
        i += e[r];
    }
    return t.push(i), t;
}
function m(e) {
    var t;
    return (t = e) && "object" == typeof t && "machine" in t && "value" in t
        ? e.value
        : "string" != typeof e
          ? e
          : (function (e) {
                if (1 === e.length) return e[0];
                let t = {},
                    i = t;
                for (let t = 0; t < e.length - 1; t++)
                    if (t === e.length - 2) i[e[t]] = e[t + 1];
                    else {
                        let r = i;
                        (i = {}), (r[e[t]] = i);
                    }
                return t;
            })(f(e));
}
function g(e, t) {
    let i = {},
        r = Object.keys(e);
    for (let n = 0; n < r.length; n++) {
        let o = r[n];
        i[o] = t(e[o], o, e, n);
    }
    return i;
}
function v(e) {
    var t;
    return void 0 === e ? [] : y((t = e)) ? t : [t];
}
function C(e, t, i, r) {
    return "function" == typeof e ? e({ context: t, event: i, self: r }) : e;
}
function y(e) {
    return Array.isArray(e);
}
function w(e) {
    var t;
    return (y((t = e)) ? t : [t]).map((e) => (void 0 === e || "string" == typeof e ? { target: e } : e));
}
function _(e) {
    if (void 0 !== e && "" !== e) return v(e);
}
function b(e, t, i) {
    let r = "object" == typeof e,
        n = r ? e : void 0;
    return {
        next: (r ? e.next : e)?.bind(n),
        error: (r ? e.error : t)?.bind(n),
        complete: (r ? e.complete : i)?.bind(n),
    };
}
function L(e, t) {
    let i = t.match(/^xstate\.invoke\.(\d+)\.(.*)/);
    if (!i) return e.implementations.actors[t];
    let [, r, n] = i,
        o = e.getStateNodeById(n).config.invoke;
    return (Array.isArray(o) ? o[r] : o).src;
}
function S(e, t) {
    return `${e.sessionId}.${t}`;
}
let E = 0,
    I = !1,
    T =
        (((n = {})[(n.NotStarted = 0)] = "NotStarted"),
        (n[(n.Running = 1)] = "Running"),
        (n[(n.Stopped = 2)] = "Stopped"),
        n),
    M = {
        clock: { setTimeout: (e, t) => setTimeout(e, t), clearTimeout: (e) => clearTimeout(e) },
        logger: console.log.bind(console),
        devTools: !1,
    };
var x = class {
    constructor(e, t) {
        (this.logic = e),
            (this._snapshot = void 0),
            (this.clock = void 0),
            (this.options = void 0),
            (this.id = void 0),
            (this.mailbox = new a(this._process.bind(this))),
            (this.observers = new Set()),
            (this.eventListeners = new Map()),
            (this.logger = void 0),
            (this._processingStatus = T.NotStarted),
            (this._parent = void 0),
            (this._syncSnapshot = void 0),
            (this.ref = void 0),
            (this._actorScope = void 0),
            (this.systemId = void 0),
            (this.sessionId = void 0),
            (this.system = void 0),
            (this._doneEvent = void 0),
            (this.src = void 0),
            (this._deferred = []);
        const i = { ...M, ...t },
            { clock: r, logger: n, parent: o, syncSnapshot: s, id: l, systemId: c, inspect: d } = i;
        (this.system = o
            ? o.system
            : (function (e, t) {
                  let i = new Map(),
                      r = new Map(),
                      n = new WeakMap(),
                      o = new Set(),
                      a = {},
                      { clock: s, logger: l } = t,
                      c = {
                          schedule: (e, t, i, r, n = Math.random().toString(36).slice(2)) => {
                              let o = { source: e, target: t, event: i, delay: r, id: n, startedAt: Date.now() },
                                  l = S(e, n);
                              (d._snapshot._scheduledEvents[l] = o),
                                  (a[l] = s.setTimeout(() => {
                                      delete a[l], delete d._snapshot._scheduledEvents[l], d._relay(e, t, i);
                                  }, r));
                          },
                          cancel: (e, t) => {
                              let i = S(e, t),
                                  r = a[i];
                              delete a[i], delete d._snapshot._scheduledEvents[i], void 0 !== r && s.clearTimeout(r);
                          },
                          cancelAll: (e) => {
                              for (let t in d._snapshot._scheduledEvents) {
                                  let i = d._snapshot._scheduledEvents[t];
                                  i.source === e && c.cancel(e, i.id);
                              }
                          },
                      },
                      d = {
                          _snapshot: { _scheduledEvents: (t?.snapshot && t.snapshot.scheduler) ?? {} },
                          _bookId: () => `x:${E++}`,
                          _register: (e, t) => (i.set(e, t), e),
                          _unregister: (e) => {
                              i.delete(e.sessionId);
                              let t = n.get(e);
                              void 0 !== t && (r.delete(t), n.delete(e));
                          },
                          get: (e) => r.get(e),
                          getAll: () => Object.fromEntries(r.entries()),
                          _set: (e, t) => {
                              let i = r.get(e);
                              if (i && i !== t) throw Error(`Actor with system ID '${e}' already exists.`);
                              r.set(e, t), n.set(t, e);
                          },
                          inspect: (e) => {
                              let t = b(e);
                              return (
                                  o.add(t),
                                  {
                                      unsubscribe() {
                                          o.delete(t);
                                      },
                                  }
                              );
                          },
                          _sendInspectionEvent: (t) => {
                              if (!o.size) return;
                              let i = { ...t, rootId: e.sessionId };
                              o.forEach((e) => e.next?.(i));
                          },
                          _relay: (e, t, i) => {
                              d._sendInspectionEvent({ type: "@xstate.event", sourceRef: e, actorRef: t, event: i }),
                                  t._send(i);
                          },
                          scheduler: c,
                          getSnapshot: () => ({ _scheduledEvents: { ...d._snapshot._scheduledEvents } }),
                          start: () => {
                              let e = d._snapshot._scheduledEvents;
                              for (let t in ((d._snapshot._scheduledEvents = {}), e)) {
                                  let { source: i, target: r, event: n, delay: o, id: a } = e[t];
                                  c.schedule(i, r, n, o, a);
                              }
                          },
                          _clock: s,
                          _logger: l,
                      };
                  return d;
              })(this, { clock: r, logger: n })),
            d && !o && this.system.inspect(b(d)),
            (this.sessionId = this.system._bookId()),
            (this.id = l ?? this.sessionId),
            (this.logger = t?.logger ?? this.system._logger),
            (this.clock = t?.clock ?? this.system._clock),
            (this._parent = o),
            (this._syncSnapshot = s),
            (this.options = i),
            (this.src = i.src ?? e),
            (this.ref = this),
            (this._actorScope = {
                self: this,
                id: this.id,
                sessionId: this.sessionId,
                logger: this.logger,
                defer: (e) => {
                    this._deferred.push(e);
                },
                system: this.system,
                stopChild: (e) => {
                    if (e._parent !== this)
                        throw Error(`Cannot stop child actor ${e.id} of ${this.id} because it is not a child`);
                    e._stop();
                },
                emit: (e) => {
                    let t = this.eventListeners.get(e.type),
                        i = this.eventListeners.get("*");
                    if (t || i)
                        for (let r of [...(t ? t.values() : []), ...(i ? i.values() : [])])
                            try {
                                r(e);
                            } catch (e) {
                                h(e);
                            }
                },
                actionExecutor: (e) => {
                    let t = () => {
                        if (
                            (this._actorScope.system._sendInspectionEvent({
                                type: "@xstate.action",
                                actorRef: this,
                                action: { type: e.type, params: e.params },
                            }),
                            !e.exec)
                        )
                            return;
                        let t = I;
                        try {
                            (I = !0), e.exec(e.info, e.params);
                        } finally {
                            I = t;
                        }
                    };
                    this._processingStatus === T.Running ? t() : this._deferred.push(t);
                },
            }),
            (this.send = this.send.bind(this)),
            this.system._sendInspectionEvent({ type: "@xstate.actor", actorRef: this }),
            c && ((this.systemId = c), this.system._set(c, this)),
            this._initState(t?.snapshot ?? t?.state),
            c && "active" !== this._snapshot.status && this.system._unregister(this);
    }
    _initState(e) {
        try {
            this._snapshot = e
                ? this.logic.restoreSnapshot
                    ? this.logic.restoreSnapshot(e, this._actorScope)
                    : e
                : this.logic.getInitialSnapshot(this._actorScope, this.options?.input);
        } catch (e) {
            this._snapshot = { status: "error", output: void 0, error: e };
        }
    }
    update(e, t) {
        let i;
        for (this._snapshot = e; (i = this._deferred.shift()); )
            try {
                i();
            } catch (t) {
                (this._deferred.length = 0), (this._snapshot = { ...e, status: "error", error: t });
            }
        switch (this._snapshot.status) {
            case "active":
                for (let t of this.observers)
                    try {
                        t.next?.(e);
                    } catch (e) {
                        h(e);
                    }
                break;
            case "done":
                var r;
                for (let t of this.observers)
                    try {
                        t.next?.(e);
                    } catch (e) {
                        h(e);
                    }
                this._stopProcedure(),
                    this._complete(),
                    (this._doneEvent =
                        ((r = this.id), { type: `xstate.done.actor.${r}`, output: this._snapshot.output, actorId: r })),
                    this._parent && this.system._relay(this, this._parent, this._doneEvent);
                break;
            case "error":
                this._error(this._snapshot.error);
        }
        this.system._sendInspectionEvent({ type: "@xstate.snapshot", actorRef: this, event: t, snapshot: e });
    }
    subscribe(e, t, i) {
        let r = b(e, t, i);
        if (this._processingStatus !== T.Stopped) this.observers.add(r);
        else
            switch (this._snapshot.status) {
                case "done":
                    try {
                        r.complete?.();
                    } catch (e) {
                        h(e);
                    }
                    break;
                case "error": {
                    let e = this._snapshot.error;
                    if (r.error)
                        try {
                            r.error(e);
                        } catch (e) {
                            h(e);
                        }
                    else h(e);
                }
            }
        return {
            unsubscribe: () => {
                this.observers.delete(r);
            },
        };
    }
    on(e, t) {
        let i = this.eventListeners.get(e);
        i || ((i = new Set()), this.eventListeners.set(e, i));
        let r = t.bind(void 0);
        return (
            i.add(r),
            {
                unsubscribe: () => {
                    i.delete(r);
                },
            }
        );
    }
    start() {
        if (this._processingStatus === T.Running) return this;
        this._syncSnapshot &&
            this.subscribe({
                next: (e) => {
                    "active" === e.status &&
                        this.system._relay(this, this._parent, { type: `xstate.snapshot.${this.id}`, snapshot: e });
                },
                error: () => {},
            }),
            this.system._register(this.sessionId, this),
            this.systemId && this.system._set(this.systemId, this),
            (this._processingStatus = T.Running);
        let e = u(this.options.input);
        switch (
            (this.system._sendInspectionEvent({
                type: "@xstate.event",
                sourceRef: this._parent,
                actorRef: this,
                event: e,
            }),
            this._snapshot.status)
        ) {
            case "done":
                return this.update(this._snapshot, e), this;
            case "error":
                return this._error(this._snapshot.error), this;
        }
        if ((this._parent || this.system.start(), this.logic.start))
            try {
                this.logic.start(this._snapshot, this._actorScope);
            } catch (e) {
                return (this._snapshot = { ...this._snapshot, status: "error", error: e }), this._error(e), this;
            }
        return (
            this.update(this._snapshot, e), this.options.devTools && this.attachDevTools(), this.mailbox.start(), this
        );
    }
    _process(e) {
        let t, i;
        try {
            t = this.logic.transition(this._snapshot, e, this._actorScope);
        } catch (e) {
            i = { err: e };
        }
        if (i) {
            let { err: e } = i;
            (this._snapshot = { ...this._snapshot, status: "error", error: e }), this._error(e);
            return;
        }
        this.update(t, e), e.type === l && (this._stopProcedure(), this._complete());
    }
    _stop() {
        return (
            this._processingStatus === T.Stopped ||
                ((this.mailbox.clear(), this._processingStatus === T.NotStarted)
                    ? (this._processingStatus = T.Stopped)
                    : this.mailbox.enqueue({ type: l })),
            this
        );
    }
    stop() {
        if (this._parent) throw Error("A non-root actor cannot be stopped directly.");
        return this._stop();
    }
    _complete() {
        for (let e of this.observers)
            try {
                e.complete?.();
            } catch (e) {
                h(e);
            }
        this.observers.clear();
    }
    _reportError(e) {
        if (!this.observers.size) {
            this._parent || h(e);
            return;
        }
        let t = !1;
        for (let i of this.observers) {
            let r = i.error;
            t ||= !r;
            try {
                r?.(e);
            } catch (e) {
                h(e);
            }
        }
        this.observers.clear(), t && h(e);
    }
    _error(e) {
        this._stopProcedure(),
            this._reportError(e),
            this._parent && this.system._relay(this, this._parent, d(this.id, e));
    }
    _stopProcedure() {
        return (
            this._processingStatus !== T.Running ||
                (this.system.scheduler.cancelAll(this),
                this.mailbox.clear(),
                (this.mailbox = new a(this._process.bind(this))),
                (this._processingStatus = T.Stopped),
                this.system._unregister(this)),
            this
        );
    }
    _send(e) {
        this._processingStatus !== T.Stopped && this.mailbox.enqueue(e);
    }
    send(e) {
        this.system._relay(void 0, this, e);
    }
    attachDevTools() {
        let { devTools: e } = this.options;
        e &&
            ("function" == typeof e
                ? e
                : (e) => {
                      if ("u" < typeof window) return;
                      let t = (function () {
                          let e =
                              "u" > typeof globalThis
                                  ? globalThis
                                  : "u" > typeof self
                                    ? self
                                    : "u" > typeof window
                                      ? window
                                      : "u" > typeof global
                                        ? global
                                        : void 0;
                          if (e.__xstate__) return e.__xstate__;
                      })();
                      t && t.register(e);
                  })(this);
    }
    toJSON() {
        return { xstate$$type: 1, id: this.id };
    }
    getPersistedSnapshot(e) {
        return this.logic.getPersistedSnapshot(this._snapshot, e);
    }
    [p]() {
        return this;
    }
    getSnapshot() {
        return this._snapshot;
    }
};
function k(e, ...[t]) {
    return new x(e, t);
}
function O(e, t, i, r, { sendId: n }) {
    return [t, { sendId: "function" == typeof n ? n(i, r) : n }, void 0];
}
function P(e, t) {
    e.defer(() => {
        e.system.scheduler.cancel(e.self, t.sendId);
    });
}
function A(e) {
    function t(e, t) {}
    return (t.type = "xstate.cancel"), (t.sendId = e), (t.resolve = O), (t.execute = P), t;
}
function R(e, t, i, r, { id: n, systemId: o, src: a, input: s, syncSnapshot: l }) {
    let c,
        d,
        u = "string" == typeof a ? L(t.machine, a) : a,
        h = "function" == typeof n ? n(i) : n;
    return (
        u &&
            ((d = "function" == typeof s ? s({ context: t.context, event: i.event, self: e.self }) : s),
            (c = k(u, { id: h, src: a, parent: e.self, syncSnapshot: l, systemId: o, input: d }))),
        [eL(t, { children: { ...t.children, [h]: c } }), { id: n, systemId: o, actorRef: c, src: a, input: d }, void 0]
    );
}
function F(e, { actorRef: t }) {
    t &&
        e.defer(() => {
            t._processingStatus !== T.Stopped && t.start();
        });
}
function D(...[e, { id: t, systemId: i, input: r, syncSnapshot: n = !1 } = {}]) {
    function o(e, t) {}
    return (
        (o.type = "xstate.spawnChild"),
        (o.id = t),
        (o.systemId = i),
        (o.src = e),
        (o.input = r),
        (o.syncSnapshot = n),
        (o.resolve = R),
        (o.execute = F),
        o
    );
}
function U(e, t, i, r, { actorRef: n }) {
    let o = "function" == typeof n ? n(i, r) : n,
        a = "string" == typeof o ? t.children[o] : o,
        s = t.children;
    return a && ((s = { ...s }), delete s[a.id]), [eL(t, { children: s }), a, void 0];
}
function N(e, t) {
    if (t) {
        if ((e.system._unregister(t), t._processingStatus !== T.Running)) return void e.stopChild(t);
        e.defer(() => {
            e.stopChild(t);
        });
    }
}
function H(e) {
    function t(e, t) {}
    return (t.type = "xstate.stopChild"), (t.actorRef = e), (t.resolve = U), (t.execute = N), t;
}
function V(e, { context: t, event: i }, { guards: r }) {
    return r.every((r) => $(r, t, i, e));
}
function B(e) {
    function t(e, t) {
        return !1;
    }
    return (t.check = V), (t.guards = e), t;
}
function $(e, t, i, r) {
    let { machine: n } = r,
        o = "function" == typeof e,
        a = o ? e : n.implementations.guards["string" == typeof e ? e : e.type];
    if (!o && !a) throw Error(`Guard '${"string" == typeof e ? e : e.type}' is not implemented.'.`);
    if ("function" != typeof a) return $(a, t, i, r);
    let s = { context: t, event: i },
        l =
            o || "string" == typeof e
                ? void 0
                : "params" in e
                  ? "function" == typeof e.params
                      ? e.params({ context: t, event: i })
                      : e.params
                  : void 0;
    return "check" in a ? a.check(r, s, a) : a(s, l);
}
let z = (e) => "atomic" === e.type || "final" === e.type;
function j(e) {
    return Object.values(e.states).filter((e) => "history" !== e.type);
}
function Z(e, t) {
    let i = [];
    if (t === e) return i;
    let r = e.parent;
    for (; r && r !== t; ) i.push(r), (r = r.parent);
    return i;
}
function W(e) {
    let t = new Set(e),
        i = K(t);
    for (let e of t)
        if ("compound" !== e.type || (i.get(e) && i.get(e).length)) {
            if ("parallel" === e.type) {
                for (let i of j(e)) if ("history" !== i.type && !t.has(i)) for (let e of ee(i)) t.add(e);
            }
        } else ee(e).forEach((e) => t.add(e));
    for (let e of t) {
        let i = e.parent;
        for (; i; ) t.add(i), (i = i.parent);
    }
    return t;
}
function K(e) {
    let t = new Map();
    for (let i of e)
        t.has(i) || t.set(i, []), i.parent && (t.has(i.parent) || t.set(i.parent, []), t.get(i.parent).push(i));
    return t;
}
function G(e, t) {
    return (function e(t, i) {
        let r = i.get(t);
        if (!r) return {};
        if ("compound" === t.type) {
            let e = r[0];
            if (!e) return {};
            if (z(e)) return e.key;
        }
        let n = {};
        for (let t of r) n[t.key] = e(t, i);
        return n;
    })(e, K(W(t)));
}
function q(e, t) {
    return "compound" === t.type
        ? j(t).some((t) => "final" === t.type && e.has(t))
        : "parallel" === t.type
          ? j(t).every((t) => q(e, t))
          : "final" === t.type;
}
let Y = (e) => "#" === e[0];
function Q(e, t, i) {
    let r = _(i.target),
        n = i.reenter ?? !1,
        o = (function (e, t) {
            if (void 0 !== t)
                return t.map((t) => {
                    if ("string" != typeof t) return t;
                    if (Y(t)) return e.machine.getStateNodeById(t);
                    let i = "." === t[0];
                    if (i && !e.parent) return er(e, t.slice(1));
                    let r = i ? e.key + t : t;
                    if (e.parent)
                        try {
                            return er(e.parent, r);
                        } catch (t) {
                            throw Error(`Invalid transition definition for state node '${e.id}':
${t.message}`);
                        }
                    throw Error(
                        `Invalid target: "${t}" is not a valid target from the root node. Did you mean ".${t}"?`,
                    );
                });
        })(e, r),
        a = {
            ...i,
            actions: v(i.actions),
            guard: i.guard,
            target: o,
            source: e,
            reenter: n,
            eventType: t,
            toJSON: () => ({ ...a, source: `#${e.id}`, target: o ? o.map((e) => `#${e.id}`) : void 0 }),
        };
    return a;
}
function X(e) {
    let t = _(e.config.target);
    return t ? { target: t.map((t) => ("string" == typeof t ? er(e.parent, t) : t)) } : e.parent.initial;
}
function J(e) {
    return "history" === e.type;
}
function ee(e) {
    let t = et(e);
    for (let i of t) for (let r of Z(i, e)) t.add(r);
    return t;
}
function et(e) {
    let t = new Set();
    return (
        !(function e(i) {
            if (!t.has(i)) {
                if ((t.add(i), "compound" === i.type)) e(i.initial.target[0]);
                else if ("parallel" === i.type) for (let t of j(i)) e(t);
            }
        })(e),
        t
    );
}
function ei(e, t) {
    if (Y(t)) return e.machine.getStateNodeById(t);
    if (!e.states) throw Error(`Unable to retrieve child state '${t}' from '${e.id}'; no child states exist.`);
    let i = e.states[t];
    if (!i) throw Error(`Child state '${t}' does not exist on '${e.id}'`);
    return i;
}
function er(e, t) {
    if ("string" == typeof t && Y(t))
        try {
            return e.machine.getStateNodeById(t);
        } catch {}
    let i = f(t).slice(),
        r = e;
    for (; i.length; ) {
        let e = i.shift();
        if (!e.length) break;
        r = ei(r, e);
    }
    return r;
}
function en(e, t) {
    if ("string" == typeof t) {
        let i = e.states[t];
        if (!i) throw Error(`State '${t}' does not exist on '${e.id}'`);
        return [e, i];
    }
    let i = Object.keys(t),
        r = i.map((t) => ei(e, t)).filter(Boolean);
    return [e.machine.root, e].concat(
        r,
        i.reduce((i, r) => {
            let n = ei(e, r);
            if (!n) return i;
            let o = en(n, t[r]);
            return i.concat(o);
        }, []),
    );
}
function eo(e, t) {
    let i = e;
    for (; i.parent && i.parent !== t; ) i = i.parent;
    return i.parent === t;
}
function ea(e, t, i) {
    let r = new Set();
    for (let n of e) {
        let e = !1,
            o = new Set();
        for (let a of r)
            if (
                (function (e, t) {
                    let i = new Set(e),
                        r = new Set(t);
                    for (let e of i) if (r.has(e)) return !0;
                    for (let e of r) if (i.has(e)) return !0;
                    return !1;
                })(ec([n], t, i), ec([a], t, i))
            )
                if (eo(n.source, a.source)) o.add(a);
                else {
                    e = !0;
                    break;
                }
        if (!e) {
            for (let e of o) r.delete(e);
            r.add(n);
        }
    }
    return Array.from(r);
}
function es(e, t) {
    if (!e.target) return [];
    let i = new Set();
    for (let r of e.target)
        if (J(r))
            if (t[r.id]) for (let e of t[r.id]) i.add(e);
            else for (let e of es(X(r), t)) i.add(e);
        else i.add(r);
    return [...i];
}
function el(e, t) {
    let i = es(e, t);
    if (!i) return;
    if (!e.reenter && i.every((t) => t === e.source || eo(t, e.source))) return e.source;
    let r = (function (e) {
        let [t, ...i] = e;
        for (let e of Z(t, void 0)) if (i.every((t) => eo(t, e))) return e;
    })(i.concat(e.source));
    return r || (e.reenter ? void 0 : e.source.machine.root);
}
function ec(e, t, i) {
    let r = new Set();
    for (let n of e)
        if (n.target?.length) {
            let e = el(n, i);
            for (let i of (n.reenter && n.source === e && r.add(e), t)) eo(i, e) && r.add(i);
        }
    return [...r];
}
function ed(e, t, i, r, n, o) {
    if (!e.length) return t;
    let a = new Set(t._nodes),
        s = t.historyValue,
        l = ea(e, a, s),
        d = t;
    n ||
        ([d, s] = (function (e, t, i, r, n, o, a, s) {
            let l,
                c = e,
                d = ec(r, n, o);
            for (let e of (d.sort((e, t) => t.order - e.order), d))
                for (let t of (function (e) {
                    return Object.keys(e.states)
                        .map((t) => e.states[t])
                        .filter((e) => "history" === e.type);
                })(e)) {
                    let i;
                    (i = "deep" === t.history ? (t) => z(t) && eo(t, e) : (t) => t.parent === e),
                        ((l ??= { ...o })[t.id] = Array.from(n).filter(i));
                }
            for (let e of d) (c = ep(c, t, i, [...e.exit, ...e.invoke.map((e) => H(e.id))], a, void 0)), n.delete(e);
            return [c, l || o];
        })(d, r, i, l, a, s, o, i.actionExecutor)),
        (d = (function (e, t, i, r, n, o, a, s) {
            let l = e,
                d = new Set(),
                u = new Set();
            (function (e, t, i, r) {
                for (let n of e) {
                    let e = el(n, t);
                    for (let o of n.target || [])
                        !J(o) && (n.source !== o || n.source !== e || n.reenter) && (r.add(o), i.add(o)),
                            eu(o, t, i, r);
                    for (let o of es(n, t)) {
                        let a = Z(o, e);
                        e?.type === "parallel" && a.push(e), eh(r, t, i, a, !n.source.parent && n.reenter ? void 0 : e);
                    }
                }
            })(r, a, u, d),
                s && u.add(e.machine.root);
            let h = new Set();
            for (let e of [...d].sort((e, t) => e.order - t.order)) {
                n.add(e);
                let r = [];
                for (let t of (r.push(...e.entry), e.invoke)) r.push(D(t.src, { ...t, syncSnapshot: !!t.onSnapshot }));
                if (u.has(e)) {
                    let t = e.initial.actions;
                    r.push(...t);
                }
                if (
                    ((l = ep(
                        l,
                        t,
                        i,
                        r,
                        o,
                        e.invoke.map((e) => e.id),
                    )),
                    "final" === e.type)
                ) {
                    let r = e.parent,
                        a = r?.type === "parallel" ? r : r?.parent,
                        s = a || e;
                    for (
                        r?.type === "compound" &&
                        o.push(c(r.id, void 0 !== e.output ? C(e.output, l.context, t, i.self) : void 0));
                        a?.type === "parallel" && !h.has(a) && q(n, a);
                    )
                        h.add(a), o.push(c(a.id)), (s = a), (a = a.parent);
                    if (a) continue;
                    l = eL(l, {
                        status: "done",
                        output: (function (e, t, i, r, n) {
                            if (void 0 === r.output) return;
                            let o = c(
                                n.id,
                                void 0 !== n.output && n.parent ? C(n.output, e.context, t, i.self) : void 0,
                            );
                            return C(r.output, e.context, o, i.self);
                        })(l, t, i, l.machine.root, s),
                    });
                }
            }
            return l;
        })(
            (d = ep(
                d,
                r,
                i,
                l.flatMap((e) => e.actions),
                o,
                void 0,
            )),
            r,
            i,
            l,
            a,
            o,
            s,
            n,
        ));
    let u = [...a];
    "done" === d.status &&
        (d = ep(
            d,
            r,
            i,
            u.sort((e, t) => t.order - e.order).flatMap((e) => e.exit),
            o,
            void 0,
        ));
    try {
        if (
            s === t.historyValue &&
            (function (e, t) {
                if (e.length !== t.size) return !1;
                for (let i of e) if (!t.has(i)) return !1;
                return !0;
            })(t._nodes, a)
        )
            return d;
        return eL(d, { _nodes: u, historyValue: s });
    } catch (e) {
        throw e;
    }
}
function eu(e, t, i, r) {
    var n, o, a, s;
    if (J(e))
        if (t[e.id]) {
            let a = t[e.id];
            for (let e of a) r.add(e), eu(e, t, i, r);
            for (let s of a) {
                (n = s), (o = e.parent), eh(r, t, i, Z(n, o));
            }
        } else {
            let n = X(e);
            for (let o of n.target) r.add(o), n === e.parent?.initial && i.add(e.parent), eu(o, t, i, r);
            for (let o of n.target) {
                (a = o), (s = e.parent), eh(r, t, i, Z(a, s));
            }
        }
    else if ("compound" === e.type) {
        let [n] = e.initial.target;
        J(n) || (r.add(n), i.add(n)), eu(n, t, i, r), eh(r, t, i, Z(n, e));
    } else if ("parallel" === e.type)
        for (let n of j(e).filter((e) => !J(e)))
            [...r].some((e) => eo(e, n)) || (J(n) || (r.add(n), i.add(n)), eu(n, t, i, r));
}
function eh(e, t, i, r, n) {
    for (let o of r)
        if (((!n || eo(o, n)) && e.add(o), "parallel" === o.type))
            for (let r of j(o).filter((e) => !J(e))) [...e].some((e) => eo(e, r)) || (e.add(r), eu(r, t, i, e));
}
function ep(e, t, i, r, n, o) {
    let a = o ? [] : void 0,
        s = (function e(t, i, r, n, o, a) {
            let { machine: s } = t,
                l = t;
            for (let t of n) {
                var c;
                let n = "function" == typeof t,
                    d = n ? t : ((c = "string" == typeof t ? t : t.type), s.implementations.actions[c]),
                    u = { context: l.context, event: i, self: r.self, system: r.system },
                    h =
                        n || "string" == typeof t
                            ? void 0
                            : "params" in t
                              ? "function" == typeof t.params
                                  ? t.params({ context: l.context, event: i })
                                  : t.params
                              : void 0;
                if (!d || !("resolve" in d)) {
                    r.actionExecutor({
                        type: "string" == typeof t ? t : "object" == typeof t ? t.type : t.name || "(anonymous)",
                        info: u,
                        params: h,
                        exec: d,
                    });
                    continue;
                }
                let [p, f, m] = d.resolve(r, l, u, h, d, o);
                (l = p),
                    "retryResolve" in d && a?.push([d, f]),
                    "execute" in d &&
                        r.actionExecutor({ type: d.type, info: u, params: f, exec: d.execute.bind(null, r, f) }),
                    m && (l = e(l, i, r, m, o, a));
            }
            return l;
        })(e, t, i, r, { internalQueue: n, deferredActorIds: o }, a);
    return (
        a?.forEach(([e, t]) => {
            e.retryResolve(i, s, t);
        }),
        s
    );
}
function ef(e, t, i, r) {
    let n = e,
        o = [];
    function a(e, t, r) {
        i.system._sendInspectionEvent({
            type: "@xstate.microstep",
            actorRef: i.self,
            event: t,
            snapshot: e,
            _transitions: r,
        }),
            o.push(e);
    }
    if (t.type === l) return a((n = eL(em(n, t, i), { status: "stopped" })), t, []), { snapshot: n, microstates: o };
    let c = t;
    if (c.type !== s) {
        let t = c,
            s = t.type.startsWith("xstate.error.actor"),
            l = eg(t, n);
        if (s && !l.length)
            return a((n = eL(e, { status: "error", error: t.error })), t, []), { snapshot: n, microstates: o };
        a((n = ed(l, e, i, c, !1, r)), t, l);
    }
    let d = !0;
    for (; "active" === n.status; ) {
        let e = d
                ? (function (e, t) {
                      let i = new Set();
                      for (let r of e._nodes.filter(z))
                          e: for (let n of [r].concat(Z(r, void 0)))
                              if (n.always) {
                                  for (let r of n.always)
                                      if (void 0 === r.guard || $(r.guard, e.context, t, e)) {
                                          i.add(r);
                                          break e;
                                      }
                              }
                      return ea(Array.from(i), new Set(e._nodes), e.historyValue);
                  })(n, c)
                : [],
            t = e.length ? n : void 0;
        if (!e.length) {
            if (!r.length) break;
            e = eg((c = r.shift()), n);
        }
        (d = (n = ed(e, n, i, c, !1, r)) !== t), a(n, c, e);
    }
    return "active" !== n.status && em(n, c, i), { snapshot: n, microstates: o };
}
function em(e, t, i) {
    return ep(
        e,
        t,
        i,
        Object.values(e.children).map((e) => H(e)),
        [],
        void 0,
    );
}
function eg(e, t) {
    return t.machine.getTransitionData(t, e);
}
let ev = function (e) {
        return (function e(t, i) {
            let r = m(t),
                n = m(i);
            return "string" == typeof n
                ? "string" == typeof r && n === r
                : "string" == typeof r
                  ? r in n
                  : Object.keys(r).every((t) => t in n && e(r[t], n[t]));
        })(e, this.value);
    },
    eC = function (e) {
        return this.tags.has(e);
    },
    ey = function (e) {
        let t = this.machine.getTransitionData(this, e);
        return !!t?.length && t.some((e) => void 0 !== e.target || e.actions.length);
    },
    ew = function () {
        let { _nodes: e, tags: t, machine: i, getMeta: r, toJSON: n, can: o, hasTag: a, matches: s, ...l } = this;
        return { ...l, tags: Array.from(t) };
    },
    e_ = function () {
        return this._nodes.reduce((e, t) => (void 0 !== t.meta && (e[t.id] = t.meta), e), {});
    };
function eb(e, t) {
    return {
        status: e.status,
        output: e.output,
        error: e.error,
        machine: t,
        context: e.context,
        _nodes: e._nodes,
        value: G(t.root, e._nodes),
        tags: new Set(e._nodes.flatMap((e) => e.tags)),
        children: e.children,
        historyValue: e.historyValue || {},
        matches: ev,
        hasTag: eC,
        can: ey,
        getMeta: e_,
        toJSON: ew,
    };
}
function eL(e, t = {}) {
    return eb({ ...e, ...t }, e.machine);
}
function eS(e, t, i, r, { event: n, id: o, delay: a }, { internalQueue: s }) {
    let l,
        c = t.machine.implementations.delays;
    if ("string" == typeof n)
        throw Error(`Only event objects may be used with raise; use raise({ type: "${n}" }) instead`);
    let d = "function" == typeof n ? n(i, r) : n;
    if ("string" == typeof a) {
        let e = c && c[a];
        l = "function" == typeof e ? e(i, r) : e;
    } else l = "function" == typeof a ? a(i, r) : a;
    return "number" != typeof l && s.push(d), [t, { event: d, id: o, delay: l }, void 0];
}
function eE(e, t) {
    let { event: i, delay: r, id: n } = t;
    if ("number" == typeof r)
        return void e.defer(() => {
            let t = e.self;
            e.system.scheduler.schedule(t, t, i, r, n);
        });
}
function eI(e, t) {
    function i(e, t) {}
    return (
        (i.type = "xstate.raise"),
        (i.event = e),
        (i.id = t?.id),
        (i.delay = t?.delay),
        (i.resolve = eS),
        (i.execute = eE),
        i
    );
}
let eT = new WeakMap();
function eM(e) {
    return {
        config: e,
        start: (t, i) => {
            let { self: r, system: n, emit: o } = i,
                a = { receivers: void 0, dispose: void 0 };
            eT.set(r, a),
                (a.dispose = e({
                    input: t.input,
                    system: n,
                    self: r,
                    sendBack: (e) => {
                        "stopped" !== r.getSnapshot().status && r._parent && n._relay(r, r._parent, e);
                    },
                    receive: (e) => {
                        (a.receivers ??= new Set()), a.receivers.add(e);
                    },
                    emit: o,
                }));
        },
        transition: (e, t, i) => {
            let r = eT.get(i.self);
            return (
                t.type === l
                    ? ((e = { ...e, status: "stopped", error: void 0 }), r.dispose?.())
                    : r.receivers?.forEach((e) => e(t)),
                e
            );
        },
        getInitialSnapshot: (e, t) => ({ status: "active", output: void 0, error: void 0, input: t }),
        getPersistedSnapshot: (e) => e,
        restoreSnapshot: (e) => e,
    };
}
let ex = "xstate.promise.resolve",
    ek = "xstate.promise.reject",
    eO = new WeakMap();
function eP(e) {
    return {
        config: e,
        transition: (e, t, i) => {
            if ("active" !== e.status) return e;
            switch (t.type) {
                case ex: {
                    let i = t.data;
                    return { ...e, status: "done", output: i, input: void 0 };
                }
                case ek:
                    return { ...e, status: "error", error: t.data, input: void 0 };
                case l:
                    return eO.get(i.self)?.abort(), { ...e, status: "stopped", input: void 0 };
                default:
                    return e;
            }
        },
        start: (t, { self: i, system: r, emit: n }) => {
            if ("active" !== t.status) return;
            let o = new AbortController();
            eO.set(i, o),
                Promise.resolve(e({ input: t.input, system: r, self: i, signal: o.signal, emit: n })).then(
                    (e) => {
                        "active" === i.getSnapshot().status && (eO.delete(i), r._relay(i, i, { type: ex, data: e }));
                    },
                    (e) => {
                        "active" === i.getSnapshot().status && (eO.delete(i), r._relay(i, i, { type: ek, data: e }));
                    },
                );
        },
        getInitialSnapshot: (e, t) => ({ status: "active", output: void 0, error: void 0, input: t }),
        getPersistedSnapshot: (e) => e,
        restoreSnapshot: (e) => e,
    };
}
function eA(e, t, i, r, { assignment: n }) {
    if (!t.context)
        throw Error("Cannot assign to undefined `context`. Ensure that `context` is defined in the machine config.");
    let o = {},
        a = {
            context: t.context,
            event: i.event,
            spawn: (function (e, { machine: t, context: i }, r, n) {
                return (o, a) => {
                    let s = ((o, a) => {
                        if ("string" != typeof o)
                            return k(o, {
                                id: a?.id,
                                parent: e.self,
                                syncSnapshot: a?.syncSnapshot,
                                input: a?.input,
                                src: o,
                                systemId: a?.systemId,
                            });
                        {
                            let s = L(t, o);
                            if (!s) throw Error(`Actor logic '${o}' not implemented in machine '${t.id}'`);
                            let l = k(s, {
                                id: a?.id,
                                parent: e.self,
                                syncSnapshot: a?.syncSnapshot,
                                input:
                                    "function" == typeof a?.input
                                        ? a.input({ context: i, event: r, self: e.self })
                                        : a?.input,
                                src: o,
                                systemId: a?.systemId,
                            });
                            return (n[l.id] = l), l;
                        }
                    })(o, a);
                    return (
                        (n[s.id] = s),
                        e.defer(() => {
                            s._processingStatus !== T.Stopped && s.start();
                        }),
                        s
                    );
                };
            })(e, t, i.event, o),
            self: e.self,
            system: e.system,
        },
        s = {};
    if ("function" == typeof n) s = n(a, r);
    else
        for (let e of Object.keys(n)) {
            let t = n[e];
            s[e] = "function" == typeof t ? t(a, r) : t;
        }
    return [
        eL(t, {
            context: Object.assign({}, t.context, s),
            children: Object.keys(o).length ? { ...t.children, ...o } : t.children,
        }),
        void 0,
        void 0,
    ];
}
function eR(e) {
    function t(e, t) {}
    return (t.type = "xstate.assign"), (t.assignment = e), (t.resolve = eA), t;
}
let eF = new WeakMap();
function eD(e, t, i) {
    let r = eF.get(e);
    return r ? t in r || (r[t] = i()) : ((r = { [t]: i() }), eF.set(e, r)), r[t];
}
let eU = {},
    eN = (e) =>
        "string" == typeof e
            ? { type: e }
            : "function" == typeof e
              ? "resolve" in e
                  ? { type: e.type }
                  : { type: e.name }
              : e;
var eH = class e {
        constructor(t, i) {
            if (
                ((this.config = t),
                (this.key = void 0),
                (this.id = void 0),
                (this.type = void 0),
                (this.path = void 0),
                (this.states = void 0),
                (this.history = void 0),
                (this.entry = void 0),
                (this.exit = void 0),
                (this.parent = void 0),
                (this.machine = void 0),
                (this.meta = void 0),
                (this.output = void 0),
                (this.order = -1),
                (this.description = void 0),
                (this.tags = []),
                (this.transitions = void 0),
                (this.always = void 0),
                (this.parent = i._parent),
                (this.key = i._key),
                (this.machine = i._machine),
                (this.path = this.parent ? this.parent.path.concat(this.key) : []),
                (this.id = this.config.id || [this.machine.id, ...this.path].join(".")),
                (this.type =
                    this.config.type ||
                    (this.config.states && Object.keys(this.config.states).length
                        ? "compound"
                        : this.config.history
                          ? "history"
                          : "atomic")),
                (this.description = this.config.description),
                (this.order = this.machine.idMap.size),
                this.machine.idMap.set(this.id, this),
                (this.states = this.config.states
                    ? g(this.config.states, (t, i) => new e(t, { _parent: this, _key: i, _machine: this.machine }))
                    : eU),
                "compound" === this.type && !this.config.initial)
            )
                throw Error(
                    `No initial state specified for compound state node "#${this.id}". Try adding { initial: "${Object.keys(this.states)[0]}" } to the state config.`,
                );
            (this.history = !0 === this.config.history ? "shallow" : this.config.history || !1),
                (this.entry = v(this.config.entry).slice()),
                (this.exit = v(this.config.exit).slice()),
                (this.meta = this.config.meta),
                (this.output = "final" !== this.type && this.parent ? void 0 : this.config.output),
                (this.tags = v(t.tags).slice());
        }
        _initialize() {
            (this.transitions = (function (e) {
                let t = new Map();
                if (e.config.on)
                    for (let i of Object.keys(e.config.on)) {
                        if ("" === i)
                            throw Error(
                                'Null events ("") cannot be specified as a transition key. Use `always: { ... }` instead.',
                            );
                        let r = e.config.on[i];
                        t.set(
                            i,
                            w(r).map((t) => Q(e, i, t)),
                        );
                    }
                if (e.config.onDone) {
                    let i = `xstate.done.state.${e.id}`;
                    t.set(
                        i,
                        w(e.config.onDone).map((t) => Q(e, i, t)),
                    );
                }
                for (let i of e.invoke) {
                    if (i.onDone) {
                        let r = `xstate.done.actor.${i.id}`;
                        t.set(
                            r,
                            w(i.onDone).map((t) => Q(e, r, t)),
                        );
                    }
                    if (i.onError) {
                        let r = `xstate.error.actor.${i.id}`;
                        t.set(
                            r,
                            w(i.onError).map((t) => Q(e, r, t)),
                        );
                    }
                    if (i.onSnapshot) {
                        let r = `xstate.snapshot.${i.id}`;
                        t.set(
                            r,
                            w(i.onSnapshot).map((t) => Q(e, r, t)),
                        );
                    }
                }
                for (let i of e.after) {
                    let e = t.get(i.eventType);
                    e || ((e = []), t.set(i.eventType, e)), e.push(i);
                }
                return t;
            })(this)),
                this.config.always && (this.always = w(this.config.always).map((e) => Q(this, "", e))),
                Object.keys(this.states).forEach((e) => {
                    this.states[e]._initialize();
                });
        }
        get definition() {
            return {
                id: this.id,
                key: this.key,
                version: this.machine.version,
                type: this.type,
                initial: this.initial
                    ? {
                          target: this.initial.target,
                          source: this,
                          actions: this.initial.actions.map(eN),
                          eventType: null,
                          reenter: !1,
                          toJSON: () => ({
                              target: this.initial.target.map((e) => `#${e.id}`),
                              source: `#${this.id}`,
                              actions: this.initial.actions.map(eN),
                              eventType: null,
                          }),
                      }
                    : void 0,
                history: this.history,
                states: g(this.states, (e) => e.definition),
                on: this.on,
                transitions: [...this.transitions.values()].flat().map((e) => ({ ...e, actions: e.actions.map(eN) })),
                entry: this.entry.map(eN),
                exit: this.exit.map(eN),
                meta: this.meta,
                order: this.order || -1,
                output: this.output,
                invoke: this.invoke,
                description: this.description,
                tags: this.tags,
            };
        }
        toJSON() {
            return this.definition;
        }
        get invoke() {
            return eD(this, "invoke", () =>
                v(this.config.invoke).map((e, t) => {
                    var i, r;
                    let { src: n, systemId: o } = e,
                        a = e.id ?? ((i = this.id), `${t}.${i}`),
                        s = "string" == typeof n ? n : `xstate.invoke.${((r = this.id), `${t}.${r}`)}`;
                    return {
                        ...e,
                        src: s,
                        id: a,
                        systemId: o,
                        toJSON() {
                            let { onDone: t, onError: i, ...r } = e;
                            return { ...r, type: "xstate.invoke", src: s, id: a };
                        },
                    };
                }),
            );
        }
        get on() {
            return eD(this, "on", () =>
                [...this.transitions]
                    .flatMap(([e, t]) => t.map((t) => [e, t]))
                    .reduce((e, [t, i]) => ((e[t] = e[t] || []), e[t].push(i), e), {}),
            );
        }
        get after() {
            return eD(this, "delayedTransitions", () => {
                var e;
                let t;
                return (
                    (e = this),
                    (t = e.config.after)
                        ? Object.keys(t)
                              .flatMap((i) => {
                                  var r;
                                  let n,
                                      o,
                                      a = t[i],
                                      s = Number.isNaN(+i) ? i : +i,
                                      l =
                                          ((r = e.id),
                                          (o = (n = { type: `xstate.after.${s}.${r}` }).type),
                                          e.entry.push(eI(n, { id: o, delay: s })),
                                          e.exit.push(A(o)),
                                          o);
                                  return v("string" == typeof a ? { target: a } : a).map((e) => ({
                                      ...e,
                                      event: l,
                                      delay: s,
                                  }));
                              })
                              .map((t) => {
                                  let { delay: i } = t;
                                  return { ...Q(e, t.event, t), delay: i };
                              })
                        : []
                );
            });
        }
        get initial() {
            return eD(this, "initial", () =>
                (function (e, t) {
                    let i = "string" == typeof t ? e.states[t] : t ? e.states[t.target] : void 0;
                    if (!i && t) throw Error(`Initial state node "${t}" not found on parent state node #${e.id}`);
                    let r = {
                        source: e,
                        actions: t && "string" != typeof t ? v(t.actions) : [],
                        eventType: null,
                        reenter: !1,
                        target: i ? [i] : [],
                        toJSON: () => ({ ...r, source: `#${e.id}`, target: i ? [`#${i.id}`] : [] }),
                    };
                    return r;
                })(this, this.config.initial),
            );
        }
        next(e, t) {
            let i,
                r = t.type,
                n = [];
            for (let o of eD(this, `candidates-${r}`, () => {
                var e;
                return (
                    (e = this),
                    e.transitions.get(r) ||
                        [...e.transitions.keys()]
                            .filter((e) => {
                                if ("*" === e) return !0;
                                if (!e.endsWith(".*")) return !1;
                                let t = e.split("."),
                                    i = r.split(".");
                                for (let e = 0; e < t.length; e++) {
                                    let r = t[e],
                                        n = i[e];
                                    if ("*" === r) return e === t.length - 1;
                                    if (r !== n) return !1;
                                }
                                return !0;
                            })
                            .sort((e, t) => t.length - e.length)
                            .flatMap((t) => e.transitions.get(t))
                );
            })) {
                let { guard: a } = o,
                    s = e.context,
                    l = !1;
                try {
                    l = !a || $(a, s, t, e);
                } catch (t) {
                    let e = "string" == typeof a ? a : "object" == typeof a ? a.type : void 0;
                    throw Error(`Unable to evaluate guard ${e ? `'${e}' ` : ""}in transition for event '${r}' in state node '${this.id}':
${t.message}`);
                }
                if (l) {
                    n.push(...o.actions), (i = o);
                    break;
                }
            }
            return i ? [i] : void 0;
        }
        get events() {
            return eD(this, "events", () => {
                let { states: e } = this,
                    t = new Set(this.ownEvents);
                if (e)
                    for (let i of Object.keys(e)) {
                        let r = e[i];
                        if (r.states) for (let e of r.events) t.add(`${e}`);
                    }
                return Array.from(t);
            });
        }
        get ownEvents() {
            return Array.from(
                new Set(
                    [...this.transitions.keys()].filter((e) =>
                        this.transitions.get(e).some((e) => !(!e.target && !e.actions.length && !e.reenter)),
                    ),
                ),
            );
        }
    },
    eV = class e {
        constructor(e, t) {
            (this.config = e),
                (this.version = void 0),
                (this.schemas = void 0),
                (this.implementations = void 0),
                (this.__xstatenode = !0),
                (this.idMap = new Map()),
                (this.root = void 0),
                (this.id = void 0),
                (this.states = void 0),
                (this.events = void 0),
                (this.id = e.id || "(machine)"),
                (this.implementations = {
                    actors: t?.actors ?? {},
                    actions: t?.actions ?? {},
                    delays: t?.delays ?? {},
                    guards: t?.guards ?? {},
                }),
                (this.version = this.config.version),
                (this.schemas = this.config.schemas),
                (this.transition = this.transition.bind(this)),
                (this.getInitialSnapshot = this.getInitialSnapshot.bind(this)),
                (this.getPersistedSnapshot = this.getPersistedSnapshot.bind(this)),
                (this.restoreSnapshot = this.restoreSnapshot.bind(this)),
                (this.start = this.start.bind(this)),
                (this.root = new eH(e, { _key: this.id, _machine: this })),
                this.root._initialize(),
                (this.states = this.root.states),
                (this.events = this.root.events);
        }
        provide(t) {
            let { actions: i, guards: r, actors: n, delays: o } = this.implementations;
            return new e(this.config, {
                actions: { ...i, ...t.actions },
                guards: { ...r, ...t.guards },
                actors: { ...n, ...t.actors },
                delays: { ...o, ...t.delays },
            });
        }
        resolveState(e) {
            var t;
            let i = G((t = this.root), [...W(en(t, e.value))]),
                r = W(en(this.root, i));
            return eb(
                {
                    _nodes: [...r],
                    context: e.context || {},
                    children: {},
                    status: q(r, this.root) ? "done" : e.status || "active",
                    output: e.output,
                    error: e.error,
                    historyValue: e.historyValue,
                },
                this,
            );
        }
        transition(e, t, i) {
            return ef(e, t, i, []).snapshot;
        }
        microstep(e, t, i) {
            return ef(e, t, i, []).microstates;
        }
        getTransitionData(e, t) {
            return (
                (function e(t, i, r, n) {
                    if ("string" == typeof i) {
                        let e;
                        return (e = ei(t, i).next(r, n)) && e.length ? e : t.next(r, n);
                    }
                    if (1 === Object.keys(i).length) {
                        let o, a;
                        return (a = e(ei(t, (o = Object.keys(i))[0]), i[o[0]], r, n)) && a.length ? a : t.next(r, n);
                    }
                    let o = [];
                    for (let a of Object.keys(i)) {
                        let s = i[a];
                        if (!s) continue;
                        let l = e(ei(t, a), s, r, n);
                        l && o.push(...l);
                    }
                    return o.length ? o : t.next(r, n);
                })(this.root, e.value, e, t) || []
            );
        }
        getPreInitialState(e, t, i) {
            let { context: r } = this.config,
                n = eb(
                    {
                        context: "function" != typeof r && r ? r : {},
                        _nodes: [this.root],
                        children: {},
                        status: "active",
                    },
                    this,
                );
            return "function" == typeof r
                ? ep(
                      n,
                      t,
                      e,
                      [eR(({ spawn: e, event: t, self: i }) => r({ spawn: e, input: t.input, self: i }))],
                      i,
                      void 0,
                  )
                : n;
        }
        getInitialSnapshot(e, t) {
            let i = u(t),
                r = [],
                n = this.getPreInitialState(e, i, r),
                { snapshot: o } = ef(
                    ed(
                        [
                            {
                                target: [...et(this.root)],
                                source: this.root,
                                reenter: !0,
                                actions: [],
                                eventType: null,
                                toJSON: null,
                            },
                        ],
                        n,
                        e,
                        i,
                        !0,
                        r,
                    ),
                    i,
                    e,
                    r,
                );
            return o;
        }
        start(e) {
            Object.values(e.children).forEach((e) => {
                "active" === e.getSnapshot().status && e.start();
            });
        }
        getStateNodeById(e) {
            let t = f(e),
                i = t.slice(1),
                r = Y(t[0]) ? t[0].slice(1) : t[0],
                n = this.idMap.get(r);
            if (!n) throw Error(`Child state node '#${r}' does not exist on machine '${this.id}'`);
            return er(n, i);
        }
        get definition() {
            return this.root.definition;
        }
        toJSON() {
            return this.definition;
        }
        getPersistedSnapshot(e, t) {
            return (function (e, t) {
                let {
                        _nodes: i,
                        tags: r,
                        machine: n,
                        children: o,
                        context: a,
                        can: s,
                        hasTag: l,
                        matches: c,
                        getMeta: d,
                        toJSON: u,
                        ...h
                    } = e,
                    p = {};
                for (let e in o) {
                    let i = o[e];
                    p[e] = {
                        snapshot: i.getPersistedSnapshot(t),
                        src: i.src,
                        systemId: i.systemId,
                        syncSnapshot: i._syncSnapshot,
                    };
                }
                return {
                    ...h,
                    context: (function e(t) {
                        let i;
                        for (let r in t) {
                            let n = t[r];
                            if (n && "object" == typeof n)
                                if ("sessionId" in n && "send" in n && "ref" in n)
                                    (i ??= Array.isArray(t) ? t.slice() : { ...t })[r] = { xstate$$type: 1, id: n.id };
                                else {
                                    let o = e(n);
                                    o !== n && ((i ??= Array.isArray(t) ? t.slice() : { ...t })[r] = o);
                                }
                        }
                        return i ?? t;
                    })(a),
                    children: p,
                    historyValue: (function (e) {
                        if ("object" != typeof e || null === e) return {};
                        let t = {};
                        for (let i in e) {
                            let r = e[i];
                            Array.isArray(r) && (t[i] = r.map((e) => ({ id: e.id })));
                        }
                        return t;
                    })(h.historyValue),
                };
            })(e, t);
        }
        restoreSnapshot(e, t) {
            let i = {},
                r = e.children;
            Object.keys(r).forEach((e) => {
                let n = r[e],
                    o = n.snapshot,
                    a = n.src,
                    s = "string" == typeof a ? L(this, a) : a;
                s &&
                    (i[e] = k(s, {
                        id: e,
                        parent: t.self,
                        syncSnapshot: n.syncSnapshot,
                        snapshot: o,
                        src: a,
                        systemId: n.systemId,
                    }));
            });
            let n = (function (e, t) {
                    if (!t || "object" != typeof t) return {};
                    let i = {};
                    for (let r in t)
                        for (let n of t[r]) {
                            let t = (function (e, t) {
                                if (t instanceof eH) return t;
                                try {
                                    return e.machine.getStateNodeById(t.id);
                                } catch {}
                            })(e, n);
                            t && ((i[r] ??= []), i[r].push(t));
                        }
                    return i;
                })(this.root, e.historyValue),
                o = eb({ ...e, children: i, _nodes: Array.from(W(en(this.root, e.value))), historyValue: n }, this),
                a = new Set();
            return (
                !(function e(t, i) {
                    if (!a.has(t))
                        for (let r in (a.add(t), t)) {
                            let n = t[r];
                            if (n && "object" == typeof n) {
                                if ("xstate$$type" in n && 1 === n.xstate$$type) {
                                    t[r] = i[n.id];
                                    continue;
                                }
                                e(n, i);
                            }
                        }
                })(o.context, i),
                o
            );
        }
    };
function eB(e, t, i, r, { event: n }) {
    return [t, { event: "function" == typeof n ? n(i, r) : n }, void 0];
}
function e$(e, { event: t }) {
    e.defer(() => e.emit(t));
}
function ez(e) {
    function t(e, t) {}
    return (t.type = "xstate.emit"), (t.event = e), (t.resolve = eB), (t.execute = e$), t;
}
let ej = (((o = {}).Parent = "#_parent"), (o.Internal = "#_internal"), o);
function eZ(e, t, i, r, { to: n, event: o, id: a, delay: s }, l) {
    let c,
        d,
        u = t.machine.implementations.delays;
    if ("string" == typeof o)
        throw Error(`Only event objects may be used with sendTo; use sendTo({ type: "${o}" }) instead`);
    let h = "function" == typeof o ? o(i, r) : o;
    if ("string" == typeof s) {
        let e = u && u[s];
        c = "function" == typeof e ? e(i, r) : e;
    } else c = "function" == typeof s ? s(i, r) : s;
    let p = "function" == typeof n ? n(i, r) : n;
    if ("string" == typeof p) {
        if (
            !(d =
                p === ej.Parent
                    ? e.self._parent
                    : p === ej.Internal
                      ? e.self
                      : p.startsWith("#_")
                        ? t.children[p.slice(2)]
                        : l.deferredActorIds?.includes(p)
                          ? p
                          : t.children[p])
        )
            throw Error(`Unable to send event to actor '${p}' from machine '${t.machine.id}'.`);
    } else d = p || e.self;
    return [t, { to: d, targetId: "string" == typeof p ? p : void 0, event: h, id: a, delay: c }, void 0];
}
function eW(e, t, i) {
    "string" == typeof i.to && (i.to = t.children[i.to]);
}
function eK(e, t) {
    e.defer(() => {
        let { to: i, event: r, delay: n, id: o } = t;
        "number" == typeof n
            ? e.system.scheduler.schedule(e.self, i, r, n, o)
            : e.system._relay(e.self, i, "xstate.error" === r.type ? d(e.self.id, r.data) : r);
    });
}
function eG(e, t, i) {
    function r(e, t) {}
    return (
        (r.type = "xstate.sendTo"),
        (r.to = e),
        (r.event = t),
        (r.id = i?.id),
        (r.delay = i?.delay),
        (r.resolve = eZ),
        (r.retryResolve = eW),
        (r.execute = eK),
        r
    );
}
function eq(e, t, i, r, { collect: n }) {
    let o = [],
        a = function (e) {
            o.push(e);
        };
    return (
        (a.assign = (...e) => {
            o.push(eR(...e));
        }),
        (a.cancel = (...e) => {
            o.push(A(...e));
        }),
        (a.raise = (...e) => {
            o.push(eI(...e));
        }),
        (a.sendTo = (...e) => {
            o.push(eG(...e));
        }),
        (a.sendParent = (...e) => {
            o.push(
                (function (e, t) {
                    return eG(ej.Parent, e, t);
                })(...e),
            );
        }),
        (a.spawnChild = (...e) => {
            o.push(D(...e));
        }),
        (a.stopChild = (...e) => {
            o.push(H(...e));
        }),
        (a.emit = (...e) => {
            o.push(ez(...e));
        }),
        n(
            {
                context: i.context,
                event: i.event,
                enqueue: a,
                check: (e) => $(e, t.context, i.event, t),
                self: e.self,
                system: e.system,
            },
            r,
        ),
        [t, void 0, o]
    );
}
function eY(e) {
    function t(e, t) {}
    return (t.type = "xstate.enqueueActions"), (t.collect = e), (t.resolve = eq), t;
}
function eQ(e, t, i, r, { value: n, label: o }) {
    return [t, { value: "function" == typeof n ? n(i, r) : n, label: o }, void 0];
}
function eX({ logger: e }, { value: t, label: i }) {
    i ? e(i, t) : e(t);
}
function eJ(e = ({ context: e, event: t }) => ({ context: e, event: t }), t) {
    function i(e, t) {}
    return (i.type = "xstate.log"), (i.value = e), (i.label = t), (i.resolve = eQ), (i.execute = eX), i;
}
