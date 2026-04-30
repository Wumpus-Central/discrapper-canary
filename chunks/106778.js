"use strict";
n.d(t, { Fk: () => v, K_: () => R, OH: () => u, f9: () => b });
var i = n(64700),
    r = n(835245);
function s(e, t) {
    var n = e.x,
        i = e.y;
    return n > t.x && n < t.x + t.width && i > t.y && i < t.y + t.height;
}
function a(e, t, n, i) {
    var r = Math.abs(t);
    return 0.5 * e * i * n * r * r * (t > 0 ? -1 : 1);
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
                    i = -e.gravity * t;
                return {
                    x: n + a(this.dragCoefficient.x, this.velocity.x, this.airResistanceArea.x, e.density),
                    y: i + a(this.dragCoefficient.y, this.velocity.y, this.airResistanceArea.y, e.density),
                };
            }),
            (e.prototype.update = function (e) {
                var t = Date.now(),
                    n = (t - this._lastUpdatedAt) / 100;
                this.rotation.update(n), this.dragCoefficient.update(n);
                var i = this.getNewForces(e, n),
                    r = i.x,
                    s = i.y;
                this.velocity.update(n),
                    (this.velocity.x += r),
                    (this.velocity.y += s),
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
                    i = this.velocity.previewUpdate(n),
                    r = this.getNewForces(e, n),
                    s = r.x,
                    a = r.y;
                (i.x += s), (i.y += a);
                var o = this.position.previewUpdate(n);
                return (o.x += i.x * n), (o.y += i.y * n), o;
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
        velocity: { type: "static", value: 0 },
        rotation: { type: "static", value: 0 },
        dragCoefficient: { type: "static", value: 1.66 },
        airResistanceArea: { type: "static", value: 0.001 },
        opacity: { type: "static", value: 1 },
    },
    u = function (e) {
        var t = void 0 === e ? {} : e,
            n = t.gravity,
            i = t.wind,
            r = t.density;
        (this.gravity = -9.8),
            (this.wind = 0),
            (this.density = 1.2041),
            (this.gravity = null != n ? n : this.gravity),
            (this.wind = null != i ? i : this.wind),
            (this.density = null != r ? r : this.density);
    },
    c = function (e, t) {
        return (c =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
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
    c(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
}
var _ = function () {
        return (_ =
            Object.assign ||
            function (e) {
                for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var r in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
            }).apply(this, arguments);
    },
    f = function (e) {
        this.value = e;
    },
    h = (function () {
        function e(e, t, n) {
            (this._x = e), (this._y = n ? e : t);
        }
        return (
            (e.prototype.update = function (e) {
                this._x.update(e), this._y.update(e);
            }),
            (e.prototype.previewUpdate = function (e) {
                return { x: this._x.previewUpdate(e), y: this._y.previewUpdate(e) };
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
    p = (function (e) {
        function t(t, n, i, r) {
            var s = e.call(this, t, n, r) || this;
            return (s._z = r ? t : i), s;
        }
        return (
            d(t, e),
            (t.prototype.update = function (t) {
                e.prototype.update.call(this, t), this._z.update(t);
            }),
            (t.prototype.previewUpdate = function (t) {
                var n = e.prototype.previewUpdate.call(this, t);
                return _(_({}, n), { z: this._z.previewUpdate(t) });
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
    })(h),
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
    })(f),
    m = (function (e) {
        function t(t, n) {
            var i = e.call(this, t) || this;
            return (i.addValue = n), i;
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
    })(f),
    g = (function (e) {
        function t(t, n, i, r, s, a) {
            var o = e.call(this, t) || this;
            (o.min = n), (o.max = i), (o.duration = r);
            var l = (o.value / (o.max - o.min)) * o.duration,
                u = isNaN(l) ? 0 : l;
            return (o.timePassed = u < 0 ? o.duration - u : u), (o.directionMultiplier = s), (o.easingFunction = a), o;
        }
        return (
            d(t, e),
            (t.prototype.update = function (e) {
                var t = this.doUpdate(e),
                    n = t[0],
                    i = t[1],
                    r = t[2];
                (this.value = n), (this.directionMultiplier = r), (this.timePassed = i);
            }),
            (t.prototype.previewUpdate = function (e) {
                return this.doUpdate(e)[0];
            }),
            (t.prototype.doUpdate = function (e) {
                var t = this.max - this.min,
                    n = this.timePassed + e * this.directionMultiplier,
                    i = Math.min(Math.max(n, 0), this.duration),
                    r = n < 0 || n > this.duration ? -1 * this.directionMultiplier : this.directionMultiplier,
                    s = this.easingFunction(i, this.min, t, this.duration);
                return [isNaN(s) ? 0 : s, i, r];
            }),
            t
        );
    })(f);
function A(e, t) {
    return e === t ? e : Math.random() * (t - e + 1) + e;
}
function I(e) {
    var t = Math.floor(A(0, e.length - 1));
    return [e[t], t];
}
function T(e, t) {
    return I([e, t])[0];
}
function S(e) {
    return "number" == typeof e ? { x: e, y: e } : e;
}
function N(e) {
    return "number" == typeof e ? { x: e, y: e, z: e } : e;
}
function y(e) {
    return (function (e) {
        switch (e.type) {
            case "static":
                var t = S(e.value);
                return new h(new E(t.x), new E(t.y), e.uniformVectorValues);
            case "static-random":
                var n = S(e.minValue),
                    i = S(e.maxValue);
                return new h(new E(A(n.x, i.x)), new E(A(n.y, i.y)), e.uniformVectorValues);
            case "linear":
                t = S(e.value);
                var r = S(e.addValue);
                return new h(new m(t.x, r.x), new m(t.y, r.y), e.uniformVectorValues);
            case "linear-random":
                (n = S(e.minValue)), (i = S(e.maxValue));
                var s = S(e.minAddValue),
                    a = S(e.maxAddValue);
                return new h(new m(A(n.x, i.x), A(s.x, a.x)), new m(A(n.y, i.y), A(s.x, a.x)), e.uniformVectorValues);
            case "oscillating":
                t = S(e.value);
                var o = S(e.start),
                    l = S(e.final),
                    u = S(e.duration),
                    c = S(e.direction);
                return new h(
                    new g(t.x, o.x, l.x, u.x, c.x, e.easingFunction),
                    new g(t.y, o.y, l.y, u.x, c.y, e.easingFunction),
                    e.uniformVectorValues,
                );
            case "oscillating-random":
                (n = S(e.minValue)), (i = S(e.maxValue));
                var d = S(e.minStart),
                    _ = S(e.maxStart),
                    f = S(e.minFinal),
                    p = S(e.maxFinal),
                    N = S(e.minDuration),
                    y = S(e.maxDuration),
                    C = S(e.minDirection),
                    v = S(e.maxDirection);
                return new h(
                    new g(A(n.x, i.x), A(d.x, _.x), A(f.x, p.x), A(N.x, y.x), T(C.x, v.x), I(e.easingFunctions)[0]),
                    new g(A(n.y, i.y), A(d.y, _.y), A(f.y, p.y), A(N.y, y.y), T(C.y, v.y), I(e.easingFunctions)[0]),
                    e.uniformVectorValues,
                );
        }
    })(_(_({}, e), { valueType: "Vector2" }));
}
function C() {
    var e = i.useRef(!1),
        t = i.useRef({}),
        n = i.useCallback(function (e) {
            for (var n in t.current) t.current[n](e);
        }, []);
    return (
        i.useEffect(
            function () {
                return function () {
                    return n(!1);
                };
            },
            [n],
        ),
        i.useMemo(
            function () {
                return {
                    isReady: e.current,
                    addReadyListener: function (n) {
                        var i = (0, r.A)();
                        return (t.current[i] = n), e.current && n(e.current), i;
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
var v = i.forwardRef(function (e, t) {
        var a = e.className,
            u = e.environment,
            c = e.onClick,
            d = e.onMouseDown,
            f = e.onMouseMove,
            h = e.onMouseUp,
            S = e.onBeforeRender,
            v = e.onAfterRender,
            O = e.requestAnimationFrame,
            R = void 0 === O ? window.requestAnimationFrame : O,
            b = e.cancelAnimationFrame,
            D = void 0 === b ? window.cancelAnimationFrame : b,
            L = (function (e, t) {
                var n = {};
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (n[i] = e[i]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var r = 0;
                    for (i = Object.getOwnPropertySymbols(e); r < i.length; r++)
                        0 > t.indexOf(i[r]) &&
                            Object.prototype.propertyIsEnumerable.call(e, i[r]) &&
                            (n[i[r]] = e[i[r]]);
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
            w = i.useRef(null),
            M = C(),
            P = M.isReady,
            x = M.addReadyListener,
            U = M.removeReadyListener,
            k = M.setIsReady,
            G = i.useRef(new Map()),
            F = i.useRef(null),
            V = i.useRef(0),
            B = i.useRef(0),
            H = i.useCallback(
                function () {
                    var e = w.current;
                    if (null != e) {
                        var t = e.getContext("2d");
                        if (null != t) {
                            t.clearRect(0, 0, e.width, e.height),
                                null == S || S(t),
                                G.current.forEach(function (n, i) {
                                    var r = n.confetti,
                                        s = n.spriteCanvas;
                                    r.update(u), r.draw(s, t), r.shouldDestroy(e, u) && G.current.delete(i);
                                }),
                                null == v || v(t),
                                G.current.size > 0
                                    ? (F.current = R(H))
                                    : (t.clearRect(0, 0, e.width, e.height), (F.current = null));
                            var n = Date.now();
                            0 !== V.current && (B.current = 1e3 / (n - V.current)), (V.current = n);
                        }
                    }
                },
                [u, v, S, R],
            );
        i.useEffect(
            function () {
                null != F.current && (D(F.current), (F.current = R(H)));
            },
            [D, H, R],
        );
        var j = i.useCallback(
                function (e, t) {
                    G.current.set(e.id, { confetti: e, spriteCanvas: t }), null == F.current && H();
                },
                [H],
            ),
            Y = i.useCallback(
                function (e, t, n, i, s) {
                    var a,
                        u,
                        c,
                        d,
                        f,
                        h,
                        S,
                        C,
                        v =
                            ((a = null != (C = e.id) ? C : (0, r.A)()),
                            (u = _(_({ id: a }, l), e)),
                            (d = (c = (function (e, t) {
                                if (null != e) {
                                    var n = t.sprites.findIndex(function (t) {
                                        return "string" == typeof e
                                            ? t.src === e && t.colorize
                                            : t.src === e.src && t.colorize === e.colorize;
                                    });
                                    if (-1 !== n) return [e, n];
                                }
                                return I(t.sprites);
                            })(i, n))[0]),
                            (f = c[1]),
                            (h = (function (e, t, n) {
                                if (!("string" == typeof e || e.colorize)) return 0;
                                var i =
                                    null != t
                                        ? n.colors.findIndex(function (e) {
                                              return e === t;
                                          })
                                        : -1;
                                return -1 !== i ? i : Math.floor(A(0, n.colors.length - 1));
                            })(null != i ? i : d, s, n)),
                            new o({
                                id: a,
                                position: y(u.position),
                                velocity: y(u.velocity),
                                rotation:
                                    ((S = u.rotation),
                                    (function (e) {
                                        switch (e.type) {
                                            case "static":
                                                var t = N(e.value);
                                                return new p(new E(t.x), new E(t.y), new E(t.z), e.uniformVectorValues);
                                            case "static-random":
                                                var n = N(e.minValue),
                                                    i = N(e.maxValue);
                                                return new p(
                                                    new E(A(n.x, i.x)),
                                                    new E(A(n.y, i.y)),
                                                    new E(A(n.z, i.z)),
                                                    e.uniformVectorValues,
                                                );
                                            case "linear":
                                                t = N(e.value);
                                                var r = N(e.addValue);
                                                return new p(
                                                    new m(t.x, r.x),
                                                    new m(t.y, r.y),
                                                    new m(t.z, r.z),
                                                    e.uniformVectorValues,
                                                );
                                            case "linear-random":
                                                (n = N(e.minValue)), (i = N(e.maxValue));
                                                var s = N(e.minAddValue),
                                                    a = N(e.maxAddValue);
                                                return new p(
                                                    new m(A(n.x, i.x), A(s.x, a.x)),
                                                    new m(A(n.y, i.y), A(s.y, a.y)),
                                                    new m(A(n.z, i.z), A(s.z, a.z)),
                                                    e.uniformVectorValues,
                                                );
                                            case "oscillating":
                                                t = N(e.value);
                                                var o = N(e.start),
                                                    l = N(e.final),
                                                    u = N(e.duration),
                                                    c = N(e.direction);
                                                return new p(
                                                    new g(t.x, o.x, l.x, u.x, c.x, e.easingFunction),
                                                    new g(t.y, o.y, l.y, u.z, c.y, e.easingFunction),
                                                    new g(t.z, o.z, l.z, u.z, c.z, e.easingFunction),
                                                    e.uniformVectorValues,
                                                );
                                            case "oscillating-random":
                                                (n = N(e.minValue)), (i = N(e.maxValue));
                                                var d = N(e.minStart),
                                                    _ = N(e.maxStart),
                                                    f = N(e.minFinal),
                                                    h = N(e.maxFinal),
                                                    S = N(e.minDuration),
                                                    y = N(e.maxDuration),
                                                    C = N(e.minDirection),
                                                    v = N(e.maxDirection);
                                                return new p(
                                                    new g(
                                                        A(n.x, i.x),
                                                        A(d.x, _.x),
                                                        A(f.x, h.x),
                                                        A(S.x, y.x),
                                                        T(C.x, v.x),
                                                        I(e.easingFunctions)[0],
                                                    ),
                                                    new g(
                                                        A(n.y, i.y),
                                                        A(d.y, _.y),
                                                        A(f.y, h.y),
                                                        A(S.y, y.y),
                                                        T(C.y, v.y),
                                                        I(e.easingFunctions)[0],
                                                    ),
                                                    new g(
                                                        A(n.z, i.z),
                                                        A(d.z, _.z),
                                                        A(f.z, h.z),
                                                        A(S.z, y.z),
                                                        T(C.z, v.z),
                                                        I(e.easingFunctions)[0],
                                                    ),
                                                    e.uniformVectorValues,
                                                );
                                        }
                                    })(_(_({}, S), { valueType: "Vector3" }))),
                                dragCoefficient: y(u.dragCoefficient),
                                size: y(u.size),
                                opacity: (function (e) {
                                    var t = _(_({}, e), { valueType: "number" });
                                    switch (t.type) {
                                        case "static":
                                            return new E(t.value);
                                        case "static-random":
                                            return new E(A(t.minValue, t.maxValue));
                                        case "linear":
                                            return new m(t.value, t.addValue);
                                        case "linear-random":
                                            return new m(A(t.minValue, t.maxValue), A(t.minAddValue, t.maxAddValue));
                                        case "oscillating":
                                            return new g(
                                                t.value,
                                                t.start,
                                                t.final,
                                                t.duration,
                                                t.direction,
                                                t.easingFunction,
                                            );
                                        case "oscillating-random":
                                            return new g(
                                                A(t.minValue, t.maxValue),
                                                A(t.minStart, t.maxStart),
                                                A(t.minFinal, t.maxFinal),
                                                A(t.minDuration, t.maxDuration),
                                                T(t.minDirection, t.maxDirection),
                                                I(t.easingFunctions)[0],
                                            );
                                    }
                                })(u.opacity),
                                airResistanceArea: y(u.airResistanceArea),
                                spriteX: h * n.spriteWidth + 2 * h,
                                spriteY: f * n.spriteHeight + 2 * f,
                                spriteWidth: n.spriteWidth,
                                spriteHeight: n.spriteHeight,
                            }));
                    return j(v, t), v;
                },
                [j],
            ),
            W = i.useCallback(function (e) {
                G.current.delete(e);
            }, []),
            K = i.useCallback(function () {
                return G.current.clear();
            }, []),
            z = i.useCallback(function () {
                return w.current;
            }, []);
        i.useImperativeHandle(
            t,
            function () {
                return {
                    createConfetti: Y,
                    addConfetti: j,
                    deleteConfetti: W,
                    clearConfetti: K,
                    getCanvas: z,
                    addReadyListener: x,
                    removeReadyListener: U,
                    isReady: P,
                };
            },
            [Y, j, W, K, z, x, U, P],
        );
        var $ = i.useCallback(
                function (e, t) {
                    var n,
                        i,
                        r = t.clickHandler,
                        a = t.mouseHandler;
                    if (null != r || null != a) {
                        var o = null == (n = w.current) ? void 0 : n.getBoundingClientRect();
                        if (null != o) {
                            var l = (function (e, t) {
                                if (null == t) throw Error("element should not be null");
                                var n = t.getBoundingClientRect();
                                return { x: e.clientX - n.left, y: e.clientY - n.top };
                            })(e, w.current);
                            if (s(l, { x: o.left, y: o.top, width: o.width, height: o.height })) {
                                if (null != a) return a(e);
                                if (null != r) {
                                    var c = (-1e3 / B.current) * 2,
                                        d = (function (e, t) {
                                            for (var n = 0, i = Array.from(e.values()); n < i.length; n++) {
                                                var r = i[n];
                                                if (null != r && t(r)) return r;
                                            }
                                            return null;
                                        })(G.current, function (e) {
                                            var t = e.confetti,
                                                n = t.previewPositionUpdate(u, c);
                                            return s(l, {
                                                x: n.x - t.width / 2,
                                                y: n.y - t.height / 2,
                                                width: t.width,
                                                height: t.height,
                                            });
                                        });
                                    r(e, null != (i = null == d ? void 0 : d.confetti) ? i : null);
                                }
                            }
                        }
                    }
                },
                [u],
            ),
            q = i.useCallback(
                function (e) {
                    return $(e, { clickHandler: c });
                },
                [$, c],
            ),
            Z = i.useCallback(
                function (e) {
                    return $(e, { clickHandler: d });
                },
                [$, d],
            ),
            X = i.useCallback(
                function (e) {
                    return $(e, { mouseHandler: f });
                },
                [$, f],
            ),
            Q = i.useCallback(
                function (e) {
                    return $(e, { mouseHandler: h });
                },
                [$, h],
            );
        return (
            i.useEffect(
                function () {
                    var e = function (e, t, n) {
                        null != n && window.addEventListener(e, t);
                    };
                    return (
                        e("click", q, c),
                        e("mousedown", Z, d),
                        e("mousemove", X, f),
                        e("mouseup", Q, h),
                        function () {
                            window.removeEventListener("click", q),
                                window.removeEventListener("mousedown", Z),
                                window.removeEventListener("mousemove", X),
                                window.removeEventListener("mouseup", X);
                        }
                    );
                },
                [q, Z, X, Q, c, d, f, h],
            ),
            i.useEffect(
                function () {
                    var e = w.current,
                        t = new ResizeObserver(function () {
                            !(function (e) {
                                if (null != e) {
                                    var t = e.getBoundingClientRect(),
                                        i = t.width,
                                        r = t.height;
                                    (e.width = i * n.g.devicePixelRatio), (e.height = r * n.g.devicePixelRatio);
                                }
                            })(w.current),
                                k(!0);
                        });
                    return (
                        null != e && t.observe(e),
                        function () {
                            null != e && t.unobserve(e);
                        }
                    );
                },
                [k],
            ),
            i.createElement("canvas", _({}, L, { className: a, ref: w }))
        );
    }),
    O = { display: "none", position: "absolute", width: 0, height: 0, left: "-100%" },
    R = i.forwardRef(function (e, t) {
        var n = e.className,
            r = e.visible,
            s = e.sprites,
            a = e.colors,
            o = e.spriteWidth,
            l = e.spriteHeight,
            u = i.useRef(null),
            c = i.useRef([]),
            d = C(),
            _ = d.isReady,
            f = d.addReadyListener,
            h = d.removeReadyListener,
            p = d.setIsReady;
        i.useImperativeHandle(
            t,
            function () {
                return {
                    getCanvas: function () {
                        return u.current;
                    },
                    getCreateData: function () {
                        return { sprites: c.current, colors: a, spriteWidth: o, spriteHeight: l };
                    },
                    addReadyListener: f,
                    removeReadyListener: h,
                    isReady: _,
                };
            },
            [f, a, _, h, l, o],
        );
        var E = i.useCallback(
                function () {
                    var e = u.current,
                        t = null == e ? void 0 : e.getContext("2d", { willReadFrequently: !0 });
                    null != t &&
                        null != e &&
                        (t.clearRect(0, 0, e.width, e.height),
                        c.current.forEach(function (e, n) {
                            var i = function (i, r) {
                                var s = o * r + 2 * r,
                                    a = l * n + 2 * n;
                                if ((t.drawImage(e.image, s, a, o, l), null != i)) {
                                    for (
                                        var u,
                                            c,
                                            d = t.getImageData(s, a, o, l),
                                            _ =
                                                ("#" === (u = i)[0] && (u = u.slice(1)),
                                                {
                                                    r: ((c = parseInt(u, 16)) >> 16) & 255,
                                                    g: (c >> 8) & 255,
                                                    b: 255 & c,
                                                }),
                                            f = 0;
                                        f < d.data.length;
                                        f += 4
                                    )
                                        (d.data[f] = _.r), (d.data[f + 1] = _.g), (d.data[f + 2] = _.b);
                                    t.putImageData(d, s, a);
                                }
                            };
                            e.colorize
                                ? a.forEach(function (e, t) {
                                      return i(e, t);
                                  })
                                : i(null, 0);
                        }));
                },
                [a, l, o],
            ),
            m = i.useCallback(
                function () {
                    var e = s.map(function (e) {
                        var t = new Image(),
                            n = "string" == typeof e ? e : e.src,
                            i = "string" == typeof e || e.colorize;
                        t.src = n;
                        var r = new Promise(function (e) {
                            t.onload = e;
                        });
                        return { colorize: i, image: t, src: n, loadPromise: r };
                    });
                    return Promise.all(
                        e.map(function (e) {
                            return e.loadPromise;
                        }),
                    ).then(function () {
                        c.current = e.map(function (e) {
                            return { colorize: e.colorize, image: e.image, src: e.src };
                        });
                    });
                },
                [s],
            ),
            g = i.useCallback(
                function () {
                    var e, t, n, i;
                    return (
                        (e = void 0),
                        (t = void 0),
                        (n = void 0),
                        (i = function () {
                            return (function (e, t) {
                                var n,
                                    i,
                                    r,
                                    s,
                                    a = {
                                        label: 0,
                                        sent: function () {
                                            if (1 & r[0]) throw r[1];
                                            return r[1];
                                        },
                                        trys: [],
                                        ops: [],
                                    };
                                return (
                                    (s = { next: o(0), throw: o(1), return: o(2) }),
                                    "function" == typeof Symbol &&
                                        (s[Symbol.iterator] = function () {
                                            return this;
                                        }),
                                    s
                                );
                                function o(o) {
                                    return function (l) {
                                        var u = [o, l];
                                        if (n) throw TypeError("Generator is already executing.");
                                        for (; s && ((s = 0), u[0] && (a = 0)), a; )
                                            try {
                                                if (
                                                    ((n = 1),
                                                    i &&
                                                        (r =
                                                            2 & u[0]
                                                                ? i.return
                                                                : u[0]
                                                                  ? i.throw || ((r = i.return) && r.call(i), 0)
                                                                  : i.next) &&
                                                        !(r = r.call(i, u[1])).done)
                                                )
                                                    return r;
                                                switch (((i = 0), r && (u = [2 & u[0], r.value]), u[0])) {
                                                    case 0:
                                                    case 1:
                                                        r = u;
                                                        break;
                                                    case 4:
                                                        return a.label++, { value: u[1], done: !1 };
                                                    case 5:
                                                        a.label++, (i = u[1]), (u = [0]);
                                                        continue;
                                                    case 7:
                                                        (u = a.ops.pop()), a.trys.pop();
                                                        continue;
                                                    default:
                                                        if (
                                                            !(r = (r = a.trys).length > 0 && r[r.length - 1]) &&
                                                            (6 === u[0] || 2 === u[0])
                                                        ) {
                                                            a = 0;
                                                            continue;
                                                        }
                                                        if (3 === u[0] && (!r || (u[1] > r[0] && u[1] < r[3]))) {
                                                            a.label = u[1];
                                                            break;
                                                        }
                                                        if (6 === u[0] && a.label < r[1]) {
                                                            (a.label = r[1]), (r = u);
                                                            break;
                                                        }
                                                        if (r && a.label < r[2]) {
                                                            (a.label = r[2]), a.ops.push(u);
                                                            break;
                                                        }
                                                        r[2] && a.ops.pop(), a.trys.pop();
                                                        continue;
                                                }
                                                u = t.call(e, a);
                                            } catch (e) {
                                                (u = [6, e]), (i = 0);
                                            } finally {
                                                n = r = 0;
                                            }
                                        if (5 & u[0]) throw u[1];
                                        return { value: u[0] ? u[1] : void 0, done: !0 };
                                    };
                                }
                            })(this, function (e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, m()];
                                    case 1:
                                        return e.sent(), E(), p(!0), [2];
                                }
                            });
                        }),
                        new (n || (n = Promise))(function (r, s) {
                            function a(e) {
                                try {
                                    l(i.next(e));
                                } catch (e) {
                                    s(e);
                                }
                            }
                            function o(e) {
                                try {
                                    l(i.throw(e));
                                } catch (e) {
                                    s(e);
                                }
                            }
                            function l(e) {
                                var t;
                                e.done
                                    ? r(e.value)
                                    : ((t = e.value) instanceof n
                                          ? t
                                          : new n(function (e) {
                                                e(t);
                                            })
                                      ).then(a, o);
                            }
                            l((i = i.apply(e, t || [])).next());
                        })
                    );
                },
                [m, E, p],
            );
        return (
            i.useEffect(
                function () {
                    g();
                },
                [g],
            ),
            i.useEffect(
                function () {
                    null != u.current &&
                        ((u.current.width = (o + 2) * Math.max(a.length, 1)), (u.current.height = (l + 2) * s.length));
                },
                [a.length, l, o, s.length],
            ),
            i.createElement("canvas", { ref: u, className: n, style: void 0 !== r && r ? void 0 : O })
        );
    });
function b(e, t) {
    var n,
        r,
        s = i.useState(null != (n = null == t ? void 0 : t.isReady) && n),
        a = s[0],
        o = s[1],
        l = i.useState(null != (r = null == e ? void 0 : e.isReady) && r),
        u = l[0],
        c = l[1];
    i.useEffect(
        function () {
            var e = null == t ? void 0 : t.addReadyListener(o);
            return function () {
                null != e && (null == t || t.removeReadyListener(e));
            };
        },
        [t],
    ),
        i.useEffect(
            function () {
                var t = null == e ? void 0 : e.addReadyListener(c);
                return function () {
                    null != t && (null == e || e.removeReadyListener(t));
                };
            },
            [e],
        );
    var d = i.useCallback(
            function (n, i) {
                var r = void 0 === i ? {} : i,
                    s = r.sprite,
                    a = r.color,
                    o = null == t ? void 0 : t.getCreateData(),
                    l = null == t ? void 0 : t.getCanvas();
                if (null != l && null != o && 0 !== o.sprites.length)
                    return null == e ? void 0 : e.createConfetti(n, l, o, s, a);
            },
            [e, t],
        ),
        _ = i.useCallback(
            function (e, t, n) {
                for (var i = [], r = 0; r < t; r++) {
                    var s = d(e, n);
                    s && i.push(s);
                }
                return i;
            },
            [d],
        ),
        f = i.useCallback(
            function (n) {
                var i = null == t ? void 0 : t.getCanvas();
                null != i && (null == e || e.addConfetti(n, i));
            },
            [e, t],
        ),
        h = i.useCallback(
            function (t) {
                null == e || e.deleteConfetti(t);
            },
            [e],
        ),
        p = i.useCallback(
            function () {
                return null == e ? void 0 : e.clearConfetti();
            },
            [e],
        );
    return i.useMemo(
        function () {
            return {
                createConfetti: d,
                createMultipleConfetti: _,
                addConfetti: f,
                clearConfetti: p,
                deleteConfetti: h,
                isReady: null != t && null != e && u && a,
            };
        },
        [f, p, e, d, _, h, u, a, t],
    );
}
