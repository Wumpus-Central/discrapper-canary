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
n(313319);
var i = n(698380),
    s = n(284009),
    a = n(82322),
    o = n(972535);
e.exports = (function (e) {
    if ("function" != typeof e && null !== e)
        throw TypeError("Super expression must either be null or a function, not " + typeof e);
    function t(e, n) {
        if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
        var r = (function (e, t) {
            if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t && ("object" == typeof t || "function" == typeof t) ? t : e;
        })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return (r._parent = e), (r._interpolation = n), (r._listeners = {}), r;
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
                    var e = this._parent.__getValue();
                    return (
                        s("number" == typeof e, "Cannot interpolate an input which is not a number."),
                        this._interpolation(e)
                    );
                },
            },
            {
                key: "addListener",
                value: function (e) {
                    var t = this;
                    this._parentListener ||
                        (this._parentListener = this._parent.addListener(function () {
                            for (var e in t._listeners) t._listeners[e]({ value: t.__getValue() });
                        }));
                    var n = o();
                    return (this._listeners[n] = e), n;
                },
            },
            {
                key: "removeListener",
                value: function (e) {
                    delete this._listeners[e];
                },
            },
            {
                key: "interpolate",
                value: function (e) {
                    return new t(this, a.create(e));
                },
            },
            {
                key: "__attach",
                value: function () {
                    this._parent.__addChild(this);
                },
            },
            {
                key: "__detach",
                value: function () {
                    this._parent.__removeChild(this),
                        (this._parentListener = this._parent.removeListener(this._parentListener));
                },
            },
        ]),
        t
    );
})(i);
