"use strict";
var i = n(906046),
    r = n(486335),
    s = i("RegExp.prototype.exec"),
    a = n(741623);
e.exports = function (e) {
    if (!r(e)) throw new a("`regex` must be a RegExp");
    return function (t) {
        return null !== s(e, t);
    };
};
