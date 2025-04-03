var e = n(67867),
    o = n(294377),
    i = n(156741),
    u = n(570596),
    s = n(96403),
    c = n(821819),
    f = n(735471),
    a = n(538769),
    p = n(780524),
    v = n(492091),
    l = n(828596),
    y = String,
    h = o('JSON', 'stringify'),
    x = s(/./.exec),
    d = s(''.charAt),
    g = s(''.charCodeAt),
    b = s(''.replace),
    m = s((1).toString),
    S = /[\uD800-\uDFFF]/g,
    w = /^[\uD800-\uDBFF]$/,
    O = /^[\uDC00-\uDFFF]$/,
    j =
        !l ||
        c(function () {
            var t = o('Symbol')('stringify detection');
            return '[null]' !== h([t]) || '{}' !== h({ a: t }) || '{}' !== h(Object(t));
        }),
    A = c(function () {
        return '"\uDF06\uD834"' !== h('\uDF06\uD834') || '"\uDEAD"' !== h('\uDEAD');
    }),
    E = function (t, r) {
        var n = p(arguments),
            e = v(r);
        if (!(!f(e) && (void 0 === t || a(t))))
            return (
                (n[1] = function (t, r) {
                    if ((f(e) && (r = u(e, this, y(t), r)), !a(r))) return r;
                }),
                i(h, null, n)
            );
    },
    P = function (t, r, n) {
        var e = d(n, r - 1),
            o = d(n, r + 1);
        return (x(w, t) && !x(O, o)) || (x(O, t) && !x(w, e)) ? '\\u' + m(g(t, 0), 16) : t;
    };
h &&
    e(
        {
            target: 'JSON',
            stat: !0,
            arity: 3,
            forced: j || A
        },
        {
            stringify: function (t, r, n) {
                var e = p(arguments),
                    o = i(j ? E : h, null, e);
                return A && 'string' == typeof o ? b(o, S, P) : o;
            }
        }
    );
