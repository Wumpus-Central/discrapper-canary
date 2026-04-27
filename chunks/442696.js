"use strict";
function n(e) {
    return e && "object" == typeof e && "default" in e ? e.default : e;
}
Object.defineProperty(t, "__esModule", { value: !0 });
var s = r(131981),
    a = r(675106),
    o = n(r(984101)),
    i = r(64700),
    u = n(r(420979)),
    c = n(r(501984)),
    l = n(r(973280)),
    d = n(r(269274)),
    f = r(294814),
    p = r(672722),
    h = r(337126),
    m = n(r(252446)),
    v = r(134539),
    g = n(r(901012)),
    y = n(r(394320)),
    b = r(54482),
    _ = r(865951),
    x = {
        default: { tension: 170, friction: 26 },
        gentle: { tension: 120, friction: 14 },
        wobbly: { tension: 180, friction: 12 },
        stiff: { tension: 210, friction: 20 },
        slow: { tension: 280, friction: 60 },
        molasses: { tension: 280, friction: 120 },
    },
    w = o(
        o({}, x.default),
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
    k = function () {
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
            Object.assign(this, w);
    };
function M(e, t) {
    if (a.is.und(t.decay)) {
        var r = !a.is.und(t.tension) || !a.is.und(t.friction);
        (!r && a.is.und(t.frequency) && a.is.und(t.damping) && a.is.und(t.mass)) ||
            ((e.duration = void 0), (e.decay = void 0)),
            r && (e.frequency = void 0);
    } else e.duration = void 0;
}
var S = [],
    E = function () {
        (this.changed = !1),
            (this.values = S),
            (this.toValues = null),
            (this.fromValues = S),
            (this.to = void 0),
            (this.from = void 0),
            (this.config = new k()),
            (this.immediate = !1),
            (this.onStart = void 0),
            (this.onChange = void 0),
            (this.onRest = []);
    };
function L(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
    return n;
}
var T = function (e, t) {
    return h.useMemoOne(e, t || [{}]);
};
function D(e) {
    for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
    return a.is.fun(e) ? e.apply(void 0, r) : e;
}
var O = function (e, t) {
        return !0 === e || !!(t && e && (a.is.fun(e) ? e(t) : a.toArray(e).includes(t)));
    },
    C = function (e, t, r) {
        return e && (a.is.fun(e) ? e(t, r) : a.is.arr(e) ? e[t] : o({}, e));
    },
    A = function (e, t) {
        return !0 === e.default ? e[t] : e.default ? e.default[t] : void 0;
    },
    P = function (e, t, r) {
        void 0 === t && (t = []), void 0 === r && (r = {});
        var n = R;
        e.default && !0 !== e.default && (n = Object.keys((e = e.default)));
        for (
            var s,
                o = (function (e) {
                    var t = 0;
                    if ("u" < typeof Symbol || null == e[Symbol.iterator]) {
                        if (
                            Array.isArray(e) ||
                            (e = (function (e) {
                                if (e) {
                                    if ("string" == typeof e) return L(e, void 0);
                                    var t = Object.prototype.toString.call(e).slice(8, -1);
                                    if (
                                        ("Object" === t && e.constructor && (t = e.constructor.name),
                                        "Map" === t || "Set" === t)
                                    )
                                        return Array.from(e);
                                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                        return L(e, void 0);
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
            !(s = o()).done;
        ) {
            var i = s.value,
                u = e[i];
            a.is.und(u) || t.includes(i) || (r[i] = u);
        }
        return r;
    },
    R = ["pause", "cancel", "config", "immediate", "onDelayEnd", "onProps", "onStart", "onChange", "onRest"],
    j = {
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
function I(e) {
    var t = (function (e) {
        var t = {},
            r = 0;
        if (
            (a.each(e, function (e, n) {
                !j[n] && ((t[n] = e), r++);
            }),
            r)
        )
            return t;
    })(e);
    if (t) {
        var r = { to: t };
        return (
            a.each(e, function (e, n) {
                return n in t || (r[n] = e);
            }),
            r
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
function Y(e, t) {
    var r = t.key,
        n = t.props,
        s = t.state,
        i = t.actions;
    return new Promise(function (t, u) {
        var c,
            l,
            d = !1,
            f = O(n.cancel, r);
        function p() {
            s.resumeQueue.add(h), l.cancel(), (c = l.time - a.Globals.now());
        }
        function h() {
            c > 0 ? (s.pauseQueue.add(p), (l = a.Globals.frameLoop.setTimeout(m, c))) : m();
        }
        function m() {
            s.pauseQueue.delete(p), e <= (s.cancelId || 0) && (f = !0);
            try {
                i.start(o(o({}, n), {}, { callId: e, delay: c, cancel: f, pause: d }), t);
            } catch (e) {
                u(e);
            }
        }
        f
            ? m()
            : ((c = D(n.delay || 0, r)), (d = O(n.pause, r)) ? (s.resumeQueue.add(h), i.pause()) : (i.resume(), h()));
    });
}
var F = function (e, t) {
        return 1 == t.length
            ? t[0]
            : t.some(function (e) {
                    return e.cancelled;
                })
              ? B(e)
              : t.every(function (e) {
                      return e.noop;
                  })
                ? H(e)
                : z(
                      e,
                      t.every(function (e) {
                          return e.finished;
                      }),
                  );
    },
    H = function (e, t) {
        return void 0 === t && (t = e.get()), { value: t, noop: !0, finished: !0, target: e };
    },
    z = function (e, t, r) {
        return void 0 === r && (r = e.get()), { value: r, finished: t, target: e };
    },
    B = function (e, t) {
        return void 0 === t && (t = e.get()), { value: t, cancelled: !0, target: e };
    };
function U(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
    return n;
}
function W(e, t, r, n) {
    return $.apply(this, arguments);
}
function $() {
    return ($ = c(
        u.mark(function e(t, r, n, s) {
            var i, l, d, f, h;
            return u.wrap(function (e) {
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
                                ((i = r.callId),
                                (l = r.parentId),
                                (d = r.onRest),
                                (f = n.asyncTo),
                                (h = n.promise),
                                !(!l && t === f && !r.reset))
                            ) {
                                e.next = 7;
                                break;
                            }
                            return e.abrupt("return", h);
                        case 7:
                            return e.abrupt(
                                "return",
                                (n.promise = c(
                                    u.mark(function e() {
                                        var m, v, g, y, b, _, x, w, k;
                                        return u.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return (
                                                                (n.asyncId = i),
                                                                (n.asyncTo = t),
                                                                (m = P(r, ["onRest"])),
                                                                (y = new Promise(function (e, t) {
                                                                    return (v = e), (g = t);
                                                                })),
                                                                (b = function (e) {
                                                                    return function () {
                                                                        var t = function (e) {
                                                                            throw (e instanceof K && g(e), e);
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
                                                                        (i <= (n.cancelId || 0) && B(s)) ||
                                                                        (i !== n.asyncId && z(s, !1));
                                                                    if (t) throw ((e.result = t), e);
                                                                }),
                                                                (x = b(function (e, t) {
                                                                    var r = new K();
                                                                    _(r);
                                                                    var l = a.is.obj(e)
                                                                        ? o({}, e)
                                                                        : o(o({}, t), {}, { to: e });
                                                                    return (
                                                                        (l.parentId = i),
                                                                        a.each(m, function (e, t) {
                                                                            a.is.und(l[t]) && (l[t] = e);
                                                                        }),
                                                                        s.start(l).then(
                                                                            (function () {
                                                                                var e = c(
                                                                                    u.mark(function e(t) {
                                                                                        return u.wrap(function (e) {
                                                                                            for (;;)
                                                                                                switch (
                                                                                                    (e.prev = e.next)
                                                                                                ) {
                                                                                                    case 0:
                                                                                                        if (
                                                                                                            (_(r),
                                                                                                            !s.is(
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
                                                                a.is.arr(t)
                                                                    ? (k = (function () {
                                                                          var e = c(
                                                                              u.mark(function e(t) {
                                                                                  var r, n, s;
                                                                                  return u.wrap(function (e) {
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
                                                                                                      (s = n.value),
                                                                                                      (e.next = 5),
                                                                                                      x(s)
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
                                                                      (k = Promise.resolve(t(x, s.stop.bind(s)))),
                                                                (e.next = 11),
                                                                Promise.all([k.then(v), y])
                                                            );
                                                        case 11:
                                                            (w = z(s, !0)), (e.next = 21);
                                                            break;
                                                        case 14:
                                                            if (
                                                                ((e.prev = 14),
                                                                (e.t0 = e.catch(7)),
                                                                !(e.t0 instanceof K))
                                                            ) {
                                                                e.next = 20;
                                                                break;
                                                            }
                                                            (w = e.t0.result), (e.next = 21);
                                                            break;
                                                        case 20:
                                                            throw e.t0;
                                                        case 21:
                                                            return (
                                                                (e.prev = 21),
                                                                i == n.asyncId &&
                                                                    ((n.asyncId = l),
                                                                    (n.asyncTo = l ? f : void 0),
                                                                    (n.promise = l ? h : void 0)),
                                                                e.finish(21)
                                                            );
                                                        case 24:
                                                            return (
                                                                a.is.fun(d) &&
                                                                    p.batchedUpdates(function () {
                                                                        d(w);
                                                                    }),
                                                                e.abrupt("return", w)
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
function V(e, t) {
    (e.cancelId = t), (e.asyncId = e.asyncTo = e.promise = void 0);
}
var K = (function (e) {
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
        return e instanceof J;
    },
    G = 1,
    J = (function (e) {
        function t() {
            for (var t, r = arguments.length, n = Array(r), s = 0; s < r; s++) n[s] = arguments[s];
            return (
                ((t = e.call.apply(e, [this].concat(n)) || this).id = G++),
                (t.key = void 0),
                (t._priority = 0),
                (t._children = new Set()),
                t
            );
        }
        d(t, e);
        var r = t.prototype;
        return (
            (r.get = function () {
                var e = f.getAnimated(this);
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
                a.each(Array.from(this._children), function (t) {
                    t.onParentChange(e);
                });
            }),
            l(t, [
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
                (n.animation = new E()),
                (n.queue = void 0),
                (n._phase = X),
                (n._state = { pauseQueue: new Set(), resumeQueue: new Set() }),
                (n._defaultProps = {}),
                (n._lastCallId = 0),
                (n._lastToId = 0),
                !a.is.und(t) || !a.is.und(r))
            ) {
                var s = a.is.obj(t) ? o({}, t) : o(o({}, r), {}, { from: t });
                (s.default = !0), n.start(s);
            }
            return n;
        }
        d(t, e);
        var r,
            n = t.prototype;
        return (
            (n.advance = function (e) {
                var t = this,
                    r = !0,
                    n = !1,
                    s = this.animation,
                    o = s.config,
                    i = s.toValues,
                    u = f.getPayload(s.to);
                if (!u) {
                    var c = a.getFluidConfig(s.to);
                    c && (i = a.toArray(c.get()));
                }
                return (
                    s.values.forEach(function (c, l) {
                        if (!c.done) {
                            var d = u ? u[l].lastPosition : i[l],
                                f = s.immediate,
                                p = d;
                            if (!f) {
                                if (((p = c.lastPosition), o.tension <= 0)) {
                                    c.done = !0;
                                    return;
                                }
                                var h = (c.elapsedTime += e),
                                    m = s.fromValues[l],
                                    v =
                                        null != c.v0
                                            ? c.v0
                                            : (c.v0 = a.is.arr(o.velocity) ? o.velocity[l] : o.velocity);
                                if (a.is.und(o.duration))
                                    if (o.decay) {
                                        var g = !0 === o.decay ? 0.998 : o.decay,
                                            y = Math.exp(-(1 - g) * h);
                                        (p = m + (v / (1 - g)) * (1 - y)),
                                            (f = 0.1 > Math.abs(c.lastPosition - p)),
                                            (b = v * y);
                                    } else
                                        for (
                                            var b = null == c.lastVelocity ? v : c.lastVelocity,
                                                _ =
                                                    o.precision ||
                                                    (m == d ? 0.005 : Math.min(1, 0.001 * Math.abs(d - m))),
                                                x = o.restVelocity || _ / 10,
                                                w = o.clamp ? 0 : o.bounce,
                                                k = !a.is.und(w),
                                                M = m == d ? c.v0 > 0 : m < d,
                                                S = !1,
                                                E = Math.ceil(e / 1),
                                                L = 0;
                                            L < E && !(!(Math.abs(b) > x) && (f = Math.abs(d - p) <= _));
                                            ++L
                                        ) {
                                            k && (p == d || p > d == M) && ((b = -b * w), (p = d));
                                            var T =
                                                (-(1e-6 * o.tension) * (p - d) + -(0.001 * o.friction) * b) / o.mass;
                                            (b += +T), (p += +b);
                                        }
                                else {
                                    var D = o.progress || 0;
                                    o.duration <= 0 ? (D = 1) : (D += (1 - D) * Math.min(1, h / o.duration)),
                                        (b = ((p = m + o.easing(D) * (d - m)) - c.lastPosition) / e),
                                        (f = 1 == D);
                                }
                                (c.lastVelocity = b),
                                    Number.isNaN(p) && (console.warn("Got NaN while animating:", t), (f = !0));
                            }
                            u && !u[l].done && (f = !1),
                                f ? (c.done = !0) : (r = !1),
                                c.setValue(p, o.round) && (n = !0);
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
                        a.flush(this._state.pauseQueue, function (e) {
                            return e();
                        }));
            }),
            (n.resume = function () {
                en(this, "resume"),
                    this.is(ee) &&
                        (this._start(),
                        a.flush(this._state.resumeQueue, function (e) {
                            return e();
                        }));
            }),
            (n.finish = function (e) {
                var t = this;
                if ((this.resume(), this.is(Q))) {
                    var r = this.animation;
                    !r.config.decay && a.is.und(e) && (e = r.to),
                        a.is.und(e) || this._set(e),
                        p.batchedUpdates(function () {
                            !r.changed && ((r.changed = !0), r.onStart && r.onStart(t)), t._stop();
                        });
                }
                return this;
            }),
            (n.update = function (e) {
                return en(this, "update"), (this.queue || (this.queue = [])).push(e), this;
            }),
            (r = c(
                u.mark(function e(t, r) {
                    var n,
                        s,
                        i = this;
                    return u.wrap(
                        function (e) {
                            for (;;)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        return (
                                            en(this, "start"),
                                            a.is.und(t)
                                                ? ((n = this.queue || []), (this.queue = []))
                                                : (n = [a.is.obj(t) ? t : o(o({}, r), {}, { to: t })]),
                                            (e.next = 4),
                                            Promise.all(
                                                n.map(function (e) {
                                                    return i._update(e);
                                                }),
                                            )
                                        );
                                    case 4:
                                        return (s = e.sent), e.abrupt("return", F(this, s));
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
                        (V(this._state, this._lastCallId),
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
                        ? !this.is(Q) && (this._reset(), this.is(ee) || this._start())
                        : "priority" == t.type && (this.priority = t.priority + 1);
            }),
            (n._prepareNode = function (e) {
                var t = e.to,
                    r = e.from,
                    n = e.reverse,
                    s = this.key || "",
                    o = {
                        to: (t = !a.is.obj(t) || a.getFluidConfig(t) ? t : t[s]),
                        from: (r = !a.is.obj(r) || a.getFluidConfig(r) ? r : r[s]),
                    };
                if (this.is(X)) {
                    if (n) {
                        var i = [r, t];
                        (t = i[0]), (r = i[1]);
                    }
                    r = a.getFluidValue(r);
                    var u = this._updateNode(a.is.und(r) ? a.getFluidValue(t) : r);
                    u && !a.is.und(r) && u.setValue(r);
                }
                return o;
            }),
            (n._updateNode = function (e) {
                var t = f.getAnimated(this);
                if (!a.is.und(e)) {
                    var r = this._getNodeType(e);
                    (t && t.constructor === r) || f.setAnimated(this, (t = r.create(e)));
                }
                return t;
            }),
            (n._getNodeType = function (e) {
                var t = f.getAnimated(e);
                return t
                    ? t.constructor
                    : a.is.arr(e)
                      ? f.AnimatedArray
                      : a.isAnimatedString(e)
                        ? f.AnimatedString
                        : f.AnimatedValue;
            }),
            (n._update = function (e, t) {
                var r = this,
                    n = this._defaultProps,
                    s = function (t) {
                        var r = A(e, t);
                        a.is.und(r) || (n[t] = r), n[t] && (e[t] = n[t]);
                    };
                s("cancel"), s("pause");
                var o = this._prepareNode(e);
                return Y(++this._lastCallId, {
                    key: this.key,
                    props: e,
                    state: this._state,
                    actions: {
                        pause: this.pause.bind(this),
                        resume: this.resume.bind(this),
                        start: this._merge.bind(this, o),
                    },
                }).then(function (n) {
                    if (e.loop && n.finished && !(t && n.noop)) {
                        var s = eo(e);
                        if (s) return r._update(s, !0);
                    }
                    return n;
                });
            }),
            (n._merge = function (e, t, r) {
                if (t.cancel) return this.stop(!0), r(B(this));
                var n = this.key,
                    s = this.animation,
                    i = this._defaultProps,
                    u = !a.is.und(e.to),
                    c = !a.is.und(e.from);
                if (u || c)
                    if (!(t.callId > this._lastToId)) return r(B(this));
                    else this._lastToId = t.callId;
                var l = function (e) {
                        return a.is.und(t[e]) ? i[e] : t[e];
                    },
                    d = es(l("onDelayEnd"), n);
                d && d(t, this), t.default && P(t, ["pause", "cancel"], i);
                var h = s.to,
                    m = s.from,
                    v = e.to,
                    g = void 0 === v ? h : v,
                    y = e.from,
                    b = void 0 === y ? m : y;
                if ((c && !u && (g = b), t.reverse)) {
                    var _ = [b, g];
                    (g = _[0]), (b = _[1]);
                }
                var x = !a.isEqual(b, m);
                x && (s.from = b);
                var k = !a.isEqual(g, h);
                k && this._focus(g);
                var S = a.getFluidConfig(g),
                    E = a.getFluidConfig(b);
                E && (b = E.get());
                var L = a.is.arr(t.to) || a.is.fun(t.to),
                    T = s.config,
                    C = T.decay,
                    A = T.velocity;
                t.config &&
                    !L &&
                    (function (e, t, r) {
                        for (var n in (r && (M((r = o({}, r)), t), (t = o(o({}, r), t))),
                        M(e, t),
                        Object.assign(e, t),
                        w))
                            null == e[n] && (e[n] = w[n]);
                        var s = e.mass,
                            i = e.frequency,
                            u = e.damping;
                        a.is.und(i) ||
                            (i < 0.01 && (i = 0.01),
                            u < 0 && (u = 0),
                            (e.tension = Math.pow((2 * Math.PI) / i, 2) * s),
                            (e.friction = (4 * Math.PI * u * s) / i));
                    })(T, D(t.config, n), t.config !== i.config ? D(i.config, n) : void 0);
                var R = f.getAnimated(this);
                if (!R || a.is.und(g)) return r(z(this, !0));
                var j = a.is.und(t.reset) ? c && !t.default : !a.is.und(b) && O(t.reset, n),
                    I = j ? b : this.get(),
                    Y = N(g),
                    F = a.is.num(Y) || a.is.arr(Y) || a.isAnimatedString(Y),
                    U = !L && (!F || O(i.immediate || t.immediate, n));
                if (k)
                    if (U) R = this._updateNode(Y);
                    else {
                        var $ = this._getNodeType(g);
                        if ($ !== R.constructor)
                            throw Error(
                                "Cannot animate between " +
                                    R.constructor.name +
                                    " and " +
                                    $.name +
                                    ', as the "to" prop suggests',
                            );
                    }
                var V = R.constructor,
                    K = !!S,
                    q = !1;
                if (!K) {
                    var G = j || (this.is(X) && x);
                    (k || G) && (K = !(q = a.isEqual(N(I), Y))),
                        (a.isEqual(T.decay, C) && a.isEqual(T.velocity, A)) || (K = !0);
                }
                if ((q && this.is(Q) && (s.changed && !j ? (K = !0) : K || this._stop()), !L)) {
                    (K || a.getFluidConfig(h)) &&
                        ((s.values = R.getPayload()),
                        (s.toValues = S ? null : V == f.AnimatedString ? [1] : a.toArray(Y))),
                        (s.immediate = U),
                        (s.onStart = es(l("onStart"), n)),
                        (s.onChange = es(l("onChange"), n));
                    var J = s.onRest,
                        ee = j && !t.onRest ? J[0] || a.noop : ea(es(l("onRest"), n), this);
                    if (K) {
                        s.onRest = [ee, ea(r, this)];
                        var et = +!j;
                        et < J.length &&
                            p.batchedUpdates(function () {
                                for (; et < J.length; et++) J[et]();
                            });
                    } else (j || t.onRest) && (s.onRest[0] = ee);
                }
                var er = es(l("onProps"), n);
                if ((er && er(t, this), j && R.setValue(I), L)) r(W(t.to, t, this._state, this));
                else if (K) j && (this._phase = Z), this._reset(), this._start();
                else if (this.is(Q) && !k) s.onRest.push(ea(r, this));
                else {
                    let e = H(this, I),
                        t = es(l("onNoopRest"), n);
                    null != t && t(e), r(e);
                }
            }),
            (n._focus = function (e) {
                var t = this.animation;
                if (e !== t.to) {
                    var r = a.getFluidConfig(t.to);
                    r && r.removeChild(this), (t.to = e);
                    var n = 0;
                    (r = a.getFluidConfig(e)) && (r.addChild(this), q(e) && (n = (e.priority || 0) + 1)),
                        (this.priority = n);
                }
            }),
            (n._set = function (e) {
                var t = a.getFluidConfig(e);
                t && (e = t.get());
                var r = f.getAnimated(this),
                    n = r && r.getValue();
                return r ? r.setValue(e) : this._updateNode(e), !a.isEqual(e, n);
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
                f.getAnimated(this).reset(t.to),
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
                    p.skipAnimation ? this.finish() : p.frameLoop.start(this));
            }),
            (n._stop = function (e) {
                if ((this.resume(), this.is(Q))) {
                    (this._phase = Z), this._onChange(this.get(), !0);
                    var t = this.animation;
                    a.each(t.values, function (e) {
                        e.done = !0;
                    });
                    var r = t.onRest;
                    r.length &&
                        ((t.onRest = [t.toValues ? a.noop : r[0]]),
                        t.changed || (r[0] = a.noop),
                        a.each(r, function (t) {
                            return t(e);
                        }));
                }
            }),
            l(t, [
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
    })(J);
function en(e, t) {
    if (e.is(et)) throw Error('Cannot call "' + t + '" of disposed "' + e.constructor.name + '" object');
}
function es(e, t) {
    return a.is.fun(e) ? e : t && e ? e[t] : void 0;
}
var ea = function (e, t) {
    var r = t.animation.to;
    return e
        ? function (n) {
              if (n) e(B(t));
              else {
                  var s = N(r),
                      o = N(t.get());
                  e(z(t, a.isEqual(o, s)));
              }
          }
        : a.noop;
};
function eo(e, t, r) {
    void 0 === t && (t = e.loop), void 0 === r && (r = e.to);
    var n = D(t);
    if (n) {
        var s = !0 !== n && I(n),
            i = (s || e).reverse,
            u = !s || s.reset;
        return ei(
            o(
                o({}, e),
                {},
                {
                    loop: t,
                    default: !1,
                    to: !i || a.is.arr(r) || a.is.fun(r) ? r : void 0,
                    from: u ? e.from : void 0,
                    reset: u,
                },
                s,
            ),
        );
    }
}
function ei(e) {
    var t = (e = I(e)),
        r = t.to,
        n = t.from,
        s = new Set();
    return (
        n ? eu(n, s) : delete e.from,
        a.is.obj(r) ? eu(r, s) : r || delete e.to,
        (e.keys = s.size ? Array.from(s) : null),
        e
    );
}
function eu(e, t) {
    a.each(e, function (e, r) {
        return null != e && t.add(r);
    });
}
var ec = ["onStart", "onChange", "onRest"],
    el = 1,
    ed = (function () {
        function e(e, t) {
            (this.id = el++),
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
                return e && this.queue.push(ei(e)), this;
            }),
            (t.start = function (e) {
                var t = e ? a.toArray(e).map(ei) : this.queue;
                return (e || (this.queue = []), this._flush) ? this._flush(this, t) : (eg(this, t), ef(this, t));
            }),
            (t.stop = function (e) {
                if (a.is.und(e))
                    this.each(function (e) {
                        return e.stop();
                    }),
                        V(this._state, this._lastAsyncId);
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
                    r = t.onStart,
                    n = t.onChange,
                    s = t.onRest,
                    o = this._active.size > 0;
                o &&
                    this._phase != Q &&
                    ((this._phase = Q),
                    a.flush(r, function (t) {
                        return t(e);
                    }));
                var i = (n.size || (!o && s.size)) && this.get();
                a.flush(n, function (e) {
                    return e(i);
                }),
                    o ||
                        ((this._phase = Z),
                        a.flush(s, function (e) {
                            var t = e[0],
                                r = e[1];
                            (r.value = i), t(r);
                        }));
            }),
            (t.onParentChange = function (e) {
                "change" == e.type &&
                    (this._active[e.idle ? "delete" : "add"](e.parent), p.frameLoop.onFrame(this._onFrame));
            }),
            l(e, [
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
            return (function e(t, r, n) {
                var s = r.to,
                    o = r.loop,
                    i = r.onRest;
                o && (r.loop = !1);
                var u = a.is.arr(s) || a.is.fun(s) ? s : void 0;
                u
                    ? ((r.to = void 0), (r.onRest = void 0))
                    : a.each(ec, function (e) {
                          var n = r[e];
                          if (a.is.fun(n)) {
                              var s = t._events[e];
                              s instanceof Set
                                  ? (r[e] = function () {
                                        return s.add(n);
                                    })
                                  : (r[e] = function (e) {
                                        var t = e.finished,
                                            r = e.cancelled,
                                            a = s.get(n);
                                        a
                                            ? (t || (a.finished = !1), r && (a.cancelled = !0))
                                            : s.set(n, { value: null, finished: t, cancelled: r });
                                    });
                          }
                      });
                var c = (r.keys || Object.keys(t.springs)).map(function (e) {
                        return t.springs[e].start(r);
                    }),
                    l = t._state;
                return (
                    u
                        ? c.push(
                              Y(++t._lastAsyncId, {
                                  props: r,
                                  state: l,
                                  actions: {
                                      pause: a.noop,
                                      resume: a.noop,
                                      start: function (e, r) {
                                          if (((e.onRest = i), e.cancel)) a.is.und(A(e, "cancel")) || V(l, e.callId);
                                          else r(W(u, e, l, t));
                                      },
                                  },
                              }),
                          )
                        : r.keys || !0 !== r.cancel || V(l, t._lastAsyncId),
                    Promise.all(c).then(function (a) {
                        var i = F(t, a);
                        if (o && i.finished && !(n && i.noop)) {
                            var u = eo(r, o, s);
                            if (u) return eg(t, [u]), e(t, u, !0);
                        }
                        return i;
                    })
                );
            })(e, t);
        }),
    ).then(function (t) {
        return F(e, t);
    });
}
function ep(e, t) {
    var r = o({}, e.springs);
    return (
        t &&
            a.each(a.toArray(t), function (e) {
                a.is.und(e.keys) && (e = ei(e)),
                    a.is.obj(e.to) || (e = o(o({}, e), {}, { to: void 0 })),
                    ev(r, e, function (e) {
                        return em(e);
                    });
            }),
        r
    );
}
function eh(e, t) {
    a.each(t, function (t, r) {
        e.springs[r] || ((e.springs[r] = t), t.addChild(e));
    });
}
function em(e, t) {
    var r = new er();
    return (r.key = e), t && r.addChild(t), r;
}
function ev(e, t, r) {
    t.keys &&
        a.each(t.keys, function (n) {
            (e[n] || (e[n] = r(n)))._prepareNode(t);
        });
}
function eg(e, t) {
    a.each(t, function (t) {
        ev(e.springs, t, function (t) {
            return em(t, e);
        });
    });
}
var ey = i.createContext({}),
    eb = function (e) {
        var t = e.children,
            r = g(e, ["children"]),
            n = i.useContext(ey);
        r = T(
            function () {
                return o(o({}, n), r);
            },
            [n, r.pause, r.cancel, r.immediate, r.config],
        );
        var s = ey.Provider;
        return i.createElement(s, { value: r }, t);
    };
(eb.Provider = ey.Provider), (eb.Consumer = ey.Consumer);
var e_ = function () {
        return i.useContext(ey);
    },
    ex = {
        create: function (e) {
            return {
                get controllers() {
                    return e();
                },
                update: function (t) {
                    return (
                        a.each(e(), function (e, r) {
                            e.update(C(t, r, e));
                        }),
                        this
                    );
                },
                start: function (t) {
                    return c(
                        u.mark(function r() {
                            var n;
                            return u.wrap(function (r) {
                                for (;;)
                                    switch ((r.prev = r.next)) {
                                        case 0:
                                            return (
                                                (r.next = 2),
                                                Promise.all(
                                                    e().map(function (e, r) {
                                                        var n = C(t, r, e);
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
function ew(e, t, r) {
    var n = a.is.fun(t) && t;
    n && !r && (r = []);
    var u = i.useRef(0),
        c = a.useForceUpdate(),
        l = i.useState(function () {
            return {
                ctrls: [],
                queue: [],
                flush: function (e, t) {
                    var r = ep(e, t);
                    return !(u.current > 0) ||
                        l.queue.length ||
                        Object.keys(r).some(function (t) {
                            return !e.springs[t];
                        })
                        ? new Promise(function (n) {
                              eh(e, r),
                                  l.queue.push(function () {
                                      n(ef(e, t));
                                  }),
                                  c();
                          })
                        : ef(e, t);
                },
            };
        })[0],
        d = i.useRef(),
        f = [].concat(l.ctrls),
        p = [],
        h = a.usePrev(e) || 0,
        m = f.slice(e, h);
    function v(e, r) {
        for (var s = e; s < r; s++) {
            var o = f[s] || (f[s] = new ed(null, l.flush)),
                i = n ? n(s, o) : t[s];
            i &&
                ((i = p[s] =
                    (function (e) {
                        var t = ei(e);
                        return a.is.und(t.default) && (t.default = P(t, [!0 === t.immediate && "immediate"])), t;
                    })(i)),
                0 == s && ((d.current = i.ref), (i.ref = void 0)));
        }
    }
    T(
        function () {
            (f.length = e), v(h, e);
        },
        [e],
    ),
        T(function () {
            v(0, Math.min(h, e));
        }, r);
    var g = i.useMemo(function () {
            return ex.create(function () {
                return l.ctrls;
            });
        }, []),
        y = f.map(function (e, t) {
            return ep(e, p[t]);
        }),
        b = e_();
    s.useLayoutEffect(function () {
        u.current++, (l.ctrls = f), d.current && (d.current.current = g);
        var e = l.queue;
        e.length &&
            ((l.queue = []),
            a.each(e, function (e) {
                return e();
            })),
            a.each(m, function (e) {
                return e.dispose();
            }),
            a.each(f, function (e, t) {
                eh(e, y[t]), e.start({ default: b });
                var r = p[t];
                r && (d.current ? e.queue.push(r) : e.start(r));
            });
    }),
        a.useOnce(function () {
            return function () {
                a.each(l.ctrls, function (e) {
                    return e.dispose();
                });
            };
        });
    var _ = y.map(function (e) {
        return o({}, e);
    });
    return n || 3 == arguments.length ? [_, g.start, g.stop] : _;
}
function ek(e, t) {
    var r = a.is.fun(e),
        n = ew(1, r ? e : [e], r ? t || [] : t),
        s = n[0][0],
        o = n[1],
        i = n[2];
    return r || 2 == arguments.length ? [s, o, i] : s;
}
function eM(e, t, r) {
    var n = a.is.fun(t) && t;
    n && !r && (r = []);
    var o = [],
        i = ew(
            e,
            function (e, r) {
                return (o[e] = r), C(t, e, r);
            },
            r || [{}],
        );
    if (
        (s.useLayoutEffect(function () {
            for (var e = a.is.obj(t) && t.reverse, r = 0; r < o.length; r++) {
                var n = o[r + (e ? 1 : -1)];
                n && o[r].update({ to: n.springs }).start();
            }
        }, r),
        n || 3 == arguments.length)
    ) {
        var u = i[1];
        return (
            (i[1] = h.useCallbackOne(function (e) {
                var t = a.is.obj(e) && e.reverse;
                return u(function (r, n) {
                    var s = C(e, r, n),
                        a = o[r + (t ? 1 : -1)];
                    return a && (s.to = a.springs), s;
                });
            }, r)),
            i
        );
    }
    return i[0];
}
var eS = "mount",
    eE = "enter",
    eL = "update",
    eT = "leave";
function eD(e, t, r) {
    var n,
        u,
        c,
        l,
        d,
        f = t.ref,
        p = t.reset,
        h = t.sort,
        m = t.trail,
        v = void 0 === m ? 0 : m,
        g = t.expires,
        y = void 0 === g || g,
        b = a.toArray(e),
        _ = [],
        x =
            ((n = b),
            (c = (u = t).key),
            (d = void 0 === (l = u.keys) ? c : l),
            a.is.und(d) ? n : a.is.fun(d) ? n.map(d) : a.toArray(d)),
        w = i.useRef(null),
        k = p ? null : w.current;
    s.useLayoutEffect(function () {
        w.current = _;
    }),
        a.useOnce(function () {
            return function () {
                return a.each(w.current, function (e) {
                    e.expired && clearTimeout(e.expirationId), e.ctrl.dispose();
                });
            };
        });
    var M = [];
    if (
        (k &&
            a.each(k, function (e, t) {
                e.expired ? clearTimeout(e.expirationId) : ~(t = M[t] = x.indexOf(e.key)) && (_[t] = e);
            }),
        a.each(b, function (e, t) {
            _[t] || (_[t] = { key: x[t], item: e, phase: eS, ctrl: new ed() });
        }),
        M.length)
    ) {
        var S = -1;
        a.each(M, function (e, r) {
            var n = k[r];
            ~e ? ((S = _.indexOf(n)), (_[S] = o(o({}, n), {}, { item: b[e] }))) : t.leave && _.splice(++S, 0, n);
        });
    }
    a.is.fun(h) &&
        _.sort(function (e, t) {
            return h(e.item, t.item);
        });
    var E = -v,
        L = a.useForceUpdate(),
        T = P(t),
        O = new Map();
    a.each(_, function (e, r) {
        var n,
            s,
            i = e.key,
            u = e.phase;
        if (u == eS) (n = t.enter), (s = eE);
        else {
            var c = 0 > x.indexOf(i);
            if (u != eT)
                if (c) (n = t.leave), (s = eT);
                else {
                    if (!(n = t.update)) return;
                    s = eL;
                }
            else {
                if (c) return;
                (n = t.enter), (s = eE);
            }
        }
        if (((n = D(n, e.item, r)), !(n = a.is.obj(n) ? I(n) : { to: n }).config)) {
            var l = t.config || T.config;
            n.config = D(l, e.item, r);
        }
        var d = o(o({}, T), {}, { delay: (E += v), reset: !1 }, n);
        s == eE && a.is.und(d.from) && (d.from = D(a.is.und(t.initial) || k ? t.from : t.initial, e.item, r));
        var f = d.onRest;
        d.onRest = d.onNoopRest = function (e) {
            var t = w.current,
                r = t.find(function (e) {
                    return e.key === i;
                });
            if (r) {
                if ((a.is.fun(f) && !0 !== e.noop && f(e, r), e.cancelled && r.phase != eL)) {
                    r.phase = u;
                    return;
                }
                if (r.ctrl.idle) {
                    var n = t.every(function (e) {
                        return e.ctrl.idle;
                    });
                    if (r.phase == eT) {
                        var s = D(y, r.item);
                        if (!1 !== s) {
                            var o = !0 === s ? 0 : s;
                            if (((r.expired = !0), !n && o > 0)) {
                                o <= 0x7fffffff && (r.expirationId = setTimeout(L, o));
                                return;
                            }
                        }
                    }
                    n &&
                        t.some(function (e) {
                            return e.expired;
                        }) &&
                        L();
                }
            }
        };
        var p = ep(e.ctrl, d);
        O.set(e, { phase: s, springs: p, payload: d });
    });
    var C = e_();
    s.useLayoutEffect(
        function () {
            a.each(_, function (e) {
                e.ctrl.start({ default: C });
            });
        },
        [C],
    );
    var A = i.useMemo(function () {
        return ex.create(function () {
            return w.current.map(function (e) {
                return e.ctrl;
            });
        });
    }, []);
    i.useImperativeHandle(f, function () {
        return A;
    }),
        s.useLayoutEffect(
            function () {
                a.each(O, function (e, t) {
                    var r = e.phase,
                        n = e.springs,
                        s = e.payload;
                    eh(t.ctrl, n),
                        C.cancel ||
                            ((t.phase = r), r == eE && t.ctrl.start({ default: C }), t.ctrl[f ? "update" : "start"](s));
                });
            },
            p ? void 0 : r,
        );
    var R = function (e) {
        return i.createElement(
            i.Fragment,
            null,
            _.map(function (t, r) {
                var n = e(o({}, (O.get(t) || t.ctrl).springs), t.item, t, r);
                return n && n.type
                    ? i.createElement(
                          n.type,
                          o({}, n.props, { key: a.is.str(t.key) || a.is.num(t.key) ? t.key : t.ctrl.id, ref: n.ref }),
                      )
                    : n;
            }),
        );
    };
    return 3 == arguments.length ? [R, A.start, A.stop] : R;
}
var eO = (function (e) {
    function t(t, r) {
        ((n = e.call(this) || this).source = t),
            (n.key = void 0),
            (n.idle = !0),
            (n.calc = void 0),
            (n.calc = a.createInterpolator.apply(void 0, r));
        var n,
            s = n._get(),
            o = a.is.arr(s) ? f.AnimatedArray : f.AnimatedValue;
        return f.setAnimated(y(n), o.create(s)), n;
    }
    d(t, e);
    var r = t.prototype;
    return (
        (r.advance = function (e) {
            var t = this._get(),
                r = this.get();
            a.isEqual(t, r) || (f.getAnimated(this).setValue(t), this._onChange(t, this.idle));
        }),
        (r._get = function () {
            var e = a.is.arr(this.source)
                ? this.source.map(function (e) {
                      return e.get();
                  })
                : a.toArray(this.source.get());
            return this.calc.apply(this, e);
        }),
        (r._reset = function () {
            a.each(f.getPayload(this), function (e) {
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
            a.each(a.toArray(this.source), function (n) {
                q(n) && (n.idle || (t = !1), (r = Math.max(r, n.priority + 1))), n.addChild(e);
            }),
                (this.priority = r),
                t || (this._reset(), this._start());
        }),
        (r._detach = function () {
            var e = this;
            a.each(a.toArray(this.source), function (t) {
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
})(J);
a.Globals.assign({
    createStringInterpolator: b.createStringInterpolator,
    to: function (e, t) {
        return new eO(e, t);
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
    (t.BailSignal = K),
    (t.Controller = ed),
    (t.FrameValue = J),
    (t.Interpolation = eO),
    (t.Spring = function (e) {
        return (0, e.children)(ek(g(e, ["children"])));
    }),
    (t.SpringContext = eb),
    (t.SpringHandle = ex),
    (t.SpringValue = er),
    (t.Trail = function (e) {
        var t = e.items,
            r = e.children,
            n = g(e, ["items", "children"]),
            s = eM(t.length, n);
        return t.map(function (e, t) {
            var n = r(e, t);
            return a.is.fun(n) ? n(s[t]) : n;
        });
    }),
    (t.Transition = function (e) {
        var t = e.items,
            r = e.children,
            n = g(e, ["items", "children"]);
        return i.createElement(i.Fragment, null, eD(t, n)(r));
    }),
    (t.config = x),
    (t.inferTo = I),
    (t.interpolate = function (e) {
        for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
        return v.deprecateInterpolate(), new eO(e, r);
    }),
    (t.to = function (e) {
        for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
        return new eO(e, r);
    }),
    (t.update = function () {
        return a.Globals.frameLoop.advance();
    }),
    (t.useChain = function (e, t, r) {
        void 0 === r && (r = 1e3),
            s.useLayoutEffect(function () {
                if (t) {
                    var n = 0;
                    a.each(e, function (e, s) {
                        if (e.current) {
                            var o = e.current.controllers;
                            if (o.length) {
                                var i = r * t[s];
                                isNaN(i) ? (i = n) : (n = i),
                                    a.each(o, function (e) {
                                        a.each(e.queue, function (e) {
                                            e.delay = i + (e.delay || 0);
                                        }),
                                            e.start();
                                    });
                            }
                        }
                    });
                } else {
                    var s = Promise.resolve();
                    a.each(e, function (e) {
                        var t = e.current || {},
                            r = t.controllers,
                            n = t.start;
                        if (r && r.length) {
                            var o = r.map(function (e) {
                                var t = e.queue;
                                return (e.queue = []), t;
                            });
                            s = s.then(function () {
                                return (
                                    a.each(r, function (e, t) {
                                        var r;
                                        return (r = e.queue).push.apply(r, o[t]);
                                    }),
                                    n()
                                );
                            });
                        }
                    });
                }
            });
    }),
    (t.useSpring = ek),
    (t.useSprings = ew),
    (t.useTrail = eM),
    (t.useTransition = eD);
