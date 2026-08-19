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
            { key: "start", value: function (e, t, r, n) {} },
            { key: "stop", value: function () {} },
            {
                key: "__debouncedOnEnd",
                value: function (e) {
                    var t = this.__onEnd;
                    (this.__onEnd = null), t && t(e);
                },
            },
        ]),
        e
    );
})();
