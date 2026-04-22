"use strict";
n.d(t, {
    $P: () => d,
    KE: () => a,
    U_: () => u,
    VJ: () => p,
    Y_: () => E,
    ZO: () => f,
    bc: () => I,
    di: () => T,
    kg: () => g,
    kk: () => m,
    lP: () => y,
    o8: () => A,
    vd: () => c,
    w: () => S,
    w$: () => i,
    xk: () => O,
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
    a = 9999,
    o = i(1970, 1, 1),
    l = [6, 0, 1, 2, 3, 4, 5],
    u = function (e) {
        return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0;
    },
    d = function (e) {
        return e instanceof Date;
    },
    c = function (e) {
        return d(e) && !isNaN(e.getTime());
    },
    _ = function (e) {
        return 60 * e.getTimezoneOffset() * 1e3;
    },
    f = function (e) {
        var t, n;
        return (t = e), (n = o), Math.round((t.getTime() - _(t) - (n.getTime() - _(n))) / 864e5);
    },
    E = function (e) {
        return new Date(o.getTime() + 864e5 * e);
    },
    h = function (e) {
        var t = e.getUTCMonth();
        return 1 === t && u(e.getUTCFullYear()) ? 29 : s[t];
    },
    p = function (e) {
        return l[e.getUTCDay()];
    },
    m = function (e, t) {
        var n = i(e, t + 1, 1);
        return [p(n), h(n)];
    },
    g = function (e, t) {
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
    A = function (e) {
        return new Date(e.getTime());
    },
    I = function (e) {
        for (var t = [], n = 0; n < e.length; n++) t.push(A(e[n]));
        return t;
    },
    T = function (e) {
        e.sort(function (e, t) {
            return e.getTime() - t.getTime();
        });
    },
    S = function (e, t) {
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
    y = function (e) {
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
    N = function (e, t) {
        return e.toLocaleString("sv-SE", { timeZone: t }).replace(" ", "T") + "Z";
    },
    O = function (e, t) {
        var n = new Date(N(e, Intl.DateTimeFormat().resolvedOptions().timeZone)),
            r = new Date(N(e, null != t ? t : "UTC")).getTime() - n.getTime();
        return new Date(e.getTime() - r);
    };
