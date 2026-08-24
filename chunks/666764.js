"use strict";
function n(e) {
    return e && "object" == typeof e && "default" in e ? e.default : e;
}
Object.defineProperty(t, "__esModule", { value: !0 });
var o = r(209801),
    i = r(675106),
    a = n(r(984101)),
    s = r(582128),
    l = n(r(420979)),
    u = n(r(501984)),
    c = n(r(973280)),
    f = n(r(269274)),
    p = r(472090),
    d = r(672722),
    h = r(727522),
    m = n(r(252446)),
    v = r(134539),
    y = n(r(901012)),
    g = n(r(394320)),
    b = r(54482),
    w = r(865951),
    _ = {
        default: { tension: 170, friction: 26 },
        gentle: { tension: 120, friction: 14 },
        wobbly: { tension: 180, friction: 12 },
        stiff: { tension: 210, friction: 20 },
        slow: { tension: 280, friction: 60 },
        molasses: { tension: 280, friction: 120 },
    },
    S = a(
        a({}, _.default),
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
    x = function () {
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
function E(e, t) {
    if (i.is.und(t.decay)) {
        var r = !i.is.und(t.tension) || !i.is.und(t.friction);
        (!r && i.is.und(t.frequency) && i.is.und(t.damping) && i.is.und(t.mass)) ||
            ((e.duration = void 0), (e.decay = void 0)),
            r && (e.frequency = void 0);
    } else e.duration = void 0;
}
var k = [],
    C = function () {
        (this.changed = !1),
            (this.values = k),
            (this.toValues = null),
            (this.fromValues = k),
            (this.to = void 0),
            (this.from = void 0),
            (this.config = new x()),
            (this.immediate = !1),
            (this.onStart = void 0),
            (this.onChange = void 0),
            (this.onRest = []);
    };
function T(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
    return n;
}
var M = function (e, t) {
    return h.useMemoOne(e, t || [{}]);
};
function P(e) {
    for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
    return i.is.fun(e) ? e.apply(void 0, r) : e;
}
var A = function (e, t) {
        return !0 === e || !!(t && e && (i.is.fun(e) ? e(t) : i.toArray(e).includes(t)));
    },
    O = function (e, t, r) {
        return e && (i.is.fun(e) ? e(t, r) : i.is.arr(e) ? e[t] : a({}, e));
    },
    I = function (e, t) {
        return !0 === e.default ? e[t] : e.default ? e.default[t] : void 0;
    },
    D = function (e, t, r) {
        void 0 === t && (t = []), void 0 === r && (r = {});
        var n = L;
        e.default && !0 !== e.default && (n = Object.keys((e = e.default)));
        for (
            var o,
                a = (function (e) {
                    var t = 0;
                    if ("u" < typeof Symbol || null == e[Symbol.iterator]) {
                        if (
                            Array.isArray(e) ||
                            (e = (function (e) {
                                if (e) {
                                    if ("string" == typeof e) return T(e, void 0);
                                    var t = Object.prototype.toString.call(e).slice(8, -1);
                                    if (
                                        ("Object" === t && e.constructor && (t = e.constructor.name),
                                        "Map" === t || "Set" === t)
                                    )
                                        return Array.from(e);
                                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                        return T(e, void 0);
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
                })(n);
            !(o = a()).done;
        ) {
            var s = o.value,
                l = e[s];
            i.is.und(l) || t.includes(s) || (r[s] = l);
        }
        return r;
    },
    L = ["pause", "cancel", "config", "immediate", "onDelayEnd", "onProps", "onStart", "onChange", "onRest"],
    R = {
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
function F(e) {
    var t = (function (e) {
        var t = {},
            r = 0;
        if (
            (i.each(e, function (e, n) {
                !R[n] && ((t[n] = e), r++);
            }),
            r)
        )
            return t;
    })(e);
    if (t) {
        var r = { to: t };
        return (
            i.each(e, function (e, n) {
                return n in t || (r[n] = e);
            }),
            r
        );
    }
    return a({}, e);
}
function N(e) {
    var t = i.getFluidConfig(e);
    return t
        ? N(t.get())
        : i.is.arr(e)
          ? e.map(N)
          : i.isAnimatedString(e)
            ? d.createStringInterpolator({ range: [0, 1], output: [e, e] })(1)
            : e;
}
function j(e, t) {
    var r = t.key,
        n = t.props,
        o = t.state,
        s = t.actions;
    return new Promise(function (t, l) {
        var u,
            c,
            f = !1,
            p = A(n.cancel, r);
        function d() {
            o.resumeQueue.add(h), c.cancel(), (u = c.time - i.Globals.now());
        }
        function h() {
            u > 0 ? (o.pauseQueue.add(d), (c = i.Globals.frameLoop.setTimeout(m, u))) : m();
        }
        function m() {
            o.pauseQueue.delete(d), e <= (o.cancelId || 0) && (p = !0);
            try {
                s.start(a(a({}, n), {}, { callId: e, delay: u, cancel: p, pause: f }), t);
            } catch (e) {
                l(e);
            }
        }
        p
            ? m()
            : ((u = P(n.delay || 0, r)), (f = A(n.pause, r)) ? (o.resumeQueue.add(h), s.pause()) : (s.resume(), h()));
    });
}
var B = function (e, t) {
        return 1 == t.length
            ? t[0]
            : t.some(function (e) {
                    return e.cancelled;
                })
              ? V(e)
              : t.every(function (e) {
                      return e.noop;
                  })
                ? $(e)
                : K(
                      e,
                      t.every(function (e) {
                          return e.finished;
                      }),
                  );
    },
    $ = function (e, t) {
        return void 0 === t && (t = e.get()), { value: t, noop: !0, finished: !0, target: e };
    },
    K = function (e, t, r) {
        return void 0 === r && (r = e.get()), { value: r, finished: t, target: e };
    },
    V = function (e, t) {
        return void 0 === t && (t = e.get()), { value: t, cancelled: !0, target: e };
    };
function U(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
    return n;
}
function z(e, t, r, n) {
    return W.apply(this, arguments);
}
function W() {
    return (W = u(
        l.mark(function e(t, r, n, o) {
            var s, c, f, p, h;
            return l.wrap(function (e) {
                for (;;)
                    switch ((e.prev = e.next)) {
                        case 0:
                            if (!r.pause) {
                                e.next = 3;
                                break;
                            }
                            return (
                                (e.next = 3),
                                new Promise(function (e) {
                                    n.resumeQueue.add(e);
                                })
                            );
                        case 3:
                            if (
                                ((s = r.callId),
                                (c = r.parentId),
                                (f = r.onRest),
                                (p = n.asyncTo),
                                (h = n.promise),
                                !(!c && t === p && !r.reset))
                            ) {
                                e.next = 7;
                                break;
                            }
                            return e.abrupt("return", h);
                        case 7:
                            return e.abrupt(
                                "return",
                                (n.promise = u(
                                    l.mark(function e() {
                                        var m, v, y, g, b, w, _, S, x;
                                        return l.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return (
                                                                (n.asyncId = s),
                                                                (n.asyncTo = t),
                                                                (m = D(r, ["onRest"])),
                                                                (g = new Promise(function (e, t) {
                                                                    return (v = e), (y = t);
                                                                })),
                                                                (b = function (e) {
                                                                    return function () {
                                                                        var t = function (e) {
                                                                            throw (e instanceof G && y(e), e);
                                                                        };
                                                                        try {
                                                                            return e.apply(void 0, arguments).catch(t);
                                                                        } catch (e) {
                                                                            t(e);
                                                                        }
                                                                    };
                                                                }),
                                                                (w = function (e) {
                                                                    var t =
                                                                        (s <= (n.cancelId || 0) && V(o)) ||
                                                                        (s !== n.asyncId && K(o, !1));
                                                                    if (t) throw ((e.result = t), e);
                                                                }),
                                                                (_ = b(function (e, t) {
                                                                    var r = new G();
                                                                    w(r);
                                                                    var c = i.is.obj(e)
                                                                        ? a({}, e)
                                                                        : a(a({}, t), {}, { to: e });
                                                                    return (
                                                                        (c.parentId = s),
                                                                        i.each(m, function (e, t) {
                                                                            i.is.und(c[t]) && (c[t] = e);
                                                                        }),
                                                                        o.start(c).then(
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
                                                                                                            (w(r),
                                                                                                            !o.is(
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
                                                                                                                    n.resumeQueue.add(
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
                                                                i.is.arr(t)
                                                                    ? (x = (function () {
                                                                          var e = u(
                                                                              l.mark(function e(t) {
                                                                                  var r, n, o;
                                                                                  return l.wrap(function (e) {
                                                                                      for (;;)
                                                                                          switch ((e.prev = e.next)) {
                                                                                              case 0:
                                                                                                  r = (function (e) {
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
                                                                                                                              return U(
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
                                                                                                                              return U(
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
                                                                                                  if ((n = r()).done) {
                                                                                                      e.next = 7;
                                                                                                      break;
                                                                                                  }
                                                                                                  return (
                                                                                                      (o = n.value),
                                                                                                      (e.next = 5),
                                                                                                      _(o)
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
                                                                    : i.is.fun(t) &&
                                                                      (x = Promise.resolve(t(_, o.stop.bind(o)))),
                                                                (e.next = 11),
                                                                Promise.all([x.then(v), g])
                                                            );
                                                        case 11:
                                                            (S = K(o, !0)), (e.next = 21);
                                                            break;
                                                        case 14:
                                                            if (
                                                                ((e.prev = 14),
                                                                (e.t0 = e.catch(7)),
                                                                !(e.t0 instanceof G))
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
                                                                s == n.asyncId &&
                                                                    ((n.asyncId = c),
                                                                    (n.asyncTo = c ? p : void 0),
                                                                    (n.promise = c ? h : void 0)),
                                                                e.finish(21)
                                                            );
                                                        case 24:
                                                            return (
                                                                i.is.fun(f) &&
                                                                    d.batchedUpdates(function () {
                                                                        f(S);
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
function H(e, t) {
    (e.cancelId = t), (e.asyncId = e.asyncTo = e.promise = void 0);
}
var G = (function (e) {
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
        return f(t, e), t;
    })(m(Error)),
    q = function (e) {
        return e instanceof J;
    },
    Y = 1,
    J = (function (e) {
        function t() {
            for (var t, r = arguments.length, n = Array(r), o = 0; o < r; o++) n[o] = arguments[o];
            return (
                ((t = e.call.apply(e, [this].concat(n)) || this).id = Y++),
                (t.key = void 0),
                (t._priority = 0),
                (t._children = new Set()),
                t
            );
        }
        f(t, e);
        var r = t.prototype;
        return (
            (r.get = function () {
                var e = p.getAnimated(this);
                return e && e.getValue();
            }),
            (r.to = function () {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return d.to(this, t);
            }),
            (r.interpolate = function () {
                v.deprecateInterpolate();
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return d.to(this, t);
            }),
            (r.addChild = function (e) {
                this._children.size || this._attach(), this._children.add(e);
            }),
            (r.removeChild = function (e) {
                this._children.delete(e), this._children.size || this._detach();
            }),
            (r.onParentChange = function (e) {
                var t = e.type;
                this.idle ? "start" == t && (this._reset(), this._start()) : "reset" == t && this._reset();
            }),
            (r._attach = function () {}),
            (r._detach = function () {}),
            (r._reset = function () {
                this._emit({ type: "reset", parent: this });
            }),
            (r._start = function () {
                this._emit({ type: "start", parent: this });
            }),
            (r._onChange = function (e, t) {
                void 0 === t && (t = !1), this._emit({ type: "change", parent: this, value: e, idle: t });
            }),
            (r._onPriorityChange = function (e) {
                this.idle || d.frameLoop.start(this), this._emit({ type: "priority", parent: this, priority: e });
            }),
            (r._emit = function (e) {
                i.each(Array.from(this._children), function (t) {
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
    })(i.FluidValue),
    X = "CREATED",
    Z = "IDLE",
    Q = "ACTIVE",
    ee = "PAUSED",
    et = "DISPOSED",
    er = (function (e) {
        function t(t, r) {
            var n;
            if (
                (((n = e.call(this) || this).key = void 0),
                (n.animation = new C()),
                (n.queue = void 0),
                (n._phase = X),
                (n._state = { pauseQueue: new Set(), resumeQueue: new Set() }),
                (n._defaultProps = {}),
                (n._lastCallId = 0),
                (n._lastToId = 0),
                !i.is.und(t) || !i.is.und(r))
            ) {
                var o = i.is.obj(t) ? a({}, t) : a(a({}, r), {}, { from: t });
                (o.default = !0), n.start(o);
            }
            return n;
        }
        f(t, e);
        var r,
            n = t.prototype;
        return (
            (n.advance = function (e) {
                var t = this,
                    r = !0,
                    n = !1,
                    o = this.animation,
                    a = o.config,
                    s = o.toValues,
                    l = p.getPayload(o.to);
                if (!l) {
                    var u = i.getFluidConfig(o.to);
                    u && (s = i.toArray(u.get()));
                }
                return (
                    o.values.forEach(function (u, c) {
                        if (!u.done) {
                            var f = l ? l[c].lastPosition : s[c],
                                p = o.immediate,
                                d = f;
                            if (!p) {
                                if (((d = u.lastPosition), a.tension <= 0)) {
                                    u.done = !0;
                                    return;
                                }
                                var h = (u.elapsedTime += e),
                                    m = o.fromValues[c],
                                    v =
                                        null != u.v0
                                            ? u.v0
                                            : (u.v0 = i.is.arr(a.velocity) ? a.velocity[c] : a.velocity);
                                if (i.is.und(a.duration))
                                    if (a.decay) {
                                        var y = !0 === a.decay ? 0.998 : a.decay,
                                            g = Math.exp(-(1 - y) * h);
                                        (d = m + (v / (1 - y)) * (1 - g)),
                                            (p = 0.1 > Math.abs(u.lastPosition - d)),
                                            (b = v * g);
                                    } else
                                        for (
                                            var b = null == u.lastVelocity ? v : u.lastVelocity,
                                                w =
                                                    a.precision ||
                                                    (m == f ? 0.005 : Math.min(1, 0.001 * Math.abs(f - m))),
                                                _ = a.restVelocity || w / 10,
                                                S = a.clamp ? 0 : a.bounce,
                                                x = !i.is.und(S),
                                                E = m == f ? u.v0 > 0 : m < f,
                                                k = !1,
                                                C = Math.ceil(e / 1),
                                                T = 0;
                                            T < C && !(!(Math.abs(b) > _) && (p = Math.abs(f - d) <= w));
                                            ++T
                                        ) {
                                            x && (d == f || d > f == E) && ((b = -b * S), (d = f));
                                            var M =
                                                (-(1e-6 * a.tension) * (d - f) + -(0.001 * a.friction) * b) / a.mass;
                                            (b += +M), (d += +b);
                                        }
                                else {
                                    var P = a.progress || 0;
                                    a.duration <= 0 ? (P = 1) : (P += (1 - P) * Math.min(1, h / a.duration)),
                                        (b = ((d = m + a.easing(P) * (f - m)) - u.lastPosition) / e),
                                        (p = 1 == P);
                                }
                                (u.lastVelocity = b),
                                    Number.isNaN(d) && (console.warn("Got NaN while animating:", t), (p = !0));
                            }
                            l && !l[c].done && (p = !1),
                                p ? (u.done = !0) : (r = !1),
                                u.setValue(d, a.round) && (n = !0);
                        }
                    }),
                    r ? this.finish() : n && this._onChange(this.get()),
                    r
                );
            }),
            (n.is = function (e) {
                return this._phase == e;
            }),
            (n.set = function (e) {
                var t = this;
                return (
                    d.batchedUpdates(function () {
                        if ((t._focus(e), t._set(e) && !t.is(Q))) return t._onChange(t.get(), !0);
                        t._stop();
                    }),
                    this
                );
            }),
            (n.pause = function () {
                en(this, "pause"),
                    this.is(ee) ||
                        ((this._phase = ee),
                        i.flush(this._state.pauseQueue, function (e) {
                            return e();
                        }));
            }),
            (n.resume = function () {
                en(this, "resume"),
                    this.is(ee) &&
                        (this._start(),
                        i.flush(this._state.resumeQueue, function (e) {
                            return e();
                        }));
            }),
            (n.finish = function (e) {
                var t = this;
                if ((this.resume(), this.is(Q))) {
                    var r = this.animation;
                    !r.config.decay && i.is.und(e) && (e = r.to),
                        i.is.und(e) || this._set(e),
                        d.batchedUpdates(function () {
                            !r.changed && ((r.changed = !0), r.onStart && r.onStart(t)), t._stop();
                        });
                }
                return this;
            }),
            (n.update = function (e) {
                return en(this, "update"), (this.queue || (this.queue = [])).push(e), this;
            }),
            (r = u(
                l.mark(function e(t, r) {
                    var n,
                        o,
                        s = this;
                    return l.wrap(
                        function (e) {
                            for (;;)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        return (
                                            en(this, "start"),
                                            i.is.und(t)
                                                ? ((n = this.queue || []), (this.queue = []))
                                                : (n = [i.is.obj(t) ? t : a(a({}, r), {}, { to: t })]),
                                            (e.next = 4),
                                            Promise.all(
                                                n.map(function (e) {
                                                    return s._update(e);
                                                }),
                                            )
                                        );
                                    case 4:
                                        return (o = e.sent), e.abrupt("return", B(this, o));
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
            (n.start = function (e, t) {
                return r.apply(this, arguments);
            }),
            (n.stop = function (e) {
                var t = this;
                return (
                    this.is(et) ||
                        (H(this._state, this._lastCallId),
                        this._focus(this.get()),
                        d.batchedUpdates(function () {
                            return t._stop(e);
                        })),
                    this
                );
            }),
            (n.reset = function () {
                this._update({ reset: !0 });
            }),
            (n.dispose = function () {
                this.is(et) || (this.animation && (this.animation.onRest = []), this.stop(), (this._phase = et));
            }),
            (n.onParentChange = function (t) {
                e.prototype.onParentChange.call(this, t),
                    "change" == t.type
                        ? !this.is(Q) && (this._reset(), this.is(ee) || this._start())
                        : "priority" == t.type && (this.priority = t.priority + 1);
            }),
            (n._prepareNode = function (e) {
                var t = e.to,
                    r = e.from,
                    n = e.reverse,
                    o = this.key || "",
                    a = {
                        to: (t = !i.is.obj(t) || i.getFluidConfig(t) ? t : t[o]),
                        from: (r = !i.is.obj(r) || i.getFluidConfig(r) ? r : r[o]),
                    };
                if (this.is(X)) {
                    if (n) {
                        var s = [r, t];
                        (t = s[0]), (r = s[1]);
                    }
                    r = i.getFluidValue(r);
                    var l = this._updateNode(i.is.und(r) ? i.getFluidValue(t) : r);
                    l && !i.is.und(r) && l.setValue(r);
                }
                return a;
            }),
            (n._updateNode = function (e) {
                var t = p.getAnimated(this);
                if (!i.is.und(e)) {
                    var r = this._getNodeType(e);
                    (t && t.constructor === r) || p.setAnimated(this, (t = r.create(e)));
                }
                return t;
            }),
            (n._getNodeType = function (e) {
                var t = p.getAnimated(e);
                return t
                    ? t.constructor
                    : i.is.arr(e)
                      ? p.AnimatedArray
                      : i.isAnimatedString(e)
                        ? p.AnimatedString
                        : p.AnimatedValue;
            }),
            (n._update = function (e, t) {
                var r = this,
                    n = this._defaultProps,
                    o = function (t) {
                        var r = I(e, t);
                        i.is.und(r) || (n[t] = r), n[t] && (e[t] = n[t]);
                    };
                o("cancel"), o("pause");
                var a = this._prepareNode(e);
                return j(++this._lastCallId, {
                    key: this.key,
                    props: e,
                    state: this._state,
                    actions: {
                        pause: this.pause.bind(this),
                        resume: this.resume.bind(this),
                        start: this._merge.bind(this, a),
                    },
                }).then(function (n) {
                    if (e.loop && n.finished && !(t && n.noop)) {
                        var o = ea(e);
                        if (o) return r._update(o, !0);
                    }
                    return n;
                });
            }),
            (n._merge = function (e, t, r) {
                if (t.cancel) return this.stop(!0), r(V(this));
                var n = this.key,
                    o = this.animation,
                    s = this._defaultProps,
                    l = !i.is.und(e.to),
                    u = !i.is.und(e.from);
                if (l || u)
                    if (!(t.callId > this._lastToId)) return r(V(this));
                    else this._lastToId = t.callId;
                var c = function (e) {
                        return i.is.und(t[e]) ? s[e] : t[e];
                    },
                    f = eo(c("onDelayEnd"), n);
                f && f(t, this), t.default && D(t, ["pause", "cancel"], s);
                var h = o.to,
                    m = o.from,
                    v = e.to,
                    y = void 0 === v ? h : v,
                    g = e.from,
                    b = void 0 === g ? m : g;
                if ((u && !l && (y = b), t.reverse)) {
                    var w = [b, y];
                    (y = w[0]), (b = w[1]);
                }
                var _ = !i.isEqual(b, m);
                _ && (o.from = b);
                var x = !i.isEqual(y, h);
                x && this._focus(y);
                var k = i.getFluidConfig(y),
                    C = i.getFluidConfig(b);
                C && (b = C.get());
                var T = i.is.arr(t.to) || i.is.fun(t.to),
                    M = o.config,
                    O = M.decay,
                    I = M.velocity;
                t.config &&
                    !T &&
                    (function (e, t, r) {
                        for (var n in (r && (E((r = a({}, r)), t), (t = a(a({}, r), t))),
                        E(e, t),
                        Object.assign(e, t),
                        S))
                            null == e[n] && (e[n] = S[n]);
                        var o = e.mass,
                            s = e.frequency,
                            l = e.damping;
                        i.is.und(s) ||
                            (s < 0.01 && (s = 0.01),
                            l < 0 && (l = 0),
                            (e.tension = Math.pow((2 * Math.PI) / s, 2) * o),
                            (e.friction = (4 * Math.PI * l * o) / s));
                    })(M, P(t.config, n), t.config !== s.config ? P(s.config, n) : void 0);
                var L = p.getAnimated(this);
                if (!L || i.is.und(y)) return r(K(this, !0));
                var R = i.is.und(t.reset) ? u && !t.default : !i.is.und(b) && A(t.reset, n),
                    F = R ? b : this.get(),
                    j = N(y),
                    B = i.is.num(j) || i.is.arr(j) || i.isAnimatedString(j),
                    U = !T && (!B || A(s.immediate || t.immediate, n));
                if (x)
                    if (U) L = this._updateNode(j);
                    else {
                        var W = this._getNodeType(y);
                        if (W !== L.constructor)
                            throw Error(
                                "Cannot animate between " +
                                    L.constructor.name +
                                    " and " +
                                    W.name +
                                    ', as the "to" prop suggests',
                            );
                    }
                var H = L.constructor,
                    G = !!k,
                    q = !1;
                if (!G) {
                    var Y = R || (this.is(X) && _);
                    (x || Y) && (G = !(q = i.isEqual(N(F), j))),
                        (i.isEqual(M.decay, O) && i.isEqual(M.velocity, I)) || (G = !0);
                }
                if ((q && this.is(Q) && (o.changed && !R ? (G = !0) : G || this._stop()), !T)) {
                    (G || i.getFluidConfig(h)) &&
                        ((o.values = L.getPayload()),
                        (o.toValues = k ? null : H == p.AnimatedString ? [1] : i.toArray(j))),
                        (o.immediate = U),
                        (o.onStart = eo(c("onStart"), n)),
                        (o.onChange = eo(c("onChange"), n));
                    var J = o.onRest,
                        ee = R && !t.onRest ? J[0] || i.noop : ei(eo(c("onRest"), n), this);
                    if (G) {
                        o.onRest = [ee, ei(r, this)];
                        var et = +!R;
                        et < J.length &&
                            d.batchedUpdates(function () {
                                for (; et < J.length; et++) J[et]();
                            });
                    } else (R || t.onRest) && (o.onRest[0] = ee);
                }
                var er = eo(c("onProps"), n);
                if ((er && er(t, this), R && L.setValue(F), T)) r(z(t.to, t, this._state, this));
                else if (G) R && (this._phase = Z), this._reset(), this._start();
                else if (this.is(Q) && !x) o.onRest.push(ei(r, this));
                else {
                    let e = $(this, F),
                        t = eo(c("onNoopRest"), n);
                    null != t && t(e), r(e);
                }
            }),
            (n._focus = function (e) {
                var t = this.animation;
                if (e !== t.to) {
                    var r = i.getFluidConfig(t.to);
                    r && r.removeChild(this), (t.to = e);
                    var n = 0;
                    (r = i.getFluidConfig(e)) && (r.addChild(this), q(e) && (n = (e.priority || 0) + 1)),
                        (this.priority = n);
                }
            }),
            (n._set = function (e) {
                var t = i.getFluidConfig(e);
                t && (e = t.get());
                var r = p.getAnimated(this),
                    n = r && r.getValue();
                return r ? r.setValue(e) : this._updateNode(e), !i.isEqual(e, n);
            }),
            (n._onChange = function (t, r) {
                void 0 === r && (r = !1);
                var n = this.animation;
                n.changed || r || ((n.changed = !0), n.onStart && n.onStart(this)),
                    n.onChange && n.onChange(t, this),
                    e.prototype._onChange.call(this, t, r);
            }),
            (n._reset = function () {
                var t = this.animation;
                p.getAnimated(this).reset(t.to),
                    this.is(Q) || (t.changed = !1),
                    t.immediate ||
                        (t.fromValues = t.values.map(function (e) {
                            return e.lastPosition;
                        })),
                    e.prototype._reset.call(this);
            }),
            (n._start = function () {
                this.is(Q) ||
                    ((this._phase = Q),
                    e.prototype._start.call(this),
                    d.skipAnimation ? this.finish() : d.frameLoop.start(this));
            }),
            (n._stop = function (e) {
                if ((this.resume(), this.is(Q))) {
                    (this._phase = Z), this._onChange(this.get(), !0);
                    var t = this.animation;
                    i.each(t.values, function (e) {
                        e.done = !0;
                    });
                    var r = t.onRest;
                    r.length &&
                        ((t.onRest = [t.toValues ? i.noop : r[0]]),
                        t.changed || (r[0] = i.noop),
                        i.each(r, function (t) {
                            return t(e);
                        }));
                }
            }),
            c(t, [
                {
                    key: "idle",
                    get: function () {
                        return !this.is(Q) && !this._state.asyncTo;
                    },
                },
                {
                    key: "goal",
                    get: function () {
                        return i.getFluidValue(this.animation.to);
                    },
                },
                {
                    key: "velocity",
                    get: function () {
                        var e = p.getAnimated(this);
                        return e instanceof p.AnimatedValue
                            ? e.lastVelocity || 0
                            : e.getPayload().map(function (e) {
                                  return e.lastVelocity || 0;
                              });
                    },
                },
            ]),
            t
        );
    })(J);
function en(e, t) {
    if (e.is(et)) throw Error('Cannot call "' + t + '" of disposed "' + e.constructor.name + '" object');
}
function eo(e, t) {
    return i.is.fun(e) ? e : t && e ? e[t] : void 0;
}
var ei = function (e, t) {
    var r = t.animation.to;
    return e
        ? function (n) {
              if (n) e(V(t));
              else {
                  var o = N(r),
                      a = N(t.get());
                  e(K(t, i.isEqual(a, o)));
              }
          }
        : i.noop;
};
function ea(e, t, r) {
    void 0 === t && (t = e.loop), void 0 === r && (r = e.to);
    var n = P(t);
    if (n) {
        var o = !0 !== n && F(n),
            s = (o || e).reverse,
            l = !o || o.reset;
        return es(
            a(
                a({}, e),
                {},
                {
                    loop: t,
                    default: !1,
                    to: !s || i.is.arr(r) || i.is.fun(r) ? r : void 0,
                    from: l ? e.from : void 0,
                    reset: l,
                },
                o,
            ),
        );
    }
}
function es(e) {
    var t = (e = F(e)),
        r = t.to,
        n = t.from,
        o = new Set();
    return (
        n ? el(n, o) : delete e.from,
        i.is.obj(r) ? el(r, o) : r || delete e.to,
        (e.keys = o.size ? Array.from(o) : null),
        e
    );
}
function el(e, t) {
    i.each(e, function (e, r) {
        return null != e && t.add(r);
    });
}
var eu = ["onStart", "onChange", "onRest"],
    ec = 1,
    ef = (function () {
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
                    this.each(function (t, r) {
                        return (e[r] = t.get());
                    }),
                    e
                );
            }),
            (t.update = function (e) {
                return e && this.queue.push(es(e)), this;
            }),
            (t.start = function (e) {
                var t = e ? i.toArray(e).map(es) : this.queue;
                return (e || (this.queue = []), this._flush) ? this._flush(this, t) : (ey(this, t), ep(this, t));
            }),
            (t.stop = function (e) {
                if (i.is.und(e))
                    this.each(function (e) {
                        return e.stop();
                    }),
                        H(this._state, this._lastAsyncId);
                else {
                    var t = this.springs;
                    i.each(i.toArray(e), function (e) {
                        return t[e].stop();
                    });
                }
                return this;
            }),
            (t.pause = function (e) {
                if (i.is.und(e))
                    this.each(function (e) {
                        return e.pause();
                    });
                else {
                    var t = this.springs;
                    i.each(i.toArray(e), function (e) {
                        return t[e].pause();
                    });
                }
                return this;
            }),
            (t.resume = function (e) {
                if (i.is.und(e))
                    this.each(function (e) {
                        return e.resume();
                    });
                else {
                    var t = this.springs;
                    i.each(i.toArray(e), function (e) {
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
                i.each(this.springs, e);
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
                    r = t.onStart,
                    n = t.onChange,
                    o = t.onRest,
                    a = this._active.size > 0;
                a &&
                    this._phase != Q &&
                    ((this._phase = Q),
                    i.flush(r, function (t) {
                        return t(e);
                    }));
                var s = (n.size || (!a && o.size)) && this.get();
                i.flush(n, function (e) {
                    return e(s);
                }),
                    a ||
                        ((this._phase = Z),
                        i.flush(o, function (e) {
                            var t = e[0],
                                r = e[1];
                            (r.value = s), t(r);
                        }));
            }),
            (t.onParentChange = function (e) {
                "change" == e.type &&
                    (this._active[e.idle ? "delete" : "add"](e.parent), d.frameLoop.onFrame(this._onFrame));
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
function ep(e, t) {
    return Promise.all(
        t.map(function (t) {
            return (function e(t, r, n) {
                var o = r.to,
                    a = r.loop,
                    s = r.onRest;
                a && (r.loop = !1);
                var l = i.is.arr(o) || i.is.fun(o) ? o : void 0;
                l
                    ? ((r.to = void 0), (r.onRest = void 0))
                    : i.each(eu, function (e) {
                          var n = r[e];
                          if (i.is.fun(n)) {
                              var o = t._events[e];
                              o instanceof Set
                                  ? (r[e] = function () {
                                        return o.add(n);
                                    })
                                  : (r[e] = function (e) {
                                        var t = e.finished,
                                            r = e.cancelled,
                                            i = o.get(n);
                                        i
                                            ? (t || (i.finished = !1), r && (i.cancelled = !0))
                                            : o.set(n, { value: null, finished: t, cancelled: r });
                                    });
                          }
                      });
                var u = (r.keys || Object.keys(t.springs)).map(function (e) {
                        return t.springs[e].start(r);
                    }),
                    c = t._state;
                return (
                    l
                        ? u.push(
                              j(++t._lastAsyncId, {
                                  props: r,
                                  state: c,
                                  actions: {
                                      pause: i.noop,
                                      resume: i.noop,
                                      start: function (e, r) {
                                          if (((e.onRest = s), e.cancel)) i.is.und(I(e, "cancel")) || H(c, e.callId);
                                          else r(z(l, e, c, t));
                                      },
                                  },
                              }),
                          )
                        : r.keys || !0 !== r.cancel || H(c, t._lastAsyncId),
                    Promise.all(u).then(function (i) {
                        var s = B(t, i);
                        if (a && s.finished && !(n && s.noop)) {
                            var l = ea(r, a, o);
                            if (l) return ey(t, [l]), e(t, l, !0);
                        }
                        return s;
                    })
                );
            })(e, t);
        }),
    ).then(function (t) {
        return B(e, t);
    });
}
function ed(e, t) {
    var r = a({}, e.springs);
    return (
        t &&
            i.each(i.toArray(t), function (e) {
                i.is.und(e.keys) && (e = es(e)),
                    i.is.obj(e.to) || (e = a(a({}, e), {}, { to: void 0 })),
                    ev(r, e, function (e) {
                        return em(e);
                    });
            }),
        r
    );
}
function eh(e, t) {
    i.each(t, function (t, r) {
        e.springs[r] || ((e.springs[r] = t), t.addChild(e));
    });
}
function em(e, t) {
    var r = new er();
    return (r.key = e), t && r.addChild(t), r;
}
function ev(e, t, r) {
    t.keys &&
        i.each(t.keys, function (n) {
            (e[n] || (e[n] = r(n)))._prepareNode(t);
        });
}
function ey(e, t) {
    i.each(t, function (t) {
        ev(e.springs, t, function (t) {
            return em(t, e);
        });
    });
}
var eg = s.createContext({}),
    eb = function (e) {
        var t = e.children,
            r = y(e, ["children"]),
            n = s.useContext(eg);
        r = M(
            function () {
                return a(a({}, n), r);
            },
            [n, r.pause, r.cancel, r.immediate, r.config],
        );
        var o = eg.Provider;
        return s.createElement(o, { value: r }, t);
    };
(eb.Provider = eg.Provider), (eb.Consumer = eg.Consumer);
var ew = function () {
        return s.useContext(eg);
    },
    e_ = {
        create: function (e) {
            return {
                get controllers() {
                    return e();
                },
                update: function (t) {
                    return (
                        i.each(e(), function (e, r) {
                            e.update(O(t, r, e));
                        }),
                        this
                    );
                },
                start: function (t) {
                    return u(
                        l.mark(function r() {
                            var n;
                            return l.wrap(function (r) {
                                for (;;)
                                    switch ((r.prev = r.next)) {
                                        case 0:
                                            return (
                                                (r.next = 2),
                                                Promise.all(
                                                    e().map(function (e, r) {
                                                        var n = O(t, r, e);
                                                        return e.start(n);
                                                    }),
                                                )
                                            );
                                        case 2:
                                            return (
                                                (n = r.sent),
                                                r.abrupt("return", {
                                                    value: n.map(function (e) {
                                                        return e.value;
                                                    }),
                                                    finished: n.every(function (e) {
                                                        return e.finished;
                                                    }),
                                                })
                                            );
                                        case 4:
                                        case "end":
                                            return r.stop();
                                    }
                            }, r);
                        }),
                    )();
                },
                stop: function (t) {
                    return i.each(e(), function (e) {
                        return e.stop(t);
                    });
                },
                pause: function (t) {
                    return i.each(e(), function (e) {
                        return e.pause(t);
                    });
                },
                resume: function (t) {
                    return i.each(e(), function (e) {
                        return e.resume(t);
                    });
                },
            };
        },
    };
function eS(e, t, r) {
    var n = i.is.fun(t) && t;
    n && !r && (r = []);
    var l = s.useRef(0),
        u = i.useForceUpdate(),
        c = s.useState(function () {
            return {
                ctrls: [],
                queue: [],
                flush: function (e, t) {
                    var r = ed(e, t);
                    return !(l.current > 0) ||
                        c.queue.length ||
                        Object.keys(r).some(function (t) {
                            return !e.springs[t];
                        })
                        ? new Promise(function (n) {
                              eh(e, r),
                                  c.queue.push(function () {
                                      n(ep(e, t));
                                  }),
                                  u();
                          })
                        : ep(e, t);
                },
            };
        })[0],
        f = s.useRef(),
        p = [].concat(c.ctrls),
        d = [],
        h = i.usePrev(e) || 0,
        m = p.slice(e, h);
    function v(e, r) {
        for (var o = e; o < r; o++) {
            var a = p[o] || (p[o] = new ef(null, c.flush)),
                s = n ? n(o, a) : t[o];
            s &&
                ((s = d[o] =
                    (function (e) {
                        var t = es(e);
                        return i.is.und(t.default) && (t.default = D(t, [!0 === t.immediate && "immediate"])), t;
                    })(s)),
                0 == o && ((f.current = s.ref), (s.ref = void 0)));
        }
    }
    M(
        function () {
            (p.length = e), v(h, e);
        },
        [e],
    ),
        M(function () {
            v(0, Math.min(h, e));
        }, r);
    var y = s.useMemo(function () {
            return e_.create(function () {
                return c.ctrls;
            });
        }, []),
        g = p.map(function (e, t) {
            return ed(e, d[t]);
        }),
        b = ew();
    o.useLayoutEffect(function () {
        l.current++, (c.ctrls = p), f.current && (f.current.current = y);
        var e = c.queue;
        e.length &&
            ((c.queue = []),
            i.each(e, function (e) {
                return e();
            })),
            i.each(m, function (e) {
                return e.dispose();
            }),
            i.each(p, function (e, t) {
                eh(e, g[t]), e.start({ default: b });
                var r = d[t];
                r && (f.current ? e.queue.push(r) : e.start(r));
            });
    }),
        i.useOnce(function () {
            return function () {
                i.each(c.ctrls, function (e) {
                    return e.dispose();
                });
            };
        });
    var w = g.map(function (e) {
        return a({}, e);
    });
    return n || 3 == arguments.length ? [w, y.start, y.stop] : w;
}
function ex(e, t) {
    var r = i.is.fun(e),
        n = eS(1, r ? e : [e], r ? t || [] : t),
        o = n[0][0],
        a = n[1],
        s = n[2];
    return r || 2 == arguments.length ? [o, a, s] : o;
}
function eE(e, t, r) {
    var n = i.is.fun(t) && t;
    n && !r && (r = []);
    var a = [],
        s = eS(
            e,
            function (e, r) {
                return (a[e] = r), O(t, e, r);
            },
            r || [{}],
        );
    if (
        (o.useLayoutEffect(function () {
            for (var e = i.is.obj(t) && t.reverse, r = 0; r < a.length; r++) {
                var n = a[r + (e ? 1 : -1)];
                n && a[r].update({ to: n.springs }).start();
            }
        }, r),
        n || 3 == arguments.length)
    ) {
        var l = s[1];
        return (
            (s[1] = h.useCallbackOne(function (e) {
                var t = i.is.obj(e) && e.reverse;
                return l(function (r, n) {
                    var o = O(e, r, n),
                        i = a[r + (t ? 1 : -1)];
                    return i && (o.to = i.springs), o;
                });
            }, r)),
            s
        );
    }
    return s[0];
}
var ek = "mount",
    eC = "enter",
    eT = "update",
    eM = "leave";
function eP(e, t, r) {
    var n,
        l,
        u,
        c,
        f,
        p = t.ref,
        d = t.reset,
        h = t.sort,
        m = t.trail,
        v = void 0 === m ? 0 : m,
        y = t.expires,
        g = void 0 === y || y,
        b = i.toArray(e),
        w = [],
        _ =
            ((n = b),
            (u = (l = t).key),
            (f = void 0 === (c = l.keys) ? u : c),
            i.is.und(f) ? n : i.is.fun(f) ? n.map(f) : i.toArray(f)),
        S = s.useRef(null),
        x = d ? null : S.current;
    o.useLayoutEffect(function () {
        S.current = w;
    }),
        i.useOnce(function () {
            return function () {
                return i.each(S.current, function (e) {
                    e.expired && clearTimeout(e.expirationId), e.ctrl.dispose();
                });
            };
        });
    var E = [];
    if (
        (x &&
            i.each(x, function (e, t) {
                e.expired ? clearTimeout(e.expirationId) : ~(t = E[t] = _.indexOf(e.key)) && (w[t] = e);
            }),
        i.each(b, function (e, t) {
            w[t] || (w[t] = { key: _[t], item: e, phase: ek, ctrl: new ef() });
        }),
        E.length)
    ) {
        var k = -1;
        i.each(E, function (e, r) {
            var n = x[r];
            ~e ? ((k = w.indexOf(n)), (w[k] = a(a({}, n), {}, { item: b[e] }))) : t.leave && w.splice(++k, 0, n);
        });
    }
    i.is.fun(h) &&
        w.sort(function (e, t) {
            return h(e.item, t.item);
        });
    var C = -v,
        T = i.useForceUpdate(),
        M = D(t),
        A = new Map();
    i.each(w, function (e, r) {
        var n,
            o,
            s = e.key,
            l = e.phase;
        if (l == ek) (n = t.enter), (o = eC);
        else {
            var u = 0 > _.indexOf(s);
            if (l != eM)
                if (u) (n = t.leave), (o = eM);
                else {
                    if (!(n = t.update)) return;
                    o = eT;
                }
            else {
                if (u) return;
                (n = t.enter), (o = eC);
            }
        }
        if (((n = P(n, e.item, r)), !(n = i.is.obj(n) ? F(n) : { to: n }).config)) {
            var c = t.config || M.config;
            n.config = P(c, e.item, r);
        }
        var f = a(a({}, M), {}, { delay: (C += v), reset: !1 }, n);
        o == eC && i.is.und(f.from) && (f.from = P(i.is.und(t.initial) || x ? t.from : t.initial, e.item, r));
        var p = f.onRest;
        f.onRest = f.onNoopRest = function (e) {
            var t = S.current,
                r = t.find(function (e) {
                    return e.key === s;
                });
            if (r) {
                if ((i.is.fun(p) && !0 !== e.noop && p(e, r), e.cancelled && r.phase != eT)) {
                    r.phase = l;
                    return;
                }
                if (r.ctrl.idle) {
                    var n = t.every(function (e) {
                        return e.ctrl.idle;
                    });
                    if (r.phase == eM) {
                        var o = P(g, r.item);
                        if (!1 !== o) {
                            var a = !0 === o ? 0 : o;
                            if (((r.expired = !0), !n && a > 0)) {
                                a <= 0x7fffffff && (r.expirationId = setTimeout(T, a));
                                return;
                            }
                        }
                    }
                    n &&
                        t.some(function (e) {
                            return e.expired;
                        }) &&
                        T();
                }
            }
        };
        var d = ed(e.ctrl, f);
        A.set(e, { phase: o, springs: d, payload: f });
    });
    var O = ew();
    o.useLayoutEffect(
        function () {
            i.each(w, function (e) {
                e.ctrl.start({ default: O });
            });
        },
        [O],
    );
    var I = s.useMemo(function () {
        return e_.create(function () {
            return S.current.map(function (e) {
                return e.ctrl;
            });
        });
    }, []);
    s.useImperativeHandle(p, function () {
        return I;
    }),
        o.useLayoutEffect(
            function () {
                i.each(A, function (e, t) {
                    var r = e.phase,
                        n = e.springs,
                        o = e.payload;
                    eh(t.ctrl, n),
                        O.cancel ||
                            ((t.phase = r), r == eC && t.ctrl.start({ default: O }), t.ctrl[p ? "update" : "start"](o));
                });
            },
            d ? void 0 : r,
        );
    var L = function (e) {
        return s.createElement(
            s.Fragment,
            null,
            w.map(function (t, r) {
                var n = e(a({}, (A.get(t) || t.ctrl).springs), t.item, t, r);
                return n && n.type
                    ? s.createElement(
                          n.type,
                          a({}, n.props, { key: i.is.str(t.key) || i.is.num(t.key) ? t.key : t.ctrl.id, ref: n.ref }),
                      )
                    : n;
            }),
        );
    };
    return 3 == arguments.length ? [L, I.start, I.stop] : L;
}
var eA = (function (e) {
    function t(t, r) {
        ((n = e.call(this) || this).source = t),
            (n.key = void 0),
            (n.idle = !0),
            (n.calc = void 0),
            (n.calc = i.createInterpolator.apply(void 0, r));
        var n,
            o = n._get(),
            a = i.is.arr(o) ? p.AnimatedArray : p.AnimatedValue;
        return p.setAnimated(g(n), a.create(o)), n;
    }
    f(t, e);
    var r = t.prototype;
    return (
        (r.advance = function (e) {
            var t = this._get(),
                r = this.get();
            i.isEqual(t, r) || (p.getAnimated(this).setValue(t), this._onChange(t, this.idle));
        }),
        (r._get = function () {
            var e = i.is.arr(this.source)
                ? this.source.map(function (e) {
                      return e.get();
                  })
                : i.toArray(this.source.get());
            return this.calc.apply(this, e);
        }),
        (r._reset = function () {
            i.each(p.getPayload(this), function (e) {
                return e.reset();
            }),
                e.prototype._reset.call(this);
        }),
        (r._start = function () {
            (this.idle = !1),
                e.prototype._start.call(this),
                d.skipAnimation ? ((this.idle = !0), this.advance()) : d.frameLoop.start(this);
        }),
        (r._attach = function () {
            var e = this,
                t = !0,
                r = 1;
            i.each(i.toArray(this.source), function (n) {
                q(n) && (n.idle || (t = !1), (r = Math.max(r, n.priority + 1))), n.addChild(e);
            }),
                (this.priority = r),
                t || (this._reset(), this._start());
        }),
        (r._detach = function () {
            var e = this;
            i.each(i.toArray(this.source), function (t) {
                t.removeChild(e);
            }),
                (this.idle = !0);
        }),
        (r.onParentChange = function (t) {
            "start" == t.type
                ? this.advance()
                : "change" == t.type
                  ? this.idle
                      ? this.advance()
                      : t.idle &&
                        ((this.idle = i.toArray(this.source).every(function (e) {
                            return !1 !== e.idle;
                        })),
                        this.idle &&
                            (this.advance(),
                            i.each(p.getPayload(this), function (e) {
                                e.done = !0;
                            })))
                  : "priority" == t.type &&
                    (this.priority = i.toArray(this.source).reduce(function (e, t) {
                        return Math.max(e, (t.priority || 0) + 1);
                    }, 0)),
                e.prototype.onParentChange.call(this, t);
        }),
        t
    );
})(J);
i.Globals.assign({
    createStringInterpolator: b.createStringInterpolator,
    to: function (e, t) {
        return new eA(e, t);
    },
}),
    Object.keys(w).forEach(function (e) {
        "default" !== e &&
            Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                    return w[e];
                },
            });
    }),
    Object.defineProperty(t, "FrameLoop", {
        enumerable: !0,
        get: function () {
            return i.FrameLoop;
        },
    }),
    Object.defineProperty(t, "Globals", {
        enumerable: !0,
        get: function () {
            return i.Globals;
        },
    }),
    Object.defineProperty(t, "createInterpolator", {
        enumerable: !0,
        get: function () {
            return i.createInterpolator;
        },
    }),
    (t.BailSignal = G),
    (t.Controller = ef),
    (t.FrameValue = J),
    (t.Interpolation = eA),
    (t.Spring = function (e) {
        return (0, e.children)(ex(y(e, ["children"])));
    }),
    (t.SpringContext = eb),
    (t.SpringHandle = e_),
    (t.SpringValue = er),
    (t.Trail = function (e) {
        var t = e.items,
            r = e.children,
            n = y(e, ["items", "children"]),
            o = eE(t.length, n);
        return t.map(function (e, t) {
            var n = r(e, t);
            return i.is.fun(n) ? n(o[t]) : n;
        });
    }),
    (t.Transition = function (e) {
        var t = e.items,
            r = e.children,
            n = y(e, ["items", "children"]);
        return s.createElement(s.Fragment, null, eP(t, n)(r));
    }),
    (t.config = _),
    (t.inferTo = F),
    (t.interpolate = function (e) {
        for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
        return v.deprecateInterpolate(), new eA(e, r);
    }),
    (t.to = function (e) {
        for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
        return new eA(e, r);
    }),
    (t.update = function () {
        return i.Globals.frameLoop.advance();
    }),
    (t.useChain = function (e, t, r) {
        void 0 === r && (r = 1e3),
            o.useLayoutEffect(function () {
                if (t) {
                    var n = 0;
                    i.each(e, function (e, o) {
                        if (e.current) {
                            var a = e.current.controllers;
                            if (a.length) {
                                var s = r * t[o];
                                isNaN(s) ? (s = n) : (n = s),
                                    i.each(a, function (e) {
                                        i.each(e.queue, function (e) {
                                            e.delay = s + (e.delay || 0);
                                        }),
                                            e.start();
                                    });
                            }
                        }
                    });
                } else {
                    var o = Promise.resolve();
                    i.each(e, function (e) {
                        var t = e.current || {},
                            r = t.controllers,
                            n = t.start;
                        if (r && r.length) {
                            var a = r.map(function (e) {
                                var t = e.queue;
                                return (e.queue = []), t;
                            });
                            o = o.then(function () {
                                return (
                                    i.each(r, function (e, t) {
                                        var r;
                                        return (r = e.queue).push.apply(r, a[t]);
                                    }),
                                    n()
                                );
                            });
                        }
                    });
                }
            });
    }),
    (t.useSpring = ex),
    (t.useSprings = eS),
    (t.useTrail = eE),
    (t.useTransition = eP);
