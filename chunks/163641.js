var e = r(154028),
    o = r(77025),
    i = r(436207),
    u = r(568033),
    c = r(769827),
    a = r(190289),
    f = r(316096),
    s = r(176682),
    l = r(759319),
    p = r(179351),
    d = r(903225),
    _ = r(507604),
    h = r(511696);
t.exports = function (t, n, r, y) {
    var b = 'stackTraceLimit',
        g = y ? 2 : 1,
        v = t.split('.'),
        w = v[v.length - 1],
        m = e.apply(null, v);
    if (m) {
        var x = m.prototype;
        if ((!h && o(x, 'cause') && delete x.cause, !r)) return m;
        var A = e('Error'),
            O = n(function (t, n) {
                var r = l(y ? n : t, void 0),
                    e = y ? new m(t) : new m();
                return void 0 !== r && i(e, 'message', r), d(e, O, e.stack, 2), this && u(x, this) && s(e, this, O), arguments.length > g && p(e, arguments[g]), e;
            });
        if (((O.prototype = x), 'Error' !== w ? (c ? c(O, A) : a(O, A, { name: !0 })) : _ && b in m && (f(O, m, b), f(O, m, 'prepareStackTrace')), a(O, m), !h))
            try {
                x.name !== w && i(x, 'name', w), (x.constructor = O);
            } catch (t) {}
        return O;
    }
};
