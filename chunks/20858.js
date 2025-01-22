var i = r(67867),
    a = r(294377),
    o = r(156741),
    s = r(570596),
    l = r(96403),
    u = r(821819),
    c = r(735471),
    d = r(538769),
    f = r(780524),
    p = r(492091),
    h = r(828596),
    _ = String,
    m = a('JSON', 'stringify'),
    g = l(/./.exec),
    E = l(''.charAt),
    v = l(''.charCodeAt),
    y = l(''.replace),
    b = l((1).toString),
    I = /[\uD800-\uDFFF]/g,
    T = /^[\uD800-\uDBFF]$/,
    S = /^[\uDC00-\uDFFF]$/,
    A =
        !h ||
        u(function () {
            var e = a('Symbol')('stringify detection');
            return '[null]' !== m([e]) || '{}' !== m({ a: e }) || '{}' !== m(Object(e));
        }),
    C = u(function () {
        return '"\uDF06\uD834"' !== m('\uDF06\uD834') || '"\uDEAD"' !== m('\uDEAD');
    }),
    N = function (e, n) {
        var r = f(arguments),
            i = p(n);
        if (!(!c(i) && (void 0 === e || d(e))))
            return (
                (r[1] = function (e, n) {
                    if ((c(i) && (n = s(i, this, _(e), n)), !d(n))) return n;
                }),
                o(m, null, r)
            );
    },
    R = function (e, n, r) {
        var i = E(r, n - 1),
            a = E(r, n + 1);
        return (g(T, e) && !g(S, a)) || (g(S, e) && !g(T, i)) ? '\\u' + b(v(e, 0), 16) : e;
    };
m &&
    i(
        {
            target: 'JSON',
            stat: !0,
            arity: 3,
            forced: A || C
        },
        {
            stringify: function (e, n, r) {
                var i = f(arguments),
                    a = o(A ? N : m, null, i);
                return C && 'string' == typeof a ? y(a, I, R) : a;
            }
        }
    );
