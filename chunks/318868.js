"use strict";
var r = n(529030),
    a = n(798325),
    o = n(794779);
e.exports = function (e) {
    for (
        var t = r(this),
            n = o(t),
            i = arguments.length,
            s = a(i > 1 ? arguments[1] : void 0, n),
            l = i > 2 ? arguments[2] : void 0,
            c = void 0 === l ? n : a(l, n);
        c > s;
    )
        t[s++] = e;
    return t;
};
