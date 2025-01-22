r.d(n, {
    f: function () {
        return p;
    }
});
var i = r(192379),
    a = r(181034),
    o = r(668193);
function s(e, n) {
    return f(e) || d(e, n) || u(e, n) || l();
}
function l() {
    throw TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
}
function u(e, n) {
    if (e) {
        if ('string' == typeof e) return c(e, n);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (('Object' === r && e.constructor && (r = e.constructor.name), 'Map' === r || 'Set' === r)) return Array.from(e);
        if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return c(e, n);
    }
}
function c(e, n) {
    (null == n || n > e.length) && (n = e.length);
    for (var r = 0, i = Array(n); r < n; r++) i[r] = e[r];
    return i;
}
function d(e, n) {
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
function f(e) {
    if (Array.isArray(e)) return e;
}
function p(e) {
    var n = (0, a.N)().getMonitor(),
        r = s((0, o.r)(n, e), 2),
        l = r[0],
        u = r[1];
    return (
        (0, i.useEffect)(function () {
            return n.subscribeToOffsetChange(u);
        }),
        (0, i.useEffect)(function () {
            return n.subscribeToStateChange(u);
        }),
        l
    );
}
