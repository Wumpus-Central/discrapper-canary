n.d(t, { Fk: () => V, K_: () => O, OH: () => c, f9: () => k });
var i = n(64700),
    r = n(132500);
function o(e, t) {
    var n = e.x,
        i = e.y;
    return n > t.x && n < t.x + t.width && i > t.y && i < t.y + t.height;
}
function a(e, t, n, i) {
    var r = Math.abs(t);
    return 0.5 * e * i * n * r * r * (t > 0 ? -1 : 1);
}
var u = (function () {
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
                    o = i.y;
                this.velocity.update(n),
                    (this.velocity.x += r),
                    (this.velocity.y += o),
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
                    o = r.x,
                    a = r.y;
                (i.x += o), (i.y += a);
                var u = this.position.previewUpdate(n);
                return (u.x += i.x * n), (u.y += i.y * n), u;
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
    s = {
        velocity: { type: "static", value: 0 },
        rotation: { type: "static", value: 0 },
        dragCoefficient: { type: "static", value: 1.66 },
        airResistanceArea: { type: "static", value: 0.001 },
        opacity: { type: "static", value: 1 },
    },
    c = function (e) {
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
    l = function (e, t) {
        return (l =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                    e.__proto__ = t;
                }) ||
            function (e, t) {
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
    };
function f(e, t) {
    if ("function" != typeof t && null !== t)
        throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
    function n() {
        this.constructor = e;
    }
    l(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
}
var d = function () {
        return (d =
            Object.assign ||
            function (e) {
                for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var r in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
            }).apply(this, arguments);
    },
    p = function (e) {
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
    v = (function (e) {
        function t(t, n, i, r) {
            var o = e.call(this, t, n, r) || this;
            return (o._z = r ? t : i), o;
        }
        return (
            f(t, e),
            (t.prototype.update = function (t) {
                e.prototype.update.call(this, t), this._z.update(t);
            }),
            (t.prototype.previewUpdate = function (t) {
                var n = e.prototype.previewUpdate.call(this, t);
                return d(d({}, n), { z: this._z.previewUpdate(t) });
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
    y = (function (e) {
        function t() {
            return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
            f(t, e),
            (t.prototype.update = function () {}),
            (t.prototype.previewUpdate = function () {
                return this.value;
            }),
            t
        );
    })(p),
    m = (function (e) {
        function t(t, n) {
            var i = e.call(this, t) || this;
            return (i.addValue = n), i;
        }
        return (
            f(t, e),
            (t.prototype.update = function (e) {
                this.value = this.previewUpdate(e);
            }),
            (t.prototype.previewUpdate = function (e) {
                return this.value + this.addValue * e;
            }),
            t
        );
    })(p),
    g = (function (e) {
        function t(t, n, i, r, o, a) {
            var u = e.call(this, t) || this;
            (u.min = n), (u.max = i), (u.duration = r);
            var s = (u.value / (u.max - u.min)) * u.duration,
                c = isNaN(s) ? 0 : s;
            return (u.timePassed = c < 0 ? u.duration - c : c), (u.directionMultiplier = o), (u.easingFunction = a), u;
        }
        return (
            f(t, e),
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
                    o = this.easingFunction(i, this.min, t, this.duration);
                return [isNaN(o) ? 0 : o, i, r];
            }),
            t
        );
    })(p);
function w(e, t) {
    return e === t ? e : Math.random() * (t - e + 1) + e;
}
function x(e) {
    var t = Math.floor(w(0, e.length - 1));
    return [e[t], t];
}
function b(e, t) {
    return x([e, t])[0];
}
function C(e) {
    return "number" == typeof e ? { x: e, y: e } : e;
}
function R(e) {
    return "number" == typeof e ? { x: e, y: e, z: e } : e;
}
function _(e) {
    return (function (e) {
        switch (e.type) {
            case "static":
                var t = C(e.value);
                return new h(new y(t.x), new y(t.y), e.uniformVectorValues);
            case "static-random":
                var n = C(e.minValue),
                    i = C(e.maxValue);
                return new h(new y(w(n.x, i.x)), new y(w(n.y, i.y)), e.uniformVectorValues);
            case "linear":
                t = C(e.value);
                var r = C(e.addValue);
                return new h(new m(t.x, r.x), new m(t.y, r.y), e.uniformVectorValues);
            case "linear-random":
                (n = C(e.minValue)), (i = C(e.maxValue));
                var o = C(e.minAddValue),
                    a = C(e.maxAddValue);
                return new h(new m(w(n.x, i.x), w(o.x, a.x)), new m(w(n.y, i.y), w(o.x, a.x)), e.uniformVectorValues);
            case "oscillating":
                t = C(e.value);
                var u = C(e.start),
                    s = C(e.final),
                    c = C(e.duration),
                    l = C(e.direction);
                return new h(
                    new g(t.x, u.x, s.x, c.x, l.x, e.easingFunction),
                    new g(t.y, u.y, s.y, c.x, l.y, e.easingFunction),
                    e.uniformVectorValues,
                );
            case "oscillating-random":
                (n = C(e.minValue)), (i = C(e.maxValue));
                var f = C(e.minStart),
                    d = C(e.maxStart),
                    p = C(e.minFinal),
                    v = C(e.maxFinal),
                    R = C(e.minDuration),
                    _ = C(e.maxDuration),
                    L = C(e.minDirection),
                    V = C(e.maxDirection);
                return new h(
                    new g(w(n.x, i.x), w(f.x, d.x), w(p.x, v.x), w(R.x, _.x), b(L.x, V.x), x(e.easingFunctions)[0]),
                    new g(w(n.y, i.y), w(f.y, d.y), w(p.y, v.y), w(R.y, _.y), b(L.y, V.y), x(e.easingFunctions)[0]),
                    e.uniformVectorValues,
                );
        }
    })(d(d({}, e), { valueType: "Vector2" }));
}
function L() {
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
var V = i.forwardRef(function (e, t) {
        var a = e.className,
            c = e.environment,
            l = e.onClick,
            f = e.onMouseDown,
            p = e.onMouseMove,
            h = e.onMouseUp,
            C = e.onBeforeRender,
            V = e.onAfterRender,
            z = e.requestAnimationFrame,
            O = void 0 === z ? window.requestAnimationFrame : z,
            k = e.cancelAnimationFrame,
            E = void 0 === k ? window.cancelAnimationFrame : k,
            F = (function (e, t) {
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
            P = i.useRef(null),
            A = L(),
            M = A.isReady,
            j = A.addReadyListener,
            D = A.removeReadyListener,
            U = A.setIsReady,
            N = i.useRef(new Map()),
            S = i.useRef(null),
            H = i.useRef(0),
            I = i.useRef(0),
            T = i.useCallback(
                function () {
                    var e = P.current;
                    if (null != e) {
                        var t = e.getContext("2d");
                        if (null != t) {
                            t.clearRect(0, 0, e.width, e.height),
                                null == C || C(t),
                                N.current.forEach(function (n, i) {
                                    var r = n.confetti,
                                        o = n.spriteCanvas;
                                    r.update(c), r.draw(o, t), r.shouldDestroy(e, c) && N.current.delete(i);
                                }),
                                null == V || V(t),
                                N.current.size > 0
                                    ? (S.current = O(T))
                                    : (t.clearRect(0, 0, e.width, e.height), (S.current = null));
                            var n = Date.now();
                            0 !== H.current && (I.current = 1e3 / (n - H.current)), (H.current = n);
                        }
                    }
                },
                [c, V, C, O],
            );
        i.useEffect(
            function () {
                null != S.current && (E(S.current), (S.current = O(T)));
            },
            [E, T, O],
        );
        var W = i.useCallback(
                function (e, t) {
                    N.current.set(e.id, { confetti: e, spriteCanvas: t }), null == S.current && T();
                },
                [T],
            ),
            B = i.useCallback(
                function (e, t, n, i, o) {
                    var a,
                        c,
                        l,
                        f,
                        p,
                        h,
                        C,
                        L,
                        V =
                            ((a = null != (L = e.id) ? L : (0, r.A)()),
                            (c = d(d({ id: a }, s), e)),
                            (f = (l = (function (e, t) {
                                if (null != e) {
                                    var n = t.sprites.findIndex(function (t) {
                                        return "string" == typeof e
                                            ? t.src === e && t.colorize
                                            : t.src === e.src && t.colorize === e.colorize;
                                    });
                                    if (-1 !== n) return [e, n];
                                }
                                return x(t.sprites);
                            })(i, n))[0]),
                            (p = l[1]),
                            (h = (function (e, t, n) {
                                if (!("string" == typeof e || e.colorize)) return 0;
                                var i =
                                    null != t
                                        ? n.colors.findIndex(function (e) {
                                              return e === t;
                                          })
                                        : -1;
                                return -1 !== i ? i : Math.floor(w(0, n.colors.length - 1));
                            })(null != i ? i : f, o, n)),
                            new u({
                                id: a,
                                position: _(c.position),
                                velocity: _(c.velocity),
                                rotation:
                                    ((C = c.rotation),
                                    (function (e) {
                                        switch (e.type) {
                                            case "static":
                                                var t = R(e.value);
                                                return new v(new y(t.x), new y(t.y), new y(t.z), e.uniformVectorValues);
                                            case "static-random":
                                                var n = R(e.minValue),
                                                    i = R(e.maxValue);
                                                return new v(
                                                    new y(w(n.x, i.x)),
                                                    new y(w(n.y, i.y)),
                                                    new y(w(n.z, i.z)),
                                                    e.uniformVectorValues,
                                                );
                                            case "linear":
                                                t = R(e.value);
                                                var r = R(e.addValue);
                                                return new v(
                                                    new m(t.x, r.x),
                                                    new m(t.y, r.y),
                                                    new m(t.z, r.z),
                                                    e.uniformVectorValues,
                                                );
                                            case "linear-random":
                                                (n = R(e.minValue)), (i = R(e.maxValue));
                                                var o = R(e.minAddValue),
                                                    a = R(e.maxAddValue);
                                                return new v(
                                                    new m(w(n.x, i.x), w(o.x, a.x)),
                                                    new m(w(n.y, i.y), w(o.y, a.y)),
                                                    new m(w(n.z, i.z), w(o.z, a.z)),
                                                    e.uniformVectorValues,
                                                );
                                            case "oscillating":
                                                t = R(e.value);
                                                var u = R(e.start),
                                                    s = R(e.final),
                                                    c = R(e.duration),
                                                    l = R(e.direction);
                                                return new v(
                                                    new g(t.x, u.x, s.x, c.x, l.x, e.easingFunction),
                                                    new g(t.y, u.y, s.y, c.z, l.y, e.easingFunction),
                                                    new g(t.z, u.z, s.z, c.z, l.z, e.easingFunction),
                                                    e.uniformVectorValues,
                                                );
                                            case "oscillating-random":
                                                (n = R(e.minValue)), (i = R(e.maxValue));
                                                var f = R(e.minStart),
                                                    d = R(e.maxStart),
                                                    p = R(e.minFinal),
                                                    h = R(e.maxFinal),
                                                    C = R(e.minDuration),
                                                    _ = R(e.maxDuration),
                                                    L = R(e.minDirection),
                                                    V = R(e.maxDirection);
                                                return new v(
                                                    new g(
                                                        w(n.x, i.x),
                                                        w(f.x, d.x),
                                                        w(p.x, h.x),
                                                        w(C.x, _.x),
                                                        b(L.x, V.x),
                                                        x(e.easingFunctions)[0],
                                                    ),
                                                    new g(
                                                        w(n.y, i.y),
                                                        w(f.y, d.y),
                                                        w(p.y, h.y),
                                                        w(C.y, _.y),
                                                        b(L.y, V.y),
                                                        x(e.easingFunctions)[0],
                                                    ),
                                                    new g(
                                                        w(n.z, i.z),
                                                        w(f.z, d.z),
                                                        w(p.z, h.z),
                                                        w(C.z, _.z),
                                                        b(L.z, V.z),
                                                        x(e.easingFunctions)[0],
                                                    ),
                                                    e.uniformVectorValues,
                                                );
                                        }
                                    })(d(d({}, C), { valueType: "Vector3" }))),
                                dragCoefficient: _(c.dragCoefficient),
                                size: _(c.size),
                                opacity: (function (e) {
                                    var t = d(d({}, e), { valueType: "number" });
                                    switch (t.type) {
                                        case "static":
                                            return new y(t.value);
                                        case "static-random":
                                            return new y(w(t.minValue, t.maxValue));
                                        case "linear":
                                            return new m(t.value, t.addValue);
                                        case "linear-random":
                                            return new m(w(t.minValue, t.maxValue), w(t.minAddValue, t.maxAddValue));
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
                                                w(t.minValue, t.maxValue),
                                                w(t.minStart, t.maxStart),
                                                w(t.minFinal, t.maxFinal),
                                                w(t.minDuration, t.maxDuration),
                                                b(t.minDirection, t.maxDirection),
                                                x(t.easingFunctions)[0],
                                            );
                                    }
                                })(c.opacity),
                                airResistanceArea: _(c.airResistanceArea),
                                spriteX: h * n.spriteWidth + 2 * h,
                                spriteY: p * n.spriteHeight + 2 * p,
                                spriteWidth: n.spriteWidth,
                                spriteHeight: n.spriteHeight,
                            }));
                    return W(V, t), V;
                },
                [W],
            ),
            X = i.useCallback(function (e) {
                N.current.delete(e);
            }, []),
            Y = i.useCallback(function () {
                return N.current.clear();
            }, []),
            q = i.useCallback(function () {
                return P.current;
            }, []);
        i.useImperativeHandle(
            t,
            function () {
                return {
                    createConfetti: B,
                    addConfetti: W,
                    deleteConfetti: X,
                    clearConfetti: Y,
                    getCanvas: q,
                    addReadyListener: j,
                    removeReadyListener: D,
                    isReady: M,
                };
            },
            [B, W, X, Y, q, j, D, M],
        );
        var K = i.useCallback(
                function (e, t) {
                    var n,
                        i,
                        r = t.clickHandler,
                        a = t.mouseHandler;
                    if (null != r || null != a) {
                        var u = null == (n = P.current) ? void 0 : n.getBoundingClientRect();
                        if (null != u) {
                            var s = (function (e, t) {
                                if (null == t) throw Error("element should not be null");
                                var n = t.getBoundingClientRect();
                                return { x: e.clientX - n.left, y: e.clientY - n.top };
                            })(e, P.current);
                            if (o(s, { x: u.left, y: u.top, width: u.width, height: u.height })) {
                                if (null != a) return a(e);
                                if (null != r) {
                                    var l = (-1e3 / I.current) * 2,
                                        f = (function (e, t) {
                                            for (var n = 0, i = Array.from(e.values()); n < i.length; n++) {
                                                var r = i[n];
                                                if (null != r && t(r)) return r;
                                            }
                                            return null;
                                        })(N.current, function (e) {
                                            var t = e.confetti,
                                                n = t.previewPositionUpdate(c, l);
                                            return o(s, {
                                                x: n.x - t.width / 2,
                                                y: n.y - t.height / 2,
                                                width: t.width,
                                                height: t.height,
                                            });
                                        });
                                    r(e, null != (i = null == f ? void 0 : f.confetti) ? i : null);
                                }
                            }
                        }
                    }
                },
                [c],
            ),
            G = i.useCallback(
                function (e) {
                    return K(e, { clickHandler: l });
                },
                [K, l],
            ),
            J = i.useCallback(
                function (e) {
                    return K(e, { clickHandler: f });
                },
                [K, f],
            ),
            Q = i.useCallback(
                function (e) {
                    return K(e, { mouseHandler: p });
                },
                [K, p],
            ),
            Z = i.useCallback(
                function (e) {
                    return K(e, { mouseHandler: h });
                },
                [K, h],
            );
        return (
            i.useEffect(
                function () {
                    var e = function (e, t, n) {
                        null != n && window.addEventListener(e, t);
                    };
                    return (
                        e("click", G, l),
                        e("mousedown", J, f),
                        e("mousemove", Q, p),
                        e("mouseup", Z, h),
                        function () {
                            window.removeEventListener("click", G),
                                window.removeEventListener("mousedown", J),
                                window.removeEventListener("mousemove", Q),
                                window.removeEventListener("mouseup", Q);
                        }
                    );
                },
                [G, J, Q, Z, l, f, p, h],
            ),
            i.useEffect(
                function () {
                    var e = P.current,
                        t = new ResizeObserver(function () {
                            !(function (e) {
                                if (null != e) {
                                    var t = e.getBoundingClientRect(),
                                        i = t.width,
                                        r = t.height;
                                    (e.width = i * n.g.devicePixelRatio), (e.height = r * n.g.devicePixelRatio);
                                }
                            })(P.current),
                                U(!0);
                        });
                    return (
                        null != e && t.observe(e),
                        function () {
                            null != e && t.unobserve(e);
                        }
                    );
                },
                [U],
            ),
            i.createElement("canvas", d({}, F, { className: a, ref: P }))
        );
    }),
    z = { display: "none", position: "absolute", width: 0, height: 0, left: "-100%" },
    O = i.forwardRef(function (e, t) {
        var n = e.className,
            r = e.visible,
            o = e.sprites,
            a = e.colors,
            u = e.spriteWidth,
            s = e.spriteHeight,
            c = i.useRef(null),
            l = i.useRef([]),
            f = L(),
            d = f.isReady,
            p = f.addReadyListener,
            h = f.removeReadyListener,
            v = f.setIsReady;
        i.useImperativeHandle(
            t,
            function () {
                return {
                    getCanvas: function () {
                        return c.current;
                    },
                    getCreateData: function () {
                        return { sprites: l.current, colors: a, spriteWidth: u, spriteHeight: s };
                    },
                    addReadyListener: p,
                    removeReadyListener: h,
                    isReady: d,
                };
            },
            [p, a, d, h, s, u],
        );
        var y = i.useCallback(
                function () {
                    var e = c.current,
                        t = null == e ? void 0 : e.getContext("2d", { willReadFrequently: !0 });
                    null != t &&
                        null != e &&
                        (t.clearRect(0, 0, e.width, e.height),
                        l.current.forEach(function (e, n) {
                            var i = function (i, r) {
                                var o = u * r + 2 * r,
                                    a = s * n + 2 * n;
                                if ((t.drawImage(e.image, o, a, u, s), null != i)) {
                                    for (
                                        var c,
                                            l,
                                            f = t.getImageData(o, a, u, s),
                                            d =
                                                ("#" === (c = i)[0] && (c = c.slice(1)),
                                                {
                                                    r: ((l = parseInt(c, 16)) >> 16) & 255,
                                                    g: (l >> 8) & 255,
                                                    b: 255 & l,
                                                }),
                                            p = 0;
                                        p < f.data.length;
                                        p += 4
                                    )
                                        (f.data[p] = d.r), (f.data[p + 1] = d.g), (f.data[p + 2] = d.b);
                                    t.putImageData(f, o, a);
                                }
                            };
                            e.colorize
                                ? a.forEach(function (e, t) {
                                      return i(e, t);
                                  })
                                : i(null, 0);
                        }));
                },
                [a, s, u],
            ),
            m = i.useCallback(
                function () {
                    var e = o.map(function (e) {
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
                        l.current = e.map(function (e) {
                            return { colorize: e.colorize, image: e.image, src: e.src };
                        });
                    });
                },
                [o],
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
                                    o,
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
                                    (o = { next: u(0), throw: u(1), return: u(2) }),
                                    "function" == typeof Symbol &&
                                        (o[Symbol.iterator] = function () {
                                            return this;
                                        }),
                                    o
                                );
                                function u(u) {
                                    return function (s) {
                                        var c = [u, s];
                                        if (n) throw TypeError("Generator is already executing.");
                                        for (; o && ((o = 0), c[0] && (a = 0)), a; )
                                            try {
                                                if (
                                                    ((n = 1),
                                                    i &&
                                                        (r =
                                                            2 & c[0]
                                                                ? i.return
                                                                : c[0]
                                                                  ? i.throw || ((r = i.return) && r.call(i), 0)
                                                                  : i.next) &&
                                                        !(r = r.call(i, c[1])).done)
                                                )
                                                    return r;
                                                switch (((i = 0), r && (c = [2 & c[0], r.value]), c[0])) {
                                                    case 0:
                                                    case 1:
                                                        r = c;
                                                        break;
                                                    case 4:
                                                        return a.label++, { value: c[1], done: !1 };
                                                    case 5:
                                                        a.label++, (i = c[1]), (c = [0]);
                                                        continue;
                                                    case 7:
                                                        (c = a.ops.pop()), a.trys.pop();
                                                        continue;
                                                    default:
                                                        if (
                                                            !(r = (r = a.trys).length > 0 && r[r.length - 1]) &&
                                                            (6 === c[0] || 2 === c[0])
                                                        ) {
                                                            a = 0;
                                                            continue;
                                                        }
                                                        if (3 === c[0] && (!r || (c[1] > r[0] && c[1] < r[3]))) {
                                                            a.label = c[1];
                                                            break;
                                                        }
                                                        if (6 === c[0] && a.label < r[1]) {
                                                            (a.label = r[1]), (r = c);
                                                            break;
                                                        }
                                                        if (r && a.label < r[2]) {
                                                            (a.label = r[2]), a.ops.push(c);
                                                            break;
                                                        }
                                                        r[2] && a.ops.pop(), a.trys.pop();
                                                        continue;
                                                }
                                                c = t.call(e, a);
                                            } catch (e) {
                                                (c = [6, e]), (i = 0);
                                            } finally {
                                                n = r = 0;
                                            }
                                        if (5 & c[0]) throw c[1];
                                        return { value: c[0] ? c[1] : void 0, done: !0 };
                                    };
                                }
                            })(this, function (e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, m()];
                                    case 1:
                                        return e.sent(), y(), v(!0), [2];
                                }
                            });
                        }),
                        new (n || (n = Promise))(function (r, o) {
                            function a(e) {
                                try {
                                    s(i.next(e));
                                } catch (e) {
                                    o(e);
                                }
                            }
                            function u(e) {
                                try {
                                    s(i.throw(e));
                                } catch (e) {
                                    o(e);
                                }
                            }
                            function s(e) {
                                var t;
                                e.done
                                    ? r(e.value)
                                    : ((t = e.value) instanceof n
                                          ? t
                                          : new n(function (e) {
                                                e(t);
                                            })
                                      ).then(a, u);
                            }
                            s((i = i.apply(e, t || [])).next());
                        })
                    );
                },
                [m, y, v],
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
                    null != c.current &&
                        ((c.current.width = (u + 2) * Math.max(a.length, 1)), (c.current.height = (s + 2) * o.length));
                },
                [a.length, s, u, o.length],
            ),
            i.createElement("canvas", { ref: c, className: n, style: void 0 !== r && r ? void 0 : z })
        );
    });
function k(e, t) {
    var n,
        r,
        o = i.useState(null != (n = null == t ? void 0 : t.isReady) && n),
        a = o[0],
        u = o[1],
        s = i.useState(null != (r = null == e ? void 0 : e.isReady) && r),
        c = s[0],
        l = s[1];
    i.useEffect(
        function () {
            var e = null == t ? void 0 : t.addReadyListener(u);
            return function () {
                null != e && (null == t || t.removeReadyListener(e));
            };
        },
        [t],
    ),
        i.useEffect(
            function () {
                var t = null == e ? void 0 : e.addReadyListener(l);
                return function () {
                    null != t && (null == e || e.removeReadyListener(t));
                };
            },
            [e],
        );
    var f = i.useCallback(
            function (n, i) {
                var r = void 0 === i ? {} : i,
                    o = r.sprite,
                    a = r.color,
                    u = null == t ? void 0 : t.getCreateData(),
                    s = null == t ? void 0 : t.getCanvas();
                if (null != s && null != u && 0 !== u.sprites.length)
                    return null == e ? void 0 : e.createConfetti(n, s, u, o, a);
            },
            [e, t],
        ),
        d = i.useCallback(
            function (e, t, n) {
                for (var i = [], r = 0; r < t; r++) {
                    var o = f(e, n);
                    o && i.push(o);
                }
                return i;
            },
            [f],
        ),
        p = i.useCallback(
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
        v = i.useCallback(
            function () {
                return null == e ? void 0 : e.clearConfetti();
            },
            [e],
        );
    return i.useMemo(
        function () {
            return {
                createConfetti: f,
                createMultipleConfetti: d,
                addConfetti: p,
                clearConfetti: v,
                deleteConfetti: h,
                isReady: null != t && null != e && c && a,
            };
        },
        [p, v, e, f, d, h, c, a, t],
    );
}
