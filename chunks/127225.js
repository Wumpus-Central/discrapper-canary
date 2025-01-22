r.d(n, {
    W: function () {
        return v;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(468204),
    s = r(348288),
    l = ['children'];
function u(e, n) {
    return h(e) || p(e, n) || d(e, n) || c();
}
function c() {
    throw TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
}
function d(e, n) {
    if (e) {
        if ('string' == typeof e) return f(e, n);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (('Object' === r && e.constructor && (r = e.constructor.name), 'Map' === r || 'Set' === r)) return Array.from(e);
        if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return f(e, n);
    }
}
function f(e, n) {
    (null == n || n > e.length) && (n = e.length);
    for (var r = 0, i = Array(n); r < n; r++) i[r] = e[r];
    return i;
}
function p(e, n) {
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
function h(e) {
    if (Array.isArray(e)) return e;
}
function _(e, n) {
    if (null == e) return {};
    var r,
        i,
        a = m(e, n);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (i = 0; i < o.length; i++) {
            if (((r = o[i]), !(n.indexOf(r) >= 0))) Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        }
    }
    return a;
}
function m(e, n) {
    if (null == e) return {};
    var r,
        i,
        a = {},
        o = Object.keys(e);
    for (i = 0; i < o.length; i++) (r = o[i]), !(n.indexOf(r) >= 0) && (a[r] = e[r]);
    return a;
}
var g = 0,
    E = Symbol.for('__REACT_DND_CONTEXT_INSTANCE__'),
    v = (0, a.memo)(function (e) {
        var n = e.children,
            r = u(y(_(e, l)), 2),
            o = r[0],
            c = r[1];
        return (
            (0, a.useEffect)(function () {
                if (c) {
                    var e = I();
                    return (
                        ++g,
                        function () {
                            0 == --g && (e[E] = null);
                        }
                    );
                }
            }, []),
            (0, i.jsx)(s.L.Provider, Object.assign({ value: o }, { children: n }), void 0)
        );
    });
function y(e) {
    return 'manager' in e ? [{ dragDropManager: e.manager }, !1] : [b(e.backend, e.context, e.options, e.debugMode), !e.context];
}
function b(e) {
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I(),
        r = arguments.length > 2 ? arguments[2] : void 0,
        i = arguments.length > 3 ? arguments[3] : void 0,
        a = n;
    return !a[E] && (a[E] = { dragDropManager: (0, o.i)(e, n, r, i) }), a[E];
}
function I() {
    return void 0 !== r.g ? r.g : window;
}
