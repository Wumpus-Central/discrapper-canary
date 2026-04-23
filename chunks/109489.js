"use strict";
function r(e) {
    return (
        "Minified Redux error #" +
        e +
        "; visit https://redux.js.org/Errors?code=" +
        e +
        " for the full message or use the non-minified dev environment for full errors. "
    );
}
n.d(t, { y$: () => o }), n(58616);
var i = ("function" == typeof Symbol && Symbol.observable) || "@@observable",
    s = function () {
        return Math.random().toString(36).substring(7).split("").join(".");
    },
    a = {
        INIT: "@@redux/INIT" + s(),
        REPLACE: "@@redux/REPLACE" + s(),
        PROBE_UNKNOWN_ACTION: function () {
            return "@@redux/PROBE_UNKNOWN_ACTION" + s();
        },
    };
function o(e, t, n) {
    if (
        ("function" == typeof t && "function" == typeof n) ||
        ("function" == typeof n && "function" == typeof arguments[3])
    )
        throw Error(r(0));
    if (("function" == typeof t && void 0 === n && ((n = t), (t = void 0)), void 0 !== n)) {
        if ("function" != typeof n) throw Error(r(1));
        return n(o)(e, t);
    }
    if ("function" != typeof e) throw Error(r(2));
    var s,
        l = e,
        u = t,
        c = [],
        d = c,
        _ = !1;
    function f() {
        d === c && (d = c.slice());
    }
    function p() {
        if (_) throw Error(r(3));
        return u;
    }
    function h(e) {
        if ("function" != typeof e) throw Error(r(4));
        if (_) throw Error(r(5));
        var t = !0;
        return (
            f(),
            d.push(e),
            function () {
                if (t) {
                    if (_) throw Error(r(6));
                    (t = !1), f();
                    var n = d.indexOf(e);
                    d.splice(n, 1), (c = null);
                }
            }
        );
    }
    function E(e) {
        if (
            !(function (e) {
                if ("object" != typeof e || null === e) return !1;
                for (var t = e; null !== Object.getPrototypeOf(t); ) t = Object.getPrototypeOf(t);
                return Object.getPrototypeOf(e) === t;
            })(e)
        )
            throw Error(r(7));
        if (void 0 === e.type) throw Error(r(8));
        if (_) throw Error(r(9));
        try {
            (_ = !0), (u = l(u, e));
        } finally {
            _ = !1;
        }
        for (var t = (c = d), n = 0; n < t.length; n++) (0, t[n])();
        return e;
    }
    return (
        E({ type: a.INIT }),
        ((s = {
            dispatch: E,
            subscribe: h,
            getState: p,
            replaceReducer: function (e) {
                if ("function" != typeof e) throw Error(r(10));
                (l = e), E({ type: a.REPLACE });
            },
        })[i] = function () {
            var e;
            return (
                ((e = {
                    subscribe: function (e) {
                        if ("object" != typeof e || null === e) throw Error(r(11));
                        function t() {
                            e.next && e.next(p());
                        }
                        return t(), { unsubscribe: h(t) };
                    },
                })[i] = function () {
                    return this;
                }),
                e
            );
        }),
        s
    );
}
