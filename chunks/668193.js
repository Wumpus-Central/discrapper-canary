r.d(n, {
    r: function () {
        return h;
    }
});
var i = r(595490),
    a = r.n(i),
    o = r(192379),
    s = r(89540);
function l(e, n) {
    return p(e) || f(e, n) || c(e, n) || u();
}
function u() {
    throw TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
}
function c(e, n) {
    if (e) {
        if ('string' == typeof e) return d(e, n);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (('Object' === r && e.constructor && (r = e.constructor.name), 'Map' === r || 'Set' === r)) return Array.from(e);
        if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return d(e, n);
    }
}
function d(e, n) {
    (null == n || n > e.length) && (n = e.length);
    for (var r = 0, i = Array(n); r < n; r++) i[r] = e[r];
    return i;
}
function f(e, n) {
    var r,
        i,
        a = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
    if (null != a) {
        var o = [],
            s = !0,
            l = !1;
        try {
            for (a = a.call(e); !(s = (r = a.next()).done) && (o.push(r.value), !n || o.length !== n); s = !0);
        } catch (e) {
            (l = !0), (i = e);
        } finally {
            try {
                !s && null != a.return && a.return();
            } finally {
                if (l) throw i;
            }
        }
        return o;
    }
}
function p(e) {
    if (Array.isArray(e)) return e;
}
function h(e, n, r) {
    var i = l(
            (0, o.useState)(function () {
                return n(e);
            }),
            2
        ),
        u = i[0],
        c = i[1],
        d = (0, o.useCallback)(
            function () {
                var i = n(e);
                !a()(u, i) && (c(i), r && r());
            },
            [u, e, r]
        );
    return (0, s.L)(d), [u, d];
}
