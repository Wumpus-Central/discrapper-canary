"use strict";
function i(e) {
    return e && "object" == typeof e && "default" in e ? e.default : e;
}
Object.defineProperty(t, "__esModule", { value: !0 });
var r = n(131981),
    s = n(675106),
    a = i(n(984101)),
    o = n(64700),
    l = i(n(420979)),
    u = i(n(501984)),
    c = i(n(973280)),
    d = i(n(269274)),
    _ = n(294814),
    h = n(672722),
    f = n(337126),
    p = i(n(252446)),
    E = n(134539),
    m = i(n(901012)),
    g = i(n(394320)),
    A = n(54482),
    I = n(865951),
    T = {
        default: { tension: 170, friction: 26 },
        gentle: { tension: 120, friction: 14 },
        wobbly: { tension: 180, friction: 12 },
        stiff: { tension: 210, friction: 20 },
        slow: { tension: 280, friction: 60 },
        molasses: { tension: 280, friction: 120 },
    },
    S = a(
        a({}, T.default),
        {},
        {
            mass: 1,
            damping: 1,
            easing: function (e) {
                return e;
            },
            clamp: !1,
        },
    ),
    y = function () {
        (this.tension = void 0),
            (this.friction = void 0),
            (this.frequency = void 0),
            (this.damping = void 0),
            (this.mass = void 0),
            (this.velocity = 0),
            (this.restVelocity = void 0),
            (this.precision = void 0),
            (this.progress = void 0),
            (this.duration = void 0),
            (this.easing = void 0),
            (this.clamp = void 0),
            (this.bounce = void 0),
            (this.decay = void 0),
            (this.round = void 0),
            Object.assign(this, S);
    };
function C(e, t) {
    if (s.is.und(t.decay)) {
        var n = !s.is.und(t.tension) || !s.is.und(t.friction);
        (!n && s.is.und(t.frequency) && s.is.und(t.damping) && s.is.und(t.mass)) ||
            ((e.duration = void 0), (e.decay = void 0)),
            n && (e.frequency = void 0);
    } else e.duration = void 0;
}
var N = [],
    v = function () {
        (this.changed = !1),
            (this.values = N),
            (this.toValues = null),
            (this.fromValues = N),
            (this.to = void 0),
            (this.from = void 0),
            (this.config = new y()),
            (this.immediate = !1),
            (this.onStart = void 0),
            (this.onChange = void 0),
            (this.onRest = []);
    };
function R(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
    return i;
}
var O = function (e, t) {
    return f.useMemoOne(e, t || [{}]);
};
function b(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
    return s.is.fun(e) ? e.apply(void 0, n) : e;
}
var D = function (e, t) {
        return !0 === e || !!(t && e && (s.is.fun(e) ? e(t) : s.toArray(e).includes(t)));
    },
    L = function (e, t, n) {
        return e && (s.is.fun(e) ? e(t, n) : s.is.arr(e) ? e[t] : a({}, e));
    },
    w = function (e, t) {
        return !0 === e.default ? e[t] : e.default ? e.default[t] : void 0;
    },
    M = function (e, t, n) {
        void 0 === t && (t = []), void 0 === n && (n = {});
        var i = P;
        e.default && !0 !== e.default && (i = Object.keys((e = e.default)));
        for (
            var r,
                a = (function (e) {
                    var t = 0;
                    if ("u" < typeof Symbol || null == e[Symbol.iterator]) {
                        if (
                            Array.isArray(e) ||
                            (e = (function (e) {
                                if (e) {
                                    if ("string" == typeof e) return R(e, void 0);
                                    var t = Object.prototype.toString.call(e).slice(8, -1);
                                    if (
                                        ("Object" === t && e.constructor && (t = e.constructor.name),
                                        "Map" === t || "Set" === t)
                                    )
                                        return Array.from(e);
                                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                        return R(e, void 0);
                                }
                            })(e))
                        )
                            return function () {
                                return t >= e.length ? { done: !0 } : { done: !1, value: e[t++] };
                            };
                        throw TypeError(
                            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                        );
                    }
                    return (t = e[Symbol.iterator]()).next.bind(t);
                })(i);
            !(r = a()).done;
        ) {
            var o = r.value,
                l = e[o];
            s.is.und(l) || t.includes(o) || (n[o] = l);
        }
        return n;
    },
    P = ["pause", "cancel", "config", "immediate", "onDelayEnd", "onProps", "onStart", "onChange", "onRest"],
    x = {
        config: 1,
        from: 1,
        to: 1,
        ref: 1,
        loop: 1,
        reset: 1,
        pause: 1,
        cancel: 1,
        reverse: 1,
        immediate: 1,
        default: 1,
        delay: 1,
        onDelayEnd: 1,
        onProps: 1,
        onStart: 1,
        onChange: 1,
        onRest: 1,
        onNoopRest: 1,
        items: 1,
        trail: 1,
        sort: 1,
        expires: 1,
        initial: 1,
        enter: 1,
        update: 1,
        leave: 1,
        children: 1,
        keys: 1,
        callId: 1,
        parentId: 1,
    };
function k(e) {
    var t = (function (e) {
        var t = {},
            n = 0;
        if (
            (s.each(e, function (e, i) {
                !x[i] && ((t[i] = e), n++);
            }),
            n)
        )
            return t;
    })(e);
    if (t) {
        var n = { to: t };
        return (
            s.each(e, function (e, i) {
                return i in t || (n[i] = e);
            }),
            n
        );
    }
    return a({}, e);
}
function U(e) {
    var t = s.getFluidConfig(e);
    return t
        ? U(t.get())
        : s.is.arr(e)
          ? e.map(U)
          : s.isAnimatedString(e)
            ? h.createStringInterpolator({ range: [0, 1], output: [e, e] })(1)
            : e;
}
function G(e, t) {
    var n = t.key,
        i = t.props,
        r = t.state,
        o = t.actions;
    return new Promise(function (t, l) {
        var u,
            c,
            d = !1,
            _ = D(i.cancel, n);
        function h() {
            r.resumeQueue.add(f), c.cancel(), (u = c.time - s.Globals.now());
        }
        function f() {
            u > 0 ? (r.pauseQueue.add(h), (c = s.Globals.frameLoop.setTimeout(p, u))) : p();
        }
        function p() {
            r.pauseQueue.delete(h), e <= (r.cancelId || 0) && (_ = !0);
            try {
                o.start(a(a({}, i), {}, { callId: e, delay: u, cancel: _, pause: d }), t);
            } catch (e) {
                l(e);
            }
        }
        _
            ? p()
            : ((u = b(i.delay || 0, n)), (d = D(i.pause, n)) ? (r.resumeQueue.add(f), o.pause()) : (o.resume(), f()));
    });
}
var F = function (e, t) {
        return 1 == t.length
            ? t[0]
            : t.some(function (e) {
                    return e.cancelled;
                })
              ? j(e)
              : t.every(function (e) {
                      return e.noop;
                  })
                ? V(e)
                : B(
                      e,
                      t.every(function (e) {
                          return e.finished;
                      }),
                  );
    },
    V = function (e, t) {
        return void 0 === t && (t = e.get()), { value: t, noop: !0, finished: !0, target: e };
    },
    B = function (e, t, n) {
        return void 0 === n && (n = e.get()), { value: n, finished: t, target: e };
    },
    j = function (e, t) {
        return void 0 === t && (t = e.get()), { value: t, cancelled: !0, target: e };
    };
function H(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
    return i;
}
function Y(e, t, n, i) {
    return W.apply(this, arguments);
}
function W() {
    return (W = u(
        l.mark(function e(t, n, i, r) {
            var o, c, d, _, f;
            return l.wrap(function (e) {
                for (;;)
                    switch ((e.prev = e.next)) {
                        case 0:
                            if (!n.pause) {
                                e.next = 3;
                                break;
                            }
                            return (
                                (e.next = 3),
                                new Promise(function (e) {
                                    i.resumeQueue.add(e);
                                })
                            );
                        case 3:
                            if (
                                ((o = n.callId),
                                (c = n.parentId),
                                (d = n.onRest),
                                (_ = i.asyncTo),
                                (f = i.promise),
                                !(!c && t === _ && !n.reset))
                            ) {
                                e.next = 7;
                                break;
                            }
                            return e.abrupt("return", f);
                        case 7:
                            return e.abrupt(
                                "return",
                                (i.promise = u(
                                    l.mark(function e() {
                                        var p, E, m, g, A, I, T, S, y;
                                        return l.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return (
                                                                (i.asyncId = o),
                                                                (i.asyncTo = t),
                                                                (p = M(n, ["onRest"])),
                                                                (g = new Promise(function (e, t) {
                                                                    return (E = e), (m = t);
                                                                })),
                                                                (A = function (e) {
                                                                    return function () {
                                                                        var t = function (e) {
                                                                            throw (e instanceof $ && m(e), e);
                                                                        };
                                                                        try {
                                                                            return e.apply(void 0, arguments).catch(t);
                                                                        } catch (e) {
                                                                            t(e);
                                                                        }
                                                                    };
                                                                }),
                                                                (I = function (e) {
                                                                    var t =
                                                                        (o <= (i.cancelId || 0) && j(r)) ||
                                                                        (o !== i.asyncId && B(r, !1));
                                                                    if (t) throw ((e.result = t), e);
                                                                }),
                                                                (T = A(function (e, t) {
                                                                    var n = new $();
                                                                    I(n);
                                                                    var c = s.is.obj(e)
                                                                        ? a({}, e)
                                                                        : a(a({}, t), {}, { to: e });
                                                                    return (
                                                                        (c.parentId = o),
                                                                        s.each(p, function (e, t) {
                                                                            s.is.und(c[t]) && (c[t] = e);
                                                                        }),
                                                                        r.start(c).then(
                                                                            (function () {
                                                                                var e = u(
                                                                                    l.mark(function e(t) {
                                                                                        return l.wrap(function (e) {
                                                                                            for (;;)
                                                                                                switch (
                                                                                                    (e.prev = e.next)
                                                                                                ) {
                                                                                                    case 0:
                                                                                                        if (
                                                                                                            (I(n),
                                                                                                            !r.is(
                                                                                                                "PAUSED",
                                                                                                            ))
                                                                                                        ) {
                                                                                                            e.next = 4;
                                                                                                            break;
                                                                                                        }
                                                                                                        return (
                                                                                                            (e.next = 4),
                                                                                                            new Promise(
                                                                                                                function (
                                                                                                                    e,
                                                                                                                ) {
                                                                                                                    i.resumeQueue.add(
                                                                                                                        e,
                                                                                                                    );
                                                                                                                },
                                                                                                            )
                                                                                                        );
                                                                                                    case 4:
                                                                                                        return e.abrupt(
                                                                                                            "return",
                                                                                                            t,
                                                                                                        );
                                                                                                    case 5:
                                                                                                    case "end":
                                                                                                        return e.stop();
                                                                                                }
                                                                                        }, e);
                                                                                    }),
                                                                                );
                                                                                return function (t) {
                                                                                    return e.apply(this, arguments);
                                                                                };
                                                                            })(),
                                                                        )
                                                                    );
                                                                })),
                                                                (e.prev = 7),
                                                                s.is.arr(t)
                                                                    ? (y = (function () {
                                                                          var e = u(
                                                                              l.mark(function e(t) {
                                                                                  var n, i, r;
                                                                                  return l.wrap(function (e) {
                                                                                      for (;;)
                                                                                          switch ((e.prev = e.next)) {
                                                                                              case 0:
                                                                                                  n = (function (e) {
                                                                                                      var t = 0;
                                                                                                      if (
                                                                                                          "u" <
                                                                                                              typeof Symbol ||
                                                                                                          null ==
                                                                                                              e[
                                                                                                                  Symbol
                                                                                                                      .iterator
                                                                                                              ]
                                                                                                      ) {
                                                                                                          if (
                                                                                                              Array.isArray(
                                                                                                                  e,
                                                                                                              ) ||
                                                                                                              (e =
                                                                                                                  (function (
                                                                                                                      e,
                                                                                                                  ) {
                                                                                                                      if (
                                                                                                                          e
                                                                                                                      ) {
                                                                                                                          if (
                                                                                                                              "string" ==
                                                                                                                              typeof e
                                                                                                                          )
                                                                                                                              return H(
                                                                                                                                  e,
                                                                                                                                  void 0,
                                                                                                                              );
                                                                                                                          var t =
                                                                                                                              Object.prototype.toString
                                                                                                                                  .call(
                                                                                                                                      e,
                                                                                                                                  )
                                                                                                                                  .slice(
                                                                                                                                      8,
                                                                                                                                      -1,
                                                                                                                                  );
                                                                                                                          if (
                                                                                                                              ("Object" ===
                                                                                                                                  t &&
                                                                                                                                  e.constructor &&
                                                                                                                                  (t =
                                                                                                                                      e
                                                                                                                                          .constructor
                                                                                                                                          .name),
                                                                                                                              "Map" ===
                                                                                                                                  t ||
                                                                                                                                  "Set" ===
                                                                                                                                      t)
                                                                                                                          )
                                                                                                                              return Array.from(
                                                                                                                                  e,
                                                                                                                              );
                                                                                                                          if (
                                                                                                                              "Arguments" ===
                                                                                                                                  t ||
                                                                                                                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                                                  t,
                                                                                                                              )
                                                                                                                          )
                                                                                                                              return H(
                                                                                                                                  e,
                                                                                                                                  void 0,
                                                                                                                              );
                                                                                                                      }
                                                                                                                  })(e))
                                                                                                          )
                                                                                                              return function () {
                                                                                                                  return t >=
                                                                                                                      e.length
                                                                                                                      ? {
                                                                                                                            done:
                                                                                                                                !0,
                                                                                                                        }
                                                                                                                      : {
                                                                                                                            done:
                                                                                                                                !1,
                                                                                                                            value: e[
                                                                                                                                t++
                                                                                                                            ],
                                                                                                                        };
                                                                                                              };
                                                                                                          throw TypeError(
                                                                                                              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                                                                                                          );
                                                                                                      }
                                                                                                      return (t =
                                                                                                          e[
                                                                                                              Symbol
                                                                                                                  .iterator
                                                                                                          ]()).next.bind(
                                                                                                          t,
                                                                                                      );
                                                                                                  })(t);
                                                                                              case 1:
                                                                                                  if ((i = n()).done) {
                                                                                                      e.next = 7;
                                                                                                      break;
                                                                                                  }
                                                                                                  return (
                                                                                                      (r = i.value),
                                                                                                      (e.next = 5),
                                                                                                      T(r)
                                                                                                  );
                                                                                              case 5:
                                                                                                  e.next = 1;
                                                                                                  break;
                                                                                              case 7:
                                                                                              case "end":
                                                                                                  return e.stop();
                                                                                          }
                                                                                  }, e);
                                                                              }),
                                                                          );
                                                                          return function (t) {
                                                                              return e.apply(this, arguments);
                                                                          };
                                                                      })()(t))
                                                                    : s.is.fun(t) &&
                                                                      (y = Promise.resolve(t(T, r.stop.bind(r)))),
                                                                (e.next = 11),
                                                                Promise.all([y.then(E), g])
                                                            );
                                                        case 11:
                                                            (S = B(r, !0)), (e.next = 21);
                                                            break;
                                                        case 14:
                                                            if (
                                                                ((e.prev = 14),
                                                                (e.t0 = e.catch(7)),
                                                                !(e.t0 instanceof $))
                                                            ) {
                                                                e.next = 20;
                                                                break;
                                                            }
                                                            (S = e.t0.result), (e.next = 21);
                                                            break;
                                                        case 20:
                                                            throw e.t0;
                                                        case 21:
                                                            return (
                                                                (e.prev = 21),
                                                                o == i.asyncId &&
                                                                    ((i.asyncId = c),
                                                                    (i.asyncTo = c ? _ : void 0),
                                                                    (i.promise = c ? f : void 0)),
                                                                e.finish(21)
                                                            );
                                                        case 24:
                                                            return (
                                                                s.is.fun(d) &&
                                                                    h.batchedUpdates(function () {
                                                                        d(S);
                                                                    }),
                                                                e.abrupt("return", S)
                                                            );
                                                        case 26:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            null,
                                            [[7, 14, 21, 24]],
                                        );
                                    }),
                                )()),
                            );
                        case 8:
                        case "end":
                            return e.stop();
                    }
            }, e);
        }),
    )).apply(this, arguments);
}
function K(e, t) {
    (e.cancelId = t), (e.asyncId = e.asyncTo = e.promise = void 0);
}
var $ = (function (e) {
        function t() {
            var t;
            return (
                ((t =
                    e.call(
                        this,
                        "An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.",
                    ) || this).result = void 0),
                t
            );
        }
        return d(t, e), t;
    })(p(Error)),
    z = function (e) {
        return e instanceof Z;
    },
    q = 1,
    Z = (function (e) {
        function t() {
            for (var t, n = arguments.length, i = Array(n), r = 0; r < n; r++) i[r] = arguments[r];
            return (
                ((t = e.call.apply(e, [this].concat(i)) || this).id = q++),
                (t.key = void 0),
                (t._priority = 0),
                (t._children = new Set()),
                t
            );
        }
        d(t, e);
        var n = t.prototype;
        return (
            (n.get = function () {
                var e = _.getAnimated(this);
                return e && e.getValue();
            }),
            (n.to = function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return h.to(this, t);
            }),
            (n.interpolate = function () {
                E.deprecateInterpolate();
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return h.to(this, t);
            }),
            (n.addChild = function (e) {
                this._children.size || this._attach(), this._children.add(e);
            }),
            (n.removeChild = function (e) {
                this._children.delete(e), this._children.size || this._detach();
            }),
            (n.onParentChange = function (e) {
                var t = e.type;
                this.idle ? "start" == t && (this._reset(), this._start()) : "reset" == t && this._reset();
            }),
            (n._attach = function () {}),
            (n._detach = function () {}),
            (n._reset = function () {
                this._emit({ type: "reset", parent: this });
            }),
            (n._start = function () {
                this._emit({ type: "start", parent: this });
            }),
            (n._onChange = function (e, t) {
                void 0 === t && (t = !1), this._emit({ type: "change", parent: this, value: e, idle: t });
            }),
            (n._onPriorityChange = function (e) {
                this.idle || h.frameLoop.start(this), this._emit({ type: "priority", parent: this, priority: e });
            }),
            (n._emit = function (e) {
                s.each(Array.from(this._children), function (t) {
                    t.onParentChange(e);
                });
            }),
            c(t, [
                {
                    key: "priority",
                    get: function () {
                        return this._priority;
                    },
                    set: function (e) {
                        this._priority != e && ((this._priority = e), this._onPriorityChange(e));
                    },
                },
            ]),
            t
        );
    })(s.FluidValue),
    X = "CREATED",
    Q = "IDLE",
    J = "ACTIVE",
    ee = "PAUSED",
    et = "DISPOSED",
    en = (function (e) {
        function t(t, n) {
            var i;
            if (
                (((i = e.call(this) || this).key = void 0),
                (i.animation = new v()),
                (i.queue = void 0),
                (i._phase = X),
                (i._state = { pauseQueue: new Set(), resumeQueue: new Set() }),
                (i._defaultProps = {}),
                (i._lastCallId = 0),
                (i._lastToId = 0),
                !s.is.und(t) || !s.is.und(n))
            ) {
                var r = s.is.obj(t) ? a({}, t) : a(a({}, n), {}, { from: t });
                (r.default = !0), i.start(r);
            }
            return i;
        }
        d(t, e);
        var n,
            i = t.prototype;
        return (
            (i.advance = function (e) {
                var t = this,
                    n = !0,
                    i = !1,
                    r = this.animation,
                    a = r.config,
                    o = r.toValues,
                    l = _.getPayload(r.to);
                if (!l) {
                    var u = s.getFluidConfig(r.to);
                    u && (o = s.toArray(u.get()));
                }
                return (
                    r.values.forEach(function (u, c) {
                        if (!u.done) {
                            var d = l ? l[c].lastPosition : o[c],
                                _ = r.immediate,
                                h = d;
                            if (!_) {
                                if (((h = u.lastPosition), a.tension <= 0)) {
                                    u.done = !0;
                                    return;
                                }
                                var f = (u.elapsedTime += e),
                                    p = r.fromValues[c],
                                    E =
                                        null != u.v0
                                            ? u.v0
                                            : (u.v0 = s.is.arr(a.velocity) ? a.velocity[c] : a.velocity);
                                if (s.is.und(a.duration))
                                    if (a.decay) {
                                        var m = !0 === a.decay ? 0.998 : a.decay,
                                            g = Math.exp(-(1 - m) * f);
                                        (h = p + (E / (1 - m)) * (1 - g)),
                                            (_ = 0.1 > Math.abs(u.lastPosition - h)),
                                            (A = E * g);
                                    } else
                                        for (
                                            var A = null == u.lastVelocity ? E : u.lastVelocity,
                                                I =
                                                    a.precision ||
                                                    (p == d ? 0.005 : Math.min(1, 0.001 * Math.abs(d - p))),
                                                T = a.restVelocity || I / 10,
                                                S = a.clamp ? 0 : a.bounce,
                                                y = !s.is.und(S),
                                                C = p == d ? u.v0 > 0 : p < d,
                                                N = !1,
                                                v = Math.ceil(e / 1),
                                                R = 0;
                                            R < v && !(!(Math.abs(A) > T) && (_ = Math.abs(d - h) <= I));
                                            ++R
                                        ) {
                                            y && (h == d || h > d == C) && ((A = -A * S), (h = d));
                                            var O =
                                                (-(1e-6 * a.tension) * (h - d) + -(0.001 * a.friction) * A) / a.mass;
                                            (A += +O), (h += +A);
                                        }
                                else {
                                    var b = a.progress || 0;
                                    a.duration <= 0 ? (b = 1) : (b += (1 - b) * Math.min(1, f / a.duration)),
                                        (A = ((h = p + a.easing(b) * (d - p)) - u.lastPosition) / e),
                                        (_ = 1 == b);
                                }
                                (u.lastVelocity = A),
                                    Number.isNaN(h) && (console.warn("Got NaN while animating:", t), (_ = !0));
                            }
                            l && !l[c].done && (_ = !1),
                                _ ? (u.done = !0) : (n = !1),
                                u.setValue(h, a.round) && (i = !0);
                        }
                    }),
                    n ? this.finish() : i && this._onChange(this.get()),
                    n
                );
            }),
            (i.is = function (e) {
                return this._phase == e;
            }),
            (i.set = function (e) {
                var t = this;
                return (
                    h.batchedUpdates(function () {
                        if ((t._focus(e), t._set(e) && !t.is(J))) return t._onChange(t.get(), !0);
                        t._stop();
                    }),
                    this
                );
            }),
            (i.pause = function () {
                ei(this, "pause"),
                    this.is(ee) ||
                        ((this._phase = ee),
                        s.flush(this._state.pauseQueue, function (e) {
                            return e();
                        }));
            }),
            (i.resume = function () {
                ei(this, "resume"),
                    this.is(ee) &&
                        (this._start(),
                        s.flush(this._state.resumeQueue, function (e) {
                            return e();
                        }));
            }),
            (i.finish = function (e) {
                var t = this;
                if ((this.resume(), this.is(J))) {
                    var n = this.animation;
                    !n.config.decay && s.is.und(e) && (e = n.to),
                        s.is.und(e) || this._set(e),
                        h.batchedUpdates(function () {
                            !n.changed && ((n.changed = !0), n.onStart && n.onStart(t)), t._stop();
                        });
                }
                return this;
            }),
            (i.update = function (e) {
                return ei(this, "update"), (this.queue || (this.queue = [])).push(e), this;
            }),
            (n = u(
                l.mark(function e(t, n) {
                    var i,
                        r,
                        o = this;
                    return l.wrap(
                        function (e) {
                            for (;;)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        return (
                                            ei(this, "start"),
                                            s.is.und(t)
                                                ? ((i = this.queue || []), (this.queue = []))
                                                : (i = [s.is.obj(t) ? t : a(a({}, n), {}, { to: t })]),
                                            (e.next = 4),
                                            Promise.all(
                                                i.map(function (e) {
                                                    return o._update(e);
                                                }),
                                            )
                                        );
                                    case 4:
                                        return (r = e.sent), e.abrupt("return", F(this, r));
                                    case 6:
                                    case "end":
                                        return e.stop();
                                }
                        },
                        e,
                        this,
                    );
                }),
            )),
            (i.start = function (e, t) {
                return n.apply(this, arguments);
            }),
            (i.stop = function (e) {
                var t = this;
                return (
                    this.is(et) ||
                        (K(this._state, this._lastCallId),
                        this._focus(this.get()),
                        h.batchedUpdates(function () {
                            return t._stop(e);
                        })),
                    this
                );
            }),
            (i.reset = function () {
                this._update({ reset: !0 });
            }),
            (i.dispose = function () {
                this.is(et) || (this.animation && (this.animation.onRest = []), this.stop(), (this._phase = et));
            }),
            (i.onParentChange = function (t) {
                e.prototype.onParentChange.call(this, t),
                    "change" == t.type
                        ? !this.is(J) && (this._reset(), this.is(ee) || this._start())
                        : "priority" == t.type && (this.priority = t.priority + 1);
            }),
            (i._prepareNode = function (e) {
                var t = e.to,
                    n = e.from,
                    i = e.reverse,
                    r = this.key || "",
                    a = {
                        to: (t = !s.is.obj(t) || s.getFluidConfig(t) ? t : t[r]),
                        from: (n = !s.is.obj(n) || s.getFluidConfig(n) ? n : n[r]),
                    };
                if (this.is(X)) {
                    if (i) {
                        var o = [n, t];
                        (t = o[0]), (n = o[1]);
                    }
                    n = s.getFluidValue(n);
                    var l = this._updateNode(s.is.und(n) ? s.getFluidValue(t) : n);
                    l && !s.is.und(n) && l.setValue(n);
                }
                return a;
            }),
            (i._updateNode = function (e) {
                var t = _.getAnimated(this);
                if (!s.is.und(e)) {
                    var n = this._getNodeType(e);
                    (t && t.constructor === n) || _.setAnimated(this, (t = n.create(e)));
                }
                return t;
            }),
            (i._getNodeType = function (e) {
                var t = _.getAnimated(e);
                return t
                    ? t.constructor
                    : s.is.arr(e)
                      ? _.AnimatedArray
                      : s.isAnimatedString(e)
                        ? _.AnimatedString
                        : _.AnimatedValue;
            }),
            (i._update = function (e, t) {
                var n = this,
                    i = this._defaultProps,
                    r = function (t) {
                        var n = w(e, t);
                        s.is.und(n) || (i[t] = n), i[t] && (e[t] = i[t]);
                    };
                r("cancel"), r("pause");
                var a = this._prepareNode(e);
                return G(++this._lastCallId, {
                    key: this.key,
                    props: e,
                    state: this._state,
                    actions: {
                        pause: this.pause.bind(this),
                        resume: this.resume.bind(this),
                        start: this._merge.bind(this, a),
                    },
                }).then(function (i) {
                    if (e.loop && i.finished && !(t && i.noop)) {
                        var r = ea(e);
                        if (r) return n._update(r, !0);
                    }
                    return i;
                });
            }),
            (i._merge = function (e, t, n) {
                if (t.cancel) return this.stop(!0), n(j(this));
                var i = this.key,
                    r = this.animation,
                    o = this._defaultProps,
                    l = !s.is.und(e.to),
                    u = !s.is.und(e.from);
                if (l || u)
                    if (!(t.callId > this._lastToId)) return n(j(this));
                    else this._lastToId = t.callId;
                var c = function (e) {
                        return s.is.und(t[e]) ? o[e] : t[e];
                    },
                    d = er(c("onDelayEnd"), i);
                d && d(t, this), t.default && M(t, ["pause", "cancel"], o);
                var f = r.to,
                    p = r.from,
                    E = e.to,
                    m = void 0 === E ? f : E,
                    g = e.from,
                    A = void 0 === g ? p : g;
                if ((u && !l && (m = A), t.reverse)) {
                    var I = [A, m];
                    (m = I[0]), (A = I[1]);
                }
                var T = !s.isEqual(A, p);
                T && (r.from = A);
                var y = !s.isEqual(m, f);
                y && this._focus(m);
                var N = s.getFluidConfig(m),
                    v = s.getFluidConfig(A);
                v && (A = v.get());
                var R = s.is.arr(t.to) || s.is.fun(t.to),
                    O = r.config,
                    L = O.decay,
                    w = O.velocity;
                t.config &&
                    !R &&
                    (function (e, t, n) {
                        for (var i in (n && (C((n = a({}, n)), t), (t = a(a({}, n), t))),
                        C(e, t),
                        Object.assign(e, t),
                        S))
                            null == e[i] && (e[i] = S[i]);
                        var r = e.mass,
                            o = e.frequency,
                            l = e.damping;
                        s.is.und(o) ||
                            (o < 0.01 && (o = 0.01),
                            l < 0 && (l = 0),
                            (e.tension = Math.pow((2 * Math.PI) / o, 2) * r),
                            (e.friction = (4 * Math.PI * l * r) / o));
                    })(O, b(t.config, i), t.config !== o.config ? b(o.config, i) : void 0);
                var P = _.getAnimated(this);
                if (!P || s.is.und(m)) return n(B(this, !0));
                var x = s.is.und(t.reset) ? u && !t.default : !s.is.und(A) && D(t.reset, i),
                    k = x ? A : this.get(),
                    G = U(m),
                    F = s.is.num(G) || s.is.arr(G) || s.isAnimatedString(G),
                    H = !R && (!F || D(o.immediate || t.immediate, i));
                if (y)
                    if (H) P = this._updateNode(G);
                    else {
                        var W = this._getNodeType(m);
                        if (W !== P.constructor)
                            throw Error(
                                "Cannot animate between " +
                                    P.constructor.name +
                                    " and " +
                                    W.name +
                                    ', as the "to" prop suggests',
                            );
                    }
                var K = P.constructor,
                    $ = !!N,
                    z = !1;
                if (!$) {
                    var q = x || (this.is(X) && T);
                    (y || q) && ($ = !(z = s.isEqual(U(k), G))),
                        (s.isEqual(O.decay, L) && s.isEqual(O.velocity, w)) || ($ = !0);
                }
                if ((z && this.is(J) && (r.changed && !x ? ($ = !0) : $ || this._stop()), !R)) {
                    ($ || s.getFluidConfig(f)) &&
                        ((r.values = P.getPayload()),
                        (r.toValues = N ? null : K == _.AnimatedString ? [1] : s.toArray(G))),
                        (r.immediate = H),
                        (r.onStart = er(c("onStart"), i)),
                        (r.onChange = er(c("onChange"), i));
                    var Z = r.onRest,
                        ee = x && !t.onRest ? Z[0] || s.noop : es(er(c("onRest"), i), this);
                    if ($) {
                        r.onRest = [ee, es(n, this)];
                        var et = +!x;
                        et < Z.length &&
                            h.batchedUpdates(function () {
                                for (; et < Z.length; et++) Z[et]();
                            });
                    } else (x || t.onRest) && (r.onRest[0] = ee);
                }
                var en = er(c("onProps"), i);
                if ((en && en(t, this), x && P.setValue(k), R)) n(Y(t.to, t, this._state, this));
                else if ($) x && (this._phase = Q), this._reset(), this._start();
                else if (this.is(J) && !y) r.onRest.push(es(n, this));
                else {
                    let e = V(this, k),
                        t = er(c("onNoopRest"), i);
                    null != t && t(e), n(e);
                }
            }),
            (i._focus = function (e) {
                var t = this.animation;
                if (e !== t.to) {
                    var n = s.getFluidConfig(t.to);
                    n && n.removeChild(this), (t.to = e);
                    var i = 0;
                    (n = s.getFluidConfig(e)) && (n.addChild(this), z(e) && (i = (e.priority || 0) + 1)),
                        (this.priority = i);
                }
            }),
            (i._set = function (e) {
                var t = s.getFluidConfig(e);
                t && (e = t.get());
                var n = _.getAnimated(this),
                    i = n && n.getValue();
                return n ? n.setValue(e) : this._updateNode(e), !s.isEqual(e, i);
            }),
            (i._onChange = function (t, n) {
                void 0 === n && (n = !1);
                var i = this.animation;
                i.changed || n || ((i.changed = !0), i.onStart && i.onStart(this)),
                    i.onChange && i.onChange(t, this),
                    e.prototype._onChange.call(this, t, n);
            }),
            (i._reset = function () {
                var t = this.animation;
                _.getAnimated(this).reset(t.to),
                    this.is(J) || (t.changed = !1),
                    t.immediate ||
                        (t.fromValues = t.values.map(function (e) {
                            return e.lastPosition;
                        })),
                    e.prototype._reset.call(this);
            }),
            (i._start = function () {
                this.is(J) ||
                    ((this._phase = J),
                    e.prototype._start.call(this),
                    h.skipAnimation ? this.finish() : h.frameLoop.start(this));
            }),
            (i._stop = function (e) {
                if ((this.resume(), this.is(J))) {
                    (this._phase = Q), this._onChange(this.get(), !0);
                    var t = this.animation;
                    s.each(t.values, function (e) {
                        e.done = !0;
                    });
                    var n = t.onRest;
                    n.length &&
                        ((t.onRest = [t.toValues ? s.noop : n[0]]),
                        t.changed || (n[0] = s.noop),
                        s.each(n, function (t) {
                            return t(e);
                        }));
                }
            }),
            c(t, [
                {
                    key: "idle",
                    get: function () {
                        return !this.is(J) && !this._state.asyncTo;
                    },
                },
                {
                    key: "goal",
                    get: function () {
                        return s.getFluidValue(this.animation.to);
                    },
                },
                {
                    key: "velocity",
                    get: function () {
                        var e = _.getAnimated(this);
                        return e instanceof _.AnimatedValue
                            ? e.lastVelocity || 0
                            : e.getPayload().map(function (e) {
                                  return e.lastVelocity || 0;
                              });
                    },
                },
            ]),
            t
        );
    })(Z);
function ei(e, t) {
    if (e.is(et)) throw Error('Cannot call "' + t + '" of disposed "' + e.constructor.name + '" object');
}
function er(e, t) {
    return s.is.fun(e) ? e : t && e ? e[t] : void 0;
}
var es = function (e, t) {
    var n = t.animation.to;
    return e
        ? function (i) {
              if (i) e(j(t));
              else {
                  var r = U(n),
                      a = U(t.get());
                  e(B(t, s.isEqual(a, r)));
              }
          }
        : s.noop;
};
function ea(e, t, n) {
    void 0 === t && (t = e.loop), void 0 === n && (n = e.to);
    var i = b(t);
    if (i) {
        var r = !0 !== i && k(i),
            o = (r || e).reverse,
            l = !r || r.reset;
        return eo(
            a(
                a({}, e),
                {},
                {
                    loop: t,
                    default: !1,
                    to: !o || s.is.arr(n) || s.is.fun(n) ? n : void 0,
                    from: l ? e.from : void 0,
                    reset: l,
                },
                r,
            ),
        );
    }
}
function eo(e) {
    var t = (e = k(e)),
        n = t.to,
        i = t.from,
        r = new Set();
    return (
        i ? el(i, r) : delete e.from,
        s.is.obj(n) ? el(n, r) : n || delete e.to,
        (e.keys = r.size ? Array.from(r) : null),
        e
    );
}
function el(e, t) {
    s.each(e, function (e, n) {
        return null != e && t.add(n);
    });
}
var eu = ["onStart", "onChange", "onRest"],
    ec = 1,
    ed = (function () {
        function e(e, t) {
            (this.id = ec++),
                (this.springs = {}),
                (this.queue = []),
                (this._flush = void 0),
                (this._initialProps = void 0),
                (this._phase = X),
                (this._lastAsyncId = 0),
                (this._active = new Set()),
                (this._state = { pauseQueue: new Set(), resumeQueue: new Set() }),
                (this._events = { onStart: new Set(), onChange: new Set(), onRest: new Map() }),
                (this._onFrame = this._onFrame.bind(this)),
                t && (this._flush = t),
                e && this.start(e);
        }
        var t = e.prototype;
        return (
            (t.is = function (e) {
                return this._phase == e;
            }),
            (t.get = function () {
                var e = {};
                return (
                    this.each(function (t, n) {
                        return (e[n] = t.get());
                    }),
                    e
                );
            }),
            (t.update = function (e) {
                return e && this.queue.push(eo(e)), this;
            }),
            (t.start = function (e) {
                var t = e ? s.toArray(e).map(eo) : this.queue;
                return (e || (this.queue = []), this._flush) ? this._flush(this, t) : (em(this, t), e_(this, t));
            }),
            (t.stop = function (e) {
                if (s.is.und(e))
                    this.each(function (e) {
                        return e.stop();
                    }),
                        K(this._state, this._lastAsyncId);
                else {
                    var t = this.springs;
                    s.each(s.toArray(e), function (e) {
                        return t[e].stop();
                    });
                }
                return this;
            }),
            (t.pause = function (e) {
                if (s.is.und(e))
                    this.each(function (e) {
                        return e.pause();
                    });
                else {
                    var t = this.springs;
                    s.each(s.toArray(e), function (e) {
                        return t[e].pause();
                    });
                }
                return this;
            }),
            (t.resume = function (e) {
                if (s.is.und(e))
                    this.each(function (e) {
                        return e.resume();
                    });
                else {
                    var t = this.springs;
                    s.each(s.toArray(e), function (e) {
                        return t[e].resume();
                    });
                }
                return this;
            }),
            (t.reset = function () {
                return (
                    this.each(function (e) {
                        return e.reset();
                    }),
                    this
                );
            }),
            (t.each = function (e) {
                s.each(this.springs, e);
            }),
            (t.dispose = function () {
                (this._state.asyncTo = void 0),
                    this.each(function (e) {
                        return e.dispose();
                    }),
                    (this.springs = {});
            }),
            (t._onFrame = function () {
                var e = this,
                    t = this._events,
                    n = t.onStart,
                    i = t.onChange,
                    r = t.onRest,
                    a = this._active.size > 0;
                a &&
                    this._phase != J &&
                    ((this._phase = J),
                    s.flush(n, function (t) {
                        return t(e);
                    }));
                var o = (i.size || (!a && r.size)) && this.get();
                s.flush(i, function (e) {
                    return e(o);
                }),
                    a ||
                        ((this._phase = Q),
                        s.flush(r, function (e) {
                            var t = e[0],
                                n = e[1];
                            (n.value = o), t(n);
                        }));
            }),
            (t.onParentChange = function (e) {
                "change" == e.type &&
                    (this._active[e.idle ? "delete" : "add"](e.parent), h.frameLoop.onFrame(this._onFrame));
            }),
            c(e, [
                {
                    key: "idle",
                    get: function () {
                        return (
                            !this._state.asyncTo &&
                            Object.values(this.springs).every(function (e) {
                                return e.idle;
                            })
                        );
                    },
                },
            ]),
            e
        );
    })();
function e_(e, t) {
    return Promise.all(
        t.map(function (t) {
            return (function e(t, n, i) {
                var r = n.to,
                    a = n.loop,
                    o = n.onRest;
                a && (n.loop = !1);
                var l = s.is.arr(r) || s.is.fun(r) ? r : void 0;
                l
                    ? ((n.to = void 0), (n.onRest = void 0))
                    : s.each(eu, function (e) {
                          var i = n[e];
                          if (s.is.fun(i)) {
                              var r = t._events[e];
                              r instanceof Set
                                  ? (n[e] = function () {
                                        return r.add(i);
                                    })
                                  : (n[e] = function (e) {
                                        var t = e.finished,
                                            n = e.cancelled,
                                            s = r.get(i);
                                        s
                                            ? (t || (s.finished = !1), n && (s.cancelled = !0))
                                            : r.set(i, { value: null, finished: t, cancelled: n });
                                    });
                          }
                      });
                var u = (n.keys || Object.keys(t.springs)).map(function (e) {
                        return t.springs[e].start(n);
                    }),
                    c = t._state;
                return (
                    l
                        ? u.push(
                              G(++t._lastAsyncId, {
                                  props: n,
                                  state: c,
                                  actions: {
                                      pause: s.noop,
                                      resume: s.noop,
                                      start: function (e, n) {
                                          if (((e.onRest = o), e.cancel)) s.is.und(w(e, "cancel")) || K(c, e.callId);
                                          else n(Y(l, e, c, t));
                                      },
                                  },
                              }),
                          )
                        : n.keys || !0 !== n.cancel || K(c, t._lastAsyncId),
                    Promise.all(u).then(function (s) {
                        var o = F(t, s);
                        if (a && o.finished && !(i && o.noop)) {
                            var l = ea(n, a, r);
                            if (l) return em(t, [l]), e(t, l, !0);
                        }
                        return o;
                    })
                );
            })(e, t);
        }),
    ).then(function (t) {
        return F(e, t);
    });
}
function eh(e, t) {
    var n = a({}, e.springs);
    return (
        t &&
            s.each(s.toArray(t), function (e) {
                s.is.und(e.keys) && (e = eo(e)),
                    s.is.obj(e.to) || (e = a(a({}, e), {}, { to: void 0 })),
                    eE(n, e, function (e) {
                        return ep(e);
                    });
            }),
        n
    );
}
function ef(e, t) {
    s.each(t, function (t, n) {
        e.springs[n] || ((e.springs[n] = t), t.addChild(e));
    });
}
function ep(e, t) {
    var n = new en();
    return (n.key = e), t && n.addChild(t), n;
}
function eE(e, t, n) {
    t.keys &&
        s.each(t.keys, function (i) {
            (e[i] || (e[i] = n(i)))._prepareNode(t);
        });
}
function em(e, t) {
    s.each(t, function (t) {
        eE(e.springs, t, function (t) {
            return ep(t, e);
        });
    });
}
var eg = o.createContext({}),
    eA = function (e) {
        var t = e.children,
            n = m(e, ["children"]),
            i = o.useContext(eg);
        n = O(
            function () {
                return a(a({}, i), n);
            },
            [i, n.pause, n.cancel, n.immediate, n.config],
        );
        var r = eg.Provider;
        return o.createElement(r, { value: n }, t);
    };
(eA.Provider = eg.Provider), (eA.Consumer = eg.Consumer);
var eI = function () {
        return o.useContext(eg);
    },
    eT = {
        create: function (e) {
            return {
                get controllers() {
                    return e();
                },
                update: function (t) {
                    return (
                        s.each(e(), function (e, n) {
                            e.update(L(t, n, e));
                        }),
                        this
                    );
                },
                start: function (t) {
                    return u(
                        l.mark(function n() {
                            var i;
                            return l.wrap(function (n) {
                                for (;;)
                                    switch ((n.prev = n.next)) {
                                        case 0:
                                            return (
                                                (n.next = 2),
                                                Promise.all(
                                                    e().map(function (e, n) {
                                                        var i = L(t, n, e);
                                                        return e.start(i);
                                                    }),
                                                )
                                            );
                                        case 2:
                                            return (
                                                (i = n.sent),
                                                n.abrupt("return", {
                                                    value: i.map(function (e) {
                                                        return e.value;
                                                    }),
                                                    finished: i.every(function (e) {
                                                        return e.finished;
                                                    }),
                                                })
                                            );
                                        case 4:
                                        case "end":
                                            return n.stop();
                                    }
                            }, n);
                        }),
                    )();
                },
                stop: function (t) {
                    return s.each(e(), function (e) {
                        return e.stop(t);
                    });
                },
                pause: function (t) {
                    return s.each(e(), function (e) {
                        return e.pause(t);
                    });
                },
                resume: function (t) {
                    return s.each(e(), function (e) {
                        return e.resume(t);
                    });
                },
            };
        },
    };
function eS(e, t, n) {
    var i = s.is.fun(t) && t;
    i && !n && (n = []);
    var l = o.useRef(0),
        u = s.useForceUpdate(),
        c = o.useState(function () {
            return {
                ctrls: [],
                queue: [],
                flush: function (e, t) {
                    var n = eh(e, t);
                    return !(l.current > 0) ||
                        c.queue.length ||
                        Object.keys(n).some(function (t) {
                            return !e.springs[t];
                        })
                        ? new Promise(function (i) {
                              ef(e, n),
                                  c.queue.push(function () {
                                      i(e_(e, t));
                                  }),
                                  u();
                          })
                        : e_(e, t);
                },
            };
        })[0],
        d = o.useRef(),
        _ = [].concat(c.ctrls),
        h = [],
        f = s.usePrev(e) || 0,
        p = _.slice(e, f);
    function E(e, n) {
        for (var r = e; r < n; r++) {
            var a = _[r] || (_[r] = new ed(null, c.flush)),
                o = i ? i(r, a) : t[r];
            o &&
                ((o = h[r] =
                    (function (e) {
                        var t = eo(e);
                        return s.is.und(t.default) && (t.default = M(t, [!0 === t.immediate && "immediate"])), t;
                    })(o)),
                0 == r && ((d.current = o.ref), (o.ref = void 0)));
        }
    }
    O(
        function () {
            (_.length = e), E(f, e);
        },
        [e],
    ),
        O(function () {
            E(0, Math.min(f, e));
        }, n);
    var m = o.useMemo(function () {
            return eT.create(function () {
                return c.ctrls;
            });
        }, []),
        g = _.map(function (e, t) {
            return eh(e, h[t]);
        }),
        A = eI();
    r.useLayoutEffect(function () {
        l.current++, (c.ctrls = _), d.current && (d.current.current = m);
        var e = c.queue;
        e.length &&
            ((c.queue = []),
            s.each(e, function (e) {
                return e();
            })),
            s.each(p, function (e) {
                return e.dispose();
            }),
            s.each(_, function (e, t) {
                ef(e, g[t]), e.start({ default: A });
                var n = h[t];
                n && (d.current ? e.queue.push(n) : e.start(n));
            });
    }),
        s.useOnce(function () {
            return function () {
                s.each(c.ctrls, function (e) {
                    return e.dispose();
                });
            };
        });
    var I = g.map(function (e) {
        return a({}, e);
    });
    return i || 3 == arguments.length ? [I, m.start, m.stop] : I;
}
function ey(e, t) {
    var n = s.is.fun(e),
        i = eS(1, n ? e : [e], n ? t || [] : t),
        r = i[0][0],
        a = i[1],
        o = i[2];
    return n || 2 == arguments.length ? [r, a, o] : r;
}
function eC(e, t, n) {
    var i = s.is.fun(t) && t;
    i && !n && (n = []);
    var a = [],
        o = eS(
            e,
            function (e, n) {
                return (a[e] = n), L(t, e, n);
            },
            n || [{}],
        );
    if (
        (r.useLayoutEffect(function () {
            for (var e = s.is.obj(t) && t.reverse, n = 0; n < a.length; n++) {
                var i = a[n + (e ? 1 : -1)];
                i && a[n].update({ to: i.springs }).start();
            }
        }, n),
        i || 3 == arguments.length)
    ) {
        var l = o[1];
        return (
            (o[1] = f.useCallbackOne(function (e) {
                var t = s.is.obj(e) && e.reverse;
                return l(function (n, i) {
                    var r = L(e, n, i),
                        s = a[n + (t ? 1 : -1)];
                    return s && (r.to = s.springs), r;
                });
            }, n)),
            o
        );
    }
    return o[0];
}
var eN = "mount",
    ev = "enter",
    eR = "update",
    eO = "leave";
function eb(e, t, n) {
    var i,
        l,
        u,
        c,
        d,
        _ = t.ref,
        h = t.reset,
        f = t.sort,
        p = t.trail,
        E = void 0 === p ? 0 : p,
        m = t.expires,
        g = void 0 === m || m,
        A = s.toArray(e),
        I = [],
        T =
            ((i = A),
            (u = (l = t).key),
            (d = void 0 === (c = l.keys) ? u : c),
            s.is.und(d) ? i : s.is.fun(d) ? i.map(d) : s.toArray(d)),
        S = o.useRef(null),
        y = h ? null : S.current;
    r.useLayoutEffect(function () {
        S.current = I;
    }),
        s.useOnce(function () {
            return function () {
                return s.each(S.current, function (e) {
                    e.expired && clearTimeout(e.expirationId), e.ctrl.dispose();
                });
            };
        });
    var C = [];
    if (
        (y &&
            s.each(y, function (e, t) {
                e.expired ? clearTimeout(e.expirationId) : ~(t = C[t] = T.indexOf(e.key)) && (I[t] = e);
            }),
        s.each(A, function (e, t) {
            I[t] || (I[t] = { key: T[t], item: e, phase: eN, ctrl: new ed() });
        }),
        C.length)
    ) {
        var N = -1;
        s.each(C, function (e, n) {
            var i = y[n];
            ~e ? ((N = I.indexOf(i)), (I[N] = a(a({}, i), {}, { item: A[e] }))) : t.leave && I.splice(++N, 0, i);
        });
    }
    s.is.fun(f) &&
        I.sort(function (e, t) {
            return f(e.item, t.item);
        });
    var v = -E,
        R = s.useForceUpdate(),
        O = M(t),
        D = new Map();
    s.each(I, function (e, n) {
        var i,
            r,
            o = e.key,
            l = e.phase;
        if (l == eN) (i = t.enter), (r = ev);
        else {
            var u = 0 > T.indexOf(o);
            if (l != eO)
                if (u) (i = t.leave), (r = eO);
                else {
                    if (!(i = t.update)) return;
                    r = eR;
                }
            else {
                if (u) return;
                (i = t.enter), (r = ev);
            }
        }
        if (((i = b(i, e.item, n)), !(i = s.is.obj(i) ? k(i) : { to: i }).config)) {
            var c = t.config || O.config;
            i.config = b(c, e.item, n);
        }
        var d = a(a({}, O), {}, { delay: (v += E), reset: !1 }, i);
        r == ev && s.is.und(d.from) && (d.from = b(s.is.und(t.initial) || y ? t.from : t.initial, e.item, n));
        var _ = d.onRest;
        d.onRest = d.onNoopRest = function (e) {
            var t = S.current,
                n = t.find(function (e) {
                    return e.key === o;
                });
            if (n) {
                if ((s.is.fun(_) && !0 !== e.noop && _(e, n), e.cancelled && n.phase != eR)) {
                    n.phase = l;
                    return;
                }
                if (n.ctrl.idle) {
                    var i = t.every(function (e) {
                        return e.ctrl.idle;
                    });
                    if (n.phase == eO) {
                        var r = b(g, n.item);
                        if (!1 !== r) {
                            var a = !0 === r ? 0 : r;
                            if (((n.expired = !0), !i && a > 0)) {
                                a <= 0x7fffffff && (n.expirationId = setTimeout(R, a));
                                return;
                            }
                        }
                    }
                    i &&
                        t.some(function (e) {
                            return e.expired;
                        }) &&
                        R();
                }
            }
        };
        var h = eh(e.ctrl, d);
        D.set(e, { phase: r, springs: h, payload: d });
    });
    var L = eI();
    r.useLayoutEffect(
        function () {
            s.each(I, function (e) {
                e.ctrl.start({ default: L });
            });
        },
        [L],
    );
    var w = o.useMemo(function () {
        return eT.create(function () {
            return S.current.map(function (e) {
                return e.ctrl;
            });
        });
    }, []);
    o.useImperativeHandle(_, function () {
        return w;
    }),
        r.useLayoutEffect(
            function () {
                s.each(D, function (e, t) {
                    var n = e.phase,
                        i = e.springs,
                        r = e.payload;
                    ef(t.ctrl, i),
                        L.cancel ||
                            ((t.phase = n), n == ev && t.ctrl.start({ default: L }), t.ctrl[_ ? "update" : "start"](r));
                });
            },
            h ? void 0 : n,
        );
    var P = function (e) {
        return o.createElement(
            o.Fragment,
            null,
            I.map(function (t, n) {
                var i = e(a({}, (D.get(t) || t.ctrl).springs), t.item, t, n);
                return i && i.type
                    ? o.createElement(
                          i.type,
                          a({}, i.props, { key: s.is.str(t.key) || s.is.num(t.key) ? t.key : t.ctrl.id, ref: i.ref }),
                      )
                    : i;
            }),
        );
    };
    return 3 == arguments.length ? [P, w.start, w.stop] : P;
}
var eD = (function (e) {
    function t(t, n) {
        ((i = e.call(this) || this).source = t),
            (i.key = void 0),
            (i.idle = !0),
            (i.calc = void 0),
            (i.calc = s.createInterpolator.apply(void 0, n));
        var i,
            r = i._get(),
            a = s.is.arr(r) ? _.AnimatedArray : _.AnimatedValue;
        return _.setAnimated(g(i), a.create(r)), i;
    }
    d(t, e);
    var n = t.prototype;
    return (
        (n.advance = function (e) {
            var t = this._get(),
                n = this.get();
            s.isEqual(t, n) || (_.getAnimated(this).setValue(t), this._onChange(t, this.idle));
        }),
        (n._get = function () {
            var e = s.is.arr(this.source)
                ? this.source.map(function (e) {
                      return e.get();
                  })
                : s.toArray(this.source.get());
            return this.calc.apply(this, e);
        }),
        (n._reset = function () {
            s.each(_.getPayload(this), function (e) {
                return e.reset();
            }),
                e.prototype._reset.call(this);
        }),
        (n._start = function () {
            (this.idle = !1),
                e.prototype._start.call(this),
                h.skipAnimation ? ((this.idle = !0), this.advance()) : h.frameLoop.start(this);
        }),
        (n._attach = function () {
            var e = this,
                t = !0,
                n = 1;
            s.each(s.toArray(this.source), function (i) {
                z(i) && (i.idle || (t = !1), (n = Math.max(n, i.priority + 1))), i.addChild(e);
            }),
                (this.priority = n),
                t || (this._reset(), this._start());
        }),
        (n._detach = function () {
            var e = this;
            s.each(s.toArray(this.source), function (t) {
                t.removeChild(e);
            }),
                (this.idle = !0);
        }),
        (n.onParentChange = function (t) {
            "start" == t.type
                ? this.advance()
                : "change" == t.type
                  ? this.idle
                      ? this.advance()
                      : t.idle &&
                        ((this.idle = s.toArray(this.source).every(function (e) {
                            return !1 !== e.idle;
                        })),
                        this.idle &&
                            (this.advance(),
                            s.each(_.getPayload(this), function (e) {
                                e.done = !0;
                            })))
                  : "priority" == t.type &&
                    (this.priority = s.toArray(this.source).reduce(function (e, t) {
                        return Math.max(e, (t.priority || 0) + 1);
                    }, 0)),
                e.prototype.onParentChange.call(this, t);
        }),
        t
    );
})(Z);
s.Globals.assign({
    createStringInterpolator: A.createStringInterpolator,
    to: function (e, t) {
        return new eD(e, t);
    },
}),
    Object.keys(I).forEach(function (e) {
        "default" !== e &&
            Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                    return I[e];
                },
            });
    }),
    Object.defineProperty(t, "FrameLoop", {
        enumerable: !0,
        get: function () {
            return s.FrameLoop;
        },
    }),
    Object.defineProperty(t, "Globals", {
        enumerable: !0,
        get: function () {
            return s.Globals;
        },
    }),
    Object.defineProperty(t, "createInterpolator", {
        enumerable: !0,
        get: function () {
            return s.createInterpolator;
        },
    }),
    (t.BailSignal = $),
    (t.Controller = ed),
    (t.FrameValue = Z),
    (t.Interpolation = eD),
    (t.Spring = function (e) {
        return (0, e.children)(ey(m(e, ["children"])));
    }),
    (t.SpringContext = eA),
    (t.SpringHandle = eT),
    (t.SpringValue = en),
    (t.Trail = function (e) {
        var t = e.items,
            n = e.children,
            i = m(e, ["items", "children"]),
            r = eC(t.length, i);
        return t.map(function (e, t) {
            var i = n(e, t);
            return s.is.fun(i) ? i(r[t]) : i;
        });
    }),
    (t.Transition = function (e) {
        var t = e.items,
            n = e.children,
            i = m(e, ["items", "children"]);
        return o.createElement(o.Fragment, null, eb(t, i)(n));
    }),
    (t.config = T),
    (t.inferTo = k),
    (t.interpolate = function (e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
        return E.deprecateInterpolate(), new eD(e, n);
    }),
    (t.to = function (e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
        return new eD(e, n);
    }),
    (t.update = function () {
        return s.Globals.frameLoop.advance();
    }),
    (t.useChain = function (e, t, n) {
        void 0 === n && (n = 1e3),
            r.useLayoutEffect(function () {
                if (t) {
                    var i = 0;
                    s.each(e, function (e, r) {
                        if (e.current) {
                            var a = e.current.controllers;
                            if (a.length) {
                                var o = n * t[r];
                                isNaN(o) ? (o = i) : (i = o),
                                    s.each(a, function (e) {
                                        s.each(e.queue, function (e) {
                                            e.delay = o + (e.delay || 0);
                                        }),
                                            e.start();
                                    });
                            }
                        }
                    });
                } else {
                    var r = Promise.resolve();
                    s.each(e, function (e) {
                        var t = e.current || {},
                            n = t.controllers,
                            i = t.start;
                        if (n && n.length) {
                            var a = n.map(function (e) {
                                var t = e.queue;
                                return (e.queue = []), t;
                            });
                            r = r.then(function () {
                                return (
                                    s.each(n, function (e, t) {
                                        var n;
                                        return (n = e.queue).push.apply(n, a[t]);
                                    }),
                                    i()
                                );
                            });
                        }
                    });
                }
            });
    }),
    (t.useSpring = ey),
    (t.useSprings = eS),
    (t.useTrail = eC),
    (t.useTransition = eb);
