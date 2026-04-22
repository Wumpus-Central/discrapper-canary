"use strict";
function r(e) {
    return e && "object" == typeof e && "default" in e ? e.default : e;
}
Object.defineProperty(t, "__esModule", { value: !0 });
var i = n(131981),
    s = n(843455),
    a = r(n(984101)),
    o = n(64700),
    l = r(n(420979)),
    u = r(n(501984)),
    d = r(n(973280)),
    c = r(n(269274)),
    _ = n(294814),
    f = n(476575),
    E = n(337126),
    h = r(n(252446)),
    p = n(180224),
    m = r(n(901012)),
    g = r(n(394320)),
    A = n(111806),
    I = n(269270),
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
function N(e, t) {
    if (s.is.und(t.decay)) {
        var n = !s.is.und(t.tension) || !s.is.und(t.friction);
        (!n && s.is.und(t.frequency) && s.is.und(t.damping) && s.is.und(t.mass)) ||
            ((e.duration = void 0), (e.decay = void 0)),
            n && (e.frequency = void 0);
    } else e.duration = void 0;
}
var O = [],
    R = function () {
        (this.changed = !1),
            (this.values = O),
            (this.toValues = null),
            (this.fromValues = O),
            (this.to = void 0),
            (this.from = void 0),
            (this.config = new y()),
            (this.immediate = !1),
            (this.onStart = void 0),
            (this.onChange = void 0),
            (this.onRest = []);
    };
function v(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
}
var C = function (e, t) {
    return E.useMemoOne(e, t || [{}]);
};
function b(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
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
        var r = P;
        e.default && !0 !== e.default && (r = Object.keys((e = e.default)));
        for (
            var i,
                a = (function (e) {
                    var t = 0;
                    if ("u" < typeof Symbol || null == e[Symbol.iterator]) {
                        if (
                            Array.isArray(e) ||
                            (e = (function (e) {
                                if (e) {
                                    if ("string" == typeof e) return v(e, void 0);
                                    var t = Object.prototype.toString.call(e).slice(8, -1);
                                    if (
                                        ("Object" === t && e.constructor && (t = e.constructor.name),
                                        "Map" === t || "Set" === t)
                                    )
                                        return Array.from(e);
                                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                        return v(e, void 0);
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
                })(r);
            !(i = a()).done;
        ) {
            var o = i.value,
                l = e[o];
            s.is.und(l) || t.includes(o) || (n[o] = l);
        }
        return n;
    },
    P = ["pause", "cancel", "config", "immediate", "onDelayEnd", "onProps", "onStart", "onChange", "onRest"],
    U = {
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
            (s.each(e, function (e, r) {
                !U[r] && ((t[r] = e), n++);
            }),
            n)
        )
            return t;
    })(e);
    if (t) {
        var n = { to: t };
        return (
            s.each(e, function (e, r) {
                return r in t || (n[r] = e);
            }),
            n
        );
    }
    return a({}, e);
}
function x(e) {
    var t = s.getFluidConfig(e);
    return t
        ? x(t.get())
        : s.is.arr(e)
          ? e.map(x)
          : s.isAnimatedString(e)
            ? f.createStringInterpolator({ range: [0, 1], output: [e, e] })(1)
            : e;
}
function G(e, t) {
    var n = t.key,
        r = t.props,
        i = t.state,
        o = t.actions;
    return new Promise(function (t, l) {
        var u,
            d,
            c = !1,
            _ = D(r.cancel, n);
        function f() {
            i.resumeQueue.add(E), d.cancel(), (u = d.time - s.Globals.now());
        }
        function E() {
            u > 0 ? (i.pauseQueue.add(f), (d = s.Globals.frameLoop.setTimeout(h, u))) : h();
        }
        function h() {
            i.pauseQueue.delete(f), e <= (i.cancelId || 0) && (_ = !0);
            try {
                o.start(a(a({}, r), {}, { callId: e, delay: u, cancel: _, pause: c }), t);
            } catch (e) {
                l(e);
            }
        }
        _
            ? h()
            : ((u = b(r.delay || 0, n)), (c = D(r.pause, n)) ? (i.resumeQueue.add(E), o.pause()) : (o.resume(), E()));
    });
}
var V = function (e, t) {
        return 1 == t.length
            ? t[0]
            : t.some(function (e) {
                    return e.cancelled;
                })
              ? H(e)
              : t.every(function (e) {
                      return e.noop;
                  })
                ? F(e)
                : B(
                      e,
                      t.every(function (e) {
                          return e.finished;
                      }),
                  );
    },
    F = function (e, t) {
        return void 0 === t && (t = e.get()), { value: t, noop: !0, finished: !0, target: e };
    },
    B = function (e, t, n) {
        return void 0 === n && (n = e.get()), { value: n, finished: t, target: e };
    },
    H = function (e, t) {
        return void 0 === t && (t = e.get()), { value: t, cancelled: !0, target: e };
    };
function Y(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
}
function W(e, t, n, r) {
    return j.apply(this, arguments);
}
function j() {
    return (j = u(
        l.mark(function e(t, n, r, i) {
            var o, d, c, _, E;
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
                                    r.resumeQueue.add(e);
                                })
                            );
                        case 3:
                            if (
                                ((o = n.callId),
                                (d = n.parentId),
                                (c = n.onRest),
                                (_ = r.asyncTo),
                                (E = r.promise),
                                !(!d && t === _ && !n.reset))
                            ) {
                                e.next = 7;
                                break;
                            }
                            return e.abrupt("return", E);
                        case 7:
                            return e.abrupt(
                                "return",
                                (r.promise = u(
                                    l.mark(function e() {
                                        var h, p, m, g, A, I, T, S, y;
                                        return l.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return (
                                                                (r.asyncId = o),
                                                                (r.asyncTo = t),
                                                                (h = M(n, ["onRest"])),
                                                                (g = new Promise(function (e, t) {
                                                                    return (p = e), (m = t);
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
                                                                        (o <= (r.cancelId || 0) && H(i)) ||
                                                                        (o !== r.asyncId && B(i, !1));
                                                                    if (t) throw ((e.result = t), e);
                                                                }),
                                                                (T = A(function (e, t) {
                                                                    var n = new $();
                                                                    I(n);
                                                                    var d = s.is.obj(e)
                                                                        ? a({}, e)
                                                                        : a(a({}, t), {}, { to: e });
                                                                    return (
                                                                        (d.parentId = o),
                                                                        s.each(h, function (e, t) {
                                                                            s.is.und(d[t]) && (d[t] = e);
                                                                        }),
                                                                        i.start(d).then(
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
                                                                                                            !i.is(
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
                                                                                                                    r.resumeQueue.add(
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
                                                                                  var n, r, i;
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
                                                                                                                              return Y(
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
                                                                                                                              return Y(
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
                                                                                                  if ((r = n()).done) {
                                                                                                      e.next = 7;
                                                                                                      break;
                                                                                                  }
                                                                                                  return (
                                                                                                      (i = r.value),
                                                                                                      (e.next = 5),
                                                                                                      T(i)
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
                                                                      (y = Promise.resolve(t(T, i.stop.bind(i)))),
                                                                (e.next = 11),
                                                                Promise.all([y.then(p), g])
                                                            );
                                                        case 11:
                                                            (S = B(i, !0)), (e.next = 21);
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
                                                                o == r.asyncId &&
                                                                    ((r.asyncId = d),
                                                                    (r.asyncTo = d ? _ : void 0),
                                                                    (r.promise = d ? E : void 0)),
                                                                e.finish(21)
                                                            );
                                                        case 24:
                                                            return (
                                                                s.is.fun(c) &&
                                                                    f.batchedUpdates(function () {
                                                                        c(S);
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
        return c(t, e), t;
    })(h(Error)),
    z = function (e) {
        return e instanceof X;
    },
    q = 1,
    X = (function (e) {
        function t() {
            for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
            return (
                ((t = e.call.apply(e, [this].concat(r)) || this).id = q++),
                (t.key = void 0),
                (t._priority = 0),
                (t._children = new Set()),
                t
            );
        }
        c(t, e);
        var n = t.prototype;
        return (
            (n.get = function () {
                var e = _.getAnimated(this);
                return e && e.getValue();
            }),
            (n.to = function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return f.to(this, t);
            }),
            (n.interpolate = function () {
                p.deprecateInterpolate();
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return f.to(this, t);
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
                this.idle || f.frameLoop.start(this), this._emit({ type: "priority", parent: this, priority: e });
            }),
            (n._emit = function (e) {
                s.each(Array.from(this._children), function (t) {
                    t.onParentChange(e);
                });
            }),
            d(t, [
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
    Q = "CREATED",
    J = "IDLE",
    Z = "ACTIVE",
    ee = "PAUSED",
    et = "DISPOSED",
    en = (function (e) {
        function t(t, n) {
            var r;
            if (
                (((r = e.call(this) || this).key = void 0),
                (r.animation = new R()),
                (r.queue = void 0),
                (r._phase = Q),
                (r._state = { pauseQueue: new Set(), resumeQueue: new Set() }),
                (r._defaultProps = {}),
                (r._lastCallId = 0),
                (r._lastToId = 0),
                !s.is.und(t) || !s.is.und(n))
            ) {
                var i = s.is.obj(t) ? a({}, t) : a(a({}, n), {}, { from: t });
                (i.default = !0), r.start(i);
            }
            return r;
        }
        c(t, e);
        var n,
            r = t.prototype;
        return (
            (r.advance = function (e) {
                var t = this,
                    n = !0,
                    r = !1,
                    i = this.animation,
                    a = i.config,
                    o = i.toValues,
                    l = _.getPayload(i.to);
                if (!l) {
                    var u = s.getFluidConfig(i.to);
                    u && (o = s.toArray(u.get()));
                }
                return (
                    i.values.forEach(function (u, d) {
                        if (!u.done) {
                            var c = l ? l[d].lastPosition : o[d],
                                _ = i.immediate,
                                f = c;
                            if (!_) {
                                if (((f = u.lastPosition), a.tension <= 0)) {
                                    u.done = !0;
                                    return;
                                }
                                var E = (u.elapsedTime += e),
                                    h = i.fromValues[d],
                                    p =
                                        null != u.v0
                                            ? u.v0
                                            : (u.v0 = s.is.arr(a.velocity) ? a.velocity[d] : a.velocity);
                                if (s.is.und(a.duration))
                                    if (a.decay) {
                                        var m = !0 === a.decay ? 0.998 : a.decay,
                                            g = Math.exp(-(1 - m) * E);
                                        (f = h + (p / (1 - m)) * (1 - g)),
                                            (_ = 0.1 > Math.abs(u.lastPosition - f)),
                                            (A = p * g);
                                    } else
                                        for (
                                            var A = null == u.lastVelocity ? p : u.lastVelocity,
                                                I =
                                                    a.precision ||
                                                    (h == c ? 0.005 : Math.min(1, 0.001 * Math.abs(c - h))),
                                                T = a.restVelocity || I / 10,
                                                S = a.clamp ? 0 : a.bounce,
                                                y = !s.is.und(S),
                                                N = h == c ? u.v0 > 0 : h < c,
                                                O = !1,
                                                R = Math.ceil(e / 1),
                                                v = 0;
                                            v < R && !(!(Math.abs(A) > T) && (_ = Math.abs(c - f) <= I));
                                            ++v
                                        ) {
                                            y && (f == c || f > c == N) && ((A = -A * S), (f = c));
                                            var C =
                                                (-(1e-6 * a.tension) * (f - c) + -(0.001 * a.friction) * A) / a.mass;
                                            (A += +C), (f += +A);
                                        }
                                else {
                                    var b = a.progress || 0;
                                    a.duration <= 0 ? (b = 1) : (b += (1 - b) * Math.min(1, E / a.duration)),
                                        (A = ((f = h + a.easing(b) * (c - h)) - u.lastPosition) / e),
                                        (_ = 1 == b);
                                }
                                (u.lastVelocity = A),
                                    Number.isNaN(f) && (console.warn("Got NaN while animating:", t), (_ = !0));
                            }
                            l && !l[d].done && (_ = !1),
                                _ ? (u.done = !0) : (n = !1),
                                u.setValue(f, a.round) && (r = !0);
                        }
                    }),
                    n ? this.finish() : r && this._onChange(this.get()),
                    n
                );
            }),
            (r.is = function (e) {
                return this._phase == e;
            }),
            (r.set = function (e) {
                var t = this;
                return (
                    f.batchedUpdates(function () {
                        if ((t._focus(e), t._set(e) && !t.is(Z))) return t._onChange(t.get(), !0);
                        t._stop();
                    }),
                    this
                );
            }),
            (r.pause = function () {
                er(this, "pause"),
                    this.is(ee) ||
                        ((this._phase = ee),
                        s.flush(this._state.pauseQueue, function (e) {
                            return e();
                        }));
            }),
            (r.resume = function () {
                er(this, "resume"),
                    this.is(ee) &&
                        (this._start(),
                        s.flush(this._state.resumeQueue, function (e) {
                            return e();
                        }));
            }),
            (r.finish = function (e) {
                var t = this;
                if ((this.resume(), this.is(Z))) {
                    var n = this.animation;
                    !n.config.decay && s.is.und(e) && (e = n.to),
                        s.is.und(e) || this._set(e),
                        f.batchedUpdates(function () {
                            !n.changed && ((n.changed = !0), n.onStart && n.onStart(t)), t._stop();
                        });
                }
                return this;
            }),
            (r.update = function (e) {
                return er(this, "update"), (this.queue || (this.queue = [])).push(e), this;
            }),
            (n = u(
                l.mark(function e(t, n) {
                    var r,
                        i,
                        o = this;
                    return l.wrap(
                        function (e) {
                            for (;;)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        return (
                                            er(this, "start"),
                                            s.is.und(t)
                                                ? ((r = this.queue || []), (this.queue = []))
                                                : (r = [s.is.obj(t) ? t : a(a({}, n), {}, { to: t })]),
                                            (e.next = 4),
                                            Promise.all(
                                                r.map(function (e) {
                                                    return o._update(e);
                                                }),
                                            )
                                        );
                                    case 4:
                                        return (i = e.sent), e.abrupt("return", V(this, i));
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
            (r.start = function (e, t) {
                return n.apply(this, arguments);
            }),
            (r.stop = function (e) {
                var t = this;
                return (
                    this.is(et) ||
                        (K(this._state, this._lastCallId),
                        this._focus(this.get()),
                        f.batchedUpdates(function () {
                            return t._stop(e);
                        })),
                    this
                );
            }),
            (r.reset = function () {
                this._update({ reset: !0 });
            }),
            (r.dispose = function () {
                this.is(et) || (this.animation && (this.animation.onRest = []), this.stop(), (this._phase = et));
            }),
            (r.onParentChange = function (t) {
                e.prototype.onParentChange.call(this, t),
                    "change" == t.type
                        ? !this.is(Z) && (this._reset(), this.is(ee) || this._start())
                        : "priority" == t.type && (this.priority = t.priority + 1);
            }),
            (r._prepareNode = function (e) {
                var t = e.to,
                    n = e.from,
                    r = e.reverse,
                    i = this.key || "",
                    a = {
                        to: (t = !s.is.obj(t) || s.getFluidConfig(t) ? t : t[i]),
                        from: (n = !s.is.obj(n) || s.getFluidConfig(n) ? n : n[i]),
                    };
                if (this.is(Q)) {
                    if (r) {
                        var o = [n, t];
                        (t = o[0]), (n = o[1]);
                    }
                    n = s.getFluidValue(n);
                    var l = this._updateNode(s.is.und(n) ? s.getFluidValue(t) : n);
                    l && !s.is.und(n) && l.setValue(n);
                }
                return a;
            }),
            (r._updateNode = function (e) {
                var t = _.getAnimated(this);
                if (!s.is.und(e)) {
                    var n = this._getNodeType(e);
                    (t && t.constructor === n) || _.setAnimated(this, (t = n.create(e)));
                }
                return t;
            }),
            (r._getNodeType = function (e) {
                var t = _.getAnimated(e);
                return t
                    ? t.constructor
                    : s.is.arr(e)
                      ? _.AnimatedArray
                      : s.isAnimatedString(e)
                        ? _.AnimatedString
                        : _.AnimatedValue;
            }),
            (r._update = function (e, t) {
                var n = this,
                    r = this._defaultProps,
                    i = function (t) {
                        var n = w(e, t);
                        s.is.und(n) || (r[t] = n), r[t] && (e[t] = r[t]);
                    };
                i("cancel"), i("pause");
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
                }).then(function (r) {
                    if (e.loop && r.finished && !(t && r.noop)) {
                        var i = ea(e);
                        if (i) return n._update(i, !0);
                    }
                    return r;
                });
            }),
            (r._merge = function (e, t, n) {
                if (t.cancel) return this.stop(!0), n(H(this));
                var r = this.key,
                    i = this.animation,
                    o = this._defaultProps,
                    l = !s.is.und(e.to),
                    u = !s.is.und(e.from);
                if (l || u)
                    if (!(t.callId > this._lastToId)) return n(H(this));
                    else this._lastToId = t.callId;
                var d = function (e) {
                        return s.is.und(t[e]) ? o[e] : t[e];
                    },
                    c = ei(d("onDelayEnd"), r);
                c && c(t, this), t.default && M(t, ["pause", "cancel"], o);
                var E = i.to,
                    h = i.from,
                    p = e.to,
                    m = void 0 === p ? E : p,
                    g = e.from,
                    A = void 0 === g ? h : g;
                if ((u && !l && (m = A), t.reverse)) {
                    var I = [A, m];
                    (m = I[0]), (A = I[1]);
                }
                var T = !s.isEqual(A, h);
                T && (i.from = A);
                var y = !s.isEqual(m, E);
                y && this._focus(m);
                var O = s.getFluidConfig(m),
                    R = s.getFluidConfig(A);
                R && (A = R.get());
                var v = s.is.arr(t.to) || s.is.fun(t.to),
                    C = i.config,
                    L = C.decay,
                    w = C.velocity;
                t.config &&
                    !v &&
                    (function (e, t, n) {
                        for (var r in (n && (N((n = a({}, n)), t), (t = a(a({}, n), t))),
                        N(e, t),
                        Object.assign(e, t),
                        S))
                            null == e[r] && (e[r] = S[r]);
                        var i = e.mass,
                            o = e.frequency,
                            l = e.damping;
                        s.is.und(o) ||
                            (o < 0.01 && (o = 0.01),
                            l < 0 && (l = 0),
                            (e.tension = Math.pow((2 * Math.PI) / o, 2) * i),
                            (e.friction = (4 * Math.PI * l * i) / o));
                    })(C, b(t.config, r), t.config !== o.config ? b(o.config, r) : void 0);
                var P = _.getAnimated(this);
                if (!P || s.is.und(m)) return n(B(this, !0));
                var U = s.is.und(t.reset) ? u && !t.default : !s.is.und(A) && D(t.reset, r),
                    k = U ? A : this.get(),
                    G = x(m),
                    V = s.is.num(G) || s.is.arr(G) || s.isAnimatedString(G),
                    Y = !v && (!V || D(o.immediate || t.immediate, r));
                if (y)
                    if (Y) P = this._updateNode(G);
                    else {
                        var j = this._getNodeType(m);
                        if (j !== P.constructor)
                            throw Error(
                                "Cannot animate between " +
                                    P.constructor.name +
                                    " and " +
                                    j.name +
                                    ', as the "to" prop suggests',
                            );
                    }
                var K = P.constructor,
                    $ = !!O,
                    z = !1;
                if (!$) {
                    var q = U || (this.is(Q) && T);
                    (y || q) && ($ = !(z = s.isEqual(x(k), G))),
                        (s.isEqual(C.decay, L) && s.isEqual(C.velocity, w)) || ($ = !0);
                }
                if ((z && this.is(Z) && (i.changed && !U ? ($ = !0) : $ || this._stop()), !v)) {
                    ($ || s.getFluidConfig(E)) &&
                        ((i.values = P.getPayload()),
                        (i.toValues = O ? null : K == _.AnimatedString ? [1] : s.toArray(G))),
                        (i.immediate = Y),
                        (i.onStart = ei(d("onStart"), r)),
                        (i.onChange = ei(d("onChange"), r));
                    var X = i.onRest,
                        ee = U && !t.onRest ? X[0] || s.noop : es(ei(d("onRest"), r), this);
                    if ($) {
                        i.onRest = [ee, es(n, this)];
                        var et = +!U;
                        et < X.length &&
                            f.batchedUpdates(function () {
                                for (; et < X.length; et++) X[et]();
                            });
                    } else (U || t.onRest) && (i.onRest[0] = ee);
                }
                var en = ei(d("onProps"), r);
                if ((en && en(t, this), U && P.setValue(k), v)) n(W(t.to, t, this._state, this));
                else if ($) U && (this._phase = J), this._reset(), this._start();
                else if (this.is(Z) && !y) i.onRest.push(es(n, this));
                else {
                    let e = F(this, k),
                        t = ei(d("onNoopRest"), r);
                    null != t && t(e), n(e);
                }
            }),
            (r._focus = function (e) {
                var t = this.animation;
                if (e !== t.to) {
                    var n = s.getFluidConfig(t.to);
                    n && n.removeChild(this), (t.to = e);
                    var r = 0;
                    (n = s.getFluidConfig(e)) && (n.addChild(this), z(e) && (r = (e.priority || 0) + 1)),
                        (this.priority = r);
                }
            }),
            (r._set = function (e) {
                var t = s.getFluidConfig(e);
                t && (e = t.get());
                var n = _.getAnimated(this),
                    r = n && n.getValue();
                return n ? n.setValue(e) : this._updateNode(e), !s.isEqual(e, r);
            }),
            (r._onChange = function (t, n) {
                void 0 === n && (n = !1);
                var r = this.animation;
                r.changed || n || ((r.changed = !0), r.onStart && r.onStart(this)),
                    r.onChange && r.onChange(t, this),
                    e.prototype._onChange.call(this, t, n);
            }),
            (r._reset = function () {
                var t = this.animation;
                _.getAnimated(this).reset(t.to),
                    this.is(Z) || (t.changed = !1),
                    t.immediate ||
                        (t.fromValues = t.values.map(function (e) {
                            return e.lastPosition;
                        })),
                    e.prototype._reset.call(this);
            }),
            (r._start = function () {
                this.is(Z) ||
                    ((this._phase = Z),
                    e.prototype._start.call(this),
                    f.skipAnimation ? this.finish() : f.frameLoop.start(this));
            }),
            (r._stop = function (e) {
                if ((this.resume(), this.is(Z))) {
                    (this._phase = J), this._onChange(this.get(), !0);
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
            d(t, [
                {
                    key: "idle",
                    get: function () {
                        return !this.is(Z) && !this._state.asyncTo;
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
    })(X);
function er(e, t) {
    if (e.is(et)) throw Error('Cannot call "' + t + '" of disposed "' + e.constructor.name + '" object');
}
function ei(e, t) {
    return s.is.fun(e) ? e : t && e ? e[t] : void 0;
}
var es = function (e, t) {
    var n = t.animation.to;
    return e
        ? function (r) {
              if (r) e(H(t));
              else {
                  var i = x(n),
                      a = x(t.get());
                  e(B(t, s.isEqual(a, i)));
              }
          }
        : s.noop;
};
function ea(e, t, n) {
    void 0 === t && (t = e.loop), void 0 === n && (n = e.to);
    var r = b(t);
    if (r) {
        var i = !0 !== r && k(r),
            o = (i || e).reverse,
            l = !i || i.reset;
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
                i,
            ),
        );
    }
}
function eo(e) {
    var t = (e = k(e)),
        n = t.to,
        r = t.from,
        i = new Set();
    return (
        r ? el(r, i) : delete e.from,
        s.is.obj(n) ? el(n, i) : n || delete e.to,
        (e.keys = i.size ? Array.from(i) : null),
        e
    );
}
function el(e, t) {
    s.each(e, function (e, n) {
        return null != e && t.add(n);
    });
}
var eu = ["onStart", "onChange", "onRest"],
    ed = 1,
    ec = (function () {
        function e(e, t) {
            (this.id = ed++),
                (this.springs = {}),
                (this.queue = []),
                (this._flush = void 0),
                (this._initialProps = void 0),
                (this._phase = Q),
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
                    r = t.onChange,
                    i = t.onRest,
                    a = this._active.size > 0;
                a &&
                    this._phase != Z &&
                    ((this._phase = Z),
                    s.flush(n, function (t) {
                        return t(e);
                    }));
                var o = (r.size || (!a && i.size)) && this.get();
                s.flush(r, function (e) {
                    return e(o);
                }),
                    a ||
                        ((this._phase = J),
                        s.flush(i, function (e) {
                            var t = e[0],
                                n = e[1];
                            (n.value = o), t(n);
                        }));
            }),
            (t.onParentChange = function (e) {
                "change" == e.type &&
                    (this._active[e.idle ? "delete" : "add"](e.parent), f.frameLoop.onFrame(this._onFrame));
            }),
            d(e, [
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
            return (function e(t, n, r) {
                var i = n.to,
                    a = n.loop,
                    o = n.onRest;
                a && (n.loop = !1);
                var l = s.is.arr(i) || s.is.fun(i) ? i : void 0;
                l
                    ? ((n.to = void 0), (n.onRest = void 0))
                    : s.each(eu, function (e) {
                          var r = n[e];
                          if (s.is.fun(r)) {
                              var i = t._events[e];
                              i instanceof Set
                                  ? (n[e] = function () {
                                        return i.add(r);
                                    })
                                  : (n[e] = function (e) {
                                        var t = e.finished,
                                            n = e.cancelled,
                                            s = i.get(r);
                                        s
                                            ? (t || (s.finished = !1), n && (s.cancelled = !0))
                                            : i.set(r, { value: null, finished: t, cancelled: n });
                                    });
                          }
                      });
                var u = (n.keys || Object.keys(t.springs)).map(function (e) {
                        return t.springs[e].start(n);
                    }),
                    d = t._state;
                return (
                    l
                        ? u.push(
                              G(++t._lastAsyncId, {
                                  props: n,
                                  state: d,
                                  actions: {
                                      pause: s.noop,
                                      resume: s.noop,
                                      start: function (e, n) {
                                          if (((e.onRest = o), e.cancel)) s.is.und(w(e, "cancel")) || K(d, e.callId);
                                          else n(W(l, e, d, t));
                                      },
                                  },
                              }),
                          )
                        : n.keys || !0 !== n.cancel || K(d, t._lastAsyncId),
                    Promise.all(u).then(function (s) {
                        var o = V(t, s);
                        if (a && o.finished && !(r && o.noop)) {
                            var l = ea(n, a, i);
                            if (l) return em(t, [l]), e(t, l, !0);
                        }
                        return o;
                    })
                );
            })(e, t);
        }),
    ).then(function (t) {
        return V(e, t);
    });
}
function ef(e, t) {
    var n = a({}, e.springs);
    return (
        t &&
            s.each(s.toArray(t), function (e) {
                s.is.und(e.keys) && (e = eo(e)),
                    s.is.obj(e.to) || (e = a(a({}, e), {}, { to: void 0 })),
                    ep(n, e, function (e) {
                        return eh(e);
                    });
            }),
        n
    );
}
function eE(e, t) {
    s.each(t, function (t, n) {
        e.springs[n] || ((e.springs[n] = t), t.addChild(e));
    });
}
function eh(e, t) {
    var n = new en();
    return (n.key = e), t && n.addChild(t), n;
}
function ep(e, t, n) {
    t.keys &&
        s.each(t.keys, function (r) {
            (e[r] || (e[r] = n(r)))._prepareNode(t);
        });
}
function em(e, t) {
    s.each(t, function (t) {
        ep(e.springs, t, function (t) {
            return eh(t, e);
        });
    });
}
var eg = o.createContext({}),
    eA = function (e) {
        var t = e.children,
            n = m(e, ["children"]),
            r = o.useContext(eg);
        n = C(
            function () {
                return a(a({}, r), n);
            },
            [r, n.pause, n.cancel, n.immediate, n.config],
        );
        var i = eg.Provider;
        return o.createElement(i, { value: n }, t);
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
                            var r;
                            return l.wrap(function (n) {
                                for (;;)
                                    switch ((n.prev = n.next)) {
                                        case 0:
                                            return (
                                                (n.next = 2),
                                                Promise.all(
                                                    e().map(function (e, n) {
                                                        var r = L(t, n, e);
                                                        return e.start(r);
                                                    }),
                                                )
                                            );
                                        case 2:
                                            return (
                                                (r = n.sent),
                                                n.abrupt("return", {
                                                    value: r.map(function (e) {
                                                        return e.value;
                                                    }),
                                                    finished: r.every(function (e) {
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
    var r = s.is.fun(t) && t;
    r && !n && (n = []);
    var l = o.useRef(0),
        u = s.useForceUpdate(),
        d = o.useState(function () {
            return {
                ctrls: [],
                queue: [],
                flush: function (e, t) {
                    var n = ef(e, t);
                    return !(l.current > 0) ||
                        d.queue.length ||
                        Object.keys(n).some(function (t) {
                            return !e.springs[t];
                        })
                        ? new Promise(function (r) {
                              eE(e, n),
                                  d.queue.push(function () {
                                      r(e_(e, t));
                                  }),
                                  u();
                          })
                        : e_(e, t);
                },
            };
        })[0],
        c = o.useRef(),
        _ = [].concat(d.ctrls),
        f = [],
        E = s.usePrev(e) || 0,
        h = _.slice(e, E);
    function p(e, n) {
        for (var i = e; i < n; i++) {
            var a = _[i] || (_[i] = new ec(null, d.flush)),
                o = r ? r(i, a) : t[i];
            o &&
                ((o = f[i] =
                    (function (e) {
                        var t = eo(e);
                        return s.is.und(t.default) && (t.default = M(t, [!0 === t.immediate && "immediate"])), t;
                    })(o)),
                0 == i && ((c.current = o.ref), (o.ref = void 0)));
        }
    }
    C(
        function () {
            (_.length = e), p(E, e);
        },
        [e],
    ),
        C(function () {
            p(0, Math.min(E, e));
        }, n);
    var m = o.useMemo(function () {
            return eT.create(function () {
                return d.ctrls;
            });
        }, []),
        g = _.map(function (e, t) {
            return ef(e, f[t]);
        }),
        A = eI();
    i.useLayoutEffect(function () {
        l.current++, (d.ctrls = _), c.current && (c.current.current = m);
        var e = d.queue;
        e.length &&
            ((d.queue = []),
            s.each(e, function (e) {
                return e();
            })),
            s.each(h, function (e) {
                return e.dispose();
            }),
            s.each(_, function (e, t) {
                eE(e, g[t]), e.start({ default: A });
                var n = f[t];
                n && (c.current ? e.queue.push(n) : e.start(n));
            });
    }),
        s.useOnce(function () {
            return function () {
                s.each(d.ctrls, function (e) {
                    return e.dispose();
                });
            };
        });
    var I = g.map(function (e) {
        return a({}, e);
    });
    return r || 3 == arguments.length ? [I, m.start, m.stop] : I;
}
function ey(e, t) {
    var n = s.is.fun(e),
        r = eS(1, n ? e : [e], n ? t || [] : t),
        i = r[0][0],
        a = r[1],
        o = r[2];
    return n || 2 == arguments.length ? [i, a, o] : i;
}
function eN(e, t, n) {
    var r = s.is.fun(t) && t;
    r && !n && (n = []);
    var a = [],
        o = eS(
            e,
            function (e, n) {
                return (a[e] = n), L(t, e, n);
            },
            n || [{}],
        );
    if (
        (i.useLayoutEffect(function () {
            for (var e = s.is.obj(t) && t.reverse, n = 0; n < a.length; n++) {
                var r = a[n + (e ? 1 : -1)];
                r && a[n].update({ to: r.springs }).start();
            }
        }, n),
        r || 3 == arguments.length)
    ) {
        var l = o[1];
        return (
            (o[1] = E.useCallbackOne(function (e) {
                var t = s.is.obj(e) && e.reverse;
                return l(function (n, r) {
                    var i = L(e, n, r),
                        s = a[n + (t ? 1 : -1)];
                    return s && (i.to = s.springs), i;
                });
            }, n)),
            o
        );
    }
    return o[0];
}
var eO = "mount",
    eR = "enter",
    ev = "update",
    eC = "leave";
function eb(e, t, n) {
    var r,
        l,
        u,
        d,
        c,
        _ = t.ref,
        f = t.reset,
        E = t.sort,
        h = t.trail,
        p = void 0 === h ? 0 : h,
        m = t.expires,
        g = void 0 === m || m,
        A = s.toArray(e),
        I = [],
        T =
            ((r = A),
            (u = (l = t).key),
            (c = void 0 === (d = l.keys) ? u : d),
            s.is.und(c) ? r : s.is.fun(c) ? r.map(c) : s.toArray(c)),
        S = o.useRef(null),
        y = f ? null : S.current;
    i.useLayoutEffect(function () {
        S.current = I;
    }),
        s.useOnce(function () {
            return function () {
                return s.each(S.current, function (e) {
                    e.expired && clearTimeout(e.expirationId), e.ctrl.dispose();
                });
            };
        });
    var N = [];
    if (
        (y &&
            s.each(y, function (e, t) {
                e.expired ? clearTimeout(e.expirationId) : ~(t = N[t] = T.indexOf(e.key)) && (I[t] = e);
            }),
        s.each(A, function (e, t) {
            I[t] || (I[t] = { key: T[t], item: e, phase: eO, ctrl: new ec() });
        }),
        N.length)
    ) {
        var O = -1;
        s.each(N, function (e, n) {
            var r = y[n];
            ~e ? ((O = I.indexOf(r)), (I[O] = a(a({}, r), {}, { item: A[e] }))) : t.leave && I.splice(++O, 0, r);
        });
    }
    s.is.fun(E) &&
        I.sort(function (e, t) {
            return E(e.item, t.item);
        });
    var R = -p,
        v = s.useForceUpdate(),
        C = M(t),
        D = new Map();
    s.each(I, function (e, n) {
        var r,
            i,
            o = e.key,
            l = e.phase;
        if (l == eO) (r = t.enter), (i = eR);
        else {
            var u = 0 > T.indexOf(o);
            if (l != eC)
                if (u) (r = t.leave), (i = eC);
                else {
                    if (!(r = t.update)) return;
                    i = ev;
                }
            else {
                if (u) return;
                (r = t.enter), (i = eR);
            }
        }
        if (((r = b(r, e.item, n)), !(r = s.is.obj(r) ? k(r) : { to: r }).config)) {
            var d = t.config || C.config;
            r.config = b(d, e.item, n);
        }
        var c = a(a({}, C), {}, { delay: (R += p), reset: !1 }, r);
        i == eR && s.is.und(c.from) && (c.from = b(s.is.und(t.initial) || y ? t.from : t.initial, e.item, n));
        var _ = c.onRest;
        c.onRest = c.onNoopRest = function (e) {
            var t = S.current,
                n = t.find(function (e) {
                    return e.key === o;
                });
            if (n) {
                if ((s.is.fun(_) && !0 !== e.noop && _(e, n), e.cancelled && n.phase != ev)) {
                    n.phase = l;
                    return;
                }
                if (n.ctrl.idle) {
                    var r = t.every(function (e) {
                        return e.ctrl.idle;
                    });
                    if (n.phase == eC) {
                        var i = b(g, n.item);
                        if (!1 !== i) {
                            var a = !0 === i ? 0 : i;
                            if (((n.expired = !0), !r && a > 0)) {
                                a <= 0x7fffffff && (n.expirationId = setTimeout(v, a));
                                return;
                            }
                        }
                    }
                    r &&
                        t.some(function (e) {
                            return e.expired;
                        }) &&
                        v();
                }
            }
        };
        var f = ef(e.ctrl, c);
        D.set(e, { phase: i, springs: f, payload: c });
    });
    var L = eI();
    i.useLayoutEffect(
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
        i.useLayoutEffect(
            function () {
                s.each(D, function (e, t) {
                    var n = e.phase,
                        r = e.springs,
                        i = e.payload;
                    eE(t.ctrl, r),
                        L.cancel ||
                            ((t.phase = n), n == eR && t.ctrl.start({ default: L }), t.ctrl[_ ? "update" : "start"](i));
                });
            },
            f ? void 0 : n,
        );
    var P = function (e) {
        return o.createElement(
            o.Fragment,
            null,
            I.map(function (t, n) {
                var r = e(a({}, (D.get(t) || t.ctrl).springs), t.item, t, n);
                return r && r.type
                    ? o.createElement(
                          r.type,
                          a({}, r.props, { key: s.is.str(t.key) || s.is.num(t.key) ? t.key : t.ctrl.id, ref: r.ref }),
                      )
                    : r;
            }),
        );
    };
    return 3 == arguments.length ? [P, w.start, w.stop] : P;
}
var eD = (function (e) {
    function t(t, n) {
        ((r = e.call(this) || this).source = t),
            (r.key = void 0),
            (r.idle = !0),
            (r.calc = void 0),
            (r.calc = s.createInterpolator.apply(void 0, n));
        var r,
            i = r._get(),
            a = s.is.arr(i) ? _.AnimatedArray : _.AnimatedValue;
        return _.setAnimated(g(r), a.create(i)), r;
    }
    c(t, e);
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
                f.skipAnimation ? ((this.idle = !0), this.advance()) : f.frameLoop.start(this);
        }),
        (n._attach = function () {
            var e = this,
                t = !0,
                n = 1;
            s.each(s.toArray(this.source), function (r) {
                z(r) && (r.idle || (t = !1), (n = Math.max(n, r.priority + 1))), r.addChild(e);
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
})(X);
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
    (t.Controller = ec),
    (t.FrameValue = X),
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
            r = m(e, ["items", "children"]),
            i = eN(t.length, r);
        return t.map(function (e, t) {
            var r = n(e, t);
            return s.is.fun(r) ? r(i[t]) : r;
        });
    }),
    (t.Transition = function (e) {
        var t = e.items,
            n = e.children,
            r = m(e, ["items", "children"]);
        return o.createElement(o.Fragment, null, eb(t, r)(n));
    }),
    (t.config = T),
    (t.inferTo = k),
    (t.interpolate = function (e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return p.deprecateInterpolate(), new eD(e, n);
    }),
    (t.to = function (e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return new eD(e, n);
    }),
    (t.update = function () {
        return s.Globals.frameLoop.advance();
    }),
    (t.useChain = function (e, t, n) {
        void 0 === n && (n = 1e3),
            i.useLayoutEffect(function () {
                if (t) {
                    var r = 0;
                    s.each(e, function (e, i) {
                        if (e.current) {
                            var a = e.current.controllers;
                            if (a.length) {
                                var o = n * t[i];
                                isNaN(o) ? (o = r) : (r = o),
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
                    var i = Promise.resolve();
                    s.each(e, function (e) {
                        var t = e.current || {},
                            n = t.controllers,
                            r = t.start;
                        if (n && n.length) {
                            var a = n.map(function (e) {
                                var t = e.queue;
                                return (e.queue = []), t;
                            });
                            i = i.then(function () {
                                return (
                                    s.each(n, function (e, t) {
                                        var n;
                                        return (n = e.queue).push.apply(n, a[t]);
                                    }),
                                    r()
                                );
                            });
                        }
                    });
                }
            });
    }),
    (t.useSpring = ey),
    (t.useSprings = eS),
    (t.useTrail = eN),
    (t.useTransition = eb);
