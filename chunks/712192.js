"use strict";
var n = e(675879),
    o = e(486816),
    s = e(309270),
    i = e(781544),
    u = e(683570),
    c = e(84475),
    a = function () {},
    f = u("Reflect", "construct"),
    p = /^\s*(?:class|function)\b/,
    l = n(p.exec),
    v = !p.test(a),
    y = function (t) {
        if (!s(t)) return !1;
        try {
            return f(a, [], t), !0;
        } catch (t) {
            return !1;
        }
    },
    h = function (t) {
        if (!s(t)) return !1;
        switch (i(t)) {
            case "AsyncFunction":
            case "GeneratorFunction":
            case "AsyncGeneratorFunction":
                return !1;
        }
        try {
            return v || !!l(p, c(t));
        } catch (t) {
            return !0;
        }
    };
(h.sham = !0),
    (t.exports =
        !f ||
        o(function () {
            var t;
            return (
                y(y.call) ||
                !y(Object) ||
                !y(function () {
                    t = !0;
                }) ||
                t
            );
        })
            ? h
            : y);
