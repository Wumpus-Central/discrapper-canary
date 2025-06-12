var r = n(154028),
    i = n(77025),
    a = n(436207),
    o = n(568033),
    s = n(769827),
    l = n(190289),
    c = n(316096),
    u = n(176682),
    d = n(759319),
    _ = n(179351),
    f = n(903225),
    p = n(507604),
    h = n(511696);
e.exports = function (e, t, n, m) {
    var g = 'stackTraceLimit',
        E = m ? 2 : 1,
        b = e.split('.'),
        y = b[b.length - 1],
        O = r.apply(null, b);
    if (O) {
        var v = O.prototype;
        if ((!h && i(v, 'cause') && delete v.cause, !n)) return O;
        var I = r('Error'),
            T = t(function (e, t) {
                var n = d(m ? t : e, void 0),
                    r = m ? new O(e) : new O();
                return void 0 !== n && a(r, 'message', n), f(r, T, r.stack, 2), this && o(v, this) && u(r, this, T), arguments.length > E && _(r, arguments[E]), r;
            });
        if (((T.prototype = v), 'Error' !== y ? (s ? s(T, I) : l(T, I, { name: !0 })) : p && g in O && (c(T, O, g), c(T, O, 'prepareStackTrace')), l(T, O), !h))
            try {
                v.name !== y && a(v, 'name', y), (v.constructor = T);
            } catch (e) {}
        return T;
    }
};
