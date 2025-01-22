function i(e) {
    return e && 'object' == typeof e && 'default' in e ? e.default : e;
}
Object.defineProperty(n, '__esModule', { value: !0 });
var a = r(985445),
    o = r(698091),
    s = i(r(271491)),
    l = r(192379),
    u = i(r(356165)),
    c = i(r(79343)),
    d = i(r(355586)),
    f = i(r(21217)),
    p = r(857967),
    h = r(239189),
    _ = r(812028),
    m = i(r(91119)),
    g = r(640809),
    E = i(r(532825)),
    v = i(r(719427)),
    y = r(179237),
    b = r(467568);
function I(e, n, r) {
    void 0 === r && (r = 1000),
        a.useLayoutEffect(function () {
            if (n) {
                var i = 0;
                o.each(e, function (e, a) {
                    if (e.current) {
                        var s = e.current.controllers;
                        if (s.length) {
                            var l = r * n[a];
                            isNaN(l) ? (l = i) : (i = l),
                                o.each(s, function (e) {
                                    o.each(e.queue, function (e) {
                                        e.delay = l + (e.delay || 0);
                                    }),
                                        e.start();
                                });
                        }
                    }
                });
            } else {
                var a = Promise.resolve();
                o.each(e, function (e) {
                    var n = e.current || {},
                        r = n.controllers,
                        i = n.start;
                    if (r && r.length) {
                        var s = r.map(function (e) {
                            var n = e.queue;
                            return (e.queue = []), n;
                        });
                        a = a.then(function () {
                            return (
                                o.each(r, function (e, n) {
                                    var r;
                                    return (r = e.queue).push.apply(r, s[n]);
                                }),
                                i()
                            );
                        });
                    }
                });
            }
        });
}
var T = {
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
    A = s(
        s({}, T.default),
        {},
        {
            mass: 1,
            damping: 1,
            easing: S,
            clamp: !1
        }
    ),
    C = function () {
        (this.tension = void 0), (this.friction = void 0), (this.frequency = void 0), (this.damping = void 0), (this.mass = void 0), (this.velocity = 0), (this.restVelocity = void 0), (this.precision = void 0), (this.progress = void 0), (this.duration = void 0), (this.easing = void 0), (this.clamp = void 0), (this.bounce = void 0), (this.decay = void 0), (this.round = void 0), Object.assign(this, A);
    };
function N(e, n, r) {
    for (var i in (r && (R((r = s({}, r)), n), (n = s(s({}, r), n))), R(e, n), Object.assign(e, n), A)) null == e[i] && (e[i] = A[i]);
    var a = e.mass,
        l = e.frequency,
        u = e.damping;
    return !o.is.und(l) && (l < 0.01 && (l = 0.01), u < 0 && (u = 0), (e.tension = Math.pow((2 * Math.PI) / l, 2) * a), (e.friction = (4 * Math.PI * u * a) / l)), e;
}
function R(e, n) {
    if (o.is.und(n.decay)) {
        var r = !o.is.und(n.tension) || !o.is.und(n.friction);
        (r || !o.is.und(n.frequency) || !o.is.und(n.damping) || !o.is.und(n.mass)) && ((e.duration = void 0), (e.decay = void 0)), r && (e.frequency = void 0);
    } else e.duration = void 0;
}
var O = [],
    D = function () {
        (this.changed = !1), (this.values = O), (this.toValues = null), (this.fromValues = O), (this.to = void 0), (this.from = void 0), (this.config = new C()), (this.immediate = !1), (this.onStart = void 0), (this.onChange = void 0), (this.onRest = []);
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
    return _.useMemoOne(e, n || [{}]);
};
function M(e) {
    for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
    return o.is.fun(e) ? e.apply(void 0, r) : e;
}
var k = function (e, n) {
        return !0 === e || !!(n && e && (o.is.fun(e) ? e(n) : o.toArray(e).includes(n)));
    },
    U = function (e, n, r) {
        return e && (o.is.fun(e) ? e(n, r) : o.is.arr(e) ? e[n] : s({}, e));
    },
    B = function (e, n) {
        return !o.is.und(G(e, n));
    },
    G = function (e, n) {
        return !0 === e.default ? e[n] : e.default ? e.default[n] : void 0;
    },
    Z = function (e, n, r) {
        void 0 === n && (n = []), void 0 === r && (r = {});
        var i = V;
        e.default && !0 !== e.default && (i = Object.keys((e = e.default)));
        for (var a, s = L(i); !(a = s()).done; ) {
            var l = a.value,
                u = e[l];
            !o.is.und(u) && !n.includes(l) && (r[l] = u);
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
        (o.each(e, function (e, i) {
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
            o.each(e, function (e, i) {
                return i in n || (r[i] = e);
            }),
            r
        );
    }
    return s({}, e);
}
function W(e) {
    var n = o.getFluidConfig(e);
    return n
        ? W(n.get())
        : o.is.arr(e)
          ? e.map(W)
          : o.isAnimatedString(e)
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
            p = k(i.cancel, r);
        function h() {
            a.resumeQueue.add(_), d.cancel(), (c = d.time - o.Globals.now());
        }
        function _() {
            c > 0 ? (a.pauseQueue.add(h), (d = o.Globals.frameLoop.setTimeout(m, c))) : m();
        }
        function m() {
            a.pauseQueue.delete(h), e <= (a.cancelId || 0) && (p = !0);
            try {
                l.start(
                    s(
                        s({}, i),
                        {},
                        {
                            callId: e,
                            delay: c,
                            cancel: p,
                            pause: f
                        }
                    ),
                    n
                );
            } catch (e) {
                u(e);
            }
        }
        p ? m() : ((c = M(i.delay || 0, r)), (f = k(i.pause, r)) ? (a.resumeQueue.add(_), l.pause()) : (l.resume(), _()));
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
            var l, d, f, p, _;
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
                            if (((l = r.callId), (d = r.parentId), (f = r.onRest), (p = i.asyncTo), (_ = i.promise), !(!d && n === p && !r.reset))) {
                                e.next = 7;
                                break;
                            }
                            return e.abrupt('return', _);
                        case 7:
                            return e.abrupt(
                                'return',
                                (i.promise = c(
                                    u.mark(function e() {
                                        var m, g, E, v, y, b, I, T, S;
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
                                                                (y = function (e) {
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
                                                                (b = function (e) {
                                                                    var n = (l <= (i.cancelId || 0) && X(a)) || (l !== i.asyncId && Q(a, !1));
                                                                    if (n) throw ((e.result = n), e);
                                                                }),
                                                                (I = y(function (e, n) {
                                                                    var r = new ei();
                                                                    b(r);
                                                                    var d = o.is.obj(e) ? s({}, e) : s(s({}, n), {}, { to: e });
                                                                    return (
                                                                        (d.parentId = l),
                                                                        o.each(m, function (e, n) {
                                                                            o.is.und(d[n]) && (d[n] = e);
                                                                        }),
                                                                        a.start(d).then(
                                                                            (function () {
                                                                                var e = c(
                                                                                    u.mark(function e(n) {
                                                                                        return u.wrap(function (e) {
                                                                                            for (;;)
                                                                                                switch ((e.prev = e.next)) {
                                                                                                    case 0:
                                                                                                        if ((b(r), !a.is('PAUSED'))) {
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
                                                                o.is.arr(n)
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
                                                                                                  return (a = i.value), (e.next = 5), I(a);
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
                                                                    : o.is.fun(n) && (S = Promise.resolve(n(I, a.stop.bind(a)))),
                                                                (e.next = 11),
                                                                Promise.all([S.then(g), v])
                                                            );
                                                        case 11:
                                                            (T = Q(a, !0)), (e.next = 21);
                                                            break;
                                                        case 14:
                                                            if (((e.prev = 14), (e.t0 = e.catch(7)), !(e.t0 instanceof ei))) {
                                                                e.next = 20;
                                                                break;
                                                            }
                                                            (T = e.t0.result), (e.next = 21);
                                                            break;
                                                        case 20:
                                                            throw e.t0;
                                                        case 21:
                                                            return (e.prev = 21), l == i.asyncId && ((i.asyncId = d), (i.asyncTo = d ? p : void 0), (i.promise = d ? _ : void 0)), e.finish(21);
                                                        case 24:
                                                            return (
                                                                o.is.fun(f) &&
                                                                    h.batchedUpdates(function () {
                                                                        f(T);
                                                                    }),
                                                                e.abrupt('return', T)
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
        return e instanceof es;
    },
    eo = 1,
    es = (function (e) {
        function n() {
            for (var n, r = arguments.length, i = Array(r), a = 0; a < r; a++) i[a] = arguments[a];
            return ((n = e.call.apply(e, [this].concat(i)) || this).id = eo++), (n.key = void 0), (n._priority = 0), (n._children = new Set()), n;
        }
        f(n, e);
        var r = n.prototype;
        return (
            (r.get = function () {
                var e = p.getAnimated(this);
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
                o.each(Array.from(this._children), function (n) {
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
    })(o.FluidValue),
    el = 'CREATED',
    eu = 'IDLE',
    ec = 'ACTIVE',
    ed = 'PAUSED',
    ef = 'DISPOSED',
    ep = (function (e) {
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
                !o.is.und(n) || !o.is.und(r))
            ) {
                var a = o.is.obj(n) ? s({}, n) : s(s({}, r), {}, { from: n });
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
                    s = a.config,
                    l = a.toValues,
                    u = p.getPayload(a.to);
                if (!u) {
                    var c = o.getFluidConfig(a.to);
                    c && (l = o.toArray(c.get()));
                }
                return (
                    a.values.forEach(function (c, d) {
                        if (!c.done) {
                            var f = u ? u[d].lastPosition : l[d],
                                p = a.immediate,
                                h = f;
                            if (!p) {
                                if (((h = c.lastPosition), s.tension <= 0)) {
                                    c.done = !0;
                                    return;
                                }
                                var _ = (c.elapsedTime += e),
                                    m = a.fromValues[d],
                                    g = null != c.v0 ? c.v0 : (c.v0 = o.is.arr(s.velocity) ? s.velocity[d] : s.velocity);
                                if (o.is.und(s.duration)) {
                                    if (s.decay) {
                                        var E = !0 === s.decay ? 0.998 : s.decay,
                                            v = Math.exp(-(1 - E) * _);
                                        (h = m + (g / (1 - E)) * (1 - v)), (p = 0.1 > Math.abs(c.lastPosition - h)), (y = g * v);
                                    } else {
                                        y = null == c.lastVelocity ? g : c.lastVelocity;
                                        for (var y, b = s.precision || (m == f ? 0.005 : Math.min(1, 0.001 * Math.abs(f - m))), I = s.restVelocity || b / 10, T = s.clamp ? 0 : s.bounce, S = !o.is.und(T), A = m == f ? c.v0 > 0 : m < f, C = !1, N = 1, R = Math.ceil(e / 1), O = 0; O < R && !(!(Math.abs(y) > I) && (p = Math.abs(f - h) <= b)); ++O) {
                                            S && (C = h == f || h > f == A) && ((y = -y * T), (h = f));
                                            var D = (-(0.000001 * s.tension) * (h - f) + -(0.001 * s.friction) * y) / s.mass;
                                            (y += D * N), (h += y * N);
                                        }
                                    }
                                } else {
                                    var L = s.progress || 0;
                                    s.duration <= 0 ? (L = 1) : (L += (1 - L) * Math.min(1, _ / s.duration)), (y = ((h = m + s.easing(L) * (f - m)) - c.lastPosition) / e), (p = 1 == L);
                                }
                                (c.lastVelocity = y), Number.isNaN(h) && (console.warn('Got NaN while animating:', n), (p = !0));
                            }
                            u && !u[d].done && (p = !1), p ? (c.done = !0) : (r = !1), c.setValue(h, s.round) && (i = !0);
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
                        o.flush(this._state.pauseQueue, function (e) {
                            return e();
                        }));
            }),
            (r.resume = function () {
                eh(this, 'resume'),
                    this.is(ed) &&
                        (this._start(),
                        o.flush(this._state.resumeQueue, function (e) {
                            return e();
                        }));
            }),
            (r.finish = function (e) {
                var n = this;
                if ((this.resume(), this.is(ec))) {
                    var r = this.animation;
                    !r.config.decay && o.is.und(e) && (e = r.to),
                        !o.is.und(e) && this._set(e),
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
                                                o.is.und(n) ? ((i = this.queue || []), (this.queue = [])) : (i = [o.is.obj(n) ? n : s(s({}, r), {}, { to: n })]),
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
                n = !o.is.obj(n) || o.getFluidConfig(n) ? n : n[a];
                var s = {
                    to: n,
                    from: (r = !o.is.obj(r) || o.getFluidConfig(r) ? r : r[a])
                };
                if (this.is(el)) {
                    if (i) {
                        var l = [r, n];
                        (n = l[0]), (r = l[1]);
                    }
                    r = o.getFluidValue(r);
                    var u = this._updateNode(o.is.und(r) ? o.getFluidValue(n) : r);
                    u && !o.is.und(r) && u.setValue(r);
                }
                return s;
            }),
            (r._updateNode = function (e) {
                var n = p.getAnimated(this);
                if (!o.is.und(e)) {
                    var r = this._getNodeType(e);
                    (!n || n.constructor !== r) && p.setAnimated(this, (n = r.create(e)));
                }
                return n;
            }),
            (r._getNodeType = function (e) {
                var n = p.getAnimated(e);
                return n ? n.constructor : o.is.arr(e) ? p.AnimatedArray : o.isAnimatedString(e) ? p.AnimatedString : p.AnimatedValue;
            }),
            (r._update = function (e, n) {
                var r = this,
                    i = this._defaultProps,
                    a = function (n) {
                        var r = G(e, n);
                        !o.is.und(r) && (i[n] = r), i[n] && (e[n] = i[n]);
                    };
                a('cancel'), a('pause');
                var s = this._prepareNode(e);
                return K(++this._lastCallId, {
                    key: this.key,
                    props: e,
                    state: this._state,
                    actions: {
                        pause: this.pause.bind(this),
                        resume: this.resume.bind(this),
                        start: this._merge.bind(this, s)
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
                    s = this._defaultProps,
                    l = !o.is.und(e.to),
                    u = !o.is.und(e.from);
                if (l || u) {
                    if (!(n.callId > this._lastToId)) return r(X(this));
                    this._lastToId = n.callId;
                }
                var c = function (e) {
                        return o.is.und(n[e]) ? s[e] : n[e];
                    },
                    d = e_(c('onDelayEnd'), i);
                d && d(n, this), n.default && F(s, n, ['pause', 'cancel']);
                var f = a.to,
                    _ = a.from,
                    m = e.to,
                    g = void 0 === m ? f : m,
                    E = e.from,
                    v = void 0 === E ? _ : E;
                if ((u && !l && (g = v), n.reverse)) {
                    var y = [v, g];
                    (g = y[0]), (v = y[1]);
                }
                var b = !o.isEqual(v, _);
                b && (a.from = v);
                var I = !o.isEqual(g, f);
                I && this._focus(g);
                var T = o.getFluidConfig(g),
                    S = o.getFluidConfig(v);
                S && (v = S.get());
                var A = o.is.arr(n.to) || o.is.fun(n.to),
                    C = a.config,
                    R = C.decay,
                    O = C.velocity;
                n.config && !A && N(C, M(n.config, i), n.config !== s.config ? M(s.config, i) : void 0);
                var D = p.getAnimated(this);
                if (!D || o.is.und(g)) return r(Q(this, !0));
                var L = o.is.und(n.reset) ? u && !n.default : !o.is.und(v) && k(n.reset, i),
                    x = L ? v : this.get(),
                    w = W(g),
                    P = o.is.num(w) || o.is.arr(w) || o.isAnimatedString(w),
                    U = !A && (!P || k(s.immediate || n.immediate, i));
                if (I) {
                    if (U) D = this._updateNode(w);
                    else {
                        var B = this._getNodeType(g);
                        if (B !== D.constructor) throw Error('Cannot animate between ' + D.constructor.name + ' and ' + B.name + ', as the "to" prop suggests');
                    }
                }
                var G = D.constructor,
                    Z = !!T,
                    V = !1;
                if (!Z) {
                    var j = L || (this.is(el) && b);
                    (I || j) && (Z = !(V = o.isEqual(W(x), w))), (!o.isEqual(C.decay, R) || !o.isEqual(C.velocity, O)) && (Z = !0);
                }
                if ((V && this.is(ec) && (a.changed && !L ? (Z = !0) : !Z && this._stop()), !A)) {
                    (Z || o.getFluidConfig(f)) && ((a.values = D.getPayload()), (a.toValues = T ? null : G == p.AnimatedString ? [1] : o.toArray(w))), (a.immediate = U), (a.onStart = e_(c('onStart'), i)), (a.onChange = e_(c('onChange'), i));
                    var H = a.onRest,
                        Y = L && !n.onRest ? H[0] || o.noop : em(e_(c('onRest'), i), this);
                    if (Z) {
                        a.onRest = [Y, em(r, this)];
                        var K = L ? 0 : 1;
                        K < H.length &&
                            h.batchedUpdates(function () {
                                for (; K < H.length; K++) H[K]();
                            });
                    } else (L || n.onRest) && (a.onRest[0] = Y);
                }
                var z = e_(c('onProps'), i);
                if ((z && z(n, this), L && D.setValue(x), A)) r(et(n.to, n, this._state, this));
                else if (Z) L && (this._phase = eu), this._reset(), this._start();
                else if (this.is(ec) && !I) a.onRest.push(em(r, this));
                else {
                    let e = q(this, x),
                        n = e_(c('onNoopRest'), i);
                    null != n && n(e), r(e);
                }
            }),
            (r._focus = function (e) {
                var n = this.animation;
                if (e !== n.to) {
                    var r = o.getFluidConfig(n.to);
                    r && r.removeChild(this), (n.to = e);
                    var i = 0;
                    (r = o.getFluidConfig(e)) && (r.addChild(this), ea(e) && (i = (e.priority || 0) + 1)), (this.priority = i);
                }
            }),
            (r._set = function (e) {
                var n = o.getFluidConfig(e);
                n && (e = n.get());
                var r = p.getAnimated(this),
                    i = r && r.getValue();
                return r ? r.setValue(e) : this._updateNode(e), !o.isEqual(e, i);
            }),
            (r._onChange = function (n, r) {
                void 0 === r && (r = !1);
                var i = this.animation;
                !i.changed && !r && ((i.changed = !0), i.onStart && i.onStart(this)), i.onChange && i.onChange(n, this), e.prototype._onChange.call(this, n, r);
            }),
            (r._reset = function () {
                var n = this.animation;
                p.getAnimated(this).reset(n.to),
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
                    o.each(n.values, function (e) {
                        e.done = !0;
                    });
                    var r = n.onRest;
                    r.length &&
                        ((n.onRest = [n.toValues ? o.noop : r[0]]),
                        !n.changed && (r[0] = o.noop),
                        o.each(r, function (n) {
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
                        return o.getFluidValue(this.animation.to);
                    }
                },
                {
                    key: 'velocity',
                    get: function () {
                        var e = p.getAnimated(this);
                        return e instanceof p.AnimatedValue
                            ? e.lastVelocity || 0
                            : e.getPayload().map(function (e) {
                                  return e.lastVelocity || 0;
                              });
                    }
                }
            ]),
            n
        );
    })(es);
function eh(e, n) {
    if (e.is(ef)) throw Error('Cannot call "' + n + '" of disposed "' + e.constructor.name + '" object');
}
function e_(e, n) {
    return o.is.fun(e) ? e : n && e ? e[n] : void 0;
}
var em = function (e, n) {
    var r = n.animation.to;
    return e
        ? function (i) {
              if (i) e(X(n));
              else {
                  var a = W(r),
                      s = W(n.get());
                  e(Q(n, o.isEqual(s, a)));
              }
          }
        : o.noop;
};
function eg(e, n, r) {
    void 0 === n && (n = e.loop), void 0 === r && (r = e.to);
    var i = M(n);
    if (i) {
        var a = !0 !== i && Y(i),
            l = (a || e).reverse,
            u = !a || a.reset;
        return eE(
            s(
                s({}, e),
                {},
                {
                    loop: n,
                    default: !1,
                    to: !l || o.is.arr(r) || o.is.fun(r) ? r : void 0,
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
    return i ? ey(i, a) : delete e.from, o.is.obj(r) ? ey(r, a) : !r && delete e.to, (e.keys = a.size ? Array.from(a) : null), e;
}
function ev(e) {
    var n = eE(e);
    return o.is.und(n.default) && (n.default = Z(n, [!0 === n.immediate && 'immediate'])), n;
}
function ey(e, n) {
    o.each(e, function (e, r) {
        return null != e && n.add(r);
    });
}
var eb = ['onStart', 'onChange', 'onRest'],
    eI = 1,
    eT = (function () {
        function e(e, n) {
            (this.id = eI++),
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
                var n = e ? o.toArray(e).map(eE) : this.queue;
                return (!e && (this.queue = []), this._flush) ? this._flush(this, n) : (eD(this, n), eS(this, n));
            }),
            (n.stop = function (e) {
                if (o.is.und(e))
                    this.each(function (e) {
                        return e.stop();
                    }),
                        er(this._state, this._lastAsyncId);
                else {
                    var n = this.springs;
                    o.each(o.toArray(e), function (e) {
                        return n[e].stop();
                    });
                }
                return this;
            }),
            (n.pause = function (e) {
                if (o.is.und(e))
                    this.each(function (e) {
                        return e.pause();
                    });
                else {
                    var n = this.springs;
                    o.each(o.toArray(e), function (e) {
                        return n[e].pause();
                    });
                }
                return this;
            }),
            (n.resume = function (e) {
                if (o.is.und(e))
                    this.each(function (e) {
                        return e.resume();
                    });
                else {
                    var n = this.springs;
                    o.each(o.toArray(e), function (e) {
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
                o.each(this.springs, e);
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
                    s = this._active.size > 0;
                s &&
                    this._phase != ec &&
                    ((this._phase = ec),
                    o.flush(r, function (n) {
                        return n(e);
                    }));
                var l = (i.size || (!s && a.size)) && this.get();
                o.flush(i, function (e) {
                    return e(l);
                }),
                    !s &&
                        ((this._phase = eu),
                        o.flush(a, function (e) {
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
        s = n.onRest;
    a && (n.loop = !1);
    var l = o.is.arr(i) || o.is.fun(i) ? i : void 0;
    l
        ? ((n.to = void 0), (n.onRest = void 0))
        : o.each(eb, function (r) {
              var i = n[r];
              if (o.is.fun(i)) {
                  var a = e._events[r];
                  a instanceof Set
                      ? (n[r] = function () {
                            return a.add(i);
                        })
                      : (n[r] = function (e) {
                            var n = e.finished,
                                r = e.cancelled,
                                o = a.get(i);
                            o
                                ? (!n && (o.finished = !1), r && (o.cancelled = !0))
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
                          pause: o.noop,
                          resume: o.noop,
                          start: function (n, r) {
                              (n.onRest = s), n.cancel ? B(n, 'cancel') && er(c, n.callId) : r(et(l, n, c, e));
                          }
                      }
                  })
              )
            : !n.keys && !0 === n.cancel && er(c, e._lastAsyncId),
        Promise.all(u).then(function (o) {
            var s = z(e, o);
            if (a && s.finished && !(r && s.noop)) {
                var l = eg(n, a, i);
                if (l) return eD(e, [l]), eA(e, l, !0);
            }
            return s;
        })
    );
}
function eC(e, n) {
    var r = s({}, e.springs);
    return (
        n &&
            o.each(o.toArray(n), function (e) {
                o.is.und(e.keys) && (e = eE(e)),
                    !o.is.obj(e.to) && (e = s(s({}, e), {}, { to: void 0 })),
                    eO(r, e, function (e) {
                        return eR(e);
                    });
            }),
        r
    );
}
function eN(e, n) {
    o.each(n, function (n, r) {
        !e.springs[r] && ((e.springs[r] = n), n.addChild(e));
    });
}
function eR(e, n) {
    var r = new ep();
    return (r.key = e), n && r.addChild(n), r;
}
function eO(e, n, r) {
    n.keys &&
        o.each(n.keys, function (i) {
            (e[i] || (e[i] = r(i)))._prepareNode(n);
        });
}
function eD(e, n) {
    o.each(n, function (n) {
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
                return s(s({}, i), r);
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
                        o.each(e(), function (e, r) {
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
                    return o.each(e(), function (e) {
                        return e.stop(n);
                    });
                },
                pause: function (n) {
                    return o.each(e(), function (e) {
                        return e.pause(n);
                    });
                },
                resume: function (n) {
                    return o.each(e(), function (e) {
                        return e.resume(n);
                    });
                }
            };
        }
    };
function eM(e, n, r) {
    var i = o.is.fun(n) && n;
    i && !r && (r = []);
    var u = l.useRef(0),
        c = o.useForceUpdate(),
        d = l.useState(function () {
            return {
                ctrls: [],
                queue: [],
                flush: function (e, n) {
                    var r = eC(e, n);
                    return !(u.current > 0) ||
                        d.queue.length ||
                        Object.keys(r).some(function (n) {
                            return !e.springs[n];
                        })
                        ? new Promise(function (i) {
                              eN(e, r),
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
        p = [].concat(d.ctrls),
        h = [],
        _ = o.usePrev(e) || 0,
        m = p.slice(e, _);
    function g(e, r) {
        for (var a = e; a < r; a++) {
            var o = p[a] || (p[a] = new eT(null, d.flush)),
                s = i ? i(a, o) : n[a];
            s && ((s = h[a] = ev(s)), 0 == a && ((f.current = s.ref), (s.ref = void 0)));
        }
    }
    P(
        function () {
            (p.length = e), g(_, e);
        },
        [e]
    ),
        P(function () {
            g(0, Math.min(_, e));
        }, r);
    var E = l.useMemo(function () {
            return eP.create(function () {
                return d.ctrls;
            });
        }, []),
        v = p.map(function (e, n) {
            return eC(e, h[n]);
        }),
        y = ew();
    a.useLayoutEffect(function () {
        u.current++, (d.ctrls = p), f.current && (f.current.current = E);
        var e = d.queue;
        e.length &&
            ((d.queue = []),
            o.each(e, function (e) {
                return e();
            })),
            o.each(m, function (e) {
                return e.dispose();
            }),
            o.each(p, function (e, n) {
                eN(e, v[n]), e.start({ default: y });
                var r = h[n];
                r && (f.current ? e.queue.push(r) : e.start(r));
            });
    }),
        o.useOnce(function () {
            return function () {
                o.each(d.ctrls, function (e) {
                    return e.dispose();
                });
            };
        });
    var b = v.map(function (e) {
        return s({}, e);
    });
    return i || 3 == arguments.length ? [b, E.start, E.stop] : b;
}
function ek(e, n) {
    var r = o.is.fun(e),
        i = eM(1, r ? e : [e], r ? n || [] : n),
        a = i[0][0],
        s = i[1],
        l = i[2];
    return r || 2 == arguments.length ? [a, s, l] : a;
}
function eU(e, n, r) {
    var i = o.is.fun(n) && n;
    i && !r && (r = []);
    var s = [],
        l = eM(
            e,
            function (e, r) {
                return (s[e] = r), U(n, e, r);
            },
            r || [{}]
        );
    if (
        (a.useLayoutEffect(function () {
            for (var e = o.is.obj(n) && n.reverse, r = 0; r < s.length; r++) {
                var i = s[r + (e ? 1 : -1)];
                i && s[r].update({ to: i.springs }).start();
            }
        }, r),
        i || 3 == arguments.length)
    ) {
        var u = l[1];
        return (
            (l[1] = _.useCallbackOne(function (e) {
                var n = o.is.obj(e) && e.reverse;
                return u(function (r, i) {
                    var a = U(e, r, i),
                        o = s[r + (n ? 1 : -1)];
                    return o && (a.to = o.springs), a;
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
        p = n.expires,
        h = void 0 === p || p,
        _ = o.toArray(e),
        m = [],
        g = ej(_, n),
        E = l.useRef(null),
        v = u ? null : E.current;
    a.useLayoutEffect(function () {
        E.current = m;
    }),
        o.useOnce(function () {
            return function () {
                return o.each(E.current, function (e) {
                    e.expired && clearTimeout(e.expirationId), e.ctrl.dispose();
                });
            };
        });
    var y = [];
    if (
        (v &&
            o.each(v, function (e, n) {
                e.expired ? clearTimeout(e.expirationId) : ~(n = y[n] = g.indexOf(e.key)) && (m[n] = e);
            }),
        o.each(_, function (e, n) {
            m[n] ||
                (m[n] = {
                    key: g[n],
                    item: e,
                    phase: eB,
                    ctrl: new eT()
                });
        }),
        y.length)
    ) {
        var b = -1;
        o.each(y, function (e, r) {
            var i = v[r];
            ~e ? ((b = m.indexOf(i)), (m[b] = s(s({}, i), {}, { item: _[e] }))) : n.leave && m.splice(++b, 0, i);
        });
    }
    o.is.fun(c) &&
        m.sort(function (e, n) {
            return c(e.item, n.item);
        });
    var I = -f,
        T = o.useForceUpdate(),
        S = Z(n),
        A = new Map();
    o.each(m, function (e, r) {
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
        if (((i = M(i, e.item, r)), !(i = o.is.obj(i) ? Y(i) : { to: i }).config)) {
            var d = n.config || S.config;
            i.config = M(d, e.item, r);
        }
        var p = s(
            s({}, S),
            {},
            {
                delay: (I += f),
                reset: !1
            },
            i
        );
        if (a == eG && o.is.und(p.from)) {
            var _ = o.is.und(n.initial) || v ? n.from : n.initial;
            p.from = M(_, e.item, r);
        }
        var m = p.onRest;
        p.onRest = p.onNoopRest = function (e) {
            var n = E.current,
                r = n.find(function (e) {
                    return e.key === l;
                });
            if (r) {
                if ((o.is.fun(m) && !0 !== e.noop && m(e, r), e.cancelled && r.phase != eZ)) {
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
                            var s = !0 === a ? 0 : a;
                            if (((r.expired = !0), !i && s > 0)) {
                                s <= 2147483647 && (r.expirationId = setTimeout(T, s));
                                return;
                            }
                        }
                    }
                    i &&
                        n.some(function (e) {
                            return e.expired;
                        }) &&
                        T();
                }
            }
        };
        var y = eC(e.ctrl, p);
        A.set(e, {
            phase: a,
            springs: y,
            payload: p
        });
    });
    var C = ew();
    a.useLayoutEffect(
        function () {
            o.each(m, function (e) {
                e.ctrl.start({ default: C });
            });
        },
        [C]
    );
    var N = l.useMemo(function () {
        return eP.create(function () {
            return E.current.map(function (e) {
                return e.ctrl;
            });
        });
    }, []);
    l.useImperativeHandle(i, function () {
        return N;
    }),
        a.useLayoutEffect(
            function () {
                o.each(A, function (e, n) {
                    var r = e.phase,
                        a = e.springs,
                        o = e.payload;
                    eN(n.ctrl, a), !C.cancel && ((n.phase = r), r == eG && n.ctrl.start({ default: C }), n.ctrl[i ? 'update' : 'start'](o));
                });
            },
            u ? void 0 : r
        );
    var R = function (e) {
        return l.createElement(
            l.Fragment,
            null,
            m.map(function (n, r) {
                var i = e(s({}, (A.get(n) || n.ctrl).springs), n.item, n, r);
                return i && i.type
                    ? l.createElement(
                          i.type,
                          s({}, i.props, {
                              key: o.is.str(n.key) || o.is.num(n.key) ? n.key : n.ctrl.id,
                              ref: i.ref
                          })
                      )
                    : i;
            })
        );
    };
    return 3 == arguments.length ? [R, N.start, N.stop] : R;
}
function ej(e, n) {
    var r = n.key,
        i = n.keys,
        a = void 0 === i ? r : i;
    return o.is.und(a) ? e : o.is.fun(a) ? e.map(a) : o.toArray(a);
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
        return o.is.fun(i) ? i(a[n]) : i;
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
            ((i = e.call(this) || this).source = n), (i.key = void 0), (i.idle = !0), (i.calc = void 0), (i.calc = o.createInterpolator.apply(void 0, r));
            var i,
                a = i._get(),
                s = o.is.arr(a) ? p.AnimatedArray : p.AnimatedValue;
            return p.setAnimated(v(i), s.create(a)), i;
        }
        f(n, e);
        var r = n.prototype;
        return (
            (r.advance = function (e) {
                var n = this._get(),
                    r = this.get();
                !o.isEqual(n, r) && (p.getAnimated(this).setValue(n), this._onChange(n, this.idle));
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
                o.each(p.getPayload(this), function (e) {
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
                o.each(o.toArray(this.source), function (i) {
                    ea(i) && (!i.idle && (n = !1), (r = Math.max(r, i.priority + 1))), i.addChild(e);
                }),
                    (this.priority = r),
                    !n && (this._reset(), this._start());
            }),
            (r._detach = function () {
                var e = this;
                o.each(o.toArray(this.source), function (n) {
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
                            ((this.idle = o.toArray(this.source).every(function (e) {
                                return !1 !== e.idle;
                            })),
                            this.idle &&
                                (this.advance(),
                                o.each(p.getPayload(this), function (e) {
                                    e.done = !0;
                                })))
                      : 'priority' == n.type &&
                        (this.priority = o.toArray(this.source).reduce(function (e, n) {
                            return Math.max(e, (n.priority || 0) + 1);
                        }, 0)),
                    e.prototype.onParentChange.call(this, n);
            }),
            n
        );
    })(es),
    ez = function (e) {
        for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
        return new eK(e, r);
    },
    eq = function (e) {
        for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
        return g.deprecateInterpolate(), new eK(e, r);
    };
o.Globals.assign({
    createStringInterpolator: y.createStringInterpolator,
    to: function (e, n) {
        return new eK(e, n);
    }
});
var eQ = function () {
    return o.Globals.frameLoop.advance();
};
Object.keys(b).forEach(function (e) {
    'default' !== e &&
        Object.defineProperty(n, e, {
            enumerable: !0,
            get: function () {
                return b[e];
            }
        });
}),
    Object.defineProperty(n, 'FrameLoop', {
        enumerable: !0,
        get: function () {
            return o.FrameLoop;
        }
    }),
    Object.defineProperty(n, 'Globals', {
        enumerable: !0,
        get: function () {
            return o.Globals;
        }
    }),
    Object.defineProperty(n, 'createInterpolator', {
        enumerable: !0,
        get: function () {
            return o.createInterpolator;
        }
    }),
    (n.BailSignal = ei),
    (n.Controller = eT),
    (n.FrameValue = es),
    (n.Interpolation = eK),
    (n.Spring = eH),
    (n.SpringContext = ex),
    (n.SpringHandle = eP),
    (n.SpringValue = ep),
    (n.Trail = eY),
    (n.Transition = eW),
    (n.config = T),
    (n.inferTo = Y),
    (n.interpolate = eq),
    (n.to = ez),
    (n.update = eQ),
    (n.useChain = I),
    (n.useSpring = ek),
    (n.useSprings = eM),
    (n.useTrail = eU),
    (n.useTransition = eV);
