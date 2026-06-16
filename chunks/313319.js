"use strict";
var t = (function () {
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
e.exports = (function () {
    function e() {
        if (!(this instanceof e)) throw TypeError("Cannot call a class as a function");
    }
    return (
        t(e, [
            { key: "__attach", value: function () {} },
            { key: "__detach", value: function () {} },
            { key: "__getValue", value: function () {} },
            {
                key: "__getAnimatedValue",
                value: function () {
                    return this.__getValue();
                },
            },
            { key: "__addChild", value: function (e) {} },
            { key: "__removeChild", value: function (e) {} },
            {
                key: "__getChildren",
                value: function () {
                    return [];
                },
            },
        ]),
        e
    );
})();
