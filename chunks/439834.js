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
})();
r(562210);
var o = r(652925),
    i = r(284009),
    a = r(540017),
    s = r(140526);
e.exports = (function (e) {
    if ("function" != typeof e && null !== e)
        throw TypeError("Super expression must either be null or a function, not " + typeof e);
    function t(e, r) {
        if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
        var n = (function (e, t) {
            if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t && ("object" == typeof t || "function" == typeof t) ? t : e;
        })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return (n._parent = e), (n._interpolation = r), (n._listeners = {}), n;
    }
    return (
        (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
        })),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e)),
        n(t, [
            {
                key: "__getValue",
                value: function () {
                    var e = this._parent.__getValue();
                    return (
                        i("number" == typeof e, "Cannot interpolate an input which is not a number."),
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
                    var r = s();
                    return (this._listeners[r] = e), r;
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
})(o);
