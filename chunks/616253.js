"use strict";
var r =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        },
    i = (function () {
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
    a = n(562210),
    o = n(652925),
    s = n(885452),
    l = n(764138);
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
            !(e = l.current(e) || {}).transform ||
                e.transform instanceof a ||
                (e = r({}, e, { transform: new s(e.transform) })),
            (n._style = e),
            n
        );
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
                    var e = {};
                    for (var t in this._style) {
                        var n = this._style[t];
                        n instanceof a ? (e[t] = n.__getValue()) : (e[t] = n);
                    }
                    return e;
                },
            },
            {
                key: "__getAnimatedValue",
                value: function () {
                    var e = {};
                    for (var t in this._style) {
                        var n = this._style[t];
                        n instanceof a && (e[t] = n.__getAnimatedValue());
                    }
                    return e;
                },
            },
            {
                key: "__attach",
                value: function () {
                    for (var e in this._style) {
                        var t = this._style[e];
                        t instanceof a && t.__addChild(this);
                    }
                },
            },
            {
                key: "__detach",
                value: function () {
                    for (var e in this._style) {
                        var t = this._style[e];
                        t instanceof a && t.__removeChild(this);
                    }
                },
            },
        ]),
        t
    );
})(o);
