var i = (function () {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
        }
    }
    return function (t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t;
    };
})();
function r(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
function a(e, t) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && ('object' == typeof t || 'function' == typeof t) ? t : e;
}
function s(e, t) {
    if ('function' != typeof t && null !== t) throw TypeError('Super expression must either be null or a function, not ' + typeof t);
    (e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    })),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var o = n(328794);
n(420633);
var l = n(601102),
    u = n(887442),
    c = n(512722),
    d = n(578008);
function f(e, t) {
    return null == e ? t : e;
}
var _ = (function (e) {
    function t(e) {
        r(this, t);
        var n,
            i = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return (i._overshootClamping = f(e.overshootClamping, !1)), (i._restDisplacementThreshold = f(e.restDisplacementThreshold, 0.001)), (i._restSpeedThreshold = f(e.restSpeedThreshold, 0.001)), (i._initialVelocity = e.velocity), (i._lastVelocity = f(e.velocity, 0)), (i._toValue = e.toValue), (i.__isInteraction = void 0 === e.isInteraction || e.isInteraction), void 0 !== e.bounciness || void 0 !== e.speed ? (c(void 0 === e.tension && void 0 === e.friction, 'You can only define bounciness/speed or tension/friction but not both'), (n = d.fromBouncinessAndSpeed(f(e.bounciness, 8), f(e.speed, 12)))) : (n = d.fromOrigamiTensionAndFriction(f(e.tension, 40), f(e.friction, 7))), (i._tension = n.tension), (i._friction = n.friction), i;
    }
    return (
        s(t, e),
        i(t, [
            {
                key: 'start',
                value: function (e, n, i, r) {
                    if (((this.__active = !0), (this._startPosition = e), (this._lastPosition = this._startPosition), (this._onUpdate = n), (this.__onEnd = i), (this._lastTime = Date.now()), r instanceof t)) {
                        var a = r.getInternalState();
                        (this._lastPosition = a.lastPosition), (this._lastVelocity = a.lastVelocity), (this._lastTime = a.lastTime);
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
                        t = this._lastVelocity,
                        n = this._lastPosition,
                        i = this._lastVelocity,
                        r = 64,
                        a = Date.now();
                    a > this._lastTime + r && (a = this._lastTime + r);
                    for (var s = 1, o = Math.floor((a - this._lastTime) / s), u = 0; u < o; ++u) {
                        var c = s / 1000,
                            d = t,
                            f = this._tension * (this._toValue - n) - this._friction * i,
                            n = e + (d * c) / 2,
                            i = t + (f * c) / 2,
                            _ = i,
                            p = this._tension * (this._toValue - n) - this._friction * i;
                        n = e + (_ * c) / 2;
                        var h = (i = t + (p * c) / 2),
                            m = this._tension * (this._toValue - n) - this._friction * i;
                        n = e + (h * c) / 2;
                        var g = (i = t + (m * c) / 2),
                            E = this._tension * (this._toValue - n) - this._friction * i;
                        (n = e + (h * c) / 2), (i = t + (m * c) / 2);
                        var v = (f + 2 * (p + m) + E) / 6;
                        (e += ((d + 2 * (_ + h) + g) / 6) * c), (t += v * c);
                    }
                    if (((this._lastTime = a), (this._lastPosition = e), (this._lastVelocity = t), this._onUpdate(e), this.__active)) {
                        var y = !1;
                        this._overshootClamping && 0 !== this._tension && (y = this._startPosition < this._toValue ? e > this._toValue : e < this._toValue);
                        var I = Math.abs(t) <= this._restSpeedThreshold,
                            b = !0;
                        if ((0 !== this._tension && (b = Math.abs(this._toValue - e) <= this._restDisplacementThreshold), y || (I && b))) {
                            0 !== this._tension && this._onUpdate(this._toValue), this.__debouncedOnEnd({ finished: !0 });
                            return;
                        }
                        this._animationFrame = l.current(this.onUpdate.bind(this));
                    }
                }
            },
            {
                key: 'stop',
                value: function () {
                    (this.__active = !1), u.current(this._animationFrame), this.__debouncedOnEnd({ finished: !1 });
                }
            }
        ]),
        t
    );
})(o);
e.exports = _;
