function i(e) {
    return e && 'object' == typeof e && 'default' in e ? e.default : e;
}
Object.defineProperty(t, '__esModule', { value: !0 });
var r = n(985445),
    a = n(698091),
    s = i(n(271491)),
    o = n(192379),
    l = i(n(356165)),
    u = i(n(79343)),
    c = i(n(355586)),
    d = i(n(21217)),
    f = n(857967),
    _ = n(239189),
    p = n(812028),
    h = i(n(91119)),
    m = n(640809),
    g = i(n(532825)),
    E = i(n(719427)),
    v = n(179237),
    y = n(467568);
function I(e, t, n) {
    void 0 === n && (n = 1000),
        r.useLayoutEffect(function () {
            if (t) {
                var i = 0;
                a.each(e, function (e, r) {
                    if (e.current) {
                        var s = e.current.controllers;
                        if (s.length) {
                            var o = n * t[r];
                            isNaN(o) ? (o = i) : (i = o),
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
                var r = Promise.resolve();
                a.each(e, function (e) {
                    var t = e.current || {},
                        n = t.controllers,
                        i = t.start;
                    if (n && n.length) {
                        var s = n.map(function (e) {
                            var t = e.queue;
                            return (e.queue = []), t;
                        });
                        r = r.then(function () {
                            return (
                                a.each(n, function (e, t) {
                                    var n;
                                    return (n = e.queue).push.apply(n, s[t]);
                                }),
                                i()
                            );
                        });
                    }
                });
            }
        });
}
var b = {
        default: {
            tension: 170,
            friction: 26
        },
        gentle: {
            tension: 120,
            friction: 14
        },
        wobbly: {
            tension: 180,
            friction: 12
        },
        stiff: {
            tension: 210,
            friction: 20
        },
        slow: {
            tension: 280,
            friction: 60
        },
        molasses: {
            tension: 280,
            friction: 120
        }
    },
    T = function (e) {
        return e;
    },
    S = s(
        s({}, b.default),
        {},
        {
            mass: 1,
            damping: 1,
            easing: T,
            clamp: !1
        }
    ),
    A = function () {
        (this.tension = void 0), (this.friction = void 0), (this.frequency = void 0), (this.damping = void 0), (this.mass = void 0), (this.velocity = 0), (this.restVelocity = void 0), (this.precision = void 0), (this.progress = void 0), (this.duration = void 0), (this.easing = void 0), (this.clamp = void 0), (this.bounce = void 0), (this.decay = void 0), (this.round = void 0), Object.assign(this, S);
    };
function N(e, t, n) {
    for (var i in (n && (C((n = s({}, n)), t), (t = s(s({}, n), t))), C(e, t), Object.assign(e, t), S)) null == e[i] && (e[i] = S[i]);
    var r = e.mass,
        o = e.frequency,
        l = e.damping;
    return a.is.und(o) || (o < 0.01 && (o = 0.01), l < 0 && (l = 0), (e.tension = Math.pow((2 * Math.PI) / o, 2) * r), (e.friction = (4 * Math.PI * l * r) / o)), e;
}
function C(e, t) {
    if (a.is.und(t.decay)) {
        var n = !a.is.und(t.tension) || !a.is.und(t.friction);
        (!n && a.is.und(t.frequency) && a.is.und(t.damping) && a.is.und(t.mass)) || ((e.duration = void 0), (e.decay = void 0)), n && (e.frequency = void 0);
    } else e.duration = void 0;
}
var R = [],
    O = function () {
        (this.changed = !1), (this.values = R), (this.toValues = null), (this.fromValues = R), (this.to = void 0), (this.from = void 0), (this.config = new A()), (this.immediate = !1), (this.onStart = void 0), (this.onChange = void 0), (this.onRest = []);
    };
function D(e) {
    var t = 0;
    if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (e = x(e)))
            return function () {
                return t >= e.length
                    ? { done: !0 }
                    : {
                          done: !1,
                          value: e[t++]
                      };
            };
        throw TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    return (t = e[Symbol.iterator]()).next.bind(t);
}
function x(e, t) {
    if (e) {
        if ('string' == typeof e) return L(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (('Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n)) return Array.from(e);
        if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return L(e, t);
    }
}
function L(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
    return i;
}
var P = function (e, t) {
    return p.useMemoOne(e, t || [{}]);
};
function w(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
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
    B = function (e, t, n) {
        void 0 === t && (t = []), void 0 === n && (n = {});
        var i = F;
        e.default && !0 !== e.default && (i = Object.keys((e = e.default)));
        for (var r, s = D(i); !(r = s()).done; ) {
            var o = r.value,
                l = e[o];
            a.is.und(l) || t.includes(o) || (n[o] = l);
        }
        return n;
    },
    Z = function (e, t, n) {
        return B(t, n, e);
    },
    F = ['pause', 'cancel', 'config', 'immediate', 'onDelayEnd', 'onProps', 'onStart', 'onChange', 'onRest'],
    V = {
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
        parentId: 1
    };
function j(e) {
    var t = {},
        n = 0;
    if (
        (a.each(e, function (e, i) {
            !V[i] && ((t[i] = e), n++);
        }),
        n)
    )
        return t;
}
function H(e) {
    var t = j(e);
    if (t) {
        var n = { to: t };
        return (
            a.each(e, function (e, i) {
                return i in t || (n[i] = e);
            }),
            n
        );
    }
    return s({}, e);
}
function Y(e) {
    var t = a.getFluidConfig(e);
    return t
        ? Y(t.get())
        : a.is.arr(e)
          ? e.map(Y)
          : a.isAnimatedString(e)
            ? _.createStringInterpolator({
                  range: [0, 1],
                  output: [e, e]
              })(1)
            : e;
}
function W(e, t) {
    var n = t.key,
        i = t.props,
        r = t.state,
        o = t.actions;
    return new Promise(function (t, l) {
        var u,
            c,
            d = !1,
            f = M(i.cancel, n);
        function _() {
            r.resumeQueue.add(p), c.cancel(), (u = c.time - a.Globals.now());
        }
        function p() {
            u > 0 ? (r.pauseQueue.add(_), (c = a.Globals.frameLoop.setTimeout(h, u))) : h();
        }
        function h() {
            r.pauseQueue.delete(_), e <= (r.cancelId || 0) && (f = !0);
            try {
                o.start(
                    s(
                        s({}, i),
                        {},
                        {
                            callId: e,
                            delay: u,
                            cancel: f,
                            pause: d
                        }
                    ),
                    t
                );
            } catch (e) {
                l(e);
            }
        }
        f ? h() : ((u = w(i.delay || 0, n)), (d = M(i.pause, n)) ? (r.resumeQueue.add(p), o.pause()) : (o.resume(), p()));
    });
}
var K = function (e, t) {
        return 1 == t.length
            ? t[0]
            : t.some(function (e) {
                    return e.cancelled;
                })
              ? Q(e)
              : t.every(function (e) {
                      return e.noop;
                  })
                ? z(e)
                : q(
                      e,
                      t.every(function (e) {
                          return e.finished;
                      })
                  );
    },
    z = function (e, t) {
        return (
            void 0 === t && (t = e.get()),
            {
                value: t,
                noop: !0,
                finished: !0,
                target: e
            }
        );
    },
    q = function (e, t, n) {
        return (
            void 0 === n && (n = e.get()),
            {
                value: n,
                finished: t,
                target: e
            }
        );
    },
    Q = function (e, t) {
        return (
            void 0 === t && (t = e.get()),
            {
                value: t,
                cancelled: !0,
                target: e
            }
        );
    };
function X(e) {
    var t = 0;
    if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (e = J(e)))
            return function () {
                return t >= e.length
                    ? { done: !0 }
                    : {
                          done: !1,
                          value: e[t++]
                      };
            };
        throw TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    return (t = e[Symbol.iterator]()).next.bind(t);
}
function J(e, t) {
    if (e) {
        if ('string' == typeof e) return $(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (('Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n)) return Array.from(e);
        if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $(e, t);
    }
}
function $(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
    return i;
}
function ee(e, t, n, i) {
    return et.apply(this, arguments);
}
function et() {
    return (et = u(
        l.mark(function e(t, n, i, r) {
            var o, c, d, f, p;
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
                            if (((o = n.callId), (c = n.parentId), (d = n.onRest), (f = i.asyncTo), (p = i.promise), !(!c && t === f && !n.reset))) {
                                e.next = 7;
                                break;
                            }
                            return e.abrupt('return', p);
                        case 7:
                            return e.abrupt(
                                'return',
                                (i.promise = u(
                                    l.mark(function e() {
                                        var h, m, g, E, v, y, I, b, T;
                                        return l.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return (
                                                                (i.asyncId = o),
                                                                (i.asyncTo = t),
                                                                (h = B(n, ['onRest'])),
                                                                (E = new Promise(function (e, t) {
                                                                    return (m = e), (g = t);
                                                                })),
                                                                (v = function (e) {
                                                                    return function () {
                                                                        var t = function (e) {
                                                                            throw (e instanceof ei && g(e), e);
                                                                        };
                                                                        try {
                                                                            return e.apply(void 0, arguments).catch(t);
                                                                        } catch (e) {
                                                                            t(e);
                                                                        }
                                                                    };
                                                                }),
                                                                (y = function (e) {
                                                                    var t = (o <= (i.cancelId || 0) && Q(r)) || (o !== i.asyncId && q(r, !1));
                                                                    if (t) throw ((e.result = t), e);
                                                                }),
                                                                (I = v(function (e, t) {
                                                                    var n = new ei();
                                                                    y(n);
                                                                    var c = a.is.obj(e) ? s({}, e) : s(s({}, t), {}, { to: e });
                                                                    return (
                                                                        (c.parentId = o),
                                                                        a.each(h, function (e, t) {
                                                                            a.is.und(c[t]) && (c[t] = e);
                                                                        }),
                                                                        r.start(c).then(
                                                                            (function () {
                                                                                var e = u(
                                                                                    l.mark(function e(t) {
                                                                                        return l.wrap(function (e) {
                                                                                            for (;;)
                                                                                                switch ((e.prev = e.next)) {
                                                                                                    case 0:
                                                                                                        if ((y(n), !r.is('PAUSED'))) {
                                                                                                            e.next = 4;
                                                                                                            break;
                                                                                                        }
                                                                                                        return (
                                                                                                            (e.next = 4),
                                                                                                            new Promise(function (e) {
                                                                                                                i.resumeQueue.add(e);
                                                                                                            })
                                                                                                        );
                                                                                                    case 4:
                                                                                                        return e.abrupt('return', t);
                                                                                                    case 5:
                                                                                                    case 'end':
                                                                                                        return e.stop();
                                                                                                }
                                                                                        }, e);
                                                                                    })
                                                                                );
                                                                                return function (t) {
                                                                                    return e.apply(this, arguments);
                                                                                };
                                                                            })()
                                                                        )
                                                                    );
                                                                })),
                                                                (e.prev = 7),
                                                                a.is.arr(t)
                                                                    ? (T = (function () {
                                                                          var e = u(
                                                                              l.mark(function e(t) {
                                                                                  var n, i, r;
                                                                                  return l.wrap(function (e) {
                                                                                      for (;;)
                                                                                          switch ((e.prev = e.next)) {
                                                                                              case 0:
                                                                                                  n = X(t);
                                                                                              case 1:
                                                                                                  if ((i = n()).done) {
                                                                                                      e.next = 7;
                                                                                                      break;
                                                                                                  }
                                                                                                  return (r = i.value), (e.next = 5), I(r);
                                                                                              case 5:
                                                                                                  e.next = 1;
                                                                                                  break;
                                                                                              case 7:
                                                                                              case 'end':
                                                                                                  return e.stop();
                                                                                          }
                                                                                  }, e);
                                                                              })
                                                                          );
                                                                          return function (t) {
                                                                              return e.apply(this, arguments);
                                                                          };
                                                                      })()(t))
                                                                    : a.is.fun(t) && (T = Promise.resolve(t(I, r.stop.bind(r)))),
                                                                (e.next = 11),
                                                                Promise.all([T.then(m), E])
                                                            );
                                                        case 11:
                                                            (b = q(r, !0)), (e.next = 21);
                                                            break;
                                                        case 14:
                                                            if (((e.prev = 14), (e.t0 = e.catch(7)), !(e.t0 instanceof ei))) {
                                                                e.next = 20;
                                                                break;
                                                            }
                                                            (b = e.t0.result), (e.next = 21);
                                                            break;
                                                        case 20:
                                                            throw e.t0;
                                                        case 21:
                                                            return (e.prev = 21), o == i.asyncId && ((i.asyncId = c), (i.asyncTo = c ? f : void 0), (i.promise = c ? p : void 0)), e.finish(21);
                                                        case 24:
                                                            return (
                                                                a.is.fun(d) &&
                                                                    _.batchedUpdates(function () {
                                                                        d(b);
                                                                    }),
                                                                e.abrupt('return', b)
                                                            );
                                                        case 26:
                                                        case 'end':
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            null,
                                            [[7, 14, 21, 24]]
                                        );
                                    })
                                )())
                            );
                        case 8:
                        case 'end':
                            return e.stop();
                    }
            }, e);
        })
    )).apply(this, arguments);
}
function en(e, t) {
    (e.cancelId = t), (e.asyncId = e.asyncTo = e.promise = void 0);
}
var ei = (function (e) {
        function t() {
            var t;
            return ((t = e.call(this, 'An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.') || this).result = void 0), t;
        }
        return d(t, e), t;
    })(h(Error)),
    er = function (e) {
        return e instanceof es;
    },
    ea = 1,
    es = (function (e) {
        function t() {
            for (var t, n = arguments.length, i = Array(n), r = 0; r < n; r++) i[r] = arguments[r];
            return ((t = e.call.apply(e, [this].concat(i)) || this).id = ea++), (t.key = void 0), (t._priority = 0), (t._children = new Set()), t;
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
                return _.to(this, t);
            }),
            (n.interpolate = function () {
                m.deprecateInterpolate();
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return _.to(this, t);
            }),
            (n.addChild = function (e) {
                this._children.size || this._attach(), this._children.add(e);
            }),
            (n.removeChild = function (e) {
                this._children.delete(e), this._children.size || this._detach();
            }),
            (n.onParentChange = function (e) {
                var t = e.type;
                this.idle ? 'start' == t && (this._reset(), this._start()) : 'reset' == t && this._reset();
            }),
            (n._attach = function () {}),
            (n._detach = function () {}),
            (n._reset = function () {
                this._emit({
                    type: 'reset',
                    parent: this
                });
            }),
            (n._start = function () {
                this._emit({
                    type: 'start',
                    parent: this
                });
            }),
            (n._onChange = function (e, t) {
                void 0 === t && (t = !1),
                    this._emit({
                        type: 'change',
                        parent: this,
                        value: e,
                        idle: t
                    });
            }),
            (n._onPriorityChange = function (e) {
                this.idle || _.frameLoop.start(this),
                    this._emit({
                        type: 'priority',
                        parent: this,
                        priority: e
                    });
            }),
            (n._emit = function (e) {
                a.each(Array.from(this._children), function (t) {
                    t.onParentChange(e);
                });
            }),
            c(t, [
                {
                    key: 'priority',
                    get: function () {
                        return this._priority;
                    },
                    set: function (e) {
                        this._priority != e && ((this._priority = e), this._onPriorityChange(e));
                    }
                }
            ]),
            t
        );
    })(a.FluidValue),
    eo = 'CREATED',
    el = 'IDLE',
    eu = 'ACTIVE',
    ec = 'PAUSED',
    ed = 'DISPOSED',
    ef = (function (e) {
        function t(t, n) {
            var i;
            if (
                (((i = e.call(this) || this).key = void 0),
                (i.animation = new O()),
                (i.queue = void 0),
                (i._phase = eo),
                (i._state = {
                    pauseQueue: new Set(),
                    resumeQueue: new Set()
                }),
                (i._defaultProps = {}),
                (i._lastCallId = 0),
                (i._lastToId = 0),
                !a.is.und(t) || !a.is.und(n))
            ) {
                var r = a.is.obj(t) ? s({}, t) : s(s({}, n), {}, { from: t });
                (r.default = !0), i.start(r);
            }
            return i;
        }
        d(t, e);
        var n = t.prototype;
        return (
            (n.advance = function (e) {
                var t = this,
                    n = !0,
                    i = !1,
                    r = this.animation,
                    s = r.config,
                    o = r.toValues,
                    l = f.getPayload(r.to);
                if (!l) {
                    var u = a.getFluidConfig(r.to);
                    u && (o = a.toArray(u.get()));
                }
                return (
                    r.values.forEach(function (u, c) {
                        if (!u.done) {
                            var d = l ? l[c].lastPosition : o[c],
                                f = r.immediate,
                                _ = d;
                            if (!f) {
                                if (((_ = u.lastPosition), s.tension <= 0)) {
                                    u.done = !0;
                                    return;
                                }
                                var p = (u.elapsedTime += e),
                                    h = r.fromValues[c],
                                    m = null != u.v0 ? u.v0 : (u.v0 = a.is.arr(s.velocity) ? s.velocity[c] : s.velocity);
                                if (a.is.und(s.duration)) {
                                    if (s.decay) {
                                        var g = !0 === s.decay ? 0.998 : s.decay,
                                            E = Math.exp(-(1 - g) * p);
                                        (_ = h + (m / (1 - g)) * (1 - E)), (f = 0.1 > Math.abs(u.lastPosition - _)), (v = m * E);
                                    } else {
                                        v = null == u.lastVelocity ? m : u.lastVelocity;
                                        for (var v, y = s.precision || (h == d ? 0.005 : Math.min(1, 0.001 * Math.abs(d - h))), I = s.restVelocity || y / 10, b = s.clamp ? 0 : s.bounce, T = !a.is.und(b), S = h == d ? u.v0 > 0 : h < d, A = !1, N = 1, C = Math.ceil(e / 1), R = 0; R < C && !(!(Math.abs(v) > I) && (f = Math.abs(d - _) <= y)); ++R) {
                                            T && (A = _ == d || _ > d == S) && ((v = -v * b), (_ = d));
                                            var O = (-(0.000001 * s.tension) * (_ - d) + -(0.001 * s.friction) * v) / s.mass;
                                            (v += O * N), (_ += v * N);
                                        }
                                    }
                                } else {
                                    var D = s.progress || 0;
                                    s.duration <= 0 ? (D = 1) : (D += (1 - D) * Math.min(1, p / s.duration)), (v = ((_ = h + s.easing(D) * (d - h)) - u.lastPosition) / e), (f = 1 == D);
                                }
                                (u.lastVelocity = v), Number.isNaN(_) && (console.warn('Got NaN while animating:', t), (f = !0));
                            }
                            l && !l[c].done && (f = !1), f ? (u.done = !0) : (n = !1), u.setValue(_, s.round) && (i = !0);
                        }
                    }),
                    n ? this.finish() : i && this._onChange(this.get()),
                    n
                );
            }),
            (n.is = function (e) {
                return this._phase == e;
            }),
            (n.set = function (e) {
                var t = this;
                return (
                    _.batchedUpdates(function () {
                        if ((t._focus(e), t._set(e) && !t.is(eu))) return t._onChange(t.get(), !0);
                        t._stop();
                    }),
                    this
                );
            }),
            (n.pause = function () {
                e_(this, 'pause'),
                    this.is(ec) ||
                        ((this._phase = ec),
                        a.flush(this._state.pauseQueue, function (e) {
                            return e();
                        }));
            }),
            (n.resume = function () {
                e_(this, 'resume'),
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
                        _.batchedUpdates(function () {
                            !n.changed && ((n.changed = !0), n.onStart && n.onStart(t)), t._stop();
                        });
                }
                return this;
            }),
            (n.update = function (e) {
                return e_(this, 'update'), (this.queue || (this.queue = [])).push(e), this;
            }),
            (n.start = (function () {
                var e = u(
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
                                                e_(this, 'start'),
                                                a.is.und(t) ? ((i = this.queue || []), (this.queue = [])) : (i = [a.is.obj(t) ? t : s(s({}, n), {}, { to: t })]),
                                                (e.next = 4),
                                                Promise.all(
                                                    i.map(function (e) {
                                                        return o._update(e);
                                                    })
                                                )
                                            );
                                        case 4:
                                            return (r = e.sent), e.abrupt('return', K(this, r));
                                        case 6:
                                        case 'end':
                                            return e.stop();
                                    }
                            },
                            e,
                            this
                        );
                    })
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
                        _.batchedUpdates(function () {
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
                e.prototype.onParentChange.call(this, t), 'change' == t.type ? this.is(eu) || (this._reset(), this.is(ec) || this._start()) : 'priority' == t.type && (this.priority = t.priority + 1);
            }),
            (n._prepareNode = function (e) {
                var t = e.to,
                    n = e.from,
                    i = e.reverse,
                    r = this.key || '',
                    s = {
                        to: (t = !a.is.obj(t) || a.getFluidConfig(t) ? t : t[r]),
                        from: (n = !a.is.obj(n) || a.getFluidConfig(n) ? n : n[r])
                    };
                if (this.is(eo)) {
                    if (i) {
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
                return t ? t.constructor : a.is.arr(e) ? f.AnimatedArray : a.isAnimatedString(e) ? f.AnimatedString : f.AnimatedValue;
            }),
            (n._update = function (e, t) {
                var n = this,
                    i = this._defaultProps,
                    r = function (t) {
                        var n = G(e, t);
                        a.is.und(n) || (i[t] = n), i[t] && (e[t] = i[t]);
                    };
                r('cancel'), r('pause');
                var s = this._prepareNode(e);
                return W(++this._lastCallId, {
                    key: this.key,
                    props: e,
                    state: this._state,
                    actions: {
                        pause: this.pause.bind(this),
                        resume: this.resume.bind(this),
                        start: this._merge.bind(this, s)
                    }
                }).then(function (i) {
                    if (e.loop && i.finished && !(t && i.noop)) {
                        var r = em(e);
                        if (r) return n._update(r, !0);
                    }
                    return i;
                });
            }),
            (n._merge = function (e, t, n) {
                if (t.cancel) return this.stop(!0), n(Q(this));
                var i = this.key,
                    r = this.animation,
                    s = this._defaultProps,
                    o = !a.is.und(e.to),
                    l = !a.is.und(e.from);
                if (o || l) {
                    if (!(t.callId > this._lastToId)) return n(Q(this));
                    this._lastToId = t.callId;
                }
                var u = function (e) {
                        return a.is.und(t[e]) ? s[e] : t[e];
                    },
                    c = ep(u('onDelayEnd'), i);
                c && c(t, this), t.default && Z(s, t, ['pause', 'cancel']);
                var d = r.to,
                    p = r.from,
                    h = e.to,
                    m = void 0 === h ? d : h,
                    g = e.from,
                    E = void 0 === g ? p : g;
                if ((l && !o && (m = E), t.reverse)) {
                    var v = [E, m];
                    (m = v[0]), (E = v[1]);
                }
                var y = !a.isEqual(E, p);
                y && (r.from = E);
                var I = !a.isEqual(m, d);
                I && this._focus(m);
                var b = a.getFluidConfig(m),
                    T = a.getFluidConfig(E);
                T && (E = T.get());
                var S = a.is.arr(t.to) || a.is.fun(t.to),
                    A = r.config,
                    C = A.decay,
                    R = A.velocity;
                t.config && !S && N(A, w(t.config, i), t.config !== s.config ? w(s.config, i) : void 0);
                var O = f.getAnimated(this);
                if (!O || a.is.und(m)) return n(q(this, !0));
                var D = a.is.und(t.reset) ? l && !t.default : !a.is.und(E) && M(t.reset, i),
                    x = D ? E : this.get(),
                    L = Y(m),
                    P = a.is.num(L) || a.is.arr(L) || a.isAnimatedString(L),
                    k = !S && (!P || M(s.immediate || t.immediate, i));
                if (I) {
                    if (k) O = this._updateNode(L);
                    else {
                        var U = this._getNodeType(m);
                        if (U !== O.constructor) throw Error('Cannot animate between ' + O.constructor.name + ' and ' + U.name + ', as the "to" prop suggests');
                    }
                }
                var G = O.constructor,
                    B = !!b,
                    F = !1;
                if (!B) {
                    var V = D || (this.is(eo) && y);
                    (I || V) && (B = !(F = a.isEqual(Y(x), L))), (a.isEqual(A.decay, C) && a.isEqual(A.velocity, R)) || (B = !0);
                }
                if ((F && this.is(eu) && (r.changed && !D ? (B = !0) : B || this._stop()), !S)) {
                    (B || a.getFluidConfig(d)) && ((r.values = O.getPayload()), (r.toValues = b ? null : G == f.AnimatedString ? [1] : a.toArray(L))), (r.immediate = k), (r.onStart = ep(u('onStart'), i)), (r.onChange = ep(u('onChange'), i));
                    var j = r.onRest,
                        H = D && !t.onRest ? j[0] || a.noop : eh(ep(u('onRest'), i), this);
                    if (B) {
                        r.onRest = [H, eh(n, this)];
                        var W = D ? 0 : 1;
                        W < j.length &&
                            _.batchedUpdates(function () {
                                for (; W < j.length; W++) j[W]();
                            });
                    } else (D || t.onRest) && (r.onRest[0] = H);
                }
                var K = ep(u('onProps'), i);
                if ((K && K(t, this), D && O.setValue(x), S)) n(ee(t.to, t, this._state, this));
                else if (B) D && (this._phase = el), this._reset(), this._start();
                else if (this.is(eu) && !I) r.onRest.push(eh(n, this));
                else {
                    let e = z(this, x),
                        t = ep(u('onNoopRest'), i);
                    null != t && t(e), n(e);
                }
            }),
            (n._focus = function (e) {
                var t = this.animation;
                if (e !== t.to) {
                    var n = a.getFluidConfig(t.to);
                    n && n.removeChild(this), (t.to = e);
                    var i = 0;
                    (n = a.getFluidConfig(e)) && (n.addChild(this), er(e) && (i = (e.priority || 0) + 1)), (this.priority = i);
                }
            }),
            (n._set = function (e) {
                var t = a.getFluidConfig(e);
                t && (e = t.get());
                var n = f.getAnimated(this),
                    i = n && n.getValue();
                return n ? n.setValue(e) : this._updateNode(e), !a.isEqual(e, i);
            }),
            (n._onChange = function (t, n) {
                void 0 === n && (n = !1);
                var i = this.animation;
                i.changed || n || ((i.changed = !0), i.onStart && i.onStart(this)), i.onChange && i.onChange(t, this), e.prototype._onChange.call(this, t, n);
            }),
            (n._reset = function () {
                var t = this.animation;
                f.getAnimated(this).reset(t.to),
                    this.is(eu) || (t.changed = !1),
                    t.immediate ||
                        (t.fromValues = t.values.map(function (e) {
                            return e.lastPosition;
                        })),
                    e.prototype._reset.call(this);
            }),
            (n._start = function () {
                this.is(eu) || ((this._phase = eu), e.prototype._start.call(this), _.skipAnimation ? this.finish() : _.frameLoop.start(this));
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
                    key: 'idle',
                    get: function () {
                        return !this.is(eu) && !this._state.asyncTo;
                    }
                },
                {
                    key: 'goal',
                    get: function () {
                        return a.getFluidValue(this.animation.to);
                    }
                },
                {
                    key: 'velocity',
                    get: function () {
                        var e = f.getAnimated(this);
                        return e instanceof f.AnimatedValue
                            ? e.lastVelocity || 0
                            : e.getPayload().map(function (e) {
                                  return e.lastVelocity || 0;
                              });
                    }
                }
            ]),
            t
        );
    })(es);
function e_(e, t) {
    if (e.is(ed)) throw Error('Cannot call "' + t + '" of disposed "' + e.constructor.name + '" object');
}
function ep(e, t) {
    return a.is.fun(e) ? e : t && e ? e[t] : void 0;
}
var eh = function (e, t) {
    var n = t.animation.to;
    return e
        ? function (i) {
              if (i) e(Q(t));
              else {
                  var r = Y(n),
                      s = Y(t.get());
                  e(q(t, a.isEqual(s, r)));
              }
          }
        : a.noop;
};
function em(e, t, n) {
    void 0 === t && (t = e.loop), void 0 === n && (n = e.to);
    var i = w(t);
    if (i) {
        var r = !0 !== i && H(i),
            o = (r || e).reverse,
            l = !r || r.reset;
        return eg(
            s(
                s({}, e),
                {},
                {
                    loop: t,
                    default: !1,
                    to: !o || a.is.arr(n) || a.is.fun(n) ? n : void 0,
                    from: l ? e.from : void 0,
                    reset: l
                },
                r
            )
        );
    }
}
function eg(e) {
    var t = (e = H(e)),
        n = t.to,
        i = t.from,
        r = new Set();
    return i ? ev(i, r) : delete e.from, a.is.obj(n) ? ev(n, r) : n || delete e.to, (e.keys = r.size ? Array.from(r) : null), e;
}
function eE(e) {
    var t = eg(e);
    return a.is.und(t.default) && (t.default = B(t, [!0 === t.immediate && 'immediate'])), t;
}
function ev(e, t) {
    a.each(e, function (e, n) {
        return null != e && t.add(n);
    });
}
var ey = ['onStart', 'onChange', 'onRest'],
    eI = 1,
    eb = (function () {
        function e(e, t) {
            (this.id = eI++),
                (this.springs = {}),
                (this.queue = []),
                (this._flush = void 0),
                (this._initialProps = void 0),
                (this._phase = eo),
                (this._lastAsyncId = 0),
                (this._active = new Set()),
                (this._state = {
                    pauseQueue: new Set(),
                    resumeQueue: new Set()
                }),
                (this._events = {
                    onStart: new Set(),
                    onChange: new Set(),
                    onRest: new Map()
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
                return (e || (this.queue = []), this._flush) ? this._flush(this, t) : (eO(this, t), eT(this, t));
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
                    i = t.onChange,
                    r = t.onRest,
                    s = this._active.size > 0;
                s &&
                    this._phase != eu &&
                    ((this._phase = eu),
                    a.flush(n, function (t) {
                        return t(e);
                    }));
                var o = (i.size || (!s && r.size)) && this.get();
                a.flush(i, function (e) {
                    return e(o);
                }),
                    s ||
                        ((this._phase = el),
                        a.flush(r, function (e) {
                            var t = e[0],
                                n = e[1];
                            (n.value = o), t(n);
                        }));
            }),
            (t.onParentChange = function (e) {
                'change' == e.type && (this._active[e.idle ? 'delete' : 'add'](e.parent), _.frameLoop.onFrame(this._onFrame));
            }),
            c(e, [
                {
                    key: 'idle',
                    get: function () {
                        return (
                            !this._state.asyncTo &&
                            Object.values(this.springs).every(function (e) {
                                return e.idle;
                            })
                        );
                    }
                }
            ]),
            e
        );
    })();
function eT(e, t) {
    return Promise.all(
        t.map(function (t) {
            return eS(e, t);
        })
    ).then(function (t) {
        return K(e, t);
    });
}
function eS(e, t, n) {
    var i = t.to,
        r = t.loop,
        s = t.onRest;
    r && (t.loop = !1);
    var o = a.is.arr(i) || a.is.fun(i) ? i : void 0;
    o
        ? ((t.to = void 0), (t.onRest = void 0))
        : a.each(ey, function (n) {
              var i = t[n];
              if (a.is.fun(i)) {
                  var r = e._events[n];
                  r instanceof Set
                      ? (t[n] = function () {
                            return r.add(i);
                        })
                      : (t[n] = function (e) {
                            var t = e.finished,
                                n = e.cancelled,
                                a = r.get(i);
                            a
                                ? (t || (a.finished = !1), n && (a.cancelled = !0))
                                : r.set(i, {
                                      value: null,
                                      finished: t,
                                      cancelled: n
                                  });
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
                  W(++e._lastAsyncId, {
                      props: t,
                      state: u,
                      actions: {
                          pause: a.noop,
                          resume: a.noop,
                          start: function (t, n) {
                              (t.onRest = s), t.cancel ? U(t, 'cancel') && en(u, t.callId) : n(ee(o, t, u, e));
                          }
                      }
                  })
              )
            : t.keys || !0 !== t.cancel || en(u, e._lastAsyncId),
        Promise.all(l).then(function (a) {
            var s = K(e, a);
            if (r && s.finished && !(n && s.noop)) {
                var o = em(t, r, i);
                if (o) return eO(e, [o]), eS(e, o, !0);
            }
            return s;
        })
    );
}
function eA(e, t) {
    var n = s({}, e.springs);
    return (
        t &&
            a.each(a.toArray(t), function (e) {
                a.is.und(e.keys) && (e = eg(e)),
                    a.is.obj(e.to) || (e = s(s({}, e), {}, { to: void 0 })),
                    eR(n, e, function (e) {
                        return eC(e);
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
function eC(e, t) {
    var n = new ef();
    return (n.key = e), t && n.addChild(t), n;
}
function eR(e, t, n) {
    t.keys &&
        a.each(t.keys, function (i) {
            (e[i] || (e[i] = n(i)))._prepareNode(t);
        });
}
function eO(e, t) {
    a.each(t, function (t) {
        eR(e.springs, t, function (t) {
            return eC(t, e);
        });
    });
}
var eD = o.createContext({}),
    ex = function (e) {
        var t = e.children,
            n = g(e, ['children']),
            i = o.useContext(eD);
        n = P(
            function () {
                return s(s({}, i), n);
            },
            [i, n.pause, n.cancel, n.immediate, n.config]
        );
        var r = eD.Provider;
        return o.createElement(r, { value: n }, t);
    };
(ex.Provider = eD.Provider), (ex.Consumer = eD.Consumer);
var eL = function () {
        return o.useContext(eD);
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
                            e.update(k(t, n, e));
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
                                                        var i = k(t, n, e);
                                                        return e.start(i);
                                                    })
                                                )
                                            );
                                        case 2:
                                            return (
                                                (i = n.sent),
                                                n.abrupt('return', {
                                                    value: i.map(function (e) {
                                                        return e.value;
                                                    }),
                                                    finished: i.every(function (e) {
                                                        return e.finished;
                                                    })
                                                })
                                            );
                                        case 4:
                                        case 'end':
                                            return n.stop();
                                    }
                            }, n);
                        })
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
                }
            };
        }
    };
function ew(e, t, n) {
    var i = a.is.fun(t) && t;
    i && !n && (n = []);
    var l = o.useRef(0),
        u = a.useForceUpdate(),
        c = o.useState(function () {
            return {
                ctrls: [],
                queue: [],
                flush: function (e, t) {
                    var n = eA(e, t);
                    return !(l.current > 0) ||
                        c.queue.length ||
                        Object.keys(n).some(function (t) {
                            return !e.springs[t];
                        })
                        ? new Promise(function (i) {
                              eN(e, n),
                                  c.queue.push(function () {
                                      i(eT(e, t));
                                  }),
                                  u();
                          })
                        : eT(e, t);
                }
            };
        })[0],
        d = o.useRef(),
        f = [].concat(c.ctrls),
        _ = [],
        p = a.usePrev(e) || 0,
        h = f.slice(e, p);
    function m(e, n) {
        for (var r = e; r < n; r++) {
            var a = f[r] || (f[r] = new eb(null, c.flush)),
                s = i ? i(r, a) : t[r];
            s && ((s = _[r] = eE(s)), 0 == r && ((d.current = s.ref), (s.ref = void 0)));
        }
    }
    P(
        function () {
            (f.length = e), m(p, e);
        },
        [e]
    ),
        P(function () {
            m(0, Math.min(p, e));
        }, n);
    var g = o.useMemo(function () {
            return eP.create(function () {
                return c.ctrls;
            });
        }, []),
        E = f.map(function (e, t) {
            return eA(e, _[t]);
        }),
        v = eL();
    r.useLayoutEffect(function () {
        l.current++, (c.ctrls = f), d.current && (d.current.current = g);
        var e = c.queue;
        e.length &&
            ((c.queue = []),
            a.each(e, function (e) {
                return e();
            })),
            a.each(h, function (e) {
                return e.dispose();
            }),
            a.each(f, function (e, t) {
                eN(e, E[t]), e.start({ default: v });
                var n = _[t];
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
    var y = E.map(function (e) {
        return s({}, e);
    });
    return i || 3 == arguments.length ? [y, g.start, g.stop] : y;
}
function eM(e, t) {
    var n = a.is.fun(e),
        i = ew(1, n ? e : [e], n ? t || [] : t),
        r = i[0][0],
        s = i[1],
        o = i[2];
    return n || 2 == arguments.length ? [r, s, o] : r;
}
function ek(e, t, n) {
    var i = a.is.fun(t) && t;
    i && !n && (n = []);
    var s = [],
        o = ew(
            e,
            function (e, n) {
                return (s[e] = n), k(t, e, n);
            },
            n || [{}]
        );
    if (
        (r.useLayoutEffect(function () {
            for (var e = a.is.obj(t) && t.reverse, n = 0; n < s.length; n++) {
                var i = s[n + (e ? 1 : -1)];
                i && s[n].update({ to: i.springs }).start();
            }
        }, n),
        i || 3 == arguments.length)
    ) {
        var l = o[1];
        return (
            (o[1] = p.useCallbackOne(function (e) {
                var t = a.is.obj(e) && e.reverse;
                return l(function (n, i) {
                    var r = k(e, n, i),
                        a = s[n + (t ? 1 : -1)];
                    return a && (r.to = a.springs), r;
                });
            }, n)),
            o
        );
    }
    return o[0];
}
var eU = 'mount',
    eG = 'enter',
    eB = 'update',
    eZ = 'leave';
function eF(e, t, n) {
    var i = t.ref,
        l = t.reset,
        u = t.sort,
        c = t.trail,
        d = void 0 === c ? 0 : c,
        f = t.expires,
        _ = void 0 === f || f,
        p = a.toArray(e),
        h = [],
        m = eV(p, t),
        g = o.useRef(null),
        E = l ? null : g.current;
    r.useLayoutEffect(function () {
        g.current = h;
    }),
        a.useOnce(function () {
            return function () {
                return a.each(g.current, function (e) {
                    e.expired && clearTimeout(e.expirationId), e.ctrl.dispose();
                });
            };
        });
    var v = [];
    if (
        (E &&
            a.each(E, function (e, t) {
                e.expired ? clearTimeout(e.expirationId) : ~(t = v[t] = m.indexOf(e.key)) && (h[t] = e);
            }),
        a.each(p, function (e, t) {
            h[t] ||
                (h[t] = {
                    key: m[t],
                    item: e,
                    phase: eU,
                    ctrl: new eb()
                });
        }),
        v.length)
    ) {
        var y = -1;
        a.each(v, function (e, n) {
            var i = E[n];
            ~e ? ((y = h.indexOf(i)), (h[y] = s(s({}, i), {}, { item: p[e] }))) : t.leave && h.splice(++y, 0, i);
        });
    }
    a.is.fun(u) &&
        h.sort(function (e, t) {
            return u(e.item, t.item);
        });
    var I = -d,
        b = a.useForceUpdate(),
        T = B(t),
        S = new Map();
    a.each(h, function (e, n) {
        var i,
            r,
            o = e.key,
            l = e.phase;
        if (l == eU) (i = t.enter), (r = eG);
        else {
            var u = 0 > m.indexOf(o);
            if (l != eZ) {
                if (u) (i = t.leave), (r = eZ);
                else {
                    if (!(i = t.update)) return;
                    r = eB;
                }
            } else {
                if (u) return;
                (i = t.enter), (r = eG);
            }
        }
        if (((i = w(i, e.item, n)), !(i = a.is.obj(i) ? H(i) : { to: i }).config)) {
            var c = t.config || T.config;
            i.config = w(c, e.item, n);
        }
        var f = s(
            s({}, T),
            {},
            {
                delay: (I += d),
                reset: !1
            },
            i
        );
        if (r == eG && a.is.und(f.from)) {
            var p = a.is.und(t.initial) || E ? t.from : t.initial;
            f.from = w(p, e.item, n);
        }
        var h = f.onRest;
        f.onRest = f.onNoopRest = function (e) {
            var t = g.current,
                n = t.find(function (e) {
                    return e.key === o;
                });
            if (n) {
                if ((a.is.fun(h) && !0 !== e.noop && h(e, n), e.cancelled && n.phase != eB)) {
                    n.phase = l;
                    return;
                }
                if (n.ctrl.idle) {
                    var i = t.every(function (e) {
                        return e.ctrl.idle;
                    });
                    if (n.phase == eZ) {
                        var r = w(_, n.item);
                        if (!1 !== r) {
                            var s = !0 === r ? 0 : r;
                            if (((n.expired = !0), !i && s > 0)) {
                                s <= 2147483647 && (n.expirationId = setTimeout(b, s));
                                return;
                            }
                        }
                    }
                    i &&
                        t.some(function (e) {
                            return e.expired;
                        }) &&
                        b();
                }
            }
        };
        var v = eA(e.ctrl, f);
        S.set(e, {
            phase: r,
            springs: v,
            payload: f
        });
    });
    var A = eL();
    r.useLayoutEffect(
        function () {
            a.each(h, function (e) {
                e.ctrl.start({ default: A });
            });
        },
        [A]
    );
    var N = o.useMemo(function () {
        return eP.create(function () {
            return g.current.map(function (e) {
                return e.ctrl;
            });
        });
    }, []);
    o.useImperativeHandle(i, function () {
        return N;
    }),
        r.useLayoutEffect(
            function () {
                a.each(S, function (e, t) {
                    var n = e.phase,
                        r = e.springs,
                        a = e.payload;
                    eN(t.ctrl, r), A.cancel || ((t.phase = n), n == eG && t.ctrl.start({ default: A }), t.ctrl[i ? 'update' : 'start'](a));
                });
            },
            l ? void 0 : n
        );
    var C = function (e) {
        return o.createElement(
            o.Fragment,
            null,
            h.map(function (t, n) {
                var i = e(s({}, (S.get(t) || t.ctrl).springs), t.item, t, n);
                return i && i.type
                    ? o.createElement(
                          i.type,
                          s({}, i.props, {
                              key: a.is.str(t.key) || a.is.num(t.key) ? t.key : t.ctrl.id,
                              ref: i.ref
                          })
                      )
                    : i;
            })
        );
    };
    return 3 == arguments.length ? [C, N.start, N.stop] : C;
}
function eV(e, t) {
    var n = t.key,
        i = t.keys,
        r = void 0 === i ? n : i;
    return a.is.und(r) ? e : a.is.fun(r) ? e.map(r) : a.toArray(r);
}
function ej(e) {
    return (0, e.children)(eM(g(e, ['children'])));
}
function eH(e) {
    var t = e.items,
        n = e.children,
        i = g(e, ['items', 'children']),
        r = ek(t.length, i);
    return t.map(function (e, t) {
        var i = n(e, t);
        return a.is.fun(i) ? i(r[t]) : i;
    });
}
function eY(e) {
    var t = e.items,
        n = e.children,
        i = g(e, ['items', 'children']);
    return o.createElement(o.Fragment, null, eF(t, i)(n));
}
var eW = (function (e) {
        function t(t, n) {
            ((i = e.call(this) || this).source = t), (i.key = void 0), (i.idle = !0), (i.calc = void 0), (i.calc = a.createInterpolator.apply(void 0, n));
            var i,
                r = i._get(),
                s = a.is.arr(r) ? f.AnimatedArray : f.AnimatedValue;
            return f.setAnimated(E(i), s.create(r)), i;
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
                (this.idle = !1), e.prototype._start.call(this), _.skipAnimation ? ((this.idle = !0), this.advance()) : _.frameLoop.start(this);
            }),
            (n._attach = function () {
                var e = this,
                    t = !0,
                    n = 1;
                a.each(a.toArray(this.source), function (i) {
                    er(i) && (i.idle || (t = !1), (n = Math.max(n, i.priority + 1))), i.addChild(e);
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
                'start' == t.type
                    ? this.advance()
                    : 'change' == t.type
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
                      : 'priority' == t.type &&
                        (this.priority = a.toArray(this.source).reduce(function (e, t) {
                            return Math.max(e, (t.priority || 0) + 1);
                        }, 0)),
                    e.prototype.onParentChange.call(this, t);
            }),
            t
        );
    })(es),
    eK = function (e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
        return new eW(e, n);
    },
    ez = function (e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
        return m.deprecateInterpolate(), new eW(e, n);
    };
a.Globals.assign({
    createStringInterpolator: v.createStringInterpolator,
    to: function (e, t) {
        return new eW(e, t);
    }
});
var eq = function () {
    return a.Globals.frameLoop.advance();
};
Object.keys(y).forEach(function (e) {
    'default' !== e &&
        Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
                return y[e];
            }
        });
}),
    Object.defineProperty(t, 'FrameLoop', {
        enumerable: !0,
        get: function () {
            return a.FrameLoop;
        }
    }),
    Object.defineProperty(t, 'Globals', {
        enumerable: !0,
        get: function () {
            return a.Globals;
        }
    }),
    Object.defineProperty(t, 'createInterpolator', {
        enumerable: !0,
        get: function () {
            return a.createInterpolator;
        }
    }),
    (t.BailSignal = ei),
    (t.Controller = eb),
    (t.FrameValue = es),
    (t.Interpolation = eW),
    (t.Spring = ej),
    (t.SpringContext = ex),
    (t.SpringHandle = eP),
    (t.SpringValue = ef),
    (t.Trail = eH),
    (t.Transition = eY),
    (t.config = b),
    (t.inferTo = H),
    (t.interpolate = ez),
    (t.to = eK),
    (t.update = eq),
    (t.useChain = I),
    (t.useSpring = eM),
    (t.useSprings = ew),
    (t.useTrail = ek),
    (t.useTransition = eF);
