n.d(t, { E: () => s });
var r = n(556841),
    i = n(181034),
    o = n(89540),
    a = n(425722),
    u = n(530056);
function c(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
}
function s(e, t, n) {
    var s = (0, i.N)(),
        l = (0, u.W)(e, t),
        f = (0, a.b)(e);
    (0, o.L)(
        function () {
            var e,
                i =
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })((e = (0, r.n)(f, l, s))) ||
                    (function (e, t) {
                        var n,
                            r,
                            i = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                        if (null != i) {
                            var o = [],
                                a = !0,
                                u = !1;
                            try {
                                for (i = i.call(e); !(a = (n = i.next()).done) && (o.push(n.value), o.length !== t); a = !0);
                            } catch (e) {
                                (u = !0), (r = e);
                            } finally {
                                try {
                                    a || null == i.return || i.return();
                                } finally {
                                    if (u) throw r;
                                }
                            }
                            return o;
                        }
                    })(e, 2) ||
                    (function (e, t) {
                        if (e) {
                            if ('string' == typeof e) return c(e, 2);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            if (('Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n)) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t);
                        }
                    })(e, 2) ||
                    (function () {
                        throw TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                    })(),
                o = i[0],
                a = i[1];
            return t.receiveHandlerId(o), n.receiveHandlerId(o), a;
        },
        [
            s,
            t,
            l,
            n,
            f
                .map(function (e) {
                    return e.toString();
                })
                .join('|')
        ]
    );
}
