"use strict";
function r(e) {
    return e && "object" == typeof e && "default" in e ? e.default : e;
}
Object.defineProperty(t, "__esModule", { value: !0 });
var i = n(843455),
    s = r(n(269274)),
    a = r(n(394320)),
    o = r(n(984101)),
    l = n(476575),
    u = n(64700),
    d = n(131981),
    c = Symbol.for("Animated:node"),
    _ = function (e) {
        return !!e && e[c] === e;
    },
    f = function (e, t) {
        return i.defineHidden(e, c, t);
    },
    E = function (e) {
        return e && e[c] && e[c].getPayload();
    },
    h = (function () {
        function e() {
            (this.payload = void 0), f(this, this);
        }
        return (
            (e.prototype.getPayload = function () {
                return this.payload || [];
            }),
            e
        );
    })(),
    p = (function (e) {
        function t(t) {
            var n;
            return (
                ((n = e.call(this) || this)._value = t),
                (n.done = !0),
                (n.elapsedTime = void 0),
                (n.lastPosition = void 0),
                (n.lastVelocity = void 0),
                (n.v0 = void 0),
                i.is.num(n._value) && (n.lastPosition = n._value),
                n
            );
        }
        s(t, e),
            (t.create = function (e, n) {
                return new t(e);
            });
        var n = t.prototype;
        return (
            (n.getPayload = function () {
                return [this];
            }),
            (n.getValue = function () {
                return this._value;
            }),
            (n.setValue = function (e, t) {
                return (
                    i.is.num(e) &&
                        ((this.lastPosition = e),
                        t && ((e = Math.round(e / t) * t), this.done && (this.lastPosition = e))),
                    this._value !== e && ((this._value = e), !0)
                );
            }),
            (n.reset = function () {
                var e = this.done;
                (this.done = !1),
                    i.is.num(this._value) &&
                        ((this.elapsedTime = 0),
                        (this.lastPosition = this._value),
                        e && (this.lastVelocity = null),
                        (this.v0 = null));
            }),
            t
        );
    })(h),
    m = (function (e) {
        function t(t, n) {
            var r;
            return (
                ((r = e.call(this, 0) || this)._value = void 0),
                (r._string = null),
                (r._toString = void 0),
                (r._toString = i.createInterpolator({ output: [t, n] })),
                r
            );
        }
        s(t, e),
            (t.create = function (e, n) {
                if ((void 0 === n && (n = e), i.is.str(e) && i.is.str(n))) return new t(e, n);
                throw TypeError('Expected "from" and "to" to be strings');
            });
        var n = t.prototype;
        return (
            (n.getValue = function () {
                var e = this._string;
                return null == e ? (this._string = this._toString(this._value)) : e;
            }),
            (n.setValue = function (t) {
                if (i.is.num(t))
                    if (!e.prototype.setValue.call(this, t)) return !1;
                    else this._string = null;
                else (this._string = t), (this._value = 1);
                return !0;
            }),
            (n.reset = function (t) {
                t && (this._toString = i.createInterpolator({ output: [this.getValue(), t] })),
                    (this._value = 0),
                    e.prototype.reset.call(this);
            }),
            t
        );
    })(p),
    g = { current: null },
    A = (function (e) {
        function t(t) {
            var n;
            return void 0 === t && (t = null), ((n = e.call(this) || this).source = void 0), n.setValue(t), n;
        }
        s(t, e);
        var n = t.prototype;
        return (
            (n.getValue = function (e) {
                if (!this.source) return null;
                var t = {};
                return (
                    i.each(this.source, function (n, r) {
                        if (_(n)) t[r] = n.getValue(e);
                        else {
                            var s = i.getFluidConfig(n);
                            s ? (t[r] = s.get()) : e || (t[r] = n);
                        }
                    }),
                    t
                );
            }),
            (n.setValue = function (e) {
                (this.source = e), (this.payload = this._makePayload(e));
            }),
            (n.reset = function () {
                this.payload &&
                    i.each(this.payload, function (e) {
                        return e.reset();
                    });
            }),
            (n._makePayload = function (e) {
                if (e) {
                    var t = new Set();
                    return i.each(e, this._addToPayload, t), Array.from(t);
                }
            }),
            (n._addToPayload = function (e) {
                var t = this;
                i.getFluidConfig(e) && g.current && g.current.dependencies.add(e);
                var n = E(e);
                n &&
                    i.each(n, function (e) {
                        return t.add(e);
                    });
            }),
            t
        );
    })(h),
    I = (function (e) {
        function t(t, n) {
            var r;
            return (
                ((r = e.call(this, null) || this).source = void 0),
                e.prototype.setValue.call(a(r), r._makeAnimated(t, n)),
                r
            );
        }
        s(t, e),
            (t.create = function (e, n) {
                return new t(e, n);
            });
        var n = t.prototype;
        return (
            (n.getValue = function () {
                return this.source.map(function (e) {
                    return e.getValue();
                });
            }),
            (n.setValue = function (e) {
                var t = this.getPayload();
                e && e.length == t.length
                    ? i.each(t, function (t, n) {
                          return t.setValue(e[n]);
                      })
                    : ((this.source = this._makeAnimated(e)), (this.payload = this._makePayload(this.source)));
            }),
            (n._makeAnimated = function (e, t) {
                return (
                    void 0 === t && (t = e),
                    e
                        ? e.map(function (e, n) {
                              return (i.isAnimatedString(e) ? m : p).create(e, t[n]);
                          })
                        : []
                );
            }),
            t
        );
    })(A),
    T = (function (e) {
        function t(t) {
            var n;
            return ((n = e.call(this, null) || this).update = t), (n.dirty = !1), n;
        }
        s(t, e);
        var n = t.prototype;
        return (
            (n.setValue = function (t, n) {
                if (t) {
                    if (n && ((g.current = n), t.style)) {
                        var r = n.host.createAnimatedStyle;
                        t = o(o({}, t), {}, { style: r(t.style) });
                    }
                    e.prototype.setValue.call(this, t), (g.current = null);
                }
            }),
            (n.onParentChange = function (e) {
                var t = this,
                    n = e.type;
                this.dirty ||
                    "change" !== n ||
                    ((this.dirty = !0),
                    l.frameLoop.onFrame(function () {
                        (t.dirty = !1), t.update();
                    }));
            }),
            t
        );
    })(A),
    S = function (e, t) {
        return u.forwardRef(function (n, r) {
            var s = u.useRef(null),
                a = !i.is.fun(e) || (e.prototype && e.prototype.isReactComponent),
                l = i.useForceUpdate(),
                c = new T(function () {
                    var e = s.current;
                    (!a || e) && !1 === (!!e && t.applyAnimatedValues(e, c.getValue(!0))) && l();
                }),
                _ = new Set();
            return (
                c.setValue(n, { dependencies: _, host: t }),
                d.useLayoutEffect(function () {
                    return (
                        i.each(_, function (e) {
                            return e.addChild(c);
                        }),
                        function () {
                            return i.each(_, function (e) {
                                return e.removeChild(c);
                            });
                        }
                    );
                }),
                u.createElement(
                    e,
                    o({}, t.getComponentProps(c.getValue()), {
                        ref:
                            a &&
                            function (e) {
                                var t, n;
                                (t = r), (n = e), t && (i.is.fun(t) ? t(n) : (t.current = n)), (s.current = n);
                            },
                    }),
                )
            );
        });
    },
    y = Symbol.for("AnimatedComponent"),
    N = function (e) {
        return i.is.str(e) ? e : e && i.is.str(e.displayName) ? e.displayName : (i.is.fun(e) && e.name) || null;
    };
(t.Animated = h),
    (t.AnimatedArray = I),
    (t.AnimatedObject = A),
    (t.AnimatedProps = T),
    (t.AnimatedString = m),
    (t.AnimatedValue = p),
    (t.createHost = function (e, t) {
        var n = void 0 === t ? {} : t,
            r = n.applyAnimatedValues,
            s = n.createAnimatedStyle,
            a =
                void 0 === s
                    ? function (e) {
                          return new A(e);
                      }
                    : s,
            o = n.getComponentProps,
            l = {
                applyAnimatedValues:
                    void 0 === r
                        ? function () {
                              return !1;
                          }
                        : r,
                createAnimatedStyle: a,
                getComponentProps:
                    void 0 === o
                        ? function (e) {
                              return e;
                          }
                        : o,
            },
            u = function (e) {
                var t = N(e) || "Anonymous";
                return ((e = i.is.str(e) ? S(e, l) : e[y] || (e[y] = S(e, l))).displayName = "Animated(" + t + ")"), e;
            };
        return (
            i.each(e, function (e, t) {
                i.is.str(t) || (t = N(e)), (u[t] = u(e));
            }),
            { animated: u }
        );
    }),
    (t.getAnimated = function (e) {
        return e && e[c];
    }),
    (t.getPayload = E),
    (t.isAnimated = _),
    (t.setAnimated = f);
