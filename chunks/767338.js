r.d(n, {
    W: function () {
        return g;
    },
    y: function () {
        return m;
    }
});
var i = r(192379),
    a = r(127225),
    o = r(53625);
function s() {
    return (s =
        Object.assign ||
        function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
            }
            return e;
        }).apply(this, arguments);
}
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
    if ('undefined' != typeof Symbol && Symbol.iterator in Object(e)) {
        var r = [],
            i = !0,
            a = !1,
            o = void 0;
        try {
            for (var s, l = e[Symbol.iterator](); !(i = (s = l.next()).done) && (r.push(s.value), !n || r.length !== n); i = !0);
        } catch (e) {
            (a = !0), (o = e);
        } finally {
            try {
                !i && null != l.return && l.return();
            } finally {
                if (a) throw o;
            }
        }
        return r;
    }
}
function p(e) {
    if (Array.isArray(e)) return e;
}
function h(e, n) {
    if (null == e) return {};
    var r,
        i,
        a = _(e, n);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (i = 0; i < o.length; i++) {
            if (((r = o[i]), !(n.indexOf(r) >= 0))) Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        }
    }
    return a;
}
function _(e, n) {
    if (null == e) return {};
    var r,
        i,
        a = {},
        o = Object.keys(e);
    for (i = 0; i < o.length; i++) (r = o[i]), !(n.indexOf(r) >= 0) && (a[r] = e[r]);
    return a;
}
var m = (0, i.createContext)(null),
    g = function (e) {
        var n = e.portal,
            r = h(e, ['portal']),
            u = l((0, i.useState)(null), 2),
            c = u[0],
            d = u[1];
        return i.createElement(m.Provider, { value: null != n ? n : c }, i.createElement(a.W, s({ backend: o.Q }, r)), n ? null : i.createElement('div', { ref: d }));
    };
