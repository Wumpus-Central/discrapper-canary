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
    i = n(313319);
e.exports = (function (e) {
    if ("function" != typeof e && null !== e)
        throw TypeError("Super expression must either be null or a function, not " + typeof e);
    function t(e, n) {
        if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
        var r = (function (e, t) {
            if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t && ("object" == typeof t || "function" == typeof t) ? t : e;
        })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return (r._strings = e), (r._values = n), r;
    }
    return (
        (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
        })),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e)),
        r(t, [
            {
                key: "__transformValue",
                value: function (e) {
                    return e instanceof i ? e.__getValue() : e;
                },
            },
            {
                key: "__getValue",
                value: function () {
                    for (var e = this._strings[0], t = 0; t < this._values.length; ++t)
                        e += this.__transformValue(this._values[t]) + this._strings[1 + t];
                    return e;
                },
            },
            {
                key: "__attach",
                value: function () {
                    for (var e = 0; e < this._values.length; ++e)
                        this._values[e] instanceof i && this._values[e].__addChild(this);
                },
            },
            {
                key: "__detach",
                value: function () {
                    for (var e = 0; e < this._values.length; ++e)
                        this._values[e] instanceof i && this._values[e].__removeChild(this);
                },
            },
        ]),
        t
    );
})(n(698380));
