"use strict";
var r = (function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
            }
        }
        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    })(),
    i = n(150433);
n(498121);
var a = n(151979),
    o = n(934580),
    s = n(284009),
    l = n(735556);
function u(e, t) {
    return null == e ? t : e;
}
e.exports = (function (e) {
    if ("function" != typeof e && null !== e)
        throw TypeError("Super expression must either be null or a function, not " + typeof e);
    function t(e) {
        if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
        var n,
            r = (function (e, t) {
                if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t && ("object" == typeof t || "function" == typeof t) ? t : e;
            })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return (
            (r._overshootClamping = u(e.overshootClamping, !1)),
            (r._restDisplacementThreshold = u(e.restDisplacementThreshold, 0.001)),
            (r._restSpeedThreshold = u(e.restSpeedThreshold, 0.001)),
            (r._initialVelocity = e.velocity),
            (r._lastVelocity = u(e.velocity, 0)),
            (r._toValue = e.toValue),
            (r.__isInteraction = void 0 === e.isInteraction || e.isInteraction),
            void 0 !== e.bounciness || void 0 !== e.speed
                ? (s(
                      void 0 === e.tension && void 0 === e.friction,
                      "You can only define bounciness/speed or tension/friction but not both",
                  ),
                  (n = l.fromBouncinessAndSpeed(u(e.bounciness, 8), u(e.speed, 12))))
                : (n = l.fromOrigamiTensionAndFriction(u(e.tension, 40), u(e.friction, 7))),
            (r._tension = n.tension),
            (r._friction = n.friction),
            r
        );
    }
    return (
        (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
        })),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e)),
        r(t, [
            {
                key: "start",
                value: function (e, n, r, i) {
                    if (
                        ((this.__active = !0),
                        (this._startPosition = e),
                        (this._lastPosition = this._startPosition),
                        (this._onUpdate = n),
                        (this.__onEnd = r),
                        (this._lastTime = Date.now()),
                        i instanceof t)
                    ) {
                        var a = i.getInternalState();
                        (this._lastPosition = a.lastPosition),
                            (this._lastVelocity = a.lastVelocity),
                            (this._lastTime = a.lastTime);
                    }
                    void 0 !== this._initialVelocity &&
                        null !== this._initialVelocity &&
                        (this._lastVelocity = this._initialVelocity),
                        this.onUpdate();
                },
            },
            {
                key: "getInternalState",
                value: function () {
                    return {
                        lastPosition: this._lastPosition,
                        lastVelocity: this._lastVelocity,
                        lastTime: this._lastTime,
                    };
                },
            },
            {
                key: "onUpdate",
                value: function () {
                    var e = this._lastPosition,
                        t = this._lastVelocity,
                        n = this._lastPosition,
                        r = this._lastVelocity,
                        i = Date.now();
                    i > this._lastTime + 64 && (i = this._lastTime + 64);
                    for (var o = Math.floor((i - this._lastTime) / 1), s = 0; s < o; ++s) {
                        var l = t,
                            u = this._tension * (this._toValue - n) - this._friction * r,
                            n = e + (0.001 * l) / 2,
                            r = t + (0.001 * u) / 2,
                            c = r,
                            d = this._tension * (this._toValue - n) - this._friction * r;
                        n = e + (0.001 * c) / 2;
                        var f = (r = t + (0.001 * d) / 2),
                            p = this._tension * (this._toValue - n) - this._friction * r;
                        n = e + (0.001 * f) / 2;
                        var h = (r = t + (0.001 * p) / 2),
                            m = this._tension * (this._toValue - n) - this._friction * r;
                        (n = e + (0.001 * f) / 2), (r = t + (0.001 * p) / 2);
                        var g = (u + 2 * (d + p) + m) / 6;
                        (e += ((l + 2 * (c + f) + h) / 6) * 0.001), (t += 0.001 * g);
                    }
                    if (
                        ((this._lastTime = i),
                        (this._lastPosition = e),
                        (this._lastVelocity = t),
                        this._onUpdate(e),
                        this.__active)
                    ) {
                        var v = !1;
                        this._overshootClamping &&
                            0 !== this._tension &&
                            (v = this._startPosition < this._toValue ? e > this._toValue : e < this._toValue);
                        var y = Math.abs(t) <= this._restSpeedThreshold,
                            b = !0;
                        if (
                            (0 !== this._tension &&
                                (b = Math.abs(this._toValue - e) <= this._restDisplacementThreshold),
                            v || (y && b))
                        ) {
                            0 !== this._tension && this._onUpdate(this._toValue),
                                this.__debouncedOnEnd({ finished: !0 });
                            return;
                        }
                        this._animationFrame = a.current(this.onUpdate.bind(this));
                    }
                },
            },
            {
                key: "stop",
                value: function () {
                    (this.__active = !1), o.current(this._animationFrame), this.__debouncedOnEnd({ finished: !1 });
                },
            },
        ]),
        t
    );
})(i);
