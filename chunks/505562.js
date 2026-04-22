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
    s = n(313319);
n(958554),
    (e.exports = (function (e) {
        if ("function" != typeof e && null !== e)
            throw TypeError("Super expression must either be null or a function, not " + typeof e);
        function t(e, n, r, i, s) {
            if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
            var a = (function (e, t) {
                if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t && ("object" == typeof t || "function" == typeof t) ? t : e;
            })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return (
                (a._value = e),
                (a._parent = n),
                (a._animationClass = r),
                (a._animationConfig = i),
                (a._callback = s),
                a.__attach(),
                a
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
                        return this._parent.__getValue();
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
                        this._parent.__removeChild(this);
                    },
                },
                {
                    key: "update",
                    value: function () {
                        this._value.animate(
                            new this._animationClass(
                                r({}, this._animationConfig, { toValue: this._animationConfig.toValue.__getValue() }),
                            ),
                            this._callback,
                        );
                    },
                },
            ]),
            t
        );
    })(s));
