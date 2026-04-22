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
        r(t, [
            {
                key: "__getValue",
                value: function () {
                    return this._transforms.map(function (e) {
                        var t = {};
                        for (var n in e) {
                            var r = e[n];
                            r instanceof i ? (t[n] = r.__getValue()) : (t[n] = r);
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
                            var r = e[n];
                            r instanceof i ? (t[n] = r.__getAnimatedValue()) : (t[n] = r);
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
                            var r = t[n];
                            r instanceof i && r.__addChild(e);
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
                            var r = t[n];
                            r instanceof i && r.__removeChild(e);
                        }
                    });
                },
            },
        ]),
        t
    );
})(n(698380));
