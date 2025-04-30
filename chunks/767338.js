n.d(t, {
    W: () => m,
    y: () => h
});
var r = n(192379),
    i = n(127225),
    o = n(53625);
function a() {
    return (a =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function s(e, t) {
    return f(e) || d(e, t) || c(e, t) || l();
}
function l() {
    throw TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
}
function c(e, t) {
    if (e) {
        if ('string' == typeof e) return u(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (('Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n)) return Array.from(e);
        if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t);
    }
}
function u(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
}
function d(e, t) {
    if ('undefined' != typeof Symbol && Symbol.iterator in Object(e)) {
        var n = [],
            r = !0,
            i = !1,
            o = void 0;
        try {
            for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
        } catch (e) {
            (i = !0), (o = e);
        } finally {
            try {
                r || null == s.return || s.return();
            } finally {
                if (i) throw o;
            }
        }
        return n;
    }
}
function f(e) {
    if (Array.isArray(e)) return e;
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = p(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
var h = (0, r.createContext)(null),
    m = function (e) {
        var t = e.portal,
            n = _(e, ['portal']),
            l = s((0, r.useState)(null), 2),
            c = l[0],
            u = l[1];
        return r.createElement(h.Provider, { value: null != t ? t : c }, r.createElement(i.W, a({ backend: o.Q }, n)), t ? null : r.createElement('div', { ref: u }));
    };
