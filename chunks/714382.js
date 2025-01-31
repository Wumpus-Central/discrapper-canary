function i(e) {
    return 'Minified Redux error #' + e + '; visit https://redux.js.org/Errors?code=' + e + ' for the full message or use the non-minified dev environment for full errors. ';
}
n.d(t, { MT: () => l }), n(155831);
var r = (function () {
        return ('function' == typeof Symbol && Symbol.observable) || '@@observable';
    })(),
    a = function () {
        return Math.random().toString(36).substring(7).split('').join('.');
    },
    s = {
        INIT: '@@redux/INIT' + a(),
        REPLACE: '@@redux/REPLACE' + a(),
        PROBE_UNKNOWN_ACTION: function () {
            return '@@redux/PROBE_UNKNOWN_ACTION' + a();
        }
    };
function o(e) {
    if ('object' != typeof e || null === e) return !1;
    for (var t = e; null !== Object.getPrototypeOf(t); ) t = Object.getPrototypeOf(t);
    return Object.getPrototypeOf(e) === t;
}
function l(e, t, n) {
    if (('function' == typeof t && 'function' == typeof n) || ('function' == typeof n && 'function' == typeof arguments[3])) throw Error(i(0));
    if (('function' == typeof t && void 0 === n && ((n = t), (t = void 0)), void 0 !== n)) {
        if ('function' != typeof n) throw Error(i(1));
        return n(l)(e, t);
    }
    if ('function' != typeof e) throw Error(i(2));
    var a,
        u = e,
        c = t,
        d = [],
        f = d,
        _ = !1;
    function p() {
        f === d && (f = d.slice());
    }
    function h() {
        if (_) throw Error(i(3));
        return c;
    }
    function m(e) {
        if ('function' != typeof e) throw Error(i(4));
        if (_) throw Error(i(5));
        var t = !0;
        return (
            p(),
            f.push(e),
            function () {
                if (t) {
                    if (_) throw Error(i(6));
                    (t = !1), p();
                    var n = f.indexOf(e);
                    f.splice(n, 1), (d = null);
                }
            }
        );
    }
    function g(e) {
        if (!o(e)) throw Error(i(7));
        if (void 0 === e.type) throw Error(i(8));
        if (_) throw Error(i(9));
        try {
            (_ = !0), (c = u(c, e));
        } finally {
            _ = !1;
        }
        for (var t = (d = f), n = 0; n < t.length; n++) (0, t[n])();
        return e;
    }
    function E(e) {
        if ('function' != typeof e) throw Error(i(10));
        (u = e), g({ type: s.REPLACE });
    }
    function v() {
        var e,
            t = m;
        return (
            ((e = {
                subscribe: function (e) {
                    if ('object' != typeof e || null === e) throw Error(i(11));
                    function n() {
                        e.next && e.next(h());
                    }
                    return n(), { unsubscribe: t(n) };
                }
            })[r] = function () {
                return this;
            }),
            e
        );
    }
    return (
        g({ type: s.INIT }),
        ((a = {
            dispatch: g,
            subscribe: m,
            getState: h,
            replaceReducer: E
        })[r] = v),
        a
    );
}
