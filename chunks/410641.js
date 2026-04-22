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
var i = n(958554),
    s = n(698380),
    a = n(284009),
    o = n(972535);
e.exports = (function (e) {
    if ("function" != typeof e && null !== e)
        throw TypeError("Super expression must either be null or a function, not " + typeof e);
    function t(e) {
        if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
        var n = (function (e, t) {
                if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t && ("object" == typeof t || "function" == typeof t) ? t : e;
            })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this)),
            r = e || { x: 0, y: 0 };
        return (
            "number" == typeof r.x && "number" == typeof r.y
                ? ((n.x = new i(r.x)), (n.y = new i(r.y)))
                : (a(
                      r.x instanceof i && r.y instanceof i,
                      "AnimatedValueXY must be initalized with an object of numbers or AnimatedValues.",
                  ),
                  (n.x = r.x),
                  (n.y = r.y)),
            (n._listeners = {}),
            n
        );
    }
    return (
        (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
        })),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e)),
        r(t, [
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
                        n = o(),
                        r = function (n) {
                            n.value, e(t.__getValue());
                        };
                    return (this._listeners[n] = { x: this.x.addListener(r), y: this.y.addListener(r) }), n;
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
})(s);
