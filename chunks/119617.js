n.d(t, {
    Ji: () => L,
    O_: () => D,
    qA: () => u,
    uR: () => P
});
var i = n(192379),
    r = n(772848);
function a(e, t) {
    var n = e.x,
        i = e.y;
    return n > t.x && n < t.x + t.width && i > t.y && i < t.y + t.height;
}
function s(e, t, n, i) {
    var r = t > 0 ? -1 : 1,
        a = Math.abs(t);
    return 0.5 * e * i * n * a * a * r;
}
var o = (function () {
        function e(e) {
            (this.id = e.id), (this.position = e.position), (this.velocity = e.velocity), (this.rotation = e.rotation), (this.dragCoefficient = e.dragCoefficient), (this.airResistanceArea = e.airResistanceArea), (this.size = e.size), (this.opacity = e.opacity), (this.spriteX = e.spriteX), (this.spriteY = e.spriteY), (this.spriteWidth = e.spriteWidth), (this.spriteHeight = e.spriteHeight), (this._lastUpdatedAt = Date.now());
        }
        return (
            (e.prototype.getNewForces = function (e, t) {
                var n = e.wind * t,
                    i = -e.gravity * t;
                return {
                    x: n + s(this.dragCoefficient.x, this.velocity.x, this.airResistanceArea.x, e.density),
                    y: i + s(this.dragCoefficient.y, this.velocity.y, this.airResistanceArea.y, e.density)
                };
            }),
            (e.prototype.update = function (e) {
                var t = Date.now(),
                    n = (t - this._lastUpdatedAt) / 100;
                this.rotation.update(n), this.dragCoefficient.update(n);
                var i = this.getNewForces(e, n),
                    r = i.x,
                    a = i.y;
                this.velocity.update(n), (this.velocity.x += r), (this.velocity.y += a), this.position.update(n), (this.position.x += this.velocity.x * n), (this.position.y += this.velocity.y * n), this.size.update(n), this.opacity.update(n), (this.opacity.value = Math.max(this.opacity.value, 0)), (this._lastUpdatedAt = t);
            }),
            (e.prototype.previewPositionUpdate = function (e, t) {
                var n = t / 100,
                    i = this.velocity.previewUpdate(n),
                    r = this.getNewForces(e, n),
                    a = r.x,
                    s = r.y;
                (i.x += a), (i.y += s);
                var o = this.position.previewUpdate(n);
                return (o.x += i.x * n), (o.y += i.y * n), o;
            }),
            (e.prototype.draw = function (e, t) {
                t.save(), (t.globalAlpha = this.opacity.value), t.setTransform(new DOMMatrix().translateSelf(this.position.x * n.g.devicePixelRatio, this.position.y * n.g.devicePixelRatio).rotateSelf(this.rotation.x, this.rotation.y, this.rotation.z)), t.drawImage(e, this.spriteX, this.spriteY, this.spriteWidth, this.spriteHeight, (-this.width / 2) * n.g.devicePixelRatio, (-this.height / 2) * n.g.devicePixelRatio, this.width * n.g.devicePixelRatio, this.height * n.g.devicePixelRatio), t.restore();
            }),
            (e.prototype.shouldDestroy = function (e, t) {
                return this.opacity.value < 0 || (t.gravity >= 0 && this.velocity.y < 0 && this.position.y + this.height < 0) || (t.gravity <= 0 && this.velocity.y > 0 && this.position.y - this.height > e.height) || (t.wind >= 0 && this.velocity.x > 0 && this.position.x - this.width > e.width) || (t.wind <= 0 && this.velocity.x < 0 && this.position.x + this.width < 0);
            }),
            Object.defineProperty(e.prototype, 'width', {
                get: function () {
                    return this.size.x;
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, 'height', {
                get: function () {
                    return this.size.y;
                },
                enumerable: !1,
                configurable: !0
            }),
            (e.prototype.addForce = function (e) {
                (this.velocity.x += e.x), (this.velocity.y += e.y);
            }),
            e
        );
    })(),
    l = {
        velocity: {
            type: 'static',
            value: 0
        },
        rotation: {
            type: 'static',
            value: 0
        },
        dragCoefficient: {
            type: 'static',
            value: 1.66
        },
        airResistanceArea: {
            type: 'static',
            value: 0.001
        },
        opacity: {
            type: 'static',
            value: 1
        }
    },
    u = function (e) {
        var t = void 0 === e ? {} : e,
            n = t.gravity,
            i = t.wind,
            r = t.density;
        (this.gravity = -9.8), (this.wind = 0), (this.density = 1.2041), (this.gravity = null != n ? n : this.gravity), (this.wind = null != i ? i : this.wind), (this.density = null != r ? r : this.density);
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
    if ('function' != typeof t && null !== t) throw TypeError('Class extends value ' + String(t) + ' is not a constructor or null');
    function n() {
        this.constructor = e;
    }
    c(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
}
var f = function () {
    return (f =
        Object.assign ||
        function (e) {
            for (var t, n = 1, i = arguments.length; n < i; n++) for (var r in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e;
        }).apply(this, arguments);
};
function _(e, t, n, i) {
    return new (n || (n = Promise))(function (r, a) {
        function s(e) {
            try {
                l(i.next(e));
            } catch (e) {
                a(e);
            }
        }
        function o(e) {
            try {
                l(i.throw(e));
            } catch (e) {
                a(e);
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
                  ).then(s, o);
        }
        l((i = i.apply(e, t || [])).next());
    });
}
function p(e, t) {
    var n,
        i,
        r,
        a,
        s = {
            label: 0,
            sent: function () {
                if (1 & r[0]) throw r[1];
                return r[1];
            },
            trys: [],
            ops: []
        };
    return (
        (a = {
            next: o(0),
            throw: o(1),
            return: o(2)
        }),
        'function' == typeof Symbol &&
            (a[Symbol.iterator] = function () {
                return this;
            }),
        a
    );
    function o(o) {
        return function (l) {
            return (function (o) {
                if (n) throw TypeError('Generator is already executing.');
                for (; a && ((a = 0), o[0] && (s = 0)), s; )
                    try {
                        if (((n = 1), i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, o[1])).done)) return r;
                        switch (((i = 0), r && (o = [2 & o[0], r.value]), o[0])) {
                            case 0:
                            case 1:
                                r = o;
                                break;
                            case 4:
                                return (
                                    s.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    }
                                );
                            case 5:
                                s.label++, (i = o[1]), (o = [0]);
                                continue;
                            case 7:
                                (o = s.ops.pop()), s.trys.pop();
                                continue;
                            default:
                                if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    s = 0;
                                    continue;
                                }
                                if (3 === o[0] && (!r || (o[1] > r[0] && o[1] < r[3]))) {
                                    s.label = o[1];
                                    break;
                                }
                                if (6 === o[0] && s.label < r[1]) {
                                    (s.label = r[1]), (r = o);
                                    break;
                                }
                                if (r && s.label < r[2]) {
                                    (s.label = r[2]), s.ops.push(o);
                                    break;
                                }
                                r[2] && s.ops.pop(), s.trys.pop();
                                continue;
                        }
                        o = t.call(e, s);
                    } catch (e) {
                        (o = [6, e]), (i = 0);
                    } finally {
                        n = r = 0;
                    }
                if (5 & o[0]) throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: !0
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
                    y: this._y.previewUpdate(e)
                };
            }),
            Object.defineProperty(e.prototype, 'x', {
                get: function () {
                    return this._x.value;
                },
                set: function (e) {
                    this._x.value = e;
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, 'y', {
                get: function () {
                    return this._y.value;
                },
                set: function (e) {
                    this._y.value = e;
                },
                enumerable: !1,
                configurable: !0
            }),
            e
        );
    })(),
    g = (function (e) {
        function t(t, n, i, r) {
            var a = e.call(this, t, n, r) || this;
            return (a._z = r ? t : i), a;
        }
        return (
            d(t, e),
            (t.prototype.update = function (t) {
                e.prototype.update.call(this, t), this._z.update(t);
            }),
            (t.prototype.previewUpdate = function (t) {
                var n = e.prototype.previewUpdate.call(this, t);
                return f(f({}, n), { z: this._z.previewUpdate(t) });
            }),
            Object.defineProperty(t.prototype, 'z', {
                get: function () {
                    return this._z.value;
                },
                set: function (e) {
                    this._z.value = e;
                },
                enumerable: !1,
                configurable: !0
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
    v = (function (e) {
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
    })(h),
    y = (function (e) {
        function t(t, n, i, r, a, s) {
            var o = e.call(this, t) || this;
            (o.min = n), (o.max = i), (o.duration = r);
            var l = (o.value / (o.max - o.min)) * o.duration,
                u = isNaN(l) ? 0 : l;
            return (o.timePassed = u < 0 ? o.duration - u : u), (o.directionMultiplier = a), (o.easingFunction = s), o;
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
                    a = this.easingFunction(i, this.min, t, this.duration);
                return [isNaN(a) ? 0 : a, i, r];
            }),
            t
        );
    })(h);
function I(e, t) {
    return e === t ? e : Math.random() * (t - e + 1) + e;
}
function b(e) {
    var t = Math.floor(I(0, e.length - 1));
    return [e[t], t];
}
function T(e, t) {
    return b([e, t])[0];
}
function S(e) {
    return 'number' == typeof e
        ? {
              x: e,
              y: e
          }
        : e;
}
function A(e) {
    return 'number' == typeof e
        ? {
              x: e,
              y: e,
              z: e
          }
        : e;
}
function N(e) {
    return (function (e) {
        switch (e.type) {
            case 'static':
                return new E(e.value);
            case 'static-random':
                return new E(I(e.minValue, e.maxValue));
            case 'linear':
                return new v(e.value, e.addValue);
            case 'linear-random':
                return new v(I(e.minValue, e.maxValue), I(e.minAddValue, e.maxAddValue));
            case 'oscillating':
                return new y(e.value, e.start, e.final, e.duration, e.direction, e.easingFunction);
            case 'oscillating-random':
                return new y(I(e.minValue, e.maxValue), I(e.minStart, e.maxStart), I(e.minFinal, e.maxFinal), I(e.minDuration, e.maxDuration), T(e.minDirection, e.maxDirection), b(e.easingFunctions)[0]);
        }
    })(f(f({}, e), { valueType: 'number' }));
}
function C(e) {
    return (function (e) {
        switch (e.type) {
            case 'static':
                var t = S(e.value);
                return new m(new E(t.x), new E(t.y), e.uniformVectorValues);
            case 'static-random':
                var n = S(e.minValue),
                    i = S(e.maxValue);
                return new m(new E(I(n.x, i.x)), new E(I(n.y, i.y)), e.uniformVectorValues);
            case 'linear':
                t = S(e.value);
                var r = S(e.addValue);
                return new m(new v(t.x, r.x), new v(t.y, r.y), e.uniformVectorValues);
            case 'linear-random':
                (n = S(e.minValue)), (i = S(e.maxValue));
                var a = S(e.minAddValue),
                    s = S(e.maxAddValue);
                return new m(new v(I(n.x, i.x), I(a.x, s.x)), new v(I(n.y, i.y), I(a.x, s.x)), e.uniformVectorValues);
            case 'oscillating':
                t = S(e.value);
                var o = S(e.start),
                    l = S(e.final),
                    u = S(e.duration),
                    c = S(e.direction);
                return new m(new y(t.x, o.x, l.x, u.x, c.x, e.easingFunction), new y(t.y, o.y, l.y, u.x, c.y, e.easingFunction), e.uniformVectorValues);
            case 'oscillating-random':
                (n = S(e.minValue)), (i = S(e.maxValue));
                var d = S(e.minStart),
                    f = S(e.maxStart),
                    _ = S(e.minFinal),
                    p = S(e.maxFinal),
                    h = S(e.minDuration),
                    g = S(e.maxDuration),
                    A = S(e.minDirection),
                    N = S(e.maxDirection);
                return new m(new y(I(n.x, i.x), I(d.x, f.x), I(_.x, p.x), I(h.x, g.x), T(A.x, N.x), b(e.easingFunctions)[0]), new y(I(n.y, i.y), I(d.y, f.y), I(_.y, p.y), I(h.y, g.y), T(A.y, N.y), b(e.easingFunctions)[0]), e.uniformVectorValues);
        }
    })(f(f({}, e), { valueType: 'Vector2' }));
}
function R(e) {
    return (function (e) {
        switch (e.type) {
            case 'static':
                var t = A(e.value);
                return new g(new E(t.x), new E(t.y), new E(t.z), e.uniformVectorValues);
            case 'static-random':
                var n = A(e.minValue),
                    i = A(e.maxValue);
                return new g(new E(I(n.x, i.x)), new E(I(n.y, i.y)), new E(I(n.z, i.z)), e.uniformVectorValues);
            case 'linear':
                t = A(e.value);
                var r = A(e.addValue);
                return new g(new v(t.x, r.x), new v(t.y, r.y), new v(t.z, r.z), e.uniformVectorValues);
            case 'linear-random':
                (n = A(e.minValue)), (i = A(e.maxValue));
                var a = A(e.minAddValue),
                    s = A(e.maxAddValue);
                return new g(new v(I(n.x, i.x), I(a.x, s.x)), new v(I(n.y, i.y), I(a.y, s.y)), new v(I(n.z, i.z), I(a.z, s.z)), e.uniformVectorValues);
            case 'oscillating':
                t = A(e.value);
                var o = A(e.start),
                    l = A(e.final),
                    u = A(e.duration),
                    c = A(e.direction);
                return new g(new y(t.x, o.x, l.x, u.x, c.x, e.easingFunction), new y(t.y, o.y, l.y, u.z, c.y, e.easingFunction), new y(t.z, o.z, l.z, u.z, c.z, e.easingFunction), e.uniformVectorValues);
            case 'oscillating-random':
                (n = A(e.minValue)), (i = A(e.maxValue));
                var d = A(e.minStart),
                    f = A(e.maxStart),
                    _ = A(e.minFinal),
                    p = A(e.maxFinal),
                    h = A(e.minDuration),
                    m = A(e.maxDuration),
                    S = A(e.minDirection),
                    N = A(e.maxDirection);
                return new g(new y(I(n.x, i.x), I(d.x, f.x), I(_.x, p.x), I(h.x, m.x), T(S.x, N.x), b(e.easingFunctions)[0]), new y(I(n.y, i.y), I(d.y, f.y), I(_.y, p.y), I(h.y, m.y), T(S.y, N.y), b(e.easingFunctions)[0]), new y(I(n.z, i.z), I(d.z, f.z), I(_.z, p.z), I(h.z, m.z), T(S.z, N.z), b(e.easingFunctions)[0]), e.uniformVectorValues);
        }
    })(f(f({}, e), { valueType: 'Vector3' }));
}
function O(e, t, n, i, r) {
    var a = (function (e, t) {
            return f(f({ id: t }, l), e);
        })(t, e),
        s = (function (e, t) {
            if (null != e) {
                var n = t.sprites.findIndex(function (t) {
                    var n, i;
                    return (n = t), 'string' == typeof (i = e) ? n.src === i && n.colorize : n.src === i.src && n.colorize === i.colorize;
                });
                if (-1 !== n) return [e, n];
            }
            return b(t.sprites);
        })(i, n),
        u = s[0],
        c = s[1],
        d = (function (e, t, n) {
            if (
                !(function (e) {
                    return 'string' == typeof e || e.colorize;
                })(e)
            )
                return 0;
            var i =
                null != t
                    ? n.colors.findIndex(function (e) {
                          return e === t;
                      })
                    : -1;
            return -1 !== i ? i : Math.floor(I(0, n.colors.length - 1));
        })(null != i ? i : u, r, n);
    return new o({
        id: e,
        position: C(a.position),
        velocity: C(a.velocity),
        rotation: R(a.rotation),
        dragCoefficient: C(a.dragCoefficient),
        size: C(a.size),
        opacity: N(a.opacity),
        airResistanceArea: C(a.airResistanceArea),
        spriteX: d * n.spriteWidth + 2 * d,
        spriteY: c * n.spriteHeight + 2 * c,
        spriteWidth: n.spriteWidth,
        spriteHeight: n.spriteHeight
    });
}
var D = i.forwardRef(function (e, t) {
        var s = e.className,
            o = e.environment,
            l = e.onClick,
            u = e.onMouseDown,
            c = e.onMouseMove,
            d = e.onMouseUp,
            _ = e.onBeforeRender,
            p = e.onAfterRender,
            h = (function (e, t) {
                var n = {};
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (n[i] = e[i]);
                if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
                    var r = 0;
                    for (i = Object.getOwnPropertySymbols(e); r < i.length; r++) 0 > t.indexOf(i[r]) && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (n[i[r]] = e[i[r]]);
                }
                return n;
            })(e, ['className', 'environment', 'onClick', 'onMouseDown', 'onMouseMove', 'onMouseUp', 'onBeforeRender', 'onAfterRender']),
            m = i.useRef(null),
            g = i.useRef(new Map()),
            E = i.useRef(null),
            v = i.useRef(0),
            y = i.useRef(0),
            I = i.useCallback(
                function () {
                    var e = m.current;
                    if (null != e) {
                        var t = e.getContext('2d');
                        if (null != t) {
                            t.clearRect(0, 0, e.width, e.height),
                                null == _ || _(t),
                                g.current.forEach(function (n, i) {
                                    var r = n.confetti,
                                        a = n.spriteCanvas;
                                    r.update(o), r.draw(a, t), r.shouldDestroy(e, o) && g.current.delete(i);
                                }),
                                null == p || p(t),
                                g.current.size > 0 ? (E.current = window.requestAnimationFrame(I)) : (t.clearRect(0, 0, e.width, e.height), (E.current = null));
                            var n = Date.now();
                            0 !== v.current && (y.current = 1000 / (n - v.current)), (v.current = n);
                        }
                    }
                },
                [o, p, _]
            );
        i.useEffect(
            function () {
                null != E.current && (window.cancelAnimationFrame(E.current), (E.current = window.requestAnimationFrame(I)));
            },
            [I]
        );
        var b = i.useCallback(
                function (e, t) {
                    g.current.set(e.id, {
                        confetti: e,
                        spriteCanvas: t
                    }),
                        null == E.current && I();
                },
                [I]
            ),
            T = i.useCallback(
                function (e, t, n, i, a) {
                    var s,
                        o = O(null !== (s = e.id) && void 0 !== s ? s : (0, r.Z)(), e, n, i, a);
                    return b(o, t), o;
                },
                [b]
            ),
            S = i.useCallback(function (e) {
                g.current.delete(e);
            }, []),
            A = i.useCallback(function () {
                return g.current.clear();
            }, []),
            N = i.useCallback(function () {
                return m.current;
            }, []);
        i.useImperativeHandle(
            t,
            function () {
                return {
                    createConfetti: T,
                    addConfetti: b,
                    deleteConfetti: S,
                    clearConfetti: A,
                    getCanvas: N
                };
            },
            [T, b, S, A, N]
        );
        var C = i.useCallback(
                function (e, t) {
                    var n,
                        i,
                        r = t.clickHandler,
                        s = t.mouseHandler;
                    if (null != r || null != s) {
                        var l = null === (n = m.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                        if (null != l) {
                            var u = (function (e, t) {
                                if (null == t) throw Error('element should not be null');
                                var n = t.getBoundingClientRect();
                                return {
                                    x: e.clientX - n.left,
                                    y: e.clientY - n.top
                                };
                            })(e, m.current);
                            if (
                                a(u, {
                                    x: l.left,
                                    y: l.top,
                                    width: l.width,
                                    height: l.height
                                })
                            ) {
                                if (null != s) return s(e);
                                if (null != r) {
                                    var c = (-1000 / y.current) * 2,
                                        d = (function (e, t) {
                                            for (var n = 0, i = Array.from(e.values()); n < i.length; n++) {
                                                var r = i[n];
                                                if (null != r && t(r)) return r;
                                            }
                                            return null;
                                        })(g.current, function (e) {
                                            var t = e.confetti,
                                                n = t.previewPositionUpdate(o, c);
                                            return a(u, {
                                                x: n.x - t.width / 2,
                                                y: n.y - t.height / 2,
                                                width: t.width,
                                                height: t.height
                                            });
                                        });
                                    r(e, null !== (i = null == d ? void 0 : d.confetti) && void 0 !== i ? i : null);
                                }
                            }
                        }
                    }
                },
                [o]
            ),
            R = i.useCallback(
                function (e) {
                    return C(e, { clickHandler: l });
                },
                [C, l]
            ),
            D = i.useCallback(
                function (e) {
                    return C(e, { clickHandler: u });
                },
                [C, u]
            ),
            x = i.useCallback(
                function (e) {
                    return C(e, { mouseHandler: c });
                },
                [C, c]
            ),
            L = i.useCallback(
                function (e) {
                    return C(e, { mouseHandler: d });
                },
                [C, d]
            );
        return (
            i.useEffect(
                function () {
                    var e = function (e, t, n) {
                        null != n && window.addEventListener(e, t);
                    };
                    return (
                        e('click', R, l),
                        e('mousedown', D, u),
                        e('mousemove', x, c),
                        e('mouseup', L, d),
                        function () {
                            window.removeEventListener('click', R), window.removeEventListener('mousedown', D), window.removeEventListener('mousemove', x), window.removeEventListener('mouseup', x);
                        }
                    );
                },
                [R, D, x, L, l, u, c, d]
            ),
            i.useEffect(function () {
                var e = m.current,
                    t = new ResizeObserver(function () {
                        !(function (e) {
                            if (null != e) {
                                var t = e.getBoundingClientRect(),
                                    i = t.width,
                                    r = t.height;
                                (e.width = i * n.g.devicePixelRatio), (e.height = r * n.g.devicePixelRatio);
                            }
                        })(m.current);
                    });
                return (
                    null != e && t.observe(e),
                    function () {
                        null != e && t.unobserve(e);
                    }
                );
            }, []),
            i.createElement(
                'canvas',
                f({}, h, {
                    className: s,
                    ref: m
                })
            )
        );
    }),
    x = {
        display: 'none',
        position: 'absolute',
        width: 0,
        height: 0,
        left: '-100%'
    },
    L = i.forwardRef(function (e, t) {
        var n = e.className,
            a = e.visible,
            s = void 0 !== a && a,
            o = e.sprites,
            l = e.colors,
            u = e.spriteWidth,
            c = e.spriteHeight,
            d = i.useRef(null),
            f = i.useRef([]),
            h = i.useRef(!1),
            m = i.useRef({});
        i.useImperativeHandle(
            t,
            function () {
                return {
                    getCanvas: function () {
                        return d.current;
                    },
                    getCreateData: function () {
                        return {
                            sprites: f.current,
                            colors: l,
                            spriteWidth: u,
                            spriteHeight: c
                        };
                    },
                    addReadyListener: function (e) {
                        var t = (0, r.Z)();
                        return (m.current[t] = e), t;
                    },
                    removeReadyListener: function (e) {
                        delete m.current[e];
                    },
                    isReady: h.current
                };
            },
            [l, c, u]
        );
        var g = i.useCallback(
                function () {
                    var e = d.current,
                        t = null == e ? void 0 : e.getContext('2d', { willReadFrequently: !0 });
                    null != t &&
                        null != e &&
                        (t.clearRect(0, 0, e.width, e.height),
                        f.current.forEach(function (e, n) {
                            var i = function (i, r) {
                                var a = u * r + 2 * r,
                                    s = c * n + 2 * n;
                                if ((t.drawImage(e.image, a, s, u, c), null != i)) {
                                    for (
                                        var o = t.getImageData(a, s, u, c),
                                            l = (function (e) {
                                                '#' === e[0] && (e = e.slice(1));
                                                var t = parseInt(e, 16);
                                                return {
                                                    r: (t >> 16) & 255,
                                                    g: (t >> 8) & 255,
                                                    b: 255 & t
                                                };
                                            })(i),
                                            d = 0;
                                        d < o.data.length;
                                        d += 4
                                    )
                                        (o.data[d] = l.r), (o.data[d + 1] = l.g), (o.data[d + 2] = l.b);
                                    t.putImageData(o, a, s);
                                }
                            };
                            e.colorize
                                ? l.forEach(function (e, t) {
                                      return i(e, t);
                                  })
                                : i(null, 0);
                        }));
                },
                [l, c, u]
            ),
            E = i.useCallback(
                function () {
                    var e = o.map(function (e) {
                        var t = new Image(),
                            n = 'string' == typeof e ? e : e.src,
                            i = 'string' == typeof e || e.colorize;
                        t.src = n;
                        var r = new Promise(function (e) {
                            t.onload = e;
                        });
                        return {
                            colorize: i,
                            image: t,
                            src: n,
                            loadPromise: r
                        };
                    });
                    return Promise.all(
                        e.map(function (e) {
                            return e.loadPromise;
                        })
                    ).then(function () {
                        f.current = e.map(function (e) {
                            return {
                                colorize: e.colorize,
                                image: e.image,
                                src: e.src
                            };
                        });
                    });
                },
                [o]
            ),
            v = i.useCallback(function (e) {
                for (var t in m.current) m.current[t](e);
            }, []),
            y = i.useCallback(
                function () {
                    return _(void 0, void 0, void 0, function () {
                        return p(this, function (e) {
                            switch (e.label) {
                                case 0:
                                    return [4, E()];
                                case 1:
                                    return e.sent(), g(), (h.current = !0), v(!0), [2];
                            }
                        });
                    });
                },
                [v, E, g]
            );
        return (
            i.useEffect(
                function () {
                    y();
                },
                [y]
            ),
            i.useEffect(
                function () {
                    return function () {
                        return v(!1);
                    };
                },
                [v]
            ),
            i.useEffect(
                function () {
                    null != d.current && ((d.current.width = (u + 2) * Math.max(l.length, 1)), (d.current.height = (c + 2) * o.length));
                },
                [l.length, c, u, o.length]
            ),
            i.createElement('canvas', {
                ref: d,
                className: n,
                style: s ? void 0 : x
            })
        );
    });
function P(e, t) {
    var n,
        r = i.useState(null !== (n = null == t ? void 0 : t.isReady) && void 0 !== n && n),
        a = r[0],
        s = r[1];
    i.useEffect(
        function () {
            var e = null == t ? void 0 : t.addReadyListener(s);
            return function () {
                null != e && (null == t || t.removeReadyListener(e));
            };
        },
        [t]
    );
    var o = i.useCallback(
            function (n, i) {
                var r = void 0 === i ? {} : i,
                    a = r.sprite,
                    s = r.color,
                    o = null == t ? void 0 : t.getCreateData(),
                    l = null == t ? void 0 : t.getCanvas();
                if (null != l && null != o && 0 !== o.sprites.length) return null == e ? void 0 : e.createConfetti(n, l, o, a, s);
            },
            [e, t]
        ),
        l = i.useCallback(
            function (e, t, n) {
                for (var i = [], r = 0; r < t; r++) {
                    var a = o(e, n);
                    a && i.push(a);
                }
                return i;
            },
            [o]
        ),
        u = i.useCallback(
            function (n) {
                var i = null == t ? void 0 : t.getCanvas();
                null != i && (null == e || e.addConfetti(n, i));
            },
            [e, t]
        ),
        c = i.useCallback(
            function (t) {
                null == e || e.deleteConfetti(t);
            },
            [e]
        ),
        d = i.useCallback(
            function () {
                return null == e ? void 0 : e.clearConfetti();
            },
            [e]
        );
    return i.useMemo(
        function () {
            return {
                createConfetti: o,
                createMultipleConfetti: l,
                addConfetti: u,
                clearConfetti: d,
                deleteConfetti: c,
                isReady: a && null != t && null != e
            };
        },
        [u, d, e, o, l, c, a, t]
    );
}
