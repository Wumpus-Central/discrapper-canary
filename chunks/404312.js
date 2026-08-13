"use strict";
var t = String.prototype.replace,
    r = /%20/g,
    n = "RFC3986";
e.exports = {
    default: n,
    formatters: {
        RFC1738: function (e) {
            return t.call(e, r, "+");
        },
        RFC3986: function (e) {
            return String(e);
        },
    },
    RFC1738: "RFC1738",
    RFC3986: n,
};
