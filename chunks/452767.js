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
    i = r(150433);
r(498121);
var o = r(703806),
    a = r(151979),
    s = r(934580),
    l = o.inOut(o.ease);
e.exports = (function (e) {
    if ("function" != typeof e && null !== e)
        throw TypeError("Super expression must either be null or a function, not " + typeof e);
    function t(e) {
        if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
        var r = (function (e, t) {
            if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t && ("object" == typeof t || "function" == typeof t) ? t : e;
        })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return (
            (r._toValue = e.toValue),
            (r._easing = void 0 !== e.easing ? e.easing : l),
            (r._duration = void 0 !== e.duration ? e.duration : 500),
            (r._delay = void 0 !== e.delay ? e.delay : 0),
            (r.__isInteraction = void 0 === e.isInteraction || e.isInteraction),
            r
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
                value: function (e, t, r) {
                    var n = this;
                    (this.__active = !0), (this._fromValue = e), (this._onUpdate = t), (this.__onEnd = r);
                    var i = function () {
                        0 === n._duration
                            ? (n._onUpdate(n._toValue), n.__debouncedOnEnd({ finished: !0 }))
                            : ((n._startTime = Date.now()), (n._animationFrame = a.current(n.onUpdate.bind(n))));
                    };
                    this._delay ? (this._timeout = setTimeout(i, this._delay)) : i();
                },
            },
            {
                key: "onUpdate",
                value: function () {
                    var e = Date.now();
                    if (e >= this._startTime + this._duration) {
                        0 === this._duration
                            ? this._onUpdate(this._toValue)
                            : this._onUpdate(this._fromValue + this._easing(1) * (this._toValue - this._fromValue)),
                            this.__debouncedOnEnd({ finished: !0 });
                        return;
                    }
                    this._onUpdate(
                        this._fromValue +
                            this._easing((e - this._startTime) / this._duration) * (this._toValue - this._fromValue),
                    ),
                        this.__active && (this._animationFrame = a.current(this.onUpdate.bind(this)));
                },
            },
            {
                key: "stop",
                value: function () {
                    (this.__active = !1),
                        clearTimeout(this._timeout),
                        s.current(this._animationFrame),
                        this.__debouncedOnEnd({ finished: !1 });
                },
            },
        ]),
        t
    );
})(i);
