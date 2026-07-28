"use strict";
function r(e) {
    return e && "object" == typeof e && "default" in e ? e.default : e;
}
Object.defineProperty(t, "__esModule", { value: !0 });
var i = n(209801),
    a = n(675106),
    o = r(n(984101)),
    s = n(582128),
    l = r(n(420979)),
    u = r(n(501984)),
    c = r(n(973280)),
    d = r(n(269274)),
    f = n(472090),
    p = n(672722),
    h = n(727522),
    m = r(n(252446)),
    g = n(134539),
    v = r(n(901012)),
    y = r(n(394320)),
    b = n(54482),
    _ = n(865951),
    w = {
        default: { tension: 170, friction: 26 },
        gentle: { tension: 120, friction: 14 },
        wobbly: { tension: 180, friction: 12 },
        stiff: { tension: 210, friction: 20 },
        slow: { tension: 280, friction: 60 },
        molasses: { tension: 280, friction: 120 },
    },
    x = o(
        o({}, w.default),
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
    E = function () {
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
            Object.assign(this, x);
    };
function S(e, t) {
    if (a.is.und(t.decay)) {
        var n = !a.is.und(t.tension) || !a.is.und(t.friction);
        (!n && a.is.und(t.frequency) && a.is.und(t.damping) && a.is.und(t.mass)) ||
            ((e.duration = void 0), (e.decay = void 0)),
            n && (e.frequency = void 0);
    } else e.duration = void 0;
}
var k = [],
    T = function () {
        (this.changed = !1),
            (this.values = k),
            (this.toValues = null),
            (this.fromValues = k),
            (this.to = void 0),
            (this.from = void 0),
            (this.config = new E()),
            (this.immediate = !1),
            (this.onStart = void 0),
            (this.onChange = void 0),
            (this.onRest = []);
    };
function C(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
}
var P = function (e, t) {
    return h.useMemoOne(e, t || [{}]);
};
function A(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    return a.is.fun(e) ? e.apply(void 0, n) : e;
}
var M = function (e, t) {
        return !0 === e || !!(t && e && (a.is.fun(e) ? e(t) : a.toArray(e).includes(t)));
    },
    R = function (e, t, n) {
        return e && (a.is.fun(e) ? e(t, n) : a.is.arr(e) ? e[t] : o({}, e));
    },
    I = function (e, t) {
        return !0 === e.default ? e[t] : e.default ? e.default[t] : void 0;
    },
    L = function (e, t, n) {
        void 0 === t && (t = []), void 0 === n && (n = {});
        var r = O;
        e.default && !0 !== e.default && (r = Object.keys((e = e.default)));
        for (
            var i,
                o = (function (e) {
                    var t = 0;
                    if ("u" < typeof Symbol || null == e[Symbol.iterator]) {
                        if (
                            Array.isArray(e) ||
                            (e = (function (e) {
                                if (e) {
                                    if ("string" == typeof e) return C(e, void 0);
                                    var t = Object.prototype.toString.call(e).slice(8, -1);
                                    if (
                                        ("Object" === t && e.constructor && (t = e.constructor.name),
                                        "Map" === t || "Set" === t)
                                    )
                                        return Array.from(e);
                                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                        return C(e, void 0);
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
            !(i = o()).done;
        ) {
            var s = i.value,
                l = e[s];
            a.is.und(l) || t.includes(s) || (n[s] = l);
        }
        return n;
    },
    O = ["pause", "cancel", "config", "immediate", "onDelayEnd", "onProps", "onStart", "onChange", "onRest"],
    D = {
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
            n = 0;
        if (
            (a.each(e, function (e, r) {
                !D[r] && ((t[r] = e), n++);
            }),
            n)
        )
            return t;
    })(e);
    if (t) {
        var n = { to: t };
        return (
            a.each(e, function (e, r) {
                return r in t || (n[r] = e);
            }),
            n
        );
    }
    return o({}, e);
}
function N(e) {
    var t = a.getFluidConfig(e);
    return t
        ? N(t.get())
        : a.is.arr(e)
          ? e.map(N)
          : a.isAnimatedString(e)
            ? p.createStringInterpolator({ range: [0, 1], output: [e, e] })(1)
            : e;
}
function V(e, t) {
    var n = t.key,
        r = t.props,
        i = t.state,
        s = t.actions;
    return new Promise(function (t, l) {
        var u,
            c,
            d = !1,
            f = M(r.cancel, n);
        function p() {
            i.resumeQueue.add(h), c.cancel(), (u = c.time - a.Globals.now());
        }
        function h() {
            u > 0 ? (i.pauseQueue.add(p), (c = a.Globals.frameLoop.setTimeout(m, u))) : m();
        }
        function m() {
            i.pauseQueue.delete(p), e <= (i.cancelId || 0) && (f = !0);
            try {
                s.start(o(o({}, r), {}, { callId: e, delay: u, cancel: f, pause: d }), t);
            } catch (e) {
                l(e);
            }
        }
        f
            ? m()
            : ((u = A(r.delay || 0, n)), (d = M(r.pause, n)) ? (i.resumeQueue.add(h), s.pause()) : (s.resume(), h()));
    });
}
var j = function (e, t) {
        return 1 == t.length
            ? t[0]
            : t.some(function (e) {
                    return e.cancelled;
                })
              ? K(e)
              : t.every(function (e) {
                      return e.noop;
                  })
                ? B(e)
                : U(
                      e,
                      t.every(function (e) {
                          return e.finished;
                      }),
                  );
    },
    B = function (e, t) {
        return void 0 === t && (t = e.get()), { value: t, noop: !0, finished: !0, target: e };
    },
    U = function (e, t, n) {
        return void 0 === n && (n = e.get()), { value: n, finished: t, target: e };
    },
    K = function (e, t) {
        return void 0 === t && (t = e.get()), { value: t, cancelled: !0, target: e };
    };
function $(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
}
function z(e, t, n, r) {
    return W.apply(this, arguments);
}
function W() {
    return (W = u(
        l.mark(function e(t, n, r, i) {
            var s, c, d, f, h;
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
                                ((s = n.callId),
                                (c = n.parentId),
                                (d = n.onRest),
                                (f = r.asyncTo),
                                (h = r.promise),
                                !(!c && t === f && !n.reset))
                            ) {
                                e.next = 7;
                                break;
                            }
                            return e.abrupt("return", h);
                        case 7:
                            return e.abrupt(
                                "return",
                                (r.promise = u(
                                    l.mark(function e() {
                                        var m, g, v, y, b, _, w, x, E;
                                        return l.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return (
                                                                (r.asyncId = s),
                                                                (r.asyncTo = t),
                                                                (m = L(n, ["onRest"])),
                                                                (y = new Promise(function (e, t) {
                                                                    return (g = e), (v = t);
                                                                })),
                                                                (b = function (e) {
                                                                    return function () {
                                                                        var t = function (e) {
                                                                            throw (e instanceof H && v(e), e);
                                                                        };
                                                                        try {
                                                                            return e.apply(void 0, arguments).catch(t);
                                                                        } catch (e) {
                                                                            t(e);
                                                                        }
                                                                    };
                                                                }),
                                                                (_ = function (e) {
                                                                    var t =
                                                                        (s <= (r.cancelId || 0) && K(i)) ||
                                                                        (s !== r.asyncId && U(i, !1));
                                                                    if (t) throw ((e.result = t), e);
                                                                }),
                                                                (w = b(function (e, t) {
                                                                    var n = new H();
                                                                    _(n);
                                                                    var c = a.is.obj(e)
                                                                        ? o({}, e)
                                                                        : o(o({}, t), {}, { to: e });
                                                                    return (
                                                                        (c.parentId = s),
                                                                        a.each(m, function (e, t) {
                                                                            a.is.und(c[t]) && (c[t] = e);
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
                                                                                                            (_(n),
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
                                                                a.is.arr(t)
                                                                    ? (E = (function () {
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
                                                                                                                              return $(
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
                                                                                                                              return $(
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
                                                                                                      w(i)
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
                                                                    : a.is.fun(t) &&
                                                                      (E = Promise.resolve(t(w, i.stop.bind(i)))),
                                                                (e.next = 11),
                                                                Promise.all([E.then(g), y])
                                                            );
                                                        case 11:
                                                            (x = U(i, !0)), (e.next = 21);
                                                            break;
                                                        case 14:
                                                            if (
                                                                ((e.prev = 14),
                                                                (e.t0 = e.catch(7)),
                                                                !(e.t0 instanceof H))
                                                            ) {
                                                                e.next = 20;
                                                                break;
                                                            }
                                                            (x = e.t0.result), (e.next = 21);
                                                            break;
                                                        case 20:
                                                            throw e.t0;
                                                        case 21:
                                                            return (
                                                                (e.prev = 21),
                                                                s == r.asyncId &&
                                                                    ((r.asyncId = c),
                                                                    (r.asyncTo = c ? f : void 0),
                                                                    (r.promise = c ? h : void 0)),
                                                                e.finish(21)
                                                            );
                                                        case 24:
                                                            return (
                                                                a.is.fun(d) &&
                                                                    p.batchedUpdates(function () {
                                                                        d(x);
                                                                    }),
                                                                e.abrupt("return", x)
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
function G(e, t) {
    (e.cancelId = t), (e.asyncId = e.asyncTo = e.promise = void 0);
}
var H = (function (e) {
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
    })(m(Error)),
    q = function (e) {
        return e instanceof X;
    },
    Y = 1,
    X = (function (e) {
        function t() {
            for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
            return (
                ((t = e.call.apply(e, [this].concat(r)) || this).id = Y++),
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
                var e = f.getAnimated(this);
                return e && e.getValue();
            }),
            (n.to = function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return p.to(this, t);
            }),
            (n.interpolate = function () {
                g.deprecateInterpolate();
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return p.to(this, t);
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
                this.idle || p.frameLoop.start(this), this._emit({ type: "priority", parent: this, priority: e });
            }),
            (n._emit = function (e) {
                a.each(Array.from(this._children), function (t) {
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
    })(a.FluidValue),
    J = "CREATED",
    Z = "IDLE",
    Q = "ACTIVE",
    ee = "PAUSED",
    et = "DISPOSED",
    en = (function (e) {
        function t(t, n) {
            var r;
            if (
                (((r = e.call(this) || this).key = void 0),
                (r.animation = new T()),
                (r.queue = void 0),
                (r._phase = J),
                (r._state = { pauseQueue: new Set(), resumeQueue: new Set() }),
                (r._defaultProps = {}),
                (r._lastCallId = 0),
                (r._lastToId = 0),
                !a.is.und(t) || !a.is.und(n))
            ) {
                var i = a.is.obj(t) ? o({}, t) : o(o({}, n), {}, { from: t });
                (i.default = !0), r.start(i);
            }
            return r;
        }
        d(t, e);
        var n,
            r = t.prototype;
        return (
            (r.advance = function (e) {
                var t = this,
                    n = !0,
                    r = !1,
                    i = this.animation,
                    o = i.config,
                    s = i.toValues,
                    l = f.getPayload(i.to);
                if (!l) {
                    var u = a.getFluidConfig(i.to);
                    u && (s = a.toArray(u.get()));
                }
                return (
                    i.values.forEach(function (u, c) {
                        if (!u.done) {
                            var d = l ? l[c].lastPosition : s[c],
                                f = i.immediate,
                                p = d;
                            if (!f) {
                                if (((p = u.lastPosition), o.tension <= 0)) {
                                    u.done = !0;
                                    return;
                                }
                                var h = (u.elapsedTime += e),
                                    m = i.fromValues[c],
                                    g =
                                        null != u.v0
                                            ? u.v0
                                            : (u.v0 = a.is.arr(o.velocity) ? o.velocity[c] : o.velocity);
                                if (a.is.und(o.duration))
                                    if (o.decay) {
                                        var v = !0 === o.decay ? 0.998 : o.decay,
                                            y = Math.exp(-(1 - v) * h);
                                        (p = m + (g / (1 - v)) * (1 - y)),
                                            (f = 0.1 > Math.abs(u.lastPosition - p)),
                                            (b = g * y);
                                    } else
                                        for (
                                            var b = null == u.lastVelocity ? g : u.lastVelocity,
                                                _ =
                                                    o.precision ||
                                                    (m == d ? 0.005 : Math.min(1, 0.001 * Math.abs(d - m))),
                                                w = o.restVelocity || _ / 10,
                                                x = o.clamp ? 0 : o.bounce,
                                                E = !a.is.und(x),
                                                S = m == d ? u.v0 > 0 : m < d,
                                                k = !1,
                                                T = Math.ceil(e / 1),
                                                C = 0;
                                            C < T && !(!(Math.abs(b) > w) && (f = Math.abs(d - p) <= _));
                                            ++C
                                        ) {
                                            E && (p == d || p > d == S) && ((b = -b * x), (p = d));
                                            var P =
                                                (-(1e-6 * o.tension) * (p - d) + -(0.001 * o.friction) * b) / o.mass;
                                            (b += +P), (p += +b);
                                        }
                                else {
                                    var A = o.progress || 0;
                                    o.duration <= 0 ? (A = 1) : (A += (1 - A) * Math.min(1, h / o.duration)),
                                        (b = ((p = m + o.easing(A) * (d - m)) - u.lastPosition) / e),
                                        (f = 1 == A);
                                }
                                (u.lastVelocity = b),
                                    Number.isNaN(p) && (console.warn("Got NaN while animating:", t), (f = !0));
                            }
                            l && !l[c].done && (f = !1),
                                f ? (u.done = !0) : (n = !1),
                                u.setValue(p, o.round) && (r = !0);
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
                    p.batchedUpdates(function () {
                        if ((t._focus(e), t._set(e) && !t.is(Q))) return t._onChange(t.get(), !0);
                        t._stop();
                    }),
                    this
                );
            }),
            (r.pause = function () {
                er(this, "pause"),
                    this.is(ee) ||
                        ((this._phase = ee),
                        a.flush(this._state.pauseQueue, function (e) {
                            return e();
                        }));
            }),
            (r.resume = function () {
                er(this, "resume"),
                    this.is(ee) &&
                        (this._start(),
                        a.flush(this._state.resumeQueue, function (e) {
                            return e();
                        }));
            }),
            (r.finish = function (e) {
                var t = this;
                if ((this.resume(), this.is(Q))) {
                    var n = this.animation;
                    !n.config.decay && a.is.und(e) && (e = n.to),
                        a.is.und(e) || this._set(e),
                        p.batchedUpdates(function () {
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
                        s = this;
                    return l.wrap(
                        function (e) {
                            for (;;)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        return (
                                            er(this, "start"),
                                            a.is.und(t)
                                                ? ((r = this.queue || []), (this.queue = []))
                                                : (r = [a.is.obj(t) ? t : o(o({}, n), {}, { to: t })]),
                                            (e.next = 4),
                                            Promise.all(
                                                r.map(function (e) {
                                                    return s._update(e);
                                                }),
                                            )
                                        );
                                    case 4:
                                        return (i = e.sent), e.abrupt("return", j(this, i));
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
                        (G(this._state, this._lastCallId),
                        this._focus(this.get()),
                        p.batchedUpdates(function () {
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
                        ? !this.is(Q) && (this._reset(), this.is(ee) || this._start())
                        : "priority" == t.type && (this.priority = t.priority + 1);
            }),
            (r._prepareNode = function (e) {
                var t = e.to,
                    n = e.from,
                    r = e.reverse,
                    i = this.key || "",
                    o = {
                        to: (t = !a.is.obj(t) || a.getFluidConfig(t) ? t : t[i]),
                        from: (n = !a.is.obj(n) || a.getFluidConfig(n) ? n : n[i]),
                    };
                if (this.is(J)) {
                    if (r) {
                        var s = [n, t];
                        (t = s[0]), (n = s[1]);
                    }
                    n = a.getFluidValue(n);
                    var l = this._updateNode(a.is.und(n) ? a.getFluidValue(t) : n);
                    l && !a.is.und(n) && l.setValue(n);
                }
                return o;
            }),
            (r._updateNode = function (e) {
                var t = f.getAnimated(this);
                if (!a.is.und(e)) {
                    var n = this._getNodeType(e);
                    (t && t.constructor === n) || f.setAnimated(this, (t = n.create(e)));
                }
                return t;
            }),
            (r._getNodeType = function (e) {
                var t = f.getAnimated(e);
                return t
                    ? t.constructor
                    : a.is.arr(e)
                      ? f.AnimatedArray
                      : a.isAnimatedString(e)
                        ? f.AnimatedString
                        : f.AnimatedValue;
            }),
            (r._update = function (e, t) {
                var n = this,
                    r = this._defaultProps,
                    i = function (t) {
                        var n = I(e, t);
                        a.is.und(n) || (r[t] = n), r[t] && (e[t] = r[t]);
                    };
                i("cancel"), i("pause");
                var o = this._prepareNode(e);
                return V(++this._lastCallId, {
                    key: this.key,
                    props: e,
                    state: this._state,
                    actions: {
                        pause: this.pause.bind(this),
                        resume: this.resume.bind(this),
                        start: this._merge.bind(this, o),
                    },
                }).then(function (r) {
                    if (e.loop && r.finished && !(t && r.noop)) {
                        var i = eo(e);
                        if (i) return n._update(i, !0);
                    }
                    return r;
                });
            }),
            (r._merge = function (e, t, n) {
                if (t.cancel) return this.stop(!0), n(K(this));
                var r = this.key,
                    i = this.animation,
                    s = this._defaultProps,
                    l = !a.is.und(e.to),
                    u = !a.is.und(e.from);
                if (l || u)
                    if (!(t.callId > this._lastToId)) return n(K(this));
                    else this._lastToId = t.callId;
                var c = function (e) {
                        return a.is.und(t[e]) ? s[e] : t[e];
                    },
                    d = ei(c("onDelayEnd"), r);
                d && d(t, this), t.default && L(t, ["pause", "cancel"], s);
                var h = i.to,
                    m = i.from,
                    g = e.to,
                    v = void 0 === g ? h : g,
                    y = e.from,
                    b = void 0 === y ? m : y;
                if ((u && !l && (v = b), t.reverse)) {
                    var _ = [b, v];
                    (v = _[0]), (b = _[1]);
                }
                var w = !a.isEqual(b, m);
                w && (i.from = b);
                var E = !a.isEqual(v, h);
                E && this._focus(v);
                var k = a.getFluidConfig(v),
                    T = a.getFluidConfig(b);
                T && (b = T.get());
                var C = a.is.arr(t.to) || a.is.fun(t.to),
                    P = i.config,
                    R = P.decay,
                    I = P.velocity;
                t.config &&
                    !C &&
                    (function (e, t, n) {
                        for (var r in (n && (S((n = o({}, n)), t), (t = o(o({}, n), t))),
                        S(e, t),
                        Object.assign(e, t),
                        x))
                            null == e[r] && (e[r] = x[r]);
                        var i = e.mass,
                            s = e.frequency,
                            l = e.damping;
                        a.is.und(s) ||
                            (s < 0.01 && (s = 0.01),
                            l < 0 && (l = 0),
                            (e.tension = Math.pow((2 * Math.PI) / s, 2) * i),
                            (e.friction = (4 * Math.PI * l * i) / s));
                    })(P, A(t.config, r), t.config !== s.config ? A(s.config, r) : void 0);
                var O = f.getAnimated(this);
                if (!O || a.is.und(v)) return n(U(this, !0));
                var D = a.is.und(t.reset) ? u && !t.default : !a.is.und(b) && M(t.reset, r),
                    F = D ? b : this.get(),
                    V = N(v),
                    j = a.is.num(V) || a.is.arr(V) || a.isAnimatedString(V),
                    $ = !C && (!j || M(s.immediate || t.immediate, r));
                if (E)
                    if ($) O = this._updateNode(V);
                    else {
                        var W = this._getNodeType(v);
                        if (W !== O.constructor)
                            throw Error(
                                "Cannot animate between " +
                                    O.constructor.name +
                                    " and " +
                                    W.name +
                                    ', as the "to" prop suggests',
                            );
                    }
                var G = O.constructor,
                    H = !!k,
                    q = !1;
                if (!H) {
                    var Y = D || (this.is(J) && w);
                    (E || Y) && (H = !(q = a.isEqual(N(F), V))),
                        (a.isEqual(P.decay, R) && a.isEqual(P.velocity, I)) || (H = !0);
                }
                if ((q && this.is(Q) && (i.changed && !D ? (H = !0) : H || this._stop()), !C)) {
                    (H || a.getFluidConfig(h)) &&
                        ((i.values = O.getPayload()),
                        (i.toValues = k ? null : G == f.AnimatedString ? [1] : a.toArray(V))),
                        (i.immediate = $),
                        (i.onStart = ei(c("onStart"), r)),
                        (i.onChange = ei(c("onChange"), r));
                    var X = i.onRest,
                        ee = D && !t.onRest ? X[0] || a.noop : ea(ei(c("onRest"), r), this);
                    if (H) {
                        i.onRest = [ee, ea(n, this)];
                        var et = +!D;
                        et < X.length &&
                            p.batchedUpdates(function () {
                                for (; et < X.length; et++) X[et]();
                            });
                    } else (D || t.onRest) && (i.onRest[0] = ee);
                }
                var en = ei(c("onProps"), r);
                if ((en && en(t, this), D && O.setValue(F), C)) n(z(t.to, t, this._state, this));
                else if (H) D && (this._phase = Z), this._reset(), this._start();
                else if (this.is(Q) && !E) i.onRest.push(ea(n, this));
                else {
                    let e = B(this, F),
                        t = ei(c("onNoopRest"), r);
                    null != t && t(e), n(e);
                }
            }),
            (r._focus = function (e) {
                var t = this.animation;
                if (e !== t.to) {
                    var n = a.getFluidConfig(t.to);
                    n && n.removeChild(this), (t.to = e);
                    var r = 0;
                    (n = a.getFluidConfig(e)) && (n.addChild(this), q(e) && (r = (e.priority || 0) + 1)),
                        (this.priority = r);
                }
            }),
            (r._set = function (e) {
                var t = a.getFluidConfig(e);
                t && (e = t.get());
                var n = f.getAnimated(this),
                    r = n && n.getValue();
                return n ? n.setValue(e) : this._updateNode(e), !a.isEqual(e, r);
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
                f.getAnimated(this).reset(t.to),
                    this.is(Q) || (t.changed = !1),
                    t.immediate ||
                        (t.fromValues = t.values.map(function (e) {
                            return e.lastPosition;
                        })),
                    e.prototype._reset.call(this);
            }),
            (r._start = function () {
                this.is(Q) ||
                    ((this._phase = Q),
                    e.prototype._start.call(this),
                    p.skipAnimation ? this.finish() : p.frameLoop.start(this));
            }),
            (r._stop = function (e) {
                if ((this.resume(), this.is(Q))) {
                    (this._phase = Z), this._onChange(this.get(), !0);
                    var t = this.animation;
                    a.each(t.values, function (e) {
                        e.done = !0;
                    });
                    var n = t.onRest;
                    n.length &&
                        ((t.onRest = [t.toValues ? a.noop : n[0]]),
                        t.changed || (n[0] = a.noop),
                        a.each(n, function (t) {
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
                        return a.getFluidValue(this.animation.to);
                    },
                },
                {
                    key: "velocity",
                    get: function () {
                        var e = f.getAnimated(this);
                        return e instanceof f.AnimatedValue
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
    return a.is.fun(e) ? e : t && e ? e[t] : void 0;
}
var ea = function (e, t) {
    var n = t.animation.to;
    return e
        ? function (r) {
              if (r) e(K(t));
              else {
                  var i = N(n),
                      o = N(t.get());
                  e(U(t, a.isEqual(o, i)));
              }
          }
        : a.noop;
};
function eo(e, t, n) {
    void 0 === t && (t = e.loop), void 0 === n && (n = e.to);
    var r = A(t);
    if (r) {
        var i = !0 !== r && F(r),
            s = (i || e).reverse,
            l = !i || i.reset;
        return es(
            o(
                o({}, e),
                {},
                {
                    loop: t,
                    default: !1,
                    to: !s || a.is.arr(n) || a.is.fun(n) ? n : void 0,
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
        n = t.to,
        r = t.from,
        i = new Set();
    return (
        r ? el(r, i) : delete e.from,
        a.is.obj(n) ? el(n, i) : n || delete e.to,
        (e.keys = i.size ? Array.from(i) : null),
        e
    );
}
function el(e, t) {
    a.each(e, function (e, n) {
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
                    this.each(function (t, n) {
                        return (e[n] = t.get());
                    }),
                    e
                );
            }),
            (t.update = function (e) {
                return e && this.queue.push(es(e)), this;
            }),
            (t.start = function (e) {
                var t = e ? a.toArray(e).map(es) : this.queue;
                return (e || (this.queue = []), this._flush) ? this._flush(this, t) : (ev(this, t), ef(this, t));
            }),
            (t.stop = function (e) {
                if (a.is.und(e))
                    this.each(function (e) {
                        return e.stop();
                    }),
                        G(this._state, this._lastAsyncId);
                else {
                    var t = this.springs;
                    a.each(a.toArray(e), function (e) {
                        return t[e].stop();
                    });
                }
                return this;
            }),
            (t.pause = function (e) {
                if (a.is.und(e))
                    this.each(function (e) {
                        return e.pause();
                    });
                else {
                    var t = this.springs;
                    a.each(a.toArray(e), function (e) {
                        return t[e].pause();
                    });
                }
                return this;
            }),
            (t.resume = function (e) {
                if (a.is.und(e))
                    this.each(function (e) {
                        return e.resume();
                    });
                else {
                    var t = this.springs;
                    a.each(a.toArray(e), function (e) {
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
                a.each(this.springs, e);
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
                    o = this._active.size > 0;
                o &&
                    this._phase != Q &&
                    ((this._phase = Q),
                    a.flush(n, function (t) {
                        return t(e);
                    }));
                var s = (r.size || (!o && i.size)) && this.get();
                a.flush(r, function (e) {
                    return e(s);
                }),
                    o ||
                        ((this._phase = Z),
                        a.flush(i, function (e) {
                            var t = e[0],
                                n = e[1];
                            (n.value = s), t(n);
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
function ef(e, t) {
    return Promise.all(
        t.map(function (t) {
            return (function e(t, n, r) {
                var i = n.to,
                    o = n.loop,
                    s = n.onRest;
                o && (n.loop = !1);
                var l = a.is.arr(i) || a.is.fun(i) ? i : void 0;
                l
                    ? ((n.to = void 0), (n.onRest = void 0))
                    : a.each(eu, function (e) {
                          var r = n[e];
                          if (a.is.fun(r)) {
                              var i = t._events[e];
                              i instanceof Set
                                  ? (n[e] = function () {
                                        return i.add(r);
                                    })
                                  : (n[e] = function (e) {
                                        var t = e.finished,
                                            n = e.cancelled,
                                            a = i.get(r);
                                        a
                                            ? (t || (a.finished = !1), n && (a.cancelled = !0))
                                            : i.set(r, { value: null, finished: t, cancelled: n });
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
                              V(++t._lastAsyncId, {
                                  props: n,
                                  state: c,
                                  actions: {
                                      pause: a.noop,
                                      resume: a.noop,
                                      start: function (e, n) {
                                          if (((e.onRest = s), e.cancel)) a.is.und(I(e, "cancel")) || G(c, e.callId);
                                          else n(z(l, e, c, t));
                                      },
                                  },
                              }),
                          )
                        : n.keys || !0 !== n.cancel || G(c, t._lastAsyncId),
                    Promise.all(u).then(function (a) {
                        var s = j(t, a);
                        if (o && s.finished && !(r && s.noop)) {
                            var l = eo(n, o, i);
                            if (l) return ev(t, [l]), e(t, l, !0);
                        }
                        return s;
                    })
                );
            })(e, t);
        }),
    ).then(function (t) {
        return j(e, t);
    });
}
function ep(e, t) {
    var n = o({}, e.springs);
    return (
        t &&
            a.each(a.toArray(t), function (e) {
                a.is.und(e.keys) && (e = es(e)),
                    a.is.obj(e.to) || (e = o(o({}, e), {}, { to: void 0 })),
                    eg(n, e, function (e) {
                        return em(e);
                    });
            }),
        n
    );
}
function eh(e, t) {
    a.each(t, function (t, n) {
        e.springs[n] || ((e.springs[n] = t), t.addChild(e));
    });
}
function em(e, t) {
    var n = new en();
    return (n.key = e), t && n.addChild(t), n;
}
function eg(e, t, n) {
    t.keys &&
        a.each(t.keys, function (r) {
            (e[r] || (e[r] = n(r)))._prepareNode(t);
        });
}
function ev(e, t) {
    a.each(t, function (t) {
        eg(e.springs, t, function (t) {
            return em(t, e);
        });
    });
}
var ey = s.createContext({}),
    eb = function (e) {
        var t = e.children,
            n = v(e, ["children"]),
            r = s.useContext(ey);
        n = P(
            function () {
                return o(o({}, r), n);
            },
            [r, n.pause, n.cancel, n.immediate, n.config],
        );
        var i = ey.Provider;
        return s.createElement(i, { value: n }, t);
    };
(eb.Provider = ey.Provider), (eb.Consumer = ey.Consumer);
var e_ = function () {
        return s.useContext(ey);
    },
    ew = {
        create: function (e) {
            return {
                get controllers() {
                    return e();
                },
                update: function (t) {
                    return (
                        a.each(e(), function (e, n) {
                            e.update(R(t, n, e));
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
                                                        var r = R(t, n, e);
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
                    return a.each(e(), function (e) {
                        return e.stop(t);
                    });
                },
                pause: function (t) {
                    return a.each(e(), function (e) {
                        return e.pause(t);
                    });
                },
                resume: function (t) {
                    return a.each(e(), function (e) {
                        return e.resume(t);
                    });
                },
            };
        },
    };
function ex(e, t, n) {
    var r = a.is.fun(t) && t;
    r && !n && (n = []);
    var l = s.useRef(0),
        u = a.useForceUpdate(),
        c = s.useState(function () {
            return {
                ctrls: [],
                queue: [],
                flush: function (e, t) {
                    var n = ep(e, t);
                    return !(l.current > 0) ||
                        c.queue.length ||
                        Object.keys(n).some(function (t) {
                            return !e.springs[t];
                        })
                        ? new Promise(function (r) {
                              eh(e, n),
                                  c.queue.push(function () {
                                      r(ef(e, t));
                                  }),
                                  u();
                          })
                        : ef(e, t);
                },
            };
        })[0],
        d = s.useRef(),
        f = [].concat(c.ctrls),
        p = [],
        h = a.usePrev(e) || 0,
        m = f.slice(e, h);
    function g(e, n) {
        for (var i = e; i < n; i++) {
            var o = f[i] || (f[i] = new ed(null, c.flush)),
                s = r ? r(i, o) : t[i];
            s &&
                ((s = p[i] =
                    (function (e) {
                        var t = es(e);
                        return a.is.und(t.default) && (t.default = L(t, [!0 === t.immediate && "immediate"])), t;
                    })(s)),
                0 == i && ((d.current = s.ref), (s.ref = void 0)));
        }
    }
    P(
        function () {
            (f.length = e), g(h, e);
        },
        [e],
    ),
        P(function () {
            g(0, Math.min(h, e));
        }, n);
    var v = s.useMemo(function () {
            return ew.create(function () {
                return c.ctrls;
            });
        }, []),
        y = f.map(function (e, t) {
            return ep(e, p[t]);
        }),
        b = e_();
    i.useLayoutEffect(function () {
        l.current++, (c.ctrls = f), d.current && (d.current.current = v);
        var e = c.queue;
        e.length &&
            ((c.queue = []),
            a.each(e, function (e) {
                return e();
            })),
            a.each(m, function (e) {
                return e.dispose();
            }),
            a.each(f, function (e, t) {
                eh(e, y[t]), e.start({ default: b });
                var n = p[t];
                n && (d.current ? e.queue.push(n) : e.start(n));
            });
    }),
        a.useOnce(function () {
            return function () {
                a.each(c.ctrls, function (e) {
                    return e.dispose();
                });
            };
        });
    var _ = y.map(function (e) {
        return o({}, e);
    });
    return r || 3 == arguments.length ? [_, v.start, v.stop] : _;
}
function eE(e, t) {
    var n = a.is.fun(e),
        r = ex(1, n ? e : [e], n ? t || [] : t),
        i = r[0][0],
        o = r[1],
        s = r[2];
    return n || 2 == arguments.length ? [i, o, s] : i;
}
function eS(e, t, n) {
    var r = a.is.fun(t) && t;
    r && !n && (n = []);
    var o = [],
        s = ex(
            e,
            function (e, n) {
                return (o[e] = n), R(t, e, n);
            },
            n || [{}],
        );
    if (
        (i.useLayoutEffect(function () {
            for (var e = a.is.obj(t) && t.reverse, n = 0; n < o.length; n++) {
                var r = o[n + (e ? 1 : -1)];
                r && o[n].update({ to: r.springs }).start();
            }
        }, n),
        r || 3 == arguments.length)
    ) {
        var l = s[1];
        return (
            (s[1] = h.useCallbackOne(function (e) {
                var t = a.is.obj(e) && e.reverse;
                return l(function (n, r) {
                    var i = R(e, n, r),
                        a = o[n + (t ? 1 : -1)];
                    return a && (i.to = a.springs), i;
                });
            }, n)),
            s
        );
    }
    return s[0];
}
var ek = "mount",
    eT = "enter",
    eC = "update",
    eP = "leave";
function eA(e, t, n) {
    var r,
        l,
        u,
        c,
        d,
        f = t.ref,
        p = t.reset,
        h = t.sort,
        m = t.trail,
        g = void 0 === m ? 0 : m,
        v = t.expires,
        y = void 0 === v || v,
        b = a.toArray(e),
        _ = [],
        w =
            ((r = b),
            (u = (l = t).key),
            (d = void 0 === (c = l.keys) ? u : c),
            a.is.und(d) ? r : a.is.fun(d) ? r.map(d) : a.toArray(d)),
        x = s.useRef(null),
        E = p ? null : x.current;
    i.useLayoutEffect(function () {
        x.current = _;
    }),
        a.useOnce(function () {
            return function () {
                return a.each(x.current, function (e) {
                    e.expired && clearTimeout(e.expirationId), e.ctrl.dispose();
                });
            };
        });
    var S = [];
    if (
        (E &&
            a.each(E, function (e, t) {
                e.expired ? clearTimeout(e.expirationId) : ~(t = S[t] = w.indexOf(e.key)) && (_[t] = e);
            }),
        a.each(b, function (e, t) {
            _[t] || (_[t] = { key: w[t], item: e, phase: ek, ctrl: new ed() });
        }),
        S.length)
    ) {
        var k = -1;
        a.each(S, function (e, n) {
            var r = E[n];
            ~e ? ((k = _.indexOf(r)), (_[k] = o(o({}, r), {}, { item: b[e] }))) : t.leave && _.splice(++k, 0, r);
        });
    }
    a.is.fun(h) &&
        _.sort(function (e, t) {
            return h(e.item, t.item);
        });
    var T = -g,
        C = a.useForceUpdate(),
        P = L(t),
        M = new Map();
    a.each(_, function (e, n) {
        var r,
            i,
            s = e.key,
            l = e.phase;
        if (l == ek) (r = t.enter), (i = eT);
        else {
            var u = 0 > w.indexOf(s);
            if (l != eP)
                if (u) (r = t.leave), (i = eP);
                else {
                    if (!(r = t.update)) return;
                    i = eC;
                }
            else {
                if (u) return;
                (r = t.enter), (i = eT);
            }
        }
        if (((r = A(r, e.item, n)), !(r = a.is.obj(r) ? F(r) : { to: r }).config)) {
            var c = t.config || P.config;
            r.config = A(c, e.item, n);
        }
        var d = o(o({}, P), {}, { delay: (T += g), reset: !1 }, r);
        i == eT && a.is.und(d.from) && (d.from = A(a.is.und(t.initial) || E ? t.from : t.initial, e.item, n));
        var f = d.onRest;
        d.onRest = d.onNoopRest = function (e) {
            var t = x.current,
                n = t.find(function (e) {
                    return e.key === s;
                });
            if (n) {
                if ((a.is.fun(f) && !0 !== e.noop && f(e, n), e.cancelled && n.phase != eC)) {
                    n.phase = l;
                    return;
                }
                if (n.ctrl.idle) {
                    var r = t.every(function (e) {
                        return e.ctrl.idle;
                    });
                    if (n.phase == eP) {
                        var i = A(y, n.item);
                        if (!1 !== i) {
                            var o = !0 === i ? 0 : i;
                            if (((n.expired = !0), !r && o > 0)) {
                                o <= 0x7fffffff && (n.expirationId = setTimeout(C, o));
                                return;
                            }
                        }
                    }
                    r &&
                        t.some(function (e) {
                            return e.expired;
                        }) &&
                        C();
                }
            }
        };
        var p = ep(e.ctrl, d);
        M.set(e, { phase: i, springs: p, payload: d });
    });
    var R = e_();
    i.useLayoutEffect(
        function () {
            a.each(_, function (e) {
                e.ctrl.start({ default: R });
            });
        },
        [R],
    );
    var I = s.useMemo(function () {
        return ew.create(function () {
            return x.current.map(function (e) {
                return e.ctrl;
            });
        });
    }, []);
    s.useImperativeHandle(f, function () {
        return I;
    }),
        i.useLayoutEffect(
            function () {
                a.each(M, function (e, t) {
                    var n = e.phase,
                        r = e.springs,
                        i = e.payload;
                    eh(t.ctrl, r),
                        R.cancel ||
                            ((t.phase = n), n == eT && t.ctrl.start({ default: R }), t.ctrl[f ? "update" : "start"](i));
                });
            },
            p ? void 0 : n,
        );
    var O = function (e) {
        return s.createElement(
            s.Fragment,
            null,
            _.map(function (t, n) {
                var r = e(o({}, (M.get(t) || t.ctrl).springs), t.item, t, n);
                return r && r.type
                    ? s.createElement(
                          r.type,
                          o({}, r.props, { key: a.is.str(t.key) || a.is.num(t.key) ? t.key : t.ctrl.id, ref: r.ref }),
                      )
                    : r;
            }),
        );
    };
    return 3 == arguments.length ? [O, I.start, I.stop] : O;
}
var eM = (function (e) {
    function t(t, n) {
        ((r = e.call(this) || this).source = t),
            (r.key = void 0),
            (r.idle = !0),
            (r.calc = void 0),
            (r.calc = a.createInterpolator.apply(void 0, n));
        var r,
            i = r._get(),
            o = a.is.arr(i) ? f.AnimatedArray : f.AnimatedValue;
        return f.setAnimated(y(r), o.create(i)), r;
    }
    d(t, e);
    var n = t.prototype;
    return (
        (n.advance = function (e) {
            var t = this._get(),
                n = this.get();
            a.isEqual(t, n) || (f.getAnimated(this).setValue(t), this._onChange(t, this.idle));
        }),
        (n._get = function () {
            var e = a.is.arr(this.source)
                ? this.source.map(function (e) {
                      return e.get();
                  })
                : a.toArray(this.source.get());
            return this.calc.apply(this, e);
        }),
        (n._reset = function () {
            a.each(f.getPayload(this), function (e) {
                return e.reset();
            }),
                e.prototype._reset.call(this);
        }),
        (n._start = function () {
            (this.idle = !1),
                e.prototype._start.call(this),
                p.skipAnimation ? ((this.idle = !0), this.advance()) : p.frameLoop.start(this);
        }),
        (n._attach = function () {
            var e = this,
                t = !0,
                n = 1;
            a.each(a.toArray(this.source), function (r) {
                q(r) && (r.idle || (t = !1), (n = Math.max(n, r.priority + 1))), r.addChild(e);
            }),
                (this.priority = n),
                t || (this._reset(), this._start());
        }),
        (n._detach = function () {
            var e = this;
            a.each(a.toArray(this.source), function (t) {
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
                        ((this.idle = a.toArray(this.source).every(function (e) {
                            return !1 !== e.idle;
                        })),
                        this.idle &&
                            (this.advance(),
                            a.each(f.getPayload(this), function (e) {
                                e.done = !0;
                            })))
                  : "priority" == t.type &&
                    (this.priority = a.toArray(this.source).reduce(function (e, t) {
                        return Math.max(e, (t.priority || 0) + 1);
                    }, 0)),
                e.prototype.onParentChange.call(this, t);
        }),
        t
    );
})(X);
a.Globals.assign({
    createStringInterpolator: b.createStringInterpolator,
    to: function (e, t) {
        return new eM(e, t);
    },
}),
    Object.keys(_).forEach(function (e) {
        "default" !== e &&
            Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                    return _[e];
                },
            });
    }),
    Object.defineProperty(t, "FrameLoop", {
        enumerable: !0,
        get: function () {
            return a.FrameLoop;
        },
    }),
    Object.defineProperty(t, "Globals", {
        enumerable: !0,
        get: function () {
            return a.Globals;
        },
    }),
    Object.defineProperty(t, "createInterpolator", {
        enumerable: !0,
        get: function () {
            return a.createInterpolator;
        },
    }),
    (t.BailSignal = H),
    (t.Controller = ed),
    (t.FrameValue = X),
    (t.Interpolation = eM),
    (t.Spring = function (e) {
        return (0, e.children)(eE(v(e, ["children"])));
    }),
    (t.SpringContext = eb),
    (t.SpringHandle = ew),
    (t.SpringValue = en),
    (t.Trail = function (e) {
        var t = e.items,
            n = e.children,
            r = v(e, ["items", "children"]),
            i = eS(t.length, r);
        return t.map(function (e, t) {
            var r = n(e, t);
            return a.is.fun(r) ? r(i[t]) : r;
        });
    }),
    (t.Transition = function (e) {
        var t = e.items,
            n = e.children,
            r = v(e, ["items", "children"]);
        return s.createElement(s.Fragment, null, eA(t, r)(n));
    }),
    (t.config = w),
    (t.inferTo = F),
    (t.interpolate = function (e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return g.deprecateInterpolate(), new eM(e, n);
    }),
    (t.to = function (e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return new eM(e, n);
    }),
    (t.update = function () {
        return a.Globals.frameLoop.advance();
    }),
    (t.useChain = function (e, t, n) {
        void 0 === n && (n = 1e3),
            i.useLayoutEffect(function () {
                if (t) {
                    var r = 0;
                    a.each(e, function (e, i) {
                        if (e.current) {
                            var o = e.current.controllers;
                            if (o.length) {
                                var s = n * t[i];
                                isNaN(s) ? (s = r) : (r = s),
                                    a.each(o, function (e) {
                                        a.each(e.queue, function (e) {
                                            e.delay = s + (e.delay || 0);
                                        }),
                                            e.start();
                                    });
                            }
                        }
                    });
                } else {
                    var i = Promise.resolve();
                    a.each(e, function (e) {
                        var t = e.current || {},
                            n = t.controllers,
                            r = t.start;
                        if (n && n.length) {
                            var o = n.map(function (e) {
                                var t = e.queue;
                                return (e.queue = []), t;
                            });
                            i = i.then(function () {
                                return (
                                    a.each(n, function (e, t) {
                                        var n;
                                        return (n = e.queue).push.apply(n, o[t]);
                                    }),
                                    r()
                                );
                            });
                        }
                    });
                }
            });
    }),
    (t.useSpring = eE),
    (t.useSprings = ex),
    (t.useTrail = eS),
    (t.useTransition = eA);
