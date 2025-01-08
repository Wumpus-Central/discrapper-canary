function i(e) {
    return 'Minified Redux error #' + e + '; visit https://redux.js.org/Errors?code=' + e + ' for the full message or use the non-minified dev environment for full errors. ';
}
r.d(n, {
    MT: function () {
        return _;
    }
});
var a = (function () {
        return ('function' == typeof Symbol && Symbol.observable) || '@@observable';
    })(),
    s = function () {
        return Math.random().toString(36).substring(7).split('').join('.');
    },
    o = {
        INIT: '@@redux/INIT' + s(),
        REPLACE: '@@redux/REPLACE' + s(),
        PROBE_UNKNOWN_ACTION: function () {
            return '@@redux/PROBE_UNKNOWN_ACTION' + s();
        }
    };
function l(e) {
    if ('object' != typeof e || null === e) return !1;
    for (var n = e; null !== Object.getPrototypeOf(n); ) n = Object.getPrototypeOf(n);
    return Object.getPrototypeOf(e) === n;
}
function u(e) {
    return 'function' == typeof e.constructor ? e.constructor.name : null;
}
function c(e) {
    return e instanceof Error || ('string' == typeof e.message && e.constructor && 'number' == typeof e.constructor.stackTraceLimit);
}
function d(e) {
    return e instanceof Date || ('function' == typeof e.toDateString && 'function' == typeof e.getDate && 'function' == typeof e.setDate);
}
function f(e) {
    var n = typeof e;
    return n;
}
function _(e, n, r) {
    if (('function' == typeof n && 'function' == typeof r) || ('function' == typeof r && 'function' == typeof arguments[3])) throw Error(i(0));
    if (('function' == typeof n && void 0 === r && ((r = n), (n = void 0)), void 0 !== r)) {
        if ('function' != typeof r) throw Error(i(1));
        return r(_)(e, n);
    }
    if ('function' != typeof e) throw Error(i(2));
    var s,
        u = e,
        c = n,
        d = [],
        f = d,
        h = !1;
    function p() {
        f === d && (f = d.slice());
    }
    function m() {
        if (h) throw Error(i(3));
        return c;
    }
    function g(e) {
        if ('function' != typeof e) throw Error(i(4));
        if (h) throw Error(i(5));
        var n = !0;
        return (
            p(),
            f.push(e),
            function () {
                if (!!n) {
                    if (h) throw Error(i(6));
                    (n = !1), p();
                    var r = f.indexOf(e);
                    f.splice(r, 1), (d = null);
                }
            }
        );
    }
    function E(e) {
        if (!l(e)) throw Error(i(7));
        if (void 0 === e.type) throw Error(i(8));
        if (h) throw Error(i(9));
        try {
            (h = !0), (c = u(c, e));
        } finally {
            h = !1;
        }
        for (var n = (d = f), r = 0; r < n.length; r++) (0, n[r])();
        return e;
    }
    function v(e) {
        if ('function' != typeof e) throw Error(i(10));
        (u = e), E({ type: o.REPLACE });
    }
    function I() {
        var e,
            n = g;
        return (
            ((e = {
                subscribe: function (e) {
                    if ('object' != typeof e || null === e) throw Error(i(11));
                    function r() {
                        e.next && e.next(m());
                    }
                    return r(), { unsubscribe: n(r) };
                }
            })[a] = function () {
                return this;
            }),
            e
        );
    }
    return (
        E({ type: o.INIT }),
        ((s = {
            dispatch: E,
            subscribe: g,
            getState: m,
            replaceReducer: v
        })[a] = I),
        s
    );
}
function h(e) {
    Object.keys(e).forEach(function (n) {
        var r = e[n];
        if (void 0 === r(void 0, { type: o.INIT })) throw Error(i(12));
        if (void 0 === r(void 0, { type: o.PROBE_UNKNOWN_ACTION() })) throw Error(i(13));
    });
}
function p(e, n) {
    return function () {
        return n(e.apply(this, arguments));
    };
}
function m() {
    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
    return 0 === n.length
        ? function (e) {
              return e;
          }
        : 1 === n.length
          ? n[0]
          : n.reduce(function (e, n) {
                return function () {
                    return e(n.apply(void 0, arguments));
                };
            });
}
