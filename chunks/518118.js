"use strict";
var n =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
        },
    o = (function () {
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
    i = r(562210),
    a = r(616253);
e.exports = (function (e) {
    if ("function" != typeof e && null !== e)
        throw TypeError("Super expression must either be null or a function, not " + typeof e);
    function t(e, r) {
        if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
        var o = (function (e, t) {
            if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t && ("object" == typeof t || "function" == typeof t) ? t : e;
        })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return e.style && (e = n({}, e, { style: new a(e.style) })), (o._props = e), (o._callback = r), o.__attach(), o;
    }
    return (
        (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
        })),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e)),
        o(t, [
            {
                key: "__getValue",
                value: function () {
                    var e = {};
                    for (var t in this._props) {
                        var r = this._props[t];
                        r instanceof i ? (e[t] = r.__getValue()) : (e[t] = r);
                    }
                    return e;
                },
            },
            {
                key: "__getAnimatedValue",
                value: function () {
                    var e = {};
                    for (var t in this._props) {
                        var r = this._props[t];
                        r instanceof i && (e[t] = r.__getAnimatedValue());
                    }
                    return e;
                },
            },
            {
                key: "__attach",
                value: function () {
                    for (var e in this._props) {
                        var t = this._props[e];
                        t instanceof i && t.__addChild(this);
                    }
                },
            },
            {
                key: "__detach",
                value: function () {
                    for (var e in this._props) {
                        var t = this._props[e];
                        t instanceof i && t.__removeChild(this);
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
})(i);
