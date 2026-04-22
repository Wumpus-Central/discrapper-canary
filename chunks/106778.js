"use strict";
n.d(t, { Fk: () => R, K_: () => C, OH: () => u, f9: () => b });
var r = n(64700),
    i = n(835245);
function s(e, t) {
    var n = e.x,
        r = e.y;
    return n > t.x && n < t.x + t.width && r > t.y && r < t.y + t.height;
}
function a(e, t, n, r) {
    var i = Math.abs(t);
    return 0.5 * e * r * n * i * i * (t > 0 ? -1 : 1);
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
                    x: n + a(this.dragCoefficient.x, this.velocity.x, this.airResistanceArea.x, e.density),
                    y: r + a(this.dragCoefficient.y, this.velocity.y, this.airResistanceArea.y, e.density),
                };
            }),
            (e.prototype.update = function (e) {
                var t = Date.now(),
                    n = (t - this._lastUpdatedAt) / 100;
                this.rotation.update(n), this.dragCoefficient.update(n);
                var r = this.getNewForces(e, n),
                    i = r.x,
                    s = r.y;
                this.velocity.update(n),
                    (this.velocity.x += i),
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
                    r = this.velocity.previewUpdate(n),
                    i = this.getNewForces(e, n),
                    s = i.x,
                    a = i.y;
                (r.x += s), (r.y += a);
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
        velocity: { type: "static", value: 0 },
        rotation: { type: "static", value: 0 },
        dragCoefficient: { type: "static", value: 1.66 },
        airResistanceArea: { type: "static", value: 0.001 },
        opacity: { type: "static", value: 1 },
    },
    u = function (e) {
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
    d = function (e, t) {
        return (d =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                    e.__proto__ = t;
                }) ||
            function (e, t) {
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
    };
function c(e, t) {
    if ("function" != typeof t && null !== t)
        throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
    function n() {
        this.constructor = e;
    }
    d(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
}
var _ = function () {
        return (_ =
            Object.assign ||
            function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
            }).apply(this, arguments);
    },
    f = function (e) {
        this.value = e;
    },
    E = (function () {
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
    h = (function (e) {
        function t(t, n, r, i) {
            var s = e.call(this, t, n, i) || this;
            return (s._z = i ? t : r), s;
        }
        return (
            c(t, e),
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
    })(E),
    p = (function (e) {
        function t() {
            return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
            c(t, e),
            (t.prototype.update = function () {}),
            (t.prototype.previewUpdate = function () {
                return this.value;
            }),
            t
        );
    })(f),
    m = (function (e) {
        function t(t, n) {
            var r = e.call(this, t) || this;
            return (r.addValue = n), r;
        }
        return (
            c(t, e),
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
        function t(t, n, r, i, s, a) {
            var o = e.call(this, t) || this;
            (o.min = n), (o.max = r), (o.duration = i);
            var l = (o.value / (o.max - o.min)) * o.duration,
                u = isNaN(l) ? 0 : l;
            return (o.timePassed = u < 0 ? o.duration - u : u), (o.directionMultiplier = s), (o.easingFunction = a), o;
        }
        return (
            c(t, e),
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
                    s = this.easingFunction(r, this.min, t, this.duration);
                return [isNaN(s) ? 0 : s, r, i];
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
function y(e) {
    return "number" == typeof e ? { x: e, y: e, z: e } : e;
}
function N(e) {
    return (function (e) {
        switch (e.type) {
            case "static":
                var t = S(e.value);
                return new E(new p(t.x), new p(t.y), e.uniformVectorValues);
            case "static-random":
                var n = S(e.minValue),
                    r = S(e.maxValue);
                return new E(new p(A(n.x, r.x)), new p(A(n.y, r.y)), e.uniformVectorValues);
            case "linear":
                t = S(e.value);
                var i = S(e.addValue);
                return new E(new m(t.x, i.x), new m(t.y, i.y), e.uniformVectorValues);
            case "linear-random":
                (n = S(e.minValue)), (r = S(e.maxValue));
                var s = S(e.minAddValue),
                    a = S(e.maxAddValue);
                return new E(new m(A(n.x, r.x), A(s.x, a.x)), new m(A(n.y, r.y), A(s.x, a.x)), e.uniformVectorValues);
            case "oscillating":
                t = S(e.value);
                var o = S(e.start),
                    l = S(e.final),
                    u = S(e.duration),
                    d = S(e.direction);
                return new E(
                    new g(t.x, o.x, l.x, u.x, d.x, e.easingFunction),
                    new g(t.y, o.y, l.y, u.x, d.y, e.easingFunction),
                    e.uniformVectorValues,
                );
            case "oscillating-random":
                (n = S(e.minValue)), (r = S(e.maxValue));
                var c = S(e.minStart),
                    _ = S(e.maxStart),
                    f = S(e.minFinal),
                    h = S(e.maxFinal),
                    y = S(e.minDuration),
                    N = S(e.maxDuration),
                    O = S(e.minDirection),
                    R = S(e.maxDirection);
                return new E(
                    new g(A(n.x, r.x), A(c.x, _.x), A(f.x, h.x), A(y.x, N.x), T(O.x, R.x), I(e.easingFunctions)[0]),
                    new g(A(n.y, r.y), A(c.y, _.y), A(f.y, h.y), A(y.y, N.y), T(O.y, R.y), I(e.easingFunctions)[0]),
                    e.uniformVectorValues,
                );
        }
    })(_(_({}, e), { valueType: "Vector2" }));
}
function O() {
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
var R = r.forwardRef(function (e, t) {
        var a = e.className,
            u = e.environment,
            d = e.onClick,
            c = e.onMouseDown,
            f = e.onMouseMove,
            E = e.onMouseUp,
            S = e.onBeforeRender,
            R = e.onAfterRender,
            v = e.requestAnimationFrame,
            C = void 0 === v ? window.requestAnimationFrame : v,
            b = e.cancelAnimationFrame,
            D = void 0 === b ? window.cancelAnimationFrame : b,
            L = (function (e, t) {
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
            w = r.useRef(null),
            M = O(),
            P = M.isReady,
            U = M.addReadyListener,
            k = M.removeReadyListener,
            x = M.setIsReady,
            G = r.useRef(new Map()),
            V = r.useRef(null),
            F = r.useRef(0),
            B = r.useRef(0),
            H = r.useCallback(
                function () {
                    var e = w.current;
                    if (null != e) {
                        var t = e.getContext("2d");
                        if (null != t) {
                            t.clearRect(0, 0, e.width, e.height),
                                null == S || S(t),
                                G.current.forEach(function (n, r) {
                                    var i = n.confetti,
                                        s = n.spriteCanvas;
                                    i.update(u), i.draw(s, t), i.shouldDestroy(e, u) && G.current.delete(r);
                                }),
                                null == R || R(t),
                                G.current.size > 0
                                    ? (V.current = C(H))
                                    : (t.clearRect(0, 0, e.width, e.height), (V.current = null));
                            var n = Date.now();
                            0 !== F.current && (B.current = 1e3 / (n - F.current)), (F.current = n);
                        }
                    }
                },
                [u, R, S, C],
            );
        r.useEffect(
            function () {
                null != V.current && (D(V.current), (V.current = C(H)));
            },
            [D, H, C],
        );
        var Y = r.useCallback(
                function (e, t) {
                    G.current.set(e.id, { confetti: e, spriteCanvas: t }), null == V.current && H();
                },
                [H],
            ),
            W = r.useCallback(
                function (e, t, n, r, s) {
                    var a,
                        u,
                        d,
                        c,
                        f,
                        E,
                        S,
                        O,
                        R =
                            ((a = null != (O = e.id) ? O : (0, i.A)()),
                            (u = _(_({ id: a }, l), e)),
                            (c = (d = (function (e, t) {
                                if (null != e) {
                                    var n = t.sprites.findIndex(function (t) {
                                        return "string" == typeof e
                                            ? t.src === e && t.colorize
                                            : t.src === e.src && t.colorize === e.colorize;
                                    });
                                    if (-1 !== n) return [e, n];
                                }
                                return I(t.sprites);
                            })(r, n))[0]),
                            (f = d[1]),
                            (E = (function (e, t, n) {
                                if (!("string" == typeof e || e.colorize)) return 0;
                                var r =
                                    null != t
                                        ? n.colors.findIndex(function (e) {
                                              return e === t;
                                          })
                                        : -1;
                                return -1 !== r ? r : Math.floor(A(0, n.colors.length - 1));
                            })(null != r ? r : c, s, n)),
                            new o({
                                id: a,
                                position: N(u.position),
                                velocity: N(u.velocity),
                                rotation:
                                    ((S = u.rotation),
                                    (function (e) {
                                        switch (e.type) {
                                            case "static":
                                                var t = y(e.value);
                                                return new h(new p(t.x), new p(t.y), new p(t.z), e.uniformVectorValues);
                                            case "static-random":
                                                var n = y(e.minValue),
                                                    r = y(e.maxValue);
                                                return new h(
                                                    new p(A(n.x, r.x)),
                                                    new p(A(n.y, r.y)),
                                                    new p(A(n.z, r.z)),
                                                    e.uniformVectorValues,
                                                );
                                            case "linear":
                                                t = y(e.value);
                                                var i = y(e.addValue);
                                                return new h(
                                                    new m(t.x, i.x),
                                                    new m(t.y, i.y),
                                                    new m(t.z, i.z),
                                                    e.uniformVectorValues,
                                                );
                                            case "linear-random":
                                                (n = y(e.minValue)), (r = y(e.maxValue));
                                                var s = y(e.minAddValue),
                                                    a = y(e.maxAddValue);
                                                return new h(
                                                    new m(A(n.x, r.x), A(s.x, a.x)),
                                                    new m(A(n.y, r.y), A(s.y, a.y)),
                                                    new m(A(n.z, r.z), A(s.z, a.z)),
                                                    e.uniformVectorValues,
                                                );
                                            case "oscillating":
                                                t = y(e.value);
                                                var o = y(e.start),
                                                    l = y(e.final),
                                                    u = y(e.duration),
                                                    d = y(e.direction);
                                                return new h(
                                                    new g(t.x, o.x, l.x, u.x, d.x, e.easingFunction),
                                                    new g(t.y, o.y, l.y, u.z, d.y, e.easingFunction),
                                                    new g(t.z, o.z, l.z, u.z, d.z, e.easingFunction),
                                                    e.uniformVectorValues,
                                                );
                                            case "oscillating-random":
                                                (n = y(e.minValue)), (r = y(e.maxValue));
                                                var c = y(e.minStart),
                                                    _ = y(e.maxStart),
                                                    f = y(e.minFinal),
                                                    E = y(e.maxFinal),
                                                    S = y(e.minDuration),
                                                    N = y(e.maxDuration),
                                                    O = y(e.minDirection),
                                                    R = y(e.maxDirection);
                                                return new h(
                                                    new g(
                                                        A(n.x, r.x),
                                                        A(c.x, _.x),
                                                        A(f.x, E.x),
                                                        A(S.x, N.x),
                                                        T(O.x, R.x),
                                                        I(e.easingFunctions)[0],
                                                    ),
                                                    new g(
                                                        A(n.y, r.y),
                                                        A(c.y, _.y),
                                                        A(f.y, E.y),
                                                        A(S.y, N.y),
                                                        T(O.y, R.y),
                                                        I(e.easingFunctions)[0],
                                                    ),
                                                    new g(
                                                        A(n.z, r.z),
                                                        A(c.z, _.z),
                                                        A(f.z, E.z),
                                                        A(S.z, N.z),
                                                        T(O.z, R.z),
                                                        I(e.easingFunctions)[0],
                                                    ),
                                                    e.uniformVectorValues,
                                                );
                                        }
                                    })(_(_({}, S), { valueType: "Vector3" }))),
                                dragCoefficient: N(u.dragCoefficient),
                                size: N(u.size),
                                opacity: (function (e) {
                                    var t = _(_({}, e), { valueType: "number" });
                                    switch (t.type) {
                                        case "static":
                                            return new p(t.value);
                                        case "static-random":
                                            return new p(A(t.minValue, t.maxValue));
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
                                airResistanceArea: N(u.airResistanceArea),
                                spriteX: E * n.spriteWidth + 2 * E,
                                spriteY: f * n.spriteHeight + 2 * f,
                                spriteWidth: n.spriteWidth,
                                spriteHeight: n.spriteHeight,
                            }));
                    return Y(R, t), R;
                },
                [Y],
            ),
            j = r.useCallback(function (e) {
                G.current.delete(e);
            }, []),
            K = r.useCallback(function () {
                return G.current.clear();
            }, []),
            $ = r.useCallback(function () {
                return w.current;
            }, []);
        r.useImperativeHandle(
            t,
            function () {
                return {
                    createConfetti: W,
                    addConfetti: Y,
                    deleteConfetti: j,
                    clearConfetti: K,
                    getCanvas: $,
                    addReadyListener: U,
                    removeReadyListener: k,
                    isReady: P,
                };
            },
            [W, Y, j, K, $, U, k, P],
        );
        var z = r.useCallback(
                function (e, t) {
                    var n,
                        r,
                        i = t.clickHandler,
                        a = t.mouseHandler;
                    if (null != i || null != a) {
                        var o = null == (n = w.current) ? void 0 : n.getBoundingClientRect();
                        if (null != o) {
                            var l = (function (e, t) {
                                if (null == t) throw Error("element should not be null");
                                var n = t.getBoundingClientRect();
                                return { x: e.clientX - n.left, y: e.clientY - n.top };
                            })(e, w.current);
                            if (s(l, { x: o.left, y: o.top, width: o.width, height: o.height })) {
                                if (null != a) return a(e);
                                if (null != i) {
                                    var d = (-1e3 / B.current) * 2,
                                        c = (function (e, t) {
                                            for (var n = 0, r = Array.from(e.values()); n < r.length; n++) {
                                                var i = r[n];
                                                if (null != i && t(i)) return i;
                                            }
                                            return null;
                                        })(G.current, function (e) {
                                            var t = e.confetti,
                                                n = t.previewPositionUpdate(u, d);
                                            return s(l, {
                                                x: n.x - t.width / 2,
                                                y: n.y - t.height / 2,
                                                width: t.width,
                                                height: t.height,
                                            });
                                        });
                                    i(e, null != (r = null == c ? void 0 : c.confetti) ? r : null);
                                }
                            }
                        }
                    }
                },
                [u],
            ),
            q = r.useCallback(
                function (e) {
                    return z(e, { clickHandler: d });
                },
                [z, d],
            ),
            X = r.useCallback(
                function (e) {
                    return z(e, { clickHandler: c });
                },
                [z, c],
            ),
            Q = r.useCallback(
                function (e) {
                    return z(e, { mouseHandler: f });
                },
                [z, f],
            ),
            J = r.useCallback(
                function (e) {
                    return z(e, { mouseHandler: E });
                },
                [z, E],
            );
        return (
            r.useEffect(
                function () {
                    var e = function (e, t, n) {
                        null != n && window.addEventListener(e, t);
                    };
                    return (
                        e("click", q, d),
                        e("mousedown", X, c),
                        e("mousemove", Q, f),
                        e("mouseup", J, E),
                        function () {
                            window.removeEventListener("click", q),
                                window.removeEventListener("mousedown", X),
                                window.removeEventListener("mousemove", Q),
                                window.removeEventListener("mouseup", Q);
                        }
                    );
                },
                [q, X, Q, J, d, c, f, E],
            ),
            r.useEffect(
                function () {
                    var e = w.current,
                        t = new ResizeObserver(function () {
                            !(function (e) {
                                if (null != e) {
                                    var t = e.getBoundingClientRect(),
                                        r = t.width,
                                        i = t.height;
                                    (e.width = r * n.g.devicePixelRatio), (e.height = i * n.g.devicePixelRatio);
                                }
                            })(w.current),
                                x(!0);
                        });
                    return (
                        null != e && t.observe(e),
                        function () {
                            null != e && t.unobserve(e);
                        }
                    );
                },
                [x],
            ),
            r.createElement("canvas", _({}, L, { className: a, ref: w }))
        );
    }),
    v = { display: "none", position: "absolute", width: 0, height: 0, left: "-100%" },
    C = r.forwardRef(function (e, t) {
        var n = e.className,
            i = e.visible,
            s = e.sprites,
            a = e.colors,
            o = e.spriteWidth,
            l = e.spriteHeight,
            u = r.useRef(null),
            d = r.useRef([]),
            c = O(),
            _ = c.isReady,
            f = c.addReadyListener,
            E = c.removeReadyListener,
            h = c.setIsReady;
        r.useImperativeHandle(
            t,
            function () {
                return {
                    getCanvas: function () {
                        return u.current;
                    },
                    getCreateData: function () {
                        return { sprites: d.current, colors: a, spriteWidth: o, spriteHeight: l };
                    },
                    addReadyListener: f,
                    removeReadyListener: E,
                    isReady: _,
                };
            },
            [f, a, _, E, l, o],
        );
        var p = r.useCallback(
                function () {
                    var e = u.current,
                        t = null == e ? void 0 : e.getContext("2d", { willReadFrequently: !0 });
                    null != t &&
                        null != e &&
                        (t.clearRect(0, 0, e.width, e.height),
                        d.current.forEach(function (e, n) {
                            var r = function (r, i) {
                                var s = o * i + 2 * i,
                                    a = l * n + 2 * n;
                                if ((t.drawImage(e.image, s, a, o, l), null != r)) {
                                    for (
                                        var u,
                                            d,
                                            c = t.getImageData(s, a, o, l),
                                            _ =
                                                ("#" === (u = r)[0] && (u = u.slice(1)),
                                                {
                                                    r: ((d = parseInt(u, 16)) >> 16) & 255,
                                                    g: (d >> 8) & 255,
                                                    b: 255 & d,
                                                }),
                                            f = 0;
                                        f < c.data.length;
                                        f += 4
                                    )
                                        (c.data[f] = _.r), (c.data[f + 1] = _.g), (c.data[f + 2] = _.b);
                                    t.putImageData(c, s, a);
                                }
                            };
                            e.colorize
                                ? a.forEach(function (e, t) {
                                      return r(e, t);
                                  })
                                : r(null, 0);
                        }));
                },
                [a, l, o],
            ),
            m = r.useCallback(
                function () {
                    var e = s.map(function (e) {
                        var t = new Image(),
                            n = "string" == typeof e ? e : e.src,
                            r = "string" == typeof e || e.colorize;
                        t.src = n;
                        var i = new Promise(function (e) {
                            t.onload = e;
                        });
                        return { colorize: r, image: t, src: n, loadPromise: i };
                    });
                    return Promise.all(
                        e.map(function (e) {
                            return e.loadPromise;
                        }),
                    ).then(function () {
                        d.current = e.map(function (e) {
                            return { colorize: e.colorize, image: e.image, src: e.src };
                        });
                    });
                },
                [s],
            ),
            g = r.useCallback(
                function () {
                    var e, t, n, r;
                    return (
                        (e = void 0),
                        (t = void 0),
                        (n = void 0),
                        (r = function () {
                            return (function (e, t) {
                                var n,
                                    r,
                                    i,
                                    s,
                                    a = {
                                        label: 0,
                                        sent: function () {
                                            if (1 & i[0]) throw i[1];
                                            return i[1];
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
                                                    r &&
                                                        (i =
                                                            2 & u[0]
                                                                ? r.return
                                                                : u[0]
                                                                  ? r.throw || ((i = r.return) && i.call(r), 0)
                                                                  : r.next) &&
                                                        !(i = i.call(r, u[1])).done)
                                                )
                                                    return i;
                                                switch (((r = 0), i && (u = [2 & u[0], i.value]), u[0])) {
                                                    case 0:
                                                    case 1:
                                                        i = u;
                                                        break;
                                                    case 4:
                                                        return a.label++, { value: u[1], done: !1 };
                                                    case 5:
                                                        a.label++, (r = u[1]), (u = [0]);
                                                        continue;
                                                    case 7:
                                                        (u = a.ops.pop()), a.trys.pop();
                                                        continue;
                                                    default:
                                                        if (
                                                            !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                                                            (6 === u[0] || 2 === u[0])
                                                        ) {
                                                            a = 0;
                                                            continue;
                                                        }
                                                        if (3 === u[0] && (!i || (u[1] > i[0] && u[1] < i[3]))) {
                                                            a.label = u[1];
                                                            break;
                                                        }
                                                        if (6 === u[0] && a.label < i[1]) {
                                                            (a.label = i[1]), (i = u);
                                                            break;
                                                        }
                                                        if (i && a.label < i[2]) {
                                                            (a.label = i[2]), a.ops.push(u);
                                                            break;
                                                        }
                                                        i[2] && a.ops.pop(), a.trys.pop();
                                                        continue;
                                                }
                                                u = t.call(e, a);
                                            } catch (e) {
                                                (u = [6, e]), (r = 0);
                                            } finally {
                                                n = i = 0;
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
                                        return e.sent(), p(), h(!0), [2];
                                }
                            });
                        }),
                        new (n || (n = Promise))(function (i, s) {
                            function a(e) {
                                try {
                                    l(r.next(e));
                                } catch (e) {
                                    s(e);
                                }
                            }
                            function o(e) {
                                try {
                                    l(r.throw(e));
                                } catch (e) {
                                    s(e);
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
                                      ).then(a, o);
                            }
                            l((r = r.apply(e, t || [])).next());
                        })
                    );
                },
                [m, p, h],
            );
        return (
            r.useEffect(
                function () {
                    g();
                },
                [g],
            ),
            r.useEffect(
                function () {
                    null != u.current &&
                        ((u.current.width = (o + 2) * Math.max(a.length, 1)), (u.current.height = (l + 2) * s.length));
                },
                [a.length, l, o, s.length],
            ),
            r.createElement("canvas", { ref: u, className: n, style: void 0 !== i && i ? void 0 : v })
        );
    });
function b(e, t) {
    var n,
        i,
        s = r.useState(null != (n = null == t ? void 0 : t.isReady) && n),
        a = s[0],
        o = s[1],
        l = r.useState(null != (i = null == e ? void 0 : e.isReady) && i),
        u = l[0],
        d = l[1];
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
                var t = null == e ? void 0 : e.addReadyListener(d);
                return function () {
                    null != t && (null == e || e.removeReadyListener(t));
                };
            },
            [e],
        );
    var c = r.useCallback(
            function (n, r) {
                var i = void 0 === r ? {} : r,
                    s = i.sprite,
                    a = i.color,
                    o = null == t ? void 0 : t.getCreateData(),
                    l = null == t ? void 0 : t.getCanvas();
                if (null != l && null != o && 0 !== o.sprites.length)
                    return null == e ? void 0 : e.createConfetti(n, l, o, s, a);
            },
            [e, t],
        ),
        _ = r.useCallback(
            function (e, t, n) {
                for (var r = [], i = 0; i < t; i++) {
                    var s = c(e, n);
                    s && r.push(s);
                }
                return r;
            },
            [c],
        ),
        f = r.useCallback(
            function (n) {
                var r = null == t ? void 0 : t.getCanvas();
                null != r && (null == e || e.addConfetti(n, r));
            },
            [e, t],
        ),
        E = r.useCallback(
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
                createConfetti: c,
                createMultipleConfetti: _,
                addConfetti: f,
                clearConfetti: h,
                deleteConfetti: E,
                isReady: null != t && null != e && u && a,
            };
        },
        [f, h, e, c, _, E, u, a, t],
    );
}
