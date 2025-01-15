function i(e) {
    let t;
    let n = !1;
    return function () {
        for (var i = arguments.length, r = Array(i), s = 0; s < i; s++) r[s] = arguments[s];
        return !n && ((n = !0), (t = e(...r))), t;
    };
}
n.d(t, {
    h: function () {
        return i;
    }
}),
    n(47120);
