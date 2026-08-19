"use strict";
var t = (function () {
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
