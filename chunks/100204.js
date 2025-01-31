n.d(t, { U: () => a });
var r = n(89540),
    i = n(668193);
function o(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
}
function a(e, t, n) {
    var a,
        u =
            (function (e) {
                if (Array.isArray(e)) return e;
            })((a = (0, i.r)(e, t, n))) ||
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
            })(a, 2) ||
            (function (e, t) {
                if (e) {
                    if ('string' == typeof e) return o(e, 2);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if (('Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n)) return Array.from(e);
                    if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t);
                }
            })(a, 2) ||
            (function () {
                throw TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
            })(),
        c = u[0],
        s = u[1];
    return (
        (0, r.L)(
            function () {
                var t = e.getHandlerId();
                if (null != t) return e.subscribeToStateChange(s, { handlerIds: [t] });
            },
            [e, s]
        ),
        c
    );
}
