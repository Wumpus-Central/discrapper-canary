var r = n(98405),
    i = n(154028),
    a = n(636881),
    o = n(580983),
    s = n(46015),
    l = n(621523),
    c = n(880181),
    u = n(661970),
    d = n(992174),
    f = n(380297),
    p = n(504290),
    _ = String,
    m = i("JSON", "stringify"),
    h = s(/./.exec),
    g = s("".charAt),
    E = s("".charCodeAt),
    b = s("".replace),
    y = s((1).toString),
    O = /[\uD800-\uDFFF]/g,
    v = /^[\uD800-\uDBFF]$/,
    S = /^[\uDC00-\uDFFF]$/,
    I =
        !p ||
        l(function () {
            var e = i("Symbol")("stringify detection");
            return "[null]" !== m([e]) || "{}" !== m({ a: e }) || "{}" !== m(Object(e));
        }),
    T = l(function () {
        return '"\uDF06\uD834"' !== m("\uDF06\uD834") || '"\uDEAD"' !== m("\uDEAD");
    }),
    A = function (e, t) {
        var n = d(arguments),
            r = f(t);
        if (!(!c(r) && (void 0 === e || u(e))))
            return (
                (n[1] = function (e, t) {
                    if ((c(r) && (t = o(r, this, _(e), t)), !u(t))) return t;
                }),
                a(m, null, n)
            );
    },
    C = function (e, t, n) {
        var r = g(n, t - 1),
            i = g(n, t + 1);
        return (h(v, e) && !h(S, i)) || (h(S, e) && !h(v, r)) ? "\\u" + y(E(e, 0), 16) : e;
    };
m &&
    r(
        {
            target: "JSON",
            stat: !0,
            arity: 3,
            forced: I || T,
        },
        {
            stringify: function (e, t, n) {
                var r = d(arguments),
                    i = a(I ? A : m, null, r);
                return T && "string" == typeof i ? b(i, O, C) : i;
            },
        },
    );
