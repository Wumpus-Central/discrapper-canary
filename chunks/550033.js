function r(e) {
    return e && 'object' == typeof e && 'default' in e ? e.default : e;
}
Object.defineProperty(t, '__esModule', { value: !0 });
var i = n(985445),
    o = n(698091),
    a = r(n(271491)),
    s = n(192379),
    l = r(n(356165)),
    c = r(n(79343)),
    u = r(n(355586)),
    d = r(n(21217)),
    f = n(857967),
    _ = n(239189),
    p = n(812028),
    h = r(n(91119)),
    m = n(640809),
    g = r(n(532825)),
    E = r(n(719427)),
    b = n(179237),
    y = n(467568);
function v(e, t, n) {
    void 0 === n && (n = 1000),
        i.useLayoutEffect(function () {
            if (t) {
                var r = 0;
                o.each(e, function (e, i) {
                    if (e.current) {
                        var a = e.current.controllers;
                        if (a.length) {
                            var s = n * t[i];
                            isNaN(s) ? (s = r) : (r = s),
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
                        n = t.controllers,
                        r = t.start;
                    if (n && n.length) {
                        var a = n.map(function (e) {
                            var t = e.queue;
                            return (e.queue = []), t;
                        });
                        i = i.then(function () {
                            return (
                                o.each(n, function (e, t) {
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
var O = {
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
    I = function (e) {
        return e;
    },
    S = a(
        a({}, O.default),
        {},
        {
            mass: 1,
            damping: 1,
            easing: I,
            clamp: !1
        }
    ),
    T = function () {
        (this.tension = void 0), (this.friction = void 0), (this.frequency = void 0), (this.damping = void 0), (this.mass = void 0), (this.velocity = 0), (this.restVelocity = void 0), (this.precision = void 0), (this.progress = void 0), (this.duration = void 0), (this.easing = void 0), (this.clamp = void 0), (this.bounce = void 0), (this.decay = void 0), (this.round = void 0), Object.assign(this, S);
    };
function N(e, t, n) {
    for (var r in (n && (A((n = a({}, n)), t), (t = a(a({}, n), t))), A(e, t), Object.assign(e, t), S)) null == e[r] && (e[r] = S[r]);
    var i = e.mass,
        s = e.frequency,
        l = e.damping;
    return o.is.und(s) || (s < 0.01 && (s = 0.01), l < 0 && (l = 0), (e.tension = Math.pow((2 * Math.PI) / s, 2) * i), (e.friction = (4 * Math.PI * l * i) / s)), e;
}
function A(e, t) {
    if (o.is.und(t.decay)) {
        var n = !o.is.und(t.tension) || !o.is.und(t.friction);
        (!n && o.is.und(t.frequency) && o.is.und(t.damping) && o.is.und(t.mass)) || ((e.duration = void 0), (e.decay = void 0)), n && (e.frequency = void 0);
    } else e.duration = void 0;
}
var C = [],
    R = function () {
        (this.changed = !1), (this.values = C), (this.toValues = null), (this.fromValues = C), (this.to = void 0), (this.from = void 0), (this.config = new T()), (this.immediate = !1), (this.onStart = void 0), (this.onChange = void 0), (this.onRest = []);
    };
function P(e) {
    var t = 0;
    if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (e = w(e)))
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
function w(e, t) {
    if (e) {
        if ('string' == typeof e) return D(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (('Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n)) return Array.from(e);
        if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return D(e, t);
    }
}
function D(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
}
var L = function (e, t) {
    return p.useMemoOne(e, t || [{}]);
};
function x(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    return o.is.fun(e) ? e.apply(void 0, n) : e;
}
var M = function (e, t) {
        return !0 === e || !!(t && e && (o.is.fun(e) ? e(t) : o.toArray(e).includes(t)));
    },
    k = function (e, t, n) {
        return e && (o.is.fun(e) ? e(t, n) : o.is.arr(e) ? e[t] : a({}, e));
    },
    j = function (e, t) {
        return !o.is.und(U(e, t));
    },
    U = function (e, t) {
        return !0 === e.default ? e[t] : e.default ? e.default[t] : void 0;
    },
    G = function (e, t, n) {
        void 0 === t && (t = []), void 0 === n && (n = {});
        var r = F;
        e.default && !0 !== e.default && (r = Object.keys((e = e.default)));
        for (var i, a = P(r); !(i = a()).done; ) {
            var s = i.value,
                l = e[s];
            o.is.und(l) || t.includes(s) || (n[s] = l);
        }
        return n;
    },
    B = function (e, t, n) {
        return G(t, n, e);
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
function Z(e) {
    var t = {},
        n = 0;
    if (
        (o.each(e, function (e, r) {
            !V[r] && ((t[r] = e), n++);
        }),
        n)
    )
        return t;
}
function H(e) {
    var t = Z(e);
    if (t) {
        var n = { to: t };
        return (
            o.each(e, function (e, r) {
                return r in t || (n[r] = e);
            }),
            n
        );
    }
    return a({}, e);
}
function W(e) {
    var t = o.getFluidConfig(e);
    return t
        ? W(t.get())
        : o.is.arr(e)
          ? e.map(W)
          : o.isAnimatedString(e)
            ? _.createStringInterpolator({
                  range: [0, 1],
                  output: [e, e]
              })(1)
            : e;
}
function Y(e, t) {
    var n = t.key,
        r = t.props,
        i = t.state,
        s = t.actions;
    return new Promise(function (t, l) {
        var c,
            u,
            d = !1,
            f = M(r.cancel, n);
        function _() {
            i.resumeQueue.add(p), u.cancel(), (c = u.time - o.Globals.now());
        }
        function p() {
            c > 0 ? (i.pauseQueue.add(_), (u = o.Globals.frameLoop.setTimeout(h, c))) : h();
        }
        function h() {
            i.pauseQueue.delete(_), e <= (i.cancelId || 0) && (f = !0);
            try {
                s.start(
                    a(
                        a({}, r),
                        {},
                        {
                            callId: e,
                            delay: c,
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
        f ? h() : ((c = x(r.delay || 0, n)), (d = M(r.pause, n)) ? (i.resumeQueue.add(p), s.pause()) : (s.resume(), p()));
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
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
}
function ee(e, t, n, r) {
    return et.apply(this, arguments);
}
function et() {
    return (et = c(
        l.mark(function e(t, n, r, i) {
            var s, u, d, f, p;
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
                            if (((s = n.callId), (u = n.parentId), (d = n.onRest), (f = r.asyncTo), (p = r.promise), !(!u && t === f && !n.reset))) {
                                e.next = 7;
                                break;
                            }
                            return e.abrupt('return', p);
                        case 7:
                            return e.abrupt(
                                'return',
                                (r.promise = c(
                                    l.mark(function e() {
                                        var h, m, g, E, b, y, v, O, I;
                                        return l.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return (
                                                                (r.asyncId = s),
                                                                (r.asyncTo = t),
                                                                (h = G(n, ['onRest'])),
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
                                                                    var t = (s <= (r.cancelId || 0) && Q(i)) || (s !== r.asyncId && q(i, !1));
                                                                    if (t) throw ((e.result = t), e);
                                                                }),
                                                                (v = b(function (e, t) {
                                                                    var n = new er();
                                                                    y(n);
                                                                    var u = o.is.obj(e) ? a({}, e) : a(a({}, t), {}, { to: e });
                                                                    return (
                                                                        (u.parentId = s),
                                                                        o.each(h, function (e, t) {
                                                                            o.is.und(u[t]) && (u[t] = e);
                                                                        }),
                                                                        i.start(u).then(
                                                                            (function () {
                                                                                var e = c(
                                                                                    l.mark(function e(t) {
                                                                                        return l.wrap(function (e) {
                                                                                            for (;;)
                                                                                                switch ((e.prev = e.next)) {
                                                                                                    case 0:
                                                                                                        if ((y(n), !i.is('PAUSED'))) {
                                                                                                            e.next = 4;
                                                                                                            break;
                                                                                                        }
                                                                                                        return (
                                                                                                            (e.next = 4),
                                                                                                            new Promise(function (e) {
                                                                                                                r.resumeQueue.add(e);
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
                                                                o.is.arr(t)
                                                                    ? (I = (function () {
                                                                          var e = c(
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
                                                                                                  return (i = r.value), (e.next = 5), v(i);
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
                                                                    : o.is.fun(t) && (I = Promise.resolve(t(v, i.stop.bind(i)))),
                                                                (e.next = 11),
                                                                Promise.all([I.then(m), E])
                                                            );
                                                        case 11:
                                                            (O = q(i, !0)), (e.next = 21);
                                                            break;
                                                        case 14:
                                                            if (((e.prev = 14), (e.t0 = e.catch(7)), !(e.t0 instanceof er))) {
                                                                e.next = 20;
                                                                break;
                                                            }
                                                            (O = e.t0.result), (e.next = 21);
                                                            break;
                                                        case 20:
                                                            throw e.t0;
                                                        case 21:
                                                            return (e.prev = 21), s == r.asyncId && ((r.asyncId = u), (r.asyncTo = u ? f : void 0), (r.promise = u ? p : void 0)), e.finish(21);
                                                        case 24:
                                                            return (
                                                                o.is.fun(d) &&
                                                                    _.batchedUpdates(function () {
                                                                        d(O);
                                                                    }),
                                                                e.abrupt('return', O)
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
var er = (function (e) {
        function t() {
            var t;
            return ((t = e.call(this, 'An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.') || this).result = void 0), t;
        }
        return d(t, e), t;
    })(h(Error)),
    ei = function (e) {
        return e instanceof ea;
    },
    eo = 1,
    ea = (function (e) {
        function t() {
            for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
            return ((t = e.call.apply(e, [this].concat(r)) || this).id = eo++), (t.key = void 0), (t._priority = 0), (t._children = new Set()), t;
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
                o.each(Array.from(this._children), function (t) {
                    t.onParentChange(e);
                });
            }),
            u(t, [
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
    })(o.FluidValue),
    es = 'CREATED',
    el = 'IDLE',
    ec = 'ACTIVE',
    eu = 'PAUSED',
    ed = 'DISPOSED',
    ef = (function (e) {
        function t(t, n) {
            var r;
            if (
                (((r = e.call(this) || this).key = void 0),
                (r.animation = new R()),
                (r.queue = void 0),
                (r._phase = es),
                (r._state = {
                    pauseQueue: new Set(),
                    resumeQueue: new Set()
                }),
                (r._defaultProps = {}),
                (r._lastCallId = 0),
                (r._lastToId = 0),
                !o.is.und(t) || !o.is.und(n))
            ) {
                var i = o.is.obj(t) ? a({}, t) : a(a({}, n), {}, { from: t });
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
                    s = i.toValues,
                    l = f.getPayload(i.to);
                if (!l) {
                    var c = o.getFluidConfig(i.to);
                    c && (s = o.toArray(c.get()));
                }
                return (
                    i.values.forEach(function (c, u) {
                        if (!c.done) {
                            var d = l ? l[u].lastPosition : s[u],
                                f = i.immediate,
                                _ = d;
                            if (!f) {
                                if (((_ = c.lastPosition), a.tension <= 0)) {
                                    c.done = !0;
                                    return;
                                }
                                var p = (c.elapsedTime += e),
                                    h = i.fromValues[u],
                                    m = null != c.v0 ? c.v0 : (c.v0 = o.is.arr(a.velocity) ? a.velocity[u] : a.velocity);
                                if (o.is.und(a.duration))
                                    if (a.decay) {
                                        var g = !0 === a.decay ? 0.998 : a.decay,
                                            E = Math.exp(-(1 - g) * p);
                                        (_ = h + (m / (1 - g)) * (1 - E)), (f = 0.1 > Math.abs(c.lastPosition - _)), (b = m * E);
                                    } else
                                        for (var b = null == c.lastVelocity ? m : c.lastVelocity, y = a.precision || (h == d ? 0.005 : Math.min(1, 0.001 * Math.abs(d - h))), v = a.restVelocity || y / 10, O = a.clamp ? 0 : a.bounce, I = !o.is.und(O), S = h == d ? c.v0 > 0 : h < d, T = !1, N = 1, A = Math.ceil(e / 1), C = 0; C < A && !(!(Math.abs(b) > v) && (f = Math.abs(d - _) <= y)); ++C) {
                                            I && (T = _ == d || _ > d == S) && ((b = -b * O), (_ = d));
                                            var R = (-(0.000001 * a.tension) * (_ - d) + -(0.001 * a.friction) * b) / a.mass;
                                            (b += R * N), (_ += b * N);
                                        }
                                else {
                                    var P = a.progress || 0;
                                    a.duration <= 0 ? (P = 1) : (P += (1 - P) * Math.min(1, p / a.duration)), (b = ((_ = h + a.easing(P) * (d - h)) - c.lastPosition) / e), (f = 1 == P);
                                }
                                (c.lastVelocity = b), Number.isNaN(_) && (console.warn('Got NaN while animating:', t), (f = !0));
                            }
                            l && !l[u].done && (f = !1), f ? (c.done = !0) : (n = !1), c.setValue(_, a.round) && (r = !0);
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
                    _.batchedUpdates(function () {
                        if ((t._focus(e), t._set(e) && !t.is(ec))) return t._onChange(t.get(), !0);
                        t._stop();
                    }),
                    this
                );
            }),
            (n.pause = function () {
                e_(this, 'pause'),
                    this.is(eu) ||
                        ((this._phase = eu),
                        o.flush(this._state.pauseQueue, function (e) {
                            return e();
                        }));
            }),
            (n.resume = function () {
                e_(this, 'resume'),
                    this.is(eu) &&
                        (this._start(),
                        o.flush(this._state.resumeQueue, function (e) {
                            return e();
                        }));
            }),
            (n.finish = function (e) {
                var t = this;
                if ((this.resume(), this.is(ec))) {
                    var n = this.animation;
                    !n.config.decay && o.is.und(e) && (e = n.to),
                        o.is.und(e) || this._set(e),
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
                var e = c(
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
                                                e_(this, 'start'),
                                                o.is.und(t) ? ((r = this.queue || []), (this.queue = [])) : (r = [o.is.obj(t) ? t : a(a({}, n), {}, { to: t })]),
                                                (e.next = 4),
                                                Promise.all(
                                                    r.map(function (e) {
                                                        return s._update(e);
                                                    })
                                                )
                                            );
                                        case 4:
                                            return (i = e.sent), e.abrupt('return', K(this, i));
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
                e.prototype.onParentChange.call(this, t), 'change' == t.type ? !this.is(ec) && (this._reset(), this.is(eu) || this._start()) : 'priority' == t.type && (this.priority = t.priority + 1);
            }),
            (n._prepareNode = function (e) {
                var t = e.to,
                    n = e.from,
                    r = e.reverse,
                    i = this.key || '',
                    a = {
                        to: (t = !o.is.obj(t) || o.getFluidConfig(t) ? t : t[i]),
                        from: (n = !o.is.obj(n) || o.getFluidConfig(n) ? n : n[i])
                    };
                if (this.is(es)) {
                    if (r) {
                        var s = [n, t];
                        (t = s[0]), (n = s[1]);
                    }
                    n = o.getFluidValue(n);
                    var l = this._updateNode(o.is.und(n) ? o.getFluidValue(t) : n);
                    l && !o.is.und(n) && l.setValue(n);
                }
                return a;
            }),
            (n._updateNode = function (e) {
                var t = f.getAnimated(this);
                if (!o.is.und(e)) {
                    var n = this._getNodeType(e);
                    (t && t.constructor === n) || f.setAnimated(this, (t = n.create(e)));
                }
                return t;
            }),
            (n._getNodeType = function (e) {
                var t = f.getAnimated(e);
                return t ? t.constructor : o.is.arr(e) ? f.AnimatedArray : o.isAnimatedString(e) ? f.AnimatedString : f.AnimatedValue;
            }),
            (n._update = function (e, t) {
                var n = this,
                    r = this._defaultProps,
                    i = function (t) {
                        var n = U(e, t);
                        o.is.und(n) || (r[t] = n), r[t] && (e[t] = r[t]);
                    };
                i('cancel'), i('pause');
                var a = this._prepareNode(e);
                return Y(++this._lastCallId, {
                    key: this.key,
                    props: e,
                    state: this._state,
                    actions: {
                        pause: this.pause.bind(this),
                        resume: this.resume.bind(this),
                        start: this._merge.bind(this, a)
                    }
                }).then(function (r) {
                    if (e.loop && r.finished && !(t && r.noop)) {
                        var i = em(e);
                        if (i) return n._update(i, !0);
                    }
                    return r;
                });
            }),
            (n._merge = function (e, t, n) {
                if (t.cancel) return this.stop(!0), n(Q(this));
                var r = this.key,
                    i = this.animation,
                    a = this._defaultProps,
                    s = !o.is.und(e.to),
                    l = !o.is.und(e.from);
                if (s || l)
                    if (!(t.callId > this._lastToId)) return n(Q(this));
                    else this._lastToId = t.callId;
                var c = function (e) {
                        return o.is.und(t[e]) ? a[e] : t[e];
                    },
                    u = ep(c('onDelayEnd'), r);
                u && u(t, this), t.default && B(a, t, ['pause', 'cancel']);
                var d = i.to,
                    p = i.from,
                    h = e.to,
                    m = void 0 === h ? d : h,
                    g = e.from,
                    E = void 0 === g ? p : g;
                if ((l && !s && (m = E), t.reverse)) {
                    var b = [E, m];
                    (m = b[0]), (E = b[1]);
                }
                var y = !o.isEqual(E, p);
                y && (i.from = E);
                var v = !o.isEqual(m, d);
                v && this._focus(m);
                var O = o.getFluidConfig(m),
                    I = o.getFluidConfig(E);
                I && (E = I.get());
                var S = o.is.arr(t.to) || o.is.fun(t.to),
                    T = i.config,
                    A = T.decay,
                    C = T.velocity;
                t.config && !S && N(T, x(t.config, r), t.config !== a.config ? x(a.config, r) : void 0);
                var R = f.getAnimated(this);
                if (!R || o.is.und(m)) return n(q(this, !0));
                var P = o.is.und(t.reset) ? l && !t.default : !o.is.und(E) && M(t.reset, r),
                    w = P ? E : this.get(),
                    D = W(m),
                    L = o.is.num(D) || o.is.arr(D) || o.isAnimatedString(D),
                    k = !S && (!L || M(a.immediate || t.immediate, r));
                if (v)
                    if (k) R = this._updateNode(D);
                    else {
                        var j = this._getNodeType(m);
                        if (j !== R.constructor) throw Error('Cannot animate between ' + R.constructor.name + ' and ' + j.name + ', as the "to" prop suggests');
                    }
                var U = R.constructor,
                    G = !!O,
                    F = !1;
                if (!G) {
                    var V = P || (this.is(es) && y);
                    (v || V) && (G = !(F = o.isEqual(W(w), D))), (o.isEqual(T.decay, A) && o.isEqual(T.velocity, C)) || (G = !0);
                }
                if ((F && this.is(ec) && (i.changed && !P ? (G = !0) : G || this._stop()), !S)) {
                    (G || o.getFluidConfig(d)) && ((i.values = R.getPayload()), (i.toValues = O ? null : U == f.AnimatedString ? [1] : o.toArray(D))), (i.immediate = k), (i.onStart = ep(c('onStart'), r)), (i.onChange = ep(c('onChange'), r));
                    var Z = i.onRest,
                        H = P && !t.onRest ? Z[0] || o.noop : eh(ep(c('onRest'), r), this);
                    if (G) {
                        i.onRest = [H, eh(n, this)];
                        var Y = +!P;
                        Y < Z.length &&
                            _.batchedUpdates(function () {
                                for (; Y < Z.length; Y++) Z[Y]();
                            });
                    } else (P || t.onRest) && (i.onRest[0] = H);
                }
                var K = ep(c('onProps'), r);
                if ((K && K(t, this), P && R.setValue(w), S)) n(ee(t.to, t, this._state, this));
                else if (G) P && (this._phase = el), this._reset(), this._start();
                else if (this.is(ec) && !v) i.onRest.push(eh(n, this));
                else {
                    let e = z(this, w),
                        t = ep(c('onNoopRest'), r);
                    null != t && t(e), n(e);
                }
            }),
            (n._focus = function (e) {
                var t = this.animation;
                if (e !== t.to) {
                    var n = o.getFluidConfig(t.to);
                    n && n.removeChild(this), (t.to = e);
                    var r = 0;
                    (n = o.getFluidConfig(e)) && (n.addChild(this), ei(e) && (r = (e.priority || 0) + 1)), (this.priority = r);
                }
            }),
            (n._set = function (e) {
                var t = o.getFluidConfig(e);
                t && (e = t.get());
                var n = f.getAnimated(this),
                    r = n && n.getValue();
                return n ? n.setValue(e) : this._updateNode(e), !o.isEqual(e, r);
            }),
            (n._onChange = function (t, n) {
                void 0 === n && (n = !1);
                var r = this.animation;
                r.changed || n || ((r.changed = !0), r.onStart && r.onStart(this)), r.onChange && r.onChange(t, this), e.prototype._onChange.call(this, t, n);
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
                this.is(ec) || ((this._phase = ec), e.prototype._start.call(this), _.skipAnimation ? this.finish() : _.frameLoop.start(this));
            }),
            (n._stop = function (e) {
                if ((this.resume(), this.is(ec))) {
                    (this._phase = el), this._onChange(this.get(), !0);
                    var t = this.animation;
                    o.each(t.values, function (e) {
                        e.done = !0;
                    });
                    var n = t.onRest;
                    n.length &&
                        ((t.onRest = [t.toValues ? o.noop : n[0]]),
                        t.changed || (n[0] = o.noop),
                        o.each(n, function (t) {
                            return t(e);
                        }));
                }
            }),
            u(t, [
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
    })(ea);
function e_(e, t) {
    if (e.is(ed)) throw Error('Cannot call "' + t + '" of disposed "' + e.constructor.name + '" object');
}
function ep(e, t) {
    return o.is.fun(e) ? e : t && e ? e[t] : void 0;
}
var eh = function (e, t) {
    var n = t.animation.to;
    return e
        ? function (r) {
              if (r) e(Q(t));
              else {
                  var i = W(n),
                      a = W(t.get());
                  e(q(t, o.isEqual(a, i)));
              }
          }
        : o.noop;
};
function em(e, t, n) {
    void 0 === t && (t = e.loop), void 0 === n && (n = e.to);
    var r = x(t);
    if (r) {
        var i = !0 !== r && H(r),
            s = (i || e).reverse,
            l = !i || i.reset;
        return eg(
            a(
                a({}, e),
                {},
                {
                    loop: t,
                    default: !1,
                    to: !s || o.is.arr(n) || o.is.fun(n) ? n : void 0,
                    from: l ? e.from : void 0,
                    reset: l
                },
                i
            )
        );
    }
}
function eg(e) {
    var t = (e = H(e)),
        n = t.to,
        r = t.from,
        i = new Set();
    return r ? eb(r, i) : delete e.from, o.is.obj(n) ? eb(n, i) : n || delete e.to, (e.keys = i.size ? Array.from(i) : null), e;
}
function eE(e) {
    var t = eg(e);
    return o.is.und(t.default) && (t.default = G(t, [!0 === t.immediate && 'immediate'])), t;
}
function eb(e, t) {
    o.each(e, function (e, n) {
        return null != e && t.add(n);
    });
}
var ey = ['onStart', 'onChange', 'onRest'],
    ev = 1,
    eO = (function () {
        function e(e, t) {
            (this.id = ev++),
                (this.springs = {}),
                (this.queue = []),
                (this._flush = void 0),
                (this._initialProps = void 0),
                (this._phase = es),
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
                var t = e ? o.toArray(e).map(eg) : this.queue;
                return (e || (this.queue = []), this._flush) ? this._flush(this, t) : (eR(this, t), eI(this, t));
            }),
            (t.stop = function (e) {
                if (o.is.und(e))
                    this.each(function (e) {
                        return e.stop();
                    }),
                        en(this._state, this._lastAsyncId);
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
                    n = t.onStart,
                    r = t.onChange,
                    i = t.onRest,
                    a = this._active.size > 0;
                a &&
                    this._phase != ec &&
                    ((this._phase = ec),
                    o.flush(n, function (t) {
                        return t(e);
                    }));
                var s = (r.size || (!a && i.size)) && this.get();
                o.flush(r, function (e) {
                    return e(s);
                }),
                    a ||
                        ((this._phase = el),
                        o.flush(i, function (e) {
                            var t = e[0],
                                n = e[1];
                            (n.value = s), t(n);
                        }));
            }),
            (t.onParentChange = function (e) {
                'change' == e.type && (this._active[e.idle ? 'delete' : 'add'](e.parent), _.frameLoop.onFrame(this._onFrame));
            }),
            u(e, [
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
function eI(e, t) {
    return Promise.all(
        t.map(function (t) {
            return eS(e, t);
        })
    ).then(function (t) {
        return K(e, t);
    });
}
function eS(e, t, n) {
    var r = t.to,
        i = t.loop,
        a = t.onRest;
    i && (t.loop = !1);
    var s = o.is.arr(r) || o.is.fun(r) ? r : void 0;
    s
        ? ((t.to = void 0), (t.onRest = void 0))
        : o.each(ey, function (n) {
              var r = t[n];
              if (o.is.fun(r)) {
                  var i = e._events[n];
                  i instanceof Set
                      ? (t[n] = function () {
                            return i.add(r);
                        })
                      : (t[n] = function (e) {
                            var t = e.finished,
                                n = e.cancelled,
                                o = i.get(r);
                            o
                                ? (t || (o.finished = !1), n && (o.cancelled = !0))
                                : i.set(r, {
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
        c = e._state;
    return (
        s
            ? l.push(
                  Y(++e._lastAsyncId, {
                      props: t,
                      state: c,
                      actions: {
                          pause: o.noop,
                          resume: o.noop,
                          start: function (t, n) {
                              (t.onRest = a), t.cancel ? j(t, 'cancel') && en(c, t.callId) : n(ee(s, t, c, e));
                          }
                      }
                  })
              )
            : t.keys || !0 !== t.cancel || en(c, e._lastAsyncId),
        Promise.all(l).then(function (o) {
            var a = K(e, o);
            if (i && a.finished && !(n && a.noop)) {
                var s = em(t, i, r);
                if (s) return eR(e, [s]), eS(e, s, !0);
            }
            return a;
        })
    );
}
function eT(e, t) {
    var n = a({}, e.springs);
    return (
        t &&
            o.each(o.toArray(t), function (e) {
                o.is.und(e.keys) && (e = eg(e)),
                    o.is.obj(e.to) || (e = a(a({}, e), {}, { to: void 0 })),
                    eC(n, e, function (e) {
                        return eA(e);
                    });
            }),
        n
    );
}
function eN(e, t) {
    o.each(t, function (t, n) {
        e.springs[n] || ((e.springs[n] = t), t.addChild(e));
    });
}
function eA(e, t) {
    var n = new ef();
    return (n.key = e), t && n.addChild(t), n;
}
function eC(e, t, n) {
    t.keys &&
        o.each(t.keys, function (r) {
            (e[r] || (e[r] = n(r)))._prepareNode(t);
        });
}
function eR(e, t) {
    o.each(t, function (t) {
        eC(e.springs, t, function (t) {
            return eA(t, e);
        });
    });
}
var eP = s.createContext({}),
    ew = function (e) {
        var t = e.children,
            n = g(e, ['children']),
            r = s.useContext(eP);
        n = L(
            function () {
                return a(a({}, r), n);
            },
            [r, n.pause, n.cancel, n.immediate, n.config]
        );
        var i = eP.Provider;
        return s.createElement(i, { value: n }, t);
    };
(ew.Provider = eP.Provider), (ew.Consumer = eP.Consumer);
var eD = function () {
        return s.useContext(eP);
    },
    eL = {
        create: function (e) {
            return {
                get controllers() {
                    return e();
                },
                update: function (t) {
                    return (
                        o.each(e(), function (e, n) {
                            e.update(k(t, n, e));
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
                                                        var r = k(t, n, e);
                                                        return e.start(r);
                                                    })
                                                )
                                            );
                                        case 2:
                                            return (
                                                (r = n.sent),
                                                n.abrupt('return', {
                                                    value: r.map(function (e) {
                                                        return e.value;
                                                    }),
                                                    finished: r.every(function (e) {
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
                }
            };
        }
    };
function ex(e, t, n) {
    var r = o.is.fun(t) && t;
    r && !n && (n = []);
    var l = s.useRef(0),
        c = o.useForceUpdate(),
        u = s.useState(function () {
            return {
                ctrls: [],
                queue: [],
                flush: function (e, t) {
                    var n = eT(e, t);
                    return !(l.current > 0) ||
                        u.queue.length ||
                        Object.keys(n).some(function (t) {
                            return !e.springs[t];
                        })
                        ? new Promise(function (r) {
                              eN(e, n),
                                  u.queue.push(function () {
                                      r(eI(e, t));
                                  }),
                                  c();
                          })
                        : eI(e, t);
                }
            };
        })[0],
        d = s.useRef(),
        f = [].concat(u.ctrls),
        _ = [],
        p = o.usePrev(e) || 0,
        h = f.slice(e, p);
    function m(e, n) {
        for (var i = e; i < n; i++) {
            var o = f[i] || (f[i] = new eO(null, u.flush)),
                a = r ? r(i, o) : t[i];
            a && ((a = _[i] = eE(a)), 0 == i && ((d.current = a.ref), (a.ref = void 0)));
        }
    }
    L(
        function () {
            (f.length = e), m(p, e);
        },
        [e]
    ),
        L(function () {
            m(0, Math.min(p, e));
        }, n);
    var g = s.useMemo(function () {
            return eL.create(function () {
                return u.ctrls;
            });
        }, []),
        E = f.map(function (e, t) {
            return eT(e, _[t]);
        }),
        b = eD();
    i.useLayoutEffect(function () {
        l.current++, (u.ctrls = f), d.current && (d.current.current = g);
        var e = u.queue;
        e.length &&
            ((u.queue = []),
            o.each(e, function (e) {
                return e();
            })),
            o.each(h, function (e) {
                return e.dispose();
            }),
            o.each(f, function (e, t) {
                eN(e, E[t]), e.start({ default: b });
                var n = _[t];
                n && (d.current ? e.queue.push(n) : e.start(n));
            });
    }),
        o.useOnce(function () {
            return function () {
                o.each(u.ctrls, function (e) {
                    return e.dispose();
                });
            };
        });
    var y = E.map(function (e) {
        return a({}, e);
    });
    return r || 3 == arguments.length ? [y, g.start, g.stop] : y;
}
function eM(e, t) {
    var n = o.is.fun(e),
        r = ex(1, n ? e : [e], n ? t || [] : t),
        i = r[0][0],
        a = r[1],
        s = r[2];
    return n || 2 == arguments.length ? [i, a, s] : i;
}
function ek(e, t, n) {
    var r = o.is.fun(t) && t;
    r && !n && (n = []);
    var a = [],
        s = ex(
            e,
            function (e, n) {
                return (a[e] = n), k(t, e, n);
            },
            n || [{}]
        );
    if (
        (i.useLayoutEffect(function () {
            for (var e = o.is.obj(t) && t.reverse, n = 0; n < a.length; n++) {
                var r = a[n + (e ? 1 : -1)];
                r && a[n].update({ to: r.springs }).start();
            }
        }, n),
        r || 3 == arguments.length)
    ) {
        var l = s[1];
        return (
            (s[1] = p.useCallbackOne(function (e) {
                var t = o.is.obj(e) && e.reverse;
                return l(function (n, r) {
                    var i = k(e, n, r),
                        o = a[n + (t ? 1 : -1)];
                    return o && (i.to = o.springs), i;
                });
            }, n)),
            s
        );
    }
    return s[0];
}
var ej = 'mount',
    eU = 'enter',
    eG = 'update',
    eB = 'leave';
function eF(e, t, n) {
    var r = t.ref,
        l = t.reset,
        c = t.sort,
        u = t.trail,
        d = void 0 === u ? 0 : u,
        f = t.expires,
        _ = void 0 === f || f,
        p = o.toArray(e),
        h = [],
        m = eV(p, t),
        g = s.useRef(null),
        E = l ? null : g.current;
    i.useLayoutEffect(function () {
        g.current = h;
    }),
        o.useOnce(function () {
            return function () {
                return o.each(g.current, function (e) {
                    e.expired && clearTimeout(e.expirationId), e.ctrl.dispose();
                });
            };
        });
    var b = [];
    if (
        (E &&
            o.each(E, function (e, t) {
                e.expired ? clearTimeout(e.expirationId) : ~(t = b[t] = m.indexOf(e.key)) && (h[t] = e);
            }),
        o.each(p, function (e, t) {
            h[t] ||
                (h[t] = {
                    key: m[t],
                    item: e,
                    phase: ej,
                    ctrl: new eO()
                });
        }),
        b.length)
    ) {
        var y = -1;
        o.each(b, function (e, n) {
            var r = E[n];
            ~e ? ((y = h.indexOf(r)), (h[y] = a(a({}, r), {}, { item: p[e] }))) : t.leave && h.splice(++y, 0, r);
        });
    }
    o.is.fun(c) &&
        h.sort(function (e, t) {
            return c(e.item, t.item);
        });
    var v = -d,
        O = o.useForceUpdate(),
        I = G(t),
        S = new Map();
    o.each(h, function (e, n) {
        var r,
            i,
            s = e.key,
            l = e.phase;
        if (l == ej) (r = t.enter), (i = eU);
        else {
            var c = 0 > m.indexOf(s);
            if (l != eB)
                if (c) (r = t.leave), (i = eB);
                else {
                    if (!(r = t.update)) return;
                    i = eG;
                }
            else {
                if (c) return;
                (r = t.enter), (i = eU);
            }
        }
        if (((r = x(r, e.item, n)), !(r = o.is.obj(r) ? H(r) : { to: r }).config)) {
            var u = t.config || I.config;
            r.config = x(u, e.item, n);
        }
        var f = a(
            a({}, I),
            {},
            {
                delay: (v += d),
                reset: !1
            },
            r
        );
        i == eU && o.is.und(f.from) && (f.from = x(o.is.und(t.initial) || E ? t.from : t.initial, e.item, n));
        var p = f.onRest;
        f.onRest = f.onNoopRest = function (e) {
            var t = g.current,
                n = t.find(function (e) {
                    return e.key === s;
                });
            if (n) {
                if ((o.is.fun(p) && !0 !== e.noop && p(e, n), e.cancelled && n.phase != eG)) {
                    n.phase = l;
                    return;
                }
                if (n.ctrl.idle) {
                    var r = t.every(function (e) {
                        return e.ctrl.idle;
                    });
                    if (n.phase == eB) {
                        var i = x(_, n.item);
                        if (!1 !== i) {
                            var a = !0 === i ? 0 : i;
                            if (((n.expired = !0), !r && a > 0)) {
                                a <= 2147483647 && (n.expirationId = setTimeout(O, a));
                                return;
                            }
                        }
                    }
                    r &&
                        t.some(function (e) {
                            return e.expired;
                        }) &&
                        O();
                }
            }
        };
        var h = eT(e.ctrl, f);
        S.set(e, {
            phase: i,
            springs: h,
            payload: f
        });
    });
    var T = eD();
    i.useLayoutEffect(
        function () {
            o.each(h, function (e) {
                e.ctrl.start({ default: T });
            });
        },
        [T]
    );
    var N = s.useMemo(function () {
        return eL.create(function () {
            return g.current.map(function (e) {
                return e.ctrl;
            });
        });
    }, []);
    s.useImperativeHandle(r, function () {
        return N;
    }),
        i.useLayoutEffect(
            function () {
                o.each(S, function (e, t) {
                    var n = e.phase,
                        i = e.springs,
                        o = e.payload;
                    eN(t.ctrl, i), T.cancel || ((t.phase = n), n == eU && t.ctrl.start({ default: T }), t.ctrl[r ? 'update' : 'start'](o));
                });
            },
            l ? void 0 : n
        );
    var A = function (e) {
        return s.createElement(
            s.Fragment,
            null,
            h.map(function (t, n) {
                var r = e(a({}, (S.get(t) || t.ctrl).springs), t.item, t, n);
                return r && r.type
                    ? s.createElement(
                          r.type,
                          a({}, r.props, {
                              key: o.is.str(t.key) || o.is.num(t.key) ? t.key : t.ctrl.id,
                              ref: r.ref
                          })
                      )
                    : r;
            })
        );
    };
    return 3 == arguments.length ? [A, N.start, N.stop] : A;
}
function eV(e, t) {
    var n = t.key,
        r = t.keys,
        i = void 0 === r ? n : r;
    return o.is.und(i) ? e : o.is.fun(i) ? e.map(i) : o.toArray(i);
}
function eZ(e) {
    return (0, e.children)(eM(g(e, ['children'])));
}
function eH(e) {
    var t = e.items,
        n = e.children,
        r = g(e, ['items', 'children']),
        i = ek(t.length, r);
    return t.map(function (e, t) {
        var r = n(e, t);
        return o.is.fun(r) ? r(i[t]) : r;
    });
}
function eW(e) {
    var t = e.items,
        n = e.children,
        r = g(e, ['items', 'children']);
    return s.createElement(s.Fragment, null, eF(t, r)(n));
}
var eY = (function (e) {
        function t(t, n) {
            ((r = e.call(this) || this).source = t), (r.key = void 0), (r.idle = !0), (r.calc = void 0), (r.calc = o.createInterpolator.apply(void 0, n));
            var r,
                i = r._get(),
                a = o.is.arr(i) ? f.AnimatedArray : f.AnimatedValue;
            return f.setAnimated(E(r), a.create(i)), r;
        }
        d(t, e);
        var n = t.prototype;
        return (
            (n.advance = function (e) {
                var t = this._get(),
                    n = this.get();
                o.isEqual(t, n) || (f.getAnimated(this).setValue(t), this._onChange(t, this.idle));
            }),
            (n._get = function () {
                var e = o.is.arr(this.source)
                    ? this.source.map(function (e) {
                          return e.get();
                      })
                    : o.toArray(this.source.get());
                return this.calc.apply(this, e);
            }),
            (n._reset = function () {
                o.each(f.getPayload(this), function (e) {
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
                o.each(o.toArray(this.source), function (r) {
                    ei(r) && (r.idle || (t = !1), (n = Math.max(n, r.priority + 1))), r.addChild(e);
                }),
                    (this.priority = n),
                    t || (this._reset(), this._start());
            }),
            (n._detach = function () {
                var e = this;
                o.each(o.toArray(this.source), function (t) {
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
                            ((this.idle = o.toArray(this.source).every(function (e) {
                                return !1 !== e.idle;
                            })),
                            this.idle &&
                                (this.advance(),
                                o.each(f.getPayload(this), function (e) {
                                    e.done = !0;
                                })))
                      : 'priority' == t.type &&
                        (this.priority = o.toArray(this.source).reduce(function (e, t) {
                            return Math.max(e, (t.priority || 0) + 1);
                        }, 0)),
                    e.prototype.onParentChange.call(this, t);
            }),
            t
        );
    })(ea),
    eK = function (e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return new eY(e, n);
    },
    ez = function (e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return m.deprecateInterpolate(), new eY(e, n);
    };
o.Globals.assign({
    createStringInterpolator: b.createStringInterpolator,
    to: function (e, t) {
        return new eY(e, t);
    }
});
var eq = function () {
    return o.Globals.frameLoop.advance();
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
            return o.FrameLoop;
        }
    }),
    Object.defineProperty(t, 'Globals', {
        enumerable: !0,
        get: function () {
            return o.Globals;
        }
    }),
    Object.defineProperty(t, 'createInterpolator', {
        enumerable: !0,
        get: function () {
            return o.createInterpolator;
        }
    }),
    (t.BailSignal = er),
    (t.Controller = eO),
    (t.FrameValue = ea),
    (t.Interpolation = eY),
    (t.Spring = eZ),
    (t.SpringContext = ew),
    (t.SpringHandle = eL),
    (t.SpringValue = ef),
    (t.Trail = eH),
    (t.Transition = eW),
    (t.config = O),
    (t.inferTo = H),
    (t.interpolate = ez),
    (t.to = eK),
    (t.update = eq),
    (t.useChain = v),
    (t.useSpring = eM),
    (t.useSprings = ex),
    (t.useTrail = ek),
    (t.useTransition = eF);
