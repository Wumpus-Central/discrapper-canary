"use strict";
var i =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
        },
    r = (function () {
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
    s = n(313319),
    a = n(940798);
e.exports = (function (e) {
    if ("function" != typeof e && null !== e)
        throw TypeError("Super expression must either be null or a function, not " + typeof e);
    function t(e, n) {
        if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
        var r = (function (e, t) {
            if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t && ("object" == typeof t || "function" == typeof t) ? t : e;
        })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return e.style && (e = i({}, e, { style: new a(e.style) })), (r._props = e), (r._callback = n), r.__attach(), r;
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
                    var e = {};
                    for (var t in this._props) {
                        var n = this._props[t];
                        n instanceof s ? (e[t] = n.__getValue()) : (e[t] = n);
                    }
                    return e;
                },
            },
            {
                key: "__getAnimatedValue",
                value: function () {
                    var e = {};
                    for (var t in this._props) {
                        var n = this._props[t];
                        n instanceof s && (e[t] = n.__getAnimatedValue());
                    }
                    return e;
                },
            },
            {
                key: "__attach",
                value: function () {
                    for (var e in this._props) {
                        var t = this._props[e];
                        t instanceof s && t.__addChild(this);
                    }
                },
            },
            {
                key: "__detach",
                value: function () {
                    for (var e in this._props) {
                        var t = this._props[e];
                        t instanceof s && t.__removeChild(this);
                    }
                },
            },
            {
                key: "update",
                value: function () {
                    this._callback();
                },
            },
        ]),
        t
    );
})(s);
