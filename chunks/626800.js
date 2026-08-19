"use strict";
var n = r(581070)(),
    o = r(906046)("Object.prototype.toString"),
    i = function (e) {
        return (!n || !e || "object" != typeof e || !(Symbol.toStringTag in e)) && "[object Arguments]" === o(e);
    },
    a = function (e) {
        return (
            !!i(e) ||
            (null !== e &&
                "object" == typeof e &&
                "length" in e &&
                "number" == typeof e.length &&
                e.length >= 0 &&
                "[object Array]" !== o(e) &&
                "callee" in e &&
                "[object Function]" === o(e.callee))
        );
    },
    s = (function () {
        return i(arguments);
    })();
(i.isLegacyArguments = a), (e.exports = s ? i : a);
