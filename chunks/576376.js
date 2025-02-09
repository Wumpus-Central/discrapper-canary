function i(e) {
    let t;
    let n = !1;
    return function () {
        for (var i = arguments.length, r = Array(i), a = 0; a < i; a++) r[a] = arguments[a];
        return n || ((n = !0), (t = e(...r))), t;
    };
}
n.d(t, { h: () => i }), n(47120);
