"use strict";
n.d(t, {
    $P: () => d,
    KE: () => o,
    U_: () => c,
    VJ: () => g,
    Y_: () => m,
    ZO: () => h,
    bc: () => S,
    di: () => y,
    kg: () => I,
    kk: () => A,
    lP: () => N,
    o8: () => T,
    vd: () => _,
    w: () => v,
    w$: () => i,
    xk: () => R,
});
var r = n(391898),
    i = function (e, t, n, r, i, s) {
        return (
            void 0 === r && (r = 0),
            void 0 === i && (i = 0),
            void 0 === s && (s = 0),
            new Date(Date.UTC(e, t - 1, n, r, i, s))
        );
    },
    s = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    a = 864e5,
    o = 9999,
    l = i(1970, 1, 1),
    u = [6, 0, 1, 2, 3, 4, 5],
    c = function (e) {
        return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0;
    },
    d = function (e) {
        return e instanceof Date;
    },
    _ = function (e) {
        return d(e) && !isNaN(e.getTime());
    },
    f = function (e) {
        return 60 * e.getTimezoneOffset() * 1e3;
    },
    p = function (e, t) {
        return Math.round((e.getTime() - f(e) - (t.getTime() - f(t))) / a);
    },
    h = function (e) {
        return p(e, l);
    },
    m = function (e) {
        return new Date(l.getTime() + e * a);
    },
    E = function (e) {
        var t = e.getUTCMonth();
        return 1 === t && c(e.getUTCFullYear()) ? 29 : s[t];
    },
    g = function (e) {
        return u[e.getUTCDay()];
    },
    A = function (e, t) {
        var n = i(e, t + 1, 1);
        return [g(n), E(n)];
    },
    I = function (e, t) {
        return (
            (t = t || e),
            new Date(
                Date.UTC(
                    e.getUTCFullYear(),
                    e.getUTCMonth(),
                    e.getUTCDate(),
                    t.getHours(),
                    t.getMinutes(),
                    t.getSeconds(),
                    t.getMilliseconds(),
                ),
            )
        );
    },
    T = function (e) {
        return new Date(e.getTime());
    },
    S = function (e) {
        for (var t = [], n = 0; n < e.length; n++) t.push(T(e[n]));
        return t;
    },
    y = function (e) {
        e.sort(function (e, t) {
            return e.getTime() - t.getTime();
        });
    },
    v = function (e, t) {
        void 0 === t && (t = !0);
        var n = new Date(e);
        return [
            (0, r.CF)(n.getUTCFullYear().toString(), 4, "0"),
            (0, r.CF)(n.getUTCMonth() + 1, 2, "0"),
            (0, r.CF)(n.getUTCDate(), 2, "0"),
            "T",
            (0, r.CF)(n.getUTCHours(), 2, "0"),
            (0, r.CF)(n.getUTCMinutes(), 2, "0"),
            (0, r.CF)(n.getUTCSeconds(), 2, "0"),
            t ? "Z" : "",
        ].join("");
    },
    N = function (e) {
        var t = /^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z?)?$/.exec(e);
        if (!t) throw Error("Invalid UNTIL value: ".concat(e));
        return new Date(
            Date.UTC(
                parseInt(t[1], 10),
                parseInt(t[2], 10) - 1,
                parseInt(t[3], 10),
                parseInt(t[5], 10) || 0,
                parseInt(t[6], 10) || 0,
                parseInt(t[7], 10) || 0,
            ),
        );
    },
    C = function (e, t) {
        return e.toLocaleString("sv-SE", { timeZone: t }).replace(" ", "T") + "Z";
    },
    R = function (e, t) {
        var n = new Date(C(e, Intl.DateTimeFormat().resolvedOptions().timeZone)),
            r = new Date(C(e, null != t ? t : "UTC")).getTime() - n.getTime();
        return new Date(e.getTime() - r);
    };
