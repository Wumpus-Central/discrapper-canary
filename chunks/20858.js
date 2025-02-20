var r = n(67867),
    i = n(294377),
    o = n(156741),
    a = n(570596),
    s = n(96403),
    l = n(821819),
    c = n(735471),
    u = n(538769),
    d = n(780524),
    f = n(492091),
    p = n(828596),
    _ = String,
    h = i('JSON', 'stringify'),
    m = s(/./.exec),
    g = s(''.charAt),
    E = s(''.charCodeAt),
    v = s(''.replace),
    b = s((1).toString),
    y = /[\uD800-\uDFFF]/g,
    O = /^[\uD800-\uDBFF]$/,
    S = /^[\uDC00-\uDFFF]$/,
    I =
        !p ||
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
                    if ((c(r) && (t = a(r, this, _(e), t)), !u(t))) return t;
                }),
                o(h, null, n)
            );
    },
    A = function (e, t, n) {
        var r = g(n, t - 1),
            i = g(n, t + 1);
        return (m(O, e) && !m(S, i)) || (m(S, e) && !m(O, r)) ? '\\u' + b(E(e, 0), 16) : e;
    };
h &&
    r(
        {
            target: 'JSON',
            stat: !0,
            arity: 3,
            forced: I || T
        },
        {
            stringify: function (e, t, n) {
                var r = d(arguments),
                    i = o(I ? N : h, null, r);
                return T && 'string' == typeof i ? v(i, y, A) : i;
            }
        }
    );
