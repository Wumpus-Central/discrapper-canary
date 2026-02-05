"use strict";
var n = e(61748)("iterator"),
    o = !1;
try {
    var s = 0,
        i = {
            next: function () {
                return { done: !!s++ };
            },
            return: function () {
                o = !0;
            },
        };
    (i[n] = function () {
        return this;
    }),
        Array.from(i, function () {
            throw 2;
        });
} catch (t) {}
t.exports = function (t, r) {
    try {
        if (!r && !o) return !1;
    } catch (t) {
        return !1;
    }
    var e = !1;
    try {
        var s = {};
        (s[n] = function () {
            return {
                next: function () {
                    return { done: (e = !0) };
                },
            };
        }),
            t(s);
    } catch (t) {}
    return e;
};
