var r = n(154028),
    i = n(77025),
    o = n(436207),
    a = n(568033),
    s = n(769827),
    l = n(190289),
    c = n(316096),
    u = n(176682),
    d = n(759319),
    f = n(179351),
    _ = n(903225),
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
            S = t(function (e, t) {
                var n = d(m ? t : e, void 0),
                    r = m ? new O(e) : new O();
                return void 0 !== n && o(r, 'message', n), _(r, S, r.stack, 2), this && a(v, this) && u(r, this, S), arguments.length > E && f(r, arguments[E]), r;
            });
        if (((S.prototype = v), 'Error' !== y ? (s ? s(S, I) : l(S, I, { name: !0 })) : p && g in O && (c(S, O, g), c(S, O, 'prepareStackTrace')), l(S, O), !h))
            try {
                v.name !== y && o(v, 'name', y), (v.constructor = S);
            } catch (e) {}
        return S;
    }
};
