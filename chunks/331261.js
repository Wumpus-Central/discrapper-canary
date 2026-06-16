"use strict";
var n = e(834647),
    o = e(683570),
    s = e(421236),
    i = e(664886),
    u = e(675879),
    c = e(486816),
    a = e(309270),
    f = e(389150),
    p = e(596479),
    l = e(22468),
    v = e(875746),
    y = String,
    h = o("JSON", "stringify"),
    x = u(/./.exec),
    d = u("".charAt),
    g = u("".charCodeAt),
    b = u("".replace),
    m = u((1).toString),
    S = /[\uD800-\uDFFF]/g,
    w = /^[\uD800-\uDBFF]$/,
    O = /^[\uDC00-\uDFFF]$/,
    j =
        !v ||
        c(function () {
            var t = o("Symbol")("stringify detection");
            return "[null]" !== h([t]) || "{}" !== h({ a: t }) || "{}" !== h(Object(t));
        }),
    A = c(function () {
        return '"\\udf06\\ud834"' !== h("\uDF06\uD834") || '"\\udead"' !== h("\uDEAD");
    }),
    E = function (t, r) {
        var e = p(arguments),
            n = l(r);
        if (!(!a(n) && (void 0 === t || f(t))))
            return (
                (e[1] = function (t, r) {
                    if ((a(n) && (r = i(n, this, y(t), r)), !f(r))) return r;
                }),
                s(h, null, e)
            );
    },
    T = function (t, r, e) {
        var n = d(e, r - 1),
            o = d(e, r + 1);
        return (x(w, t) && !x(O, o)) || (x(O, t) && !x(w, n)) ? "\\u" + m(g(t, 0), 16) : t;
    };
h &&
    n(
        { target: "JSON", stat: !0, arity: 3, forced: j || A },
        {
            stringify: function (t, r, e) {
                var n = p(arguments),
                    o = s(j ? E : h, null, n);
                return A && "string" == typeof o ? b(o, S, T) : o;
            },
        },
    );
