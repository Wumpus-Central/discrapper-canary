"use strict";
var r = n(860511),
    i = n(339626),
    a = function (e) {
        return i(e) ? e : void 0;
    };
e.exports = function (e, t) {
    return arguments.length < 2 ? a(r[e]) : r[e] && r[e][t];
};
