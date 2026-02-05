"use strict";
var r = n(241091),
    a = n(155084),
    o = n(529030),
    i = n(554987);
e.exports = function (e, t, n) {
    return function (s) {
        var l = o(s),
            c = arguments.length,
            u = c > 1 ? arguments[1] : void 0,
            d = void 0 !== u,
            p = d ? r(u, c > 2 ? arguments[2] : void 0) : void 0,
            h = new e(),
            f = 0;
        return (
            i(l, function (e) {
                var r = d ? p(e, f++) : e;
                n ? t(h, a(r)[0], r[1]) : t(h, r);
            }),
            h
        );
    };
};
