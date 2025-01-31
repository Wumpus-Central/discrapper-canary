n.d(t, {
    W: () => m,
    y: () => h
});
var i = n(192379),
    r = n(127225),
    a = n(53625);
function s() {
    return (s =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
        }).apply(this, arguments);
}
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
    if ('undefined' != typeof Symbol && Symbol.iterator in Object(e)) {
        var n = [],
            i = !0,
            r = !1,
            a = void 0;
        try {
            for (var s, o = e[Symbol.iterator](); !(i = (s = o.next()).done) && (n.push(s.value), !t || n.length !== t); i = !0);
        } catch (e) {
            (r = !0), (a = e);
        } finally {
            try {
                i || null == o.return || o.return();
            } finally {
                if (r) throw a;
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
        i,
        r = p(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) (n = a[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
    }
    return r;
}
function p(e, t) {
    if (null == e) return {};
    var n,
        i,
        r = {},
        a = Object.keys(e);
    for (i = 0; i < a.length; i++) (n = a[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
    return r;
}
var h = (0, i.createContext)(null),
    m = function (e) {
        var t = e.portal,
            n = _(e, ['portal']),
            l = o((0, i.useState)(null), 2),
            u = l[0],
            c = l[1];
        return i.createElement(h.Provider, { value: null != t ? t : u }, i.createElement(r.W, s({ backend: a.Q }, n)), t ? null : i.createElement('div', { ref: c }));
    };
