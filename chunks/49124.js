var e = r(98405),
    o = r(154028),
    i = r(636881),
    u = r(580983),
    c = r(46015),
    a = r(621523),
    f = r(880181),
    s = r(661970),
    l = r(992174),
    p = r(380297),
    d = r(504290),
    _ = String,
    h = o('JSON', 'stringify'),
    y = c(/./.exec),
    b = c(''.charAt),
    g = c(''.charCodeAt),
    v = c(''.replace),
    w = c((1).toString),
    m = /[\uD800-\uDFFF]/g,
    x = /^[\uD800-\uDBFF]$/,
    A = /^[\uDC00-\uDFFF]$/,
    O =
        !d ||
        a(function () {
            var t = o('Symbol')('stringify detection');
            return '[null]' !== h([t]) || '{}' !== h({ a: t }) || '{}' !== h(Object(t));
        }),
    T = a(function () {
        return '"\uDF06\uD834"' !== h('\uDF06\uD834') || '"\uDEAD"' !== h('\uDEAD');
    }),
    E = function (t, n) {
        var r = l(arguments),
            e = p(n);
        if (!(!f(e) && (void 0 === t || s(t))))
            return (
                (r[1] = function (t, n) {
                    if ((f(e) && (n = u(e, this, _(t), n)), !s(n))) return n;
                }),
                i(h, null, r)
            );
    },
    S = function (t, n, r) {
        var e = b(r, n - 1),
            o = b(r, n + 1);
        return (y(x, t) && !y(A, o)) || (y(A, t) && !y(x, e)) ? '\\u' + w(g(t, 0), 16) : t;
    };
h &&
    e(
        {
            target: 'JSON',
            stat: !0,
            arity: 3,
            forced: O || T
        },
        {
            stringify: function (t, n, r) {
                var e = l(arguments),
                    o = i(O ? E : h, null, e);
                return T && 'string' == typeof o ? v(o, m, S) : o;
            }
        }
    );
