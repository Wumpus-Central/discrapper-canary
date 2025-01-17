function i(e) {
    return e && 'object' == typeof e && 'default' in e ? e.default : e;
}
Object.defineProperty(n, '__esModule', { value: !0 });
var a = r(985445),
    s = r(698091),
    o = i(r(271491)),
    l = r(192379),
    u = i(r(356165)),
    c = i(r(79343)),
    d = i(r(355586)),
    f = i(r(21217)),
    _ = r(857967),
    h = r(239189),
    p = r(812028),
    m = i(r(91119)),
    g = r(640809),
    E = i(r(532825)),
    v = i(r(719427)),
    I = r(179237),
    T = r(467568);
function b(e, n, r) {
    void 0 === r && (r = 1000),
        a.useLayoutEffect(function () {
            if (n) {
                var i = 0;
                s.each(e, function (e, a) {
                    if (e.current) {
                        var o = e.current.controllers;
                        if (o.length) {
                            var l = r * n[a];
                            isNaN(l) ? (l = i) : (i = l),
                                s.each(o, function (e) {
                                    s.each(e.queue, function (e) {
                                        e.delay = l + (e.delay || 0);
                                    }),
                                        e.start();
                                });
                        }
                    }
                });
            } else {
                var a = Promise.resolve();
                s.each(e, function (e) {
                    var n = e.current || {},
                        r = n.controllers,
                        i = n.start;
                    if (r && r.length) {
                        var o = r.map(function (e) {
                            var n = e.queue;
                            return (e.queue = []), n;
                        });
                        a = a.then(function () {
                            return (
                                s.each(r, function (e, n) {
                                    var r;
                                    return (r = e.queue).push.apply(r, o[n]);
                                }),
                                i()
                            );
                        });
                    }
                });
            }
        });
}
var y = {
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
    S = function (e) {
        return e;
    },
    A = o(
        o({}, y.default),
        {},
        {
            mass: 1,
            damping: 1,
            easing: S,
            clamp: !1
        }
    ),
    N = function () {
        (this.tension = void 0), (this.friction = void 0), (this.frequency = void 0), (this.damping = void 0), (this.mass = void 0), (this.velocity = 0), (this.restVelocity = void 0), (this.precision = void 0), (this.progress = void 0), (this.duration = void 0), (this.easing = void 0), (this.clamp = void 0), (this.bounce = void 0), (this.decay = void 0), (this.round = void 0), Object.assign(this, A);
    };
function C(e, n, r) {
    for (var i in (r && (R((r = o({}, r)), n), (n = o(o({}, r), n))), R(e, n), Object.assign(e, n), A)) null == e[i] && (e[i] = A[i]);
    var a = e.mass,
        l = e.frequency,
        u = e.damping;
    return !s.is.und(l) && (l < 0.01 && (l = 0.01), u < 0 && (u = 0), (e.tension = Math.pow((2 * Math.PI) / l, 2) * a), (e.friction = (4 * Math.PI * u * a) / l)), e;
}
function R(e, n) {
    if (s.is.und(n.decay)) {
        var r = !s.is.und(n.tension) || !s.is.und(n.friction);
        (r || !s.is.und(n.frequency) || !s.is.und(n.damping) || !s.is.und(n.mass)) && ((e.duration = void 0), (e.decay = void 0)), r && (e.frequency = void 0);
    } else e.duration = void 0;
}
var O = [],
    D = function () {
        (this.changed = !1), (this.values = O), (this.toValues = null), (this.fromValues = O), (this.to = void 0), (this.from = void 0), (this.config = new N()), (this.immediate = !1), (this.onStart = void 0), (this.onChange = void 0), (this.onRest = []);
    };
function L(e) {
    var n = 0;
    if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (e = x(e)))
            return function () {
                return n >= e.length
                    ? { done: !0 }
                    : {
                          done: !1,
                          value: e[n++]
                      };
            };
        throw TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    return (n = e[Symbol.iterator]()).next.bind(n);
}
function x(e, n) {
    if (e) {
        if ('string' == typeof e) return w(e, n);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (('Object' === r && e.constructor && (r = e.constructor.name), 'Map' === r || 'Set' === r)) return Array.from(e);
        if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return w(e, n);
    }
}
function w(e, n) {
    (null == n || n > e.length) && (n = e.length);
    for (var r = 0, i = Array(n); r < n; r++) i[r] = e[r];
    return i;
}
var P = function (e, n) {
    return p.useMemoOne(e, n || [{}]);
};
function M(e) {
    for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
    return s.is.fun(e) ? e.apply(void 0, r) : e;
}
var k = function (e, n) {
        return !0 === e || !!(n && e && (s.is.fun(e) ? e(n) : s.toArray(e).includes(n)));
    },
    U = function (e, n, r) {
        return e && (s.is.fun(e) ? e(n, r) : s.is.arr(e) ? e[n] : o({}, e));
    },
    B = function (e, n) {
        return !s.is.und(G(e, n));
    },
    G = function (e, n) {
        return !0 === e.default ? e[n] : e.default ? e.default[n] : void 0;
    },
    Z = function (e, n, r) {
        void 0 === n && (n = []), void 0 === r && (r = {});
        var i = V;
        e.default && !0 !== e.default && (i = Object.keys((e = e.default)));
        for (var a, o = L(i); !(a = o()).done; ) {
            var l = a.value,
                u = e[l];
            !s.is.und(u) && !n.includes(l) && (r[l] = u);
        }
        return r;
    },
    F = function (e, n, r) {
        return Z(n, r, e);
    },
    V = ['pause', 'cancel', 'config', 'immediate', 'onDelayEnd', 'onProps', 'onStart', 'onChange', 'onRest'],
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
        parentId: 1
    };
function H(e) {
    var n = {},
        r = 0;
    if (
        (s.each(e, function (e, i) {
            !j[i] && ((n[i] = e), r++);
        }),
        r)
    )
        return n;
}
function Y(e) {
    var n = H(e);
    if (n) {
        var r = { to: n };
        return (
            s.each(e, function (e, i) {
                return i in n || (r[i] = e);
            }),
            r
        );
    }
    return o({}, e);
}
function W(e) {
    var n = s.getFluidConfig(e);
    return n
        ? W(n.get())
        : s.is.arr(e)
          ? e.map(W)
          : s.isAnimatedString(e)
            ? h.createStringInterpolator({
                  range: [0, 1],
                  output: [e, e]
              })(1)
            : e;
}
function K(e, n) {
    var r = n.key,
        i = n.props,
        a = n.state,
        l = n.actions;
    return new Promise(function (n, u) {
        var c,
            d,
            f = !1,
            _ = k(i.cancel, r);
        function h() {
            a.resumeQueue.add(p), d.cancel(), (c = d.time - s.Globals.now());
        }
        function p() {
            c > 0 ? (a.pauseQueue.add(h), (d = s.Globals.frameLoop.setTimeout(m, c))) : m();
        }
        function m() {
            a.pauseQueue.delete(h), e <= (a.cancelId || 0) && (_ = !0);
            try {
                l.start(
                    o(
                        o({}, i),
                        {},
                        {
                            callId: e,
                            delay: c,
                            cancel: _,
                            pause: f
                        }
                    ),
                    n
                );
            } catch (e) {
                u(e);
            }
        }
        _ ? m() : ((c = M(i.delay || 0, r)), (f = k(i.pause, r)) ? (a.resumeQueue.add(p), l.pause()) : (l.resume(), p()));
    });
}
var z = function (e, n) {
        return 1 == n.length
            ? n[0]
            : n.some(function (e) {
                    return e.cancelled;
                })
              ? X(e)
              : n.every(function (e) {
                      return e.noop;
                  })
                ? q(e)
                : Q(
                      e,
                      n.every(function (e) {
                          return e.finished;
                      })
                  );
    },
    q = function (e, n) {
        return (
            void 0 === n && (n = e.get()),
            {
                value: n,
                noop: !0,
                finished: !0,
                target: e
            }
        );
    },
    Q = function (e, n, r) {
        return (
            void 0 === r && (r = e.get()),
            {
                value: r,
                finished: n,
                target: e
            }
        );
    },
    X = function (e, n) {
        return (
            void 0 === n && (n = e.get()),
            {
                value: n,
                cancelled: !0,
                target: e
            }
        );
    };
function J(e) {
    var n = 0;
    if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (e = $(e)))
            return function () {
                return n >= e.length
                    ? { done: !0 }
                    : {
                          done: !1,
                          value: e[n++]
                      };
            };
        throw TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    return (n = e[Symbol.iterator]()).next.bind(n);
}
function $(e, n) {
    if (e) {
        if ('string' == typeof e) return ee(e, n);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (('Object' === r && e.constructor && (r = e.constructor.name), 'Map' === r || 'Set' === r)) return Array.from(e);
        if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ee(e, n);
    }
}
function ee(e, n) {
    (null == n || n > e.length) && (n = e.length);
    for (var r = 0, i = Array(n); r < n; r++) i[r] = e[r];
    return i;
}
function et(e, n, r, i) {
    return en.apply(this, arguments);
}
function en() {
    return (en = c(
        u.mark(function e(n, r, i, a) {
            var l, d, f, _, p;
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
                                    i.resumeQueue.add(e);
                                })
                            );
                        case 3:
                            if (((l = r.callId), (d = r.parentId), (f = r.onRest), (_ = i.asyncTo), (p = i.promise), !(!d && n === _ && !r.reset))) {
                                e.next = 7;
                                break;
                            }
                            return e.abrupt('return', p);
                        case 7:
                            return e.abrupt(
                                'return',
                                (i.promise = c(
                                    u.mark(function e() {
                                        var m, g, E, v, I, T, b, y, S;
                                        return u.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return (
                                                                (i.asyncId = l),
                                                                (i.asyncTo = n),
                                                                (m = Z(r, ['onRest'])),
                                                                (v = new Promise(function (e, n) {
                                                                    return (g = e), (E = n);
                                                                })),
                                                                (I = function (e) {
                                                                    return function () {
                                                                        var n = function (e) {
                                                                            throw (e instanceof ei && E(e), e);
                                                                        };
                                                                        try {
                                                                            return e.apply(void 0, arguments).catch(n);
                                                                        } catch (e) {
                                                                            n(e);
                                                                        }
                                                                    };
                                                                }),
                                                                (T = function (e) {
                                                                    var n = (l <= (i.cancelId || 0) && X(a)) || (l !== i.asyncId && Q(a, !1));
                                                                    if (n) throw ((e.result = n), e);
                                                                }),
                                                                (b = I(function (e, n) {
                                                                    var r = new ei();
                                                                    T(r);
                                                                    var d = s.is.obj(e) ? o({}, e) : o(o({}, n), {}, { to: e });
                                                                    return (
                                                                        (d.parentId = l),
                                                                        s.each(m, function (e, n) {
                                                                            s.is.und(d[n]) && (d[n] = e);
                                                                        }),
                                                                        a.start(d).then(
                                                                            (function () {
                                                                                var e = c(
                                                                                    u.mark(function e(n) {
                                                                                        return u.wrap(function (e) {
                                                                                            for (;;)
                                                                                                switch ((e.prev = e.next)) {
                                                                                                    case 0:
                                                                                                        if ((T(r), !a.is('PAUSED'))) {
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
                                                                                                        return e.abrupt('return', n);
                                                                                                    case 5:
                                                                                                    case 'end':
                                                                                                        return e.stop();
                                                                                                }
                                                                                        }, e);
                                                                                    })
                                                                                );
                                                                                return function (n) {
                                                                                    return e.apply(this, arguments);
                                                                                };
                                                                            })()
                                                                        )
                                                                    );
                                                                })),
                                                                (e.prev = 7),
                                                                s.is.arr(n)
                                                                    ? (S = (function () {
                                                                          var e = c(
                                                                              u.mark(function e(n) {
                                                                                  var r, i, a;
                                                                                  return u.wrap(function (e) {
                                                                                      for (;;)
                                                                                          switch ((e.prev = e.next)) {
                                                                                              case 0:
                                                                                                  r = J(n);
                                                                                              case 1:
                                                                                                  if ((i = r()).done) {
                                                                                                      e.next = 7;
                                                                                                      break;
                                                                                                  }
                                                                                                  return (a = i.value), (e.next = 5), b(a);
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
                                                                          return function (n) {
                                                                              return e.apply(this, arguments);
                                                                          };
                                                                      })()(n))
                                                                    : s.is.fun(n) && (S = Promise.resolve(n(b, a.stop.bind(a)))),
                                                                (e.next = 11),
                                                                Promise.all([S.then(g), v])
                                                            );
                                                        case 11:
                                                            (y = Q(a, !0)), (e.next = 21);
                                                            break;
                                                        case 14:
                                                            if (((e.prev = 14), (e.t0 = e.catch(7)), !(e.t0 instanceof ei))) {
                                                                e.next = 20;
                                                                break;
                                                            }
                                                            (y = e.t0.result), (e.next = 21);
                                                            break;
                                                        case 20:
                                                            throw e.t0;
                                                        case 21:
                                                            return (e.prev = 21), l == i.asyncId && ((i.asyncId = d), (i.asyncTo = d ? _ : void 0), (i.promise = d ? p : void 0)), e.finish(21);
                                                        case 24:
                                                            return (
                                                                s.is.fun(f) &&
                                                                    h.batchedUpdates(function () {
                                                                        f(y);
                                                                    }),
                                                                e.abrupt('return', y)
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
function er(e, n) {
    (e.cancelId = n), (e.asyncId = e.asyncTo = e.promise = void 0);
}
var ei = (function (e) {
        function n() {
            var n;
            return ((n = e.call(this, 'An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.') || this).result = void 0), n;
        }
        return f(n, e), n;
    })(m(Error)),
    ea = function (e) {
        return e instanceof eo;
    },
    es = 1,
    eo = (function (e) {
        function n() {
            for (var n, r = arguments.length, i = Array(r), a = 0; a < r; a++) i[a] = arguments[a];
            return ((n = e.call.apply(e, [this].concat(i)) || this).id = es++), (n.key = void 0), (n._priority = 0), (n._children = new Set()), n;
        }
        f(n, e);
        var r = n.prototype;
        return (
            (r.get = function () {
                var e = _.getAnimated(this);
                return e && e.getValue();
            }),
            (r.to = function () {
                for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                return h.to(this, n);
            }),
            (r.interpolate = function () {
                g.deprecateInterpolate();
                for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                return h.to(this, n);
            }),
            (r.addChild = function (e) {
                !this._children.size && this._attach(), this._children.add(e);
            }),
            (r.removeChild = function (e) {
                this._children.delete(e), !this._children.size && this._detach();
            }),
            (r.onParentChange = function (e) {
                var n = e.type;
                this.idle ? 'start' == n && (this._reset(), this._start()) : 'reset' == n && this._reset();
            }),
            (r._attach = function () {}),
            (r._detach = function () {}),
            (r._reset = function () {
                this._emit({
                    type: 'reset',
                    parent: this
                });
            }),
            (r._start = function () {
                this._emit({
                    type: 'start',
                    parent: this
                });
            }),
            (r._onChange = function (e, n) {
                void 0 === n && (n = !1),
                    this._emit({
                        type: 'change',
                        parent: this,
                        value: e,
                        idle: n
                    });
            }),
            (r._onPriorityChange = function (e) {
                !this.idle && h.frameLoop.start(this),
                    this._emit({
                        type: 'priority',
                        parent: this,
                        priority: e
                    });
            }),
            (r._emit = function (e) {
                s.each(Array.from(this._children), function (n) {
                    n.onParentChange(e);
                });
            }),
            d(n, [
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
            n
        );
    })(s.FluidValue),
    el = 'CREATED',
    eu = 'IDLE',
    ec = 'ACTIVE',
    ed = 'PAUSED',
    ef = 'DISPOSED',
    e_ = (function (e) {
        function n(n, r) {
            var i;
            if (
                (((i = e.call(this) || this).key = void 0),
                (i.animation = new D()),
                (i.queue = void 0),
                (i._phase = el),
                (i._state = {
                    pauseQueue: new Set(),
                    resumeQueue: new Set()
                }),
                (i._defaultProps = {}),
                (i._lastCallId = 0),
                (i._lastToId = 0),
                !s.is.und(n) || !s.is.und(r))
            ) {
                var a = s.is.obj(n) ? o({}, n) : o(o({}, r), {}, { from: n });
                (a.default = !0), i.start(a);
            }
            return i;
        }
        f(n, e);
        var r = n.prototype;
        return (
            (r.advance = function (e) {
                var n = this,
                    r = !0,
                    i = !1,
                    a = this.animation,
                    o = a.config,
                    l = a.toValues,
                    u = _.getPayload(a.to);
                if (!u) {
                    var c = s.getFluidConfig(a.to);
                    c && (l = s.toArray(c.get()));
                }
                return (
                    a.values.forEach(function (c, d) {
                        if (!c.done) {
                            var f = u ? u[d].lastPosition : l[d],
                                _ = a.immediate,
                                h = f;
                            if (!_) {
                                if (((h = c.lastPosition), o.tension <= 0)) {
                                    c.done = !0;
                                    return;
                                }
                                var p = (c.elapsedTime += e),
                                    m = a.fromValues[d],
                                    g = null != c.v0 ? c.v0 : (c.v0 = s.is.arr(o.velocity) ? o.velocity[d] : o.velocity);
                                if (s.is.und(o.duration)) {
                                    if (o.decay) {
                                        var E = !0 === o.decay ? 0.998 : o.decay,
                                            v = Math.exp(-(1 - E) * p);
                                        (h = m + (g / (1 - E)) * (1 - v)), (_ = 0.1 > Math.abs(c.lastPosition - h)), (I = g * v);
                                    } else {
                                        I = null == c.lastVelocity ? g : c.lastVelocity;
                                        for (var I, T = o.precision || (m == f ? 0.005 : Math.min(1, 0.001 * Math.abs(f - m))), b = o.restVelocity || T / 10, y = o.clamp ? 0 : o.bounce, S = !s.is.und(y), A = m == f ? c.v0 > 0 : m < f, N = !1, C = 1, R = Math.ceil(e / 1), O = 0; O < R && !(!(Math.abs(I) > b) && (_ = Math.abs(f - h) <= T)); ++O) {
                                            S && (N = h == f || h > f == A) && ((I = -I * y), (h = f));
                                            var D = (-(0.000001 * o.tension) * (h - f) + -(0.001 * o.friction) * I) / o.mass;
                                            (I += D * C), (h += I * C);
                                        }
                                    }
                                } else {
                                    var L = o.progress || 0;
                                    o.duration <= 0 ? (L = 1) : (L += (1 - L) * Math.min(1, p / o.duration)), (I = ((h = m + o.easing(L) * (f - m)) - c.lastPosition) / e), (_ = 1 == L);
                                }
                                (c.lastVelocity = I), Number.isNaN(h) && (console.warn('Got NaN while animating:', n), (_ = !0));
                            }
                            u && !u[d].done && (_ = !1), _ ? (c.done = !0) : (r = !1), c.setValue(h, o.round) && (i = !0);
                        }
                    }),
                    r ? this.finish() : i && this._onChange(this.get()),
                    r
                );
            }),
            (r.is = function (e) {
                return this._phase == e;
            }),
            (r.set = function (e) {
                var n = this;
                return (
                    h.batchedUpdates(function () {
                        if ((n._focus(e), n._set(e) && !n.is(ec))) return n._onChange(n.get(), !0);
                        n._stop();
                    }),
                    this
                );
            }),
            (r.pause = function () {
                eh(this, 'pause'),
                    !this.is(ed) &&
                        ((this._phase = ed),
                        s.flush(this._state.pauseQueue, function (e) {
                            return e();
                        }));
            }),
            (r.resume = function () {
                eh(this, 'resume'),
                    this.is(ed) &&
                        (this._start(),
                        s.flush(this._state.resumeQueue, function (e) {
                            return e();
                        }));
            }),
            (r.finish = function (e) {
                var n = this;
                if ((this.resume(), this.is(ec))) {
                    var r = this.animation;
                    !r.config.decay && s.is.und(e) && (e = r.to),
                        !s.is.und(e) && this._set(e),
                        h.batchedUpdates(function () {
                            !r.changed && ((r.changed = !0), r.onStart && r.onStart(n)), n._stop();
                        });
                }
                return this;
            }),
            (r.update = function (e) {
                return eh(this, 'update'), (this.queue || (this.queue = [])).push(e), this;
            }),
            (r.start = (function () {
                var e = c(
                    u.mark(function e(n, r) {
                        var i,
                            a,
                            l = this;
                        return u.wrap(
                            function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (
                                                eh(this, 'start'),
                                                s.is.und(n) ? ((i = this.queue || []), (this.queue = [])) : (i = [s.is.obj(n) ? n : o(o({}, r), {}, { to: n })]),
                                                (e.next = 4),
                                                Promise.all(
                                                    i.map(function (e) {
                                                        return l._update(e);
                                                    })
                                                )
                                            );
                                        case 4:
                                            return (a = e.sent), e.abrupt('return', z(this, a));
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
                return function n(n, r) {
                    return e.apply(this, arguments);
                };
            })()),
            (r.stop = function (e) {
                var n = this;
                return (
                    !this.is(ef) &&
                        (er(this._state, this._lastCallId),
                        this._focus(this.get()),
                        h.batchedUpdates(function () {
                            return n._stop(e);
                        })),
                    this
                );
            }),
            (r.reset = function () {
                this._update({ reset: !0 });
            }),
            (r.dispose = function () {
                !this.is(ef) && (this.animation && (this.animation.onRest = []), this.stop(), (this._phase = ef));
            }),
            (r.onParentChange = function (n) {
                e.prototype.onParentChange.call(this, n), 'change' == n.type ? !this.is(ec) && (this._reset(), !this.is(ed) && this._start()) : 'priority' == n.type && (this.priority = n.priority + 1);
            }),
            (r._prepareNode = function (e) {
                var n = e.to,
                    r = e.from,
                    i = e.reverse,
                    a = this.key || '';
                n = !s.is.obj(n) || s.getFluidConfig(n) ? n : n[a];
                var o = {
                    to: n,
                    from: (r = !s.is.obj(r) || s.getFluidConfig(r) ? r : r[a])
                };
                if (this.is(el)) {
                    if (i) {
                        var l = [r, n];
                        (n = l[0]), (r = l[1]);
                    }
                    r = s.getFluidValue(r);
                    var u = this._updateNode(s.is.und(r) ? s.getFluidValue(n) : r);
                    u && !s.is.und(r) && u.setValue(r);
                }
                return o;
            }),
            (r._updateNode = function (e) {
                var n = _.getAnimated(this);
                if (!s.is.und(e)) {
                    var r = this._getNodeType(e);
                    (!n || n.constructor !== r) && _.setAnimated(this, (n = r.create(e)));
                }
                return n;
            }),
            (r._getNodeType = function (e) {
                var n = _.getAnimated(e);
                return n ? n.constructor : s.is.arr(e) ? _.AnimatedArray : s.isAnimatedString(e) ? _.AnimatedString : _.AnimatedValue;
            }),
            (r._update = function (e, n) {
                var r = this,
                    i = this._defaultProps,
                    a = function (n) {
                        var r = G(e, n);
                        !s.is.und(r) && (i[n] = r), i[n] && (e[n] = i[n]);
                    };
                a('cancel'), a('pause');
                var o = this._prepareNode(e);
                return K(++this._lastCallId, {
                    key: this.key,
                    props: e,
                    state: this._state,
                    actions: {
                        pause: this.pause.bind(this),
                        resume: this.resume.bind(this),
                        start: this._merge.bind(this, o)
                    }
                }).then(function (i) {
                    if (e.loop && i.finished && !(n && i.noop)) {
                        var a = eg(e);
                        if (a) return r._update(a, !0);
                    }
                    return i;
                });
            }),
            (r._merge = function (e, n, r) {
                if (n.cancel) return this.stop(!0), r(X(this));
                var i = this.key,
                    a = this.animation,
                    o = this._defaultProps,
                    l = !s.is.und(e.to),
                    u = !s.is.und(e.from);
                if (l || u) {
                    if (!(n.callId > this._lastToId)) return r(X(this));
                    this._lastToId = n.callId;
                }
                var c = function (e) {
                        return s.is.und(n[e]) ? o[e] : n[e];
                    },
                    d = ep(c('onDelayEnd'), i);
                d && d(n, this), n.default && F(o, n, ['pause', 'cancel']);
                var f = a.to,
                    p = a.from,
                    m = e.to,
                    g = void 0 === m ? f : m,
                    E = e.from,
                    v = void 0 === E ? p : E;
                if ((u && !l && (g = v), n.reverse)) {
                    var I = [v, g];
                    (g = I[0]), (v = I[1]);
                }
                var T = !s.isEqual(v, p);
                T && (a.from = v);
                var b = !s.isEqual(g, f);
                b && this._focus(g);
                var y = s.getFluidConfig(g),
                    S = s.getFluidConfig(v);
                S && (v = S.get());
                var A = s.is.arr(n.to) || s.is.fun(n.to),
                    N = a.config,
                    R = N.decay,
                    O = N.velocity;
                n.config && !A && C(N, M(n.config, i), n.config !== o.config ? M(o.config, i) : void 0);
                var D = _.getAnimated(this);
                if (!D || s.is.und(g)) return r(Q(this, !0));
                var L = s.is.und(n.reset) ? u && !n.default : !s.is.und(v) && k(n.reset, i),
                    x = L ? v : this.get(),
                    w = W(g),
                    P = s.is.num(w) || s.is.arr(w) || s.isAnimatedString(w),
                    U = !A && (!P || k(o.immediate || n.immediate, i));
                if (b) {
                    if (U) D = this._updateNode(w);
                    else {
                        var B = this._getNodeType(g);
                        if (B !== D.constructor) throw Error('Cannot animate between ' + D.constructor.name + ' and ' + B.name + ', as the "to" prop suggests');
                    }
                }
                var G = D.constructor,
                    Z = !!y,
                    V = !1;
                if (!Z) {
                    var j = L || (this.is(el) && T);
                    (b || j) && (Z = !(V = s.isEqual(W(x), w))), (!s.isEqual(N.decay, R) || !s.isEqual(N.velocity, O)) && (Z = !0);
                }
                if ((V && this.is(ec) && (a.changed && !L ? (Z = !0) : !Z && this._stop()), !A)) {
                    (Z || s.getFluidConfig(f)) && ((a.values = D.getPayload()), (a.toValues = y ? null : G == _.AnimatedString ? [1] : s.toArray(w))), (a.immediate = U), (a.onStart = ep(c('onStart'), i)), (a.onChange = ep(c('onChange'), i));
                    var H = a.onRest,
                        Y = L && !n.onRest ? H[0] || s.noop : em(ep(c('onRest'), i), this);
                    if (Z) {
                        a.onRest = [Y, em(r, this)];
                        var K = L ? 0 : 1;
                        K < H.length &&
                            h.batchedUpdates(function () {
                                for (; K < H.length; K++) H[K]();
                            });
                    } else (L || n.onRest) && (a.onRest[0] = Y);
                }
                var z = ep(c('onProps'), i);
                if ((z && z(n, this), L && D.setValue(x), A)) r(et(n.to, n, this._state, this));
                else if (Z) L && (this._phase = eu), this._reset(), this._start();
                else if (this.is(ec) && !b) a.onRest.push(em(r, this));
                else {
                    let e = q(this, x),
                        n = ep(c('onNoopRest'), i);
                    null != n && n(e), r(e);
                }
            }),
            (r._focus = function (e) {
                var n = this.animation;
                if (e !== n.to) {
                    var r = s.getFluidConfig(n.to);
                    r && r.removeChild(this), (n.to = e);
                    var i = 0;
                    (r = s.getFluidConfig(e)) && (r.addChild(this), ea(e) && (i = (e.priority || 0) + 1)), (this.priority = i);
                }
            }),
            (r._set = function (e) {
                var n = s.getFluidConfig(e);
                n && (e = n.get());
                var r = _.getAnimated(this),
                    i = r && r.getValue();
                return r ? r.setValue(e) : this._updateNode(e), !s.isEqual(e, i);
            }),
            (r._onChange = function (n, r) {
                void 0 === r && (r = !1);
                var i = this.animation;
                !i.changed && !r && ((i.changed = !0), i.onStart && i.onStart(this)), i.onChange && i.onChange(n, this), e.prototype._onChange.call(this, n, r);
            }),
            (r._reset = function () {
                var n = this.animation;
                _.getAnimated(this).reset(n.to),
                    !this.is(ec) && (n.changed = !1),
                    !n.immediate &&
                        (n.fromValues = n.values.map(function (e) {
                            return e.lastPosition;
                        })),
                    e.prototype._reset.call(this);
            }),
            (r._start = function () {
                !this.is(ec) && ((this._phase = ec), e.prototype._start.call(this), h.skipAnimation ? this.finish() : h.frameLoop.start(this));
            }),
            (r._stop = function (e) {
                if ((this.resume(), this.is(ec))) {
                    (this._phase = eu), this._onChange(this.get(), !0);
                    var n = this.animation;
                    s.each(n.values, function (e) {
                        e.done = !0;
                    });
                    var r = n.onRest;
                    r.length &&
                        ((n.onRest = [n.toValues ? s.noop : r[0]]),
                        !n.changed && (r[0] = s.noop),
                        s.each(r, function (n) {
                            return n(e);
                        }));
                }
            }),
            d(n, [
                {
                    key: 'idle',
                    get: function () {
                        return !this.is(ec) && !this._state.asyncTo;
                    }
                },
                {
                    key: 'goal',
                    get: function () {
                        return s.getFluidValue(this.animation.to);
                    }
                },
                {
                    key: 'velocity',
                    get: function () {
                        var e = _.getAnimated(this);
                        return e instanceof _.AnimatedValue
                            ? e.lastVelocity || 0
                            : e.getPayload().map(function (e) {
                                  return e.lastVelocity || 0;
                              });
                    }
                }
            ]),
            n
        );
    })(eo);
function eh(e, n) {
    if (e.is(ef)) throw Error('Cannot call "' + n + '" of disposed "' + e.constructor.name + '" object');
}
function ep(e, n) {
    return s.is.fun(e) ? e : n && e ? e[n] : void 0;
}
var em = function (e, n) {
    var r = n.animation.to;
    return e
        ? function (i) {
              if (i) e(X(n));
              else {
                  var a = W(r),
                      o = W(n.get());
                  e(Q(n, s.isEqual(o, a)));
              }
          }
        : s.noop;
};
function eg(e, n, r) {
    void 0 === n && (n = e.loop), void 0 === r && (r = e.to);
    var i = M(n);
    if (i) {
        var a = !0 !== i && Y(i),
            l = (a || e).reverse,
            u = !a || a.reset;
        return eE(
            o(
                o({}, e),
                {},
                {
                    loop: n,
                    default: !1,
                    to: !l || s.is.arr(r) || s.is.fun(r) ? r : void 0,
                    from: u ? e.from : void 0,
                    reset: u
                },
                a
            )
        );
    }
}
function eE(e) {
    var n = (e = Y(e)),
        r = n.to,
        i = n.from,
        a = new Set();
    return i ? eI(i, a) : delete e.from, s.is.obj(r) ? eI(r, a) : !r && delete e.to, (e.keys = a.size ? Array.from(a) : null), e;
}
function ev(e) {
    var n = eE(e);
    return s.is.und(n.default) && (n.default = Z(n, [!0 === n.immediate && 'immediate'])), n;
}
function eI(e, n) {
    s.each(e, function (e, r) {
        return null != e && n.add(r);
    });
}
var eT = ['onStart', 'onChange', 'onRest'],
    eb = 1,
    ey = (function () {
        function e(e, n) {
            (this.id = eb++),
                (this.springs = {}),
                (this.queue = []),
                (this._flush = void 0),
                (this._initialProps = void 0),
                (this._phase = el),
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
                n && (this._flush = n),
                e && this.start(e);
        }
        var n = e.prototype;
        return (
            (n.is = function (e) {
                return this._phase == e;
            }),
            (n.get = function () {
                var e = {};
                return (
                    this.each(function (n, r) {
                        return (e[r] = n.get());
                    }),
                    e
                );
            }),
            (n.update = function (e) {
                return e && this.queue.push(eE(e)), this;
            }),
            (n.start = function (e) {
                var n = e ? s.toArray(e).map(eE) : this.queue;
                return (!e && (this.queue = []), this._flush) ? this._flush(this, n) : (eD(this, n), eS(this, n));
            }),
            (n.stop = function (e) {
                if (s.is.und(e))
                    this.each(function (e) {
                        return e.stop();
                    }),
                        er(this._state, this._lastAsyncId);
                else {
                    var n = this.springs;
                    s.each(s.toArray(e), function (e) {
                        return n[e].stop();
                    });
                }
                return this;
            }),
            (n.pause = function (e) {
                if (s.is.und(e))
                    this.each(function (e) {
                        return e.pause();
                    });
                else {
                    var n = this.springs;
                    s.each(s.toArray(e), function (e) {
                        return n[e].pause();
                    });
                }
                return this;
            }),
            (n.resume = function (e) {
                if (s.is.und(e))
                    this.each(function (e) {
                        return e.resume();
                    });
                else {
                    var n = this.springs;
                    s.each(s.toArray(e), function (e) {
                        return n[e].resume();
                    });
                }
                return this;
            }),
            (n.reset = function () {
                return (
                    this.each(function (e) {
                        return e.reset();
                    }),
                    this
                );
            }),
            (n.each = function (e) {
                s.each(this.springs, e);
            }),
            (n.dispose = function () {
                (this._state.asyncTo = void 0),
                    this.each(function (e) {
                        return e.dispose();
                    }),
                    (this.springs = {});
            }),
            (n._onFrame = function () {
                var e = this,
                    n = this._events,
                    r = n.onStart,
                    i = n.onChange,
                    a = n.onRest,
                    o = this._active.size > 0;
                o &&
                    this._phase != ec &&
                    ((this._phase = ec),
                    s.flush(r, function (n) {
                        return n(e);
                    }));
                var l = (i.size || (!o && a.size)) && this.get();
                s.flush(i, function (e) {
                    return e(l);
                }),
                    !o &&
                        ((this._phase = eu),
                        s.flush(a, function (e) {
                            var n = e[0],
                                r = e[1];
                            (r.value = l), n(r);
                        }));
            }),
            (n.onParentChange = function (e) {
                'change' == e.type && (this._active[e.idle ? 'delete' : 'add'](e.parent), h.frameLoop.onFrame(this._onFrame));
            }),
            d(e, [
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
function eS(e, n) {
    return Promise.all(
        n.map(function (n) {
            return eA(e, n);
        })
    ).then(function (n) {
        return z(e, n);
    });
}
function eA(e, n, r) {
    var i = n.to,
        a = n.loop,
        o = n.onRest;
    a && (n.loop = !1);
    var l = s.is.arr(i) || s.is.fun(i) ? i : void 0;
    l
        ? ((n.to = void 0), (n.onRest = void 0))
        : s.each(eT, function (r) {
              var i = n[r];
              if (s.is.fun(i)) {
                  var a = e._events[r];
                  a instanceof Set
                      ? (n[r] = function () {
                            return a.add(i);
                        })
                      : (n[r] = function (e) {
                            var n = e.finished,
                                r = e.cancelled,
                                s = a.get(i);
                            s
                                ? (!n && (s.finished = !1), r && (s.cancelled = !0))
                                : a.set(i, {
                                      value: null,
                                      finished: n,
                                      cancelled: r
                                  });
                        });
              }
          });
    var u = (n.keys || Object.keys(e.springs)).map(function (r) {
            return e.springs[r].start(n);
        }),
        c = e._state;
    return (
        l
            ? u.push(
                  K(++e._lastAsyncId, {
                      props: n,
                      state: c,
                      actions: {
                          pause: s.noop,
                          resume: s.noop,
                          start: function (n, r) {
                              (n.onRest = o), n.cancel ? B(n, 'cancel') && er(c, n.callId) : r(et(l, n, c, e));
                          }
                      }
                  })
              )
            : !n.keys && !0 === n.cancel && er(c, e._lastAsyncId),
        Promise.all(u).then(function (s) {
            var o = z(e, s);
            if (a && o.finished && !(r && o.noop)) {
                var l = eg(n, a, i);
                if (l) return eD(e, [l]), eA(e, l, !0);
            }
            return o;
        })
    );
}
function eN(e, n) {
    var r = o({}, e.springs);
    return (
        n &&
            s.each(s.toArray(n), function (e) {
                s.is.und(e.keys) && (e = eE(e)),
                    !s.is.obj(e.to) && (e = o(o({}, e), {}, { to: void 0 })),
                    eO(r, e, function (e) {
                        return eR(e);
                    });
            }),
        r
    );
}
function eC(e, n) {
    s.each(n, function (n, r) {
        !e.springs[r] && ((e.springs[r] = n), n.addChild(e));
    });
}
function eR(e, n) {
    var r = new e_();
    return (r.key = e), n && r.addChild(n), r;
}
function eO(e, n, r) {
    n.keys &&
        s.each(n.keys, function (i) {
            (e[i] || (e[i] = r(i)))._prepareNode(n);
        });
}
function eD(e, n) {
    s.each(n, function (n) {
        eO(e.springs, n, function (n) {
            return eR(n, e);
        });
    });
}
var eL = l.createContext({}),
    ex = function (e) {
        var n = e.children,
            r = E(e, ['children']),
            i = l.useContext(eL);
        r = P(
            function () {
                return o(o({}, i), r);
            },
            [i, r.pause, r.cancel, r.immediate, r.config]
        );
        var a = eL.Provider;
        return l.createElement(a, { value: r }, n);
    };
(ex.Provider = eL.Provider), (ex.Consumer = eL.Consumer);
var ew = function () {
        return l.useContext(eL);
    },
    eP = {
        create: function (e) {
            return {
                get controllers() {
                    return e();
                },
                update: function (n) {
                    return (
                        s.each(e(), function (e, r) {
                            e.update(U(n, r, e));
                        }),
                        this
                    );
                },
                start: function (n) {
                    return c(
                        u.mark(function r() {
                            var i;
                            return u.wrap(function (r) {
                                for (;;)
                                    switch ((r.prev = r.next)) {
                                        case 0:
                                            return (
                                                (r.next = 2),
                                                Promise.all(
                                                    e().map(function (e, r) {
                                                        var i = U(n, r, e);
                                                        return e.start(i);
                                                    })
                                                )
                                            );
                                        case 2:
                                            return (
                                                (i = r.sent),
                                                r.abrupt('return', {
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
                                            return r.stop();
                                    }
                            }, r);
                        })
                    )();
                },
                stop: function (n) {
                    return s.each(e(), function (e) {
                        return e.stop(n);
                    });
                },
                pause: function (n) {
                    return s.each(e(), function (e) {
                        return e.pause(n);
                    });
                },
                resume: function (n) {
                    return s.each(e(), function (e) {
                        return e.resume(n);
                    });
                }
            };
        }
    };
function eM(e, n, r) {
    var i = s.is.fun(n) && n;
    i && !r && (r = []);
    var u = l.useRef(0),
        c = s.useForceUpdate(),
        d = l.useState(function () {
            return {
                ctrls: [],
                queue: [],
                flush: function (e, n) {
                    var r = eN(e, n);
                    return !(u.current > 0) ||
                        d.queue.length ||
                        Object.keys(r).some(function (n) {
                            return !e.springs[n];
                        })
                        ? new Promise(function (i) {
                              eC(e, r),
                                  d.queue.push(function () {
                                      i(eS(e, n));
                                  }),
                                  c();
                          })
                        : eS(e, n);
                }
            };
        })[0],
        f = l.useRef(),
        _ = [].concat(d.ctrls),
        h = [],
        p = s.usePrev(e) || 0,
        m = _.slice(e, p);
    function g(e, r) {
        for (var a = e; a < r; a++) {
            var s = _[a] || (_[a] = new ey(null, d.flush)),
                o = i ? i(a, s) : n[a];
            o && ((o = h[a] = ev(o)), 0 == a && ((f.current = o.ref), (o.ref = void 0)));
        }
    }
    P(
        function () {
            (_.length = e), g(p, e);
        },
        [e]
    ),
        P(function () {
            g(0, Math.min(p, e));
        }, r);
    var E = l.useMemo(function () {
            return eP.create(function () {
                return d.ctrls;
            });
        }, []),
        v = _.map(function (e, n) {
            return eN(e, h[n]);
        }),
        I = ew();
    a.useLayoutEffect(function () {
        u.current++, (d.ctrls = _), f.current && (f.current.current = E);
        var e = d.queue;
        e.length &&
            ((d.queue = []),
            s.each(e, function (e) {
                return e();
            })),
            s.each(m, function (e) {
                return e.dispose();
            }),
            s.each(_, function (e, n) {
                eC(e, v[n]), e.start({ default: I });
                var r = h[n];
                r && (f.current ? e.queue.push(r) : e.start(r));
            });
    }),
        s.useOnce(function () {
            return function () {
                s.each(d.ctrls, function (e) {
                    return e.dispose();
                });
            };
        });
    var T = v.map(function (e) {
        return o({}, e);
    });
    return i || 3 == arguments.length ? [T, E.start, E.stop] : T;
}
function ek(e, n) {
    var r = s.is.fun(e),
        i = eM(1, r ? e : [e], r ? n || [] : n),
        a = i[0][0],
        o = i[1],
        l = i[2];
    return r || 2 == arguments.length ? [a, o, l] : a;
}
function eU(e, n, r) {
    var i = s.is.fun(n) && n;
    i && !r && (r = []);
    var o = [],
        l = eM(
            e,
            function (e, r) {
                return (o[e] = r), U(n, e, r);
            },
            r || [{}]
        );
    if (
        (a.useLayoutEffect(function () {
            for (var e = s.is.obj(n) && n.reverse, r = 0; r < o.length; r++) {
                var i = o[r + (e ? 1 : -1)];
                i && o[r].update({ to: i.springs }).start();
            }
        }, r),
        i || 3 == arguments.length)
    ) {
        var u = l[1];
        return (
            (l[1] = p.useCallbackOne(function (e) {
                var n = s.is.obj(e) && e.reverse;
                return u(function (r, i) {
                    var a = U(e, r, i),
                        s = o[r + (n ? 1 : -1)];
                    return s && (a.to = s.springs), a;
                });
            }, r)),
            l
        );
    }
    return l[0];
}
var eB = 'mount',
    eG = 'enter',
    eZ = 'update',
    eF = 'leave';
function eV(e, n, r) {
    var i = n.ref,
        u = n.reset,
        c = n.sort,
        d = n.trail,
        f = void 0 === d ? 0 : d,
        _ = n.expires,
        h = void 0 === _ || _,
        p = s.toArray(e),
        m = [],
        g = ej(p, n),
        E = l.useRef(null),
        v = u ? null : E.current;
    a.useLayoutEffect(function () {
        E.current = m;
    }),
        s.useOnce(function () {
            return function () {
                return s.each(E.current, function (e) {
                    e.expired && clearTimeout(e.expirationId), e.ctrl.dispose();
                });
            };
        });
    var I = [];
    if (
        (v &&
            s.each(v, function (e, n) {
                e.expired ? clearTimeout(e.expirationId) : ~(n = I[n] = g.indexOf(e.key)) && (m[n] = e);
            }),
        s.each(p, function (e, n) {
            m[n] ||
                (m[n] = {
                    key: g[n],
                    item: e,
                    phase: eB,
                    ctrl: new ey()
                });
        }),
        I.length)
    ) {
        var T = -1;
        s.each(I, function (e, r) {
            var i = v[r];
            ~e ? ((T = m.indexOf(i)), (m[T] = o(o({}, i), {}, { item: p[e] }))) : n.leave && m.splice(++T, 0, i);
        });
    }
    s.is.fun(c) &&
        m.sort(function (e, n) {
            return c(e.item, n.item);
        });
    var b = -f,
        y = s.useForceUpdate(),
        S = Z(n),
        A = new Map();
    s.each(m, function (e, r) {
        var i,
            a,
            l = e.key,
            u = e.phase;
        if (u == eB) (i = n.enter), (a = eG);
        else {
            var c = 0 > g.indexOf(l);
            if (u != eF) {
                if (c) (i = n.leave), (a = eF);
                else {
                    if (!(i = n.update)) return;
                    a = eZ;
                }
            } else {
                if (c) return;
                (i = n.enter), (a = eG);
            }
        }
        if (((i = M(i, e.item, r)), !(i = s.is.obj(i) ? Y(i) : { to: i }).config)) {
            var d = n.config || S.config;
            i.config = M(d, e.item, r);
        }
        var _ = o(
            o({}, S),
            {},
            {
                delay: (b += f),
                reset: !1
            },
            i
        );
        if (a == eG && s.is.und(_.from)) {
            var p = s.is.und(n.initial) || v ? n.from : n.initial;
            _.from = M(p, e.item, r);
        }
        var m = _.onRest;
        _.onRest = _.onNoopRest = function (e) {
            var n = E.current,
                r = n.find(function (e) {
                    return e.key === l;
                });
            if (r) {
                if ((s.is.fun(m) && !0 !== e.noop && m(e, r), e.cancelled && r.phase != eZ)) {
                    r.phase = u;
                    return;
                }
                if (r.ctrl.idle) {
                    var i = n.every(function (e) {
                        return e.ctrl.idle;
                    });
                    if (r.phase == eF) {
                        var a = M(h, r.item);
                        if (!1 !== a) {
                            var o = !0 === a ? 0 : a;
                            if (((r.expired = !0), !i && o > 0)) {
                                o <= 2147483647 && (r.expirationId = setTimeout(y, o));
                                return;
                            }
                        }
                    }
                    i &&
                        n.some(function (e) {
                            return e.expired;
                        }) &&
                        y();
                }
            }
        };
        var I = eN(e.ctrl, _);
        A.set(e, {
            phase: a,
            springs: I,
            payload: _
        });
    });
    var N = ew();
    a.useLayoutEffect(
        function () {
            s.each(m, function (e) {
                e.ctrl.start({ default: N });
            });
        },
        [N]
    );
    var C = l.useMemo(function () {
        return eP.create(function () {
            return E.current.map(function (e) {
                return e.ctrl;
            });
        });
    }, []);
    l.useImperativeHandle(i, function () {
        return C;
    }),
        a.useLayoutEffect(
            function () {
                s.each(A, function (e, n) {
                    var r = e.phase,
                        a = e.springs,
                        s = e.payload;
                    eC(n.ctrl, a), !N.cancel && ((n.phase = r), r == eG && n.ctrl.start({ default: N }), n.ctrl[i ? 'update' : 'start'](s));
                });
            },
            u ? void 0 : r
        );
    var R = function (e) {
        return l.createElement(
            l.Fragment,
            null,
            m.map(function (n, r) {
                var i = e(o({}, (A.get(n) || n.ctrl).springs), n.item, n, r);
                return i && i.type
                    ? l.createElement(
                          i.type,
                          o({}, i.props, {
                              key: s.is.str(n.key) || s.is.num(n.key) ? n.key : n.ctrl.id,
                              ref: i.ref
                          })
                      )
                    : i;
            })
        );
    };
    return 3 == arguments.length ? [R, C.start, C.stop] : R;
}
function ej(e, n) {
    var r = n.key,
        i = n.keys,
        a = void 0 === i ? r : i;
    return s.is.und(a) ? e : s.is.fun(a) ? e.map(a) : s.toArray(a);
}
function eH(e) {
    return (0, e.children)(ek(E(e, ['children'])));
}
function eY(e) {
    var n = e.items,
        r = e.children,
        i = E(e, ['items', 'children']),
        a = eU(n.length, i);
    return n.map(function (e, n) {
        var i = r(e, n);
        return s.is.fun(i) ? i(a[n]) : i;
    });
}
function eW(e) {
    var n = e.items,
        r = e.children,
        i = E(e, ['items', 'children']);
    return l.createElement(l.Fragment, null, eV(n, i)(r));
}
var eK = (function (e) {
        function n(n, r) {
            ((i = e.call(this) || this).source = n), (i.key = void 0), (i.idle = !0), (i.calc = void 0), (i.calc = s.createInterpolator.apply(void 0, r));
            var i,
                a = i._get(),
                o = s.is.arr(a) ? _.AnimatedArray : _.AnimatedValue;
            return _.setAnimated(v(i), o.create(a)), i;
        }
        f(n, e);
        var r = n.prototype;
        return (
            (r.advance = function (e) {
                var n = this._get(),
                    r = this.get();
                !s.isEqual(n, r) && (_.getAnimated(this).setValue(n), this._onChange(n, this.idle));
            }),
            (r._get = function () {
                var e = s.is.arr(this.source)
                    ? this.source.map(function (e) {
                          return e.get();
                      })
                    : s.toArray(this.source.get());
                return this.calc.apply(this, e);
            }),
            (r._reset = function () {
                s.each(_.getPayload(this), function (e) {
                    return e.reset();
                }),
                    e.prototype._reset.call(this);
            }),
            (r._start = function () {
                (this.idle = !1), e.prototype._start.call(this), h.skipAnimation ? ((this.idle = !0), this.advance()) : h.frameLoop.start(this);
            }),
            (r._attach = function () {
                var e = this,
                    n = !0,
                    r = 1;
                s.each(s.toArray(this.source), function (i) {
                    ea(i) && (!i.idle && (n = !1), (r = Math.max(r, i.priority + 1))), i.addChild(e);
                }),
                    (this.priority = r),
                    !n && (this._reset(), this._start());
            }),
            (r._detach = function () {
                var e = this;
                s.each(s.toArray(this.source), function (n) {
                    n.removeChild(e);
                }),
                    (this.idle = !0);
            }),
            (r.onParentChange = function (n) {
                'start' == n.type
                    ? this.advance()
                    : 'change' == n.type
                      ? this.idle
                          ? this.advance()
                          : n.idle &&
                            ((this.idle = s.toArray(this.source).every(function (e) {
                                return !1 !== e.idle;
                            })),
                            this.idle &&
                                (this.advance(),
                                s.each(_.getPayload(this), function (e) {
                                    e.done = !0;
                                })))
                      : 'priority' == n.type &&
                        (this.priority = s.toArray(this.source).reduce(function (e, n) {
                            return Math.max(e, (n.priority || 0) + 1);
                        }, 0)),
                    e.prototype.onParentChange.call(this, n);
            }),
            n
        );
    })(eo),
    ez = function (e) {
        for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
        return new eK(e, r);
    },
    eq = function (e) {
        for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
        return g.deprecateInterpolate(), new eK(e, r);
    };
s.Globals.assign({
    createStringInterpolator: I.createStringInterpolator,
    to: function (e, n) {
        return new eK(e, n);
    }
});
var eQ = function () {
    return s.Globals.frameLoop.advance();
};
Object.keys(T).forEach(function (e) {
    'default' !== e &&
        Object.defineProperty(n, e, {
            enumerable: !0,
            get: function () {
                return T[e];
            }
        });
}),
    Object.defineProperty(n, 'FrameLoop', {
        enumerable: !0,
        get: function () {
            return s.FrameLoop;
        }
    }),
    Object.defineProperty(n, 'Globals', {
        enumerable: !0,
        get: function () {
            return s.Globals;
        }
    }),
    Object.defineProperty(n, 'createInterpolator', {
        enumerable: !0,
        get: function () {
            return s.createInterpolator;
        }
    }),
    (n.BailSignal = ei),
    (n.Controller = ey),
    (n.FrameValue = eo),
    (n.Interpolation = eK),
    (n.Spring = eH),
    (n.SpringContext = ex),
    (n.SpringHandle = eP),
    (n.SpringValue = e_),
    (n.Trail = eY),
    (n.Transition = eW),
    (n.config = y),
    (n.inferTo = Y),
    (n.interpolate = eq),
    (n.to = ez),
    (n.update = eQ),
    (n.useChain = b),
    (n.useSpring = ek),
    (n.useSprings = eM),
    (n.useTrail = eU),
    (n.useTransition = eV);
