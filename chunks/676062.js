n.d(t, { f: () => f });
var i = n(192379),
    r = n(181034),
    a = n(668193);
function s(e, t) {
    return d(e) || c(e, t) || l(e, t) || o();
}
function o() {
    throw TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
}
function l(e, t) {
    if (e) {
        if ('string' == typeof e) return u(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (('Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n)) return Array.from(e);
        if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t);
    }
}
function u(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
    return i;
}
function c(e, t) {
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
function d(e) {
    if (Array.isArray(e)) return e;
}
function f(e) {
    var t = (0, r.N)().getMonitor(),
        n = s((0, a.r)(t, e), 2),
        o = n[0],
        l = n[1];
    return (
        (0, i.useEffect)(function () {
            return t.subscribeToOffsetChange(l);
        }),
        (0, i.useEffect)(function () {
            return t.subscribeToStateChange(l);
        }),
        o
    );
}
