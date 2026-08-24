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
    })(),
    i = r(652925);
r(562210);
var o = r(498121),
    a = r(540017),
    s = r(439834);
e.exports = (function (e) {
    if ("function" != typeof e && null !== e)
        throw TypeError("Super expression must either be null or a function, not " + typeof e);
    function t(e, r) {
        if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
        var n = (function (e, t) {
            if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t && ("object" == typeof t || "function" == typeof t) ? t : e;
        })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return (
            (n._a = "number" == typeof e ? new o(e) : e),
            (n._b = "number" == typeof r ? new o(r) : r),
            (n._listeners = {}),
            n
        );
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
                    return this._a.__getValue() + this._b.__getValue();
                },
            },
            {
                key: "addListener",
                value: function (e) {
                    var t = this;
                    !this._aListener &&
                        this._a.addListener &&
                        (this._aListener = this._a.addListener(function () {
                            for (var e in t._listeners) t._listeners[e]({ value: t.__getValue() });
                        })),
                        !this._bListener &&
                            this._b.addListener &&
                            (this._bListener = this._b.addListener(function () {
                                for (var e in t._listeners) t._listeners[e]({ value: t.__getValue() });
                            }));
                    var r = guid();
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
                    return new s(this, a.create(e));
                },
            },
            {
                key: "__attach",
                value: function () {
                    this._a.__addChild(this), this._b.__addChild(this);
                },
            },
            {
                key: "__detach",
                value: function () {
                    this._a.__removeChild(this), this._b.__removeChild(this);
                },
            },
        ]),
        t
    );
})(i);
