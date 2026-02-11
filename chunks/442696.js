"use strict";
function r(e) {
    return e && "object" == typeof e && "default" in e ? e.default : e;
}
Object.defineProperty(t, "__esModule", { value: !0 });
var i = n(131981),
    a = n(843455),
    s = r(n(42539)),
    o = n(64700),
    l = r(n(395869)),
    u = r(n(486726)),
    c = r(n(960890)),
    d = r(n(678456)),
    _ = n(294814),
    f = n(476575),
    h = n(337126),
    p = r(n(680292)),
    g = n(180224),
    E = r(n(585458)),
    A = r(n(681334)),
    I = n(111806),
    T = n(269270);
function y(e, t, n) {
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
var S = {
        default: { tension: 170, friction: 26 },
        gentle: { tension: 120, friction: 14 },
        wobbly: { tension: 180, friction: 12 },
        stiff: { tension: 210, friction: 20 },
        slow: { tension: 280, friction: 60 },
        molasses: { tension: 280, friction: 120 },
    },
    v = function (e) {
        return e;
    },
    C = s(s({}, S.default), {}, { mass: 1, damping: 1, easing: v, clamp: !1 }),
    b = function () {
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
            Object.assign(this, C);
    };
function N(e, t, n) {
    for (var r in (n && (R((n = s({}, n)), t), (t = s(s({}, n), t))), R(e, t), Object.assign(e, t), C))
        null == e[r] && (e[r] = C[r]);
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
function R(e, t) {
    if (a.is.und(t.decay)) {
        var n = !a.is.und(t.tension) || !a.is.und(t.friction);
        (!n && a.is.und(t.frequency) && a.is.und(t.damping) && a.is.und(t.mass)) ||
            ((e.duration = void 0), (e.decay = void 0)),
            n && (e.frequency = void 0);
    } else e.duration = void 0;
}
var O = [],
    D = function () {
        (this.changed = !1),
            (this.values = O),
            (this.toValues = null),
            (this.fromValues = O),
            (this.to = void 0),
            (this.from = void 0),
            (this.config = new b()),
            (this.immediate = !1),
            (this.onStart = void 0),
            (this.onChange = void 0),
            (this.onRest = []);
    };
function L(e) {
    var t = 0;
    if ("u" < typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (e = w(e)))
            return function () {
                return t >= e.length ? { done: !0 } : { done: !1, value: e[t++] };
            };
        throw TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
    }
    return (t = e[Symbol.iterator]()).next.bind(t);
}
function w(e, t) {
    if (e) {
        if ("string" == typeof e) return x(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n))
            return Array.from(e);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return x(e, t);
    }
}
function x(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
}
var P = function (e, t) {
    return h.useMemoOne(e, t || [{}]);
};
function M(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    return a.is.fun(e) ? e.apply(void 0, n) : e;
}
var k = function (e, t) {
        return !0 === e || !!(t && e && (a.is.fun(e) ? e(t) : a.toArray(e).includes(t)));
    },
    U = function (e, t, n) {
        return e && (a.is.fun(e) ? e(t, n) : a.is.arr(e) ? e[t] : s({}, e));
    },
    G = function (e, t) {
        return !a.is.und(F(e, t));
    },
    F = function (e, t) {
        return !0 === e.default ? e[t] : e.default ? e.default[t] : void 0;
    },
    V = function (e, t, n) {
        void 0 === t && (t = []), void 0 === n && (n = {});
        var r = j;
        e.default && !0 !== e.default && (r = Object.keys((e = e.default)));
        for (var i, s = L(r); !(i = s()).done; ) {
            var o = i.value,
                l = e[o];
            a.is.und(l) || t.includes(o) || (n[o] = l);
        }
        return n;
    },
    B = function (e, t, n) {
        return V(t, n, e);
    },
    j = ["pause", "cancel", "config", "immediate", "onDelayEnd", "onProps", "onStart", "onChange", "onRest"],
    H = {
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
function Y(e) {
    var t = {},
        n = 0;
    if (
        (a.each(e, function (e, r) {
            !H[r] && ((t[r] = e), n++);
        }),
        n)
    )
        return t;
}
function W(e) {
    var t = Y(e);
    if (t) {
        var n = { to: t };
        return (
            a.each(e, function (e, r) {
                return r in t || (n[r] = e);
            }),
            n
        );
    }
    return s({}, e);
}
function K(e) {
    var t = a.getFluidConfig(e);
    return t
        ? K(t.get())
        : a.is.arr(e)
          ? e.map(K)
          : a.isAnimatedString(e)
            ? f.createStringInterpolator({ range: [0, 1], output: [e, e] })(1)
            : e;
}
function $(e, t) {
    var n = t.key,
        r = t.props,
        i = t.state,
        o = t.actions;
    return new Promise(function (t, l) {
        var u,
            c,
            d = !1,
            _ = k(r.cancel, n);
        function f() {
            i.resumeQueue.add(h), c.cancel(), (u = c.time - a.Globals.now());
        }
        function h() {
            u > 0 ? (i.pauseQueue.add(f), (c = a.Globals.frameLoop.setTimeout(p, u))) : p();
        }
        function p() {
            i.pauseQueue.delete(f), e <= (i.cancelId || 0) && (_ = !0);
            try {
                o.start(s(s({}, r), {}, { callId: e, delay: u, cancel: _, pause: d }), t);
            } catch (e) {
                l(e);
            }
        }
        _
            ? p()
            : ((u = M(r.delay || 0, n)), (d = k(r.pause, n)) ? (i.resumeQueue.add(h), o.pause()) : (o.resume(), h()));
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
        return void 0 === t && (t = e.get()), { value: t, noop: !0, finished: !0, target: e };
    },
    X = function (e, t, n) {
        return void 0 === n && (n = e.get()), { value: n, finished: t, target: e };
    },
    Z = function (e, t) {
        return void 0 === t && (t = e.get()), { value: t, cancelled: !0, target: e };
    };
function Q(e) {
    var t = 0;
    if ("u" < typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (e = J(e)))
            return function () {
                return t >= e.length ? { done: !0 } : { done: !1, value: e[t++] };
            };
        throw TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
    }
    return (t = e[Symbol.iterator]()).next.bind(t);
}
function J(e, t) {
    if (e) {
        if ("string" == typeof e) return ee(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n))
            return Array.from(e);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ee(e, t);
    }
}
function ee(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
}
function et(e, t, n, r) {
    return en.apply(this, arguments);
}
function en() {
    return (en = u(
        l.mark(function e(t, n, r, i) {
            var o, c, d, _, h;
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
                                (c = n.parentId),
                                (d = n.onRest),
                                (_ = r.asyncTo),
                                (h = r.promise),
                                !(!c && t === _ && !n.reset))
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
                                        var p, g, E, A, I, T, y, S, v;
                                        return l.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return (
                                                                (r.asyncId = o),
                                                                (r.asyncTo = t),
                                                                (p = V(n, ["onRest"])),
                                                                (A = new Promise(function (e, t) {
                                                                    return (g = e), (E = t);
                                                                })),
                                                                (I = function (e) {
                                                                    return function () {
                                                                        var t = function (e) {
                                                                            throw (e instanceof ei && E(e), e);
                                                                        };
                                                                        try {
                                                                            return e.apply(void 0, arguments).catch(t);
                                                                        } catch (e) {
                                                                            t(e);
                                                                        }
                                                                    };
                                                                }),
                                                                (T = function (e) {
                                                                    var t =
                                                                        (o <= (r.cancelId || 0) && Z(i)) ||
                                                                        (o !== r.asyncId && X(i, !1));
                                                                    if (t) throw ((e.result = t), e);
                                                                }),
                                                                (y = I(function (e, t) {
                                                                    var n = new ei();
                                                                    T(n);
                                                                    var c = a.is.obj(e)
                                                                        ? s({}, e)
                                                                        : s(s({}, t), {}, { to: e });
                                                                    return (
                                                                        (c.parentId = o),
                                                                        a.each(p, function (e, t) {
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
                                                                                                            (T(n),
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
                                                                          var e = u(
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
                                                                                                      y(i)
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
                                                                      (v = Promise.resolve(t(y, i.stop.bind(i)))),
                                                                (e.next = 11),
                                                                Promise.all([v.then(g), A])
                                                            );
                                                        case 11:
                                                            (S = X(i, !0)), (e.next = 21);
                                                            break;
                                                        case 14:
                                                            if (
                                                                ((e.prev = 14),
                                                                (e.t0 = e.catch(7)),
                                                                !(e.t0 instanceof ei))
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
                                                                    ((r.asyncId = c),
                                                                    (r.asyncTo = c ? _ : void 0),
                                                                    (r.promise = c ? h : void 0)),
                                                                e.finish(21)
                                                            );
                                                        case 24:
                                                            return (
                                                                a.is.fun(d) &&
                                                                    f.batchedUpdates(function () {
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
function er(e, t) {
    (e.cancelId = t), (e.asyncId = e.asyncTo = e.promise = void 0);
}
var ei = (function (e) {
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
    ea = function (e) {
        return e instanceof eo;
    },
    es = 1,
    eo = (function (e) {
        function t() {
            for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
            return (
                ((t = e.call.apply(e, [this].concat(r)) || this).id = es++),
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
                return f.to(this, t);
            }),
            (n.interpolate = function () {
                g.deprecateInterpolate();
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
    el = "CREATED",
    eu = "IDLE",
    ec = "ACTIVE",
    ed = "PAUSED",
    e_ = "DISPOSED",
    ef = (function (e) {
        function t(t, n) {
            var r;
            if (
                (((r = e.call(this) || this).key = void 0),
                (r.animation = new D()),
                (r.queue = void 0),
                (r._phase = el),
                (r._state = { pauseQueue: new Set(), resumeQueue: new Set() }),
                (r._defaultProps = {}),
                (r._lastCallId = 0),
                (r._lastToId = 0),
                !a.is.und(t) || !a.is.und(n))
            ) {
                var i = a.is.obj(t) ? s({}, t) : s(s({}, n), {}, { from: t });
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
                    l = _.getPayload(i.to);
                if (!l) {
                    var u = a.getFluidConfig(i.to);
                    u && (o = a.toArray(u.get()));
                }
                return (
                    i.values.forEach(function (u, c) {
                        if (!u.done) {
                            var d = l ? l[c].lastPosition : o[c],
                                _ = i.immediate,
                                f = d;
                            if (!_) {
                                if (((f = u.lastPosition), s.tension <= 0)) {
                                    u.done = !0;
                                    return;
                                }
                                var h = (u.elapsedTime += e),
                                    p = i.fromValues[c],
                                    g =
                                        null != u.v0
                                            ? u.v0
                                            : (u.v0 = a.is.arr(s.velocity) ? s.velocity[c] : s.velocity);
                                if (a.is.und(s.duration))
                                    if (s.decay) {
                                        var E = !0 === s.decay ? 0.998 : s.decay,
                                            A = Math.exp(-(1 - E) * h);
                                        (f = p + (g / (1 - E)) * (1 - A)),
                                            (_ = 0.1 > Math.abs(u.lastPosition - f)),
                                            (I = g * A);
                                    } else
                                        for (
                                            var I = null == u.lastVelocity ? g : u.lastVelocity,
                                                T =
                                                    s.precision ||
                                                    (p == d ? 0.005 : Math.min(1, 0.001 * Math.abs(d - p))),
                                                y = s.restVelocity || T / 10,
                                                S = s.clamp ? 0 : s.bounce,
                                                v = !a.is.und(S),
                                                C = p == d ? u.v0 > 0 : p < d,
                                                b = !1,
                                                N = 1,
                                                R = Math.ceil(e / 1),
                                                O = 0;
                                            O < R && !(!(Math.abs(I) > y) && (_ = Math.abs(d - f) <= T));
                                            ++O
                                        ) {
                                            v && (b = f == d || f > d == C) && ((I = -I * S), (f = d));
                                            var D =
                                                (-(1e-6 * s.tension) * (f - d) + -(0.001 * s.friction) * I) / s.mass;
                                            (I += D * N), (f += I * N);
                                        }
                                else {
                                    var L = s.progress || 0;
                                    s.duration <= 0 ? (L = 1) : (L += (1 - L) * Math.min(1, h / s.duration)),
                                        (I = ((f = p + s.easing(L) * (d - p)) - u.lastPosition) / e),
                                        (_ = 1 == L);
                                }
                                (u.lastVelocity = I),
                                    Number.isNaN(f) && (console.warn("Got NaN while animating:", t), (_ = !0));
                            }
                            l && !l[c].done && (_ = !1),
                                _ ? (u.done = !0) : (n = !1),
                                u.setValue(f, s.round) && (r = !0);
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
                    f.batchedUpdates(function () {
                        if ((t._focus(e), t._set(e) && !t.is(ec))) return t._onChange(t.get(), !0);
                        t._stop();
                    }),
                    this
                );
            }),
            (n.pause = function () {
                eh(this, "pause"),
                    this.is(ed) ||
                        ((this._phase = ed),
                        a.flush(this._state.pauseQueue, function (e) {
                            return e();
                        }));
            }),
            (n.resume = function () {
                eh(this, "resume"),
                    this.is(ed) &&
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
                        f.batchedUpdates(function () {
                            !n.changed && ((n.changed = !0), n.onStart && n.onStart(t)), t._stop();
                        });
                }
                return this;
            }),
            (n.update = function (e) {
                return eh(this, "update"), (this.queue || (this.queue = [])).push(e), this;
            }),
            (n.start = (function () {
                var e = u(
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
                                                eh(this, "start"),
                                                a.is.und(t)
                                                    ? ((r = this.queue || []), (this.queue = []))
                                                    : (r = [a.is.obj(t) ? t : s(s({}, n), {}, { to: t })]),
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
                    this.is(e_) ||
                        (er(this._state, this._lastCallId),
                        this._focus(this.get()),
                        f.batchedUpdates(function () {
                            return t._stop(e);
                        })),
                    this
                );
            }),
            (n.reset = function () {
                this._update({ reset: !0 });
            }),
            (n.dispose = function () {
                this.is(e_) || (this.animation && (this.animation.onRest = []), this.stop(), (this._phase = e_));
            }),
            (n.onParentChange = function (t) {
                e.prototype.onParentChange.call(this, t),
                    "change" == t.type
                        ? !this.is(ec) && (this._reset(), this.is(ed) || this._start())
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
                if (this.is(el)) {
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
                var t = _.getAnimated(this);
                if (!a.is.und(e)) {
                    var n = this._getNodeType(e);
                    (t && t.constructor === n) || _.setAnimated(this, (t = n.create(e)));
                }
                return t;
            }),
            (n._getNodeType = function (e) {
                var t = _.getAnimated(e);
                return t
                    ? t.constructor
                    : a.is.arr(e)
                      ? _.AnimatedArray
                      : a.isAnimatedString(e)
                        ? _.AnimatedString
                        : _.AnimatedValue;
            }),
            (n._update = function (e, t) {
                var n = this,
                    r = this._defaultProps,
                    i = function (t) {
                        var n = F(e, t);
                        a.is.und(n) || (r[t] = n), r[t] && (e[t] = r[t]);
                    };
                i("cancel"), i("pause");
                var s = this._prepareNode(e);
                return $(++this._lastCallId, {
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
                        var i = eg(e);
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
                var u = function (e) {
                        return a.is.und(t[e]) ? s[e] : t[e];
                    },
                    c = ep(u("onDelayEnd"), r);
                c && c(t, this), t.default && B(s, t, ["pause", "cancel"]);
                var d = i.to,
                    h = i.from,
                    p = e.to,
                    g = void 0 === p ? d : p,
                    E = e.from,
                    A = void 0 === E ? h : E;
                if ((l && !o && (g = A), t.reverse)) {
                    var I = [A, g];
                    (g = I[0]), (A = I[1]);
                }
                var T = !a.isEqual(A, h);
                T && (i.from = A);
                var y = !a.isEqual(g, d);
                y && this._focus(g);
                var S = a.getFluidConfig(g),
                    v = a.getFluidConfig(A);
                v && (A = v.get());
                var C = a.is.arr(t.to) || a.is.fun(t.to),
                    b = i.config,
                    R = b.decay,
                    O = b.velocity;
                t.config && !C && N(b, M(t.config, r), t.config !== s.config ? M(s.config, r) : void 0);
                var D = _.getAnimated(this);
                if (!D || a.is.und(g)) return n(X(this, !0));
                var L = a.is.und(t.reset) ? l && !t.default : !a.is.und(A) && k(t.reset, r),
                    w = L ? A : this.get(),
                    x = K(g),
                    P = a.is.num(x) || a.is.arr(x) || a.isAnimatedString(x),
                    U = !C && (!P || k(s.immediate || t.immediate, r));
                if (y)
                    if (U) D = this._updateNode(x);
                    else {
                        var G = this._getNodeType(g);
                        if (G !== D.constructor)
                            throw Error(
                                "Cannot animate between " +
                                    D.constructor.name +
                                    " and " +
                                    G.name +
                                    ', as the "to" prop suggests',
                            );
                    }
                var F = D.constructor,
                    V = !!S,
                    j = !1;
                if (!V) {
                    var H = L || (this.is(el) && T);
                    (y || H) && (V = !(j = a.isEqual(K(w), x))),
                        (a.isEqual(b.decay, R) && a.isEqual(b.velocity, O)) || (V = !0);
                }
                if ((j && this.is(ec) && (i.changed && !L ? (V = !0) : V || this._stop()), !C)) {
                    (V || a.getFluidConfig(d)) &&
                        ((i.values = D.getPayload()),
                        (i.toValues = S ? null : F == _.AnimatedString ? [1] : a.toArray(x))),
                        (i.immediate = U),
                        (i.onStart = ep(u("onStart"), r)),
                        (i.onChange = ep(u("onChange"), r));
                    var Y = i.onRest,
                        W = L && !t.onRest ? Y[0] || a.noop : em(ep(u("onRest"), r), this);
                    if (V) {
                        i.onRest = [W, em(n, this)];
                        var $ = +!L;
                        $ < Y.length &&
                            f.batchedUpdates(function () {
                                for (; $ < Y.length; $++) Y[$]();
                            });
                    } else (L || t.onRest) && (i.onRest[0] = W);
                }
                var z = ep(u("onProps"), r);
                if ((z && z(t, this), L && D.setValue(w), C)) n(et(t.to, t, this._state, this));
                else if (V) L && (this._phase = eu), this._reset(), this._start();
                else if (this.is(ec) && !y) i.onRest.push(em(n, this));
                else {
                    let e = q(this, w),
                        t = ep(u("onNoopRest"), r);
                    null != t && t(e), n(e);
                }
            }),
            (n._focus = function (e) {
                var t = this.animation;
                if (e !== t.to) {
                    var n = a.getFluidConfig(t.to);
                    n && n.removeChild(this), (t.to = e);
                    var r = 0;
                    (n = a.getFluidConfig(e)) && (n.addChild(this), ea(e) && (r = (e.priority || 0) + 1)),
                        (this.priority = r);
                }
            }),
            (n._set = function (e) {
                var t = a.getFluidConfig(e);
                t && (e = t.get());
                var n = _.getAnimated(this),
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
                _.getAnimated(this).reset(t.to),
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
                    f.skipAnimation ? this.finish() : f.frameLoop.start(this));
            }),
            (n._stop = function (e) {
                if ((this.resume(), this.is(ec))) {
                    (this._phase = eu), this._onChange(this.get(), !0);
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
    })(eo);
function eh(e, t) {
    if (e.is(e_)) throw Error('Cannot call "' + t + '" of disposed "' + e.constructor.name + '" object');
}
function ep(e, t) {
    return a.is.fun(e) ? e : t && e ? e[t] : void 0;
}
var em = function (e, t) {
    var n = t.animation.to;
    return e
        ? function (r) {
              if (r) e(Z(t));
              else {
                  var i = K(n),
                      s = K(t.get());
                  e(X(t, a.isEqual(s, i)));
              }
          }
        : a.noop;
};
function eg(e, t, n) {
    void 0 === t && (t = e.loop), void 0 === n && (n = e.to);
    var r = M(t);
    if (r) {
        var i = !0 !== r && W(r),
            o = (i || e).reverse,
            l = !i || i.reset;
        return eE(
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
function eE(e) {
    var t = (e = W(e)),
        n = t.to,
        r = t.from,
        i = new Set();
    return (
        r ? eI(r, i) : delete e.from,
        a.is.obj(n) ? eI(n, i) : n || delete e.to,
        (e.keys = i.size ? Array.from(i) : null),
        e
    );
}
function eA(e) {
    var t = eE(e);
    return a.is.und(t.default) && (t.default = V(t, [!0 === t.immediate && "immediate"])), t;
}
function eI(e, t) {
    a.each(e, function (e, n) {
        return null != e && t.add(n);
    });
}
var eT = ["onStart", "onChange", "onRest"],
    ey = 1,
    eS = (function () {
        function e(e, t) {
            (this.id = ey++),
                (this.springs = {}),
                (this.queue = []),
                (this._flush = void 0),
                (this._initialProps = void 0),
                (this._phase = el),
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
                return e && this.queue.push(eE(e)), this;
            }),
            (t.start = function (e) {
                var t = e ? a.toArray(e).map(eE) : this.queue;
                return (e || (this.queue = []), this._flush) ? this._flush(this, t) : (eD(this, t), ev(this, t));
            }),
            (t.stop = function (e) {
                if (a.is.und(e))
                    this.each(function (e) {
                        return e.stop();
                    }),
                        er(this._state, this._lastAsyncId);
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
                        ((this._phase = eu),
                        a.flush(i, function (e) {
                            var t = e[0],
                                n = e[1];
                            (n.value = o), t(n);
                        }));
            }),
            (t.onParentChange = function (e) {
                "change" == e.type &&
                    (this._active[e.idle ? "delete" : "add"](e.parent), f.frameLoop.onFrame(this._onFrame));
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
function ev(e, t) {
    return Promise.all(
        t.map(function (t) {
            return eC(e, t);
        }),
    ).then(function (t) {
        return z(e, t);
    });
}
function eC(e, t, n) {
    var r = t.to,
        i = t.loop,
        s = t.onRest;
    i && (t.loop = !1);
    var o = a.is.arr(r) || a.is.fun(r) ? r : void 0;
    o
        ? ((t.to = void 0), (t.onRest = void 0))
        : a.each(eT, function (n) {
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
                                : i.set(r, { value: null, finished: t, cancelled: n });
                        });
              }
          });
    var l = (t.keys || Object.keys(e.springs)).map(function (n) {
            return e.springs[n].start(t);
        }),
        u = e._state;
    return (
        o
            ? l.push(
                  $(++e._lastAsyncId, {
                      props: t,
                      state: u,
                      actions: {
                          pause: a.noop,
                          resume: a.noop,
                          start: function (t, n) {
                              (t.onRest = s), t.cancel ? G(t, "cancel") && er(u, t.callId) : n(et(o, t, u, e));
                          },
                      },
                  }),
              )
            : t.keys || !0 !== t.cancel || er(u, e._lastAsyncId),
        Promise.all(l).then(function (a) {
            var s = z(e, a);
            if (i && s.finished && !(n && s.noop)) {
                var o = eg(t, i, r);
                if (o) return eD(e, [o]), eC(e, o, !0);
            }
            return s;
        })
    );
}
function eb(e, t) {
    var n = s({}, e.springs);
    return (
        t &&
            a.each(a.toArray(t), function (e) {
                a.is.und(e.keys) && (e = eE(e)),
                    a.is.obj(e.to) || (e = s(s({}, e), {}, { to: void 0 })),
                    eO(n, e, function (e) {
                        return eR(e);
                    });
            }),
        n
    );
}
function eN(e, t) {
    a.each(t, function (t, n) {
        e.springs[n] || ((e.springs[n] = t), t.addChild(e));
    });
}
function eR(e, t) {
    var n = new ef();
    return (n.key = e), t && n.addChild(t), n;
}
function eO(e, t, n) {
    t.keys &&
        a.each(t.keys, function (r) {
            (e[r] || (e[r] = n(r)))._prepareNode(t);
        });
}
function eD(e, t) {
    a.each(t, function (t) {
        eO(e.springs, t, function (t) {
            return eR(t, e);
        });
    });
}
var eL = o.createContext({}),
    ew = function (e) {
        var t = e.children,
            n = E(e, ["children"]),
            r = o.useContext(eL);
        n = P(
            function () {
                return s(s({}, r), n);
            },
            [r, n.pause, n.cancel, n.immediate, n.config],
        );
        var i = eL.Provider;
        return o.createElement(i, { value: n }, t);
    };
(ew.Provider = eL.Provider), (ew.Consumer = eL.Consumer);
var ex = function () {
        return o.useContext(eL);
    },
    eP = {
        create: function (e) {
            return {
                get controllers() {
                    return e();
                },
                update: function (t) {
                    return (
                        a.each(e(), function (e, n) {
                            e.update(U(t, n, e));
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
                                                        var r = U(t, n, e);
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
function eM(e, t, n) {
    var r = a.is.fun(t) && t;
    r && !n && (n = []);
    var l = o.useRef(0),
        u = a.useForceUpdate(),
        c = o.useState(function () {
            return {
                ctrls: [],
                queue: [],
                flush: function (e, t) {
                    var n = eb(e, t);
                    return !(l.current > 0) ||
                        c.queue.length ||
                        Object.keys(n).some(function (t) {
                            return !e.springs[t];
                        })
                        ? new Promise(function (r) {
                              eN(e, n),
                                  c.queue.push(function () {
                                      r(ev(e, t));
                                  }),
                                  u();
                          })
                        : ev(e, t);
                },
            };
        })[0],
        d = o.useRef(),
        _ = [].concat(c.ctrls),
        f = [],
        h = a.usePrev(e) || 0,
        p = _.slice(e, h);
    function g(e, n) {
        for (var i = e; i < n; i++) {
            var a = _[i] || (_[i] = new eS(null, c.flush)),
                s = r ? r(i, a) : t[i];
            s && ((s = f[i] = eA(s)), 0 == i && ((d.current = s.ref), (s.ref = void 0)));
        }
    }
    P(
        function () {
            (_.length = e), g(h, e);
        },
        [e],
    ),
        P(function () {
            g(0, Math.min(h, e));
        }, n);
    var E = o.useMemo(function () {
            return eP.create(function () {
                return c.ctrls;
            });
        }, []),
        A = _.map(function (e, t) {
            return eb(e, f[t]);
        }),
        I = ex();
    i.useLayoutEffect(function () {
        l.current++, (c.ctrls = _), d.current && (d.current.current = E);
        var e = c.queue;
        e.length &&
            ((c.queue = []),
            a.each(e, function (e) {
                return e();
            })),
            a.each(p, function (e) {
                return e.dispose();
            }),
            a.each(_, function (e, t) {
                eN(e, A[t]), e.start({ default: I });
                var n = f[t];
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
    var T = A.map(function (e) {
        return s({}, e);
    });
    return r || 3 == arguments.length ? [T, E.start, E.stop] : T;
}
function ek(e, t) {
    var n = a.is.fun(e),
        r = eM(1, n ? e : [e], n ? t || [] : t),
        i = r[0][0],
        s = r[1],
        o = r[2];
    return n || 2 == arguments.length ? [i, s, o] : i;
}
function eU(e, t, n) {
    var r = a.is.fun(t) && t;
    r && !n && (n = []);
    var s = [],
        o = eM(
            e,
            function (e, n) {
                return (s[e] = n), U(t, e, n);
            },
            n || [{}],
        );
    if (
        (i.useLayoutEffect(function () {
            for (var e = a.is.obj(t) && t.reverse, n = 0; n < s.length; n++) {
                var r = s[n + (e ? 1 : -1)];
                r && s[n].update({ to: r.springs }).start();
            }
        }, n),
        r || 3 == arguments.length)
    ) {
        var l = o[1];
        return (
            (o[1] = h.useCallbackOne(function (e) {
                var t = a.is.obj(e) && e.reverse;
                return l(function (n, r) {
                    var i = U(e, n, r),
                        a = s[n + (t ? 1 : -1)];
                    return a && (i.to = a.springs), i;
                });
            }, n)),
            o
        );
    }
    return o[0];
}
var eG = "mount",
    eF = "enter",
    eV = "update",
    eB = "leave";
function ej(e, t, n) {
    var r = t.ref,
        l = t.reset,
        u = t.sort,
        c = t.trail,
        d = void 0 === c ? 0 : c,
        _ = t.expires,
        f = void 0 === _ || _,
        h = a.toArray(e),
        p = [],
        g = eH(h, t),
        E = o.useRef(null),
        A = l ? null : E.current;
    i.useLayoutEffect(function () {
        E.current = p;
    }),
        a.useOnce(function () {
            return function () {
                return a.each(E.current, function (e) {
                    e.expired && clearTimeout(e.expirationId), e.ctrl.dispose();
                });
            };
        });
    var I = [];
    if (
        (A &&
            a.each(A, function (e, t) {
                e.expired ? clearTimeout(e.expirationId) : ~(t = I[t] = g.indexOf(e.key)) && (p[t] = e);
            }),
        a.each(h, function (e, t) {
            p[t] || (p[t] = { key: g[t], item: e, phase: eG, ctrl: new eS() });
        }),
        I.length)
    ) {
        var T = -1;
        a.each(I, function (e, n) {
            var r = A[n];
            ~e ? ((T = p.indexOf(r)), (p[T] = s(s({}, r), {}, { item: h[e] }))) : t.leave && p.splice(++T, 0, r);
        });
    }
    a.is.fun(u) &&
        p.sort(function (e, t) {
            return u(e.item, t.item);
        });
    var y = -d,
        S = a.useForceUpdate(),
        v = V(t),
        C = new Map();
    a.each(p, function (e, n) {
        var r,
            i,
            o = e.key,
            l = e.phase;
        if (l == eG) (r = t.enter), (i = eF);
        else {
            var u = 0 > g.indexOf(o);
            if (l != eB)
                if (u) (r = t.leave), (i = eB);
                else {
                    if (!(r = t.update)) return;
                    i = eV;
                }
            else {
                if (u) return;
                (r = t.enter), (i = eF);
            }
        }
        if (((r = M(r, e.item, n)), !(r = a.is.obj(r) ? W(r) : { to: r }).config)) {
            var c = t.config || v.config;
            r.config = M(c, e.item, n);
        }
        var _ = s(s({}, v), {}, { delay: (y += d), reset: !1 }, r);
        i == eF && a.is.und(_.from) && (_.from = M(a.is.und(t.initial) || A ? t.from : t.initial, e.item, n));
        var h = _.onRest;
        _.onRest = _.onNoopRest = function (e) {
            var t = E.current,
                n = t.find(function (e) {
                    return e.key === o;
                });
            if (n) {
                if ((a.is.fun(h) && !0 !== e.noop && h(e, n), e.cancelled && n.phase != eV)) {
                    n.phase = l;
                    return;
                }
                if (n.ctrl.idle) {
                    var r = t.every(function (e) {
                        return e.ctrl.idle;
                    });
                    if (n.phase == eB) {
                        var i = M(f, n.item);
                        if (!1 !== i) {
                            var s = !0 === i ? 0 : i;
                            if (((n.expired = !0), !r && s > 0)) {
                                s <= 0x7fffffff && (n.expirationId = setTimeout(S, s));
                                return;
                            }
                        }
                    }
                    r &&
                        t.some(function (e) {
                            return e.expired;
                        }) &&
                        S();
                }
            }
        };
        var p = eb(e.ctrl, _);
        C.set(e, { phase: i, springs: p, payload: _ });
    });
    var b = ex();
    i.useLayoutEffect(
        function () {
            a.each(p, function (e) {
                e.ctrl.start({ default: b });
            });
        },
        [b],
    );
    var N = o.useMemo(function () {
        return eP.create(function () {
            return E.current.map(function (e) {
                return e.ctrl;
            });
        });
    }, []);
    o.useImperativeHandle(r, function () {
        return N;
    }),
        i.useLayoutEffect(
            function () {
                a.each(C, function (e, t) {
                    var n = e.phase,
                        i = e.springs,
                        a = e.payload;
                    eN(t.ctrl, i),
                        b.cancel ||
                            ((t.phase = n), n == eF && t.ctrl.start({ default: b }), t.ctrl[r ? "update" : "start"](a));
                });
            },
            l ? void 0 : n,
        );
    var R = function (e) {
        return o.createElement(
            o.Fragment,
            null,
            p.map(function (t, n) {
                var r = e(s({}, (C.get(t) || t.ctrl).springs), t.item, t, n);
                return r && r.type
                    ? o.createElement(
                          r.type,
                          s({}, r.props, { key: a.is.str(t.key) || a.is.num(t.key) ? t.key : t.ctrl.id, ref: r.ref }),
                      )
                    : r;
            }),
        );
    };
    return 3 == arguments.length ? [R, N.start, N.stop] : R;
}
function eH(e, t) {
    var n = t.key,
        r = t.keys,
        i = void 0 === r ? n : r;
    return a.is.und(i) ? e : a.is.fun(i) ? e.map(i) : a.toArray(i);
}
function eY(e) {
    return (0, e.children)(ek(E(e, ["children"])));
}
function eW(e) {
    var t = e.items,
        n = e.children,
        r = E(e, ["items", "children"]),
        i = eU(t.length, r);
    return t.map(function (e, t) {
        var r = n(e, t);
        return a.is.fun(r) ? r(i[t]) : r;
    });
}
function eK(e) {
    var t = e.items,
        n = e.children,
        r = E(e, ["items", "children"]);
    return o.createElement(o.Fragment, null, ej(t, r)(n));
}
var e$ = (function (e) {
        function t(t, n) {
            ((r = e.call(this) || this).source = t),
                (r.key = void 0),
                (r.idle = !0),
                (r.calc = void 0),
                (r.calc = a.createInterpolator.apply(void 0, n));
            var r,
                i = r._get(),
                s = a.is.arr(i) ? _.AnimatedArray : _.AnimatedValue;
            return _.setAnimated(A(r), s.create(i)), r;
        }
        d(t, e);
        var n = t.prototype;
        return (
            (n.advance = function (e) {
                var t = this._get(),
                    n = this.get();
                a.isEqual(t, n) || (_.getAnimated(this).setValue(t), this._onChange(t, this.idle));
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
                a.each(_.getPayload(this), function (e) {
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
                a.each(a.toArray(this.source), function (r) {
                    ea(r) && (r.idle || (t = !1), (n = Math.max(n, r.priority + 1))), r.addChild(e);
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
                                a.each(_.getPayload(this), function (e) {
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
    })(eo),
    ez = function (e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return new e$(e, n);
    },
    eq = function (e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return g.deprecateInterpolate(), new e$(e, n);
    };
a.Globals.assign({
    createStringInterpolator: I.createStringInterpolator,
    to: function (e, t) {
        return new e$(e, t);
    },
});
var eX = function () {
    return a.Globals.frameLoop.advance();
};
Object.keys(T).forEach(function (e) {
    "default" !== e &&
        Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
                return T[e];
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
    (t.BailSignal = ei),
    (t.Controller = eS),
    (t.FrameValue = eo),
    (t.Interpolation = e$),
    (t.Spring = eY),
    (t.SpringContext = ew),
    (t.SpringHandle = eP),
    (t.SpringValue = ef),
    (t.Trail = eW),
    (t.Transition = eK),
    (t.config = S),
    (t.inferTo = W),
    (t.interpolate = eq),
    (t.to = ez),
    (t.update = eX),
    (t.useChain = y),
    (t.useSpring = ek),
    (t.useSprings = eM),
    (t.useTrail = eU),
    (t.useTransition = ej);
