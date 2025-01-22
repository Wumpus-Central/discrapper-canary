var i = (function () {
    function e(e, n) {
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            (i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
        }
    }
    return function (n, r, i) {
        return r && e(n.prototype, r), i && e(n, i), n;
    };
})();
function a(e, n) {
    if (!(e instanceof n)) throw TypeError('Cannot call a class as a function');
}
function o(e, n) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return n && ('object' == typeof n || 'function' == typeof n) ? n : e;
}
function s(e, n) {
    if ('function' != typeof n && null !== n) throw TypeError('Super expression must either be null or a function, not ' + typeof n);
    (e.prototype = Object.create(n && n.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    })),
        n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : (e.__proto__ = n));
}
var l = r(328794);
r(420633);
var u = r(601102),
    c = r(887442),
    d = r(512722),
    f = r(578008);
function p(e, n) {
    return null == e ? n : e;
}
var h = (function (e) {
    function n(e) {
        a(this, n);
        var r,
            i = o(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
        return (i._overshootClamping = p(e.overshootClamping, !1)), (i._restDisplacementThreshold = p(e.restDisplacementThreshold, 0.001)), (i._restSpeedThreshold = p(e.restSpeedThreshold, 0.001)), (i._initialVelocity = e.velocity), (i._lastVelocity = p(e.velocity, 0)), (i._toValue = e.toValue), (i.__isInteraction = void 0 === e.isInteraction || e.isInteraction), void 0 !== e.bounciness || void 0 !== e.speed ? (d(void 0 === e.tension && void 0 === e.friction, 'You can only define bounciness/speed or tension/friction but not both'), (r = f.fromBouncinessAndSpeed(p(e.bounciness, 8), p(e.speed, 12)))) : (r = f.fromOrigamiTensionAndFriction(p(e.tension, 40), p(e.friction, 7))), (i._tension = r.tension), (i._friction = r.friction), i;
    }
    return (
        s(n, e),
        i(n, [
            {
                key: 'start',
                value: function (e, r, i, a) {
                    if (((this.__active = !0), (this._startPosition = e), (this._lastPosition = this._startPosition), (this._onUpdate = r), (this.__onEnd = i), (this._lastTime = Date.now()), a instanceof n)) {
                        var o = a.getInternalState();
                        (this._lastPosition = o.lastPosition), (this._lastVelocity = o.lastVelocity), (this._lastTime = o.lastTime);
                    }
                    void 0 !== this._initialVelocity && null !== this._initialVelocity && (this._lastVelocity = this._initialVelocity), this.onUpdate();
                }
            },
            {
                key: 'getInternalState',
                value: function () {
                    return {
                        lastPosition: this._lastPosition,
                        lastVelocity: this._lastVelocity,
                        lastTime: this._lastTime
                    };
                }
            },
            {
                key: 'onUpdate',
                value: function () {
                    var e = this._lastPosition,
                        n = this._lastVelocity,
                        r = this._lastPosition,
                        i = this._lastVelocity,
                        a = 64,
                        o = Date.now();
                    o > this._lastTime + a && (o = this._lastTime + a);
                    for (var s = 1, l = Math.floor((o - this._lastTime) / s), c = 0; c < l; ++c) {
                        var d = s / 1000,
                            f = n,
                            p = this._tension * (this._toValue - r) - this._friction * i,
                            r = e + (f * d) / 2,
                            i = n + (p * d) / 2,
                            h = i,
                            _ = this._tension * (this._toValue - r) - this._friction * i;
                        r = e + (h * d) / 2;
                        var m = (i = n + (_ * d) / 2),
                            g = this._tension * (this._toValue - r) - this._friction * i;
                        r = e + (m * d) / 2;
                        var E = (i = n + (g * d) / 2),
                            v = this._tension * (this._toValue - r) - this._friction * i;
                        (r = e + (m * d) / 2), (i = n + (g * d) / 2);
                        var y = (p + 2 * (_ + g) + v) / 6;
                        (e += ((f + 2 * (h + m) + E) / 6) * d), (n += y * d);
                    }
                    if (((this._lastTime = o), (this._lastPosition = e), (this._lastVelocity = n), this._onUpdate(e), !!this.__active)) {
                        var b = !1;
                        this._overshootClamping && 0 !== this._tension && (b = this._startPosition < this._toValue ? e > this._toValue : e < this._toValue);
                        var I = Math.abs(n) <= this._restSpeedThreshold,
                            T = !0;
                        if ((0 !== this._tension && (T = Math.abs(this._toValue - e) <= this._restDisplacementThreshold), b || (I && T))) {
                            0 !== this._tension && this._onUpdate(this._toValue), this.__debouncedOnEnd({ finished: !0 });
                            return;
                        }
                        this._animationFrame = u.current(this.onUpdate.bind(this));
                    }
                }
            },
            {
                key: 'stop',
                value: function () {
                    (this.__active = !1), c.current(this._animationFrame), this.__debouncedOnEnd({ finished: !1 });
                }
            }
        ]),
        n
    );
})(l);
e.exports = h;
