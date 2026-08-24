"use strict";
function n(e) {
    return e && "object" == typeof e && "default" in e ? e.default : e;
}
Object.defineProperty(t, "__esModule", { value: !0 });
var i = r(675106),
    o = n(r(269274)),
    a = n(r(394320)),
    s = n(r(984101)),
    l = r(672722),
    u = r(582128),
    c = r(209801),
    f = Symbol.for("Animated:node"),
    d = function (e) {
        return !!e && e[f] === e;
    },
    p = function (e, t) {
        return i.defineHidden(e, f, t);
    },
    h = function (e) {
        return e && e[f] && e[f].getPayload();
    },
    m = (function () {
        function e() {
            (this.payload = void 0), p(this, this);
        }
        return (
            (e.prototype.getPayload = function () {
                return this.payload || [];
            }),
            e
        );
    })(),
    v = (function (e) {
        function t(t) {
            var r;
            return (
                ((r = e.call(this) || this)._value = t),
                (r.done = !0),
                (r.elapsedTime = void 0),
                (r.lastPosition = void 0),
                (r.lastVelocity = void 0),
                (r.v0 = void 0),
                i.is.num(r._value) && (r.lastPosition = r._value),
                r
            );
        }
        o(t, e),
            (t.create = function (e, r) {
                return new t(e);
            });
        var r = t.prototype;
        return (
            (r.getPayload = function () {
                return [this];
            }),
            (r.getValue = function () {
                return this._value;
            }),
            (r.setValue = function (e, t) {
                return (
                    i.is.num(e) &&
                        ((this.lastPosition = e),
                        t && ((e = Math.round(e / t) * t), this.done && (this.lastPosition = e))),
                    this._value !== e && ((this._value = e), !0)
                );
            }),
            (r.reset = function () {
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
    })(m),
    y = (function (e) {
        function t(t, r) {
            var n;
            return (
                ((n = e.call(this, 0) || this)._value = void 0),
                (n._string = null),
                (n._toString = void 0),
                (n._toString = i.createInterpolator({ output: [t, r] })),
                n
            );
        }
        o(t, e),
            (t.create = function (e, r) {
                if ((void 0 === r && (r = e), i.is.str(e) && i.is.str(r))) return new t(e, r);
                throw TypeError('Expected "from" and "to" to be strings');
            });
        var r = t.prototype;
        return (
            (r.getValue = function () {
                var e = this._string;
                return null == e ? (this._string = this._toString(this._value)) : e;
            }),
            (r.setValue = function (t) {
                if (i.is.num(t))
                    if (!e.prototype.setValue.call(this, t)) return !1;
                    else this._string = null;
                else (this._string = t), (this._value = 1);
                return !0;
            }),
            (r.reset = function (t) {
                t && (this._toString = i.createInterpolator({ output: [this.getValue(), t] })),
                    (this._value = 0),
                    e.prototype.reset.call(this);
            }),
            t
        );
    })(v),
    g = { current: null },
    b = (function (e) {
        function t(t) {
            var r;
            return void 0 === t && (t = null), ((r = e.call(this) || this).source = void 0), r.setValue(t), r;
        }
        o(t, e);
        var r = t.prototype;
        return (
            (r.getValue = function (e) {
                if (!this.source) return null;
                var t = {};
                return (
                    i.each(this.source, function (r, n) {
                        if (d(r)) t[n] = r.getValue(e);
                        else {
                            var o = i.getFluidConfig(r);
                            o ? (t[n] = o.get()) : e || (t[n] = r);
                        }
                    }),
                    t
                );
            }),
            (r.setValue = function (e) {
                (this.source = e), (this.payload = this._makePayload(e));
            }),
            (r.reset = function () {
                this.payload &&
                    i.each(this.payload, function (e) {
                        return e.reset();
                    });
            }),
            (r._makePayload = function (e) {
                if (e) {
                    var t = new Set();
                    return i.each(e, this._addToPayload, t), Array.from(t);
                }
            }),
            (r._addToPayload = function (e) {
                var t = this;
                i.getFluidConfig(e) && g.current && g.current.dependencies.add(e);
                var r = h(e);
                r &&
                    i.each(r, function (e) {
                        return t.add(e);
                    });
            }),
            t
        );
    })(m),
    w = (function (e) {
        function t(t, r) {
            var n;
            return (
                ((n = e.call(this, null) || this).source = void 0),
                e.prototype.setValue.call(a(n), n._makeAnimated(t, r)),
                n
            );
        }
        o(t, e),
            (t.create = function (e, r) {
                return new t(e, r);
            });
        var r = t.prototype;
        return (
            (r.getValue = function () {
                return this.source.map(function (e) {
                    return e.getValue();
                });
            }),
            (r.setValue = function (e) {
                var t = this.getPayload();
                e && e.length == t.length
                    ? i.each(t, function (t, r) {
                          return t.setValue(e[r]);
                      })
                    : ((this.source = this._makeAnimated(e)), (this.payload = this._makePayload(this.source)));
            }),
            (r._makeAnimated = function (e, t) {
                return (
                    void 0 === t && (t = e),
                    e
                        ? e.map(function (e, r) {
                              return (i.isAnimatedString(e) ? y : v).create(e, t[r]);
                          })
                        : []
                );
            }),
            t
        );
    })(b),
    _ = (function (e) {
        function t(t) {
            var r;
            return ((r = e.call(this, null) || this).update = t), (r.dirty = !1), r;
        }
        o(t, e);
        var r = t.prototype;
        return (
            (r.setValue = function (t, r) {
                if (t) {
                    if (r && ((g.current = r), t.style)) {
                        var n = r.host.createAnimatedStyle;
                        t = s(s({}, t), {}, { style: n(t.style) });
                    }
                    e.prototype.setValue.call(this, t), (g.current = null);
                }
            }),
            (r.onParentChange = function (e) {
                var t = this,
                    r = e.type;
                this.dirty ||
                    "change" !== r ||
                    ((this.dirty = !0),
                    l.frameLoop.onFrame(function () {
                        (t.dirty = !1), t.update();
                    }));
            }),
            t
        );
    })(b),
    S = function (e, t) {
        return u.forwardRef(function (r, n) {
            var o = u.useRef(null),
                a = !i.is.fun(e) || (e.prototype && e.prototype.isReactComponent),
                l = i.useForceUpdate(),
                f = new _(function () {
                    var e = o.current;
                    (!a || e) && !1 === (!!e && t.applyAnimatedValues(e, f.getValue(!0))) && l();
                }),
                d = new Set();
            return (
                f.setValue(r, { dependencies: d, host: t }),
                c.useLayoutEffect(function () {
                    return (
                        i.each(d, function (e) {
                            return e.addChild(f);
                        }),
                        function () {
                            return i.each(d, function (e) {
                                return e.removeChild(f);
                            });
                        }
                    );
                }),
                u.createElement(
                    e,
                    s({}, t.getComponentProps(f.getValue()), {
                        ref:
                            a &&
                            function (e) {
                                var t, r;
                                (t = n), (r = e), t && (i.is.fun(t) ? t(r) : (t.current = r)), (o.current = r);
                            },
                    }),
                )
            );
        });
    },
    x = Symbol.for("AnimatedComponent"),
    E = function (e) {
        return i.is.str(e) ? e : e && i.is.str(e.displayName) ? e.displayName : (i.is.fun(e) && e.name) || null;
    };
(t.Animated = m),
    (t.AnimatedArray = w),
    (t.AnimatedObject = b),
    (t.AnimatedProps = _),
    (t.AnimatedString = y),
    (t.AnimatedValue = v),
    (t.createHost = function (e, t) {
        var r = void 0 === t ? {} : t,
            n = r.applyAnimatedValues,
            o = r.createAnimatedStyle,
            a =
                void 0 === o
                    ? function (e) {
                          return new b(e);
                      }
                    : o,
            s = r.getComponentProps,
            l = {
                applyAnimatedValues:
                    void 0 === n
                        ? function () {
                              return !1;
                          }
                        : n,
                createAnimatedStyle: a,
                getComponentProps:
                    void 0 === s
                        ? function (e) {
                              return e;
                          }
                        : s,
            },
            u = function (e) {
                var t = E(e) || "Anonymous";
                return ((e = i.is.str(e) ? S(e, l) : e[x] || (e[x] = S(e, l))).displayName = "Animated(" + t + ")"), e;
            };
        return (
            i.each(e, function (e, t) {
                i.is.str(t) || (t = E(e)), (u[t] = u(e));
            }),
            { animated: u }
        );
    }),
    (t.getAnimated = function (e) {
        return e && e[f];
    }),
    (t.getPayload = h),
    (t.isAnimated = d),
    (t.setAnimated = p);
