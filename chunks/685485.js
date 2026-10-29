function n() {
    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
    return function () {
        for (var e = arguments.length, r = Array(e), n = 0; n < e; n++) r[n] = arguments[n];
        for (let e of t) "function" == typeof e && e(...r);
    };
}
r.d(t, { c: () => n });
