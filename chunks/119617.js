r.d(n, {
    Ji: function () {
        return w;
    },
    O_: function () {
        return x;
    },
    qA: function () {
        return c;
    },
    uR: function () {
        return P;
    }
});
var i = r(192379),
    a = r(772848);
function o(e, n) {
    var r = e.x,
        i = e.y;
    return r > n.x && r < n.x + n.width && i > n.y && i < n.y + n.height;
}
function s(e, n, r, i) {
    var a = n > 0 ? -1 : 1,
        o = Math.abs(n);
    return 0.5 * e * i * r * o * o * a;
}
var l = (function () {
        function e(e) {
            (this.id = e.id), (this.position = e.position), (this.velocity = e.velocity), (this.rotation = e.rotation), (this.dragCoefficient = e.dragCoefficient), (this.airResistanceArea = e.airResistanceArea), (this.size = e.size), (this.opacity = e.opacity), (this.spriteX = e.spriteX), (this.spriteY = e.spriteY), (this.spriteWidth = e.spriteWidth), (this.spriteHeight = e.spriteHeight), (this._lastUpdatedAt = Date.now());
        }
        return (
            (e.prototype.getNewForces = function (e, n) {
                var r = e.wind * n,
                    i = -e.gravity * n;
                return {
                    x: r + s(this.dragCoefficient.x, this.velocity.x, this.airResistanceArea.x, e.density),
                    y: i + s(this.dragCoefficient.y, this.velocity.y, this.airResistanceArea.y, e.density)
                };
            }),
            (e.prototype.update = function (e) {
                var n = Date.now(),
                    r = (n - this._lastUpdatedAt) / 100;
                this.rotation.update(r), this.dragCoefficient.update(r);
                var i = this.getNewForces(e, r),
                    a = i.x,
                    o = i.y;
                this.velocity.update(r), (this.velocity.x += a), (this.velocity.y += o), this.position.update(r), (this.position.x += this.velocity.x * r), (this.position.y += this.velocity.y * r), this.size.update(r), this.opacity.update(r), (this.opacity.value = Math.max(this.opacity.value, 0)), (this._lastUpdatedAt = n);
            }),
            (e.prototype.previewPositionUpdate = function (e, n) {
                var r = n / 100,
                    i = this.velocity.previewUpdate(r),
                    a = this.getNewForces(e, r),
                    o = a.x,
                    s = a.y;
                (i.x += o), (i.y += s);
                var l = this.position.previewUpdate(r);
                return (l.x += i.x * r), (l.y += i.y * r), l;
            }),
            (e.prototype.draw = function (e, n) {
                n.save(), (n.globalAlpha = this.opacity.value), n.setTransform(new DOMMatrix().translateSelf(this.position.x * r.g.devicePixelRatio, this.position.y * r.g.devicePixelRatio).rotateSelf(this.rotation.x, this.rotation.y, this.rotation.z)), n.drawImage(e, this.spriteX, this.spriteY, this.spriteWidth, this.spriteHeight, (-this.width / 2) * r.g.devicePixelRatio, (-this.height / 2) * r.g.devicePixelRatio, this.width * r.g.devicePixelRatio, this.height * r.g.devicePixelRatio), n.restore();
            }),
            (e.prototype.shouldDestroy = function (e, n) {
                return this.opacity.value < 0 || (n.gravity >= 0 && this.velocity.y < 0 && this.position.y + this.height < 0) || (n.gravity <= 0 && this.velocity.y > 0 && this.position.y - this.height > e.height) || (n.wind >= 0 && this.velocity.x > 0 && this.position.x - this.width > e.width) || (n.wind <= 0 && this.velocity.x < 0 && this.position.x + this.width < 0);
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
    u = {
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
        var n = void 0 === e ? {} : e,
            r = n.gravity,
            i = n.wind,
            a = n.density;
        (this.gravity = -9.8), (this.wind = 0), (this.density = 1.2041), (this.gravity = null != r ? r : this.gravity), (this.wind = null != i ? i : this.wind), (this.density = null != a ? a : this.density);
    },
    d = function (e, n) {
        return (d =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
                function (e, n) {
                    e.__proto__ = n;
                }) ||
            function (e, n) {
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            })(e, n);
    };
function f(e, n) {
    if ('function' != typeof n && null !== n) throw TypeError('Class extends value ' + String(n) + ' is not a constructor or null');
    function r() {
        this.constructor = e;
    }
    d(e, n), (e.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
}
var p = function () {
    return (p =
        Object.assign ||
        function (e) {
            for (var n, r = 1, i = arguments.length; r < i; r++) for (var a in (n = arguments[r])) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            return e;
        }).apply(this, arguments);
};
function h(e, n, r, i) {
    return new (r || (r = Promise))(function (a, o) {
        function s(e) {
            try {
                u(i.next(e));
            } catch (e) {
                o(e);
            }
        }
        function l(e) {
            try {
                u(i.throw(e));
            } catch (e) {
                o(e);
            }
        }
        function u(e) {
            var n;
            e.done
                ? a(e.value)
                : ((n = e.value) instanceof r
                      ? n
                      : new r(function (e) {
                            e(n);
                        })
                  ).then(s, l);
        }
        u((i = i.apply(e, n || [])).next());
    });
}
function _(e, n) {
    var r,
        i,
        a,
        o,
        s = {
            label: 0,
            sent: function () {
                if (1 & a[0]) throw a[1];
                return a[1];
            },
            trys: [],
            ops: []
        };
    return (
        (o = {
            next: l(0),
            throw: l(1),
            return: l(2)
        }),
        'function' == typeof Symbol &&
            (o[Symbol.iterator] = function () {
                return this;
            }),
        o
    );
    function l(l) {
        return function (u) {
            return (function (l) {
                if (r) throw TypeError('Generator is already executing.');
                for (; o && ((o = 0), l[0] && (s = 0)), s; )
                    try {
                        if (((r = 1), i && (a = 2 & l[0] ? i.return : l[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, l[1])).done)) return a;
                        switch (((i = 0), a && (l = [2 & l[0], a.value]), l[0])) {
                            case 0:
                            case 1:
                                a = l;
                                break;
                            case 4:
                                return (
                                    s.label++,
                                    {
                                        value: l[1],
                                        done: !1
                                    }
                                );
                            case 5:
                                s.label++, (i = l[1]), (l = [0]);
                                continue;
                            case 7:
                                (l = s.ops.pop()), s.trys.pop();
                                continue;
                            default:
                                if (!(a = (a = s.trys).length > 0 && a[a.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                    s = 0;
                                    continue;
                                }
                                if (3 === l[0] && (!a || (l[1] > a[0] && l[1] < a[3]))) {
                                    s.label = l[1];
                                    break;
                                }
                                if (6 === l[0] && s.label < a[1]) {
                                    (s.label = a[1]), (a = l);
                                    break;
                                }
                                if (a && s.label < a[2]) {
                                    (s.label = a[2]), s.ops.push(l);
                                    break;
                                }
                                a[2] && s.ops.pop(), s.trys.pop();
                                continue;
                        }
                        l = n.call(e, s);
                    } catch (e) {
                        (l = [6, e]), (i = 0);
                    } finally {
                        r = a = 0;
                    }
                if (5 & l[0]) throw l[1];
                return {
                    value: l[0] ? l[1] : void 0,
                    done: !0
                };
            })([l, u]);
        };
    }
}
var m = function (e) {
        this.value = e;
    },
    g = (function () {
        function e(e, n, r) {
            (this._x = e), (this._y = r ? e : n);
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
    E = (function (e) {
        function n(n, r, i, a) {
            var o = e.call(this, n, r, a) || this;
            return (o._z = a ? n : i), o;
        }
        return (
            f(n, e),
            (n.prototype.update = function (n) {
                e.prototype.update.call(this, n), this._z.update(n);
            }),
            (n.prototype.previewUpdate = function (n) {
                var r = e.prototype.previewUpdate.call(this, n);
                return p(p({}, r), { z: this._z.previewUpdate(n) });
            }),
            Object.defineProperty(n.prototype, 'z', {
                get: function () {
                    return this._z.value;
                },
                set: function (e) {
                    this._z.value = e;
                },
                enumerable: !1,
                configurable: !0
            }),
            n
        );
    })(g),
    v = (function (e) {
        function n() {
            return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
            f(n, e),
            (n.prototype.update = function () {}),
            (n.prototype.previewUpdate = function () {
                return this.value;
            }),
            n
        );
    })(m),
    y = (function (e) {
        function n(n, r) {
            var i = e.call(this, n) || this;
            return (i.addValue = r), i;
        }
        return (
            f(n, e),
            (n.prototype.update = function (e) {
                this.value = this.previewUpdate(e);
            }),
            (n.prototype.previewUpdate = function (e) {
                return this.value + this.addValue * e;
            }),
            n
        );
    })(m),
    b = (function (e) {
        function n(n, r, i, a, o, s) {
            var l = e.call(this, n) || this;
            (l.min = r), (l.max = i), (l.duration = a);
            var u = (l.value / (l.max - l.min)) * l.duration,
                c = isNaN(u) ? 0 : u;
            return (l.timePassed = c < 0 ? l.duration - c : c), (l.directionMultiplier = o), (l.easingFunction = s), l;
        }
        return (
            f(n, e),
            (n.prototype.update = function (e) {
                var n = this.doUpdate(e),
                    r = n[0],
                    i = n[1],
                    a = n[2];
                (this.value = r), (this.directionMultiplier = a), (this.timePassed = i);
            }),
            (n.prototype.previewUpdate = function (e) {
                return this.doUpdate(e)[0];
            }),
            (n.prototype.doUpdate = function (e) {
                var n = this.max - this.min,
                    r = this.timePassed + e * this.directionMultiplier,
                    i = Math.min(Math.max(r, 0), this.duration),
                    a = r < 0 || r > this.duration ? -1 * this.directionMultiplier : this.directionMultiplier,
                    o = this.easingFunction(i, this.min, n, this.duration);
                return [isNaN(o) ? 0 : o, i, a];
            }),
            n
        );
    })(m);
function I(e, n) {
    return e === n ? e : Math.random() * (n - e + 1) + e;
}
function T(e) {
    var n = Math.floor(I(0, e.length - 1));
    return [e[n], n];
}
function S(e, n) {
    return T([e, n])[0];
}
function A(e) {
    return 'number' == typeof e
        ? {
              x: e,
              y: e
          }
        : e;
}
function C(e) {
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
                return new v(e.value);
            case 'static-random':
                return new v(I(e.minValue, e.maxValue));
            case 'linear':
                return new y(e.value, e.addValue);
            case 'linear-random':
                return new y(I(e.minValue, e.maxValue), I(e.minAddValue, e.maxAddValue));
            case 'oscillating':
                return new b(e.value, e.start, e.final, e.duration, e.direction, e.easingFunction);
            case 'oscillating-random':
                return new b(I(e.minValue, e.maxValue), I(e.minStart, e.maxStart), I(e.minFinal, e.maxFinal), I(e.minDuration, e.maxDuration), S(e.minDirection, e.maxDirection), T(e.easingFunctions)[0]);
        }
    })(p(p({}, e), { valueType: 'number' }));
}
function R(e) {
    return (function (e) {
        switch (e.type) {
            case 'static':
                var n = A(e.value);
                return new g(new v(n.x), new v(n.y), e.uniformVectorValues);
            case 'static-random':
                var r = A(e.minValue),
                    i = A(e.maxValue);
                return new g(new v(I(r.x, i.x)), new v(I(r.y, i.y)), e.uniformVectorValues);
            case 'linear':
                n = A(e.value);
                var a = A(e.addValue);
                return new g(new y(n.x, a.x), new y(n.y, a.y), e.uniformVectorValues);
            case 'linear-random':
                (r = A(e.minValue)), (i = A(e.maxValue));
                var o = A(e.minAddValue),
                    s = A(e.maxAddValue);
                return new g(new y(I(r.x, i.x), I(o.x, s.x)), new y(I(r.y, i.y), I(o.x, s.x)), e.uniformVectorValues);
            case 'oscillating':
                n = A(e.value);
                var l = A(e.start),
                    u = A(e.final),
                    c = A(e.duration),
                    d = A(e.direction);
                return new g(new b(n.x, l.x, u.x, c.x, d.x, e.easingFunction), new b(n.y, l.y, u.y, c.x, d.y, e.easingFunction), e.uniformVectorValues);
            case 'oscillating-random':
                (r = A(e.minValue)), (i = A(e.maxValue));
                var f = A(e.minStart),
                    p = A(e.maxStart),
                    h = A(e.minFinal),
                    _ = A(e.maxFinal),
                    m = A(e.minDuration),
                    E = A(e.maxDuration),
                    C = A(e.minDirection),
                    N = A(e.maxDirection);
                return new g(new b(I(r.x, i.x), I(f.x, p.x), I(h.x, _.x), I(m.x, E.x), S(C.x, N.x), T(e.easingFunctions)[0]), new b(I(r.y, i.y), I(f.y, p.y), I(h.y, _.y), I(m.y, E.y), S(C.y, N.y), T(e.easingFunctions)[0]), e.uniformVectorValues);
        }
    })(p(p({}, e), { valueType: 'Vector2' }));
}
function O(e) {
    return (function (e) {
        switch (e.type) {
            case 'static':
                var n = C(e.value);
                return new E(new v(n.x), new v(n.y), new v(n.z), e.uniformVectorValues);
            case 'static-random':
                var r = C(e.minValue),
                    i = C(e.maxValue);
                return new E(new v(I(r.x, i.x)), new v(I(r.y, i.y)), new v(I(r.z, i.z)), e.uniformVectorValues);
            case 'linear':
                n = C(e.value);
                var a = C(e.addValue);
                return new E(new y(n.x, a.x), new y(n.y, a.y), new y(n.z, a.z), e.uniformVectorValues);
            case 'linear-random':
                (r = C(e.minValue)), (i = C(e.maxValue));
                var o = C(e.minAddValue),
                    s = C(e.maxAddValue);
                return new E(new y(I(r.x, i.x), I(o.x, s.x)), new y(I(r.y, i.y), I(o.y, s.y)), new y(I(r.z, i.z), I(o.z, s.z)), e.uniformVectorValues);
            case 'oscillating':
                n = C(e.value);
                var l = C(e.start),
                    u = C(e.final),
                    c = C(e.duration),
                    d = C(e.direction);
                return new E(new b(n.x, l.x, u.x, c.x, d.x, e.easingFunction), new b(n.y, l.y, u.y, c.z, d.y, e.easingFunction), new b(n.z, l.z, u.z, c.z, d.z, e.easingFunction), e.uniformVectorValues);
            case 'oscillating-random':
                (r = C(e.minValue)), (i = C(e.maxValue));
                var f = C(e.minStart),
                    p = C(e.maxStart),
                    h = C(e.minFinal),
                    _ = C(e.maxFinal),
                    m = C(e.minDuration),
                    g = C(e.maxDuration),
                    A = C(e.minDirection),
                    N = C(e.maxDirection);
                return new E(new b(I(r.x, i.x), I(f.x, p.x), I(h.x, _.x), I(m.x, g.x), S(A.x, N.x), T(e.easingFunctions)[0]), new b(I(r.y, i.y), I(f.y, p.y), I(h.y, _.y), I(m.y, g.y), S(A.y, N.y), T(e.easingFunctions)[0]), new b(I(r.z, i.z), I(f.z, p.z), I(h.z, _.z), I(m.z, g.z), S(A.z, N.z), T(e.easingFunctions)[0]), e.uniformVectorValues);
        }
    })(p(p({}, e), { valueType: 'Vector3' }));
}
function D(e, n, r, i, a) {
    var o = (function (e, n) {
            return p(p({ id: n }, u), e);
        })(n, e),
        s = (function (e, n) {
            if (null != e) {
                var r = n.sprites.findIndex(function (n) {
                    var r, i;
                    return (r = n), 'string' == typeof (i = e) ? r.src === i && r.colorize : r.src === i.src && r.colorize === i.colorize;
                });
                if (-1 !== r) return [e, r];
            }
            return T(n.sprites);
        })(i, r),
        c = s[0],
        d = s[1],
        f = (function (e, n, r) {
            if (
                !(function (e) {
                    return 'string' == typeof e || e.colorize;
                })(e)
            )
                return 0;
            var i =
                null != n
                    ? r.colors.findIndex(function (e) {
                          return e === n;
                      })
                    : -1;
            return -1 !== i ? i : Math.floor(I(0, r.colors.length - 1));
        })(null != i ? i : c, a, r);
    return new l({
        id: e,
        position: R(o.position),
        velocity: R(o.velocity),
        rotation: O(o.rotation),
        dragCoefficient: R(o.dragCoefficient),
        size: R(o.size),
        opacity: N(o.opacity),
        airResistanceArea: R(o.airResistanceArea),
        spriteX: f * r.spriteWidth + 2 * f,
        spriteY: d * r.spriteHeight + 2 * d,
        spriteWidth: r.spriteWidth,
        spriteHeight: r.spriteHeight
    });
}
var x = i.forwardRef(function (e, n) {
        var s = e.className,
            l = e.environment,
            u = e.onClick,
            c = e.onMouseDown,
            d = e.onMouseMove,
            f = e.onMouseUp,
            h = e.onBeforeRender,
            _ = e.onAfterRender,
            m = (function (e, n) {
                var r = {};
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && 0 > n.indexOf(i) && (r[i] = e[i]);
                if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
                    var a = 0;
                    for (i = Object.getOwnPropertySymbols(e); a < i.length; a++) 0 > n.indexOf(i[a]) && Object.prototype.propertyIsEnumerable.call(e, i[a]) && (r[i[a]] = e[i[a]]);
                }
                return r;
            })(e, ['className', 'environment', 'onClick', 'onMouseDown', 'onMouseMove', 'onMouseUp', 'onBeforeRender', 'onAfterRender']),
            g = i.useRef(null),
            E = i.useRef(new Map()),
            v = i.useRef(null),
            y = i.useRef(0),
            b = i.useRef(0),
            I = i.useCallback(
                function () {
                    var e = g.current;
                    if (null != e) {
                        var n = e.getContext('2d');
                        if (null != n) {
                            n.clearRect(0, 0, e.width, e.height),
                                null == h || h(n),
                                E.current.forEach(function (r, i) {
                                    var a = r.confetti,
                                        o = r.spriteCanvas;
                                    a.update(l), a.draw(o, n), a.shouldDestroy(e, l) && E.current.delete(i);
                                }),
                                null == _ || _(n),
                                E.current.size > 0 ? (v.current = window.requestAnimationFrame(I)) : (n.clearRect(0, 0, e.width, e.height), (v.current = null));
                            var r = Date.now();
                            0 !== y.current && (b.current = 1000 / (r - y.current)), (y.current = r);
                        }
                    }
                },
                [l, _, h]
            );
        i.useEffect(
            function () {
                null != v.current && (window.cancelAnimationFrame(v.current), (v.current = window.requestAnimationFrame(I)));
            },
            [I]
        );
        var T = i.useCallback(
                function (e, n) {
                    E.current.set(e.id, {
                        confetti: e,
                        spriteCanvas: n
                    }),
                        null == v.current && I();
                },
                [I]
            ),
            S = i.useCallback(
                function (e, n, r, i, o) {
                    var s,
                        l = D(null !== (s = e.id) && void 0 !== s ? s : (0, a.Z)(), e, r, i, o);
                    return T(l, n), l;
                },
                [T]
            ),
            A = i.useCallback(function (e) {
                E.current.delete(e);
            }, []),
            C = i.useCallback(function () {
                return E.current.clear();
            }, []),
            N = i.useCallback(function () {
                return g.current;
            }, []);
        i.useImperativeHandle(
            n,
            function () {
                return {
                    createConfetti: S,
                    addConfetti: T,
                    deleteConfetti: A,
                    clearConfetti: C,
                    getCanvas: N
                };
            },
            [S, T, A, C, N]
        );
        var R = i.useCallback(
                function (e, n) {
                    var r,
                        i,
                        a = n.clickHandler,
                        s = n.mouseHandler;
                    if (null != a || null != s) {
                        var u = null === (r = g.current) || void 0 === r ? void 0 : r.getBoundingClientRect();
                        if (null != u) {
                            var c = (function (e, n) {
                                if (null == n) throw Error('element should not be null');
                                var r = n.getBoundingClientRect();
                                return {
                                    x: e.clientX - r.left,
                                    y: e.clientY - r.top
                                };
                            })(e, g.current);
                            if (
                                o(c, {
                                    x: u.left,
                                    y: u.top,
                                    width: u.width,
                                    height: u.height
                                })
                            ) {
                                if (null != s) return s(e);
                                if (null != a) {
                                    var d = (-1000 / b.current) * 2,
                                        f = (function (e, n) {
                                            for (var r = 0, i = Array.from(e.values()); r < i.length; r++) {
                                                var a = i[r];
                                                if (null != a && n(a)) return a;
                                            }
                                            return null;
                                        })(E.current, function (e) {
                                            var n = e.confetti,
                                                r = n.previewPositionUpdate(l, d);
                                            return o(c, {
                                                x: r.x - n.width / 2,
                                                y: r.y - n.height / 2,
                                                width: n.width,
                                                height: n.height
                                            });
                                        });
                                    a(e, null !== (i = null == f ? void 0 : f.confetti) && void 0 !== i ? i : null);
                                }
                            }
                        }
                    }
                },
                [l]
            ),
            O = i.useCallback(
                function (e) {
                    return R(e, { clickHandler: u });
                },
                [R, u]
            ),
            x = i.useCallback(
                function (e) {
                    return R(e, { clickHandler: c });
                },
                [R, c]
            ),
            L = i.useCallback(
                function (e) {
                    return R(e, { mouseHandler: d });
                },
                [R, d]
            ),
            w = i.useCallback(
                function (e) {
                    return R(e, { mouseHandler: f });
                },
                [R, f]
            );
        return (
            i.useEffect(
                function () {
                    var e = function (e, n, r) {
                        null != r && window.addEventListener(e, n);
                    };
                    return (
                        e('click', O, u),
                        e('mousedown', x, c),
                        e('mousemove', L, d),
                        e('mouseup', w, f),
                        function () {
                            window.removeEventListener('click', O), window.removeEventListener('mousedown', x), window.removeEventListener('mousemove', L), window.removeEventListener('mouseup', L);
                        }
                    );
                },
                [O, x, L, w, u, c, d, f]
            ),
            i.useEffect(function () {
                var e = g.current,
                    n = new ResizeObserver(function () {
                        !(function (e) {
                            if (null != e) {
                                var n = e.getBoundingClientRect(),
                                    i = n.width,
                                    a = n.height;
                                (e.width = i * r.g.devicePixelRatio), (e.height = a * r.g.devicePixelRatio);
                            }
                        })(g.current);
                    });
                return (
                    null != e && n.observe(e),
                    function () {
                        null != e && n.unobserve(e);
                    }
                );
            }, []),
            i.createElement(
                'canvas',
                p({}, m, {
                    className: s,
                    ref: g
                })
            )
        );
    }),
    L = {
        display: 'none',
        position: 'absolute',
        width: 0,
        height: 0,
        left: '-100%'
    },
    w = i.forwardRef(function (e, n) {
        var r = e.className,
            o = e.visible,
            s = void 0 !== o && o,
            l = e.sprites,
            u = e.colors,
            c = e.spriteWidth,
            d = e.spriteHeight,
            f = i.useRef(null),
            p = i.useRef([]),
            m = i.useRef(!1),
            g = i.useRef({});
        i.useImperativeHandle(
            n,
            function () {
                return {
                    getCanvas: function () {
                        return f.current;
                    },
                    getCreateData: function () {
                        return {
                            sprites: p.current,
                            colors: u,
                            spriteWidth: c,
                            spriteHeight: d
                        };
                    },
                    addReadyListener: function (e) {
                        var n = (0, a.Z)();
                        return (g.current[n] = e), n;
                    },
                    removeReadyListener: function (e) {
                        delete g.current[e];
                    },
                    isReady: m.current
                };
            },
            [u, d, c]
        );
        var E = i.useCallback(
                function () {
                    var e = f.current,
                        n = null == e ? void 0 : e.getContext('2d', { willReadFrequently: !0 });
                    null != n &&
                        null != e &&
                        (n.clearRect(0, 0, e.width, e.height),
                        p.current.forEach(function (e, r) {
                            var i = function (i, a) {
                                var o = c * a + 2 * a,
                                    s = d * r + 2 * r;
                                if ((n.drawImage(e.image, o, s, c, d), null != i)) {
                                    for (
                                        var l = n.getImageData(o, s, c, d),
                                            u = (function (e) {
                                                '#' === e[0] && (e = e.slice(1));
                                                var n = parseInt(e, 16);
                                                return {
                                                    r: (n >> 16) & 255,
                                                    g: (n >> 8) & 255,
                                                    b: 255 & n
                                                };
                                            })(i),
                                            f = 0;
                                        f < l.data.length;
                                        f += 4
                                    )
                                        (l.data[f] = u.r), (l.data[f + 1] = u.g), (l.data[f + 2] = u.b);
                                    n.putImageData(l, o, s);
                                }
                            };
                            e.colorize
                                ? u.forEach(function (e, n) {
                                      return i(e, n);
                                  })
                                : i(null, 0);
                        }));
                },
                [u, d, c]
            ),
            v = i.useCallback(
                function () {
                    var e = l.map(function (e) {
                        var n = new Image(),
                            r = 'string' == typeof e ? e : e.src,
                            i = 'string' == typeof e || e.colorize;
                        n.src = r;
                        var a = new Promise(function (e) {
                            n.onload = e;
                        });
                        return {
                            colorize: i,
                            image: n,
                            src: r,
                            loadPromise: a
                        };
                    });
                    return Promise.all(
                        e.map(function (e) {
                            return e.loadPromise;
                        })
                    ).then(function () {
                        p.current = e.map(function (e) {
                            return {
                                colorize: e.colorize,
                                image: e.image,
                                src: e.src
                            };
                        });
                    });
                },
                [l]
            ),
            y = i.useCallback(function (e) {
                for (var n in g.current) g.current[n](e);
            }, []),
            b = i.useCallback(
                function () {
                    return h(void 0, void 0, void 0, function () {
                        return _(this, function (e) {
                            switch (e.label) {
                                case 0:
                                    return [4, v()];
                                case 1:
                                    return e.sent(), E(), (m.current = !0), y(!0), [2];
                            }
                        });
                    });
                },
                [y, v, E]
            );
        return (
            i.useEffect(
                function () {
                    b();
                },
                [b]
            ),
            i.useEffect(
                function () {
                    return function () {
                        return y(!1);
                    };
                },
                [y]
            ),
            i.useEffect(
                function () {
                    null != f.current && ((f.current.width = (c + 2) * Math.max(u.length, 1)), (f.current.height = (d + 2) * l.length));
                },
                [u.length, d, c, l.length]
            ),
            i.createElement('canvas', {
                ref: f,
                className: r,
                style: s ? void 0 : L
            })
        );
    });
function P(e, n) {
    var r,
        a = i.useState(null !== (r = null == n ? void 0 : n.isReady) && void 0 !== r && r),
        o = a[0],
        s = a[1];
    i.useEffect(
        function () {
            var e = null == n ? void 0 : n.addReadyListener(s);
            return function () {
                null != e && (null == n || n.removeReadyListener(e));
            };
        },
        [n]
    );
    var l = i.useCallback(
            function (r, i) {
                var a = void 0 === i ? {} : i,
                    o = a.sprite,
                    s = a.color,
                    l = null == n ? void 0 : n.getCreateData(),
                    u = null == n ? void 0 : n.getCanvas();
                if (null != u && null != l && 0 !== l.sprites.length) return null == e ? void 0 : e.createConfetti(r, u, l, o, s);
            },
            [e, n]
        ),
        u = i.useCallback(
            function (e, n, r) {
                for (var i = [], a = 0; a < n; a++) {
                    var o = l(e, r);
                    o && i.push(o);
                }
                return i;
            },
            [l]
        ),
        c = i.useCallback(
            function (r) {
                var i = null == n ? void 0 : n.getCanvas();
                null != i && (null == e || e.addConfetti(r, i));
            },
            [e, n]
        ),
        d = i.useCallback(
            function (n) {
                null == e || e.deleteConfetti(n);
            },
            [e]
        ),
        f = i.useCallback(
            function () {
                return null == e ? void 0 : e.clearConfetti();
            },
            [e]
        );
    return i.useMemo(
        function () {
            return {
                createConfetti: l,
                createMultipleConfetti: u,
                addConfetti: c,
                clearConfetti: f,
                deleteConfetti: d,
                isReady: o && null != n && null != e
            };
        },
        [c, f, e, l, u, d, o, n]
    );
}
