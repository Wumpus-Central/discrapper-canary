n.d(t, { r: () => _ });
var i = n(595490),
    r = n.n(i),
    a = n(192379),
    s = n(89540);
function o(e, t) {
    return f(e) || d(e, t) || u(e, t) || l();
}
function l() {
    throw TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
}
function u(e, t) {
    if (e) {
        if ('string' == typeof e) return c(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (('Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n)) return Array.from(e);
        if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t);
    }
}
function c(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
    return i;
}
function d(e, t) {
    var n,
        i,
        r = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
    if (null != r) {
        var a = [],
            s = !0,
            o = !1;
        try {
            for (r = r.call(e); !(s = (n = r.next()).done) && (a.push(n.value), !t || a.length !== t); s = !0);
        } catch (e) {
            (o = !0), (i = e);
        } finally {
            try {
                s || null == r.return || r.return();
            } finally {
                if (o) throw i;
            }
        }
        return a;
    }
}
function f(e) {
    if (Array.isArray(e)) return e;
}
function _(e, t, n) {
    var i = o(
            (0, a.useState)(function () {
                return t(e);
            }),
            2
        ),
        l = i[0],
        u = i[1],
        c = (0, a.useCallback)(
            function () {
                var i = t(e);
                !r()(l, i) && (u(i), n && n());
            },
            [l, e, n]
        );
    return (0, s.L)(c), [l, c];
}
