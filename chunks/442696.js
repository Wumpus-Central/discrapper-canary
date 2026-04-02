"use strict";
function r(e) {
    return e && "object" == typeof e && "default" in e ? e.default : e;
}
Object.defineProperty(t, "__esModule", { value: !0 });
var i = n(131981),
    s = n(843455),
    a = r(n(42539)),
    o = n(64700),
    l = r(n(395869)),
    u = r(n(486726)),
    c = r(n(960890)),
    d = r(n(678456)),
    _ = n(294814),
    f = n(476575),
    p = n(337126),
    h = r(n(680292)),
    m = n(180224),
    E = r(n(585458)),
    g = r(n(681334)),
    A = n(111806),
    I = n(269270);
function T(e, t, n) {
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
}
var S = {
        default: { tension: 170, friction: 26 },
        gentle: { tension: 120, friction: 14 },
        wobbly: { tension: 180, friction: 12 },
        stiff: { tension: 210, friction: 20 },
        slow: { tension: 280, friction: 60 },
        molasses: { tension: 280, friction: 120 },
    },
    y = function (e) {
        return e;
    },
    v = a(a({}, S.default), {}, { mass: 1, damping: 1, easing: y, clamp: !1 }),
    N = function () {
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
            Object.assign(this, v);
    };
function C(e, t, n) {
    for (var r in (n && (R((n = a({}, n)), t), (t = a(a({}, n), t))), R(e, t), Object.assign(e, t), v))
        null == e[r] && (e[r] = v[r]);
    var i = e.mass,
        o = e.frequency,
        l = e.damping;
    return (
        s.is.und(o) ||
            (o < 0.01 && (o = 0.01),
            l < 0 && (l = 0),
            (e.tension = Math.pow((2 * Math.PI) / o, 2) * i),
            (e.friction = (4 * Math.PI * l * i) / o)),
        e
    );
}
function R(e, t) {
    if (s.is.und(t.decay)) {
        var n = !s.is.und(t.tension) || !s.is.und(t.friction);
        (!n && s.is.und(t.frequency) && s.is.und(t.damping) && s.is.und(t.mass)) ||
            ((e.duration = void 0), (e.decay = void 0)),
            n && (e.frequency = void 0);
    } else e.duration = void 0;
}
var O = [],
    b = function () {
        (this.changed = !1),
            (this.values = O),
            (this.toValues = null),
            (this.fromValues = O),
            (this.to = void 0),
            (this.from = void 0),
            (this.config = new N()),
            (this.immediate = !1),
            (this.onStart = void 0),
            (this.onChange = void 0),
            (this.onRest = []);
    };
function D(e) {
    var t = 0;
    if ("u" < typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (e = L(e)))
            return function () {
                return t >= e.length ? { done: !0 } : { done: !1, value: e[t++] };
            };
        throw TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
    }
    return (t = e[Symbol.iterator]()).next.bind(t);
}
function L(e, t) {
    if (e) {
        if ("string" == typeof e) return w(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n))
            return Array.from(e);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return w(e, t);
    }
}
function w(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
}
var M = function (e, t) {
    return p.useMemoOne(e, t || [{}]);
};
function x(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    return s.is.fun(e) ? e.apply(void 0, n) : e;
}
var P = function (e, t) {
        return !0 === e || !!(t && e && (s.is.fun(e) ? e(t) : s.toArray(e).includes(t)));
    },
    k = function (e, t, n) {
        return e && (s.is.fun(e) ? e(t, n) : s.is.arr(e) ? e[t] : a({}, e));
    },
    U = function (e, t) {
        return !s.is.und(G(e, t));
    },
    G = function (e, t) {
        return !0 === e.default ? e[t] : e.default ? e.default[t] : void 0;
    },
    F = function (e, t, n) {
        void 0 === t && (t = []), void 0 === n && (n = {});
        var r = B;
        e.default && !0 !== e.default && (r = Object.keys((e = e.default)));
        for (var i, a = D(r); !(i = a()).done; ) {
            var o = i.value,
                l = e[o];
            s.is.und(l) || t.includes(o) || (n[o] = l);
        }
        return n;
    },
    V = function (e, t, n) {
        return F(t, n, e);
    },
    B = ["pause", "cancel", "config", "immediate", "onDelayEnd", "onProps", "onStart", "onChange", "onRest"],
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
function j(e) {
    var t = {},
        n = 0;
    if (
        (s.each(e, function (e, r) {
            !H[r] && ((t[r] = e), n++);
        }),
        n)
    )
        return t;
}
function Y(e) {
    var t = j(e);
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
function W(e) {
    var t = s.getFluidConfig(e);
    return t
        ? W(t.get())
        : s.is.arr(e)
          ? e.map(W)
          : s.isAnimatedString(e)
            ? f.createStringInterpolator({ range: [0, 1], output: [e, e] })(1)
            : e;
}
function K(e, t) {
    var n = t.key,
        r = t.props,
        i = t.state,
        o = t.actions;
    return new Promise(function (t, l) {
        var u,
            c,
            d = !1,
            _ = P(r.cancel, n);
        function f() {
            i.resumeQueue.add(p), c.cancel(), (u = c.time - s.Globals.now());
        }
        function p() {
            u > 0 ? (i.pauseQueue.add(f), (c = s.Globals.frameLoop.setTimeout(h, u))) : h();
        }
        function h() {
            i.pauseQueue.delete(f), e <= (i.cancelId || 0) && (_ = !0);
            try {
                o.start(a(a({}, r), {}, { callId: e, delay: u, cancel: _, pause: d }), t);
            } catch (e) {
                l(e);
            }
        }
        _
            ? h()
            : ((u = x(r.delay || 0, n)), (d = P(r.pause, n)) ? (i.resumeQueue.add(p), o.pause()) : (o.resume(), p()));
    });
}
var $ = function (e, t) {
        return 1 == t.length
            ? t[0]
            : t.some(function (e) {
                    return e.cancelled;
                })
              ? Z(e)
              : t.every(function (e) {
                      return e.noop;
                  })
                ? z(e)
                : q(
                      e,
                      t.every(function (e) {
                          return e.finished;
                      }),
                  );
    },
    z = function (e, t) {
        return void 0 === t && (t = e.get()), { value: t, noop: !0, finished: !0, target: e };
    },
    q = function (e, t, n) {
        return void 0 === n && (n = e.get()), { value: n, finished: t, target: e };
    },
    Z = function (e, t) {
        return void 0 === t && (t = e.get()), { value: t, cancelled: !0, target: e };
    };
function X(e) {
    var t = 0;
    if ("u" < typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (e = Q(e)))
            return function () {
                return t >= e.length ? { done: !0 } : { done: !1, value: e[t++] };
            };
        throw TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
    }
    return (t = e[Symbol.iterator]()).next.bind(t);
}
function Q(e, t) {
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
    return (et = u(
        l.mark(function e(t, n, r, i) {
            var o, c, d, _, p;
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
                                (p = r.promise),
                                !(!c && t === _ && !n.reset))
                            ) {
                                e.next = 7;
                                break;
                            }
                            return e.abrupt("return", p);
                        case 7:
                            return e.abrupt(
                                "return",
                                (r.promise = u(
                                    l.mark(function e() {
                                        var h, m, E, g, A, I, T, S, y;
                                        return l.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return (
                                                                (r.asyncId = o),
                                                                (r.asyncTo = t),
                                                                (h = F(n, ["onRest"])),
                                                                (g = new Promise(function (e, t) {
                                                                    return (m = e), (E = t);
                                                                })),
                                                                (A = function (e) {
                                                                    return function () {
                                                                        var t = function (e) {
                                                                            throw (e instanceof er && E(e), e);
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
                                                                        (o <= (r.cancelId || 0) && Z(i)) ||
                                                                        (o !== r.asyncId && q(i, !1));
                                                                    if (t) throw ((e.result = t), e);
                                                                }),
                                                                (T = A(function (e, t) {
                                                                    var n = new er();
                                                                    I(n);
                                                                    var c = s.is.obj(e)
                                                                        ? a({}, e)
                                                                        : a(a({}, t), {}, { to: e });
                                                                    return (
                                                                        (c.parentId = o),
                                                                        s.each(h, function (e, t) {
                                                                            s.is.und(c[t]) && (c[t] = e);
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
                                                                                                  n = X(t);
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
                                                                Promise.all([y.then(m), g])
                                                            );
                                                        case 11:
                                                            (S = q(i, !0)), (e.next = 21);
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
                                                                    (r.promise = c ? p : void 0)),
                                                                e.finish(21)
                                                            );
                                                        case 24:
                                                            return (
                                                                s.is.fun(d) &&
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
        return e instanceof ea;
    },
    es = 1,
    ea = (function (e) {
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
                m.deprecateInterpolate();
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
    eo = "CREATED",
    el = "IDLE",
    eu = "ACTIVE",
    ec = "PAUSED",
    ed = "DISPOSED",
    e_ = (function (e) {
        function t(t, n) {
            var r;
            if (
                (((r = e.call(this) || this).key = void 0),
                (r.animation = new b()),
                (r.queue = void 0),
                (r._phase = eo),
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
        d(t, e);
        var n = t.prototype;
        return (
            (n.advance = function (e) {
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
                    i.values.forEach(function (u, c) {
                        if (!u.done) {
                            var d = l ? l[c].lastPosition : o[c],
                                _ = i.immediate,
                                f = d;
                            if (!_) {
                                if (((f = u.lastPosition), a.tension <= 0)) {
                                    u.done = !0;
                                    return;
                                }
                                var p = (u.elapsedTime += e),
                                    h = i.fromValues[c],
                                    m =
                                        null != u.v0
                                            ? u.v0
                                            : (u.v0 = s.is.arr(a.velocity) ? a.velocity[c] : a.velocity);
                                if (s.is.und(a.duration))
                                    if (a.decay) {
                                        var E = !0 === a.decay ? 0.998 : a.decay,
                                            g = Math.exp(-(1 - E) * p);
                                        (f = h + (m / (1 - E)) * (1 - g)),
                                            (_ = 0.1 > Math.abs(u.lastPosition - f)),
                                            (A = m * g);
                                    } else
                                        for (
                                            var A = null == u.lastVelocity ? m : u.lastVelocity,
                                                I =
                                                    a.precision ||
                                                    (h == d ? 0.005 : Math.min(1, 0.001 * Math.abs(d - h))),
                                                T = a.restVelocity || I / 10,
                                                S = a.clamp ? 0 : a.bounce,
                                                y = !s.is.und(S),
                                                v = h == d ? u.v0 > 0 : h < d,
                                                N = !1,
                                                C = 1,
                                                R = Math.ceil(e / 1),
                                                O = 0;
                                            O < R && !(!(Math.abs(A) > T) && (_ = Math.abs(d - f) <= I));
                                            ++O
                                        ) {
                                            y && (N = f == d || f > d == v) && ((A = -A * S), (f = d));
                                            var b =
                                                (-(1e-6 * a.tension) * (f - d) + -(0.001 * a.friction) * A) / a.mass;
                                            (A += b * C), (f += A * C);
                                        }
                                else {
                                    var D = a.progress || 0;
                                    a.duration <= 0 ? (D = 1) : (D += (1 - D) * Math.min(1, p / a.duration)),
                                        (A = ((f = h + a.easing(D) * (d - h)) - u.lastPosition) / e),
                                        (_ = 1 == D);
                                }
                                (u.lastVelocity = A),
                                    Number.isNaN(f) && (console.warn("Got NaN while animating:", t), (_ = !0));
                            }
                            l && !l[c].done && (_ = !1),
                                _ ? (u.done = !0) : (n = !1),
                                u.setValue(f, a.round) && (r = !0);
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
                        if ((t._focus(e), t._set(e) && !t.is(eu))) return t._onChange(t.get(), !0);
                        t._stop();
                    }),
                    this
                );
            }),
            (n.pause = function () {
                ef(this, "pause"),
                    this.is(ec) ||
                        ((this._phase = ec),
                        s.flush(this._state.pauseQueue, function (e) {
                            return e();
                        }));
            }),
            (n.resume = function () {
                ef(this, "resume"),
                    this.is(ec) &&
                        (this._start(),
                        s.flush(this._state.resumeQueue, function (e) {
                            return e();
                        }));
            }),
            (n.finish = function (e) {
                var t = this;
                if ((this.resume(), this.is(eu))) {
                    var n = this.animation;
                    !n.config.decay && s.is.und(e) && (e = n.to),
                        s.is.und(e) || this._set(e),
                        f.batchedUpdates(function () {
                            !n.changed && ((n.changed = !0), n.onStart && n.onStart(t)), t._stop();
                        });
                }
                return this;
            }),
            (n.update = function (e) {
                return ef(this, "update"), (this.queue || (this.queue = [])).push(e), this;
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
                                                ef(this, "start"),
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
                                            return (i = e.sent), e.abrupt("return", $(this, i));
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
                this.is(ed) || (this.animation && (this.animation.onRest = []), this.stop(), (this._phase = ed));
            }),
            (n.onParentChange = function (t) {
                e.prototype.onParentChange.call(this, t),
                    "change" == t.type
                        ? !this.is(eu) && (this._reset(), this.is(ec) || this._start())
                        : "priority" == t.type && (this.priority = t.priority + 1);
            }),
            (n._prepareNode = function (e) {
                var t = e.to,
                    n = e.from,
                    r = e.reverse,
                    i = this.key || "",
                    a = {
                        to: (t = !s.is.obj(t) || s.getFluidConfig(t) ? t : t[i]),
                        from: (n = !s.is.obj(n) || s.getFluidConfig(n) ? n : n[i]),
                    };
                if (this.is(eo)) {
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
            (n._updateNode = function (e) {
                var t = _.getAnimated(this);
                if (!s.is.und(e)) {
                    var n = this._getNodeType(e);
                    (t && t.constructor === n) || _.setAnimated(this, (t = n.create(e)));
                }
                return t;
            }),
            (n._getNodeType = function (e) {
                var t = _.getAnimated(e);
                return t
                    ? t.constructor
                    : s.is.arr(e)
                      ? _.AnimatedArray
                      : s.isAnimatedString(e)
                        ? _.AnimatedString
                        : _.AnimatedValue;
            }),
            (n._update = function (e, t) {
                var n = this,
                    r = this._defaultProps,
                    i = function (t) {
                        var n = G(e, t);
                        s.is.und(n) || (r[t] = n), r[t] && (e[t] = r[t]);
                    };
                i("cancel"), i("pause");
                var a = this._prepareNode(e);
                return K(++this._lastCallId, {
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
                    a = this._defaultProps,
                    o = !s.is.und(e.to),
                    l = !s.is.und(e.from);
                if (o || l)
                    if (!(t.callId > this._lastToId)) return n(Z(this));
                    else this._lastToId = t.callId;
                var u = function (e) {
                        return s.is.und(t[e]) ? a[e] : t[e];
                    },
                    c = ep(u("onDelayEnd"), r);
                c && c(t, this), t.default && V(a, t, ["pause", "cancel"]);
                var d = i.to,
                    p = i.from,
                    h = e.to,
                    m = void 0 === h ? d : h,
                    E = e.from,
                    g = void 0 === E ? p : E;
                if ((l && !o && (m = g), t.reverse)) {
                    var A = [g, m];
                    (m = A[0]), (g = A[1]);
                }
                var I = !s.isEqual(g, p);
                I && (i.from = g);
                var T = !s.isEqual(m, d);
                T && this._focus(m);
                var S = s.getFluidConfig(m),
                    y = s.getFluidConfig(g);
                y && (g = y.get());
                var v = s.is.arr(t.to) || s.is.fun(t.to),
                    N = i.config,
                    R = N.decay,
                    O = N.velocity;
                t.config && !v && C(N, x(t.config, r), t.config !== a.config ? x(a.config, r) : void 0);
                var b = _.getAnimated(this);
                if (!b || s.is.und(m)) return n(q(this, !0));
                var D = s.is.und(t.reset) ? l && !t.default : !s.is.und(g) && P(t.reset, r),
                    L = D ? g : this.get(),
                    w = W(m),
                    M = s.is.num(w) || s.is.arr(w) || s.isAnimatedString(w),
                    k = !v && (!M || P(a.immediate || t.immediate, r));
                if (T)
                    if (k) b = this._updateNode(w);
                    else {
                        var U = this._getNodeType(m);
                        if (U !== b.constructor)
                            throw Error(
                                "Cannot animate between " +
                                    b.constructor.name +
                                    " and " +
                                    U.name +
                                    ', as the "to" prop suggests',
                            );
                    }
                var G = b.constructor,
                    F = !!S,
                    B = !1;
                if (!F) {
                    var H = D || (this.is(eo) && I);
                    (T || H) && (F = !(B = s.isEqual(W(L), w))),
                        (s.isEqual(N.decay, R) && s.isEqual(N.velocity, O)) || (F = !0);
                }
                if ((B && this.is(eu) && (i.changed && !D ? (F = !0) : F || this._stop()), !v)) {
                    (F || s.getFluidConfig(d)) &&
                        ((i.values = b.getPayload()),
                        (i.toValues = S ? null : G == _.AnimatedString ? [1] : s.toArray(w))),
                        (i.immediate = k),
                        (i.onStart = ep(u("onStart"), r)),
                        (i.onChange = ep(u("onChange"), r));
                    var j = i.onRest,
                        Y = D && !t.onRest ? j[0] || s.noop : eh(ep(u("onRest"), r), this);
                    if (F) {
                        i.onRest = [Y, eh(n, this)];
                        var K = +!D;
                        K < j.length &&
                            f.batchedUpdates(function () {
                                for (; K < j.length; K++) j[K]();
                            });
                    } else (D || t.onRest) && (i.onRest[0] = Y);
                }
                var $ = ep(u("onProps"), r);
                if (($ && $(t, this), D && b.setValue(L), v)) n(ee(t.to, t, this._state, this));
                else if (F) D && (this._phase = el), this._reset(), this._start();
                else if (this.is(eu) && !T) i.onRest.push(eh(n, this));
                else {
                    let e = z(this, L),
                        t = ep(u("onNoopRest"), r);
                    null != t && t(e), n(e);
                }
            }),
            (n._focus = function (e) {
                var t = this.animation;
                if (e !== t.to) {
                    var n = s.getFluidConfig(t.to);
                    n && n.removeChild(this), (t.to = e);
                    var r = 0;
                    (n = s.getFluidConfig(e)) && (n.addChild(this), ei(e) && (r = (e.priority || 0) + 1)),
                        (this.priority = r);
                }
            }),
            (n._set = function (e) {
                var t = s.getFluidConfig(e);
                t && (e = t.get());
                var n = _.getAnimated(this),
                    r = n && n.getValue();
                return n ? n.setValue(e) : this._updateNode(e), !s.isEqual(e, r);
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
                    this.is(eu) || (t.changed = !1),
                    t.immediate ||
                        (t.fromValues = t.values.map(function (e) {
                            return e.lastPosition;
                        })),
                    e.prototype._reset.call(this);
            }),
            (n._start = function () {
                this.is(eu) ||
                    ((this._phase = eu),
                    e.prototype._start.call(this),
                    f.skipAnimation ? this.finish() : f.frameLoop.start(this));
            }),
            (n._stop = function (e) {
                if ((this.resume(), this.is(eu))) {
                    (this._phase = el), this._onChange(this.get(), !0);
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
                        return !this.is(eu) && !this._state.asyncTo;
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
    })(ea);
function ef(e, t) {
    if (e.is(ed)) throw Error('Cannot call "' + t + '" of disposed "' + e.constructor.name + '" object');
}
function ep(e, t) {
    return s.is.fun(e) ? e : t && e ? e[t] : void 0;
}
var eh = function (e, t) {
    var n = t.animation.to;
    return e
        ? function (r) {
              if (r) e(Z(t));
              else {
                  var i = W(n),
                      a = W(t.get());
                  e(q(t, s.isEqual(a, i)));
              }
          }
        : s.noop;
};
function em(e, t, n) {
    void 0 === t && (t = e.loop), void 0 === n && (n = e.to);
    var r = x(t);
    if (r) {
        var i = !0 !== r && Y(r),
            o = (i || e).reverse,
            l = !i || i.reset;
        return eE(
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
function eE(e) {
    var t = (e = Y(e)),
        n = t.to,
        r = t.from,
        i = new Set();
    return (
        r ? eA(r, i) : delete e.from,
        s.is.obj(n) ? eA(n, i) : n || delete e.to,
        (e.keys = i.size ? Array.from(i) : null),
        e
    );
}
function eg(e) {
    var t = eE(e);
    return s.is.und(t.default) && (t.default = F(t, [!0 === t.immediate && "immediate"])), t;
}
function eA(e, t) {
    s.each(e, function (e, n) {
        return null != e && t.add(n);
    });
}
var eI = ["onStart", "onChange", "onRest"],
    eT = 1,
    eS = (function () {
        function e(e, t) {
            (this.id = eT++),
                (this.springs = {}),
                (this.queue = []),
                (this._flush = void 0),
                (this._initialProps = void 0),
                (this._phase = eo),
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
                var t = e ? s.toArray(e).map(eE) : this.queue;
                return (e || (this.queue = []), this._flush) ? this._flush(this, t) : (eb(this, t), ey(this, t));
            }),
            (t.stop = function (e) {
                if (s.is.und(e))
                    this.each(function (e) {
                        return e.stop();
                    }),
                        en(this._state, this._lastAsyncId);
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
                    this._phase != eu &&
                    ((this._phase = eu),
                    s.flush(n, function (t) {
                        return t(e);
                    }));
                var o = (r.size || (!a && i.size)) && this.get();
                s.flush(r, function (e) {
                    return e(o);
                }),
                    a ||
                        ((this._phase = el),
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
function ey(e, t) {
    return Promise.all(
        t.map(function (t) {
            return ev(e, t);
        }),
    ).then(function (t) {
        return $(e, t);
    });
}
function ev(e, t, n) {
    var r = t.to,
        i = t.loop,
        a = t.onRest;
    i && (t.loop = !1);
    var o = s.is.arr(r) || s.is.fun(r) ? r : void 0;
    o
        ? ((t.to = void 0), (t.onRest = void 0))
        : s.each(eI, function (n) {
              var r = t[n];
              if (s.is.fun(r)) {
                  var i = e._events[n];
                  i instanceof Set
                      ? (t[n] = function () {
                            return i.add(r);
                        })
                      : (t[n] = function (e) {
                            var t = e.finished,
                                n = e.cancelled,
                                s = i.get(r);
                            s
                                ? (t || (s.finished = !1), n && (s.cancelled = !0))
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
                  K(++e._lastAsyncId, {
                      props: t,
                      state: u,
                      actions: {
                          pause: s.noop,
                          resume: s.noop,
                          start: function (t, n) {
                              (t.onRest = a), t.cancel ? U(t, "cancel") && en(u, t.callId) : n(ee(o, t, u, e));
                          },
                      },
                  }),
              )
            : t.keys || !0 !== t.cancel || en(u, e._lastAsyncId),
        Promise.all(l).then(function (s) {
            var a = $(e, s);
            if (i && a.finished && !(n && a.noop)) {
                var o = em(t, i, r);
                if (o) return eb(e, [o]), ev(e, o, !0);
            }
            return a;
        })
    );
}
function eN(e, t) {
    var n = a({}, e.springs);
    return (
        t &&
            s.each(s.toArray(t), function (e) {
                s.is.und(e.keys) && (e = eE(e)),
                    s.is.obj(e.to) || (e = a(a({}, e), {}, { to: void 0 })),
                    eO(n, e, function (e) {
                        return eR(e);
                    });
            }),
        n
    );
}
function eC(e, t) {
    s.each(t, function (t, n) {
        e.springs[n] || ((e.springs[n] = t), t.addChild(e));
    });
}
function eR(e, t) {
    var n = new e_();
    return (n.key = e), t && n.addChild(t), n;
}
function eO(e, t, n) {
    t.keys &&
        s.each(t.keys, function (r) {
            (e[r] || (e[r] = n(r)))._prepareNode(t);
        });
}
function eb(e, t) {
    s.each(t, function (t) {
        eO(e.springs, t, function (t) {
            return eR(t, e);
        });
    });
}
var eD = o.createContext({}),
    eL = function (e) {
        var t = e.children,
            n = E(e, ["children"]),
            r = o.useContext(eD);
        n = M(
            function () {
                return a(a({}, r), n);
            },
            [r, n.pause, n.cancel, n.immediate, n.config],
        );
        var i = eD.Provider;
        return o.createElement(i, { value: n }, t);
    };
(eL.Provider = eD.Provider), (eL.Consumer = eD.Consumer);
var ew = function () {
        return o.useContext(eD);
    },
    eM = {
        create: function (e) {
            return {
                get controllers() {
                    return e();
                },
                update: function (t) {
                    return (
                        s.each(e(), function (e, n) {
                            e.update(k(t, n, e));
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
                                                        var r = k(t, n, e);
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
function ex(e, t, n) {
    var r = s.is.fun(t) && t;
    r && !n && (n = []);
    var l = o.useRef(0),
        u = s.useForceUpdate(),
        c = o.useState(function () {
            return {
                ctrls: [],
                queue: [],
                flush: function (e, t) {
                    var n = eN(e, t);
                    return !(l.current > 0) ||
                        c.queue.length ||
                        Object.keys(n).some(function (t) {
                            return !e.springs[t];
                        })
                        ? new Promise(function (r) {
                              eC(e, n),
                                  c.queue.push(function () {
                                      r(ey(e, t));
                                  }),
                                  u();
                          })
                        : ey(e, t);
                },
            };
        })[0],
        d = o.useRef(),
        _ = [].concat(c.ctrls),
        f = [],
        p = s.usePrev(e) || 0,
        h = _.slice(e, p);
    function m(e, n) {
        for (var i = e; i < n; i++) {
            var s = _[i] || (_[i] = new eS(null, c.flush)),
                a = r ? r(i, s) : t[i];
            a && ((a = f[i] = eg(a)), 0 == i && ((d.current = a.ref), (a.ref = void 0)));
        }
    }
    M(
        function () {
            (_.length = e), m(p, e);
        },
        [e],
    ),
        M(function () {
            m(0, Math.min(p, e));
        }, n);
    var E = o.useMemo(function () {
            return eM.create(function () {
                return c.ctrls;
            });
        }, []),
        g = _.map(function (e, t) {
            return eN(e, f[t]);
        }),
        A = ew();
    i.useLayoutEffect(function () {
        l.current++, (c.ctrls = _), d.current && (d.current.current = E);
        var e = c.queue;
        e.length &&
            ((c.queue = []),
            s.each(e, function (e) {
                return e();
            })),
            s.each(h, function (e) {
                return e.dispose();
            }),
            s.each(_, function (e, t) {
                eC(e, g[t]), e.start({ default: A });
                var n = f[t];
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
    return r || 3 == arguments.length ? [I, E.start, E.stop] : I;
}
function eP(e, t) {
    var n = s.is.fun(e),
        r = ex(1, n ? e : [e], n ? t || [] : t),
        i = r[0][0],
        a = r[1],
        o = r[2];
    return n || 2 == arguments.length ? [i, a, o] : i;
}
function ek(e, t, n) {
    var r = s.is.fun(t) && t;
    r && !n && (n = []);
    var a = [],
        o = ex(
            e,
            function (e, n) {
                return (a[e] = n), k(t, e, n);
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
            (o[1] = p.useCallbackOne(function (e) {
                var t = s.is.obj(e) && e.reverse;
                return l(function (n, r) {
                    var i = k(e, n, r),
                        s = a[n + (t ? 1 : -1)];
                    return s && (i.to = s.springs), i;
                });
            }, n)),
            o
        );
    }
    return o[0];
}
var eU = "mount",
    eG = "enter",
    eF = "update",
    eV = "leave";
function eB(e, t, n) {
    var r = t.ref,
        l = t.reset,
        u = t.sort,
        c = t.trail,
        d = void 0 === c ? 0 : c,
        _ = t.expires,
        f = void 0 === _ || _,
        p = s.toArray(e),
        h = [],
        m = eH(p, t),
        E = o.useRef(null),
        g = l ? null : E.current;
    i.useLayoutEffect(function () {
        E.current = h;
    }),
        s.useOnce(function () {
            return function () {
                return s.each(E.current, function (e) {
                    e.expired && clearTimeout(e.expirationId), e.ctrl.dispose();
                });
            };
        });
    var A = [];
    if (
        (g &&
            s.each(g, function (e, t) {
                e.expired ? clearTimeout(e.expirationId) : ~(t = A[t] = m.indexOf(e.key)) && (h[t] = e);
            }),
        s.each(p, function (e, t) {
            h[t] || (h[t] = { key: m[t], item: e, phase: eU, ctrl: new eS() });
        }),
        A.length)
    ) {
        var I = -1;
        s.each(A, function (e, n) {
            var r = g[n];
            ~e ? ((I = h.indexOf(r)), (h[I] = a(a({}, r), {}, { item: p[e] }))) : t.leave && h.splice(++I, 0, r);
        });
    }
    s.is.fun(u) &&
        h.sort(function (e, t) {
            return u(e.item, t.item);
        });
    var T = -d,
        S = s.useForceUpdate(),
        y = F(t),
        v = new Map();
    s.each(h, function (e, n) {
        var r,
            i,
            o = e.key,
            l = e.phase;
        if (l == eU) (r = t.enter), (i = eG);
        else {
            var u = 0 > m.indexOf(o);
            if (l != eV)
                if (u) (r = t.leave), (i = eV);
                else {
                    if (!(r = t.update)) return;
                    i = eF;
                }
            else {
                if (u) return;
                (r = t.enter), (i = eG);
            }
        }
        if (((r = x(r, e.item, n)), !(r = s.is.obj(r) ? Y(r) : { to: r }).config)) {
            var c = t.config || y.config;
            r.config = x(c, e.item, n);
        }
        var _ = a(a({}, y), {}, { delay: (T += d), reset: !1 }, r);
        i == eG && s.is.und(_.from) && (_.from = x(s.is.und(t.initial) || g ? t.from : t.initial, e.item, n));
        var p = _.onRest;
        _.onRest = _.onNoopRest = function (e) {
            var t = E.current,
                n = t.find(function (e) {
                    return e.key === o;
                });
            if (n) {
                if ((s.is.fun(p) && !0 !== e.noop && p(e, n), e.cancelled && n.phase != eF)) {
                    n.phase = l;
                    return;
                }
                if (n.ctrl.idle) {
                    var r = t.every(function (e) {
                        return e.ctrl.idle;
                    });
                    if (n.phase == eV) {
                        var i = x(f, n.item);
                        if (!1 !== i) {
                            var a = !0 === i ? 0 : i;
                            if (((n.expired = !0), !r && a > 0)) {
                                a <= 0x7fffffff && (n.expirationId = setTimeout(S, a));
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
        var h = eN(e.ctrl, _);
        v.set(e, { phase: i, springs: h, payload: _ });
    });
    var N = ew();
    i.useLayoutEffect(
        function () {
            s.each(h, function (e) {
                e.ctrl.start({ default: N });
            });
        },
        [N],
    );
    var C = o.useMemo(function () {
        return eM.create(function () {
            return E.current.map(function (e) {
                return e.ctrl;
            });
        });
    }, []);
    o.useImperativeHandle(r, function () {
        return C;
    }),
        i.useLayoutEffect(
            function () {
                s.each(v, function (e, t) {
                    var n = e.phase,
                        i = e.springs,
                        s = e.payload;
                    eC(t.ctrl, i),
                        N.cancel ||
                            ((t.phase = n), n == eG && t.ctrl.start({ default: N }), t.ctrl[r ? "update" : "start"](s));
                });
            },
            l ? void 0 : n,
        );
    var R = function (e) {
        return o.createElement(
            o.Fragment,
            null,
            h.map(function (t, n) {
                var r = e(a({}, (v.get(t) || t.ctrl).springs), t.item, t, n);
                return r && r.type
                    ? o.createElement(
                          r.type,
                          a({}, r.props, { key: s.is.str(t.key) || s.is.num(t.key) ? t.key : t.ctrl.id, ref: r.ref }),
                      )
                    : r;
            }),
        );
    };
    return 3 == arguments.length ? [R, C.start, C.stop] : R;
}
function eH(e, t) {
    var n = t.key,
        r = t.keys,
        i = void 0 === r ? n : r;
    return s.is.und(i) ? e : s.is.fun(i) ? e.map(i) : s.toArray(i);
}
function ej(e) {
    return (0, e.children)(eP(E(e, ["children"])));
}
function eY(e) {
    var t = e.items,
        n = e.children,
        r = E(e, ["items", "children"]),
        i = ek(t.length, r);
    return t.map(function (e, t) {
        var r = n(e, t);
        return s.is.fun(r) ? r(i[t]) : r;
    });
}
function eW(e) {
    var t = e.items,
        n = e.children,
        r = E(e, ["items", "children"]);
    return o.createElement(o.Fragment, null, eB(t, r)(n));
}
var eK = (function (e) {
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
                    f.skipAnimation ? ((this.idle = !0), this.advance()) : f.frameLoop.start(this);
            }),
            (n._attach = function () {
                var e = this,
                    t = !0,
                    n = 1;
                s.each(s.toArray(this.source), function (r) {
                    ei(r) && (r.idle || (t = !1), (n = Math.max(n, r.priority + 1))), r.addChild(e);
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
    })(ea),
    e$ = function (e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return new eK(e, n);
    },
    ez = function (e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return m.deprecateInterpolate(), new eK(e, n);
    };
s.Globals.assign({
    createStringInterpolator: A.createStringInterpolator,
    to: function (e, t) {
        return new eK(e, t);
    },
});
var eq = function () {
    return s.Globals.frameLoop.advance();
};
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
    (t.BailSignal = er),
    (t.Controller = eS),
    (t.FrameValue = ea),
    (t.Interpolation = eK),
    (t.Spring = ej),
    (t.SpringContext = eL),
    (t.SpringHandle = eM),
    (t.SpringValue = e_),
    (t.Trail = eY),
    (t.Transition = eW),
    (t.config = S),
    (t.inferTo = Y),
    (t.interpolate = ez),
    (t.to = e$),
    (t.update = eq),
    (t.useChain = T),
    (t.useSpring = eP),
    (t.useSprings = ex),
    (t.useTrail = ek),
    (t.useTransition = eB);
