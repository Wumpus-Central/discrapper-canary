"use strict";
e.exports = function (e) {
    var t = {},
        r = e.stopCallback;
    return (
        (e.stopCallback = function (e, n, o, i) {
            return !t[o] && !t[i] && r(e, n, o);
        }),
        (e.bindGlobal = function (e, r, n) {
            if ((this.bind(e, r, n), e instanceof Array)) {
                for (var o = 0; o < e.length; o++) t[e[o]] = !0;
                return;
            }
            t[e] = !0;
        }),
        e
    );
};
