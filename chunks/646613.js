function i(l) {
    let { actor: t, mapState: d, createApi: i, instrumentation: e } = l;
    function c() {
        return t.getSnapshot();
    }
    function a() {
        return d(c());
    }
    let s = e?.getScreenName(c()),
        n = e?.getErrorName(c()),
        Z = e?.getErrorPayload(c()),
        b = i({
            actor: t,
            getSnapshot: c,
            trackElementClicked: e
                ? (l, t) => {
                      e.onElementClicked?.(e.moduleName, s, { element: l, action: t?.action, metadata: t?.metadata });
                  }
                : void 0,
            trackCaptureAttemptFinished: e
                ? (l) => {
                      e.onCaptureAttemptFinished?.(e.moduleName, s, { logs: l.logs });
                  }
                : void 0,
        });
    e?.onModuleOpened(e.moduleName),
        e && void 0 !== s && e.onScreenOpened(e.moduleName, s),
        e && void 0 !== n && e.onErrorTriggered(e.moduleName, n, s, Z);
    let m = e?.getInitialVisibility?.();
    e && !1 === m && e.onBackground?.(e.moduleName, s);
    let o = e?.subscribeVisibility?.((l) => {
            l !== m && ((m = l), l ? e.onForeground?.(e.moduleName, s) : e.onBackground?.(e.moduleName, s));
        }),
        u = e
            ? t.subscribe((l) => {
                  let t = e.getScreenName(l),
                      d = e.getErrorName(l),
                      i = e.getErrorPayload(l);
                  if (s === t) {
                      void 0 !== d && d !== n && e.onErrorTriggered(e.moduleName, d, s, i), (n = d), (Z = i);
                      return;
                  }
                  void 0 !== s && e.onScreenClosed(e.moduleName, s),
                      void 0 !== t && e.onScreenOpened(e.moduleName, t),
                      (s = t),
                      void 0 !== d && d !== n && e.onErrorTriggered(e.moduleName, d, t, i),
                      (n = d),
                      (Z = i);
              })
            : void 0,
        h = !1;
    return Object.defineProperties(
        {
            getState: a,
            subscribe: function (l) {
                let d = t.subscribe(() => {
                    l(a());
                });
                return () => d.unsubscribe();
            },
            stop() {
                h ||
                    ((h = !0),
                    u?.unsubscribe(),
                    o?.(),
                    e && void 0 !== s && e.onScreenClosed(e.moduleName, s),
                    (s = void 0),
                    (n = void 0),
                    (Z = void 0),
                    e?.onModuleClosed(e.moduleName),
                    t.stop());
            },
        },
        Object.getOwnPropertyDescriptors(b),
    );
}
d.d(t, {
    a: () => lg,
    c: () => k,
    i: () => lR,
    l: () => i,
    n: () => lA,
    o: () => v,
    r: () => lj,
    s: () => R,
    t: () =>
        function l({ schemas: t, actors: d, actions: i, guards: e, delays: c }) {
            return {
                assign: lj,
                sendTo: lA,
                raise: lz,
                log: l0,
                cancel: x,
                stopChild: O,
                enqueueActions: l$,
                emit: lH,
                spawnChild: j,
                createStateConfig: (l) => l,
                createAction: (l) => l,
                createMachine: (l) => new lE({ ...l, schemas: t }, { actors: d, actions: i, guards: e, delays: c }),
                extend: (a) =>
                    l({
                        schemas: t,
                        actors: d,
                        actions: { ...i, ...a.actions },
                        guards: { ...e, ...a.guards },
                        delays: { ...c, ...a.delays },
                    }),
            };
        },
});
var e,
    c,
    a = class {
        constructor(l) {
            (this._process = l), (this._active = !1), (this._current = null), (this._last = null);
        }
        start() {
            (this._active = !0), this.flush();
        }
        clear() {
            this._current && ((this._current.next = null), (this._last = this._current));
        }
        enqueue(l) {
            let t = { value: l, next: null };
            if (this._current) {
                (this._last.next = t), (this._last = t);
                return;
            }
            (this._current = t), (this._last = t), this._active && this.flush();
        }
        flush() {
            for (; this._current; ) {
                let l = this._current;
                this._process(l.value), (this._current = l.next);
            }
            this._last = null;
        }
    };
let s = "xstate.init",
    n = "xstate.stop";
function Z(l, t) {
    return { type: `xstate.done.state.${l}`, output: t };
}
function b(l, t) {
    return { type: `xstate.error.actor.${l}`, error: t, actorId: l };
}
function m(l) {
    return { type: s, input: l };
}
function o(l) {
    setTimeout(() => {
        throw l;
    });
}
let u = ("function" == typeof Symbol && Symbol.observable) || "@@observable";
function h(l) {
    if (M(l)) return l;
    let t = [],
        d = "";
    for (let i = 0; i < l.length; i++) {
        switch (l.charCodeAt(i)) {
            case 92:
                (d += l[i + 1]), i++;
                continue;
            case 46:
                t.push(d), (d = "");
                continue;
        }
        d += l[i];
    }
    return t.push(d), t;
}
function W(l) {
    var t;
    return (t = l) && "object" == typeof t && "machine" in t && "value" in t
        ? l.value
        : "string" != typeof l
          ? l
          : (function (l) {
                if (1 === l.length) return l[0];
                let t = {},
                    d = t;
                for (let t = 0; t < l.length - 1; t++)
                    if (t === l.length - 2) d[l[t]] = l[t + 1];
                    else {
                        let i = d;
                        (d = {}), (i[l[t]] = d);
                    }
                return t;
            })(h(l));
}
function G(l, t) {
    let d = {},
        i = Object.keys(l);
    for (let e = 0; e < i.length; e++) {
        let c = i[e];
        d[c] = t(l[c], c, l, e);
    }
    return d;
}
function p(l) {
    var t;
    return void 0 === l ? [] : M((t = l)) ? t : [t];
}
function N(l, t, d, i) {
    return "function" == typeof l ? l({ context: t, event: d, self: i }) : l;
}
function M(l) {
    return Array.isArray(l);
}
function X(l) {
    var t;
    return (M((t = l)) ? t : [t]).map((l) => (void 0 === l || "string" == typeof l ? { target: l } : l));
}
function r(l) {
    if (void 0 !== l && "" !== l) return p(l);
}
function y(l, t, d) {
    let i = "object" == typeof l,
        e = i ? l : void 0;
    return {
        next: (i ? l.next : l)?.bind(e),
        error: (i ? l.error : t)?.bind(e),
        complete: (i ? l.complete : d)?.bind(e),
    };
}
function Y(l, t) {
    let d = t.match(/^xstate\.invoke\.(\d+)\.(.*)/);
    if (!d) return l.implementations.actors[t];
    let [, i, e] = d,
        c = l.getStateNodeById(e).config.invoke;
    return (Array.isArray(c) ? c[i] : c).src;
}
function T(l, t) {
    return `${l.sessionId}.${t}`;
}
let V = 0,
    L = !1,
    I =
        (((e = {})[(e.NotStarted = 0)] = "NotStarted"),
        (e[(e.Running = 1)] = "Running"),
        (e[(e.Stopped = 2)] = "Stopped"),
        e),
    z = {
        clock: { setTimeout: (l, t) => setTimeout(l, t), clearTimeout: (l) => clearTimeout(l) },
        logger: console.log.bind(console),
        devTools: !1,
    };
var w = class {
    constructor(l, t) {
        (this.logic = l),
            (this._snapshot = void 0),
            (this.clock = void 0),
            (this.options = void 0),
            (this.id = void 0),
            (this.mailbox = new a(this._process.bind(this))),
            (this.observers = new Set()),
            (this.eventListeners = new Map()),
            (this.logger = void 0),
            (this._processingStatus = I.NotStarted),
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
        const d = { ...z, ...t },
            { clock: i, logger: e, parent: c, syncSnapshot: s, id: n, systemId: Z, inspect: b } = d;
        (this.system = c
            ? c.system
            : (function (l, t) {
                  let d = new Map(),
                      i = new Map(),
                      e = new WeakMap(),
                      c = new Set(),
                      a = {},
                      { clock: s, logger: n } = t,
                      Z = {
                          schedule: (l, t, d, i, e = Math.random().toString(36).slice(2)) => {
                              let c = { source: l, target: t, event: d, delay: i, id: e, startedAt: Date.now() },
                                  n = T(l, e);
                              (b._snapshot._scheduledEvents[n] = c),
                                  (a[n] = s.setTimeout(() => {
                                      delete a[n], delete b._snapshot._scheduledEvents[n], b._relay(l, t, d);
                                  }, i));
                          },
                          cancel: (l, t) => {
                              let d = T(l, t),
                                  i = a[d];
                              delete a[d], delete b._snapshot._scheduledEvents[d], void 0 !== i && s.clearTimeout(i);
                          },
                          cancelAll: (l) => {
                              for (let t in b._snapshot._scheduledEvents) {
                                  let d = b._snapshot._scheduledEvents[t];
                                  d.source === l && Z.cancel(l, d.id);
                              }
                          },
                      },
                      b = {
                          _snapshot: { _scheduledEvents: (t?.snapshot && t.snapshot.scheduler) ?? {} },
                          _bookId: () => `x:${V++}`,
                          _register: (l, t) => (d.set(l, t), l),
                          _unregister: (l) => {
                              d.delete(l.sessionId);
                              let t = e.get(l);
                              void 0 !== t && (i.delete(t), e.delete(l));
                          },
                          get: (l) => i.get(l),
                          getAll: () => Object.fromEntries(i.entries()),
                          _set: (l, t) => {
                              let d = i.get(l);
                              if (d && d !== t) throw Error(`Actor with system ID '${l}' already exists.`);
                              i.set(l, t), e.set(t, l);
                          },
                          inspect: (l) => {
                              let t = y(l);
                              return (
                                  c.add(t),
                                  {
                                      unsubscribe() {
                                          c.delete(t);
                                      },
                                  }
                              );
                          },
                          _sendInspectionEvent: (t) => {
                              if (!c.size) return;
                              let d = { ...t, rootId: l.sessionId };
                              c.forEach((l) => l.next?.(d));
                          },
                          _relay: (l, t, d) => {
                              b._sendInspectionEvent({ type: "@xstate.event", sourceRef: l, actorRef: t, event: d }),
                                  t._send(d);
                          },
                          scheduler: Z,
                          getSnapshot: () => ({ _scheduledEvents: { ...b._snapshot._scheduledEvents } }),
                          start: () => {
                              let l = b._snapshot._scheduledEvents;
                              for (let t in ((b._snapshot._scheduledEvents = {}), l)) {
                                  let { source: d, target: i, event: e, delay: c, id: a } = l[t];
                                  Z.schedule(d, i, e, c, a);
                              }
                          },
                          _clock: s,
                          _logger: n,
                      };
                  return b;
              })(this, { clock: i, logger: e })),
            b && !c && this.system.inspect(y(b)),
            (this.sessionId = this.system._bookId()),
            (this.id = n ?? this.sessionId),
            (this.logger = t?.logger ?? this.system._logger),
            (this.clock = t?.clock ?? this.system._clock),
            (this._parent = c),
            (this._syncSnapshot = s),
            (this.options = d),
            (this.src = d.src ?? l),
            (this.ref = this),
            (this._actorScope = {
                self: this,
                id: this.id,
                sessionId: this.sessionId,
                logger: this.logger,
                defer: (l) => {
                    this._deferred.push(l);
                },
                system: this.system,
                stopChild: (l) => {
                    if (l._parent !== this)
                        throw Error(`Cannot stop child actor ${l.id} of ${this.id} because it is not a child`);
                    l._stop();
                },
                emit: (l) => {
                    let t = this.eventListeners.get(l.type),
                        d = this.eventListeners.get("*");
                    if (t || d)
                        for (let i of [...(t ? t.values() : []), ...(d ? d.values() : [])])
                            try {
                                i(l);
                            } catch (l) {
                                o(l);
                            }
                },
                actionExecutor: (l) => {
                    let t = () => {
                        if (
                            (this._actorScope.system._sendInspectionEvent({
                                type: "@xstate.action",
                                actorRef: this,
                                action: { type: l.type, params: l.params },
                            }),
                            !l.exec)
                        )
                            return;
                        let t = L;
                        try {
                            (L = !0), l.exec(l.info, l.params);
                        } finally {
                            L = t;
                        }
                    };
                    this._processingStatus === I.Running ? t() : this._deferred.push(t);
                },
            }),
            (this.send = this.send.bind(this)),
            this.system._sendInspectionEvent({ type: "@xstate.actor", actorRef: this }),
            Z && ((this.systemId = Z), this.system._set(Z, this)),
            this._initState(t?.snapshot ?? t?.state),
            Z && "active" !== this._snapshot.status && this.system._unregister(this);
    }
    _initState(l) {
        try {
            this._snapshot = l
                ? this.logic.restoreSnapshot
                    ? this.logic.restoreSnapshot(l, this._actorScope)
                    : l
                : this.logic.getInitialSnapshot(this._actorScope, this.options?.input);
        } catch (l) {
            this._snapshot = { status: "error", output: void 0, error: l };
        }
    }
    update(l, t) {
        let d;
        for (this._snapshot = l; (d = this._deferred.shift()); )
            try {
                d();
            } catch (t) {
                (this._deferred.length = 0), (this._snapshot = { ...l, status: "error", error: t });
            }
        switch (this._snapshot.status) {
            case "active":
                for (let t of this.observers)
                    try {
                        t.next?.(l);
                    } catch (l) {
                        o(l);
                    }
                break;
            case "done":
                var i;
                for (let t of this.observers)
                    try {
                        t.next?.(l);
                    } catch (l) {
                        o(l);
                    }
                this._stopProcedure(),
                    this._complete(),
                    (this._doneEvent =
                        ((i = this.id), { type: `xstate.done.actor.${i}`, output: this._snapshot.output, actorId: i })),
                    this._parent && this.system._relay(this, this._parent, this._doneEvent);
                break;
            case "error":
                this._error(this._snapshot.error);
        }
        this.system._sendInspectionEvent({ type: "@xstate.snapshot", actorRef: this, event: t, snapshot: l });
    }
    subscribe(l, t, d) {
        let i = y(l, t, d);
        if (this._processingStatus !== I.Stopped) this.observers.add(i);
        else
            switch (this._snapshot.status) {
                case "done":
                    try {
                        i.complete?.();
                    } catch (l) {
                        o(l);
                    }
                    break;
                case "error": {
                    let l = this._snapshot.error;
                    if (i.error)
                        try {
                            i.error(l);
                        } catch (l) {
                            o(l);
                        }
                    else o(l);
                }
            }
        return {
            unsubscribe: () => {
                this.observers.delete(i);
            },
        };
    }
    on(l, t) {
        let d = this.eventListeners.get(l);
        d || ((d = new Set()), this.eventListeners.set(l, d));
        let i = t.bind(void 0);
        return (
            d.add(i),
            {
                unsubscribe: () => {
                    d.delete(i);
                },
            }
        );
    }
    start() {
        if (this._processingStatus === I.Running) return this;
        this._syncSnapshot &&
            this.subscribe({
                next: (l) => {
                    "active" === l.status &&
                        this.system._relay(this, this._parent, { type: `xstate.snapshot.${this.id}`, snapshot: l });
                },
                error: () => {},
            }),
            this.system._register(this.sessionId, this),
            this.systemId && this.system._set(this.systemId, this),
            (this._processingStatus = I.Running);
        let l = m(this.options.input);
        switch (
            (this.system._sendInspectionEvent({
                type: "@xstate.event",
                sourceRef: this._parent,
                actorRef: this,
                event: l,
            }),
            this._snapshot.status)
        ) {
            case "done":
                return this.update(this._snapshot, l), this;
            case "error":
                return this._error(this._snapshot.error), this;
        }
        if ((this._parent || this.system.start(), this.logic.start))
            try {
                this.logic.start(this._snapshot, this._actorScope);
            } catch (l) {
                return (this._snapshot = { ...this._snapshot, status: "error", error: l }), this._error(l), this;
            }
        return (
            this.update(this._snapshot, l), this.options.devTools && this.attachDevTools(), this.mailbox.start(), this
        );
    }
    _process(l) {
        let t, d;
        try {
            t = this.logic.transition(this._snapshot, l, this._actorScope);
        } catch (l) {
            d = { err: l };
        }
        if (d) {
            let { err: l } = d;
            (this._snapshot = { ...this._snapshot, status: "error", error: l }), this._error(l);
            return;
        }
        this.update(t, l), l.type === n && (this._stopProcedure(), this._complete());
    }
    _stop() {
        return (
            this._processingStatus === I.Stopped ||
                ((this.mailbox.clear(), this._processingStatus === I.NotStarted)
                    ? (this._processingStatus = I.Stopped)
                    : this.mailbox.enqueue({ type: n })),
            this
        );
    }
    stop() {
        if (this._parent) throw Error("A non-root actor cannot be stopped directly.");
        return this._stop();
    }
    _complete() {
        for (let l of this.observers)
            try {
                l.complete?.();
            } catch (l) {
                o(l);
            }
        this.observers.clear();
    }
    _reportError(l) {
        if (!this.observers.size) {
            this._parent || o(l);
            return;
        }
        let t = !1;
        for (let d of this.observers) {
            let i = d.error;
            t ||= !i;
            try {
                i?.(l);
            } catch (l) {
                o(l);
            }
        }
        this.observers.clear(), t && o(l);
    }
    _error(l) {
        this._stopProcedure(),
            this._reportError(l),
            this._parent && this.system._relay(this, this._parent, b(this.id, l));
    }
    _stopProcedure() {
        return (
            this._processingStatus !== I.Running ||
                (this.system.scheduler.cancelAll(this),
                this.mailbox.clear(),
                (this.mailbox = new a(this._process.bind(this))),
                (this._processingStatus = I.Stopped),
                this.system._unregister(this)),
            this
        );
    }
    _send(l) {
        this._processingStatus !== I.Stopped && this.mailbox.enqueue(l);
    }
    send(l) {
        this.system._relay(void 0, this, l);
    }
    attachDevTools() {
        let { devTools: l } = this.options;
        l &&
            ("function" == typeof l
                ? l
                : (l) => {
                      if ("u" < typeof window) return;
                      let t = (function () {
                          let l =
                              "u" > typeof globalThis
                                  ? globalThis
                                  : "u" > typeof self
                                    ? self
                                    : "u" > typeof window
                                      ? window
                                      : "u" > typeof global
                                        ? global
                                        : void 0;
                          if (l.__xstate__) return l.__xstate__;
                      })();
                      t && t.register(l);
                  })(this);
    }
    toJSON() {
        return { xstate$$type: 1, id: this.id };
    }
    getPersistedSnapshot(l) {
        return this.logic.getPersistedSnapshot(this._snapshot, l);
    }
    [u]() {
        return this;
    }
    getSnapshot() {
        return this._snapshot;
    }
};
function R(l, ...[t]) {
    return new w(l, t);
}
function S(l, t, d, i, { sendId: e }) {
    return [t, { sendId: "function" == typeof e ? e(d, i) : e }, void 0];
}
function C(l, t) {
    l.defer(() => {
        l.system.scheduler.cancel(l.self, t.sendId);
    });
}
function x(l) {
    function t(l, t) {}
    return (t.type = "xstate.cancel"), (t.sendId = l), (t.resolve = S), (t.execute = C), t;
}
function g(l, t, d, i, { id: e, systemId: c, src: a, input: s, syncSnapshot: n }) {
    let Z,
        b,
        m = "string" == typeof a ? Y(t.machine, a) : a,
        o = "function" == typeof e ? e(d) : e;
    return (
        m &&
            ((b = "function" == typeof s ? s({ context: t.context, event: d.event, self: l.self }) : s),
            (Z = R(m, { id: o, src: a, parent: l.self, syncSnapshot: n, systemId: c, input: b }))),
        [lV(t, { children: { ...t.children, [o]: Z } }), { id: e, systemId: c, actorRef: Z, src: a, input: b }, void 0]
    );
}
function D(l, { actorRef: t }) {
    t &&
        l.defer(() => {
            t._processingStatus !== I.Stopped && t.start();
        });
}
function j(...[l, { id: t, systemId: d, input: i, syncSnapshot: e = !1 } = {}]) {
    function c(l, t) {}
    return (
        (c.type = "xstate.spawnChild"),
        (c.id = t),
        (c.systemId = d),
        (c.src = l),
        (c.input = i),
        (c.syncSnapshot = e),
        (c.resolve = g),
        (c.execute = D),
        c
    );
}
function U(l, t, d, i, { actorRef: e }) {
    let c = "function" == typeof e ? e(d, i) : e,
        a = "string" == typeof c ? t.children[c] : c,
        s = t.children;
    return a && ((s = { ...s }), delete s[a.id]), [lV(t, { children: s }), a, void 0];
}
function F(l, t) {
    if (t) {
        if ((l.system._unregister(t), t._processingStatus !== I.Running)) return void l.stopChild(t);
        l.defer(() => {
            l.stopChild(t);
        });
    }
}
function O(l) {
    function t(l, t) {}
    return (t.type = "xstate.stopChild"), (t.actorRef = l), (t.resolve = U), (t.execute = F), t;
}
function J(l, { context: t, event: d }, { guards: i }) {
    return !K(i[0], t, d, l);
}
function k(l) {
    function t(l, t) {
        return !1;
    }
    return (t.check = J), (t.guards = [l]), t;
}
function E(l, { context: t, event: d }, { guards: i }) {
    return i.every((i) => K(i, t, d, l));
}
function v(l) {
    function t(l, t) {
        return !1;
    }
    return (t.check = E), (t.guards = l), t;
}
function K(l, t, d, i) {
    let { machine: e } = i,
        c = "function" == typeof l,
        a = c ? l : e.implementations.guards["string" == typeof l ? l : l.type];
    if (!c && !a) throw Error(`Guard '${"string" == typeof l ? l : l.type}' is not implemented.'.`);
    if ("function" != typeof a) return K(a, t, d, i);
    let s = { context: t, event: d },
        n =
            c || "string" == typeof l
                ? void 0
                : "params" in l
                  ? "function" == typeof l.params
                      ? l.params({ context: t, event: d })
                      : l.params
                  : void 0;
    return "check" in a ? a.check(i, s, a) : a(s, n);
}
let H = (l) => "atomic" === l.type || "final" === l.type;
function Q(l) {
    return Object.values(l.states).filter((l) => "history" !== l.type);
}
function P(l, t) {
    let d = [];
    if (t === l) return d;
    let i = l.parent;
    for (; i && i !== t; ) d.push(i), (i = i.parent);
    return d;
}
function f(l) {
    let t = new Set(l),
        d = B(t);
    for (let l of t)
        if ("compound" !== l.type || (d.get(l) && d.get(l).length)) {
            if ("parallel" === l.type) {
                for (let d of Q(l)) if ("history" !== d.type && !t.has(d)) for (let l of ld(d)) t.add(l);
            }
        } else ld(l).forEach((l) => t.add(l));
    for (let l of t) {
        let d = l.parent;
        for (; d; ) t.add(d), (d = d.parent);
    }
    return t;
}
function B(l) {
    let t = new Map();
    for (let d of l)
        t.has(d) || t.set(d, []), d.parent && (t.has(d.parent) || t.set(d.parent, []), t.get(d.parent).push(d));
    return t;
}
function A(l, t) {
    return (function l(t, d) {
        let i = d.get(t);
        if (!i) return {};
        if ("compound" === t.type) {
            let l = i[0];
            if (!l) return {};
            if (H(l)) return l.key;
        }
        let e = {};
        for (let t of i) e[t.key] = l(t, d);
        return e;
    })(l, B(f(t)));
}
function _(l, t) {
    return "compound" === t.type
        ? Q(t).some((t) => "final" === t.type && l.has(t))
        : "parallel" === t.type
          ? Q(t).every((t) => _(l, t))
          : "final" === t.type;
}
let $ = (l) => "#" === l[0];
function q(l, t, d) {
    let i = r(d.target),
        e = d.reenter ?? !1,
        c = (function (l, t) {
            if (void 0 !== t)
                return t.map((t) => {
                    if ("string" != typeof t) return t;
                    if ($(t)) return l.machine.getStateNodeById(t);
                    let d = "." === t[0];
                    if (d && !l.parent) return lc(l, t.slice(1));
                    let i = d ? l.key + t : t;
                    if (l.parent)
                        try {
                            return lc(l.parent, i);
                        } catch (t) {
                            throw Error(`Invalid transition definition for state node '${l.id}':
${t.message}`);
                        }
                    throw Error(
                        `Invalid target: "${t}" is not a valid target from the root node. Did you mean ".${t}"?`,
                    );
                });
        })(l, i),
        a = {
            ...d,
            actions: p(d.actions),
            guard: d.guard,
            target: c,
            source: l,
            reenter: e,
            eventType: t,
            toJSON: () => ({ ...a, source: `#${l.id}`, target: c ? c.map((l) => `#${l.id}`) : void 0 }),
        };
    return a;
}
function ll(l) {
    let t = r(l.config.target);
    return t ? { target: t.map((t) => ("string" == typeof t ? lc(l.parent, t) : t)) } : l.parent.initial;
}
function lt(l) {
    return "history" === l.type;
}
function ld(l) {
    let t = li(l);
    for (let d of t) for (let i of P(d, l)) t.add(i);
    return t;
}
function li(l) {
    let t = new Set();
    return (
        !(function l(d) {
            if (!t.has(d)) {
                if ((t.add(d), "compound" === d.type)) l(d.initial.target[0]);
                else if ("parallel" === d.type) for (let t of Q(d)) l(t);
            }
        })(l),
        t
    );
}
function le(l, t) {
    if ($(t)) return l.machine.getStateNodeById(t);
    if (!l.states) throw Error(`Unable to retrieve child state '${t}' from '${l.id}'; no child states exist.`);
    let d = l.states[t];
    if (!d) throw Error(`Child state '${t}' does not exist on '${l.id}'`);
    return d;
}
function lc(l, t) {
    if ("string" == typeof t && $(t))
        try {
            return l.machine.getStateNodeById(t);
        } catch {}
    let d = h(t).slice(),
        i = l;
    for (; d.length; ) {
        let l = d.shift();
        if (!l.length) break;
        i = le(i, l);
    }
    return i;
}
function la(l, t) {
    if ("string" == typeof t) {
        let d = l.states[t];
        if (!d) throw Error(`State '${t}' does not exist on '${l.id}'`);
        return [l, d];
    }
    let d = Object.keys(t),
        i = d.map((t) => le(l, t)).filter(Boolean);
    return [l.machine.root, l].concat(
        i,
        d.reduce((d, i) => {
            let e = le(l, i);
            if (!e) return d;
            let c = la(e, t[i]);
            return d.concat(c);
        }, []),
    );
}
function ls(l, t) {
    let d = l;
    for (; d.parent && d.parent !== t; ) d = d.parent;
    return d.parent === t;
}
function ln(l, t, d) {
    let i = new Set();
    for (let e of l) {
        let l = !1,
            c = new Set();
        for (let a of i)
            if (
                (function (l, t) {
                    let d = new Set(l),
                        i = new Set(t);
                    for (let l of d) if (i.has(l)) return !0;
                    for (let l of i) if (d.has(l)) return !0;
                    return !1;
                })(lm([e], t, d), lm([a], t, d))
            )
                if (ls(e.source, a.source)) c.add(a);
                else {
                    l = !0;
                    break;
                }
        if (!l) {
            for (let l of c) i.delete(l);
            i.add(e);
        }
    }
    return Array.from(i);
}
function lZ(l, t) {
    if (!l.target) return [];
    let d = new Set();
    for (let i of l.target)
        if (lt(i))
            if (t[i.id]) for (let l of t[i.id]) d.add(l);
            else for (let l of lZ(ll(i), t)) d.add(l);
        else d.add(i);
    return [...d];
}
function lb(l, t) {
    let d = lZ(l, t);
    if (!d) return;
    if (!l.reenter && d.every((t) => t === l.source || ls(t, l.source))) return l.source;
    let i = (function (l) {
        let [t, ...d] = l;
        for (let l of P(t, void 0)) if (d.every((t) => ls(t, l))) return l;
    })(d.concat(l.source));
    return i || (l.reenter ? void 0 : l.source.machine.root);
}
function lm(l, t, d) {
    let i = new Set();
    for (let e of l)
        if (e.target?.length) {
            let l = lb(e, d);
            for (let d of (e.reenter && e.source === l && i.add(l), t)) ls(d, l) && i.add(d);
        }
    return [...i];
}
function lo(l, t, d, i, e, c) {
    if (!l.length) return t;
    let a = new Set(t._nodes),
        s = t.historyValue,
        n = ln(l, a, s),
        b = t;
    e ||
        ([b, s] = (function (l, t, d, i, e, c, a, s) {
            let n,
                Z = l,
                b = lm(i, e, c);
            for (let l of (b.sort((l, t) => t.order - l.order), b))
                for (let t of (function (l) {
                    return Object.keys(l.states)
                        .map((t) => l.states[t])
                        .filter((l) => "history" === l.type);
                })(l)) {
                    let d;
                    (d = "deep" === t.history ? (t) => H(t) && ls(t, l) : (t) => t.parent === l),
                        ((n ??= { ...c })[t.id] = Array.from(e).filter(d));
                }
            for (let l of b) (Z = lW(Z, t, d, [...l.exit, ...l.invoke.map((l) => O(l.id))], a, void 0)), e.delete(l);
            return [Z, n || c];
        })(b, i, d, n, a, s, c, d.actionExecutor)),
        (b = (function (l, t, d, i, e, c, a, s) {
            let n = l,
                b = new Set(),
                m = new Set();
            (function (l, t, d, i) {
                for (let e of l) {
                    let l = lb(e, t);
                    for (let c of e.target || [])
                        !lt(c) && (e.source !== c || e.source !== l || e.reenter) && (i.add(c), d.add(c)),
                            lu(c, t, d, i);
                    for (let c of lZ(e, t)) {
                        let a = P(c, l);
                        l?.type === "parallel" && a.push(l), lh(i, t, d, a, !e.source.parent && e.reenter ? void 0 : l);
                    }
                }
            })(i, a, m, b),
                s && m.add(l.machine.root);
            let o = new Set();
            for (let l of [...b].sort((l, t) => l.order - t.order)) {
                e.add(l);
                let i = [];
                for (let t of (i.push(...l.entry), l.invoke)) i.push(j(t.src, { ...t, syncSnapshot: !!t.onSnapshot }));
                if (m.has(l)) {
                    let t = l.initial.actions;
                    i.push(...t);
                }
                if (
                    ((n = lW(
                        n,
                        t,
                        d,
                        i,
                        c,
                        l.invoke.map((l) => l.id),
                    )),
                    "final" === l.type)
                ) {
                    let i = l.parent,
                        a = i?.type === "parallel" ? i : i?.parent,
                        s = a || l;
                    for (
                        i?.type === "compound" &&
                        c.push(Z(i.id, void 0 !== l.output ? N(l.output, n.context, t, d.self) : void 0));
                        a?.type === "parallel" && !o.has(a) && _(e, a);
                    )
                        o.add(a), c.push(Z(a.id)), (s = a), (a = a.parent);
                    if (a) continue;
                    n = lV(n, {
                        status: "done",
                        output: (function (l, t, d, i, e) {
                            if (void 0 === i.output) return;
                            let c = Z(
                                e.id,
                                void 0 !== e.output && e.parent ? N(e.output, l.context, t, d.self) : void 0,
                            );
                            return N(i.output, l.context, c, d.self);
                        })(n, t, d, n.machine.root, s),
                    });
                }
            }
            return n;
        })(
            (b = lW(
                b,
                i,
                d,
                n.flatMap((l) => l.actions),
                c,
                void 0,
            )),
            i,
            d,
            n,
            a,
            c,
            s,
            e,
        ));
    let m = [...a];
    "done" === b.status &&
        (b = lW(
            b,
            i,
            d,
            m.sort((l, t) => t.order - l.order).flatMap((l) => l.exit),
            c,
            void 0,
        ));
    try {
        if (
            s === t.historyValue &&
            (function (l, t) {
                if (l.length !== t.size) return !1;
                for (let d of l) if (!t.has(d)) return !1;
                return !0;
            })(t._nodes, a)
        )
            return b;
        return lV(b, { _nodes: m, historyValue: s });
    } catch (l) {
        throw l;
    }
}
function lu(l, t, d, i) {
    var e, c, a, s;
    if (lt(l))
        if (t[l.id]) {
            let a = t[l.id];
            for (let l of a) i.add(l), lu(l, t, d, i);
            for (let s of a) {
                (e = s), (c = l.parent), lh(i, t, d, P(e, c));
            }
        } else {
            let e = ll(l);
            for (let c of e.target) i.add(c), e === l.parent?.initial && d.add(l.parent), lu(c, t, d, i);
            for (let c of e.target) {
                (a = c), (s = l.parent), lh(i, t, d, P(a, s));
            }
        }
    else if ("compound" === l.type) {
        let [e] = l.initial.target;
        lt(e) || (i.add(e), d.add(e)), lu(e, t, d, i), lh(i, t, d, P(e, l));
    } else if ("parallel" === l.type)
        for (let e of Q(l).filter((l) => !lt(l)))
            [...i].some((l) => ls(l, e)) || (lt(e) || (i.add(e), d.add(e)), lu(e, t, d, i));
}
function lh(l, t, d, i, e) {
    for (let c of i)
        if (((!e || ls(c, e)) && l.add(c), "parallel" === c.type))
            for (let i of Q(c).filter((l) => !lt(l))) [...l].some((l) => ls(l, i)) || (l.add(i), lu(i, t, d, l));
}
function lW(l, t, d, i, e, c) {
    let a = c ? [] : void 0,
        s = (function l(t, d, i, e, c, a) {
            let { machine: s } = t,
                n = t;
            for (let t of e) {
                var Z;
                let e = "function" == typeof t,
                    b = e ? t : ((Z = "string" == typeof t ? t : t.type), s.implementations.actions[Z]),
                    m = { context: n.context, event: d, self: i.self, system: i.system },
                    o =
                        e || "string" == typeof t
                            ? void 0
                            : "params" in t
                              ? "function" == typeof t.params
                                  ? t.params({ context: n.context, event: d })
                                  : t.params
                              : void 0;
                if (!b || !("resolve" in b)) {
                    i.actionExecutor({
                        type: "string" == typeof t ? t : "object" == typeof t ? t.type : t.name || "(anonymous)",
                        info: m,
                        params: o,
                        exec: b,
                    });
                    continue;
                }
                let [u, h, W] = b.resolve(i, n, m, o, b, c);
                (n = u),
                    "retryResolve" in b && a?.push([b, h]),
                    "execute" in b &&
                        i.actionExecutor({ type: b.type, info: m, params: h, exec: b.execute.bind(null, i, h) }),
                    W && (n = l(n, d, i, W, c, a));
            }
            return n;
        })(l, t, d, i, { internalQueue: e, deferredActorIds: c }, a);
    return (
        a?.forEach(([l, t]) => {
            l.retryResolve(d, s, t);
        }),
        s
    );
}
function lG(l, t, d, i) {
    let e = l,
        c = [];
    function a(l, t, i) {
        d.system._sendInspectionEvent({
            type: "@xstate.microstep",
            actorRef: d.self,
            event: t,
            snapshot: l,
            _transitions: i,
        }),
            c.push(l);
    }
    if (t.type === n) return a((e = lV(lp(e, t, d), { status: "stopped" })), t, []), { snapshot: e, microstates: c };
    let Z = t;
    if (Z.type !== s) {
        let t = Z,
            s = t.type.startsWith("xstate.error.actor"),
            n = lN(t, e);
        if (s && !n.length)
            return a((e = lV(l, { status: "error", error: t.error })), t, []), { snapshot: e, microstates: c };
        a((e = lo(n, l, d, Z, !1, i)), t, n);
    }
    let b = !0;
    for (; "active" === e.status; ) {
        let l = b
                ? (function (l, t) {
                      let d = new Set();
                      for (let i of l._nodes.filter(H))
                          l: for (let e of [i].concat(P(i, void 0)))
                              if (e.always) {
                                  for (let i of e.always)
                                      if (void 0 === i.guard || K(i.guard, l.context, t, l)) {
                                          d.add(i);
                                          break l;
                                      }
                              }
                      return ln(Array.from(d), new Set(l._nodes), l.historyValue);
                  })(e, Z)
                : [],
            t = l.length ? e : void 0;
        if (!l.length) {
            if (!i.length) break;
            l = lN((Z = i.shift()), e);
        }
        (b = (e = lo(l, e, d, Z, !1, i)) !== t), a(e, Z, l);
    }
    return "active" !== e.status && lp(e, Z, d), { snapshot: e, microstates: c };
}
function lp(l, t, d) {
    return lW(
        l,
        t,
        d,
        Object.values(l.children).map((l) => O(l)),
        [],
        void 0,
    );
}
function lN(l, t) {
    return t.machine.getTransitionData(t, l);
}
let lM = function (l) {
        return (function l(t, d) {
            let i = W(t),
                e = W(d);
            return "string" == typeof e
                ? "string" == typeof i && e === i
                : "string" == typeof i
                  ? i in e
                  : Object.keys(i).every((t) => t in e && l(i[t], e[t]));
        })(l, this.value);
    },
    lX = function (l) {
        return this.tags.has(l);
    },
    lr = function (l) {
        let t = this.machine.getTransitionData(this, l);
        return !!t?.length && t.some((l) => void 0 !== l.target || l.actions.length);
    },
    ly = function () {
        let { _nodes: l, tags: t, machine: d, getMeta: i, toJSON: e, can: c, hasTag: a, matches: s, ...n } = this;
        return { ...n, tags: Array.from(t) };
    },
    lY = function () {
        return this._nodes.reduce((l, t) => (void 0 !== t.meta && (l[t.id] = t.meta), l), {});
    };
function lT(l, t) {
    return {
        status: l.status,
        output: l.output,
        error: l.error,
        machine: t,
        context: l.context,
        _nodes: l._nodes,
        value: A(t.root, l._nodes),
        tags: new Set(l._nodes.flatMap((l) => l.tags)),
        children: l.children,
        historyValue: l.historyValue || {},
        matches: lM,
        hasTag: lX,
        can: lr,
        getMeta: lY,
        toJSON: ly,
    };
}
function lV(l, t = {}) {
    return lT({ ...l, ...t }, l.machine);
}
function lL(l, t, d, i, { event: e, id: c, delay: a }, { internalQueue: s }) {
    let n,
        Z = t.machine.implementations.delays;
    if ("string" == typeof e)
        throw Error(`Only event objects may be used with raise; use raise({ type: "${e}" }) instead`);
    let b = "function" == typeof e ? e(d, i) : e;
    if ("string" == typeof a) {
        let l = Z && Z[a];
        n = "function" == typeof l ? l(d, i) : l;
    } else n = "function" == typeof a ? a(d, i) : a;
    return "number" != typeof n && s.push(b), [t, { event: b, id: c, delay: n }, void 0];
}
function lI(l, t) {
    let { event: d, delay: i, id: e } = t;
    if ("number" == typeof i)
        return void l.defer(() => {
            let t = l.self;
            l.system.scheduler.schedule(t, t, d, i, e);
        });
}
function lz(l, t) {
    function d(l, t) {}
    return (
        (d.type = "xstate.raise"),
        (d.event = l),
        (d.id = t?.id),
        (d.delay = t?.delay),
        (d.resolve = lL),
        (d.execute = lI),
        d
    );
}
let lw = new WeakMap();
function lR(l) {
    return {
        config: l,
        start: (t, d) => {
            let { self: i, system: e, emit: c } = d,
                a = { receivers: void 0, dispose: void 0 };
            lw.set(i, a),
                (a.dispose = l({
                    input: t.input,
                    system: e,
                    self: i,
                    sendBack: (l) => {
                        "stopped" !== i.getSnapshot().status && i._parent && e._relay(i, i._parent, l);
                    },
                    receive: (l) => {
                        (a.receivers ??= new Set()), a.receivers.add(l);
                    },
                    emit: c,
                }));
        },
        transition: (l, t, d) => {
            let i = lw.get(d.self);
            return (
                t.type === n
                    ? ((l = { ...l, status: "stopped", error: void 0 }), i.dispose?.())
                    : i.receivers?.forEach((l) => l(t)),
                l
            );
        },
        getInitialSnapshot: (l, t) => ({ status: "active", output: void 0, error: void 0, input: t }),
        getPersistedSnapshot: (l) => l,
        restoreSnapshot: (l) => l,
    };
}
let lS = "xstate.promise.resolve",
    lC = "xstate.promise.reject",
    lx = new WeakMap();
function lg(l) {
    return {
        config: l,
        transition: (l, t, d) => {
            if ("active" !== l.status) return l;
            switch (t.type) {
                case lS: {
                    let d = t.data;
                    return { ...l, status: "done", output: d, input: void 0 };
                }
                case lC:
                    return { ...l, status: "error", error: t.data, input: void 0 };
                case n:
                    return lx.get(d.self)?.abort(), { ...l, status: "stopped", input: void 0 };
                default:
                    return l;
            }
        },
        start: (t, { self: d, system: i, emit: e }) => {
            if ("active" !== t.status) return;
            let c = new AbortController();
            lx.set(d, c),
                Promise.resolve(l({ input: t.input, system: i, self: d, signal: c.signal, emit: e })).then(
                    (l) => {
                        "active" === d.getSnapshot().status && (lx.delete(d), i._relay(d, d, { type: lS, data: l }));
                    },
                    (l) => {
                        "active" === d.getSnapshot().status && (lx.delete(d), i._relay(d, d, { type: lC, data: l }));
                    },
                );
        },
        getInitialSnapshot: (l, t) => ({ status: "active", output: void 0, error: void 0, input: t }),
        getPersistedSnapshot: (l) => l,
        restoreSnapshot: (l) => l,
    };
}
function lD(l, t, d, i, { assignment: e }) {
    if (!t.context)
        throw Error("Cannot assign to undefined `context`. Ensure that `context` is defined in the machine config.");
    let c = {},
        a = {
            context: t.context,
            event: d.event,
            spawn: (function (l, { machine: t, context: d }, i, e) {
                return (c, a) => {
                    let s = ((c, a) => {
                        if ("string" != typeof c)
                            return R(c, {
                                id: a?.id,
                                parent: l.self,
                                syncSnapshot: a?.syncSnapshot,
                                input: a?.input,
                                src: c,
                                systemId: a?.systemId,
                            });
                        {
                            let s = Y(t, c);
                            if (!s) throw Error(`Actor logic '${c}' not implemented in machine '${t.id}'`);
                            let n = R(s, {
                                id: a?.id,
                                parent: l.self,
                                syncSnapshot: a?.syncSnapshot,
                                input:
                                    "function" == typeof a?.input
                                        ? a.input({ context: d, event: i, self: l.self })
                                        : a?.input,
                                src: c,
                                systemId: a?.systemId,
                            });
                            return (e[n.id] = n), n;
                        }
                    })(c, a);
                    return (
                        (e[s.id] = s),
                        l.defer(() => {
                            s._processingStatus !== I.Stopped && s.start();
                        }),
                        s
                    );
                };
            })(l, t, d.event, c),
            self: l.self,
            system: l.system,
        },
        s = {};
    if ("function" == typeof e) s = e(a, i);
    else
        for (let l of Object.keys(e)) {
            let t = e[l];
            s[l] = "function" == typeof t ? t(a, i) : t;
        }
    return [
        lV(t, {
            context: Object.assign({}, t.context, s),
            children: Object.keys(c).length ? { ...t.children, ...c } : t.children,
        }),
        void 0,
        void 0,
    ];
}
function lj(l) {
    function t(l, t) {}
    return (t.type = "xstate.assign"), (t.assignment = l), (t.resolve = lD), t;
}
let lU = new WeakMap();
function lF(l, t, d) {
    let i = lU.get(l);
    return i ? t in i || (i[t] = d()) : ((i = { [t]: d() }), lU.set(l, i)), i[t];
}
let lO = {},
    lJ = (l) =>
        "string" == typeof l
            ? { type: l }
            : "function" == typeof l
              ? "resolve" in l
                  ? { type: l.type }
                  : { type: l.name }
              : l;
var lk = class l {
        constructor(t, d) {
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
                (this.parent = d._parent),
                (this.key = d._key),
                (this.machine = d._machine),
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
                    ? G(this.config.states, (t, d) => new l(t, { _parent: this, _key: d, _machine: this.machine }))
                    : lO),
                "compound" === this.type && !this.config.initial)
            )
                throw Error(
                    `No initial state specified for compound state node "#${this.id}". Try adding { initial: "${Object.keys(this.states)[0]}" } to the state config.`,
                );
            (this.history = !0 === this.config.history ? "shallow" : this.config.history || !1),
                (this.entry = p(this.config.entry).slice()),
                (this.exit = p(this.config.exit).slice()),
                (this.meta = this.config.meta),
                (this.output = "final" !== this.type && this.parent ? void 0 : this.config.output),
                (this.tags = p(t.tags).slice());
        }
        _initialize() {
            (this.transitions = (function (l) {
                let t = new Map();
                if (l.config.on)
                    for (let d of Object.keys(l.config.on)) {
                        if ("" === d)
                            throw Error(
                                'Null events ("") cannot be specified as a transition key. Use `always: { ... }` instead.',
                            );
                        let i = l.config.on[d];
                        t.set(
                            d,
                            X(i).map((t) => q(l, d, t)),
                        );
                    }
                if (l.config.onDone) {
                    let d = `xstate.done.state.${l.id}`;
                    t.set(
                        d,
                        X(l.config.onDone).map((t) => q(l, d, t)),
                    );
                }
                for (let d of l.invoke) {
                    if (d.onDone) {
                        let i = `xstate.done.actor.${d.id}`;
                        t.set(
                            i,
                            X(d.onDone).map((t) => q(l, i, t)),
                        );
                    }
                    if (d.onError) {
                        let i = `xstate.error.actor.${d.id}`;
                        t.set(
                            i,
                            X(d.onError).map((t) => q(l, i, t)),
                        );
                    }
                    if (d.onSnapshot) {
                        let i = `xstate.snapshot.${d.id}`;
                        t.set(
                            i,
                            X(d.onSnapshot).map((t) => q(l, i, t)),
                        );
                    }
                }
                for (let d of l.after) {
                    let l = t.get(d.eventType);
                    l || ((l = []), t.set(d.eventType, l)), l.push(d);
                }
                return t;
            })(this)),
                this.config.always && (this.always = X(this.config.always).map((l) => q(this, "", l))),
                Object.keys(this.states).forEach((l) => {
                    this.states[l]._initialize();
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
                          actions: this.initial.actions.map(lJ),
                          eventType: null,
                          reenter: !1,
                          toJSON: () => ({
                              target: this.initial.target.map((l) => `#${l.id}`),
                              source: `#${this.id}`,
                              actions: this.initial.actions.map(lJ),
                              eventType: null,
                          }),
                      }
                    : void 0,
                history: this.history,
                states: G(this.states, (l) => l.definition),
                on: this.on,
                transitions: [...this.transitions.values()].flat().map((l) => ({ ...l, actions: l.actions.map(lJ) })),
                entry: this.entry.map(lJ),
                exit: this.exit.map(lJ),
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
            return lF(this, "invoke", () =>
                p(this.config.invoke).map((l, t) => {
                    var d, i;
                    let { src: e, systemId: c } = l,
                        a = l.id ?? ((d = this.id), `${t}.${d}`),
                        s = "string" == typeof e ? e : `xstate.invoke.${((i = this.id), `${t}.${i}`)}`;
                    return {
                        ...l,
                        src: s,
                        id: a,
                        systemId: c,
                        toJSON() {
                            let { onDone: t, onError: d, ...i } = l;
                            return { ...i, type: "xstate.invoke", src: s, id: a };
                        },
                    };
                }),
            );
        }
        get on() {
            return lF(this, "on", () =>
                [...this.transitions]
                    .flatMap(([l, t]) => t.map((t) => [l, t]))
                    .reduce((l, [t, d]) => ((l[t] = l[t] || []), l[t].push(d), l), {}),
            );
        }
        get after() {
            return lF(this, "delayedTransitions", () => {
                var l;
                let t;
                return (
                    (l = this),
                    (t = l.config.after)
                        ? Object.keys(t)
                              .flatMap((d) => {
                                  var i;
                                  let e,
                                      c,
                                      a = t[d],
                                      s = Number.isNaN(+d) ? d : +d,
                                      n =
                                          ((i = l.id),
                                          (c = (e = { type: `xstate.after.${s}.${i}` }).type),
                                          l.entry.push(lz(e, { id: c, delay: s })),
                                          l.exit.push(x(c)),
                                          c);
                                  return p("string" == typeof a ? { target: a } : a).map((l) => ({
                                      ...l,
                                      event: n,
                                      delay: s,
                                  }));
                              })
                              .map((t) => {
                                  let { delay: d } = t;
                                  return { ...q(l, t.event, t), delay: d };
                              })
                        : []
                );
            });
        }
        get initial() {
            return lF(this, "initial", () =>
                (function (l, t) {
                    let d = "string" == typeof t ? l.states[t] : t ? l.states[t.target] : void 0;
                    if (!d && t) throw Error(`Initial state node "${t}" not found on parent state node #${l.id}`);
                    let i = {
                        source: l,
                        actions: t && "string" != typeof t ? p(t.actions) : [],
                        eventType: null,
                        reenter: !1,
                        target: d ? [d] : [],
                        toJSON: () => ({ ...i, source: `#${l.id}`, target: d ? [`#${d.id}`] : [] }),
                    };
                    return i;
                })(this, this.config.initial),
            );
        }
        next(l, t) {
            let d,
                i = t.type,
                e = [];
            for (let c of lF(this, `candidates-${i}`, () => {
                var l;
                return (
                    (l = this),
                    l.transitions.get(i) ||
                        [...l.transitions.keys()]
                            .filter((l) => {
                                if ("*" === l) return !0;
                                if (!l.endsWith(".*")) return !1;
                                let t = l.split("."),
                                    d = i.split(".");
                                for (let l = 0; l < t.length; l++) {
                                    let i = t[l],
                                        e = d[l];
                                    if ("*" === i) return l === t.length - 1;
                                    if (i !== e) return !1;
                                }
                                return !0;
                            })
                            .sort((l, t) => t.length - l.length)
                            .flatMap((t) => l.transitions.get(t))
                );
            })) {
                let { guard: a } = c,
                    s = l.context,
                    n = !1;
                try {
                    n = !a || K(a, s, t, l);
                } catch (t) {
                    let l = "string" == typeof a ? a : "object" == typeof a ? a.type : void 0;
                    throw Error(`Unable to evaluate guard ${l ? `'${l}' ` : ""}in transition for event '${i}' in state node '${this.id}':
${t.message}`);
                }
                if (n) {
                    e.push(...c.actions), (d = c);
                    break;
                }
            }
            return d ? [d] : void 0;
        }
        get events() {
            return lF(this, "events", () => {
                let { states: l } = this,
                    t = new Set(this.ownEvents);
                if (l)
                    for (let d of Object.keys(l)) {
                        let i = l[d];
                        if (i.states) for (let l of i.events) t.add(`${l}`);
                    }
                return Array.from(t);
            });
        }
        get ownEvents() {
            return Array.from(
                new Set(
                    [...this.transitions.keys()].filter((l) =>
                        this.transitions.get(l).some((l) => !(!l.target && !l.actions.length && !l.reenter)),
                    ),
                ),
            );
        }
    },
    lE = class l {
        constructor(l, t) {
            (this.config = l),
                (this.version = void 0),
                (this.schemas = void 0),
                (this.implementations = void 0),
                (this.__xstatenode = !0),
                (this.idMap = new Map()),
                (this.root = void 0),
                (this.id = void 0),
                (this.states = void 0),
                (this.events = void 0),
                (this.id = l.id || "(machine)"),
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
                (this.root = new lk(l, { _key: this.id, _machine: this })),
                this.root._initialize(),
                (this.states = this.root.states),
                (this.events = this.root.events);
        }
        provide(t) {
            let { actions: d, guards: i, actors: e, delays: c } = this.implementations;
            return new l(this.config, {
                actions: { ...d, ...t.actions },
                guards: { ...i, ...t.guards },
                actors: { ...e, ...t.actors },
                delays: { ...c, ...t.delays },
            });
        }
        resolveState(l) {
            var t;
            let d = A((t = this.root), [...f(la(t, l.value))]),
                i = f(la(this.root, d));
            return lT(
                {
                    _nodes: [...i],
                    context: l.context || {},
                    children: {},
                    status: _(i, this.root) ? "done" : l.status || "active",
                    output: l.output,
                    error: l.error,
                    historyValue: l.historyValue,
                },
                this,
            );
        }
        transition(l, t, d) {
            return lG(l, t, d, []).snapshot;
        }
        microstep(l, t, d) {
            return lG(l, t, d, []).microstates;
        }
        getTransitionData(l, t) {
            return (
                (function l(t, d, i, e) {
                    if ("string" == typeof d) {
                        let l;
                        return (l = le(t, d).next(i, e)) && l.length ? l : t.next(i, e);
                    }
                    if (1 === Object.keys(d).length) {
                        let c, a;
                        return (a = l(le(t, (c = Object.keys(d))[0]), d[c[0]], i, e)) && a.length ? a : t.next(i, e);
                    }
                    let c = [];
                    for (let a of Object.keys(d)) {
                        let s = d[a];
                        if (!s) continue;
                        let n = l(le(t, a), s, i, e);
                        n && c.push(...n);
                    }
                    return c.length ? c : t.next(i, e);
                })(this.root, l.value, l, t) || []
            );
        }
        getPreInitialState(l, t, d) {
            let { context: i } = this.config,
                e = lT(
                    {
                        context: "function" != typeof i && i ? i : {},
                        _nodes: [this.root],
                        children: {},
                        status: "active",
                    },
                    this,
                );
            return "function" == typeof i
                ? lW(
                      e,
                      t,
                      l,
                      [lj(({ spawn: l, event: t, self: d }) => i({ spawn: l, input: t.input, self: d }))],
                      d,
                      void 0,
                  )
                : e;
        }
        getInitialSnapshot(l, t) {
            let d = m(t),
                i = [],
                e = this.getPreInitialState(l, d, i),
                { snapshot: c } = lG(
                    lo(
                        [
                            {
                                target: [...li(this.root)],
                                source: this.root,
                                reenter: !0,
                                actions: [],
                                eventType: null,
                                toJSON: null,
                            },
                        ],
                        e,
                        l,
                        d,
                        !0,
                        i,
                    ),
                    d,
                    l,
                    i,
                );
            return c;
        }
        start(l) {
            Object.values(l.children).forEach((l) => {
                "active" === l.getSnapshot().status && l.start();
            });
        }
        getStateNodeById(l) {
            let t = h(l),
                d = t.slice(1),
                i = $(t[0]) ? t[0].slice(1) : t[0],
                e = this.idMap.get(i);
            if (!e) throw Error(`Child state node '#${i}' does not exist on machine '${this.id}'`);
            return lc(e, d);
        }
        get definition() {
            return this.root.definition;
        }
        toJSON() {
            return this.definition;
        }
        getPersistedSnapshot(l, t) {
            return (function (l, t) {
                let {
                        _nodes: d,
                        tags: i,
                        machine: e,
                        children: c,
                        context: a,
                        can: s,
                        hasTag: n,
                        matches: Z,
                        getMeta: b,
                        toJSON: m,
                        ...o
                    } = l,
                    u = {};
                for (let l in c) {
                    let d = c[l];
                    u[l] = {
                        snapshot: d.getPersistedSnapshot(t),
                        src: d.src,
                        systemId: d.systemId,
                        syncSnapshot: d._syncSnapshot,
                    };
                }
                return {
                    ...o,
                    context: (function l(t) {
                        let d;
                        for (let i in t) {
                            let e = t[i];
                            if (e && "object" == typeof e)
                                if ("sessionId" in e && "send" in e && "ref" in e)
                                    (d ??= Array.isArray(t) ? t.slice() : { ...t })[i] = { xstate$$type: 1, id: e.id };
                                else {
                                    let c = l(e);
                                    c !== e && ((d ??= Array.isArray(t) ? t.slice() : { ...t })[i] = c);
                                }
                        }
                        return d ?? t;
                    })(a),
                    children: u,
                    historyValue: (function (l) {
                        if ("object" != typeof l || null === l) return {};
                        let t = {};
                        for (let d in l) {
                            let i = l[d];
                            Array.isArray(i) && (t[d] = i.map((l) => ({ id: l.id })));
                        }
                        return t;
                    })(o.historyValue),
                };
            })(l, t);
        }
        restoreSnapshot(l, t) {
            let d = {},
                i = l.children;
            Object.keys(i).forEach((l) => {
                let e = i[l],
                    c = e.snapshot,
                    a = e.src,
                    s = "string" == typeof a ? Y(this, a) : a;
                s &&
                    (d[l] = R(s, {
                        id: l,
                        parent: t.self,
                        syncSnapshot: e.syncSnapshot,
                        snapshot: c,
                        src: a,
                        systemId: e.systemId,
                    }));
            });
            let e = (function (l, t) {
                    if (!t || "object" != typeof t) return {};
                    let d = {};
                    for (let i in t)
                        for (let e of t[i]) {
                            let t = (function (l, t) {
                                if (t instanceof lk) return t;
                                try {
                                    return l.machine.getStateNodeById(t.id);
                                } catch {}
                            })(l, e);
                            t && ((d[i] ??= []), d[i].push(t));
                        }
                    return d;
                })(this.root, l.historyValue),
                c = lT({ ...l, children: d, _nodes: Array.from(f(la(this.root, l.value))), historyValue: e }, this),
                a = new Set();
            return (
                !(function l(t, d) {
                    if (!a.has(t))
                        for (let i in (a.add(t), t)) {
                            let e = t[i];
                            if (e && "object" == typeof e) {
                                if ("xstate$$type" in e && 1 === e.xstate$$type) {
                                    t[i] = d[e.id];
                                    continue;
                                }
                                l(e, d);
                            }
                        }
                })(c.context, d),
                c
            );
        }
    };
function lv(l, t, d, i, { event: e }) {
    return [t, { event: "function" == typeof e ? e(d, i) : e }, void 0];
}
function lK(l, { event: t }) {
    l.defer(() => l.emit(t));
}
function lH(l) {
    function t(l, t) {}
    return (t.type = "xstate.emit"), (t.event = l), (t.resolve = lv), (t.execute = lK), t;
}
let lQ = (((c = {}).Parent = "#_parent"), (c.Internal = "#_internal"), c);
function lP(l, t, d, i, { to: e, event: c, id: a, delay: s }, n) {
    let Z,
        b,
        m = t.machine.implementations.delays;
    if ("string" == typeof c)
        throw Error(`Only event objects may be used with sendTo; use sendTo({ type: "${c}" }) instead`);
    let o = "function" == typeof c ? c(d, i) : c;
    if ("string" == typeof s) {
        let l = m && m[s];
        Z = "function" == typeof l ? l(d, i) : l;
    } else Z = "function" == typeof s ? s(d, i) : s;
    let u = "function" == typeof e ? e(d, i) : e;
    if ("string" == typeof u) {
        if (
            !(b =
                u === lQ.Parent
                    ? l.self._parent
                    : u === lQ.Internal
                      ? l.self
                      : u.startsWith("#_")
                        ? t.children[u.slice(2)]
                        : n.deferredActorIds?.includes(u)
                          ? u
                          : t.children[u])
        )
            throw Error(`Unable to send event to actor '${u}' from machine '${t.machine.id}'.`);
    } else b = u || l.self;
    return [t, { to: b, targetId: "string" == typeof u ? u : void 0, event: o, id: a, delay: Z }, void 0];
}
function lf(l, t, d) {
    "string" == typeof d.to && (d.to = t.children[d.to]);
}
function lB(l, t) {
    l.defer(() => {
        let { to: d, event: i, delay: e, id: c } = t;
        "number" == typeof e
            ? l.system.scheduler.schedule(l.self, d, i, e, c)
            : l.system._relay(l.self, d, "xstate.error" === i.type ? b(l.self.id, i.data) : i);
    });
}
function lA(l, t, d) {
    function i(l, t) {}
    return (
        (i.type = "xstate.sendTo"),
        (i.to = l),
        (i.event = t),
        (i.id = d?.id),
        (i.delay = d?.delay),
        (i.resolve = lP),
        (i.retryResolve = lf),
        (i.execute = lB),
        i
    );
}
function l_(l, t, d, i, { collect: e }) {
    let c = [],
        a = function (l) {
            c.push(l);
        };
    return (
        (a.assign = (...l) => {
            c.push(lj(...l));
        }),
        (a.cancel = (...l) => {
            c.push(x(...l));
        }),
        (a.raise = (...l) => {
            c.push(lz(...l));
        }),
        (a.sendTo = (...l) => {
            c.push(lA(...l));
        }),
        (a.sendParent = (...l) => {
            c.push(
                (function (l, t) {
                    return lA(lQ.Parent, l, t);
                })(...l),
            );
        }),
        (a.spawnChild = (...l) => {
            c.push(j(...l));
        }),
        (a.stopChild = (...l) => {
            c.push(O(...l));
        }),
        (a.emit = (...l) => {
            c.push(lH(...l));
        }),
        e(
            {
                context: d.context,
                event: d.event,
                enqueue: a,
                check: (l) => K(l, t.context, d.event, t),
                self: l.self,
                system: l.system,
            },
            i,
        ),
        [t, void 0, c]
    );
}
function l$(l) {
    function t(l, t) {}
    return (t.type = "xstate.enqueueActions"), (t.collect = l), (t.resolve = l_), t;
}
function lq(l, t, d, i, { value: e, label: c }) {
    return [t, { value: "function" == typeof e ? e(d, i) : e, label: c }, void 0];
}
function l2({ logger: l }, { value: t, label: d }) {
    d ? l(d, t) : l(t);
}
function l0(l = ({ context: l, event: t }) => ({ context: l, event: t }), t) {
    function d(l, t) {}
    return (d.type = "xstate.log"), (d.value = l), (d.label = t), (d.resolve = lq), (d.execute = l2), d;
}
