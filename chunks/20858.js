var i = n(67867),
    r = n(294377),
    a = n(156741),
    s = n(570596),
    o = n(96403),
    l = n(821819),
    u = n(735471),
    c = n(538769),
    d = n(780524),
    f = n(492091),
    _ = n(828596),
    p = String,
    h = r('JSON', 'stringify'),
    m = o(/./.exec),
    g = o(''.charAt),
    E = o(''.charCodeAt),
    v = o(''.replace),
    y = o((1).toString),
    I = /[\uD800-\uDFFF]/g,
    b = /^[\uD800-\uDBFF]$/,
    T = /^[\uDC00-\uDFFF]$/,
    S =
        !_ ||
        l(function () {
            var e = r('Symbol')('stringify detection');
            return '[null]' !== h([e]) || '{}' !== h({ a: e }) || '{}' !== h(Object(e));
        }),
    A = l(function () {
        return '"\uDF06\uD834"' !== h('\uDF06\uD834') || '"\uDEAD"' !== h('\uDEAD');
    }),
    N = function (e, t) {
        var n = d(arguments),
            i = f(t);
        if (!(!u(i) && (void 0 === e || c(e))))
            return (
                (n[1] = function (e, t) {
                    if ((u(i) && (t = s(i, this, p(e), t)), !c(t))) return t;
                }),
                a(h, null, n)
            );
    },
    C = function (e, t, n) {
        var i = g(n, t - 1),
            r = g(n, t + 1);
        return (m(b, e) && !m(T, r)) || (m(T, e) && !m(b, i)) ? '\\u' + y(E(e, 0), 16) : e;
    };
h &&
    i(
        {
            target: 'JSON',
            stat: !0,
            arity: 3,
            forced: S || A
        },
        {
            stringify: function (e, t, n) {
                var i = d(arguments),
                    r = a(S ? N : h, null, i);
                return A && 'string' == typeof r ? v(r, I, C) : r;
            }
        }
    );
