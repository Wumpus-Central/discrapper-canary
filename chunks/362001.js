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
})();
function i(e, t) {
    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function a(e, t) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && ("object" == typeof t || "function" == typeof t) ? t : e;
}
function s(e, t) {
    if ("function" != typeof t && null !== t)
        throw TypeError("Super expression must either be null or a function, not " + typeof t);
    (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
    })),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var o = n(336258);
n(958554);
var l = n(259126),
    u = n(110799),
    c = n(284009),
    d = n(177409);
function _(e, t) {
    return null == e ? t : e;
}
e.exports = (function (e) {
    function t(e) {
        i(this, t);
        var n,
            r = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return (
            (r._overshootClamping = _(e.overshootClamping, !1)),
            (r._restDisplacementThreshold = _(e.restDisplacementThreshold, 0.001)),
            (r._restSpeedThreshold = _(e.restSpeedThreshold, 0.001)),
            (r._initialVelocity = e.velocity),
            (r._lastVelocity = _(e.velocity, 0)),
            (r._toValue = e.toValue),
            (r.__isInteraction = void 0 === e.isInteraction || e.isInteraction),
            void 0 !== e.bounciness || void 0 !== e.speed
                ? (c(
                      void 0 === e.tension && void 0 === e.friction,
                      "You can only define bounciness/speed or tension/friction but not both",
                  ),
                  (n = d.fromBouncinessAndSpeed(_(e.bounciness, 8), _(e.speed, 12))))
                : (n = d.fromOrigamiTensionAndFriction(_(e.tension, 40), _(e.friction, 7))),
            (r._tension = n.tension),
            (r._friction = n.friction),
            r
        );
    }
    return (
        s(t, e),
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
                        i = 64,
                        a = Date.now();
                    a > this._lastTime + i && (a = this._lastTime + i);
                    for (var s = 1, o = Math.floor((a - this._lastTime) / s), u = 0; u < o; ++u) {
                        var c = s / 1e3,
                            d = t,
                            _ = this._tension * (this._toValue - n) - this._friction * r,
                            n = e + (d * c) / 2,
                            r = t + (_ * c) / 2,
                            f = r,
                            p = this._tension * (this._toValue - n) - this._friction * r;
                        n = e + (f * c) / 2;
                        var h = (r = t + (p * c) / 2),
                            m = this._tension * (this._toValue - n) - this._friction * r;
                        n = e + (h * c) / 2;
                        var g = (r = t + (m * c) / 2),
                            E = this._tension * (this._toValue - n) - this._friction * r;
                        (n = e + (h * c) / 2), (r = t + (m * c) / 2);
                        var A = (_ + 2 * (p + m) + E) / 6;
                        (e += ((d + 2 * (f + h) + g) / 6) * c), (t += A * c);
                    }
                    if (
                        ((this._lastTime = a),
                        (this._lastPosition = e),
                        (this._lastVelocity = t),
                        this._onUpdate(e),
                        this.__active)
                    ) {
                        var I = !1;
                        this._overshootClamping &&
                            0 !== this._tension &&
                            (I = this._startPosition < this._toValue ? e > this._toValue : e < this._toValue);
                        var T = Math.abs(t) <= this._restSpeedThreshold,
                            y = !0;
                        if (
                            (0 !== this._tension &&
                                (y = Math.abs(this._toValue - e) <= this._restDisplacementThreshold),
                            I || (T && y))
                        ) {
                            0 !== this._tension && this._onUpdate(this._toValue),
                                this.__debouncedOnEnd({ finished: !0 });
                            return;
                        }
                        this._animationFrame = l.current(this.onUpdate.bind(this));
                    }
                },
            },
            {
                key: "stop",
                value: function () {
                    (this.__active = !1), u.current(this._animationFrame), this.__debouncedOnEnd({ finished: !1 });
                },
            },
        ]),
        t
    );
})(o);
