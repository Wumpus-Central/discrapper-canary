"use strict";
var i = (function () {
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
})();
n(313319);
var r = n(958554),
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
            i = e || { x: 0, y: 0 };
        return (
            "number" == typeof i.x && "number" == typeof i.y
                ? ((n.x = new r(i.x)), (n.y = new r(i.y)))
                : (a(
                      i.x instanceof r && i.y instanceof r,
                      "AnimatedValueXY must be initalized with an object of numbers or AnimatedValues.",
                  ),
                  (n.x = i.x),
                  (n.y = i.y)),
            (n._listeners = {}),
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
                        i = function (n) {
                            n.value, e(t.__getValue());
                        };
                    return (this._listeners[n] = { x: this.x.addListener(i), y: this.y.addListener(i) }), n;
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
