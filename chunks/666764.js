function n(e) {
    return e && "object" == typeof e && "default" in e ? e.default : e;
}
Object.defineProperty(t, "__esModule", { value: !0 });
var i = r(209801),
    o = r(675106),
    a = n(r(984101)),
    s = r(582128),
    l = n(r(420979)),
    u = n(r(501984)),
    c = n(r(973280)),
    f = n(r(269274)),
    d = r(472090),
    p = r(672722),
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
    if (o.is.und(t.decay)) {
        var r = !o.is.und(t.tension) || !o.is.und(t.friction);
        (!r && o.is.und(t.frequency) && o.is.und(t.damping) && o.is.und(t.mass)) ||
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
    return o.is.fun(e) ? e.apply(void 0, r) : e;
}
var A = function (e, t) {
        return !0 === e || !!(t && e && (o.is.fun(e) ? e(t) : o.toArray(e).includes(t)));
    },
    I = function (e, t, r) {
        return e && (o.is.fun(e) ? e(t, r) : o.is.arr(e) ? e[t] : a({}, e));
    },
    O = function (e, t) {
        return !0 === e.default ? e[t] : e.default ? e.default[t] : void 0;
    },
    D = function (e, t, r) {
        void 0 === t && (t = []), void 0 === r && (r = {});
        var n = R;
        e.default && !0 !== e.default && (n = Object.keys((e = e.default)));
        for (
            var i,
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
            !(i = a()).done;
        ) {
            var s = i.value,
                l = e[s];
            o.is.und(l) || t.includes(s) || (r[s] = l);
        }
        return r;
    },
    R = ["pause", "cancel", "config", "immediate", "onDelayEnd", "onProps", "onStart", "onChange", "onRest"],
    L = {
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
            (o.each(e, function (e, n) {
                !L[n] && ((t[n] = e), r++);
            }),
            r)
        )
            return t;
    })(e);
    if (t) {
        var r = { to: t };
        return (
            o.each(e, function (e, n) {
                return n in t || (r[n] = e);
            }),
            r
        );
    }
    return a({}, e);
}
function N(e) {
    var t = o.getFluidConfig(e);
    return t
        ? N(t.get())
        : o.is.arr(e)
          ? e.map(N)
          : o.isAnimatedString(e)
            ? p.createStringInterpolator({ range: [0, 1], output: [e, e] })(1)
            : e;
}
function j(e, t) {
    var r = t.key,
        n = t.props,
        i = t.state,
        s = t.actions;
    return new Promise(function (t, l) {
        var u,
            c,
            f = !1,
            d = A(n.cancel, r);
        function p() {
            i.resumeQueue.add(h), c.cancel(), (u = c.time - o.Globals.now());
        }
        function h() {
            u > 0 ? (i.pauseQueue.add(p), (c = o.Globals.frameLoop.setTimeout(m, u))) : m();
        }
        function m() {
            i.pauseQueue.delete(p), e <= (i.cancelId || 0) && (d = !0);
            try {
                s.start(a(a({}, n), {}, { callId: e, delay: u, cancel: d, pause: f }), t);
            } catch (e) {
                l(e);
            }
        }
        d
            ? m()
            : ((u = P(n.delay || 0, r)), (f = A(n.pause, r)) ? (i.resumeQueue.add(h), s.pause()) : (s.resume(), h()));
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
                ? K(e)
                : $(
                      e,
                      t.every(function (e) {
                          return e.finished;
                      }),
                  );
    },
    K = function (e, t) {
        return void 0 === t && (t = e.get()), { value: t, noop: !0, finished: !0, target: e };
    },
    $ = function (e, t, r) {
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
        l.mark(function e(t, r, n, i) {
            var s, c, f, d, h;
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
                                (d = n.asyncTo),
                                (h = n.promise),
                                !(!c && t === d && !r.reset))
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
                                                                        (s <= (n.cancelId || 0) && V(i)) ||
                                                                        (s !== n.asyncId && $(i, !1));
                                                                    if (t) throw ((e.result = t), e);
                                                                }),
                                                                (_ = b(function (e, t) {
                                                                    var r = new G();
                                                                    w(r);
                                                                    var c = o.is.obj(e)
                                                                        ? a({}, e)
                                                                        : a(a({}, t), {}, { to: e });
                                                                    return (
                                                                        (c.parentId = s),
                                                                        o.each(m, function (e, t) {
                                                                            o.is.und(c[t]) && (c[t] = e);
                                                                        }),
                                                                        i.start(c).then(
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
                                                                o.is.arr(t)
                                                                    ? (x = (function () {
                                                                          var e = u(
                                                                              l.mark(function e(t) {
                                                                                  var r, n, i;
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
                                                                                                      (i = n.value),
                                                                                                      (e.next = 5),
                                                                                                      _(i)
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
                                                                    : o.is.fun(t) &&
                                                                      (x = Promise.resolve(t(_, i.stop.bind(i)))),
                                                                (e.next = 11),
                                                                Promise.all([x.then(v), g])
                                                            );
                                                        case 11:
                                                            (S = $(i, !0)), (e.next = 21);
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
                                                                    (n.asyncTo = c ? d : void 0),
                                                                    (n.promise = c ? h : void 0)),
                                                                e.finish(21)
                                                            );
                                                        case 24:
                                                            return (
                                                                o.is.fun(f) &&
                                                                    p.batchedUpdates(function () {
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
        return e instanceof X;
    },
    Y = 1,
    X = (function (e) {
        function t() {
            for (var t, r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
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
                var e = d.getAnimated(this);
                return e && e.getValue();
            }),
            (r.to = function () {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return p.to(this, t);
            }),
            (r.interpolate = function () {
                v.deprecateInterpolate();
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return p.to(this, t);
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
                this.idle || p.frameLoop.start(this), this._emit({ type: "priority", parent: this, priority: e });
            }),
            (r._emit = function (e) {
                o.each(Array.from(this._children), function (t) {
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
    })(o.FluidValue),
    J = "CREATED",
    Q = "IDLE",
    Z = "ACTIVE",
    ee = "PAUSED",
    et = "DISPOSED",
    er = (function (e) {
        function t(t, r) {
            var n;
            if (
                (((n = e.call(this) || this).key = void 0),
                (n.animation = new C()),
                (n.queue = void 0),
                (n._phase = J),
                (n._state = { pauseQueue: new Set(), resumeQueue: new Set() }),
                (n._defaultProps = {}),
                (n._lastCallId = 0),
                (n._lastToId = 0),
                !o.is.und(t) || !o.is.und(r))
            ) {
                var i = o.is.obj(t) ? a({}, t) : a(a({}, r), {}, { from: t });
                (i.default = !0), n.start(i);
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
                    i = this.animation,
                    a = i.config,
                    s = i.toValues,
                    l = d.getPayload(i.to);
                if (!l) {
                    var u = o.getFluidConfig(i.to);
                    u && (s = o.toArray(u.get()));
                }
                return (
                    i.values.forEach(function (u, c) {
                        if (!u.done) {
                            var f = l ? l[c].lastPosition : s[c],
                                d = i.immediate,
                                p = f;
                            if (!d) {
                                if (((p = u.lastPosition), a.tension <= 0)) {
                                    u.done = !0;
                                    return;
                                }
                                var h = (u.elapsedTime += e),
                                    m = i.fromValues[c],
                                    v =
                                        null != u.v0
                                            ? u.v0
                                            : (u.v0 = o.is.arr(a.velocity) ? a.velocity[c] : a.velocity);
                                if (o.is.und(a.duration))
                                    if (a.decay) {
                                        var y = !0 === a.decay ? 0.998 : a.decay,
                                            g = Math.exp(-(1 - y) * h);
                                        (p = m + (v / (1 - y)) * (1 - g)),
                                            (d = 0.1 > Math.abs(u.lastPosition - p)),
                                            (b = v * g);
                                    } else
                                        for (
                                            var b = null == u.lastVelocity ? v : u.lastVelocity,
                                                w =
                                                    a.precision ||
                                                    (m == f ? 0.005 : Math.min(1, 0.001 * Math.abs(f - m))),
                                                _ = a.restVelocity || w / 10,
                                                S = a.clamp ? 0 : a.bounce,
                                                x = !o.is.und(S),
                                                E = m == f ? u.v0 > 0 : m < f,
                                                k = !1,
                                                C = Math.ceil(e / 1),
                                                T = 0;
                                            T < C && !(!(Math.abs(b) > _) && (d = Math.abs(f - p) <= w));
                                            ++T
                                        ) {
                                            x && (p == f || p > f == E) && ((b = -b * S), (p = f));
                                            var M =
                                                (-(1e-6 * a.tension) * (p - f) + -(0.001 * a.friction) * b) / a.mass;
                                            (b += +M), (p += +b);
                                        }
                                else {
                                    var P = a.progress || 0;
                                    a.duration <= 0 ? (P = 1) : (P += (1 - P) * Math.min(1, h / a.duration)),
                                        (b = ((p = m + a.easing(P) * (f - m)) - u.lastPosition) / e),
                                        (d = 1 == P);
                                }
                                (u.lastVelocity = b),
                                    Number.isNaN(p) && (console.warn("Got NaN while animating:", t), (d = !0));
                            }
                            l && !l[c].done && (d = !1),
                                d ? (u.done = !0) : (r = !1),
                                u.setValue(p, a.round) && (n = !0);
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
                    p.batchedUpdates(function () {
                        if ((t._focus(e), t._set(e) && !t.is(Z))) return t._onChange(t.get(), !0);
                        t._stop();
                    }),
                    this
                );
            }),
            (n.pause = function () {
                en(this, "pause"),
                    this.is(ee) ||
                        ((this._phase = ee),
                        o.flush(this._state.pauseQueue, function (e) {
                            return e();
                        }));
            }),
            (n.resume = function () {
                en(this, "resume"),
                    this.is(ee) &&
                        (this._start(),
                        o.flush(this._state.resumeQueue, function (e) {
                            return e();
                        }));
            }),
            (n.finish = function (e) {
                var t = this;
                if ((this.resume(), this.is(Z))) {
                    var r = this.animation;
                    !r.config.decay && o.is.und(e) && (e = r.to),
                        o.is.und(e) || this._set(e),
                        p.batchedUpdates(function () {
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
                        i,
                        s = this;
                    return l.wrap(
                        function (e) {
                            for (;;)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        return (
                                            en(this, "start"),
                                            o.is.und(t)
                                                ? ((n = this.queue || []), (this.queue = []))
                                                : (n = [o.is.obj(t) ? t : a(a({}, r), {}, { to: t })]),
                                            (e.next = 4),
                                            Promise.all(
                                                n.map(function (e) {
                                                    return s._update(e);
                                                }),
                                            )
                                        );
                                    case 4:
                                        return (i = e.sent), e.abrupt("return", B(this, i));
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
                        p.batchedUpdates(function () {
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
                        ? !this.is(Z) && (this._reset(), this.is(ee) || this._start())
                        : "priority" == t.type && (this.priority = t.priority + 1);
            }),
            (n._prepareNode = function (e) {
                var t = e.to,
                    r = e.from,
                    n = e.reverse,
                    i = this.key || "",
                    a = {
                        to: (t = !o.is.obj(t) || o.getFluidConfig(t) ? t : t[i]),
                        from: (r = !o.is.obj(r) || o.getFluidConfig(r) ? r : r[i]),
                    };
                if (this.is(J)) {
                    if (n) {
                        var s = [r, t];
                        (t = s[0]), (r = s[1]);
                    }
                    r = o.getFluidValue(r);
                    var l = this._updateNode(o.is.und(r) ? o.getFluidValue(t) : r);
                    l && !o.is.und(r) && l.setValue(r);
                }
                return a;
            }),
            (n._updateNode = function (e) {
                var t = d.getAnimated(this);
                if (!o.is.und(e)) {
                    var r = this._getNodeType(e);
                    (t && t.constructor === r) || d.setAnimated(this, (t = r.create(e)));
                }
                return t;
            }),
            (n._getNodeType = function (e) {
                var t = d.getAnimated(e);
                return t
                    ? t.constructor
                    : o.is.arr(e)
                      ? d.AnimatedArray
                      : o.isAnimatedString(e)
                        ? d.AnimatedString
                        : d.AnimatedValue;
            }),
            (n._update = function (e, t) {
                var r = this,
                    n = this._defaultProps,
                    i = function (t) {
                        var r = O(e, t);
                        o.is.und(r) || (n[t] = r), n[t] && (e[t] = n[t]);
                    };
                i("cancel"), i("pause");
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
                        var i = ea(e);
                        if (i) return r._update(i, !0);
                    }
                    return n;
                });
            }),
            (n._merge = function (e, t, r) {
                if (t.cancel) return this.stop(!0), r(V(this));
                var n = this.key,
                    i = this.animation,
                    s = this._defaultProps,
                    l = !o.is.und(e.to),
                    u = !o.is.und(e.from);
                if (l || u)
                    if (!(t.callId > this._lastToId)) return r(V(this));
                    else this._lastToId = t.callId;
                var c = function (e) {
                        return o.is.und(t[e]) ? s[e] : t[e];
                    },
                    f = ei(c("onDelayEnd"), n);
                f && f(t, this), t.default && D(t, ["pause", "cancel"], s);
                var h = i.to,
                    m = i.from,
                    v = e.to,
                    y = void 0 === v ? h : v,
                    g = e.from,
                    b = void 0 === g ? m : g;
                if ((u && !l && (y = b), t.reverse)) {
                    var w = [b, y];
                    (y = w[0]), (b = w[1]);
                }
                var _ = !o.isEqual(b, m);
                _ && (i.from = b);
                var x = !o.isEqual(y, h);
                x && this._focus(y);
                var k = o.getFluidConfig(y),
                    C = o.getFluidConfig(b);
                C && (b = C.get());
                var T = o.is.arr(t.to) || o.is.fun(t.to),
                    M = i.config,
                    I = M.decay,
                    O = M.velocity;
                t.config &&
                    !T &&
                    (function (e, t, r) {
                        for (var n in (r && (E((r = a({}, r)), t), (t = a(a({}, r), t))),
                        E(e, t),
                        Object.assign(e, t),
                        S))
                            null == e[n] && (e[n] = S[n]);
                        var i = e.mass,
                            s = e.frequency,
                            l = e.damping;
                        o.is.und(s) ||
                            (s < 0.01 && (s = 0.01),
                            l < 0 && (l = 0),
                            (e.tension = Math.pow((2 * Math.PI) / s, 2) * i),
                            (e.friction = (4 * Math.PI * l * i) / s));
                    })(M, P(t.config, n), t.config !== s.config ? P(s.config, n) : void 0);
                var R = d.getAnimated(this);
                if (!R || o.is.und(y)) return r($(this, !0));
                var L = o.is.und(t.reset) ? u && !t.default : !o.is.und(b) && A(t.reset, n),
                    F = L ? b : this.get(),
                    j = N(y),
                    B = o.is.num(j) || o.is.arr(j) || o.isAnimatedString(j),
                    U = !T && (!B || A(s.immediate || t.immediate, n));
                if (x)
                    if (U) R = this._updateNode(j);
                    else {
                        var W = this._getNodeType(y);
                        if (W !== R.constructor)
                            throw Error(
                                "Cannot animate between " +
                                    R.constructor.name +
                                    " and " +
                                    W.name +
                                    ', as the "to" prop suggests',
                            );
                    }
                var H = R.constructor,
                    G = !!k,
                    q = !1;
                if (!G) {
                    var Y = L || (this.is(J) && _);
                    (x || Y) && (G = !(q = o.isEqual(N(F), j))),
                        (o.isEqual(M.decay, I) && o.isEqual(M.velocity, O)) || (G = !0);
                }
                if ((q && this.is(Z) && (i.changed && !L ? (G = !0) : G || this._stop()), !T)) {
                    (G || o.getFluidConfig(h)) &&
                        ((i.values = R.getPayload()),
                        (i.toValues = k ? null : H == d.AnimatedString ? [1] : o.toArray(j))),
                        (i.immediate = U),
                        (i.onStart = ei(c("onStart"), n)),
                        (i.onChange = ei(c("onChange"), n));
                    var X = i.onRest,
                        ee = L && !t.onRest ? X[0] || o.noop : eo(ei(c("onRest"), n), this);
                    if (G) {
                        i.onRest = [ee, eo(r, this)];
                        var et = +!L;
                        et < X.length &&
                            p.batchedUpdates(function () {
                                for (; et < X.length; et++) X[et]();
                            });
                    } else (L || t.onRest) && (i.onRest[0] = ee);
                }
                var er = ei(c("onProps"), n);
                if ((er && er(t, this), L && R.setValue(F), T)) r(z(t.to, t, this._state, this));
                else if (G) L && (this._phase = Q), this._reset(), this._start();
                else if (this.is(Z) && !x) i.onRest.push(eo(r, this));
                else {
                    let e = K(this, F),
                        t = ei(c("onNoopRest"), n);
                    null != t && t(e), r(e);
                }
            }),
            (n._focus = function (e) {
                var t = this.animation;
                if (e !== t.to) {
                    var r = o.getFluidConfig(t.to);
                    r && r.removeChild(this), (t.to = e);
                    var n = 0;
                    (r = o.getFluidConfig(e)) && (r.addChild(this), q(e) && (n = (e.priority || 0) + 1)),
                        (this.priority = n);
                }
            }),
            (n._set = function (e) {
                var t = o.getFluidConfig(e);
                t && (e = t.get());
                var r = d.getAnimated(this),
                    n = r && r.getValue();
                return r ? r.setValue(e) : this._updateNode(e), !o.isEqual(e, n);
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
                d.getAnimated(this).reset(t.to),
                    this.is(Z) || (t.changed = !1),
                    t.immediate ||
                        (t.fromValues = t.values.map(function (e) {
                            return e.lastPosition;
                        })),
                    e.prototype._reset.call(this);
            }),
            (n._start = function () {
                this.is(Z) ||
                    ((this._phase = Z),
                    e.prototype._start.call(this),
                    p.skipAnimation ? this.finish() : p.frameLoop.start(this));
            }),
            (n._stop = function (e) {
                if ((this.resume(), this.is(Z))) {
                    (this._phase = Q), this._onChange(this.get(), !0);
                    var t = this.animation;
                    o.each(t.values, function (e) {
                        e.done = !0;
                    });
                    var r = t.onRest;
                    r.length &&
                        ((t.onRest = [t.toValues ? o.noop : r[0]]),
                        t.changed || (r[0] = o.noop),
                        o.each(r, function (t) {
                            return t(e);
                        }));
                }
            }),
            c(t, [
                {
                    key: "idle",
                    get: function () {
                        return !this.is(Z) && !this._state.asyncTo;
                    },
                },
                {
                    key: "goal",
                    get: function () {
                        return o.getFluidValue(this.animation.to);
                    },
                },
                {
                    key: "velocity",
                    get: function () {
                        var e = d.getAnimated(this);
                        return e instanceof d.AnimatedValue
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
function en(e, t) {
    if (e.is(et)) throw Error('Cannot call "' + t + '" of disposed "' + e.constructor.name + '" object');
}
function ei(e, t) {
    return o.is.fun(e) ? e : t && e ? e[t] : void 0;
}
var eo = function (e, t) {
    var r = t.animation.to;
    return e
        ? function (n) {
              if (n) e(V(t));
              else {
                  var i = N(r),
                      a = N(t.get());
                  e($(t, o.isEqual(a, i)));
              }
          }
        : o.noop;
};
function ea(e, t, r) {
    void 0 === t && (t = e.loop), void 0 === r && (r = e.to);
    var n = P(t);
    if (n) {
        var i = !0 !== n && F(n),
            s = (i || e).reverse,
            l = !i || i.reset;
        return es(
            a(
                a({}, e),
                {},
                {
                    loop: t,
                    default: !1,
                    to: !s || o.is.arr(r) || o.is.fun(r) ? r : void 0,
                    from: l ? e.from : void 0,
                    reset: l,
                },
                i,
            ),
        );
    }
}
function es(e) {
    var t = (e = F(e)),
        r = t.to,
        n = t.from,
        i = new Set();
    return (
        n ? el(n, i) : delete e.from,
        o.is.obj(r) ? el(r, i) : r || delete e.to,
        (e.keys = i.size ? Array.from(i) : null),
        e
    );
}
function el(e, t) {
    o.each(e, function (e, r) {
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
                (this._phase = J),
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
                var t = e ? o.toArray(e).map(es) : this.queue;
                return (e || (this.queue = []), this._flush) ? this._flush(this, t) : (ey(this, t), ed(this, t));
            }),
            (t.stop = function (e) {
                if (o.is.und(e))
                    this.each(function (e) {
                        return e.stop();
                    }),
                        H(this._state, this._lastAsyncId);
                else {
                    var t = this.springs;
                    o.each(o.toArray(e), function (e) {
                        return t[e].stop();
                    });
                }
                return this;
            }),
            (t.pause = function (e) {
                if (o.is.und(e))
                    this.each(function (e) {
                        return e.pause();
                    });
                else {
                    var t = this.springs;
                    o.each(o.toArray(e), function (e) {
                        return t[e].pause();
                    });
                }
                return this;
            }),
            (t.resume = function (e) {
                if (o.is.und(e))
                    this.each(function (e) {
                        return e.resume();
                    });
                else {
                    var t = this.springs;
                    o.each(o.toArray(e), function (e) {
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
                o.each(this.springs, e);
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
                    i = t.onRest,
                    a = this._active.size > 0;
                a &&
                    this._phase != Z &&
                    ((this._phase = Z),
                    o.flush(r, function (t) {
                        return t(e);
                    }));
                var s = (n.size || (!a && i.size)) && this.get();
                o.flush(n, function (e) {
                    return e(s);
                }),
                    a ||
                        ((this._phase = Q),
                        o.flush(i, function (e) {
                            var t = e[0],
                                r = e[1];
                            (r.value = s), t(r);
                        }));
            }),
            (t.onParentChange = function (e) {
                "change" == e.type &&
                    (this._active[e.idle ? "delete" : "add"](e.parent), p.frameLoop.onFrame(this._onFrame));
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
function ed(e, t) {
    return Promise.all(
        t.map(function (t) {
            return (function e(t, r, n) {
                var i = r.to,
                    a = r.loop,
                    s = r.onRest;
                a && (r.loop = !1);
                var l = o.is.arr(i) || o.is.fun(i) ? i : void 0;
                l
                    ? ((r.to = void 0), (r.onRest = void 0))
                    : o.each(eu, function (e) {
                          var n = r[e];
                          if (o.is.fun(n)) {
                              var i = t._events[e];
                              i instanceof Set
                                  ? (r[e] = function () {
                                        return i.add(n);
                                    })
                                  : (r[e] = function (e) {
                                        var t = e.finished,
                                            r = e.cancelled,
                                            o = i.get(n);
                                        o
                                            ? (t || (o.finished = !1), r && (o.cancelled = !0))
                                            : i.set(n, { value: null, finished: t, cancelled: r });
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
                                      pause: o.noop,
                                      resume: o.noop,
                                      start: function (e, r) {
                                          if (((e.onRest = s), e.cancel)) o.is.und(O(e, "cancel")) || H(c, e.callId);
                                          else r(z(l, e, c, t));
                                      },
                                  },
                              }),
                          )
                        : r.keys || !0 !== r.cancel || H(c, t._lastAsyncId),
                    Promise.all(u).then(function (o) {
                        var s = B(t, o);
                        if (a && s.finished && !(n && s.noop)) {
                            var l = ea(r, a, i);
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
function ep(e, t) {
    var r = a({}, e.springs);
    return (
        t &&
            o.each(o.toArray(t), function (e) {
                o.is.und(e.keys) && (e = es(e)),
                    o.is.obj(e.to) || (e = a(a({}, e), {}, { to: void 0 })),
                    ev(r, e, function (e) {
                        return em(e);
                    });
            }),
        r
    );
}
function eh(e, t) {
    o.each(t, function (t, r) {
        e.springs[r] || ((e.springs[r] = t), t.addChild(e));
    });
}
function em(e, t) {
    var r = new er();
    return (r.key = e), t && r.addChild(t), r;
}
function ev(e, t, r) {
    t.keys &&
        o.each(t.keys, function (n) {
            (e[n] || (e[n] = r(n)))._prepareNode(t);
        });
}
function ey(e, t) {
    o.each(t, function (t) {
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
        var i = eg.Provider;
        return s.createElement(i, { value: r }, t);
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
                        o.each(e(), function (e, r) {
                            e.update(I(t, r, e));
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
                                                        var n = I(t, r, e);
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
                    return o.each(e(), function (e) {
                        return e.stop(t);
                    });
                },
                pause: function (t) {
                    return o.each(e(), function (e) {
                        return e.pause(t);
                    });
                },
                resume: function (t) {
                    return o.each(e(), function (e) {
                        return e.resume(t);
                    });
                },
            };
        },
    };
function eS(e, t, r) {
    var n = o.is.fun(t) && t;
    n && !r && (r = []);
    var l = s.useRef(0),
        u = o.useForceUpdate(),
        c = s.useState(function () {
            return {
                ctrls: [],
                queue: [],
                flush: function (e, t) {
                    var r = ep(e, t);
                    return !(l.current > 0) ||
                        c.queue.length ||
                        Object.keys(r).some(function (t) {
                            return !e.springs[t];
                        })
                        ? new Promise(function (n) {
                              eh(e, r),
                                  c.queue.push(function () {
                                      n(ed(e, t));
                                  }),
                                  u();
                          })
                        : ed(e, t);
                },
            };
        })[0],
        f = s.useRef(),
        d = [].concat(c.ctrls),
        p = [],
        h = o.usePrev(e) || 0,
        m = d.slice(e, h);
    function v(e, r) {
        for (var i = e; i < r; i++) {
            var a = d[i] || (d[i] = new ef(null, c.flush)),
                s = n ? n(i, a) : t[i];
            s &&
                ((s = p[i] =
                    (function (e) {
                        var t = es(e);
                        return o.is.und(t.default) && (t.default = D(t, [!0 === t.immediate && "immediate"])), t;
                    })(s)),
                0 == i && ((f.current = s.ref), (s.ref = void 0)));
        }
    }
    M(
        function () {
            (d.length = e), v(h, e);
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
        g = d.map(function (e, t) {
            return ep(e, p[t]);
        }),
        b = ew();
    i.useLayoutEffect(function () {
        l.current++, (c.ctrls = d), f.current && (f.current.current = y);
        var e = c.queue;
        e.length &&
            ((c.queue = []),
            o.each(e, function (e) {
                return e();
            })),
            o.each(m, function (e) {
                return e.dispose();
            }),
            o.each(d, function (e, t) {
                eh(e, g[t]), e.start({ default: b });
                var r = p[t];
                r && (f.current ? e.queue.push(r) : e.start(r));
            });
    }),
        o.useOnce(function () {
            return function () {
                o.each(c.ctrls, function (e) {
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
    var r = o.is.fun(e),
        n = eS(1, r ? e : [e], r ? t || [] : t),
        i = n[0][0],
        a = n[1],
        s = n[2];
    return r || 2 == arguments.length ? [i, a, s] : i;
}
function eE(e, t, r) {
    var n = o.is.fun(t) && t;
    n && !r && (r = []);
    var a = [],
        s = eS(
            e,
            function (e, r) {
                return (a[e] = r), I(t, e, r);
            },
            r || [{}],
        );
    if (
        (i.useLayoutEffect(function () {
            for (var e = o.is.obj(t) && t.reverse, r = 0; r < a.length; r++) {
                var n = a[r + (e ? 1 : -1)];
                n && a[r].update({ to: n.springs }).start();
            }
        }, r),
        n || 3 == arguments.length)
    ) {
        var l = s[1];
        return (
            (s[1] = h.useCallbackOne(function (e) {
                var t = o.is.obj(e) && e.reverse;
                return l(function (r, n) {
                    var i = I(e, r, n),
                        o = a[r + (t ? 1 : -1)];
                    return o && (i.to = o.springs), i;
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
        d = t.ref,
        p = t.reset,
        h = t.sort,
        m = t.trail,
        v = void 0 === m ? 0 : m,
        y = t.expires,
        g = void 0 === y || y,
        b = o.toArray(e),
        w = [],
        _ =
            ((n = b),
            (u = (l = t).key),
            (f = void 0 === (c = l.keys) ? u : c),
            o.is.und(f) ? n : o.is.fun(f) ? n.map(f) : o.toArray(f)),
        S = s.useRef(null),
        x = p ? null : S.current;
    i.useLayoutEffect(function () {
        S.current = w;
    }),
        o.useOnce(function () {
            return function () {
                return o.each(S.current, function (e) {
                    e.expired && clearTimeout(e.expirationId), e.ctrl.dispose();
                });
            };
        });
    var E = [];
    if (
        (x &&
            o.each(x, function (e, t) {
                e.expired ? clearTimeout(e.expirationId) : ~(t = E[t] = _.indexOf(e.key)) && (w[t] = e);
            }),
        o.each(b, function (e, t) {
            w[t] || (w[t] = { key: _[t], item: e, phase: ek, ctrl: new ef() });
        }),
        E.length)
    ) {
        var k = -1;
        o.each(E, function (e, r) {
            var n = x[r];
            ~e ? ((k = w.indexOf(n)), (w[k] = a(a({}, n), {}, { item: b[e] }))) : t.leave && w.splice(++k, 0, n);
        });
    }
    o.is.fun(h) &&
        w.sort(function (e, t) {
            return h(e.item, t.item);
        });
    var C = -v,
        T = o.useForceUpdate(),
        M = D(t),
        A = new Map();
    o.each(w, function (e, r) {
        var n,
            i,
            s = e.key,
            l = e.phase;
        if (l == ek) (n = t.enter), (i = eC);
        else {
            var u = 0 > _.indexOf(s);
            if (l != eM)
                if (u) (n = t.leave), (i = eM);
                else {
                    if (!(n = t.update)) return;
                    i = eT;
                }
            else {
                if (u) return;
                (n = t.enter), (i = eC);
            }
        }
        if (((n = P(n, e.item, r)), !(n = o.is.obj(n) ? F(n) : { to: n }).config)) {
            var c = t.config || M.config;
            n.config = P(c, e.item, r);
        }
        var f = a(a({}, M), {}, { delay: (C += v), reset: !1 }, n);
        i == eC && o.is.und(f.from) && (f.from = P(o.is.und(t.initial) || x ? t.from : t.initial, e.item, r));
        var d = f.onRest;
        f.onRest = f.onNoopRest = function (e) {
            var t = S.current,
                r = t.find(function (e) {
                    return e.key === s;
                });
            if (r) {
                if ((o.is.fun(d) && !0 !== e.noop && d(e, r), e.cancelled && r.phase != eT)) {
                    r.phase = l;
                    return;
                }
                if (r.ctrl.idle) {
                    var n = t.every(function (e) {
                        return e.ctrl.idle;
                    });
                    if (r.phase == eM) {
                        var i = P(g, r.item);
                        if (!1 !== i) {
                            var a = !0 === i ? 0 : i;
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
        var p = ep(e.ctrl, f);
        A.set(e, { phase: i, springs: p, payload: f });
    });
    var I = ew();
    i.useLayoutEffect(
        function () {
            o.each(w, function (e) {
                e.ctrl.start({ default: I });
            });
        },
        [I],
    );
    var O = s.useMemo(function () {
        return e_.create(function () {
            return S.current.map(function (e) {
                return e.ctrl;
            });
        });
    }, []);
    s.useImperativeHandle(d, function () {
        return O;
    }),
        i.useLayoutEffect(
            function () {
                o.each(A, function (e, t) {
                    var r = e.phase,
                        n = e.springs,
                        i = e.payload;
                    eh(t.ctrl, n),
                        I.cancel ||
                            ((t.phase = r), r == eC && t.ctrl.start({ default: I }), t.ctrl[d ? "update" : "start"](i));
                });
            },
            p ? void 0 : r,
        );
    var R = function (e) {
        return s.createElement(
            s.Fragment,
            null,
            w.map(function (t, r) {
                var n = e(a({}, (A.get(t) || t.ctrl).springs), t.item, t, r);
                return n && n.type
                    ? s.createElement(
                          n.type,
                          a({}, n.props, { key: o.is.str(t.key) || o.is.num(t.key) ? t.key : t.ctrl.id, ref: n.ref }),
                      )
                    : n;
            }),
        );
    };
    return 3 == arguments.length ? [R, O.start, O.stop] : R;
}
var eA = (function (e) {
    function t(t, r) {
        ((n = e.call(this) || this).source = t),
            (n.key = void 0),
            (n.idle = !0),
            (n.calc = void 0),
            (n.calc = o.createInterpolator.apply(void 0, r));
        var n,
            i = n._get(),
            a = o.is.arr(i) ? d.AnimatedArray : d.AnimatedValue;
        return d.setAnimated(g(n), a.create(i)), n;
    }
    f(t, e);
    var r = t.prototype;
    return (
        (r.advance = function (e) {
            var t = this._get(),
                r = this.get();
            o.isEqual(t, r) || (d.getAnimated(this).setValue(t), this._onChange(t, this.idle));
        }),
        (r._get = function () {
            var e = o.is.arr(this.source)
                ? this.source.map(function (e) {
                      return e.get();
                  })
                : o.toArray(this.source.get());
            return this.calc.apply(this, e);
        }),
        (r._reset = function () {
            o.each(d.getPayload(this), function (e) {
                return e.reset();
            }),
                e.prototype._reset.call(this);
        }),
        (r._start = function () {
            (this.idle = !1),
                e.prototype._start.call(this),
                p.skipAnimation ? ((this.idle = !0), this.advance()) : p.frameLoop.start(this);
        }),
        (r._attach = function () {
            var e = this,
                t = !0,
                r = 1;
            o.each(o.toArray(this.source), function (n) {
                q(n) && (n.idle || (t = !1), (r = Math.max(r, n.priority + 1))), n.addChild(e);
            }),
                (this.priority = r),
                t || (this._reset(), this._start());
        }),
        (r._detach = function () {
            var e = this;
            o.each(o.toArray(this.source), function (t) {
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
                        ((this.idle = o.toArray(this.source).every(function (e) {
                            return !1 !== e.idle;
                        })),
                        this.idle &&
                            (this.advance(),
                            o.each(d.getPayload(this), function (e) {
                                e.done = !0;
                            })))
                  : "priority" == t.type &&
                    (this.priority = o.toArray(this.source).reduce(function (e, t) {
                        return Math.max(e, (t.priority || 0) + 1);
                    }, 0)),
                e.prototype.onParentChange.call(this, t);
        }),
        t
    );
})(X);
o.Globals.assign({
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
            return o.FrameLoop;
        },
    }),
    Object.defineProperty(t, "Globals", {
        enumerable: !0,
        get: function () {
            return o.Globals;
        },
    }),
    Object.defineProperty(t, "createInterpolator", {
        enumerable: !0,
        get: function () {
            return o.createInterpolator;
        },
    }),
    (t.BailSignal = G),
    (t.Controller = ef),
    (t.FrameValue = X),
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
            i = eE(t.length, n);
        return t.map(function (e, t) {
            var n = r(e, t);
            return o.is.fun(n) ? n(i[t]) : n;
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
        return o.Globals.frameLoop.advance();
    }),
    (t.useChain = function (e, t, r) {
        void 0 === r && (r = 1e3),
            i.useLayoutEffect(function () {
                if (t) {
                    var n = 0;
                    o.each(e, function (e, i) {
                        if (e.current) {
                            var a = e.current.controllers;
                            if (a.length) {
                                var s = r * t[i];
                                isNaN(s) ? (s = n) : (n = s),
                                    o.each(a, function (e) {
                                        o.each(e.queue, function (e) {
                                            e.delay = s + (e.delay || 0);
                                        }),
                                            e.start();
                                    });
                            }
                        }
                    });
                } else {
                    var i = Promise.resolve();
                    o.each(e, function (e) {
                        var t = e.current || {},
                            r = t.controllers,
                            n = t.start;
                        if (r && r.length) {
                            var a = r.map(function (e) {
                                var t = e.queue;
                                return (e.queue = []), t;
                            });
                            i = i.then(function () {
                                return (
                                    o.each(r, function (e, t) {
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
