var r = n(147018),
    i = n(545576),
    o = n(197187),
    a = n(926515),
    s = n(581031),
    l = n(936940),
    c = n(354848),
    u = n(323979),
    d = n(50754),
    f = n(109833),
    _ = n(400957),
    p = String,
    h = i('JSON', 'stringify'),
    m = s(/./.exec),
    g = s(''.charAt),
    E = s(''.charCodeAt),
    b = s(''.replace),
    y = s((1).toString),
    v = /[\uD800-\uDFFF]/g,
    O = /^[\uD800-\uDBFF]$/,
    I = /^[\uDC00-\uDFFF]$/,
    S =
        !_ ||
        l(function () {
            var e = i('Symbol')('stringify detection');
            return '[null]' !== h([e]) || '{}' !== h({ a: e }) || '{}' !== h(Object(e));
        }),
    T = l(function () {
        return '"\uDF06\uD834"' !== h('\uDF06\uD834') || '"\uDEAD"' !== h('\uDEAD');
    }),
    N = function (e, t) {
        var n = d(arguments),
            r = f(t);
        if (!(!c(r) && (void 0 === e || u(e))))
            return (
                (n[1] = function (e, t) {
                    if ((c(r) && (t = a(r, this, p(e), t)), !u(t))) return t;
                }),
                o(h, null, n)
            );
    },
    A = function (e, t, n) {
        var r = g(n, t - 1),
            i = g(n, t + 1);
        return (m(O, e) && !m(I, i)) || (m(I, e) && !m(O, r)) ? '\\u' + y(E(e, 0), 16) : e;
    };
h &&
    r(
        {
            target: 'JSON',
            stat: !0,
            arity: 3,
            forced: S || T
        },
        {
            stringify: function (e, t, n) {
                var r = d(arguments),
                    i = o(S ? N : h, null, r);
                return T && 'string' == typeof i ? b(i, v, A) : i;
            }
        }
    );
