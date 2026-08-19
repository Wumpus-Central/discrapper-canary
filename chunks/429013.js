"use strict";
var n = r(906046),
    o = r(486335),
    i = n("RegExp.prototype.exec"),
    a = r(741623);
e.exports = function (e) {
    if (!o(e)) throw new a("`regex` must be a RegExp");
    return function (t) {
        return null !== i(e, t);
    };
};
