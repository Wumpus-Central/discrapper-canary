"use strict";
var n = r(581070)(),
    i = r(906046)("Object.prototype.toString"),
    o = function (e) {
        return (!n || !e || "object" != typeof e || !(Symbol.toStringTag in e)) && "[object Arguments]" === i(e);
    },
    a = function (e) {
        return (
            !!o(e) ||
            (null !== e &&
                "object" == typeof e &&
                "length" in e &&
                "number" == typeof e.length &&
                e.length >= 0 &&
                "[object Array]" !== i(e) &&
                "callee" in e &&
                "[object Function]" === i(e.callee))
        );
    },
    s = (function () {
        return o(arguments);
    })();
(o.isLegacyArguments = a), (e.exports = s ? o : a);
