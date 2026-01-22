n.d(t, {
    Fk: () => P,
    K_: () => x,
    OH: () => c,
    f9: () => L,
});
var r = n(64700),
    i = n(835245);

function a(e, t) {
    var n = e.x,
        r = e.y;
    return n > t.x && n < t.x + t.width && r > t.y && r < t.y + t.height;
}

function s(e, t, n, r) {
    var i = t > 0 ? -1 : 1,
        a = Math.abs(t);
    return 0.5 * e * r * n * a * a * i;
}
var o = (function () {
        function e(e) {
            (this.id = e.id),
                (this.position = e.position),
                (this.velocity = e.velocity),
                (this.rotation = e.rotation),
                (this.dragCoefficient = e.dragCoefficient),
                (this.airResistanceArea = e.airResistanceArea),
                (this.size = e.size),
                (this.opacity = e.opacity),
                (this.spriteX = e.spriteX),
                (this.spriteY = e.spriteY),
                (this.spriteWidth = e.spriteWidth),
                (this.spriteHeight = e.spriteHeight),
                (this._lastUpdatedAt = Date.now());
        }
        return (
            (e.prototype.getNewForces = function (e, t) {
                var n = e.wind * t,
                    r = -e.gravity * t;
                return {
                    x: n + s(this.dragCoefficient.x, this.velocity.x, this.airResistanceArea.x, e.density),
                    y: r + s(this.dragCoefficient.y, this.velocity.y, this.airResistanceArea.y, e.density),
                };
            }),
            (e.prototype.update = function (e) {
                var t = Date.now(),
                    n = (t - this._lastUpdatedAt) / 100;
                this.rotation.update(n), this.dragCoefficient.update(n);
                var r = this.getNewForces(e, n),
                    i = r.x,
                    a = r.y;
                this.velocity.update(n),
                    (this.velocity.x += i),
                    (this.velocity.y += a),
                    this.position.update(n),
                    (this.position.x += this.velocity.x * n),
                    (this.position.y += this.velocity.y * n),
                    this.size.update(n),
                    this.opacity.update(n),
                    (this.opacity.value = Math.max(this.opacity.value, 0)),
                    (this._lastUpdatedAt = t);
            }),
            (e.prototype.previewPositionUpdate = function (e, t) {
                var n = t / 100,
                    r = this.velocity.previewUpdate(n),
                    i = this.getNewForces(e, n),
                    a = i.x,
                    s = i.y;
                (r.x += a), (r.y += s);
                var o = this.position.previewUpdate(n);
                return (o.x += r.x * n), (o.y += r.y * n), o;
            }),
            (e.prototype.draw = function (e, t) {
                t.save(),
                    (t.globalAlpha = this.opacity.value),
                    t.setTransform(
                        new DOMMatrix()
                            .translateSelf(
                                this.position.x * n.g.devicePixelRatio,
                                this.position.y * n.g.devicePixelRatio,
                            )
                            .rotateSelf(this.rotation.x, this.rotation.y, this.rotation.z),
                    ),
                    t.drawImage(
                        e,
                        this.spriteX,
                        this.spriteY,
                        this.spriteWidth,
                        this.spriteHeight,
                        (-this.width / 2) * n.g.devicePixelRatio,
                        (-this.height / 2) * n.g.devicePixelRatio,
                        this.width * n.g.devicePixelRatio,
                        this.height * n.g.devicePixelRatio,
                    ),
                    t.restore();
            }),
            (e.prototype.shouldDestroy = function (e, t) {
                return (
                    this.opacity.value < 0 ||
                    (t.gravity >= 0 && this.velocity.y < 0 && this.position.y + this.height < 0) ||
                    (t.gravity <= 0 && this.velocity.y > 0 && this.position.y - this.height > e.height) ||
                    (t.wind >= 0 && this.velocity.x > 0 && this.position.x - this.width > e.width) ||
                    (t.wind <= 0 && this.velocity.x < 0 && this.position.x + this.width < 0)
                );
            }),
            Object.defineProperty(e.prototype, "width", {
                get: function () {
                    return this.size.x;
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(e.prototype, "height", {
                get: function () {
                    return this.size.y;
                },
                enumerable: !1,
                configurable: !0,
            }),
            (e.prototype.addForce = function (e) {
                (this.velocity.x += e.x), (this.velocity.y += e.y);
            }),
            e
        );
    })(),
    l = {
        velocity: {
            type: "static",
            value: 0,
        },
        rotation: {
            type: "static",
            value: 0,
        },
        dragCoefficient: {
            type: "static",
            value: 1.66,
        },
        airResistanceArea: {
            type: "static",
            value: 0.001,
        },
        opacity: {
            type: "static",
            value: 1,
        },
    },
    c = function (e) {
        var t = void 0 === e ? {} : e,
            n = t.gravity,
            r = t.wind,
            i = t.density;
        (this.gravity = -9.8),
            (this.wind = 0),
            (this.density = 1.2041),
            (this.gravity = null != n ? n : this.gravity),
            (this.wind = null != r ? r : this.wind),
            (this.density = null != i ? i : this.density);
    },
    u = function (e, t) {
        return (u =
            Object.setPrototypeOf ||
            ({
                __proto__: [],
            } instanceof Array &&
                function (e, t) {
                    e.__proto__ = t;
                }) ||
            function (e, t) {
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
    };

function d(e, t) {
    if ("function" != typeof t && null !== t)
        throw TypeError("Class extends value " + String(t) + " is not a constructor or null");

    function n() {
        this.constructor = e;
    }
    u(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
}
var f = function () {
    return (f =
        Object.assign ||
        function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
        }).apply(this, arguments);
};

function p(e, t, n, r) {
    return new (n || (n = Promise))(function (i, a) {
        function s(e) {
            try {
                l(r.next(e));
            } catch (e) {
                a(e);
            }
        }

        function o(e) {
            try {
                l(r.throw(e));
            } catch (e) {
                a(e);
            }
        }

        function l(e) {
            var t;
            e.done
                ? i(e.value)
                : ((t = e.value) instanceof n
                      ? t
                      : new n(function (e) {
                            e(t);
                        })
                  ).then(s, o);
        }
        l((r = r.apply(e, t || [])).next());
    });
}

function _(e, t) {
    var n,
        r,
        i,
        a,
        s = {
            label: 0,
            sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
            },
            trys: [],
            ops: [],
        };
    return (
        (a = {
            next: o(0),
            throw: o(1),
            return: o(2),
        }),
        "function" == typeof Symbol &&
            (a[Symbol.iterator] = function () {
                return this;
            }),
        a
    );

    function o(o) {
        return function (l) {
            return (function (o) {
                if (n) throw TypeError("Generator is already executing.");
                for (; a && ((a = 0), o[0] && (s = 0)), s; )
                    try {
                        if (
                            ((n = 1),
                            r &&
                                (i =
                                    2 & o[0]
                                        ? r.return
                                        : o[0]
                                          ? r.throw || ((i = r.return) && i.call(r), 0)
                                          : r.next) &&
                                !(i = i.call(r, o[1])).done)
                        )
                            return i;
                        switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                            case 0:
                            case 1:
                                i = o;
                                break;
                            case 4:
                                return (
                                    s.label++,
                                    {
                                        value: o[1],
                                        done: !1,
                                    }
                                );
                            case 5:
                                s.label++, (r = o[1]), (o = [0]);
                                continue;
                            case 7:
                                (o = s.ops.pop()), s.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    s = 0;
                                    continue;
                                }
                                if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                                    s.label = o[1];
                                    break;
                                }
                                if (6 === o[0] && s.label < i[1]) {
                                    (s.label = i[1]), (i = o);
                                    break;
                                }
                                if (i && s.label < i[2]) {
                                    (s.label = i[2]), s.ops.push(o);
                                    break;
                                }
                                i[2] && s.ops.pop(), s.trys.pop();
                                continue;
                        }
                        o = t.call(e, s);
                    } catch (e) {
                        (o = [6, e]), (r = 0);
                    } finally {
                        n = i = 0;
                    }
                if (5 & o[0]) throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: !0,
                };
            })([o, l]);
        };
    }
}
var h = function (e) {
        this.value = e;
    },
    m = (function () {
        function e(e, t, n) {
            (this._x = e), (this._y = n ? e : t);
        }
        return (
            (e.prototype.update = function (e) {
                this._x.update(e), this._y.update(e);
            }),
            (e.prototype.previewUpdate = function (e) {
                return {
                    x: this._x.previewUpdate(e),
                    y: this._y.previewUpdate(e),
                };
            }),
            Object.defineProperty(e.prototype, "x", {
                get: function () {
                    return this._x.value;
                },
                set: function (e) {
                    this._x.value = e;
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(e.prototype, "y", {
                get: function () {
                    return this._y.value;
                },
                set: function (e) {
                    this._y.value = e;
                },
                enumerable: !1,
                configurable: !0,
            }),
            e
        );
    })(),
    g = (function (e) {
        function t(t, n, r, i) {
            var a = e.call(this, t, n, i) || this;
            return (a._z = i ? t : r), a;
        }
        return (
            d(t, e),
            (t.prototype.update = function (t) {
                e.prototype.update.call(this, t), this._z.update(t);
            }),
            (t.prototype.previewUpdate = function (t) {
                var n = e.prototype.previewUpdate.call(this, t);
                return f(f({}, n), {
                    z: this._z.previewUpdate(t),
                });
            }),
            Object.defineProperty(t.prototype, "z", {
                get: function () {
                    return this._z.value;
                },
                set: function (e) {
                    this._z.value = e;
                },
                enumerable: !1,
                configurable: !0,
            }),
            t
        );
    })(m),
    E = (function (e) {
        function t() {
            return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
            d(t, e),
            (t.prototype.update = function () {}),
            (t.prototype.previewUpdate = function () {
                return this.value;
            }),
            t
        );
    })(h),
    b = (function (e) {
        function t(t, n) {
            var r = e.call(this, t) || this;
            return (r.addValue = n), r;
        }
        return (
            d(t, e),
            (t.prototype.update = function (e) {
                this.value = this.previewUpdate(e);
            }),
            (t.prototype.previewUpdate = function (e) {
                return this.value + this.addValue * e;
            }),
            t
        );
    })(h),
    y = (function (e) {
        function t(t, n, r, i, a, s) {
            var o = e.call(this, t) || this;
            (o.min = n), (o.max = r), (o.duration = i);
            var l = (o.value / (o.max - o.min)) * o.duration,
                c = isNaN(l) ? 0 : l;
            return (o.timePassed = c < 0 ? o.duration - c : c), (o.directionMultiplier = a), (o.easingFunction = s), o;
        }
        return (
            d(t, e),
            (t.prototype.update = function (e) {
                var t = this.doUpdate(e),
                    n = t[0],
                    r = t[1],
                    i = t[2];
                (this.value = n), (this.directionMultiplier = i), (this.timePassed = r);
            }),
            (t.prototype.previewUpdate = function (e) {
                return this.doUpdate(e)[0];
            }),
            (t.prototype.doUpdate = function (e) {
                var t = this.max - this.min,
                    n = this.timePassed + e * this.directionMultiplier,
                    r = Math.min(Math.max(n, 0), this.duration),
                    i = n < 0 || n > this.duration ? -1 * this.directionMultiplier : this.directionMultiplier,
                    a = this.easingFunction(r, this.min, t, this.duration);
                return [isNaN(a) ? 0 : a, r, i];
            }),
            t
        );
    })(h);

function O(e, t) {
    return e === t ? e : Math.random() * (t - e + 1) + e;
}

function A(e) {
    var t = Math.floor(O(0, e.length - 1));
    return [e[t], t];
}

function v(e, t) {
    return A([e, t])[0];
}

function S(e) {
    return "number" == typeof e
        ? {
              x: e,
              y: e,
          }
        : e;
}

function I(e) {
    return "number" == typeof e
        ? {
              x: e,
              y: e,
              z: e,
          }
        : e;
}

function T(e) {
    return (function (e) {
        switch (e.type) {
            case "static":
                return new E(e.value);
            case "static-random":
                return new E(O(e.minValue, e.maxValue));
            case "linear":
                return new b(e.value, e.addValue);
            case "linear-random":
                return new b(O(e.minValue, e.maxValue), O(e.minAddValue, e.maxAddValue));
            case "oscillating":
                return new y(e.value, e.start, e.final, e.duration, e.direction, e.easingFunction);
            case "oscillating-random":
                return new y(
                    O(e.minValue, e.maxValue),
                    O(e.minStart, e.maxStart),
                    O(e.minFinal, e.maxFinal),
                    O(e.minDuration, e.maxDuration),
                    v(e.minDirection, e.maxDirection),
                    A(e.easingFunctions)[0],
                );
        }
    })(
        f(f({}, e), {
            valueType: "number",
        }),
    );
}

function C(e) {
    return (function (e) {
        switch (e.type) {
            case "static":
                var t = S(e.value);
                return new m(new E(t.x), new E(t.y), e.uniformVectorValues);
            case "static-random":
                var n = S(e.minValue),
                    r = S(e.maxValue);
                return new m(new E(O(n.x, r.x)), new E(O(n.y, r.y)), e.uniformVectorValues);
            case "linear":
                t = S(e.value);
                var i = S(e.addValue);
                return new m(new b(t.x, i.x), new b(t.y, i.y), e.uniformVectorValues);
            case "linear-random":
                (n = S(e.minValue)), (r = S(e.maxValue));
                var a = S(e.minAddValue),
                    s = S(e.maxAddValue);
                return new m(new b(O(n.x, r.x), O(a.x, s.x)), new b(O(n.y, r.y), O(a.x, s.x)), e.uniformVectorValues);
            case "oscillating":
                t = S(e.value);
                var o = S(e.start),
                    l = S(e.final),
                    c = S(e.duration),
                    u = S(e.direction);
                return new m(
                    new y(t.x, o.x, l.x, c.x, u.x, e.easingFunction),
                    new y(t.y, o.y, l.y, c.x, u.y, e.easingFunction),
                    e.uniformVectorValues,
                );
            case "oscillating-random":
                (n = S(e.minValue)), (r = S(e.maxValue));
                var d = S(e.minStart),
                    f = S(e.maxStart),
                    p = S(e.minFinal),
                    _ = S(e.maxFinal),
                    h = S(e.minDuration),
                    g = S(e.maxDuration),
                    I = S(e.minDirection),
                    T = S(e.maxDirection);
                return new m(
                    new y(O(n.x, r.x), O(d.x, f.x), O(p.x, _.x), O(h.x, g.x), v(I.x, T.x), A(e.easingFunctions)[0]),
                    new y(O(n.y, r.y), O(d.y, f.y), O(p.y, _.y), O(h.y, g.y), v(I.y, T.y), A(e.easingFunctions)[0]),
                    e.uniformVectorValues,
                );
        }
    })(
        f(f({}, e), {
            valueType: "Vector2",
        }),
    );
}

function N(e) {
    return (function (e) {
        switch (e.type) {
            case "static":
                var t = I(e.value);
                return new g(new E(t.x), new E(t.y), new E(t.z), e.uniformVectorValues);
            case "static-random":
                var n = I(e.minValue),
                    r = I(e.maxValue);
                return new g(new E(O(n.x, r.x)), new E(O(n.y, r.y)), new E(O(n.z, r.z)), e.uniformVectorValues);
            case "linear":
                t = I(e.value);
                var i = I(e.addValue);
                return new g(new b(t.x, i.x), new b(t.y, i.y), new b(t.z, i.z), e.uniformVectorValues);
            case "linear-random":
                (n = I(e.minValue)), (r = I(e.maxValue));
                var a = I(e.minAddValue),
                    s = I(e.maxAddValue);
                return new g(
                    new b(O(n.x, r.x), O(a.x, s.x)),
                    new b(O(n.y, r.y), O(a.y, s.y)),
                    new b(O(n.z, r.z), O(a.z, s.z)),
                    e.uniformVectorValues,
                );
            case "oscillating":
                t = I(e.value);
                var o = I(e.start),
                    l = I(e.final),
                    c = I(e.duration),
                    u = I(e.direction);
                return new g(
                    new y(t.x, o.x, l.x, c.x, u.x, e.easingFunction),
                    new y(t.y, o.y, l.y, c.z, u.y, e.easingFunction),
                    new y(t.z, o.z, l.z, c.z, u.z, e.easingFunction),
                    e.uniformVectorValues,
                );
            case "oscillating-random":
                (n = I(e.minValue)), (r = I(e.maxValue));
                var d = I(e.minStart),
                    f = I(e.maxStart),
                    p = I(e.minFinal),
                    _ = I(e.maxFinal),
                    h = I(e.minDuration),
                    m = I(e.maxDuration),
                    S = I(e.minDirection),
                    T = I(e.maxDirection);
                return new g(
                    new y(O(n.x, r.x), O(d.x, f.x), O(p.x, _.x), O(h.x, m.x), v(S.x, T.x), A(e.easingFunctions)[0]),
                    new y(O(n.y, r.y), O(d.y, f.y), O(p.y, _.y), O(h.y, m.y), v(S.y, T.y), A(e.easingFunctions)[0]),
                    new y(O(n.z, r.z), O(d.z, f.z), O(p.z, _.z), O(h.z, m.z), v(S.z, T.z), A(e.easingFunctions)[0]),
                    e.uniformVectorValues,
                );
        }
    })(
        f(f({}, e), {
            valueType: "Vector3",
        }),
    );
}

function R(e, t, n, r, i) {
    var a = (function (e, t) {
            return f(
                f(
                    {
                        id: t,
                    },
                    l,
                ),
                e,
            );
        })(t, e),
        s = (function (e, t) {
            if (null != e) {
                var n = t.sprites.findIndex(function (t) {
                    var n, r;
                    return (
                        (n = t),
                        "string" == typeof (r = e)
                            ? n.src === r && n.colorize
                            : n.src === r.src && n.colorize === r.colorize
                    );
                });
                if (-1 !== n) return [e, n];
            }
            return A(t.sprites);
        })(r, n),
        c = s[0],
        u = s[1],
        d = (function (e, t, n) {
            if (
                !(function (e) {
                    return "string" == typeof e || e.colorize;
                })(e)
            )
                return 0;
            var r =
                null != t
                    ? n.colors.findIndex(function (e) {
                          return e === t;
                      })
                    : -1;
            return -1 !== r ? r : Math.floor(O(0, n.colors.length - 1));
        })(null != r ? r : c, i, n);
    return new o({
        id: e,
        position: C(a.position),
        velocity: C(a.velocity),
        rotation: N(a.rotation),
        dragCoefficient: C(a.dragCoefficient),
        size: C(a.size),
        opacity: T(a.opacity),
        airResistanceArea: C(a.airResistanceArea),
        spriteX: d * n.spriteWidth + 2 * d,
        spriteY: u * n.spriteHeight + 2 * u,
        spriteWidth: n.spriteWidth,
        spriteHeight: n.spriteHeight,
    });
}

function w() {
    var e = r.useRef(!1),
        t = r.useRef({}),
        n = r.useCallback(function (e) {
            for (var n in t.current) t.current[n](e);
        }, []);
    return (
        r.useEffect(
            function () {
                return function () {
                    return n(!1);
                };
            },
            [n],
        ),
        r.useMemo(
            function () {
                return {
                    isReady: e.current,
                    addReadyListener: function (n) {
                        var r = (0, i.A)();
                        return (t.current[r] = n), e.current && n(e.current), r;
                    },
                    removeReadyListener: function (e) {
                        delete t.current[e];
                    },
                    setIsReady: function (t) {
                        (e.current = t), n(t);
                    },
                };
            },
            [n],
        )
    );
}
var P = r.forwardRef(function (e, t) {
        var s = e.className,
            o = e.environment,
            l = e.onClick,
            c = e.onMouseDown,
            u = e.onMouseMove,
            d = e.onMouseUp,
            p = e.onBeforeRender,
            _ = e.onAfterRender,
            h = e.requestAnimationFrame,
            m = void 0 === h ? window.requestAnimationFrame : h,
            g = e.cancelAnimationFrame,
            E = void 0 === g ? window.cancelAnimationFrame : g,
            b = (function (e, t) {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var i = 0;
                    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
                        0 > t.indexOf(r[i]) &&
                            Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                            (n[r[i]] = e[r[i]]);
                }
                return n;
            })(e, [
                "className",
                "environment",
                "onClick",
                "onMouseDown",
                "onMouseMove",
                "onMouseUp",
                "onBeforeRender",
                "onAfterRender",
                "requestAnimationFrame",
                "cancelAnimationFrame",
            ]),
            y = r.useRef(null),
            O = w(),
            A = O.isReady,
            v = O.addReadyListener,
            S = O.removeReadyListener,
            I = O.setIsReady,
            T = r.useRef(new Map()),
            C = r.useRef(null),
            N = r.useRef(0),
            P = r.useRef(0),
            D = r.useCallback(
                function () {
                    var e = y.current;
                    if (null != e) {
                        var t = e.getContext("2d");
                        if (null != t) {
                            t.clearRect(0, 0, e.width, e.height),
                                null == p || p(t),
                                T.current.forEach(function (n, r) {
                                    var i = n.confetti,
                                        a = n.spriteCanvas;
                                    i.update(o), i.draw(a, t), i.shouldDestroy(e, o) && T.current.delete(r);
                                }),
                                null == _ || _(t),
                                T.current.size > 0
                                    ? (C.current = m(D))
                                    : (t.clearRect(0, 0, e.width, e.height), (C.current = null));
                            var n = Date.now();
                            0 !== N.current && (P.current = 1e3 / (n - N.current)), (N.current = n);
                        }
                    }
                },
                [o, _, p, m],
            );
        r.useEffect(
            function () {
                null != C.current && (E(C.current), (C.current = m(D)));
            },
            [E, D, m],
        );
        var x = r.useCallback(
                function (e, t) {
                    T.current.set(e.id, {
                        confetti: e,
                        spriteCanvas: t,
                    }),
                        null == C.current && D();
                },
                [D],
            ),
            L = r.useCallback(
                function (e, t, n, r, a) {
                    var s,
                        o = R(null != (s = e.id) ? s : (0, i.A)(), e, n, r, a);
                    return x(o, t), o;
                },
                [x],
            ),
            j = r.useCallback(function (e) {
                T.current.delete(e);
            }, []),
            M = r.useCallback(function () {
                return T.current.clear();
            }, []),
            k = r.useCallback(function () {
                return y.current;
            }, []);
        r.useImperativeHandle(
            t,
            function () {
                return {
                    createConfetti: L,
                    addConfetti: x,
                    deleteConfetti: j,
                    clearConfetti: M,
                    getCanvas: k,
                    addReadyListener: v,
                    removeReadyListener: S,
                    isReady: A,
                };
            },
            [L, x, j, M, k, v, S, A],
        );
        var U = r.useCallback(
                function (e, t) {
                    var n,
                        r,
                        i = t.clickHandler,
                        s = t.mouseHandler;
                    if (null != i || null != s) {
                        var l = null == (n = y.current) ? void 0 : n.getBoundingClientRect();
                        if (null != l) {
                            var c = (function (e, t) {
                                if (null == t) throw Error("element should not be null");
                                var n = t.getBoundingClientRect();
                                return {
                                    x: e.clientX - n.left,
                                    y: e.clientY - n.top,
                                };
                            })(e, y.current);
                            if (
                                a(c, {
                                    x: l.left,
                                    y: l.top,
                                    width: l.width,
                                    height: l.height,
                                })
                            ) {
                                if (null != s) return s(e);
                                if (null != i) {
                                    var u = (-1e3 / P.current) * 2,
                                        d = (function (e, t) {
                                            for (var n = 0, r = Array.from(e.values()); n < r.length; n++) {
                                                var i = r[n];
                                                if (null != i && t(i)) return i;
                                            }
                                            return null;
                                        })(T.current, function (e) {
                                            var t = e.confetti,
                                                n = t.previewPositionUpdate(o, u);
                                            return a(c, {
                                                x: n.x - t.width / 2,
                                                y: n.y - t.height / 2,
                                                width: t.width,
                                                height: t.height,
                                            });
                                        });
                                    i(e, null != (r = null == d ? void 0 : d.confetti) ? r : null);
                                }
                            }
                        }
                    }
                },
                [o],
            ),
            G = r.useCallback(
                function (e) {
                    return U(e, {
                        clickHandler: l,
                    });
                },
                [U, l],
            ),
            V = r.useCallback(
                function (e) {
                    return U(e, {
                        clickHandler: c,
                    });
                },
                [U, c],
            ),
            F = r.useCallback(
                function (e) {
                    return U(e, {
                        mouseHandler: u,
                    });
                },
                [U, u],
            ),
            B = r.useCallback(
                function (e) {
                    return U(e, {
                        mouseHandler: d,
                    });
                },
                [U, d],
            );
        return (
            r.useEffect(
                function () {
                    var e = function (e, t, n) {
                        null != n && window.addEventListener(e, t);
                    };
                    return (
                        e("click", G, l),
                        e("mousedown", V, c),
                        e("mousemove", F, u),
                        e("mouseup", B, d),
                        function () {
                            window.removeEventListener("click", G),
                                window.removeEventListener("mousedown", V),
                                window.removeEventListener("mousemove", F),
                                window.removeEventListener("mouseup", F);
                        }
                    );
                },
                [G, V, F, B, l, c, u, d],
            ),
            r.useEffect(
                function () {
                    var e = y.current,
                        t = new ResizeObserver(function () {
                            !(function (e) {
                                if (null != e) {
                                    var t = e.getBoundingClientRect(),
                                        r = t.width,
                                        i = t.height;
                                    (e.width = r * n.g.devicePixelRatio), (e.height = i * n.g.devicePixelRatio);
                                }
                            })(y.current),
                                I(!0);
                        });
                    return (
                        null != e && t.observe(e),
                        function () {
                            null != e && t.unobserve(e);
                        }
                    );
                },
                [I],
            ),
            r.createElement(
                "canvas",
                f({}, b, {
                    className: s,
                    ref: y,
                }),
            )
        );
    }),
    D = {
        display: "none",
        position: "absolute",
        width: 0,
        height: 0,
        left: "-100%",
    },
    x = r.forwardRef(function (e, t) {
        var n = e.className,
            i = e.visible,
            a = void 0 !== i && i,
            s = e.sprites,
            o = e.colors,
            l = e.spriteWidth,
            c = e.spriteHeight,
            u = r.useRef(null),
            d = r.useRef([]),
            f = w(),
            h = f.isReady,
            m = f.addReadyListener,
            g = f.removeReadyListener,
            E = f.setIsReady;
        r.useImperativeHandle(
            t,
            function () {
                return {
                    getCanvas: function () {
                        return u.current;
                    },
                    getCreateData: function () {
                        return {
                            sprites: d.current,
                            colors: o,
                            spriteWidth: l,
                            spriteHeight: c,
                        };
                    },
                    addReadyListener: m,
                    removeReadyListener: g,
                    isReady: h,
                };
            },
            [m, o, h, g, c, l],
        );
        var b = r.useCallback(
                function () {
                    var e = u.current,
                        t =
                            null == e
                                ? void 0
                                : e.getContext("2d", {
                                      willReadFrequently: !0,
                                  });
                    null != t &&
                        null != e &&
                        (t.clearRect(0, 0, e.width, e.height),
                        d.current.forEach(function (e, n) {
                            var r = function (r, i) {
                                var a = l * i + 2 * i,
                                    s = c * n + 2 * n;
                                if ((t.drawImage(e.image, a, s, l, c), null != r)) {
                                    for (
                                        var o = t.getImageData(a, s, l, c),
                                            u = (function (e) {
                                                "#" === e[0] && (e = e.slice(1));
                                                var t = parseInt(e, 16);
                                                return {
                                                    r: (t >> 16) & 255,
                                                    g: (t >> 8) & 255,
                                                    b: 255 & t,
                                                };
                                            })(r),
                                            d = 0;
                                        d < o.data.length;
                                        d += 4
                                    )
                                        (o.data[d] = u.r), (o.data[d + 1] = u.g), (o.data[d + 2] = u.b);
                                    t.putImageData(o, a, s);
                                }
                            };
                            e.colorize
                                ? o.forEach(function (e, t) {
                                      return r(e, t);
                                  })
                                : r(null, 0);
                        }));
                },
                [o, c, l],
            ),
            y = r.useCallback(
                function () {
                    var e = s.map(function (e) {
                        var t = new Image(),
                            n = "string" == typeof e ? e : e.src,
                            r = "string" == typeof e || e.colorize;
                        t.src = n;
                        var i = new Promise(function (e) {
                            t.onload = e;
                        });
                        return {
                            colorize: r,
                            image: t,
                            src: n,
                            loadPromise: i,
                        };
                    });
                    return Promise.all(
                        e.map(function (e) {
                            return e.loadPromise;
                        }),
                    ).then(function () {
                        d.current = e.map(function (e) {
                            return {
                                colorize: e.colorize,
                                image: e.image,
                                src: e.src,
                            };
                        });
                    });
                },
                [s],
            ),
            O = r.useCallback(
                function () {
                    return p(void 0, void 0, void 0, function () {
                        return _(this, function (e) {
                            switch (e.label) {
                                case 0:
                                    return [4, y()];
                                case 1:
                                    return e.sent(), b(), E(!0), [2];
                            }
                        });
                    });
                },
                [y, b, E],
            );
        return (
            r.useEffect(
                function () {
                    O();
                },
                [O],
            ),
            r.useEffect(
                function () {
                    null != u.current &&
                        ((u.current.width = (l + 2) * Math.max(o.length, 1)), (u.current.height = (c + 2) * s.length));
                },
                [o.length, c, l, s.length],
            ),
            r.createElement("canvas", {
                ref: u,
                className: n,
                style: a ? void 0 : D,
            })
        );
    });

function L(e, t) {
    var n,
        i,
        a = r.useState(null != (n = null == t ? void 0 : t.isReady) && n),
        s = a[0],
        o = a[1],
        l = r.useState(null != (i = null == e ? void 0 : e.isReady) && i),
        c = l[0],
        u = l[1];
    r.useEffect(
        function () {
            var e = null == t ? void 0 : t.addReadyListener(o);
            return function () {
                null != e && (null == t || t.removeReadyListener(e));
            };
        },
        [t],
    ),
        r.useEffect(
            function () {
                var t = null == e ? void 0 : e.addReadyListener(u);
                return function () {
                    null != t && (null == e || e.removeReadyListener(t));
                };
            },
            [e],
        );
    var d = r.useCallback(
            function (n, r) {
                var i = void 0 === r ? {} : r,
                    a = i.sprite,
                    s = i.color,
                    o = null == t ? void 0 : t.getCreateData(),
                    l = null == t ? void 0 : t.getCanvas();
                if (null != l && null != o && 0 !== o.sprites.length)
                    return null == e ? void 0 : e.createConfetti(n, l, o, a, s);
            },
            [e, t],
        ),
        f = r.useCallback(
            function (e, t, n) {
                for (var r = [], i = 0; i < t; i++) {
                    var a = d(e, n);
                    a && r.push(a);
                }
                return r;
            },
            [d],
        ),
        p = r.useCallback(
            function (n) {
                var r = null == t ? void 0 : t.getCanvas();
                null != r && (null == e || e.addConfetti(n, r));
            },
            [e, t],
        ),
        _ = r.useCallback(
            function (t) {
                null == e || e.deleteConfetti(t);
            },
            [e],
        ),
        h = r.useCallback(
            function () {
                return null == e ? void 0 : e.clearConfetti();
            },
            [e],
        );
    return r.useMemo(
        function () {
            return {
                createConfetti: d,
                createMultipleConfetti: f,
                addConfetti: p,
                clearConfetti: h,
                deleteConfetti: _,
                isReady: null != t && null != e && c && s,
            };
        },
        [p, h, e, d, f, _, c, s, t],
    );
}
