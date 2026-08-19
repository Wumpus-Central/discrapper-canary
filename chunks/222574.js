"use strict";
var n = (function () {
        function e(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        }
        return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
        };
    })(),
    o = r(150433);
r(498121);
var i = r(151979),
    a = r(934580),
    s = r(284009),
    l = r(735556);
function u(e, t) {
    return null == e ? t : e;
}
e.exports = (function (e) {
    if ("function" != typeof e && null !== e)
        throw TypeError("Super expression must either be null or a function, not " + typeof e);
    function t(e) {
        if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
        var r,
            n = (function (e, t) {
                if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t && ("object" == typeof t || "function" == typeof t) ? t : e;
            })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return (
            (n._overshootClamping = u(e.overshootClamping, !1)),
            (n._restDisplacementThreshold = u(e.restDisplacementThreshold, 0.001)),
            (n._restSpeedThreshold = u(e.restSpeedThreshold, 0.001)),
            (n._initialVelocity = e.velocity),
            (n._lastVelocity = u(e.velocity, 0)),
            (n._toValue = e.toValue),
            (n.__isInteraction = void 0 === e.isInteraction || e.isInteraction),
            void 0 !== e.bounciness || void 0 !== e.speed
                ? (s(
                      void 0 === e.tension && void 0 === e.friction,
                      "You can only define bounciness/speed or tension/friction but not both",
                  ),
                  (r = l.fromBouncinessAndSpeed(u(e.bounciness, 8), u(e.speed, 12))))
                : (r = l.fromOrigamiTensionAndFriction(u(e.tension, 40), u(e.friction, 7))),
            (n._tension = r.tension),
            (n._friction = r.friction),
            n
        );
    }
    return (
        (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
        })),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e)),
        n(t, [
            {
                key: "start",
                value: function (e, r, n, o) {
                    if (
                        ((this.__active = !0),
                        (this._startPosition = e),
                        (this._lastPosition = this._startPosition),
                        (this._onUpdate = r),
                        (this.__onEnd = n),
                        (this._lastTime = Date.now()),
                        o instanceof t)
                    ) {
                        var i = o.getInternalState();
                        (this._lastPosition = i.lastPosition),
                            (this._lastVelocity = i.lastVelocity),
                            (this._lastTime = i.lastTime);
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
                        r = this._lastPosition,
                        n = this._lastVelocity,
                        o = Date.now();
                    o > this._lastTime + 64 && (o = this._lastTime + 64);
                    for (var a = Math.floor((o - this._lastTime) / 1), s = 0; s < a; ++s) {
                        var l = t,
                            u = this._tension * (this._toValue - r) - this._friction * n,
                            r = e + (0.001 * l) / 2,
                            n = t + (0.001 * u) / 2,
                            c = n,
                            f = this._tension * (this._toValue - r) - this._friction * n;
                        r = e + (0.001 * c) / 2;
                        var p = (n = t + (0.001 * f) / 2),
                            d = this._tension * (this._toValue - r) - this._friction * n;
                        r = e + (0.001 * p) / 2;
                        var h = (n = t + (0.001 * d) / 2),
                            m = this._tension * (this._toValue - r) - this._friction * n;
                        (r = e + (0.001 * p) / 2), (n = t + (0.001 * d) / 2);
                        var v = (u + 2 * (f + d) + m) / 6;
                        (e += ((l + 2 * (c + p) + h) / 6) * 0.001), (t += 0.001 * v);
                    }
                    if (
                        ((this._lastTime = o),
                        (this._lastPosition = e),
                        (this._lastVelocity = t),
                        this._onUpdate(e),
                        this.__active)
                    ) {
                        var y = !1;
                        this._overshootClamping &&
                            0 !== this._tension &&
                            (y = this._startPosition < this._toValue ? e > this._toValue : e < this._toValue);
                        var g = Math.abs(t) <= this._restSpeedThreshold,
                            b = !0;
                        if (
                            (0 !== this._tension &&
                                (b = Math.abs(this._toValue - e) <= this._restDisplacementThreshold),
                            y || (g && b))
                        ) {
                            0 !== this._tension && this._onUpdate(this._toValue),
                                this.__debouncedOnEnd({ finished: !0 });
                            return;
                        }
                        this._animationFrame = i.current(this.onUpdate.bind(this));
                    }
                },
            },
            {
                key: "stop",
                value: function () {
                    (this.__active = !1), a.current(this._animationFrame), this.__debouncedOnEnd({ finished: !1 });
                },
            },
        ]),
        t
    );
})(o);
