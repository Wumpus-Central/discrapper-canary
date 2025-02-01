var r = i(545576),
    n = i(740362),
    a = i(251069),
    s = i(838957),
    o = i(276321),
    u = i(381740),
    c = i(504559),
    h = i(95948),
    l = i(892725),
    f = i(668788),
    d = i(154154),
    m = i(325008),
    v = i(992051);
t.exports = function (t, e, i, p) {
    var g = 'stackTraceLimit',
        y = p ? 2 : 1,
        b = t.split('.'),
        w = b[b.length - 1],
        I = r.apply(null, b);
    if (I) {
        var E = I.prototype;
        if ((!v && n(E, 'cause') && delete E.cause, !i)) return I;
        var A = r('Error'),
            k = e(function (t, e) {
                var i = l(p ? e : t, void 0),
                    r = p ? new I(t) : new I();
                return void 0 !== i && a(r, 'message', i), d(r, k, r.stack, 2), this && s(E, this) && h(r, this, k), arguments.length > y && f(r, arguments[y]), r;
            });
        if (((k.prototype = E), 'Error' !== w ? (o ? o(k, A) : u(k, A, { name: !0 })) : m && g in I && (c(k, I, g), c(k, I, 'prepareStackTrace')), u(k, I), !v))
            try {
                E.name !== w && a(E, 'name', w), (E.constructor = k);
            } catch (t) {}
        return k;
    }
};
