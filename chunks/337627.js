"use strict";
var i = (function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1),
                    (i.configurable = !0),
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i);
            }
        }
        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t;
        };
    })(),
    r = n(313319);
e.exports = (function (e) {
    if ("function" != typeof e && null !== e)
        throw TypeError("Super expression must either be null or a function, not " + typeof e);
    function t(e) {
        if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
        var n = (function (e, t) {
            if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t && ("object" == typeof t || "function" == typeof t) ? t : e;
        })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return (n._transforms = e), n;
    }
    return (
        (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
        })),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e)),
        i(t, [
            {
                key: "__getValue",
                value: function () {
                    return this._transforms.map(function (e) {
                        var t = {};
                        for (var n in e) {
                            var i = e[n];
                            i instanceof r ? (t[n] = i.__getValue()) : (t[n] = i);
                        }
                        return t;
                    });
                },
            },
            {
                key: "__getAnimatedValue",
                value: function () {
                    return this._transforms.map(function (e) {
                        var t = {};
                        for (var n in e) {
                            var i = e[n];
                            i instanceof r ? (t[n] = i.__getAnimatedValue()) : (t[n] = i);
                        }
                        return t;
                    });
                },
            },
            {
                key: "__attach",
                value: function () {
                    var e = this;
                    this._transforms.forEach(function (t) {
                        for (var n in t) {
                            var i = t[n];
                            i instanceof r && i.__addChild(e);
                        }
                    });
                },
            },
            {
                key: "__detach",
                value: function () {
                    var e = this;
                    this._transforms.forEach(function (t) {
                        for (var n in t) {
                            var i = t[n];
                            i instanceof r && i.__removeChild(e);
                        }
                    });
                },
            },
        ]),
        t
    );
})(n(698380));
