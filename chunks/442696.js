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
    p = n(337126),
    h = r(n(680292)),
    m = n(180224),
    g = r(n(585458)),
    E = r(n(681334)),
    A = n(111806),
    I = n(269270);
function T(e, t, n) {
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
var y = {
        default: { tension: 170, friction: 26 },
        gentle: { tension: 120, friction: 14 },
        wobbly: { tension: 180, friction: 12 },
        stiff: { tension: 210, friction: 20 },
        slow: { tension: 280, friction: 60 },
        molasses: { tension: 280, friction: 120 },
    },
    S = function (e) {
        return e;
    },
    v = s(s({}, y.default), {}, { mass: 1, damping: 1, easing: S, clamp: !1 }),
    C = function () {
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
function b(e, t, n) {
    for (var r in (n && (N((n = s({}, n)), t), (t = s(s({}, n), t))), N(e, t), Object.assign(e, t), v))
        null == e[r] && (e[r] = v[r]);
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
function N(e, t) {
    if (a.is.und(t.decay)) {
        var n = !a.is.und(t.tension) || !a.is.und(t.friction);
        (!n && a.is.und(t.frequency) && a.is.und(t.damping) && a.is.und(t.mass)) ||
            ((e.duration = void 0), (e.decay = void 0)),
            n && (e.frequency = void 0);
    } else e.duration = void 0;
}
var R = [],
    O = function () {
        (this.changed = !1),
            (this.values = R),
            (this.toValues = null),
            (this.fromValues = R),
            (this.to = void 0),
            (this.from = void 0),
            (this.config = new C()),
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
var x = function (e, t) {
    return p.useMemoOne(e, t || [{}]);
};
function P(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    return a.is.fun(e) ? e.apply(void 0, n) : e;
}
var M = function (e, t) {
        return !0 === e || !!(t && e && (a.is.fun(e) ? e(t) : a.toArray(e).includes(t)));
    },
    k = function (e, t, n) {
        return e && (a.is.fun(e) ? e(t, n) : a.is.arr(e) ? e[t] : s({}, e));
    },
    U = function (e, t) {
        return !a.is.und(G(e, t));
    },
    G = function (e, t) {
        return !0 === e.default ? e[t] : e.default ? e.default[t] : void 0;
    },
    V = function (e, t, n) {
        void 0 === t && (t = []), void 0 === n && (n = {});
        var r = B;
        e.default && !0 !== e.default && (r = Object.keys((e = e.default)));
        for (var i, s = D(r); !(i = s()).done; ) {
            var o = i.value,
                l = e[o];
            a.is.und(l) || t.includes(o) || (n[o] = l);
        }
        return n;
    },
    F = function (e, t, n) {
        return V(t, n, e);
    },
    B = ["pause", "cancel", "config", "immediate", "onDelayEnd", "onProps", "onStart", "onChange", "onRest"],
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
function H(e) {
    var t = {},
        n = 0;
    if (
        (a.each(e, function (e, r) {
            !j[r] && ((t[r] = e), n++);
        }),
        n)
    )
        return t;
}
function Y(e) {
    var t = H(e);
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
function W(e) {
    var t = a.getFluidConfig(e);
    return t
        ? W(t.get())
        : a.is.arr(e)
          ? e.map(W)
          : a.isAnimatedString(e)
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
            _ = M(r.cancel, n);
        function f() {
            i.resumeQueue.add(p), c.cancel(), (u = c.time - a.Globals.now());
        }
        function p() {
            u > 0 ? (i.pauseQueue.add(f), (c = a.Globals.frameLoop.setTimeout(h, u))) : h();
        }
        function h() {
            i.pauseQueue.delete(f), e <= (i.cancelId || 0) && (_ = !0);
            try {
                o.start(s(s({}, r), {}, { callId: e, delay: u, cancel: _, pause: d }), t);
            } catch (e) {
                l(e);
            }
        }
        _
            ? h()
            : ((u = P(r.delay || 0, n)), (d = M(r.pause, n)) ? (i.resumeQueue.add(p), o.pause()) : (o.resume(), p()));
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
                ? $(e)
                : q(
                      e,
                      t.every(function (e) {
                          return e.finished;
                      }),
                  );
    },
    $ = function (e, t) {
        return void 0 === t && (t = e.get()), { value: t, noop: !0, finished: !0, target: e };
    },
    q = function (e, t, n) {
        return void 0 === n && (n = e.get()), { value: n, finished: t, target: e };
    },
    Z = function (e, t) {
        return void 0 === t && (t = e.get()), { value: t, cancelled: !0, target: e };
    };
function Q(e) {
    var t = 0;
    if ("u" < typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (e = X(e)))
            return function () {
                return t >= e.length ? { done: !0 } : { done: !1, value: e[t++] };
            };
        throw TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
    }
    return (t = e[Symbol.iterator]()).next.bind(t);
}
function X(e, t) {
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
                                        var h, m, g, E, A, I, T, y, S;
                                        return l.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return (
                                                                (r.asyncId = o),
                                                                (r.asyncTo = t),
                                                                (h = V(n, ["onRest"])),
                                                                (E = new Promise(function (e, t) {
                                                                    return (m = e), (g = t);
                                                                })),
                                                                (A = function (e) {
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
                                                                (I = function (e) {
                                                                    var t =
                                                                        (o <= (r.cancelId || 0) && Z(i)) ||
                                                                        (o !== r.asyncId && q(i, !1));
                                                                    if (t) throw ((e.result = t), e);
                                                                }),
                                                                (T = A(function (e, t) {
                                                                    var n = new er();
                                                                    I(n);
                                                                    var c = a.is.obj(e)
                                                                        ? s({}, e)
                                                                        : s(s({}, t), {}, { to: e });
                                                                    return (
                                                                        (c.parentId = o),
                                                                        a.each(h, function (e, t) {
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
                                                                a.is.arr(t)
                                                                    ? (S = (function () {
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
                                                                    : a.is.fun(t) &&
                                                                      (S = Promise.resolve(t(T, i.stop.bind(i)))),
                                                                (e.next = 11),
                                                                Promise.all([S.then(m), E])
                                                            );
                                                        case 11:
                                                            (y = q(i, !0)), (e.next = 21);
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
                                                            (y = e.t0.result), (e.next = 21);
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
                                                                a.is.fun(d) &&
                                                                    f.batchedUpdates(function () {
                                                                        d(y);
                                                                    }),
                                                                e.abrupt("return", y)
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
                (r.animation = new O()),
                (r.queue = void 0),
                (r._phase = eo),
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
                                var p = (u.elapsedTime += e),
                                    h = i.fromValues[c],
                                    m =
                                        null != u.v0
                                            ? u.v0
                                            : (u.v0 = a.is.arr(s.velocity) ? s.velocity[c] : s.velocity);
                                if (a.is.und(s.duration))
                                    if (s.decay) {
                                        var g = !0 === s.decay ? 0.998 : s.decay,
                                            E = Math.exp(-(1 - g) * p);
                                        (f = h + (m / (1 - g)) * (1 - E)),
                                            (_ = 0.1 > Math.abs(u.lastPosition - f)),
                                            (A = m * E);
                                    } else
                                        for (
                                            var A = null == u.lastVelocity ? m : u.lastVelocity,
                                                I =
                                                    s.precision ||
                                                    (h == d ? 0.005 : Math.min(1, 0.001 * Math.abs(d - h))),
                                                T = s.restVelocity || I / 10,
                                                y = s.clamp ? 0 : s.bounce,
                                                S = !a.is.und(y),
                                                v = h == d ? u.v0 > 0 : h < d,
                                                C = !1,
                                                b = 1,
                                                N = Math.ceil(e / 1),
                                                R = 0;
                                            R < N && !(!(Math.abs(A) > T) && (_ = Math.abs(d - f) <= I));
                                            ++R
                                        ) {
                                            S && (C = f == d || f > d == v) && ((A = -A * y), (f = d));
                                            var O =
                                                (-(1e-6 * s.tension) * (f - d) + -(0.001 * s.friction) * A) / s.mass;
                                            (A += O * b), (f += A * b);
                                        }
                                else {
                                    var D = s.progress || 0;
                                    s.duration <= 0 ? (D = 1) : (D += (1 - D) * Math.min(1, p / s.duration)),
                                        (A = ((f = h + s.easing(D) * (d - h)) - u.lastPosition) / e),
                                        (_ = 1 == D);
                                }
                                (u.lastVelocity = A),
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
                        a.flush(this._state.pauseQueue, function (e) {
                            return e();
                        }));
            }),
            (n.resume = function () {
                ef(this, "resume"),
                    this.is(ec) &&
                        (this._start(),
                        a.flush(this._state.resumeQueue, function (e) {
                            return e();
                        }));
            }),
            (n.finish = function (e) {
                var t = this;
                if ((this.resume(), this.is(eu))) {
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
                        var n = G(e, t);
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
                var u = function (e) {
                        return a.is.und(t[e]) ? s[e] : t[e];
                    },
                    c = ep(u("onDelayEnd"), r);
                c && c(t, this), t.default && F(s, t, ["pause", "cancel"]);
                var d = i.to,
                    p = i.from,
                    h = e.to,
                    m = void 0 === h ? d : h,
                    g = e.from,
                    E = void 0 === g ? p : g;
                if ((l && !o && (m = E), t.reverse)) {
                    var A = [E, m];
                    (m = A[0]), (E = A[1]);
                }
                var I = !a.isEqual(E, p);
                I && (i.from = E);
                var T = !a.isEqual(m, d);
                T && this._focus(m);
                var y = a.getFluidConfig(m),
                    S = a.getFluidConfig(E);
                S && (E = S.get());
                var v = a.is.arr(t.to) || a.is.fun(t.to),
                    C = i.config,
                    N = C.decay,
                    R = C.velocity;
                t.config && !v && b(C, P(t.config, r), t.config !== s.config ? P(s.config, r) : void 0);
                var O = _.getAnimated(this);
                if (!O || a.is.und(m)) return n(q(this, !0));
                var D = a.is.und(t.reset) ? l && !t.default : !a.is.und(E) && M(t.reset, r),
                    L = D ? E : this.get(),
                    w = W(m),
                    x = a.is.num(w) || a.is.arr(w) || a.isAnimatedString(w),
                    k = !v && (!x || M(s.immediate || t.immediate, r));
                if (T)
                    if (k) O = this._updateNode(w);
                    else {
                        var U = this._getNodeType(m);
                        if (U !== O.constructor)
                            throw Error(
                                "Cannot animate between " +
                                    O.constructor.name +
                                    " and " +
                                    U.name +
                                    ', as the "to" prop suggests',
                            );
                    }
                var G = O.constructor,
                    V = !!y,
                    B = !1;
                if (!V) {
                    var j = D || (this.is(eo) && I);
                    (T || j) && (V = !(B = a.isEqual(W(L), w))),
                        (a.isEqual(C.decay, N) && a.isEqual(C.velocity, R)) || (V = !0);
                }
                if ((B && this.is(eu) && (i.changed && !D ? (V = !0) : V || this._stop()), !v)) {
                    (V || a.getFluidConfig(d)) &&
                        ((i.values = O.getPayload()),
                        (i.toValues = y ? null : G == _.AnimatedString ? [1] : a.toArray(w))),
                        (i.immediate = k),
                        (i.onStart = ep(u("onStart"), r)),
                        (i.onChange = ep(u("onChange"), r));
                    var H = i.onRest,
                        Y = D && !t.onRest ? H[0] || a.noop : eh(ep(u("onRest"), r), this);
                    if (V) {
                        i.onRest = [Y, eh(n, this)];
                        var K = +!D;
                        K < H.length &&
                            f.batchedUpdates(function () {
                                for (; K < H.length; K++) H[K]();
                            });
                    } else (D || t.onRest) && (i.onRest[0] = Y);
                }
                var z = ep(u("onProps"), r);
                if ((z && z(t, this), D && O.setValue(L), v)) n(ee(t.to, t, this._state, this));
                else if (V) D && (this._phase = el), this._reset(), this._start();
                else if (this.is(eu) && !T) i.onRest.push(eh(n, this));
                else {
                    let e = $(this, L),
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
                    (n = a.getFluidConfig(e)) && (n.addChild(this), ei(e) && (r = (e.priority || 0) + 1)),
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
                        return !this.is(eu) && !this._state.asyncTo;
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
    })(es);
function ef(e, t) {
    if (e.is(ed)) throw Error('Cannot call "' + t + '" of disposed "' + e.constructor.name + '" object');
}
function ep(e, t) {
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
                  e(q(t, a.isEqual(s, i)));
              }
          }
        : a.noop;
};
function em(e, t, n) {
    void 0 === t && (t = e.loop), void 0 === n && (n = e.to);
    var r = P(t);
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
        r ? eA(r, i) : delete e.from,
        a.is.obj(n) ? eA(n, i) : n || delete e.to,
        (e.keys = i.size ? Array.from(i) : null),
        e
    );
}
function eE(e) {
    var t = eg(e);
    return a.is.und(t.default) && (t.default = V(t, [!0 === t.immediate && "immediate"])), t;
}
function eA(e, t) {
    a.each(e, function (e, n) {
        return null != e && t.add(n);
    });
}
var eI = ["onStart", "onChange", "onRest"],
    eT = 1,
    ey = (function () {
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
                return e && this.queue.push(eg(e)), this;
            }),
            (t.start = function (e) {
                var t = e ? a.toArray(e).map(eg) : this.queue;
                return (e || (this.queue = []), this._flush) ? this._flush(this, t) : (eO(this, t), eS(this, t));
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
                    this._phase != eu &&
                    ((this._phase = eu),
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
function eS(e, t) {
    return Promise.all(
        t.map(function (t) {
            return ev(e, t);
        }),
    ).then(function (t) {
        return z(e, t);
    });
}
function ev(e, t, n) {
    var r = t.to,
        i = t.loop,
        s = t.onRest;
    i && (t.loop = !1);
    var o = a.is.arr(r) || a.is.fun(r) ? r : void 0;
    o
        ? ((t.to = void 0), (t.onRest = void 0))
        : a.each(eI, function (n) {
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
                  K(++e._lastAsyncId, {
                      props: t,
                      state: u,
                      actions: {
                          pause: a.noop,
                          resume: a.noop,
                          start: function (t, n) {
                              (t.onRest = s), t.cancel ? U(t, "cancel") && en(u, t.callId) : n(ee(o, t, u, e));
                          },
                      },
                  }),
              )
            : t.keys || !0 !== t.cancel || en(u, e._lastAsyncId),
        Promise.all(l).then(function (a) {
            var s = z(e, a);
            if (i && s.finished && !(n && s.noop)) {
                var o = em(t, i, r);
                if (o) return eO(e, [o]), ev(e, o, !0);
            }
            return s;
        })
    );
}
function eC(e, t) {
    var n = s({}, e.springs);
    return (
        t &&
            a.each(a.toArray(t), function (e) {
                a.is.und(e.keys) && (e = eg(e)),
                    a.is.obj(e.to) || (e = s(s({}, e), {}, { to: void 0 })),
                    eR(n, e, function (e) {
                        return eN(e);
                    });
            }),
        n
    );
}
function eb(e, t) {
    a.each(t, function (t, n) {
        e.springs[n] || ((e.springs[n] = t), t.addChild(e));
    });
}
function eN(e, t) {
    var n = new e_();
    return (n.key = e), t && n.addChild(t), n;
}
function eR(e, t, n) {
    t.keys &&
        a.each(t.keys, function (r) {
            (e[r] || (e[r] = n(r)))._prepareNode(t);
        });
}
function eO(e, t) {
    a.each(t, function (t) {
        eR(e.springs, t, function (t) {
            return eN(t, e);
        });
    });
}
var eD = o.createContext({}),
    eL = function (e) {
        var t = e.children,
            n = g(e, ["children"]),
            r = o.useContext(eD);
        n = x(
            function () {
                return s(s({}, r), n);
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
    ex = {
        create: function (e) {
            return {
                get controllers() {
                    return e();
                },
                update: function (t) {
                    return (
                        a.each(e(), function (e, n) {
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
function eP(e, t, n) {
    var r = a.is.fun(t) && t;
    r && !n && (n = []);
    var l = o.useRef(0),
        u = a.useForceUpdate(),
        c = o.useState(function () {
            return {
                ctrls: [],
                queue: [],
                flush: function (e, t) {
                    var n = eC(e, t);
                    return !(l.current > 0) ||
                        c.queue.length ||
                        Object.keys(n).some(function (t) {
                            return !e.springs[t];
                        })
                        ? new Promise(function (r) {
                              eb(e, n),
                                  c.queue.push(function () {
                                      r(eS(e, t));
                                  }),
                                  u();
                          })
                        : eS(e, t);
                },
            };
        })[0],
        d = o.useRef(),
        _ = [].concat(c.ctrls),
        f = [],
        p = a.usePrev(e) || 0,
        h = _.slice(e, p);
    function m(e, n) {
        for (var i = e; i < n; i++) {
            var a = _[i] || (_[i] = new ey(null, c.flush)),
                s = r ? r(i, a) : t[i];
            s && ((s = f[i] = eE(s)), 0 == i && ((d.current = s.ref), (s.ref = void 0)));
        }
    }
    x(
        function () {
            (_.length = e), m(p, e);
        },
        [e],
    ),
        x(function () {
            m(0, Math.min(p, e));
        }, n);
    var g = o.useMemo(function () {
            return ex.create(function () {
                return c.ctrls;
            });
        }, []),
        E = _.map(function (e, t) {
            return eC(e, f[t]);
        }),
        A = ew();
    i.useLayoutEffect(function () {
        l.current++, (c.ctrls = _), d.current && (d.current.current = g);
        var e = c.queue;
        e.length &&
            ((c.queue = []),
            a.each(e, function (e) {
                return e();
            })),
            a.each(h, function (e) {
                return e.dispose();
            }),
            a.each(_, function (e, t) {
                eb(e, E[t]), e.start({ default: A });
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
    var I = E.map(function (e) {
        return s({}, e);
    });
    return r || 3 == arguments.length ? [I, g.start, g.stop] : I;
}
function eM(e, t) {
    var n = a.is.fun(e),
        r = eP(1, n ? e : [e], n ? t || [] : t),
        i = r[0][0],
        s = r[1],
        o = r[2];
    return n || 2 == arguments.length ? [i, s, o] : i;
}
function ek(e, t, n) {
    var r = a.is.fun(t) && t;
    r && !n && (n = []);
    var s = [],
        o = eP(
            e,
            function (e, n) {
                return (s[e] = n), k(t, e, n);
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
            (o[1] = p.useCallbackOne(function (e) {
                var t = a.is.obj(e) && e.reverse;
                return l(function (n, r) {
                    var i = k(e, n, r),
                        a = s[n + (t ? 1 : -1)];
                    return a && (i.to = a.springs), i;
                });
            }, n)),
            o
        );
    }
    return o[0];
}
var eU = "mount",
    eG = "enter",
    eV = "update",
    eF = "leave";
function eB(e, t, n) {
    var r = t.ref,
        l = t.reset,
        u = t.sort,
        c = t.trail,
        d = void 0 === c ? 0 : c,
        _ = t.expires,
        f = void 0 === _ || _,
        p = a.toArray(e),
        h = [],
        m = ej(p, t),
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
    var A = [];
    if (
        (E &&
            a.each(E, function (e, t) {
                e.expired ? clearTimeout(e.expirationId) : ~(t = A[t] = m.indexOf(e.key)) && (h[t] = e);
            }),
        a.each(p, function (e, t) {
            h[t] || (h[t] = { key: m[t], item: e, phase: eU, ctrl: new ey() });
        }),
        A.length)
    ) {
        var I = -1;
        a.each(A, function (e, n) {
            var r = E[n];
            ~e ? ((I = h.indexOf(r)), (h[I] = s(s({}, r), {}, { item: p[e] }))) : t.leave && h.splice(++I, 0, r);
        });
    }
    a.is.fun(u) &&
        h.sort(function (e, t) {
            return u(e.item, t.item);
        });
    var T = -d,
        y = a.useForceUpdate(),
        S = V(t),
        v = new Map();
    a.each(h, function (e, n) {
        var r,
            i,
            o = e.key,
            l = e.phase;
        if (l == eU) (r = t.enter), (i = eG);
        else {
            var u = 0 > m.indexOf(o);
            if (l != eF)
                if (u) (r = t.leave), (i = eF);
                else {
                    if (!(r = t.update)) return;
                    i = eV;
                }
            else {
                if (u) return;
                (r = t.enter), (i = eG);
            }
        }
        if (((r = P(r, e.item, n)), !(r = a.is.obj(r) ? Y(r) : { to: r }).config)) {
            var c = t.config || S.config;
            r.config = P(c, e.item, n);
        }
        var _ = s(s({}, S), {}, { delay: (T += d), reset: !1 }, r);
        i == eG && a.is.und(_.from) && (_.from = P(a.is.und(t.initial) || E ? t.from : t.initial, e.item, n));
        var p = _.onRest;
        _.onRest = _.onNoopRest = function (e) {
            var t = g.current,
                n = t.find(function (e) {
                    return e.key === o;
                });
            if (n) {
                if ((a.is.fun(p) && !0 !== e.noop && p(e, n), e.cancelled && n.phase != eV)) {
                    n.phase = l;
                    return;
                }
                if (n.ctrl.idle) {
                    var r = t.every(function (e) {
                        return e.ctrl.idle;
                    });
                    if (n.phase == eF) {
                        var i = P(f, n.item);
                        if (!1 !== i) {
                            var s = !0 === i ? 0 : i;
                            if (((n.expired = !0), !r && s > 0)) {
                                s <= 0x7fffffff && (n.expirationId = setTimeout(y, s));
                                return;
                            }
                        }
                    }
                    r &&
                        t.some(function (e) {
                            return e.expired;
                        }) &&
                        y();
                }
            }
        };
        var h = eC(e.ctrl, _);
        v.set(e, { phase: i, springs: h, payload: _ });
    });
    var C = ew();
    i.useLayoutEffect(
        function () {
            a.each(h, function (e) {
                e.ctrl.start({ default: C });
            });
        },
        [C],
    );
    var b = o.useMemo(function () {
        return ex.create(function () {
            return g.current.map(function (e) {
                return e.ctrl;
            });
        });
    }, []);
    o.useImperativeHandle(r, function () {
        return b;
    }),
        i.useLayoutEffect(
            function () {
                a.each(v, function (e, t) {
                    var n = e.phase,
                        i = e.springs,
                        a = e.payload;
                    eb(t.ctrl, i),
                        C.cancel ||
                            ((t.phase = n), n == eG && t.ctrl.start({ default: C }), t.ctrl[r ? "update" : "start"](a));
                });
            },
            l ? void 0 : n,
        );
    var N = function (e) {
        return o.createElement(
            o.Fragment,
            null,
            h.map(function (t, n) {
                var r = e(s({}, (v.get(t) || t.ctrl).springs), t.item, t, n);
                return r && r.type
                    ? o.createElement(
                          r.type,
                          s({}, r.props, { key: a.is.str(t.key) || a.is.num(t.key) ? t.key : t.ctrl.id, ref: r.ref }),
                      )
                    : r;
            }),
        );
    };
    return 3 == arguments.length ? [N, b.start, b.stop] : N;
}
function ej(e, t) {
    var n = t.key,
        r = t.keys,
        i = void 0 === r ? n : r;
    return a.is.und(i) ? e : a.is.fun(i) ? e.map(i) : a.toArray(i);
}
function eH(e) {
    return (0, e.children)(eM(g(e, ["children"])));
}
function eY(e) {
    var t = e.items,
        n = e.children,
        r = g(e, ["items", "children"]),
        i = ek(t.length, r);
    return t.map(function (e, t) {
        var r = n(e, t);
        return a.is.fun(r) ? r(i[t]) : r;
    });
}
function eW(e) {
    var t = e.items,
        n = e.children,
        r = g(e, ["items", "children"]);
    return o.createElement(o.Fragment, null, eB(t, r)(n));
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
                s = a.is.arr(i) ? _.AnimatedArray : _.AnimatedValue;
            return _.setAnimated(E(r), s.create(i)), r;
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
    })(es),
    ez = function (e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return new eK(e, n);
    },
    e$ = function (e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return m.deprecateInterpolate(), new eK(e, n);
    };
a.Globals.assign({
    createStringInterpolator: A.createStringInterpolator,
    to: function (e, t) {
        return new eK(e, t);
    },
});
var eq = function () {
    return a.Globals.frameLoop.advance();
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
    (t.Controller = ey),
    (t.FrameValue = es),
    (t.Interpolation = eK),
    (t.Spring = eH),
    (t.SpringContext = eL),
    (t.SpringHandle = ex),
    (t.SpringValue = e_),
    (t.Trail = eY),
    (t.Transition = eW),
    (t.config = y),
    (t.inferTo = Y),
    (t.interpolate = e$),
    (t.to = ez),
    (t.update = eq),
    (t.useChain = T),
    (t.useSpring = eM),
    (t.useSprings = eP),
    (t.useTrail = ek),
    (t.useTransition = eB);
