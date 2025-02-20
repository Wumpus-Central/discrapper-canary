n.d(t, {
    Ji: () => D,
    O_: () => P,
    qA: () => c,
    uR: () => x
});
var r = n(192379),
    i = n(772848);
function o(e, t) {
    var n = e.x,
        r = e.y;
    return n > t.x && n < t.x + t.width && r > t.y && r < t.y + t.height;
}
function a(e, t, n, r) {
    var i = t > 0 ? -1 : 1,
        o = Math.abs(t);
    return 0.5 * e * r * n * o * o * i;
}
var s = (function () {
        function e(e) {
            (this.id = e.id), (this.position = e.position), (this.velocity = e.velocity), (this.rotation = e.rotation), (this.dragCoefficient = e.dragCoefficient), (this.airResistanceArea = e.airResistanceArea), (this.size = e.size), (this.opacity = e.opacity), (this.spriteX = e.spriteX), (this.spriteY = e.spriteY), (this.spriteWidth = e.spriteWidth), (this.spriteHeight = e.spriteHeight), (this._lastUpdatedAt = Date.now());
        }
        return (
            (e.prototype.getNewForces = function (e, t) {
                var n = e.wind * t,
                    r = -e.gravity * t;
                return {
                    x: n + a(this.dragCoefficient.x, this.velocity.x, this.airResistanceArea.x, e.density),
                    y: r + a(this.dragCoefficient.y, this.velocity.y, this.airResistanceArea.y, e.density)
                };
            }),
            (e.prototype.update = function (e) {
                var t = Date.now(),
                    n = (t - this._lastUpdatedAt) / 100;
                this.rotation.update(n), this.dragCoefficient.update(n);
                var r = this.getNewForces(e, n),
                    i = r.x,
                    o = r.y;
                this.velocity.update(n), (this.velocity.x += i), (this.velocity.y += o), this.position.update(n), (this.position.x += this.velocity.x * n), (this.position.y += this.velocity.y * n), this.size.update(n), this.opacity.update(n), (this.opacity.value = Math.max(this.opacity.value, 0)), (this._lastUpdatedAt = t);
            }),
            (e.prototype.previewPositionUpdate = function (e, t) {
                var n = t / 100,
                    r = this.velocity.previewUpdate(n),
                    i = this.getNewForces(e, n),
                    o = i.x,
                    a = i.y;
                (r.x += o), (r.y += a);
                var s = this.position.previewUpdate(n);
                return (s.x += r.x * n), (s.y += r.y * n), s;
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
    c = function (e) {
        var t = void 0 === e ? {} : e,
            n = t.gravity,
            r = t.wind,
            i = t.density;
        (this.gravity = -9.8), (this.wind = 0), (this.density = 1.2041), (this.gravity = null != n ? n : this.gravity), (this.wind = null != r ? r : this.wind), (this.density = null != i ? i : this.density);
    },
    u = function (e, t) {
        return (u =
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
    u(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
}
var f = function () {
    return (f =
        Object.assign ||
        function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
        }).apply(this, arguments);
};
function p(e, t, n, r) {
    return new (n || (n = Promise))(function (i, o) {
        function a(e) {
            try {
                l(r.next(e));
            } catch (e) {
                o(e);
            }
        }
        function s(e) {
            try {
                l(r.throw(e));
            } catch (e) {
                o(e);
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
                  ).then(a, s);
        }
        l((r = r.apply(e, t || [])).next());
    });
}
function _(e, t) {
    var n,
        r,
        i,
        o,
        a = {
            label: 0,
            sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
            },
            trys: [],
            ops: []
        };
    return (
        (o = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }),
        'function' == typeof Symbol &&
            (o[Symbol.iterator] = function () {
                return this;
            }),
        o
    );
    function s(s) {
        return function (l) {
            return (function (s) {
                if (n) throw TypeError('Generator is already executing.');
                for (; o && ((o = 0), s[0] && (a = 0)), a; )
                    try {
                        if (((n = 1), r && (i = 2 & s[0] ? r.return : s[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, s[1])).done)) return i;
                        switch (((r = 0), i && (s = [2 & s[0], i.value]), s[0])) {
                            case 0:
                            case 1:
                                i = s;
                                break;
                            case 4:
                                return (
                                    a.label++,
                                    {
                                        value: s[1],
                                        done: !1
                                    }
                                );
                            case 5:
                                a.label++, (r = s[1]), (s = [0]);
                                continue;
                            case 7:
                                (s = a.ops.pop()), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                    a = 0;
                                    continue;
                                }
                                if (3 === s[0] && (!i || (s[1] > i[0] && s[1] < i[3]))) {
                                    a.label = s[1];
                                    break;
                                }
                                if (6 === s[0] && a.label < i[1]) {
                                    (a.label = i[1]), (i = s);
                                    break;
                                }
                                if (i && a.label < i[2]) {
                                    (a.label = i[2]), a.ops.push(s);
                                    break;
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue;
                        }
                        s = t.call(e, a);
                    } catch (e) {
                        (s = [6, e]), (r = 0);
                    } finally {
                        n = i = 0;
                    }
                if (5 & s[0]) throw s[1];
                return {
                    value: s[0] ? s[1] : void 0,
                    done: !0
                };
            })([s, l]);
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
        function t(t, n, r, i) {
            var o = e.call(this, t, n, i) || this;
            return (o._z = i ? t : r), o;
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
    b = (function (e) {
        function t(t, n, r, i, o, a) {
            var s = e.call(this, t) || this;
            (s.min = n), (s.max = r), (s.duration = i);
            var l = (s.value / (s.max - s.min)) * s.duration,
                c = isNaN(l) ? 0 : l;
            return (s.timePassed = c < 0 ? s.duration - c : c), (s.directionMultiplier = o), (s.easingFunction = a), s;
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
                    o = this.easingFunction(r, this.min, t, this.duration);
                return [isNaN(o) ? 0 : o, r, i];
            }),
            t
        );
    })(h);
function y(e, t) {
    return e === t ? e : Math.random() * (t - e + 1) + e;
}
function O(e) {
    var t = Math.floor(y(0, e.length - 1));
    return [e[t], t];
}
function S(e, t) {
    return O([e, t])[0];
}
function I(e) {
    return 'number' == typeof e
        ? {
              x: e,
              y: e
          }
        : e;
}
function T(e) {
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
                return new E(y(e.minValue, e.maxValue));
            case 'linear':
                return new v(e.value, e.addValue);
            case 'linear-random':
                return new v(y(e.minValue, e.maxValue), y(e.minAddValue, e.maxAddValue));
            case 'oscillating':
                return new b(e.value, e.start, e.final, e.duration, e.direction, e.easingFunction);
            case 'oscillating-random':
                return new b(y(e.minValue, e.maxValue), y(e.minStart, e.maxStart), y(e.minFinal, e.maxFinal), y(e.minDuration, e.maxDuration), S(e.minDirection, e.maxDirection), O(e.easingFunctions)[0]);
        }
    })(f(f({}, e), { valueType: 'number' }));
}
function A(e) {
    return (function (e) {
        switch (e.type) {
            case 'static':
                var t = I(e.value);
                return new m(new E(t.x), new E(t.y), e.uniformVectorValues);
            case 'static-random':
                var n = I(e.minValue),
                    r = I(e.maxValue);
                return new m(new E(y(n.x, r.x)), new E(y(n.y, r.y)), e.uniformVectorValues);
            case 'linear':
                t = I(e.value);
                var i = I(e.addValue);
                return new m(new v(t.x, i.x), new v(t.y, i.y), e.uniformVectorValues);
            case 'linear-random':
                (n = I(e.minValue)), (r = I(e.maxValue));
                var o = I(e.minAddValue),
                    a = I(e.maxAddValue);
                return new m(new v(y(n.x, r.x), y(o.x, a.x)), new v(y(n.y, r.y), y(o.x, a.x)), e.uniformVectorValues);
            case 'oscillating':
                t = I(e.value);
                var s = I(e.start),
                    l = I(e.final),
                    c = I(e.duration),
                    u = I(e.direction);
                return new m(new b(t.x, s.x, l.x, c.x, u.x, e.easingFunction), new b(t.y, s.y, l.y, c.x, u.y, e.easingFunction), e.uniformVectorValues);
            case 'oscillating-random':
                (n = I(e.minValue)), (r = I(e.maxValue));
                var d = I(e.minStart),
                    f = I(e.maxStart),
                    p = I(e.minFinal),
                    _ = I(e.maxFinal),
                    h = I(e.minDuration),
                    g = I(e.maxDuration),
                    T = I(e.minDirection),
                    N = I(e.maxDirection);
                return new m(new b(y(n.x, r.x), y(d.x, f.x), y(p.x, _.x), y(h.x, g.x), S(T.x, N.x), O(e.easingFunctions)[0]), new b(y(n.y, r.y), y(d.y, f.y), y(p.y, _.y), y(h.y, g.y), S(T.y, N.y), O(e.easingFunctions)[0]), e.uniformVectorValues);
        }
    })(f(f({}, e), { valueType: 'Vector2' }));
}
function C(e) {
    return (function (e) {
        switch (e.type) {
            case 'static':
                var t = T(e.value);
                return new g(new E(t.x), new E(t.y), new E(t.z), e.uniformVectorValues);
            case 'static-random':
                var n = T(e.minValue),
                    r = T(e.maxValue);
                return new g(new E(y(n.x, r.x)), new E(y(n.y, r.y)), new E(y(n.z, r.z)), e.uniformVectorValues);
            case 'linear':
                t = T(e.value);
                var i = T(e.addValue);
                return new g(new v(t.x, i.x), new v(t.y, i.y), new v(t.z, i.z), e.uniformVectorValues);
            case 'linear-random':
                (n = T(e.minValue)), (r = T(e.maxValue));
                var o = T(e.minAddValue),
                    a = T(e.maxAddValue);
                return new g(new v(y(n.x, r.x), y(o.x, a.x)), new v(y(n.y, r.y), y(o.y, a.y)), new v(y(n.z, r.z), y(o.z, a.z)), e.uniformVectorValues);
            case 'oscillating':
                t = T(e.value);
                var s = T(e.start),
                    l = T(e.final),
                    c = T(e.duration),
                    u = T(e.direction);
                return new g(new b(t.x, s.x, l.x, c.x, u.x, e.easingFunction), new b(t.y, s.y, l.y, c.z, u.y, e.easingFunction), new b(t.z, s.z, l.z, c.z, u.z, e.easingFunction), e.uniformVectorValues);
            case 'oscillating-random':
                (n = T(e.minValue)), (r = T(e.maxValue));
                var d = T(e.minStart),
                    f = T(e.maxStart),
                    p = T(e.minFinal),
                    _ = T(e.maxFinal),
                    h = T(e.minDuration),
                    m = T(e.maxDuration),
                    I = T(e.minDirection),
                    N = T(e.maxDirection);
                return new g(new b(y(n.x, r.x), y(d.x, f.x), y(p.x, _.x), y(h.x, m.x), S(I.x, N.x), O(e.easingFunctions)[0]), new b(y(n.y, r.y), y(d.y, f.y), y(p.y, _.y), y(h.y, m.y), S(I.y, N.y), O(e.easingFunctions)[0]), new b(y(n.z, r.z), y(d.z, f.z), y(p.z, _.z), y(h.z, m.z), S(I.z, N.z), O(e.easingFunctions)[0]), e.uniformVectorValues);
        }
    })(f(f({}, e), { valueType: 'Vector3' }));
}
function R(e, t, n, r, i) {
    var o = (function (e, t) {
            return f(f({ id: t }, l), e);
        })(t, e),
        a = (function (e, t) {
            if (null != e) {
                var n = t.sprites.findIndex(function (t) {
                    var n, r;
                    return (n = t), 'string' == typeof (r = e) ? n.src === r && n.colorize : n.src === r.src && n.colorize === r.colorize;
                });
                if (-1 !== n) return [e, n];
            }
            return O(t.sprites);
        })(r, n),
        c = a[0],
        u = a[1],
        d = (function (e, t, n) {
            if (
                !(function (e) {
                    return 'string' == typeof e || e.colorize;
                })(e)
            )
                return 0;
            var r =
                null != t
                    ? n.colors.findIndex(function (e) {
                          return e === t;
                      })
                    : -1;
            return -1 !== r ? r : Math.floor(y(0, n.colors.length - 1));
        })(null != r ? r : c, i, n);
    return new s({
        id: e,
        position: A(o.position),
        velocity: A(o.velocity),
        rotation: C(o.rotation),
        dragCoefficient: A(o.dragCoefficient),
        size: A(o.size),
        opacity: N(o.opacity),
        airResistanceArea: A(o.airResistanceArea),
        spriteX: d * n.spriteWidth + 2 * d,
        spriteY: u * n.spriteHeight + 2 * u,
        spriteWidth: n.spriteWidth,
        spriteHeight: n.spriteHeight
    });
}
var P = r.forwardRef(function (e, t) {
        var a = e.className,
            s = e.environment,
            l = e.onClick,
            c = e.onMouseDown,
            u = e.onMouseMove,
            d = e.onMouseUp,
            p = e.onBeforeRender,
            _ = e.onAfterRender,
            h = (function (e, t) {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
                    var i = 0;
                    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) 0 > t.indexOf(r[i]) && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
                }
                return n;
            })(e, ['className', 'environment', 'onClick', 'onMouseDown', 'onMouseMove', 'onMouseUp', 'onBeforeRender', 'onAfterRender']),
            m = r.useRef(null),
            g = r.useRef(new Map()),
            E = r.useRef(null),
            v = r.useRef(0),
            b = r.useRef(0),
            y = r.useCallback(
                function () {
                    var e = m.current;
                    if (null != e) {
                        var t = e.getContext('2d');
                        if (null != t) {
                            t.clearRect(0, 0, e.width, e.height),
                                null == p || p(t),
                                g.current.forEach(function (n, r) {
                                    var i = n.confetti,
                                        o = n.spriteCanvas;
                                    i.update(s), i.draw(o, t), i.shouldDestroy(e, s) && g.current.delete(r);
                                }),
                                null == _ || _(t),
                                g.current.size > 0 ? (E.current = window.requestAnimationFrame(y)) : (t.clearRect(0, 0, e.width, e.height), (E.current = null));
                            var n = Date.now();
                            0 !== v.current && (b.current = 1000 / (n - v.current)), (v.current = n);
                        }
                    }
                },
                [s, _, p]
            );
        r.useEffect(
            function () {
                null != E.current && (window.cancelAnimationFrame(E.current), (E.current = window.requestAnimationFrame(y)));
            },
            [y]
        );
        var O = r.useCallback(
                function (e, t) {
                    g.current.set(e.id, {
                        confetti: e,
                        spriteCanvas: t
                    }),
                        null == E.current && y();
                },
                [y]
            ),
            S = r.useCallback(
                function (e, t, n, r, o) {
                    var a,
                        s = R(null !== (a = e.id) && void 0 !== a ? a : (0, i.Z)(), e, n, r, o);
                    return O(s, t), s;
                },
                [O]
            ),
            I = r.useCallback(function (e) {
                g.current.delete(e);
            }, []),
            T = r.useCallback(function () {
                return g.current.clear();
            }, []),
            N = r.useCallback(function () {
                return m.current;
            }, []);
        r.useImperativeHandle(
            t,
            function () {
                return {
                    createConfetti: S,
                    addConfetti: O,
                    deleteConfetti: I,
                    clearConfetti: T,
                    getCanvas: N
                };
            },
            [S, O, I, T, N]
        );
        var A = r.useCallback(
                function (e, t) {
                    var n,
                        r,
                        i = t.clickHandler,
                        a = t.mouseHandler;
                    if (null != i || null != a) {
                        var l = null === (n = m.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                        if (null != l) {
                            var c = (function (e, t) {
                                if (null == t) throw Error('element should not be null');
                                var n = t.getBoundingClientRect();
                                return {
                                    x: e.clientX - n.left,
                                    y: e.clientY - n.top
                                };
                            })(e, m.current);
                            if (
                                o(c, {
                                    x: l.left,
                                    y: l.top,
                                    width: l.width,
                                    height: l.height
                                })
                            ) {
                                if (null != a) return a(e);
                                if (null != i) {
                                    var u = (-1000 / b.current) * 2,
                                        d = (function (e, t) {
                                            for (var n = 0, r = Array.from(e.values()); n < r.length; n++) {
                                                var i = r[n];
                                                if (null != i && t(i)) return i;
                                            }
                                            return null;
                                        })(g.current, function (e) {
                                            var t = e.confetti,
                                                n = t.previewPositionUpdate(s, u);
                                            return o(c, {
                                                x: n.x - t.width / 2,
                                                y: n.y - t.height / 2,
                                                width: t.width,
                                                height: t.height
                                            });
                                        });
                                    i(e, null !== (r = null == d ? void 0 : d.confetti) && void 0 !== r ? r : null);
                                }
                            }
                        }
                    }
                },
                [s]
            ),
            C = r.useCallback(
                function (e) {
                    return A(e, { clickHandler: l });
                },
                [A, l]
            ),
            P = r.useCallback(
                function (e) {
                    return A(e, { clickHandler: c });
                },
                [A, c]
            ),
            w = r.useCallback(
                function (e) {
                    return A(e, { mouseHandler: u });
                },
                [A, u]
            ),
            D = r.useCallback(
                function (e) {
                    return A(e, { mouseHandler: d });
                },
                [A, d]
            );
        return (
            r.useEffect(
                function () {
                    var e = function (e, t, n) {
                        null != n && window.addEventListener(e, t);
                    };
                    return (
                        e('click', C, l),
                        e('mousedown', P, c),
                        e('mousemove', w, u),
                        e('mouseup', D, d),
                        function () {
                            window.removeEventListener('click', C), window.removeEventListener('mousedown', P), window.removeEventListener('mousemove', w), window.removeEventListener('mouseup', w);
                        }
                    );
                },
                [C, P, w, D, l, c, u, d]
            ),
            r.useEffect(function () {
                var e = m.current,
                    t = new ResizeObserver(function () {
                        !(function (e) {
                            if (null != e) {
                                var t = e.getBoundingClientRect(),
                                    r = t.width,
                                    i = t.height;
                                (e.width = r * n.g.devicePixelRatio), (e.height = i * n.g.devicePixelRatio);
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
            r.createElement(
                'canvas',
                f({}, h, {
                    className: a,
                    ref: m
                })
            )
        );
    }),
    w = {
        display: 'none',
        position: 'absolute',
        width: 0,
        height: 0,
        left: '-100%'
    },
    D = r.forwardRef(function (e, t) {
        var n = e.className,
            o = e.visible,
            a = void 0 !== o && o,
            s = e.sprites,
            l = e.colors,
            c = e.spriteWidth,
            u = e.spriteHeight,
            d = r.useRef(null),
            f = r.useRef([]),
            h = r.useRef(!1),
            m = r.useRef({});
        r.useImperativeHandle(
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
                            spriteWidth: c,
                            spriteHeight: u
                        };
                    },
                    addReadyListener: function (e) {
                        var t = (0, i.Z)();
                        return (m.current[t] = e), t;
                    },
                    removeReadyListener: function (e) {
                        delete m.current[e];
                    },
                    isReady: h.current
                };
            },
            [l, u, c]
        );
        var g = r.useCallback(
                function () {
                    var e = d.current,
                        t = null == e ? void 0 : e.getContext('2d', { willReadFrequently: !0 });
                    null != t &&
                        null != e &&
                        (t.clearRect(0, 0, e.width, e.height),
                        f.current.forEach(function (e, n) {
                            var r = function (r, i) {
                                var o = c * i + 2 * i,
                                    a = u * n + 2 * n;
                                if ((t.drawImage(e.image, o, a, c, u), null != r)) {
                                    for (
                                        var s = t.getImageData(o, a, c, u),
                                            l = (function (e) {
                                                '#' === e[0] && (e = e.slice(1));
                                                var t = parseInt(e, 16);
                                                return {
                                                    r: (t >> 16) & 255,
                                                    g: (t >> 8) & 255,
                                                    b: 255 & t
                                                };
                                            })(r),
                                            d = 0;
                                        d < s.data.length;
                                        d += 4
                                    )
                                        (s.data[d] = l.r), (s.data[d + 1] = l.g), (s.data[d + 2] = l.b);
                                    t.putImageData(s, o, a);
                                }
                            };
                            e.colorize
                                ? l.forEach(function (e, t) {
                                      return r(e, t);
                                  })
                                : r(null, 0);
                        }));
                },
                [l, u, c]
            ),
            E = r.useCallback(
                function () {
                    var e = s.map(function (e) {
                        var t = new Image(),
                            n = 'string' == typeof e ? e : e.src,
                            r = 'string' == typeof e || e.colorize;
                        t.src = n;
                        var i = new Promise(function (e) {
                            t.onload = e;
                        });
                        return {
                            colorize: r,
                            image: t,
                            src: n,
                            loadPromise: i
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
                [s]
            ),
            v = r.useCallback(function (e) {
                for (var t in m.current) m.current[t](e);
            }, []),
            b = r.useCallback(
                function () {
                    return p(void 0, void 0, void 0, function () {
                        return _(this, function (e) {
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
            r.useEffect(
                function () {
                    b();
                },
                [b]
            ),
            r.useEffect(
                function () {
                    return function () {
                        return v(!1);
                    };
                },
                [v]
            ),
            r.useEffect(
                function () {
                    null != d.current && ((d.current.width = (c + 2) * Math.max(l.length, 1)), (d.current.height = (u + 2) * s.length));
                },
                [l.length, u, c, s.length]
            ),
            r.createElement('canvas', {
                ref: d,
                className: n,
                style: a ? void 0 : w
            })
        );
    });
function x(e, t) {
    var n,
        i = r.useState(null !== (n = null == t ? void 0 : t.isReady) && void 0 !== n && n),
        o = i[0],
        a = i[1];
    r.useEffect(
        function () {
            var e = null == t ? void 0 : t.addReadyListener(a);
            return function () {
                null != e && (null == t || t.removeReadyListener(e));
            };
        },
        [t]
    );
    var s = r.useCallback(
            function (n, r) {
                var i = void 0 === r ? {} : r,
                    o = i.sprite,
                    a = i.color,
                    s = null == t ? void 0 : t.getCreateData(),
                    l = null == t ? void 0 : t.getCanvas();
                if (null != l && null != s && 0 !== s.sprites.length) return null == e ? void 0 : e.createConfetti(n, l, s, o, a);
            },
            [e, t]
        ),
        l = r.useCallback(
            function (e, t, n) {
                for (var r = [], i = 0; i < t; i++) {
                    var o = s(e, n);
                    o && r.push(o);
                }
                return r;
            },
            [s]
        ),
        c = r.useCallback(
            function (n) {
                var r = null == t ? void 0 : t.getCanvas();
                null != r && (null == e || e.addConfetti(n, r));
            },
            [e, t]
        ),
        u = r.useCallback(
            function (t) {
                null == e || e.deleteConfetti(t);
            },
            [e]
        ),
        d = r.useCallback(
            function () {
                return null == e ? void 0 : e.clearConfetti();
            },
            [e]
        );
    return r.useMemo(
        function () {
            return {
                createConfetti: s,
                createMultipleConfetti: l,
                addConfetti: c,
                clearConfetti: d,
                deleteConfetti: u,
                isReady: o && null != t && null != e
            };
        },
        [c, d, e, s, l, u, o, t]
    );
}
