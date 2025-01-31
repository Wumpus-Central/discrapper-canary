n.d(t, { W: () => E });
var i = n(200651),
    r = n(192379),
    a = n(468204),
    s = n(348288),
    o = ['children'];
function l(e, t) {
    return _(e) || f(e, t) || c(e, t) || u();
}
function u() {
    throw TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
}
function c(e, t) {
    if (e) {
        if ('string' == typeof e) return d(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (('Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n)) return Array.from(e);
        if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t);
    }
}
function d(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
    return i;
}
function f(e, t) {
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
function _(e) {
    if (Array.isArray(e)) return e;
}
function p(e, t) {
    if (null == e) return {};
    var n,
        i,
        r = h(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) (n = a[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
    }
    return r;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        i,
        r = {},
        a = Object.keys(e);
    for (i = 0; i < a.length; i++) (n = a[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
    return r;
}
var m = 0,
    g = Symbol.for('__REACT_DND_CONTEXT_INSTANCE__'),
    E = (0, r.memo)(function (e) {
        var t = e.children,
            n = l(v(p(e, o)), 2),
            a = n[0],
            u = n[1];
        return (
            (0, r.useEffect)(function () {
                if (u) {
                    var e = I();
                    return (
                        ++m,
                        function () {
                            0 == --m && (e[g] = null);
                        }
                    );
                }
            }, []),
            (0, i.jsx)(s.L.Provider, Object.assign({ value: a }, { children: t }), void 0)
        );
    });
function v(e) {
    return 'manager' in e ? [{ dragDropManager: e.manager }, !1] : [y(e.backend, e.context, e.options, e.debugMode), !e.context];
}
function y(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I(),
        n = arguments.length > 2 ? arguments[2] : void 0,
        i = arguments.length > 3 ? arguments[3] : void 0,
        r = t;
    return r[g] || (r[g] = { dragDropManager: (0, a.i)(e, t, n, i) }), r[g];
}
function I() {
    return void 0 !== n.g ? n.g : window;
}
