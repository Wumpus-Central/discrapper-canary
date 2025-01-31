n.d(t, { q: () => s });
var r = n(556841),
    i = n(89540),
    o = n(732341),
    a = n(181034),
    u = n(512440);
function c(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
}
function s(e, t, n) {
    var s = (0, a.N)(),
        l = (0, o.s)(e, t, n),
        f = (0, u.E)(e);
    (0, i.L)(
        function () {
            if (null != f) {
                var e,
                    i =
                        (function (e) {
                            if (Array.isArray(e)) return e;
                        })((e = (0, r.w)(f, l, s))) ||
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
            }
        },
        [s, t, n, l, f]
    );
}
