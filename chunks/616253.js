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
    i = (function () {
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
    o = r(562210),
    a = r(652925),
    s = r(885452),
    l = r(764138);
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
            !(e = l.current(e) || {}).transform ||
                e.transform instanceof o ||
                (e = n({}, e, { transform: new s(e.transform) })),
            (r._style = e),
            r
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
                        var r = this._style[t];
                        r instanceof o ? (e[t] = r.__getValue()) : (e[t] = r);
                    }
                    return e;
                },
            },
            {
                key: "__getAnimatedValue",
                value: function () {
                    var e = {};
                    for (var t in this._style) {
                        var r = this._style[t];
                        r instanceof o && (e[t] = r.__getAnimatedValue());
                    }
                    return e;
                },
            },
            {
                key: "__attach",
                value: function () {
                    for (var e in this._style) {
                        var t = this._style[e];
                        t instanceof o && t.__addChild(this);
                    }
                },
            },
            {
                key: "__detach",
                value: function () {
                    for (var e in this._style) {
                        var t = this._style[e];
                        t instanceof o && t.__removeChild(this);
                    }
                },
            },
        ]),
        t
    );
})(a);
