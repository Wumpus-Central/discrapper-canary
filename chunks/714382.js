function r(e) {
    return (
        "Minified Redux error #" +
        e +
        "; visit https://redux.js.org/Errors?code=" +
        e +
        " for the full message or use the non-minified dev environment for full errors. "
    );
}
n.d(t, { MT: () => l }), n(183759);
var i = (function () {
        return ("function" == typeof Symbol && Symbol.observable) || "@@observable";
    })(),
    a = function () {
        return Math.random().toString(36).substring(7).split("").join(".");
    },
    o = {
        INIT: "@@redux/INIT" + a(),
        REPLACE: "@@redux/REPLACE" + a(),
        PROBE_UNKNOWN_ACTION: function () {
            return "@@redux/PROBE_UNKNOWN_ACTION" + a();
        },
    };
function s(e) {
    if ("object" != typeof e || null === e) return !1;
    for (var t = e; null !== Object.getPrototypeOf(t); ) t = Object.getPrototypeOf(t);
    return Object.getPrototypeOf(e) === t;
}
function l(e, t, n) {
    if (
        ("function" == typeof t && "function" == typeof n) ||
        ("function" == typeof n && "function" == typeof arguments[3])
    )
        throw Error(r(0));
    if (("function" == typeof t && void 0 === n && ((n = t), (t = void 0)), void 0 !== n)) {
        if ("function" != typeof n) throw Error(r(1));
        return n(l)(e, t);
    }
    if ("function" != typeof e) throw Error(r(2));
    var a,
        c = e,
        u = t,
        d = [],
        f = d,
        p = !1;
    function _() {
        f === d && (f = d.slice());
    }
    function m() {
        if (p) throw Error(r(3));
        return u;
    }
    function h(e) {
        if ("function" != typeof e) throw Error(r(4));
        if (p) throw Error(r(5));
        var t = !0;
        return (
            _(),
            f.push(e),
            function () {
                if (t) {
                    if (p) throw Error(r(6));
                    (t = !1), _();
                    var n = f.indexOf(e);
                    f.splice(n, 1), (d = null);
                }
            }
        );
    }
    function g(e) {
        if (!s(e)) throw Error(r(7));
        if (void 0 === e.type) throw Error(r(8));
        if (p) throw Error(r(9));
        try {
            (p = !0), (u = c(u, e));
        } finally {
            p = !1;
        }
        for (var t = (d = f), n = 0; n < t.length; n++) (0, t[n])();
        return e;
    }
    function E(e) {
        if ("function" != typeof e) throw Error(r(10));
        (c = e), g({ type: o.REPLACE });
    }
    function b() {
        var e,
            t = h;
        return (
            ((e = {
                subscribe: function (e) {
                    if ("object" != typeof e || null === e) throw Error(r(11));
                    function n() {
                        e.next && e.next(m());
                    }
                    return n(), { unsubscribe: t(n) };
                },
            })[i] = function () {
                return this;
            }),
            e
        );
    }
    return (
        g({ type: o.INIT }),
        ((a = {
            dispatch: g,
            subscribe: h,
            getState: m,
            replaceReducer: E,
        })[i] = b),
        a
    );
}
