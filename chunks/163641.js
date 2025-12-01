var r = n(154028),
    i = n(77025),
    a = n(436207),
    o = n(568033),
    s = n(769827),
    l = n(190289),
    c = n(316096),
    u = n(176682),
    d = n(759319),
    f = n(179351),
    p = n(903225),
    _ = n(507604),
    m = n(511696);
e.exports = function (e, t, n, h) {
    var g = "stackTraceLimit",
        E = h ? 2 : 1,
        b = e.split("."),
        y = b[b.length - 1],
        O = r.apply(null, b);
    if (O) {
        var v = O.prototype;
        if ((!m && i(v, "cause") && delete v.cause, !n)) return O;
        var S = r("Error"),
            I = t(function (e, t) {
                var n = d(h ? t : e, void 0),
                    r = h ? new O(e) : new O();
                return (
                    void 0 !== n && a(r, "message", n),
                    p(r, I, r.stack, 2),
                    this && o(v, this) && u(r, this, I),
                    arguments.length > E && f(r, arguments[E]),
                    r
                );
            });
        if (
            ((I.prototype = v),
            "Error" !== y
                ? s
                    ? s(I, S)
                    : l(I, S, { name: !0 })
                : _ && g in O && (c(I, O, g), c(I, O, "prepareStackTrace")),
            l(I, O),
            !m)
        )
            try {
                v.name !== y && a(v, "name", y), (v.constructor = I);
            } catch (e) {}
        return I;
    }
};
