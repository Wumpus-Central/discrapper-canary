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
var o = r(498121),
    i = r(652925),
    a = r(284009),
    s = r(140526);
e.exports = (function (e) {
    if ("function" != typeof e && null !== e)
        throw TypeError("Super expression must either be null or a function, not " + typeof e);
    function t(e) {
        if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
        var r = (function (e, t) {
                if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t && ("object" == typeof t || "function" == typeof t) ? t : e;
            })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this)),
            n = e || { x: 0, y: 0 };
        return (
            "number" == typeof n.x && "number" == typeof n.y
                ? ((r.x = new o(n.x)), (r.y = new o(n.y)))
                : (a(
                      n.x instanceof o && n.y instanceof o,
                      "AnimatedValueXY must be initalized with an object of numbers or AnimatedValues.",
                  ),
                  (r.x = n.x),
                  (r.y = n.y)),
            (r._listeners = {}),
            r
        );
    }
    return (
        (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
        })),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e)),
        n(t, [
            {
                key: "setValue",
                value: function (e) {
                    this.x.setValue(e.x), this.y.setValue(e.y);
                },
            },
            {
                key: "setOffset",
                value: function (e) {
                    this.x.setOffset(e.x), this.y.setOffset(e.y);
                },
            },
            {
                key: "flattenOffset",
                value: function () {
                    this.x.flattenOffset(), this.y.flattenOffset();
                },
            },
            {
                key: "__getValue",
                value: function () {
                    return { x: this.x.__getValue(), y: this.y.__getValue() };
                },
            },
            {
                key: "stopAnimation",
                value: function (e) {
                    this.x.stopAnimation(), this.y.stopAnimation(), e && e(this.__getValue());
                },
            },
            {
                key: "addListener",
                value: function (e) {
                    var t = this,
                        r = s(),
                        n = function (r) {
                            r.value, e(t.__getValue());
                        };
                    return (this._listeners[r] = { x: this.x.addListener(n), y: this.y.addListener(n) }), r;
                },
            },
            {
                key: "removeListener",
                value: function (e) {
                    this.x.removeListener(this._listeners[e].x),
                        this.y.removeListener(this._listeners[e].y),
                        delete this._listeners[e];
                },
            },
            {
                key: "getLayout",
                value: function () {
                    return { left: this.x, top: this.y };
                },
            },
            {
                key: "getTranslateTransform",
                value: function () {
                    return [{ translateX: this.x }, { translateY: this.y }];
                },
            },
        ]),
        t
    );
})(i);
