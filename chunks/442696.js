function r(e) {
    return e && "object" == typeof e && "default" in e ? e.default : e;
}
Object.defineProperty(t, "__esModule", {
    value: !0,
});
var i = n(131981),
    a = n(843455),
    s = r(n(42539)),
    o = n(64700),
    l = r(n(395869)),
    c = r(n(486726)),
    u = r(n(960890)),
    d = r(n(678456)),
    f = n(294814),
    p = n(476575),
    _ = n(337126),
    h = r(n(680292)),
    m = n(180224),
    g = r(n(585458)),
    E = r(n(681334)),
    b = n(111806),
    y = n(269270);

function O(e, t, n) {
    void 0 === n && (n = 1e3),
        i.useLayoutEffect(function () {
            if (t) {
                var r = 0;
                a.each(e, function (e, i) {
                    if (e.current) {
                        var s = e.current.controllers;
                        if (s.length) {
                            var o = n * t[i];
                            isNaN(o) ? (o = r) : (r = o),
                                a.each(s, function (e) {
                                    a.each(e.queue, function (e) {
                                        e.delay = o + (e.delay || 0);
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
                        var s = n.map(function (e) {
                            var t = e.queue;
                            return (e.queue = []), t;
                        });
                        i = i.then(function () {
                            return (
                                a.each(n, function (e, t) {
                                    var n;
                                    return (n = e.queue).push.apply(n, s[t]);
                                }),
                                r()
                            );
                        });
                    }
                });
            }
        });
}
var A = {
        default: {
            tension: 170,
            friction: 26,
        },
        gentle: {
            tension: 120,
            friction: 14,
        },
        wobbly: {
            tension: 180,
            friction: 12,
        },
        stiff: {
            tension: 210,
            friction: 20,
        },
        slow: {
            tension: 280,
            friction: 60,
        },
        molasses: {
            tension: 280,
            friction: 120,
        },
    },
    v = function (e) {
        return e;
    },
    S = s(
        s({}, A.default),
        {},
        {
            mass: 1,
            damping: 1,
            easing: v,
            clamp: !1,
        },
    ),
    I = function () {
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

function T(e, t, n) {
    for (var r in (n && (C((n = s({}, n)), t), (t = s(s({}, n), t))), C(e, t), Object.assign(e, t), S))
        null == e[r] && (e[r] = S[r]);
    var i = e.mass,
        o = e.frequency,
        l = e.damping;
    return (
        a.is.und(o) ||
            (o < 0.01 && (o = 0.01),
            l < 0 && (l = 0),
            (e.tension = Math.pow((2 * Math.PI) / o, 2) * i),
            (e.friction = (4 * Math.PI * l * i) / o)),
        e
    );
}

function C(e, t) {
    if (a.is.und(t.decay)) {
        var n = !a.is.und(t.tension) || !a.is.und(t.friction);
        (!n && a.is.und(t.frequency) && a.is.und(t.damping) && a.is.und(t.mass)) ||
            ((e.duration = void 0), (e.decay = void 0)),
            n && (e.frequency = void 0);
    } else e.duration = void 0;
}
var N = [],
    R = function () {
        (this.changed = !1),
            (this.values = N),
            (this.toValues = null),
            (this.fromValues = N),
            (this.to = void 0),
            (this.from = void 0),
            (this.config = new I()),
            (this.immediate = !1),
            (this.onStart = void 0),
            (this.onChange = void 0),
            (this.onRest = []);
    };

function w(e) {
    var t = 0;
    if ("u" < typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (e = P(e)))
            return function () {
                return t >= e.length
                    ? {
                          done: !0,
                      }
                    : {
                          done: !1,
                          value: e[t++],
                      };
            };
        throw TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
    }
    return (t = e[Symbol.iterator]()).next.bind(t);
}

function P(e, t) {
    if (e) {
        if ("string" == typeof e) return D(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n))
            return Array.from(e);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return D(e, t);
    }
}

function D(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
}
var x = function (e, t) {
    return _.useMemoOne(e, t || [{}]);
};

function L(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    return a.is.fun(e) ? e.apply(void 0, n) : e;
}
var j = function (e, t) {
        return !0 === e || !!(t && e && (a.is.fun(e) ? e(t) : a.toArray(e).includes(t)));
    },
    M = function (e, t, n) {
        return e && (a.is.fun(e) ? e(t, n) : a.is.arr(e) ? e[t] : s({}, e));
    },
    k = function (e, t) {
        return !a.is.und(U(e, t));
    },
    U = function (e, t) {
        return !0 === e.default ? e[t] : e.default ? e.default[t] : void 0;
    },
    G = function (e, t, n) {
        void 0 === t && (t = []), void 0 === n && (n = {});
        var r = F;
        e.default && !0 !== e.default && (r = Object.keys((e = e.default)));
        for (var i, s = w(r); !(i = s()).done; ) {
            var o = i.value,
                l = e[o];
            a.is.und(l) || t.includes(o) || (n[o] = l);
        }
        return n;
    },
    V = function (e, t, n) {
        return G(t, n, e);
    },
    F = ["pause", "cancel", "config", "immediate", "onDelayEnd", "onProps", "onStart", "onChange", "onRest"],
    B = {
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

function H(e) {
    var t = {},
        n = 0;
    if (
        (a.each(e, function (e, r) {
            !B[r] && ((t[r] = e), n++);
        }),
        n)
    )
        return t;
}

function Y(e) {
    var t = H(e);
    if (t) {
        var n = {
            to: t,
        };
        return (
            a.each(e, function (e, r) {
                return r in t || (n[r] = e);
            }),
            n
        );
    }
    return s({}, e);
}

function W(e) {
    var t = a.getFluidConfig(e);
    return t
        ? W(t.get())
        : a.is.arr(e)
          ? e.map(W)
          : a.isAnimatedString(e)
            ? p.createStringInterpolator({
                  range: [0, 1],
                  output: [e, e],
              })(1)
            : e;
}

function K(e, t) {
    var n = t.key,
        r = t.props,
        i = t.state,
        o = t.actions;
    return new Promise(function (t, l) {
        var c,
            u,
            d = !1,
            f = j(r.cancel, n);

        function p() {
            i.resumeQueue.add(_), u.cancel(), (c = u.time - a.Globals.now());
        }

        function _() {
            c > 0 ? (i.pauseQueue.add(p), (u = a.Globals.frameLoop.setTimeout(h, c))) : h();
        }

        function h() {
            i.pauseQueue.delete(p), e <= (i.cancelId || 0) && (f = !0);
            try {
                o.start(
                    s(
                        s({}, r),
                        {},
                        {
                            callId: e,
                            delay: c,
                            cancel: f,
                            pause: d,
                        },
                    ),
                    t,
                );
            } catch (e) {
                l(e);
            }
        }
        f
            ? h()
            : ((c = L(r.delay || 0, n)), (d = j(r.pause, n)) ? (i.resumeQueue.add(_), o.pause()) : (o.resume(), _()));
    });
}
var z = function (e, t) {
        return 1 == t.length
            ? t[0]
            : t.some(function (e) {
                    return e.cancelled;
                })
              ? Z(e)
              : t.every(function (e) {
                      return e.noop;
                  })
                ? q(e)
                : X(
                      e,
                      t.every(function (e) {
                          return e.finished;
                      }),
                  );
    },
    q = function (e, t) {
        return (
            void 0 === t && (t = e.get()),
            {
                value: t,
                noop: !0,
                finished: !0,
                target: e,
            }
        );
    },
    X = function (e, t, n) {
        return (
            void 0 === n && (n = e.get()),
            {
                value: n,
                finished: t,
                target: e,
            }
        );
    },
    Z = function (e, t) {
        return (
            void 0 === t && (t = e.get()),
            {
                value: t,
                cancelled: !0,
                target: e,
            }
        );
    };

function Q(e) {
    var t = 0;
    if ("u" < typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (e = $(e)))
            return function () {
                return t >= e.length
                    ? {
                          done: !0,
                      }
                    : {
                          done: !1,
                          value: e[t++],
                      };
            };
        throw TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
    }
    return (t = e[Symbol.iterator]()).next.bind(t);
}

function $(e, t) {
    if (e) {
        if ("string" == typeof e) return J(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n))
            return Array.from(e);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return J(e, t);
    }
}

function J(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
}

function ee(e, t, n, r) {
    return et.apply(this, arguments);
}

function et() {
    return (et = c(
        l.mark(function e(t, n, r, i) {
            var o, u, d, f, _;
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
                                (u = n.parentId),
                                (d = n.onRest),
                                (f = r.asyncTo),
                                (_ = r.promise),
                                !(!u && t === f && !n.reset))
                            ) {
                                e.next = 7;
                                break;
                            }
                            return e.abrupt("return", _);
                        case 7:
                            return e.abrupt(
                                "return",
                                (r.promise = c(
                                    l.mark(function e() {
                                        var h, m, g, E, b, y, O, A, v;
                                        return l.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return (
                                                                (r.asyncId = o),
                                                                (r.asyncTo = t),
                                                                (h = G(n, ["onRest"])),
                                                                (E = new Promise(function (e, t) {
                                                                    return (m = e), (g = t);
                                                                })),
                                                                (b = function (e) {
                                                                    return function () {
                                                                        var t = function (e) {
                                                                            throw (e instanceof er && g(e), e);
                                                                        };
                                                                        try {
                                                                            return e.apply(void 0, arguments).catch(t);
                                                                        } catch (e) {
                                                                            t(e);
                                                                        }
                                                                    };
                                                                }),
                                                                (y = function (e) {
                                                                    var t =
                                                                        (o <= (r.cancelId || 0) && Z(i)) ||
                                                                        (o !== r.asyncId && X(i, !1));
                                                                    if (t) throw ((e.result = t), e);
                                                                }),
                                                                (O = b(function (e, t) {
                                                                    var n = new er();
                                                                    y(n);
                                                                    var u = a.is.obj(e)
                                                                        ? s({}, e)
                                                                        : s(
                                                                              s({}, t),
                                                                              {},
                                                                              {
                                                                                  to: e,
                                                                              },
                                                                          );
                                                                    return (
                                                                        (u.parentId = o),
                                                                        a.each(h, function (e, t) {
                                                                            a.is.und(u[t]) && (u[t] = e);
                                                                        }),
                                                                        i.start(u).then(
                                                                            (function () {
                                                                                var e = c(
                                                                                    l.mark(function e(t) {
                                                                                        return l.wrap(function (e) {
                                                                                            for (;;)
                                                                                                switch (
                                                                                                    (e.prev = e.next)
                                                                                                ) {
                                                                                                    case 0:
                                                                                                        if (
                                                                                                            (y(n),
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
                                                                    ? (v = (function () {
                                                                          var e = c(
                                                                              l.mark(function e(t) {
                                                                                  var n, r, i;
                                                                                  return l.wrap(function (e) {
                                                                                      for (;;)
                                                                                          switch ((e.prev = e.next)) {
                                                                                              case 0:
                                                                                                  n = Q(t);
                                                                                              case 1:
                                                                                                  if ((r = n()).done) {
                                                                                                      e.next = 7;
                                                                                                      break;
                                                                                                  }
                                                                                                  return (
                                                                                                      (i = r.value),
                                                                                                      (e.next = 5),
                                                                                                      O(i)
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
                                                                      (v = Promise.resolve(t(O, i.stop.bind(i)))),
                                                                (e.next = 11),
                                                                Promise.all([v.then(m), E])
                                                            );
                                                        case 11:
                                                            (A = X(i, !0)), (e.next = 21);
                                                            break;
                                                        case 14:
                                                            if (
                                                                ((e.prev = 14),
                                                                (e.t0 = e.catch(7)),
                                                                !(e.t0 instanceof er))
                                                            ) {
                                                                e.next = 20;
                                                                break;
                                                            }
                                                            (A = e.t0.result), (e.next = 21);
                                                            break;
                                                        case 20:
                                                            throw e.t0;
                                                        case 21:
                                                            return (
                                                                (e.prev = 21),
                                                                o == r.asyncId &&
                                                                    ((r.asyncId = u),
                                                                    (r.asyncTo = u ? f : void 0),
                                                                    (r.promise = u ? _ : void 0)),
                                                                e.finish(21)
                                                            );
                                                        case 24:
                                                            return (
                                                                a.is.fun(d) &&
                                                                    p.batchedUpdates(function () {
                                                                        d(A);
                                                                    }),
                                                                e.abrupt("return", A)
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

function en(e, t) {
    (e.cancelId = t), (e.asyncId = e.asyncTo = e.promise = void 0);
}
var er = (function (e) {
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
    })(h(Error)),
    ei = function (e) {
        return e instanceof es;
    },
    ea = 1,
    es = (function (e) {
        function t() {
            for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
            return (
                ((t = e.call.apply(e, [this].concat(r)) || this).id = ea++),
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
                m.deprecateInterpolate();
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
                this._emit({
                    type: "reset",
                    parent: this,
                });
            }),
            (n._start = function () {
                this._emit({
                    type: "start",
                    parent: this,
                });
            }),
            (n._onChange = function (e, t) {
                void 0 === t && (t = !1),
                    this._emit({
                        type: "change",
                        parent: this,
                        value: e,
                        idle: t,
                    });
            }),
            (n._onPriorityChange = function (e) {
                this.idle || p.frameLoop.start(this),
                    this._emit({
                        type: "priority",
                        parent: this,
                        priority: e,
                    });
            }),
            (n._emit = function (e) {
                a.each(Array.from(this._children), function (t) {
                    t.onParentChange(e);
                });
            }),
            u(t, [
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
    eo = "CREATED",
    el = "IDLE",
    ec = "ACTIVE",
    eu = "PAUSED",
    ed = "DISPOSED",
    ef = (function (e) {
        function t(t, n) {
            var r;
            if (
                (((r = e.call(this) || this).key = void 0),
                (r.animation = new R()),
                (r.queue = void 0),
                (r._phase = eo),
                (r._state = {
                    pauseQueue: new Set(),
                    resumeQueue: new Set(),
                }),
                (r._defaultProps = {}),
                (r._lastCallId = 0),
                (r._lastToId = 0),
                !a.is.und(t) || !a.is.und(n))
            ) {
                var i = a.is.obj(t)
                    ? s({}, t)
                    : s(
                          s({}, n),
                          {},
                          {
                              from: t,
                          },
                      );
                (i.default = !0), r.start(i);
            }
            return r;
        }
        d(t, e);
        var n = t.prototype;
        return (
            (n.advance = function (e) {
                var t = this,
                    n = !0,
                    r = !1,
                    i = this.animation,
                    s = i.config,
                    o = i.toValues,
                    l = f.getPayload(i.to);
                if (!l) {
                    var c = a.getFluidConfig(i.to);
                    c && (o = a.toArray(c.get()));
                }
                return (
                    i.values.forEach(function (c, u) {
                        if (!c.done) {
                            var d = l ? l[u].lastPosition : o[u],
                                f = i.immediate,
                                p = d;
                            if (!f) {
                                if (((p = c.lastPosition), s.tension <= 0)) {
                                    c.done = !0;
                                    return;
                                }
                                var _ = (c.elapsedTime += e),
                                    h = i.fromValues[u],
                                    m =
                                        null != c.v0
                                            ? c.v0
                                            : (c.v0 = a.is.arr(s.velocity) ? s.velocity[u] : s.velocity);
                                if (a.is.und(s.duration))
                                    if (s.decay) {
                                        var g = !0 === s.decay ? 0.998 : s.decay,
                                            E = Math.exp(-(1 - g) * _);
                                        (p = h + (m / (1 - g)) * (1 - E)),
                                            (f = 0.1 > Math.abs(c.lastPosition - p)),
                                            (b = m * E);
                                    } else
                                        for (
                                            var b = null == c.lastVelocity ? m : c.lastVelocity,
                                                y =
                                                    s.precision ||
                                                    (h == d ? 0.005 : Math.min(1, 0.001 * Math.abs(d - h))),
                                                O = s.restVelocity || y / 10,
                                                A = s.clamp ? 0 : s.bounce,
                                                v = !a.is.und(A),
                                                S = h == d ? c.v0 > 0 : h < d,
                                                I = !1,
                                                T = 1,
                                                C = Math.ceil(e / 1),
                                                N = 0;
                                            N < C && !(!(Math.abs(b) > O) && (f = Math.abs(d - p) <= y));
                                            ++N
                                        ) {
                                            v && (I = p == d || p > d == S) && ((b = -b * A), (p = d));
                                            var R =
                                                (-(1e-6 * s.tension) * (p - d) + -(0.001 * s.friction) * b) / s.mass;
                                            (b += R * T), (p += b * T);
                                        }
                                else {
                                    var w = s.progress || 0;
                                    s.duration <= 0 ? (w = 1) : (w += (1 - w) * Math.min(1, _ / s.duration)),
                                        (b = ((p = h + s.easing(w) * (d - h)) - c.lastPosition) / e),
                                        (f = 1 == w);
                                }
                                (c.lastVelocity = b),
                                    Number.isNaN(p) && (console.warn("Got NaN while animating:", t), (f = !0));
                            }
                            l && !l[u].done && (f = !1),
                                f ? (c.done = !0) : (n = !1),
                                c.setValue(p, s.round) && (r = !0);
                        }
                    }),
                    n ? this.finish() : r && this._onChange(this.get()),
                    n
                );
            }),
            (n.is = function (e) {
                return this._phase == e;
            }),
            (n.set = function (e) {
                var t = this;
                return (
                    p.batchedUpdates(function () {
                        if ((t._focus(e), t._set(e) && !t.is(ec))) return t._onChange(t.get(), !0);
                        t._stop();
                    }),
                    this
                );
            }),
            (n.pause = function () {
                ep(this, "pause"),
                    this.is(eu) ||
                        ((this._phase = eu),
                        a.flush(this._state.pauseQueue, function (e) {
                            return e();
                        }));
            }),
            (n.resume = function () {
                ep(this, "resume"),
                    this.is(eu) &&
                        (this._start(),
                        a.flush(this._state.resumeQueue, function (e) {
                            return e();
                        }));
            }),
            (n.finish = function (e) {
                var t = this;
                if ((this.resume(), this.is(ec))) {
                    var n = this.animation;
                    !n.config.decay && a.is.und(e) && (e = n.to),
                        a.is.und(e) || this._set(e),
                        p.batchedUpdates(function () {
                            !n.changed && ((n.changed = !0), n.onStart && n.onStart(t)), t._stop();
                        });
                }
                return this;
            }),
            (n.update = function (e) {
                return ep(this, "update"), (this.queue || (this.queue = [])).push(e), this;
            }),
            (n.start = (function () {
                var e = c(
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
                                                ep(this, "start"),
                                                a.is.und(t)
                                                    ? ((r = this.queue || []), (this.queue = []))
                                                    : (r = [
                                                          a.is.obj(t)
                                                              ? t
                                                              : s(
                                                                    s({}, n),
                                                                    {},
                                                                    {
                                                                        to: t,
                                                                    },
                                                                ),
                                                      ]),
                                                (e.next = 4),
                                                Promise.all(
                                                    r.map(function (e) {
                                                        return o._update(e);
                                                    }),
                                                )
                                            );
                                        case 4:
                                            return (i = e.sent), e.abrupt("return", z(this, i));
                                        case 6:
                                        case "end":
                                            return e.stop();
                                    }
                            },
                            e,
                            this,
                        );
                    }),
                );
                return function (t, n) {
                    return e.apply(this, arguments);
                };
            })()),
            (n.stop = function (e) {
                var t = this;
                return (
                    this.is(ed) ||
                        (en(this._state, this._lastCallId),
                        this._focus(this.get()),
                        p.batchedUpdates(function () {
                            return t._stop(e);
                        })),
                    this
                );
            }),
            (n.reset = function () {
                this._update({
                    reset: !0,
                });
            }),
            (n.dispose = function () {
                this.is(ed) || (this.animation && (this.animation.onRest = []), this.stop(), (this._phase = ed));
            }),
            (n.onParentChange = function (t) {
                e.prototype.onParentChange.call(this, t),
                    "change" == t.type
                        ? !this.is(ec) && (this._reset(), this.is(eu) || this._start())
                        : "priority" == t.type && (this.priority = t.priority + 1);
            }),
            (n._prepareNode = function (e) {
                var t = e.to,
                    n = e.from,
                    r = e.reverse,
                    i = this.key || "",
                    s = {
                        to: (t = !a.is.obj(t) || a.getFluidConfig(t) ? t : t[i]),
                        from: (n = !a.is.obj(n) || a.getFluidConfig(n) ? n : n[i]),
                    };
                if (this.is(eo)) {
                    if (r) {
                        var o = [n, t];
                        (t = o[0]), (n = o[1]);
                    }
                    n = a.getFluidValue(n);
                    var l = this._updateNode(a.is.und(n) ? a.getFluidValue(t) : n);
                    l && !a.is.und(n) && l.setValue(n);
                }
                return s;
            }),
            (n._updateNode = function (e) {
                var t = f.getAnimated(this);
                if (!a.is.und(e)) {
                    var n = this._getNodeType(e);
                    (t && t.constructor === n) || f.setAnimated(this, (t = n.create(e)));
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
                var n = this,
                    r = this._defaultProps,
                    i = function (t) {
                        var n = U(e, t);
                        a.is.und(n) || (r[t] = n), r[t] && (e[t] = r[t]);
                    };
                i("cancel"), i("pause");
                var s = this._prepareNode(e);
                return K(++this._lastCallId, {
                    key: this.key,
                    props: e,
                    state: this._state,
                    actions: {
                        pause: this.pause.bind(this),
                        resume: this.resume.bind(this),
                        start: this._merge.bind(this, s),
                    },
                }).then(function (r) {
                    if (e.loop && r.finished && !(t && r.noop)) {
                        var i = em(e);
                        if (i) return n._update(i, !0);
                    }
                    return r;
                });
            }),
            (n._merge = function (e, t, n) {
                if (t.cancel) return this.stop(!0), n(Z(this));
                var r = this.key,
                    i = this.animation,
                    s = this._defaultProps,
                    o = !a.is.und(e.to),
                    l = !a.is.und(e.from);
                if (o || l)
                    if (!(t.callId > this._lastToId)) return n(Z(this));
                    else this._lastToId = t.callId;
                var c = function (e) {
                        return a.is.und(t[e]) ? s[e] : t[e];
                    },
                    u = e_(c("onDelayEnd"), r);
                u && u(t, this), t.default && V(s, t, ["pause", "cancel"]);
                var d = i.to,
                    _ = i.from,
                    h = e.to,
                    m = void 0 === h ? d : h,
                    g = e.from,
                    E = void 0 === g ? _ : g;
                if ((l && !o && (m = E), t.reverse)) {
                    var b = [E, m];
                    (m = b[0]), (E = b[1]);
                }
                var y = !a.isEqual(E, _);
                y && (i.from = E);
                var O = !a.isEqual(m, d);
                O && this._focus(m);
                var A = a.getFluidConfig(m),
                    v = a.getFluidConfig(E);
                v && (E = v.get());
                var S = a.is.arr(t.to) || a.is.fun(t.to),
                    I = i.config,
                    C = I.decay,
                    N = I.velocity;
                t.config && !S && T(I, L(t.config, r), t.config !== s.config ? L(s.config, r) : void 0);
                var R = f.getAnimated(this);
                if (!R || a.is.und(m)) return n(X(this, !0));
                var w = a.is.und(t.reset) ? l && !t.default : !a.is.und(E) && j(t.reset, r),
                    P = w ? E : this.get(),
                    D = W(m),
                    x = a.is.num(D) || a.is.arr(D) || a.isAnimatedString(D),
                    M = !S && (!x || j(s.immediate || t.immediate, r));
                if (O)
                    if (M) R = this._updateNode(D);
                    else {
                        var k = this._getNodeType(m);
                        if (k !== R.constructor)
                            throw Error(
                                "Cannot animate between " +
                                    R.constructor.name +
                                    " and " +
                                    k.name +
                                    ', as the "to" prop suggests',
                            );
                    }
                var U = R.constructor,
                    G = !!A,
                    F = !1;
                if (!G) {
                    var B = w || (this.is(eo) && y);
                    (O || B) && (G = !(F = a.isEqual(W(P), D))),
                        (a.isEqual(I.decay, C) && a.isEqual(I.velocity, N)) || (G = !0);
                }
                if ((F && this.is(ec) && (i.changed && !w ? (G = !0) : G || this._stop()), !S)) {
                    (G || a.getFluidConfig(d)) &&
                        ((i.values = R.getPayload()),
                        (i.toValues = A ? null : U == f.AnimatedString ? [1] : a.toArray(D))),
                        (i.immediate = M),
                        (i.onStart = e_(c("onStart"), r)),
                        (i.onChange = e_(c("onChange"), r));
                    var H = i.onRest,
                        Y = w && !t.onRest ? H[0] || a.noop : eh(e_(c("onRest"), r), this);
                    if (G) {
                        i.onRest = [Y, eh(n, this)];
                        var K = +!w;
                        K < H.length &&
                            p.batchedUpdates(function () {
                                for (; K < H.length; K++) H[K]();
                            });
                    } else (w || t.onRest) && (i.onRest[0] = Y);
                }
                var z = e_(c("onProps"), r);
                if ((z && z(t, this), w && R.setValue(P), S)) n(ee(t.to, t, this._state, this));
                else if (G) w && (this._phase = el), this._reset(), this._start();
                else if (this.is(ec) && !O) i.onRest.push(eh(n, this));
                else {
                    let e = q(this, P),
                        t = e_(c("onNoopRest"), r);
                    null != t && t(e), n(e);
                }
            }),
            (n._focus = function (e) {
                var t = this.animation;
                if (e !== t.to) {
                    var n = a.getFluidConfig(t.to);
                    n && n.removeChild(this), (t.to = e);
                    var r = 0;
                    (n = a.getFluidConfig(e)) && (n.addChild(this), ei(e) && (r = (e.priority || 0) + 1)),
                        (this.priority = r);
                }
            }),
            (n._set = function (e) {
                var t = a.getFluidConfig(e);
                t && (e = t.get());
                var n = f.getAnimated(this),
                    r = n && n.getValue();
                return n ? n.setValue(e) : this._updateNode(e), !a.isEqual(e, r);
            }),
            (n._onChange = function (t, n) {
                void 0 === n && (n = !1);
                var r = this.animation;
                r.changed || n || ((r.changed = !0), r.onStart && r.onStart(this)),
                    r.onChange && r.onChange(t, this),
                    e.prototype._onChange.call(this, t, n);
            }),
            (n._reset = function () {
                var t = this.animation;
                f.getAnimated(this).reset(t.to),
                    this.is(ec) || (t.changed = !1),
                    t.immediate ||
                        (t.fromValues = t.values.map(function (e) {
                            return e.lastPosition;
                        })),
                    e.prototype._reset.call(this);
            }),
            (n._start = function () {
                this.is(ec) ||
                    ((this._phase = ec),
                    e.prototype._start.call(this),
                    p.skipAnimation ? this.finish() : p.frameLoop.start(this));
            }),
            (n._stop = function (e) {
                if ((this.resume(), this.is(ec))) {
                    (this._phase = el), this._onChange(this.get(), !0);
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
            u(t, [
                {
                    key: "idle",
                    get: function () {
                        return !this.is(ec) && !this._state.asyncTo;
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
    })(es);

function ep(e, t) {
    if (e.is(ed)) throw Error('Cannot call "' + t + '" of disposed "' + e.constructor.name + '" object');
}

function e_(e, t) {
    return a.is.fun(e) ? e : t && e ? e[t] : void 0;
}
var eh = function (e, t) {
    var n = t.animation.to;
    return e
        ? function (r) {
              if (r) e(Z(t));
              else {
                  var i = W(n),
                      s = W(t.get());
                  e(X(t, a.isEqual(s, i)));
              }
          }
        : a.noop;
};

function em(e, t, n) {
    void 0 === t && (t = e.loop), void 0 === n && (n = e.to);
    var r = L(t);
    if (r) {
        var i = !0 !== r && Y(r),
            o = (i || e).reverse,
            l = !i || i.reset;
        return eg(
            s(
                s({}, e),
                {},
                {
                    loop: t,
                    default: !1,
                    to: !o || a.is.arr(n) || a.is.fun(n) ? n : void 0,
                    from: l ? e.from : void 0,
                    reset: l,
                },
                i,
            ),
        );
    }
}

function eg(e) {
    var t = (e = Y(e)),
        n = t.to,
        r = t.from,
        i = new Set();
    return (
        r ? eb(r, i) : delete e.from,
        a.is.obj(n) ? eb(n, i) : n || delete e.to,
        (e.keys = i.size ? Array.from(i) : null),
        e
    );
}

function eE(e) {
    var t = eg(e);
    return a.is.und(t.default) && (t.default = G(t, [!0 === t.immediate && "immediate"])), t;
}

function eb(e, t) {
    a.each(e, function (e, n) {
        return null != e && t.add(n);
    });
}
var ey = ["onStart", "onChange", "onRest"],
    eO = 1,
    eA = (function () {
        function e(e, t) {
            (this.id = eO++),
                (this.springs = {}),
                (this.queue = []),
                (this._flush = void 0),
                (this._initialProps = void 0),
                (this._phase = eo),
                (this._lastAsyncId = 0),
                (this._active = new Set()),
                (this._state = {
                    pauseQueue: new Set(),
                    resumeQueue: new Set(),
                }),
                (this._events = {
                    onStart: new Set(),
                    onChange: new Set(),
                    onRest: new Map(),
                }),
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
                return e && this.queue.push(eg(e)), this;
            }),
            (t.start = function (e) {
                var t = e ? a.toArray(e).map(eg) : this.queue;
                return (e || (this.queue = []), this._flush) ? this._flush(this, t) : (eR(this, t), ev(this, t));
            }),
            (t.stop = function (e) {
                if (a.is.und(e))
                    this.each(function (e) {
                        return e.stop();
                    }),
                        en(this._state, this._lastAsyncId);
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
                    s = this._active.size > 0;
                s &&
                    this._phase != ec &&
                    ((this._phase = ec),
                    a.flush(n, function (t) {
                        return t(e);
                    }));
                var o = (r.size || (!s && i.size)) && this.get();
                a.flush(r, function (e) {
                    return e(o);
                }),
                    s ||
                        ((this._phase = el),
                        a.flush(i, function (e) {
                            var t = e[0],
                                n = e[1];
                            (n.value = o), t(n);
                        }));
            }),
            (t.onParentChange = function (e) {
                "change" == e.type &&
                    (this._active[e.idle ? "delete" : "add"](e.parent), p.frameLoop.onFrame(this._onFrame));
            }),
            u(e, [
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

function ev(e, t) {
    return Promise.all(
        t.map(function (t) {
            return eS(e, t);
        }),
    ).then(function (t) {
        return z(e, t);
    });
}

function eS(e, t, n) {
    var r = t.to,
        i = t.loop,
        s = t.onRest;
    i && (t.loop = !1);
    var o = a.is.arr(r) || a.is.fun(r) ? r : void 0;
    o
        ? ((t.to = void 0), (t.onRest = void 0))
        : a.each(ey, function (n) {
              var r = t[n];
              if (a.is.fun(r)) {
                  var i = e._events[n];
                  i instanceof Set
                      ? (t[n] = function () {
                            return i.add(r);
                        })
                      : (t[n] = function (e) {
                            var t = e.finished,
                                n = e.cancelled,
                                a = i.get(r);
                            a
                                ? (t || (a.finished = !1), n && (a.cancelled = !0))
                                : i.set(r, {
                                      value: null,
                                      finished: t,
                                      cancelled: n,
                                  });
                        });
              }
          });
    var l = (t.keys || Object.keys(e.springs)).map(function (n) {
            return e.springs[n].start(t);
        }),
        c = e._state;
    return (
        o
            ? l.push(
                  K(++e._lastAsyncId, {
                      props: t,
                      state: c,
                      actions: {
                          pause: a.noop,
                          resume: a.noop,
                          start: function (t, n) {
                              (t.onRest = s), t.cancel ? k(t, "cancel") && en(c, t.callId) : n(ee(o, t, c, e));
                          },
                      },
                  }),
              )
            : t.keys || !0 !== t.cancel || en(c, e._lastAsyncId),
        Promise.all(l).then(function (a) {
            var s = z(e, a);
            if (i && s.finished && !(n && s.noop)) {
                var o = em(t, i, r);
                if (o) return eR(e, [o]), eS(e, o, !0);
            }
            return s;
        })
    );
}

function eI(e, t) {
    var n = s({}, e.springs);
    return (
        t &&
            a.each(a.toArray(t), function (e) {
                a.is.und(e.keys) && (e = eg(e)),
                    a.is.obj(e.to) ||
                        (e = s(
                            s({}, e),
                            {},
                            {
                                to: void 0,
                            },
                        )),
                    eN(n, e, function (e) {
                        return eC(e);
                    });
            }),
        n
    );
}

function eT(e, t) {
    a.each(t, function (t, n) {
        e.springs[n] || ((e.springs[n] = t), t.addChild(e));
    });
}

function eC(e, t) {
    var n = new ef();
    return (n.key = e), t && n.addChild(t), n;
}

function eN(e, t, n) {
    t.keys &&
        a.each(t.keys, function (r) {
            (e[r] || (e[r] = n(r)))._prepareNode(t);
        });
}

function eR(e, t) {
    a.each(t, function (t) {
        eN(e.springs, t, function (t) {
            return eC(t, e);
        });
    });
}
var ew = o.createContext({}),
    eP = function (e) {
        var t = e.children,
            n = g(e, ["children"]),
            r = o.useContext(ew);
        n = x(
            function () {
                return s(s({}, r), n);
            },
            [r, n.pause, n.cancel, n.immediate, n.config],
        );
        var i = ew.Provider;
        return o.createElement(
            i,
            {
                value: n,
            },
            t,
        );
    };
(eP.Provider = ew.Provider), (eP.Consumer = ew.Consumer);
var eD = function () {
        return o.useContext(ew);
    },
    ex = {
        create: function (e) {
            return {
                get controllers() {
                    return e();
                },
                update: function (t) {
                    return (
                        a.each(e(), function (e, n) {
                            e.update(M(t, n, e));
                        }),
                        this
                    );
                },
                start: function (t) {
                    return c(
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
                                                        var r = M(t, n, e);
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

function eL(e, t, n) {
    var r = a.is.fun(t) && t;
    r && !n && (n = []);
    var l = o.useRef(0),
        c = a.useForceUpdate(),
        u = o.useState(function () {
            return {
                ctrls: [],
                queue: [],
                flush: function (e, t) {
                    var n = eI(e, t);
                    return !(l.current > 0) ||
                        u.queue.length ||
                        Object.keys(n).some(function (t) {
                            return !e.springs[t];
                        })
                        ? new Promise(function (r) {
                              eT(e, n),
                                  u.queue.push(function () {
                                      r(ev(e, t));
                                  }),
                                  c();
                          })
                        : ev(e, t);
                },
            };
        })[0],
        d = o.useRef(),
        f = [].concat(u.ctrls),
        p = [],
        _ = a.usePrev(e) || 0,
        h = f.slice(e, _);

    function m(e, n) {
        for (var i = e; i < n; i++) {
            var a = f[i] || (f[i] = new eA(null, u.flush)),
                s = r ? r(i, a) : t[i];
            s && ((s = p[i] = eE(s)), 0 == i && ((d.current = s.ref), (s.ref = void 0)));
        }
    }
    x(
        function () {
            (f.length = e), m(_, e);
        },
        [e],
    ),
        x(function () {
            m(0, Math.min(_, e));
        }, n);
    var g = o.useMemo(function () {
            return ex.create(function () {
                return u.ctrls;
            });
        }, []),
        E = f.map(function (e, t) {
            return eI(e, p[t]);
        }),
        b = eD();
    i.useLayoutEffect(function () {
        l.current++, (u.ctrls = f), d.current && (d.current.current = g);
        var e = u.queue;
        e.length &&
            ((u.queue = []),
            a.each(e, function (e) {
                return e();
            })),
            a.each(h, function (e) {
                return e.dispose();
            }),
            a.each(f, function (e, t) {
                eT(e, E[t]),
                    e.start({
                        default: b,
                    });
                var n = p[t];
                n && (d.current ? e.queue.push(n) : e.start(n));
            });
    }),
        a.useOnce(function () {
            return function () {
                a.each(u.ctrls, function (e) {
                    return e.dispose();
                });
            };
        });
    var y = E.map(function (e) {
        return s({}, e);
    });
    return r || 3 == arguments.length ? [y, g.start, g.stop] : y;
}

function ej(e, t) {
    var n = a.is.fun(e),
        r = eL(1, n ? e : [e], n ? t || [] : t),
        i = r[0][0],
        s = r[1],
        o = r[2];
    return n || 2 == arguments.length ? [i, s, o] : i;
}

function eM(e, t, n) {
    var r = a.is.fun(t) && t;
    r && !n && (n = []);
    var s = [],
        o = eL(
            e,
            function (e, n) {
                return (s[e] = n), M(t, e, n);
            },
            n || [{}],
        );
    if (
        (i.useLayoutEffect(function () {
            for (var e = a.is.obj(t) && t.reverse, n = 0; n < s.length; n++) {
                var r = s[n + (e ? 1 : -1)];
                r &&
                    s[n]
                        .update({
                            to: r.springs,
                        })
                        .start();
            }
        }, n),
        r || 3 == arguments.length)
    ) {
        var l = o[1];
        return (
            (o[1] = _.useCallbackOne(function (e) {
                var t = a.is.obj(e) && e.reverse;
                return l(function (n, r) {
                    var i = M(e, n, r),
                        a = s[n + (t ? 1 : -1)];
                    return a && (i.to = a.springs), i;
                });
            }, n)),
            o
        );
    }
    return o[0];
}
var ek = "mount",
    eU = "enter",
    eG = "update",
    eV = "leave";

function eF(e, t, n) {
    var r = t.ref,
        l = t.reset,
        c = t.sort,
        u = t.trail,
        d = void 0 === u ? 0 : u,
        f = t.expires,
        p = void 0 === f || f,
        _ = a.toArray(e),
        h = [],
        m = eB(_, t),
        g = o.useRef(null),
        E = l ? null : g.current;
    i.useLayoutEffect(function () {
        g.current = h;
    }),
        a.useOnce(function () {
            return function () {
                return a.each(g.current, function (e) {
                    e.expired && clearTimeout(e.expirationId), e.ctrl.dispose();
                });
            };
        });
    var b = [];
    if (
        (E &&
            a.each(E, function (e, t) {
                e.expired ? clearTimeout(e.expirationId) : ~(t = b[t] = m.indexOf(e.key)) && (h[t] = e);
            }),
        a.each(_, function (e, t) {
            h[t] ||
                (h[t] = {
                    key: m[t],
                    item: e,
                    phase: ek,
                    ctrl: new eA(),
                });
        }),
        b.length)
    ) {
        var y = -1;
        a.each(b, function (e, n) {
            var r = E[n];
            ~e
                ? ((y = h.indexOf(r)),
                  (h[y] = s(
                      s({}, r),
                      {},
                      {
                          item: _[e],
                      },
                  )))
                : t.leave && h.splice(++y, 0, r);
        });
    }
    a.is.fun(c) &&
        h.sort(function (e, t) {
            return c(e.item, t.item);
        });
    var O = -d,
        A = a.useForceUpdate(),
        v = G(t),
        S = new Map();
    a.each(h, function (e, n) {
        var r,
            i,
            o = e.key,
            l = e.phase;
        if (l == ek) (r = t.enter), (i = eU);
        else {
            var c = 0 > m.indexOf(o);
            if (l != eV)
                if (c) (r = t.leave), (i = eV);
                else {
                    if (!(r = t.update)) return;
                    i = eG;
                }
            else {
                if (c) return;
                (r = t.enter), (i = eU);
            }
        }
        if (
            ((r = L(r, e.item, n)),
            !(r = a.is.obj(r)
                ? Y(r)
                : {
                      to: r,
                  }).config)
        ) {
            var u = t.config || v.config;
            r.config = L(u, e.item, n);
        }
        var f = s(
            s({}, v),
            {},
            {
                delay: (O += d),
                reset: !1,
            },
            r,
        );
        i == eU && a.is.und(f.from) && (f.from = L(a.is.und(t.initial) || E ? t.from : t.initial, e.item, n));
        var _ = f.onRest;
        f.onRest = f.onNoopRest = function (e) {
            var t = g.current,
                n = t.find(function (e) {
                    return e.key === o;
                });
            if (n) {
                if ((a.is.fun(_) && !0 !== e.noop && _(e, n), e.cancelled && n.phase != eG)) {
                    n.phase = l;
                    return;
                }
                if (n.ctrl.idle) {
                    var r = t.every(function (e) {
                        return e.ctrl.idle;
                    });
                    if (n.phase == eV) {
                        var i = L(p, n.item);
                        if (!1 !== i) {
                            var s = !0 === i ? 0 : i;
                            if (((n.expired = !0), !r && s > 0)) {
                                s <= 0x7fffffff && (n.expirationId = setTimeout(A, s));
                                return;
                            }
                        }
                    }
                    r &&
                        t.some(function (e) {
                            return e.expired;
                        }) &&
                        A();
                }
            }
        };
        var h = eI(e.ctrl, f);
        S.set(e, {
            phase: i,
            springs: h,
            payload: f,
        });
    });
    var I = eD();
    i.useLayoutEffect(
        function () {
            a.each(h, function (e) {
                e.ctrl.start({
                    default: I,
                });
            });
        },
        [I],
    );
    var T = o.useMemo(function () {
        return ex.create(function () {
            return g.current.map(function (e) {
                return e.ctrl;
            });
        });
    }, []);
    o.useImperativeHandle(r, function () {
        return T;
    }),
        i.useLayoutEffect(
            function () {
                a.each(S, function (e, t) {
                    var n = e.phase,
                        i = e.springs,
                        a = e.payload;
                    eT(t.ctrl, i),
                        I.cancel ||
                            ((t.phase = n),
                            n == eU &&
                                t.ctrl.start({
                                    default: I,
                                }),
                            t.ctrl[r ? "update" : "start"](a));
                });
            },
            l ? void 0 : n,
        );
    var C = function (e) {
        return o.createElement(
            o.Fragment,
            null,
            h.map(function (t, n) {
                var r = e(s({}, (S.get(t) || t.ctrl).springs), t.item, t, n);
                return r && r.type
                    ? o.createElement(
                          r.type,
                          s({}, r.props, {
                              key: a.is.str(t.key) || a.is.num(t.key) ? t.key : t.ctrl.id,
                              ref: r.ref,
                          }),
                      )
                    : r;
            }),
        );
    };
    return 3 == arguments.length ? [C, T.start, T.stop] : C;
}

function eB(e, t) {
    var n = t.key,
        r = t.keys,
        i = void 0 === r ? n : r;
    return a.is.und(i) ? e : a.is.fun(i) ? e.map(i) : a.toArray(i);
}

function eH(e) {
    return (0, e.children)(ej(g(e, ["children"])));
}

function eY(e) {
    var t = e.items,
        n = e.children,
        r = g(e, ["items", "children"]),
        i = eM(t.length, r);
    return t.map(function (e, t) {
        var r = n(e, t);
        return a.is.fun(r) ? r(i[t]) : r;
    });
}

function eW(e) {
    var t = e.items,
        n = e.children,
        r = g(e, ["items", "children"]);
    return o.createElement(o.Fragment, null, eF(t, r)(n));
}
var eK = (function (e) {
        function t(t, n) {
            ((r = e.call(this) || this).source = t),
                (r.key = void 0),
                (r.idle = !0),
                (r.calc = void 0),
                (r.calc = a.createInterpolator.apply(void 0, n));
            var r,
                i = r._get(),
                s = a.is.arr(i) ? f.AnimatedArray : f.AnimatedValue;
            return f.setAnimated(E(r), s.create(i)), r;
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
                    ei(r) && (r.idle || (t = !1), (n = Math.max(n, r.priority + 1))), r.addChild(e);
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
    })(es),
    ez = function (e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return new eK(e, n);
    },
    eq = function (e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return m.deprecateInterpolate(), new eK(e, n);
    };
a.Globals.assign({
    createStringInterpolator: b.createStringInterpolator,
    to: function (e, t) {
        return new eK(e, t);
    },
});
var eX = function () {
    return a.Globals.frameLoop.advance();
};
Object.keys(y).forEach(function (e) {
    "default" !== e &&
        Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
                return y[e];
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
    (t.BailSignal = er),
    (t.Controller = eA),
    (t.FrameValue = es),
    (t.Interpolation = eK),
    (t.Spring = eH),
    (t.SpringContext = eP),
    (t.SpringHandle = ex),
    (t.SpringValue = ef),
    (t.Trail = eY),
    (t.Transition = eW),
    (t.config = A),
    (t.inferTo = Y),
    (t.interpolate = eq),
    (t.to = ez),
    (t.update = eX),
    (t.useChain = O),
    (t.useSpring = ej),
    (t.useSprings = eL),
    (t.useTrail = eM),
    (t.useTransition = eF);
