"use strict";
e.exports = function (e) {
    var t = {},
        r = e.stopCallback;
    return (
        (e.stopCallback = function (e, n, i, o) {
            return !t[i] && !t[o] && r(e, n, i);
        }),
        (e.bindGlobal = function (e, r, n) {
            if ((this.bind(e, r, n), e instanceof Array)) {
                for (var i = 0; i < e.length; i++) t[e[i]] = !0;
                return;
            }
            t[e] = !0;
        }),
        e
    );
};
