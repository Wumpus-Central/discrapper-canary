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
    i = n(336258);
n(958554);
var s = n(497387),
    a = n(259126),
    o = n(110799),
    l = s.inOut(s.ease);
e.exports = (function (e) {
    if ("function" != typeof e && null !== e)
        throw TypeError("Super expression must either be null or a function, not " + typeof e);
    function t(e) {
        if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
        var n = (function (e, t) {
            if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t && ("object" == typeof t || "function" == typeof t) ? t : e;
        })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return (
            (n._toValue = e.toValue),
            (n._easing = void 0 !== e.easing ? e.easing : l),
            (n._duration = void 0 !== e.duration ? e.duration : 500),
            (n._delay = void 0 !== e.delay ? e.delay : 0),
            (n.__isInteraction = void 0 === e.isInteraction || e.isInteraction),
            n
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
                value: function (e, t, n) {
                    var r = this;
                    (this.__active = !0), (this._fromValue = e), (this._onUpdate = t), (this.__onEnd = n);
                    var i = function () {
                        0 === r._duration
                            ? (r._onUpdate(r._toValue), r.__debouncedOnEnd({ finished: !0 }))
                            : ((r._startTime = Date.now()), (r._animationFrame = a.current(r.onUpdate.bind(r))));
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
                        o.current(this._animationFrame),
                        this.__debouncedOnEnd({ finished: !1 });
                },
            },
        ]),
        t
    );
})(i);
