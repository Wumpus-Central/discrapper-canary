var r = n(557939),
    i = n(230606),
    a = n(985848),
    s = n(446474),
    o = n(410323),
    l = n(503628),
    c = n(339626),
    u = n(837082),
    d = n(192819),
    f = n(965072),
    p = n(812294),
    _ = String,
    h = i("JSON", "stringify"),
    m = o(/./.exec),
    g = o("".charAt),
    E = o("".charCodeAt),
    b = o("".replace),
    y = o((1).toString),
    O = /[\uD800-\uDFFF]/g,
    A = /^[\uD800-\uDBFF]$/,
    v = /^[\uDC00-\uDFFF]$/,
    S =
        !p ||
        l(function () {
            var e = i("Symbol")("stringify detection");
            return "[null]" !== h([e]) || "{}" !== h({ a: e }) || "{}" !== h(Object(e));
        }),
    I = l(function () {
        return '"\\udf06\\ud834"' !== h("\uDF06\uD834") || '"\\udead"' !== h("\uDEAD");
    }),
    T = function (e, t) {
        var n = d(arguments),
            r = f(t);
        if (!(!c(r) && (void 0 === e || u(e))))
            return (
                (n[1] = function (e, t) {
                    if ((c(r) && (t = s(r, this, _(e), t)), !u(t))) return t;
                }),
                a(h, null, n)
            );
    },
    C = function (e, t, n) {
        var r = g(n, t - 1),
            i = g(n, t + 1);
        return (m(A, e) && !m(v, i)) || (m(v, e) && !m(A, r)) ? "\\u" + y(E(e, 0), 16) : e;
    };
h &&
    r(
        {
            target: "JSON",
            stat: !0,
            arity: 3,
            forced: S || I,
        },
        {
            stringify: function (e, t, n) {
                var r = d(arguments),
                    i = a(S ? T : h, null, r);
                return I && "string" == typeof i ? b(i, O, C) : i;
            },
        },
    );
